import { CompositeDecorator } from 'draft-js';
import CombineDecorators from 'draft-js-multidecorators';
import Immutable from 'immutable';

import { getExtensionDecorators } from 'helpers/extension';
import Link from './Link';

const KEY_SEPARATOR = '-';

CombineDecorators.prototype.getDecorations = function getDecorations(
  block,
  contentState,
) {
  const decorations = Array(block.getText().length).fill(null);

  this.decorators.forEach((decorator, i) => {
    decorator.getDecorations(block, contentState).forEach((key, offset) => {
      if (!key) {
        return;
      }
      decorations[offset] = i + KEY_SEPARATOR + key;
    });
  });

  return Immutable.List(decorations);
};

const builtinDecorators = [
  {
    type: 'entity',
    decorator: {
      key: 'LINK',
      component: Link,
    },
  },
];

const createStrategy = (type) => (block, callback, contentState) => {
  block.findEntityRanges((character) => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null && contentState.getEntity(entityKey).getType() === type
    );
  }, callback);
};

export default (editorId) => {
  const extensionDecorators = getExtensionDecorators(editorId);

  const entityDecorators = [
    ...builtinDecorators,
    ...extensionDecorators.filter((item) => item.type === 'entity'),
  ];

  const strategyDecorators = extensionDecorators.filter(
    (item) => item.type === 'strategy',
  );
  const classDecorators = extensionDecorators.filter(
    (item) => item.type === 'class',
  );

  return new CombineDecorators([
    // combine decorator classes
    ...classDecorators.map((item) => item.decorator),
    // combine decorators created with strategy
    new CompositeDecorator(strategyDecorators.map((item) => item.decorator)),
    // combine decorators for entities
    new CompositeDecorator(
      entityDecorators.map((item) => ({
        strategy: createStrategy(item.decorator.key),
        component: item.decorator.component,
      })),
    ),
  ]);
};
