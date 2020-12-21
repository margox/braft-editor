import {
  Editor,
  EditorProps as DraftEditorProps,
  EditorState as _EditorState,
  RawDraftContentState,
} from 'draft-js'
import * as Immutable from 'immutable'
import * as React from 'react'

export type EditorState = _EditorState & {
  [key: string]: any;
  setConvertOptions(option?: Object): void;
  toHTML(option?: Object): string;
  toRAW(noStringify?: boolean): RawDraftContentState | string;
  toText(): string;
  isEmpty(): boolean;
};

export { DraftEditorProps };

export interface BraftEditorProps {
  value?: EditorState;
  defaultValue?: EditorState;
  placeholder?: string;
  id?: string,
  editorId?: string,
  readOnly?: boolean;
  language?:
    | 'zh'
    | 'zh-hant'
    | 'en'
    | 'tr'
    | 'ru'
    | 'jpn'
    | 'kr'
    | 'pl'
    | 'fr'
    | 'vi-vn'
    | ((languages: any, context: any) => any);
  controls?: ControlType[];
  excludeControls?: BuiltInControlType[];
  extendControls?: ExtendControlType[];
  componentBelowControlBar?: React.ReactNode;
  media?: MediaType;
  imageControls?: ImageControlType[];
  imageResizable?: boolean;
  imageEqualRatio?: boolean;
  headings?: string[];
  colors?: string[];
  fontSizes?: number[];
  fontFamilies?: { name: string; family: string }[];
  lineHeights?: number[];
  textAligns?: ('left' | 'center' | 'right' | 'justify')[];
  letterSpacings?: number[];
  emojis?: string[];
  draftProps?: DraftEditorProps;
  blockRenderMap?: Immutable.Map<any, any> | Function;
  blockRendererFn?: Function;
  converts?: object;
  hooks?: HooksType;
  textBackgroundColor?: boolean;
  allowInsertLinkText?: boolean;
  defaultLinkTarget?: string;
  stripPastedStyles?: boolean;
  fixPlaceholder?: boolean;
  className?: string;
  style?: React.CSSProperties;
  controlBarClassName?: string;
  controlBarStyle?: React.CSSProperties;
  contentClassName?: string;
  contentStyle?: React.CSSProperties;
  onChange?: (editorState: EditorState) => void;
  onFocus?: Function;
  onBlur?: Function;
  onTab?: Function;
  onDelete?: Function;
  onSave?: Function;
  onFullscreen?: Function;
  handlePastedFiles?: Function;
  handleDroppedFiles?: Function;
  handlePastedText?: Function;
  handleBeforeInput?: Function;
  handleReturn?: Function;
  handleKeyCommand?: Function;
}

export default class BraftEditor extends React.Component<BraftEditorProps> {
  static createEditorState(
    content: string | any,
    options?: object
  ): EditorState;
  static use(extension: object | object[]): void;
  undo(): void;
  redo(): void;
  clearEditorContent(): void;
  forceRender(): void;
  setValue(editorState: EditorState): void;
  getValue(): EditorState;
  getFinderInstance(): any;
  getDraftInstance(): Editor;
}

export type ControlType =
  | BuiltInControlType
  | {
  key: BuiltInControlType;
  title?: string;
  text?: string | React.ReactNode;
}
  | ExtendControlType;

export type BuiltInControlType =
  | 'blockquote'
  | 'bold'
  | 'code'
  | 'clear'
  | 'emoji'
  | 'font-family'
  | 'font-size'
  | 'fullscreen'
  | 'headings'
  | 'hr'
  | 'italic'
  | 'letter-spacing'
  | 'line-height'
  | 'link'
  | 'list-ol'
  | 'list-ul'
  | 'media'
  | 'redo'
  | 'remove-styles'
  | 'separator'
  | 'strike-through'
  | 'superscript'
  | 'subscript'
  | 'text-align'
  | 'text-color'
  | 'text-indent'
  | 'underline'
  | 'undo'
  | 'table';

