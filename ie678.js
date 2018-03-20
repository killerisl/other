if (
  navigator.userAgent.toLowerCase().indexOf("msie 6") != -1 ||
  navigator.userAgent.toLowerCase().indexOf("msie 7") != -1 ||
  navigator.userAgent.toLowerCase().indexOf("msie 8") != -1
) {
  document.write(
    '<div class="lowBrowser-tips" id="lowBrowser-tips" style="width:100%;padding:15px 0;line-height:30px;font-size:20px;background:#FF2626;color:#fff;font-weight:bold;text-align:center;position:fixed;top:0;left:0;">检测到您浏览器版本过低，存在安全风险，将无法正常浏览与使用本交易平台，<br/>请升级浏览器，或者将浏览器切换至极速模式后重新访问。<div class="lowBrowser-tips-remove" onclick="' +
      "document.getElementById('lowBrowser-tips').parentNode.removeChild(document.getElementById('lowBrowser-tips'))" +
      '" style="width:50px;height:50px;cursor:pointer;line-height:50px;position:absolute;top:17px;right:17px;">X</div></div>'
  );
}
