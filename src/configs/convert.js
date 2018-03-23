import React from 'react'
import { blocks } from 'configs/maps'
import { getHexColor } from 'helpers/colors'

const blockTypes = Object.keys(blocks)
const blockNames = blockTypes.map(key => blocks[key])

const convertAtomicBlock = (block, contentState) => {

  const contentBlock = contentState.getBlockForKey(block.key)
  const entityKey = contentBlock.getEntityAt(0)
  const entity = contentState.getEntity(entityKey)
  const mediaType = entity.getType().toLowerCase()

  let { float, alignment } = block.data
  let { url, link, link_target, width, height } = entity.getData()

  if (mediaType === 'image') {

    let imageWrapStyle = {}
    let styledClassName = ''

    if (float) {
      imageWrapStyle.float = float
      styledClassName += ' float-' + float
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment
      styledClassName += ' align-' + alignment
    }

    if (link) {
      return (
        <div className={"media-wrap image-wrap" + styledClassName} style={imageWrapStyle}>
          <a style={{display:'inline-block'}} href={link} target={link_target}>
            <img src={url} width={width} height={height} style={{width, height}} />
          </a>
        </div>
      )
    } else {
      return (
        <div className={"media-wrap image-wrap" + styledClassName} style={imageWrapStyle}>
          <img src={url} width={width} height={height} style={{width, height}}/>
        </div>
      )
    }

  } else if (mediaType === 'audio') {
    return <div className="media-wrap audio-wrap"><audio controls src={url} /></div>
  } else if (mediaType === 'video') {
    return <div className="media-wrap video-wrap"><video controls src={url} width={width} height={height} /></div>
  } else if (mediaType === 'hr') {
    return <hr></hr>
  } else {
    return <p></p>
  }

}

const styleToHTML = (props) => (style) => {

  style = style.toLowerCase()

  if (style === 'strikethrough') {
    return <braftspan style={{textDecoration: 'line-through'}} isbrafttag="1"/>
  } else if (style === 'superscript') {
    return <sup/>
  } else if (style === 'subscript') {
    return <sub/>
  } else if (style.indexOf('color-') === 0) {
    return <braftspan style={{color: '#' + style.split('-')[1]}} isbrafttag="1"/>
  } else if (style.indexOf('bgcolor-') === 0) {
    return <braftspan style={{backgroundColor: '#' + style.split('-')[1]}} isbrafttag="1"/>
  } else if (style.indexOf('fontsize-') === 0) {
    return <braftspan style={{fontSize: style.split('-')[1] + 'px'}} isbrafttag="1"/>
  } else if (style.indexOf('lineheight-') === 0) {
    return <braftspan style={{lineHeight: style.split('-')[1]}} isbrafttag="1"/> 
  } else if (style.indexOf('letterspacing-') === 0) {
    return <braftspan style={{letterSpacing: style.split('-')[1] + 'px'}} isbrafttag="1"/>
  } else if (style.indexOf('indent-') === 0) {
    return <braftspan style={{paddingLeft: style.split('-')[1] + 'px', paddingRight: style.split('-')[1] + 'px' }} isbrafttag="1"/>
  } else if (style.indexOf('fontfamily-') === 0) {
    let fontFamily = props.fontFamilies.find((item) => item.name.toLowerCase() === style.split('-')[1])
    if (!fontFamily) return
    return <braftspan style={{fontFamily: fontFamily.family}} isbrafttag="1"/>
  }

}

const blockToHTML = (contentState) => (block) => {

  let result = null
  let blockStyle = ""

  const blockType = block.type.toLowerCase()
  const { textAlign } = block.data

  if (textAlign) {
    blockStyle = ` style="text-align:${textAlign};"`
  }

  if (blockType === 'atomic') {
    return convertAtomicBlock(block, contentState)
  } else if (blockType === 'code-block') {

    const previousBlock = contentState.getBlockBefore(block.key)
    const nextBlock = contentState.getBlockAfter(block.key)
    const previousBlockType = previousBlock && previousBlock.getType()
    const nextBlockType = nextBlock && nextBlock.getType()
    const codeBreakLine = block.text ? '' : '<br>'

    if (previousBlockType === 'code-block' && nextBlockType === 'code-block') {
      return {
        start: `<code><div>${codeBreakLine}`,
        end: '</div></code>'
      }
    } else if (previousBlockType === 'code-block') {
      return {
        start: `<code><div>${codeBreakLine}`,
        end: '</div></code></pre>'
      }
    } else if (nextBlockType === 'code-block') {
      return {
        start: `<pre><code><div>${codeBreakLine}`,
        end: '</div></code>'
      }
    } else {
      return {
        start: `<pre><code><div>${codeBreakLine}`,
        end: '</div></code></pre>'
      }
    }

  } else if (blocks[blockType]) {
    return {
      start: `<${blocks[blockType]}${blockStyle}>`,
      end: `</${blocks[blockType]}>`
    }
  } else if (blockType === 'unordered-list-item') {
    return {
      start: `<li${blockStyle}>`,
      end: '</li>',
      nestStart: '<ul>',
      nestEnd: '</ul>'
    }
  } else if (blockType === 'ordered-list-item') {
    return {
      start: `<li${blockStyle}>`,
      end: '</li>',
      nestStart: '<ol>',
      nestEnd: '</ol>'
    }
  }

}

