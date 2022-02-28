function getOuterHTML (node) {
  if (nodeType == 1) {
    return `<${node.tagName}>${Array.from(node.childNodes).map(getOuterHTML)}</${node.tagName}>`
  } else if (node.nodeType == 3) {
    return node.nodeValue
  } else if (node.nodeType == 8) {
    return `<!--' + node.nodeValue + '-->`
  } else {
    return ''
  }
}
// getOuterHTML($0)

