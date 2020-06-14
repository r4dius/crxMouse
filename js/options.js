var defaultConfig = {
  cfgver: 2.3,
  others: {
    tuilink: false
  },
  normal: {
    gesture: true,
    drag: false,
    scroll: false,
    autocancel: true,
    autocancelvalue: 2,
    lasttab: false,
    scrolleffects: true,
    backgroundtab: false,
    newtabposition: "chrome",
    minilength: 10,
    capturetype: "jpeg",
    jpegquality: 100,
    cancelcontextmenu: true,
    dbclicktime: 600
  },
  gesture: {
    gestureui: true,
    stroke: true,
    direct: false,
    tooltip: false,
    strokecolor: "#4E1485",
    strokewidth: 4,
    strokeopa: 0.8,
    directcolor: "#5E6A88",
    directopa: 0.9,
    tooltipcolor: "#120310",
    tooltipwidth: 18,
    tooltipopa: 0.9,
    geskey: "right",
    stenable: false,
    gholdkey: "none",
    gesture: [
      {
        direct: "L",
        action: "G_back"
      },
      {
        direct: "R",
        action: "G_go"
      },
      {
        direct: "U",
        action: "G_up"
      },
      {
        direct: "D",
        action: "G_down"
      },
      {
        direct: "DR",
        action: "G_close"
      },
      {
        direct: "LU",
        action: "G_reclosedtab",
        moreTarget: "newfront",
        morePosition: "chrome",
        morePinned: "no",
        moreDes: chrome.i18n.getMessage("G_reclosedtab")
      },
      {
        direct: "RD",
        action: "G_bottom"
      },
      {
        direct: "RU",
        action: "G_top"
      },
      {
        direct: "UD",
        action: "G_reload"
      },
      {
        direct: "UDU",
        action: "G_reloadclear"
      },
      {
        direct: "UL",
        action: "G_lefttab"
      },
      {
        direct: "UR",
        action: "G_righttab"
      },
      {
        direct: "DRU",
        action: "G_newwindow"
      },
      {
        direct: "URD",
        action: "G_closewindow"
      },
      {
        direct: "RDLU",
        action: "G_crxsettings",
        moreDes: chrome.i18n.getMessage("G_crxsettings"),
        morePinned: "no",
        morePosition: "chrome",
        moreTarget: "newfront"
      }
    ]
  },
  drag: {
    dragui: true,
    dstroke: true,
    ddirect: true,
    dtooltip: true,
    dstrokecolor: "#4E1485",
    dstrokewidth: 5,
    dstrokeopa: 0.8,
    ddirectcolor: "#5E6A88",
    ddirectopa: 0.9,
    dtooltipcolor: "#120310",
    dtooltipwidth: 18,
    dtooltipopa: 0.9,
    dragtext: true,
    draglink: true,
    dragimage: true,
    draginput: false,
    setdragurl: true,
    imgfirstcheck: false,
    imgfirst: "none",
    dholdkey: "none",
    text: [
      {
        direct: "L",
        action: "T_search",
        moreDes: chrome.i18n.getMessage("valuetsearch") + "(" + chrome.i18n.getMessage("newback") + ")",
        morePinned: "no",
        morePosition: "chrome",
        moreTarget: "newback",
        moreTsearch: "sgoogle"
      },
      {
        direct: "R",
        action: "T_search",
        moreDes: chrome.i18n.getMessage("valuetsearch") + "(" + chrome.i18n.getMessage("newfront") + ")",
        morePinned: "no",
        morePosition: "chrome",
        moreTarget: "newfront",
        moreTsearch: "sgoogle"
      },
      {
        direct: "D",
        action: "T_copytext"
      }
    ],
    link: [
      {
        direct: "L",
        action: "L_open",
        moreDes: chrome.i18n.getMessage("L_open") + "(" + chrome.i18n.getMessage("newback") + ")",
        morePinned: "no",
        morePosition: "chrome",
        moreTarget: "newback"
      },
      {
        direct: "R",
        action: "L_open",
        moreDes: chrome.i18n.getMessage("L_open") + "(" + chrome.i18n.getMessage("newfront") + ")",
        morePinned: "no",
        morePosition: "chrome",
        moreTarget: "newfront"
      },
      {
        direct: "D",
        action: "L_copytext"
      },
      {
        direct: "U",
        action: "L_copyurl"
      }
    ],
    image: [
      {
        direct: "L",
        action: "I_open",
        moreDes: chrome.i18n.getMessage("I_open") + "(" + chrome.i18n.getMessage("newback") + ")",
        morePinned: "no",
        morePosition: "chrome",
        moreTarget: "newback"
      },
      {
        direct: "R",
        action: "I_open",
        moreDes: chrome.i18n.getMessage("I_open") + "(" + chrome.i18n.getMessage("newfront") + ")",
        morePinned: "no",
        morePosition: "chrome",
        moreTarget: "newfront"
      },
      {
        direct: "D",
        action: "I_save"
      }
    ]
  },
  scroll: {
    smooth: true,
    scrollspeed: 3,
    scrollaccele: 1
  },
  scrollgesture: {
    tablist: true,
    tablistkey: "right",
    sgsleftenable: true,
    sgsrightenable: false,
    sgsleft: [{ action: "G_top" }, { action: "G_bottom" }],
    sgsright: [{ action: "G_top" }, { action: "G_bottom" }]
  },
  strokegesture: {
    strpress: "up",
    strleftenable: true,
    strleft: [{ action: "G_none" }, { action: "G_righttab" }],
    strmiddleenable: false,
    strmiddle: [{ action: "G_lefttab" }, { action: "G_righttab" }],
    strrightenable: true,
    strright: [{ action: "G_lefttab" }, { action: "G_none" }]
  }
};

