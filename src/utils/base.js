export const UniqueIndex = () => {

  if (isNaN(window.__BRAFT_UNIQUE_INDEX__)) {
    window.__BRAFT_UNIQUE_INDEX__ = 1
  } else {
    window.__BRAFT_UNIQUE_INDEX__ += 1
  }

  return window.__BRAFT_UNIQUE_INDEX__ 

}

export const isPromise = (obj) => {

  return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function'

}

export const imageToURL = (param) => {

  setTimeout(() => {
    param.onSuccess({
      url: URL.createObjectURL(param.file),
      name: param.file.name
    })
  }, 1000)

}