const entityToHTML = (entity, originalText) => {

  let result = originalText
  const entityType = entity.type.toLowerCase()

  if (entityType === 'link') {
    return <a href={entity.data.href} target={entity.data.target}>{originalText}</a>
  } else if (entityType === 'color') {
    return <span style={{color:entity.data.color}}>{originalText}</span>
  } else if (entityType === 'bg-color') {
    return <span style={{backgroundColor:entity.data.color}}>{originalText}</span>
  }

}


const htmlToStyle = (props) => (nodeName, node, currentStyle) => {

  if (!node.style) {
    return currentStyle
  }

  let newStyle = currentStyle

  for (let i = 0; i < node.style.length; i++) {
    if (nodeName === 'span' && node.style[i] === 'color') {
      let color = getHexColor(node.style.color)
      newStyle = color ? newStyle.add('COLOR-' + color.replace('#', '').toUpperCase()) : newStyle
    } else if (nodeName === 'span' && node.style[i] === 'background-color') {
      let color = getHexColor(node.style.backgroundColor)
      newStyle = color ? newStyle.add('BGCOLOR-' + color.replace('#', '').toUpperCase()) : newStyle
    } else if (nodeName === 'sup') {
      newStyle = newStyle.add('SUPERSCRIPT')
    } else if (nodeName === 'sub') {
      newStyle = newStyle.add('SUBSCRIPT')
    } else if (nodeName === 'span' && node.style[i] === 'font-size') {
      newStyle = newStyle.add('FONTSIZE-' + parseInt(node.style.fontSize, 10))
    } else if (nodeName === 'span' && node.style[i] === 'line-height') {
      newStyle = newStyle.add('LINEHEIGHT-' + node.style.lineHeight)
    } else if (nodeName === 'span' && node.style[i] === 'letter-spacing') {
      newStyle = newStyle.add('LETTERSPACING-' + parseInt(node.style.letterSpacing, 10))
    } else if (nodeName === 'span' && (node.style[i] === 'padding-left' || node.style[i] === 'padding-right')) {
      newStyle = newStyle.add('INDENT-' + parseInt(node.style.paddingLeft, 10))
    } else if (nodeName === 'span' && node.style[i] === 'text-decoration' && node.style.textDecoration === 'line-through') {
      newStyle = newStyle.add('STRIKETHROUGH')
    } else if (nodeName === 'span' && node.style[i] === 'font-family') {
      let fontFamily = props.fontFamilies.find((item) => item.family.toLowerCase() === node.style.fontFamily.toLowerCase())
      if (!fontFamily) continue;
      newStyle = newStyle.add('FONTFAMILY-' + fontFamily.name.toUpperCase())
    }
  }

  return newStyle

}

const htmlToEntity = (nodeName, node, createEntity) => {

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {
    let { href, target } = node
    return createEntity('LINK', 'MUTABLE',{ href, target })
  } else if (nodeName === 'audio') {
    return createEntity('AUDIO', 'IMMUTABLE',{ url: node.src }) 
  } else if (nodeName === 'video') {
    return createEntity('VIDEO', 'IMMUTABLE',{ url: node.src }) 
  } else if (nodeName === 'img') {

    let parentNode = node.parentNode
    let { src: url, width, height } = node
    width = width || 'auto'
    height = height || 'auto'

    let entityData = { url, width, height }

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.href
      entityData.link_target = parentNode.target
    }

    return createEntity('IMAGE', 'IMMUTABLE', entityData) 

  } else if (nodeName === 'hr') {
    return createEntity('HR', 'IMMUTABLE', {}) 
  }

}

const htmlToBlock = (nodeName, node) => {

  let nodeStyle = node.style || {}

  if (node.classList && node.classList.contains('media-wrap')) {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'img') {

    return {
      type: 'atomic',
      data: {
        float: nodeStyle.float,
        alignment: nodeStyle.textAlign
      }
    }

  } else if (nodeName === 'hr') {

    return {
      type: 'atomic',
      data: {}
    }

  } else if (nodeStyle.textAlign && blockNames.indexOf(nodeName) > -1) {

    return {
      type: blockTypes[blockNames.indexOf(nodeName)],
      data: {
        textAlign: nodeStyle.textAlign
      }
    }

  }

}

export const getToHTMLConfig = (props) => {

  return {
    styleToHTML: styleToHTML(props),
    entityToHTML: entityToHTML,
    blockToHTML: blockToHTML(props.contentState)
  }

}

export const getFromHTMLConfig = (props) => {

  return { 
    htmlToStyle: htmlToStyle(props),
    htmlToEntity,
    htmlToBlock 
  }

}

export const mergeStyledSpans = (htmlContent) => {

  // const result = htmlContent
  //   .replace(/" isbrafttag="1"><braftspan style="/g, ';')
  //   .replace(/(\<\/braftspan>)+/g, '</span>')
  //   .replace(/<braftspan/g, '<span')
  //   .replace(/" isbrafttag="1"/g, ';"')

  const result = htmlContent
    .replace(/<\/braftspan>/g, '</span>')
    .replace(/<braftspan/g, '<span')
    .replace(/" isbrafttag="1"/g, ';"')

  return result

}

export const convertCodeBlock = (htmlContent) => {

  const result = htmlContent
    .replace(/\<code\>\<div\>\<br\>\<\/div\>\<\/code\>/g, `<code><div></div></code>`)
    .replace(/\<pre\>\<code\>\<div\>/g, '<code><div>')
    .replace(/\<\/div\>\<\/code\>\<\/pre\>/g, '</div></code>')
    .replace(/\<code\>\<div\>/g, '<pre><code>')
    .replace(/\<\/div\>\<\/code\>/g, '</code></pre>')

  return result

}