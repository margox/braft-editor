export const UniqueIndex = () => {

  if (isNaN(window.__BRAFT_UNIQUE_INDEX__)) {
    window.__BRAFT_UNIQUE_INDEX__ = 1
  } else {
    window.__BRAFT_UNIQUE_INDEX__ += 1
  }

  return window.__BRAFT_UNIQUE_INDEX__ 

}
export const transToCamelCase = (str) => {
  var re = /_(\w)/g
  return str.replace(re, function ($0, $1) {
    return $1.toUpperCase()
  })
}
export const DataSetPolyfill = () => {
  if (Object.getOwnPropertyNames(HTMLElement.prototype).indexOf('dataset') === -1) {
    Object.defineProperty(HTMLElement.prototype, 'dataset', {
        get: function() {
            var attributes = this.attributes;
            var name = [],
                value = [];
            var obj = {};
            for (var i = 0; i < attributes.length; i++) {
                if (attributes[i].nodeName.slice(0, 5) == 'data-') {
                    name.push(attributes[i].nodeName.slice(5));
                    value.push(attributes[i].nodeValue);
                }
            }
            for (var j = 0; j < name.length; j++) {
                obj[name[j]] = value[j];
                obj[transToCamelCase(name[j])] = value[j]; // 同时支持驼峰访问
            }
            return obj;
        }
    });
  }
}