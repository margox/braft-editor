const getStyleValue = (style) => style.split('-')[1]

export default (options) => (styles, block) => {

  const { fontFamilies, unitExportFn, customStyleFn } = options
  const output = customStyleFn ? customStyleFn(styles, block) : {}

  styles.forEach((style) => {

    if (style.startsWith('COLOR-')) {
      output.color = '#' + getStyleValue(style)
    } else if (style.startsWith('BGCOLOR-')) {
      output.backgroundColor = '#' + getStyleValue(style)
    } else if (style.startsWith('FONTSIZE-')) {
      output.fontSize = unitExportFn(getStyleValue(style), 'font-size', 'editor')
    } else if (style.startsWith('LINEHEIGHT-')) {
      output.lineHeight = unitExportFn(getStyleValue(style), 'line-height', 'editor')
    } else if (style.startsWith('LETTERSPACING-')) {
      output.letterSpacing = unitExportFn(getStyleValue(style), 'letter-spacing', 'editor')
    } else if (style.startsWith('TEXTINDENT-')) {
      output.textIndent = unitExportFn(getStyleValue(style), 'text-indent', 'editor')
    } else if (style.startsWith('FONTFAMILY-')) {
      output.fontFamily = (fontFamilies.find(item => item.name === getStyleValue(style)) || {}).family || ''
    }

  })

  return output

}