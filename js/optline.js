lineChange("gesture");
lineChange("drag");

function lineChange(cfg) {
  if (cfg == "gesture") {
    var lastcfg = "";
    var uienable = config[cfg].gestureui;
  } else {
    var lastcfg = "d";
    var uienable = config[cfg].dragui;
  }

  if (document.getElementById(cfg + "line")) {
    document
      .getElementById(cfg + "line")
      .parentNode.removeChild(document.getElementById(cfg + "line"));
  }

  var _linediv = document.createElement("div");
  _linediv.id = cfg + "line";
  _linediv.className = "line";
  document.getElementById(cfg + "linehold").appendChild(_linediv);

  if (uienable && config[cfg][lastcfg + "stroke"]) {
    var SVG = "http://www.w3.org/2000/svg";
    var svgtag = (this.svgtag = document.createElementNS(SVG, "svg"));
    svgtag.style.height = "60px";
    var line = document.createElementNS(SVG, "line");
    line.style.opacity = "1";
    line.style.stroke = config[cfg][lastcfg + "strokecolor"];
    line.style.strokeOpacity = config[cfg][lastcfg + "strokeopa"];
    line.style.strokeWidth = config[cfg][lastcfg + "strokewidth"];
    line.style.strokeLinecap = "round";
    line.style.fill = "none";
    svgtag.appendChild(line);
    document.getElementById(cfg + "line").appendChild(svgtag);
    line.setAttribute("x1", 25);
    line.setAttribute("y1", 45);
    line.setAttribute("x2", 255);
    line.setAttribute("y2", 45);
  }

  if (uienable && config[cfg][lastcfg + "direct"]) {
    var _dirshow = document.createElement("div");
    _dirshow.style.backgroundColor = config[cfg][lastcfg + "directcolor"];
    _dirshow.style.opacity = config[cfg][lastcfg + "directopa"];
    _dirshow.style.borderRadius = "3px";
    _dirshow.style.marginLeft = "auto";
    _dirshow.style.marginRight = "auto";
    _dirshow.style.textAlign = "center";
    _dirshow.style.width = "60px";
    var _showimg = document.createElement("img");
    _showimg.style.display = "inline";
    _showimg.src = chrome.extension.getURL("") + "image/r.png";
    _dirshow.appendChild(_showimg);
    document.getElementById(cfg + "line").appendChild(_dirshow);
  }

  if (uienable && config[cfg][lastcfg + "tooltip"]) {
    var _tipshow = document.createElement("div");
    _tipshow.style.fontSize = config[cfg][lastcfg + "tooltipwidth"] + "px";
    _tipshow.style.color = config[cfg][lastcfg + "tooltipcolor"];
    _tipshow.style.opacity = config[cfg][lastcfg + "tooltipopa"];
    _tipshow.style.background = "transparent";
    _tipshow.style.textAlign = "center";
    _tipshow.style.fontWeight = "bold";
    _tipshow.style.cssText += "margin-top:5px !important";
    _tipshow.innerHTML = "TEST";
    document.getElementById(cfg + "line").appendChild(_tipshow);
  }
}
