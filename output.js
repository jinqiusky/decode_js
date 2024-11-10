//Sun Nov 10 2024 04:46:50 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function (_0x52d8e1) {
  var _0x3a5bc6 = {};
  function _0x2dd30b(_0x31dff8) {
    if (_0x3a5bc6[_0x31dff8]) {
      return _0x3a5bc6[_0x31dff8].exports;
    }
    _0x3a5bc6[_0x31dff8] = {
      i: _0x31dff8,
      l: false,
      exports: {}
    };
    var _0x246c52 = _0x3a5bc6[_0x31dff8];
    _0x52d8e1[_0x31dff8].call(_0x246c52.exports, _0x246c52, _0x246c52.exports, _0x2dd30b);
    _0x246c52.l = true;
    return _0x246c52.exports;
  }
  _0x2dd30b.m = _0x52d8e1;
  _0x2dd30b.c = _0x3a5bc6;
  _0x2dd30b.d = function (_0xeb7fea, _0x271e5a, _0x2389fd) {
    !_0x2dd30b.o(_0xeb7fea, _0x271e5a) && Object.defineProperty(_0xeb7fea, _0x271e5a, {
      enumerable: true,
      get: _0x2389fd
    });
  };
  _0x2dd30b.r = function (_0x482d17) {
    typeof Symbol !== "undefined" && Symbol.toStringTag && Object.defineProperty(_0x482d17, Symbol.toStringTag, {
      value: "Module"
    });
    Object.defineProperty(_0x482d17, "__esModule", {
      value: true
    });
  };
  _0x2dd30b.t = function (_0x6b2347, _0x327e0f) {
    if (_0x327e0f & 1) {
      _0x6b2347 = _0x2dd30b(_0x6b2347);
    }
    if (_0x327e0f & 8) {
      return _0x6b2347;
    }
    if (_0x327e0f & 4 && typeof _0x6b2347 === "object" && _0x6b2347 && _0x6b2347.__esModule) {
      return _0x6b2347;
    }
    var _0x4d7e24 = Object.create(null);
    _0x2dd30b.r(_0x4d7e24);
    Object.defineProperty(_0x4d7e24, "default", {
      enumerable: true,
      value: _0x6b2347
    });
    if (_0x327e0f & 2 && typeof _0x6b2347 != "string") {
      for (var _0x398de0 in _0x6b2347) _0x2dd30b.d(_0x4d7e24, _0x398de0, function (_0x201f1e) {
        return _0x6b2347[_0x201f1e];
      }.bind(null, _0x398de0));
    }
    return _0x4d7e24;
  };
  _0x2dd30b.n = function (_0x419b75) {
    var _0x114539 = _0x419b75 && _0x419b75.__esModule ? function _0x1457e1() {
      return _0x419b75.default;
    } : function _0x54bb86() {
      return _0x419b75;
    };
    _0x2dd30b.d(_0x114539, "a", _0x114539);
    return _0x114539;
  };
  _0x2dd30b.o = function (_0x405bd9, _0x20066a) {
    return Object.prototype.hasOwnProperty.call(_0x405bd9, _0x20066a);
  };
  _0x2dd30b.p = "";
  return _0x2dd30b(_0x2dd30b.s = 10);
})([function (_0x4c78af, _0x1b41e2) {
  var _0x5e8de6 = {
    get_statusBarHeight: function () {
      var _0x528b80 = context.getResources(),
        _0x5f3b0d = _0x528b80.getDimensionPixelSize(_0x528b80.getIdentifier("status_bar_height", "dimen", "android"));
      return _0x5f3b0d;
    },
    createPopWin: function () {
      var _0x3b0445 = new android.widget.PopupWindow(),
        _0xfc9df9 = new android.transition.Fade();
      _0xfc9df9.setDuration(200);
      _0x3b0445.setEnterTransition(_0xfc9df9);
      var _0x2aa0e1 = new android.transition.Fade();
      _0x2aa0e1.setDuration(200);
      _0x2aa0e1.setMode(android.transition.Visibility.MODE_OUT);
      _0x3b0445.setExitTransition(_0x2aa0e1);
      _0x3b0445.setWidth(device.width);
      _0x3b0445.setHeight(device.height);
      _0x3b0445.setClippingEnabled(false);
      _0x3b0445.setFocusable(true);
      _0x3b0445.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x3b0445.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      return _0x3b0445;
    },
    checkServer: function () {
      if (auto.service == null) {
        dialogs.build({
          title: "提示",
          content: "请开启无障碍服务,若开启后任无法正常显示,关闭无障碍,重新开启",
          positive: "立即开启",
          negative: "取消"
        }).on("positive", function () {
          app.startActivity({
            action: "android.settings.ACCESSIBILITY_SETTINGS"
          });
        }).on("negative", function () {
          toast("取消");
        }).show();
        return false;
      }
      if (!floaty.checkPermission()) {
        confirm("请开启悬浮窗权限").then(function (_0x3b96cb) {
          if (_0x3b96cb) {
            try {
              app.startActivity({
                packageName: "com.android.settings",
                className: "com.android.settings.Settings$AppDrawOverlaySettingsActivity",
                data: "package:" + context.getPackageName()
              });
            } catch (_0x16f885) {
              floaty.requestPermission();
            }
          }
        });
        return false;
      }
      return true;
    },
    isScreenCapture: false,
    requestScreenCapture: function () {
      if (_0x5e8de6.isScreenCapture == false) {
        threads.start(function () {
          var _0x3be1f2 = text("允许").findOne(1000);
          _0x3be1f2 != null && (log("允许"), _0x3be1f2.click(), _0x5e8de6.isScreenCapture = true);
          var _0xe9b5b6 = text("立即开始").findOne(1000);
          _0xe9b5b6 != null && (log("立即开始"), _0xe9b5b6.click(), _0x5e8de6.isScreenCapture = true);
        });
        var _0x396ccf = requestScreenCapture();
        sleep(2000);
        return _0x396ccf;
      }
    }
  };
  _0x5e8de6.captureScreen_and_save = function () {
    var _0x2401d5 = "/sdcard/DCIM/Camera/",
      _0x13480d = new Date().getTime() + "." + random(100, 999) + ".jpg",
      _0x4cfada = _0x2401d5 + _0x13480d;
    log(_0x13480d);
    media.scanFile(_0x4cfada);
    sleep(1000);
    return _0x4cfada;
  };
  _0x5e8de6.checkAutoServer = function () {
    if (auto.service == null) {
      toast("依次点击：'无障碍'-'AutoKwai'-'确定'");
      dialogs.build({
        title: "请求权限",
        content: "无障碍服务",
        positive: "立即开启",
        negative: "取消"
      }).on("positive", function () {
        app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
      }).show();
      return false;
    }
    return true;
  };
  _0x5e8de6.waitTime = function (_0x443763, _0x558517) {
    var _0x3be1d3 = _0x443763,
      _0x3da2af = _0x558517 || "倒计时";
    while (_0x3be1d3 >= 0) {
      _0x443763 == 0 ? log(_0x3da2af) : log(_0x3da2af + "--" + _0x3be1d3);
      _0x3be1d3 != 0 && sleep(500);
      _0x3be1d3--;
    }
  };
  _0x5e8de6.openApp = function (_0x125b90) {
    launchApp(_0x125b90);
  };
  _0x5e8de6.bezier_curves = function (_0x3bf051, _0x140096) {
    var _0x2b3c96 = 3 * (_0x3bf051[1].x - _0x3bf051[0].x),
      _0xd35151 = 3 * (_0x3bf051[2].x - _0x3bf051[1].x) - _0x2b3c96,
      _0x568cf9 = _0x3bf051[3].x - _0x3bf051[0].x - _0x2b3c96 - _0xd35151,
      _0x45c3af = 3 * (_0x3bf051[1].y - _0x3bf051[0].y),
      _0x110acb = 3 * (_0x3bf051[2].y - _0x3bf051[1].y) - _0x45c3af,
      _0x56ab58 = _0x3bf051[3].y - _0x3bf051[0].y - _0x45c3af - _0x110acb,
      _0x11f08d = _0x140096 * _0x140096,
      _0x184d28 = _0x11f08d * _0x140096,
      _0x2ca5da = {
        x: 0,
        y: 0
      };
    _0x2ca5da.x = _0x568cf9 * _0x184d28 + _0xd35151 * _0x11f08d + _0x2b3c96 * _0x140096 + _0x3bf051[0].x;
    _0x2ca5da.y = _0x56ab58 * _0x184d28 + _0x110acb * _0x11f08d + _0x45c3af * _0x140096 + _0x3bf051[0].y;
    return _0x2ca5da;
  };
  _0x5e8de6.swipeRandom = function (_0x1c6c5a, _0x2fc8ee, _0x58db1c, _0x2074b6, _0x1ea104) {
    var _0x42a083 = [_0x1ea104],
      _0x51e684 = [],
      _0x3cc2eb = {
        x: _0x1c6c5a,
        y: _0x2fc8ee
      },
      _0x30a4df = 0,
      _0x5f1c3c = {
        x: random(_0x1c6c5a - _0x30a4df, _0x1c6c5a + 100),
        y: random(_0x2fc8ee, _0x2fc8ee + 50)
      },
      _0x4109d6 = {
        x: random(_0x58db1c - _0x30a4df, _0x58db1c + 100),
        y: random(_0x2074b6, _0x2074b6 + 50)
      },
      _0x206008 = {
        x: _0x58db1c,
        y: _0x2074b6
      };
    _0x51e684.push(_0x3cc2eb);
    _0x51e684.push(_0x5f1c3c);
    _0x51e684.push(_0x4109d6);
    _0x51e684.push(_0x206008);
    for (var _0x524b89 = 0; _0x524b89 < 1; _0x524b89 += 0.1) {
      var _0x558fbb = [parseInt(_0x5e8de6.bezier_curves(_0x51e684, _0x524b89).x), parseInt(_0x5e8de6.bezier_curves(_0x51e684, _0x524b89).y)];
      _0x42a083.push(_0x558fbb);
    }
    _0x5e8de6.showIconLine(_0x42a083);
    gesture.apply(0, _0x42a083);
  };
  _0x5e8de6.readlines = function (_0x57159e) {
    files.ensureDir(_0x57159e);
    !files.exists(_0x57159e) && files.create(_0x57159e);
    var _0x4c4d57 = files.open(_0x57159e, "r").readlines();
    return _0x4c4d57;
  };
  _0x5e8de6.showConsole = function () {
    var _0x5d623e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "日志",
      _0x56e9c2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : device.width * 0.45,
      _0x1a8423 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : device.width * 0.35,
      _0x32f5e9 = threads.start(function () {
        try {
          console.show(true);
          ui.run(function () {
            var _0x26e763 = runtime.console,
              _0x5e7669 = _0x26e763.class.getDeclaredField("mConsoleFloaty");
            _0x5e7669.setAccessible(true);
            mConsoleFloaty = _0x5e7669.get(_0x26e763);
            var _0x27a18e = mConsoleFloaty.getExpandedView(),
              _0x92890 = _0x27a18e.parent,
              _0x1cfea0 = _0x92890.findViewById(context.getResources().getIdentifier("title", "id", context.getPackageName()));
            drawable = _0x1cfea0.parent.getBackground().mutate();
            drawable.setCornerRadius(0);
            var _0x1bf02b = _0x92890.findViewById(context.getResources().getIdentifier("move_or_resize", "id", context.getPackageName()));
            _0x1bf02b.setVisibility(8);
            var _0x4e5d63 = _0x92890.findViewById(context.getResources().getIdentifier("close", "id", context.getPackageName()));
            _0x4e5d63.setVisibility(8);
            var _0x1bf3db = _0x92890.findViewById(context.getResources().getIdentifier("move_cursor", "id", context.getPackageName()));
            _0x1bf3db.setVisibility(0);
            _0x1bf3db.setTranslationX(_0x56e9c2 * 0.8);
            _0x1bf3db.setTranslationY(_0x1a8423 * 0.75);
            var _0x4f4c2c = _0x92890.findViewById(context.getResources().getIdentifier("console", "id", context.getPackageName()));
            drawable = _0x4f4c2c.getBackground().mutate();
            drawable.setCornerRadius(0);
            px1 = device.width * 0.1 - 35;
            py1 = -35;
            console.setTitle(_0x5d623e, "#ff5722", 24);
            console.setLogSize(9);
            console.setPosition(px1, py1);
            console.setSize(_0x56e9c2, _0x1a8423);
            console.setCanInput(false);
            console.setMaxLines(100);
            setTimeout(function () {
              console.setPosition(px1, py1);
              console.setSize(_0x56e9c2, _0x1a8423);
            }, 500);
            setTimeout(function () {
              console.setSize(_0x56e9c2, _0x1a8423);
            }, 2000);
          });
        } catch (_0x2b10d2) {
          log("showConsole", _0x2b10d2);
        }
      });
    return _0x32f5e9;
  };
  _0x5e8de6.clearConsole = function () {
    console.clear();
  };
  _0x5e8de6.closeConsole = function () {
    console.clear();
    console.hide();
  };
  _0x5e8de6.chenckMonitorEnd = function (_0x157fee) {
    var _0x3a9dd = threads.start(function () {
      try {
        events.observeKey();
        events.setKeyInterceptionEnabled("volume_up", true);
        events.onKeyDown("volume_up", function (_0x3883e0) {
          dialogs.build({
            title: "提示",
            content: "确定要停止吗?",
            positive: "确定",
            negative: "取消"
          }).on("positive", function () {
            _0x157fee();
          }).show();
        });
      } catch (_0x248c37) {
        log("chenckMonitorEnd", _0x248c37);
      }
    });
    return _0x3a9dd;
  };
  _0x5e8de6.chencVoiceUp = function (_0x3702a6) {
    var _0x5a5edf = threads.start(function () {
      try {
        events.observeKey();
        events.setKeyInterceptionEnabled("volume_up", true);
        events.onceKeyDown("volume_up", function (_0x3dfe30) {
          _0x3702a6();
        });
      } catch (_0x5cd77c) {
        log("chenckMonitorEnd", _0x5cd77c);
      }
    });
    return _0x5a5edf;
  };
  _0x5e8de6.checkTimeEnd = function (_0x5d477c, _0x12be7a) {
    var _0x2c14a6 = threads.start(function () {
      var _0x982037 = 0,
        _0x199fc7 = _0x5d477c * 60;
      console.log("[设定时长]：" + _0x199fc7 + "秒");
      setInterval(function () {
        _0x982037 == _0x199fc7 && (log("结束"), _0x12be7a());
        _0x982037++;
      }, 1000);
    });
    return _0x2c14a6;
  };
  _0x5e8de6.checkVersion = function () {
    dialogs.build({
      title: "发现可以使用的新版本！",
      content: "新版本：0稳定版-AutoKwai\n\n更新内容：",
      positive: "立即下载",
      negative: "取消"
    }).on("positive", function () {
      app.openUrl("https://www.lanzous.com/b05gilch");
    }).show();
  };
  _0x5e8de6.stop = function () {
    console.clear();
    console.hide();
    home();
  };
  _0x5e8de6.mStatus = 1;
  _0x5e8de6.actionSleep = function (_0x19e669, _0x3cfc17) {
    if (_0x19e669 == undefined) {
      _0x19e669 = "title";
    }
    if (_0x3cfc17 == undefined) {
      _0x3cfc17 = 1;
    }
    log(_0x19e669, _0x3cfc17, "s");
    sleep(1000 * _0x3cfc17);
  };
  _0x5e8de6.showIcon = function (_0xa04c43, _0x62f8a6) {
    var _0x29cee6 = floaty.rawWindow("\n<frameid=\"id_1\"w=\"10\"h=\"20\"alpha=\"1\">\n<imgw=\"10\"h=\"10\"src=\"#ee534f\"circle=\"true\"/>\n</frame>\n");
    _0x29cee6.setPosition(_0xa04c43, _0x62f8a6);
    _0x29cee6.setTouchable(false);
    setTimeout(function () {
      _0x29cee6.close();
    }, 2000);
  };
  _0x5e8de6.showIconLine = function (_0x1fce90) {
    var _0x1088b5 = function _0x1661d4(_0x2eacaf) {
      threads.start(function () {
        var _0x299afb = floaty.rawWindow("\n<framegravity=\"center\">\n<imgalpha=\"0.3\"w=\"12\"h=\"12\"radius=\"45\"src=\"#ee534f\"></img>\n</frame>\n"),
          _0x599c37 = _0x1fce90[_0x2eacaf];
        _0x299afb.setPosition(_0x599c37[0], _0x599c37[1]);
        _0x299afb.setTouchable(false);
        setTimeout(function () {
          _0x299afb.close();
        }, 1000);
      });
    };
    for (var _0x3c3a99 = 1; _0x3c3a99 < _0x1fce90.length; _0x3c3a99++) {
      _0x1088b5(_0x3c3a99);
    }
    sleep(1000);
  };
  _0x5e8de6.wakeUp = function () {
    if (!device.isScreenOn()) {
      device.wakeUp();
      sleep(1000);
      var _0x568393 = device.width / 10,
        _0x5bc261 = device.height / 10,
        _0x2328c2 = _0x568393 * 5,
        _0x297a28 = _0x5bc261 * 7,
        _0x5b3236 = _0x568393 * 6;
      var _0x4bdf83 = _0x5bc261 * 2;
      gesture(500, [_0x2328c2, _0x297a28], [_0x5b3236, _0x4bdf83]);
      sleep(1000);
      home();
    }
  };
  _0x5e8de6.actionSwipUp = function () {
    for (var _0x4f459c = 0; _0x4f459c < 1; _0x4f459c++) {
      var _0x39656f = device.width * 0.7 + random(0, 20),
        _0x21f212 = device.height * 0.7,
        _0x26ad3b = device.width * 0.8 + random(20, 40),
        _0x50dd3f = device.height * 0.1,
        _0x145c40 = random(100, 120);
      _0x5e8de6.swipeRandom(_0x39656f, _0x21f212, _0x26ad3b, _0x50dd3f, _0x145c40);
      sleep(1000);
    }
  };
  _0x5e8de6.actionSwipRight = function () {
    var _0x414736 = device.width * 0.7 + random(0, 100),
      _0x5cc4ca = device.height * 0.6 + random(0, 50),
      _0x35ebeb = device.width * 0.2 + random(0, 100),
      _0x37e5c4 = device.height * 0.5 + random(0, 50),
      _0xffc025 = random(100, 200);
    _0x5e8de6.swipeRandom(_0x414736, _0x5cc4ca, _0x35ebeb, _0x37e5c4, _0xffc025);
    sleep(1000);
  };
  _0x5e8de6.getStatusBarHight = function () {
    try {
      var _0xf19ba5 = context.getResources(),
        _0x15edaf = _0xf19ba5.getIdentifier("status_bar_height", "dimen", "android"),
        _0x4b651f = _0xf19ba5.getDimensionPixelSize(_0x15edaf);
      return _0x4b651f;
    } catch (_0x3b6b29) {
      return 0;
    }
  };
  _0x5e8de6.setFullWin = function () {
    importClass(android.view.WindowManager);
    importClass(android.view.View);
    importClass(android.graphics.Color);
    var _0x3b3382 = activity.getWindow();
    _0x3b3382.getDecorView().setSystemUiVisibility(View.SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN | View.SYSTEM_UI_FLAG_LAYOUT_STABLE);
    _0x3b3382.clearFlags(WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
    _0x3b3382.addFlags(WindowManager.LayoutParams.FLAG_DRAWS_SYSTEM_BAR_BACKGROUNDS);
    _0x3b3382.setStatusBarColor(Color.TRANSPARENT);
  };
  _0x5e8de6.logTime = function () {
    var _0x45aad6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "time";
    function _0x41f020(_0x292126) {
      return _0x292126 < 10 ? "0" + _0x292126 : _0x292126;
    }
    function _0x401d42(_0x42bf2b) {
      var _0x41cac1 = new Date(_0x42bf2b),
        _0x2f45c9 = _0x41cac1.getFullYear(),
        _0x101006 = _0x41cac1.getMonth() + 1,
        _0x49e216 = _0x41cac1.getDate(),
        _0x495c26 = _0x41cac1.getHours(),
        _0x27752f = _0x41cac1.getMinutes(),
        _0xbb1e83 = _0x41cac1.getSeconds();
      return _0x2f45c9 + "-" + _0x41f020(_0x101006) + "-" + _0x41f020(_0x49e216) + "" + _0x41f020(_0x495c26) + ":" + _0x41f020(_0x27752f) + ":" + _0x41f020(_0xbb1e83);
    }
    var _0x238d42 = new Date(),
      _0x238d42 = _0x401d42(_0x238d42.getTime()) + "-" + _0x238d42.getMilliseconds();
    log(_0x45aad6 + ":", _0x238d42);
  };
  _0x5e8de6.getPercent = function (_0x37aec0) {
    var _0x2365c1 = {
      w: (100 * _0x37aec0.bounds().width() / device.width).toFixed(1),
      h: (100 * _0x37aec0.bounds().height() / device.height).toFixed(1)
    };
    return _0x2365c1;
  };
  importClass(android.graphics.drawable.GradientDrawable);
  importClass(android.graphics.Color);
  _0x5e8de6.setBackgroundRoundedRectangle = function (_0x41b4b6) {
    var _0x785405 = new GradientDrawable();
    _0x785405.setShape(GradientDrawable.RECTANGLE);
    _0x785405.setStroke(2, colors.parseColor("#e8e8e8"));
    _0x785405.setCornerRadius(10);
    _0x41b4b6.setBackground(_0x785405);
  };
  _0x5e8de6.setBackgroundRoundedRectangleGradient = function (_0x33e76d, _0x498dec, _0x1d50c4, _0x30b5c3) {
    if (_0x30b5c3 == undefined) {
      _0x30b5c3 = 20;
    }
    var _0x35baf6 = new GradientDrawable(),
      _0x50c414 = util.java.array("int", 2);
    _0x50c414[0] = colors.parseColor(_0x498dec);
    _0x50c414[1] = colors.parseColor(_0x1d50c4);
    _0x35baf6.setShape(GradientDrawable.RECTANGLE);
    _0x35baf6.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);
    _0x35baf6.setColors(_0x50c414);
    _0x35baf6.setStroke(0, colors.parseColor("#fbdaae"));
    _0x35baf6.setCornerRadius(_0x30b5c3);
    GradientDrawable;
    _0x33e76d.setBackground(_0x35baf6);
  };
  _0x5e8de6.setBtnRadius = function (_0x35c94e) {
    var _0x233cf1 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#009688",
      _0x2a641d = new GradientDrawable();
    _0x2a641d.setShape(GradientDrawable.RECTANGLE);
    _0x2a641d.setStroke(3, colors.parseColor(_0x233cf1));
    _0x2a641d.setCornerRadius(20);
    _0x2a641d.setColor(colors.parseColor(_0x233cf1));
    _0x35c94e.setBackground(_0x2a641d);
  };
  _0x5e8de6.getVersionName = function (_0x455bed) {
    var _0xa1e078 = "暂无版本信息，请检查是否安装相关应用";
    try {
      var _0x1c09dc = context.getPackageManager().getPackageInfo(_0x455bed, 0);
      _0xa1e078 = _0x1c09dc.versionName;
    } catch (_0x5313eb) {}
    return _0xa1e078;
  };
  _0x5e8de6.alertImg = function (_0x5969db) {
    var _0x2dcc1d = new android.widget.PopupWindow(),
      _0x8ae896 = new android.transition.Fade();
    _0x8ae896.setDuration(200);
    _0x2dcc1d.setEnterTransition(_0x8ae896);
    var _0x31e5fb = new android.transition.Fade();
    _0x31e5fb.setDuration(200);
    _0x31e5fb.setMode(android.transition.Visibility.MODE_OUT);
    _0x2dcc1d.setExitTransition(_0x31e5fb);
    _0x2dcc1d.setWidth(device.width);
    _0x2dcc1d.setHeight(device.height);
    _0x2dcc1d.setClippingEnabled(false);
    _0x2dcc1d.setFocusable(true);
    var _0x506b32 = ui.inflate("\n<drawer>\n<verticalid=\"viewpager\">\n<cardw=\"*\"h=\"*\">\n<imgcircle=\"true\"bg=\"#000000\"alpha=\"0.5\"/>\n<imgpadding=\"3060\"src=\"".concat(_0x5969db, "\"/>\n<verticalw=\"*\"h=\"*\"gravity=\"center\">\n<textgravity=\"center\"color=\"red\"textStyle=\"bold\"textSize=\"60\"text=\"此\"/>\n<textgravity=\"center\"color=\"red\"textStyle=\"bold\"textSize=\"60\"text=\"界\"/>\n<textgravity=\"center\"color=\"red\"textStyle=\"bold\"textSize=\"60\"text=\"面\"/>\n<textgravity=\"center\"color=\"red\"textStyle=\"bold\"textSize=\"60\"text=\"开\"/>\n<textgravity=\"center\"color=\"red\"textStyle=\"bold\"textSize=\"60\"text=\"始\"/>\n</vertical>\n\n\n</card>\n</vertical>\n</drawer>\n"));
    _0x2dcc1d.setContentView(_0x506b32);
    parent = activity.getWindow().getDecorView();
    _0x2dcc1d.showAtLocation(parent, android.view.Gravity.LEFT, -1, -1);
    _0x506b32.viewpager.click(function () {
      _0x2dcc1d.dismiss();
    });
  };
  _0x4c78af.exports = _0x5e8de6;
}, function (_0x39096a, _0x18c860) {
  var _0x337b56 = {
      host: "".concat("https://admin.syjfs.com/")
    },
    _0x911191 = storages.create("wzke:config");
  importClass(android.graphics.drawable.GradientDrawable);
  _0x337b56.getSkinType = function () {
    var _0x94bc0f = _0x911191.get("skinType") != undefined ? _0x911191.get("skinType") : 0;
    _0x94bc0f > 1 && (_0x94bc0f = 0);
    return _0x94bc0f;
  };
  _0x337b56.saveSkinType = function (_0x2cb2b5) {
    _0x911191.put("skinType", parseInt(_0x2cb2b5));
  };
  _0x337b56.selectedTabIndicatorColor = "#b7f9a2";
  _0x337b56.selectedTabIndicatorHeight = 4;
  _0x337b56.memberKey = 1024;
  _0x337b56.setSkin = function () {
    var _0x59ca3a = _0x337b56.getSkinType();
    switch (_0x59ca3a) {
      case 0:
        _0x337b56.skin = "梦之蓝";
        ui.statusBarColor("#287efe");
        _0x337b56.bgColor = "#287efe";
        _0x337b56.color1 = "#287efe";
        _0x337b56.color2 = "#287efe";
        _0x337b56.color3 = "#ffffff";
        _0x337b56.colorButton = "#6A5ACD";
        _0x337b56.selectedTabIndicatorColor = "#f1b567";
        _0x337b56.banner = _0x337b56.host + "/static/imgs/banner3.png";
        break;
      case 1:
        _0x337b56.skin = "海棠红";
        ui.statusBarColor("#ce6372");
        _0x337b56.bgColor = "#ce6372";
        _0x337b56.color1 = "#ce6372";
        _0x337b56.color2 = "#ce6372";
        _0x337b56.color3 = "#ffffff";
        _0x337b56.colorButton = "#f9a580";
        _0x337b56.banner = "https://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/banner_pink.jpg";
        break;
    }
  };
  _0x337b56.setSkin();
  _0x39096a.exports = _0x337b56;
}, function (_0x312b9d, _0x13a7d6, _0x2b9517) {
  var _0x54c9ff = _0x2b9517(7);
  function _0x1a9b24() {
    var _0x3c9888 = this;
    _0x3c9888.win = null;
    _0x3c9888.interval = null;
    _0x3c9888.time = 0;
    _0x3c9888.isRun = -1;
    _0x3c9888.statusBarHight = 0;
    _0x3c9888.index = function () {
      var _0x388457 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : device.width * 0,
        _0x1dcd4f = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : device.height * 0;
      _0x388457 = parseInt(_0x388457);
      thread = threads.start(function () {
        sleep(200);
        _0x3c9888.win == null && _0x3c9888.show(_0x388457, _0x1dcd4f);
      });
      return thread;
    };
    importClass(android.animation.ObjectAnimator);
    importClass(android.animation.ValueAnimator);
    importClass(android.view.animation.LinearInterpolator);
    var _0xd00a8c = "@drawable/ic_eject_black_48dp",
      _0x51a9a4 = "";
    _0x3c9888.show = function (_0x5d28c8, _0xb2fb3a) {
      _0x3c9888.statusBarHight = _0x3c9888.getStatusBarHight();
      _0x3c9888.statusBarHight <= 80 && (_0xb2fb3a += _0x3c9888.statusBarHight);
      var _0x2a1cfa = parseInt(device.width * 0.1);
      "ui";
      _0x51a9a4 = floaty.rawWindow("\n<frameid=\"f\"w=\"auto\"h=\"auto\">\n<imgw=\"*\"h=\"*\"src=\"#000000\"alpha=\"0.5\"radius=\"2\"scaleType=\"center\"borderWidth=\"0px\"borderColor=\"#e6e6e6cc\"/>\n<verticalw=\"*\"h=\"*\"gravity=\"center\">\n<framepadding=\"2\"w=\"".concat(_0x2a1cfa, "px\"h=\"").concat(_0x2a1cfa, "px\"gravity=\"center\"alpha=\"1\">\n<imgid=\"bg1\"w=\"*\"h=\"*\"src=\"#ee534f\"radius=\"2\"scaleType=\"center\"/>\n<imgpadding=\"2\"id=\"stop\"w=\"*\"h=\"*\"src=\"@drawable/ic_highlight_off_black_48dp\"tint=\"#ffffff\"gravity=\"center\"layout_gravity=\"center\"/>\n</frame>\n<verticalid=\"time\"padding=\"2101\">\n<horizontalpadding=\"-1\"gravity=\"center|bottom\">\n<texttextSize=\"12\"id=\"time0\"textColor=\"#ffffff\"text=\"00\"></text>\n<texttextSize=\"6\"marginBottom=\"1\"textColor=\"#ffffff\">时</text>\n</horizontal>\n<horizontalpadding=\"-1\"gravity=\"center|bottom\">\n<texttextSize=\"12\"id=\"time1\"textColor=\"#ffffff\"text=\"00\"></text>\n<texttextSize=\"6\"marginBottom=\"1\"textColor=\"#ffffff\">分</text>\n</horizontal>\n<horizontalpadding=\"-1\"gravity=\"center|bottom\">\n<texttextSize=\"12\"id=\"time2\"textColor=\"#ffffff\"text=\"00\"></text>\n<texttextSize=\"6\"marginBottom=\"1\"textColor=\"#ffffff\">秒</text>\n</horizontal>\n</vertical>\n<framepadding=\"2\"w=\"").concat(_0x2a1cfa, "px\"h=\"").concat(_0x2a1cfa, "px\"gravity=\"center\"alpha=\"1\">\n<imgid=\"bg2\"w=\"*\"h=\"*\"src=\"#3aa8f7\"radius=\"2\"scaleType=\"center\"/>\n<imgpadding=\"2\"id=\"start\"rotation=\"90\"w=\"*\"h=\"*\"src=\"@drawable/ic_eject_black_48dp\"tint=\"#ffffff\"gravity=\"center\"layout_gravity=\"center\"/>\n</frame>\n</vertical>\n</frame>\n"));
      _0x3c9888.win = _0x51a9a4;
      _0x51a9a4.setPosition(_0x5d28c8, _0xb2fb3a);
      _0x3c9888.isRun = 0;
      _0x51a9a4.stop.on("click", function () {
        _0x3c9888.isRun = -1;
        _0x3c9888.clickExit();
      });
      ui.run(function () {
        _0x3c9888.animator = ObjectAnimator.ofFloat(_0x51a9a4.start, "rotation", 90, 360);
        _0x3c9888.animator.setDuration(6000);
        _0x3c9888.animator.setRepeatCount(-1);
        _0x3c9888.animator.setInterpolator(new LinearInterpolator());
        _0x3c9888.animator.setRepeatMode(ValueAnimator.RESTART);
      });
      _0x51a9a4.start.on("click", function () {
        _0x51a9a4.start.attr("src") == _0xd00a8c ? (_0x3c9888.startAnimation(), _0x3c9888.clickStart()) : (_0x3c9888.stopAnimation(), _0x3c9888.clickStop());
      });
      ui.run(function () {
        _0x3c9888.time = 0;
        _0x3c9888.interval = setInterval(function () {
          _0x3c9888.isRun == 1 && _0x3c9888.time++;
          var _0x326e61 = _0x3c9888.time % 60,
            _0x2d1970 = Math.floor(_0x3c9888.time / 60) % 60,
            _0x3319 = Math.floor(_0x3c9888.time / 3600) % 100,
            _0x8c258a = ("0" + _0x3319).slice(-2),
            _0x5d453b = ("0" + _0x2d1970).slice(-2),
            _0x3922c8 = ("0" + _0x326e61).slice(-2);
          _0x51a9a4.time0.setText(_0x8c258a);
          _0x51a9a4.time1.setText(_0x5d453b);
          _0x51a9a4.time2.setText(_0x3922c8);
          _0x326e61 === 59 && _0x54c9ff.addRunTime();
        }, 1000);
      });
      _0x51a9a4.time.setOnTouchListener(function (_0x48a1a7, _0x4ab8f7) {
        try {
          switch (_0x4ab8f7.getAction()) {
            case _0x4ab8f7.ACTION_DOWN:
              return true;
            case _0x4ab8f7.ACTION_MOVE:
              var _0x12b692 = _0x4ab8f7.getRawY() - parseInt(device.width * 0.15);
              _0x3c9888.statusBarHight > 80 && (_0x12b692 -= _0x3c9888.statusBarHight);
              _0x12b692 <= device.height * 0 && (_0x12b692 = device.height * 0);
              _0x12b692 >= device.height * 0.2 && (_0x12b692 = device.height * 0.2);
              _0x51a9a4.setPosition(_0x5d28c8, _0x12b692);
              return true;
            case _0x4ab8f7.ACTION_UP:
              return true;
            default:
              return true;
          }
        } catch (_0x329c4f) {
          log("滑动错误", _0x329c4f);
        }
      });
    };
    _0x3c9888.startAnimation = function () {
      ui.run(function () {
        _0x51a9a4.start.attr("src", "ic_stop_black_48dp");
        _0x3c9888.animator.start();
        _0x3c9888.isRun = 1;
      });
    };
    _0x3c9888.clickStart = function () {};
    _0x3c9888.stopAnimation = function () {
      ui.run(function () {
        _0x51a9a4.start.attr("src", _0xd00a8c);
        _0x3c9888.animator.end();
        _0x51a9a4.start.attr("rotation", "90");
        _0x3c9888.isRun = -1;
      });
    };
    _0x3c9888.clickStop = function () {};
    _0x3c9888.clickExit = function () {
      dialogs.build({
        title: "提示",
        content: "确认要关闭吗?",
        positive: "确认",
        negative: "取消"
      }).on("positive", function () {
        toast("关闭");
        _0x3c9888.close();
        setTimeout(function () {
          exit();
        }, 200);
      }).show();
    };
    _0x3c9888.ClickListener = function (_0x50437c) {
      _0x50437c.clickStart != undefined && (_0x3c9888.clickStart = _0x50437c.clickStart);
      _0x50437c.clickStop != undefined && (_0x3c9888.clickStop = _0x50437c.clickStop);
      _0x50437c.clickExit != undefined && (_0x3c9888.clickExit = _0x50437c.clickExit);
    };
    _0x3c9888.close = function () {
      clearInterval(_0x3c9888.interval);
      _0x3c9888.win.close();
      _0x3c9888.win = null;
      floaty.closeAll();
    };
    _0x3c9888.getStatusBarHight = function () {
      try {
        var _0x254534 = context.getResources(),
          _0x4e903a = _0x254534.getIdentifier("status_bar_height", "dimen", "android"),
          _0x17fe13 = _0x254534.getDimensionPixelSize(_0x4e903a);
        return _0x17fe13;
      } catch (_0x3906e5) {
        return 0;
      }
    };
  }
  _0x312b9d.exports = _0x1a9b24;
}, function (_0x2b819e, _0x1dd5a6, _0x4c9f4d) {
  var _0x1d38ad = _0x4c9f4d(1),
    _0x5041b2 = _0x4c9f4d(7);
  function _0x3602d6() {
    var _0x25244b = this;
    _0x25244b.appName = "抖音";
    var _0x282beb = new (_0x4c9f4d(5))();
    this.launchAppJS = function () {
      version = -1;
      var _0x1e1da0 = "com.ss.android.ugc.aweme.lite",
        _0x332927 = context.getPackageManager().getInstalledPackages(0).toArray();
      for (var _0x33cb84 in _0x332927) {
        if (_0x332927[_0x33cb84].packageName.toString() === _0x1e1da0) {
          version = _0x332927[_0x33cb84].versionName;
        }
      }
      log("极速:", version);
      app.launch(_0x1e1da0);
      return true;
    };
    this.launchAppHs = function () {
      version = -1;
      var _0x52439a = "com.ss.android.ugc.live",
        _0x55129c = context.getPackageManager().getInstalledPackages(0).toArray();
      for (var _0x5850ee in _0x55129c) {
        if (_0x55129c[_0x5850ee].packageName.toString() === _0x52439a) {
          version = _0x55129c[_0x5850ee].versionName;
        }
      }
      log("火山:", version);
      app.launch(_0x52439a);
      return true;
    };
    this.launchApp = function () {
      var _0x1204ae = _0x25244b.getDyVersion();
      app.launch("com.ss.android.ugc.aweme");
      log("DY:", _0x1204ae);
      return true;
    };
    this.getDyVersion = function () {
      var _0x30bb0c = "com.ss.android.ugc.aweme",
        _0x5860ba = context.getPackageManager().getInstalledPackages(0).toArray();
      for (var _0x3e07fb in _0x5860ba) {
        if (_0x5860ba[_0x3e07fb].packageName.toString() === _0x30bb0c) {
          return _0x5860ba[_0x3e07fb].versionName;
        }
      }
    };
    this.waitApp = function () {
      auto.waitFor();
      depth(this.ids.p1_1.depth).id(this.ids.p1_1.id).waitFor();
    };
    this.waitForThisView = function () {};
    this.getThisView = function () {
      var _0x3c1fb2 = null,
        _0x2b7ee6 = null;
      try {
        var _0x405bd8 = className("androidx.viewpager.widget.ViewPager").idContains(":id/viewpager").filter(function (_0x313eac) {
          return _0x313eac.bounds().width() > 0 && _0x313eac.bounds().height() > 0;
        });
        _0x3c1fb2 = _0x405bd8.findOne(20000);
        if (_0x3c1fb2 == null) {
          return null;
        }
        for (var _0x42b49d = 0; _0x42b49d < _0x3c1fb2.childCount(); _0x42b49d++) {
          var _0x7d28f5 = _0x3c1fb2.child(_0x42b49d);
          if (_0x7d28f5.bounds().width() > 0 && _0x7d28f5.bounds().height() > 0) {
            _0x2b7ee6 = _0x3c1fb2.child(_0x42b49d);
            break;
          }
        }
        return _0x2b7ee6;
      } catch (_0x4e1af3) {
        log("getThisView", _0x4e1af3);
        return thisView;
      }
    };
    this.getViewType = function () {
      try {
        var _0x55e086 = _0x25244b.getThisView();
        if (_0x55e086 == null) {
          return "未知";
        }
        var _0x4100cf = text("点击进入直播间").filter(function (_0x3cece8) {
            return _0x3cece8.bounds().width() > 0 && _0x3cece8.bounds().height() > 0;
          }),
          _0x4c2e51 = _0x55e086.findOne(_0x4100cf);
        if (_0x4c2e51 != null) {
          log("视频类型:直播");
          return "直播";
        }
        var _0x32b83c = idContains(":id/desc").textEndsWith("广告").filter(function (_0x4acffc) {
            return _0x4acffc.bounds().width() > 0 && _0x4acffc.bounds().height() > 0;
          }),
          _0x45effc = _0x55e086.findOne(_0x32b83c);
        if (_0x45effc != null) {
          log("视频类型:广告");
          return "广告";
        }
        var _0x528f26 = text("回关").filter(function (_0x6e50d) {
            return _0x6e50d.bounds().width() > 0 && _0x6e50d.bounds().height() > 0;
          }),
          _0x3f0c83 = _0x55e086.findOne(_0x528f26);
        if (_0x3f0c83 != null) {
          log("视频类型:回关");
          return "回关";
        }
        log("视频类型:视频");
        return "视频";
      } catch (_0x3bf33c) {
        log("getViewType", _0x3bf33c);
        return "未知2";
      }
    };
    _0x25244b.isFollowUesr = function () {
      log("观看信息：是否已关注");
      var _0x1c689e = className("TextView").filter(function (_0x5e73c8) {
          if (_0x5e73c8.bounds().width() > 0 && _0x5e73c8.bounds().height() > 0) {
            if (_0x5e73c8.text() == "你的好友" || _0x5e73c8.text() == "你的朋友" || _0x5e73c8.text() == "你的关注") {
              log("用户类型:" + _0x5e73c8.text());
              return true;
            }
          }
          return false;
        }),
        _0x599e1b = _0x1c689e.findOnce();
      if (_0x599e1b != null) {
        return true;
      }
      return false;
    };
    this.watchShipinInfo = function () {
      var _0x3550ae = {
        name: "",
        desc: "",
        dianzanshu: -1,
        pinglunshu: -1
      };
      try {
        _0x3550ae.name = _0x25244b.getShipinUsername();
        _0x3550ae.desc = _0x25244b.getTitleDesc();
        _0x3550ae.dianzanshu = _0x25244b.getDianZanShu();
        _0x3550ae.pinglunshu = _0x25244b.getPinglunShu();
        return _0x3550ae;
      } catch (_0x1e9397) {
        log("watchShipinInfo.error", _0x1e9397);
        return _0x3550ae;
      }
    };
    this.getShipinUsername = function () {
      try {
        var _0x225a1b = _0x25244b.getThisView(),
          _0x3984eb = _0x225a1b.findOne(idContains(":id/title").className("android.widget.TextView"));
        if (_0x3984eb == null) {
          return "";
        }
        log("用户昵称:", _0x3984eb.text());
        return _0x3984eb.text();
      } catch (_0x3a96ba) {
        log("getShipinUsername", _0x3a96ba);
        return "";
      }
    };
    this.titleContain = function (_0x37853c) {
      var _0x38cfb1 = _0x25244b.getShipinUsername();
      for (var _0x2be773 = 0; _0x2be773 < _0x37853c.length; _0x2be773++) {
        var _0x47b9eb = _0x37853c[_0x2be773];
        if (_0x38cfb1.includes(_0x47b9eb)) {
          log("标题中包含:" + _0x47b9eb);
          return true;
        }
      }
      return false;
    };
    this.getTitleDesc = function () {
      try {
        var _0x2527c5 = _0x25244b.getThisView();
        if (_0x2527c5 == null) {
          return "";
        }
        var _0xd8e60f = _0x2527c5.findOne(idContains(":id/desc"));
        if (_0xd8e60f == null) {
          return "";
        }
        log("视频文案:", _0xd8e60f.text());
        return _0xd8e60f.text();
      } catch (_0x4c8cd9) {
        log("getTitleDesc", _0x4c8cd9);
        return "";
      }
    };
    this.descContain = function (_0x5e8656) {
      var _0x5968a8 = _0x25244b.getTitleDesc();
      for (var _0x55c4da = 0; _0x55c4da < _0x5e8656.length; _0x55c4da++) {
        var _0x14ab25 = _0x5e8656[_0x55c4da];
        if (_0x5968a8.includes(_0x14ab25)) {
          log("文案中包含:" + _0x14ab25);
          return true;
        }
      }
      return false;
    };
    this.checkNum = function (_0x455fb0) {
      _0x455fb0 = _0x455fb0 + "";
      if (_0x455fb0.includes("万")) {
        _0x455fb0 = _0x455fb0.replace("万", "");
        _0x455fb0 = _0x455fb0 * 10000;
      } else {
        _0x455fb0.includes("亿") && (_0x455fb0 = _0x455fb0.replace("亿", ""), _0x455fb0 = _0x455fb0 * 100000000);
      }
      return _0x455fb0;
    };
    this.handlerStr = function _0x5cc1b5(_0x2d8a14) {
      var _0x204165 = /(1[0-9]{2,10})|([0-9]{3,4})?[0-9]{7,8}|[\d\w]+\b@[a-zA-ZA-z0-9]+.[a-z]+/g,
        _0x562475 = _0x2d8a14.replace(/\s|[(]|[)]|[（]|[）]|[-]*/g, ""),
        _0x473a53 = _0x562475.match(_0x204165);
      if (_0x473a53 == null) {
        return null;
      }
      for (var _0xc299df = 0; _0xc299df < _0x473a53.length; _0xc299df++) {
        var _0x3d4e34 = _0x473a53[_0xc299df];
        if (_0x3d4e34.length == 11) {
          return _0x3d4e34;
        }
      }
      return null;
    };
    this.watchUsercenterTel = function () {
      var _0x3564a1 = textStartsWith("IP：").findOnce();
      if (_0x3564a1 != null) {
        var _0x369130 = _0x3564a1.parent().parent().childCount();
        log(_0x369130);
        if (_0x369130 >= 2) {
          return true;
        }
      }
      return false;
      log("获取电话：");
      sleep(1000);
      try {} catch (_0x272354) {
        log("watchUsercenterTel", _0x272354);
        return null;
      }
    };
    this.getUsercenter_data = function () {
      var _0xb7ea28 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "获赞";
      try {
        var _0x5d3289 = -1,
          _0x2976d2 = text(_0xb7ea28).className("android.widget.TextView").filter(function (_0x42e3eb) {
            return _0x42e3eb.bounds().width() > 0 && _0x42e3eb.bounds().height() > 0;
          }),
          _0x4b4f89 = _0x2976d2.findOnce();
        if (_0x4b4f89 != null) {
          var _0x20e929 = className("android.widget.TextView").filter(function (_0x35c20a) {
              if (_0x35c20a.text() != _0xb7ea28) {
                return true;
              }
            }),
            _0x13fbfe = _0x4b4f89.parent().findOne(_0x20e929);
          if (_0x13fbfe != null) {
            _0x5d3289 = parseInt(_0x25244b.checkNum(_0x13fbfe.text()));
            if (_0x5d3289 !== _0x5d3289) {
              _0x5d3289 = 0;
            }
          }
        }
        log(_0xb7ea28, ":", _0x5d3289);
        return _0x5d3289;
      } catch (_0x7f7cd3) {
        log("getUsercenter_data.error", _0xb7ea28);
        return -1;
      }
    };
    this.getUsercenter_zuopin = function () {
      var _0x20c08b = -1,
        _0x37c6d0 = textStartsWith("作品").id("android:id/text1").findOne(3000);
      _0x37c6d0 != null && (str = _0x37c6d0.text(), str = str.replace("作品", ""), str = str.replace("", ""), str == "" ? _0x20c08b = 0 : _0x20c08b = parseInt(_0x25244b.checkNum(str)));
      log("作品:", _0x20c08b);
      return _0x20c08b;
    };
    this.watchUercenterInfo = function () {
      var _0x2ca61d = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      sleep(2000);
      var _0xd43a19 = {
        totalzan: _0x25244b.getUsercenter_data("获赞"),
        totalguanzhu: _0x25244b.getUsercenter_data("关注"),
        fensi: _0x25244b.getUsercenter_data("粉丝"),
        id: "",
        name: "",
        remark: "",
        zuopin: _0x25244b.getUsercenter_zuopin(),
        xihuan: 0
      };
      try {
        if (_0x2ca61d && _0x25244b.JumpUsercenterToMore()) {
          var _0x5eb9ac = _0x25244b.watchMoreInfo();
          _0xd43a19.id = _0x5eb9ac.id;
          _0xd43a19.name = _0x5eb9ac.name;
          back();
        }
        sleep(1000);
        return _0xd43a19;
      } catch (_0x14097b) {
        log("watchUercenterInfo", _0x14097b);
        return _0xd43a19;
      }
    };
    _0x25244b.watchUserCenterZuopinShu = function () {
      var _0x3e6e56 = 0,
        _0x19e2e3 = textStartsWith("作品").id("android:id/text1").findOne(3000);
      if (_0x19e2e3 != null) {
        var _0x232153 = _0x19e2e3.text().replace("作品", "");
        _0x232153 == "" ? _0x232153 = 0 : 1;
        _0x3e6e56 = parseInt(_0x232153);
      }
      log("作品数：" + _0x3e6e56);
      return _0x3e6e56;
    };
    this.watchUserSex = function () {
      toastLog("观看信息:用户性别");
      sleep(2000);
      var _0x3677d3 = -1;
      try {
        var _0x4b9270 = "/sdcard/1/man.jpg",
          _0xe3f1ab = _0x1d38ad.host + "/static/imgs/man.jpg",
          _0x5a4a4a = "/sdcard/1/women.jpg",
          _0x3dfaed = _0x1d38ad.host + "/static/imgs/women.jpg",
          _0x431f2 = threads.disposable();
        threads.start(function () {
          if (!files.exists(_0x4b9270)) {
            var _0x1d46cf = http.get(_0xe3f1ab);
            _0x1d46cf.statusCode == 200 && (files.create("/sdcard/1/"), files.writeBytes(_0x4b9270, _0x1d46cf.body.bytes()));
          }
          if (!files.exists(_0x5a4a4a)) {
            var _0x1d46cf = http.get(_0x3dfaed);
            _0x1d46cf.statusCode == 200 && (files.create("/sdcard/1/"), files.writeBytes(_0x5a4a4a, _0x1d46cf.body.bytes()));
          }
          var _0x232639 = {
            threshold: 0.7
          };
          sleep(500);
          var _0x42bcc8 = captureScreen(),
            _0x2eb413 = images.read(_0x4b9270),
            _0x405afe = findImage(_0x42bcc8, _0x2eb413, _0x232639);
          _0x405afe && (_0x3677d3 = 1, log("男"));
          var _0x3a1393 = images.read(_0x5a4a4a),
            _0x10f2b5 = findImage(_0x42bcc8, _0x3a1393, _0x232639);
          _0x10f2b5 && (_0x3677d3 = 2, log("女"));
          _0x2eb413.recycle();
          _0x3a1393.recycle();
          _0x431f2.setAndNotify(_0x3677d3);
        });
        var _0x717337 = parseInt(_0x431f2.blockedGet());
        return _0x717337;
      } catch (_0x4ba07f) {
        log("httpload", _0x4ba07f);
        return _0x3677d3;
      }
    };
    this.watchMoreInfo = function () {
      try {
        toastLog("获取信息");
        var _0x250365 = textStartsWith("抖音号:").findOne(3000),
          _0x43b4b6 = {
            id: _0x250365.text().replace("抖音号:", ""),
            name: _0x250365.parent().parent().child(0).child(0).text()
          };
        _0x250365 != null && (log("id:" + _0x43b4b6.id), log("昵称:" + _0x43b4b6.name));
        sleep(2000);
        return _0x43b4b6;
      } catch (_0x12ee50) {
        log("getName", _0x12ee50);
        return false;
      }
    };
    _0x25244b.clickUsercenterGuanzhu = function () {
      toastLog("用户中心:点击关注");
      sleep(1000);
      try {
        var _0x5ac601 = className("android.widget.TextView").filter(function (_0x3bf137) {
            if (_0x3bf137.bounds().width() > 0 && _0x3bf137.bounds().height() > 0) {
              return true;
            }
            return false;
          }),
          _0x3024e7 = _0x5ac601.text("关注").clickable(true).findOne(1000);
        _0x3024e7 != null ? _0x3024e7.click() : toastLog("已经关注");
        sleep(1000);
        _0x5041b2.addRunData("follow");
        _0x5041b2.addRunData("visit");
      } catch (_0x560b97) {
        log("clickUsercenterGuanzhu", _0x560b97);
        return false;
      }
    };
    this.clickGuanzhu = function () {
      toastLog("观看视频:点击关注");
      sleep(1000);
      try {
        var _0x3b2a53 = null,
          _0x2e7f02 = device.width * 0.8,
          _0x506f70 = device.height * 0.2,
          _0x2f6eeb = device.width,
          _0x3e9adf = device.height * 0.8,
          _0x5c62ac = className("android.widget.ImageView").boundsInside(_0x2e7f02, _0x506f70, _0x2f6eeb, _0x3e9adf).filter(function (_0x4f20d7) {
            var _0xec1f9b = _0x4f20d7.bounds().width() > 0 && _0x4f20d7.bounds().width() <= 84 && _0x4f20d7.bounds().height() > 0 && _0x4f20d7.bounds().height() <= 84;
            return _0xec1f9b;
          }),
          _0x3b2a53 = _0x5c62ac.findOnce();
        _0x3b2a53 != null && _0x3b2a53.parent().click();
        sleep(1000);
      } catch (_0x22e791) {
        log("clickGuanzhu", _0x22e791);
        return false;
      }
      _0x5041b2.addRunData("follow");
    };
    _0x25244b.getDianZanShu = function () {
      try {
        var _0x5873dd = 0,
          _0x5a77c4 = device.width * 0.8,
          _0x3d2e75 = device.height * 0.15,
          _0x28860c = device.width - 10,
          _0x4ed4c7 = parseInt(device.height * 0.65),
          _0x5ae0f0 = className("TextView").boundsInside(_0x5a77c4, _0x3d2e75, _0x28860c, _0x4ed4c7).filter(function (_0x4c11b1) {
            return _0x4c11b1.bounds().width() > 0 && _0x4c11b1.bounds().height() > 0 && _0x4c11b1.text() != "";
          }),
          _0xaa7cb2 = _0x5ae0f0.clickable(true).findOnce();
        if (_0xaa7cb2 != null) {
          var _0x5873dd = _0xaa7cb2.text();
          if (_0x5873dd == "赞") {
            _0x5873dd = "0";
          }
          _0x5873dd = parseInt(_0x25244b.checkNum(_0x5873dd));
        }
        log("视频点赞:", _0x5873dd);
        return _0x5873dd;
      } catch (_0x5870c6) {
        log("getDianZanShu", _0x5870c6);
        return -1;
      }
    };
    this.clickDianzan = function () {
      log("观看视频:点击小星星");
      var _0xbb8bf4 = device.width * 0.8,
        _0x5d8263 = device.height * 0.15,
        _0x18efdd = device.width,
        _0x7e7b9c = parseInt(device.height * 0.8),
        _0x25fc53 = className("android.widget.LinearLayout").descContains("点赞，喜欢").boundsInside(_0xbb8bf4, _0x5d8263, _0x18efdd, _0x7e7b9c).filter(function (_0x2c2409) {
          return _0x2c2409.bounds().width() > 0 && _0x2c2409.bounds().height() > 0;
        }),
        _0x53ffa2 = _0x25fc53.clickable(true).findOnce();
      _0x53ffa2 != null && (_0x53ffa2.click(), sleep(1000));
      _0x5041b2.addRunData("like");
    };
    _0x25244b.getPinglunObj = function () {
      try {
        var _0x378ea9 = null,
          _0xa6609f = device.width * 0.8,
          _0x46c006 = device.height * 0.15,
          _0x52610b = device.width,
          _0x305cbf = device.height * 0.8,
          _0xfb6719 = className("TextView").boundsInside(_0xa6609f, _0x46c006, _0x52610b, _0x305cbf).filter(function (_0x59a7e8) {
            if (_0x59a7e8.bounds().width() <= 0 || _0x59a7e8.bounds().height() <= 0 || _0x59a7e8.text() == "") {
              return false;
            }
            return true;
          }),
          _0x3d9beb = _0xfb6719.find();
        if (_0x3d9beb.length == 0) {
          return null;
        }
        var _0x378ea9 = _0x3d9beb[1];
        return _0x378ea9;
      } catch (_0xa5c564) {
        log("getPinglunObj", _0xa5c564);
        return null;
      }
    };
    _0x25244b.getPinglunShu = function () {
      var _0x52221f = 0;
      try {
        var _0x450125 = device.width * 0.8,
          _0x9e68d8 = device.height * 0.15,
          _0x24d93b = device.width,
          _0x172613 = device.height * 0.8,
          _0x2fbf6c = idContains(":id/comment_container").boundsInside(_0x450125, _0x9e68d8, _0x24d93b, _0x172613).filter(function (_0x1ce418) {
            return _0x1ce418.bounds().width() > 0 && _0x1ce418.bounds().height() > 0;
          }),
          _0x298bf6 = _0x2fbf6c.findOne(2000);
        if (_0x298bf6 != null) {
          var _0xf5e8f8 = _0x298bf6.child(0),
            _0x4fc0af = _0xf5e8f8.getContentDescription();
          _0x4fc0af = _0x4fc0af.replace("评论", "");
          _0x4fc0af = _0x4fc0af.replace("，按钮", "");
          if (_0x4fc0af == "写评论" || _0x4fc0af == "抢首评") {
            _0x4fc0af = "0";
          }
          _0x52221f = parseInt(_0x25244b.checkNum(_0x4fc0af));
        }
        log("视频评论:", _0x52221f);
        return _0x52221f;
      } catch (_0x25074a) {
        log("getPinglunShu", _0x25074a);
        return -1;
      }
    };
    this.clickPinlunqu = function () {
      log("打开页面:评论区");
      sleep(1000);
      try {
        var _0x2ff447 = device.width * 0.8,
          _0x26ca9c = device.height * 0.15,
          _0x389599 = device.width,
          _0x180b8e = device.height * 0.8,
          _0x1211cc = idContains(":id/comment_container").boundsInside(_0x2ff447, _0x26ca9c, _0x389599, _0x180b8e).filter(function (_0x1056d8) {
            return _0x1056d8.bounds().width() > 0 && _0x1056d8.bounds().height() > 0;
          }),
          _0x296270 = _0x1211cc.findOne(2000);
        if (_0x296270 == null) {
          log("打开页面:评论区失败");
          return;
        }
        _0x296270.click();
        sleep(2000);
        var _0x3b5f50 = desc("返回，按钮").findOnce();
        _0x3b5f50 != null && (_0x3b5f50.click(), sleep(2000));
        return true;
      } catch (_0x33458b) {
        log("clickPinlunqu", _0x33458b);
        return false;
      }
    };
    this.closePinlunquOnce = function () {
      log("界面检验:2");
      var _0xf7e81e = className("android.view.View").clickable(true).desc("返回，按钮").findOnce();
      _0xf7e81e != null && (log("关闭输入法"), _0xf7e81e.click(), sleep(2000));
      log("界面检验:1");
      var _0x287ec7 = className("android.widget.ImageView").filter(function (_0x2269e1) {
          return _0x2269e1.bounds().width() > 0 && _0x2269e1.bounds().height() > 0 && _0x2269e1.bounds().centerY() < device.height * 0.6;
        }),
        _0x4f27b4 = _0x287ec7.desc("关闭").clickable(true).findOnce();
      _0x4f27b4 != null && (log("关闭页面:关闭"), _0x4f27b4.click(), sleep(2000));
    };
    this.clickShoucang = function () {
      log("观看视频:点击收藏");
      var _0xe05c15 = device.width * 0.8,
        _0x232f67 = device.height * 0.15,
        _0x37b042 = device.width,
        _0x391183 = parseInt(device.height * 0.8),
        _0x3b6bfd = className("android.widget.LinearLayout").descContains("未选中，收藏").boundsInside(_0xe05c15, _0x232f67, _0x37b042, _0x391183).filter(function (_0x941e3) {
          return _0x941e3.bounds().width() > 0 && _0x941e3.bounds().height() > 0;
        }),
        _0xeddcd3 = _0x3b6bfd.clickable(true).findOnce();
      _0xeddcd3 != null && (_0xeddcd3.click(), sleep(1000));
    };
    this.play_media = function (_0x4fd318) {
      var _0x542927 = new android.media.MediaPlayer();
      _0x542927.setDataSource(context, android.media.RingtoneManager.getDefaultUri(android.media.RingtoneManager.TYPE_RINGTONE));
      _0x542927.prepare();
      _0x542927.start();
      threads.start(function () {
        sleep(_0x4fd318 * 1000);
        if (_0x542927.isPlaying()) {
          _0x542927.stop();
        }
      });
      return _0x542927;
    };
    this.getZuopinPubdate = function () {
      var _0x457cdc = filter(function (_0xe3686f) {
          return _0xe3686f.bounds().width() > 0 && _0xe3686f.bounds().height() > 0;
        }),
        _0x26947c = _0x457cdc.descStartsWith("发布时间：").className("android.widget.TextView").findOnce();
      if (_0x26947c) {
        var _0x23179c = _0x26947c.desc().toString(),
          _0x477761 = _0x23179c.match(/\d{4}-\d{2}-\d{2}/);
        if (_0x477761) {
          log("发布日期：" + _0x477761[0]);
          return _0x477761[0];
        }
      }
      return null;
    };
    _0x25244b.getPositionDistance = function () {
      var _0x5c8718 = device.width * 0,
        _0x247966 = device.height * 0.5,
        _0x891180 = device.width * 0.5,
        _0xcb1742 = parseInt(device.height),
        _0x235120 = className("android.widget.TextView").textContains("km").boundsInside(_0x5c8718, _0x247966, _0x891180, _0xcb1742).filter(function (_0x2a3d0a) {
          return _0x2a3d0a.bounds().width() > 0 && _0x2a3d0a.bounds().height() > 0;
        }),
        _0x4a4648 = _0x235120.findOnce();
      if (_0x4a4648 != null) {
        var _0x5e8178 = _0x4a4648.text();
        _0x5e8178 = _0x5e8178.replace("km", "");
        _0x5e8178 = _0x5e8178.replace(">", "");
        _0x5e8178 = parseFloat(_0x5e8178);
        return _0x5e8178;
      }
      return -1;
    };
    this.isPinglunquPhone = function () {
      var _0x3b3f3a = className("android.widget.TextView").filter(function (_0x1be4db) {
          if (_0x1be4db.bounds().width() > 0 && _0x1be4db.bounds().height() > 0) {
            if (_0x1be4db.text() == "官方电话详情") {
              return true;
            }
            if (_0x1be4db.text() == "联系电话详情") {
              return true;
            }
            if (_0x1be4db.text() == "联系我们详情") {
              return true;
            }
          }
          return false;
        }),
        _0x1299d3 = _0x3b3f3a.findOnce();
      if (_0x1299d3 != null) {
        return true;
      }
      return false;
    };
    _0x25244b.jumpToMainpage = function () {
      app.startActivity({
        data: "snssdk1128://feed?type=2"
      });
    };
    _0x25244b.jumpToUsercenter = function () {
      app.startActivity({
        action: "android.intent.action.VIEW",
        data: "snssdk1128://user/profile/72673737181?refer=web&gd_label=click_wap_download_follow&type=need_follow&needlaunchlog=1",
        packageName: "com.ss.android.ugc.aweme"
      });
    };
    this.jumpUsercenterToPhone = function () {
      var _0x416231 = textContains("[label]查看门店").filter(function (_0x243aa7) {
          return _0x243aa7.bounds().width() > 0 && _0x243aa7.bounds().height() > 0;
        }),
        _0x470c21 = _0x416231.findOnce();
      if (_0x470c21 == null) {
        return false;
      }
      _0x470c21.parent().click();
      sleep(3000);
      uc2 = text("电话").clickable(true).filter(function (_0x220318) {
        return _0x220318.bounds().width() > 0 && _0x220318.bounds().height() > 0;
      });
      var _0x351c37 = uc2.findOnce();
      if (_0x351c37 == null) {
        back();
        sleep(2000);
        return false;
      }
      click(_0x351c37.bounds().centerX(), _0x351c37.bounds().centerY());
      sleep(2000);
      return true;
    };
    this.isHavePosionPhone = function () {
      var _0x1594f2 = id("com.ss.android.ugc.aweme:id/okp").filter(function (_0x5d219e) {
          return _0x5d219e.bounds().width() > 0 && _0x5d219e.bounds().height() > 0;
        }),
        _0x1bad36 = _0x1594f2.findOnce();
      if (_0x1bad36 == null) {
        return false;
      }
      _0x1bad36.parent().parent().parent().click();
      sleep(1000);
      uc2 = text("电话").clickable(true).filter(function (_0x4bfbe0) {
        return _0x4bfbe0.bounds().width() > 0 && _0x4bfbe0.bounds().height() > 0;
      });
      var _0x376df9 = uc2.findOne(2000);
      return _0x376df9 == null ? (log("未发现电话"), back(), sleep(1000), false) : (log("发现电话"), back(), sleep(1000), true);
    };
    this.jumpShipinToPostionPhone = function () {
      var _0x29310c = id("com.ss.android.ugc.aweme:id/okp").filter(function (_0x56d742) {
          return _0x56d742.bounds().width() > 0 && _0x56d742.bounds().height() > 0;
        }),
        _0x1ee41d = _0x29310c.findOnce();
      if (_0x1ee41d == null) {
        return false;
      }
      _0x1ee41d.parent().parent().parent().click();
      sleep(2000);
      uc2 = text("电话").clickable(true).filter(function (_0x2e7f01) {
        return _0x2e7f01.bounds().width() > 0 && _0x2e7f01.bounds().height() > 0;
      });
      var _0x4f0633 = uc2.findOnce();
      if (_0x4f0633 == null) {
        back();
        sleep(2000);
        return false;
      }
      click(_0x4f0633.bounds().centerX(), _0x4f0633.bounds().centerY());
      sleep(2000);
      return true;
    };
    this.backShipinToPostionPhone = function () {
      click("取消");
      sleep(2000);
      back();
      sleep(2000);
    };
    this.isUsercenterPhone = function () {
      var _0x2d4562 = className("android.widget.TextView").filter(function (_0x49c00c) {
          if (_0x49c00c.text() == "[label]查看门店") {
            return true;
          }
          if (_0x49c00c.text() == "[label]官方电话") {
            return true;
          }
          if (_0x49c00c.text() == "[label]联系方式") {
            return true;
          }
          if (_0x49c00c.text() == "[label]联系电话") {
            return true;
          }
          if (_0x49c00c.text() == "[label]联系我们") {
            return true;
          }
          return false;
        }),
        _0x1a953b = _0x2d4562.findOnce();
      if (_0x1a953b == null) {
        return false;
      }
      return true;
    };
    this.textSend = function (_0x275bd9) {
      toastLog("开始留言");
      if (_0x275bd9 == "") {
        return false;
      }
      sleep(1000);
      try {
        var _0x31708a = text("联系客服").findOne(500),
          _0x49a167 = text("抖音店铺").findOne(500);
        if (_0x31708a != null || _0x49a167 != null) {
          var _0x3f7056 = _0x31708a.parent().parent().parent().child(0);
          _0x3f7056.click();
          sleep(1000);
        }
        if (!setText(_0x275bd9)) {
          input(_0x275bd9);
        }
        sleep(2000);
        var _0x5623cd = desc("发送").findOne(3000);
        if (_0x5623cd != null) {
          _0x5623cd.click();
        } else {
          var _0x27735d = desc("返回，按钮").findOnce();
          _0x27735d != null && (_0x27735d.click(), sleep(2000));
        }
        sleep(2000);
        return true;
      } catch (_0x15b87b) {
        log("textSend", _0x15b87b);
        return false;
      }
    };
    _0x25244b.pinglun = function (_0x28321e) {
      var _0x10f33d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      toastLog("开始评论");
      sleep(1000);
      try {
        if (_0x28321e != "") {
          var _0x144f3a = 0,
            _0x3202d5 = device.height * 0.7,
            _0x523113 = device.width,
            _0x44bcfd = device.height * 2,
            _0x53eaaa = boundsInside(_0x144f3a, _0x3202d5, _0x523113, _0x44bcfd).filter(function (_0x3ccff4) {
              return _0x3ccff4.bounds().width() > 0 && _0x3ccff4.bounds().height() > 0;
            }),
            _0x3f2613 = _0x53eaaa.className("android.widget.EditText").clickable(true).findOne(3000);
          _0x3f2613 && (_0x3f2613.click(), sleep(2000), _0x25244b.actionPinglunSend(_0x28321e, _0x10f33d));
        }
      } catch (_0x7ddf7a) {
        log("pinglun", _0x7ddf7a);
        return false;
      }
    };
    this.pinglunHuifuDianzan = function (_0x526139) {
      toastLog("评论点赞");
      sleep(2000);
      _0x526139 == undefined && (_0x526139 = 1);
      try {
        var _0x2b0289 = desc("表情").findOne(3000),
          _0x3386bc = _0x2b0289.parent().parent().parent().parent(),
          _0x593a1a = _0x3386bc.parent().findOne(className("androidx.recyclerview.widget.RecyclerView"));
        if (_0x593a1a == null) {
          toastLog("评论区点赞失败");
          sleep(2000);
          return false;
        }
        var _0x568907 = _0x526139;
        for (var _0x3cfaca = 0; _0x3cfaca < _0x593a1a.childCount(); _0x3cfaca++) {
          var _0x40e2f8 = _0x593a1a.child(_0x3cfaca);
          if (_0x40e2f8.getContentDescription() != null) {
            toastLog("评论点赞:" + _0x568907);
            var _0x48f569 = _0x40e2f8.findOne(clickable(true).className("android.view.View"));
            _0x48f569.click();
            sleep(1000);
            _0x568907--;
          }
          if (_0x568907 == 0) {
            break;
          }
        }
      } catch (_0x220b0f) {
        toastLog("评论区点赞失败");
        sleep(2000);
        log("pinglunHuifuDianzan", _0x220b0f);
        return false;
      }
    };
    this.pinglunHuifu = function (_0x566913, _0x5e7984) {
      try {
        toastLog("评论操作:楼层回复");
        var _0x4685c9 = desc("表情").findOne(3000),
          _0x463da4 = _0x4685c9.parent().parent().parent().parent(),
          _0x1dbfcb = _0x463da4.findOne(className("androidx.recyclerview.widget.RecyclerView"));
        if (_0x1dbfcb == null) {
          return false;
        }
        var _0x2dd2be = _0x566913;
        for (var _0x531909 = 0; _0x531909 < _0x1dbfcb.childCount(); _0x531909++) {
          var _0x5d65e0 = _0x1dbfcb.child(_0x531909);
          if (_0x5d65e0.getContentDescription() != null) {
            var _0x463da4 = _0x5d65e0.findOne(text("回复"));
            _0x463da4.click();
            sleep(2000);
            _0x25244b.actionPinglunSend(_0x5e7984);
            sleep(2000);
            _0x2dd2be--;
          }
          if (_0x2dd2be == 0) {
            break;
          }
        }
      } catch (_0x3596fb) {
        log("pinglunHuifu", _0x3596fb);
        return false;
      }
    };
    _0x25244b.testZhongzihao = function (_0x38f902) {
      var _0x2316dc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1,
        _0x38fc76 = _0x282beb.msg10007({
          start: _0x38f902,
          count: _0x2316dc
        }),
        _0x27f63a = _0x38fc76.data;
      for (var _0x4fd109 = 0; _0x4fd109 < _0x27f63a.length; _0x4fd109++) {
        var _0x22806e = _0x27f63a[_0x4fd109],
          _0x1f170e = _0x22806e.dy_id;
        log(_0x4fd109, _0x1f170e);
        var _0x5705a2 = _0x25244b.jumpMainToFensi("testZhongzihao", _0x1f170e);
        for (var _0x26dfce = 0; _0x5705a2 && _0x26dfce < 5; _0x26dfce++) {
          back();
          sleep(1000);
        }
        !_0x5705a2 && log("-----------------------------", _0x1f170e, "----------------------------");
      }
    };
    this.jumpMainToFensi = function (_0x3758cb) {
      var _0x3db195 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      log("搜索:", "开始");
      sleep(1000);
      var _0x2b134a = device.width * 0.5,
        _0x11f029 = device.height * 0,
        _0x2e02b6 = device.width,
        _0x15a5bf = device.height * 0.5,
        _0x9af7ee = boundsInside(_0x2b134a, _0x11f029, _0x2e02b6, _0x15a5bf).filter(function (_0x3ec878) {
          return _0x3ec878.bounds().width() > 0 && _0x3ec878.bounds().height() > 0;
        }),
        _0x251c5b = _0x9af7ee.className("android.widget.Button").desc("搜索").findOnce();
      if (_0x251c5b == null) {
        log("搜索:", "返回1");
        back();
        sleep(2500);
        return false;
      }
      log("搜索:", "进入搜索页");
      var _0x1f0187 = _0x251c5b.parent().parent().parent().click();
      sleep(2000);
      if (!_0x1f0187) {
        var _0x2a7d86 = _0x251c5b.parent().parent().click();
        sleep(2000);
        !_0x2a7d86 && (_0x251c5b.click(), sleep(2000));
      }
      var _0x216f1b = className("android.widget.EditText").findOnce();
      if (_0x216f1b == null) {
        log("搜索:", "返回2");
        back();
        sleep(2500);
        return false;
      }
      if (_0x3758cb == "J2.zidong") {
        log("搜索:", "1");
        var _0x4ae7f4 = _0x282beb.msg10005();
        sleep(1000);
        _0x3db195 = _0x4ae7f4.data;
        log("搜索:", _0x3db195);
      }
      _0x216f1b.setText(_0x3db195);
      sleep(2000);
      var _0x16a67d = desc("搜索").findOne(1000);
      if (_0x16a67d == null) {
        log("搜索:", "未发现搜索按钮");
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      click(_0x16a67d.bounds().centerX(), _0x16a67d.bounds().centerY());
      sleep(3000);
      log("搜索:", "进入用户中心");
      var _0x2b134a = device.width * 0.1,
        _0x11f029 = device.height * 0.1,
        _0x2e02b6 = device.width,
        _0x15a5bf = device.height * 0.95,
        _0x5bb9dc = boundsInside(_0x2b134a, _0x11f029, _0x2e02b6, _0x15a5bf).filter(function (_0x170d29) {
          return _0x170d29.bounds().width() > 0 && _0x170d29.bounds().height() > 0;
        }),
        _0x40a5d8 = _0x5bb9dc.textContains("抖音号：" + _0x3db195).findOne(2000);
      if (_0x40a5d8 == null) {
        _0x40a5d8 = descContains("，粉丝:").textEndsWith("，按钮").findOne(5000);
        if (_0x40a5d8 == null) {
          log("搜索:", "未发现此用户");
          back();
          sleep(3000);
          back();
          sleep(3000);
          back();
          sleep(3000);
          return false;
        }
      }
      click(_0x40a5d8.bounds().centerX(), _0x40a5d8.bounds().centerY());
      sleep(3000);
      log("搜索:", "进入粉丝列表");
      var _0x282369 = _0x25244b.isPrivateOrBan(),
        _0x2bd7e2 = _0x25244b.getUsercenter_data("粉丝");
      if (!_0x282369 || _0x2bd7e2 >= 0 && _0x2bd7e2 <= 500 || _0x2bd7e2 >= 10000) {
        !_0x282369 && log("搜索:", "私密账号");
        _0x2bd7e2 <= 500 && log("搜索:", "粉丝小于500");
        _0x2bd7e2 >= 10000 && log("搜索:", "粉丝大于1万");
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x2bd7e2 >= 8000;
      var _0x4458e2 = text("粉丝").findOne(1000);
      if (_0x4458e2 == null) {
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x4458e2.parent().click();
      sleep(3000);
      var _0x596b3e = _0x25244b.getUsercenter_data("粉丝");
      if (_0x596b3e != -1) {
        log("搜索", "进入粉丝列表失败");
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x282beb.addSeedRunCout(_0x3db195);
      return true;
    };
    this.jumpMainToSearchUserList = function () {
      var _0x3b21e9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
      log("搜索:", "开始");
      sleep(1000);
      var _0x52b482 = device.width * 0.5,
        _0x576015 = device.height * 0,
        _0x21192a = device.width,
        _0x3e5f55 = device.height * 0.5,
        _0x54f0c7 = boundsInside(_0x52b482, _0x576015, _0x21192a, _0x3e5f55).filter(function (_0xf8c34b) {
          return _0xf8c34b.bounds().width() > 0 && _0xf8c34b.bounds().height() > 0;
        }),
        _0x5e2cb4 = _0x54f0c7.className("android.widget.Button").desc("搜索").findOnce();
      if (_0x5e2cb4 == null) {
        log("搜索:", "返回1");
        back();
        sleep(2500);
        return false;
      }
      log("搜索:", "进入搜索页");
      var _0x5adf2a = _0x5e2cb4.parent().parent().parent().click();
      sleep(2000);
      if (!_0x5adf2a) {
        var _0x1dd3b1 = _0x5e2cb4.parent().parent().click();
        sleep(2000);
        !_0x1dd3b1 && (_0x5e2cb4.click(), sleep(2000));
      }
      var _0x26c77d = className("android.widget.EditText").findOnce();
      if (_0x26c77d == null) {
        log("搜索:", "返回2");
        back();
        sleep(2500);
        return false;
      }
      log("搜索:", _0x3b21e9);
      _0x26c77d.setText(_0x3b21e9);
      sleep(2000);
      var _0xba399a = desc("搜索").findOne(1000);
      if (_0xba399a == null) {
        log("搜索:", "未发现搜索按钮");
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      click(_0xba399a.bounds().centerX(), _0xba399a.bounds().centerY());
      sleep(3000);
      var _0x518cce = id("android:id/text1").text("用户").className("android.widget.Button").findOnce();
      if (_0x518cce == null) {
        log("搜索:", "未发现用户按钮");
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      _0x518cce.parent().parent().click();
      sleep(3000);
      _0x518cce = id("android:id/text1").text("用户").className("android.widget.Button").findOnce();
      if (_0x518cce && !_0x518cce.selected()) {
        log("搜索", "进入用户列表失败");
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        back();
        sleep(3000);
        return false;
      }
      return true;
    };
    this.clickSearchinput = function (_0x4163f4) {
      toastLog("开始搜索");
      var _0x16bd84 = className("android.widget.Button").desc("搜索").findOne(10000);
      if (_0x16bd84 == null) {
        return false;
      }
      _0x16bd84.parent().parent().click();
      sleep(2000);
      className("android.widget.EditText").findOne().setText(_0x4163f4);
      sleep(2000);
      var _0x16bd84 = desc("搜索").findOne();
      click(_0x16bd84.bounds().centerX(), _0x16bd84.bounds().centerY());
      return true;
    };
    this.zhibopinglun = function (_0x49d0d7) {
      log("直播弹幕:");
      sleep(1000);
      var _0x2dd8ab = _0x25244b.getThisView();
      if (_0x2dd8ab == null) {
        return false;
      }
      var _0xaf90a9 = _0x2dd8ab.findOne(text("说点什么..."));
      if (_0xaf90a9 == null) {
        return false;
      }
      _0xaf90a9.click();
      sleep(1000);
      log(_0x49d0d7);
      _0x25244b.textSend(_0x49d0d7);
      sleep(1000);
    };
    this.JumpShipinToUsercenter = function () {
      toastLog("进入个人中心");
      try {
        var _0x30b483 = _0x25244b.getThisView(),
          _0x395966 = _0x30b483.findOne(idContains(":id/title").className("android.widget.TextView"));
        if (_0x395966 == null) {
          toastLog("进入个人中心失败");
          return false;
        }
        _0x395966.click();
        sleep(3000);
        var _0xec3c6c = textStartsWith("作品").findOnce();
        if (_0xec3c6c == null) {
          return false;
        }
        _0x5041b2.addRunData("visit");
        return true;
      } catch (_0x39caa1) {
        log("JumpShipinToUsercenter", _0x39caa1);
        return false;
      }
    };
    this.jumpUsercenterTouxiang = function () {
      try {
        log("进入头像点赞");
        sleep(1000);
        var _0x3f3d32 = desc("用户头像").findOnce();
        if (_0x3f3d32 == null) {
          return false;
        }
        _0x3f3d32.click();
        sleep(3000);
        var _0x4d59e4 = text("点赞").findOnce();
        _0x4d59e4 != null && (log("头像点赞"), _0x4d59e4.parent().parent().click(), sleep(2000));
        back();
        sleep(2000);
      } catch (_0x363393) {
        log("jumpUsercenterTouxiang", _0x363393);
        return false;
      }
    };
    this.JumpUsercenterToMore = function () {
      try {
        toastLog("进入更多");
        sleep(2000);
        var _0x38780e = desc("更多").findOne(3000);
        if (_0x38780e == null) {
          return false;
        }
        _0x38780e.click();
        sleep(2000);
        return true;
      } catch (_0x22caaa) {
        log("JumpUsercenterToMore", _0x22caaa);
        return false;
      }
    };
    this.checkUserCenterZuopinNum = function () {
      try {
        var _0x34fefb = className("android.widget.HorizontalScrollView").find();
        if (_0x34fefb.length > 0) {
          var _0x230e50 = _0x34fefb[_0x34fefb.length - 1];
          _0x230e50.child(0).child(0).selected() == false && (_0x230e50.child(0).child(0).click(), sleep(2000));
        }
      } catch (_0x44719e) {
        log("作品", _0x44719e);
      }
    };
    this.JumpUsercenterToFirstzuopin = function () {
      var _0x5ca243 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _0x25244b.checkUserCenterZuopinNum();
      var _0x1534a5;
      _0x1534a5 = _0x5ca243 ? [false, false] : false;
      try {
        var _0x22ac54 = descStartsWith("视频").clickable(true).findOne(3000);
        if (_0x22ac54 != null) {
          log("1");
          _0x22ac54.click();
          log("跳转页面：作品");
          sleep(3000);
          _0x1534a5 = _0x5ca243 ? [true, 0] : true;
          return _0x1534a5;
        } else {
          var _0x168672 = filter(function (_0xf8af17) {
              var _0x13ee20 = _0xf8af17.children();
              return _0xf8af17.bounds().width() > 0 && _0xf8af17.bounds().height() > 0 && _0x13ee20.findOne(text("置顶")) == null && _0x13ee20.find(className("android.widget.ImageView")).length > 1;
            }),
            _0x53f93a = _0x168672.idContains(":id/container").findOnce();
          if (_0x53f93a == null) {
            var _0x30f562 = filter(function (_0xf47fff) {
              return _0xf47fff.bounds().width() > 0 && _0xf47fff.bounds().height() > 0 && _0xf47fff.children().findOne(text("置顶")) == null;
            });
            _0x53f93a = _0x30f562.idContains(":id/container").findOnce();
            if (_0x53f93a == null) {
              return _0x1534a5;
            } else {
              log("视频作品");
              var _0x36980a = _0x53f93a.findOne(clickable(true));
              if (_0x36980a != null) {
                _0x36980a.click();
                log("跳转页面：作品");
                sleep(3000);
                _0x1534a5 = _0x5ca243 ? [true, false] : true;
                return _0x1534a5;
              }
            }
          } else {
            log("图文作品");
            var _0x36980a = _0x53f93a.findOne(clickable(true));
            if (_0x36980a != null) {
              _0x36980a.click();
              log("跳转页面：作品");
              sleep(3000);
              _0x1534a5 = _0x5ca243 ? [true, true] : true;
              return _0x1534a5;
            }
          }
        }
        return _0x1534a5;
      } catch (_0x2b872a) {
        log("跳转到作品：", _0x2b872a);
        return _0x1534a5;
      }
    };
    this.JumpMoreToFasixin = function () {
      try {
        toastLog("进入发私信");
        sleep(2000);
        var _0x31230f = text("发私信").className("android.widget.TextView").findOne(3000);
        if (!_0x31230f) {
          _0x31230f = text("分享主页").findOne(3000);
          if (!_0x31230f) {
            _0x31230f = text("分享名片").findOne(3000);
            if (!_0x31230f) {
              return false;
            }
          }
        }
        var _0x5515df = _0x31230f.parent().parent().child(1);
        _0x5515df.click();
        sleep(2000);
        return true;
      } catch (_0x137ac8) {
        log("JumpMoreToFasixin", _0x137ac8);
        return false;
      }
    };
    this.watchStart = function (_0x4a8acf, _0x13c657) {
      log(_0x4a8acf, _0x13c657, "s");
      sleep(1000 * _0x13c657);
    };
    this.watchSleep = function (_0x2bd5b5, _0x45d831) {
      if (_0x2bd5b5 == undefined) {
        _0x2bd5b5 = "title";
      }
      if (_0x45d831 == undefined) {
        _0x45d831 = 1;
      }
      log(_0x2bd5b5, _0x45d831, "s");
      sleep(1000 * _0x45d831);
    };
    this.closeTip = function () {
      threads.start(function () {
        while (true) {
          sleep(1000);
          if (text("发现通讯录朋友").findOnce()) {
            click("拒绝");
          }
          if (text("立即升级").findOnce()) {
            click("以后再说");
          }
        }
      });
      threads.start(function () {
        while (true) {
          sleep(1000);
          if (text("点击设置头像").findOnce() && text("评论成功").findOnce()) {
            back();
          }
          if (text("我知道了").findOnce()) {
            click("我知道了");
          }
        }
      });
      threads.start(function () {
        var _0x17ecd6 = java.lang.Runtime.getRuntime();
        while (true) {
          _0x17ecd6.gc();
          sleep(10000);
        }
      });
    };
    _0x25244b.isPrivateOrBan = function () {
      if (text("私密帐号").findOnce()) {
        log("私密帐号");
        return false;
      }
      if (text("私密账号").findOnce()) {
        log("私密账号");
        return false;
      }
      if (text("帐号已被封禁").findOnce()) {
        log("帐号已被封禁");
        return false;
      }
      if (text("帐号已经注销").findOnce()) {
        log("帐号已经注销");
        return false;
      }
      return true;
    };
    _0x25244b.isUserCenterLanV = function () {
      var _0x11007f = textContains("抖音号：").findOnce();
      if (_0x11007f) {
        log("不是蓝V用户");
        return false;
      } else {
        log("蓝V用户");
      }
      return true;
    };
    _0x25244b.actionPinglunSend = function (_0x49efe7) {
      var _0x5e79e2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false,
        _0x540ac7 = _0x49efe7.split("\n"),
        _0xa7ed1e = "";
      if (_0x5e79e2) {
        var _0x385b8b = _0x282beb.getHuashu();
        _0x385b8b.code === 1 && (_0xa7ed1e = _0x385b8b.data.content);
      } else {
        _0xa7ed1e = _0x540ac7[random(0, _0x540ac7.length - 1)];
      }
      log("发送评论:" + _0xa7ed1e);
      sleep(1000);
      if (_0xa7ed1e == "") {
        var _0x23fcdd = desc("返回，按钮").findOnce();
        _0x23fcdd != null && (_0x23fcdd.click(), sleep(2000));
        log("话术不能为空");
        return false;
      }
      !setText(_0xa7ed1e) && input(_0xa7ed1e);
      sleep(2000);
      var _0xeb2d7d = text("发送").find();
      if (_0xeb2d7d.length == 0) {
        log("未发现发送按钮");
        _0x25244b.close_shurufa();
      } else {
        var _0x493a4c = _0xeb2d7d[0];
        _0x493a4c.parent().click() == false && _0x493a4c.click();
      }
      sleep(2000);
    };
    _0x25244b.close_shurufa = function () {
      var _0x8d7849 = desc("返回，按钮").findOnce();
      _0x8d7849 != null && (_0x8d7849.click(), sleep(2000));
    };
    _0x25244b.actionPinglunqu = function (_0x1f3c20, _0x5b412d, _0x2913c7) {
      var _0x45aa3a = [];
      while (_0x1f3c20 > 0) {
        while (_0x1f3c20 > 0) {
          var _0x43c508 = _0x25244b.getPinglunUser(_0x45aa3a, _0x2913c7);
          if (_0x43c508 == null) {
            break;
          }
          _0x1f3c20--;
          var _0x1bc60a = _0x43c508.find(className("android.view.ViewGroup"));
          _0x1bc60a.length > 1 && (log("楼层点赞"), _0x1bc60a[1].click(), sleep(500));
          _0x5b412d != "" && (log("楼层回复"), _0x43c508.click(), sleep(1000), _0x25244b.actionPinglunSend(_0x5b412d));
          sleep(100);
        }
        if (_0x1f3c20 <= 0) {
          log("任务楼层结束");
          break;
        }
        var _0x433785 = text("暂无评论").findOnce();
        if (_0x433785 != null && _0x433785.bounds().height() > 0 && _0x433785.bounds().width() > 0) {
          log("暂无评论");
          break;
        }
        var _0x4067b2 = text("暂时没有更多了").findOnce();
        if (_0x4067b2 != null && _0x4067b2.bounds().height() > 0 && _0x4067b2.bounds().width() > 0) {
          log("暂时没有更多了");
          break;
        }
        var _0x2e5a27 = text("期待你的评论").findOnce();
        if (_0x2e5a27 != null && _0x2e5a27.bounds().height() > 0 && _0x2e5a27.bounds().width() > 0) {
          log("期待你的评论");
          break;
        }
        var _0x2595fc = text("平等表达，友善交流").findOnce();
        if (_0x2595fc != null && _0x2595fc.bounds().height() > 0 && _0x2595fc.bounds().width() > 0) {
          log("平等表达，友善交流");
          break;
        }
        var _0x324825 = textEndsWith("点击评论").findOnce();
        if (_0x324825 != null && _0x324825.bounds().height() > 0 && _0x324825.bounds().width() > 0) {
          log("平等表达，友善交流");
          break;
        }
        var _0x1ab911 = device.width * 0.4 + random(-20, 20),
          _0xd76ef1 = device.height * 0.8 + random(-20, 20),
          _0x5037e0 = device.width * 0.6 + random(-20, 20),
          _0x1d74be = device.height * 0.4 + random(-20, 20);
        swipe(_0x1ab911, _0xd76ef1, _0x5037e0, _0x1d74be, 2000);
        sleep(2000);
      }
    };
    _0x25244b.getPinglunUser = function (_0x497aa6, _0x582ab6) {
      if (_0x497aa6.length >= 20) {
        _0x497aa6.shift();
      }
      var _0x16a58b = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x488fe2) {
          return _0x488fe2.bounds().width() > 0 && _0x488fe2.bounds().height() > 0;
        }),
        _0x4f7850 = _0x16a58b.findOne(3000);
      if (_0x4f7850 == null) {
        return null;
      }
      for (var _0xd50c29 = 0; _0xd50c29 < _0x4f7850.childCount(); _0xd50c29++) {
        var _0x46ed23 = _0x4f7850.child(_0xd50c29),
          _0x2fa1a2 = _0x46ed23.findOne(idContains(":id/title")),
          _0x596088 = _0x46ed23.findOne(idContains(":id/content"));
        if (_0x2fa1a2 == null || _0x596088 == null) {
          continue;
        }
        var _0x554a2a = _0x2fa1a2.text(),
          _0x195224 = _0x596088.text();
        if (_0x497aa6.indexOf(_0x554a2a) == -1 && _0x25244b.keysContain(_0x582ab6, _0x195224)) {
          log("楼层：", _0x554a2a, _0x195224);
          _0x497aa6.push(_0x554a2a);
          return _0x46ed23;
        }
      }
      return null;
    };
    _0x25244b.keysContain = function (_0xf6339c, _0x2fa54f) {
      if (_0xf6339c == "") {
        return true;
      }
      var _0x5b29aa = _0xf6339c.split("+");
      for (var _0x1900dc = 0; _0x1900dc < _0x5b29aa.length; _0x1900dc++) {
        var _0x20e597 = _0x5b29aa[_0x1900dc];
        if (_0x2fa54f.includes(_0x20e597)) {
          log("评论:", _0x2fa54f, ".包含:", _0x20e597);
          return true;
        }
      }
      return false;
    };
    _0x25244b.actioSwiperUp = function () {
      log("滑动视频:下一个");
      var _0x43288e = device.width * 0.7 + random(-20, 20),
        _0x3b4a95 = device.height * 0.65,
        _0x2472e5 = device.width * 0.7 + random(-20, 20),
        _0x4740a6 = device.height * 0.15,
        _0x584ea5 = random(150, 200);
      swipe(_0x43288e, _0x3b4a95, _0x2472e5, _0x4740a6, _0x584ea5);
      sleep(2000);
    };
    _0x25244b.actioSwiperDown = function () {
      var _0x136fc8 = device.width * 0.55 + random(-20, 20),
        _0x1f6b55 = device.height * 0.95,
        _0x2b17d3 = device.width * 0.5 + random(-20, 20),
        _0x3c74e2 = device.height * 0.4,
        _0x1a088d = random(100, 120);
      swipe(_0x2b17d3, _0x3c74e2, _0x136fc8, _0x1f6b55, _0x1a088d);
      sleep(2000);
    };
    _0x25244b.action_usercenter_1 = function (_0x362524, _0x2d8d5b, _0x1dc664, _0x26a0bc, _0x3e659c, _0x40942d, _0x567dc8, _0x1b0205, _0x598ed6) {
      if (!_0x25244b.isPrivateOrBan()) {
        return false;
      }
      _0x2d8d5b = parseInt(_0x2d8d5b);
      _0x1dc664 = parseInt(_0x1dc664);
      _0x26a0bc = parseInt(_0x26a0bc);
      _0x3e659c = parseInt(_0x3e659c);
      _0x40942d = parseInt(_0x40942d);
      _0x567dc8 = parseInt(_0x567dc8);
      _0x1b0205 = parseInt(_0x1b0205);
      var _0x38d837 = 0,
        _0x24cf3e = _0x2d8d5b,
        _0x24aae5 = _0x2d8d5b + _0x1dc664,
        _0x2cbd15 = _0x2d8d5b + _0x1dc664 + _0x26a0bc,
        _0x97f387 = _0x2d8d5b + _0x1dc664 + _0x26a0bc + _0x3e659c,
        _0x108a30 = _0x2d8d5b + _0x1dc664 + _0x26a0bc + _0x3e659c + _0x40942d,
        _0x233156 = _0x2d8d5b + _0x1dc664 + _0x26a0bc + _0x3e659c + _0x40942d + _0x567dc8,
        _0x98c9e0 = _0x2d8d5b + _0x1dc664 + _0x26a0bc + _0x3e659c + _0x40942d + _0x567dc8 + _0x1b0205,
        _0x29425f = random(0, _0x98c9e0);
      _0x29425f >= _0x38d837 && _0x29425f < _0x24cf3e && (log("头像点赞"), sleep(2000), _0x25244b.jumpUsercenterTouxiang());
      _0x29425f >= _0x24cf3e && _0x29425f < _0x24aae5 && (log("关注"), sleep(2000), _0x25244b.clickUsercenterGuanzhu(), _0x5041b2.addRunData("follow"));
      _0x29425f >= _0x24aae5 && _0x29425f < _0x2cbd15 && (log("视频赞"), _0x25244b.JumpUsercenterToFirstzuopin() && (log("视频观看：" + _0x598ed6 + "s"), sleep(_0x598ed6 * 1000), _0x25244b.clickDianzan(), _0x5041b2.addRunData("like"), sleep(1000), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x29425f >= _0x2cbd15 && _0x29425f < _0x97f387 && (log("评论赞"), _0x25244b.JumpUsercenterToFirstzuopin() && (sleep(3000), _0x25244b.clickPinlunqu() && (_0x25244b.actionPinglunqu(3, "", ""), log("页面跳转：关闭评论区"), back(), sleep(2000), _0x25244b.closePinlunquOnce()), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x29425f >= _0x97f387 && _0x29425f < _0x108a30 && (log("评论"), _0x25244b.JumpUsercenterToFirstzuopin() && (sleep(3000), _0x362524 != "" && _0x25244b.clickPinlunqu() && (_0x25244b.pinglun(_0x362524), log("页面跳转：关闭评论区"), back(), sleep(2000), _0x25244b.closePinlunquOnce()), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x29425f >= _0x108a30 && _0x29425f < _0x233156 && (log("视频收藏"), _0x25244b.JumpUsercenterToFirstzuopin() && (sleep(3000), _0x25244b.clickShoucang(), sleep(1000), log("页面跳转：返回用户"), back(), sleep(2000)));
      _0x29425f >= _0x233156 && _0x29425f < _0x98c9e0 && (log("留痕"), sleep(2000), _0x5041b2.addRunData("visit"));
    };
    _0x25244b.actionUesrCenterSixin = function (_0x381f69) {
      var _0x474008 = _0x381f69.split("\n"),
        _0x237a29 = _0x474008[random(0, _0x474008.length - 1)];
      _0x237a29 != "" && _0x25244b.JumpUsercenterToMore() && _0x25244b.JumpMoreToFasixin() && (_0x25244b.textSend(_0x237a29), back(), sleep(2000));
    };
  }
  _0x2b819e.exports = _0x3602d6;
}, function (_0x14ef55, _0x590fa8, _0x163b33) {
  function _0x2700ad() {
    var _0x435bf0 = _0x163b33(1),
      _0x54a0cd = this,
      _0xed9c9 = "8Cvyu7Lq5GX123123dLasdFQw",
      _0x40779b = storages.create("wzke:CODE88"),
      _0x2c4da1 = "1.8.6";
    this.version = _0x2c4da1;
    var _0x29ab90 = _0x435bf0.host + "/auto/login/i",
      _0x1da55d = _0x435bf0.host + "/auto/login/getTime",
      _0x362eef = _0x435bf0.host + "/static/imgs/loginbg1.png";
    this.index = function (_0x20e366, _0x3b2014) {
      var _0x6effc2 = this.getDevice(),
        _0x44ddac = _0x6effc2.androidId;
      if (_0x44ddac == "" || _0x44ddac == "unknown" || _0x44ddac == undefined) {
        alert("无法识别设备号,请联系管理人员");
        return false;
      }
      _0x44ddac = _0x44ddac.substring(0, 10);
      ui.layout("\n<verticalw=\"*\"h=\"*\">\n<imgsrc=\"".concat(_0x362eef, "\"scaleType=\"centerCrop\"w=\"*\"h=\"*\"/>\n\n<verticalmarginTop=\"-380\"padding=\"20dp12020dp20dp\">\n\n<textid=\"hello\"textColor=\"#FFFFFF\"textStyle=\"bold\"w=\"*\"gravity=\"center\"textSize=\"24sp\"text=\"设备激活\"></text>\n\n<inputh=\"0\"id=\"phone\"text=\"\"hint=\"输入手机号\"value=\"13888888888\"w=\"*\"inputType=\"number\"/>\n\n<inputid=\"jihuoma\"solid=\"red\"text=\"\"padding=\"3016\"hint=\"请输入激活码\"textColorHint=\"#f8f8f8\"textColor=\"#ffffff\"gravity=\"center\"w=\"*\"inputType=\"text\"/>\n\n<buttonid=\"checkJihuoma\"textSize=\"24sp\"textColor=\"#ffffff\"padding=\"5\"bg=\"#26a69a\"margin=\"5030\"text=\"开始使用\"h=\"50\"w=\"*\"/>\n\n</vertical>\n</vertical>\n"));
      ui.statusBarColor("#1450FF");
      var _0xb86ce2 = [colors.parseColor("#ffffff"), colors.parseColor("#ffffff")];
      try {
        var _0x226ab8 = function _0x4c65b8(_0x29ed24, _0x37ff9c) {
            var _0x14ae0a = _0x1ec870(_0x37ff9c[0], _0x37ff9c[1]);
            _0x29ed24.setBackgroundTintList(_0x14ae0a);
          },
          _0x1ec870 = function _0x2356c5(_0x431a07, _0x429c3f) {
            var _0x5f1eba = [_0x429c3f, _0x431a07],
              _0x107b02 = new Array();
            _0x107b02[0] = [android.R.attr.state_focused];
            _0x107b02[1] = [android.R.attr.state_enabled];
            var _0x39b56f = new ColorStateList(_0x107b02, _0x5f1eba);
            return _0x39b56f;
          },
          _0x39bdd4 = function _0x21417d(_0x408d39) {
            importClass(android.graphics.drawable.GradientDrawable);
            gradientDrawable = new GradientDrawable();
            var _0x52464b = util.java.array("int", 2);
            _0x52464b[0] = colors.parseColor("#3aa8f7");
            _0x52464b[1] = colors.parseColor("#1e86e4");
            gradientDrawable.setShape(GradientDrawable.RECTANGLE);
            gradientDrawable.setOrientation(GradientDrawable.Orientation.TL_BR);
            gradientDrawable.setColors(_0x52464b);
            gradientDrawable.setCornerRadius(25);
            gradientDrawable.setSize(50, 50);
            _0x408d39.setBackground(gradientDrawable);
          };
        _0x226ab8(ui.jihuoma, _0xb86ce2);
        _0x39bdd4(ui.checkJihuoma);
      } catch (_0x274aea) {
        log(_0x274aea);
      }
      var _0x141388 = _0x6effc2.androidId;
      if (_0x141388 == "" || _0x141388 == undefined || _0x141388 == "unknown") {
        alert("无法识别设备号,请联系管理人员");
        return false;
      }
      ui.checkJihuoma.click(function () {
        var _0x486e48 = "13888888888",
          _0x13d6b4 = String(ui.jihuoma.getText());
        if (_0x13d6b4.length <= 8) {
          return alert("错误的激活码!");
        }
        var _0x524762 = /^[0-9a-zA-Z]+$/;
        if (_0x524762.test(_0x13d6b4) == false) {
          return alert("错误的激活码!");
        }
        _0x3451c3(_0x13d6b4, _0x486e48);
      });
      function _0x3451c3(_0x3206fa, _0xd423e4) {
        var _0x524dfe = dialogs.build({
            title: "登录中...",
            progress: {
              max: -1
            },
            cancelable: false
          }).show(),
          _0x11e2cb = {
            jihuoma: _0x3206fa,
            phone: _0xd423e4,
            version: _0x2c4da1
          };
        _0x54a0cd.msg1000(_0x11e2cb, function (_0x51d9ba) {
          _0x524dfe.dismiss();
          _0x51d9ba && _0x51d9ba.code == 1 ? (_0x54a0cd.saveLoginInfo(_0x51d9ba.data), _0x3b2014(_0x51d9ba.data)) : alert(_0x51d9ba.msg);
        });
      }
      var _0xdcad2f = _0x54a0cd.getLoginInfo();
      if (_0xdcad2f != "") {
        ui.jihuoma.setText(_0xdcad2f.jihuoma);
        if (_0xdcad2f.phone != undefined) {
          ui.phone.setText(_0xdcad2f.phone);
        }
        var _0x3c3bdb = _0x54a0cd.getTime(),
          _0x5155b5 = 7200;
        _0xdcad2f.time + _0x5155b5 > _0x3c3bdb && _0xdcad2f.status != -1 && _0x3b2014(_0xdcad2f);
      }
    };
    this.getLoginInfo = function () {
      var _0x1eaa07 = _0x40779b.get("loginInfo");
      return _0x1eaa07 == undefined ? "" : (_0x1eaa07.androidId = device.getAndroidId(), _0x1eaa07);
    };
    this.saveLoginInfo = function (_0x406852) {
      _0x40779b.put("loginInfo", _0x406852);
    };
    this.getDevice = function () {
      var _0x53a358 = new Object();
      _0x53a358.androidId = device.getAndroidId();
      _0x53a358.fingerprint = device.fingerprint;
      _0x53a358.serial = device.serial;
      return _0x53a358;
    };
    this.getTime = function () {
      var _0x47e0cc = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x35973 = http.postJson(_0x1da55d, "getTime");
          _0x47e0cc.setAndNotify(_0x35973.body.string());
        } catch (_0x501521) {
          _0x47e0cc.setAndNotify(_0x501521);
        }
      });
      return _0x47e0cc.blockedGet();
    };
    this.post = function (_0x14f44d, _0xccb1be) {
      var _0x1a2dce = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x369a04 = _0x54a0cd.getTime(),
            _0x174925 = {
              opt: _0x14f44d,
              token: _0xed9c9,
              time: _0x369a04,
              device: _0x54a0cd.getDevice(),
              data: _0xccb1be
            };
          _0x174925 = _0x54a0cd.JsonEncode(_0x174925);
          var _0x31de0f = _0x29ab90 + "?o=" + _0x14f44d;
          res = http.postJson(_0x31de0f, {
            putData: _0x174925
          });
          res = JSON.parse(res.body.string());
          _0x1a2dce.setAndNotify(res);
        } catch (_0x18a62e) {
          exit();
          _0x1a2dce.setAndNotify(404);
        }
      });
      return _0x1a2dce.blockedGet();
    };
    this.postAsyn = function (_0x2f5575, _0x427682, _0xa0ddb4) {
      var _0x18093b = events.emitter(threads.currentThread());
      threads.start(function () {
        try {
          var _0x1ae17f = _0x54a0cd.getTime(),
            _0x32bc2c = _0x54a0cd.getDevice(),
            _0x31b384 = {
              opt: _0x2f5575,
              token: _0xed9c9,
              time: _0x1ae17f,
              device: _0x32bc2c,
              data: _0x427682
            };
          _0x31b384 = _0x54a0cd.JsonEncode(_0x31b384);
          var _0x47a38a = _0x29ab90 + "?o=" + _0x2f5575;
          res = http.postJson(_0x47a38a, {
            putData: _0x31b384
          });
          res = JSON.parse(res.body.string());
          _0x18093b.emit("result", res);
        } catch (_0x34cd81) {
          toast("请求错误,请检查网络");
          exit();
          _0x18093b.emit("result", 404);
        }
      });
      _0x18093b.on("result", function (_0x119d69) {
        threads.currentThread();
        _0xa0ddb4(_0x119d69);
      });
    };
    this.JsonEncode = function (_0x40b957) {
      return this.encode(JSON.stringify(_0x40b957));
    };
    this.decode = function (_0x521787) {
      var _0x30de26 = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs",
        _0x482b50 = "";
      for (var _0x156cc3 = 1; _0x156cc3 < _0x521787.length;) {
        var _0x2a85ba = _0x30de26.indexOf(_0x521787[_0x156cc3]);
        if (_0x2a85ba == -1) {
          var _0x5d7a55 = _0x521787[_0x156cc3];
        } else {
          var _0x5d7a55 = _0x30de26[(_0x2a85ba + 59) % 62];
        }
        _0x482b50 += _0x5d7a55;
        _0x156cc3 = _0x156cc3 + 3;
      }
      return _0x482b50;
    };
    this.encode = function (_0x296576) {
      var _0x140180 = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs",
        _0x34a44d = "";
      for (var _0x1655f8 = 0; _0x1655f8 < _0x296576.length; _0x1655f8++) {
        var _0x48e81c = _0x140180.indexOf(_0x296576[_0x1655f8]);
        if (_0x48e81c == -1) {
          var _0x5ba828 = _0x296576[_0x1655f8];
        } else {
          var _0x5ba828 = _0x140180[(_0x48e81c + 3) % 62];
        }
        var _0x4d8fa3 = parseInt(Math.random() * 62, 10),
          _0x5bab50 = parseInt(Math.random() * 62, 10);
        _0x34a44d += _0x140180[_0x4d8fa3] + _0x5ba828 + _0x140180[_0x5bab50];
      }
      return _0x34a44d;
    };
    this.msg1000 = function (_0x568b1c, _0x3f23a0) {
      this.postAsyn(1000, _0x568b1c, function (_0x5752a7) {
        _0x3f23a0(_0x5752a7);
      });
    };
    this.msg1001 = function (_0x160d3e) {
      var _0x124471 = this.post(1001, _0x160d3e);
      return _0x124471;
    };
  }
  _0x14ef55.exports = _0x2700ad;
}, function (_0x3e9060, _0x22ce23, _0x11438d) {
  var _0x17a32b = _0x11438d(1);
  function _0x3a2d3d() {
    var _0x3a2ebe = this,
      _0x472fa8 = "8Cvyu7Lq5GXdLFQw",
      _0x544126 = _0x17a32b.host + "/auto",
      _0x3e05a6 = _0x17a32b.host + "/auto/index/getTime";
    this.jztk = function (_0x372198) {
      var _0x567ca0 = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x18bc69 = http.postJson(_0x544126 + "/comment/save", _0x372198).body.string();
          _0x567ca0.setAndNotify(JSON.parse(_0x18bc69));
        } catch (_0x54dda1) {
          log("jztkErr=", _0x54dda1);
          _0x567ca0.setAndNotify(404);
        }
      });
      return _0x567ca0.blockedGet();
    };
    this.getHuashu = function () {
      var _0x1b4d1b = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x651e = http.postJson(_0x544126 + "/huashu/getHuashu", {}).body.string();
          _0x1b4d1b.setAndNotify(JSON.parse(_0x651e));
        } catch (_0x32fb52) {
          log("getHuashuErr=", _0x32fb52);
          _0x1b4d1b.setAndNotify({
            code: 0
          });
        }
      });
      return _0x1b4d1b.blockedGet();
    };
    this.addSeedRunCout = function (_0x3e9b6f) {
      return _0x3a2ebe.postUrl("/Zhongzi/run", {
        dy_id: _0x3e9b6f
      });
    };
    this.msg10003 = function (_0x18fc93) {
      sleep(1000);
      sleep(1000);
    };
    this.msg10004 = function (_0x50741e) {
      undefined == _0x50741e && (_0x50741e = {});
      var _0x584279 = new (_0x11438d(4))(),
        _0x578922 = _0x584279.getLoginInfo();
      _0x50741e.androidId = _0x578922.androidId;
      _0x50741e.jihuoma = _0x578922.jihuoma;
      _0x50741e.customerId = _0x578922.customerId;
      var _0x475567 = this.post2(10004, _0x50741e);
      if (_0x475567.code == -1) {
        return null;
      }
      var _0x50741e = {};
      _0x50741e.opt = _0x475567.data.opt;
      _0x50741e.link = _0x475567.data.link;
      _0x50741e.str = _0x475567.data.str;
      return _0x50741e;
    };
    this.msg10005 = function (_0x40a6dd) {
      undefined == _0x40a6dd && (_0x40a6dd = {});
      var _0x47eb0c = new (_0x11438d(4))(),
        _0x190889 = _0x47eb0c.getLoginInfo();
      _0x40a6dd.androidId = _0x190889.androidId;
      _0x40a6dd.jihuoma = _0x190889.jihuoma;
      _0x40a6dd.customerId = _0x190889.customerId;
      var _0x506604 = this.post2(10005, _0x40a6dd);
      if (_0x506604.code == -1) {
        return null;
      }
      var _0x40a6dd = {};
      _0x40a6dd.opt = 10005;
      _0x40a6dd.data = _0x506604.data;
      return _0x40a6dd;
    };
    this.msg10006 = function (_0x58749a) {
      _0xd485e6 = {};
      var _0x59e9dd = new (_0x11438d(4))(),
        _0x4b92b0 = _0x59e9dd.getLoginInfo();
      _0xd485e6.androidId = _0x4b92b0.androidId;
      _0xd485e6.jihuoma = _0x4b92b0.jihuoma;
      _0xd485e6.customerId = _0x4b92b0.customerId;
      _0xd485e6.dy_id = _0x58749a;
      var _0x5d4c99 = this.post2(10006, _0xd485e6);
      if (_0x5d4c99.code == -1) {
        return null;
      }
      var _0xd485e6 = {};
      _0xd485e6.opt = 10006;
      _0xd485e6.data = _0x5d4c99.data;
      return _0xd485e6;
    };
    this.msg10007 = function (_0x100c4b) {
      undefined == _0x100c4b && (_0x100c4b = {});
      var _0x9932d0 = new (_0x11438d(4))(),
        _0x292fb2 = _0x9932d0.getLoginInfo();
      _0x100c4b.androidId = _0x292fb2.androidId;
      _0x100c4b.jihuoma = _0x292fb2.jihuoma;
      _0x100c4b.customerId = _0x292fb2.customerId;
      var _0x5dd946 = this.post2(10007, _0x100c4b);
      if (_0x5dd946.code == -1) {
        return null;
      }
      var _0x100c4b = {};
      _0x100c4b.opt = 10007;
      _0x100c4b.data = _0x5dd946.data;
      return _0x100c4b;
    };
    this.post = function (_0x44ed06, _0xde0318) {
      var _0x101ad9 = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x1c3b29 = {
            opt: _0x44ed06,
            token: _0x472fa8,
            time: timmThis.getTime(),
            device: _0x3a2ebe.getDevice(),
            data: _0xde0318
          };
          _0x1c3b29 = _0x3a2ebe.JsonEncode(_0x1c3b29);
          res = http.postJson(_0x544126 + "?o=" + _0x44ed06, {
            putData: _0x1c3b29
          });
          _0x101ad9.setAndNotify(JSON.parse(res.body.string()));
        } catch (_0x258134) {
          log("err=", _0x258134);
          _0x101ad9.setAndNotify(404);
        }
      });
      return _0x101ad9.blockedGet();
    };
    this.post2 = function (_0x386bfb, _0xada6df) {
      var _0x177ff9 = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x4aa773 = {
              opt: _0x386bfb,
              token: _0x472fa8,
              time: _0x3a2ebe.getTime(),
              device: _0x3a2ebe.getDevice()
            },
            _0x5f5b36 = {
              putData: _0x3a2ebe.JsonEncode(_0x4aa773),
              data: _0x3a2ebe.json(_0xada6df)
            },
            _0x5ab096 = http.postJson(_0x544126 + "?o=" + _0x386bfb, _0x5f5b36);
          _0x5ab096 = JSON.parse(_0x5ab096.body.string());
          _0x177ff9.setAndNotify(_0x5ab096);
        } catch (_0x329b1b) {
          log("err=", _0x329b1b);
          _0x177ff9.setAndNotify(404);
        }
      });
      return _0x177ff9.blockedGet();
    };
    this.postUrl = function (_0x4a247f, _0x7a185d) {
      var _0x13877b = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x5f11cd = http.postJson(_0x544126 + _0x4a247f, _0x7a185d).body.string();
          _0x13877b.setAndNotify(_0x5f11cd);
        } catch (_0x58fdf2) {
          log("err=", _0x58fdf2);
          _0x13877b.setAndNotify(_0x58fdf2);
        }
      });
      return _0x13877b.blockedGet();
    };
    this.postAsyn2 = function (_0x508a2c, _0x13543a, _0x240a8d) {
      var _0x2bea59 = events.emitter(threads.currentThread());
      threads.start(function () {
        try {
          var _0x17406c = {
              opt: _0x508a2c,
              token: _0x472fa8,
              time: _0x3a2ebe.getTime(),
              device: _0x3a2ebe.getDevice()
            },
            _0xf91a6 = {
              putData: _0x3a2ebe.JsonEncode(_0x17406c),
              data: _0x3a2ebe.json(_0x13543a)
            },
            _0x2d94fc = http.postJson(_0x544126 + "?o=" + _0x508a2c, _0xf91a6);
          _0x2d94fc = JSON.parse(_0x2d94fc.body.string());
          _0x2bea59.emit("result", _0x2d94fc);
        } catch (_0x4baef0) {
          _0x2bea59.emit("result", _0x4baef0);
        }
      });
      _0x2bea59.on("result", function (_0x5874f9) {
        threads.currentThread();
        _0x240a8d(_0x5874f9);
      });
    };
    this.test = function () {
      log("MyHttpsAppSocket.test");
    };
    this.getDevice = function () {
      var _0x34dfd9 = new Object();
      _0x34dfd9.androidId = device.getAndroidId();
      _0x34dfd9.fingerprint = device.fingerprint;
      _0x34dfd9.serial = device.serial;
      return _0x34dfd9;
    };
    this.getTime = function () {
      var _0x5ab0ab = threads.disposable();
      threads.start(function () {
        try {
          http.__okhttp__.setTimeout(5000);
          var _0x57e0cf = http.postJson(_0x3e05a6, "getTime");
          _0x5ab0ab.setAndNotify(_0x57e0cf.body.string());
        } catch (_0xb2d8bd) {
          _0x5ab0ab.setAndNotify(_0xb2d8bd);
        }
      });
      return _0x5ab0ab.blockedGet();
    };
    this.json = function (_0x4af73c) {
      var _0x326db6 = JSON.stringify(_0x4af73c);
      return _0x326db6;
    };
    this.JsonEncode = function (_0x7bbb0b) {
      var _0x2297b5 = JSON.stringify(_0x7bbb0b);
      return this.encode(_0x2297b5);
    };
    this.decode = function (_0xeda49e) {
      var _0x53f816 = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs",
        _0x9cb7d9 = "";
      for (var _0x42c8f2 = 1; _0x42c8f2 < _0xeda49e.length;) {
        var _0x4cf6a0 = _0x53f816.indexOf(_0xeda49e[_0x42c8f2]);
        if (_0x4cf6a0 == -1) {
          var _0x27cef1 = _0xeda49e[_0x42c8f2];
        } else {
          var _0x27cef1 = _0x53f816[(_0x4cf6a0 + 59) % 62];
        }
        _0x9cb7d9 += _0x27cef1;
        _0x42c8f2 = _0x42c8f2 + 3;
      }
      return _0x9cb7d9;
    };
    this.encode = function (_0x317795) {
      var _0x19ef16 = "jIASb8FLpEvRr3WtVnlqMidu6cNPXhw7UmOezxYT1BG4CHo5Jyfg20a9kQDKZs",
        _0x4a292e = "";
      for (var _0x298806 = 0; _0x298806 < _0x317795.length; _0x298806++) {
        var _0xedddd0 = _0x19ef16.indexOf(_0x317795[_0x298806]);
        if (_0xedddd0 == -1) {
          var _0x38c84f = _0x317795[_0x298806];
        } else {
          var _0x38c84f = _0x19ef16[(_0xedddd0 + 3) % 62];
        }
        var _0x3c3f04 = parseInt(Math.random() * 62, 10),
          _0x516d20 = parseInt(Math.random() * 62, 10);
        _0x4a292e += _0x19ef16[_0x3c3f04] + _0x38c84f + _0x19ef16[_0x516d20];
      }
      return _0x4a292e;
    };
    this.msgForm = function (_0x128638, _0x36e0cd, _0x2a311f) {
      var _0x36e0cd = {
        code: _0x128638,
        msg: _0x36e0cd,
        data: _0x2a311f
      };
      return _0x36e0cd;
    };
    this.run = function () {};
  }
  _0x3e9060.exports = _0x3a2d3d;
}, function (_0x100bec, _0x574090) {
  function _0x5aa09e() {
    var _0x3913ad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0,
      _0x32cdae = this,
      _0x2813eb = [];
    _0x2813eb = ["首页", "Home"];
    _0x32cdae["首页"] = _0x2813eb[_0x3913ad];
    _0x2813eb = ["功能", "Func"];
    _0x32cdae["功能"] = _0x2813eb[_0x3913ad];
    _0x2813eb = ["其他", "Other"];
    _0x32cdae["其他"] = _0x2813eb[_0x3913ad];
    _0x2813eb = ["个人", "Personal"];
    _0x32cdae["个人"] = _0x2813eb[_0x3913ad];
    _0x2813eb = ["开启权限", "Basicpermissions"];
    _0x32cdae["基础权限"] = _0x2813eb[_0x3913ad];
    _0x2813eb = ["无障碍权限", "Accessibilityservices"];
    _0x32cdae["无障碍服务"] = _0x2813eb[_0x3913ad];
    _0x2813eb = ["*每次启动可能需要再次开启", "*Ifitcannotbedisplayed,closeaccessibility,reopenorcloseallsoftware,andrestartthephone"];
    _0x32cdae.tip1 = _0x2813eb[_0x3913ad];
    _0x2813eb = ["悬浮窗权限", "Suspensionwindow"];
    _0x32cdae["悬浮窗"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "*一次开启永久生效";
    _0x2813eb[1] = "*Permissiontoopenthesuspendedwindow,otherwisethenormaloperationofthefunctionwillbeaffected";
    _0x32cdae.tip2 = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "温馨提示";
    _0x2813eb[1] = "Remark";
    _0x32cdae["备注"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "1.安卓7.0，3g内存，1920*1080像素以上";
    _0x2813eb[1] = "1.MobilephonesystemAndroid7.0,3Gmemory,1920*1080pixelsormore";
    _0x32cdae["备注1"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "2.推荐小米和魅族,系统稳定,价格便宜";
    _0x2813eb[1] = "2.Themobilephonerecommendsameterandafamily.Thesystemisstableandthepriceischeap";
    _0x32cdae["备注2"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "3.其他品牌:近两年旗舰机型全适配,低端机型90%可使用,自行尝试";
    _0x2813eb[1] = "3.Flagshipmodelsofotherbrandsarefullycompatible,andmorethan90%oflow-endmodelscanbeused.Tryityourself";
    _0x32cdae["备注3"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "个人中心";
    _0x2813eb[1] = "PersonalCenter";
    _0x32cdae["个人中心"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "设备号";
    _0x2813eb[1] = "Equipmentnumber";
    _0x32cdae["设备号"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "激活码";
    _0x2813eb[1] = "Activationcode";
    _0x32cdae["激活码"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "语言";
    _0x2813eb[1] = "language";
    _0x32cdae["语言"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "版本号";
    _0x2813eb[1] = "Versionnumber";
    _0x32cdae["版本号"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "帮助中心";
    _0x2813eb[1] = "Help";
    _0x32cdae["帮助中心"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "产品版本";
    _0x2813eb[1] = "Version";
    _0x32cdae["产品版本"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "唞音下载";
    _0x2813eb[1] = "download";
    _0x32cdae["短视频下载"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "问题反馈";
    _0x2813eb[1] = "Problemfeedback";
    _0x32cdae["问题反馈"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "退出系统";
    _0x2813eb[1] = "signout";
    _0x32cdae["退出"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "精准引流";
    _0x2813eb[1] = "Precisedrainage";
    _0x32cdae["精准引流"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "垂直引流";
    _0x2813eb[1] = "Verticaldrainage";
    _0x32cdae["垂直引流"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "TTK国际版";
    _0x2813eb[1] = "TTKInternational";
    _0x32cdae.ttk = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "不限版本,多界面";
    _0x2813eb[1] = "Unlimitedversion,multiinterfac";
    _0x32cdae.tip3 = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "返回";
    _0x2813eb[1] = "Back";
    _0x32cdae["返回"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "功能介绍";
    _0x2813eb[1] = "Back";
    _0x32cdae["功能介绍"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "关注,点赞,评论,关键词文案";
    _0x2813eb[1] = "follow,fabulous,comment,keywordRetrieval";
    _0x32cdae["关注点赞评论"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "运行界面";
    _0x2813eb[1] = "Operationinterface";
    _0x32cdae["运行界面"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "观看个数";
    _0x2813eb[1] = "Numberofviews";
    _0x32cdae["观看个数"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "关注概率";
    _0x2813eb[1] = "Concernedprobability";
    _0x32cdae["关注概率"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "点赞概率";
    _0x2813eb[1] = "Operationinterface";
    _0x32cdae["点赞概率"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "评论概率";
    _0x2813eb[1] = "Operationinterface";
    _0x32cdae["评论概率"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "评论内容";
    _0x2813eb[1] = "Operationinterface";
    _0x32cdae["评论内容"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "视频关键词";
    _0x2813eb[1] = "Videokeywords";
    _0x32cdae["视频关键词"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "换行隔开,多条随机";
    _0x2813eb[1] = "Operationinterface";
    _0x32cdae["换行多条"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "观看间隔";
    _0x2813eb[1] = "Operationinterface";
    _0x32cdae["观看间隔"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "开始";
    _0x2813eb[1] = "Start";
    _0x32cdae["开始"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "保存成功";
    _0x2813eb[1] = "SaveSuccess";
    _0x32cdae["保存成功"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "更新内容";
    _0x2813eb[1] = "UpdateContent";
    _0x32cdae["更新内容"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "最新版";
    _0x2813eb[1] = "SaveSuccess";
    _0x32cdae["最新版"] = _0x2813eb[_0x3913ad];
    _0x2813eb[0] = "需扣扣";
    _0x2813eb[1] = "NeedQQ";
    _0x32cdae["需扣扣"] = _0x2813eb[_0x3913ad];
    _0x32cdae.pinglun = "你别说，你还真别说\n在哪里跌倒，就在哪里睡一觉\n你人还怪好嘞\n那年你双手插兜不知道什么是冻手\n看到你这么会拍，我就放心了\n你在吃饭和睡觉之间选择了发抖音\n你记住你别管记住了什么你就记住\n刷到这个我的情绪很激动，想让我平静下下来，请再发一条\n背景音乐是什么\n还未老，想低保，小小年纪苦恼苦恼\n为什么我胖，因为我有心事，难瘦\n你来编，他来赞，看完我得去充电\n我在听，你在讲，随便刷刷不敢想\n每天醒来的第一件事就是想睡觉\n婶可忍叔不可忍，让开，我要评论了\n每当我找到成功的钥匙，就有人把锁换了\n我一生气就想买东西，一买东西旧的花q，一花qq就少，q一少我就生气\n我的人生只有两件事不会，这不会那不会\n小时候我总纠结长大了上清华还是北大，后来长大了也就长大了\n特别能吃苦这几个字，我想了想，我做到了五分之四\n总感觉夏天洗澡，等于帮蚊子洗菜\n人家减重减的是腰，为啥我减的是脑细胞\n喜欢一个人是藏不住的，喜欢两个人才需要藏\n大家好，我是鳌拜妹妹熬夜\n我大概是病了，一想到没前心就隐隐作痛\n我一直觉得我性格挺好的，直到遇见性格和我一样的，真想踹两脚\n保持年轻的最好办法就是：多吃蔬菜，多运动，外加谎报年龄\n要早点睡哦，熬夜，对手机不好\n最近不知道怎么的，老是觉得自己最近不知道怎么的\n我就是有点胖，不然我是很瘦的\n如果你肯花一点时间来了解我，你就会发现，你浪费了一点时间\n最近感觉头皮有点痒，不会是要长脑子了吧\n情况就是这么个情况，具体什么情况还得看情况\n生活已经很苦了，所以能怪别人的，就不要怪自己\n梦想还是要有的，万一别人问你\n满脑子的智慧，硬生生撑大了我的脸\n希望大家能走出舒适圈，让我进去\n谁能想到我相貌平平，居然是龙的传人\n";
  }
  _0x100bec.exports = _0x5aa09e;
}, function (_0x410e44, _0x1930ac) {
  var _0x5aba5e = {
      addRunTime: function () {
        var _0x541fb5 = _0x268bd9.contains("runTime") ? _0x268bd9.get("runTime") : 0,
          _0xee36d = parseInt(_0x541fb5) + 60;
        _0x268bd9.put("runTime", _0xee36d);
      },
      getRunTime: function () {
        var _0x262080 = _0x268bd9.contains("runTime") ? _0x268bd9.get("runTime") : 0,
          _0x300060 = Math.floor(_0x262080 / 60) % 60,
          _0x25e189 = Math.floor(_0x262080 / 3600);
        return {
          hours: _0x25e189,
          minutes: _0x300060
        };
      },
      addRunData: function (_0x138619) {
        var _0x4ad433 = _0x268bd9.contains(_0x138619) ? _0x268bd9.get(_0x138619) : 0,
          _0x53de2a = parseInt(_0x4ad433) + 1;
        _0x268bd9.put(_0x138619, _0x53de2a);
      },
      getRunData: function (_0x49cbe3) {
        return _0x268bd9.contains(_0x49cbe3) ? _0x268bd9.get(_0x49cbe3) : 0;
      },
      getTotal: function () {
        var _0x4359ce = _0x268bd9.contains("follow") ? _0x268bd9.get("follow") : 0,
          _0x5de0e2 = _0x268bd9.contains("like") ? _0x268bd9.get("like") : 0,
          _0xf15bae = _0x268bd9.contains("visit") ? _0x268bd9.get("visit") : 0;
        return parseInt(_0x4359ce) + parseInt(_0x5de0e2) + parseInt(_0xf15bae);
      },
      clearRunDataIfNeed: function () {
        var _0x42cce5 = new Date(),
          _0x1683d2 = _0x42cce5.getDate(),
          _0x10259f = _0x268bd9.contains("lastCleanDay") ? _0x268bd9.get("lastCleanDay") : 0;
        _0x1683d2 !== _0x10259f && (_0x268bd9.clear(), _0x268bd9.put("lastCleanDay", _0x1683d2));
      },
      clear: function () {
        _0x268bd9.clear();
      }
    },
    _0x268bd9 = storages.create("runDataStore");
  _0x410e44.exports = _0x5aba5e;
}, function (_0x48c076, _0x25398f, _0x7c33ad) {
  function _0x2cdb83() {
    var _0x218034 = this,
      _0x395812 = _0x7c33ad(0);
    this.launchApp = function () {
      if (!launch("com.smile.gifmaker")) {
        alert("请下载快手");
        return false;
      }
      return true;
    };
    this.watchSleep = function (_0x3b086a, _0x4a9c0e) {
      var _0x30b1f7 = _0x4a9c0e;
      while (_0x30b1f7 > 0) {
        log(_0x3b086a, _0x30b1f7);
        sleep(1000);
        _0x30b1f7--;
      }
    };
    this.checkNum = function (_0x166a71) {
      if (_0x166a71.includes("万")) {
        _0x166a71 = _0x166a71.replace("万", "");
        _0x166a71 = _0x166a71 * 10000;
      } else {
        _0x166a71.includes("亿") && (_0x166a71 = _0x166a71.replace("亿", ""), _0x166a71 = _0x166a71 * 100000000);
      }
      return _0x166a71;
    };
    this.clickGuanzhu = function () {
      log("观看视频:点击关注");
      sleep(1000);
      try {
        var _0x1ce37d = device.width * 0.8,
          _0xe79e28 = device.height * 0.2,
          _0x16b8e3 = device.width,
          _0x4f22d7 = device.height * 0.8,
          _0x3f2d0a = className("android.widget.ImageView").id("com.smile.gifmaker:id/slide_play_right_follow_button").boundsInside(_0x1ce37d, _0xe79e28, _0x16b8e3, _0x4f22d7).filter(function (_0x5c8561) {
            return _0x5c8561.bounds().width() > 0 && _0x5c8561.bounds().height() > 0;
          }),
          _0x4e18f1 = _0x3f2d0a.findOne(1000);
        _0x4e18f1 != null && (_0x4e18f1.click(), sleep(1000));
      } catch (_0x473c1b) {
        log("clickGuanzhu", _0x473c1b);
        return false;
      }
    };
    this.clickDianzan = function () {
      toastLog("观看视频:点击喜欢");
      sleep(1000);
      try {
        try {
          var _0x32dcc0 = device.width * 0.8,
            _0x2c0e8 = device.height * 0.2,
            _0x1ed782 = device.width,
            _0x1eb6ac = device.height * 0.8,
            _0x23d1a4 = className("TextView").id("like_count_view").boundsInside(_0x32dcc0, _0x2c0e8, _0x1ed782, _0x1eb6ac).filter(function (_0x2cc472) {
              return _0x2cc472.bounds().width() > 0 && _0x2cc472.bounds().height() > 0;
            }),
            _0x39d78e = _0x23d1a4.findOne(2000);
          _0x39d78e != null && (_0x39d78e.parent().click(), sleep(1000));
        } catch (_0x1f39bc) {
          log("clickDianzan", _0x1f39bc);
          return false;
        }
      } catch (_0x31d12a) {
        log("clickDianzan", _0x31d12a);
        return false;
      }
    };
    this.getDianZanShu = function () {
      var _0x31f1df = -1;
      try {
        var _0x52cc95 = device.width * 0.8,
          _0x5a3716 = device.height * 0.2,
          _0x364851 = device.width,
          _0x2371e8 = device.height * 0.8,
          _0x2e8905 = className("TextView").id("like_count_view").boundsInside(_0x52cc95, _0x5a3716, _0x364851, _0x2371e8).filter(function (_0x1a3aa4) {
            return _0x1a3aa4.bounds().width() > 0 && _0x1a3aa4.bounds().height() > 0;
          }),
          _0x58bbc2 = _0x2e8905.findOne(1000);
        if (_0x58bbc2 == null) {
          return _0x31f1df;
        }
        _0x31f1df = _0x58bbc2.text();
        _0x31f1df = _0x218034.checkNum(_0x31f1df);
        return _0x31f1df;
      } catch (_0x34ca76) {
        log("getDianZanShu", _0x34ca76);
        return _0x31f1df;
      }
    };
    this.clickPinglunqu = function () {
      toastLog("观看视频:点击评论区");
      sleep(1000);
      try {
        try {
          var _0xd1f6e2 = device.width * 0.8,
            _0x2b3653 = device.height * 0.2,
            _0x34fe61 = device.width,
            _0x4cd9f0 = device.height * 0.8,
            _0x2c2c7b = className("TextView").id("comment_count_view").boundsInside(_0xd1f6e2, _0x2b3653, _0x34fe61, _0x4cd9f0).filter(function (_0x59278c) {
              return _0x59278c.bounds().width() > 0 && _0x59278c.bounds().height() > 0;
            }),
            _0x56da3c = _0x2c2c7b.findOne(3000);
          _0x56da3c != null && (_0x56da3c.parent().click(), sleep(1000));
          return true;
        } catch (_0x4504d4) {
          log("clickDianzan", _0x4504d4);
          return false;
        }
      } catch (_0x30a0b8) {
        log("clickDianzan", _0x30a0b8);
        return false;
      }
    };
    this.getPinglunShu = function () {
      var _0x326694 = -1;
      try {
        var _0x450179 = device.width * 0.8,
          _0xdb1633 = device.height * 0.2,
          _0x1e16ff = device.width,
          _0x2ec429 = device.height * 0.8,
          _0xbe9901 = className("TextView").id("comment_count_view").boundsInside(_0x450179, _0xdb1633, _0x1e16ff, _0x2ec429).filter(function (_0x401509) {
            return _0x401509.bounds().width() > 0 && _0x401509.bounds().height() > 0;
          }),
          _0x2495de = _0xbe9901.findOne(3000);
        if (_0x2495de == null) {
          return _0x326694;
        }
        _0x326694 = _0x2495de.text();
        _0x326694 = _0x218034.checkNum(_0x326694);
        return _0x326694;
      } catch (_0xdf17a9) {
        log("getPinglunShu", _0xdf17a9);
        return _0x326694;
      }
    };
    this.getUsername = function () {
      try {
        var _0x566afd = className("TextView").id("user_name_text_view").filter(function (_0x1994ac) {
            return _0x1994ac.bounds().width() > 0 && _0x1994ac.bounds().height() > 0;
          }),
          _0x4ac3a0 = _0x566afd.findOne(3000);
        if (_0x4ac3a0 == null) {
          return null;
        }
        return _0x4ac3a0.text();
      } catch (_0x520e69) {
        log("getUsername", _0x520e69);
        return false;
      }
    };
    this.jumpShipinToUercenter = function () {
      log("界面跳转:到视频用户中心");
      sleep(1000);
      try {
        var _0x383129 = className("TextView").id("user_name_text_view").filter(function (_0x124bf6) {
            return _0x124bf6.bounds().width() > 0 && _0x124bf6.bounds().height() > 0;
          }),
          _0xe8aecf = _0x383129.findOne(3000);
        if (_0xe8aecf == null) {
          log("fail");
          return false;
        }
        _0xe8aecf.click();
        sleep(2000);
        return true;
      } catch (_0x2a37ce) {
        log("jumpShipinToUercenter", _0x2a37ce);
        return false;
      }
    };
    _0x218034.jumpUercenterToFisetshipin = function () {
      log("界面跳转:第一个作品");
      sleep(1000);
      try {
        var _0xf55c0d = device.width * 0.4,
          _0x2f4f5f = device.height * 0.6,
          _0x50aff9 = device.width * 0.4,
          _0x41e84b = device.height * 0.2;
        swipe(_0xf55c0d, _0x2f4f5f, _0x50aff9, _0x41e84b, 2000);
        sleep(1000);
        var _0x5dfef6 = id("player_cover_container").filter(function (_0x172554) {
            return _0x172554.bounds().width() > 0 && _0x172554.bounds().height() > 0;
          }),
          _0xa88646 = _0x5dfef6.findOne(3000);
        if (_0xa88646 == null) {
          return false;
        }
        _0xa88646.click();
        sleep(2000);
        return true;
      } catch (_0x4247d1) {
        log("jumpUercenterToFisetshipin", _0x4247d1);
        return false;
      }
    };
    _0x218034.closePinglunquOnce = function () {
      textEndsWith("条评论").findOnce() && (back(), sleep(2000));
    };
    _0x218034.jumpNextShipin = function () {
      log("下一个视频");
      var _0x3b70d2 = device.width * 0.7 + random(-20, 20),
        _0x38ec51 = device.height * 0.8,
        _0x1efbd7 = device.width * 0.7 + random(-20, 20),
        _0x384bd8 = device.height * 0.1;
      swipe(_0x3b70d2, _0x38ec51, _0x1efbd7, _0x384bd8, 300);
      sleep(1000);
    };
    this.getShipinDesc = function () {
      try {
        var _0x59eb41 = className("TextView").id("element_caption_label").filter(function (_0x4728de) {
            return _0x4728de.bounds().width() > 0 && _0x4728de.bounds().height() > 0;
          }),
          _0x521697 = _0x59eb41.findOne(3000);
        if (_0x521697 == null) {
          return "";
        }
        return _0x521697.text();
      } catch (_0x3d0613) {
        log("getShipinDesc", _0x3d0613);
        return "";
      }
    };
    _0x218034.getUsercenterInfo = function () {
      log("用户中心:观看信息");
      var _0x1a32e4 = {
        fensi: 0,
        guanzhu: 0,
        huozan: 0,
        sex: "",
        zuopin: 0
      };
      try {
        var _0x53d224 = text("粉丝").findOnce();
        if (_0x53d224 != null) {
          var _0xbf837b = _0x53d224.parent().child(0).text();
          _0x1a32e4.fensi = parseInt(_0x218034.checkNum(_0xbf837b));
          log("粉丝:" + _0x1a32e4.fensi);
        }
        var _0x53d224 = text("关注").findOnce();
        if (_0x53d224 != null) {
          var _0xb143dc = _0x53d224.parent().child(0).text();
          _0x1a32e4.guanzhu = parseInt(_0x218034.checkNum(_0xb143dc));
          log("关注:" + _0x1a32e4.guanzhu);
        }
        var _0x53d224 = text("获赞").findOnce();
        if (_0x53d224 != null) {
          var _0x7464bc = _0x53d224.parent().child(0).text();
          _0x1a32e4.huozan = parseInt(_0x218034.checkNum(_0x7464bc));
          log("获赞:" + _0x1a32e4.huozan);
        }
        var _0x53d224 = id("label_name").findOnce();
        _0x53d224 != null && (_0x1a32e4.sex = _0x53d224.text(), log("性别:" + _0x1a32e4.sex));
        var _0x53d224 = textStartsWith("作品").findOnce();
        if (_0x53d224 != null) {
          var _0x12b20b = _0x53d224.text().replace("作品", "");
          _0x1a32e4.zuopin = parseInt(_0x12b20b);
          log("作品:" + _0x1a32e4.zuopin);
        }
        return _0x1a32e4;
      } catch (_0x3a5464) {
        log("getShipinDesc", _0x3a5464);
      }
    };
    _0x218034.actionUercenterGuanzhu = function () {
      log("用户中心:关注");
      sleep(1000);
      try {
        var _0x2f8559 = id("header_follow_button").findOne(2000);
        if (_0x2f8559 == null) {
          log("已关注");
          return false;
        }
        _0x2f8559.click();
        sleep(1000);
      } catch (_0xd40b91) {
        log("actionUercenterGuanzhu", _0xd40b91);
        return "";
      }
    };
    _0x218034.actionUercenterSixin = function (_0x457e65) {
      log("用户中心:发私信");
      sleep(1000);
      if (_0x457e65 == "" || _0x457e65 == undefined) {
        return false;
      }
      var _0x40f706 = _0x457e65.split("\n"),
        _0x1fa255 = _0x40f706[random(0, _0x40f706.length - 1)];
      try {
        var _0x1fe864 = text("发私信").findOne(2000);
        if (_0x1fe864 == null) {
          return false;
        }
        log("跳转页面:私信");
        _0x1fe864.click();
        sleep(2000);
        if (!setText(_0x1fa255)) {
          input(_0x1fa255);
        }
        sleep(2000);
        var _0x231741 = id("send_btn").findOne(2000);
        _0x231741 != null && (_0x231741.click(), sleep(2000));
        log("跳转页面:返回用户中心");
        sleep(1000);
        back();
        sleep(2000);
      } catch (_0x1439fa) {
        log("actionUercenterSixin", _0x1439fa);
        return "";
      }
    };
    _0x218034.sixinInfoCondition = function (_0x377c58, _0x20d535) {
      if (_0x377c58.fensi < _0x20d535.page3fensiMin || _0x377c58.fensi > _0x20d535.page3fensiMax) {
        log("信息筛选:粉丝数不符");
        return false;
      }
      if (_0x377c58.huozan < _0x20d535.page3HuozanMin || _0x377c58.huozan > _0x20d535.page3HuozanMax) {
        log("信息筛选:获赞数不符");
        return false;
      }
      if (_0x377c58.guanzhu < _0x20d535.page3GuanzhuMin || _0x377c58.guanzhu > _0x20d535.page3GuanzhuMax) {
        log("信息筛选:关注数不符");
        return false;
      }
      if (_0x377c58.zuopin < _0x20d535.page3ZuopinMin || _0x377c58.zuopin > _0x20d535.page3ZuopinMax) {
        log("信息筛选:作品数不符");
        return false;
      }
      log("信息筛选:信息符合");
      return true;
    };
    _0x218034.pinglun = function (_0x62a776) {
      log("开始评论");
      sleep(1000);
      o = id("com.smile.gifmaker:id/editor_holder_text").clickable(true).findOnce();
      o != null && (o.click(), sleep(2000), _0x218034.textSend(_0x62a776));
    };
    this.textSend = function (_0x16844a) {
      toastLog("开始留言");
      var _0x1d8ac0 = _0x16844a.split("\n"),
        _0x16844a = _0x1d8ac0[random(0, _0x1d8ac0.length - 1)];
      if (_0x16844a == "") {
        log("内容为空");
        return false;
      }
      sleep(1000);
      if (!setText(_0x16844a)) {
        input(_0x16844a);
      }
      sleep(2000);
      var _0x166143 = text("发送").desc("发送").findOne(3000);
      _0x166143 != null && (click(_0x166143.bounds().centerX(), _0x166143.bounds().centerY()), sleep(3000));
      text("发送").desc("发送").findOnce() && (back(), sleep(2000));
    };
    _0x218034.isShipin = function () {
      var _0x553154 = filter(function (_0x31730d) {
        return _0x31730d.bounds().width() > 0 && _0x31730d.bounds().height() > 0;
      });
      if (_0x218034.getDianZanShu() != -1 && _0x218034.getPinglunShu() != -1) {
        if (_0x553154.id("slide_play_right_link_icon").findOnce()) {
          return "广告";
        }
        log("视频");
        return "视频";
      }
      if (_0x553154.text("点击进入直播间").findOnce()) {
        log("点击进入直播间");
        return "点击进入直播间";
      }
      return "其他";
    };
    _0x218034.getPinglunUser = function (_0x525d15, _0x5cdb2f) {
      _0x525d15.length > 20 && _0x525d15.shift();
      var _0x414741 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0xba0c04) {
          return _0x395812.getPercent(_0xba0c04).w > 99 && _0xba0c04.bounds().height() > 0;
        }),
        _0x333a25 = _0x414741.findOne(3000);
      for (var _0x54f76d = 0; _0x54f76d < _0x333a25.childCount(); _0x54f76d++) {
        var _0x655d91 = _0x333a25.child(_0x54f76d);
        if (_0x655d91.childCount() < 4) {
          continue;
        }
        if (_0x655d91.findOne(text("作者")) != null) {
          log("跳过作者");
          continue;
        }
        var _0x5f5a3d = _0x655d91.findOne(id("com.smile.gifmaker:id/comment"));
        if (_0x5f5a3d == null) {
          continue;
        }
        var _0x2355e1 = _0x5f5a3d.text();
        if (_0x525d15.indexOf(_0x2355e1) == -1 && _0x218034.keysContain(_0x5cdb2f, _0x2355e1)) {
          log("评论内容:", _0x2355e1, ";包含内容:", _0x5cdb2f);
          _0x525d15.push(_0x2355e1);
          return _0x655d91;
        }
      }
      return null;
    };
    _0x218034.keysContain = function (_0x5f0a6a, _0x3a2fec) {
      if (_0x5f0a6a == "") {
        return true;
      }
      var _0x505226 = _0x5f0a6a.split("+");
      for (var _0x1dd024 = 0; _0x1dd024 < _0x505226.length; _0x1dd024++) {
        if (_0x3a2fec.includes(_0x505226[_0x1dd024])) {
          return true;
        }
      }
      return false;
    };
    _0x218034.userCenterContidion = function (_0x2d0b9f, _0x5c17ed) {
      if (_0x2d0b9f.huozan < _0x5c17ed.totalzanMin || _0x2d0b9f.huozan > _0x5c17ed.totalguanzhu) {
        log("获赞数值:范围不符");
        return false;
      }
      if (_0x2d0b9f.guanzhu < _0x5c17ed.totalguanzhuMin || _0x2d0b9f.guanzhu > _0x5c17ed.totalguanzhuMax) {
        log("关注数值:范围不符");
        return false;
      }
      if (_0x2d0b9f.fensi < _0x5c17ed.fensiMin || _0x2d0b9f.fensi > _0x5c17ed.fensiMax) {
        log("粉丝数值:范围不符");
        return false;
      }
      if (_0x2d0b9f.zuopin < _0x5c17ed.zuopinMin || _0x2d0b9f.zuopin > _0x5c17ed.zuopinMax) {
        log("作品数值:范围不符");
        return false;
      }
      return true;
    };
    this.closeTip = function () {
      var _0xec9f60 = threads.start(function () {
        setInterval(function () {
          try {
            if (text("立即重播").findOnce()) {
              click("立即重播");
            }
          } catch (_0x44be23) {
            log("closeTip", _0x44be23);
          }
        }, 1000);
      });
      return _0xec9f60;
    };
    this.checkHuakuai = function () {
      threads.start(function () {
        var _0x7ef8ae = text("拖动滑块").findOnce(),
          _0x3b070a = text("向右拖动滑块填充拼图").findOnce();
        _0x7ef8ae && _0x3b070a && (alert("请拖动滑块后,重新开始任务"), threads.shutDownAll());
        sleep(1000);
      });
    };
  }
  _0x48c076.exports = _0x2cdb83;
}, function (_0x353958, _0x21e729, _0x5dfeef) {
  function _0x371fb3(_0x51c79f, _0x447fbd) {
    var _0x5ba435 = this,
      _0x333088 = _0x5dfeef(1),
      _0x3b1c9c = _0x333088.bgColor,
      _0xeaa591 = _0x5dfeef(6);
    this.index = function () {
      _0x5ba435.view();
    };
    this.view = function () {
      var _0x10f706 = _0x51c79f.getLanguageType(),
        _0x438986 = new _0xeaa591(_0x10f706.languageType),
        _0xe175d6 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android"));
      ui.layout("\n<drawer>\n<vertical>\n\n<textbg=\"#ffffff\"paddingTop=\"".concat(_0xe175d6, "px\"id=\"back\"textColor=\"black\"padding=\"1510\"textSize=\"18dp\"text=\"").concat(_0x438986["返回"], "\"/>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"").concat(_0x438986["精准引流"], "\"margin=\"10101020\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalpadding=\"200200\"w=\"*\"h=\"auto\">\n<textgravity=\"left|center\"minHeight=\"40\"textColor=\"black\"text=\"").concat(_0x438986["功能介绍"], ":\"/>\n<vertical>\n<textmarginTop=\"10\"gravity=\"left|top\"minHeight=\"40\"text=\"").concat(_0x438986["关注点赞评论"], "\"bg=\"#ffffff\"/>\n</vertical>\n\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalpadding=\"200200\"w=\"*\"h=\"auto\">\n<textgravity=\"left|center\"h=\"40\"textColor=\"black\"text=\"").concat(_0x438986["运行界面"], ":\"/>\n<verticalmarginTop=\"5\">\n<textgravity=\"left|center\"h=\"30\"text=\"1.Home-Foryou\"bg=\"#ffffff\"/>\n<textgravity=\"left|center\"h=\"30\"text=\"2.Home-Follo\"bg=\"#ffffff\"/>\n<textgravity=\"left|center\"h=\"30\"text=\"3.Discover-video\"bg=\"#ffffff\"/>\n<textgravity=\"left|center\"h=\"30\"text=\"4.Profile-video\"bg=\"#ffffff\"/>\n</vertical>\n\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"").concat(_0x438986["观看个数"], "\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"hint=\"Pleaseenter\"gravity=\"right\"id=\"page1ShipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"").concat(_0x438986["关注概率"], "（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"hint=\"Pleaseenter\"gravity=\"right\"id=\"page1GuanzhuRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"").concat(_0x438986["点赞概率"], "（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"hint=\"Pleaseenter\"gravity=\"right\"id=\"page1DianzanRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"").concat(_0x438986["评论概率"], "（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"hint=\"Pleaseenter\"gravity=\"right\"id=\"page1PinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<framepadding=\"200200\"w=\"*\"h=\"auto\">\n<textmarginTop=\"8\"h=\"20\"textColor=\"black\"text=\"").concat(_0x438986["评论内容"], "（").concat(_0x438986["换行多条"], "）\"/>\n<inputmarginTop=\"25\"hint=\"Pleaseenter\"h=\"auto\"gravity=\"left|top\"minLines=\"3\"id=\"page1PinglunWords\"bg=\"#ffffff\"/>\n</frame>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<frameid=\"page1KeywordsItem\"padding=\"200200\"w=\"*\"h=\"auto\">\n<textmarginTop=\"8\"h=\"20\"textColor=\"black\"text=\"").concat(_0x438986["视频关键词"], "（").concat(_0x438986["换行多条"], "）\"/>\n<inputmarginTop=\"25\"hint=\"Pleaseenter\"h=\"auto\"gravity=\"left|top\"minLines=\"3\"id=\"page1Keywords\"bg=\"#ffffff\"/>\n</frame>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"").concat(_0x438986["观看间隔"], "\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"min:\"/>\n<inputid=\"page1WatchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"max:\"/>\n<inputid=\"page1WatchTimeMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"page1Save\"bg=\"").concat(_0x3b1c9c, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"").concat(_0x438986["开始"], "\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n</vertical>\n</drawer>\n"));
      if (_0x447fbd == 1) {
        ui.page1KeywordsItem.attr("h", "0");
      }
      ui.back.click(function () {
        _0x51c79f.view(1);
      });
      _0x5ba435.initPage1();
      ui.page1Save.click(function () {
        _0x5ba435.page1Save();
      });
    };
    var _0x2cfbfa = storages.create("wzke:TKK1");
    _0x5ba435.getPage1Data = function () {
      var _0x2f9b63 = {
        page1ShipinCount: _0x2cfbfa.get("page1ShipinCount") != undefined ? _0x2cfbfa.get("page1ShipinCount") : 3,
        page1WatchTimeMin: _0x2cfbfa.get("page1WatchTimeMin") != undefined ? _0x2cfbfa.get("page1WatchTimeMin") : 1,
        page1WatchTimeMax: _0x2cfbfa.get("page1WatchTimeMax") != undefined ? _0x2cfbfa.get("page1WatchTimeMax") : 3,
        page1GuanzhuRate: _0x2cfbfa.get("page1GuanzhuRate") != undefined ? _0x2cfbfa.get("page1GuanzhuRate") : 100,
        page1DianzanRate: _0x2cfbfa.get("page1DianzanRate") != undefined ? _0x2cfbfa.get("page1DianzanRate") : 100,
        page1DianzanMin: _0x2cfbfa.get("page1DianzanMin") != undefined ? _0x2cfbfa.get("page1DianzanMin") : 0,
        page1DianzanMax: _0x2cfbfa.get("page1DianzanMax") != undefined ? _0x2cfbfa.get("page1DianzanMax") : 100000,
        page1PinglunRate: _0x2cfbfa.get("page1PinglunRate") != undefined ? _0x2cfbfa.get("page1PinglunRate") : 100,
        page1PinglunMin: _0x2cfbfa.get("page1PinglunMin") != undefined ? _0x2cfbfa.get("page1PinglunMin") : 0,
        page1PinglunMax: _0x2cfbfa.get("page1PinglunMax") != undefined ? _0x2cfbfa.get("page1PinglunMax") : 100000,
        page1PinglunWords: _0x2cfbfa.get("page1PinglunWords") != undefined ? _0x2cfbfa.get("page1PinglunWords") : "1\n2\n3",
        page1Keywords: _0x2cfbfa.get("page1Keywords") != undefined ? _0x2cfbfa.get("page1Keywords") : ""
      };
      return _0x2f9b63;
    };
    _0x5ba435.initPage1 = function () {
      var _0x26f34a = _0x5ba435.getPage1Data();
      ui.page1ShipinCount.setText(_0x26f34a.page1ShipinCount + "");
      ui.page1WatchTimeMin.setText(_0x26f34a.page1WatchTimeMin + "");
      ui.page1WatchTimeMax.setText(_0x26f34a.page1WatchTimeMax + "");
      ui.page1GuanzhuRate.setText(_0x26f34a.page1GuanzhuRate + "");
      ui.page1DianzanRate.setText(_0x26f34a.page1DianzanRate + "");
      ui.page1PinglunRate.setText(_0x26f34a.page1PinglunRate + "");
      ui.page1PinglunWords.setText(_0x26f34a.page1PinglunWords);
      ui.page1Keywords.setText(_0x26f34a.page1Keywords);
    };
    _0x5ba435.page1Save = function () {
      _0x2cfbfa.put("page1ShipinCount", parseInt(ui.page1ShipinCount.text()));
      _0x2cfbfa.put("page1WatchTimeMin", parseInt(ui.page1WatchTimeMin.text()));
      _0x2cfbfa.put("page1WatchTimeMax", parseInt(ui.page1WatchTimeMax.text()));
      _0x2cfbfa.put("page1GuanzhuRate", parseInt(ui.page1GuanzhuRate.text()));
      _0x2cfbfa.put("page1DianzanRate", parseInt(ui.page1DianzanRate.text()));
      _0x2cfbfa.put("page1PinglunRate", parseInt(ui.page1PinglunRate.text()));
      _0x2cfbfa.put("page1PinglunWords", ui.page1PinglunWords.text());
      _0x2cfbfa.put("page1Keywords", ui.page1Keywords.text());
      dialogs.build({
        title: "success",
        positive: "saveandstart",
        negative: "save"
      }).on("positive", function () {
        _0x5ba435.start();
      }).on("negative", function () {
        toast("success");
      }).show();
    };
    var _0x2078e2 = _0x5dfeef(0),
      _0x5503dd = _0x5dfeef(37),
      _0x5205f8 = new (_0x5dfeef(2))();
    this.start = function () {
      if (!_0x2078e2.checkServer()) {
        return false;
      }
      _0x2078e2.showConsole("journal");
      log("PleaseentertherequiredvideopageofTTK");
      home();
      _0x5205f8.index();
      _0x5205f8.ClickListener({
        clickStart: function _0x44038e() {
          threads.start(function () {
            _0x5ba435.action();
          });
        },
        clickStop: function _0x24a302() {
          threads.shutDownAll();
          log("stop");
        },
        clickExit: function _0x5b6a3f() {
          dialogs.build({
            title: "Areyousureyouwanttoclose",
            positive: "ok",
            negative: "cancel"
          }).on("positive", function () {
            _0x5205f8.close();
            _0x2078e2.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x12dd96 = _0x5ba435.getPage1Data();
      _0x2078e2.actionSleep("Startcountdown:", 3);
      for (var _0x5d2d77 = 0; _0x5d2d77 < _0x12dd96.page1ShipinCount; _0x5d2d77++) {
        _0x2078e2.actionSleep("watch:", 3);
        var _0x4f296b = true;
        if (_0x447fbd == 2) {
          var _0x1759cd = _0x5503dd.getShipinDesc();
          _0x4f296b = _0x5503dd.checkDescContainWords(_0x1759cd, _0x12dd96.page1Keywords);
        }
        if (_0x4f296b && random(1, 100) < _0x12dd96.page1GuanzhuRate) {
          _0x5503dd.actionGuanzhu();
        }
        if (_0x4f296b && random(1, 100) < _0x12dd96.page1DianzanRate) {
          _0x5503dd.actionDianzan();
        }
        _0x4f296b && random(1, 100) < _0x12dd96.page1PinglunRate && _0x5503dd.jumpClickPinglunqu() && (_0x5503dd.actionPinglun(_0x12dd96.page1PinglunWords), _0x5503dd.jumpCloseinglunqu());
        _0x5503dd.shipinSwiperUp();
      }
      alert("END");
    };
  }
  _0x353958.exports = _0x371fb3;
}, function (_0x387ab9, _0x5196ad, _0x114740) {
  'ui';

  var _0x4f7a54 = _0x114740(1),
    _0x4b8fa5 = storages.create("wzke:CODE88");
  _0x4b8fa5.get("version") == undefined && _0x4b8fa5.put("version", "1.0.0");
  var _0x568700 = _0x4b8fa5.get("version");
  _0x114740(11);
  var _0x8dd6b7 = _0x4f7a54.host + "/static/imgs/splash1.png";
  ui.layout("\n<framew=\"*\"h=\"*\"bg=\"#287efe\">\n<imgid=\"splash\"w=\"240\"h=\"240\"layout_gravity=\"center\"src=\"".concat(_0x8dd6b7, "\"/>\n<verticalpadding=\"1601680\"h=\"auto\"layout_gravity=\"bottom\">\n<textgravity=\"center\"id=\"progressText\"textSize=\"16\"textColor=\"#ffffff\"text=\"").concat("版本号:v" + _0x568700, "\"></text>\n</vertical>\n</frame>\n"));
  ui.statusBarColor(_0x4f7a54.bgColor);
  var _0x494552 = new android.view.animation.ScaleAnimation(0.3, 1, 0.3, 1, android.view.animation.Animation.RELATIVE_TO_SELF, 0.5, android.view.animation.Animation.RELATIVE_TO_SELF, 0.5);
  _0x494552.setDuration(800);
  _0x494552.setFillAfter(true);
  _0x494552.setAnimationListener(new android.view.animation.Animation.AnimationListener({
    onAnimationStart: function _0x3fdb59(_0x4d84fa) {},
    onAnimationEnd: function _0x4e290d(_0x260900) {
      _0x215b0f();
    },
    onAnimationRepeat: function _0x1e3315(_0x5c514f) {}
  }));
  ui.splash.startAnimation(_0x494552);
  var _0x2e8625 = function _0xb46acb() {
      var _0x56fd65 = threads.disposable(),
        _0x51ad83 = {
          result: false
        };
      threads.start(function () {
        try {
          var _0x4137ef = http.get(_0x4f7a54.host + "web/index/getOem").body.json();
          _0x568700 < _0x4137ef && (codePath = engines.myEngine().cwd() + "/main.js", files.write(codePath, http.get(_0x4f7a54.host + "web/index/getCode").body.string()), _0x4b8fa5.put("version", _0x4137ef), _0x51ad83 = {
            result: true
          });
        } catch (_0x74870a) {}
        _0x56fd65.setAndNotify(_0x51ad83);
      });
      return _0x56fd65.blockedGet();
    },
    _0x234ccc = _0x2e8625();
  _0x234ccc.result === true && (toast("更新完成，请重新启动！"), exit());
  function _0x215b0f() {
    var _0x327f0a = new (_0x114740(4))(),
      _0x132193 = new (_0x114740(12))();
    _0x327f0a.index("", function (_0x281976) {
      _0x281976 != "" && _0x132193.index(_0x281976);
    });
    var _0x4b03ef = false;
    ui.emitter.on("back_pressed", function (_0x41f691) {
      !_0x4b03ef ? (toast("再按一次退出"), _0x4b03ef = true, isCanFinishTimeout = setTimeout(function () {
        _0x4b03ef = false;
      }, 2000), _0x41f691.consumed = true) : (clearTimeout(isCanFinishTimeout), _0x41f691.consumed = true, exit());
    });
  }
}, function (_0x386fa9, _0x494aee, _0x4f48a6) {
  'ui';

  var _0x1cd7f2 = _0x4f48a6(1);
  function _0x12cb1c() {
    ui.Widget.call(this);
    this.defineAttr("src", function (_0x4806e9, _0xed7df5, _0x20ae10, _0x187b01) {
      _0x4806e9._img.attr("src", _0x20ae10);
    });
    this.defineAttr("text", function (_0xae0ecc, _0x24b911, _0x52075f, _0x2886ba) {
      _0xae0ecc._text.setText(_0x52075f);
    });
    this.defineAttr("bgColor", function (_0x2cc02e, _0x1529c2, _0x50b774, _0x2d4850) {
      _0x2cc02e._img.attr("tint", _0x50b774);
      _0x2cc02e._text.setTextColor(colors.parseColor(_0x50b774));
    });
    this.render = function () {
      var _0x30bf03 = "";
      _0x30bf03 += "<cardid=\"_card\"w=\"auto\"h=\"auto\"margin=\"50-50\"cardCornerRadius=\"0\"cardElevation=\"0\"cardBackgroundColor=\"#ffffff\"cardUseCompatPadding=\"true\">";
      _0x30bf03 += "<horizontalmargin=\"100150\"h=\"auto\"gravity=\"center_vertical\">";
      _0x30bf03 += "<imgid=\"_img\"tint=\"#000000\"gravity=\"center_vertical\"src=\"@drawable/ic_dashboard_black_48dp\"h=\"*\"w=\"18sp\"baselineAlignBottom=\"false\"bg=\"?selectableItemBackgroundBorderless\"/>";
      _0x30bf03 += "<textid=\"_text\"marginLeft=\"5\"gravity=\"center_vertical\"textStyle=\"bold\"textColor=\"#000000\"textSize=\"16sp\"/>";
      _0x30bf03 += "</horizontal>";
      _0x30bf03 += "</card>";
      return _0x30bf03;
    };
  }
  util.extend(_0x12cb1c, ui.Widget);
  ui.registerWidget("btnIcon", _0x12cb1c);
  function _0x403b9e() {
    ui.Widget.call(this);
    this.defineAttr("src", function (_0x166fdb, _0x20162e, _0x14ff69, _0x5326f3) {
      _0x166fdb._src.attr("src", _0x14ff69);
    });
    this.defineAttr("text", function (_0x33d0ef, _0x427b2b, _0x194e3d, _0x12bf77) {
      _0x33d0ef._text.setText(_0x194e3d);
    });
    this.defineAttr("bg", function (_0x2fa0de, _0x18821e, _0x3ec114, _0x42c5f3) {});
    this.defineAttr("tip", function (_0x25d759, _0x58282c, _0x3179e1, _0x578576) {});
    this.defineAttr("tip2", function (_0x5d494f, _0x16fa10, _0x5df5b5, _0x4f0416) {});
    this.onFinishInflation = function (_0x4e9700) {
      _0x66ebac(_0x4e9700._bg, _0x1cd7f2.color1, _0x1cd7f2.color2);
    };
    this.render = function () {
      var _0x2ce570 = "<vertical>";
      _0x2ce570 += "<cardalpha=\"1\"margin=\"0\"id=\"_cardView\"cardCornerRadius=\"15\"cardElevation=\"0\"cardUseCompatPadding=\"true\"cardBackgroundColor=\"#ffffff\">";
      _0x2ce570 += "<horizontallayout_gravity=\"center\"gravity=\"center\">";
      _0x2ce570 += "\t<framemargin=\"3\"layout_gravity=\"center\"w=\"40\"h=\"40\"alpha=\"1\">";
      _0x2ce570 += "\t\t<imgid=\"_bg\"w=\"40\"h=\"40\"radius=\"40\"scaleType=\"center\"/>";
      _0x2ce570 += "\t\t<imgid=\"_src\"w=\"25\"h=\"25\"src=\"@drawable/ic_mic_none_black_48dp\"tint=\"#ffffff\"layout_gravity=\"center\"/>";
      _0x2ce570 += "\t</frame>";
      _0x2ce570 += "</horizontal>";
      _0x2ce570 += "</card>";
      _0x2ce570 += "\t<verticalmargin=\"-10-2\"layout_gravity=\"right|center\"gravity=\"center\">";
      _0x2ce570 += "\t\t<textid=\"_text\"gravity=\"center\"textSize=\"12\"textColor=\"#000000\"text=\"内容\"/>";
      _0x2ce570 += "\t</vertical>";
      _0x2ce570 += "</vertical>";
      return _0x2ce570;
    };
  }
  importClass(android.graphics.drawable.GradientDrawable);
  function _0x66ebac(_0xb8dfcc, _0x4910e8, _0x51ece7) {
    var _0x14f246 = new GradientDrawable(),
      _0x456f3f = util.java.array("int", 3);
    _0x456f3f[0] = colors.parseColor(_0x51ece7);
    _0x456f3f[1] = colors.parseColor(_0x4910e8);
    _0x456f3f[2] = colors.parseColor(_0x4910e8);
    _0x14f246.setOrientation(GradientDrawable.Orientation.TL_BR);
    _0x14f246.setColors(_0x456f3f);
    _0x14f246.setStroke(2, colors.parseColor("#ffffff"));
    _0x14f246.setCornerRadius(25);
    _0xb8dfcc.setBackground(_0x14f246);
  }
  util.extend(_0x403b9e, ui.Widget);
  ui.registerWidget("icon2", _0x403b9e);
  function _0x3cc423() {
    ui.Widget.call(this);
    this.defineAttr("src", function (_0x2a68b4, _0x310a58, _0x2d4c44, _0x57698b) {
      _0x2a68b4._src.attr("src", _0x2d4c44);
    });
    this.defineAttr("_title", function (_0x3cb84c, _0x487811, _0x12b4e3, _0x403b94) {
      _0x3cb84c._title.setText(_0x12b4e3);
    });
    this.defineAttr("_content1", function (_0x59f2a0, _0x22fbfa, _0xd1e174, _0x157435) {
      _0x59f2a0._content1.attr("h", "wrap_content");
      _0x59f2a0._content1.setText(_0xd1e174);
    });
    this.defineAttr("_content2", function (_0x1ed74e, _0x4992b0, _0x37afc2, _0x504752) {
      _0x1ed74e._content2.attr("h", "wrap_content");
      _0x1ed74e._content2.setText(_0x37afc2);
    });
    this.defineAttr("_content3", function (_0x53b665, _0xf282d0, _0x246049, _0x302aed) {
      _0x53b665._content3.attr("h", "wrap_content");
      _0x53b665._content3.setText(_0x246049);
    });
    this.defineAttr("_content4", function (_0x4220c1, _0x369289, _0x125cc3, _0x44adff) {
      _0x4220c1._content4.attr("h", "wrap_content");
      _0x4220c1._content4.setText(_0x125cc3);
    });
    this.onFinishInflation = function (_0x567e0b) {
      _0x567e0b._content.attr("h", "wrap_content");
      _0x567e0b._more.click(function () {
        var _0x1d6d5b = _0x567e0b._content.attr("h");
        _0x1d6d5b == "wrap_content" && (_0x567e0b._content.attr("h", "0"), _0x567e0b._img.attr("rotationX", "180"));
        _0x1d6d5b == "0" && (_0x567e0b._content.attr("h", "wrap_content"), _0x567e0b._img.attr("rotationX", "0"));
      });
    };
    this.render = function () {
      var _0x489950 = "";
      _0x489950 += "\t<verticalid=\"sdfsdf\"margin=\"50\"gravity=\"center\"layout_gravity=\"left|center\">";
      _0x489950 += "\t<horizontalid=\"_more\"gravity=\"center_vertical\">";
      _0x489950 += "\t\t<textid=\"_title\"textSize=\"15\"layout_weight=\"1\"textColor=\"#000000\"text=\"1.软件首次运行\"/>";
      _0x489950 += "\t\t<imgid=\"_img\"gravity=\"right\"padding=\"3\"w=\"60\"h=\"30\"src=\"@drawable/ic_expand_more_black_48dp\"tint=\"#000000\"layout_gravity=\"center\"/>";
      _0x489950 += "\t</horizontal>";
      _0x489950 += "\t<verticalid=\"_content\"h=\"wrap_content\"padding=\"153\">";
      _0x489950 += "\t\t<textid=\"_content1\"textSize=\"14\"h=\"0\"textColor=\"#000000\"/>";
      _0x489950 += "\t\t<textid=\"_content2\"textSize=\"14\"h=\"0\"textColor=\"#000000\"/>";
      _0x489950 += "\t\t<textid=\"_content3\"textSize=\"14\"h=\"0\"textColor=\"#000000\"/>";
      _0x489950 += "\t\t<textid=\"_content4\"textSize=\"14\"h=\"0\"textColor=\"#000000\"/>";
      _0x489950 += "\t</vertical>";
      _0x489950 += "\t\t<imgmargin=\"00\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>";
      _0x489950 += "\t</vertical>";
      return _0x489950;
    };
  }
  util.extend(_0x3cc423, ui.Widget);
  ui.registerWidget("textFold", _0x3cc423);
  function _0x303c2a() {
    ui.Widget.call(this);
    var _0xa791b0 = 0;
    this.defineAttr("value", function (_0x50eb1d, _0x57743f, _0x29cf2d, _0x4bddf1) {
      _0x50eb1d._value.setText(_0x29cf2d.toString());
    });
    this.defineAttr("minValue", function (_0x46bde0, _0x21c6a8, _0x4f8afb, _0x649798) {
      _0xa791b0 = parseInt(_0x4f8afb) || 0;
    });
    this.onFinishInflation = function (_0x513340) {
      _0x513340._decrement.click(function () {
        var _0x5ce7b8 = parseInt(_0x513340._value.getText());
        if (!isNaN(_0x5ce7b8) && _0x5ce7b8 > _0xa791b0) {
          _0x513340._value.setText((_0x5ce7b8 - 1).toString());
        }
      });
      _0x513340._increment.click(function () {
        var _0x2ce06c = parseInt(_0x513340._value.getText());
        !isNaN(_0x2ce06c) && _0x513340._value.setText((_0x2ce06c + 1).toString());
      });
    };
    this.render = function () {
      var _0x2333cb = "";
      _0x2333cb += "<verticalid=\"stepper\"margin=\"5\"gravity=\"center\">";
      _0x2333cb += "<horizontalgravity=\"center\">";
      _0x2333cb += "<buttonid=\"_decrement\"text=\"-\"borderRadius=\"6\"w=\"40\"h=\"40\"gravity=\"center\"layout_gravity=\"center\"/>";
      _0x2333cb += "<textid=\"_value\"textSize=\"18sp\"margin=\"5\"textColor=\"#000000\"/>";
      _0x2333cb += "<buttonid=\"_increment\"text=\"+\"borderRadius=\"6\"w=\"40\"h=\"40\"gravity=\"center\"layout_gravity=\"center\"/>";
      _0x2333cb += "</horizontal>";
      _0x2333cb += "</vertical>";
      return _0x2333cb;
    };
  }
  util.extend(_0x303c2a, ui.Widget);
  ui.registerWidget("Stepper", _0x303c2a);
  function _0x6b013c() {
    ui.Widget.call(this);
    this.defineAttr("title", function (_0x2734f4, _0x2214e8, _0x4a7aa5, _0x5a7a2c) {
      _0x2734f4._title.setText(_0x4a7aa5);
    });
    this.defineAttr("bg", function (_0x615303, _0xf20817, _0x1db386, _0x4707d7) {
      _0x615303._card.setCardBackgroundColor(android.graphics.Color.parseColor(_0x1db386));
    });
    this.render = function () {
      var _0x54240f = "";
      _0x54240f += "<cardid=\"_card\"w=\"*\"h=\"wrap_content\"cardCornerRadius=\"0\"cardElevation=\"4\">";
      _0x54240f += "<horizontalid=\"_content\"w=\"*\"h=\"wrap_content\"paddingTop=\"99px\"paddingBottom=\"10px\"gravity=\"center_vertical\">";
      _0x54240f += "<horizontalid=\"_backButton\"gravity=\"center_vertical\"margin=\"166166\"bg=\"?selectableItemBackgroundBorderless\">";
      _0x54240f += "<imgid=\"_backButtonIcon\"tint=\"#ffffff\"src=\"@drawable/ic_keyboard_arrow_left_black_48dp\"h=\"24dp\"w=\"24dp\"/>";
      _0x54240f += "<textid=\"_backButtonText\"text=\"返回\"textColor=\"#ffffff\"textSize=\"16sp\"marginLeft=\"2dp\"/>";
      _0x54240f += "</horizontal>";
      _0x54240f += "<textid=\"_title\"text=\"Title\"gravity=\"center\"textColor=\"#ffffff\"textSize=\"20sp\"flex=\"1\"marginLeft=\"-90\"layout_width=\"match_parent\"layout_gravity=\"center\"/>";
      _0x54240f += "</horizontal>";
      _0x54240f += "</card>";
      return _0x54240f;
    };
  }
  util.extend(_0x6b013c, ui.Widget);
  ui.registerWidget("MyAppBar", _0x6b013c);
}, function (_0x5245a8, _0x5d4717, _0x1243e2) {
  function _0xd5874f() {
    var _0x3c00c4 = this;
    this.isRequestScreenCapture = false;
    this.loginInfo = "";
    var _0xdb2dc = 0,
      _0x4aae3a = 0,
      _0x45d913 = _0x1243e2(0),
      _0x23d587 = new (_0x1243e2(13))(_0x3c00c4),
      _0x5bc806 = new (_0x1243e2(14))(_0x3c00c4),
      _0x4c9ef1 = new (_0x1243e2(15))(_0x3c00c4),
      _0x2409a6 = new (_0x1243e2(16))(_0x3c00c4),
      _0x35868a = new (_0x1243e2(17))(_0x3c00c4),
      _0x392361 = new (_0x1243e2(18))(_0x3c00c4),
      _0x5dbd7c = new (_0x1243e2(19))(_0x3c00c4),
      _0x238314 = new (_0x1243e2(20))(_0x3c00c4),
      _0x58c4d4 = new (_0x1243e2(21))(_0x3c00c4),
      _0x4f34e9 = new (_0x1243e2(22))(_0x3c00c4),
      _0x52edf7 = new (_0x1243e2(23))(_0x3c00c4),
      _0x192b05 = new (_0x1243e2(24))(_0x3c00c4),
      _0x148116 = new (_0x1243e2(25))(_0x3c00c4),
      _0x48114c = new (_0x1243e2(26))(_0x3c00c4),
      _0x546284 = new (_0x1243e2(27))(_0x3c00c4),
      _0x1c50c6 = new (_0x1243e2(28))(_0x3c00c4),
      _0x2d7429 = new (_0x1243e2(29))(_0x3c00c4),
      _0x3b846a = new (_0x1243e2(30))(_0x3c00c4),
      _0x95e5f0 = new (_0x1243e2(31))(_0x3c00c4),
      _0x4e9c2e = new (_0x1243e2(32))(_0x3c00c4),
      _0x1be384 = new (_0x1243e2(33))(_0x3c00c4),
      _0x158c90 = new (_0x1243e2(35))(_0x3c00c4),
      _0x646b4c = new (_0x1243e2(36))(_0x3c00c4),
      _0x3b98de = new (_0x1243e2(9))(_0x3c00c4, 1),
      _0x484144 = new (_0x1243e2(9))(_0x3c00c4, 2),
      _0x57d430 = new (_0x1243e2(38))(_0x3c00c4),
      _0xb36580 = new (_0x1243e2(41))(_0x3c00c4),
      _0x318382 = new (_0x1243e2(43))(_0x3c00c4),
      _0x5c6f53 = _0x1243e2(1),
      _0x66b41e = _0x1243e2(7),
      _0x438631 = _0x45d913.getStatusBarHight();
    this.index = function (_0x5864a2) {
      this.loginInfo = _0x5864a2;
      _0x45d913.setFullWin();
      ui.statusBarColor(_0x5c6f53.bgColor);
      _0x3c00c4.view(0);
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
    };
    var _0x58ebb3 = _0x1243e2(6);
    _0x3c00c4.LgObj = _0x58ebb3;
    var _0x356eee = _0x5c6f53.bgColor,
      _0x635174 = "#999999";
    var _0x43a0d2 = [],
      _0x70af6c = 0;
    function _0x146810() {
      ui.Widget.call(this);
      this.onFinishInflation = function (_0x5abbff) {
        _0x43a0d2 = [];
        title_list = [["主页", "@drawable/ic_home_black_48dp"], ["发现", "@drawable/ic_vibration_black_48dp"], ["个人", "@drawable/ic_perm_identity_black_48dp"]];
        for (var _0x46e9f7 = 0; _0x46e9f7 < title_list.length; _0x46e9f7++) {
          iconName = title_list[_0x46e9f7][0];
          iconImg = title_list[_0x46e9f7][1];
          _0x43a0d2[_0x46e9f7] = ui.inflate("<verticallayout_weight=\"1\"id=\"_bg\"w=\"*\"bg=\"#ffffff\"padding=\"0000\"gravity=\"center\">\n<imgid=\"_src\"marginTop=\"-5\"src=\"".concat(iconImg, "\"w=\"24\"tint=\"#6b6a6a\"/>\n<textid=\"_text\"text=\"").concat(iconName, "\"marginBottom=\"5\"marginTop=\"-10\"w=\"auto\"textSize=\"12\"textColor=\"#6b6a6a\"/></vertical>"), _0x5abbff._tabs, true);
        }
        _0x43a0d2[_0x70af6c]._src.attr("tint", _0x356eee);
        _0x43a0d2[_0x70af6c]._text.setTextColor(colors.parseColor(_0x356eee));
        _0x5abbff.tabs.selectedTabIndicatorColor = colors.parseColor("#ffffff");
      };
      this.render = function () {
        return "<cardw=\"*\"h=\"auto\"cardElevation=\"2dp\"foreground=\"?selectableItemBackground\"><horizontalid=\"_tabs\"/><tabsid=\"tabs\"/></card>";
      };
    }
    util.extend(_0x146810, ui.Widget);
    ui.registerWidget("tabs-layout", _0x146810);
    this.view = function () {
      _0x356eee = _0x5c6f53.bgColor;
      ui.layout("\n<frame>\n<vertical>\n<viewpagerw=\"*\"h=\"*\"id=\"viewpagerBottom\"bg=\"#ffffff\">\n<ScrollView><verticalw=\"*\"h=\"*\"id=\"mainPage\"bg=\"#ffffff\"></vertical></ScrollView>\n<ScrollView><verticalw=\"*\"h=\"*\"id=\"dyPage\"bg=\"#ffffff\"></vertical></ScrollView>\n<ScrollView><verticalw=\"*\"h=\"*\"id=\"personal\"bg=\"#ffffff\"></vertical></ScrollView>\n</viewpager>\n</vertical>\n<tabs-layoutdata=\"\"layout_gravity=\"bottom\"/>\n</frame>\n");
      ui.tabs.setupWithViewPager(ui.viewpagerBottom);
      ui.viewpagerBottom.currentItem = _0x70af6c;
      ui.viewpagerBottom.setOnPageChangeListener({
        onPageSelected: function _0x41683a(_0x32611d) {
          _0xdb2dc = _0x32611d;
          _0x43a0d2[_0x70af6c]._src.attr("tint", _0x635174);
          _0x43a0d2[_0x70af6c]._text.setTextColor(colors.parseColor(_0x635174));
          _0x43a0d2[_0x32611d]._src.attr("tint", _0x356eee);
          _0x43a0d2[_0x32611d]._text.setTextColor(colors.parseColor(_0x356eee));
          _0x70af6c = _0x32611d;
          _0x32611d == 1 && (ui.runHour.setText(_0x66b41e.getRunTime().hours.toString()), ui.runMin.setText(_0x66b41e.getRunTime().minutes.toString()), ui.followCount.setText(_0x66b41e.getRunData("follow").toString()), ui.likeCount.setText(_0x66b41e.getRunData("like").toString()), ui.visitCount.setText(_0x66b41e.getRunData("visit").toString()), ui.totalCount.setText(_0x66b41e.getTotal().toString()));
        }
      });
      _0x70af6c == 0 ? _0x3c00c4.mainPage() : ui.post(function () {
        _0x3c00c4.mainPage();
      });
      _0x70af6c == 1 ? _0x3c00c4.dyPage() : ui.post(function () {
        _0x3c00c4.dyPage();
      });
      _0x70af6c == 2 ? _0x3c00c4.personal() : ui.post(function () {
        _0x3c00c4.personal();
      });
    };
    _0x3c00c4.updateColor = function (_0x4621e3) {
      var _0x42c4d7 = new GradientDrawable(),
        _0x5d9b11 = util.java.array("int", 3);
      _0x5d9b11[0] = colors.parseColor(_0x5c6f53.color2);
      _0x5d9b11[1] = colors.parseColor(_0x5c6f53.color1);
      _0x5d9b11[2] = colors.parseColor(_0x5c6f53.color3);
      _0x42c4d7.setShape(GradientDrawable.RECTANGLE);
      _0x42c4d7.setOrientation(GradientDrawable.Orientation.TOP_BOTTOM);
      _0x42c4d7.setColors(_0x5d9b11);
      _0x42c4d7.setCornerRadius(30);
      _0x4621e3.setBackground(_0x42c4d7);
    };
    _0x3c00c4.mainPage = function () {
      var _0x5c8b0b = _0x3c00c4.getLanguageType(),
        _0x324e4f = new _0x58ebb3(_0x5c8b0b.languageType),
        _0x367756 = parseInt(device.width * 0.1),
        _0x5ec63c = parseInt(device.width * 0.48),
        _0x5573e5 = parseInt(device.width),
        _0x449394 = ui.inflate("\n<vertical>\n<framew=\"*\"h=\"auto\"gravity=\"top|center\">\n<imgid=\"page1Bg\"gravity=\"center\"scaleY=\"1.2\"scaleX=\"1.2\"w=\"".concat(_0x5573e5, "px\"h=\"").concat(_0x5ec63c, "px\"scaleType=\"fitXY\"marginTop=\"").concat(-_0x367756, "px\"/>\n<verticalmarginTop=\"").concat(_0x438631, "px\"gravity=\"center\">\n<imgpadding=\"105\"id=\"pagebanner\"alpha=\"1\"h=\"").concat(_0x5ec63c, "px\"w=\"").concat(_0x5573e5, "px\"scaleType=\"fitXY\"radius=\"45px\"elevation=\"4dp\"/>\n</vertical>\n</frame>\n<vertical>\n<horizontallayoutSum=\"2\">\n<verticallayout_weight=\"1\">\n<cardmargin=\"12848\"h=\"auto\"padding=\"5\"cardCornerRadius=\"8\"cardElevation=\"4dp\">\n<framemargin=\"10\"w=\"32\"h=\"32\"alpha=\"1\"layout_gravity=\"center-horizontal\">\n<imgid=\"_bg\"w=\"32\"h=\"32\"src=\"").concat(_0x5c6f53.bgColor, "\"radius=\"15\"scaleType=\"center\"baselineAlignBottom=\"false\"/>\n<imgid=\"_src\"w=\"18\"h=\"18\"src=\"@drawable/ic_play_circle_filled_white_black_48dp\"tint=\"#ffffff\"layout_gravity=\"center\"baselineAlignBottom=\"false\"/>\n</frame>\n<SwitchWidget-Se7enmargin=\"4610512\"padding='5'textColor=\"#000000\"textSize=\"18dp\"id=\"autoFloaty\"text=\"悬浮窗\"trackColor='").concat(_0x5c6f53.bgColor, "'checked=\"\"/>\n</card>\n</vertical>\n<verticallayout_weight=\"1\">\n<cardmargin=\"48128\"h=\"auto\"padding=\"5\"cardCornerRadius=\"8\"cardElevation=\"4dp\">\n<framemargin=\"10\"w=\"32\"h=\"32\"alpha=\"1\"layout_gravity=\"center-horizontal\">\n<imgid=\"_bg\"w=\"32\"h=\"32\"src=\"").concat(_0x5c6f53.bgColor, "\"radius=\"15\"scaleType=\"center\"baselineAlignBottom=\"false\"/>\n<imgid=\"_src\"w=\"18\"h=\"18\"src=\"@drawable/ic_touch_app_black_48dp\"tint=\"#ffffff\"layout_gravity=\"center\"baselineAlignBottom=\"false\"/>\n</frame>\n<SwitchWidget-Se7enmargin=\"4610512\"padding='5'textColor=\"#000000\"textSize=\"18dp\"id=\"autoService\"text=\"无障碍\"trackColor='").concat(_0x5c6f53.bgColor, "'checked=\"\"/>\n</card>\n</vertical>\n</horizontal>\n</vertical>\n\n<verticalmarginBottom=\"70\">\n<cardmargin=\"126\"w=\"*\"h=\"auto\"cardCornerRadius=\"8\"cardElevation=\"4dp\">\n<verticalmargin=\"010\">\n<btnIcontext=\"引流专区\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<imgmargin=\"122\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalmargin=\"0\"layoutSum=\"4\">\n<icon2id=\"icon1\"bg=\"#337ab7\"text=\"基础观看\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_stay_current_portrait_black_48dp\"/>\n<icon2id=\"icon2\"bg=\"#5cb85c\"text=\"垂直观看\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_perm_device_information_black_48dp\"/>\n<icon2id=\"J4\"bg=\"#ffc107\"text=\"点赞浏览\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_favorite_black_48dp\"/>\n</horizontal>\n<horizontalmargin=\"0\"layout_weight=\"4\">\n<icon2id=\"icon3\"bg=\"#5bc0de\"text=\"普通浏览\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_bookmark_black_48dp\"/>\n<icon2id=\"J2_2\"alpha=\"1\"bg=\"#ffc107\"text=\"智能浏览\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_flip_to_back_black_48dp\"/>\n<icon2id=\"znyl\"bg=\"#0b2e64\"text=\"智能引流\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_phonelink_ring_black_48dp\"/>\n</horizontal>\n<horizontalmargin=\"0\"weightSum=\"3\">\n<icon2id=\"J1\"bg=\"#ff9800\"text=\"评论浏览\"tip=\"视频页面\"layout_weight=\"1\"src=\"@drawable/ic_record_voice_over_black_48dp\"/>\n<icon2id=\"page1\"bg=\"#5cb85c\"text=\"喜欢浏览\"tip=\"视频页面\"layout_weight=\"1\"src=\"@drawable/ic_class_black_48dp\"/>\n<icon2id=\"J3\"bg=\"#8bc34a\"text=\"直播浏览\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_vibration_black_48dp\"/>\n</horizontal>\n<horizontalmargin=\"08\"marginTop=\"6\"w=\"match_parent\">\n<icon2id=\"J2\"bg=\"#e91e63\"text=\"粉丝浏览\"tip=\"粉丝列表\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n<icon2alpha='0'id=\"XHS2\"bg=\"#ff5722\"text=\"占位\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_record_voice_over_black_48dp\"/>\n<icon2alpha=\"0\"bg=\"#009688\"text=\"占位\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n</horizontal>\n</vertical>\n</card>\n<cardmargin=\"126\"w=\"*\"h=\"auto\"cardCornerRadius=\"8\"cardElevation=\"4dp\">\n<verticalmargin=\"010\">\n<btnIcontext=\"拓客专区\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<imgmargin=\"122\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalmargin=\"0\">\n<icon2id=\"pltk\"bg=\"#ff9800\"text=\"评论拓客\"tip=\"视频页面\"layout_weight=\"1\"src=\"@drawable/ic_speaker_notes_black_48dp\"/>\n<icon2id=\"icon3_1\"bg=\"#f0ad4e\"text=\"同城宣传\"tip=\"同城\"layout_weight=\"1\"src=\"@drawable/ic_supervisor_account_black_48dp\"/>\n<icon2id=\"icon4\"bg=\"#f0ad4e\"text=\"万能拓客\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_tablet_android_black_48dp\"/>\n</horizontal>\n<horizontalmargin=\"0\"weightSum=\"3\">\n<icon2id=\"icon6\"bg=\"#5cb85c\"text=\"行业搜索\"tip=\"搜索用户列表\"layout_weight=\"1\"src=\"@drawable/ic_my_location_black_48dp\"/>\n<icon2id=\"tgtk\"bg=\"#e91e63\"text=\"团购拓客\"tip=\"团购拓客\"layout_weight=\"1\"src=\"@drawable/ic_child_friendly_black_48dp\"/>\n<icon2id=\"jztk\"bg=\"#ffc107\"text=\"行业拓客\"tip=\"行业拓客\"layout_weight=\"1\"src=\"@drawable/ic_local_play_black_48dp\"/>\n</horizontal>\n</vertical>\n</card>\n<cardmargin=\"126\"w=\"*\"h=\"auto\"cardCornerRadius=\"8\"cardElevation=\"4dp\">\n<verticalmargin=\"010\">\n<btnIcontext=\"实用工具\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<imgmargin=\"122\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalmargin=\"0\">\n<icon2id=\"icon5\"bg=\"#337ab7\"text=\"直播氛围\"tip=\"直播间\"layout_weight=\"1\"src=\"@drawable/ic_mic_none_black_48dp\"/>\n<icon2id=\"T1\"bg=\"#009688\"text=\"清理关注\"tip=\"取关\"layout_weight=\"1\"src=\"@drawable/ic_cancel_black_48dp\"/>\n<icon2id=\"B1\"bg=\"#ff5722\"text=\"AI录制\"layout_weight=\"1\"src=\"@drawable/ic_touch_app_black_48dp\"/>\n</horizontal>\n<horizontalmargin=\"0\"weightSum=\"3\">\n<icon2id=\"T2\"bg=\"#3385ff\"text=\"取消喜欢\"tip=\"粉丝列表运行\"layout_weight=\"1\"src=\"@drawable/ic_favorite_black_48dp\"/>\n<icon2id=\"T3\"bg=\"#00BCD4\"text=\"用户回关\"tip=\"粉丝列表运行\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n<icon2id=\"T4\"bg=\"#673ab7\"text=\"用户回访\"tip=\"粉丝列表运行\"layout_weight=\"1\"src=\"@drawable/ic_favorite_border_black_48dp\"/>\n</horizontal>\n</vertical>\n</card>\n<cardmargin=\"126\"w=\"*\"h=\"auto\"cardCornerRadius=\"8\"cardElevation=\"4dp\">\n<verticalmargin=\"010\">\n<btnIcontext=\"火山版\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<imgmargin=\"122\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalmargin=\"0\"weightSum=\"3\">\n<icon2id=\"HS2\"alpha=\"1\"bg=\"#3385ff\"text=\"基础观看\"tip=\"粉丝列表运行\"layout_weight=\"1\"src=\"@drawable/ic_stay_current_portrait_black_48dp\"/>\n<icon2id=\"HS1\"bg=\"#009688\"text=\"粉丝观看\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n<icon2id=\"HS1_2\"bg=\"#009688\"text=\"智能浏览\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_album_black_48dp\"/>\n</horizontal>\n</vertical>\n</card>\n<cardmargin=\"126\"w=\"*\"h=\"auto\"cardCornerRadius=\"8\"cardElevation=\"4dp\">\n<verticalmargin=\"010\">\n<btnIcontext=\"极速版\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<horizontalmargin=\"08\"weightSum=\"3\">\n<icon2id=\"JS2\"alpha=\"1\"bg=\"#3385ff\"text=\"基础观看\"tip=\"粉丝列表运行\"layout_weight=\"1\"src=\"@drawable/ic_stay_current_portrait_black_48dp\"/>\n<icon2id=\"JS1\"bg=\"#009688\"text=\"粉丝观看\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n<icon2id=\"JS1_2\"bg=\"#009688\"text=\"智能浏览\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_album_black_48dp\"/>\n</horizontal>\n<imgmargin=\"124\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<btnIconsrc=\"@drawable/ic_dashboard_black_48dp\"text=\"WX\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<horizontalweightSum=\"3\"w=\"*\"margin=\"08\"gravity=\"left\">\n<icon2id=\"Wx1\"bg=\"#ff9800\"text=\"群抢红包\"tip=\"不限版本\"layout_weight=\"1\"src=\"@drawable/ic_drafts_black_48dp\"/>\n<icon2id=\"Wx2\"bg=\"#ff1100\"text=\"评论浏览\"tip=\"不限版本\"layout_weight=\"1\"src=\"@drawable/ic_mood_black_48dp\"/>\n<icon2alpha=\"0\"bg=\"#009688\"text=\"占位\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n</horizontal>\n<imgmargin=\"124\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<btnIcontext=\"筷手\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<horizontalmargin=\"08\"marginTop=\"6\"w=\"match_parent\">\n<icon2id=\"K1\"bg=\"#ff4907\"text=\"行业拓客\"tip=\"不限版本\"layout_weight=\"1\"src=\"@drawable/ic_smartphone_black_48dp\"/>\n<icon2id=\"K2\"bg=\"#02a0e9\"text=\"评论浏览\"tip=\"不限版本\"layout_weight=\"1\"src=\"@drawable/ic_record_voice_over_black_48dp\"/>\n<icon2alpha=\"0\"bg=\"#009688\"text=\"占位\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n</horizontal>\n<imgmargin=\"124\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<btnIcontext=\"").concat(_0x324e4f.ttk, "\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<horizontalmargin=\"08\"marginTop=\"6\"w=\"match_parent\">\n<icon2id=\"Tkk1\"bg=\"#0b2e64\"text=\"普通观看\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_phonelink_ring_black_48dp\"/>\n<icon2id=\"Tkk2\"bg=\"#ff5722\"text=\"垂直观看\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_record_voice_over_black_48dp\"/>\n<icon2alpha=\"0\"bg=\"#009688\"text=\"占位\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n</horizontal>\n<imgmargin=\"124\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<btnIcontext=\"B站\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<horizontalmargin=\"08\"marginTop=\"6\"w=\"match_parent\">\n<icon2id=\"BZ1\"bg=\"#ff5722\"text=\"万能观看\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_phonelink_ring_black_48dp\"/>\n<icon2alpha='0'id=\"BZ2\"bg=\"#ff5722\"text=\"占位\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_record_voice_over_black_48dp\"/>\n<icon2alpha=\"0\"bg=\"#009688\"text=\"占位\"tip=\"占位\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n</horizontal>\n<imgmargin=\"124\"h=\"1px\"w=\"*\"bg=\"#d8d8d8\"/>\n<btnIcontext=\"小红薯\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<horizontalmargin=\"08\"marginTop=\"6\"w=\"match_parent\">\n<icon2id=\"XHS1\"bg=\"#0b2e64\"text=\"万能观看\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_phonelink_ring_black_48dp\"/>\n<icon2alpha='0'id=\"XHS2\"bg=\"#ff5722\"text=\"占位\"tip=\"").concat(_0x324e4f.tip3, "\"layout_weight=\"1\"src=\"@drawable/ic_record_voice_over_black_48dp\"/>\n<icon2alpha=\"0\"bg=\"#009688\"text=\"占位\"tip=\"粉丝观看\"layout_weight=\"1\"src=\"@drawable/ic_face_black_48dp\"/>\n</horizontal>\n</vertical>\n</card>\n</vertical>\n</vertical>\n"));
      _0x449394.pagebanner.attr("src", _0x5c6f53.banner);
      _0x45d913.setBackgroundRoundedRectangleGradient(_0x449394.page1Bg, _0x5c6f53.color2, _0x5c6f53.color2, 200);
      _0x449394.autoService.checked = auto.service != null;
      _0x449394.autoService.on("check", function (_0x3ca419) {
        _0x3ca419 && app.startActivity({
          action: "android.settings.ACCESSIBILITY_SETTINGS"
        });
        !_0x3ca419 && auto.service != null && auto.service.disableSelf();
      });
      _0x449394.autoFloaty.checked = floaty.checkPermission();
      _0x449394.autoFloaty.on("check", function (_0x4e112b) {
        if (!floaty.checkPermission() && _0x4e112b) {
          try {
            var _0x274230 = app.intent({
              action: "android.settings.action.MANAGE_OVERLAY_PERMISSION",
              data: "package:" + context.getPackageName()
            });
            activity.startActivityForResult(_0x274230, 1);
            activity.getEventEmitter().on("activity_result", function (_0x3270d4, _0x1343d8, _0x151111) {
              _0x3270d4 == 1;
            });
          } catch (_0x1f43ba) {
            floaty.requestPermission();
          }
        }
      });
      _0x4aae3a == 0 && (_0x4aae3a++, ui.emitter.on("resume", function () {
        undefined != _0x449394.autoService && (_0x449394.autoService.checked = auto.service != null);
        undefined != _0x449394.autoFloaty && (_0x449394.autoFloaty.checked = floaty.checkPermission());
      }));
      _0x449394.icon1.click(function () {
        _0x23d587.index();
      });
      _0x449394.icon2.click(function () {
        _0x5bc806.index();
      });
      _0x449394.icon3.click(function () {
        _0x4c9ef1.index("普通浏览");
      });
      _0x449394.icon3_1.click(function () {
        _0x4c9ef1.index("同城宣传");
      });
      _0x449394.icon4.click(function () {
        _0x2409a6.index();
      });
      _0x449394.page1.click(function () {
        _0x318382.index();
      });
      _0x449394.icon5.click(function () {
        _0x35868a.index();
      });
      _0x449394.icon6.click(function () {
        _0x392361.index();
      });
      _0x449394.B1.click(function () {
        _0x5dbd7c.index();
      });
      _0x449394.J1.click(function () {
        _0x192b05.index();
      });
      _0x449394.jztk.click(function () {
        _0x238314.index();
      });
      _0x449394.pltk.click(function () {
        _0x58c4d4.index();
      });
      _0x449394.tgtk.click(function () {
        _0x4f34e9.index();
      });
      _0x449394.znyl.click(function () {
        _0x52edf7.index();
      });
      _0x449394.J2.click(function () {
        _0x148116.index("J2");
      });
      _0x449394.J2_2.click(function () {
        _0x148116.index("J2_2");
      });
      _0x449394.J3.click(function () {
        _0x48114c.index();
      });
      _0x449394.T1.click(function () {
        _0x546284.index();
      });
      _0x449394.T2.click(function () {
        _0x1c50c6.index();
      });
      _0x449394.T3.click(function () {
        _0x2d7429.index();
      });
      _0x449394.T4.click(function () {
        _0x3b846a.index();
      });
      _0x449394.J4.click(function () {
        _0x95e5f0.index();
      });
      _0x449394.HS1.click(function () {
        _0x148116.index("HS1");
      });
      _0x449394.HS1_2.click(function () {
        _0x148116.index("HS1_2");
      });
      _0x449394.HS2.click(function () {
        _0x23d587.index("HS2");
      });
      _0x449394.JS1.click(function () {
        _0x148116.index("JS1");
      });
      _0x449394.JS2.click(function () {
        _0x23d587.index("JS2");
      });
      _0x449394.JS1_2.click(function () {
        _0x148116.index("JS1_2");
      });
      _0x449394.Wx1.click(function () {
        _0x4e9c2e.index();
      });
      _0x449394.Wx2.click(function () {
        _0x1be384.index();
      });
      _0x449394.K1.click(function () {
        _0x158c90.index();
      });
      _0x449394.K2.click(function () {
        _0x646b4c.index();
      });
      _0x449394.Tkk1.click(function () {
        _0x3b98de.index();
      });
      _0x449394.Tkk2.click(function () {
        _0x484144.index();
      });
      _0x449394.BZ1.click(function () {
        _0x57d430.index();
      });
      _0x449394.XHS1.click(function () {
        _0xb36580.index();
      });
      ui.mainPage.addView(_0x449394);
    };
    _0x3c00c4.dyPage = function () {
      var _0x456629 = _0x5c6f53.host + "/static/imgs/runDataBg4.png",
        _0x24c8b5 = parseInt(device.width * 0.5),
        _0x95971 = parseInt(device.width),
        _0x334de5 = ui.inflate("\n<verticalpaddingBottom=\"100\"bg=\"#ffffff\">\n<verticalw=\"*\"h=\"auto\"marginTop=\"".concat(_0x438631, "px\"paddingTop=\"8\">\n<horizontalgravity=\"center\">\n<btnIcontext=\"运行数据\"src=\"@drawable/ic_timer_black_48dp\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<textid=\"resetRunData\"textColor=\"").concat(_0x5c6f53.colorButton, "\"h=\"auto\"padding=\"200\"gravity=\"right\"textSize=\"14sp\"w=\"*\"text=\"重置\"></text>\n</horizontal>\n<verticalh=\"").concat(_0x24c8b5, "px\"w=\"").concat(_0x95971, "px\"gravity=\"center\">\n<imgmargin=\"100\"src=\"").concat(_0x456629, "\"alpha=\"1\"h=\"").concat(_0x24c8b5, "px\"w=\"*\"/>\n</vertical>\n<verticalgravity=\"right|center\"padding=\"280\"marginTop=\"").concat(-_0x24c8b5, "px\"h=\"").concat(_0x24c8b5, "px\"w=\"").concat(_0x95971, "px\">\n<verticalgravity=\"center\"w=\"auto\"h=\"*\">\n<horizontalgravity=\"center\">\n<verticalpadding=\"126\"gravity=\"center\">\n<texttextColor=\"#ffffff\"id=\"totalCount\"gravity=\"center\"textStyle=\"bold\"textSize=\"20dp\"></text>\n<texttextColor=\"#f8f8f8\"gravity=\"center\"textSize=\"18dp\"text=\"曝光量\"></text>\n</vertical>\n<verticalpadding=\"126\"gravity=\"center\">\n<horizontalgravity=\"center|bottom\">\n<texttextColor=\"#ffffff\"id=\"runHour\"gravity=\"center\"textStyle=\"bold\"textSize=\"20dp\"></text>\n<texttextColor=\"#ffffff\"textSize=\"12dp\"padding=\"30\"text=\"时\"></text>\n<texttextColor=\"#ffffff\"id=\"runMin\"gravity=\"center\"textStyle=\"bold\"textSize=\"20dp\"></text>\n<texttextColor=\"#ffffff\"textSize=\"12dp\"paddingLeft=\"3\"text=\"分\"></text>\n</horizontal>\n<texttextColor=\"#f8f8f8\"gravity=\"center\"textSize=\"18dp\"text=\"运行时长\"></text>\n</vertical>\n</horizontal>\n<horizontalgravity=\"center\">\n<verticalpadding=\"86\"gravity=\"center\">\n<texttextColor=\"#ffffff\"id=\"followCount\"gravity=\"center\"textStyle=\"bold\"textSize=\"18dp\"></text>\n<texttextColor=\"#f8f8f8\"gravity=\"center\"textSize=\"16dp\"text=\"关注\"></text>\n</vertical>\n<verticalpadding=\"86\"gravity=\"center\">\n<texttextColor=\"#ffffff\"id=\"likeCount\"gravity=\"center\"textStyle=\"bold\"textSize=\"18dp\"></text>\n<texttextColor=\"#f8f8f8\"gravity=\"center\"textSize=\"16dp\"text=\"点赞\"></text>\n</vertical>\n<verticalpadding=\"86\"gravity=\"center\">\n<texttextColor=\"#ffffff\"id=\"visitCount\"gravity=\"center\"textStyle=\"bold\"textSize=\"18dp\"></text>\n<texttextColor=\"#f8f8f8\"gravity=\"center\"textSize=\"16dp\"text=\"留痕\"></text>\n</vertical>\n</horizontal>\n</vertical>\n</vertical>\n</vertical>\n\n<verticalw=\"*\"h=\"auto\">\n<btnIcontext=\"使用帮助\"src=\"@drawable/ic_help_outline_black_48dp\"bgColor=\"").concat(_0x5c6f53.colorButton, "\"/>\n<cardid=\"page1Tips1\"margin=\"100\"h=\"auto\"cardBackgroundColor=\"#ffffff\"cardCornerRadius=\"8\"cardElevation=\"2dp\"cardUseCompatPadding=\"true\">\n<verticalh=\"*\"margin=\"810\">\n<textFold_title=\"一、首次安装后设置\"w=\"*\"\n_content1=\"1、开启允许后台运行。\"\n_content2=\"2、电池取消智能管控。\"\n_content3=\"3、开启允许应用通知。\"\n_content4=\"4、开启悬浮窗、存储等权限。\"/>\n<textFold_title=\"二、每次使用步骤\"w=\"*\"\n_content1=\"1、运行之前关闭所有软件。\"\n_content2=\"2、进入软件后重新开启无障碍服务。\"\n_content3=\"3、切换运行的目标应用进入到相应的界面，回到软件开始任务。\"/>\n<textFold_title=\"三、反馈问题\"\n_content1=\"1.手机型号和运行的目标应用版本。\"\n_content2=\"2.录屏从设置开始到运行发现问题。\"w=\"*\"/>\n</vertical>\n</card>\n</vertical>\n\n</vertical>\n"));
      _0x334de5.resetRunData.click(function () {
        _0x66b41e.clear();
        _0x334de5.runHour.setText("0");
        _0x334de5.runMin.setText("0");
        _0x334de5.followCount.setText("0");
        _0x334de5.likeCount.setText("0");
        _0x334de5.visitCount.setText("0");
        _0x334de5.totalCount.setText("0");
        toast("运行数据已重置");
      });
      ui.dyPage.addView(_0x334de5);
    };
    _0x3c00c4.personal = function () {
      function _0xb7b306(_0x29b24a) {
        var _0x2419bc = new Date(_0x29b24a * 1000),
          _0x584c92 = _0x2419bc.getFullYear() + "年",
          _0x4e8fdc = (_0x2419bc.getMonth() + 1 < 10 ? "0" + (_0x2419bc.getMonth() + 1) : _0x2419bc.getMonth() + 1) + "月",
          _0x38e3cd = _0x2419bc.getDate() + "日";
        return _0x584c92 + _0x4e8fdc + _0x38e3cd;
      }
      var _0x2b0bce = _0x3c00c4.loginInfo.confirmTime,
        _0x3b993a = _0x3c00c4.loginInfo.days,
        _0x538f6e = _0xb7b306(_0x2b0bce + 86400 * _0x3b993a);
      _0x3b993a == undefined && (_0x538f6e = "待更新");
      var _0x1b37ad = _0x3c00c4.loginInfo.jihuoma,
        _0x524afd = _0x3c00c4.getLanguageType(),
        _0x503a69 = new _0x58ebb3(_0x524afd.languageType),
        _0x5ec880 = 0,
        _0x59147e = parseInt(device.width * 0.35),
        _0x2a9426 = parseInt(device.width),
        _0x116921 = _0x5c6f53.host + "/static/imgs/avatar.png",
        _0x735558 = device.brand,
        _0x43839d = device.model,
        _0x12bb3d = storages.create("wzke:CODE88"),
        _0x202320 = _0x12bb3d.get("version") ? _0x12bb3d.get("version") : _0x202320,
        _0x323f28 = ui.inflate("\n<verticalid='ONE_PIECE_Team'>\n\n<verticalw=\"*\"h=\"auto\"marginTop=\"".concat(_0x438631, "px\"gravity=\"top|center\">\n<verticalh=\"").concat(_0x59147e, "px\"w=\"").concat(_0x2a9426, "px\"gravity=\"center\">\n<cardmargin=\"108\"h=\"*\"w=\"*\"cardCornerRadius=\"16\"cardElevation=\"2dp\">\n<verticalh=\"*\"w=\"*\"bg=\"").concat(_0x5c6f53.color1, "\"></vertical>\n</card>\n</vertical>\n<verticalgravity=\"center\"padding=\"385\"marginTop=\"").concat(-_0x59147e, "px\"h=\"").concat(_0x59147e, "px\"w=\"").concat(_0x2a9426, "px\">\n<horizontal>\n<verticalh=\"65\"w=\"65\"gravity=\"center\">\n<imgsrc=\"").concat(_0x116921, "\"alpha=\"1\"h=\"65\"w=\"65\"scaleType=\"fitXY\"radius=\"45px\"elevation=\"4dp\"/>\n</vertical>\n<verticalgravity=\"center\"h=\"65\"marginLeft=\"18\">\n<horizontalw=\"*\"h=\"auto\">\n<texttextColor=\"#ffffff\"h=\"auto\"gravity=\"left|bottom\"textSize=\"14dp\"text=\"设备：\"></text>\n<texttextColor=\"#ffffff\"h=\"auto\"gravity=\"left|bottom\"textStyle=\"bold\"textSize=\"18dp\"w=\"*\"text=\"").concat(_0x735558 || "unknown", "\"></text>\n</horizontal>\n<horizontalw=\"*\"h=\"auto\">\n<texttextColor=\"#ffffff\"h=\"auto\"gravity=\"left|bottom\"textSize=\"14dp\"text=\"型号：\"></text>\n<texttextColor=\"#ffffff\"h=\"auto\"gravity=\"left|bottom\"textStyle=\"bold\"textSize=\"18dp\"text=\"").concat(_0x43839d || "unknown", "\"></text>\n</horizontal>\n</vertical>\n</horizontal>\n</vertical>\n</vertical>\n\n<cardmargin=\"126\"w=\"*\"h=\"auto\"cardCornerRadius=\"8\"cardElevation=\"2dp\">\n<vertical>\n<horizontalweightSum=\"10\"w=\"*\"h=\"40\"margin=\"18101810\"gravity=\"center_vertical\">\n<framew=\"35\"h=\"35\"alpha=\"1\">\n<imgw=\"*\"h=\"*\"src=\"").concat(_0x5c6f53.color1, "\"radius=\"45\"scaleType=\"center\"/>;\n<imgw=\"*\"h=\"*\"padding=\"6\"src=\"@drawable/ic_https_black_48dp\"tint=\"#ffffff\"layout_gravity=\"center\"/>\n</frame>\n<textmarginLeft=\"16\"layout_weight=\"3\"textSize=\"15\"gravity=\"left\"textColor=\"black\"text=\"").concat(_0x503a69["激活码"], "\"/>\n<textlayout_weight=\"7\"textSize=\"15\"gravity=\"right\"textColor=\"black\"text=\"").concat(_0x1b37ad, "\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"h=\"40\"margin=\"18101810\"gravity=\"center_vertical\">\n<framew=\"35\"h=\"35\"alpha=\"1\">'\n<imgw=\"*\"h=\"*\"src=\"").concat(_0x5c6f53.color1, "\"radius=\"45\"scaleType=\"center\"/>;\n<imgh=\"*\"w=\"auto\"padding=\"6\"src=\"@drawable/ic_cloud_circle_black_48dp\"tint=\"#ffffff\"layout_gravity=\"center\"/>\n</frame>\n\n<textmarginLeft=\"16\"layout_weight=\"3\"textSize=\"15\"textColor=\"black\"text=\"有效期\"/>\n<textlayout_weight=\"7\"textSize=\"15\"gravity=\"right\"textColor=\"black\"text=\"").concat(_0x538f6e, "\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"h=\"40\"margin=\"18101810\"gravity=\"center_vertical\">\n<framew=\"35\"h=\"35\"alpha=\"1\">'\n<imgw=\"*\"h=\"*\"src=\"").concat(_0x5c6f53.color1, "\"radius=\"45\"scaleType=\"center\"/>;\n<imgh=\"*\"w=\"auto\"padding=\"6\"src=\"@drawable/ic_language_black_48dp\"tint=\"#ffffff\"layout_gravity=\"center\"/>\n</frame>\n\n<textmarginLeft=\"16\"layout_weight=\"3\"textSize=\"15\"gravity=\"left\"textColor=\"black\"text=\"").concat(_0x503a69["语言"], "\"/>\n<textlayout_weight=\"7\"textSize=\"15\"gravity=\"right\"id=\"language\"textColor=\"black\"text=\"").concat(_0x524afd.languageName, "〓\"/>\n\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"h=\"40\"margin=\"18101810\"gravity=\"center_vertical\">\n<framew=\"35\"h=\"35\"alpha=\"1\">'\n<imgw=\"*\"h=\"*\"src=\"").concat(_0x5c6f53.color1, "\"radius=\"45\"scaleType=\"center\"/>;\n<imgh=\"*\"w=\"auto\"padding=\"6\"src=\"@drawable/ic_color_lens_black_48dp\"tint=\"#ffffff\"layout_gravity=\"center\"/>\n</frame>\n\n<textmarginLeft=\"16\"layout_weight=\"3\"textSize=\"15\"gravity=\"left\"textColor=\"black\"text=\"主题\"/>\n<textlayout_weight=\"7\"textSize=\"15\"gravity=\"right\"id=\"skin\"textColor=\"black\"text=\"").concat(_0x5c6f53.skin, "〓\"/>\n\n</horizontal>\n</vertical>\n</card>\n<cardmargin=\"126\"w=\"*\"minHeight=\"100\"cardCornerRadius=\"8\"cardElevation=\"2dp\">\n<verticalmargin=\"10\">\n<horizontalmargin=\"5\"weightSum=\"3\">\n<icon2id=\"dyLoad\"bg=\"#23252d\"text=\"DY下载\"layout_weight=\"1\"src=\"@drawable/ic_assignment_returned_black_48dp\"/>\n<icon2id=\"tuichu\"bg=\"#ff5722\"text=\"").concat(_0x503a69["退出"], "\"layout_weight=\"1\"src=\"@drawable/ic_exit_to_app_black_48dp\"/>\n<icon2id=\"bug\"bg=\"#00bcd4\"text=\"投诉反馈\"tip=\"\"alpha=\"0\"layout_weight=\"1\"src=\"@drawable/ic_build_black_48dp\"/>\n</horizontal>\n\n</vertical>\n</card>\n<textid=\"appVersion\"margin=\"08\"w=\"*\"textStyle=\"bold\"textSize=\"16\"gravity=\"center\"text=\"版本号:v").concat(_0x202320, "\"></text>\n\n<framew=\"*\"h=\"0\"alpha=\"0\"></frame>\n</vertical>\n"));
      _0x323f28.dyLoad.click(function () {
        dialogs.build({
          title: "跳转！",
          content: "即将跳转页面",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          app.openUrl("https://www.wandoujia.com/apps/7461948/history_v300901");
        }).show();
      });
      _0x323f28.tuichu.click(function () {
        dialogs.build({
          title: "确认退出吗?",
          positive: "确定",
          negative: "取消"
        }).on("positive", function (_0x13b7d1) {
          exit();
        }).show();
      });
      _0x323f28.language.click(function () {});
      _0x323f28.skin.click(function () {});
      _0x323f28.appVersion.click(function () {
        _0x5ec880++;
        _0x5ec880 === 3 && (toast("版本号已重置"), _0x12bb3d.put("version", "1.0.0"), _0x5ec880 = 0);
      });
      ui.personal.addView(_0x323f28);
    };
    var _0x4a320c = storages.create("wzke:index");
    _0x3c00c4.getLanguageType = function () {
      var _0x418652 = {
        languageType: _0x4a320c.get("languageType") != undefined ? _0x4a320c.get("languageType") : 0,
        languageName: _0x4a320c.get("languageName") != undefined ? _0x4a320c.get("languageName") : "简体中文"
      };
      return _0x418652;
    };
    _0x3c00c4.saveLanguageInfo = function (_0x4855d3, _0x1ce022) {
      _0x4a320c.put("languageType", parseInt(_0x4855d3));
      _0x4a320c.put("languageName", _0x1ce022);
    };
  }
  _0x5245a8.exports = _0xd5874f;
}, function (_0x49b588, _0x50cfe3, _0x4e3471) {
  function _0x2143a2(_0x108d7d) {
    var _0x2cc480 = this,
      _0x243976 = new (_0x4e3471(3))(),
      _0x5597de = _0x4e3471(0),
      _0x1a3d9a = new (_0x4e3471(2))(),
      _0x296c61 = new android.widget.PopupWindow();
    _0x2cc480.opt = "";
    this.index = function (_0x8320e4) {
      _0x2cc480.opt = _0x8320e4;
      _0x296c61 = _0x5597de.createPopWin();
      _0x2cc480.show();
    };
    this.show = function () {
      var _0x4906f4 = _0x4e3471(1),
        _0x44fc51 = _0x4906f4.bgColor,
        _0x411b29 = _0x5597de.getVersionName("com.ss.android.ugc.aweme"),
        _0x3ec23b = ui.inflate("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"基础观看\"bg=\"".concat(_0x44fc51, "\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\"radius=\"24\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在推荐页启动，自动观看视频，概率互动，提升账号活跃度\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x411b29, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"视频个数：（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"shipinCout\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"点赞概率：（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoLikeRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"观看时长：（秒）\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"min\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"max\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n</vertical>\n</card>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"20\"cardBackgroundColor=\"").concat(_0x44fc51, "\"cardUseCompatPadding=\"true\">\n<buttonid=\"start\"bg=\"").concat(_0x44fc51, "\"margin=\"5\"textSize=\"22\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n</vertical>\n</ScrollView>\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x296c61.setContentView(_0x3ec23b);
      _0x108d7d = activity.getWindow().getDecorView();
      _0x296c61.showAtLocation(_0x108d7d, android.view.Gravity.LEFT, -1, -1);
      _0x3ec23b._backButton.click(function () {
        _0x296c61.dismiss();
      });
      var _0x4b62d2 = _0x2cc480.getPage1Data();
      _0x3ec23b.shipinCout.setText(_0x4b62d2.shipinCout + "");
      _0x3ec23b.videoLikeRate.setText(_0x4b62d2.videoLikeRate + "");
      _0x3ec23b.min.setText(_0x4b62d2.min + "");
      _0x3ec23b.max.setText(_0x4b62d2.max + "");
      _0x3ec23b.start.click(function () {
        _0x2cc480.page1Save(_0x3ec23b);
        dialogs.build({
          title: "开始任务",
          content: "确定要开始吗?",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          _0x2cc480.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x1f5eb5 = storages.create("wzke:A1");
    _0x2cc480.getPage1Data = function () {
      var _0x38883d = {
        shipinCout: _0x1f5eb5.get("shipinCout") != undefined ? _0x1f5eb5.get("shipinCout") : 500,
        videoLikeRate: _0x1f5eb5.get("videoLikeRate") != undefined ? _0x1f5eb5.get("videoLikeRate") : 10,
        min: _0x1f5eb5.get("min") == undefined ? 3 : _0x1f5eb5.get("min"),
        max: _0x1f5eb5.get("max") == undefined ? 18 : _0x1f5eb5.get("max")
      };
      return _0x38883d;
    };
    _0x2cc480.page1Save = function (_0x26fd78) {
      _0x1f5eb5.put("shipinCout", parseInt(_0x26fd78.shipinCout.text()));
      _0x1f5eb5.put("videoLikeRate", parseInt(_0x26fd78.videoLikeRate.text()));
      _0x1f5eb5.put("min", parseInt(_0x26fd78.min.text()));
      _0x1f5eb5.put("max", parseInt(_0x26fd78.max.text()));
    };
    this.start = function () {
      if (!_0x5597de.checkServer()) {
        return false;
      }
      if (_0x2cc480.opt == "HS2") {
        if (!_0x243976.launchAppHs()) {
          return false;
        }
      } else {
        if (_0x2cc480.opt == "JS2") {
          if (!_0x243976.launchAppJS()) {
            return false;
          }
        } else {
          if (!_0x243976.launchApp()) {
            return false;
          }
        }
      }
      _0x5597de.showConsole("普通养号");
      _0x1a3d9a.index();
      _0x1a3d9a.ClickListener({
        clickStart: function _0x20da20() {
          _0x2cc480.action();
        },
        clickStop: function _0x31c791() {
          threads.shutDownAll();
        },
        clickExit: function _0x51ac74() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x1a3d9a.close();
            _0x5597de.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x54579f = _0x2cc480.getPage1Data();
      _0x243976.closeTip();
      threads.start(function () {
        _0x243976.watchSleep("任务开始:", 1);
        for (var _0xc2ee9 = 1; _0xc2ee9 <= _0x54579f.shipinCout; _0xc2ee9++) {
          if (_0x243976.getViewType() == "视频") {
            _0x243976.watchSleep("观看视频:", random(_0x54579f.min, _0x54579f.max));
            if (random(1, 100) < _0x54579f.videoLikeRate) {
              _0x243976.clickDianzan();
            }
          }
          sleep(2000);
          _0x5597de.actionSwipUp();
        }
        alert("任务结束");
      });
    };
  }
  _0x49b588.exports = _0x2143a2;
}, function (_0x4a518a, _0x2d7260, _0xc7b217) {
  function _0x531416() {
    var _0x2962d4 = this,
      _0x48560c = null,
      _0x2791ab = new (_0xc7b217(3))(),
      _0x57d467 = _0xc7b217(0),
      _0x30e445 = new (_0xc7b217(2))();
    this.index = function () {
      _0x48560c = _0x57d467.createPopWin();
      _0x2962d4.initContent();
    };
    this.initContent = function () {
      var _0x2d06f9 = _0xc7b217(1),
        _0x4f0214 = _0x2d06f9.bgColor,
        _0x524168 = _0x57d467.getVersionName("com.ss.android.ugc.aweme"),
        _0x3945c2 = ui.inflate("\n<drawer>\n<verticalbg=\"#ffffff\">\n<appbar>\n<MyAppBartitle=\"垂直观看\"bg=\"".concat(_0x4f0214, "\"/>\n</appbar>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓功能说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在推荐页面启动，设置关键词，软件自动观看视频对文案组含有设置好的关键词的视频进行概率互动\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x524168, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n\n<verticalmargin=\"2\">\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"运行时长（分钟）\"/>\n<inputpaddingRight=\"20\"layout_weight=\"7\"gravity=\"right\"id=\"time\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"小星星概率（%）\"/>\n<inputpaddingRight=\"20\"layout_weight=\"7\"gravity=\"right\"id=\"tapRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"观看时长（秒）\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"min\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"max\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关键词\"/>\n<inputpaddingRight=\"20\"layout_weight=\"7\"hint=\"关键词，加号隔开\"textSizeHint=\"10\"gravity=\"right\"id=\"words\"text=\"\"bg=\"#ffffff\"/>\n\n</horizontal>\n<texttext=\"例如:水果+苹果，文案包含，加号隔开\"padding='100'/>\n<SwitchWidget-Se7enid=\"words_key\"text=\"反转[开启后包含关键词划走]\"padding='105'trackColor=\"").concat(_0x4f0214, "\"textColor=\"black\"checked=\"\"/>\n</vertical>\n</card>\n<buttonid=\"start\"bg=\"").concat(_0x4f0214, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x3945c2._backButton.click(function () {
        _0x48560c.dismiss();
      });
      _0x3945c2.start.click(function () {
        _0x21842a.put("time", parseInt(_0x3945c2.time.text()));
        _0x21842a.put("tapRate", parseInt(_0x3945c2.tapRate.text()));
        _0x21842a.put("min", parseInt(_0x3945c2.min.text()));
        _0x21842a.put("max", parseInt(_0x3945c2.max.text()));
        _0x21842a.put("words", _0x3945c2.words.text());
        _0x21842a.put("words_key", _0x3945c2.words_key.checked);
        dialogs.build({
          title: "确定开始吗？",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x2962d4.start();
        }).on("negative", function () {}).show();
      });
      var _0x61cdc6 = _0x2962d4.getData();
      _0x3945c2.time.setText(_0x61cdc6.time + "");
      _0x3945c2.tapRate.setText(_0x61cdc6.tapRate + "");
      _0x3945c2.min.setText(_0x61cdc6.min + "");
      _0x3945c2.max.setText(_0x61cdc6.max + "");
      _0x3945c2.words.setText(_0x61cdc6.words + "");
      _0x3945c2.words_key.checked = _0x61cdc6.words_key;
      _0x48560c.setContentView(_0x3945c2);
      _0x48560c.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    var _0x21842a = storages.create("wzke:A2");
    _0x2962d4.getData = function () {
      var _0x376631 = {
        time: _0x21842a.get("time") == undefined ? 120 : _0x21842a.get("time"),
        tapRate: _0x21842a.get("tapRate") == undefined ? 100 : _0x21842a.get("tapRate"),
        min: _0x21842a.get("min") == undefined ? 3 : _0x21842a.get("min"),
        max: _0x21842a.get("max") == undefined ? 18 : _0x21842a.get("max"),
        words: _0x21842a.get("words") == undefined ? "" : _0x21842a.get("words"),
        words_key: _0x21842a.get("words_key") == undefined ? false : _0x21842a.get("words_key")
      };
      return _0x376631;
    };
    this.start = function () {
      if (!_0x57d467.checkServer() || !_0x2791ab.launchApp()) {
        return false;
      }
      _0x57d467.showConsole("垂直观看");
      _0x30e445.index();
      _0x30e445.ClickListener({
        clickStart: function _0x226bef() {
          _0x2962d4.action();
        },
        clickStop: function _0x1a1f8a() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x3ae7bf() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x30e445.close();
            _0x57d467.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x10fe0a = _0x2962d4.getData(),
        _0x3da805 = _0x10fe0a.time,
        _0x3b6c3d = _0x10fe0a.tapRate,
        _0x6d2950 = parseInt(_0x10fe0a.min),
        _0x1ca1d4 = parseInt(_0x10fe0a.max),
        _0x31253b = _0x10fe0a.words;
      _0x2791ab.closeTip();
      _0x57d467.checkTimeEnd(_0x3da805, function () {
        toastLog("结束");
        threads.shutDownAll();
      });
      threads.start(function () {
        _0x2791ab.watchSleep("主任务开始", 1);
        while (true) {
          var _0x1d200c = _0x2791ab.getViewType();
          if (_0x1d200c == "视频") {
            var _0x406570 = true;
            _0x31253b != "" && (_0x406570 = _0x2791ab.descContain(_0x31253b.split("+")), _0x10fe0a.words_key && (_0x406570 = !_0x406570));
            _0x2791ab.watchSleep("观看", random(_0x6d2950, _0x1ca1d4));
            if (random(1, 100) < _0x3b6c3d && _0x406570) {
              _0x2791ab.clickDianzan();
            }
          }
          _0x57d467.actionSwipUp();
        }
      });
    };
  }
  _0x4a518a.exports = _0x531416;
}, function (_0x364e06, _0x3753a0, _0x544581) {
  var _0x352844 = _0x544581(0);
  function _0x51f0d6(_0x50bf3f) {
    var _0x3deb2c = this,
      _0x10f384 = null,
      _0x320aa1 = _0x544581(1),
      _0x2e9383 = _0x320aa1.bgColor,
      _0x477d79 = "",
      _0x11406c = new (_0x544581(6))();
    this.index = function (_0x3a4b4d) {
      _0x477d79 = _0x3a4b4d;
      _0x10f384 = _0x17ac80.createPopWin();
      _0x3deb2c.show();
    };
    this.show = function () {
      var _0x2b246f = "在推荐页启动,自动观看视频,概率互动,提升账号活跃度";
      switch (_0x477d79) {
        case "同城宣传":
          _0x2b246f = "在同城页启动,自动观看视频,概率互动,包含评论赞及回复";
          break;
      }
      var _0x1ae49c = _0x17ac80.getVersionName("com.ss.android.ugc.aweme"),
        _0x44d4ae = ui.inflate("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"".concat(_0x477d79, "\"bg=\"").concat(_0x2e9383, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\">\n<ScrollView>\n<verticalpadding=\"10\">\n<textmargin=\"10\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n\n<texttextColor=\"black\"margin=\"1001010\">").concat(_0x2b246f, "</text>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x1ae49c, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n\n<horizontalweightSum=\"10\">\n<textpaddingLeft=\"10\"layout_weight=\"3\"textColor=\"black\"text=\"运行视频个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"time\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"id=\"sexView\">\n<textpaddingLeft=\"10\"gravity=\"center|left\"layout_weight=\"10\"textColor=\"black\"layout_gravity=\"left\"h=\"*\">性别</text>\n<spinnerpaddingRight=\"30\"gravity=\"right\"id=\"sex\"entries=\"不限|男|女\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textpaddingLeft=\"10\"layout_weight=\"3\"textColor=\"black\"text=\"喜欢概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"tapRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\">\n<textpaddingLeft=\"10\"layout_weight=\"3\"textColor=\"black\"text=\"关注概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"guanzhuRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"10\"textColor=\"black\"text=\"观看时长（秒）\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"watchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"watchTimeMax\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\">\n<textpaddingLeft=\"10\"layout_weight=\"3\"textColor=\"black\"text=\"关键词\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"hint=\"请输入关键词\"textSizeHint=\"12\"gravity=\"right\"id=\"words\"bg=\"#ffffff\"/>\n\n</horizontal>\n<texttext=\"*+号隔开，例如:水果+苹果\"/>\n<SwitchWidget-Se7enid=\"words_key\"text=\"反转[开启后包含关键词划走]\"padding='1510'trackColor=\"").concat(_0x2e9383, "\"textColor=\"black\"checked=\"\"alpha=\"1\"/>\n</vertical>\n</card>\n\n<buttonid=\"start\"bg=\"").concat(_0x2e9383, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n\n</vertical>\n</ScrollView>\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<cardid=\"mainbg2\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n\n<horizontalweightSum=\"10\"padding=\"20000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"pinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalid=\"defultWords_show\">\n<SwitchWidget-Se7enid=\"defultWords\"marginTop=\"5\"padding='88'checked='true'text='使用默认话术'trackColor='#e91e63'background='#ffffff'/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalpadding=\"205200\"w=\"*\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<textw=\"auto\"textColor=\"black\"text=\"评论内容换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"pinglunWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"pinglunWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"1\"id=\"pinglun\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"20000\">\n<textlayout_weight=\"4\"textColor=\"black\"text=\"喜欢回复楼层\"/>\n<inputpaddingRight=\"30\"layout_weight=\"6\"gravity=\"right\"id=\"huifuDeep\"inputType=\"number\"bg=\"#ffffff\"/>\n\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalpadding=\"205200\"w=\"*\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<textw=\"auto\"textColor=\"black\"text=\"楼层回复内容换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"huifuCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"huifuPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"1\"id=\"huifu\"bg=\"#ffffff\"/>\n</vertical>\n\n</vertical>\n</card>\n<buttonid=\"save2\"bg=\"").concat(_0x2e9383, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n</vertical>\n\n</ScrollView>\n\n\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      _0x352844.setBackgroundRoundedRectangle(_0x44d4ae.mainbg);
      _0x352844.setBackgroundRoundedRectangle(_0x44d4ae.mainbg2);
      _0x44d4ae.viewpager.setTitles(["基础设置", "视频设置", "评论设置"]);
      _0x44d4ae.tabs.setupWithViewPager(_0x44d4ae.viewpager);
      _0x44d4ae.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x320aa1.selectedTabIndicatorColor);
      _0x44d4ae.tabs.selectedTabIndicatorHeight = _0x320aa1.selectedTabIndicatorHeight;
      _0x44d4ae.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x44d4ae._backButton.click(function () {
        _0x10f384.dismiss();
      });
      _0x44d4ae.pinglunWordsCopy.click(function () {
        setClip(_0x44d4ae.pinglun.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x44d4ae.pinglun.text(),
          positive: "好的"
        }).show();
      });
      _0x44d4ae.pinglunWordsPaste.click(function () {
        var _0x350114 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x350114,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x44d4ae.pinglun.setText(_0x350114);
        }).show();
      });
      _0x44d4ae.huifuCopy.click(function () {
        setClip(_0x44d4ae.huifu.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x44d4ae.huifu.text(),
          positive: "好的"
        }).show();
      });
      _0x44d4ae.huifuPaste.click(function () {
        var _0x3f170a = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x3f170a,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x44d4ae.huifu.setText(_0x3f170a);
        }).show();
      });
      _0x44d4ae.start.click(function () {
        var _0x1dab51 = {
          time: parseInt(_0x44d4ae.time.text()),
          sex: _0x44d4ae.sex.getSelectedItemPosition(),
          guanzhuRate: parseInt(_0x44d4ae.guanzhuRate.text()),
          tapRate: parseInt(_0x44d4ae.tapRate.text()),
          timeMin: parseInt(_0x44d4ae.watchTimeMin.text()),
          timeMax: parseInt(_0x44d4ae.watchTimeMax.text()),
          words: _0x44d4ae.words.text(),
          words_key: _0x44d4ae.words_key.checked
        };
        _0x5745a5.put("baseinfo", _0x1dab51);
        toast("保存成功");
        dialogs.build({
          title: "开始任务",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x3deb2c.start();
        }).on("negative", function () {}).show();
      });
      var _0x2a5dc9 = _0x3deb2c.getPage1Data();
      _0x44d4ae.time.setText(_0x2a5dc9.time + "");
      _0x44d4ae.sex.setSelection(_0x2a5dc9.sex);
      _0x44d4ae.tapRate.setText(_0x2a5dc9.tapRate + "");
      _0x44d4ae.guanzhuRate.setText(_0x2a5dc9.guanzhuRate + "");
      _0x44d4ae.watchTimeMin.setText(_0x2a5dc9.timeMin + "");
      _0x44d4ae.watchTimeMax.setText(_0x2a5dc9.timeMax + "");
      _0x44d4ae.words.setText(_0x2a5dc9.words);
      _0x44d4ae.words_key.checked = _0x2a5dc9.words_key;
      _0x3deb2c.huashuInit(_0x44d4ae);
      _0x44d4ae.save2.click(function () {
        _0x3deb2c.saveHuashu(_0x44d4ae);
      });
      _0x10f384.setContentView(_0x44d4ae);
      _0x50bf3f = activity.getWindow().getDecorView();
      _0x10f384.showAtLocation(_0x50bf3f, android.view.Gravity.LEFT, -1, -1);
    };
    var _0x55a855 = new (_0x544581(3))(),
      _0x17ac80 = _0x544581(0),
      _0x4af961 = new (_0x544581(2))();
    this.start = function () {
      if (!_0x17ac80.checkServer() || !_0x55a855.launchApp()) {
        return false;
      }
      _0x17ac80.showConsole(_0x477d79);
      log("下列界面运行");
      log("1:首页[同城]-[关注]-[推荐]");
      log("2:搜索[视频页]");
      _0x4af961.index();
      _0x4af961.ClickListener({
        clickStart: function _0x1be2d6() {
          _0x3deb2c.action();
        },
        clickStop: function _0x425003() {
          log("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x178fe3() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x4af961.close();
            _0x17ac80.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x19448b = _0x3deb2c.getPage1Data(),
        _0x11cce5 = _0x3deb2c.getHuashu(),
        _0xc6f7 = _0x19448b.time;
      _0x55a855.closeTip();
      threads.start(function () {
        log("任务开始");
        while (true) {
          if (_0x55a855.getViewType() == "视频") {
            var _0x34424f = true;
            _0x19448b.words != "" && (c1 = _0x55a855.titleContain(_0x19448b.words.split("+")), c2 = _0x55a855.descContain(_0x19448b.words.split("+")), _0x34424f = c1 || c2, _0x19448b.words_key && (_0x34424f = !_0x34424f));
            if (_0x19448b.sex != 0) {
              _0x17ac80.requestScreenCapture();
              if (_0x55a855.JumpShipinToUsercenter()) {
                var _0x7bdb27 = _0x55a855.watchUserSex();
                _0x7bdb27 != _0x19448b.sex && (_0x34424f = false, log("性别不符合"));
                back();
                sleep(3000);
              }
            }
            _0x55a855.watchSleep("观看时长:", random(parseInt(_0x19448b.timeMin), parseInt(_0x19448b.timeMax)));
            _0x34424f && random(1, 100) < _0x19448b.guanzhuRate && _0x55a855.clickGuanzhu();
            _0x34424f && random(1, 100) < _0x19448b.tapRate && _0x55a855.clickDianzan();
            random(1, 100) < _0x11cce5.pinglunRate ? _0x34424f && _0x55a855.clickPinlunqu() && (_0x55a855.actionPinglunqu(_0x11cce5.huifuDeep, _0x11cce5.huifu, ""), _0x55a855.pinglun(_0x11cce5.pinglun, _0x11cce5.defultWords), _0x55a855.closePinlunquOnce()) : log("评论区未触发");
          }
          _0xc6f7--;
          if (_0xc6f7 <= 0) {
            break;
          }
          _0x55a855.closePinlunquOnce();
          _0x17ac80.actionSwipUp();
        }
        alert("任务结束");
        threads.shutDownAll();
      });
    };
    var _0x5745a5 = storages.create("wzke:A3");
    this.getPage1Data = function () {
      var _0x10fecb = _0x5745a5.get("baseinfo");
      if (_0x10fecb == undefined) {
        _0x10fecb = {};
        _0x10fecb.time = 300;
        _0x10fecb.sex = 0;
        _0x10fecb.tapRate = 80;
        _0x10fecb.guanzhuRate = 10;
        _0x10fecb.timeMin = 3;
        _0x10fecb.timeMax = 18;
        _0x10fecb.words_key = false;
        _0x10fecb.words = "";
        _0x5745a5.put("baseinfo", _0x10fecb);
      } else {
        if (_0x10fecb.words_key == undefined) {
          _0x10fecb.words_key = false;
        }
        if (_0x10fecb.sex == undefined) {
          _0x10fecb.sex = 0;
        }
        if (_0x10fecb.timeMin == undefined) {
          _0x10fecb.timeMin = 3;
        }
        _0x5745a5.put("baseinfo", _0x10fecb);
      }
      return _0x5745a5.get("baseinfo");
    };
    _0x3deb2c.huashuInit = function (_0x5491f8) {
      var _0x184bba = _0x3deb2c.getHuashu();
      _0x5491f8.pinglunRate.setText(_0x184bba.pinglunRate + "");
      _0x5491f8.defultWords.checked = _0x184bba.defultWords;
      _0x5491f8.pinglun.setText(_0x184bba.pinglun);
      _0x5491f8.huifuDeep.setText(_0x184bba.huifuDeep + "");
      _0x5491f8.huifu.setText(_0x184bba.huifu);
    };
    this.getHuashu = function () {
      var _0x547c0f = _0x5745a5.get("huashu");
      if (_0x547c0f == undefined) {
        _0x547c0f = {};
        _0x547c0f.pinglunRate = "5";
        _0x547c0f.pinglun = _0x11406c.pinglun;
        _0x547c0f.huifuDeep = 1;
        _0x547c0f.huifu = "";
        _0x547c0f.defultWords = false;
        _0x5745a5.put("huashu", _0x547c0f);
      } else {
        if (_0x547c0f.defultWords == undefined) {
          _0x547c0f.defultWords = false;
        }
        _0x5745a5.put("huashu", _0x547c0f);
      }
      return _0x5745a5.get("huashu");
    };
    this.saveHuashu = function (_0x847aa) {
      var _0x5e892d = {
        pinglunRate: _0x847aa.pinglunRate.text(),
        pinglun: _0x847aa.pinglun.text(),
        huifuDeep: parseInt(_0x847aa.huifuDeep.text()),
        huifu: _0x847aa.huifu.text(),
        defultWords: _0x847aa.defultWords.checked
      };
      _0x5745a5.put("huashu", _0x5e892d);
      toast("保存成功");
    };
  }
  _0x364e06.exports = _0x51f0d6;
}, function (_0x1478b9, _0x2a3ba9, _0x23fab2) {
  function _0x1b6b8c(_0x174fe5) {
    var _0x2e51e2 = this,
      _0x357777 = new (_0x23fab2(3))(),
      _0x4c384f = _0x23fab2(0),
      _0x51de66 = new (_0x23fab2(2))();
    this.index = function () {
      _0x2e51e2.view();
    };
    this.view = function () {
      var _0x305f05 = _0x23fab2(1),
        _0x3d8faa = _0x305f05.bgColor,
        _0x2f231f = _0x4c384f.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"万能拓客\"bg=\"".concat(_0x3d8faa, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"\ntext=\"在搜索页（搜索行业、关键词）启动，自动观看视频，概率互动，包含评论赞及回复\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x2f231f, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"运行时长（分钟）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"time\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"点赞概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"tapRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"点赞范围\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputminWidth=\"40\"gravity=\"center\"id=\"dianzanMin\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"dianzanMax\"gravity=\"right\"minWidth=\"60\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关注概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"guanzhuRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalh=\"0\">\n<texttextColor=\"black\"text=\"关注数:\"/>\n<inputid=\"guanzhuMin\"gravity=\"center\"marginLeft=\"20\"inputType=\"number\"text=\"\"width=\"100\"/>\n<texttext=\"至\"textColor=\"black\"/>\n<inputid=\"guanzhuMax\"gravity=\"center\"inputType=\"number\"text=\"\"width=\"100\"/>\n</horizontal>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"滑动间隔（秒）\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputminWidth=\"40\"gravity=\"center\"id=\"timeMin\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\",上限:\"/>\n<inputpaddingRight=\"30\"id=\"timeMax\"gravity=\"right\"minWidth=\"40\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关键词\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"hint=\"请输入关键词\"textSizeHint=\"12\"gravity=\"right\"id=\"words\"bg=\"#ffffff\"/>\n</horizontal>\n<texttext=\"*例如:水果+苹果,只有满足文案包含此条件的视频,加号隔开\"/>\n</vertical>\n</card>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"20\"cardBackgroundColor=\"").concat(_0x3d8faa, "\"cardUseCompatPadding=\"true\">\n<buttonid=\"start\"bg=\"").concat(_0x3d8faa, "\"margin=\"5\"textSize=\"22\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n</vertical>\n</ScrollView>\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"pinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论数范围\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputminWidth=\"40\"gravity=\"center\"id=\"pinglunMin\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\",上限:\"/>\n<inputpaddingRight=\"30\"id=\"pinglunMax\"gravity=\"right\"minWidth=\"60\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<texth=\"0\"text=\"*此范围内才可以触发评论\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<framepadding=\"100100\"w=\"*\"h=\"auto\">\n<textmarginTop=\"8\"h=\"20\"textColor=\"black\"text=\"评论内容（换行隔开,多条随机）\"/>\n<inputmarginTop=\"25\"gravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"pinglun\"bg=\"#ffffff\"/>\n</frame>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"楼层点赞概率\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"huifuDianzanRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"6\"textColor=\"black\"text=\"楼层点赞层数\"/>\n<spinnerlayout_weight=\"4\"gravity=\"right\"id=\"huifuDianzanDeep\"entries=\"00|01|02\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"楼层回复概率\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"huifuRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"6\"textColor=\"black\"text=\"回复楼层\"/>\n<spinnerlayout_weight=\"4\"gravity=\"right\"id=\"huifuDeep\"entries=\"00|01|02\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<framepadding=\"100100\"w=\"*\"h=\"auto\">\n<textmarginTop=\"8\"h=\"20\"textColor=\"black\"text=\"楼层回复（换行隔开,多条随机）\"/>\n<inputmarginTop=\"25\"gravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"huifu\"bg=\"#ffffff\"/>\n</frame>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"save2\"bg=\"").concat(_0x3d8faa, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n\n</ScrollView>\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n\n<SwitchWidget-Se7enid=\"sixinSwitch\"padding='88'checked='true'text='开启私信'trackColor='#003366'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总获赞数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputminWidth=\"60\"gravity=\"center\"id=\"totalzanMin\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"totalzanMax\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总关注数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"totalguanzhuMin\"minWidth=\"60\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"totalguanzhuMax\"minWidth=\"80\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总粉丝数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"fensiMin\"minWidth=\"60\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"fensiMax\"minWidth=\"80\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总作品数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"zuopinMin\"minWidth=\"60\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"zuopinMax\"minWidth=\"80\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总喜欢数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"xihuanMin\"minWidth=\"60\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"xihuanMax\"minWidth=\"80\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<framepadding=\"10000\"w=\"*\"h=\"auto\">\n<textmarginTop=\"8\"textColor=\"black\"text=\"私信内容（换行隔开,多条随机）\"/>\n<inputmarginTop=\"25\"layout_weight=\"7\"hint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"sixinWords\"bg=\"#ffffff\"/>\n</frame>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<buttonid=\"save3\"bg=\"").concat(_0x3d8faa, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["基础设置", "视频设置", "话术设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x305f05.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x305f05.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui._backButton.click(function () {
        _0x174fe5.view();
      });
      var _0x16b946 = _0x2e51e2.getBaseInfo();
      ui.time.setText(_0x16b946.time + "");
      ui.tapRate.setText(_0x16b946.tapRate + "");
      ui.dianzanMin.setText(_0x16b946.dianzanMin + "");
      ui.dianzanMax.setText(_0x16b946.dianzanMax + "");
      ui.tapRate.setText(_0x16b946.tapRate + "");
      ui.guanzhuRate.setText(_0x16b946.guanzhuRate + "");
      ui.guanzhuMin.setText(_0x16b946.guanzhuMin + "");
      ui.guanzhuMax.setText(_0x16b946.guanzhuMax + "");
      ui.timeMin.setText(_0x16b946.timeMin + "");
      ui.timeMax.setText(_0x16b946.timeMax + "");
      ui.words.setText(_0x16b946.words);
      ui.start.click(function () {
        var _0x2a4780 = {
          time: parseInt(ui.time.text()),
          tapRate: parseInt(ui.tapRate.text()),
          dianzanMin: parseInt(ui.dianzanMin.text()),
          dianzanMax: parseInt(ui.dianzanMax.text()),
          guanzhuRate: parseInt(ui.guanzhuRate.text()),
          guanzhuMin: parseInt(ui.guanzhuMin.text()),
          guanzhuMax: parseInt(ui.guanzhuMax.text()),
          timeMin: parseInt(ui.timeMin.text()),
          timeMax: parseInt(ui.timeMax.text()),
          words: ui.words.text()
        };
        _0x2e51e2.saveBaseInfo(_0x2a4780);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x2e51e2.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      var _0x4dbc11 = _0x2e51e2.getHuashu();
      ui.pinglunRate.setText(_0x4dbc11.pinglunRate + "");
      ui.pinglunMin.setText(_0x4dbc11.pinglunMin + "");
      ui.pinglunMax.setText(_0x4dbc11.pinglunMax + "");
      ui.pinglun.setText(_0x4dbc11.pinglun);
      ui.huifuDianzanRate.setText(_0x4dbc11.huifuDianzanRate + "");
      ui.huifuDianzanDeep.setSelection(_0x4dbc11.huifuDianzanDeep);
      ui.huifuRate.setText(_0x4dbc11.huifuRate + "");
      ui.huifuDeep.setSelection(_0x4dbc11.huifuDeep);
      ui.huifu.setText(_0x4dbc11.huifu);
      ui.save2.click(function () {
        var _0x55779f = {
          pinglunRate: ui.pinglunRate.text(),
          pinglunMin: ui.pinglunMin.text(),
          pinglunMax: ui.pinglunMax.text(),
          pinglun: ui.pinglun.text(),
          huifuDianzanRate: ui.huifuDianzanRate.text(),
          huifuDianzanDeep: ui.huifuDianzanDeep.getSelectedItemPosition(),
          huifuRate: ui.huifuRate.text(),
          huifuDeep: ui.huifuDeep.getSelectedItemPosition(),
          huifu: ui.huifu.text()
        };
        _0x2e51e2.saveHuashu(_0x55779f);
        alert("保存成功");
      });
      var _0x228186 = _0x2e51e2.getInfo3();
      ui.sixinSwitch.checked = _0x228186.sixinSwitch;
      ui.totalzanMin.setText(_0x228186.totalzanMin + "");
      ui.totalzanMax.setText(_0x228186.totalzanMax + "");
      ui.totalguanzhuMin.setText(_0x228186.totalguanzhuMin + "");
      ui.totalguanzhuMax.setText(_0x228186.totalguanzhuMax + "");
      ui.fensiMin.setText(_0x228186.fensiMin + "");
      ui.fensiMax.setText(_0x228186.fensiMax + "");
      ui.zuopinMin.setText(_0x228186.zuopinMin + "");
      ui.zuopinMax.setText(_0x228186.zuopinMax + "");
      ui.xihuanMin.setText(_0x228186.xihuanMin + "");
      ui.xihuanMax.setText(_0x228186.xihuanMax + "");
      ui.sixinWords.setText(_0x228186.sixinWords);
      ui.save3.on("click", function () {
        var _0x2c4fa4 = {
          sixinSwitch: ui.sixinSwitch.checked,
          totalzanMin: ui.totalzanMin.text(),
          totalzanMax: ui.totalzanMax.text(),
          totalguanzhuMin: ui.totalguanzhuMin.text(),
          totalguanzhuMax: ui.totalguanzhuMax.text(),
          fensiMin: ui.fensiMin.text(),
          fensiMax: ui.fensiMax.text(),
          zuopinMin: ui.zuopinMin.text(),
          zuopinMax: ui.zuopinMax.text(),
          xihuanMin: ui.xihuanMin.text(),
          xihuanMax: ui.xihuanMax.text(),
          sixinWords: ui.sixinWords.text()
        };
        _0x2e51e2.saveInfo3(_0x2c4fa4);
        alert("保存成功");
      });
    };
    this.start = function () {
      if (!_0x4c384f.checkServer() || !_0x357777.launchApp()) {
        return false;
      }
      _0x4c384f.showConsole("万能拓客");
      log("特别注意:下列界面运行");
      log("1:首页-[同城]");
      log("2:首页-[关注]");
      log("3:首页-[推荐]");
      log("4:搜索-[视频页]");
      _0x51de66.index();
      _0x51de66.ClickListener({
        clickStart: function _0x3855ac() {
          _0x2e51e2.action();
        },
        clickStop: function _0x390a43() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0xacbabd() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x51de66.close();
            _0x4c384f.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x56c68b = _0x2e51e2.getBaseInfo(),
        _0x267fb6 = _0x2e51e2.getHuashu(),
        _0x11276c = _0x2e51e2.getInfo3(),
        _0x4237b3 = _0x267fb6.pinglun,
        _0x5f5d9f = _0x4237b3.split("\n"),
        _0x5b0515 = _0x267fb6.huifu,
        _0x13a2e6 = _0x5b0515.split("\n"),
        _0x590e69 = _0x11276c.sixinWords,
        _0x3a8fad = _0x590e69.split("\n");
      _0x357777.closeTip();
      _0x4c384f.checkTimeEnd(_0x56c68b.time, function () {
        toastLog("时间到");
        threads.shutDownAll();
      });
      threads.start(function () {
        _0x357777.watchStart("主任务开始", 3);
        while (true) {
          _0x357777.watchSleep("观看", 3);
          var _0x5802a1 = _0x357777.getViewType();
          if (_0x5802a1 == "视频") {
            var _0x544544 = true;
            _0x56c68b.words != "" && (_0x544544 = _0x357777.descContain(_0x56c68b.words.split("+")));
            var _0x933341 = _0x357777.getDianZanShu();
            _0x544544 && random(1, 100) <= _0x56c68b.tapRate && _0x933341 >= _0x56c68b.dianzanMin && _0x933341 <= _0x56c68b.dianzanMax && _0x357777.clickDianzan();
            _0x544544 && random(1, 100) < _0x56c68b.guanzhuRate && _0x357777.clickGuanzhu();
            var _0xd5bb94 = _0x357777.getPinglunShu(),
              _0x942373 = random(1, 100) < parseInt(_0x267fb6.pinglunRate),
              _0x3b8c02 = random(1, 100) < parseInt(_0x267fb6.huifuRate),
              _0x3bae69 = random(1, 100) < parseInt(_0x267fb6.huifuDianzanRate);
            if (_0x544544 && (_0x942373 || _0x3b8c02 || _0x3bae69) && _0xd5bb94 >= _0x267fb6.pinglunMin && _0xd5bb94 <= _0x267fb6.pinglunMax) {
              if (_0x357777.clickPinlunqu()) {
                if (_0x3b8c02 && _0x13a2e6.length > 0 && _0x267fb6.huifuDeep > 0) {
                  _0x357777.pinglunHuifu(_0x267fb6.huifuDeep, _0x5b0515);
                }
                var _0x1be09e = _0x5f5d9f[random(0, _0x5f5d9f.length - 1)];
                if (_0x942373 && _0x1be09e != "") {
                  _0x357777.pinglun(_0x1be09e);
                }
                log("关闭页面:退出评论区.");
                sleep(1000);
                back();
                sleep(1000);
              }
            }
            _0x357777.closePinlunquOnce();
            if (_0x544544 && _0x11276c.sixinSwitch && _0x357777.JumpShipinToUsercenter()) {
              var _0x4f6007 = _0x357777.watchUercenterInfo();
              _0x4f6007.keyWord = _0x56c68b.words;
              _0x4f6007.tel = "";
              if (_0x11276c.sixinSwitch && _0x2e51e2.checkInfo3Conditionn(_0x11276c, _0x4f6007) && _0x357777.JumpUsercenterToMore() && _0x357777.JumpMoreToFasixin()) {
                var _0x1be09e = _0x3a8fad[random(0, _0x3a8fad.length - 1)];
                _0x1be09e != "" && _0x357777.textSend(_0x1be09e);
                back();
                sleep(1000);
              }
              sleep(1000);
              back();
            }
            _0x357777.watchSleep("观看", random(_0x56c68b.timeMin, _0x56c68b.timeMax));
          }
          _0x4c384f.actionSwipUp();
        }
      });
    };
    this.checkInfo3Conditionn = function (_0x90e043, _0xd5316c) {
      if (_0xd5316c.totalzan >= _0x90e043.totalzanMin && _0xd5316c.totalzan <= _0x90e043.totalzanMax && _0xd5316c.totalguanzhu >= _0x90e043.totalguanzhuMin && _0xd5316c.totalguanzhu <= _0x90e043.totalguanzhuMax && _0xd5316c.fensi >= _0x90e043.fensiMin && _0xd5316c.fensi <= _0x90e043.fensiMax && _0xd5316c.zuopin >= _0x90e043.zuopinMin && _0xd5316c.zuopin <= _0x90e043.zuopinMax && _0xd5316c.xihuan >= _0x90e043.xihuanMin && _0xd5316c.xihuan <= _0x90e043.xihuanMax) {
        toastLog("符合数字条件");
        sleep(2000);
        return true;
      }
      toastLog("不符合数字条件");
      sleep(2000);
      return false;
    };
    var _0x85d70e = storages.create("wzke:A4");
    this.getBaseInfo = function () {
      var _0x171483 = _0x85d70e.get("baseinfo");
      _0x171483 == undefined && (_0x171483 = {}, _0x171483.time = 120, _0x171483.tapRate = 10, _0x171483.dianzanMin = 0, _0x171483.dianzanMax = 10000, _0x171483.guanzhuRate = 10, _0x171483.guanzhuMin = 0, _0x171483.guanzhuMax = 1000, _0x171483.timeMin = 2, _0x171483.timeMax = 10, _0x171483.words = "", _0x85d70e.put("baseinfo", _0x171483));
      return _0x85d70e.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x3d4fd6) {
      _0x85d70e.put("baseinfo", _0x3d4fd6);
    };
    this.getHuashu = function () {
      if (_0x85d70e.get("huashu") == undefined) {
        huashu = {};
        huashu.pinglunRate = "100";
        huashu.pinglunMin = 0;
        huashu.pinglunMax = 10000;
        huashu.pinglun = "很好看\n期待更新\n互关一下行不行";
        huashu.huifuDianzanRate = "100";
        huashu.huifuDianzanDeep = 0;
        huashu.huifuRate = "100";
        huashu.huifuDeep = 0;
        huashu.huifu = "很好\n你好\n互关";
        _0x85d70e.put("huashu", huashu);
      }
      return _0x85d70e.get("huashu");
    };
    this.saveHuashu = function (_0x230f2b) {
      _0x85d70e.put("huashu", _0x230f2b);
    };
    this.getInfo3 = function () {
      if (_0x85d70e.get("info3") == undefined) {
        var _0x55fd34 = {
          sixinSwitch: false,
          totalzanMin: 0,
          totalzanMax: 1000000,
          totalguanzhuMin: 0,
          totalguanzhuMax: 100000,
          fensiMin: 0,
          fensiMax: 1000000,
          zuopinMin: 0,
          zuopinMax: 100,
          xihuanMin: 0,
          xihuanMax: 100,
          sixinWords: "作品很不错,需要推广吗?\n你好推广更多流量\n互关\n你来我往,我关注你啦\n互粉\n作品推广了解一下"
        };
        _0x85d70e.put("info3", _0x55fd34);
      }
      return _0x85d70e.get("info3");
    };
    this.saveInfo3 = function (_0x4fecac) {
      _0x85d70e.put("info3", _0x4fecac);
    };
  }
  _0x1478b9.exports = _0x1b6b8c;
}, function (_0x3476f7, _0xb54d2d, _0x4b47ec) {
  function _0x3cc357(_0x285fa4) {
    var _0xb4f833 = this,
      _0xbee887 = _0x4b47ec(1),
      _0x52b8bf = _0xbee887.bgColor;
    this.index = function () {
      _0xb4f833.view();
    };
    this.view = function () {
      var _0xf2dd81 = _0x2a7f86.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"直播氛围\"bg=\"".concat(_0x52b8bf, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在直播间启动，自动观看视频，循环弹幕\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0xf2dd81, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n<horizontalweightSum=\"10\"padding=\"10000\"alpha=\"0\"h=\"0\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"主播个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"zhuboCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"喜欢次数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"dianzanCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<framepadding=\"10000\">\n<textmarginTop=\"8\"textColor=\"black\"text=\"弹幕内容\"/>\n<inputmarginTop=\"25\"layout_weight=\"7\"hint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"danmuWords\"bg=\"#ffffff\"/>\n</frame>\n<texttext=\"*换行隔开,多条随机,不要为空\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"循环间隔\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"danmuSpace\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<texttext=\"*两次弹幕间隔时间。\"/>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"循环次数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"danmuCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<texttext=\"*一个直播间循环喜欢和发送弹幕次数。\"/>\n</vertical>\n</card>\n\n<buttonid=\"save\"bg=\"").concat(_0x52b8bf, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n</vertical>\n</ScrollView>\n\n\n\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"功能说明\"gravity=\"center\"marginTop=\"10\"textColor=\"black\"textSize=\"24\"/>\n\n<textmarginTop=\"10\"textSize=\"18\"text=\"〓操作界面\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"16\">1:直播间</text>\n\n<textmarginTop=\"20\"textSize=\"18\"text=\"〓功能\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"16\">1:自动观看</text>\n<texttextSize=\"16\">2:循环弹幕</text>\n</vertical>\n\n</ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["基础设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0xbee887.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0xbee887.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui._backButton.click(function () {
        _0x285fa4.view(1);
      });
      var _0xd824f6 = _0xb4f833.getInfo1();
      ui.dianzanCount.setText(_0xd824f6.dianzanCount + "");
      ui.zhuboCount.setText(_0xd824f6.zhuboCount + "");
      ui.danmuCount.setText(_0xd824f6.danmuCount + "");
      ui.danmuSpace.setText(_0xd824f6.danmuSpace + "");
      ui.danmuWords.setText(_0xd824f6.danmuWords + "");
      ui.save.click(function () {
        var _0x264010 = {
          dianzanCount: ui.dianzanCount.text(),
          zhuboCount: ui.zhuboCount.text(),
          danmuCount: ui.danmuCount.text(),
          danmuSpace: ui.danmuSpace.text(),
          danmuWords: ui.danmuWords.text()
        };
        _0xb4f833.saveInfo1(_0x264010);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0xb4f833.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
    };
    var _0x1865d7 = new (_0x4b47ec(3))(),
      _0x2a7f86 = _0x4b47ec(0),
      _0x26d1c4 = new (_0x4b47ec(2))(),
      _0x8c809d = [];
    _0xb4f833.start = function () {
      if (!_0x2a7f86.checkServer() || !_0x1865d7.launchApp()) {
        return false;
      }
      _0x2a7f86.showConsole("直播拓客");
      log("运行页面:[直播间]");
      _0x26d1c4.index();
      _0x8c809d = [];
      _0x26d1c4.ClickListener({
        clickStart: function _0x3e4bfc() {
          toastLog("开始");
          _0xb4f833.action();
        },
        clickStop: function _0x1d91ac() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x9d296e() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x26d1c4.close();
            _0x2a7f86.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0xb4f833.action = function () {
      var _0x1890a5 = _0xb4f833.getInfo1(),
        _0x173f71 = _0x1890a5.zhuboCount;
      _0x173f71 = 1;
      var _0x542d04 = _0x1890a5.danmuWords,
        _0x167432 = _0x542d04.split("\n");
      threads.start(function () {
        _0x1865d7.watchStart("主任务开始", 1);
        while (--_0x173f71 >= 0) {
          sleep(1000);
          var _0x80298d = parseInt(_0x1890a5.danmuCount);
          while (--_0x80298d >= 0) {
            var _0x146730 = parseInt(_0x1890a5.dianzanCount);
            _0xb4f833.clickDianzan(_0x146730);
            var _0x37d563 = _0x167432[random(0, _0x167432.length - 1)];
            _0x37d563 != "" && _0x1865d7.zhibopinglun(_0x37d563);
            _0x1865d7.watchSleep("观看中", _0x1890a5.danmuSpace);
          }
          _0x2a7f86.actionSwipUp();
        }
        alert("结束任务");
      });
    };
    _0xb4f833.clickDianzan = function (_0x6ea5df) {
      log("喜欢开始:");
      for (var _0x4d2754 = 0; _0x4d2754 < _0x6ea5df + 1; _0x4d2754++) {
        var _0x2f7181 = 200 + random(-50, 50);
        sleep(_0x2f7181);
        log("点击次数:" + _0x4d2754);
        var _0x3f1a85 = device.width * 0.4 + random(-200, -100),
          _0xb644b2 = device.height * 0.38 + random(-50, 50);
        click(_0x3f1a85, _0xb644b2);
      }
    };
    var _0x5d855e = storages.create("wzke:A5");
    _0xb4f833.getInfo1 = function () {
      var _0x54c2c8 = _0x5d855e.get("info1");
      _0x54c2c8 == undefined && (_0x54c2c8 = {}, _0x54c2c8.zhuboCount = 1, _0x54c2c8.danmuCount = 3, _0x54c2c8.danmuSpace = 10, _0x54c2c8.danmuWords = "6\n66\n666");
      _0x54c2c8.dianzanCount == undefined && (_0x54c2c8.dianzanCount = 10);
      _0x5d855e.put("info1", _0x54c2c8);
      return _0x5d855e.get("info1");
    };
    _0xb4f833.saveInfo1 = function (_0x50c76c) {
      _0x5d855e.put("info1", _0x50c76c);
    };
  }
  _0x3476f7.exports = _0x3cc357;
}, function (_0x13872f, _0x339352, _0x2c5e51) {
  function _0x1d090c(_0xe06e6a) {
    var _0x1d1cbb = this,
      _0x3c53bb = _0x2c5e51(1),
      _0x192600 = _0x3c53bb.bgColor,
      _0x3506f1 = null,
      _0x1b41f8 = storages.create("wzke:A6");
    _0x1d1cbb.index = function () {
      _0x3506f1 = _0x46cb54.createPopWin();
      _0x1d1cbb.initContent();
      _0x3506f1.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    this.initContent = function () {
      var _0xd7b551 = _0x3c53bb.bgColor,
        _0x589621 = _0x46cb54.getVersionName("com.ss.android.ugc.aweme"),
        _0x2ad489 = ui.inflate("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"行业搜索\"bg=\"".concat(_0xd7b551, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"输入行业关键词进行搜索，在搜索用户列表启动，自动观看视频，概率互动，行业精准拓客\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x589621, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\"id=\"base\"></vertical>\n</card>\n\n<buttonid=\"start\"bg=\"").concat(_0xd7b551, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n<ScrollView><verticalid=\"video\"></vertical></ScrollView>\n<ScrollView><verticalid=\"userCenter\"></vertical></ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      _0x2ad489.base.addView(_0x1d1cbb.createBaseView());
      _0x2ad489.video.addView(_0x1d1cbb.CreateVideoView());
      _0x2ad489.userCenter.addView(_0x1d1cbb.createUserCenterView());
      _0x2ad489.viewpager.setTitles(["基础设置", "浏览设置", "私信设置"]);
      _0x2ad489.tabs.setupWithViewPager(_0x2ad489.viewpager);
      _0x2ad489.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x3c53bb.selectedTabIndicatorColor);
      _0x2ad489.tabs.selectedTabIndicatorHeight = _0x3c53bb.selectedTabIndicatorHeight;
      _0x2ad489.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x2ad489._backButton.click(function () {
        _0x3506f1.dismiss();
      });
      _0x2ad489.start.click(function () {
        _0x1b41f8.put("userCount", parseInt(_0x2ad489.userCount.text()));
        _0x1b41f8.put("timeMin", parseInt(_0x2ad489.timeMin.text()));
        _0x1b41f8.put("timeMax", parseInt(_0x2ad489.timeMax.text()));
        _0x1b41f8.put("modelSwitch2", _0x2ad489.modelSwitch2.checked);
        dialogs.build({
          title: "提示",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x1d1cbb.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
      _0x3506f1.setContentView(_0x2ad489);
    };
    _0x1d1cbb.getBaseData = function () {
      var _0xde01b1 = {
        userCount: _0x1b41f8.get("userCount") != undefined ? _0x1b41f8.get("userCount") : 3,
        timeMin: _0x1b41f8.get("timeMin") != undefined ? _0x1b41f8.get("timeMin") : 2,
        timeMax: _0x1b41f8.get("timeMax") != undefined ? _0x1b41f8.get("timeMax") : 8,
        modelSwitch2: _0x1b41f8.get("modelSwitch2") != undefined ? _0x1b41f8.get("modelSwitch2") : false
      };
      return _0xde01b1;
    };
    _0x1d1cbb.createBaseView = function () {
      var _0x17fc84 = _0x192600,
        _0x4efb43 = ui.inflate("\n<verticalbg=\"#ffffff\">\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"浏览个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"userCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"主页浏览（秒）\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"timeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"timeMax\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"modelSwitch2\"text=\"电话模式\"padding='1510'trackColor=\"".concat(_0x17fc84, "\"textColor=\"black\"checked=\"\"/>\n<textpadding=\"10000\"text=\"开启后会停止其他所有，仅关注\"/>\n\n</vertical>\n")),
        _0xac3b04 = _0x1d1cbb.getBaseData();
      _0x4efb43.userCount.setText(_0xac3b04.userCount + "");
      _0x4efb43.timeMin.setText(_0xac3b04.timeMin + "");
      _0x4efb43.timeMax.setText(_0xac3b04.timeMax + "");
      _0x4efb43.modelSwitch2.checked = _0xac3b04.modelSwitch2;
      return _0x4efb43;
    };
    _0x1d1cbb.getVideoData = function () {
      var _0x33e37e = {
        videoCount: _0x1b41f8.get("videoCount") != undefined ? _0x1b41f8.get("videoCount") : 1,
        videoFollowRate: _0x1b41f8.get("videoFollowRate") != undefined ? _0x1b41f8.get("videoFollowRate") : 0,
        videoLikeRate: _0x1b41f8.get("videoLikeRate") != undefined ? _0x1b41f8.get("videoLikeRate") : 0,
        videoCommentMin: _0x1b41f8.get("videoCommentMin") != undefined ? _0x1b41f8.get("videoCommentMin") : 0,
        videoCommentMax: _0x1b41f8.get("videoCommentMax") != undefined ? _0x1b41f8.get("videoCommentMax") : 1000,
        videoCommentWords: _0x1b41f8.get("videoCommentWords") != undefined ? _0x1b41f8.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行",
        video_dianzan: _0x1b41f8.get("video_dianzan") != undefined ? _0x1b41f8.get("video_dianzan") : 3
      };
      return _0x33e37e;
    };
    _0x1d1cbb.CreateVideoView = function () {
      var _0x3cad4b = _0x192600,
        _0x26fe71 = ui.inflate("\n<verticalbg=\"#ffffff\">\n<texttext=\"浏览作品\"gravity=\"center\"margin=\"010\"textColor=\"black\"textSize=\"24\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"作品数量（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关注概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoFollowRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"喜欢概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoLikeRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"15000\">\n<textlayout_weight=\"4\"textColor=\"black\"text=\"评论范围\"/>\n<horizontallayout_weight=\"6\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputminWidth=\"70\"gravity=\"center\"id=\"videoCommentMin\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"videoCommentMax\"gravity=\"right\"minWidth=\"100\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论区喜欢（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"video_dianzan\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"150200\"w=\"*\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<textw=\"auto\"textColor=\"black\"text=\"评论内容换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"videoCommentWords\"bg=\"#ffffff\"/>\n</vertical>\n\n\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"10020\"cardBackgroundColor=\"#19b38d\"cardUseCompatPadding=\"true\">\n<buttonid=\"videoViewContent\"bg=\"".concat(_0x3cad4b, "\"textSize=\"20\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"text=\"保存作品设置\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n<verticalh=\"400\"w=\"auto\">\n</vertical>\n</vertical>\n"));
      _0x46cb54.setBtnRadius(_0x26fe71.videoCommentWordsCopy, _0x3cad4b);
      _0x46cb54.setBtnRadius(_0x26fe71.videoCommentWordsPaste, _0x3cad4b);
      _0x26fe71.videoCommentWordsCopy.click(function () {
        setClip(_0x26fe71.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x26fe71.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x26fe71.videoCommentWordsPaste.click(function () {
        var _0x3207e3 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x3207e3,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x26fe71.videoCommentWords.setText(_0x3207e3);
        }).show();
      });
      var _0x44ba09 = _0x1d1cbb.getVideoData();
      _0x26fe71.videoCount.setText(_0x44ba09.videoCount + "");
      _0x26fe71.videoFollowRate.setText(_0x44ba09.videoFollowRate + "");
      _0x26fe71.videoLikeRate.setText(_0x44ba09.videoLikeRate + "");
      _0x26fe71.videoCommentMin.setText(_0x44ba09.videoCommentMin + "");
      _0x26fe71.videoCommentMax.setText(_0x44ba09.videoCommentMax + "");
      _0x26fe71.videoCommentWords.setText(_0x44ba09.videoCommentWords);
      _0x26fe71.video_dianzan.setText(_0x44ba09.video_dianzan + "");
      _0x26fe71.videoViewContent.click(function () {
        _0x1b41f8.put("videoCount", parseInt(_0x26fe71.videoCount.text()));
        _0x1b41f8.put("videoFollowRate", parseInt(_0x26fe71.videoFollowRate.text()));
        _0x1b41f8.put("videoLikeRate", parseInt(_0x26fe71.videoLikeRate.text()));
        _0x1b41f8.put("videoCommentMin", parseInt(_0x26fe71.videoCommentMin.text()));
        _0x1b41f8.put("videoCommentMax", parseInt(_0x26fe71.videoCommentMax.text()));
        _0x1b41f8.put("videoCommentWords", _0x26fe71.videoCommentWords.text());
        _0x1b41f8.put("video_dianzan", parseInt(_0x26fe71.video_dianzan.text()));
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x26fe71;
    };
    _0x1d1cbb.getUserCenterData = function () {
      var _0x1b48b8 = {
        userGuanzhuSwitch: _0x1b41f8.get("userGuanzhuSwitch") != undefined ? _0x1b41f8.get("userGuanzhuSwitch") : false,
        userSixinSwitch: _0x1b41f8.get("userSixinSwitch") != undefined ? _0x1b41f8.get("userSixinSwitch") : false,
        userSixinTime: _0x1b41f8.get("userSixinTime") != undefined ? _0x1b41f8.get("userSixinTime") : 1,
        sixinWords: _0x1b41f8.get("sixinWords") != undefined ? _0x1b41f8.get("sixinWords") : "你好\n好啊\n你啊"
      };
      return _0x1b48b8;
    };
    _0x1d1cbb.createUserCenterView = function () {
      var _0x55b6b1 = _0x192600,
        _0x44d4b0 = ui.inflate("\n<verticalbg=\"#ffffff\">\n<texttext=\"用户中心设置\"gravity=\"center\"margin=\"010\"textColor=\"black\"textSize=\"24\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"userGuanzhuSwitch\"text=\"用户中心关注\"padding='1510'trackColor=\"".concat(_0x55b6b1, "\"textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"userSixinSwitch\"text=\"用户中心私信\"padding='1510'trackColor=\"").concat(_0x55b6b1, "\"textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"私信间隔（秒）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"userSixinTime\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"1510\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<texttextColor=\"black\"text=\"私信内容换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"sixinWordsCopy\"margin=\"52\"bg=\"#ff9800\"text=\"复制\"gravity=\"center\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"sixinWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"gravity=\"center\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n\n<inputhint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"sixinWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"10020\"cardBackgroundColor=\"#19b38d\"cardUseCompatPadding=\"true\">\n<buttonid=\"saveSixin\"bg=\"").concat(_0x55b6b1, "\"textSize=\"20\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"text=\"保存私信设置\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n</vertical>\n"));
      _0x46cb54.setBtnRadius(_0x44d4b0.sixinWordsCopy, _0x55b6b1);
      _0x46cb54.setBtnRadius(_0x44d4b0.sixinWordsPaste, _0x55b6b1);
      _0x44d4b0.sixinWordsCopy.click(function () {
        setClip(_0x44d4b0.sixinWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x44d4b0.sixinWords.text(),
          positive: "好的"
        }).show();
      });
      _0x44d4b0.sixinWordsPaste.click(function () {
        var _0x4d2391 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x4d2391,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x44d4b0.sixinWords.setText(_0x4d2391);
          alert("粘贴成功");
        }).show();
      });
      var _0x4c835d = _0x1d1cbb.getUserCenterData();
      _0x44d4b0.userGuanzhuSwitch.checked = _0x4c835d.userGuanzhuSwitch;
      _0x44d4b0.userSixinSwitch.checked = _0x4c835d.userSixinSwitch;
      _0x44d4b0.userSixinTime.setText(_0x4c835d.userSixinTime + "");
      _0x44d4b0.sixinWords.setText(_0x4c835d.sixinWords);
      _0x44d4b0.saveSixin.click(function () {
        _0x1b41f8.put("userGuanzhuSwitch", _0x44d4b0.userGuanzhuSwitch.checked);
        _0x1b41f8.put("userSixinSwitch", _0x44d4b0.userSixinSwitch.checked);
        _0x1b41f8.put("userSixinTime", parseInt(_0x44d4b0.userSixinTime.text()));
        _0x1b41f8.put("sixinWords", _0x44d4b0.sixinWords.text());
        dialogs.build({
          title: "提示",
          content: "保存成功",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x44d4b0;
    };
    var _0x265e6 = new (_0x2c5e51(3))(),
      _0x46cb54 = _0x2c5e51(0),
      _0x22d759 = new (_0x2c5e51(2))(),
      _0xe788ba = [];
    _0x1d1cbb.start = function () {
      if (!_0x46cb54.checkServer() || !_0x265e6.launchApp()) {
        return false;
      }
      _0x46cb54.showConsole("行业搜索");
      log("运行页面:[首页-搜索-用户列表]");
      _0x22d759.index();
      _0xe788ba = [];
      _0x22d759.ClickListener({
        clickStart: function _0x18a887() {
          toastLog("开始");
          _0x1d1cbb.action();
        },
        clickStop: function _0x3b7931() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x1c313d() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            threads.shutDownAll();
            _0x22d759.close();
            _0x46cb54.closeConsole();
          }).show();
        }
      });
    };
    var _0x3ad564 = "";
    _0x1d1cbb.action = function () {
      var _0x2d81f0 = _0x1d1cbb.getBaseData(),
        _0x8f0ea2 = parseInt(_0x2d81f0.timeMin),
        _0x24bd94 = parseInt(_0x2d81f0.timeMax),
        _0x27afc2 = _0x2d81f0.userCount;
      log("userCount", _0x27afc2);
      _0x265e6.closeTip();
      threads.start(function () {
        _0x265e6.watchSleep("任务开始：", 1);
        var _0x3a5cc6 = className("android.widget.EditText").findOnce();
        _0x3a5cc6 != null && (_0x3ad564 = _0x3a5cc6.text());
        while (1) {
          while (1) {
            sleep(1000);
            if (_0x27afc2 == 0) {
              break;
            }
            var _0x246eff = _0x1d1cbb.getOneUser();
            if (_0x246eff != null) {
              var _0x4bd62f = click(_0x246eff.bounds().centerX(), _0x246eff.bounds().centerY());
              log("进入页面:用户中心", _0x4bd62f);
              sleep(2000);
              _0x265e6.watchSleep("主页浏览：", random(_0x8f0ea2, _0x24bd94));
              _0x1d1cbb.action2();
              sleep(2000);
              log("返回页面:用户列表");
              back();
              sleep(2000);
              _0x27afc2--;
            } else {
              break;
            }
          }
          if (_0x27afc2 == 0) {
            break;
          }
          var _0x47cbfa = device.width * 0.4 + random(-50, 50),
            _0x4ab1ec = device.height * 0.85 + random(-50, 50),
            _0x360188 = device.width * 0.6 + random(-50, 50),
            _0x4a32aa = device.height * 0.25 + random(-50, 50);
          _0x46cb54.swipeRandom(_0x47cbfa, _0x4ab1ec, _0x360188, _0x4a32aa, 2000);
          sleep(2000);
        }
        alert("任务结束");
      });
    };
    _0x1d1cbb.getOneUser = function () {
      log("获取用户");
      sleep(2000);
      var _0x1f2372 = textContains("粉丝:").find();
      for (var _0x25b6b = 1; _0x25b6b < _0x1f2372.length; _0x25b6b++) {
        var _0x26602f = _0x1f2372[_0x25b6b],
          _0x179c19 = _0x26602f.parent();
        if (_0x179c19.bounds().centerY() > device.height * 0.8) {
          break;
        }
        if (_0x179c19.bounds().height() < 100) {
          continue;
        }
        var _0x54e69a = _0x26602f.text();
        userNameArr = _0x54e69a.split("粉丝:");
        _0x54e69a = userNameArr[0];
        if (_0xe788ba.indexOf(_0x54e69a) == -1) {
          log("用户昵称：", _0x54e69a);
          _0xe788ba.push(_0x54e69a);
          return _0x26602f;
        }
      }
      return null;
    };
    _0x1d1cbb.action2 = function () {
      if (!_0x265e6.isPrivateOrBan()) {
        return false;
      }
      var _0x25b49b = _0x1d1cbb.getBaseData(),
        _0x15b0e7 = _0x1d1cbb.getVideoData(),
        _0x2a9a16 = _0x1d1cbb.getUserCenterData();
      if (_0x25b49b.modelSwitch2) {
        var _0x7a6451 = _0x265e6.watchUsercenterTel(2);
        _0x7a6451 != null && _0x265e6.clickUsercenterGuanzhu();
        return true;
      }
      _0x2a9a16.userGuanzhuSwitch && _0x265e6.clickUsercenterGuanzhu();
      if (_0x2a9a16.userSixinSwitch && _0x265e6.JumpUsercenterToMore() && _0x265e6.JumpMoreToFasixin()) {
        var _0x246548 = _0x2a9a16.sixinWords.split("\n"),
          _0x14ecaf = _0x246548[random(0, _0x246548.length - 1)];
        _0x14ecaf != "" && _0x265e6.textSend(_0x14ecaf);
        back();
        sleep(1000);
      }
      var _0x435bca = _0x15b0e7.videoCount;
      if (_0x435bca == 0) {
        return false;
      }
      if (_0x265e6.JumpUsercenterToFirstzuopin() == false) {
        sleep(1000);
        return;
      }
      while (_0x435bca > 0) {
        _0x265e6.watchSleep("观看", 2);
        if (random(1, 100) < _0x15b0e7.videoFollowRate) {
          _0x265e6.clickGuanzhu();
        }
        if (random(1, 100) < _0x15b0e7.videoLikeRate) {
          _0x265e6.clickDianzan();
        }
        var _0x56ddae = _0x265e6.getPinglunShu();
        _0x56ddae >= _0x15b0e7.videoCommentMin && _0x56ddae <= _0x15b0e7.videoCommentMax && _0x265e6.clickPinlunqu() && (_0x265e6.actionPinglunqu(_0x15b0e7.video_dianzan, "", ""), _0x265e6.pinglun(_0x15b0e7.videoCommentWords), back());
        _0x265e6.watchSleep("观看", 2);
        if (--_0x435bca <= 0) {
          break;
        }
        _0x46cb54.actionSwipUp();
        sleep(2000);
      }
      log("返回个人中心");
      back();
      sleep(2000);
    };
  }
  _0x13872f.exports = _0x1d090c;
}, function (_0x385cb4, _0x22651c, _0x24d25b) {
  function _0x342637(_0x2f490f) {
    var _0x1abf8c = this,
      _0xd029 = "/sdcard/111Record/",
      _0x2725d5 = null,
      _0x324dba = new (_0x24d25b(2))(),
      _0x46adc8 = _0x24d25b(0),
      _0x1c1495 = _0x24d25b(1),
      _0x37b156 = _0x1c1495.bgColor;
    _0x1abf8c.index = function () {
      _0x1abf8c.show();
    };
    _0x1abf8c.show = function () {
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"AI录制\"bg=\"".concat(_0x37b156, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n<cardgravity=\"center_horizontal\"margin=\"20\"h=\"180\">\n<verticalgravity=\"center_horizontal\"w=\"auto\"h=\"auto\"margin=\"20\">\n<texttext=\"提示:使用功能之前\"/>\n<texttext=\"1.录制:点击和滑动,操作间隔至少1秒\"/>\n<texttext=\"2.屏幕内生效,物理按键如音量,返回等无效,\"/>\n<texttext=\"3.免Root录制,由于安卓未知bug,很小概率会出现问题,重启软件\"/>\n<texttext=\"*音量上键结束录制\"textColor=\"red\"/>\n\n</vertical>\n\n</card>\n<buttonmarginTop=\"25\"textSize=\"18\"id=\"start\"h=\"auto\"text=\"开始录制\"layout_gravity=\"center\"w=\"200\"style=\"Widget.AppCompat.Button.Borderless.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<horizontalgravity=\"center\"layout_gravityc=\"center\"marginTop=\"15\">\n<textlayout_gravityc=\"center\"textColor=\"black\"text=\"循环次数:\"/>\n<inputlayout_gravityc=\"center\"id=\"num\"gravity=\"center\"marginLeft=\"20\"inputType=\"number\"text=\"1\"width=\"50\"/>\n</horizontal>\n<texttext=\"列表\"textColor=\"red\"/>\n<listid=\"icons\"spanCount=\"1\"h=\"*\">\n<horizontalw=\"*\">\n<cardlayout_weight=\"7\"h=\"50\"margin=\"105\"cardCornerRadius=\"2dp\"\ncardElevation=\"1dp\"gravity=\"center_vertical\">\n<verticalpadding=\"508\"h=\"auto\">\n<texttext=\"{{this.name}}\"textColor=\"#222222\"textSize=\"16sp\"/>\n</vertical>\n<Viewbg=\"#f44336\"h=\"*\"w=\"10\"/>\n\n</card>\n\n</horizontal>\n</list>\n</vertical>\n\n\n</ScrollView>\n</viewpager>\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["开始录制", "我的录制"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x1c1495.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x1c1495.selectedTabIndicatorHeight;
      ui.viewpager.currentItem = 0;
      ui.tabs.setTabTextColors(colors.parseColor("#66CCFF"), colors.parseColor("#6A5ACD"));
      ui.viewpager.setOnPageChangeListener({
        onPageSelected: function _0x3ef66c(_0x51cf2d) {
          if (_0x51cf2d == 1) {
            var _0x33ef3a = _0x1abf8c.getAllfile(),
              _0xe8985 = [];
            _0x33ef3a.forEach(function (_0x44aed9) {
              log(_0x44aed9);
              var _0x1ebb0b = _0x44aed9.replace(".js", "");
              _0xe8985.push({
                name: _0x1ebb0b,
                file: _0xd029 + _0x44aed9
              });
            });
            ui.icons.setDataSource(_0xe8985);
          }
        }
      });
      ui._backButton.click(function () {
        _0x2f490f.view(1);
      });
      ui.start.click(function () {
        dialogs.build({
          title: "提示",
          content: "确认开始吗?",
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x1abf8c.start();
        }).show();
      });
      ui.icons.on("item_click", function (_0x581505, _0x4930da, _0x37b609) {
        var _0x3353ea = ui.num.text();
        dialogs.build({
          title: "提示",
          content: "[" + _0x581505.name + "]执行一下操作:" + _0x3353ea + "次",
          positive: "执行任务",
          neutral: "删除",
          negative: "取消"
        }).on("positive", function () {
          _0x1abf8c.start2(_0x581505.file, _0x3353ea);
        }).on("neutral", function () {
          log("删除", _0x581505.file);
          if (files.exists(_0x581505.file)) {
            files.remove(_0x581505.file);
            var _0x3e8788 = _0x1abf8c.getAllfile(),
              _0x54f1ec = [];
            _0x3e8788.forEach(function (_0x950db8) {
              log(_0x950db8);
              var _0xa4fcba = _0x950db8.replace(".js", "");
              _0x54f1ec.push({
                name: _0xa4fcba,
                file: _0xd029 + _0x950db8
              });
            });
            ui.icons.setDataSource(_0x54f1ec);
          }
        }).show();
      });
    };
    var _0x5ac5c2 = {};
    _0x1abf8c.start = function () {
      if (!_0x46adc8.checkServer()) {
        return false;
      }
      home();
      _0x324dba.index();
      _0x324dba.ClickListener({
        clickStart: function _0x50800e() {
          _0x5ac5c2 = {};
          _0x216ff6 = "";
          _0x18685e = new Date().getTime();
          _0x5ac5c2.start = threads.start(function () {
            _0x1abf8c.action();
          });
        },
        clickStop: function _0x75de14() {
          toastLog("结束录制");
          _0x2725d5.close();
          _0x1abf8c.savethisCode();
        },
        clickExit: function _0x2af7d2() {
          toastLog("关闭");
          _0x324dba.close();
          _0x2725d5 != null && _0x2725d5.close();
        }
      });
    };
    var _0x216ff6 = "",
      _0x18685e = new Date().getTime();
    _0x1abf8c.savethisCode = function () {
      rawInput("请输入要保存的文件名", "", function (_0x1f95f7) {
        switch (_0x1f95f7) {
          case null:
            toastLog("取消保存");
            break;
          case "":
            _0x1abf8c.savethisCode();
            break;
          default:
            var _0x839b4 = _0x1f95f7;
            toast(_0x839b4 + "保存成功");
            _0x839b4 = _0x839b4 + ".js";
            var _0x4116de = ";sleep(2000);toast('结束任务');";
            files.write(_0xd029 + _0x839b4, _0x216ff6 + _0x4116de);
            break;
        }
      });
    };
    _0x1abf8c.action = function () {
      importClass(android.animation.ObjectAnimator);
      importClass(android.animation.ValueAnimator);
      importClass(android.view.animation.LinearInterpolator);
      importClass(android.animation.AnimatorSet);
      _0x2725d5 = floaty.rawWindow("\n<frameid=\"action\"w=\"".concat(device.width, "\"h=\"").concat(device.height, "\">\n\n<canvasid=\"a\"w=\"*\"h=\"*\"gravity=\"center\"/>\n<framealpha=\"0.8\"marginTop=\"700px\"marginLeft=\"").concat(device.width * 0.5 - 60, "px\"w=\"140px\"h=\"140px\">\n<imgw=\"140px\"h=\"140px\"src=\"#e91e63\"circle=\"true\"/>\n<imgid=\"shouzhi\"w=\"100px\"h=\"100px\"src=\"@drawable/ic_touch_app_black_48dp\"tint=\"#f5e980\"gravity=\"center\"layout_gravity=\"center\"/>\n</frame>\n</frame>\n"));
      setInterval(function () {}, 1000);
      animatorSetPeople = new AnimatorSet();
      animatorSetPeople.setDuration(2000);
      animator = ObjectAnimator.ofFloat(_0x2725d5.shouzhi, "scaleX", 0.8, 1.2, 0.8);
      var _0xa0d10b = animator;
      _0xa0d10b.setRepeatCount(-1);
      _0xa0d10b.setInterpolator(new LinearInterpolator());
      animator = ObjectAnimator.ofFloat(_0x2725d5.shouzhi, "scaleY", 0.8, 1.2, 0.8);
      var _0x332bc7 = animator;
      _0x332bc7.setRepeatCount(-1);
      _0x332bc7.setRepeatMode(ValueAnimator.RESTART);
      animatorSetPeople.play(_0xa0d10b).with(_0x332bc7);
      animatorSetPeople.start();
      var _0x544a73 = 0,
        _0x225cc0 = 0,
        _0x1209d2,
        _0x516ea4 = 50;
      _0x2725d5.action.setOnTouchListener(function (_0x5f0e1b, _0x500051) {
        switch (_0x500051.getAction()) {
          case _0x500051.ACTION_DOWN:
            _0x544a73 = _0x500051.getRawX();
            _0x225cc0 = _0x500051.getRawY();
            _0x1209d2 = new Date().getTime();
            return true;
          case _0x500051.ACTION_UP:
            if (!(new Date().getTime() - _0x1209d2 > 2000 && Math.abs(_0x500051.getRawY() - _0x225cc0) < _0x516ea4 && Math.abs(_0x500051.getRawX() - _0x544a73) < _0x516ea4)) {
              Math.abs(_0x500051.getRawY() - _0x225cc0) < _0x516ea4 && Math.abs(_0x500051.getRawX() - _0x544a73) < _0x516ea4 ? _0x1abf8c.click(_0x544a73, _0x225cc0) : _0x1abf8c.swiper(_0x544a73, _0x225cc0, _0x500051.getRawX(), _0x500051.getRawY());
            }
            return true;
        }
        return true;
      });
    };
    _0x1abf8c.click = function (_0x3dc54b, _0x70c89a) {
      _0x3dc54b = parseInt(_0x3dc54b);
      _0x70c89a = parseInt(_0x70c89a);
      toastLog("点击(" + _0x3dc54b + "," + _0x70c89a + ")");
      threads.start(function () {
        _0x2725d5.setTouchable(false);
        sleep(60);
        press(_0x3dc54b, _0x70c89a, 1);
        _0x2725d5.setTouchable(true);
      });
    };
    _0x1abf8c.swiper = function (_0x3cccdf, _0x5e1a38, _0x430cbc, _0x572d62) {
      _0x3cccdf = parseInt(_0x3cccdf);
      _0x5e1a38 = parseInt(_0x5e1a38);
      _0x430cbc = parseInt(_0x430cbc);
      _0x572d62 = parseInt(_0x572d62);
      toastLog("从(" + _0x3cccdf + "," + _0x5e1a38 + ")滑到(" + _0x430cbc + "," + _0x572d62 + ")");
      threads.start(function () {
        _0x2725d5.setTouchable(false);
        sleep(60);
        swipe(_0x3cccdf, _0x5e1a38, _0x430cbc, _0x572d62, 350);
        _0x2725d5.setTouchable(true);
      });
    };
    var _0x7b9e28 = {};
    _0x1abf8c.start2 = function (_0x17858e, _0x474151) {
      if (!_0x46adc8.checkServer()) {
        return false;
      }
      home();
      _0x7b9e28 = {};
      _0x7b9e28.chencVoiceUp = _0x46adc8.chencVoiceUp(function () {
        toastLog("结束");
        for (var _0x5a9610 in _0x7b9e28) {
          _0x7b9e28[_0x5a9610].interrupt();
        }
      });
      _0x324dba.index();
      _0x324dba.ClickListener({
        clickStart: function _0x1bec58() {
          _0x324dba.close();
          _0x7b9e28.start = threads.start(function () {
            toast("开始运行");
            sleep(500);
            var _0x5141aa = {
              loopTimes: _0x474151
            };
            engines.execScriptFile(_0x17858e, _0x5141aa);
          });
        },
        clickStop: function _0x1cadbc() {
          mThis.end();
        }
      });
    };
    _0x1abf8c.action2 = function (_0x252e9a, _0x54623b) {};
    _0x1abf8c.getAllfile = function () {
      var _0xf2b675 = files.listDir(_0xd029, function (_0x4b1d3e) {
        return _0x4b1d3e.endsWith(".js") && files.isFile(files.join(_0xd029, _0x4b1d3e));
      });
      return _0xf2b675;
    };
  }
  _0x385cb4.exports = _0x342637;
}, function (_0x4520f4, _0x3f8473, _0x5d6116) {
  function _0x265ecd(_0xf6ff77) {
    var _0x5108c2 = this,
      _0x416bfd = _0x5d6116(1),
      _0xe62d2d = new (_0x5d6116(4))(),
      _0x5efe09 = new (_0x5d6116(5))();
    _0x5108c2.index = function () {
      _0x5108c2.view();
    };
    _0x5108c2.view = function () {
      var _0x4dc9e0 = _0x47e211.getVersionName("com.ss.android.ugc.aweme"),
        _0x19f6b0 = _0x416bfd.bgColor;
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"行业拓客\"bg=\"".concat(_0x19f6b0, "\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"设置行业，评论区关键字，在主页启动，对评论区、含有设定关键字评论的用户进行精准拓客，可在管理后台查看运行数据\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x4dc9e0, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n\n<verticalpadding=\"2\"marginTop=\"10\"id=\"bg1\"bg=\"#ffffff\">\n<horizontalweightSum=\"10\"padding=\"10000\"bg=\"#ffffff\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"浏览用户个数\"bg=\"#ffffff\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"10000\"bg=\"#ffffff\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"浏览用户作品个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"行业关键词\"/>\n<inputpaddingRight=\"20\"layout_weight=\"7\"hint=\"行业关键词\"textSizeHint=\"10\"gravity=\"right\"id=\"industry\"text=\"\"bg=\"#ffffff\"/>\n\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"105200\"w=\"*\"bg=\"#ffffff\">\n<horizontalh=\"25\"gravity=\"left|center\"bg=\"#ffffff\">\n<textw=\"auto\"textColor=\"black\"text=\"评论关键词换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"2\"id=\"keyWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"sexSwitch\"marginTop=\"5\"padding='88'checked='false'text='性别筛选'trackColor='#2196f3'background='#ffffff'/>\n\n<frameh=\"0dp\"id=\"sexView\"padding=\"1010\">\n<textw=\"auto\"h=\"30dp\"layout_gravity=\"left\">性别:</text>\n<spinnerw=\"auto\"h=\"30dp\"layout_gravity=\"right\"id=\"sex\"entries=\"女|男\"/>\n</frame>\n\n<texttext=\"*筛选性别男女\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"105200\"w=\"*\"bg=\"#ffffff\">\n<horizontalh=\"25\"gravity=\"left|center\"bg=\"#ffffff\">\n<textw=\"auto\"textColor=\"black\"text=\"地区筛选换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"areaWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"areaWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"2\"id=\"areaWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n</vertical>\n\n<buttonid=\"start\"bg=\"").concat(_0x19f6b0, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x47e211.setBackgroundRoundedRectangle(ui.bg1);
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x196e17 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x196e17,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x196e17);
        }).show();
      });
      ui.areaWordsCopy.click(function () {
        setClip(ui.areaWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.areaWords.text(),
          positive: "好的"
        }).show();
      });
      ui.areaWordsPaste.click(function () {
        var _0x308829 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x308829,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.areaWords.setText(_0x308829);
        }).show();
      });
      ui._backButton.click(function () {
        _0xf6ff77.view(1);
      });
      ui.sexSwitch.on("check", function (_0x145278) {
        _0x145278 ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      var _0x434239 = _0x5108c2.getInfo1();
      ui.count.setText(_0x434239.count + "");
      ui.industry.setText(_0x434239.industry + "");
      ui.keyWords.setText(_0x434239.keyWords + "");
      ui.areaWords.setText(_0x434239.areaWords + "");
      ui.sexSwitch.checked = _0x434239.sexSwitch;
      ui.sex.setSelection(_0x434239.sex);
      ui.shipinCount.setText(_0x434239.shipinCount + "");
      ui.start.click(function () {
        var _0x26d723 = {
          count: parseInt(ui.count.text()),
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition(),
          shipinCount: ui.shipinCount.text(),
          industry: ui.industry.text(),
          keyWords: ui.keyWords.text(),
          areaWords: ui.areaWords.text()
        };
        _0x5108c2.saveInfo1(_0x26d723);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x5108c2.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x1aec5d = storages.create("wzke:J1");
    _0x5108c2.getInfo1 = function () {
      var _0x39b37d = _0x1aec5d.get("info1");
      _0x39b37d == undefined && (_0x39b37d = {}, _0x39b37d.industry = "", _0x39b37d.keyWords = "互关\n粉丝\n抱团", _0x39b37d.sexSwitch = false, _0x39b37d.sex = 0, _0x39b37d.shipinCount = 10, _0x1aec5d.put("info1", _0x39b37d));
      _0x39b37d.sexSwitch == undefined && (_0x39b37d.sexSwitch = false);
      _0x39b37d.sex == undefined && (_0x39b37d.sex = 0);
      _0x39b37d.shipinCount == undefined && (_0x39b37d.shipinCount = 10);
      if (_0x39b37d.count == undefined) {
        _0x39b37d.count = 100;
      }
      if (_0x39b37d.areaWords == undefined) {
        _0x39b37d.areaWords = "";
      }
      if (_0x39b37d.industry == undefined) {
        _0x39b37d.industry = "";
      }
      return _0x39b37d;
    };
    _0x5108c2.saveInfo1 = function (_0x3dcf03) {
      _0x1aec5d.put("info1", _0x3dcf03);
    };
    var _0x1dc56e = new (_0x5d6116(3))(),
      _0x47e211 = _0x5d6116(0),
      _0x5a91ae = new (_0x5d6116(2))();
    this.start = function () {
      if (!_0x47e211.checkServer() || !_0x1dc56e.launchApp()) {
        return false;
      }
      _0x47e211.showConsole("行业拓客");
      _0x5a91ae.index();
      _0x5a91ae.ClickListener({
        clickStart: function _0x491195() {
          threads.start(function () {
            _0x5108c2.startAction();
          });
        },
        clickStop: function _0x5353f3() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x39fb47() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x5a91ae.close();
            _0x47e211.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x5108c2.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0x1dc56e.closeTip();
      var _0xcc1894 = _0x5108c2.getInfo1(),
        _0x584ad8 = _0xcc1894.shipinCount,
        _0x39189e = 1;
      for (var _0x4a5ee2 = 0; _0x4a5ee2 < 10; _0x4a5ee2++) {
        var _0x3225a9 = _0x1dc56e.jumpMainToSearchUserList(_0xcc1894.industry);
        if (_0x3225a9) {
          break;
        }
      }
      var _0xde5658 = function _0x393a5d() {
          var _0x5ce67d = className("androidx.recyclerview.widget.RecyclerView").visibleToUser().findOne(5000);
          if (_0x5ce67d == null) {
            for (var _0x4dbcce = 0; _0x4dbcce < 10; _0x4dbcce++) {
              var _0xdc60c1 = _0x1dc56e.jumpMainToSearchUserList(_0xcc1894.industry);
              if (_0xdc60c1) {
                break;
              }
            }
            return 0;
          }
          _0x5ce67d.children().forEach(function (_0x3cbc1a) {
            if (_0x3cbc1a.findOne(text("直播按钮").desc("直播按钮")) !== null) {
              log("跳过直播中用户");
              return;
            }
            if (_0x3cbc1a.bounds().centerY() < _0x5ce67d.bounds().top || _0x3cbc1a.bounds().centerY() > _0x5ce67d.bounds().bottom) {
              return;
            }
            click(_0x3cbc1a.bounds().centerX(), _0x3cbc1a.bounds().centerY());
            sleep(3000);
            log("当前执行用户：", _0x39189e);
            _0x39189e++;
            if (_0x1dc56e.JumpUsercenterToFirstzuopin()) {
              var _0x54d971 = [];
              for (var _0x5ef8a7 = 1; _0x5ef8a7 <= _0x584ad8; _0x5ef8a7++) {
                log("当前执行视频:", _0x5ef8a7);
                var _0x3667bc = descStartsWith("发布时间：").findOnce();
                if (_0x3667bc != null) {
                  if (_0x54d971.indexOf(_0x3667bc.text()) == -1) {
                    log(_0x3667bc.text());
                    _0x54d971.push(_0x3667bc.text());
                  } else {
                    log("当前视频已操作过");
                    _0x47e211.actionSwipUp();
                    sleep(1000);
                    break;
                  }
                }
                _0x1dc56e.getViewType() == "视频" && _0x1dc56e.getPinglunShu() > 0 && _0x1dc56e.clickPinlunqu() && (_0x5108c2.pinglunquAction(), _0x1dc56e.closePinlunquOnce());
                _0x47e211.actionSwipUp();
                sleep(1000);
              }
              log("页面跳转：返回个人中心");
              back();
              sleep(2000);
            }
            var _0x50a8e3 = id("com.ss.android.ugc.aweme:id/back_btn").desc("返回").drawingOrder("2").findOne(3000);
            _0x50a8e3 != null && (_0x50a8e3.click(), sleep(2000));
          });
          _0x47e211.actionSwipUp();
          if (_0x39189e > _0xcc1894.count) {
            return 1;
          }
        },
        _0x2f40cf;
      while (true) {
        _0x2f40cf = _0xde5658();
        if (_0x2f40cf === 0) {
          continue;
        }
        if (_0x2f40cf === 1) {
          break;
        }
      }
      home();
      log("任务完成");
      threads.shutDownAll();
    };
    _0x5108c2.pinglunquAction = function () {
      var _0x1b827a = [],
        _0x47fca9 = _0x5108c2.getInfo1(),
        _0x46c6f8 = 0;
      for (var _0x10e026 = 0; _0x10e026 < 100; _0x10e026++) {
        _0x46c6f8++;
        while (true) {
          var _0x4c6ff1 = _0x5108c2.getNewUser(_0x1b827a);
          if (_0x4c6ff1 == null) {
            break;
          }
          var _0x4267bb = _0x5108c2.isContain(_0x4c6ff1, _0x47fca9.keyWords),
            _0x2ba38b = _0x5108c2.isareaContain(_0x4c6ff1, _0x47fca9.areaWords),
            _0x4bdde0 = _0x5108c2.getCommentTime(_0x4c6ff1);
          if (_0x4267bb != false && _0x2ba38b != false) {
            _0x46c6f8 = 0;
            var _0x1ac25c = _0x4c6ff1.findOne(id("com.ss.android.ugc.aweme:id/avatar")),
              _0x14834e = _0x1ac25c.bounds().centerX(),
              _0x193794 = _0x1ac25c.bounds().centerY();
            log("跳转页面:用户中心");
            click(_0x14834e, _0x193794);
            sleep(4000);
            _0x5108c2.usercenterAction(_0x4267bb, _0x4bdde0);
            log("跳转页面:评论区");
            sleep(1000);
            back();
            sleep(2000);
          }
        }
        if (_0x46c6f8 > 15) {
          log("多次未匹配到，跳过此评论区");
          break;
        }
        if (text("暂时没有更多了").findOnce()) {
          break;
        }
        if (text("部分评论来自其他子版本，因评论者未选择同步抖音，暂不支持查看").findOnce()) {
          break;
        }
        if (text("已折叠部分评论").findOnce()) {
          break;
        }
        if (textEndsWith("点击评论").findOnce()) {
          break;
        }
        var _0x479c4a = textEndsWith("条评论").findOnce(),
          _0x12be56 = device.width * 0.4 + random(-50, 50),
          _0x237910 = device.height * 0.8 + random(-50, 50),
          _0x22394d = device.width * 0.6 + random(-50, 50),
          _0x464ed6 = _0x479c4a != null ? _0x479c4a.bounds().centerY() + 50 : device.height * 0.4;
        log("滑动页面:评论区");
        _0x47e211.swipeRandom(_0x12be56, _0x237910, _0x22394d, _0x464ed6, 2000);
        sleep(1000);
      }
      log("评论操作:此评论区结束");
    };
    _0x5108c2.usercenterAction = function (_0x5811e6, _0x4168f0) {
      sleep(3000);
      var _0x5d2594 = _0x5108c2.getInfo1();
      if (_0x5d2594.shipinCount == 0) {
        return false;
      }
      if (!_0x1dc56e.isPrivateOrBan()) {
        return false;
      }
      if (_0x5d2594.sexSwitch && _0x47e211.requestScreenCapture()) {
        if (_0x1dc56e.watchUserSex() != _0x5d2594.sex) {
          log("性别不符:");
          return;
        }
      }
      log("信息同步中");
      var _0x547ac9 = _0x1dc56e.watchUercenterInfo();
      _0x547ac9.keyWord = _0x5811e6;
      _0x547ac9.tel = "";
      var _0x186d94 = _0xe62d2d.getLoginInfo();
      _0x5efe09.jztk({
        category: "行业拓客",
        source: "DY",
        code: _0x186d94.jihuoma,
        tiktok_id: _0x547ac9.id,
        tiktok_nickname: _0x547ac9.name,
        tiktok_comment: _0x547ac9.keyWord,
        comment_time: _0x4168f0,
        tel: _0x547ac9.tel
      });
      return true;
    };
    _0x5108c2.getCommentTime = function (_0x1393d0) {
      var _0x38b52d = _0x1393d0.findOne(textMatches(/^((0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))$/));
      if (_0x38b52d == null) {
        return "";
      }
      return _0x38b52d.text();
    };
    _0x5108c2.isContain = function (_0xa53951, _0x5bfe43) {
      try {
        var _0x56fc50 = _0x5bfe43.split("\n").filter(function (_0x4efd19) {
            return _0x4efd19 !== "";
          }),
          _0x1c0a39 = _0xa53951.findOne(id("com.ss.android.ugc.aweme:id/content")),
          _0x203fd4 = "";
        _0x1c0a39 != null && (_0x203fd4 = _0x5108c2.filterContent(_0x1c0a39.text()));
        log("评论内容:" + _0x203fd4);
        for (var _0x3a1fcc in _0x56fc50) {
          var _0x52debd = _0x56fc50[_0x3a1fcc];
          if (_0x203fd4.includes(_0x52debd)) {
            log("触发关键词:" + _0x52debd);
            var _0x388ff5 = "关键词:[" + _0x52debd + "]---------评论内容:[" + _0x203fd4 + "]";
            return _0x388ff5;
          }
        }
        return false;
      } catch (_0x56e7c3) {
        log("isContain", _0x56e7c3);
        return false;
      }
    };
    _0x5108c2.isareaContain = function (_0x17b9e6, _0xe1bc3c) {
      try {
        if (_0xe1bc3c == "") {
          return true;
        }
        var _0x52feb6 = _0xe1bc3c.split("\n"),
          _0x253e1a = _0x17b9e6.findOne(textStartsWith("·"));
        if (_0x253e1a == null) {
          return false;
        }
        var _0x1b3b41 = _0x253e1a.text();
        for (var _0x16b061 in _0x52feb6) {
          var _0x677376 = _0x52feb6[_0x16b061];
          if (_0x1b3b41.includes(_0x677376)) {
            log("地区触发:" + _0x677376);
            var _0x470de1 = "关键词:[" + _0x677376 + "]---------地区:[" + _0x1b3b41 + "]";
            return _0x470de1;
          }
        }
        log("地区未触发:" + _0x1b3b41);
        return false;
      } catch (_0x3db1ac) {
        log("isContain", _0x3db1ac);
        return false;
      }
    };
    _0x5108c2.filterContent = function (_0x14b7b4) {
      var _0x18c010 = "",
        _0x57ceb5 = 1;
      for (var _0x2bcb7f = 0; _0x2bcb7f < _0x14b7b4.length; _0x2bcb7f++) {
        var _0xf54910 = _0x14b7b4.charAt(_0x2bcb7f);
        if (_0xf54910 == "@") {
          _0x57ceb5 = -1;
          continue;
        }
        if (_0xf54910 == "") {
          _0x57ceb5 = 1;
          continue;
        }
        _0x57ceb5 == 1 && (_0x18c010 += _0xf54910);
      }
      return _0x18c010;
    };
    _0x5108c2.getNewUser = function (_0x148041) {
      log("获取用户");
      var _0x20cd49 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x2ac048) {
          return _0x2ac048.bounds().width() > 0 && _0x2ac048.bounds().height() > 0;
        }),
        _0xd17684 = _0x20cd49.findOne(3000);
      if (_0xd17684 == null) {
        return null;
      }
      for (var _0x27c9ff = 0; _0x27c9ff < _0xd17684.childCount(); _0x27c9ff++) {
        var _0x33f0a5 = _0xd17684.child(_0x27c9ff),
          _0x10c374 = _0x33f0a5.getContentDescription();
        if (_0x10c374 != null && _0x148041.indexOf(_0x10c374) == -1) {
          var _0x30c827 = _0x33f0a5.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
          if (_0x30c827.bounds().height() >= _0x30c827.bounds().width() - 30) {
            _0x148041.push(_0x10c374);
            return _0x33f0a5;
          }
        }
      }
      return null;
    };
  }
  _0x4520f4.exports = _0x265ecd;
}, function (_0x545db9, _0x56b395, _0x32d76b) {
  function _0x194a09(_0x4482ee) {
    var _0x3e4385 = this,
      _0x58a3bc = _0x32d76b(1),
      _0x4059c5 = new (_0x32d76b(4))(),
      _0x413384 = new (_0x32d76b(5))(),
      _0x3bbd76 = _0x32d76b(7);
    _0x3e4385.index = function () {
      _0x3e4385.view();
    };
    _0x3e4385.view = function () {
      var _0x384cf7 = _0x58a3bc.bgColor,
        _0x4a8991 = _0xaa60bb.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"评论拓客\"bg=\"".concat(_0x384cf7, "\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"设置评论区关键字，在视频播放页启动，对评论区、含有设定关键字评论的用户进行评论拓客，可在管理后台查看运行数据\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x4a8991, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n\n<verticalpadding=\"2\"marginTop=\"10\"id=\"bg1\"bg=\"#ffffff\">\n\n<horizontalweightSum=\"10\"padding=\"10000\"bg=\"#ffffff\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"浏览视频个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"105200\"w=\"*\"bg=\"#ffffff\">\n<horizontalh=\"25\"gravity=\"left|center\"bg=\"#ffffff\">\n<textw=\"auto\"textColor=\"black\"text=\"评论关键词换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"2\"id=\"keyWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"sexSwitch\"marginTop=\"5\"padding='88'checked='false'text='性别筛选'trackColor='#2196f3'background='#ffffff'/>\n\n<frameh=\"0dp\"id=\"sexView\"padding=\"1010\">\n<textw=\"auto\"h=\"30dp\"layout_gravity=\"left\">性别:</text>\n<spinnerw=\"auto\"h=\"30dp\"layout_gravity=\"right\"id=\"sex\"entries=\"女|男\"/>\n</frame>\n\n<texttext=\"*筛选性别男女\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"105200\"w=\"*\"bg=\"#ffffff\">\n<horizontalh=\"25\"gravity=\"left|center\"bg=\"#ffffff\">\n<textw=\"auto\"textColor=\"black\"text=\"地区筛选换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"areaWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"areaWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"2\"id=\"areaWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n</vertical>\n\n<buttonid=\"start\"bg=\"").concat(_0x384cf7, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0xaa60bb.setBackgroundRoundedRectangle(ui.bg1);
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x494d30 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x494d30,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x494d30);
        }).show();
      });
      ui.areaWordsCopy.click(function () {
        setClip(ui.areaWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.areaWords.text(),
          positive: "好的"
        }).show();
      });
      ui.areaWordsPaste.click(function () {
        var _0x408363 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x408363,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.areaWords.setText(_0x408363);
        }).show();
      });
      ui._backButton.click(function () {
        _0x4482ee.view(1);
      });
      ui.sexSwitch.on("check", function (_0x1cfeb8) {
        _0x1cfeb8 ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      var _0x308988 = _0x3e4385.getInfo1();
      ui.keyWords.setText(_0x308988.keyWords + "");
      ui.areaWords.setText(_0x308988.areaWords + "");
      ui.sexSwitch.checked = _0x308988.sexSwitch;
      ui.sex.setSelection(_0x308988.sex);
      ui.shipinCount.setText(_0x308988.shipinCount + "");
      ui.start.click(function () {
        var _0x195ad8 = {
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition(),
          shipinCount: ui.shipinCount.text(),
          keyWords: ui.keyWords.text(),
          areaWords: ui.areaWords.text()
        };
        _0x3e4385.saveInfo1(_0x195ad8);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x3e4385.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x1dd3d3 = storages.create("wzke:pltk");
    _0x3e4385.getInfo1 = function () {
      var _0x83fc95 = _0x1dd3d3.get("info1");
      _0x83fc95 == undefined && (_0x83fc95 = {}, _0x83fc95.keyWords = "互关\n粉丝\n抱团", _0x83fc95.sexSwitch = false, _0x83fc95.sex = 0, _0x83fc95.shipinCount = 20, _0x1dd3d3.put("info1", _0x83fc95));
      _0x83fc95.sexSwitch == undefined && (_0x83fc95.sexSwitch = false);
      _0x83fc95.sex == undefined && (_0x83fc95.sex = 0);
      _0x83fc95.shipinCount == undefined && (_0x83fc95.shipinCount = 20);
      if (_0x83fc95.areaWords == undefined) {
        _0x83fc95.areaWords = "";
      }
      return _0x83fc95;
    };
    _0x3e4385.saveInfo1 = function (_0x16a4bb) {
      _0x1dd3d3.put("info1", _0x16a4bb);
    };
    var _0x3eb549 = new (_0x32d76b(3))(),
      _0xaa60bb = _0x32d76b(0),
      _0x139cf5 = new (_0x32d76b(2))();
    this.start = function () {
      if (!_0xaa60bb.checkServer() || !_0x3eb549.launchApp()) {
        return false;
      }
      _0xaa60bb.showConsole("评论拓客");
      _0x139cf5.index();
      _0x139cf5.ClickListener({
        clickStart: function _0x19c85d() {
          threads.start(function () {
            _0x3e4385.startAction();
          });
        },
        clickStop: function _0x105068() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x15c647() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x139cf5.close();
            _0xaa60bb.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x3e4385.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0x3eb549.closeTip();
      var _0x239235 = _0x3e4385.getInfo1(),
        _0x168906 = _0x239235.shipinCount,
        _0x25afc2 = 1;
      while (true) {
        log("当前执行视频:", _0x25afc2);
        _0x3eb549.getViewType() == "视频" && _0x3eb549.getPinglunShu() > 0 && _0x3eb549.clickPinlunqu() && (_0x3e4385.pinglunquAction(), _0x3eb549.closePinlunquOnce(), _0x25afc2++);
        _0xaa60bb.actionSwipUp();
        sleep(1000);
        if (_0x25afc2 > _0x168906) {
          break;
        }
      }
      home();
      log("任务完成");
      threads.shutDownAll();
    };
    _0x3e4385.pinglunquAction = function () {
      var _0x19402f = [],
        _0x34ffc4 = _0x3e4385.getInfo1(),
        _0x855fb = 0;
      for (var _0x5ed290 = 0; _0x5ed290 < 100; _0x5ed290++) {
        _0x855fb++;
        while (true) {
          var _0x94a693 = _0x3e4385.getNewUser(_0x19402f);
          if (_0x94a693 == null) {
            break;
          }
          var _0x39a568 = _0x3e4385.isContain(_0x94a693, _0x34ffc4.keyWords),
            _0x4211cb = _0x3e4385.isareaContain(_0x94a693, _0x34ffc4.areaWords),
            _0x5babee = _0x3e4385.getCommentTime(_0x94a693);
          if (_0x39a568 != false && _0x4211cb != false) {
            _0x855fb = 0;
            var _0x57ee69 = _0x94a693.findOne(id("com.ss.android.ugc.aweme:id/avatar")),
              _0x3dd5ae = _0x57ee69.bounds().centerX(),
              _0xf8a438 = _0x57ee69.bounds().centerY();
            log("跳转页面:用户中心");
            click(_0x3dd5ae, _0xf8a438);
            sleep(4000);
            _0x3bbd76.addRunData("visit");
            _0x3e4385.usercenterAction(_0x39a568, _0x5babee);
            log("跳转页面:评论区");
            sleep(1000);
            back();
            sleep(2000);
          }
        }
        if (_0x855fb > 15) {
          log("多次未匹配到，跳过此评论区");
          break;
        }
        if (text("暂时没有更多了").findOnce()) {
          break;
        }
        if (text("部分评论来自其他子版本，因评论者未选择同步抖音，暂不支持查看").findOnce()) {
          break;
        }
        if (text("已折叠部分评论").findOnce()) {
          break;
        }
        if (textEndsWith("点击评论").findOnce()) {
          break;
        }
        var _0x34b679 = textEndsWith("条评论").findOnce(),
          _0x30ec62 = device.width * 0.4 + random(-50, 50),
          _0x579c0a = device.height * 0.8 + random(-50, 50),
          _0x127e48 = device.width * 0.6 + random(-50, 50),
          _0x209479 = _0x34b679 != null ? _0x34b679.bounds().centerY() + 50 : device.height * 0.4;
        log("滑动页面:评论区");
        _0xaa60bb.swipeRandom(_0x30ec62, _0x579c0a, _0x127e48, _0x209479, 2000);
        sleep(1000);
      }
      log("评论操作:此评论区结束");
    };
    _0x3e4385.usercenterAction = function (_0x39edc6, _0xba4cd6) {
      sleep(3000);
      var _0x3ff1cb = _0x3e4385.getInfo1();
      if (_0x3ff1cb.shipinCount == 0) {
        return false;
      }
      if (!_0x3eb549.isPrivateOrBan()) {
        return false;
      }
      if (_0x3ff1cb.sexSwitch && _0xaa60bb.requestScreenCapture()) {
        if (_0x3eb549.watchUserSex() != _0x3ff1cb.sex) {
          log("性别不符:");
          return;
        }
      }
      log("信息同步中");
      var _0x1ad931 = _0x3eb549.watchUercenterInfo();
      _0x1ad931.keyWord = _0x39edc6;
      _0x1ad931.tel = "";
      var _0x2d5172 = _0x4059c5.getLoginInfo();
      _0x413384.jztk({
        category: "评论拓客",
        source: "DY",
        code: _0x2d5172.jihuoma,
        tiktok_id: _0x1ad931.id,
        tiktok_nickname: _0x1ad931.name,
        tiktok_comment: _0x1ad931.keyWord,
        comment_time: _0xba4cd6,
        tel: _0x1ad931.tel
      });
      return true;
    };
    _0x3e4385.getCommentTime = function (_0x2bbcf3) {
      var _0x181fca = _0x2bbcf3.findOne(textMatches(/^((0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))$/));
      if (_0x181fca == null) {
        return "";
      }
      return _0x181fca.text();
    };
    _0x3e4385.isContain = function (_0x49232c, _0x497181) {
      try {
        var _0x5e62ca = _0x497181.split("\n").filter(function (_0x5b87bb) {
            return _0x5b87bb !== "";
          }),
          _0x4b9250 = _0x49232c.findOne(id("com.ss.android.ugc.aweme:id/content")),
          _0x279915 = "";
        _0x4b9250 != null && (_0x279915 = _0x3e4385.filterContent(_0x4b9250.text()));
        log("评论内容:" + _0x279915);
        for (var _0x513944 in _0x5e62ca) {
          var _0x24bbab = _0x5e62ca[_0x513944];
          if (_0x279915.includes(_0x24bbab)) {
            log("触发关键词:" + _0x24bbab);
            var _0x48751c = "关键词:[" + _0x24bbab + "]---------评论内容:[" + _0x279915 + "]";
            return _0x48751c;
          }
        }
        return false;
      } catch (_0x35d8ce) {
        log("isContain", _0x35d8ce);
        return false;
      }
    };
    _0x3e4385.isareaContain = function (_0x437a76, _0x3b0454) {
      try {
        if (_0x3b0454 == "") {
          return true;
        }
        var _0x2e8ff7 = _0x3b0454.split("\n"),
          _0x244901 = _0x437a76.findOne(textStartsWith("·"));
        if (_0x244901 == null) {
          return false;
        }
        var _0x45aeb0 = _0x244901.text();
        for (var _0x399564 in _0x2e8ff7) {
          var _0x29da79 = _0x2e8ff7[_0x399564];
          if (_0x45aeb0.includes(_0x29da79)) {
            log("地区触发:" + _0x29da79);
            var _0x4b7f1a = "关键词:[" + _0x29da79 + "]---------地区:[" + _0x45aeb0 + "]";
            return _0x4b7f1a;
          }
        }
        log("地区未触发:" + _0x45aeb0);
        return false;
      } catch (_0xf69248) {
        log("isContain", _0xf69248);
        return false;
      }
    };
    _0x3e4385.filterContent = function (_0x3a90da) {
      var _0x242985 = "",
        _0x50484a = 1;
      for (var _0x50ead2 = 0; _0x50ead2 < _0x3a90da.length; _0x50ead2++) {
        var _0x32a35e = _0x3a90da.charAt(_0x50ead2);
        if (_0x32a35e == "@") {
          _0x50484a = -1;
          continue;
        }
        if (_0x32a35e == "") {
          _0x50484a = 1;
          continue;
        }
        _0x50484a == 1 && (_0x242985 += _0x32a35e);
      }
      return _0x242985;
    };
    _0x3e4385.getNewUser = function (_0x1f4308) {
      try {
        log("获取用户");
        var _0x61672e = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x2cc240) {
            return _0x2cc240.bounds().width() > 0 && _0x2cc240.bounds().height() > 0;
          }),
          _0x41abbe = _0x61672e.findOne(3000);
        if (_0x41abbe == null) {
          return null;
        }
        for (var _0x3a2595 = 0; _0x3a2595 < _0x41abbe.childCount(); _0x3a2595++) {
          var _0x4c9a02 = _0x41abbe.child(_0x3a2595),
            _0x28f305 = _0x4c9a02.getContentDescription();
          if (_0x28f305 != null && _0x1f4308.indexOf(_0x28f305) == -1) {
            var _0x2cf9e6 = _0x4c9a02.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
            if (_0x2cf9e6.bounds().height() >= _0x2cf9e6.bounds().width() - 30) {
              _0x1f4308.push(_0x28f305);
              return _0x4c9a02;
            }
          }
        }
        return null;
      } catch (_0x54ef1e) {}
    };
  }
  _0x545db9.exports = _0x194a09;
}, function (_0x5c5b59, _0x493f8a, _0x49c1b6) {
  function _0x2c72cc(_0x2b6273) {
    var _0x1ba849 = this,
      _0x551b7f = _0x49c1b6(1),
      _0x2a726e = new (_0x49c1b6(4))(),
      _0x57683b = new (_0x49c1b6(5))();
    _0x1ba849.index = function () {
      _0x1ba849.view();
    };
    _0x1ba849.view = function () {
      var _0x595c8c = _0x551b7f.bgColor,
        _0xa4e711 = _0x595028.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"团购拓客\"bg=\"".concat(_0x595c8c, "\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"设置评论区关键字，点击进入团购店铺->用户评价->查看全部页面启动，对评论区、含有设定关键字评论的用户进行团购拓客，可在管理后台查看运行数据\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0xa4e711, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n\n<verticalpadding=\"2\"marginTop=\"10\"id=\"bg1\"bg=\"#ffffff\">\n\n<horizontalweightSum=\"10\"padding=\"10000\"bg=\"#ffffff\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"执行个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"105200\"w=\"*\"bg=\"#ffffff\">\n<horizontalh=\"25\"gravity=\"left|center\"bg=\"#ffffff\">\n<textw=\"auto\"textColor=\"black\"text=\"评论关键词换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"2\"id=\"keyWords\"bg=\"#ffffff\"/>\n</vertical>\n\n</vertical>\n\n<buttonid=\"start\"bg=\"").concat(_0x595c8c, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x595028.setBackgroundRoundedRectangle(ui.bg1);
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x2d88ff = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x2d88ff,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x2d88ff);
        }).show();
      });
      ui._backButton.click(function () {
        _0x2b6273.view(1);
      });
      var _0x491f14 = _0x1ba849.getInfo1();
      ui.keyWords.setText(_0x491f14.keyWords + "");
      ui.shipinCount.setText(_0x491f14.shipinCount + "");
      ui.start.click(function () {
        var _0x23f317 = {
          shipinCount: ui.shipinCount.text(),
          keyWords: ui.keyWords.text()
        };
        _0x1ba849.saveInfo1(_0x23f317);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x1ba849.start();
        }).on("negative", function () {}).show();
      });
    };
    var _0x7397ad = storages.create("wzke:tgtk");
    _0x1ba849.getInfo1 = function () {
      var _0x26d9b9 = _0x7397ad.get("info1");
      _0x26d9b9 == undefined && (_0x26d9b9 = {}, _0x26d9b9.keyWords = "互关\n粉丝\n抱团", _0x26d9b9.shipinCount = 100, _0x7397ad.put("info1", _0x26d9b9));
      _0x26d9b9.shipinCount == undefined && (_0x26d9b9.shipinCount = 100);
      return _0x26d9b9;
    };
    _0x1ba849.saveInfo1 = function (_0x52d768) {
      _0x7397ad.put("info1", _0x52d768);
    };
    var _0xbbabdd = new (_0x49c1b6(3))(),
      _0x595028 = _0x49c1b6(0),
      _0x3078f4 = new (_0x49c1b6(2))();
    this.start = function () {
      if (!_0x595028.checkServer() || !_0xbbabdd.launchApp()) {
        return false;
      }
      _0x595028.showConsole("团购拓客");
      _0x3078f4.index();
      _0x3078f4.ClickListener({
        clickStart: function _0x5374cf() {
          threads.start(function () {
            _0x1ba849.startAction();
          });
        },
        clickStop: function _0x317903() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x2b4eb0() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x3078f4.close();
            _0x595028.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x1ba849.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0xbbabdd.closeTip();
      var _0x5f5c08 = _0x1ba849.getInfo1(),
        _0x26e624 = _0x5f5c08.shipinCount,
        _0x3e1750 = 1,
        _0x343cc0 = device.width * 0.7 + random(0, 20),
        _0x1d1b2f = device.height * 0.7,
        _0x420f99 = device.width * 0.8 + random(20, 40),
        _0x3d0a28 = device.height * 0.2,
        _0xc6aad2 = function _0x584633() {
          var _0x42ef1f = text("全部").desc("全部").className("com.lynx.tasm.behavior.ui.text.UIText").findOnce(),
            _0x437173 = id("android:id/content").className("android.widget.FrameLayout").findOnce();
          if (_0x437173) {
            var _0x4f10f0 = _0x437173.child(1).child(0).child(0).child(0);
            if (_0x4f10f0) {
              var _0x1bde73 = _0x4f10f0.find(className("com.bytedance.ies.xelement.text.text.LynxTextUI").visibleToUser().filter(function (_0x3ba69a) {
                return _0x42ef1f ? _0x3ba69a.bounds().centerY() > _0x42ef1f.bounds().bottom && _0x3ba69a.bounds().centerY() < device.height * 0.8 : true;
              }));
              _0x1bde73.forEach(function (_0x17e179, _0x1965b1) {
                var _0x1821d5 = _0x1ba849.isContain(_0x17e179.text(), _0x5f5c08.keyWords);
                if (_0x1821d5 != false) {
                  log("进入评价详情" + _0x1965b1);
                  click(_0x17e179.bounds().centerX(), _0x17e179.bounds().centerY());
                  sleep(3000);
                  var _0x58529d = className("com.lynx.tasm.behavior.ui.LynxFlattenUI").filter(function (_0x1f9fc8) {
                    return _0x1f9fc8.indexInParent() === 19;
                  }).findOnce();
                  if (_0x58529d) {
                    toast("点击头像，请保持左上方用户头像没有被遮挡");
                    click(_0x58529d.bounds().centerX(), _0x58529d.bounds().centerY());
                    sleep(3000);
                    var _0x5a6309 = className("com.lynx.tasm.behavior.ui.LynxFlattenUI").filter(function (_0x4d0a69) {
                      return _0x4d0a69.indexInParent() === 26;
                    }).findOnce();
                    if (_0x5a6309) {
                      log("进入用户中心");
                      click(_0x5a6309.bounds().centerX(), _0x5a6309.bounds().centerY());
                      sleep(3000);
                      _0x1ba849.usercenterAction(_0x1821d5, "");
                      _0x3e1750++;
                      if (desc("更多").findOne(3000)) {
                        back();
                      }
                      sleep(3000);
                    }
                    if (text("主页").desc("主页").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").findOne(3000)) {
                      back();
                    }
                    sleep(3000);
                  }
                  if (text("评价详情").desc("评价详情").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").findOne(3000)) {
                    back();
                  }
                  sleep(3000);
                }
              });
            }
          } else {
            log("未识别到用户评价页面，请检查当前界面或运行版本");
          }
          _0x42ea23 = random(400, 600);
          _0x595028.swipeRandom(_0x343cc0, _0x1d1b2f, _0x420f99, _0x3d0a28, _0x42ea23);
          sleep(2000);
          if (_0x3e1750 > _0x26e624) {
            return 0;
          }
          if (text("已折叠对你帮助不大的评价").desc("已折叠对你帮助不大的评价").className("com.lynx.tasm.behavior.ui.text.FlattenUIText").findOnce()) {
            log("评论区结束");
            return 0;
          }
        },
        _0x42ea23,
        _0x1c810e;
      while (true) {
        _0x1c810e = _0xc6aad2();
        if (_0x1c810e === 0) {
          break;
        }
      }
      home();
      log("任务完成");
      threads.shutDownAll();
    };
    _0x1ba849.usercenterAction = function (_0x1bc940) {
      var _0x2bcabe = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      log("信息同步中");
      var _0x3dff07 = _0xbbabdd.watchUercenterInfo();
      _0x3dff07.keyWord = _0x1bc940;
      _0x3dff07.tel = "";
      var _0xa1dbfc = _0x2a726e.getLoginInfo();
      _0x57683b.jztk({
        category: "团购拓客",
        source: "DY",
        code: _0xa1dbfc.jihuoma,
        tiktok_id: _0x3dff07.id,
        tiktok_nickname: _0x3dff07.name,
        tiktok_comment: _0x3dff07.keyWord,
        comment_time: _0x2bcabe,
        tel: _0x3dff07.tel
      });
      return true;
    };
    _0x1ba849.getCommentTime = function (_0xf8130d) {
      var _0x439018 = _0xf8130d.findOne(textMatches(/^((0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))|(\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]))$/));
      if (_0x439018 == null) {
        return "";
      }
      return _0x439018.text();
    };
    _0x1ba849.isContain = function (_0x3fc649, _0x18d22b) {
      try {
        var _0x7387f0 = _0x18d22b.split("\n").filter(function (_0x2f0b1b) {
          return _0x2f0b1b !== "";
        });
        log("评论内容:" + _0x3fc649);
        for (var _0x2b3936 in _0x7387f0) {
          var _0x29c544 = _0x7387f0[_0x2b3936];
          if (_0x3fc649.includes(_0x29c544)) {
            log("触发关键词:" + _0x29c544);
            var _0x4c329a = "关键词:[" + _0x29c544 + "]---------评论内容:[" + _0x3fc649 + "]";
            return _0x4c329a;
          }
        }
        return false;
      } catch (_0x2a0fc8) {
        log("isContain", _0x2a0fc8);
        return false;
      }
    };
  }
  _0x5c5b59.exports = _0x2c72cc;
}, function (_0x384740, _0x33e008, _0x5b0c36) {
  var _0x160abb = _0x5b0c36(0),
    _0x4b8e48 = _0x5b0c36(7);
  function _0xe7eea7(_0x52316d) {
    var _0x382487 = this,
      _0x54e874 = _0x5b0c36(1),
      _0x5451f9 = new (_0x5b0c36(6))(),
      _0x13f0a8 = "智能引流";
    this.index = function () {
      _0x382487.view();
    };
    this.view = function () {
      var _0x4ab817 = _0x54e874.bgColor,
        _0x3c3ea8 = _0x5daa9a.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"".concat(_0x13f0a8, "\"bg=\"").concat(_0x4ab817, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在推荐页启动，自动进入粉丝列表浏览作品，筛选精准群体互动引流\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x3c3ea8, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"点赞数量\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"like\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关注数量\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"follow\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论数量\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"comment\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalid=\"defultWords_show\">\n<SwitchWidget-Se7enid=\"defultWords\"marginTop=\"5\"padding='88'checked='true'text='使用默认话术'trackColor='#e91e63'background='#ffffff'/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"观看时长（秒）\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"watchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"watchTimeMax\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n</vertical>\n</card>\n\n<buttonid=\"start\"bg=\"").concat(_0x4ab817, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n\n</ScrollView>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n\n<cardid=\"mainbg2\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n<verticalpaddingLeft=\"20\">\n<texttextColor=\"black\"text=\"评论内容（换行隔开,多条随机）:\"/>\n<inputpadding=\"02302\"hint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"pinglunWords\"bg=\"#ffffff\"/>\n</vertical>\n</vertical>\n</card>\n<buttonid=\"saveShipin\"bg=\"").concat(_0x4ab817, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x160abb.setBackgroundRoundedRectangle(ui.mainbg);
      _0x160abb.setBackgroundRoundedRectangle(ui.mainbg2);
      ui.viewpager.setTitles(["基础设置", "话术设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x54e874.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x54e874.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x52316d.view(1);
      });
      ui.start.click(function () {
        var _0x2290f1 = {
          like: ui.like.text(),
          follow: ui.follow.text(),
          comment: ui.comment.text()
        };
        _0x382487.saveBaseInfo(_0x2290f1);
        _0x382487.saveShipinClick(ui);
        dialogs.build({
          title: "确认开始吗？",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x382487.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
      _0x382487.initBaseInfo(ui);
      _0x382487.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x382487.saveShipinClick(ui);
      });
    };
    this.end = function () {
      _0xf4cf45.stopAnimation();
      threads.shutDownAll();
    };
    var _0x4fc69e = new (_0x5b0c36(3))(),
      _0x5daa9a = _0x5b0c36(0),
      _0xf4cf45 = new (_0x5b0c36(2))();
    this.start = function () {
      if (!_0x5daa9a.checkServer()) {
        return false;
      }
      if (!_0x4fc69e.launchApp()) {
        return false;
      }
      _0x5daa9a.showConsole(_0x13f0a8 + ":", device.width * 0.5, device.height * 0.15);
      log("注意-粉丝列表开始运行-");
      _0xf4cf45.index();
      _0xf4cf45.ClickListener({
        clickStart: function _0x5058b6() {
          threads.start(function () {
            sleep(1000);
            _0x382487.zidongAction();
            sleep(1000);
            _0x382487.action();
          });
        },
        clickStop: function _0x21d67a() {
          _0x382487.end();
        },
        clickExit: function _0x170214() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x382487.end();
            _0xf4cf45.close();
            _0x5daa9a.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.zidongAction = function () {
      for (var _0x380f7d = 0; _0x380f7d < 10; _0x380f7d++) {
        var _0xd0f6c = _0x4fc69e.jumpMainToFensi("J2.zidong");
        if (_0xd0f6c) {
          break;
        }
      }
    };
    this.action = function () {
      _0x4fc69e.closeTip();
      threads.start(function () {
        var _0x5c0107 = 0,
          _0x2f99ae = 0,
          _0x5b13c1 = 0,
          _0x3d5196 = _0x382487.getBaseInfo(),
          _0xe7d22d = 0;
        _0x4fc69e.watchStart("主任务开始", 1);
        while (_0x5c0107 < _0x3d5196.like || _0x2f99ae < _0x3d5196.follow || _0x5b13c1 < _0x3d5196.comment) {
          while (1) {
            var _0x192205 = _0x382487.getNewObj();
            sleep(1000);
            if (_0x192205 == null) {
              _0xe7d22d++;
              break;
            } else {
              _0xe7d22d = 0;
            }
            sleep(1000);
            log("页面跳转：进入用户中心");
            _0x192205.click();
            sleep(3000);
            var _0x3d5196 = _0x382487.getBaseInfo(),
              _0x563ff1 = _0x382487.getShipinData();
            if (_0x4fc69e.isPrivateOrBan()) {
              var _0x1b2152 = _0x4fc69e.getUsercenter_data("关注"),
                _0x268c3f = _0x4fc69e.getUsercenter_data("粉丝");
              if (_0x1b2152 > _0x268c3f) {
                var _0x57516e = _0x4fc69e.getUsercenter_zuopin();
                if (_0x57516e > 50) {
                  var _0x506979 = _0x4fc69e.JumpUsercenterToFirstzuopin(true);
                  if (_0x506979[0]) {
                    if (_0x506979[1]) {
                      _0x4fc69e.watchSleep("观看时长", parseInt(random(_0x563ff1.watchTimeMin, _0x563ff1.watchTimeMax)));
                      _0x4fc69e.clickDianzan();
                      _0x5c0107++;
                      _0x4b8e48.addRunData("like");
                      sleep(3000);
                    } else {
                      var _0x2c7132 = _0x4fc69e.getDianZanShu(),
                        _0x4f0ea5 = _0x4fc69e.getZuopinPubdate();
                      if (_0x2c7132 > 200 || !_0x382487.checkDiffInDays(_0x4f0ea5)) {
                        log("此视频不满足条件");
                        _0x4fc69e.watchSleep("观看时长", parseInt(random(3, 6)));
                      } else {
                        _0x4fc69e.watchSleep("观看时长", parseInt(random(_0x563ff1.watchTimeMin, _0x563ff1.watchTimeMax)));
                        var _0x3952ca = [1, 2, 3];
                        if (_0x5c0107 >= _0x3d5196.like) {
                          _0x3952ca = _0x3952ca.filter(function (_0x42104a) {
                            return _0x42104a !== 1;
                          });
                        }
                        if (_0x2f99ae >= _0x3d5196.follow) {
                          _0x3952ca = _0x3952ca.filter(function (_0x359e2d) {
                            return _0x359e2d !== 2;
                          });
                        }
                        if (_0x5b13c1 >= _0x3d5196.comment) {
                          _0x3952ca = _0x3952ca.filter(function (_0x218d9a) {
                            return _0x218d9a !== 3;
                          });
                        }
                        var _0x3578e1 = 0;
                        _0x3952ca.length !== 0 && (_0x3578e1 = _0x3952ca[Math.floor(Math.random() * _0x3952ca.length)]);
                        switch (_0x3578e1) {
                          case 1:
                            _0x4fc69e.clickDianzan();
                            _0x5c0107++;
                            _0x4b8e48.addRunData("like");
                            sleep(3000);
                            break;
                          case 2:
                            _0x4fc69e.clickGuanzhu();
                            _0x2f99ae++;
                            _0x4b8e48.addRunData("follow");
                            sleep(3000);
                            break;
                          case 3:
                            _0x563ff1.pinglunWords != "" && _0x4fc69e.clickPinlunqu() && (_0x4fc69e.pinglun(_0x563ff1.pinglunWords, _0x563ff1.defultWords), log("页面跳转：关闭评论区"), back(), sleep(2000));
                            _0x5b13c1++;
                            break;
                          default:
                            break;
                        }
                      }
                    }
                    log("页面跳转：返回用户中心");
                    back();
                    sleep(2000);
                  }
                } else {
                  log("此用户不满足条件");
                  sleep(2000);
                }
              } else {
                log("此用户不满足条件");
                sleep(2000);
              }
            }
            sleep(1000);
            log("页面跳转：返回粉丝列表");
            back();
            sleep(2000);
          }
          if (_0xe7d22d > 8) {
            log("页面异常重新启动");
            _0xe7d22d = 0;
            _0x382487.zidongAction();
            _0x382487.action();
            break;
          }
          swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
          sleep(1000);
        }
        _0x5c0107 >= _0x3d5196.like && _0x2f99ae >= _0x3d5196.follow && _0x5b13c1 >= _0x3d5196.comment && (log("本次任务结束"), _0x382487.end());
      });
    };
    var _0x76d4dc = [];
    this.getNewObj = function () {
      var _0x22421e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _0x76d4dc.length > 50 && _0x76d4dc.shift();
      try {
        var _0x7fc0f8 = null,
          _0x4da97f = className("androidx.recyclerview.widget.RecyclerView").find();
        for (var _0x3ac6c8 = 0; _0x3ac6c8 < _0x4da97f.length; _0x3ac6c8++) {
          var _0x36a641 = _0x4da97f[_0x3ac6c8];
          if (_0x36a641.bounds().width() > 0 && _0x36a641.bounds().height() > 0) {
            _0x7fc0f8 = _0x36a641;
            break;
          }
        }
        if (_0x7fc0f8 == null) {
          log("获取用户：异常");
          return null;
        }
        for (var _0x2f34ac = 0; _0x2f34ac < _0x7fc0f8.childCount(); _0x2f34ac++) {
          var _0x583426 = _0x7fc0f8.child(_0x2f34ac);
          if (_0x583426.childCount() >= 2) {
            if (_0x583426.child(2).childCount() == 0) {
              continue;
            }
          }
          var _0x24f46d = _0x583426.findOne(className("android.widget.TextView")),
            _0x578057 = _0x24f46d.text();
          if (_0x76d4dc.indexOf(_0x578057) == -1 && _0x24f46d.text() != "发现好友" && _0x24f46d.text() != "暂时没有更多了") {
            if (_0x22421e) {
              var _0x17e17e = _0x583426.child(1).child(0).childCount();
              if (_0x17e17e == 2) {
                log("蓝V用户=" + _0x578057);
                _0x76d4dc.push(_0x578057);
                return _0x583426;
              }
            } else {
              log("用户=" + _0x578057);
              _0x76d4dc.push(_0x578057);
              return _0x583426;
            }
          }
        }
        return null;
      } catch (_0x137f10) {
        log("获取用户：异常");
        return null;
      }
    };
    this.checkDiffInDays = function (_0x504028) {
      if (_0x504028) {
        var _0x493bb7 = new Date(),
          _0x29e142 = new Date(_0x504028),
          _0x20bd8c = 86400000,
          _0x39010a = Math.abs(_0x493bb7 - _0x29e142),
          _0x44aa19 = Math.floor(_0x39010a / _0x20bd8c);
        return _0x44aa19 <= 7;
      }
      return false;
    };
    var _0x3a099b = storages.create("wzke:znyl");
    this.getBaseInfo = function () {
      var _0x47a69c = _0x3a099b.get("baseinfo");
      if (_0x47a69c == undefined) {
        _0x47a69c = {};
        _0x47a69c.like = 80;
        _0x47a69c.follow = 20;
        _0x47a69c.comment = 50;
        _0x3a099b.put("baseinfo", _0x47a69c);
      } else {
        if (_0x47a69c.like == undefined) {
          _0x47a69c.like = 80;
        }
        if (_0x47a69c.follow == undefined) {
          _0x47a69c.follow = 20;
        }
        if (_0x47a69c.comment == undefined) {
          _0x47a69c.comment = 50;
        }
        _0x3a099b.put("baseinfo", _0x47a69c);
      }
      return _0x3a099b.get("baseinfo");
    };
    this.initBaseInfo = function (_0xf367c6) {
      var _0x3cbf48 = _0x382487.getBaseInfo();
      _0xf367c6.like.setText(_0x3cbf48.like.toString());
      _0xf367c6.follow.setText(_0x3cbf48.follow.toString());
      _0xf367c6.comment.setText(_0x3cbf48.comment.toString());
    };
    this.saveBaseInfo = function (_0x2652e6) {
      _0x3a099b.put("baseinfo", _0x2652e6);
    };
    _0x382487.initShipinView = function (_0x443835) {
      try {
        var _0x5a10fd = _0x382487.getShipinData();
        _0x443835.watchTimeMin.setText(_0x5a10fd.watchTimeMin + "");
        _0x443835.watchTimeMax.setText(_0x5a10fd.watchTimeMax + "");
        _0x443835.pinglunWords.setText(_0x5a10fd.pinglunWords + "");
        _0x443835.defultWords.checked = _0x5a10fd.defultWords;
      } catch (_0x506efa) {
        log("initShipinView", _0x506efa);
      }
    };
    _0x382487.getShipinData = function () {
      var _0x19a306 = {
        watchTimeMin: _0x3a099b.get("watchTimeMin") != undefined ? _0x3a099b.get("watchTimeMin") : 3,
        watchTimeMax: _0x3a099b.get("watchTimeMax") != undefined ? _0x3a099b.get("watchTimeMax") : 18,
        pinglunWords: _0x3a099b.get("pinglunWords") != undefined ? _0x3a099b.get("pinglunWords") : _0x5451f9.pinglun,
        defultWords: _0x3a099b.get("defultWords") != undefined ? _0x3a099b.get("defultWords") : true
      };
      return _0x19a306;
    };
    _0x382487.saveShipinClick = function (_0x5627b0) {
      _0x3a099b.put("watchTimeMin", parseInt(_0x5627b0.watchTimeMin.text()));
      _0x3a099b.put("watchTimeMax", parseInt(_0x5627b0.watchTimeMax.text()));
      _0x3a099b.put("pinglunWords", _0x5627b0.pinglunWords.text());
      _0x3a099b.put("defultWords", _0x5627b0.defultWords.checked);
      toast("保存成功");
    };
  }
  _0x384740.exports = _0xe7eea7;
}, function (_0x45746a, _0x2d92d2, _0x30e04e) {
  function _0x4996ec(_0x2e680e) {
    var _0x1b4595 = this,
      _0x4d5571 = _0x30e04e(1),
      _0x480052 = new (_0x30e04e(6))(),
      _0x16cbf8 = _0x4d5571.bgColor,
      _0x420e0b = new (_0x30e04e(4))(),
      _0x3a538b = new (_0x30e04e(5))(),
      _0x251280 = _0x30e04e(7);
    _0x1b4595.index = function () {
      _0x1b4595.view();
    };
    _0x1b4595.view = function () {
      var _0x2b69a5 = _0x120757.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"评论浏览\"bg=\"".concat(_0x16cbf8, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"提前设置好关键字，在视频播放页启动，自动观看视频，对评论区含有关键字用户进行互动，精准拓客\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x2b69a5, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n\n<verticalpadding=\"2\"marginTop=\"10\"id=\"bg1\"bg=\"#ffffff\">\n<horizontalweightSum=\"10\"padding=\"10000\"bg=\"#ffffff\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"浏览视频个数\"bg=\"#ffffff\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\"bg=\"#ffffff\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"最大评论楼层\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"deepMax\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"plDianzanSwitch\"marginRight=\"10\"marginTop=\"5\"padding='108'checked='true'text='评论楼层喜欢'trackColor='#003366'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"105200\"w=\"*\"bg=\"#ffffff\">\n<horizontalh=\"25\"gravity=\"left|center\"bg=\"#ffffff\">\n<textw=\"auto\"textColor=\"black\"text=\"关键词换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"2\"id=\"keyWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"105200\"w=\"*\"bg=\"#ffffff\">\n<horizontalh=\"25\"gravity=\"left|center\"bg=\"#ffffff\">\n<textw=\"auto\"textColor=\"black\"text=\"地区筛选换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"areaWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"areaWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"2\"id=\"areaWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\"bg=\"#ffffff\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"楼层执行间隔\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"bg=\"#ffffff\">\n<inputpaddingRight=\"20\"minWidth=\"40\"gravity=\"center\"id=\"timeMin\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<textpaddingRight=\"20\"textColor=\"black\"text=\"秒\"/>\n</horizontal>\n</horizontal>\n\n</vertical>\n\n<buttonid=\"start\"bg=\"").concat(_0x16cbf8, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n<SwitchWidget-Se7enalpha=\"0\"id=\"caijiSwitch\"marginRight=\"10\"marginTop=\"5\"padding='108'checked='true'text='观察模式'trackColor='#003366'background='#ffffff'/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"浏览作品设置\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"浏览作品个数\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"喜欢作品概率（%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"shipinDianzanRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"评论作品概率（%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"shipinPinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<verticalpadding=\"20000\">\n<textmarginTop=\"5\"textColor=\"black\"text=\"评论内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"pinglunWords\"bg=\"#ffffff\"/>\n</vertical>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"saveShipin\"bg=\"").concat(_0x16cbf8, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<texttext=\"私信设置\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"sixinSwitch\"marginTop=\"5\"padding='88'checked='true'text='开启私信'trackColor='#003366'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"70\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关注概率\"/>\n<inputpaddingRight=\"10\"layout_weight=\"7\"gravity=\"right\"id=\"guanzhuRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"（%）\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"sexSwitch\"marginTop=\"5\"padding='88'checked='false'text='性别筛选'trackColor='#2196f3'background='#ffffff'/>\n\n<frameh=\"0dp\"id=\"sexView\"padding=\"1010\">\n<textw=\"auto\"h=\"30dp\"layout_gravity=\"left\">性别:</text>\n<spinnerw=\"auto\"h=\"30dp\"layout_gravity=\"right\"id=\"sex\"entries=\"女|男\"/>\n</frame>\n\n<texttext=\"*筛选性别男女\"/>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalweightSum=\"10\"padding=\"10\">\n<texttextColor=\"black\"text=\"私信内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"sixinWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<buttonid=\"save3\"bg=\"").concat(_0x16cbf8, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n</vertical>\n\n</ScrollView>\n\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["基础设置", "观看设置", "浏览作品", "私信设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x4d5571.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x4d5571.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui.run(function () {
        activity.window.setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      });
      ui.videoCommentWordsCopy.click(function () {
        setClip(ui.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      ui.videoCommentWordsPaste.click(function () {
        var _0x473b51 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x473b51,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.videoCommentWords.setText(_0x473b51);
        }).show();
      });
      ui.areaWordsCopy.click(function () {
        setClip(ui.areaWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: ui.areaWords.text(),
          positive: "好的"
        }).show();
      });
      ui.areaWordsPaste.click(function () {
        var _0x2bbae8 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x2bbae8,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          ui.areaWords.setText(_0x2bbae8);
        }).show();
      });
      ui.caijiSwitch.on("check", function (_0x59fbad) {
        var _0x235849 = _0x420e0b.getLoginInfo();
        _0x59fbad && _0x235849.oemOn == 1 && (ui.caijiSwitch.checked = true);
        _0x59fbad && _0x235849.oemOn != 1 && (ui.caijiSwitch.checked = false, toast("非Oem用户,无法开启"));
      });
      ui._backButton.click(function () {
        _0x2e680e.view(1);
      });
      ui.sexSwitch.on("check", function (_0x2b22b7) {
        _0x2b22b7 ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      var _0x39fd2b = _0x1b4595.getInfo1();
      ui.count.setText(_0x39fd2b.count + "");
      ui.deepMax.setText(_0x39fd2b.deepMax + "");
      ui.plDianzanSwitch.checked = _0x39fd2b.plDianzanSwitch;
      ui.caijiSwitch.checked = _0x39fd2b.caijiSwitch;
      ui.keyWords.setText(_0x39fd2b.keyWords + "");
      ui.areaWords.setText(_0x39fd2b.areaWords + "");
      ui.timeMin.setText(_0x39fd2b.timeMin + "");
      ui.start.click(function () {
        var _0x27347b = {
          count: parseInt(ui.count.text()),
          deepMax: parseInt(ui.deepMax.text()),
          plDianzanSwitch: ui.plDianzanSwitch.checked,
          caijiSwitch: false,
          keyWords: ui.keyWords.text(),
          areaWords: ui.areaWords.text(),
          timeMin: parseInt(ui.timeMin.text())
        };
        _0x1b4595.saveInfo1(_0x27347b);
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x1b4595.start();
        }).on("negative", function () {}).show();
      });
      _0x1b4595.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x1b4595.saveShipinClick(ui);
      });
      var _0x2362ac = _0x1b4595.getInfo3();
      ui.sixinSwitch.checked = _0x2362ac.sixinSwitch;
      ui.guanzhuRate.setText(_0x2362ac.guanzhuRate + "");
      ui.sixinWords.setText(_0x2362ac.sixinWords);
      ui.sexSwitch.checked = _0x2362ac.sexSwitch;
      ui.sex.setSelection(_0x2362ac.sex);
      ui.save3.on("click", function () {
        var _0x4b9a40 = {
          sixinSwitch: ui.sixinSwitch.checked,
          guanzhuRate: ui.guanzhuRate.text(),
          sixinWords: ui.sixinWords.text(),
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition()
        };
        _0x1b4595.saveInfo3(_0x4b9a40);
        alert("保存成功");
      });
    };
    var _0x586ab7 = storages.create("wzke:J1");
    _0x1b4595.getInfo1 = function () {
      var _0x543705 = _0x586ab7.get("info1");
      _0x543705 == undefined && (_0x543705 = {}, _0x543705.deepMax = 10, _0x543705.plDianzanSwitch = true, _0x543705.caijiSwitch = false, _0x543705.keyWords = "互关\n粉丝\n抱团", _0x543705.timeMin = 2, _0x586ab7.put("info1", _0x543705));
      if (_0x543705.count == undefined) {
        _0x543705.count = 100;
      }
      if (_0x543705.plDianzanSwitch == undefined) {
        _0x543705.plDianzanSwitch = true;
      }
      if (_0x543705.caijiSwitch == undefined) {
        _0x543705.caijiSwitch = false;
      }
      if (_0x543705.timeMin == undefined) {
        _0x543705.timeMin = 2;
      }
      if (_0x543705.deepMax == undefined) {
        _0x543705.deepMax = 10;
      }
      if (_0x543705.areaWords == undefined) {
        _0x543705.areaWords = "";
      }
      return _0x543705;
    };
    _0x1b4595.saveInfo1 = function (_0x4c338b) {
      _0x586ab7.put("info1", _0x4c338b);
    };
    _0x1b4595.getInfo3 = function () {
      var _0x325d89 = _0x586ab7.get("info3");
      if (_0x325d89 == undefined) {
        var _0x325d89 = {};
        _0x325d89.sixinSwitch = false;
        _0x325d89.guanzhuRate = 100;
        _0x325d89.sixinWords = "你好\n好啊\n1";
        _0x325d89.sexSwitch = false;
        _0x325d89.sex = 0;
        _0x586ab7.put("info3", _0x325d89);
      }
      _0x325d89.guanzhuRate == undefined && (_0x325d89.guanzhuRate = 100);
      _0x325d89.sexSwitch == undefined && (_0x325d89.sexSwitch = false);
      _0x325d89.sex == undefined && (_0x325d89.sex = 0);
      _0x586ab7.put("info3", _0x325d89);
      return _0x586ab7.get("info3");
    };
    _0x1b4595.saveInfo3 = function (_0x5e44c7) {
      _0x586ab7.put("info3", _0x5e44c7);
    };
    var _0x473186 = new (_0x30e04e(3))(),
      _0x120757 = _0x30e04e(0),
      _0x149742 = new (_0x30e04e(2))();
    this.start = function () {
      if (!_0x120757.checkServer() || !_0x473186.launchApp()) {
        return false;
      }
      _0x120757.showConsole("评论浏览");
      _0x149742.index();
      _0x149742.ClickListener({
        clickStart: function _0x5e0fd5() {
          threads.start(function () {
            _0x1b4595.startAction();
          });
        },
        clickStop: function _0x557874() {
          toastLog("停止");
          threads.shutDownAll();
        },
        clickExit: function _0x1df79a() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            toastLog("停止");
            threads.shutDownAll();
            _0x149742.close();
            _0x120757.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x1b4595.startAction = function () {
      log("开始任务");
      sleep(1000);
      _0x473186.closeTip();
      var _0x3abaf9 = _0x1b4595.getInfo1(),
        _0x440b79 = _0x3abaf9.count;
      for (var _0x14c16b = 1; _0x14c16b <= _0x440b79; _0x14c16b++) {
        log("当前执行:", _0x14c16b);
        _0x473186.getViewType() == "视频" && _0x473186.getPinglunShu() > 0 && _0x473186.clickPinlunqu() && (_0x1b4595.pinglunquAction(), _0x473186.closePinlunquOnce());
        _0x120757.actionSwipUp();
        sleep(1000);
      }
      log("任务结束");
    };
    _0x1b4595.pinglunquAction = function () {
      var _0x603df9 = [],
        _0x1169ce = _0x1b4595.getInfo1(),
        _0x5b20ba = _0x1169ce.deepMax;
      while (_0x5b20ba > 0) {
        while (_0x5b20ba > 0) {
          var _0x2228f4 = _0x1b4595.getNewUser(_0x603df9);
          if (_0x2228f4 == null) {
            break;
          }
          log("评论个数:", _0x5b20ba);
          _0x5b20ba--;
          var _0x360746 = _0x1b4595.isContain(_0x2228f4, _0x1169ce.keyWords),
            _0x2612d8 = _0x1b4595.isareaContain(_0x2228f4, _0x1169ce.areaWords);
          if (_0x360746 != false && _0x2612d8 != false) {
            _0x473186.watchSleep("观看评论:", _0x1169ce.timeMin);
            if (_0x1169ce.plDianzanSwitch) {
              var _0x3c0c95 = _0x2228f4.findOne(clickable(true).className("android.view.ViewGroup"));
              _0x3c0c95 != null && (_0x3c0c95.click(), log("评论区赞：成功"), sleep(2000));
            }
            var _0x5dac42 = _0x2228f4.findOne(id("com.ss.android.ugc.aweme:id/avatar")),
              _0x2d4375 = _0x5dac42.bounds().centerX(),
              _0x4ab75f = _0x5dac42.bounds().centerY();
            log("跳转页面:用户中心");
            click(_0x2d4375, _0x4ab75f);
            sleep(4000);
            _0x251280.addRunData("visit");
            _0x1b4595.usercenterAction(_0x360746);
            log("跳转页面:评论区");
            sleep(1000);
            back();
            sleep(2000);
          }
          if (_0x5b20ba <= 0) {
            break;
          }
          sleep(1000);
        }
        if (text("暂时没有更多了").findOnce()) {
          break;
        }
        if (text("部分评论来自其他子版本，因评论者未选择同步抖音，暂不支持查看").findOnce()) {
          break;
        }
        if (text("已折叠部分评论").findOnce()) {
          break;
        }
        if (textEndsWith("点击评论").findOnce()) {
          break;
        }
        if (_0x5b20ba <= 0) {
          break;
        }
        var _0x3926f2 = textEndsWith("条评论").findOnce(),
          _0x8da266 = device.width * 0.4 + random(-50, 50),
          _0x4ab587 = device.height * 0.8 + random(-50, 50),
          _0x32737b = device.width * 0.6 + random(-50, 50),
          _0x2b0269 = _0x3926f2 != null ? _0x3926f2.bounds().centerY() + 50 : device.height * 0.4;
        log("滑动页面:评论区");
        _0x120757.swipeRandom(_0x8da266, _0x4ab587, _0x32737b, _0x2b0269, 2000);
        sleep(1000);
      }
      log("评论操作:此评论区结束");
    };
    _0x1b4595.usercenterAction = function (_0x1ebae7) {
      sleep(3000);
      var _0x4dcc7a = _0x1b4595.getInfo1(),
        _0x237c2d = _0x1b4595.getShipinData(),
        _0x5a2e96 = _0x1b4595.getInfo3();
      if (_0x237c2d.shipinCount == 0 && _0x5a2e96.sixinSwitch == false && _0x4dcc7a.caijiSwitch == false && _0x5a2e96.guanzhuRate <= 0) {
        return false;
      }
      if (!_0x473186.isPrivateOrBan()) {
        return false;
      }
      if (_0x4dcc7a.caijiSwitch) {
        var _0x4e0de7 = _0x473186.watchUercenterInfo();
        _0x4e0de7.keyWord = _0x1ebae7;
        _0x4e0de7.tel = "";
        var _0x453aea = _0x420e0b.getLoginInfo();
        _0x3a538b.msg10003({
          loginInfo: _0x453aea,
          userinfo: _0x4e0de7,
          type: "评论观看"
        });
        return true;
      }
      if (_0x5a2e96.sexSwitch && _0x120757.requestScreenCapture() && _0x473186.watchUserSex() != _0x5a2e96.sex) {
        log("性别不符:");
        return;
      }
      if (random(1, 100) < _0x5a2e96.guanzhuRate) {
        _0x473186.clickUsercenterGuanzhu();
      }
      if (_0x5a2e96.sixinSwitch) {
        _0x473186.actionUesrCenterSixin(_0x5a2e96.sixinWords);
      }
      var _0x1ffb8e = _0x473186.watchUserCenterZuopinShu();
      if (_0x1ffb8e < _0x237c2d.shipinCount) {
        _0x237c2d.shipinCount = _0x1ffb8e;
      }
      if (_0x237c2d.shipinCount > 0 && _0x473186.JumpUsercenterToFirstzuopin()) {
        for (var _0x5ec94f = 1; _0x5ec94f <= _0x237c2d.shipinCount; _0x5ec94f++) {
          log("视频观看:第" + _0x5ec94f + "个:", _0x237c2d.shipinCount);
          _0x473186.watchSleep("观看间隔", 2);
          random(1, 100) <= _0x237c2d.shipinDianzanRate ? (log("触发喜欢"), _0x473186.clickDianzan()) : log("未触发喜欢");
          random(1, 100) <= _0x237c2d.shipinPinglunRate && _0x473186.clickPinlunqu() ? (_0x473186.pinglun(_0x237c2d.pinglunWords), log("跳转页面:关闭评论区"), sleep(1000), back(), sleep(2000)) : log("未触发评论");
          if (_0x5ec94f > _0x237c2d.shipinCount) {
            break;
          }
          _0x473186.closePinlunquOnce();
          _0x120757.actionSwipUp();
        }
        log("跳转页面:返回用户中心");
        sleep(1000);
        back();
        sleep(2000);
      }
    };
    _0x1b4595.isContain = function (_0x49d962, _0x17a266) {
      try {
        var _0x1dc955 = _0x17a266.split("\n"),
          _0x4791c5 = _0x49d962.findOne(id("com.ss.android.ugc.aweme:id/content")),
          _0x43cab8 = "";
        _0x4791c5 != null && (_0x43cab8 = _0x1b4595.filterContent(_0x4791c5.text()));
        log("评论内容:" + _0x43cab8);
        for (var _0x125c1c in _0x1dc955) {
          var _0x1b92d5 = _0x1dc955[_0x125c1c];
          if (_0x43cab8.includes(_0x1b92d5)) {
            log("触发关键词:" + _0x1b92d5);
            var _0x65f83 = "关键词:[" + _0x1b92d5 + "]---------评论内容:[" + _0x43cab8 + "]";
            return _0x65f83;
          }
        }
        return false;
      } catch (_0x1a8d48) {
        log("isContain", _0x1a8d48);
        return false;
      }
    };
    _0x1b4595.isareaContain = function (_0x54457a, _0x1700c5) {
      try {
        if (_0x1700c5 == "") {
          return true;
        }
        var _0x3a8e83 = _0x1700c5.split("\n"),
          _0x42a2a0 = _0x54457a.findOne(textStartsWith("·"));
        if (_0x42a2a0 == null) {
          return false;
        }
        var _0x400ece = _0x42a2a0.text();
        for (var _0x585940 in _0x3a8e83) {
          var _0x5d3042 = _0x3a8e83[_0x585940];
          if (_0x400ece.includes(_0x5d3042)) {
            log("地区触发:" + _0x5d3042);
            var _0x476cb8 = "关键词:[" + _0x5d3042 + "]---------地区:[" + _0x400ece + "]";
            return _0x476cb8;
          }
        }
        log("地区未触发:" + _0x400ece);
        return false;
      } catch (_0x2852be) {
        log("isContain", _0x2852be);
        return false;
      }
    };
    _0x1b4595.filterContent = function (_0x145036) {
      var _0x473a87 = "",
        _0x451b6c = 1;
      for (var _0x52572a = 0; _0x52572a < _0x145036.length; _0x52572a++) {
        var _0x19a0f4 = _0x145036.charAt(_0x52572a);
        if (_0x19a0f4 == "@") {
          _0x451b6c = -1;
          continue;
        }
        if (_0x19a0f4 == "") {
          _0x451b6c = 1;
          continue;
        }
        _0x451b6c == 1 && (_0x473a87 += _0x19a0f4);
      }
      return _0x473a87;
    };
    _0x1b4595.getNewUser = function (_0x5ccea8) {
      log("获取用户:");
      var _0x19a025 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x3c4237) {
          return _0x3c4237.bounds().width() > 0 && _0x3c4237.bounds().height() > 0;
        }),
        _0xb08816 = _0x19a025.findOne(3000);
      if (_0xb08816 == null) {
        return null;
      }
      for (var _0x387ee2 = 0; _0x387ee2 < _0xb08816.childCount(); _0x387ee2++) {
        var _0x5498bd = _0xb08816.child(_0x387ee2),
          _0x23c70f = _0x5498bd.getContentDescription();
        if (_0x23c70f != null && _0x5ccea8.indexOf(_0x23c70f) == -1) {
          var _0x44a3f2 = _0x5498bd.findOne(id("com.ss.android.ugc.aweme:id/avatar"));
          if (_0x44a3f2.bounds().height() >= _0x44a3f2.bounds().width() - 30) {
            _0x5ccea8.push(_0x23c70f);
            return _0x5498bd;
          }
        }
      }
      return null;
    };
    _0x1b4595.initShipinView = function (_0xfa2ea2) {
      try {
        var _0x207e48 = _0x1b4595.getShipinData();
        _0xfa2ea2.shipinCount.setText(_0x207e48.shipinCount + "");
        _0xfa2ea2.shipinDianzanRate.setText(_0x207e48.shipinDianzanRate + "");
        _0xfa2ea2.shipinPinglunRate.setText(_0x207e48.shipinPinglunRate + "");
        _0xfa2ea2.pinglunWords.setText(_0x207e48.pinglunWords + "");
      } catch (_0x15c363) {
        log("initShipinView", _0x15c363);
      }
    };
    _0x1b4595.getShipinData = function () {
      var _0x3ba67f = {
        shipinCount: _0x586ab7.get("shipinCount") != undefined ? _0x586ab7.get("shipinCount") : 1,
        shipinDianzanRate: _0x586ab7.get("shipinDianzanRate") != undefined ? _0x586ab7.get("shipinDianzanRate") : 100,
        shipinPinglunRate: _0x586ab7.get("shipinPinglunRate") != undefined ? _0x586ab7.get("shipinPinglunRate") : 100,
        pinglunWords: _0x586ab7.get("pinglunWords") != undefined ? _0x586ab7.get("pinglunWords") : _0x480052.pinglun
      };
      return _0x3ba67f;
    };
    _0x1b4595.saveShipinClick = function (_0x1533e3) {
      var _0x30c69d = {
        shipinCount: _0x1533e3.shipinCount.text(),
        shipinDianzanRate: _0x1533e3.shipinDianzanRate.text(),
        shipinPinglunRate: _0x1533e3.shipinPinglunRate.text(),
        pinglunWords: _0x1533e3.pinglunWords.text()
      };
      _0x1b4595.saveShipinData(_0x30c69d);
      dialogs.build({
        title: "保存成功",
        content: "",
        negative: "确定"
      }).on("negative", function () {}).show();
    };
    _0x1b4595.saveShipinData = function (_0x4c97ce) {
      _0x586ab7.put("shipinCount", parseInt(_0x4c97ce.shipinCount));
      _0x586ab7.put("shipinDianzanRate", parseInt(_0x4c97ce.shipinDianzanRate));
      _0x586ab7.put("shipinPinglunRate", parseInt(_0x4c97ce.shipinPinglunRate));
      _0x586ab7.put("pinglunWords", _0x4c97ce.pinglunWords);
    };
  }
  _0x45746a.exports = _0x4996ec;
}, function (_0x3b09ae, _0x1a4b6c, _0x55e3a4) {
  var _0x5e4daf = _0x55e3a4(0),
    _0x45e0ac = _0x55e3a4(7);
  function _0x30542f(_0x43a0fa) {
    var _0x134005 = this,
      _0x4ef6ae = _0x55e3a4(1),
      _0xb29ddb = new (_0x55e3a4(6))(),
      _0x3e07cf = "粉丝浏览";
    _0x134005.loginInfo = "";
    _0x134005.opt = "";
    this.index = function (_0x8857b) {
      _0x134005.opt = _0x8857b;
      var _0x18993b = new (_0x55e3a4(4))();
      _0x134005.loginInfo = _0x18993b.getLoginInfo();
      _0x134005.view();
    };
    this.view = function () {
      var _0x49bfa2 = _0x4ef6ae.bgColor,
        _0x2c719b = "在指定账号粉丝列表启动，对指定账号粉丝概率互动，精准增f";
      (_0x134005.opt == "J2_2" || _0x134005.opt == "HS1_2" || _0x134005.opt == "JS1_2") && (_0x2c719b = "在推荐页启动，对指定账号粉丝概率互动，曝光增f");
      var _0x59d952 = _0x14f974.getVersionName("com.ss.android.ugc.aweme");
      switch (_0x134005.opt) {
        case "J2":
          _0x3e07cf = "粉丝浏览";
          _0x59d952 = _0x14f974.getVersionName("com.ss.android.ugc.aweme");
          break;
        case "J2_2":
          _0x3e07cf = "智能浏览";
          break;
        case "HS1":
          _0x3e07cf = "粉丝观看";
          _0x59d952 = _0x14f974.getVersionName("com.ss.android.ugc.live");
          break;
        case "HS1_2":
          _0x3e07cf = "智能浏览";
          _0x59d952 = _0x14f974.getVersionName("com.ss.android.ugc.live");
          break;
        case "JS1_2":
          _0x3e07cf = "智能浏览";
          break;
      }
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"".concat(_0x3e07cf, "\"bg=\"").concat(_0x49bfa2, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalpadding=\"16\">\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在指定账号粉丝列表启动，对指定账号粉丝概率互动\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x59d952, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"执行个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"主页浏览（秒）\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"timeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"timeMax\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"观看时长（秒）\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"watchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"watchTimeMax\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<verticalid=\"telSwitch2_show\">\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<SwitchWidget-Se7enid=\"telSwitch2\"marginTop=\"5\"padding='88'checked='true'text='自动进入粉丝列表'trackColor='#e91e63'background='#ffffff'/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalid=\"defultWords_show\">\n<SwitchWidget-Se7enid=\"defultWords\"marginTop=\"5\"padding='88'checked='true'text='使用默认话术'trackColor='#e91e63'background='#ffffff'/>\n</vertical>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<SwitchWidget-Se7enid=\"switch3\"marginTop=\"5\"padding='88'checked='true'text='自由观看'trackColor='#e91e63'background='#ffffff'/>\n<verticalid=\"switch3content\"weightSum=\"10\"paddingLeft=\"8\">\n<textmargin='0800'text=\"参数（概率触发一种，合计100%）：\"/>\n<horizontalmarginLeft=\"16\">\n<texttextSize=\"10\"text=\"头像\"/><inputid=\"hr1\"inputType=\"number\"text=\"5\"/><texttextSize=\"8\"text=\"%\"/>\n<texttextSize=\"10\"text=\"，关注\"/><inputid=\"hr2\"inputType=\"number\"text=\"0\"/><texttextSize=\"8\"text=\"%\"/>\n<texttextSize=\"10\"text=\"，视频赞\"/><inputid=\"hr3\"inputType=\"number\"text=\"25\"/><texttextSize=\"8\"text=\"%\"/>\n<texttextSize=\"10\"text=\"，评论赞\"/><inputid=\"hr4\"inputType=\"number\"text=\"0\"/><texttextSize=\"8\"text=\"%\"/>\n</horizontal>\n<horizontalmarginLeft=\"16\">\n\n<texttextSize=\"10\"text=\"评论\"/><inputid=\"hr5\"inputType=\"number\"text=\"0\"/><texttextSize=\"8\"text=\"%\"/>\n<texttextSize=\"10\"text=\"，收藏\"/><inputid=\"hr6\"inputType=\"number\"text=\"5\"/><texttextSize=\"8\"text=\"%\"/>\n<texttextSize=\"10\"text=\"，留痕\"/><inputid=\"hr7\"inputType=\"number\"text=\"60\"/><texttextSize=\"8\"text=\"%\"/>\n</horizontal>\n\n<textmargin='0800'text=\"筛选：\"/>\n<horizontalmarginLeft=\"16\">\n<texttextSize=\"10\"text=\"粉丝数\"/><inputid=\"hr21\"inputType=\"number\"text=\"1\"/><texttextSize=\"10\"text=\"到\"/><inputid=\"hr22\"inputType=\"number\"text=\"20000\"/>\n</horizontal>\n\n</vertical>\n</vertical>\n</card>\n\n<buttonid=\"start\"bg=\"").concat(_0x49bfa2, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n\n</ScrollView>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n\n<cardid=\"mainbg2\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"看作品数\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"作品喜欢概率（%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"shipinDianzanRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"作品评论概率（%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"shipinPinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalpaddingLeft=\"20\">\n<texttextColor=\"black\"text=\"评论内容（换行隔开,多条随机）:\"/>\n<inputpadding=\"02302\"hint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"pinglunWords\"bg=\"#ffffff\"/>\n</vertical>\n\n</vertical>\n</card>\n<buttonid=\"saveShipin\"bg=\"").concat(_0x49bfa2, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n<ScrollView>\n<verticalpadding=\"10\"bg=\"#ffffff\">\n\n<cardid=\"mainbg3\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n\n<SwitchWidget-Se7enid=\"lanvSwitch\"marginTop=\"5\"padding='88'checked='false'text='蓝V筛选'trackColor='#2196f3'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"iconSwitch\"marginTop=\"5\"padding='88'checked='false'text='头像喜欢'trackColor='#2196f3'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"guanzhuSwitch\"marginTop=\"5\"padding='88'checked='true'text='开启关注'trackColor='#e91e63'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"sixinSwitch\"marginTop=\"5\"padding='88'checked='true'text='开启私信'trackColor='#003366'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalweightSum=\"10\"padding=\"10\">\n<texttextColor=\"black\"text=\"私信内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"sixinWords\"bg=\"#ffffff\"/>\n</vertical>\n\n</vertical>\n</card>\n<buttonid=\"save3\"bg=\"").concat(_0x49bfa2, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n\n</ScrollView>\n\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x5e4daf.setBackgroundRoundedRectangle(ui.mainbg);
      _0x5e4daf.setBackgroundRoundedRectangle(ui.mainbg2);
      _0x5e4daf.setBackgroundRoundedRectangle(ui.mainbg3);
      ui.viewpager.setTitles(["基础设置", "浏览设置", "私信设置"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x4ef6ae.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x4ef6ae.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x43a0fa.view(1);
      });
      ui.switch3.on("check", function (_0x22b9df) {
        _0x22b9df ? ui.switch3content.attr("h", "wrap_content") : ui.switch3content.attr("h", "0");
      });
      ui.start.click(function () {
        var _0x5c1327 = {
          count: ui.count.text(),
          timeMin: ui.timeMin.text(),
          timeMax: ui.timeMax.text(),
          telSwitch2: ui.telSwitch2.checked,
          switch3: ui.switch3.checked
        };
        _0x134005.saveBaseInfo(_0x5c1327);
        _0x134005.saveAutodata(ui);
        _0x134005.saveShipinClick(ui);
        dialogs.build({
          title: "确认开始吗？",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x134005.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      var _0x2d9ec5 = _0x134005.getBaseInfo();
      ui.count.setText(_0x2d9ec5.count + "");
      ui.timeMin.setText(_0x2d9ec5.timeMin + "");
      ui.timeMax.setText(_0x2d9ec5.timeMax + "");
      ui.telSwitch2.checked = _0x2d9ec5.telSwitch2;
      _0x134005.opt == "J2" && (ui.telSwitch2.checked = false, ui.telSwitch2_show.attr("h", "0"));
      _0x134005.opt == "J2_2" && (ui.telSwitch2.checked = true);
      _0x134005.opt == "HS1" && (ui.telSwitch2.checked = false, ui.telSwitch2_show.attr("h", "0"));
      _0x134005.opt == "HS1_2" && (ui.telSwitch2.checked = true);
      _0x134005.opt == "JS1" && (ui.telSwitch2.checked = false, ui.telSwitch2_show.attr("h", "0"));
      _0x134005.opt == "JS1_2" && (ui.telSwitch2.checked = true);
      ui.switch3.checked = _0x2d9ec5.switch3;
      _0x2d9ec5.switch3 ? ui.switch3content.attr("h", "wrap_content") : ui.switch3content.attr("h", "0");
      _0x134005.initAutodata(ui);
      _0x134005.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x134005.saveShipinClick(ui);
      });
      try {
        var _0x35f429 = _0x134005.getInfo3();
        ui.iconSwitch.checked = _0x35f429.iconSwitch;
        ui.sixinSwitch.checked = _0x35f429.sixinSwitch;
        ui.guanzhuSwitch.checked = _0x35f429.guanzhuSwitch;
        ui.sixinWords.setText(_0x35f429.sixinWords);
        ui.lanvSwitch.checked = _0x35f429.lanvSwitch;
      } catch (_0x13e694) {
        log("info3Init", _0x13e694);
      }
      ui.save3.on("click", function () {
        var _0x54a123 = {
          iconSwitch: ui.iconSwitch.checked,
          sixinSwitch: ui.sixinSwitch.checked,
          guanzhuSwitch: ui.guanzhuSwitch.checked,
          sixinWords: ui.sixinWords.text(),
          lanvSwitch: ui.lanvSwitch.checked
        };
        var _0x1c0232 = "";
        _0x134005.saveInfo3(_0x54a123);
        alert("保存成功", _0x1c0232);
      });
    };
    this.end = function () {
      _0x215b06.stopAnimation();
      threads.shutDownAll();
    };
    var _0x1849dd = new (_0x55e3a4(3))(),
      _0x14f974 = _0x55e3a4(0),
      _0x215b06 = new (_0x55e3a4(2))();
    this.start = function () {
      if (!_0x14f974.checkServer()) {
        return false;
      }
      if (_0x134005.opt == "HS1" || _0x134005.opt == "HS1_2") {
        if (!_0x1849dd.launchAppHs()) {
          return false;
        }
      } else {
        if (_0x134005.opt == "JS1" || _0x134005.opt == "JS1_2") {
          if (!_0x1849dd.launchAppJS()) {
            return false;
          }
        } else {
          if (!_0x1849dd.launchApp()) {
            return false;
          }
        }
      }
      var _0x11e5a3 = _0x134005.getBaseInfo();
      _0x14f974.showConsole(_0x3e07cf + ":", device.width * 0.5, device.height * 0.15);
      log("注意-粉丝列表开始运行-", _0x134005.loginInfo.level);
      _0x11e5a3.count == 1024 && _0x134005.loginInfo.level == 3 && log("高级权限");
      _0x375dbc = [];
      _0x3df60d = _0x11e5a3.count;
      _0x215b06.index();
      _0x215b06.ClickListener({
        clickStart: function _0x541c09() {
          threads.start(function () {
            _0x11e5a3.telSwitch2 && (sleep(1000), _0x134005.zidongAction(), sleep(1000));
            _0x134005.action();
          });
        },
        clickStop: function _0xb16965() {
          _0x134005.end();
        },
        clickExit: function _0x520270() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x134005.end();
            _0x215b06.close();
            _0x14f974.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.zidongAction = function () {
      for (var _0x484e6b = 0; _0x484e6b < 10; _0x484e6b++) {
        var _0x5d041f = _0x1849dd.jumpMainToFensi("J2.zidong");
        if (_0x5d041f) {
          break;
        }
      }
    };
    var _0x3df60d = 0;
    this.action = function () {
      var _0x5d142b = _0x134005.getInfo3();
      _0x1849dd.closeTip();
      var _0x2409cf = _0x134005.getBaseInfo();
      log("baseInfo.count=", _0x2409cf.count);
      threads.start(function () {
        _0x1849dd.watchStart("主任务开始", 1);
        _0x43a0fa.isRequestScreenCapture == false && _0x2409cf.count == 1024 && _0x134005.loginInfo.level == 3 && (_0x14f974.requestScreenCapture(), _0x43a0fa.isRequestScreenCapture = true);
        var _0x202102 = 0;
        while (1) {
          while (_0x3df60d > 0) {
            log("执行数量:" + _0x3df60d);
            var _0x1aa25c = _0x134005.getNewObj(_0x5d142b.lanvSwitch);
            sleep(1000);
            if (_0x1aa25c == null) {
              _0x202102++;
              break;
            } else {
              _0x202102 = 0;
            }
            sleep(1000);
            log("页面跳转：进入用户中心");
            _0x1aa25c.click();
            sleep(3000);
            _0x2409cf.count == 1024 && _0x134005.loginInfo.level == 3 ? _0x134005.memberAction() : _0x134005.action2();
            sleep(1000);
            log("页面跳转：返回粉丝列表");
            back();
            sleep(2000);
            _0x3df60d--;
          }
          if (_0x3df60d <= 0) {
            log("count<=0");
            break;
          }
          if (text("暂时没有更多了").findOne(500) || textContains("暂不支持查看").findOne(500) || text("发现更多你可能认识的人").findOne(500) || textEndsWith("点击评论").findOne(500)) {
            if (_0x2409cf.telSwitch2) {
              _0x134005.zidongAction();
              _0x134005.action();
              return;
            }
            log("暂时没有更多了|暂不支持查看|发现更多你可能认识的人");
            break;
          }
          if (_0x202102 > 10) {
            _0x202102 = 0;
            if (_0x2409cf.telSwitch2) {
              _0x134005.zidongAction();
              _0x134005.action();
              return;
            }
            log("界面异常，请重新启动");
            break;
          }
          swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
          sleep(1000);
        }
        log("本次任务结束");
        _0x134005.end();
      });
    };
    _0x134005.action2 = function () {
      if (!_0x1849dd.isPrivateOrBan()) {
        return false;
      }
      var _0x27a137 = _0x134005.getBaseInfo(),
        _0xdc03f6 = _0x134005.getShipinData(),
        _0x1413b6 = _0x134005.getInfo3(),
        _0x1bbb51 = _0x1413b6.sixinWords,
        _0x159951 = _0x1bbb51.split("\n");
      if (_0x27a137.switch3) {
        var _0xc3e94b = _0x134005.getAutodata(),
          _0x1a4171 = _0x1849dd.getUsercenter_data("粉丝");
        if (_0x1a4171 < _0xc3e94b.hr21 || _0x1a4171 > _0xc3e94b.hr22) {
          log(_0x1a4171, _0xc3e94b.hr21, _0xc3e94b.hr22);
          log("粉丝数不符合");
          return;
        }
        _0x1849dd.watchSleep("主页浏览:", random(parseInt(_0x27a137.timeMin), parseInt(_0x27a137.timeMax)));
        _0x45e0ac.addRunData("visit");
        _0x1849dd.action_usercenter_1(_0xdc03f6.pinglunWords, _0xc3e94b.hr1, _0xc3e94b.hr2, _0xc3e94b.hr3, _0xc3e94b.hr4, _0xc3e94b.hr5, _0xc3e94b.hr6, _0xc3e94b.hr7, random(parseInt(_0xdc03f6.watchTimeMin), parseInt(_0xdc03f6.watchTimeMax)));
        return;
      }
      if (_0xdc03f6.shipinCount == 0 && !_0x1413b6.sixinSwitch && !_0x1413b6.iconSwitch && !_0x1413b6.guanzhuSwitch) {
        return false;
      }
      _0x1849dd.watchSleep("主页浏览:", random(parseInt(_0x27a137.timeMin), parseInt(_0x27a137.timeMax)));
      _0x45e0ac.addRunData("visit");
      if (_0x1413b6.lanvSwitch) {
        if (!_0x1849dd.isUserCenterLanV()) {
          return false;
        }
      }
      _0x1413b6.iconSwitch && _0x1849dd.jumpUsercenterTouxiang();
      _0x1413b6.guanzhuSwitch && (_0x1849dd.clickUsercenterGuanzhu(), _0x45e0ac.addRunData("follow"));
      if (_0x1413b6.sixinSwitch && _0x1849dd.JumpUsercenterToMore() && _0x1849dd.JumpMoreToFasixin()) {
        var _0x53eea5 = _0x159951[random(0, _0x159951.length - 1)];
        _0x53eea5 != "" && _0x1849dd.textSend(_0x53eea5);
        back();
        sleep(2000);
      }
      var _0x41ec51 = _0xdc03f6.shipinCount;
      if (_0x41ec51 > 0 && _0x1849dd.JumpUsercenterToFirstzuopin()) {
        var _0x5e21c0 = 1;
        while (_0x5e21c0 <= _0x41ec51) {
          log("视频观看:第" + _0x5e21c0 + "个");
          _0x5e21c0++;
          _0x1849dd.watchSleep("观看时长", parseInt(random(_0xdc03f6.watchTimeMin, _0xdc03f6.watchTimeMax)));
          random(1, 100) <= _0xdc03f6.shipinDianzanRate ? (log("喜欢：触发"), _0x1849dd.clickDianzan(), _0x45e0ac.addRunData("like")) : (log("喜欢：未触发"), sleep(1000));
          random(1, 100) <= _0xdc03f6.shipinPinglunRate ? _0xdc03f6.pinglunWords != "" && _0x1849dd.clickPinlunqu() && (_0x1849dd.pinglun(_0xdc03f6.pinglunWords, _0xdc03f6.defultWords), log("页面跳转：关闭评论区"), back(), sleep(2000)) : (log("评论：未触发"), sleep(1000));
          if (_0x5e21c0 > _0x41ec51) {
            break;
          }
          _0x14f974.actionSwipUp();
        }
        log("页面跳转：返回用户中心");
        back();
        sleep(2000);
      }
      sleep(2000);
    };
    _0x134005.memberAction = function () {
      var _0x20a6cf = false;
      if (!_0x1849dd.isPrivateOrBan()) {
        return false;
      }
      var _0x19f4ef = _0x1849dd.getUsercenter_data("粉丝");
      if (_0x19f4ef > 20000) {
        log("粉丝数不符合");
        return;
      }
      if (_0x1849dd.jumpUsercenterToPhone()) {
        _0x20a6cf = true;
        _0x1849dd.backShipinToPostionPhone();
        return;
      }
      var _0x183dc2 = 6;
      if (_0x1849dd.JumpUsercenterToFirstzuopin() == false) {
        return false;
      }
      var _0x1d04a0 = 0;
      while (_0x1d04a0 < _0x183dc2) {
        if (_0x1849dd.jumpShipinToPostionPhone()) {
          _0x20a6cf = true;
          _0x1849dd.backShipinToPostionPhone();
          break;
        }
        _0x1849dd.clickPinlunqu() && (_0x1849dd.isPinglunquPhone() && (_0x20a6cf = true), log("页面跳转：关闭评论区"), back(), sleep(2000));
        _0x1d04a0++;
        if (_0x1d04a0 >= _0x183dc2 || _0x20a6cf == true) {
          break;
        }
        _0x14f974.actionSwipUp();
      }
      log("页面跳转：返回用户中心");
      back();
      sleep(2000);
      _0x20a6cf && (_0x1849dd.actioSwiperDown(), _0x14f974.captureScreen_and_save());
    };
    var _0x375dbc = [];
    this.getNewObj = function () {
      var _0x29d923 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      _0x375dbc.length > 50 && _0x375dbc.shift();
      try {
        var _0x124d8b = null,
          _0x4a49b8 = className("androidx.recyclerview.widget.RecyclerView").find();
        for (var _0x155f3d = 0; _0x155f3d < _0x4a49b8.length; _0x155f3d++) {
          var _0x17e33f = _0x4a49b8[_0x155f3d];
          if (_0x17e33f.bounds().width() > 0 && _0x17e33f.bounds().height() > 0) {
            _0x124d8b = _0x17e33f;
            break;
          }
        }
        if (_0x124d8b == null) {
          return null;
        }
        for (var _0x14ca5e = 0; _0x14ca5e < _0x124d8b.childCount(); _0x14ca5e++) {
          var _0x229e6b = _0x124d8b.child(_0x14ca5e);
          if (_0x229e6b.childCount() >= 2) {
            if (_0x229e6b.child(2).childCount() == 0) {
              continue;
            }
          }
          var _0x34e4d7 = _0x229e6b.findOne(className("android.widget.TextView")),
            _0x58c715 = _0x34e4d7.text();
          if (_0x375dbc.indexOf(_0x58c715) == -1 && _0x34e4d7.text() != "发现好友" && _0x34e4d7.text() != "暂时没有更多了") {
            if (_0x29d923) {
              var _0x2c90ac = _0x229e6b.child(1).child(0).childCount();
              if (_0x2c90ac == 2) {
                log("蓝V用户=" + _0x58c715);
                _0x375dbc.push(_0x58c715);
                return _0x229e6b;
              }
            } else {
              log("用户=" + _0x58c715);
              _0x375dbc.push(_0x58c715);
              return _0x229e6b;
            }
          }
        }
        return null;
      } catch (_0x74c361) {
        log("获取用户：异常");
        return null;
      }
    };
    this.checkInfo3Conditionn = function (_0x43a36c, _0x6ce161) {
      if (_0x6ce161.totalguanzhu >= _0x43a36c.totalguanzhuMin && _0x6ce161.totalguanzhu <= _0x43a36c.totalguanzhuMax && _0x6ce161.fensi >= _0x43a36c.fensiMin && _0x6ce161.fensi <= _0x43a36c.fensiMax && _0x6ce161.zuopin >= _0x43a36c.zuopinMin && _0x6ce161.zuopin <= _0x43a36c.zuopinMax) {
        log("符合");
        sleep(1000);
        return true;
      }
      log("不符合条件");
      sleep(1000);
      return false;
    };
    var _0x4bba6a = storages.create("wzke:J2");
    this.getBaseInfo = function () {
      var _0x3f172a = _0x4bba6a.get("baseinfo");
      if (_0x3f172a == undefined) {
        _0x3f172a = {};
        _0x3f172a.count = 600;
        _0x3f172a.timeMin = 2;
        _0x3f172a.timeMax = 8;
        _0x3f172a.telSwitch2 = false;
        _0x3f172a.switch3 = true;
        _0x4bba6a.put("baseinfo", _0x3f172a);
      } else {
        if (_0x3f172a.count == undefined) {
          _0x3f172a.count = 600;
        }
        if (_0x3f172a.timeMin == undefined) {
          _0x3f172a.timeMin = 2;
        }
        if (_0x3f172a.timeMax == undefined) {
          _0x3f172a.timeMax = 8;
        }
        if (_0x3f172a.telSwitch2 == undefined) {
          _0x3f172a.telSwitch2 = false;
        }
        if (_0x3f172a.switch3 == undefined) {
          _0x3f172a.switch3 = true;
        }
        _0x4bba6a.put("baseinfo", _0x3f172a);
      }
      return _0x4bba6a.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x4b61a3) {
      _0x4bba6a.put("baseinfo", _0x4b61a3);
    };
    _0x134005.initAutodata = function (_0x40677) {
      try {
        var _0x53b426 = _0x134005.getAutodata();
        _0x40677.hr1.setText(_0x53b426.hr1 + "");
        _0x40677.hr2.setText(_0x53b426.hr2 + "");
        _0x40677.hr3.setText(_0x53b426.hr3 + "");
        _0x40677.hr4.setText(_0x53b426.hr4 + "");
        _0x40677.hr5.setText(_0x53b426.hr5 + "");
        _0x40677.hr6.setText(_0x53b426.hr6 + "");
        _0x40677.hr7.setText(_0x53b426.hr7 + "");
        _0x40677.hr21.setText(_0x53b426.hr21 + "");
        _0x40677.hr22.setText(_0x53b426.hr22 + "");
      } catch (_0x23347a) {
        log("initAutodata", _0x23347a);
      }
    };
    this.getAutodata = function () {
      var _0x44cc94 = {
        hr1: _0x4bba6a.get("hr1") != undefined ? _0x4bba6a.get("hr1") : 0,
        hr2: _0x4bba6a.get("hr2") != undefined ? _0x4bba6a.get("hr2") : 5,
        hr3: _0x4bba6a.get("hr3") != undefined ? _0x4bba6a.get("hr3") : 10,
        hr4: _0x4bba6a.get("hr4") != undefined ? _0x4bba6a.get("hr4") : 15,
        hr5: _0x4bba6a.get("hr5") != undefined ? _0x4bba6a.get("hr5") : 10,
        hr6: _0x4bba6a.get("hr6") != undefined ? _0x4bba6a.get("hr6") : 5,
        hr7: _0x4bba6a.get("hr7") != undefined ? _0x4bba6a.get("hr7") : 55,
        hr21: _0x4bba6a.get("hr21") != undefined ? _0x4bba6a.get("hr21") : 1,
        hr22: _0x4bba6a.get("hr22") != undefined ? _0x4bba6a.get("hr22") : 5000
      };
      return _0x44cc94;
    };
    _0x134005.saveAutodata = function (_0x406e34) {
      _0x4bba6a.put("hr1", parseInt(_0x406e34.hr1.text()));
      _0x4bba6a.put("hr2", parseInt(_0x406e34.hr2.text()));
      _0x4bba6a.put("hr3", parseInt(_0x406e34.hr3.text()));
      _0x4bba6a.put("hr4", parseInt(_0x406e34.hr4.text()));
      _0x4bba6a.put("hr5", parseInt(_0x406e34.hr5.text()));
      _0x4bba6a.put("hr6", parseInt(_0x406e34.hr6.text()));
      _0x4bba6a.put("hr7", parseInt(_0x406e34.hr7.text()));
      _0x4bba6a.put("hr21", parseInt(_0x406e34.hr21.text()));
      _0x4bba6a.put("hr22", parseInt(_0x406e34.hr22.text()));
      toast("保存成功");
    };
    _0x134005.initShipinView = function (_0x27f0a7) {
      try {
        var _0x5ab43f = _0x134005.getShipinData();
        _0x27f0a7.shipinCount.setText(_0x5ab43f.shipinCount + "");
        _0x27f0a7.shipinDianzanRate.setText(_0x5ab43f.shipinDianzanRate + "");
        _0x27f0a7.shipinPinglunRate.setText(_0x5ab43f.shipinPinglunRate + "");
        _0x27f0a7.watchTimeMin.setText(_0x5ab43f.watchTimeMin + "");
        _0x27f0a7.watchTimeMax.setText(_0x5ab43f.watchTimeMax + "");
        _0x27f0a7.pinglunWords.setText(_0x5ab43f.pinglunWords + "");
        _0x27f0a7.defultWords.checked = _0x5ab43f.defultWords;
      } catch (_0x1eb8ac) {
        log("initShipinView", _0x1eb8ac);
      }
    };
    _0x134005.getShipinData = function () {
      var _0x41308e = {
        shipinCount: _0x4bba6a.get("shipinCount") != undefined ? _0x4bba6a.get("shipinCount") : 1,
        shipinDianzanRate: _0x4bba6a.get("shipinDianzanRate") != undefined ? _0x4bba6a.get("shipinDianzanRate") : 100,
        shipinPinglunRate: _0x4bba6a.get("shipinPinglunRate") != undefined ? _0x4bba6a.get("shipinPinglunRate") : 0,
        watchTimeMin: _0x4bba6a.get("watchTimeMin") != undefined ? _0x4bba6a.get("watchTimeMin") : 3,
        watchTimeMax: _0x4bba6a.get("watchTimeMax") != undefined ? _0x4bba6a.get("watchTimeMax") : 18,
        pinglunWords: _0x4bba6a.get("pinglunWords") != undefined ? _0x4bba6a.get("pinglunWords") : _0xb29ddb.pinglun,
        defultWords: _0x4bba6a.get("defultWords") != undefined ? _0x4bba6a.get("defultWords") : true
      };
      return _0x41308e;
    };
    _0x134005.saveShipinClick = function (_0x46924d) {
      _0x4bba6a.put("shipinCount", parseInt(_0x46924d.shipinCount.text()));
      _0x4bba6a.put("shipinDianzanRate", parseInt(_0x46924d.shipinDianzanRate.text()));
      _0x4bba6a.put("shipinPinglunRate", parseInt(_0x46924d.shipinPinglunRate.text()));
      _0x4bba6a.put("watchTimeMin", parseInt(_0x46924d.watchTimeMin.text()));
      _0x4bba6a.put("watchTimeMax", parseInt(_0x46924d.watchTimeMax.text()));
      _0x4bba6a.put("pinglunWords", _0x46924d.pinglunWords.text());
      _0x4bba6a.put("defultWords", _0x46924d.defultWords.checked);
      toast("保存成功");
    };
    this.getInfo3 = function () {
      var _0x380a5e = {
        iconSwitch: false,
        guanzhuSwitch: false,
        sixinSwitch: false,
        sixinWords: "你好\n你好\n你好",
        lanvSwitch: false
      };
      var _0x5b4e63 = _0x4bba6a.get("info3");
      if (_0x5b4e63 == undefined) {
        _0x4bba6a.put("info3", _0x380a5e);
      } else {
        _0x5b4e63.iconSwitch == undefined && (_0x5b4e63.iconSwitch = _0x380a5e.iconSwitch);
        _0x5b4e63.guanzhuSwitch == undefined && (_0x5b4e63.guanzhuSwitch = _0x380a5e.guanzhuSwitch);
        _0x5b4e63.lanvSwitch == undefined && (_0x5b4e63.lanvSwitch = _0x380a5e.lanvSwitch);
        _0x4bba6a.put("info3", _0x5b4e63);
      }
      return _0x4bba6a.get("info3");
    };
    this.saveInfo3 = function (_0x5cbf14) {
      _0x4bba6a.put("info3", _0x5cbf14);
    };
  }
  _0x3b09ae.exports = _0x30542f;
}, function (_0x4f3d4d, _0x1be83a, _0x41c360) {
  function _0x1a31e5(_0x3bf8be) {
    var _0x28c7e4 = this,
      _0xd5bff1 = _0x41c360(1),
      _0x29d3cf = new (_0x41c360(6))();
    this.index = function () {
      _0x28c7e4.view();
    };
    this.view = function () {
      var _0x4e14e3 = _0xd5bff1.bgColor,
        _0x2120ea = _0x2bff2a.getVersionName("com.ss.android.ugc.aweme");
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"直播浏览\"bg=\"".concat(_0x4e14e3, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"直播[在线观众]-进入在线观众列表\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x2120ea, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"执行个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"私信间隔\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputminWidth=\"40\"gravity=\"center\"id=\"timeMin\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\",上限:\"/>\n<inputpaddingRight=\"30\"id=\"timeMax\"gravity=\"right\"minWidth=\"60\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n</vertical>\n</card>\n\n<buttonid=\"start\"bg=\"").concat(_0x4e14e3, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n</vertical>\n</ScrollView>\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"浏览设置\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"看作品数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"浏览间隔\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"watchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"watchTimeMax\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<verticalpadding=\"201000\">\n<texttextColor=\"black\"text=\"评论内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"pinglunWords\"bg=\"#ffffff\"/>\n</vertical>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"saveShipin\"bg=\"").concat(_0x4e14e3, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<texttext=\"私信设置\"margin=\"5\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"guanzhuSwitch\"marginTop=\"10\"padding='88'checked='true'text='开启关注'trackColor='#e91e63'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<SwitchWidget-Se7enid=\"sixinSwitch\"marginTop=\"10\"padding='88'checked='true'text='开启私信'trackColor='#003366'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"sexSwitch\"marginTop=\"10\"padding='88'checked='false'text='性别筛选'trackColor='#2196f3'background='#ffffff'/>\n<frameh=\"0dp\"id=\"sexView\"padding=\"1010\">\n<textw=\"auto\"h=\"30dp\"layout_gravity=\"left\">性别:</text>\n<spinnerw=\"auto\"h=\"30dp\"layout_gravity=\"right\"id=\"sex\"entries=\"女|男\"/>\n</frame>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总获赞数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputminWidth=\"60\"gravity=\"center\"id=\"totalzanMin\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"totalzanMax\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总关注数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"totalguanzhuMin\"minWidth=\"60\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"totalguanzhuMax\"minWidth=\"80\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总粉丝数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"fensiMin\"minWidth=\"60\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"fensiMax\"minWidth=\"80\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总作品数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"zuopinMin\"minWidth=\"60\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputpaddingRight=\"30\"id=\"zuopinMax\"minWidth=\"80\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"总喜欢数\"layout_gravity=\"left|center\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\"paddingRight=\"20\">\n<texttextColor=\"black\"text=\"最低:\"/>\n<inputid=\"xihuanMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"最高:\"/>\n<inputid=\"xihuanMax\"minWidth=\"50\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<texttext=\"*用户屏蔽喜欢,则默认其数字为0\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalweightSum=\"10\"padding=\"10\">\n<texttextColor=\"black\"text=\"私信内容（换行隔开,多条随机）\"/>\n<inputlayout_weight=\"7\"hint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"sixinWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<buttonid=\"save3\"bg=\"").concat(_0x4e14e3, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n\n</ScrollView>\n\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["基础设置", "浏览作品", "私信"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0xd5bff1.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0xd5bff1.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x3bf8be.view(1);
      });
      ui.sexSwitch.on("check", function (_0x38300d) {
        _0x38300d ? ui.sexView.attr("h", "50dp") : ui.sexView.attr("h", "0");
      });
      ui.start.click(function () {
        var _0xe727dd = {
          count: ui.count.text(),
          timeMin: parseInt(ui.timeMin.text()),
          timeMax: parseInt(ui.timeMax.text())
        };
        _0x28c7e4.saveBaseInfo(_0xe727dd);
        dialogs.build({
          title: "确定开始任务吗?",
          positive: "开始任务",
          negative: "取消"
        }).on("positive", function () {
          _0x28c7e4.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      _0x28c7e4.initShipinView(ui);
      ui.saveShipin.click(function () {
        _0x28c7e4.saveShipinClick(ui);
      });
      ui.save3.on("click", function () {
        var _0x3ebd02 = {
          sixinSwitch: ui.sixinSwitch.checked,
          guanzhuSwitch: ui.guanzhuSwitch.checked,
          totalzanMin: ui.totalzanMin.text(),
          totalzanMax: ui.totalzanMax.text(),
          totalguanzhuMin: ui.totalguanzhuMin.text(),
          totalguanzhuMax: ui.totalguanzhuMax.text(),
          fensiMin: ui.fensiMin.text(),
          fensiMax: ui.fensiMax.text(),
          zuopinMin: ui.zuopinMin.text(),
          zuopinMax: ui.zuopinMax.text(),
          xihuanMin: ui.xihuanMin.text(),
          xihuanMax: ui.xihuanMax.text(),
          sixinWords: ui.sixinWords.text(),
          sexSwitch: ui.sexSwitch.checked,
          sex: ui.sex.getSelectedItemPosition()
        };
        var _0x249921 = "";
        _0x249921 += "总获赞:[" + _0x3ebd02.totalzanMin + "-" + _0x3ebd02.totalzanMax + "]\n";
        _0x249921 += "总关注:[" + _0x3ebd02.totalguanzhuMin + "-" + _0x3ebd02.totalguanzhuMax + "]\n";
        _0x249921 += "粉丝:[" + _0x3ebd02.fensiMin + "-" + _0x3ebd02.fensiMax + "]\n";
        _0x249921 += "作品:[" + _0x3ebd02.zuopinMin + "-" + _0x3ebd02.zuopinMax + "]\n";
        _0x249921 += "喜欢:[" + _0x3ebd02.xihuanMin + "-" + _0x3ebd02.xihuanMax + "]\n";
        _0x249921 += "话术:[" + _0x3ebd02.sixinWords + "]\n";
        _0x28c7e4.saveInfo3(_0x3ebd02);
        alert("保存成功", _0x249921);
      });
    };
    this.end = function () {
      toastLog("本次任务结束");
      threads.shutDownAll();
    };
    var _0x4e05ec = new (_0x41c360(3))(),
      _0x2bff2a = _0x41c360(0),
      _0x11d299 = new (_0x41c360(2))();
    this.start = function () {
      if (!_0x2bff2a.checkServer() || !_0x4e05ec.launchApp()) {
        return false;
      }
      _0x2bff2a.showConsole("直播观看");
      log("运行页面:");
      log("直播[在线观众]-点击在线观众");
      log("备注:主播没有粉丝不可见");
      _0x11d299.index();
      _0x11d299.ClickListener({
        clickStart: function _0xa6f880() {
          _0x28c7e4.action();
        },
        clickStop: function _0x1d0f87() {
          _0x28c7e4.end();
        },
        clickExit: function _0x20425e() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x28c7e4.end();
            _0x11d299.close();
            _0x2bff2a.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x362eaa = _0x28c7e4.getInfo3();
      _0x4e05ec.closeTip();
      _0x2bff2a.chenckMonitorEnd(function () {
        _0x28c7e4.end();
      });
      var _0x12ee16 = _0x28c7e4.getBaseInfo(),
        _0x3cf775 = _0x12ee16.count;
      threads.start(function () {
        _0x3bf8be.count1 == 0 && _0x362eaa.sexSwitch && (_0x2bff2a.requestScreenCapture(), _0x3bf8be.count1 = 1);
        var _0x1cb883 = 0;
        while (1) {
          _0x4e05ec.watchStart("观看列表:", 3);
          while (_0x3cf775 > 0) {
            var _0x5edad3 = className("androidx.recyclerview.widget.RecyclerView").findOnce();
            if (_0x5edad3 && _0x5edad3.childCount() > 0) {
              _0x1cb883 = 0;
              var _0x450a84 = _0x5edad3.children().filter(function (_0x36d5b2) {
                return _0x36d5b2.bounds().bottom < device.height * 0.9;
              });
              _0x450a84.forEach(function (_0x1662b5, _0x18c297) {
                if (_0x18c297 == 0 || _0x18c297 == _0x450a84.length - 1) {
                  return;
                }
                _0x4e05ec.watchSleep("观看间隔:直播用户", random(_0x12ee16.timeMin, _0x12ee16.timeMax));
                click(_0x1662b5.bounds().centerX(), _0x1662b5.bounds().centerY());
                log("页面点击:列表用户");
                sleep(2000);
                var _0x301661 = descEndsWith("的头像").className("android.widget.Button").clickable(true).findOne(2000),
                  _0x8b5678 = _0x301661 && _0x301661.click();
                log("页面跳转:用户中心." + _0x8b5678);
                sleep(3000);
                _0x28c7e4.action2();
                sleep(2000);
                back();
                sleep(2000);
                _0x3cf775--;
              });
              break;
            } else {
              _0x1cb883++;
              log("在线观众:null");
              break;
            }
          }
          if (_0x3cf775 <= 0) {
            break;
          }
          if (text("暂时没有更多了").findOne(500) || text("发现更多你可能认识的人").findOne(500) || textEndsWith("点击评论").findOne(500)) {
            log("达到结尾");
            break;
          }
          log("滑动列表");
          var _0x1bf751 = device.width * 0.5,
            _0x11984e = device.height * 0.8,
            _0x10ba89 = device.width * 0.5,
            _0x47a6e2 = device.height * 0.5;
          if (_0x1cb883 >= 3) {
            break;
          }
          _0x2bff2a.swipeRandom(_0x1bf751, _0x11984e, _0x10ba89, _0x47a6e2, 1000);
          sleep(1000);
        }
        _0x28c7e4.end();
      });
    };
    _0x28c7e4.action2 = function () {
      var _0x4a03f8 = _0x28c7e4.getInfo3(),
        _0x303627 = _0x4a03f8.sixinWords,
        _0x6ea3c6 = _0x303627.split("\n"),
        _0x464524 = _0x28c7e4.getShipinData();
      if (_0x464524.shipinCount <= 0 && _0x4a03f8.guanzhuSwitch == false && _0x4a03f8.sixinSwitch == false) {
        log("无操作任务");
        return;
      }
      if (text("帐号已被封禁").findOne(1000)) {
        toastLog("已被封禁");
        return false;
      }
      if (!_0x4e05ec.isPrivateOrBan()) {
        return false;
      }
      if (_0x4a03f8.sexSwitch) {
        var _0x3a6010 = _0x4e05ec.watchUserSex();
        if (_0x3a6010 != _0x4a03f8.sex) {
          toastLog("性别不符");
          return;
        } else {
          toastLog("性别符合");
        }
      }
      var _0x4efc2f = desc("更多").findOne(1000);
      if (_0x4efc2f == null) {
        toastLog("自己");
        return false;
      }
      var _0x205a87 = _0x4e05ec.watchUercenterInfo(false);
      if (_0x28c7e4.checkInfo3Conditionn(_0x4a03f8, _0x205a87)) {
        _0x4a03f8.guanzhuSwitch && _0x4e05ec.clickUsercenterGuanzhu();
        if (_0x4a03f8.sixinSwitch && _0x4e05ec.JumpUsercenterToMore() && _0x4e05ec.JumpMoreToFasixin()) {
          var _0x320912 = _0x6ea3c6[random(0, _0x6ea3c6.length - 1)];
          _0x320912 != "" && _0x4e05ec.textSend(_0x320912);
          back();
          sleep(2000);
        }
      }
      if (_0x205a87.zuopin < _0x464524.shipinCount) {
        _0x464524.shipinCount = _0x205a87.zuopin;
      }
      if (_0x464524.shipinCount > 0 && _0x4e05ec.JumpUsercenterToFirstzuopin()) {
        for (var _0x51f56a = 1; _0x51f56a <= _0x464524.shipinCount; _0x51f56a++) {
          log("视频观看:第" + _0x51f56a + "个");
          _0x4e05ec.watchSleep("观看间隔", random(_0x464524.watchTimeMin, _0x464524.watchTimeMax));
          _0x4e05ec.clickDianzan();
          _0x4e05ec.clickPinlunqu() && (_0x4e05ec.actionPinglunqu(0, "", ""), _0x4e05ec.pinglun(_0x464524.pinglunWords), back(), sleep(2000));
          _0x4e05ec.closePinlunquOnce();
          _0x4e05ec.actioSwiperUp();
        }
        back();
        sleep(2000);
      }
      sleep(2000);
    };
    this.checkInfo3Conditionn = function (_0x458faf, _0x1a7933) {
      if (_0x1a7933.totalzan >= _0x458faf.totalzanMin && _0x1a7933.totalzan <= _0x458faf.totalzanMax && _0x1a7933.totalguanzhu >= _0x458faf.totalguanzhuMin && _0x1a7933.totalguanzhu <= _0x458faf.totalguanzhuMax && _0x1a7933.fensi >= _0x458faf.fensiMin && _0x1a7933.fensi <= _0x458faf.fensiMax && _0x1a7933.zuopin >= _0x458faf.zuopinMin && _0x1a7933.zuopin <= _0x458faf.zuopinMax && _0x1a7933.xihuan >= _0x458faf.xihuanMin && _0x1a7933.xihuan <= _0x458faf.xihuanMax) {
        log("符合");
        sleep(1000);
        return true;
      }
      log("不符合条件");
      sleep(1000);
      return false;
    };
    var _0x440135 = storages.create("wzke:J3");
    this.getBaseInfo = function () {
      var _0x12f2c8 = _0x440135.get("baseinfo");
      _0x12f2c8 == undefined ? (_0x12f2c8 = {}, _0x12f2c8.count = 3, _0x12f2c8.timeMin = 3, _0x12f2c8.timeMax = 10, _0x440135.put("baseinfo", _0x12f2c8)) : (_0x12f2c8.timeMin == undefined && (_0x12f2c8.timeMin = 3), _0x12f2c8.timeMax == undefined && (_0x12f2c8.timeMax = 10), _0x440135.put("baseinfo", _0x12f2c8));
      return _0x440135.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x633d1d) {
      _0x440135.put("baseinfo", _0x633d1d);
    };
    _0x28c7e4.initShipinView = function (_0x210042) {
      try {
        var _0x3774bb = _0x28c7e4.getShipinData();
        _0x210042.shipinCount.setText(_0x3774bb.shipinCount.toString());
        _0x210042.watchTimeMin.setText(_0x3774bb.watchTimeMin.toString());
        _0x210042.watchTimeMax.setText(_0x3774bb.watchTimeMax.toString());
        _0x210042.pinglunWords.setText(_0x3774bb.pinglunWords.toString());
      } catch (_0x313e49) {
        log("initShipinView", _0x313e49);
      }
    };
    _0x28c7e4.getShipinData = function () {
      var _0x197604 = {
        shipinCount: _0x440135.get("shipinCount") != undefined ? _0x440135.get("shipinCount") : 1,
        watchTimeMin: _0x440135.get("watchTimeMin") != undefined ? _0x440135.get("watchTimeMin") : 1,
        watchTimeMax: _0x440135.get("watchTimeMax") != undefined ? _0x440135.get("watchTimeMax") : 3,
        pinglunWords: _0x440135.get("pinglunWords") != undefined ? _0x440135.get("pinglunWords") : _0x29d3cf.pinglun
      };
      return _0x197604;
    };
    _0x28c7e4.saveShipinClick = function (_0x1732a3) {
      var _0x1674fc = {
        shipinCount: _0x1732a3.shipinCount.text(),
        watchTimeMin: _0x1732a3.watchTimeMin.text(),
        watchTimeMax: _0x1732a3.watchTimeMax.text(),
        pinglunWords: _0x1732a3.pinglunWords.text()
      };
      var _0x56922b = "";
      _0x56922b += "浏览个数:" + _0x1674fc.shipinCount;
      _0x56922b += "\n浏览间隔:" + _0x1674fc.watchTimeMin + "-" + _0x1674fc.watchTimeMax;
      _0x56922b += "\n评论内容:" + _0x1674fc.pinglunWords;
      dialogs.build({
        title: "提示",
        content: _0x56922b,
        negative: "确定"
      }).on("negative", function () {
        toast("保存成功");
        _0x28c7e4.saveShipinData(_0x1674fc);
      }).show();
    };
    _0x28c7e4.saveShipinData = function (_0x149241) {
      _0x440135.put("shipinCount", parseInt(_0x149241.shipinCount));
      _0x440135.put("watchTimeMin", parseInt(_0x149241.watchTimeMin));
      _0x440135.put("watchTimeMax", parseInt(_0x149241.watchTimeMax));
      _0x440135.put("pinglunWords", _0x149241.pinglunWords);
    };
    this.getInfo3 = function () {
      var _0x970a4e = _0x440135.get("info3");
      if (_0x970a4e == undefined) {
        _0x970a4e = {};
        _0x970a4e.guanzhuSwitch = true;
        _0x970a4e.sixinSwitch = true;
        _0x970a4e.totalzanMin = 0;
        _0x970a4e.totalzanMax = 10000000;
        _0x970a4e.totalguanzhuMin = 0;
        _0x970a4e.totalguanzhuMax = 10000000;
        _0x970a4e.fensiMin = 0;
        _0x970a4e.fensiMax = 10000000;
        _0x970a4e.zuopinMin = 0;
        _0x970a4e.zuopinMax = 10000;
        _0x970a4e.xihuanMin = 0;
        _0x970a4e.xihuanMax = 10000;
        _0x970a4e.sixinWords = "你好\n你好\n你好";
        _0x970a4e.sexSwitch = false;
        _0x970a4e.sex = 0;
        _0x440135.put("info3", _0x970a4e);
      } else {
        _0x970a4e.sexSwitch == undefined && (_0x970a4e.sexSwitch = false);
        _0x970a4e.sex == undefined && (_0x970a4e.sex = 0);
        _0x440135.put("info3", _0x970a4e);
      }
      return _0x440135.get("info3");
    };
    this.saveInfo3 = function (_0x4d08c8) {
      _0x440135.put("info3", _0x4d08c8);
    };
  }
  _0x4f3d4d.exports = _0x1a31e5;
}, function (_0x1f1770, _0x2cf48c, _0x2ad9f5) {
  function _0x431efb(_0x3db6e4) {
    var _0x2b2669 = this,
      _0x54672d = _0x2ad9f5(0),
      _0x4761ba = _0x2ad9f5(1),
      _0x150b4b = _0x4761ba.bgColor,
      _0x110af7 = null;
    this.index = function () {
      _0x110af7 == null && (_0x110af7 = _0x54672d.createPopWin(), _0x2b2669.view());
      _0x110af7.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    this.view = function () {
      var _0x4a4e1c = ui.inflate("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"清理关注\"bg=\"".concat(_0x150b4b, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\">\n\n\n\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<texttext=\"一键取关\"gravity=\"center\"marginTop=\"10\"textColor=\"black\"textSize=\"20\"/>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"取消个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"bg=\"#ffffff\"/>\n\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"guanzhu\"text=\"取消关注:\"margin=\"105\"trackColor='").concat(_0x150b4b, "'textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"huguan\"text=\"取消互关:\"margin=\"105\"trackColor='").concat(_0x150b4b, "'textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"start\"bg=\"").concat(_0x150b4b, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"功能说明\"gravity=\"center\"marginTop=\"10\"textColor=\"black\"textSize=\"24\"/>\n\n<textmarginTop=\"10\"textSize=\"18\"text=\"〓操作界面\"/>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"16\">1:我-关注-进入关注列表</text>\n\n<textmarginTop=\"20\"textSize=\"18\"text=\"〓功能\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"16\">1:取消关注或互关</text>\n\n</vertical>\n\n</ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      _0x4a4e1c.viewpager.setTitles(["基础设置", "功能说明"]);
      _0x4a4e1c.tabs.setupWithViewPager(_0x4a4e1c.viewpager);
      _0x4a4e1c.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x4761ba.selectedTabIndicatorColor);
      _0x4a4e1c.tabs.selectedTabIndicatorHeight = _0x4761ba.selectedTabIndicatorHeight;
      _0x4a4e1c.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x4a4e1c._backButton.click(function () {
        _0x110af7.dismiss();
      });
      _0x4a4e1c.start.click(function () {
        var _0x1c6740 = {
          count: _0x4a4e1c.count.text(),
          guanzhu: _0x4a4e1c.guanzhu.checked,
          huguan: _0x4a4e1c.huguan.checked
        };
        if (_0x1c6740.guanzhu == false && _0x1c6740.huguan == false) {
          alert("请开启其中一个");
          return false;
        }
        _0x2b2669.saveBaseInfo(_0x1c6740);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x2b2669.start();
        }).on("negative", function () {
          toast("保存成功");
        }).show();
      });
      _0x110af7.setContentView(_0x4a4e1c);
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x33a803 = new (_0x2ad9f5(3))(),
      _0x54672d = _0x2ad9f5(0),
      _0xf8823b = new (_0x2ad9f5(2))();
    this.start = function () {
      if (!_0x54672d.checkServer() || !_0x33a803.launchApp()) {
        return false;
      }
      _0x54672d.showConsole("一键取关");
      log("特别注意:下列界面运行");
      log("我-关注-进入关注列表");
      _0xf8823b.index();
      _0xf8823b.ClickListener({
        clickStart: function _0x1b5be9() {
          _0x2b2669.action();
        },
        clickStop: function _0x15367c() {
          _0x2b2669.end();
        },
        clickExit: function _0xc1b985() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x2b2669.end();
            _0xf8823b.close();
            _0x54672d.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x33a803.closeTip();
      var _0xcb06e3 = _0x2b2669.getBaseInfo(),
        _0x2acfff = _0xcb06e3.count;
      log("执行个数:" + _0xcb06e3.count);
      threads.start(function () {
        _0x33a803.watchStart("主任务开始", 3);
        while (_0x2acfff > 0) {
          while (_0x2acfff > 0) {
            log(_0x2acfff);
            var _0x4f34c8 = _0x2b2669.getNewUser(_0xcb06e3.guanzhu, _0xcb06e3.huguan);
            if (_0x4f34c8 == null) {
              break;
            }
            var _0x67011e = _0x4f34c8.findOne(className("android.widget.TextView"));
            if (_0x67011e != null && (_0x67011e.text() == "朋友推荐" || _0x67011e.text() == "暂时没有更多了")) {
              break;
            }
            _0x2b2669.cancel_guanzhu(_0x4f34c8);
            var _0xa955d5 = _0x4f34c8.findOne(text("互相关注"));
            if (_0xa955d5 != null) {
              _0xa955d5.parent().click();
              if (text("取消关注").findOne(2000)) {
                var _0x3e168e = click("取消关注");
                log("取消关注:", "互相关注");
                !_0x3e168e && back();
              }
              log("取消关注:", "互相关注");
            }
            _0x2acfff--;
            if (_0x2acfff <= 0) {
              break;
            }
            sleep(1000);
          }
          if (_0x2acfff <= 0) {
            log("数量小于0");
            break;
          }
          if (text("发现更多你可能认识的人").findOne(1000) || text("暂时没有更多了").findOne(1000)) {
            log("发现更多你可能认识的人,暂时没有更多了");
            break;
          } else {
            _0x2b2669.swipeDown();
          }
        }
        _0x2b2669.end();
      });
    };
    _0x2b2669.cancel_guanzhu = function (_0x2c49ff) {
      if (_0x2c49ff == null) {
        return;
      }
      var _0x552d32 = _0x2c49ff.findOne(text("已关注"));
      if (_0x552d32 != null) {
        _0x552d32.parent().click();
      } else {
        var _0x3cd599 = _0x2c49ff.findOne(desc("更多"));
        if (_0x3cd599 != null) {
          _0x3cd599.click();
          if (text("取消关注").findOne(2000)) {
            var _0x478412 = click("取消关注");
            log("取消关注:", "取消关注");
            !_0x478412 && back();
          }
        }
      }
    };
    var _0x3e37d0 = [];
    _0x2b2669.getNewUser = function (_0x2b1d18, _0x450b15) {
      try {
        _0x3e37d0.length > 100 && _0x3e37d0.shift();
        var _0xe6e71c = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x17b1ec) {
            if (_0x17b1ec.bounds().width() > 0 && _0x17b1ec.bounds().height() > 0 && _0x17b1ec.childCount() > 3) {
              return true;
            }
            return false;
          }),
          _0x5666c4 = _0xe6e71c.findOne(2000);
        if (_0x5666c4 == null) {
          return null;
        }
        for (var _0x35f246 = 0; _0x35f246 < _0x5666c4.childCount(); _0x35f246++) {
          var _0x4da0eb = _0x5666c4.child(_0x35f246);
          if (_0x4da0eb.findOne(text("回关"))) {
            continue;
          }
          if (_0x4da0eb.findOne(text("关注"))) {
            continue;
          }
          var _0x167a09 = _0x4da0eb.findOne(className("android.widget.TextView"));
          if (_0x2b1d18 && !_0x450b15) {
            if (_0x4da0eb.findOne(text("互相关注"))) {
              continue;
            }
          } else {
            if (!_0x2b1d18 && _0x450b15) {
              if (!_0x4da0eb.findOne(text("互相关注"))) {
                continue;
              }
            }
          }
          var _0x873b00 = _0x167a09.text();
          if (_0x3e37d0.indexOf(_0x873b00) == -1) {
            _0x3e37d0.push(_0x873b00);
            log(_0x873b00);
            return _0x4da0eb;
          }
        }
        return null;
      } catch (_0x12633e) {
        log("getNewUser", _0x12633e);
        return false;
      }
    };
    this.clickQuguan = function () {
      toastLog("开始取消关注");
      sleep(1000);
      var _0x2c8d00 = text("已关注").findOne(1000);
      if (_0x2c8d00 != null) {
        _0x2c8d00.parent().click();
        return true;
      }
      return false;
    };
    this.clickQuhuguan = function () {
      toastLog("互相关注");
      sleep(1000);
      var _0x4b215d = text("互相关注").findOne(1000);
      if (_0x4b215d != null) {
        _0x4b215d.parent().click();
        sleep(1000);
        var _0x67713 = text("取消关注").findOne(1000);
        if (_0x67713 != null) {
          _0x67713.click();
          return true;
        }
      }
      return false;
    };
    this.clickQuguanAndQuhuguan = function () {
      toastLog("互相关注/互关");
      sleep(1000);
      var _0x4db8f9 = text("已关注").findOne(1000),
        _0x1edb54 = text("互相关注").findOne(1000);
      if (_0x4db8f9 != null && _0x1edb54 != null) {
        if (_0x4db8f9.bounds().top < _0x1edb54.bounds().top) {
          _0x4db8f9.parent().click();
          return true;
        } else {
          _0x1edb54.parent().click();
          sleep(1000);
          var _0x1aea6b = text("取消关注").findOne(3000);
          if (_0x1aea6b != null) {
            _0x1aea6b.click();
            return true;
          }
        }
      } else {
        if (_0x4db8f9 != null && _0x1edb54 == null) {
          _0x4db8f9.parent().click();
          return true;
        } else {
          if (_0x4db8f9 == null && _0x1edb54 != null) {
            _0x1edb54.parent().click();
            sleep(1000);
            var _0x1aea6b = text("取消关注").findOne(3000);
            if (_0x1aea6b != null) {
              _0x1aea6b.click();
              return true;
            }
          }
        }
      }
      return false;
    };
    this.swipeDown = function () {
      var _0x3c50b4 = device.width * 0.5,
        _0xdc05d9 = device.height * 0.8,
        _0x4aecf1 = device.width * 0.5,
        _0x1e5017 = device.height * 0.5,
        _0x38ed96 = text("我的关注").findOnce();
      _0x38ed96 != null && (_0x1e5017 = _0x38ed96.bounds().top - 100);
      swipe(_0x3c50b4, _0xdc05d9, _0x4aecf1, _0x1e5017, 2000);
      sleep(2000);
    };
    var _0x2fd3e8 = storages.create("wzke:T1");
    this.getBaseInfo = function () {
      var _0x2dffdd = _0x2fd3e8.get("baseinfo");
      _0x2dffdd == undefined && (_0x2dffdd = {}, _0x2dffdd.count = 10, _0x2dffdd.guanzhu = true, _0x2dffdd.huguan = false, _0x2fd3e8.put("baseinfo", _0x2dffdd));
      return _0x2fd3e8.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x159a45) {
      _0x2fd3e8.put("baseinfo", _0x159a45);
    };
  }
  _0x1f1770.exports = _0x431efb;
}, function (_0x297738, _0x1a6d76, _0x4056ec) {
  function _0x471306(_0x3f226b) {
    var _0x4e950b = this,
      _0x37bdee = _0x4056ec(1),
      _0x1d7ea9 = _0x37bdee.bgColor,
      _0x5d79d = null;
    this.index = function () {
      _0x5d79d == null && (_0x4e950b.initPopWin(), _0x4e950b.initContent());
      _0x4e950b.show();
    };
    _0x4e950b.show = function () {
      _0x5d79d.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x4e950b.close = function () {
      _0x5d79d.dismiss();
    };
    _0x4e950b.initPopWin = function () {
      _0x5d79d = new android.widget.PopupWindow();
      var _0x52ff5a = new android.transition.Fade();
      _0x52ff5a.setDuration(200);
      _0x5d79d.setEnterTransition(_0x52ff5a);
      var _0x1d9a84 = new android.transition.Fade();
      _0x1d9a84.setDuration(200);
      _0x1d9a84.setMode(android.transition.Visibility.MODE_OUT);
      _0x5d79d.setExitTransition(_0x1d9a84);
      _0x5d79d.setWidth(device.width);
      _0x5d79d.setHeight(device.height);
      _0x5d79d.setClippingEnabled(false);
      _0x5d79d.setFocusable(true);
      _0x5d79d.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x5d79d.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    };
    this.initContent = function () {
      var _0x201f2a = ui.inflate("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"取消喜欢\"bg=\"".concat(_0x1d7ea9, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\">\n\n\n\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<texttext=\"取消喜欢\"gravity=\"center\"margin=\"10\"textColor=\"black\"textSize=\"20\"/>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"取消个数\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"bg=\"#ffffff\"/>\n\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n\n<buttonid=\"start\"bg=\"").concat(_0x1d7ea9, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"功能说明\"gravity=\"center\"marginTop=\"10\"textColor=\"black\"textSize=\"24\"/>\n\n<textmarginTop=\"10\"textSize=\"18\"text=\"〓操作界面\"/>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"16\">1:我-喜欢-点击进入第一个视频</text>\n\n<textmarginTop=\"20\"textSize=\"18\"text=\"〓功能\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"16\">1:取消喜欢</text>\n\n</vertical>\n\n</ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      _0x201f2a.viewpager.setTitles(["基础设置", "功能说明"]);
      _0x201f2a.tabs.setupWithViewPager(_0x201f2a.viewpager);
      _0x201f2a.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x37bdee.selectedTabIndicatorColor);
      _0x201f2a.tabs.selectedTabIndicatorHeight = _0x37bdee.selectedTabIndicatorHeight;
      _0x201f2a.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x201f2a._backButton.click(function () {
        _0x4e950b.close();
      });
      var _0x4c2b49 = _0x4e950b.getBaseInfo();
      _0x201f2a.count.setText(_0x4c2b49.count + "");
      _0x201f2a.start.click(function () {
        var _0x3dc5ac = {
          count: _0x201f2a.count.text()
        };
        _0x4e950b.saveBaseInfo(_0x3dc5ac);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x4e950b.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
      _0x5d79d.setContentView(_0x201f2a);
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x2d7512 = new (_0x4056ec(3))(),
      _0x1362ea = _0x4056ec(0),
      _0x29b7fd = new (_0x4056ec(2))();
    this.start = function () {
      if (!_0x1362ea.checkServer() || !_0x2d7512.launchApp()) {
        return false;
      }
      _0x1362ea.showConsole("一键取赞");
      log("特别注意:下列界面运行");
      log("我-喜欢-进入其中一个视频");
      _0x29b7fd.index();
      _0x29b7fd.ClickListener({
        clickStart: function _0x3744ba() {
          _0x4e950b.action();
        },
        clickStop: function _0x3c0666() {
          _0x4e950b.end();
        },
        clickExit: function _0x2ae018() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x4e950b.end();
            _0x29b7fd.close();
            _0x1362ea.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      _0x2d7512.closeTip();
      _0x1362ea.chenckMonitorEnd(function () {
        _0x4e950b.end();
      });
      var _0x5d34b7 = _0x4e950b.getBaseInfo(),
        _0x2e6da3 = _0x5d34b7.count;
      log("执行个数:" + _0x2e6da3);
      threads.start(function () {
        while (_0x2e6da3 > 0) {
          var _0x355d30 = _0x2d7512.clickDianzan();
          if (_0x355d30) {
            _0x2e6da3--;
          }
          log(_0x2e6da3);
          if (_0x2e6da3 == 0) {
            break;
          }
          _0x1362ea.actionSwipUp();
          sleep(500);
        }
        _0x4e950b.end();
      });
    };
    var _0x23735e = storages.create("wzke:T2");
    this.getBaseInfo = function () {
      var _0xfd827f = _0x23735e.get("baseinfo");
      _0xfd827f == undefined && (_0xfd827f = {}, _0xfd827f.count = 3, _0x23735e.put("baseinfo", _0xfd827f));
      return _0x23735e.get("baseinfo");
    };
    this.saveBaseInfo = function (_0xeaa0b3) {
      _0x23735e.put("baseinfo", _0xeaa0b3);
    };
  }
  _0x297738.exports = _0x471306;
}, function (_0x5a10d1, _0x2aa2eb, _0xff5e85) {
  function _0x4f450b(_0x12dd87) {
    var _0x591c62 = this,
      _0x44e35e = _0xff5e85(1),
      _0x1eb44c = _0x44e35e.bgColor,
      _0x492cd9 = null;
    this.index = function () {
      _0x492cd9 == null && (_0x591c62.initPopWin(), _0x591c62.initContent());
      _0x591c62.show();
    };
    _0x591c62.show = function () {
      _0x492cd9.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x591c62.close = function () {
      _0x492cd9.dismiss();
    };
    _0x591c62.initPopWin = function () {
      _0x492cd9 = new android.widget.PopupWindow();
      var _0x13092c = new android.transition.Fade();
      _0x13092c.setDuration(200);
      _0x492cd9.setEnterTransition(_0x13092c);
      var _0x36ded3 = new android.transition.Fade();
      _0x36ded3.setDuration(200);
      _0x36ded3.setMode(android.transition.Visibility.MODE_OUT);
      _0x492cd9.setExitTransition(_0x36ded3);
      _0x492cd9.setWidth(device.width);
      _0x492cd9.setHeight(device.height);
      _0x492cd9.setClippingEnabled(false);
      _0x492cd9.setFocusable(true);
      _0x492cd9.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x492cd9.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    };
    this.initContent = function () {
      var _0x4bc903 = ui.inflate("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"用户回关\"bg=\"".concat(_0x1eb44c, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在粉丝界面启动，对关注自己粉丝取关\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"执行个数：（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"间隔：（秒）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"countTime\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"lanVSwitch\"marginTop=\"5\"padding='88'checked='true'text='开启蓝V'trackColor='#003366'background='#ffffff'/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"huiguanSwitch\"marginTop=\"5\"padding='88'checked='true'text='开启回关'trackColor='#003366'background='#ffffff'/>\n</vertical>\n</card>\n\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"20\"cardBackgroundColor=\"").concat(_0x1eb44c, "\"cardUseCompatPadding=\"true\">\n<buttonid=\"start\"bg=\"").concat(_0x1eb44c, "\"margin=\"5\"textSize=\"22\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<vertical>\n<SwitchWidget-Se7enid=\"sixinSwitch\"marginTop=\"20\"padding='88'checked='true'text='开启私信'trackColor='#003366'background='#ffffff'/>\n<textmarginTop=\"15\"textSize=\"16\"text=\"私信内容:换行隔开多条随机\"/>\n<inputgravity=\"top\"minHeight=\"40\"id=\"sixinWords\"textSize=\"15\"lines=\"3\"hint=\"请输入\"/>\n</vertical>\n\n<buttonmarginBottom=\"200\"bg=\"").concat(_0x1eb44c, "\"id=\"save3\"layout_marginTop='10'layout_gravity=\"center\"text=\"保存\"w=\"auto\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n\n</ScrollView>\n\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      _0x4bc903.viewpager.setTitles(["用户回关", "基础设置", "私信"]);
      _0x4bc903.tabs.setupWithViewPager(_0x4bc903.viewpager);
      _0x4bc903.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x44e35e.selectedTabIndicatorColor);
      _0x4bc903.tabs.selectedTabIndicatorHeight = _0x44e35e.selectedTabIndicatorHeight;
      _0x4bc903.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x4bc903._backButton.click(function () {
        _0x591c62.close();
      });
      _0x4bc903.start.click(function () {
        _0x5cb18a.put("count", parseInt(_0x4bc903.count.text()));
        _0x5cb18a.put("countTime", parseInt(_0x4bc903.countTime.text()));
        _0x5cb18a.put("huiguanSwitch", _0x4bc903.huiguanSwitch.checked);
        _0x5cb18a.put("lanVSwitch", _0x4bc903.lanVSwitch.checked);
        dialogs.build({
          title: "开始任务",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          _0x591c62.start();
        }).on("negative", function () {}).show();
      });
      var _0x21ad76 = _0x591c62.getBaseInfo();
      _0x4bc903.count.setText(_0x21ad76.count + "");
      _0x4bc903.countTime.setText(_0x21ad76.countTime + "");
      _0x4bc903.huiguanSwitch.checked = _0x21ad76.huiguanSwitch;
      _0x4bc903.lanVSwitch.checked = _0x21ad76.lanVSwitch;
      try {
        var _0x39d869 = _0x591c62.getInfo3();
        _0x4bc903.sixinSwitch.checked = _0x39d869.sixinSwitch;
        _0x4bc903.sixinWords.setText(_0x39d869.sixinWords);
      } catch (_0x13ca71) {
        log("info3Init", _0x13ca71);
      }
      _0x4bc903.save3.on("click", function () {
        var _0x3c840f = {
          sixinSwitch: _0x4bc903.sixinSwitch.checked,
          sixinWords: _0x4bc903.sixinWords.text()
        };
        var _0x526176 = "";
        _0x526176 += "话术:[" + _0x3c840f.sixinWords + "]\n";
        _0x591c62.saveInfo3(_0x3c840f);
        alert("保存成功", _0x526176);
      });
      _0x492cd9.setContentView(_0x4bc903);
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x459481 = new (_0xff5e85(3))(),
      _0x38b5c5 = _0xff5e85(0),
      _0x25c197 = new (_0xff5e85(2))();
    this.start = function () {
      if (!_0x38b5c5.checkServer() || !_0x459481.launchApp()) {
        return false;
      }
      _0x38b5c5.showConsole("粉丝转化", device.width * 0.5, device.height * 0.15);
      log("特别注意:下列界面运行");
      log("我-粉丝-进入粉丝列表");
      _0x25c197.index();
      _0x25c197.ClickListener({
        clickStart: function _0x13d179() {
          threads.start(function () {
            _0x591c62.action();
          });
        },
        clickStop: function _0x5179c9() {
          _0x591c62.end();
        },
        clickExit: function _0x451610() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x591c62.end();
            _0x25c197.close();
            _0x38b5c5.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x5421e2 = [];
      _0x459481.closeTip();
      var _0x3fde09 = _0x591c62.getBaseInfo(),
        _0x545987 = _0x591c62.getInfo3(),
        _0x21d516 = _0x3fde09.count,
        _0x2e0357 = parseInt(_0x3fde09.countTime);
      _0x459481.watchSleep("主任务开始", 3);
      while (1) {
        while (_0x21d516 > 0) {
          var _0x3b1407 = _0x591c62.getNewObj();
          if (_0x3b1407 == null) {
            break;
          }
          if (_0x3fde09.huiguanSwitch) {
            var _0x49b737 = _0x3b1407.findOne(text("回关"));
            if (_0x49b737 != null) {
              var _0xd5873d = _0x49b737.parent().click();
              !_0xd5873d && _0x49b737.click();
              sleep(1000);
            }
          }
          _0x545987.sixinSwitch && (_0x3b1407.click(), sleep(3000), this.usercenterAction(), sleep(2000), back());
          _0x21d516--;
          log("当前任务剩余数:", _0x21d516);
          log("等待", _0x2e0357, "s");
          sleep(1000 * _0x2e0357);
        }
        if (_0x21d516 <= 0) {
          break;
        }
        if (text("暂时没有更多了").findOne(500) || text("发现更多你可能认识的人").findOne(500)) {
          break;
        }
        swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
        sleep(1000);
      }
      _0x591c62.end();
    };
    this.usercenterAction = function () {
      var _0x2c089f = _0x591c62.getBaseInfo(),
        _0x50e1d3 = _0x591c62.getInfo3(),
        _0x39e1da = _0x50e1d3.sixinWords,
        _0x544794 = _0x39e1da.split("\n");
      if (_0x2c089f.lanVSwitch) {
        if (!_0x459481.isUserCenterLanV()) {
          return false;
        }
      }
      if (_0x50e1d3.sixinSwitch) {
        if (_0x459481.JumpUsercenterToMore() && _0x459481.JumpMoreToFasixin()) {
          var _0x483e23 = _0x544794[random(0, _0x544794.length - 1)];
          _0x483e23 != "" && _0x459481.textSend(_0x483e23);
          back();
          sleep(2000);
        }
      }
    };
    var _0x5421e2 = [];
    this.getNewObj = function () {
      var _0x5c7c7d = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x194f6d) {
          var _0x3815ed = _0x38b5c5.getPercent(_0x194f6d);
          return _0x3815ed.w > 0 && _0x3815ed.h > 0;
        }),
        _0x3d2923 = _0x5c7c7d.findOnce();
      if (_0x3d2923 == null) {
        return null;
      }
      for (var _0x122917 = 0; _0x122917 < _0x3d2923.childCount(); _0x122917++) {
        var _0x55ac4d = _0x3d2923.child(_0x122917);
        if (_0x55ac4d.childCount() <= 2) {
          continue;
        }
        var _0x318fa7 = _0x55ac4d.findOne(className("android.widget.TextView")),
          _0x49f0eb = _0x318fa7.text();
        if (_0x55ac4d.bounds().centerY() > device.height) {
          break;
        }
        if (_0x5421e2.indexOf(_0x49f0eb) == -1 && _0x55ac4d.text() != "发现好友" && _0x55ac4d.text() != "暂时没有更多了") {
          _0x5421e2.push(_0x49f0eb);
          log(_0x49f0eb);
          return _0x55ac4d;
        }
      }
      return null;
    };
    var _0x5cb18a = storages.create("wzke:T3");
    this.getBaseInfo = function () {
      var _0x2b49e0 = {
        count: _0x5cb18a.get("count") != undefined ? _0x5cb18a.get("count") : 99,
        countTime: _0x5cb18a.get("countTime") != undefined ? _0x5cb18a.get("countTime") : 10,
        huiguanSwitch: _0x5cb18a.get("huiguanSwitch") != undefined ? _0x5cb18a.get("huiguanSwitch") : true,
        lanVSwitch: _0x5cb18a.get("lanVSwitch") != undefined ? _0x5cb18a.get("lanVSwitch") : false
      };
      return _0x2b49e0;
    };
    this.getInfo3 = function () {
      if (_0x5cb18a.get("info3") == undefined) {
        var _0x1cbf2b = {
          sixinSwitch: false,
          sixinWords: "作品很不错,需要推广吗?\n你好推广更多流量\n互关"
        };
        _0x5cb18a.put("info3", _0x1cbf2b);
      }
      return _0x5cb18a.get("info3");
    };
    this.saveInfo3 = function (_0x334ee5) {
      _0x5cb18a.put("info3", _0x334ee5);
    };
  }
  _0x5a10d1.exports = _0x4f450b;
}, function (_0x2a8b11, _0x3f8c94, _0x561146) {
  function _0xaf9513(_0x24843c) {
    var _0x51ef85 = this,
      _0x37b114 = _0x561146(1),
      _0x5c10bf = _0x37b114.bgColor;
    this.index = function () {
      _0x51ef85.view();
    };
    this.view = function () {
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"用户回访\"bg=\"".concat(_0x5c10bf, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n\n\n\n<ScrollView>\n<verticalpadding=\"16\"bg=\"#ffffff\">\n<texttext=\"粉丝回访\"gravity=\"center\"textColor=\"black\"textSize=\"20\"/>\n\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"用户数量（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"count\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"作品数量（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"喜欢概率：（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"dianzanRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"10000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论概率：（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"pinglunRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"1510\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<texttextColor=\"black\"text=\"评论内容换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"sixinWordsCopy\"margin=\"52\"bg=\"#ff9800\"text=\"复制\"gravity=\"center\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"sixinWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"gravity=\"center\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n\n<inputhint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"Words1\"bg=\"#ffffff\"/>\n</vertical>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<buttonid=\"start\"layout_marginTop='10'layout_gravity=\"center\"text=\"提交\"w=\"auto\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"功能说明\"gravity=\"center\"marginTop=\"10\"textColor=\"black\"textSize=\"24\"/>\n<textmarginTop=\"20\"textSize=\"20\"textColor=\"#ff0000\"text=\"*操作界面:\"/>\n<texttextSize=\"16\">1:我-粉丝-点击进入粉丝列表</text>\n\n<textmarginTop=\"20\"textSize=\"20\"textColor=\"#ff0000\"text=\"*功能:\"/>\n<texttextSize=\"16\">1:条件筛选</text>\n<texttextSize=\"16\">2:浏览作品-喜欢-评论</text>\n\n\n\n</vertical>\n</ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["基础设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x37b114.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x37b114.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      ui._backButton.click(function () {
        _0x24843c.view(1);
      });
      ui.sixinWordsCopy.click(function () {
        setClip(view.sixinWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: view.sixinWords.text(),
          positive: "好的"
        }).show();
      });
      ui.sixinWordsPaste.click(function () {
        var _0x49f9d9 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x49f9d9,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          view.sixinWords.setText(_0x49f9d9);
          alert("粘贴成功");
        }).show();
      });
      var _0x1c16e4 = _0x51ef85.getBaseInfo();
      ui.count.setText(_0x1c16e4.count + "");
      ui.shipinCount.setText(_0x1c16e4.shipinCount + "");
      ui.dianzanRate.setText(_0x1c16e4.dianzanRate + "");
      ui.pinglunRate.setText(_0x1c16e4.pinglunRate + "");
      ui.Words1.setText(_0x1c16e4.Words1);
      ui.start.click(function () {
        var _0xf0492e = {
          count: ui.count.text(),
          shipinCount: ui.shipinCount.text(),
          dianzanRate: ui.dianzanRate.text(),
          pinglunRate: ui.pinglunRate.text(),
          Words1: ui.Words1.text()
        };
        _0x51ef85.saveBaseInfo(_0xf0492e);
        dialogs.build({
          title: "保存成功",
          positive: "开始任务",
          negative: "保存"
        }).on("positive", function () {
          _0x51ef85.start();
        }).on("negative", function () {
          alert("保存成功");
        }).show();
      });
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x2b3774 = new (_0x561146(3))(),
      _0x4fdd5 = _0x561146(0),
      _0x91264 = new (_0x561146(2))();
    this.start = function () {
      if (!_0x4fdd5.checkServer() || !_0x2b3774.launchApp()) {
        return false;
      }
      _0x4fdd5.showConsole("粉丝回访", device.width * 0.5, device.height * 0.15);
      log("特别注意:下列界面运行");
      log("我-粉丝-进入粉丝列表");
      _0x91264.index();
      _0x91264.ClickListener({
        clickStart: function _0x5cbdbd() {
          _0x51ef85.action();
        },
        clickStop: function _0x47b8ed() {
          _0x51ef85.end();
        },
        clickExit: function _0x449fd3() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x51ef85.end();
            _0x91264.close();
            _0x4fdd5.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x191981 = [];
      _0x2b3774.closeTip();
      _0x4fdd5.chenckMonitorEnd(function () {
        _0x51ef85.end();
      });
      var _0x696007 = _0x51ef85.getBaseInfo(),
        _0x134893 = _0x696007.count;
      threads.start(function () {
        while (1) {
          while (_0x134893 > 0) {
            var _0x2c33b3 = _0x51ef85.getNewObj();
            if (_0x2c33b3 == null) {
              break;
            }
            _0x2c33b3.parent().parent().parent().click();
            sleep(1000);
            _0x51ef85.action2();
            back();
            sleep(1000);
            _0x134893--;
          }
          if (_0x134893 <= 0) {
            break;
          }
          if (text("暂时没有更多了").findOne(500) || text("发现更多你可能认识的人").findOne(500)) {
            break;
          }
          swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
          sleep(1000);
        }
        _0x51ef85.end();
      });
    };
    this.action2 = function () {
      var _0x2ce987 = _0x51ef85.getBaseInfo(),
        _0x3d0e5c = _0x2ce987.Words1,
        _0x16ffb7 = _0x3d0e5c.split("\n"),
        _0x26898c = _0x2b3774.watchUercenterInfo(false),
        _0x5c5542 = _0x2ce987.shipinCount;
      _0x5c5542 >= _0x26898c.zuopin && (_0x5c5542 = _0x26898c.zuopin);
      if (_0x5c5542 == 0) {
        return false;
      }
      if (_0x2b3774.JumpUsercenterToFirstzuopin() == false) {
        return;
      }
      _0x2b3774.watchSleep("主任务开始", 3);
      while (_0x5c5542 > 0) {
        _0x2b3774.watchSleep("观看", 1);
        random(1, 100) < _0x2ce987.dianzanRate && _0x2b3774.clickDianzan();
        if (random(1, 100) < _0x2ce987.pinglunRate && _0x2b3774.clickPinlunqu()) {
          var _0x1f6532 = _0x16ffb7[random(0, _0x16ffb7.length - 1)];
          _0x1f6532 != "" && _0x2b3774.pinglun(_0x1f6532);
          back();
        }
        _0x2b3774.watchSleep("观看", random(3, 8));
        if (--_0x5c5542 <= 0 || --_0x2ce987.count <= 0) {
          break;
        }
        _0x4fdd5.actionSwipUp();
      }
      back();
      sleep(1000);
    };
    var _0x191981 = [];
    this.getNewObj = function () {
      var _0x26440a = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x47f3c2) {
          return _0x47f3c2.bounds().width() > 0 && _0x47f3c2.bounds().height() > 0;
        }),
        _0x2c4aea = _0x26440a.findOne(3000);
      if (_0x2c4aea == null) {
        return null;
      }
      for (var _0x1c7dca = 0; _0x1c7dca < _0x2c4aea.childCount(); _0x1c7dca++) {
        if (_0x2c4aea.child(_0x1c7dca).childCount() <= 2) {
          continue;
        }
        var _0x5a43c1 = _0x2c4aea.child(_0x1c7dca).findOne(className("android.widget.TextView")),
          _0x35b264 = _0x5a43c1.text();
        if (_0x191981.indexOf(_0x35b264) == -1 && _0x5a43c1.text() != "发现好友" && _0x5a43c1.text() != "暂时没有更多了") {
          _0x191981.push(_0x35b264);
          return _0x5a43c1;
        }
      }
      return null;
    };
    var _0x4c0589 = storages.create("wzke:T4");
    this.getBaseInfo = function () {
      var _0x238b90 = _0x4c0589.get("baseinfo");
      if (_0x238b90 == undefined) {
        _0x238b90 = {};
        _0x238b90.count = 3;
        _0x238b90.shipinCount = 3;
        _0x238b90.dianzanRate = 100;
        _0x238b90.pinglunRate = 100;
        _0x238b90.Words1 = "很好看\n期待更新";
        _0x4c0589.put("baseinfo", _0x238b90);
      }
      return _0x4c0589.get("baseinfo");
    };
    this.saveBaseInfo = function (_0x200043) {
      _0x4c0589.put("baseinfo", _0x200043);
    };
  }
  _0x2a8b11.exports = _0xaf9513;
}, function (_0x47c331, _0x21524b, _0x548636) {
  function _0x33b055(_0x5015ab) {
    var _0x46ac7c = this,
      _0x27cfd6 = _0x548636(1),
      _0x59604c = new (_0x548636(6))(),
      _0xbc897f = _0x27cfd6.bgColor;
    this.index = function () {
      _0x46ac7c.view();
    };
    var _0x47d839 = null;
    this.view = function () {
      var _0x4e510f = _0x1c6a2c.getVersionName("com.ss.android.ugc.aweme");
      _0x47d839 = ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"点赞浏览\"bg=\"".concat(_0xbc897f, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n\n<verticalpadding=\"16\">\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在喜欢作品观看页启动，自动观看视频，概率互动，提升账号活跃度\"/>\n<textmargin=\"1001010\"textColor=\"black\"textSize=\"14\"text=\"已安装版本：").concat(_0x4e510f, "\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n\n\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"访问人数\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"userCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"看作品数\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"关注概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"guanzhuRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"喜欢概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"dianzanRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"评论概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"pinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<verticalpadding=\"201000\">\n<texttextColor=\"black\"text=\"评论内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"gravity=\"top\"minLines=\"3\"id=\"pinglunWords\"bg=\"#ffffff\"/>\n</vertical>\n</vertical>\n</card>\n\n<buttonid=\"start\"bg=\"").concat(_0xbc897f, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"私信\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"userSixinSwitch\"text=\"私信开关\"margin=\"2010\"trackColor='").concat(_0xbc897f, "'textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"200200\">\n<texttextColor=\"black\"text=\"私信内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"sixinWords\"bg=\"#ffffff\"/>\n</vertical>\n\n\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<buttonid=\"saveSixin\"bg=\"").concat(_0xbc897f, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"功能说明\"gravity=\"center\"textColor=\"black\"textSize=\"24\"/>\n\n<textmarginTop=\"10\"textSize=\"18\"text=\"〓操作界面\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>1:我-作品-视频-评论区-赞列表</text>\n<text>2:朋友-动态-视频-评论区-赞列表</text>\n<text>3:其他用户中心-作品-视频-评论区-赞列表</text>\n\n</vertical>\n\n</ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["基础设置", "私信设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x27cfd6.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x27cfd6.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x5015ab.view(1);
      });
      _0x46ac7c.initStart(ui);
      _0x46ac7c.initShipinView(ui);
      ui.start.click(function () {
        _0x46ac7c.saveShipinClick(ui);
        _0x46ac7c.startClick(ui);
      });
      _0x46ac7c.initSixinView(ui);
      ui.saveSixin.click(function () {
        _0x46ac7c.saveSixinClick(ui);
      });
    };
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    var _0x3ffde1 = new (_0x548636(3))(),
      _0x1c6a2c = _0x548636(0),
      _0x1395a7 = new (_0x548636(2))();
    this.start = function () {
      if (!_0x1c6a2c.checkServer() || !_0x3ffde1.launchApp()) {
        return false;
      }
      _0x1c6a2c.showConsole("喜欢观看");
      log("运行页面:评论区-喜欢页面");
      _0x1395a7.index();
      _0x1395a7.ClickListener({
        clickStart: function _0x51721f() {
          _0x46ac7c.action();
        },
        clickStop: function _0x3a0460() {
          _0x46ac7c.end();
        },
        clickExit: function _0x2d20cd() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x46ac7c.end();
            _0x1395a7.close();
            _0x1c6a2c.closeConsole();
          }).show();
        }
      });
    };
    this.action = function () {
      var _0x94ae30 = _0x46ac7c.getStartData(),
        _0x4bbe9c = 0;
      _0x3ffde1.closeTip();
      threads.start(function () {
        _0x3ffde1.watchSleep("开始任务:", 1);
        var _0x5afaaf = [];
        while (1) {
          while (_0x4bbe9c < _0x94ae30.userCount) {
            sleep(1000);
            var _0x5e7f35 = _0x46ac7c.getUser(_0x5afaaf, _0x4bbe9c);
            if (_0x5e7f35 == null) {
              break;
            }
            _0x4bbe9c++;
            log("跳转页面:", "进入用户中心");
            sleep(1000);
            _0x5e7f35.click();
            sleep(3000);
            _0x46ac7c.usercenterAction();
            log("跳转页面:", "返回喜欢列表");
            sleep(1000);
            back();
            sleep(3000);
          }
          if (_0x4bbe9c >= _0x94ae30.userCount) {
            break;
          }
          var _0x3a25dc = text("为尊重作者及喜欢者设置\n部分喜欢暂不支持查看").findOnce(),
            _0x4040b8 = text("暂时没有更多了").findOnce();
          if (_0x3a25dc != null || _0x4040b8 != null) {
            break;
          }
          var _0x1078de = device.width * 0.4 + random(-10, 10),
            _0xa34a84 = device.height * 0.85 + random(-10, 10),
            _0x35c9c7 = device.width * 0.6 + random(-10, 10),
            _0x15ea2f = device.height * 0.4 + random(-10, 10);
          _0x1c6a2c.swipeRandom(_0x1078de, _0xa34a84, _0x35c9c7, _0x15ea2f, 2000);
          sleep(2000);
        }
        _0x46ac7c.end();
      });
    };
    _0x46ac7c.usercenterAction = function () {
      sleep(3000);
      var _0x27adb4 = _0x46ac7c.getShipinData(),
        _0x5062ee = _0x46ac7c.getSixinData();
      if (_0x27adb4.shipinCount == 0 && _0x5062ee.userSixinSwitch == false) {
        return false;
      }
      if (!_0x3ffde1.isPrivateOrBan()) {
        return false;
      }
      sleep(1000);
      if (_0x5062ee.userSixinSwitch) {
        _0x3ffde1.actionUesrCenterSixin(_0x5062ee.sixinWords);
      }
      var _0x492e4e = _0x3ffde1.getUsercenter_zuopin();
      if (_0x492e4e > 0 && _0x492e4e < _0x27adb4.shipinCount) {
        _0x27adb4.shipinCount = _0x492e4e;
      }
      if (_0x27adb4.shipinCount > 0 && _0x3ffde1.JumpUsercenterToFirstzuopin()) {
        for (var _0x2c0743 = 1; _0x2c0743 <= _0x27adb4.shipinCount; _0x2c0743++) {
          _0x3ffde1.watchSleep("视频观看", 3);
          if (random(0, 100) <= _0x27adb4.guanzhuRate) {
            _0x3ffde1.clickGuanzhu();
          }
          if (random(0, 100) <= _0x27adb4.dianzanRate) {
            _0x3ffde1.clickDianzan();
          }
          random(0, 100) <= _0x27adb4.pinglunRate && _0x3ffde1.clickPinlunqu() && (_0x3ffde1.pinglun(_0x27adb4.pinglunWords), log("页面跳转:", "关闭评论区"), back(), sleep(2000));
          _0x3ffde1.closePinlunquOnce();
          if (_0x2c0743 <= _0x27adb4.shipinCount) {
            break;
          }
          _0x3ffde1.actioSwiperUp();
        }
        log("页面跳转:", "返回用户列表");
        back();
        sleep(3000);
      }
    };
    _0x46ac7c.getUser = function (_0x64e787, _0x3e070c) {
      if (_0x64e787.length >= 20) {
        _0x64e787.shift();
      }
      var _0x248fd8 = className("androidx.recyclerview.widget.RecyclerView").filter(function (_0x2383b3) {
          return _0x2383b3.bounds().width() > 0 && _0x2383b3.bounds().height() > 0;
        }),
        _0x154dd2 = _0x248fd8.findOne(3000);
      if (_0x154dd2 == null) {
        return false;
      }
      for (var _0x44999e = 0; _0x44999e < _0x154dd2.childCount(); _0x44999e++) {
        var _0x5a8369 = _0x154dd2.child(_0x44999e);
        if (_0x5a8369.childCount() <= 1) {
          return null;
        }
        var _0x1d4d09 = _0x5a8369.findOne(className("TextView"));
        if (_0x1d4d09 == null) {
          continue;
        }
        var _0xc694f4 = _0x1d4d09.text();
        if (_0xc694f4 == "暂时没有更多了") {
          return null;
        }
        if (_0x64e787.indexOf(_0xc694f4) == -1) {
          log("当前用户:" + _0x3e070c + ",", _0xc694f4);
          _0x64e787.push(_0xc694f4);
          return _0x5a8369;
        }
      }
      return null;
    };
    var _0x5402dd = storages.create("wzke:J4");
    _0x46ac7c.initStart = function (_0x5976e0) {
      var _0x3aaab9 = _0x46ac7c.getStartData();
      _0x5976e0.userCount.setText(_0x3aaab9.userCount + "");
    };
    _0x46ac7c.getStartData = function () {
      var _0x1f3c7d = {
        userCount: _0x5402dd.get("userCount") != undefined ? _0x5402dd.get("userCount") : "500"
      };
      return _0x1f3c7d;
    };
    _0x46ac7c.startClick = function (_0x19e2b1) {
      var _0x151493 = {
        userCount: _0x19e2b1.userCount.text()
      };
      var _0x58a620 = "";
      _0x58a620 += "访问人数:" + _0x151493.userCount;
      _0x46ac7c.saveStartData(_0x151493);
      dialogs.build({
        title: "保存成功",
        content: _0x58a620,
        positive: "开始任务",
        negative: "保存"
      }).on("positive", function () {
        _0x46ac7c.start();
      }).on("negative", function () {
        toast("保存成功");
      }).show();
    };
    _0x46ac7c.saveStartData = function (_0x45602f) {
      _0x5402dd.put("userCount", _0x45602f.userCount);
    };
    _0x46ac7c.initShipinView = function (_0x4e3561) {
      try {
        var _0x2d341a = _0x46ac7c.getShipinData();
        _0x4e3561.shipinCount.setText(_0x2d341a.shipinCount + "");
        _0x4e3561.guanzhuRate.setText(_0x2d341a.guanzhuRate + "");
        _0x4e3561.dianzanRate.setText(_0x2d341a.dianzanRate + "");
        _0x4e3561.pinglunRate.setText(_0x2d341a.pinglunRate + "");
        _0x4e3561.pinglunWords.setText(_0x2d341a.pinglunWords + "");
      } catch (_0x27944e) {
        log("initShipinView", _0x27944e);
      }
    };
    _0x46ac7c.getShipinData = function () {
      var _0x18350b = {
        shipinCount: _0x5402dd.get("shipinCount") != undefined ? _0x5402dd.get("shipinCount") : 1,
        guanzhuRate: _0x5402dd.get("guanzhuRate") != undefined ? _0x5402dd.get("guanzhuRate") : 5,
        dianzanRate: _0x5402dd.get("dianzanRate") != undefined ? _0x5402dd.get("dianzanRate") : 20,
        pinglunRate: _0x5402dd.get("pinglunRate") != undefined ? _0x5402dd.get("pinglunRate") : 5,
        pinglunWords: _0x5402dd.get("pinglunWords") != undefined ? _0x5402dd.get("pinglunWords") : _0x59604c.pinglun
      };
      return _0x18350b;
    };
    _0x46ac7c.saveShipinClick = function (_0x325dc6) {
      var _0x2d4d4b = {
        shipinCount: _0x325dc6.shipinCount.text(),
        guanzhuRate: _0x325dc6.guanzhuRate.text(),
        dianzanRate: _0x325dc6.dianzanRate.text(),
        pinglunRate: _0x325dc6.pinglunRate.text(),
        pinglunWords: _0x325dc6.pinglunWords.text()
      };
      var _0x5c6cb5 = "";
      _0x5c6cb5 += "浏览个数:" + _0x2d4d4b.shipinCount;
      _0x5c6cb5 += "\n关注概率:" + _0x2d4d4b.guanzhuRate;
      _0x5c6cb5 += "\n喜欢概率:" + _0x2d4d4b.dianzanRate;
      _0x5c6cb5 += "\n评论概率:" + _0x2d4d4b.pinglunRate;
      _0x5c6cb5 += "\n评论内容:" + _0x2d4d4b.pinglunWords;
      dialogs.build({
        title: "提示",
        content: _0x5c6cb5,
        negative: "确定"
      }).on("negative", function () {
        toast("保存成功");
        _0x46ac7c.saveShipinData(_0x2d4d4b);
      }).show();
    };
    _0x46ac7c.saveShipinData = function (_0x52744c) {
      _0x5402dd.put("shipinCount", parseInt(_0x52744c.shipinCount));
      _0x5402dd.put("guanzhuRate", parseInt(_0x52744c.guanzhuRate));
      _0x5402dd.put("dianzanRate", parseInt(_0x52744c.dianzanRate));
      _0x5402dd.put("pinglunRate", parseInt(_0x52744c.pinglunRate));
      _0x5402dd.put("pinglunWords", _0x52744c.pinglunWords);
    };
    _0x46ac7c.initSixinView = function (_0x492f39) {
      var _0x506c1a = _0x46ac7c.getSixinData();
      _0x492f39.userSixinSwitch.checked = _0x506c1a.userSixinSwitch;
      _0x492f39.sixinWords.setText(_0x506c1a.sixinWords + "");
    };
    this.getSixinData = function () {
      var _0x4eee83 = {
        userSixinSwitch: _0x5402dd.get("userSixinSwitch") != undefined ? _0x5402dd.get("userSixinSwitch") : false,
        sixinWords: _0x5402dd.get("sixinWords") != undefined ? _0x5402dd.get("sixinWords") : "你好\n好啊\n你好啊"
      };
      return _0x4eee83;
    };
    _0x46ac7c.saveSixinClick = function (_0x420d83) {
      var _0x51412b = {
        userSixinSwitch: _0x420d83.userSixinSwitch.checked,
        sixinWords: _0x420d83.sixinWords.text()
      };
      var _0x13b4fe = "";
      _0x13b4fe += "私信开关:" + (_0x51412b.userSixinSwitch ? "开启" : "关闭");
      _0x13b4fe += "\n私信话术:" + _0x51412b.sixinWords;
      _0x13b4fe += "\n总作品数:" + _0x51412b.zuopinMin + "-" + _0x51412b.zuopinMax;
      dialogs.build({
        title: "提示",
        content: _0x13b4fe,
        negative: "确定"
      }).on("negative", function () {
        toast("保存成功");
        _0x46ac7c.saveSixinData(_0x51412b);
      }).show();
    };
    _0x46ac7c.saveSixinData = function (_0x5046b5) {
      _0x5402dd.put("userSixinSwitch", _0x5046b5.userSixinSwitch);
      _0x5402dd.put("sixinWords", _0x5046b5.sixinWords);
    };
  }
  _0x47c331.exports = _0x33b055;
}, function (_0x36ab62, _0x4a9727, _0x193e73) {
  function _0x338fdf(_0x9d542d) {
    var _0x285210 = this,
      _0x1183d0 = _0x193e73(0),
      _0x211fdf = new (_0x193e73(2))();
    _0x285210.index = function () {
      _0x285210.start();
    };
    _0x285210.view = function () {};
    var _0x53a6a7 = {};
    this.end = function () {
      toastLog("停止");
      threads.shutDownAll();
    };
    _0x285210.start = function () {
      if (!_0x1183d0.checkServer()) {
        return false;
      }
      home();
      _0x1183d0.showConsole("wx抢红包");
      log("界面运行:群页面");
      log("适用于人群:");
      log("手脑不灵活");
      log("反应慢");
      log("手部受伤");
      _0x211fdf.index();
      _0x211fdf.ClickListener({
        clickStart: function _0x523125() {
          _0x285210.action();
        },
        clickStop: function _0x1b7df0() {
          _0x285210.end();
        },
        clickExit: function _0x328dd6() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x285210.end();
            _0x211fdf.close();
            _0x1183d0.closeConsole();
            toast("关闭");
          }).show();
        }
      });
    };
    _0x285210.action = function () {
      var _0x416dd2 = 1;
      _0x53a6a7.s1 = threads.start(function () {
        while (1) {
          log("抢红包中:", _0x416dd2++, "次");
          _0x285210.clickHongbao();
          sleep(200);
        }
      });
      _0x53a6a7.s2 = threads.start(function () {
        while (1) {
          _0x285210.clickKai();
          sleep(200);
        }
      });
    };
    _0x285210.clickKai = function () {
      try {
        var _0x47743f = desc("开").clickable(true).findOnce();
        _0x47743f != null && (sleep(200), log("开"), click(_0x47743f.bounds().centerX(), _0x47743f.bounds().centerY()), sleep(2000), back());
        var _0x47743f = textStartsWith("手慢了").textEndsWith("红包派完了").findOnce();
        _0x47743f != null && (sleep(200), log("手慢了，红包派完了"), back());
      } catch (_0x20da30) {
        log("getNewObj", _0x20da30);
        return null;
      }
    };
    _0x285210.clickHongbao = function () {
      try {
        var _0x2f8dfc = text("微信红包").filter(function (_0x324956) {
            var _0x2de830 = _0x324956.parent().parent().parent(),
              _0x3df2b8 = _0x2de830.findOne(text("已领取"));
            if (_0x3df2b8 != null) {
              return false;
            }
            var _0x2861e4 = _0x2de830.findOne(text("已被领完"));
            if (_0x2861e4 != null) {
              return false;
            }
            return true;
          }),
          _0x1fb97f = _0x2f8dfc.findOnce();
        if (_0x1fb97f == null) {
          return null;
        }
        var _0x570b0f = _0x1fb97f.parent().parent().parent();
        _0x570b0f.click();
        return _0x570b0f;
      } catch (_0xa14485) {
        log("getNewObj", _0xa14485);
        return null;
      }
    };
  }
  _0x36ab62.exports = _0x338fdf;
}, function (_0x5f8684, _0x7d05b1, _0x4f2e26) {
  function _0xdff752(_0x1a5d82) {
    var _0x3e9380 = "#00213e",
      _0x4a8ee1 = _0x4f2e26(1),
      _0x3e9380 = _0x4a8ee1.bgColor,
      _0x2fb3d2 = null,
      _0xe35805 = this,
      _0x9f244 = storages.create("wzke:Wx2"),
      _0xa0d5af = _0x4f2e26(0),
      _0x4c1462 = new (_0x4f2e26(2))(),
      _0x2c8c55 = new (_0x4f2e26(3))(),
      _0x50b654 = new (_0x4f2e26(34))();
    _0xe35805.index = function () {
      _0x2fb3d2 == null && (_0xe35805.initPopWin(), _0xe35805.initContent());
      _0xe35805.show();
    };
    _0xe35805.show = function () {
      _0x2fb3d2.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0xe35805.close = function () {
      _0x2fb3d2.dismiss();
    };
    _0xe35805.initPopWin = function () {
      _0x2fb3d2 = new android.widget.PopupWindow();
      var _0x40b6c9 = new android.transition.Fade();
      _0x40b6c9.setDuration(200);
      _0x2fb3d2.setEnterTransition(_0x40b6c9);
      var _0x1bd861 = new android.transition.Fade();
      _0x1bd861.setDuration(200);
      _0x1bd861.setMode(android.transition.Visibility.MODE_OUT);
      _0x2fb3d2.setExitTransition(_0x1bd861);
      _0x2fb3d2.setWidth(device.width);
      _0x2fb3d2.setHeight(device.height);
      _0x2fb3d2.setClippingEnabled(false);
      _0x2fb3d2.setFocusable(true);
      _0x2fb3d2.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
      _0x2fb3d2.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
    };
    this.initContent = function () {
      var _0x1820da = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android")),
        _0x56dceb = _0x3e9380,
        _0x45aee7 = "https://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/wx/shipinhao1.jpg",
        _0x3e4a62 = ui.inflate("\n<drawer>\n<verticalid=\"page1\"bg=\"".concat(_0x3e9380, "\"alpha=\"1\">\n<appbarbg=\"").concat(_0x3e9380, "\">\n<toolbarpaddingTop=\"").concat(_0x1820da, "px\"paddingBottom=\"5\"id=\"back\"title=\"返回\"/>\n<tabsid=\"tabs\"/>\n</appbar>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\"radius=\"24\">\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"评论观看\"gravity=\"center\"textColor=\"black\"textSize=\"24\"/>\n<textmarginTop=\"10\"textSize=\"18\"text=\"〓运行界面\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>视频</text>\n<imgw=\"80\"h=\"160\"id=\"yunxingImg\"src=\"").concat(_0x45aee7, "\"/>\n\n\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"20\"cardBackgroundColor=\"").concat(_0x56dceb, "\"cardUseCompatPadding=\"true\">\n<texttext=\"开始\"id=\"start\"bg=\"").concat(_0x56dceb, "\"textColor=\"#ffffff\"margin=\"12\"textSize=\"22\"w=\"*\"gravity=\"center\"/>\n</card>\n</vertical>\n</ScrollView>\n<ScrollView><verticalid=\"video\"></vertical></ScrollView>\n<ScrollView><verticalid=\"pinglunqu\"></vertical></ScrollView>\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x3e4a62.yunxingImg.click(function () {
        _0xa0d5af.alertImg(_0x45aee7);
      });
      _0x3e4a62.start.click(function () {
        dialogs.build({
          title: "确定开始吗？",
          content: "",
          positive: "确定",
          negative: "取消"
        }).on("positive", function () {
          _0xe35805.start();
        }).show();
      });
      _0x3e4a62.video.addView(_0xe35805.CreateVideoView());
      _0x3e4a62.pinglunqu.addView(_0xe35805.CreatepinglunView());
      _0x3e4a62.viewpager.setTitles(["功能介绍", "视频设置", "评论区设置"]);
      _0x3e4a62.tabs.setupWithViewPager(_0x3e4a62.viewpager);
      _0x3e4a62.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x4a8ee1.selectedTabIndicatorColor);
      _0x3e4a62.tabs.selectedTabIndicatorHeight = _0x4a8ee1.selectedTabIndicatorHeight;
      _0x3e4a62.back.click(function () {
        _0xe35805.close();
      });
      _0x2fb3d2.setContentView(_0x3e4a62);
    };
    _0xe35805.CreateVideoView = function () {
      var _0x35448e = _0x3e9380,
        _0x49687c = ui.inflate("\n<verticalbg=\"#ffffff\">\n<texttext=\"视频设置\"gravity=\"center\"margin=\"010\"textColor=\"black\"textSize=\"24\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"浏览数量\"/>\n<inputpaddingRight=\"10\"layout_weight=\"7\"gravity=\"right\"id=\"shipinCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<textpaddingRight=\"10\"textColor=\"black\"text=\"（个）\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"视频间隔\"/>\n<inputpaddingRight=\"10\"layout_weight=\"7\"gravity=\"right\"id=\"shipinJiange\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<textpaddingRight=\"10\"textColor=\"black\"text=\"（秒）\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"爱心概率\"/>\n<inputpaddingRight=\"10\"layout_weight=\"7\"gravity=\"right\"id=\"shipinLikeRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<textpaddingRight=\"10\"textColor=\"black\"text=\"（%）\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"喜欢概率\"/>\n<inputpaddingRight=\"10\"layout_weight=\"7\"gravity=\"right\"id=\"xinhuanRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<textpaddingRight=\"10\"textColor=\"black\"text=\"（%）\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"10020\"cardBackgroundColor=\"#19b38d\"cardUseCompatPadding=\"true\">\n<buttonid=\"videoViewContent\"text=\"保存视频设置\"bg=\"".concat(_0x35448e, "\"textSize=\"20\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n<verticalh=\"400\"w=\"auto\">\n</vertical>\n</vertical>\n")),
        _0x310cb6 = _0xe35805.getVideoData();
      _0x49687c.shipinCount.setText(_0x310cb6.shipinCount + "");
      _0x49687c.shipinJiange.setText(_0x310cb6.shipinJiange + "");
      _0x49687c.shipinLikeRate.setText(_0x310cb6.shipinLikeRate + "");
      _0x49687c.xinhuanRate.setText(_0x310cb6.xinhuanRate + "");
      _0x49687c.videoViewContent.click(function () {
        _0x9f244.put("shipinCount", parseInt(_0x49687c.shipinCount.text()));
        _0x9f244.put("shipinJiange", parseInt(_0x49687c.shipinJiange.text()));
        _0x9f244.put("shipinLikeRate", parseInt(_0x49687c.shipinLikeRate.text()));
        _0x9f244.put("xinhuanRate", parseInt(_0x49687c.xinhuanRate.text()));
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x49687c;
    };
    _0xe35805.getVideoData = function () {
      var _0x3e777d = {
        shipinCount: _0x9f244.get("shipinCount") != undefined ? _0x9f244.get("shipinCount") : 1,
        shipinJiange: _0x9f244.get("shipinJiange") != undefined ? _0x9f244.get("shipinJiange") : 1,
        shipinLikeRate: _0x9f244.get("shipinLikeRate") != undefined ? _0x9f244.get("shipinLikeRate") : 100,
        xinhuanRate: _0x9f244.get("xinhuanRate") != undefined ? _0x9f244.get("xinhuanRate") : 100
      };
      return _0x3e777d;
    };
    _0xe35805.CreatepinglunView = function () {
      var _0x19f21d = _0x3e9380,
        _0x5736d7 = ui.inflate("\n<verticalbg=\"#ffffff\">\n<texttext=\"评论区-楼层设置\"gravity=\"center\"margin=\"010\"textColor=\"black\"textSize=\"24\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论概率\"/>\n<inputpaddingRight=\"10\"layout_weight=\"7\"gravity=\"right\"id=\"shipinPinglunRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n<textpaddingRight=\"10\"textColor=\"black\"text=\"（%）\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"150200\"w=\"*\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<textw=\"auto\"textColor=\"black\"text=\"评论内容换行隔开多条随机\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"gravity=\"center\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"style=\"Widget.AppCompat.Button.Colored\"foreground=\"?selectableItemBackgroundBorderless\"/>\n</horizontal>\n<inputgravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"videoCommentWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"楼层用户数量（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"pinglunquUserCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"楼层喜欢概率（%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"pinglunquLikeRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"楼层执行间隔（秒）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"pinglunquWatchInterval\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"10020\"cardBackgroundColor=\"#19b38d\"cardUseCompatPadding=\"true\">\n<buttonid=\"pinglunquViewContent\"padding=\"105\"text=\"保存楼层设置\"bg=\"".concat(_0x19f21d, "\"textSize=\"20\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n<verticalh=\"400\"w=\"auto\">\n</vertical>\n</vertical>\n"));
      _0x5736d7.videoCommentWordsCopy.click(function () {
        setClip(_0x5736d7.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x5736d7.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x5736d7.videoCommentWordsPaste.click(function () {
        var _0x57d266 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x57d266,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x5736d7.videoCommentWords.setText(_0x57d266);
        }).show();
      });
      var _0x4830bb = _0xe35805.getPinglunquData();
      _0x5736d7.pinglunquUserCount.setText(_0x4830bb.pinglunquUserCount + "");
      _0x5736d7.pinglunquLikeRate.setText(_0x4830bb.pinglunquLikeRate + "");
      _0x5736d7.pinglunquWatchInterval.setText(_0x4830bb.pinglunquWatchInterval + "");
      _0x5736d7.shipinPinglunRate.setText(_0x4830bb.shipinPinglunRate + "");
      _0x5736d7.videoCommentWords.setText(_0x4830bb.videoCommentWords + "");
      _0x5736d7.pinglunquViewContent.click(function () {
        _0x9f244.put("pinglunquUserCount", parseInt(_0x5736d7.pinglunquUserCount.text()));
        _0x9f244.put("pinglunquLikeRate", parseInt(_0x5736d7.pinglunquLikeRate.text()));
        _0x9f244.put("pinglunquWatchInterval", parseInt(_0x5736d7.pinglunquWatchInterval.text()));
        _0x9f244.put("shipinPinglunRate", parseInt(_0x5736d7.shipinPinglunRate.text()));
        _0x9f244.put("videoCommentWords", _0x5736d7.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x5736d7;
    };
    _0xe35805.getPinglunquData = function () {
      var _0x441aa5 = {
        pinglunquUserCount: _0x9f244.get("pinglunquUserCount") != undefined ? _0x9f244.get("pinglunquUserCount") : 1,
        pinglunquLikeRate: _0x9f244.get("pinglunquLikeRate") != undefined ? _0x9f244.get("pinglunquLikeRate") : 100,
        pinglunquWatchInterval: _0x9f244.get("pinglunquWatchInterval") != undefined ? _0x9f244.get("pinglunquWatchInterval") : 3,
        shipinPinglunRate: _0x9f244.get("shipinPinglunRate") != undefined ? _0x9f244.get("shipinPinglunRate") : 100,
        videoCommentWords: _0x9f244.get("videoCommentWords") != undefined ? _0x9f244.get("videoCommentWords") : "好看\n期待更新\n你好"
      };
      return _0x441aa5;
    };
    _0xe35805.start = function () {
      if (!_0xa0d5af.checkServer()) {
        return false;
      }
      launchApp("微信");
      _0xa0d5af.showConsole("评论观看");
      _0x4c1462.index();
      _0x4c1462.ClickListener({
        clickStart: function _0x5c85f9() {
          threads.start(function () {
            _0xe35805.action1();
          });
        },
        clickStop: function _0x5de651() {
          toastLog("停止任务");
          threads.shutDownAll();
        },
        clickExit: function _0x28ffa6() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x4c1462.close();
            _0xa0d5af.closeConsole();
            toast("关闭");
            threads.shutDownAll();
          }).show();
        }
      });
    };
    _0xe35805.action1 = function () {
      var _0x32d9ea = _0xe35805.getVideoData(),
        _0x3fc29e = 1;
      _0xa0d5af.actionSleep("任务开始", 1);
      while (true) {
        if (_0x50b654.checkVidioType() == "视频") {
          var _0x4fe6db = random(1, 100) < _0x32d9ea.shipinLikeRate,
            _0x1ea365 = random(1, 100) < _0x32d9ea.xinhuanRate;
          _0x50b654.shipin_action(_0x4fe6db, _0x1ea365, true) && (_0xe35805.action2(), log("页面跳转：关闭评论区"), back(), sleep(2000));
          _0x3fc29e++;
          if (_0x3fc29e > _0x32d9ea.shipinCount) {
            break;
          }
          log("页面检验");
          var _0x33b26b = text("暂无评论").findOnce();
          _0x33b26b != null && (back(), sleep(2000));
        } else {
          log("跳过直播或其他");
        }
        _0x2c8c55.watchSleep("浏览间隔:", _0x32d9ea.shipinJiange);
        _0x50b654.shipinSwiperUp();
        sleep(2000);
      }
      log("任务结束");
    };
    _0xe35805.action2 = function () {
      var _0x32a4e4 = _0xe35805.getPinglunquData(),
        _0x33ab14 = _0x32a4e4.pinglunquUserCount,
        _0x513009 = _0x32a4e4.pinglunquLikeRate,
        _0x3ce08a = _0x32a4e4.pinglunquWatchInterval;
      random(1, 100) < _0x32a4e4.shipinPinglunRate && _0x50b654.pinglun(_0x32a4e4.videoCommentWords);
      if (text("暂无评论").findOnce()) {
        log("暂无评论");
        sleep(1000);
        return false;
      }
      var _0x1d3f24 = className("android.widget.TextView").textStartsWith("评论").findOne(2000);
      if (_0x1d3f24 == null) {
        _0x33ab14 = 0;
      } else {
        var _0x4fdd28 = _0x1d3f24.text().replace("评论", "");
        _0x4fdd28 = _0x50b654.checkNum(_0x4fdd28);
        _0x33ab14 > _0x4fdd28 && (_0x33ab14 = _0x4fdd28);
      }
      _0x3cead3 = [];
      var _0x18b80a = 0;
      while (_0x33ab14 > 0) {
        log("观看用户:", _0x33ab14);
        while (true) {
          _0x2c8c55.watchSleep("点击间隔:", _0x3ce08a);
          var _0x4e308e = _0xe35805.getUesr(_0x513009);
          if (_0x4e308e == null) {
            _0x18b80a++;
            break;
          }
          _0x18b80a = 0;
          _0x33ab14--;
          if (_0x33ab14 <= 0) {
            break;
          }
        }
        if (_0x33ab14 <= 0) {
          break;
        }
        if (_0x18b80a >= 3) {
          break;
        }
        swipe(device.width * 0.5, device.height * 0.8, device.width * 0.5, device.height * 0.3, 2000);
        sleep(2000);
      }
      sleep(2000);
    };
    var _0x3cead3 = [];
    _0xe35805.getUesr = function (_0x2691c3) {
      try {
        if (_0x3cead3.length >= 50) {
          _0x3cead3.shift();
        }
        var _0x4e6c7a = filter(function (_0x4ffd23) {
            var _0x3766c9 = _0xa0d5af.getPercent(_0x4ffd23),
              _0x208405 = _0x3766c9.w == 100 && _0x3766c9.h < 80 && _0x3766c9.h > 40,
              _0x315450 = true;
            if (_0x4ffd23.findOne(className("android.view.ViewGroup")) == null) {
              _0x315450 = false;
            }
            return _0x208405 && _0x315450;
          }),
          _0x1fce49 = _0x4e6c7a.className("androidx.recyclerview.widget.RecyclerView").findOne(10000);
        if (_0x1fce49 == null) {
          return null;
        }
        for (var _0x44491f = 0; _0x44491f < _0x1fce49.childCount(); _0x44491f++) {
          var _0x2d45f5 = _0x1fce49.child(_0x44491f),
            _0x5a394f = _0x2d45f5.findOne(className("android.view.ViewGroup"));
          if (_0x5a394f == null) {
            continue;
          }
          var _0x42a086 = _0x5a394f.findOne(className("android.widget.TextView"));
          if (_0x42a086 == null) {
            continue;
          }
          var _0x477f13 = _0x42a086.text();
          if (_0x3cead3.indexOf(_0x477f13) == -1) {
            _0x3cead3.push(_0x477f13);
            log("运行用户:" + _0x477f13);
            if (random(1, 100) < _0x2691c3) {
              if (_0x5a394f.childCount() < 4) {
                continue;
              }
              _0x5a394f.child(3).click();
              log("评论赞");
              sleep(1000);
            }
            return _0x5a394f;
          }
        }
        return null;
      } catch (_0x2d98a) {
        log("303", _0x2d98a);
        return null;
      }
    };
  }
  _0x5f8684.exports = _0xdff752;
}, function (_0x5dabe3, _0x31db13, _0x40fd0e) {
  function _0x1e1fbb() {
    var _0x1311af = this,
      _0x351043 = _0x40fd0e(0);
    _0x1311af.test = function () {
      log("WX.test");
    };
    _0x1311af.checkNum = function (_0xf25e26) {
      _0xf25e26 = _0xf25e26 + "";
      if (_0xf25e26.includes("万")) {
        _0xf25e26 = _0xf25e26.replace("w", "");
        _0xf25e26 = _0xf25e26 * 10000;
      } else {
        _0xf25e26.includes("亿") && (_0xf25e26 = _0xf25e26.replace("亿", ""), _0xf25e26 = _0xf25e26 * 100000000);
      }
      return parseInt(_0xf25e26);
    };
    _0x1311af.checkVidioType = function () {
      var _0x338dbc = className("android.widget.TextView").filter(function (_0x4d76f3) {
        var _0x1f4b43 = _0x351043.getPercent(_0x4d76f3);
        return _0x1f4b43.w > 0 && _0x1f4b43.h > 0;
      });
      sleep(3500);
      if (_0x338dbc.text("轻触进入直播间").findOnce() != null) {
        return "直播";
      }
      if (_0x338dbc.text("付费直播试看中").findOnce() != null) {
        return "直播";
      }
      return "视频";
    };
    _0x1311af.shipin_action = function (_0x143cee, _0x2fb8f0, _0x1c7997) {
      try {
        var _0x4e7f8d = 0,
          _0x5746d8 = device.height * 0.7,
          _0x34f615 = device.width,
          _0x197412 = device.height,
          _0x55ae38 = className("android.view.ViewGroup").boundsInside(_0x4e7f8d, _0x5746d8, _0x34f615, _0x197412).filter(function (_0x4291df) {
            var _0x54b0a4 = _0x351043.getPercent(_0x4291df);
            return _0x54b0a4.w == 100 && _0x54b0a4.h > 0 && _0x54b0a4.h < 10;
          }),
          _0x172d93 = _0x55ae38.clickable(true).findOne(3000);
        if (_0x172d93 == null) {
          return false;
        }
        var _0xdc572c = _0x172d93.find(className("android.widget.TextView"));
        if (_0xdc572c.length >= 5) {
          _0x143cee && (log("执行点赞"), _0xdc572c[_0xdc572c.length - 4].parent().click(), sleep(2000));
          _0x2fb8f0 && (log("执行喜欢"), _0xdc572c[_0xdc572c.length - 2].parent().click(), sleep(2000));
          if (_0x1c7997) {
            log("进入评论区");
            _0xdc572c[_0xdc572c.length - 1].parent().click();
            sleep(2000);
            return true;
          }
          return false;
        } else {
          return false;
        }
      } catch (_0x112607) {
        return false;
      }
    };
    _0x1311af.shipin_click_dianzan = function () {
      try {
        try {
          var _0x37ba0c = 0,
            _0x28abae = device.height * 0.7,
            _0x2a31f1 = device.width,
            _0x54989c = device.height,
            _0x142148 = className("android.view.ViewGroup").boundsInside(_0x37ba0c, _0x28abae, _0x2a31f1, _0x54989c).filter(function (_0x49931f) {
              var _0x53ea9c = _0x351043.getPercent(_0x49931f);
              return _0x53ea9c.w == 100 && _0x53ea9c.h > 0 && _0x53ea9c.h < 10;
            }),
            _0x58bb2b = _0x142148.findOne(3000);
          if (_0x58bb2b == null) {
            return false;
          }
          var _0xdc98e5 = _0x58bb2b.find(className("android.widget.LinearLayout").clickable(true));
          return _0xdc98e5.length == 4 || _0xdc98e5.length == 5 ? (_0xdc98e5[_0xdc98e5.length - 4].click(), true) : false;
        } catch (_0x461fa3) {
          log(_0x461fa3);
          return false;
        }
      } catch (_0x20c9b6) {
        log(_0x20c9b6);
        return false;
      }
    };
    _0x1311af.jumpShipinToPinglunqu = function () {
      try {
        log("页面跳转：视频到评论区");
        var _0x4f8cc8 = 0,
          _0x309920 = device.height * 0.7,
          _0x20ed6e = device.width,
          _0x4422d4 = device.height,
          _0x4c8e11 = className("android.view.ViewGroup").boundsInside(_0x4f8cc8, _0x309920, _0x20ed6e, _0x4422d4).filter(function (_0x36aeb5) {
            var _0x1b28eb = _0x351043.getPercent(_0x36aeb5);
            return _0x1b28eb.w == 100 && _0x1b28eb.h > 0 && _0x1b28eb.h < 10;
          }),
          _0x21fd88 = _0x4c8e11.findOne(3000);
        if (_0x21fd88 == null) {
          return false;
        }
        var _0x5b3ba4 = _0x21fd88.find(className("android.widget.LinearLayout").clickable(true));
        return _0x5b3ba4.length == 4 || _0x5b3ba4.length == 5 ? (_0x5b3ba4[_0x5b3ba4.length - 1].click(), true) : false;
      } catch (_0x520e09) {
        log(_0x520e09);
        return false;
      }
    };
    _0x1311af.pinglun = function (_0x5dc2c8) {
      if (_0x5dc2c8 == "") {
        return false;
      }
      var _0x4a50a6 = _0x5dc2c8.split("\n"),
        _0x9f2395 = _0x4a50a6[random(0, _0x4a50a6.length - 1)];
      log("发送评论:" + _0x9f2395);
      sleep(1000);
      if (!setText(_0x9f2395)) {
        input(_0x9f2395);
      }
      sleep(1000);
      var _0x2dea4f = text("回复").clickable(true).findOne(2000);
      _0x2dea4f != null && (_0x2dea4f.click(), sleep(2000));
    };
    _0x1311af.shipinSwiperUp = function () {
      log("滑动视频:下一个");
      var _0x21af6a = device.width * 0.7 + random(-20, 20),
        _0x403d4e = device.height * 0.75,
        _0x30b2f8 = device.width * 0.75 + random(-20, 20),
        _0x2e7437 = device.height * 0.17,
        _0xa710be = random(500, 600);
      swipe(_0x21af6a, _0x403d4e, _0x30b2f8, _0x2e7437, _0xa710be);
      sleep(2000);
    };
  }
  _0x5dabe3.exports = _0x1e1fbb;
}, function (_0x5ec37b, _0x4c2421, _0x4f1a93) {
  function _0x3a96bb(_0x468d59) {
    var _0x2d6036 = this,
      _0x41c16a = _0x4f1a93(1),
      _0x1d01eb = _0x41c16a.bgColor;
    this.index = function () {
      _0x2d6036.view();
    };
    this.view = function () {
      ui.statusBarColor(_0x1d01eb);
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"行业拓客\"bg=\"".concat(_0x1d01eb, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"浏览设置\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"浏览个数\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page1ShipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"浏览间隔\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page1WatchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page1WatchTimeMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"关注概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page1GuanzhuRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"点赞概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page1DianzanRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"点赞数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page1DianzanMin\"paddingLeft=\"20\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page1DianzanMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"评论概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page1PinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"评论数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page1PinglunMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page1PinglunMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<framepadding=\"200200\"w=\"*\"h=\"auto\">\n<textmarginTop=\"8\"h=\"20\"textColor=\"black\"text=\"评论内容（换行隔开,多条随机）\"/>\n<inputmarginTop=\"25\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"page1PinglunWords\"bg=\"#ffffff\"/>\n</frame>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"page1Save\"bg=\"").concat(_0x1d01eb, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"私信\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"page3GuanzhuSwitch\"text=\"关注开关\"margin=\"2010\"trackColor='").concat(_0x1d01eb, "'textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"page3SixinSwitch\"text=\"私信开关\"margin=\"2010\"trackColor='").concat(_0x1d01eb, "'textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"200200\">\n<textmarginTop=\"8\"textColor=\"black\"text=\"私信内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"page3SixinWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总获赞数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3HuozanMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3HuozanMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"120\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总关注数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3GuanzhuMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3GuanzhuMax\"paddingRight=\"30\"minWidth=\"120\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总粉丝数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3fensiMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3fensiMax\"paddingRight=\"30\"minWidth=\"120\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总作品数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3ZuopinMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3ZuopinMax\"paddingRight=\"30\"minWidth=\"120\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<buttonid=\"savePage3\"bg=\"").concat(_0x1d01eb, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"功能说明\"gravity=\"center\"textColor=\"black\"textSize=\"24\"/>\n\n<textmarginTop=\"10\"textSize=\"18\"text=\"〓操作界面\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>1:首页-精选-视频页</text>\n<text>2:首页-发现-进入视频页</text>\n<text>3:首页-朋友-进入视频页</text>\n<text>4:同城-进入视频页</text>\n\n\n<textmarginTop=\"20\"textSize=\"18\"text=\"〓功能\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>1:关注,点赞,随机评论</text>\n<text>2:随机私信,条件私信</text>\n\n<textmarginTop=\"20\"textSize=\"18\"text=\"〓使用范围\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>1:精准观看</text>\n<text>2:同城观看</text>\n\n\n</vertical>\n\n</ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["浏览设置", "私信设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x41c16a.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x41c16a.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x468d59.view(1);
      });
      _0x2d6036.initPage1();
      ui.page1Save.click(function () {
        _0x2d6036.page1Save();
      });
      _0x2d6036.initPage3();
      ui.savePage3.click(function () {
        _0x2d6036.savePage3();
      });
    };
    var _0x4824e5 = _0x4f1a93(0),
      _0x3ad81d = new (_0x4f1a93(2))(),
      _0x41e9c4 = new (_0x4f1a93(8))();
    this.start = function () {
      if (!_0x41e9c4.launchApp()) {
        return false;
      }
      if (!_0x4824e5.checkServer()) {
        return false;
      }
      _0x4824e5.showConsole("精准拓客");
      log("运行页面:首页-精选-视频页");
      log("运行页面:首页-发现-进入视频页");
      log("运行页面:首页-朋友-进入视频页");
      log("运行页面:同城-进入视频页");
      _0x3ad81d.index();
      _0x3ad81d.ClickListener({
        clickStart: function _0x3b772d() {
          threads.start(function () {
            _0x2d6036.action();
          });
        },
        clickStop: function _0x5b46d7() {
          threads.shutDownAll();
          log("停止");
        },
        clickExit: function _0x225555() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x3ad81d.close();
            _0x4824e5.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      var _0xfa9e10 = _0x2d6036.getPage1Data(),
        _0x2dd05f = _0x2d6036.getPage3Data();
      _0x41e9c4.watchSleep("开始任务:", 3);
      _0x41e9c4.closeTip();
      _0x41e9c4.checkHuakuai();
      for (var _0x3570ca = 0; _0x3570ca < _0xfa9e10.page1ShipinCount; _0x3570ca++) {
        _0x41e9c4.watchSleep("观看视频:", random(_0xfa9e10.page1WatchTimeMin, _0xfa9e10.page1WatchTimeMax));
        if (_0x41e9c4.isShipin() == "视频") {
          if (random(0, 100) < _0xfa9e10.page1GuanzhuRate) {
            _0x41e9c4.clickGuanzhu();
          }
          var _0x3fd473 = _0x41e9c4.getDianZanShu();
          log("点赞数值:" + _0x3fd473);
          var _0x30b794 = random(0, 100) < _0xfa9e10.page1DianzanRate && _0x3fd473 >= _0xfa9e10.page1DianzanMin && _0x3fd473 <= _0xfa9e10.page1DianzanMax;
          if (_0x30b794) {
            _0x41e9c4.clickDianzan();
          }
          var _0x289ed0 = _0x41e9c4.getPinglunShu();
          log("评论数值:" + _0x289ed0);
          var _0x294728 = random(0, 100) < _0xfa9e10.page1PinglunRate && _0x289ed0 >= _0xfa9e10.page1PinglunMin && _0x289ed0 <= _0xfa9e10.page1PinglunMax;
          _0x294728 && _0x41e9c4.clickPinglunqu() && (_0x41e9c4.pinglun(_0xfa9e10.page1PinglunWords), back(), sleep(2000));
          _0x2dd05f.page3SixinSwitch && _0x41e9c4.jumpShipinToUercenter() && (_0x2d6036.actionUercenter(), log("跳转界面:返回视频"), sleep(1000), back(), sleep(2000));
        }
        sleep(1000);
        _0x41e9c4.closePinglunquOnce();
        _0x41e9c4.jumpNextShipin();
      }
      alert("任务结束,运行数:" + _0xfa9e10.page1ShipinCount);
    };
    _0x2d6036.actionUercenter = function () {
      log("用户中心:任务开始");
      var _0x4900aa = _0x2d6036.getPage3Data(),
        _0x4fe920 = _0x41e9c4.getUsercenterInfo();
      if (!_0x41e9c4.sixinInfoCondition(_0x4fe920, _0x4900aa)) {
        return false;
      }
      if (_0x4900aa.page3GuanzhuSwitch) {
        _0x41e9c4.actionUercenterGuanzhu();
      }
      _0x41e9c4.actionUercenterSixin(_0x4900aa.page3SixinWords);
    };
    var _0x431633 = storages.create("wzke:K1");
    _0x2d6036.getPage1Data = function () {
      var _0x1b22ea = {
        page1ShipinCount: _0x431633.get("page1ShipinCount") != undefined ? _0x431633.get("page1ShipinCount") : 3,
        page1WatchTimeMin: _0x431633.get("page1WatchTimeMin") != undefined ? _0x431633.get("page1WatchTimeMin") : 1,
        page1WatchTimeMax: _0x431633.get("page1WatchTimeMax") != undefined ? _0x431633.get("page1WatchTimeMax") : 3,
        page1GuanzhuRate: _0x431633.get("page1GuanzhuRate") != undefined ? _0x431633.get("page1GuanzhuRate") : 100,
        page1DianzanRate: _0x431633.get("page1DianzanRate") != undefined ? _0x431633.get("page1DianzanRate") : 100,
        page1DianzanMin: _0x431633.get("page1DianzanMin") != undefined ? _0x431633.get("page1DianzanMin") : 0,
        page1DianzanMax: _0x431633.get("page1DianzanMax") != undefined ? _0x431633.get("page1DianzanMax") : 100000,
        page1PinglunRate: _0x431633.get("page1PinglunRate") != undefined ? _0x431633.get("page1PinglunRate") : 100,
        page1PinglunMin: _0x431633.get("page1PinglunMin") != undefined ? _0x431633.get("page1PinglunMin") : 0,
        page1PinglunMax: _0x431633.get("page1PinglunMax") != undefined ? _0x431633.get("page1PinglunMax") : 100000,
        page1PinglunWords: _0x431633.get("page1PinglunWords") != undefined ? _0x431633.get("page1PinglunWords") : "好\n啊\n你"
      };
      return _0x1b22ea;
    };
    _0x2d6036.initPage1 = function () {
      var _0xbb0404 = _0x2d6036.getPage1Data();
      ui.page1ShipinCount.setText(_0xbb0404.page1ShipinCount + "");
      ui.page1WatchTimeMin.setText(_0xbb0404.page1WatchTimeMin + "");
      ui.page1WatchTimeMax.setText(_0xbb0404.page1WatchTimeMax + "");
      ui.page1GuanzhuRate.setText(_0xbb0404.page1GuanzhuRate + "");
      ui.page1DianzanRate.setText(_0xbb0404.page1DianzanRate + "");
      ui.page1DianzanMin.setText(_0xbb0404.page1DianzanMin + "");
      ui.page1DianzanMax.setText(_0xbb0404.page1DianzanMax + "");
      ui.page1PinglunRate.setText(_0xbb0404.page1PinglunRate + "");
      ui.page1PinglunMin.setText(_0xbb0404.page1PinglunMin + "");
      ui.page1PinglunMax.setText(_0xbb0404.page1PinglunMax + "");
      ui.page1PinglunWords.setText(_0xbb0404.page1PinglunWords);
    };
    _0x2d6036.page1Save = function () {
      _0x431633.put("page1ShipinCount", parseInt(ui.page1ShipinCount.text()));
      _0x431633.put("page1WatchTimeMin", parseInt(ui.page1WatchTimeMin.text()));
      _0x431633.put("page1WatchTimeMax", parseInt(ui.page1WatchTimeMax.text()));
      _0x431633.put("page1GuanzhuRate", parseInt(ui.page1GuanzhuRate.text()));
      _0x431633.put("page1DianzanRate", parseInt(ui.page1DianzanRate.text()));
      _0x431633.put("page1DianzanMin", parseInt(ui.page1DianzanMin.text()));
      _0x431633.put("page1DianzanMax", parseInt(ui.page1DianzanMax.text()));
      _0x431633.put("page1PinglunRate", parseInt(ui.page1PinglunRate.text()));
      _0x431633.put("page1PinglunMin", parseInt(ui.page1PinglunMin.text()));
      _0x431633.put("page1PinglunMax", parseInt(ui.page1PinglunMax.text()));
      _0x431633.put("page1PinglunWords", ui.page1PinglunWords.text());
      dialogs.build({
        title: "保存成功",
        positive: "保存并开始",
        negative: "保存"
      }).on("positive", function () {
        _0x2d6036.start();
      }).on("negative", function () {
        toast("保存成功");
      }).show();
    };
    this.getPage3Data = function () {
      var _0xae17de = {
        page3GuanzhuSwitch: _0x431633.get("page3GuanzhuSwitch") != undefined ? _0x431633.get("page3GuanzhuSwitch") : true,
        page3SixinSwitch: _0x431633.get("page3SixinSwitch") != undefined ? _0x431633.get("page3SixinSwitch") : true,
        page3SixinWords: _0x431633.get("page3SixinWords") != undefined ? _0x431633.get("page3SixinWords") : "你好\n好啊\n你好啊",
        page3HuozanMin: _0x431633.get("page3HuozanMin") != undefined ? _0x431633.get("page3HuozanMin") : 0,
        page3HuozanMax: _0x431633.get("page3HuozanMax") != undefined ? _0x431633.get("page3HuozanMax") : 100000000,
        page3GuanzhuMin: _0x431633.get("page3GuanzhuMin") != undefined ? _0x431633.get("page3GuanzhuMin") : 0,
        page3GuanzhuMax: _0x431633.get("page3GuanzhuMax") != undefined ? _0x431633.get("page3GuanzhuMax") : 100000,
        page3fensiMin: _0x431633.get("page3fensiMin") != undefined ? _0x431633.get("page3fensiMin") : 0,
        page3fensiMax: _0x431633.get("page3fensiMax") != undefined ? _0x431633.get("page3fensiMax") : 100000000,
        page3ZuopinMin: _0x431633.get("page3ZuopinMin") != undefined ? _0x431633.get("page3ZuopinMin") : 0,
        page3ZuopinMax: _0x431633.get("page3ZuopinMax") != undefined ? _0x431633.get("page3ZuopinMax") : 10000
      };
      return _0xae17de;
    };
    _0x2d6036.initPage3 = function () {
      var _0x321683 = _0x2d6036.getPage3Data();
      ui.page3GuanzhuSwitch.checked = _0x321683.page3GuanzhuSwitch;
      ui.page3SixinSwitch.checked = _0x321683.page3SixinSwitch;
      ui.page3SixinWords.setText(_0x321683.page3SixinWords + "");
      ui.page3HuozanMin.setText(_0x321683.page3HuozanMin + "");
      ui.page3HuozanMax.setText(_0x321683.page3HuozanMax + "");
      ui.page3GuanzhuMin.setText(_0x321683.page3GuanzhuMin + "");
      ui.page3GuanzhuMax.setText(_0x321683.page3GuanzhuMax + "");
      ui.page3fensiMin.setText(_0x321683.page3fensiMin + "");
      ui.page3fensiMax.setText(_0x321683.page3fensiMax + "");
      ui.page3ZuopinMin.setText(_0x321683.page3ZuopinMin + "");
      ui.page3ZuopinMax.setText(_0x321683.page3ZuopinMax + "");
    };
    _0x2d6036.savePage3 = function () {
      _0x431633.put("page3GuanzhuSwitch", ui.page3GuanzhuSwitch.checked);
      _0x431633.put("page3SixinSwitch", ui.page3SixinSwitch.checked);
      _0x431633.put("page3SixinWords", ui.page3SixinWords.text());
      _0x431633.put("page3HuozanMin", parseInt(ui.page3HuozanMin.text()));
      _0x431633.put("page3HuozanMax", parseInt(ui.page3HuozanMax.text()));
      _0x431633.put("page3GuanzhuMin", parseInt(ui.page3GuanzhuMin.text()));
      _0x431633.put("page3GuanzhuMax", parseInt(ui.page3GuanzhuMax.text()));
      _0x431633.put("page3fensiMin", parseInt(ui.page3fensiMin.text()));
      _0x431633.put("page3fensiMax", parseInt(ui.page3fensiMax.text()));
      _0x431633.put("page3ZuopinMin", parseInt(ui.page3ZuopinMin.text()));
      _0x431633.put("page3ZuopinMax", parseInt(ui.page3ZuopinMax.text()));
      toast("保存成功");
    };
  }
  _0x5ec37b.exports = _0x3a96bb;
}, function (_0xdf3ce0, _0x442651, _0x7acb31) {
  function _0x56d26c(_0x3d1ade) {
    var _0x3b7adc = this,
      _0x22089c = _0x7acb31(1),
      _0x1bb511 = _0x22089c.bgColor;
    this.index = function () {
      _0x3b7adc.view();
    };
    this.view = function () {
      ui.statusBarColor(_0x1bb511);
      ui.layout("\n<drawer>\n<verticalbg=\"#ffffff\">\n<MyAppBartitle=\"评论截流\"bg=\"".concat(_0x1bb511, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\">\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"评论截流\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"用户个数\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page1UserCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"浏览间隔\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page1WatchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page1WatchTimeMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"page1Save\"bg=\"").concat(_0x1bb511, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"浏览作品\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"看作品数\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page2ShipinCount\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"浏览间隔\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page2WatchTimeMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page2WatchTimeMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"关注概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page2GuanzhuRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"点赞概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page2DianzanRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"点赞数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page2DianzanMin\"paddingLeft=\"20\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page2DianzanMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"评论概率（0-100%）\"/>\n<inputlayout_weight=\"7\"paddingRight=\"30\"gravity=\"right\"id=\"page2PinglunRate\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"评论数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page2PinglunMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page2PinglunMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"80\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<framepadding=\"200200\"w=\"*\"h=\"auto\">\n<textmarginTop=\"8\"h=\"20\"textColor=\"black\"text=\"评论内容（换行隔开,多条随机）\"/>\n<inputmarginTop=\"25\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"page2PinglunWords\"bg=\"#ffffff\"/>\n</frame>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<buttonid=\"page2Save\"bg=\"").concat(_0x1bb511, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalbg=\"#ffffff\">\n<texttext=\"私信\"margin=\"10\"gravity=\"center\"w=\"*\"textColor=\"black\"textSize=\"20\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"page3GuanzhuSwitch\"text=\"关注开关\"margin=\"2010\"trackColor='").concat(_0x1bb511, "'textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<SwitchWidget-Se7enid=\"page3SixinSwitch\"text=\"私信开关\"margin=\"2010\"trackColor='").concat(_0x1bb511, "'textColor=\"black\"checked=\"\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"200200\">\n<textmarginTop=\"8\"textColor=\"black\"text=\"私信内容（换行隔开,多条随机）\"/>\n<inputhint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"page3SixinWords\"bg=\"#ffffff\"/>\n</vertical>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总获赞数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3HuozanMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3HuozanMax\"paddingRight=\"30\"gravity=\"right\"minWidth=\"120\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总关注数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3GuanzhuMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3GuanzhuMax\"paddingRight=\"30\"minWidth=\"120\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总粉丝数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3fensiMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3fensiMax\"paddingRight=\"30\"minWidth=\"120\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<horizontalweightSum=\"10\"gravity=\"center_vertical\">\n<textlayout_weight=\"3\"paddingLeft=\"20\"textColor=\"black\"text=\"总作品数\"/>\n<horizontallayout_weight=\"7\"gravity=\"right\">\n<texttextColor=\"black\"text=\"下限:\"/>\n<inputid=\"page3ZuopinMin\"minWidth=\"50\"gravity=\"center\"inputType=\"number\"bg=\"#ffffff\"/>\n<texttextColor=\"black\"text=\"上限:\"/>\n<inputid=\"page3ZuopinMax\"paddingRight=\"30\"minWidth=\"120\"gravity=\"right\"inputType=\"number\"bg=\"#ffffff\"/>\n</horizontal>\n</horizontal>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n\n<buttonid=\"savePage3\"bg=\"").concat(_0x1bb511, "\"layout_margin='30'textSize=\"20\"layout_gravity=\"center\"text=\"保存\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</vertical>\n</ScrollView>\n\n<ScrollView>\n<verticalpadding=\"16\">\n<texttext=\"功能说明\"gravity=\"center\"textColor=\"black\"textSize=\"24\"/>\n\n<textmarginTop=\"10\"textSize=\"18\"text=\"〓操作界面\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>1:视屏页面-打开评论区</text>\n\n\n<textmarginTop=\"20\"textSize=\"18\"text=\"〓功能\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>1:回复关键词筛选</text>\n<text>2:随机私信,条件私信,关注</text>\n<text>3:浏览用户作品,作品点赞,关注,评论</text>\n\n<textmarginTop=\"20\"textSize=\"18\"text=\"〓使用范围\"/>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<text>1:行业截流</text>\n\n</vertical>\n\n</ScrollView>\n</viewpager>\n\n</vertical>\n</drawer>\n"));
      ui.viewpager.setTitles(["评论截流", "浏览设置", "私信设置", "功能说明"]);
      ui.tabs.setupWithViewPager(ui.viewpager);
      ui.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x22089c.selectedTabIndicatorColor);
      ui.tabs.selectedTabIndicatorHeight = _0x22089c.selectedTabIndicatorHeight;
      ui.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      activity.getWindow().setSoftInputMode(WindowManager.LayoutParams.SOFT_INPUT_ADJUST_PAN);
      ui._backButton.click(function () {
        _0x3d1ade.view(1);
      });
      _0x3b7adc.initpage1();
      ui.page1Save.click(function () {
        _0x3b7adc.page1Save();
      });
      _0x3b7adc.initpage2();
      ui.page2Save.click(function () {
        _0x3b7adc.page2Save();
      });
      _0x3b7adc.initPage3();
      ui.savePage3.click(function () {
        _0x3b7adc.savePage3();
      });
    };
    var _0x49aa90 = _0x7acb31(0),
      _0x322bdf = new (_0x7acb31(2))(),
      _0x44d4de = new (_0x7acb31(8))();
    this.start = function () {
      if (!_0x44d4de.launchApp()) {
        return false;
      }
      if (!_0x49aa90.checkServer()) {
        return false;
      }
      _0x49aa90.showConsole("评论截流");
      log("运行页面:视频-打开评论区");
      _0x322bdf.index();
      _0x322bdf.ClickListener({
        clickStart: function _0x3d04f4() {
          threads.start(function () {
            _0x3b7adc.action();
          });
        },
        clickStop: function _0x38eeb3() {
          threads.shutDownAll();
          log("停止");
        },
        clickExit: function _0x21959b() {
          dialogs.build({
            title: "确认要关闭吗",
            positive: "确认",
            negative: "取消"
          }).on("positive", function () {
            _0x322bdf.close();
            _0x49aa90.closeConsole();
            threads.shutDownAll();
            toast("关闭");
          }).show();
        }
      });
    };
    this.action = function () {
      _0x44d4de.watchSleep("开始任务:", 3);
      _0x44d4de.closeTip();
      _0x44d4de.checkHuakuai();
      var _0x4478eb = _0x3b7adc.getpage1Data(),
        _0x14273a = 1,
        _0x22ef5c = [];
      while (_0x14273a <= _0x4478eb.page1UserCount) {
        while (_0x14273a <= _0x4478eb.page1UserCount) {
          log("观看评论");
          sleep(1000);
          var _0x54b82a = _0x44d4de.getPinglunUser(_0x22ef5c, "");
          if (_0x54b82a == null) {
            log("本页看完");
            break;
          }
          var _0x19887a = _0x54b82a.findOne(id("com.smile.gifmaker:id/name"));
          if (_0x19887a == null) {
            continue;
          }
          log("跳转页面:第" + _0x14273a + "个用户");
          sleep(1000);
          _0x19887a.click();
          sleep(2000);
          this.actionUserAction();
          log("跳转页面:返回评论区");
          sleep(1000);
          back();
          sleep(2000);
          _0x14273a++;
        }
        if (_0x14273a > _0x4478eb.page1UserCount) {
          log("任务楼层结束");
          break;
        }
        if (text("没有更多评论").findOnce()) {
          log("没有更多评论");
          break;
        }
        if (id("com.smile.gifmaker.comment_detail:id/no_more_content").className("android.view.View").findOnce()) {
          log("没有更多评论");
          break;
        }
        log("滑动评论");
        sleep(1000);
        var _0x32f4e9 = device.width * 0.7,
          _0x482850 = device.height * 0.85,
          _0x27d27b = device.width * 0.7,
          _0x258490 = device.height * 0.4;
        swipe(_0x32f4e9, _0x482850, _0x27d27b, _0x258490, 3000);
        sleep(1000);
      }
      alert("任务结束,运行数:" + _0x4478eb.page1UserCount);
    };
    this.actionUserAction = function () {
      var _0x5471f4 = _0x3b7adc.getpage2Data(),
        _0x531f85 = _0x3b7adc.getPage3Data(),
        _0x19a0ba = _0x44d4de.getUsercenterInfo(),
        _0xde8736 = _0x44d4de.userCenterContidion(_0x19a0ba, _0x531f85);
      if (_0xde8736 && _0x531f85.page3GuanzhuSwitch) {
        _0x44d4de.actionUercenterGuanzhu();
      }
      if (_0xde8736 && _0x531f85.page3SixinSwitch) {
        _0x44d4de.actionUercenterSixin(_0x531f85.page3SixinWords);
      }
      if (_0x19a0ba.zuopin < _0x5471f4.page2ShipinCount) {
        _0x5471f4.page2ShipinCount = _0x19a0ba.zuopin;
      }
      if (_0x5471f4.page2ShipinCount > 0 && _0x44d4de.jumpUercenterToFisetshipin()) {
        for (var _0x375226 = 0; _0x375226 < _0x5471f4.page2ShipinCount; _0x375226++) {
          _0x44d4de.watchSleep("观看视频:", random(_0x5471f4.page2WatchTimeMin, _0x5471f4.page2WatchTimeMax));
          if (_0x44d4de.isShipin() == "视频") {
            if (random(0, 100) < _0x5471f4.page2GuanzhuRate) {
              _0x44d4de.clickGuanzhu();
            }
            var _0x2c2696 = _0x44d4de.getDianZanShu();
            log("点赞数值:" + _0x2c2696);
            var _0x4e7cd = random(0, 100) < _0x5471f4.page2DianzanRate && _0x2c2696 >= _0x5471f4.page2DianzanMin && _0x2c2696 <= _0x5471f4.page2DianzanMax;
            if (_0x4e7cd) {
              _0x44d4de.clickDianzan();
            }
            var _0x5d5527 = _0x44d4de.getPinglunShu();
            log("评论数值:" + _0x5d5527);
            var _0x3bcd5c = random(0, 100) <= _0x5471f4.page2PinglunRate && _0x5d5527 >= _0x5471f4.page2PinglunMin && _0x5d5527 <= _0x5471f4.page2PinglunMax;
            _0x3bcd5c && _0x44d4de.clickPinglunqu() && (_0x44d4de.pinglun(_0x5471f4.page2PinglunWords), back(), sleep(2000));
          }
          sleep(1000);
          _0x44d4de.closePinglunquOnce();
          _0x44d4de.jumpNextShipin();
        }
        log("页面跳转:返回用户中心");
        sleep(1000);
        back();
        sleep(2000);
      }
    };
    _0x3b7adc.actionUercenter = function () {
      log("用户中心:任务开始");
      var _0x501a13 = _0x3b7adc.getPage3Data(),
        _0x1ef2f2 = _0x44d4de.getUsercenterInfo();
      if (!_0x44d4de.sixinInfoCondition(_0x1ef2f2, _0x501a13)) {
        return false;
      }
      if (_0x501a13.page3GuanzhuSwitch) {
        _0x44d4de.actionUercenterGuanzhu();
      }
      _0x44d4de.actionUercenterSixin(_0x501a13.page3SixinWords);
    };
    var _0x3522be = storages.create("wzke:K2");
    _0x3b7adc.getpage1Data = function () {
      var _0x584d34 = {
        page1UserCount: _0x3522be.get("page1UserCount") != undefined ? _0x3522be.get("page1UserCount") : 3,
        page1WatchTimeMin: _0x3522be.get("page1WatchTimeMin") != undefined ? _0x3522be.get("page1WatchTimeMin") : 1,
        page1WatchTimeMax: _0x3522be.get("page1WatchTimeMax") != undefined ? _0x3522be.get("page1WatchTimeMax") : 3
      };
      return _0x584d34;
    };
    _0x3b7adc.initpage1 = function () {
      var _0x3c2a60 = _0x3b7adc.getpage1Data();
      ui.page1UserCount.setText(_0x3c2a60.page1UserCount + "");
      ui.page1WatchTimeMin.setText(_0x3c2a60.page1WatchTimeMin + "");
      ui.page1WatchTimeMax.setText(_0x3c2a60.page1WatchTimeMax + "");
    };
    _0x3b7adc.page1Save = function () {
      _0x3522be.put("page1UserCount", parseInt(ui.page1UserCount.text()));
      _0x3522be.put("page1WatchTimeMin", parseInt(ui.page1WatchTimeMin.text()));
      _0x3522be.put("page1WatchTimeMax", parseInt(ui.page1WatchTimeMax.text()));
      dialogs.build({
        title: "保存成功",
        positive: "保存并开始",
        negative: "保存"
      }).on("positive", function () {
        _0x3b7adc.start();
      }).on("negative", function () {
        toast("保存成功");
      }).show();
    };
    _0x3b7adc.getpage2Data = function () {
      var _0x403f67 = {
        page2ShipinCount: _0x3522be.get("page2ShipinCount") != undefined ? _0x3522be.get("page2ShipinCount") : 3,
        page2WatchTimeMin: _0x3522be.get("page2WatchTimeMin") != undefined ? _0x3522be.get("page2WatchTimeMin") : 1,
        page2WatchTimeMax: _0x3522be.get("page2WatchTimeMax") != undefined ? _0x3522be.get("page2WatchTimeMax") : 3,
        page2GuanzhuRate: _0x3522be.get("page2GuanzhuRate") != undefined ? _0x3522be.get("page2GuanzhuRate") : 100,
        page2DianzanRate: _0x3522be.get("page2DianzanRate") != undefined ? _0x3522be.get("page2DianzanRate") : 100,
        page2DianzanMin: _0x3522be.get("page2DianzanMin") != undefined ? _0x3522be.get("page2DianzanMin") : 0,
        page2DianzanMax: _0x3522be.get("page2DianzanMax") != undefined ? _0x3522be.get("page2DianzanMax") : 100000,
        page2PinglunRate: _0x3522be.get("page2PinglunRate") != undefined ? _0x3522be.get("page2PinglunRate") : 100,
        page2PinglunMin: _0x3522be.get("page2PinglunMin") != undefined ? _0x3522be.get("page2PinglunMin") : 0,
        page2PinglunMax: _0x3522be.get("page2PinglunMax") != undefined ? _0x3522be.get("page2PinglunMax") : 100000,
        page2PinglunWords: _0x3522be.get("page2PinglunWords") != undefined ? _0x3522be.get("page2PinglunWords") : "好\n啊\n你"
      };
      return _0x403f67;
    };
    _0x3b7adc.initpage2 = function () {
      var _0x5c7277 = _0x3b7adc.getpage2Data();
      ui.page2ShipinCount.setText(_0x5c7277.page2ShipinCount + "");
      ui.page2WatchTimeMin.setText(_0x5c7277.page2WatchTimeMin + "");
      ui.page2WatchTimeMax.setText(_0x5c7277.page2WatchTimeMax + "");
      ui.page2GuanzhuRate.setText(_0x5c7277.page2GuanzhuRate + "");
      ui.page2DianzanRate.setText(_0x5c7277.page2DianzanRate + "");
      ui.page2DianzanMin.setText(_0x5c7277.page2DianzanMin + "");
      ui.page2DianzanMax.setText(_0x5c7277.page2DianzanMax + "");
      ui.page2PinglunRate.setText(_0x5c7277.page2PinglunRate + "");
      ui.page2PinglunMin.setText(_0x5c7277.page2PinglunMin + "");
      ui.page2PinglunMax.setText(_0x5c7277.page2PinglunMax + "");
      ui.page2PinglunWords.setText(_0x5c7277.page2PinglunWords);
    };
    _0x3b7adc.page2Save = function () {
      _0x3522be.put("page2ShipinCount", parseInt(ui.page2ShipinCount.text()));
      _0x3522be.put("page2WatchTimeMin", parseInt(ui.page2WatchTimeMin.text()));
      _0x3522be.put("page2WatchTimeMax", parseInt(ui.page2WatchTimeMax.text()));
      _0x3522be.put("page2GuanzhuRate", parseInt(ui.page2GuanzhuRate.text()));
      _0x3522be.put("page2DianzanRate", parseInt(ui.page2DianzanRate.text()));
      _0x3522be.put("page2DianzanMin", parseInt(ui.page2DianzanMin.text()));
      _0x3522be.put("page2DianzanMax", parseInt(ui.page2DianzanMax.text()));
      _0x3522be.put("page2PinglunRate", parseInt(ui.page2PinglunRate.text()));
      _0x3522be.put("page2PinglunMin", parseInt(ui.page2PinglunMin.text()));
      _0x3522be.put("page2PinglunMax", parseInt(ui.page2PinglunMax.text()));
      _0x3522be.put("page2PinglunWords", ui.page2PinglunWords.text());
      toast("保存成功");
    };
    this.getPage3Data = function () {
      var _0x150b40 = {
        page3GuanzhuSwitch: _0x3522be.get("page3GuanzhuSwitch") != undefined ? _0x3522be.get("page3GuanzhuSwitch") : true,
        page3SixinSwitch: _0x3522be.get("page3SixinSwitch") != undefined ? _0x3522be.get("page3SixinSwitch") : true,
        page3SixinWords: _0x3522be.get("page3SixinWords") != undefined ? _0x3522be.get("page3SixinWords") : "你好\n好啊\n你好啊",
        page3HuozanMin: _0x3522be.get("page3HuozanMin") != undefined ? _0x3522be.get("page3HuozanMin") : 0,
        page3HuozanMax: _0x3522be.get("page3HuozanMax") != undefined ? _0x3522be.get("page3HuozanMax") : 100000000,
        page3GuanzhuMin: _0x3522be.get("page3GuanzhuMin") != undefined ? _0x3522be.get("page3GuanzhuMin") : 0,
        page3GuanzhuMax: _0x3522be.get("page3GuanzhuMax") != undefined ? _0x3522be.get("page3GuanzhuMax") : 100000,
        page3fensiMin: _0x3522be.get("page3fensiMin") != undefined ? _0x3522be.get("page3fensiMin") : 0,
        page3fensiMax: _0x3522be.get("page3fensiMax") != undefined ? _0x3522be.get("page3fensiMax") : 100000000,
        page3ZuopinMin: _0x3522be.get("page3ZuopinMin") != undefined ? _0x3522be.get("page3ZuopinMin") : 0,
        page3ZuopinMax: _0x3522be.get("page3ZuopinMax") != undefined ? _0x3522be.get("page3ZuopinMax") : 10000
      };
      return _0x150b40;
    };
    _0x3b7adc.initPage3 = function () {
      var _0x5aa114 = _0x3b7adc.getPage3Data();
      ui.page3GuanzhuSwitch.checked = _0x5aa114.page3GuanzhuSwitch;
      ui.page3SixinSwitch.checked = _0x5aa114.page3SixinSwitch;
      ui.page3SixinWords.setText(_0x5aa114.page3SixinWords + "");
      ui.page3HuozanMin.setText(_0x5aa114.page3HuozanMin + "");
      ui.page3HuozanMax.setText(_0x5aa114.page3HuozanMax + "");
      ui.page3GuanzhuMin.setText(_0x5aa114.page3GuanzhuMin + "");
      ui.page3GuanzhuMax.setText(_0x5aa114.page3GuanzhuMax + "");
      ui.page3fensiMin.setText(_0x5aa114.page3fensiMin + "");
      ui.page3fensiMax.setText(_0x5aa114.page3fensiMax + "");
      ui.page3ZuopinMin.setText(_0x5aa114.page3ZuopinMin + "");
      ui.page3ZuopinMax.setText(_0x5aa114.page3ZuopinMax + "");
    };
    _0x3b7adc.savePage3 = function () {
      _0x3522be.put("page3GuanzhuSwitch", ui.page3GuanzhuSwitch.checked);
      _0x3522be.put("page3SixinSwitch", ui.page3SixinSwitch.checked);
      _0x3522be.put("page3SixinWords", ui.page3SixinWords.text());
      _0x3522be.put("page3HuozanMin", parseInt(ui.page3HuozanMin.text()));
      _0x3522be.put("page3HuozanMax", parseInt(ui.page3HuozanMax.text()));
      _0x3522be.put("page3GuanzhuMin", parseInt(ui.page3GuanzhuMin.text()));
      _0x3522be.put("page3GuanzhuMax", parseInt(ui.page3GuanzhuMax.text()));
      _0x3522be.put("page3fensiMin", parseInt(ui.page3fensiMin.text()));
      _0x3522be.put("page3fensiMax", parseInt(ui.page3fensiMax.text()));
      _0x3522be.put("page3ZuopinMin", parseInt(ui.page3ZuopinMin.text()));
      _0x3522be.put("page3ZuopinMax", parseInt(ui.page3ZuopinMax.text()));
      toast("保存成功");
    };
  }
  _0xdf3ce0.exports = _0x56d26c;
}, function (_0x38b2e9, _0x2f8381, _0x2cfaa4) {
  var _0x3bb88b = _0x2cfaa4(0),
    _0x7bde7a = {
      test: function () {
        log("test");
      },
      actionGuanzhu: function () {
        log("action:follow");
        sleep(1000);
        var _0x179149 = device.width * 0.8,
          _0x567e1c = device.height * 0.4,
          _0x4ef8fa = device.width,
          _0x3ff14a = device.height * 0.7,
          _0x33e659 = className("ImageView").boundsInside(_0x179149, _0x567e1c, _0x4ef8fa, _0x3ff14a).filter(function (_0x26813a) {
            var _0x43cff4 = _0x3bb88b.getPercent(_0x26813a);
            return _0x43cff4.w > 0 && _0x43cff4.w < 7 && _0x43cff4.h > 0 && _0x43cff4.h < 5;
          }),
          _0x22bb8e = _0x33e659.findOnce();
        if (_0x22bb8e == null) {
          return false;
        }
        click(_0x22bb8e.bounds().centerX(), _0x22bb8e.bounds().centerY());
        sleep(1000);
      },
      actionDianzan: function () {
        log("action:fabulous");
        sleep(1000);
        var _0x3e0294 = device.width * 0.8,
          _0x4f5ea8 = device.height * 0.15,
          _0x264cb3 = device.width,
          _0x199994 = device.height * 0.8,
          _0x560abb = className("TextView").boundsInside(_0x3e0294, _0x4f5ea8, _0x264cb3, _0x199994).filter(function (_0x4d5297) {
            return _0x4d5297.bounds().width() > 0 && _0x4d5297.bounds().height() > 0 && _0x4d5297.text() != "" && _0x4d5297.text() != "LIVE";
          }),
          _0x1ffd0d = _0x560abb.find();
        if (_0x1ffd0d.length > 0) {
          var _0x4e56fa = _0x1ffd0d[0];
          click(_0x4e56fa.bounds().centerX(), _0x4e56fa.bounds().top);
        }
      },
      jumpClickPinglunqu: function () {
        log("action:Opencommentarea");
        sleep(1000);
        var _0x1a1fb0 = device.width * 0.8,
          _0x20549c = device.height * 0.15,
          _0x4bdf27 = device.width,
          _0x492039 = device.height * 0.8,
          _0x55350a = className("TextView").boundsInside(_0x1a1fb0, _0x20549c, _0x4bdf27, _0x492039).filter(function (_0x175228) {
            return _0x175228.bounds().width() > 0 && _0x175228.bounds().height() > 0 && _0x175228.text() != "" && _0x175228.text() != "LIVE";
          }),
          _0x4def8d = _0x55350a.find();
        if (_0x4def8d.length > 0) {
          var _0x1e4ce1 = _0x4def8d[1];
          click(_0x1e4ce1.bounds().centerX(), _0x1e4ce1.bounds().top);
          sleep(2000);
          return true;
        } else {
          return false;
        }
      },
      jumpCloseinglunqu: function () {
        log("action:closecommentarea");
        sleep(1000);
        back();
        sleep(2000);
      },
      actionPinglun: function (_0x405548) {
        var _0xe5f042 = _0x405548.split("\n"),
          _0x20c1a7 = _0xe5f042[random(0, _0xe5f042.length - 1)];
        if (_0x405548 == "") {
          return false;
        }
        log("action:", _0x20c1a7);
        sleep(1000);
        var _0x120d07 = device.width * 0,
          _0x375d9a = device.height * 0.5,
          _0x23b4da = device.width,
          _0x4c3622 = device.height,
          _0x14b7b9 = className("EditText").boundsInside(_0x120d07, _0x375d9a, _0x23b4da, _0x4c3622).filter(function (_0x4fdef) {
            return _0x4fdef.bounds().width() > 0 && _0x4fdef.bounds().height() > 0;
          }),
          _0x2a7d49 = _0x14b7b9.findOne(2000);
        if (_0x2a7d49 == null) {
          return false;
        }
        click(_0x2a7d49.parent().bounds().width() * 0.95, _0x2a7d49.parent().bounds().centerY());
        sleep(2000);
        if (!setText(_0x20c1a7)) {
          input(_0x20c1a7);
        }
        sleep(1000);
        var _0x12a3ef = _0x14b7b9.findOne(2000);
        _0x12a3ef != null ? (click(_0x12a3ef.parent().bounds().width() * 0.95, _0x12a3ef.parent().bounds().centerY()), sleep(2000)) : (back(), sleep(2000));
      },
      getShipinDesc: function () {
        var _0x2bcefe = "",
          _0x260384 = device.width * 0,
          _0x18a2ed = device.height * 0.5,
          _0x1234cb = device.width,
          _0x4b6834 = device.height,
          _0x4dfff3 = boundsInside(_0x260384, _0x18a2ed, _0x1234cb, _0x4b6834).filter(function (_0x13ab4c) {
            return _0x13ab4c.bounds().width() > 0 && _0x13ab4c.bounds().height() > 0;
          }),
          _0x23074a = _0x4dfff3.id("com.ss.android.ugc.trill:id/title").findOnce();
        if (_0x23074a == null) {
          return _0x2bcefe;
        }
        var _0x152a43 = _0x23074a.parent().parent().parent(),
          _0x3eee25 = _0x152a43.find(className("TextView"));
        if (_0x3eee25.length < 2) {
          return _0x2bcefe;
        }
        _0x2bcefe = _0x3eee25[1].text();
        log(_0x2bcefe);
        return _0x2bcefe;
      },
      checkDescContainWords: function (_0x583de4, _0x52e541) {
        if (_0x52e541 == "") {
          return true;
        }
        if (_0x583de4 == "") {
          return false;
        }
        var _0x375f20 = _0x52e541.split("\n");
        for (var _0x26c93a = 0; _0x26c93a < _0x375f20.length; _0x26c93a++) {
          var _0x3ad6c0 = _0x375f20[_0x26c93a];
          if (_0x583de4.includes(_0x3ad6c0)) {
            log("containWords:" + _0x3ad6c0);
            return true;
          }
        }
        log("keywordsfail");
        return false;
      },
      shipinSwiperUp: function () {
        log("action:swiperUp");
        sleep(2000);
        var _0x268522 = device.width * 0.7 + random(-20, 20),
          _0x4a0f23 = device.height * 0.65,
          _0x263c4e = device.width * 0.7 + random(-20, 20),
          _0x3c2120 = device.height * 0.15,
          _0x5ead7f = random(150, 200);
        swipe(_0x268522, _0x4a0f23, _0x263c4e, _0x3c2120, _0x5ead7f);
        sleep(2000);
      }
    };
  _0x38b2e9.exports = _0x7bde7a;
}, function (_0x233864, _0x227790, _0x418b43) {
  function _0x190fc5(_0x20d0f8) {
    var _0xe21483 = this,
      _0x20d0f8 = _0x20d0f8,
      _0x123d65 = _0x418b43(1),
      _0x3340d9 = _0x418b43(39),
      _0xedfc4b = _0x123d65.bgColor,
      _0x2b82b5 = null,
      _0x14018c = null,
      _0x5f59d7 = storages.create("wzke:BZ1");
    _0xe21483.index = function () {
      _0x2b82b5 = _0x354be0.createPopWin();
      var _0x2e5573 = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android")),
        _0x47fbee = _0xedfc4b,
        _0x1fbab0 = "http://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/BZ.jpg";
      _0x14018c = ui.inflate("\n<drawer>\n<verticalid=\"BZ1\"bg=\"".concat(_0xedfc4b, "\"alpha=\"1\">\n<appbarbg=\"").concat(_0xedfc4b, "\">\n<toolbarpaddingTop=\"").concat(_0x2e5573, "px\"paddingBottom=\"5\"id=\"back\"title=\"返回\"/>\n<tabsid=\"tabs\"/>\n</appbar>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\"radius=\"24\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmarginTop=\"5\"textSize=\"18\"text=\"〓运行界面\"/>\n<text>视频界面</text>\n<imgw=\"80\"h=\"160\"id=\"yunxingImg\"src=\"").concat(_0x1fbab0, "\"/>\n<imgmarginTop=\"15\"marginBottom=\"15\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"18\"text=\"〓功能\"/>\n<text>概率关注-概率点赞-概率评论</text>\n<imgmarginTop=\"10\"marginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<cardlayout_gravity=\"center\"w=\"auto\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"cardBackgroundColor=\"").concat(_0x47fbee, "\"cardUseCompatPadding=\"true\">\n<texttext=\"开始\"padding=\"3010\"id=\"start\"bg=\"").concat(_0x47fbee, "\"textColor=\"#ffffff\"textSize=\"22\"gravity=\"center\"/>\n</card>\n</vertical>\n</ScrollView>\n<ScrollView><verticalid=\"video\"></vertical></ScrollView>\n\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x14018c.yunxingImg.click(function () {
        _0x354be0.alertImg(_0x1fbab0);
      });
      _0x14018c.start.click(function () {
        _0xe21483.start();
      });
      _0x14018c.viewpager.setTitles(["万能引流", "视频设置"]);
      _0x14018c.tabs.setupWithViewPager(_0x14018c.viewpager);
      _0x14018c.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x123d65.selectedTabIndicatorColor);
      _0x14018c.tabs.selectedTabIndicatorHeight = _0x123d65.selectedTabIndicatorHeight;
      _0x14018c.back.click(function () {
        _0x2b82b5.dismiss();
      });
      _0x2b82b5.setContentView(_0x14018c);
      _0x14018c.video.addView(_0xe21483.CreateVideoView());
      ui.run(function () {
        _0x2b82b5.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
        _0x2b82b5.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      });
      _0x2b82b5.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0xe21483.getVideoData = function () {
      var _0x314c2b = {
        videoCount: _0x5f59d7.get("videoCount") != undefined ? _0x5f59d7.get("videoCount") : 999,
        videoFollowRate: _0x5f59d7.get("videoFollowRate") != undefined ? _0x5f59d7.get("videoFollowRate") : 100,
        videoLikeRate: _0x5f59d7.get("videoLikeRate") != undefined ? _0x5f59d7.get("videoLikeRate") : 100,
        videoCommentRate: _0x5f59d7.get("videoCommentRate") != undefined ? _0x5f59d7.get("videoCommentRate") : 100,
        videoCommentWords: _0x5f59d7.get("videoCommentWords") != undefined ? _0x5f59d7.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行"
      };
      return _0x314c2b;
    };
    _0xe21483.CreateVideoView = function () {
      var _0x3c4703 = _0xedfc4b,
        _0x4c3e5b = ui.inflate("\n<verticalbg=\"#ffffff\"padding=\"016\">\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"执行数量（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关注概率（0-100%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoFollowRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"点赞概率（0-100%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoLikeRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论概率（0-100%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoCommentRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"155100\"w=\"*\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<textw=\"auto\"textColor=\"black\"text=\"评论内容（换行隔开）\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"color=\"white\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"color=\"white\"/>\n</horizontal>\n<inputtextSize=\"14\"gravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"videoCommentWords\"bg=\"#ffffff\"/>\n</vertical>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"10020\"cardBackgroundColor=\"#19b38d\"cardUseCompatPadding=\"true\">\n<buttonid=\"videoViewContent\"bg=\"".concat(_0x3c4703, "\"color=\"#ffffff\"textSize=\"20\"layout_gravity=\"center\"text=\"保存视频设置\"w=\"*\"/>\n</card>\n<verticalh=\"400\"w=\"auto\">\n</vertical>\n</vertical>\n"));
      _0x354be0.setBtnRadius(_0x4c3e5b.videoCommentWordsCopy, _0x3c4703);
      _0x354be0.setBtnRadius(_0x4c3e5b.videoCommentWordsPaste, _0x3c4703);
      _0x4c3e5b.videoCommentWordsCopy.click(function () {
        setClip(_0x4c3e5b.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x4c3e5b.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x4c3e5b.videoCommentWordsPaste.click(function () {
        var _0x5059be = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x5059be,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x4c3e5b.videoCommentWords.setText(_0x5059be);
        }).show();
      });
      var _0xee6fa8 = _0xe21483.getVideoData();
      _0x4c3e5b.videoCount.setText(_0xee6fa8.videoCount + "");
      _0x4c3e5b.videoFollowRate.setText(_0xee6fa8.videoFollowRate + "");
      _0x4c3e5b.videoLikeRate.setText(_0xee6fa8.videoLikeRate + "");
      _0x4c3e5b.videoCommentRate.setText(_0xee6fa8.videoCommentRate + "");
      _0x4c3e5b.videoCommentWords.setText(_0xee6fa8.videoCommentWords);
      _0x4c3e5b.videoViewContent.click(function () {
        _0x5f59d7.put("videoCount", parseInt(_0x4c3e5b.videoCount.text()));
        _0x5f59d7.put("videoFollowRate", parseInt(_0x4c3e5b.videoFollowRate.text()));
        _0x5f59d7.put("videoLikeRate", parseInt(_0x4c3e5b.videoLikeRate.text()));
        _0x5f59d7.put("videoCommentRate", parseInt(_0x4c3e5b.videoCommentRate.text()));
        _0x5f59d7.put("videoCommentWords", _0x4c3e5b.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x4c3e5b;
    };
    var _0x354be0 = _0x418b43(0),
      _0x1975dd = new (_0x418b43(2))();
    _0xe21483.start = function () {
      dialogs.build({
        title: "开始任务",
        content: "确定要开始吗?",
        positive: "确定",
        negative: "取消"
      }).on("positive", function () {
        if (!_0x354be0.checkServer()) {
          return false;
        }
        app.launchApp("哔哩哔哩");
        _0x354be0.showConsole("精准引流:");
        _0x1975dd.index();
        _0x1975dd.ClickListener({
          clickStart: function _0x520c58() {
            threads.start(function () {
              _0xe21483.action();
            });
          },
          clickStop: function _0x29cb8a() {
            toastLog("停止");
            threads.shutDownAll();
          },
          clickExit: function _0x3ac0fb() {
            dialogs.build({
              title: "确认要关闭吗",
              positive: "确认",
              negative: "取消"
            }).on("positive", function () {
              threads.shutDownAll();
              _0x1975dd.close();
              _0x354be0.closeConsole();
            }).show();
          }
        });
      }).show();
    };
    this.action = function () {
      var _0x2b9f3c = _0xe21483.getVideoData(),
        _0x38d5eb = 1;
      while (_0x38d5eb <= _0x2b9f3c.videoCount) {
        log("当前数量:", _0x38d5eb);
        random(0, 100) < _0x2b9f3c.videoFollowRate && _0x3340d9.clickGuanzhu();
        random(0, 100) < _0x2b9f3c.videoLikeRate && _0x3340d9.clickDianzan();
        if (random(0, 100) < _0x2b9f3c.videoCommentRate) {
          if (_0x3340d9.jumpShipinToPinglun() && _0x3340d9.clickPinglunquInput()) {
            var _0x38923c = _0x2b9f3c.videoCommentWords.split("\n");
            var _0x177934 = _0x38923c[random(0, _0x38923c.length - 1)];
            _0x3340d9.pinglunqu_sendContent(_0x177934);
            back();
            sleep(2000);
          }
        }
        _0x38d5eb++;
        _0x3340d9.actionSwipUp();
        sleep(2000);
      }
      threads.shutDownAll();
      log("本次任务结束");
    };
  }
  _0x233864.exports = _0x190fc5;
}, function (_0x6a3b2, _0x31bf30, _0x269c96) {
  var _0x30c32a = {
    test: function () {
      log("test");
    },
    clickGuanzhu: function () {
      log("关注");
      var _0x2b01bd = 0,
        _0x252928 = 0,
        _0xa58067 = device.width,
        _0x1470ea = device.height,
        _0x4ecfea = boundsInside(_0x2b01bd, _0x252928, _0xa58067, _0x1470ea).filter(function (_0xdf703a) {
          return _0xdf703a.bounds().width() > 0 && _0xdf703a.bounds().height() > 0;
        }),
        _0x5a1222 = _0x4ecfea.id("tv.danmaku.bili:id/follow").clickable(true).findOne(2000);
      if (_0x5a1222 == null) {
        return;
      }
      _0x5a1222.click();
      sleep(2000);
      var _0x2cbb7f = boundsInside(_0x2b01bd, _0x252928, _0xa58067, _0x1470ea).filter(function (_0x4363a3) {
          return _0x4363a3.bounds().width() > 0 && _0x4363a3.bounds().height() > 0;
        }),
        _0x165544 = _0x2cbb7f.text("取消").findOne(2000);
      if (_0x165544 != null) {
        _0x165544.click();
        sleep(2000);
        return;
      }
    },
    clickDianzan: function () {
      log("点赞");
      var _0x480ea9 = 0,
        _0xf6ea7 = 0,
        _0x3d7498 = device.width,
        _0x436486 = device.height,
        _0x4d4a6a = boundsInside(_0x480ea9, _0xf6ea7, _0x3d7498, _0x436486).filter(function (_0x1a199e) {
          return _0x1a199e.bounds().width() > 0 && _0x1a199e.bounds().height() > 0;
        }),
        _0x1bde0e = _0x4d4a6a.id("tv.danmaku.bili:id/like_icon").findOnce();
      if (_0x1bde0e != null) {
        _0x1bde0e.parent().click();
        sleep(2000);
        return true;
      }
    },
    getVideoTpye: function () {
      var _0x4cff27 = 0,
        _0x5a699e = 0,
        _0x525d2e = device.width,
        _0xb9dcdd = device.height,
        _0x19a2ef = boundsInside(_0x4cff27, _0x5a699e, _0x525d2e, _0xb9dcdd).textContains("广告").filter(function (_0x23763f) {
          return _0x23763f.bounds().width() > 0 && _0x23763f.bounds().height() > 0;
        }),
        _0x233974 = _0x19a2ef.findOnce();
      if (_0x233974 != null) {
        return "广告";
      }
      return "视频";
    },
    jumpShipinToPinglun: function () {
      var _0x55d8e3 = 0,
        _0x4bf590 = 0,
        _0xd58c4 = device.width,
        _0x3ece00 = device.height,
        _0x5a6e62 = boundsInside(_0x55d8e3, _0x4bf590, _0xd58c4, _0x3ece00).filter(function (_0x1dab85) {
          return _0x1dab85.bounds().width() > 0 && _0x1dab85.bounds().height() > 0;
        }),
        _0x2a6d74 = _0x5a6e62.id("tv.danmaku.bili:id/comment_icon").findOne(2000);
      return _0x2a6d74 != null ? (_0x2a6d74.parent().click(), sleep(2000), true) : false;
    },
    clickPinglunquInput: function () {
      var _0x4d3cc6 = 0,
        _0x1f27c2 = 0,
        _0x504182 = device.width,
        _0x504cc9 = device.height,
        _0x2da635 = boundsInside(_0x4d3cc6, _0x1f27c2, _0x504182, _0x504cc9).filter(function (_0x341cc4) {
          return _0x341cc4.bounds().width() > 0 && _0x341cc4.bounds().height() > 0;
        }),
        _0x18e6b8 = _0x2da635.className("android.widget.EditText").findOne(2000);
      return _0x18e6b8 != null ? (_0x18e6b8.click(), sleep(2000), true) : false;
    },
    pinglunqu_sendContent: function (_0x34a354) {
      log("评论", _0x34a354);
      if (!setText(_0x34a354)) {
        input(_0x34a354);
      }
      sleep(2000);
      var _0x1e6e43 = text("发布").findOne(3000);
      if (_0x1e6e43 != null) {
        _0x1e6e43.parent().click();
        sleep(2000);
        for (var _0xe0f392 = 0; _0xe0f392 < 2; _0xe0f392++) {
          _0x1e6e43 = text("发布").findOnce();
          _0x1e6e43 != null && (back(), sleep(1000));
          sleep(1000);
        }
      }
    },
    actionSwipUp: function () {
      for (var _0x15a6ea = 0; _0x15a6ea < 1; _0x15a6ea++) {
        var _0x148999 = device.width * 0.7 + random(0, 20),
          _0x137054 = device.height * 0.7,
          _0xa03644 = device.width * 0.6 + random(20, 40),
          _0x36c428 = device.height * 0.1;
        swipe(_0x148999, _0x137054, _0xa03644, _0x36c428, 120);
        sleep(1000);
      }
    }
  };
  _0x6a3b2.exports = _0x30c32a;
}, function (_0x17a7a, _0x51023b) {
  function _0xb2cbf3(_0x7113a8) {}
  _0x17a7a.exports = _0xb2cbf3;
}, function (_0x50ee4f, _0x2af5e5, _0x35d985) {
  function _0x401283(_0xe85889) {
    var _0x1090c4 = this,
      _0xe85889 = _0xe85889,
      _0x22e22a = _0x35d985(1),
      _0x2d07eb = _0x35d985(42),
      _0x5e323f = _0x22e22a.bgColor,
      _0x5a3c7b = null,
      _0x25ecbf = null,
      _0x4dd8ed = storages.create("wzke:XHS1");
    _0x1090c4.index = function () {
      _0x5a3c7b = _0x30c265.createPopWin();
      var _0x41ffce = context.getResources().getDimensionPixelSize(context.getResources().getIdentifier("status_bar_height", "dimen", "android")),
        _0x17e57c = _0x5e323f,
        _0x21adc7 = "http://wzkeimgs.oss-cn-hangzhou.aliyuncs.com/XHS.jpg";
      _0x25ecbf = ui.inflate("\n<drawer>\n<verticalid=\"XHS1\"bg=\"".concat(_0x5e323f, "\"alpha=\"1\">\n<appbarbg=\"").concat(_0x5e323f, "\">\n<toolbarpaddingTop=\"").concat(_0x41ffce, "px\"paddingBottom=\"5\"id=\"back\"title=\"返回\"/>\n<tabsid=\"tabs\"/>\n</appbar>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\"radius=\"24\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmarginTop=\"5\"textSize=\"18\"text=\"〓运行界面\"/>\n<text>视频界面</text>\n<imgw=\"80\"h=\"160\"id=\"yunxingImg\"src=\"").concat(_0x21adc7, "\"/>\n<imgmarginTop=\"15\"marginBottom=\"15\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<texttextSize=\"18\"text=\"〓参数设置\"/>\n<text>概率关注-概率点赞-概率评论</text>\n<imgmarginTop=\"10\"marginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<cardlayout_gravity=\"center\"w=\"auto\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"cardBackgroundColor=\"").concat(_0x17e57c, "\"cardUseCompatPadding=\"true\">\n<texttext=\"开始\"padding=\"3010\"id=\"start\"bg=\"").concat(_0x17e57c, "\"textColor=\"#ffffff\"textSize=\"22\"gravity=\"center\"/>\n</card>\n</vertical>\n</ScrollView>\n<ScrollView><verticalid=\"video\"></vertical></ScrollView>\n\n</viewpager>\n</vertical>\n</drawer>\n"));
      _0x25ecbf.yunxingImg.click(function () {
        _0x30c265.alertImg(_0x21adc7);
      });
      _0x25ecbf.start.click(function () {
        _0x1090c4.start();
      });
      _0x25ecbf.viewpager.setTitles(["万能引流", "视频设置"]);
      _0x25ecbf.tabs.setupWithViewPager(_0x25ecbf.viewpager);
      _0x25ecbf.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x22e22a.selectedTabIndicatorColor);
      _0x25ecbf.tabs.selectedTabIndicatorHeight = _0x22e22a.selectedTabIndicatorHeight;
      _0x25ecbf.back.click(function () {
        _0x5a3c7b.dismiss();
      });
      _0x5a3c7b.setContentView(_0x25ecbf);
      _0x25ecbf.video.addView(_0x1090c4.CreateVideoView());
      ui.run(function () {
        _0x5a3c7b.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
        _0x5a3c7b.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      });
      _0x5a3c7b.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x1090c4.getVideoData = function () {
      var _0x59c60d = {
        videoCount: _0x4dd8ed.get("videoCount") != undefined ? _0x4dd8ed.get("videoCount") : 999,
        videoFollowRate: _0x4dd8ed.get("videoFollowRate") != undefined ? _0x4dd8ed.get("videoFollowRate") : 100,
        videoLikeRate: _0x4dd8ed.get("videoLikeRate") != undefined ? _0x4dd8ed.get("videoLikeRate") : 100,
        videoCommentRate: _0x4dd8ed.get("videoCommentRate") != undefined ? _0x4dd8ed.get("videoCommentRate") : 100,
        videoCommentWords: _0x4dd8ed.get("videoCommentWords") != undefined ? _0x4dd8ed.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行"
      };
      return _0x59c60d;
    };
    _0x1090c4.CreateVideoView = function () {
      var _0x5b800d = _0x5e323f,
        _0x2a860f = ui.inflate("\n<verticalbg=\"#ffffff\"padding=\"016\">\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"执行数量（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关注概率（0-100%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoFollowRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"点赞概率（0-100%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoLikeRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"评论概率（0-100%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoCommentRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"155100\"w=\"*\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<textw=\"auto\"textColor=\"black\"text=\"评论内容（换行隔开）\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"color=\"white\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"color=\"white\"/>\n</horizontal>\n<inputtextSize=\"14\"gravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"videoCommentWords\"bg=\"#ffffff\"/>\n</vertical>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"10020\"cardBackgroundColor=\"#19b38d\"cardUseCompatPadding=\"true\">\n<buttonid=\"videoViewContent\"bg=\"".concat(_0x5b800d, "\"color=\"#ffffff\"textSize=\"20\"layout_gravity=\"center\"text=\"保存视频设置\"w=\"*\"/>\n</card>\n<verticalh=\"400\"w=\"auto\">\n</vertical>\n</vertical>\n"));
      _0x30c265.setBtnRadius(_0x2a860f.videoCommentWordsCopy, _0x5b800d);
      _0x30c265.setBtnRadius(_0x2a860f.videoCommentWordsPaste, _0x5b800d);
      _0x2a860f.videoCommentWordsCopy.click(function () {
        setClip(_0x2a860f.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x2a860f.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x2a860f.videoCommentWordsPaste.click(function () {
        var _0x37c752 = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x37c752,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x2a860f.videoCommentWords.setText(_0x37c752);
        }).show();
      });
      var _0x3b9229 = _0x1090c4.getVideoData();
      _0x2a860f.videoCount.setText(_0x3b9229.videoCount + "");
      _0x2a860f.videoFollowRate.setText(_0x3b9229.videoFollowRate + "");
      _0x2a860f.videoLikeRate.setText(_0x3b9229.videoLikeRate + "");
      _0x2a860f.videoCommentRate.setText(_0x3b9229.videoCommentRate + "");
      _0x2a860f.videoCommentWords.setText(_0x3b9229.videoCommentWords);
      _0x2a860f.videoViewContent.click(function () {
        _0x4dd8ed.put("videoCount", parseInt(_0x2a860f.videoCount.text()));
        _0x4dd8ed.put("videoFollowRate", parseInt(_0x2a860f.videoFollowRate.text()));
        _0x4dd8ed.put("videoLikeRate", parseInt(_0x2a860f.videoLikeRate.text()));
        _0x4dd8ed.put("videoCommentRate", parseInt(_0x2a860f.videoCommentRate.text()));
        _0x4dd8ed.put("videoCommentWords", _0x2a860f.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      return _0x2a860f;
    };
    var _0x30c265 = _0x35d985(0),
      _0x3174fe = new (_0x35d985(2))();
    _0x1090c4.start = function () {
      dialogs.build({
        title: "开始任务",
        content: "确定要开始吗?",
        positive: "确定",
        negative: "取消"
      }).on("positive", function () {
        if (!_0x30c265.checkServer()) {
          return false;
        }
        app.launchApp("小红书");
        _0x30c265.showConsole("小红薯:万能拓客");
        _0x3174fe.index();
        _0x3174fe.ClickListener({
          clickStart: function _0x1b922b() {
            threads.start(function () {
              _0x1090c4.action();
            });
          },
          clickStop: function _0x46a1ed() {
            toastLog("停止");
            threads.shutDownAll();
          },
          clickExit: function _0x571215() {
            dialogs.build({
              title: "确认要关闭吗",
              positive: "确认",
              negative: "取消"
            }).on("positive", function () {
              threads.shutDownAll();
              _0x3174fe.close();
              _0x30c265.closeConsole();
            }).show();
          }
        });
      }).show();
    };
    this.action = function () {
      var _0x17a797 = _0x1090c4.getVideoData(),
        _0x5d994f = 1;
      while (_0x5d994f <= _0x17a797.videoCount) {
        log("当前数量:", _0x5d994f);
        sleep(random(3, 12));
        random(0, 100) < _0x17a797.videoFollowRate && _0x2d07eb.clickGuanzhu();
        random(0, 100) < _0x17a797.videoLikeRate && _0x2d07eb.clickDianzan();
        if (random(0, 100) < _0x17a797.videoCommentRate) {
          if (_0x2d07eb.jumpShipinToPinglun() && _0x2d07eb.clickPinglunquInput()) {
            var _0x2ad618 = _0x17a797.videoCommentWords.split("\n");
            var _0x229d06 = _0x2ad618[random(0, _0x2ad618.length - 1)];
            _0x2d07eb.pinglunqu_sendContent(_0x229d06);
            back();
            sleep(3000);
            var _0x413d64 = text("发送").className("android.widget.TextView").findOne(3000);
            _0x413d64 != null && (back(), sleep(3000));
          }
        }
        _0x5d994f++;
        _0x2d07eb.actionSwipUp();
        sleep(2000);
      }
      threads.shutDownAll();
      log("本次任务结束");
    };
  }
  _0x50ee4f.exports = _0x401283;
}, function (_0x5954f0, _0x1162a8, _0x501b2b) {
  var _0x49be93 = {
    test: function () {
      log("test");
    },
    clickGuanzhu: function () {
      log("关注");
      var _0x3eb55c = 0,
        _0x3cc20b = 0,
        _0x2b9922 = device.width,
        _0x4cd34e = device.height,
        _0x2c2eff = boundsInside(_0x3eb55c, _0x3cc20b, _0x2b9922, _0x4cd34e).filter(function (_0x5e9a5a) {
          return _0x5e9a5a.bounds().width() > 0 && _0x5e9a5a.bounds().height() > 0;
        }),
        _0x4ba81a = _0x2c2eff.id("com.xingin.xhs:id/matrixFollowView").clickable(true).findOne(2000);
      if (_0x4ba81a == null) {
        return;
      }
      _0x4ba81a.click();
      sleep(2000);
      var _0x4851f8 = boundsInside(_0x3eb55c, _0x3cc20b, _0x2b9922, _0x4cd34e).filter(function (_0x526a11) {
          return _0x526a11.bounds().width() > 0 && _0x526a11.bounds().height() > 0;
        }),
        _0x242133 = _0x4851f8.text("取消").findOne(2000);
      if (_0x242133 != null) {
        _0x242133.click();
        sleep(2000);
        return;
      }
    },
    clickDianzan: function () {
      log("点赞");
      var _0x5c3b79 = 0,
        _0x5c4572 = 0,
        _0x3511c1 = device.width,
        _0x1bb7f5 = device.height,
        _0x3e817c = boundsInside(_0x5c3b79, _0x5c4572, _0x3511c1, _0x1bb7f5).filter(function (_0x1f9d37) {
          return _0x1f9d37.bounds().width() > 0 && _0x1f9d37.bounds().height() > 0;
        }),
        _0x4760de = _0x3e817c.id("com.xingin.xhs:id/likeLayout").findOnce();
      if (_0x4760de != null) {
        _0x4760de.click();
        sleep(2000);
        return true;
      }
    },
    getVideoTpye: function () {
      var _0x3120cd = 0,
        _0x24e0e8 = 0,
        _0xb0400f = device.width,
        _0x2a43ee = device.height,
        _0x4bc88c = boundsInside(_0x3120cd, _0x24e0e8, _0xb0400f, _0x2a43ee).textContains("广告").filter(function (_0x21bc42) {
          return _0x21bc42.bounds().width() > 0 && _0x21bc42.bounds().height() > 0;
        }),
        _0x3dd3bd = _0x4bc88c.findOnce();
      if (_0x3dd3bd != null) {
        return "广告";
      }
      return "视频";
    },
    jumpShipinToPinglun: function () {
      var _0x595fe8 = 0,
        _0x3edc26 = 0,
        _0x53a243 = device.width,
        _0x2c0ee9 = device.height,
        _0x4288ca = boundsInside(_0x595fe8, _0x3edc26, _0x53a243, _0x2c0ee9).filter(function (_0x388451) {
          return _0x388451.bounds().width() > 0 && _0x388451.bounds().height() > 0;
        }),
        _0x4a38ee = _0x4288ca.id("com.xingin.xhs:id/commentLayout").findOne(2000);
      return _0x4a38ee != null ? (_0x4a38ee.click(), sleep(2000), true) : false;
    },
    clickPinglunquInput: function () {
      var _0xae5ce4 = 0,
        _0x2c1c47 = 0,
        _0x400eb6 = device.width,
        _0x1e515c = device.height,
        _0x35b23a = boundsInside(_0xae5ce4, _0x2c1c47, _0x400eb6, _0x1e515c).filter(function (_0x546341) {
          return _0x546341.bounds().width() > 0 && _0x546341.bounds().height() > 0;
        }),
        _0x3d8147 = _0x35b23a.className("android.widget.EditText").findOne(2000);
      return _0x3d8147 != null ? (_0x3d8147.click(), sleep(2000), true) : false;
    },
    pinglunqu_sendContent: function (_0x1c881a) {
      log("评论", _0x1c881a);
      if (!setText(_0x1c881a)) {
        input(_0x1c881a);
      }
      sleep(2000);
      var _0x227364 = text("发送").findOne(3000);
      _0x227364 != null && (_0x227364.click(), sleep(3000));
    },
    actionSwipUp: function () {
      for (var _0x584008 = 0; _0x584008 < 1; _0x584008++) {
        var _0x2745af = device.width * 0.7 + random(0, 20),
          _0x16eccb = device.height * 0.7,
          _0x19c99a = device.width * 0.6 + random(20, 40),
          _0x285a12 = device.height * 0.1;
        swipe(_0x2745af, _0x16eccb, _0x19c99a, _0x285a12, 120);
        sleep(1000);
      }
    }
  };
  _0x5954f0.exports = _0x49be93;
}, function (_0x476fd6, _0x205d45, _0x554707) {
  function _0x31e853(_0x33269a) {
    var _0x184e9c = this,
      _0x33269a = _0x33269a,
      _0x54a0da = _0x554707(1),
      _0x50f41e = new (_0x554707(4))(),
      _0x5bbcf6 = _0x54a0da.bgColor,
      _0x19a178 = null,
      _0x359fac = null,
      _0x1930e9 = storages.create("wzke:page1");
    _0x184e9c.loginInfo = "";
    _0x184e9c.index = function () {
      _0x184e9c.loginInfo = _0x50f41e.getLoginInfo();
      _0x19a178 = _0x43e231.createPopWin();
      var _0x3a334c = _0x5bbcf6;
      _0x359fac = ui.inflate("\n<drawer>\n<verticalid=\"page1\"bg=\"".concat(_0x5bbcf6, "\"alpha=\"1\">\n<MyAppBartitle=\"喜欢浏览\"bg=\"").concat(_0x5bbcf6, "\"/>\n<tabsbg=\"#ffffff\"id=\"tabs\"/>\n<viewpagerid=\"viewpager\"bg=\"#ffffff\"radius=\"24\">\n<ScrollView>\n<verticalpadding=\"16\">\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓场景说明\"/>\n<textmargin=\"10\"textColor=\"black\"textSize=\"14\"text=\"在喜欢界面运行，自动观看视频，概率互动\"/>\n<imgmarginBottom=\"10\"h=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n\n<textmargin=\"100\"textSize=\"18\"textColor=\"black\"text=\"〓参数设置\"/>\n<cardid=\"mainbg\"margin=\"10\"w=\"*\"h=\"auto\">\n<verticalmargin=\"2\">\n<SwitchWidget-Se7enid=\"switch3\"marginTop=\"5\"padding='08'checked='true'text='混合拓客（随机触发一种）'trackColor='#e91e63'background='#ffffff'/>\n<verticalweightSum=\"10\"paddingLeft=\"0\">\n<ScrollView>\n<horizontal>\n<texttextSize=\"10\"text=\"关注\"/><inputid=\"hr1\"inputType=\"number\"text=\"15\"/><texttextSize=\"8\"text=\"%\"/>\n<texttextSize=\"10\"text=\"，喜欢\"/><inputid=\"hr2\"inputType=\"number\"text=\"60\"/><texttextSize=\"8\"text=\"%\"/>\n<texttextSize=\"10\"text=\"，评论\"/><inputid=\"hr3\"inputType=\"number\"text=\"25\"/><texttextSize=\"8\"text=\"%\"/>\n</horizontal>\n</ScrollView>\n</vertical>\n</vertical>\n</card>\n\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"20\"cardBackgroundColor=\"").concat(_0x5bbcf6, "\"cardUseCompatPadding=\"true\">\n<buttonid=\"start\"bg=\"").concat(_0x5bbcf6, "\"margin=\"5\"textSize=\"22\"layout_gravity=\"center\"foreground=\"?selectableItemBackgroundBorderless\"text=\"开始\"w=\"*\"style=\"Widget.AppCompat.Button.Colored\"/>\n</card>\n</vertical>\n</ScrollView>\n<ScrollView><verticalid=\"video\"></vertical></ScrollView>\n\n</viewpager>\n</vertical>\n</drawer>\n"));
      var _0x2f7d42 = _0x184e9c.getVideoData();
      _0x359fac.hr1.setText(_0x2f7d42.hr1 + "");
      _0x359fac.hr2.setText(_0x2f7d42.hr2 + "");
      _0x359fac.hr3.setText(_0x2f7d42.hr3 + "");
      _0x359fac.start.click(function () {
        _0x1930e9.put("hr1", parseInt(_0x359fac.hr1.text()));
        _0x1930e9.put("hr2", parseInt(_0x359fac.hr2.text()));
        _0x1930e9.put("hr3", parseInt(_0x359fac.hr3.text()));
        _0x184e9c.start();
      });
      _0x359fac.viewpager.setTitles(["基础设置", "视频设置"]);
      _0x359fac.tabs.setupWithViewPager(_0x359fac.viewpager);
      _0x359fac.tabs.selectedTabIndicatorColor = android.graphics.Color.parseColor(_0x54a0da.selectedTabIndicatorColor);
      _0x359fac.tabs.selectedTabIndicatorHeight = _0x54a0da.selectedTabIndicatorHeight;
      _0x359fac.tabs.setTabTextColors(colors.parseColor("#000000"), colors.parseColor("#6A5ACD"));
      _0x359fac._backButton.click(function () {
        _0x19a178.dismiss();
      });
      _0x19a178.setContentView(_0x359fac);
      var _0x5911c6 = ui.inflate("\n<verticalbg=\"#ffffff\"padding=\"016\">\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"执行数量（个）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoCount\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"关注概率（0-100%）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoFollowRate\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"区间喜欢（上限）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoLikeMax\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<horizontalweightSum=\"10\"padding=\"15000\">\n<textlayout_weight=\"3\"textColor=\"black\"text=\"区间评论（上限）\"/>\n<inputpaddingRight=\"30\"layout_weight=\"7\"gravity=\"right\"id=\"videoCommentMax\"inputType=\"number\"text=\"\"bg=\"#ffffff\"/>\n</horizontal>\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<verticalpadding=\"155100\"w=\"*\">\n<horizontalh=\"25\"gravity=\"left|center\">\n<textw=\"auto\"textColor=\"black\"text=\"评论内容（换行隔开）\"/>\n<buttonw=\"40\"id=\"videoCommentWordsCopy\"margin=\"52\"bg=\"#ff9800\"text=\"复制\"padding=\"0\"color=\"white\"/>\n<buttonw=\"40\"id=\"videoCommentWordsPaste\"margin=\"52\"bg=\"#ff9800\"text=\"粘贴\"padding=\"0\"color=\"white\"/>\n</horizontal>\n<inputtextSize=\"14\"gravity=\"top\"hint=\"请输入内容\"h=\"auto\"minLines=\"3\"id=\"videoCommentWords\"bg=\"#ffffff\"/>\n</vertical>\n\n<imgh=\"2px\"w=\"*\"bg=\"#d8d8d8\"/>\n<cardw=\"*\"h=\"auto\"cardCornerRadius=\"10\"cardElevation=\"5\"margin=\"10020\"cardBackgroundColor=\"#19b38d\"cardUseCompatPadding=\"true\">\n<buttonid=\"videoViewContent\"bg=\"".concat(_0x3a334c, "\"color=\"#ffffff\"textSize=\"20\"layout_gravity=\"center\"text=\"保存视频设置\"w=\"*\"/>\n</card>\n<verticalh=\"400\"w=\"auto\">\n</vertical>\n</vertical>\n"));
      _0x43e231.setBtnRadius(_0x5911c6.videoCommentWordsCopy, _0x3a334c);
      _0x43e231.setBtnRadius(_0x5911c6.videoCommentWordsPaste, _0x3a334c);
      _0x5911c6.videoCommentWordsCopy.click(function () {
        setClip(_0x5911c6.videoCommentWords.text());
        dialogs.build({
          title: "已复制到剪贴板",
          content: _0x5911c6.videoCommentWords.text(),
          positive: "好的"
        }).show();
      });
      _0x5911c6.videoCommentWordsPaste.click(function () {
        var _0x364adc = getClip();
        dialogs.build({
          title: "确定要粘贴到评论内容吗?",
          content: _0x364adc,
          positive: "确认",
          negative: "取消"
        }).on("positive", function () {
          _0x5911c6.videoCommentWords.setText(_0x364adc);
        }).show();
      });
      _0x5911c6.videoCount.setText(_0x2f7d42.videoCount + "");
      _0x5911c6.videoFollowRate.setText(_0x2f7d42.videoFollowRate + "");
      _0x5911c6.videoLikeMax.setText(_0x2f7d42.videoLikeMax + "");
      _0x5911c6.videoCommentMax.setText(_0x2f7d42.videoCommentMax + "");
      _0x5911c6.videoCommentWords.setText(_0x2f7d42.videoCommentWords);
      _0x5911c6.videoViewContent.click(function () {
        _0x1930e9.put("videoCount", parseInt(_0x5911c6.videoCount.text()));
        _0x1930e9.put("videoFollowRate", parseInt(_0x5911c6.videoFollowRate.text()));
        _0x1930e9.put("videoLikeMax", parseInt(_0x5911c6.videoLikeMax.text()));
        _0x1930e9.put("videoCommentMax", parseInt(_0x5911c6.videoCommentMax.text()));
        _0x1930e9.put("videoCommentWords", _0x5911c6.videoCommentWords.text());
        dialogs.build({
          title: "保存成功",
          content: "",
          positive: "确定"
        }).on("positive", function () {}).show();
      });
      _0x359fac.video.addView(_0x5911c6);
      ui.run(function () {
        _0x19a178.setSoftInputMode(android.widget.PopupWindow.INPUT_METHOD_NEEDED);
        _0x19a178.setSoftInputMode(android.view.WindowManager.LayoutParams.SOFT_INPUT_ADJUST_RESIZE);
      });
      _0x19a178.showAtLocation(activity.getWindow().getDecorView(), android.view.Gravity.LEFT, -1, -1);
    };
    _0x184e9c.getVideoData = function () {
      var _0x3cab8a = {
        hr1: _0x1930e9.get("hr1") != undefined ? _0x1930e9.get("hr1") : 10,
        hr2: _0x1930e9.get("hr2") != undefined ? _0x1930e9.get("hr2") : 50,
        hr3: _0x1930e9.get("hr3") != undefined ? _0x1930e9.get("hr3") : 5,
        videoCount: _0x1930e9.get("videoCount") != undefined ? _0x1930e9.get("videoCount") : 999,
        videoFollowRate: _0x1930e9.get("videoFollowRate") != undefined ? _0x1930e9.get("videoFollowRate") : 100,
        videoLikeMax: _0x1930e9.get("videoLikeMax") != undefined ? _0x1930e9.get("videoLikeMax") : 200,
        videoCommentMax: _0x1930e9.get("videoCommentMax") != undefined ? _0x1930e9.get("videoCommentMax") : 100,
        videoCommentWords: _0x1930e9.get("videoCommentWords") != undefined ? _0x1930e9.get("videoCommentWords") : "很好啊,互关一下\n期待更新\n互关一下行不行"
      };
      return _0x3cab8a;
    };
    var _0x1a4539 = new (_0x554707(3))(),
      _0x43e231 = _0x554707(0),
      _0x41288a = new (_0x554707(2))();
    _0x184e9c.start = function () {
      dialogs.build({
        title: "开始任务",
        content: "确定要开始吗?",
        positive: "确定",
        negative: "取消"
      }).on("positive", function () {
        if (!_0x43e231.checkServer() || !_0x1a4539.launchApp()) {
          return false;
        }
        var _0xee641d = _0x1a4539.getDyVersion();
        _0x43e231.showConsole("精准观看:" + _0xee641d);
        var _0x9c2fd3 = _0x184e9c.getVideoData();
        _0x9c2fd3.videoCount == 1024 && _0x184e9c.loginInfo.level == 3 && log("高级权限");
        _0x41288a.index();
        _0x41288a.ClickListener({
          clickStart: function _0x42e1ad() {
            threads.start(function () {
              _0x9c2fd3.videoCount == 1024 && _0x184e9c.loginInfo.level == 3 ? _0x184e9c.action2() : _0x184e9c.action();
            });
          },
          clickStop: function _0x429fde() {
            toastLog("停止");
            threads.shutDownAll();
          },
          clickExit: function _0x4d997e() {
            dialogs.build({
              title: "确认要关闭吗",
              positive: "确认",
              negative: "取消"
            }).on("positive", function () {
              threads.shutDownAll();
              _0x41288a.close();
              _0x43e231.closeConsole();
            }).show();
          }
        });
      }).show();
    };
    this.action2 = function () {
      _0x184e9c.loginInfo.level == 3 && _0x43e231.requestScreenCapture();
      while (true) {
        var _0x16af9 = _0x1a4539.isHavePosionPhone(),
          _0xf822de = false;
        if (_0x16af9 && _0x1a4539.JumpShipinToUsercenter()) {
          !_0x1a4539.isPrivateOrBan() && (_0xf822de = false);
          var _0x1185c5 = _0x1a4539.getUsercenter_data("粉丝");
          if (_0x1185c5 <= 20000) {
            _0xf822de = true;
          }
          back();
          sleep(1000);
        }
        log(_0xf822de);
        _0xf822de && _0x1a4539.jumpShipinToPostionPhone() && (_0x43e231.captureScreen_and_save(), _0x1a4539.backShipinToPostionPhone());
        _0x43e231.actionSwipUp();
        sleep(2000);
      }
    };
    this.action = function () {
      var _0x58286a = _0x184e9c.getVideoData();
      _0x1a4539.closeTip();
      _0x1a4539.watchSleep("任务开始:", 1);
      var _0xb7dc1a = 0;
      while (_0xb7dc1a < _0x58286a.videoCount) {
        var _0x21407e = _0x1a4539.getDianZanShu(),
          _0x148631 = _0x1a4539.getPinglunShu();
        if (_0x1a4539.getViewType() == "视频") {
          if (_0x359fac.switch3) {
            var _0xe34020 = random(0, 100),
              _0x560e4f = parseInt(_0x58286a.hr1),
              _0x176a3c = parseInt(_0x58286a.hr2),
              _0x4e7b0b = parseInt(_0x58286a.hr3);
            log(_0xe34020, _0x560e4f, _0x176a3c, _0x4e7b0b);
            _0xe34020 < _0x560e4f && _0x1a4539.clickGuanzhu();
            _0xe34020 >= _0x560e4f && _0xe34020 < _0x560e4f + _0x176a3c && _0x1a4539.clickDianzan();
            _0xe34020 >= _0x560e4f + _0x176a3c && _0xe34020 < _0x560e4f + _0x176a3c + _0x4e7b0b && _0x1a4539.clickPinlunqu() && (_0x1a4539.pinglun(_0x58286a.videoCommentWords), log("关闭页面:退出评论区"), sleep(1000), back(), sleep(1000), _0x1a4539.closePinlunquOnce());
            log("当前操作数：", ++_0xb7dc1a);
            _0x43e231.actionSwipUp();
            sleep(2000);
            continue;
          }
          if (_0x21407e <= _0x58286a.videoLikeMax && _0x148631 <= _0x58286a.videoCommentMax) {
            if (random(0, 100) < _0x58286a.videoFollowRate) {
              _0x1a4539.clickGuanzhu();
            }
            _0x1a4539.clickDianzan();
            _0x1a4539.clickPinlunqu() && (_0x1a4539.actionPinglunqu(0, "", ""), _0x1a4539.pinglun(_0x58286a.videoCommentWords), log("关闭页面:退出评论区"), sleep(1000), back(), sleep(1000));
            _0xb7dc1a++;
            _0x1a4539.closePinlunquOnce();
          }
        }
        _0x43e231.actionSwipUp();
        sleep(2000);
      }
      threads.shutDownAll();
      log("本次任务结束");
    };
  }
  _0x476fd6.exports = _0x31e853;
}]);