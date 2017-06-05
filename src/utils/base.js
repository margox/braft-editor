export const UniqueIndex = () => {

  if (isNaN(window.__BRAFT_UNIQUE_INDEX__)) {
    window.__BRAFT_UNIQUE_INDEX__ = 1
  } else {
    window.__BRAFT_UNIQUE_INDEX__ += 1
  }

  return window.__BRAFT_UNIQUE_INDEX__ 

}