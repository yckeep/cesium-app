/**
 * 查看实景
 */
function viewReality() {
  // window.location.href='http://192.168.1.11:20218/';
  window.open('http://192.168.1.11:20218/')
}

/**
 * 添加控件
 */
function addCustomControl() {
  const toolButton = new mars3d.control.ToolButton({
    title: '自定义控件',
    icon: 'img/street.png',
    insertIndex: 1,
    click: () => {
      window.open('http://192.168.1.11:20218/')
    },
  });
  map.addControl(toolButton);
}