export type ExtendControlType =
  'separator'
  | {
  key: string;
  type: 'button';
  title?: string;
  className?: string;
  html?: string | null;
  text?: string | React.ReactNode;
  onClick?: Function;
  disabled?: boolean;
}
  | {
  key: string;
  type: 'dropdown';
  title?: string;
  className?: string;
  html?: string | null;
  text?: string | React.ReactNode;
  showArrow?: boolean;
  arrowActive?: boolean;
  autoHide?: boolean;
  component: React.ReactNode;
  disabled?: boolean;
}
  | {
  key: string;
  type: 'modal';
  title?: string;
  className?: string;
  html?: string | null;
  text?: string | React.ReactNode;
  onClick?: Function;
  disabled?: boolean;
  modal: {
    id: string;
    title?: string;
    className?: string;
    width?: number;
    height?: number;
    showFooter?: boolean;
    showCancel?: boolean;
    showConfirm?: boolean;
    confirmable?: boolean;
    showClose?: boolean;
    closeOnBlur?: boolean;
    closeOnConfirm?: boolean;
    closeOnCancel?: boolean;
    cancelText?: string;
    confirmText?: string;
    bottomText?: React.ReactNode;
    onConfirm?: Function;
    onCancel?: Function;
    onClose?: Function;
    onBlur?: Function;
    children: React.ReactNode;
  };
}
  | {
  key: string;
  type: 'component';
  component: React.ReactNode;
};

export type MediaType = {
  items?: any[],
  uploadFn?: (
    params: {
      file: File;
      progress: (progress: number) => void;
      libraryId: string;
      success: (
        res: {
          url: string;
          meta?: {
            id?: string;
            title?: string;
            alt?: string;
            loop?: boolean;
            autoPlay?: boolean;
            controls?: boolean;
            poster?: string;
          };
        }
      ) => void;
      error: (
        err: {
          msg: string;
        }
      ) => void;
    }
  ) => void;
  validateFn?: (file: File) => boolean | PromiseLike<any>;
  accepts?: {
    image?: string | false;
    video?: string | false;
    audio?: string | false;
  };
  externals?: {
    image?: boolean;
    video?: boolean;
    audio?: boolean;
    embed?: boolean;
  };
  onInsert?: Function;
  onChange?: Function;
  pasteImage?: boolean;
};

export type ImageControlType =
  | 'float-left'
  | 'float-right'
  | 'align-left'
  | 'align-center'
  | 'align-right'
  | 'link'
  | 'size'
  | 'remove'
  | {
  text?: string;
  render?: (mediaData: any) => void;
  onClick?: (block: any) => void;
};

export type HooksType = {
  ['toggle-link']?: HookFunc,
  ['open-braft-finder']?: HookFunc,
  ['toggle-inline-style']?: HookFunc,
  ['change-block-type']?: HookFunc,
  ['exec-editor-command']?: HookFunc,
  ['insert-emoji']?: HookFunc,
  ['toggle-font-family']?: HookFunc,
  ['toggle-font-size']?: HookFunc,
  ['toggle-letter-spacing']?: HookFunc,
  ['toggle-line-height']?: HookFunc,
  ['toggle-text-alignment']?: HookFunc,
  ['toggle-text-color']?: HookFunc,
  ['toggle-text-background-color']?: HookFunc,
  ['select-medias']?: HookFunc,
  ['deselect-medias']?: HookFunc,
  ['remove-medias']?: HookFunc,
  ['insert-medias']?: HookFunc,
  ['select-files']?: HookFunc,
  ['set-image-link-target']?: HookFunc,
  ['set-image-link']?: HookFunc,
  ['set-image-size']?: HookFunc,
  ['set-image-float']?: HookFunc,
  ['set-image-alignment']?: HookFunc,
};

export type HookFunc = (any: any) => any;

export type HookType =
  | 'toggle-link'
  | 'open-braft-finder'
  | 'toggle-inline-style'
  | 'change-block-type'
  | 'exec-editor-command'
  | 'insert-emoji'
  | 'toggle-font-family'
  | 'toggle-font-size'
  | 'toggle-letter-spacing'
  | 'toggle-line-height'
  | 'toggle-text-alignment'
  | 'toggle-text-color'
  | 'toggle-text-background-color'
  | 'select-medias'
  | 'deselect-medias'
  | 'remove-medias'
  | 'insert-medias'
  | 'select-files';
