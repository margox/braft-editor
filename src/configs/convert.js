import React from 'react'
import { Entity } from 'draft-js'
import { blocks } from 'configs/maps'
import { getHexColor } from 'helpers/colors'

const convertAtomicBlock = (block, contentState) => {

  const contentBlock = contentState.getBlockForKey(block.key)
  const entityKey = contentBlock.getEntityAt(0)
  const entity = contentState.getEntity(entityKey)
  const mediaType = entity.getType().toLowerCase()

  let { float, alignment } = block.data
  let { url, link, link_target, width, height } = entity.getData()

  if (mediaType === 'image') {

    let imageWrapStyle = {}

    if (float) {
      imageWrapStyle.float = float
    } else if (alignment) {
      imageWrapStyle.textAlign = alignment
    }

    if (link) {
      return (
        <div className="media-wrap image-wrap" style={imageWrapStyle}>
          <a style={{display:'inline-block'}} href={link} target={link_target}>
            <img src={url} width={width} height={height} />
          </a>
        </div>
      )
    } else {
      return (
        <div className="media-wrap image-wrap" style={imageWrapStyle}>
          <img src={url} width={width} height={height} />
        </div>
      )
    }

  } else if (mediaType === 'audio') {
    return <div className="media-wrap audio-wrap"><audio controls src={url} /></div>
  } else if (mediaType === 'video') {
    return <div className="media-wrap video-wrap"><video controls src={url} width={width} height={height} /></div>
  } else {
    return <p></p>
  }

}

const styleToHTML = (props) => (style) => {

  style = style.toLowerCase()

  if (style === 'strikethrough') {
    return <span style={{textDecoration: 'line-through'}}/>
  } else if (style === 'superscript') {
    return <sup/>
  } else if (style === 'subscript') {
    return <sub/>
  } else if (style.indexOf('color-') === 0) {
    return <span style={{color: '#' + style.split('-')[1]}}/> 
  } else if (style.indexOf('bgcolor-') === 0) {
    return <span style={{backgroundColor: '#' + style.split('-')[1]}}/> 
  } else if (style.indexOf('fontsize-') === 0) {
    return <span style={{fontSize: style.split('-')[1] + 'px'}}/> 
  } else if (style.indexOf('fontfamily-') === 0) {
    let fontFamily = props.fontFamilies.find((item) => item.name.toLowerCase() === style.split('-')[1])
    return <span style={{fontFamily: fontFamily.family}}/> 
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
    return {
      start: `<pre><code${blockStyle}>`,
      end: '</code></pre>'
    }
  } else if (blocks[blockType]) {
    return {
      start: `<${blocks[blockType]}${blockStyle}>`,
      end: `</${blocks[blockType]}>`
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

export const getToHTMLConfig = (props) => {

  return {
    styleToHTML: styleToHTML(props),
    entityToHTML: entityToHTML,
    blockToHTML: blockToHTML(props.contentState)
  }

}


const htmlToStyle = (nodeName, node, currentStyle) => {

  if (nodeName === 'span' && node.style.color) {
    let color = getHexColor(node.style.color)
    return color ? currentStyle.add('COLOR-' + color.replace('#', '')) : currentStyle
  } else if (nodeName === 'span' && node.style.backgroundColor) {
    let color = getHexColor(node.style.color)
    return color ? currentStyle.add('BGCOLOR-' + color.replace('#', '')) : currentStyle
  } else if (nodeName === 'sup') {
    return currentStyle.add('SUPERSCRIPT')
  } else if (nodeName === 'sub') {
    return currentStyle.add('SUBSCRIPT')
  } else if (nodeName === 'span' && node.style.fontSize) {
    return currentStyle.add('FONTSIZE-' + parseInt(node.style.fontSize, 10))
  } else if (nodeName === 'span' && node.style.textDecoration === 'line-through') {
    return currentStyle.add('STRIKETHROUGH')
  } else {
    return currentStyle
  }

}

const htmlToEntity = (nodeName, node) => {

  if (nodeName === 'a' && !node.querySelectorAll('img').length) {

    let { href, target } = node
    return Entity.create('LINK', 'MUTABLE',{ href, target })

  } else if (nodeName === 'audio') {
    return Entity.create('AUDIO', 'IMMUTABLE',{ url: node.src }) 
  } else if (nodeName === 'video') {
    return Entity.create('VIDEO', 'IMMUTABLE',{ url: node.src }) 
  } else if (nodeName === 'img') {

    let parentNode = node.parentNode
    let { src:url, width, height } = node
    width = width || 'auto'
    height = height || 'auto'
    let entityData = { url, width, height }

    if (parentNode.nodeName.toLowerCase() === 'a') {
      entityData.link = parentNode.href
      entityData.link_target = parentNode.target
    }

    return Entity.create('IMAGE', 'IMMUTABLE', entityData) 

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

  } else if (nodeName === 'p' && nodeStyle.textAlign) {

    return {
      type: 'unstyled',
      data: {
        textAlign: nodeStyle.textAlign
      }
    }

  }

}

export const getFromHTMLConfig = (props) => {
  return { htmlToStyle, htmlToEntity, htmlToBlock }
}