import { BaseUtils } from 'braft-utils'

let resizeEventHandlers = []
let responsiveHelperInited = false
let debouce = false

export default {

  resolve (eventHandler) {
    let id = BaseUtils.UniqueIndex()
    resizeEventHandlers.push({ id, eventHandler })
    return id
  },

  unresolve (id) {
    resizeEventHandlers = resizeEventHandlers.filter(item => item.id !== id)
  }

}

if (!responsiveHelperInited && typeof window === 'object') {

  window.addEventListener('resize', (event) => {
    clearTimeout(debouce)
    debouce = setTimeout(() => {
      resizeEventHandlers.map((item) => {
        typeof item.eventHandler === 'function' && item.eventHandler(event)
      })
      debouce = false
    }, 100)
  })

  responsiveHelperInited = true

}