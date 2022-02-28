// 不带属性
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

// 将node的连续文本子节点合并成一个
function normalize (node) {
  var sum = '';
  var childs = Array.from(node.childNodes);
  for (var i = 0; i < childs.length; i++) {
    var child = childs[i];
    if (child.nodeType == document.TEXT_NODE) {
      sum += child.nodeValue;
      node.removeChild(child);
    } else {
      node.insertBefore(document.createTextNode(sum), child)
        sum = '';
      }
    }
    if (sum.length) {
      node.appendChild(document.createTextNode(sum));
    }
  }

