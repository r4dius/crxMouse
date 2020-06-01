function editgesture(cfg1, cfg2, obj1, obj2) {
  var _act;
  if (!obj2) {
    _act = cfg2;
  } else {
    _act = "gesture";
  }

  if (obj1 == "s" || obj1 == "r" || obj1 == "u" || obj1 == "v" || obj1 == "w") {
    _act = "gesture";
  }
  
  if(config[cfg1][cfg2].length != 0) document.getElementById("tgledit" + cfg2).parentNode.parentNode.classList.remove("hide");

  for (var i = 0; i < config[cfg1][cfg2].length; i++) {
    var _wrap = document.createElement("div");
    _wrap.className = obj1 + "wrap";
    _wrap.id = obj1 + "wrap" + i;
    var _gesture = document.createElement("div");
    _gesture.className = obj1 + "direct";
    //_gesture.innerHTML = CMi18n("listgesture");
    var _action = document.createElement("div");
    _action.className = obj1 + "action";
    var _form = document.createElement("form");
    var _flex = document.createElement("div");
    _flex.className = "flex";

    if (obj1 == "s" || obj1 == "r") {
      if (i == 0) {
        _action.className = obj1 + "action flex optsubline notopborder";
        _form.innerHTML = '<div class="flexl">' + CMi18n("scractup") + "</div>";
      } else {
        _action.className = obj1 + "action flex optsubline";
        _form.innerHTML = '<div class="flexl">' + CMi18n("scractdown") + "</div>";
      }
    } else if (obj1 == "u") {
      _wrap.className = obj1 + "wrap";
      if (i == 0) {
        _action.className = obj1 + "action flex optsubline notopborder";
        _form.innerHTML = '<div class="flexl">' + CMi18n("stractmiddle") + "</div>";
      } else {
        _action.className = obj1 + "action flex optsubline";
        _form.innerHTML = '<div class="flexl">' + CMi18n("stractright") + "</div>";
      }
    } else if (obj1 == "v") {
      if (i == 0) {
        _action.className = obj1 + "action flex optsubline notopborder";
        _form.innerHTML = '<div class="flexl">' + CMi18n("stractleft") + "</div>";
      } else {
        _action.className = obj1 + "action flex optsubline";
        _form.innerHTML = '<div class="flexl">' + CMi18n("stractright") + "</div>";
      }
    } else if (obj1 == "w") {
      if (i == 0) {
        _action.className = obj1 + "action flex optsubline notopborder";
        _form.innerHTML = '<div class="flexl">' + CMi18n("stractleft") + "</div>";
      } else {
        _action.className = obj1 + "action flex optsubline";
        _form.innerHTML = '<div class="flexl">' + CMi18n("stractmiddle") + "</div>";
      }
    } else {
      _flex.innerHTML = '<label for="' + obj1 + "select" + i + '" class="optline flexl notopborder">' + CMi18n("listaction") + '</label>';
    }

	var _sep = document.createElement("div");
	_sep.className = "separator selright";
    var _del = document.createElement("input");
    _del.type = "button";
    _del.className = obj1 + "del" + " selright";
    _del.id = obj1 + "del" + i;
	_del.value = CMi18n("delete");

    /*gesture*/
    for (var j = 0 in config[cfg1][cfg2][i].direct) {
      if (
        obj1 == "s" ||
        obj1 == "r" ||
        obj1 == "u" ||
        obj1 == "v" ||
        obj1 == "w"
      ) {
        break;
      }
      var _img = document.createElement("img");
      _img.src = chrome.extension.getURL("") + "image/" + config[cfg1][cfg2][i].direct[j].toLowerCase() + ".png";
      _gesture.appendChild(_img);
    }

    /**/

    /*action*/
    var _select = document.createElement("select");
    _select.id = obj1 + "select" + i;
	_select.className = "selright norightmargin md-select";

    var optgroups = [];
    optgroups[0] = document.createElement("optgroup");
    optgroups[0].label = CMi18n("optgrpnone"); //"无";
    optgroups[1] = document.createElement("optgroup");
    optgroups[1].label = CMi18n("optgrpnav"); //"导航";
    optgroups[2] = document.createElement("optgroup");
    optgroups[2].label = CMi18n("optgrpscroll"); //"滚动";
    optgroups[3] = document.createElement("optgroup");
    optgroups[3].label = CMi18n("optgrpload"); //"加载";
    optgroups[4] = document.createElement("optgroup");
    optgroups[4].label = CMi18n("optgrptab"); //"标签页";
    optgroups[5] = document.createElement("optgroup");
    optgroups[5].label = CMi18n("optgrptabnav"); //"标签页导航";
    optgroups[6] = document.createElement("optgroup");
    optgroups[6].label = CMi18n("optgrpwindow"); //"窗口";
    optgroups[7] = document.createElement("optgroup");
    optgroups[7].label = CMi18n("optgrpcopy"); //"复制";
    optgroups[8] = document.createElement("optgroup");
    optgroups[8].label = CMi18n("optgrpother"); //"其他";
    optgroups[9] = document.createElement("optgroup");
    optgroups[9].label = CMi18n("optgrpapp"); //"App";
    optgroups[10] = document.createElement("optgroup");
    optgroups[10].label = CMi18n("optgrpsearch"); //"搜索";
    optgroups[11] = document.createElement("optgroup");
    optgroups[11].label = CMi18n("optgrpsave"); //"保存";

    var grouptype;
    switch (cfg2) {
      case "gesture":
      case "sgsleft":
      case "sgsright":
      case "strleft":
      case "strmiddle":
      case "strright":
        grouptype = "gesture";
        break;
      case "text":
        grouptype = "text";
        break;
      case "link":
        grouptype = "link";
        break;
      case "image":
        grouptype = "image";
        break;
    }

    for (var j = 0; j < action[_act].length; j++) {
      var _option = document.createElement("option");
      _option.value = action[_act][j].action;
      _option.innerHTML = CMi18n(action[_act][j].action).replace(':"%s"', "");

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
    _flex.appendChild(_select);

    if (
      obj1 == "s" ||
      obj1 == "r" ||
      obj1 == "u" ||
      obj1 == "v" ||
      obj1 == "w"
    ) {
    } else {
      _flex.appendChild(_sep);
      _flex.appendChild(_del);
    }
	_form.appendChild(_flex);
    _action.appendChild(_form);
    _wrap.appendChild(_action);
    if (_img) {
      _wrap.appendChild(_gesture);
    }
    /**/

    document.getElementById("tgledit" + cfg2).appendChild(_wrap);
  }

  for (var i = 0; i < document.getElementsByClassName(obj1 + "wrap").length; i++) {
    /*set select value*/
    for (var j = 0; j < action[_act].length; j++) {
      if (
        document.getElementsByClassName(obj1 + "wrap")[i].querySelectorAll("form>div>select option")[j].value == config[cfg1][cfg2][i].action
      ) {
        document.getElementsByClassName(obj1 + "wrap")[i].querySelector("form>div>select").selectedIndex = j;
        break;
      } else {
        document.getElementsByClassName(obj1 + "wrap")[i].querySelector("form>div>select").selectedIndex = -1;
      }
    }

    /*show more*/
    var _morehold = document.createElement("div");
    _morehold.className = "morehold";

    /*more new*/
    var moreArray = [
      "moreURL",
      "moreScript",
      "moreCapturetype",
      "moreTsearch",
      "moreIsearch",
      "moreChromepage",
      "morePosition",
      "morePinned",
      "moreTarget",
      "moreClosesel",
      "moreCloseopts",
      "moreTab",
      "moreMatch",
      "moreCopystyle",
      "moreDes",
      "moreCloseurl"
    ];
    var moreEle = [];
    for (var ii in moreArray) {
      if (!config[cfg1][cfg2][i][moreArray[ii]]) {
        continue;
      }

      if (
        moreArray[ii] == "moreTarget" ||
        moreArray[ii] == "moreTsearch" ||
        moreArray[ii] == "moreIsearch" ||
        moreArray[ii] == "moreChromepage" ||
        moreArray[ii] == "morePosition" ||
        moreArray[ii] == "morePinned" ||
        moreArray[ii] == "moreCapturetype" ||
        moreArray[ii] == "moreClosesel" ||
        moreArray[ii] == "moreCloseopts"
      ) {
        moreEle[moreArray[ii]] = document.createElement("select");
        moreEle[moreArray[ii]].className = "selright norightmargin md-select";
        moreEle[moreArray[ii]].name = moreArray[ii];
        moreEle[moreArray[ii]].title = CMi18n(moreArray[ii] + "title");
        var optionsArray = action[moreArray[ii].substr(4)];
        var optionsEle = [];
        for (var iii = 0; iii < optionsArray.length; iii++) {
          optionsEle[optionsArray[iii]] = document.createElement("option");
          optionsEle[optionsArray[iii]].value = optionsArray[iii];
          optionsEle[optionsArray[iii]].innerHTML = CMi18n(optionsArray[iii]) ? CMi18n(optionsArray[iii]) : optionsArray[iii];
          moreEle[moreArray[ii]].appendChild(optionsEle[optionsArray[iii]]);
          if (moreEle[moreArray[ii]].options[iii].value == config[cfg1][cfg2][i][moreArray[ii]]) {
            moreEle[moreArray[ii]].selectedIndex = iii;
          }
        }
      } else if (moreArray[ii] == "moreScript") {
        moreEle[moreArray[ii]] = document.createElement("textarea");
        moreEle[moreArray[ii]].className = "selright norightmargin";
        moreEle[moreArray[ii]].wrap = "virtual";
        moreEle[moreArray[ii]].name = moreArray[ii];
        moreEle[moreArray[ii]].value = config[cfg1][cfg2][i][moreArray[ii]];
        moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n(moreArray[ii] + "title");
      } else {
        moreEle[moreArray[ii]] = document.createElement("input");
        moreEle[moreArray[ii]].className = "selright norightmargin";
        moreEle[moreArray[ii]].type = "text";
        moreEle[moreArray[ii]].name = moreArray[ii];
        moreEle[moreArray[ii]].value = config[cfg1][cfg2][i][moreArray[ii]];
        moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n(moreArray[ii]);
        if (moreArray[ii] == "moreDes") {
          if (config[cfg1][cfg2][i].action.indexOf("newusertab") != -1) {
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlenewusertab");
          } else if (config[cfg1][cfg2][i].action.indexOf("T_search") != -1) {
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titletsearch");
          } else if (config[cfg1][cfg2][i].action.indexOf("I_search") != -1) {
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titleisearch");
          } else if (config[cfg1][cfg2][i].action.indexOf("userscript") != -1) {
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titleuserscript");
          } else if (config[cfg1][cfg2][i].action.indexOf("G_chromepage") != -1) {
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlechromepage");
          } else if (config[cfg1][cfg2][i].action == "G_trynext" || config[cfg1][cfg2][i].action == "G_tryprev") {
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("moreDestitle");
          } else if (config[cfg1][cfg2][i].action.indexOf("copyuser") != -1) {
            moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlecopyuser");
          } else {
            moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n(moreArray[ii] + "title");
          }
        }
        if (moreArray[ii] == "moreURL" && config[cfg1][cfg2][i].action.indexOf("searchuser") != -1
        ) {
          moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n("titlesearchuser");
        }

        if (moreArray[ii] == "moreMatch") {
          if (config[cfg1][cfg2][i].action == "G_trynext") {
            moreEle[moreArray[ii]].value = config[cfg1][cfg2][i].moreMatch;
          }
          if (config[cfg1][cfg2][i].action == "G_tryprev") {
            moreEle[moreArray[ii]].value = config[cfg1][cfg2][i].moreMatch;
          }
          moreEle[moreArray[ii]].title = moreEle[moreArray[ii]].placeholder = CMi18n("titlenexpre");
        }

        if (moreArray[ii] == "moreCopystyle" && config[cfg1][cfg2][i].action.indexOf("copyuser") != -1
        ) {
          moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n("moreCopystyletitle");
        }

        if (moreArray[ii] == "moreCloseurl" /*&&_obj.value.indexOf("copyuser")!=-1*/) {
          moreEle[moreArray[ii]].placeholder = moreEle[moreArray[ii]].title = CMi18n("moreCloseurltitle");
        }
      }

      if (moreEle[moreArray[ii]]) {
		var _flex = document.createElement("div");
		_flex.className = "flex topborder";
        if(moreArray[ii] != "moreScript"){
		  _flex.innerHTML = '<label class="flexl">' + CMi18n("lab" + moreArray[ii]) + '</label>';
		}
		_flex.appendChild(moreEle[moreArray[ii]]);
		moreEle[moreArray[ii]] = _flex;
        _morehold.appendChild(moreEle[moreArray[ii]]);
      }
    }

    for (var ii in moreArray) {
      if (moreEle[moreArray[ii]]) {
        var moreSavebutton = document.createElement("input");
        moreSavebutton.type = "button";
		moreSavebutton.className = "selright norightmargin";
        moreSavebutton.value = "save";
        moreSavebutton.id = "moresave" + obj1 + i;
		var _flex = document.createElement("div");
		_flex.className = "flex topborder";
		_flex.innerHTML = '<label class="flexl"></label>';
		_flex.appendChild(moreSavebutton);
        _morehold.appendChild(_flex);
        break;
      }
    }
    /**/

    for (var ii in moreArray) {
      if (moreEle[moreArray[ii]]) {
        document.querySelector("#" + obj1 + "wrap" + i + " form").appendChild(_morehold);
        break;
      }
    }
    if (document.getElementById("moresave" + obj1 + i)) {
      document.getElementById("moresave" + obj1 + i).addEventListener("click", _fnmoresave, false);
    }
    function _fnmoresave() {
      var _id = this.id.substr(9);
      var _texts = this.parentNode.querySelectorAll("input[type=text]");
      var _selects = this.parentNode.querySelectorAll("select");

      if (_texts.length != 0 && _texts[0].value == "") {
        alert(CMi18n("alertname"));
        return;
      }

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

      if (this.parentNode.querySelectorAll("textarea")[0] && !this.parentNode.querySelectorAll("textarea")[0].value) {
        alert(CMi18n("alertname"));
        return;
      }

      /*save*/
      for (var i = 0; i < _texts.length; i++) {
        if (_texts[i].name == "moreURL" || _texts[i].name == "moreCloseurl") {
          if (CheckURL(_texts[i].value)) {
            _texts[i].value = CheckURL(_texts[i].value);
          } else {
            alert(CMi18n("alerturl"));
            return;
          }
        }
        config[cfg1][cfg2][_id][_texts[i].name] = _texts[i].value;
      }

      for (var i = 0; i < _selects.length; i++) {
        config[cfg1][cfg2][_id][_selects[i].name] = _selects[i].value;
      }

      if (this.parentNode.querySelectorAll("textarea")[0]) {
        config[cfg1][cfg2][_id].moreScript = this.parentNode.querySelectorAll("textarea")[0].value;
      }

      needToSave = true;
    }
  }

  if (document.getElementById("edit" + cfg2).firstChild) {
    var _clear = document.createElement("div");
    _clear.style.clear = "both";
    _clear.id = obj1 + "clear";
    document.getElementById("edit" + cfg2).appendChild(_clear);
  }
}