var action = {
  gesture: [
    { action: "G_none" },
    { action: "G_back" },
    { action: "G_go" },
    { action: "G_goparent" },
    { action: "G_stop" },
    { action: "G_stopall" },
    { action: "G_trynext" },
    { action: "G_tryprev" },
    { action: "G_up" },
    { action: "G_down" },
    { action: "G_top" },
    { action: "G_bottom" },
    { action: "G_reload" },
    { action: "G_reloadclear" },
    { action: "G_reloadframe" },
    { action: "G_reloadall" },
    { action: "G_reclosedtab" },
    { action: "G_openclipurl" },
    { action: "G_close" },
    { action: "G_closelefttabs" },
    { action: "G_closerighttabs" },
    { action: "G_closeothers" },
    { action: "G_newtab" },
    { action: "G_newusertab" },
    { action: "G_copytab" },
    { action: "G_movetowindow" },
    { action: "G_pin" },
    { action: "G_lefttab" },
    { action: "G_righttab" },
    { action: "G_firsttab" },
    { action: "G_lasttab" },
    { action: "G_newwindow" },
    { action: "G_incognito" },
    { action: "G_closewindow" },
    { action: "G_closewindows" },
    { action: "G_windowmax" },
    { action: "G_windowmin" },
    { action: "G_fullscreen" },
    { action: "G_copyurl" },
    { action: "G_copytitle" },
    { action: "G_copyaslink" },
    { action: "G_copyuser" },
    { action: "G_capture" },
    { action: "G_chromepage" },
    { action: "G_viewsource" },
    { action: "G_crxsettings" },
    { action: "G_tostop" },
    { action: "G_userscript" },
    { action: "G_bookmark" }
  ],
  text: [
    { action: "G_none" },
    { action: "T_search" },
    { action: "T_searchuser" },
    { action: "T_copytext" }
  ],
  link: [
    { action: "G_none" },
    { action: "L_open" },
    { action: "L_copytext" },
    { action: "L_copyurl" },
    { action: "L_copyaslink" },
    { action: "L_copyuser" },
    { action: "L_bookmark" }
  ],
  image: [
    { action: "G_none" },
    { action: "I_open" },
    { action: "I_save" },
    { action: "I_copyurl" },
    { action: "I_search" },
    { action: "I_searchuser" }
  ],
  Target: ["newfront", "newback", "curfront", "incog"],
  Tsearch: [ "sgoogle", "sbaidu", "sbing", "syandex", "syahoo", "swiki", "staobao", "samazon"],
  Isearch: ["sgoogleimage", "sbaiduimage", "stineyeimage"],
  Chromepage: ["crdownloads", "crhistory", "crbookmarks", "crextensions", "crsettings", "crflags"],
  Position: ["chrome", "right", "left", "head", "last"],
  Pinned: ["no", "yes"],
  Capturetype: ["jpeg", "png"],
  Closeopts: ["close", "unclose"],
  Closesel: ["chrome", "left", "right"]
};

/*load config*/
var config;
if (!localStorage.getItem("config")) {
  var config = JSON.parse(JSON.stringify(defaultConfig));
  localStorage.setItem("config", JSON.stringify(defaultConfig));
} else {
  var config = JSON.parse(localStorage.getItem("config"));
}

/*fast reset config*/
document.getElementById("fastreset").innerHTML = CMi18n("fastreset"); //"asdf";
document.getElementById("fastreset").style.background = "#F00";
document.getElementById("fastreset").addEventListener("click", fnfastreset, false);
function fnfastreset() {
  localStorage.clear();
  localStorage.setItem("config", JSON.stringify(defaultConfig));
  window.location.reload();
}

/*save config*/
window.setInterval(function() {
  if (needToSave) {
    localStorage.setItem("config", JSON.stringify(config));
    chrome.extension.sendMessage({ type: "syncup" });
    needToSave = false;
    needToInit = true;
    if (!document.querySelector(".mdl-snackbar--active")) {
      var snackbarContainer = document.querySelector("#smsgbox");
      var data = { message: CMi18n("msgbox") };
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    }
  }
}, 500);

var optpages = true;
var teststroke = false;
var testdrag = false;
var testgesture = false;
var optdirect;
var needToSave = false;
var needToInit = false;

