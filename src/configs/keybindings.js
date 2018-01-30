import { getDefaultKeyBinding, KeyBindingUtil } from 'draft-js'

// TODO
// 允许自定义的快捷键设置

export default (event) => {

  if (event.keyCode === 83 && (KeyBindingUtil.hasCommandModifier(event) || KeyBindingUtil.isCtrlKeyCommand(event))) {
    return 'braft-save'
  }

  return getDefaultKeyBinding(event);

}
