import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js'

// TODO
// Allow custom shortcut settings

export default (customKeyBindingFn) => (event) => {

  if (event.keyCode === 83 && (KeyBindingUtil.hasCommandModifier(event) || KeyBindingUtil.isCtrlKeyCommand(event))) {
    return 'braft-save'
  }

  if (customKeyBindingFn) {
    return customKeyBindingFn(event) || getDefaultKeyBinding(event)
  }

  return getDefaultKeyBinding(event)

}