function CheckURL(url) {
  if (url == "") {
    return false;
  }

  var url = url.toLowerCase();
  if (
    url.indexOf("http://") != 0 &&
    url.indexOf("https://") != 0 &&
    url.indexOf("ftp://") != 0 &&
    url.indexOf("chrome://") != 0 &&
    url.indexOf("chrome-extension://") != 0
  ) {
    url = "http://" + url;
  }

  if (url.substr(0, 6) == "chrome") {
    return url;
  }
  var regexp = /^((ftp|http(s)?):\/\/)([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/;
  if (regexp.test(url)) {
    return url;
  } else {
    return false;
  }
}

editgesture("gesture", "gesture", "g");
editgesture("drag", "text", "t");
editgesture("drag", "link", "l");
editgesture("drag", "image", "i");
editgesture("scrollgesture", "sgsleft", "s");
editgesture("scrollgesture", "sgsright", "r");
editgesture("strokegesture", "strleft", "u");
editgesture("strokegesture", "strmiddle", "v");
editgesture("strokegesture", "strright", "w");

window.addEventListener(
  "input",
  function(e) {
    crxInput(e);
  },
  false
);
function crxInput(e) {
  var _obj = e.target;

  /*checkbox/text/range/radio change*/
  var _cfgobj;
  switch (_obj.className.substr(0, 3)) {
    case "nor":
      _cfgobj = "normal";
      break;
    case "ges":
      _cfgobj = "gesture";
      break;
    case "drg":
      _cfgobj = "drag";
      break;
    case "scr":
      _cfgobj = "scroll";
      break;
    case "sgs":
      _cfgobj = "scrollgesture";
      break;
    case "str":
      _cfgobj = "strokegesture";
      break;
  }

  if (_obj.className.indexOf("range") == 3) {
    config[_cfgobj][_obj.id] = _obj.value;
    document.getElementById(_obj.id + "hold").innerHTML = _obj.value;
  }

  /*checkbox/text/range/radio change END*/
  lineChange("gesture");
  lineChange("drag");
}

window.addEventListener(
  "change",
  function(e) {
    crxChange(e);
  },
  false
);
function crxChange(e) {
  var _obj = e.target;
  var split = _obj.className.trim().split(" ");

  if (
    split[0] == "norselect" ||
    split[0] == "gesselect" ||
    split[0] == "drgselect" ||
    split[0] == "strselect"
  ) {
    var cfg1, cfg2;
    cfg2 = _obj.id;
    switch (split[0]) {
      case "norselect":
        cfg1 = "normal";
        break;
      case "gesselect":
        cfg1 = "gesture";
        break;
      case "drgselect":
        cfg1 = "drag";
        break;
      case "strselect":
        cfg1 = "strokegesture";
        break;
    }
    config[cfg1][cfg2] = _obj.value;
    needToSave = true;
    return;
  }

  /*checkbox/text/range/radio change*/
  var _cfgobj;
  switch (_obj.className.substr(0, 3)) {
    case "nor":
      _cfgobj = "normal";
      break;
    case "ges":
      _cfgobj = "gesture";
      break;
    case "drg":
      _cfgobj = "drag";
      break;
    case "scr":
      _cfgobj = "scroll";
      break;
    case "sgs":
      _cfgobj = "scrollgesture";
      break;
    case "str":
      _cfgobj = "strokegesture";
      break;
  }

  if (_obj.className.indexOf("check") == 3) {
    config[_cfgobj][_obj.id] = _obj.checked;
    if (document.getElementById("li" + _obj.id)) {
      if (config[_cfgobj][_obj.id]) {
        document.getElementById("li" + _obj.id).style.display = "flex";
      } else {
        document.getElementById("li" + _obj.id).style.display = "none";
      }
    }
    if (document.getElementById("tgl" + _obj.id)) {
      if (config[_cfgobj][_obj.id]) {
        document.getElementById("tgl" + _obj.id).style.display = "block";
      } else {
        document.getElementById("tgl" + _obj.id).style.display = "none";
      }
    }
    needToSave = true;
  }

  if (_obj.className.indexOf("text") == 3) {
    config[_cfgobj][_obj.id] = _obj.value;
    needToSave = true;
  }

  if (_obj.className.indexOf("range") == 3) {
    config[_cfgobj][_obj.id] = _obj.value;
    document.getElementById(_obj.id + "hold").innerHTML = _obj.value;
    needToSave = true;
  }

  if (_obj.className.indexOf("radio") == 3) {
    config[_cfgobj][_obj.name] = _obj.value;
    needToSave = true;
  }
  /*checkbox/text/range/radio change END*/

  /*select change*/

  if (_obj.id.indexOf("select") != -1) {
    switch (_obj.id.substr(0, 1)) {
      case "g":
        _sobj1 = "gesture";
        _sobj2 = "gesture";
        break;
      case "t":
        _sobj1 = "drag";
        _sobj2 = "text";
        break;
      case "l":
        _sobj1 = "drag";
        _sobj2 = "link";
        break;
      case "i":
        _sobj1 = "drag";
        _sobj2 = "image";
        break;
      case "s":
        _sobj1 = "scrollgesture";
        _sobj2 = "sgsleft";
        break;
      case "r":
        _sobj1 = "scrollgesture";
        _sobj2 = "sgsright";
        break;
      case "u":
        _sobj1 = "strokegesture";
        _sobj2 = "strleft";
        break;
      case "v":
        _sobj1 = "strokegesture";
        _sobj2 = "strmiddle";
        break;
      case "w":
        _sobj1 = "strokegesture";
        _sobj2 = "strright";
        break;
    }
    var _id = parseInt(_obj.id.substr(7));
    if (!e.target.nextSibling) {
    } else if (
      e.target.nextSibling &&
      e.target.nextSibling.className == "morehold"
    ) {
      e.target.parentNode.removeChild(e.target.nextSibling);
    } else if (e.target.nextSibling.nextSibling) {
      e.target.parentNode.removeChild(e.target.nextSibling.nextSibling);
    }

    var moreArray = [];
    var moreEle = [];
    var defaultDes = "";
    if (
      _obj.value == "G_newtab" ||
      _obj.value == "G_openclipurl" ||
      _obj.value == "G_reclosedtab" ||
      _obj.value == "G_crxsettings"
    ) {
      moreArray = ["moreTarget", "morePosition", "morePinned", "moreDes"];
      defaultDes = CMi18n(_obj.value);
    } else if (
      _obj.value == "G_viewsource" ||
      _obj.value == "G_newtab" ||
      _obj.value == "L_open" ||
      _obj.value == "I_open"
    ) {
      moreArray = ["moreTarget", "morePosition", "morePinned", "moreDes"];
      defaultDes = CMi18n(_obj.value);
    } else if (_obj.value == "G_chromepage") {
      moreArray = [
        "moreChromepage",
        "moreTarget",
        "morePosition",
        "morePinned",
        "moreDes"
      ];
    } else if (_obj.value == "T_search") {
      moreArray = [
        "moreTsearch",
        "moreTarget",
        "morePosition",
        "morePinned",
        "moreDes"
      ];
    } else if (_obj.value == "I_search") {
      moreArray = [
        "moreIsearch",
        "moreTarget",
        "morePosition",
        "morePinned",
        "moreDes"
      ];
    } else if (_obj.value == "G_trynext" || _obj.value == "G_tryprev") {
      moreArray = [
        "moreTarget",
        "morePosition",
        "morePinned",
        "moreMatch",
        "moreDes"
      ];
    } else if (
      _obj.value == "G_newusertab" ||
      _obj.value == "T_searchuser" ||
      _obj.value == "I_searchuser"
    ) {
      moreArray = [
        "moreName",
        "moreURL",
        "moreTarget",
        "morePosition",
        "morePinned",
        "moreDes"
      ];
    } else if (_obj.value == "G_userscript") {
      moreArray = ["moreScript", "moreDes"];
    } else if (_obj.value == "G_capture") {
      moreArray = [
        "moreCapturetype",
        "moreTarget",
        "morePosition",
        "morePinned"
      ];
    } else if (_obj.value == "G_copyuser" || _obj.value == "L_copyuser") {
      moreArray = ["moreName", "moreCopystyle", "moreDes"];
    } else if (_obj.value == "G_close") {
      moreArray = ["moreClosesel", "moreCloseopts", "moreCloseurl"];
    }

    if (moreArray.length != 0) {
      var _value = _obj.value;
      var _morehold = document.createElement("div");
      _morehold.className = "morehold";

      for (var ii in moreArray) {
        if (
          moreArray[ii] == "moreTarget" ||
          moreArray[ii] == "moreTsearch" ||
          moreArray[ii] == "moreIsearch" ||
          moreArray[ii] == "moreChromepage" ||
          moreArray[ii] == "morePosition" ||
          moreArray[ii] == "morePinned" ||
          moreArray[ii] == "moreCapturetype" ||
          moreArray[ii] == "moreCloseopts" ||
          moreArray[ii] == "moreClosesel"
        ) {
          moreEle[moreArray[ii]] = document.createElement("select");
          moreEle[moreArray[ii]].name = moreArray[ii];
          moreEle[moreArray[ii]].title = CMi18n(moreArray[ii] + "title");
          var optionsArray = action[moreArray[ii].substr(4)]; //["new","newback","cur"];
          var optionsEle = [];
          for (var iii = 0; iii < optionsArray.length; iii++) {
            optionsEle[optionsArray[iii]] = document.createElement("option");
            optionsEle[optionsArray[iii]].value = optionsArray[iii];
            optionsEle[optionsArray[iii]].innerHTML = CMi18n(optionsArray[iii]) ? CMi18n(optionsArray[iii]) : optionsArray[iii];
            moreEle[moreArray[ii]].appendChild(optionsEle[optionsArray[iii]]);
            moreEle[moreArray[ii]].selectedIndex = 0; //iii;}
          }
        } else if (moreArray[ii] == "moreScript") {
          moreEle[moreArray[ii]] = document.createElement("textarea");
          moreEle[moreArray[ii]].wrap = "virtual";
          moreEle[moreArray[ii]].name = moreArray[ii];
          moreEle[moreArray[ii]].value = "";
          moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n(moreArray[ii] + "title");
        } else {
          moreEle[moreArray[ii]] = document.createElement("input");
          moreEle[moreArray[ii]].type = "text";
          moreEle[moreArray[ii]].name = moreArray[ii];
          moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n(moreArray[ii] + "title");
          if (moreArray[ii] == "moreDes") {
            if (_obj.value.indexOf("newusertab") != -1) {
              moreEle[moreArray[ii]].value = CMi18n("valuenewusertab");
              moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlenewusertab");
            } else if (_obj.value.indexOf("T_search") != -1) {
              moreEle[moreArray[ii]].value = CMi18n("valuetsearch");
              moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titletsearch");
            } else if (_obj.value.indexOf("I_search") != -1) {
              moreEle[moreArray[ii]].value = CMi18n("valueisearch");
              moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titleisearch");
            } else if (_obj.value.indexOf("userscript") != -1) {
              moreEle[moreArray[ii]].value = CMi18n("valueuserscript");
              moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titleuserscript");
            } else if (_obj.value.indexOf("copyuser") != -1) {
              moreEle[moreArray[ii]].value = CMi18n(_obj.value);
              moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlecopyuser");
            } else if (_obj.value.indexOf("G_chromepage") != -1) {
              moreEle[moreArray[ii]].value = CMi18n("valuechromepage");
              moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlechromepage");
            } else if (_obj.value == "G_trynext" || _obj.value == "G_tryprev") {
              moreEle[moreArray[ii]].value = CMi18n(_obj.value); //
              moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("moreDestitle");
            } else {
              moreEle[moreArray[ii]].value = defaultDes;
              moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n(moreArray[ii] + "title");
            }
          }

          if (moreArray[ii] == "moreURL" && _obj.value.indexOf("searchuser") != -1) {
            moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n("titlesearchuser");
          }

          if (moreArray[ii] == "moreMatch") {
            if (_obj.value == "G_trynext") {
              moreEle[moreArray[ii]].value = "»|›|>|next|nextpostslink|pnnext|下一页|下页|下一章|下章|下一页>";
            }
            if (_obj.value == "G_tryprev") {
              moreEle[moreArray[ii]].value = "«|‹|<|prev|previous|previouspostslink|pnprev|上一页|上页|上一章|上章|<上一页";
            }
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlenexpre");
          }

          if (moreArray[ii] == "moreCopystyle" &&_obj.value.indexOf("copyuser") != -1) {
            moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n("moreCopystyletitle");
          }

          if (moreArray[ii] == "moreCloseurl") {
            moreEle[moreArray[ii]].value = "chrome://newtab/";
            moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n("moreCloseurltitle");
          }
        }

        if (moreEle[moreArray[ii]]) {
          _morehold.appendChild(moreEle[moreArray[ii]]);
        }
      }

      for (var ii in moreArray) {
        if (moreEle[moreArray[ii]]) {
          var moreSavebutton = document.createElement("input");
          moreSavebutton.type = "button";
          if (teststroke) {
            moreSavebutton.style.display = "none";
          }
          moreSavebutton.value = CMi18n("save");
          moreSavebutton.id = "moresave" + _obj.id.substr(0, 1) + _id;
          _morehold.appendChild(moreSavebutton);
          break;
        }
      }

      _obj.parentNode.appendChild(_morehold);
      if (document.getElementById("moresave" + _obj.id.substr(0, 1) + _id)) {
        document.getElementById("moresave" + _obj.id.substr(0, 1) + _id).addEventListener(
          "click",
          function(e) {
            _fnmoresave(e);
          },
          false
        );
      }
      function _fnmoresave(e) {
        var _flagdirect = config[_sobj1][_sobj2][_id].direct;
        config[_sobj1][_sobj2][_id] = {};
        config[_sobj1][_sobj2][_id].direct = _flagdirect;
        config[_sobj1][_sobj2][_id].action = _value;
        var _texts = e.target.parentNode.querySelectorAll("input[type=text]");
        var _selects = e.target.parentNode.querySelectorAll("select");
        for (var i = 0; i < _texts.length; i++) {
          if (_texts[i].value == "") {
            alert(CMi18n("alertname"));
            return;
          }
          if (_texts[i].name == "moreURL" || _texts[i].name == "moreCloseurl") {
            if (CheckURL(_texts[i].value)) {
              _texts[i].value = CheckURL(_texts[i].value);
            } else {
              alert(CMi18n("alerturl"));
              return;
            }
          }
        }
        if (e.target.parentNode.querySelectorAll("textarea")[0] && !e.target.parentNode.querySelectorAll("textarea")[0].value) {
          alert(CMi18n("alertname"));
          return;
        }

        /*save*/
        for (var i = 0; i < _texts.length; i++) {
          config[_sobj1][_sobj2][_id][_texts[i].name] = _texts[i].value;
        }

        for (var i = 0; i < _selects.length; i++) {
          config[_sobj1][_sobj2][_id][_selects[i].name] = _selects[i].value;
        }
        if (e.target.parentNode.querySelectorAll("textarea")[0]) {
          config[_sobj1][_sobj2][_id].moreScript = e.target.parentNode.querySelectorAll("textarea")[0].value;
        }

        /*for add gesture,do not save*/
        if (_obj.id.substr(7) == config[_sobj1][_sobj2].length) {
          return;
        }

        needToSave = true;
      }
      return;
    }

    /*for add gesture,do not save*/
    if (_obj.id.substr(7) == config[_sobj1][_sobj2].length) {
      return;
    }

    var _flagdirect = config[_sobj1][_sobj2][_id].direct;
    config[_sobj1][_sobj2][_id] = {};
    if (
      _obj.id.substr(0, 1) == "g" ||
      _obj.id.substr(0, 1) == "t" ||
      _obj.id.substr(0, 1) == "l" ||
      _obj.id.substr(0, 1) == "i"
    ) {
      config[_sobj1][_sobj2][_id].direct = _flagdirect;
    }
    config[_sobj1][_sobj2][_id].action = _obj.value;
    needToSave = true;
  }
  /*select change END*/

  lineChange("gesture");
  lineChange("drag");
}

window.addEventListener(
  "click",
  function(e) {
    var split = e.target.parentElement.className.trim().split(" ");
	  
    if (
      (e.target.id.indexOf("del") != -1 &&
        e.target.className.indexOf("del") != -1) ||
      (e.target.parentElement.id.indexOf("del") != -1 &&
        split[0].indexOf("del") != -1)
    ) {
      FnDel(e);
      return;
    }

    /**/
    if (e.target.className.indexOf("addok") != -1) {
      FnAddOk(e);
      return;
    }

    /**/
    if (e.target.id == "addcancel") {
      FnAddCancel(e);
      return;
    }

    /**/
    if (e.target.className == "newadd" || split[0] == "newadd") {
      FnAddButton(e);
      return;
    }

    /**/
    if (e.target.id == "resetconfig") {
      if(confirm(CMi18n("resetallconfirmation"))) FnResetAll(e);
      return;
    }

    /**/
    if (e.target.tagName.toLowerCase() == "li") {
      liclick(e);
      return;
    }

    /**/
    if (e.target.id == "import") {
      FnImport(e);
      return;
    }
    /**/
    if (e.target.id == "export") {
      FnExport(e);
      return;
    }

    if (e.target.dataset.reset) {
      if(confirm(CMi18n("resetpageconfirmation"))) pageReset(e);
      return;
    }
    if (e.target.id == "clearsyncdata") {
      if(confirm(CMi18n("syncclearconfirmation"))) {
        chrome.extension.sendMessage({ type: "syncclear" });
	  }
      return;
    }

    if (e.target.id == "firsttimeclose") {
      document.getElementById("firsttime").style.display = "none";
    }

    if (e.target.className == "languagemachine") {
      //e.preventDefault();
      //localStorage.setItem("openoptspage",true);
      //config.normal.language=true;
      //localStorage.setItem("config",JSON.stringify(config));
      //location.reload();

      e.preventDefault();
      config.normal.language = true;
      var newconfig = config;
      newconfig.sync = "local";
      localStorage.setItem("openoptspage", true);
      localStorage.setItem("config", JSON.stringify(newconfig));
      chrome.storage.sync.set(newconfig, function() {
        chrome.runtime.reload();
      });
    }

    if (e.target.className == "languageenglish") {
      e.preventDefault();
      config.normal.language = false;
      var newconfig = config;
      newconfig.sync = "local";
      localStorage.setItem("openoptspage", true);
      localStorage.setItem("config", JSON.stringify(newconfig));
      chrome.storage.sync.set(newconfig, function() {
        chrome.runtime.reload();
      });
    }
  },
  false
);

document.getElementById('container').addEventListener(
  "scroll",
  function() {
    if(document.getElementById('container').scrollTop > 0) {
      if(document.getElementById("optnameclear").style.opacity != 1) document.getElementById("optnameclear").style.opacity = 1;
    } else {
      if(document.getElementById("optnameclear").style.opacity != 0) document.getElementById("optnameclear").style.opacity = 0;
    }
  },
  false
);

function pageReset(e) {
  config[e.target.dataset.reset] = {};
  config[e.target.dataset.reset] = defaultConfig[e.target.dataset.reset];
  needToSave = true;
  window.setTimeout(function() {
    document.location.reload();
  }, 600);
}

function FnImport(e) {
  try {
    if (document.getElementById("portconfig").value == "") {
      return;
    }
    var newconfig = JSON.parse(document.getElementById("portconfig").value);
    newconfig.sync = "local";
    localStorage.setItem("openoptspage", true);
    localStorage.setItem("config", JSON.stringify(newconfig));
    chrome.storage.sync.set(newconfig, function() {
      chrome.runtime.reload();
    });
  } catch (e) {
    alert(CMi18n("alertconfigerror"));
  }
}

function FnExport(e) {
  var _exportconfig = JSON.parse(localStorage.getItem("config"));
  document.getElementById("portconfig").value = JSON.stringify(_exportconfig, null, 2); //JSON.parse(localStorage.getItem("config"));
}

function FnResetAll(e) {
  localStorage.clear();
  defaultConfig.sync = true;
  localStorage.setItem("cmfirst", 1);
  localStorage.setItem("config", JSON.stringify(defaultConfig));
  chrome.extension.sendMessage({ type: "syncup" });
  // document.getElementById("msgbox").style.display="block";
  // window.setTimeout(function(){document.getElementById("msgbox").style.display="none";window.location.reload();},1000)
  if (!document.querySelector(".mdl-snackbar--active")) {
    var snackbarContainer = document.querySelector("#smsgbox");
    var data = { message: CMi18n("msgbox") };
    snackbarContainer.MaterialSnackbar.showSnackbar(data);
  }
}

/**/
function FnAddOk(e) {
  var _id = parseInt(
    document.getElementById("adddirect").firstChild.id.substr(5)
  );
  var _obj = document.getElementById("adddirect").firstChild.id.substr(0, 1);
  var _configobj = e.target.id.substr(5);

  var _cfg1, _cfg2;
  switch (_obj) {
    case "g":
      _cfg1 = "gesture";
      _cfg2 = "gesture";
      break;
    case "t":
      _cfg1 = "drag";
      _cfg2 = "text";
      break;
    case "l":
      _cfg1 = "drag";
      _cfg2 = "link";
      break;
    case "i":
      _cfg1 = "drag";
      _cfg2 = "image";
      break;
  }

  for (var i = 0 in config[_cfg1][_cfg2]) {
    if (optdirect == config[_cfg1][_cfg2][i].direct) {
      alert(CMi18n("alertrepeat"));
      return;
    }
    if (document.querySelector("#" + _obj + "select" + _id).selectedIndex == -1) {
      alert(CMi18n("alertaction"));
      return;
    }
  }

  var _texts = document.querySelectorAll("#adddirect .morehold>[type=text]");
  var _selects = document.querySelectorAll("#adddirect .morehold>select");
  for (var i = 0; i < _texts.length; i++) {
    if (_texts[0].value == "") {
      alert(CMi18n("alertname"));
      return;
    }
  }
  if (document.querySelectorAll("#adddirect .morehold>textarea")[0] && !document.querySelectorAll("#adddirect .morehold>textarea")[0].value) {
    alert(CMi18n("alertname"));
    return;
  }

  /*save*/
  config[_cfg1][_cfg2].push({
    direct: optdirect,
    action: document.getElementById(_obj + "select" + _id).value
  });
  for (var i = 0; i < _texts.length; i++) {
    config[_cfg1][_cfg2][_id][_texts[i].name] = _texts[i].value;
  }

  if (document.querySelectorAll("#adddirect .morehold>textarea")[0]) {
    config[_cfg1][_cfg2][_id].moreScript = document.querySelectorAll("#adddirect .morehold>textarea")[0].value;
    //config[cfg1][cfg2][_id].moreScript=this.parentNode.querySelectorAll("textarea")[0].value;
  }

  for (var i = 0; i < _selects.length; i++) {
    config[_cfg1][_cfg2][_id][_selects[i].name] = _selects[i].value;
  }
  needToSave = true;
  /*show new*/
  document.getElementById(_obj + "wrap" + _id).style.cssText = "";
  document.getElementById(_obj + "del" + _id).style.display = "inline"; /*display del*/
  document.getElementById(_obj + "del" + _id).value = CMi18n("delete");
  //document.getElementById("moresave"+_id).style.display="inline";/*display save*/alert("sss")
  if (document.getElementById(_obj + "wrap" + _id).querySelectorAll("input[type=button]")[1]) {
    /*display save*/
    document.getElementById(_obj + "wrap" + _id).querySelectorAll("input[type=button]")[1].style.display = "inline";
    document.getElementById(_obj + "wrap" + _id).querySelectorAll("input[type=button]")[1].value = CMi18n("save");
  }
  document.getElementById("edit" + _configobj).insertBefore(document.getElementById(_obj + "wrap" + _id), document.getElementById(_obj + "clear"));
  document.querySelector("#" + _obj + "del" + _id).addEventListener("click", FnDel, false);
  isOptionsPage = false;
  teststroke = false;
  testgesture = false;
  testdrag = false;
  document.getElementById("addbox").style.display = "none";
  
  if(config[_cfg1][_cfg2].length != 0) document.getElementById("tgledit" + _cfg2).parentNode.parentNode.classList.remove("hide");
}

/**/
function FnAddButton(e) {
  var currentId = e.target.id;
  var parentId = e.target.parentElement.id;
  if (parentId == "addgesture") currentId = parentId;

  if (currentId == "addgesture" || parentId == "addgesture") {
    testgesture = true;
    testdrag = false;
  } else {
    testgesture = false;
    testdrag = true;
  }
  isOptionsPage = true;
  var _addbox = document.getElementById("addbox");
  _addbox.style.width =
    Math.min(document.documentElement.scrollWidth, window.innerWidth) + "px";
  _addbox.style.height =
    Math.max(document.documentElement.scrollHeight, window.innerHeight) + "px";
  _addbox.style.zIndex = 100;
  switch (currentId) {
    case "addgesture":
      document.getElementById("addtip").innerHTML = CMi18n("addtipgesture");
      document.getElementById("addcontent").style.display = "none";
      break;
    case "addtext":
      document.getElementById("addtip").innerHTML = CMi18n("addtiptext");
      document.getElementById("addcontent").style.display = "block";
      document.getElementById("addcontenttext").style.display = "inline";
      document.getElementById("addcontentlink").style.display = "none";
      document.getElementById("addcontentimg").style.display = "none";
      break;
    case "addlink":
      document.getElementById("addtip").innerHTML = CMi18n("addtiplink");
      document.getElementById("addcontent").style.display = "block";
      document.getElementById("addcontenttext").style.display = "none";
      document.getElementById("addcontentlink").style.display = "inline";
      document.getElementById("addcontentimg").style.display = "none";
      break;
    case "addimage":
      document.getElementById("addtip").innerHTML = CMi18n("addtipimage");
      document.getElementById("addcontent").style.display = "block";
      document.getElementById("addcontenttext").style.display = "none";
      document.getElementById("addcontentlink").style.display = "none";
      document.getElementById("addcontentimg").style.display = "inline";
      break;
  }

  if (document.getElementById("adddirect")) {
  } else {
    var _adddirectobj = document.createElement("div");
    _adddirectobj.id = "adddirect";
    document.getElementById("addbox").insertBefore(_adddirectobj, document.getElementById("addbutton"));
  }
  document.querySelectorAll("#addbutton input[type=button]")[0].id = "addok" + currentId.substr(3);
  teststroke = true; /**/
  _addbox.style.display = "block";
}

function liclick(e) {
  var target = e.target;
  if (
    target.id == "linormal" ||
    target.id == "ligesture" ||
    target.id == "lidrag" ||
    target.id == "liscroll" ||
    target.id == "liscrollgesture" ||
    target.id == "listrokegesture"
  ) {
    document.getElementById("optname").innerHTML = "<a href='###' data-reset='" + target.dataset.i18ninner + "'>" + CMi18n("resetpage") + "</a>";
  } else {
    document.getElementById("optname").innerHTML = "";
  }
  var _id = parseInt(target.id.substr(2));
  for (var i = 0; i < document.querySelectorAll("#menu>li").length; i++) {
    document.querySelectorAll("#menu>li")[i].className = "";
  }
  for (var i = 0; i < document.getElementsByClassName("tab").length; i++) {
    document.getElementsByClassName("tab")[i].style.display = "none";
  }

  document.getElementById(target.id).className = "selli";
  document.getElementById("tab" + target.id.substr(2)).style.display = "inline";
  window.scrollTo(document.documentElement.offsetLeft, 0);

  if (target.id == "liabout") {
    chrome.runtime.requestUpdateCheck(function(status, details) {});
  }
}

/**/
function FnAddCancel(e) {
  if (document.getElementById("adddirect")) {
    document.getElementById("addbox").removeChild(document.getElementById("adddirect"));
  }
  isOptionsPage = false;
  teststroke = false;
  testgesture = false;
  testdrag = false;
  document.getElementById("addbox").style.display = "none";
}

function FnDel(e) {
  var _delobj = e.target;
  var _id = parseInt(_delobj.id.substr(4));
  var _obj = _delobj.id.substr(0, 1);
  var _cfgobj1, _cfgobj2;

  switch (_obj) {
    case "g":
      _cfgobj1 = "gesture";
      _cfgobj2 = "gesture";
      break;
    case "t":
      _cfgobj1 = "drag";
      _cfgobj2 = "text";
      break;
    case "l":
      _cfgobj1 = "drag";
      _cfgobj2 = "link";
      break;
    case "i":
      _cfgobj1 = "drag";
      _cfgobj2 = "image";
      break;
  }
  console.log(_delobj.id.substr(4));
  var _imgobj = document.getElementById(_obj + "wrap" + _id).querySelectorAll("img");
  var _imgnum = _imgobj.length;
  var _thisdirect = "";
  for (var i = 0; i < _imgnum; i++) {
    _thisdirect = _thisdirect + _imgobj[i].src.substr(_imgobj[i].src.length - 5, 1).toUpperCase();
  }
  for (var i = 0 in config[_cfgobj1][_cfgobj2]) {
    if (config[_cfgobj1][_cfgobj2][i].direct == _thisdirect) {
      config[_cfgobj1][_cfgobj2].splice(i, 1);
      needToSave = true;
      document.getElementById(_obj + "wrap" + _id).parentNode.removeChild(document.getElementById(_obj + "wrap" + _id));
      if(config[_cfgobj1][_cfgobj2].length == 0) document.getElementById("tgledit" + _cfgobj2).parentNode.parentNode.classList.add("hide");
      return;
    }
  }
}

/**/
function FnAdd(obj1, obj2) {
  var _id = config[obj1][obj2].length;
  var _myobj = obj2.substr(0, 1);
  var _wrap = document.createElement("div");
  _wrap.className = _myobj + "wrap";
  _wrap.id = _myobj + "wrap" + _id;
  _wrap.style.margin = "0 130px";
  _wrap.style.border = "2px solid #303";
  var _gesture = document.createElement("div");
  _gesture.className = _myobj + "direct";
  _gesture.innerHTML = CMi18n("listgesture");
  _gesture.appendChild(document.createElement("div"));
  var _action = document.createElement("div");
  _action.className = _myobj + "action";
  _action.innerHTML = CMi18n("listaction");
  _action.appendChild(document.createElement("div"));
  var _del = document.createElement("input");
  _del.type = "button";
  _del.className = _myobj + "del";
  _del.id = _myobj + "del" + _id;
  _del.style.display = "none";
  _del.value = "delete";
  var _form = document.createElement("form");
  var _clear = document.createElement("div");
  _clear.style.clear = "both";

  /*gesture*/
  for (var j = 0 in optdirect) {
    var _img = document.createElement("img");
    _img.src = chrome.extension.getURL("") + "image/" + optdirect[j].toLowerCase() + ".png";
    _gesture.appendChild(_img);
  }
  _wrap.appendChild(_gesture);

  /*action*/
  var _select = document.createElement("select");
  _select.id = _myobj + "select" + _id;

  var _act;
  var optgroups = [];
  optgroups[0] = document.createElement("optgroup");
  optgroups[0].label = CMi18n("optgrpnone");
  optgroups[1] = document.createElement("optgroup");
  optgroups[1].label = CMi18n("optgrpnav");
  optgroups[2] = document.createElement("optgroup");
  optgroups[2].label = CMi18n("optgrpscroll");
  optgroups[3] = document.createElement("optgroup");
  optgroups[3].label = CMi18n("optgrpload");
  optgroups[4] = document.createElement("optgroup");
  optgroups[4].label = CMi18n("optgrptab");
  optgroups[5] = document.createElement("optgroup");
  optgroups[5].label = CMi18n("optgrptabnav");
  optgroups[6] = document.createElement("optgroup");
  optgroups[6].label = CMi18n("optgrpwindow");
  optgroups[7] = document.createElement("optgroup");
  optgroups[7].label = CMi18n("optgrpcopy");
  optgroups[8] = document.createElement("optgroup");
  optgroups[8].label = CMi18n("optgrpother");
  optgroups[9] = document.createElement("optgroup");
  optgroups[9].label = CMi18n("optgrpapp");
  optgroups[10] = document.createElement("optgroup");
  optgroups[10].label = CMi18n("optgrpsearch");
  optgroups[11] = document.createElement("optgroup");
  optgroups[11].label = CMi18n("optgrpsave");

  var grouptype;
  switch (obj2) {
    case "gesture":
    case "sgsleft":
    case "sgsright":
    case "strleft":
    case "strmiddle":
    case "strright":
      grouptype = "gesture";
      _act = "gesture";
      break;
    case "text":
      grouptype = "text";
      _act = "text";
      break;
    case "link":
      grouptype = "link";
      _act = "link";
      break;
    case "image":
      grouptype = "image";
      _act = "image";
      break;
  }

  for (var j = 0; j < action[obj2].length; j++) {
    var _option = document.createElement("option");
    _option.value = action[obj2][j].action;
    _option.innerHTML = CMi18n(action[obj2][j].action).replace(':"%s"', "");

    if (grouptype == "gesture") {
      if (j < 1) {
        optgroups[0].appendChild(_option);
      } else if (j >= 1 && j < 8) {
        optgroups[1].appendChild(_option);
      } else if (j >= 8 && j < 12) {
        optgroups[2].appendChild(_option);
      } else if (j >= 12 && j < 18) {
        optgroups[3].appendChild(_option);
      } else if (j >= 18 && j < 27) {
        optgroups[4].appendChild(_option);
      } else if (j >= 27 && j < 31) {
        optgroups[5].appendChild(_option);
      } else if (j >= 31 && j < 38) {
        optgroups[6].appendChild(_option);
      } else if (j >= 38 && j < 42) {
        optgroups[7].appendChild(_option);
      } else if (j >= 42 && j < 49) {
        optgroups[8].appendChild(_option);
      } else {
        optgroups[9].appendChild(_option);
      }
    } else if (grouptype == "text") {
      if (j < 1) {
        optgroups[0].appendChild(_option);
      } else if (j >= 1 && j < 3) {
        optgroups[10].appendChild(_option);
      } else if (j == 3) {
        optgroups[7].appendChild(_option);
      } else {
        optgroups[8].appendChild(_option);
      }
    } else if (grouptype == "link") {
      if (j < 1) {
        optgroups[0].appendChild(_option);
      } else if (j >= 1 && j < 2) {
        optgroups[4].appendChild(_option);
      } else if (j >= 2 && j < 6) {
        optgroups[7].appendChild(_option);
      } else {
        optgroups[8].appendChild(_option);
      }
    } else if (grouptype == "image") {
      if (j < 1) {
        optgroups[0].appendChild(_option);
      } else if (j == 1) {
        optgroups[4].appendChild(_option);
      } else if (j >= 2 && j < 4) {
        optgroups[11].appendChild(_option);
      } else if (j >= 4 && j < 5) {
        optgroups[7].appendChild(_option);
      } else if (j >= 5 && j < 7) {
        optgroups[10].appendChild(_option);
      } else {
        optgroups[8].appendChild(_option);
      }
    } else {
      optgroups[0].appendChild(_option);
    }
  }

  for (var k = 0; k < optgroups.length; k++) {
    if (optgroups[k].querySelectorAll("option").length != 0) {
      _select.appendChild(optgroups[k]);
    }
  }

  _select.selectedIndex = -1;
  _form.appendChild(_select);
  _form.appendChild(_del);
  _action.appendChild(_form);
  _wrap.appendChild(_action);

  if (document.getElementById("adddirect")) {
    document.getElementById("addbox").removeChild(document.getElementById("adddirect"));
  }

  var _adddirectobj = document.createElement("div");
  _adddirectobj.id = "adddirect";
  document.getElementById("addbox").insertBefore(_adddirectobj, document.getElementById("addbutton"));
  document.getElementById("adddirect").appendChild(_wrap);
  document.querySelector("#" + _myobj + "select" + _id).selectedIndex = -1;
}

(function optInit() {
  var _checkobj = document.querySelectorAll("input[type=checkbox]");
  for (var i = 0; i < _checkobj.length; i++) {
    if (_checkobj[i].className.indexOf("nor") == 0) {
      _checkobj[i].checked = config.normal[_checkobj[i].id];
    }
    if (_checkobj[i].className.indexOf("ges") == 0) {
      _checkobj[i].checked = config.gesture[_checkobj[i].id];
    }
    if (_checkobj[i].className.indexOf("drg") == 0) {
      _checkobj[i].checked = config.drag[_checkobj[i].id];
    }
    if (_checkobj[i].className.indexOf("scr") == 0) {
      _checkobj[i].checked = config.scroll[_checkobj[i].id];
    }
    if (_checkobj[i].className.indexOf("sgs") == 0) {
      _checkobj[i].checked = config.scrollgesture[_checkobj[i].id];
    }
    if (_checkobj[i].className.indexOf("str") == 0) {
      _checkobj[i].checked = config.strokegesture[_checkobj[i].id];
    }
    if (document.getElementById("tgl" + _checkobj[i].id)) {
      if (_checkobj[i].checked)
        document.getElementById("tgl" + _checkobj[i].id).style.display = "block";
    }
  }

  var _textobj = document.querySelectorAll("input[type=color]");
  for (var i = 0; i < _textobj.length; i++) {
    if (_textobj[i].className.indexOf("nor") == 0) {
      _textobj[i].value = config.normal[_textobj[i].id];
      _textobj[i].value = config.normal[_textobj[i].id];
    }
    if (_textobj[i].className.indexOf("ges") == 0) {
      _textobj[i].value = config.gesture[_textobj[i].id];
      _textobj[i].value = config.gesture[_textobj[i].id];
    }
    if (_textobj[i].className.indexOf("drg") == 0) {
      _textobj[i].value = config.drag[_textobj[i].id];
      _textobj[i].value = config.drag[_textobj[i].id];
    }
  }

  var _rangeobj = document.querySelectorAll("input[type=range]");
  for (var i = 0; i < _rangeobj.length; i++) {
    if (_rangeobj[i].className.indexOf("nor") == 0) {
      _rangeobj[i].value = config.normal[_rangeobj[i].id];
      document.getElementById(_rangeobj[i].id + "hold").innerHTML = config.normal[_rangeobj[i].id];
    }
    if (_rangeobj[i].className.indexOf("ges") == 0) {
      _rangeobj[i].value = config.gesture[_rangeobj[i].id];
      document.getElementById(_rangeobj[i].id + "hold").innerHTML = config.gesture[_rangeobj[i].id];
    }
    if (_rangeobj[i].className.indexOf("drg") == 0) {
      _rangeobj[i].value = config.drag[_rangeobj[i].id];
      document.getElementById(_rangeobj[i].id + "hold").innerHTML = config.drag[_rangeobj[i].id];
    }
    if (_rangeobj[i].className.indexOf("scr") == 0) {
      _rangeobj[i].value = config.scroll[_rangeobj[i].id];
      document.getElementById(_rangeobj[i].id + "hold").innerHTML = config.scroll[_rangeobj[i].id];
    }
  }

  var _tablistradioobj = document.getElementsByName("tablistkey");
  for (var i = 0; i < _tablistradioobj.length; i++) {
    if (_tablistradioobj[i].value == config.scrollgesture.tablistkey) {
      _tablistradioobj[i].checked = true;
    }
  }

  var _norselectobj = document.querySelectorAll("select.norselect");
  for (var i = 0; i < _norselectobj.length; i++) {
    for (var j = 0; j < _norselectobj[i].options.length; j++) {
      if (_norselectobj[i].options[j].value == config.normal[_norselectobj[i].id]) {
        _norselectobj[i].selectedIndex = j;
      }
    }
  }

  var _gesselectobj = document.querySelectorAll("select.gesselect");
  for (var i = 0; i < _gesselectobj.length; i++) {
    for (var j = 0; j < _gesselectobj[i].options.length; j++) {
      if (_gesselectobj[i].options[j].value == config.gesture[_gesselectobj[i].id]) {
        _gesselectobj[i].selectedIndex = j;
      }
    }
  }

  var _drgselectobj = document.querySelectorAll("select.drgselect");
  for (var i = 0; i < _drgselectobj.length; i++) {
    for (var j = 0; j < _drgselectobj[i].options.length; j++) {
      if (_drgselectobj[i].options[j].value == config.drag[_drgselectobj[i].id]) {
        _drgselectobj[i].selectedIndex = j;
      }
    }
  }

  var _strselectobj = document.querySelectorAll("select.strselect");
  for (var i = 0; i < _strselectobj.length; i++) {
    for (var j = 0; j < _strselectobj[i].options.length; j++) {
      if (_strselectobj[i].options[j].value == config.strokegesture[_strselectobj[i].id]) {
        _strselectobj[i].selectedIndex = j;
      }
    }
  }

  if (!config.normal.gesture) {
    document.getElementById("ligesture").style.display = "none";
  }
  if (!config.normal.drag) {
    document.getElementById("lidrag").style.display = "none";
  }
  if (!config.normal.scroll) {
    document.getElementById("liscroll").style.display = "none";
  }
  if (!config.normal.scrollgesture) {
    document.getElementById("liscrollgesture").style.display = "none";
  }
  if (!config.normal.strokegesture) {
    document.getElementById("listrokegesture").style.display = "none";
  }
  if (window.navigator.userAgent.toLowerCase().indexOf("windows") != -1) {
    document.getElementById("cancelcontextmenu").disabled = true;
    document.getElementById("cancelcontextmenu").checked = false;
    document.getElementById("tglcancelcontextmenu").style.display = "none";
  }
})();

(function i18n() {
  var _buttonobj = document.querySelectorAll("input[type=button]");
  for (var i = 0; i < _buttonobj.length; i++) {
    _buttonobj[i].value = CMi18n(_buttonobj[i].value) || _buttonobj[i].value;
  }
  var _innerobj = document.querySelectorAll("[data-i18ninner]"); //[0].dataset.i18ninner
  for (var i = 0; i < _innerobj.length; i++) {
    _innerobj[i].innerHTML = CMi18n(_innerobj[i].dataset.i18ninner);
  }
  if (window.navigator.language.indexOf("zh") == -1) {
    document.getElementById("changelogzhcn").style.display = "none";
  }
  document.getElementById("version").innerHTML = chrome.runtime.getManifest().version;
  document.getElementById("portconfig").placeholder = CMi18n("placeholderconfig");
  document.title = CMi18n("settings");
})();

function selectbackground(e) {
  if (
    e.target.id.substr(0, 1) == "g" ||
    e.target.id.substr(0, 1) == "s" ||
    e.target.id.substr(0, 1) == "r"
  ) {
    for (var j = 0; j < e.target.options.length; j++) {
      if (j == 0) {
        e.target.options[j].style.background = "#669";
      }
      if (
        (j >= 5 && j <= 8) ||
        (j >= 13 && j <= 17) ||
        (j >= 15 && j <= 19) ||
        (j >= 25 && j <= 28) ||
        (j >= 33 && j <= 34) ||
        (j >= 41 && j <= 45)
      ) {
        e.target.options[j].style.background = "#d2dbed";
      }
    }
  }
}

document.getElementById("optname").innerHTML = "<a href='###' data-reset='normal'>" + CMi18n("resetpage") + "</a>";
document.getElementById("fastreset").parentNode.removeChild(document.getElementById("fastreset"));

function CMi18n(i18nstr) {
  if (!config.normal.language) {
    if (chrome.i18n.getMessage(i18nstr)) {
      return chrome.i18n.getMessage(i18nstr);
    } else {
      return null;
    }
  } else {
    if (chrome.i18n.getMessage("machine" + i18nstr)) {
      return chrome.i18n.getMessage("machine" + i18nstr);
    } else if (chrome.i18n.getMessage(i18nstr)) {
      return chrome.i18n.getMessage(i18nstr);
    } else {
      return null;
    }
  }
}

chrome.storage.sync.get("blacklist", function (i) {
  var blacklist = i.blacklist;
  if (blacklist) {
  blacklist = blacklist.join("\n");
    document.getElementById("blacklist").value = blacklist;
  }
});

document.getElementById("savebl").addEventListener("click", saveblacklist, false);

function saveblacklist() {
  var blacklist = document.getElementById("blacklist").value.trim(), blacklistcfg = [];
  if (blacklist != "") {
    blacklist = blacklist.split("\n");
    blacklist.forEach(function(item){
      blacklistcfg.push(extractDomain(item));
    })
  }
  chrome.storage.sync.set({blacklist: blacklistcfg}, function () {
    needToSave = true;
  });
};
