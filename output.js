//Mon Aug 26 2024 01:37:34 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("Jd转赚红包_抽奖提现2");
const _0x54b549 = $.isNode() ? require("./jdCookie.js") : "",
  _0xc75990 = require("./function/dylans"),
  _0x2bcbfb = require("./USER_AGENTS"),
  _0x2fd5de = require("./function/dylib");
let _0x646375 = true,
  _0x283326 = [],
  _0x404435 = [],
  _0x32c288 = [],
  _0x97bcd6 = [],
  _0x27abfa = {},
  _0x327d8f = [],
  _0x496f74 = "",
  _0x2350c1 = "";
const _0x4e2c71 = process.env.JDZHB2LTNUM || "-1",
  _0x5948cc = process.env.JDZHB2DELAY || "1",
  _0x18e5f9 = process.env.TXDELAY || "5",
  _0x25aaa7 = process.env.TXIVAL || "1",
  _0x4cf851 = process.env.JDZHB2TORED || false,
  _0x3f256a = process.env.TXSILENT || false,
  _0x44bd14 = process.env.CXJLJQ_COUNT || "10",
  _0x22f687 = process.env.TX_MODE || "0",
  _0x487d6a = process.env.NOTX ? process.env.NOTX : false;
if (process.env.DY_PROXY) {
  try {
    _0x27abfa = require("./function/proxy.js");
    $.dget = _0x27abfa.intoRequest($.get.bind($));
    $.dpost = _0x27abfa.intoRequest($.post.bind($));
  } catch {
    $.dget = $.get;
    $.dpost = $.post;
  }
} else {
  $.dpost = $.post;
  $.dget = $.get;
}
if ($.isNode()) {
  Object.keys(_0x54b549).forEach(_0x221d8c => {
    _0x327d8f.push(_0x54b549[_0x221d8c]);
  });
  if (process.env.JD_DEBUG && process.env.JD_DEBUG === "false") {
    console.log = () => {};
  }
} else {
  _0x327d8f = [$.getdata("CookieJD"), $.getdata("CookieJD2"), ..._0x52d3dc($.getdata("CookiesJD") || "[]").map(_0x2b174e => _0x2b174e.cookie)].filter(_0xf1f9c4 => !!_0xf1f9c4);
}
!(async () => {
  if (!_0x327d8f[0]) {
    const _0x3febd0 = {
      "open-url": "https://bean.m.jd.com/bean/signIndex.action"
    };
    $.msg($.name, "【提示】请先获取京东账号一cookie\n直接使用NobyDa的京东签到获取", "https://bean.m.jd.com/bean/signIndex.action", _0x3febd0);
    return;
  }
  $.log("\n❗❗❗注意此活动24小时一轮，抽奖次数过期清零❗❗❗");
  $.log("\n当前版本：20240822 ");
  console.log("执行流程，抽奖--提现");
  console.log("TG频道：https://t.me/dylan_jdpro");
  $.log("\n环境变量清单（可选项）：");
  $.log("  抽奖次数：默认抽完  JDZHB2LTNUM='200'\n  抽奖间隔：默认1秒  JDZHB2DELAY='3'\n  提现间隔：默认5秒  TXDELAY='3'\n  提现范围：默认1天内，太大会403  TXIVAL='3'\n  开启提现到上限转红包：JDZHB2TORED='true'\n  开启代理：API DY_PROXY='apiurl'\n  垃圾券数量：默认10次，CXJLJQ_COUNT='20'\n  提现模式：默认提当前所得，设置1开启查列表提现，TX_MODE='1'\n  关闭提现：NOTX='true'\n");
  console.log("\n开始抽奖和提现(间隔" + _0x5948cc + "秒 连续" + _0x44bd14 + "次垃圾券停止)...");
  _0x4e2c71 > -1 && console.log("\n已设置本次运行抽奖次数 " + _0x4e2c71);
  let _0x1331ff = new Date();
  _0x1331ff.setDate(_0x1331ff.getDate() - _0x25aaa7);
  for (let _0x3e5063 = 0; _0x3e5063 < _0x327d8f.length; _0x3e5063++) {
    if (_0x327d8f[_0x3e5063]) {
      _0x496f74 = _0x327d8f[_0x3e5063];
      $.UserName = decodeURIComponent(_0x496f74.match(/pt_pin=([^; ]+)(?=;?)/) && _0x496f74.match(/pt_pin=([^; ]+)(?=;?)/)[1]);
      $.index = _0x3e5063 + 1;
      $.isLogin = true;
      $.nickName = "";
      $.fail = 0;
      _0x404435 = [];
      _0x32c288 = [];
      txjscore = [];
      $.txj = true;
      $.fg = 1;
      $.txfull = false;
      $.nocashnum = 0;
      $.end = false;
      $.hotflag = false;
      $.toredfailnum = 0;
      $.txjsuc = false;
      $.banip = false;
      $.xcrflag = 1;
      $.leftAmount = 0;
      $.txsuc = [];
      $.UA = _0x2bcbfb.UARAM ? _0x2bcbfb.UARAM() : _0x2bcbfb.USER_AGENT;
      $.uuid = _0x2fd5de.UUID();
      let _0x4fec99 = await _0x2fd5de.jddToken($.UA);
      if (_0x4fec99) {
        $.apitoken = _0x4fec99.token;
      }
      console.log("\n\n--------开始【账号" + $.index + "】 " + ($.nickName || $.UserName) + "----------\n");
      let _0x25d23b = await _0x1088c8(1);
      await $.wait(1000);
      if (_0x25d23b.code != "0") {
        continue;
      }
      $.log("本轮已抽奖次数：" + _0x25d23b.data.drawPrizeNum);
      $.log("本轮剩余抽奖次数：" + $.times);
      if (_0x25d23b.data.cashVo) {
        if (_0x25d23b.data?.["cashVo"]?.["state"] === 1) {
          $.log("本轮提现金进度：" + _0x25d23b.data.cashVo.amount + "/" + _0x25d23b.data.cashVo.totalAmount + "(-" + _0x25d23b.data.cashVo.leftAmount + ")");
        } else {
          _0x25d23b.data?.["cashVo"]?.["state"] === 3 && ($.log("本轮提现金达成：" + _0x25d23b.data.cashVo.totalAmount + " 🤑"), $.txj = false, $.txjsuc = true);
        }
      } else {
        $.txj = false;
      }
      $.log("本轮结束时间： " + _0x3fb7c7(new Date(Date.now() + _0x25d23b.data.countDownTime)));
      for (let _0x403a95 = 0; _0x403a95 < (_0x4e2c71 > -1 && _0x4e2c71 < $.times ? _0x4e2c71 : $.times); _0x403a95++) {
        process.stdout.write("\n第" + (_0x403a95 + 1) + "次抽奖结果：");
        for (let _0x2a3302 of Array(1)) {
          await _0xd04088(_0x2a3302 + 1);
          if (!$.hotflag) {
            break;
          }
          await $.wait(Math.random() * 500 + _0x5948cc * 1000);
        }
        if ($.banip || !$.isLogin) {
          break;
        }
        if ($.end) {
          console.log("\n本轮结束了，开启新一轮");
          let _0x26568c = await _0x1088c8(0);
          _0x26568c.code == 0 && $.log("开启成功，结束时间： " + _0x3fb7c7(new Date(Date.now() + _0x26568c.data.countDownTime)));
        }
        $.txj && (await _0x3ece80());
        await $.wait(Math.random() * 500 + _0x5948cc * 1000);
        if ($.fail >= _0x44bd14) {
          $.log("连续垃圾券，不继续抽了");
          break;
        }
      }
      _0x32c288.length !== 0 && $.log("\n\n本次抽奖获得红包总计：" + _0x32c288.reduce((_0x2d60a5, _0x2eb0fa) => _0x2d60a5 + _0x2eb0fa * 100, 0) / 100 + "元");
      _0x404435.length !== 0 && $.log("\n\n本次抽奖获得现金总计：" + _0x404435.reduce((_0x55314a, _0x214e53) => _0x55314a + _0x214e53 * 100, 0) / 100 + "元");
      if (txjscore.length !== 0) {
        let _0x1e0c42 = txjscore.reduce((_0x25ff58, _0x43017b) => _0x25ff58 + _0x43017b * 100, 0) / 100,
          _0x2f8465 = (_0x1e0c42 / (_0x4e2c71 > -1 ? Math.min.apply(null, [_0x4e2c71, $.times]) : $.times)).toFixed(4);
        $.log("\n\n本次抽奖获得提现金 " + _0x1e0c42 + "个,还差 " + $.leftAmount + "个, 平均 " + _0x2f8465 + "个/抽" + ($.leftAmount > 0 && $.leftAmount < "1.00" ? "，预计还需" + parseInt($.leftAmount / _0x2f8465) + "抽" : ""));
      }
      if (_0x487d6a != "true") {
        if (new Date().getHours() < 6 && _0x3f256a) {
          continue;
        }
        $.log("\n——————————————开始提现（间隔" + _0x18e5f9 + "秒）————————————————");
        $.log("\n当前提现模式：" + (_0x22f687 == "1" ? _0x25aaa7 + "天内历史" : "本次所抽现金"));
        $.log("上限转红包：" + (_0x4cf851 ? "开启" : "关闭(续期♻️)"));
        $.toredsuc = [];
        $.failtxlist = [];
        $.banip = false;
        if (_0x22f687 == "1") {
          for (let _0xf0f7f2 = 0; _0xf0f7f2 < 500; _0xf0f7f2++) {
            if ($.nocashnum > 2 || $.toredfailnum > 4 || $.banip) {
              break;
            }
            process.stdout.write("\n" + (_0xf0f7f2 + 1) + "页：");
            let _0x199a20 = await _0xf66e73(_0xf0f7f2 + 1);
            _0x199a20 == "" && (await $.wait(5000), await _0xf66e73(_0xf0f7f2 + 1));
            if (!$.baglist || $.baglist.length === 0) {
              break;
            }
            for (let _0x4c6569 of $.baglist) {
              if (Math.max.apply(null, [new Date(_0x4c6569.createTime), new Date(_0x4c6569.startTime)]) < _0x1331ff || $.toredfailnum > 4) {
                $.nocashnum = 5;
                break;
              }
              if (_0x4c6569.prizeType == 4) {
                $.txfail = false;
                if (_0x4c6569.state == 0 || _0x4c6569.state == 2) {
                  process.stdout.write("" + Number(_0x4c6569.amount));
                  let _0x153f26 = await _0x3f4484(_0x4c6569, Number(_0x4c6569.amount));
                  $.txfail && (await $.wait(5000), _0x153f26 = await _0x3f4484(_0x4c6569, Number(_0x4c6569.amount)));
                  $.txfail && $.failtxlist.push(_0x4c6569);
                  if (_0x153f26.data?.["message"]?.["includes"]("上限") && _0x4cf851 == "true" && $.toredfailnum < 5) {
                    await _0x40920e(_0x4c6569, Number(_0x4c6569.amount));
                  }
                  await $.wait(_0x18e5f9 * 1000);
                } else {
                  _0x4c6569.state == 8;
                }
              }
            }
            await $.wait(3000);
          }
          $.banip = false;
          while ($.failtxlist.length > 0 && $.toredfailnum < 5) {
            console.log("\n" + $.failtxlist.length);
            for (let _0x2a753b = 0; _0x2a753b < $.failtxlist.length;) {
              let _0x19397a = $.failtxlist[_0x2a753b];
              if (_0x19397a.prizeType == 4) {
                $.txfail = false;
                process.stdout.write("" + Number(_0x19397a.amount));
                let _0x37f5b2 = await _0x3f4484(_0x19397a, Number(_0x19397a.amount));
                $.txfail && (await $.wait(5000), _0x37f5b2 = await _0x3f4484(_0x19397a, Number(_0x19397a.amount)));
                $.txfail ? _0x2a753b++ : $.failtxlist.splice(_0x2a753b, 1);
                if (_0x37f5b2.data.message.includes("上限") && _0x4cf851 == "true" && $.toredfailnum < 5) {
                  await _0x40920e(_0x19397a, Number(_0x19397a.amount));
                }
                await $.wait(_0x18e5f9 * 1000);
              }
            }
          }
        } else {
          for (let _0x461025 = 0; _0x461025 < 1; _0x461025++) {
            if ($.nocashnum > 2 || $.toredfailnum > 4) {
              break;
            }
            while (_0x97bcd6.length > 0) {
              console.log("\n" + _0x97bcd6.length);
              for (let _0x297aef = 0; _0x297aef < _0x97bcd6.length;) {
                let _0x23f189 = _0x97bcd6[_0x297aef];
                if (_0x23f189.prizeType == 4) {
                  $.txfail = false;
                  process.stdout.write("" + Number(_0x23f189.amount));
                  let _0x5b5cbc = await _0x3f4484(_0x23f189, Number(_0x23f189.amount));
                  $.txfail && (await $.wait(5000), _0x5b5cbc = await _0x3f4484(_0x23f189, Number(_0x23f189.amount)));
                  $.txfail ? _0x297aef++ : _0x97bcd6.splice(_0x297aef, 1);
                  if (_0x5b5cbc.data?.["message"]?.["includes"]("上限") && _0x4cf851 == "true" && $.toredfailnum < 5) {
                    await _0x40920e(_0x23f189, Number(_0x23f189.amount));
                  }
                  await $.wait(_0x18e5f9 * 1000);
                }
              }
              await $.wait(2000);
            }
          }
        }
        $.txsuc.length !== 0 && $.log("\n\n本次成功提现总计：" + $.txsuc.reduce((_0x32f276, _0x3b1c50) => _0x32f276 + _0x3b1c50 * 100, 0) / 100 + "元");
        $.toredsuc.length !== 0 && $.log("\n\n本次成功转红包总计：" + $.toredsuc.reduce((_0x34c743, _0x4f8657) => _0x34c743 + _0x4f8657 * 100, 0) / 100 + "元");
      } else {
        $.log("\n\n⚠已设置不提现！");
      }
      _0x97bcd6 = [];
      await $.wait(2000);
    }
  }
})().catch(_0x90cbab => {
  $.log("", "❌ " + $.name + ", 失败! 原因: " + _0x90cbab + "!", "");
}).finally(() => {
  $.done();
});
async function _0x1088c8(_0x141429) {
  let _0x26c11b = {
      linkId: "wDNvX5t2N52cWEM8cLOa0g",
      inviter: ""
    },
    _0x406de8 = {
      appId: "eb67b",
      functionId: "inviteFissionHome",
      fn: "inviteFissionHome",
      body: _0x26c11b,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  _0x26c11b = await _0xc75990.getbody(_0x406de8);
  if (!_0x26c11b) {
    return;
  }
  return new Promise(async _0x17e021 => {
    $.dpost(_0x5035f3(_0x26c11b), async (_0x3122e8, _0xd3d866, _0x47fccf) => {
      try {
        if (_0x3122e8) {
          console.log("" + JSON.stringify(_0x3122e8));
          console.log("homeinfo请求失败，请检查网路重试");
        } else {
          _0x47fccf = JSON.parse(_0x47fccf);
          if (_0x47fccf.code == 0) {
            $.times = _0x47fccf.data.prizeNum;
            if (_0x141429) {
              console.log("我的助力码：" + _0x47fccf.data.inviter);
            }
            _0x283326.push(_0x47fccf.data.inviter);
          } else {
            console.log(_0x47fccf.errMsg);
          }
        }
      } catch (_0x51aa1e) {
        $.logErr(_0x51aa1e, _0xd3d866);
      } finally {
        _0x17e021(_0x47fccf);
      }
    });
  });
}
async function _0x3ece80() {
  let _0x168040 = {
      linkId: "wDNvX5t2N52cWEM8cLOa0g"
    },
    _0x31f398 = {
      appId: "b8469",
      functionId: "inviteFissionReceive",
      fn: "inviteFissionReceive",
      body: _0x168040,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x168040 = await _0xc75990.getbody(_0x31f398);
  if (!_0x168040) {
    return;
  }
  return new Promise(async _0x8e3442 => {
    $.dpost(_0x5035f3(_0x168040), async (_0x15ca41, _0x104b02, _0x47dcac) => {
      try {
        if (_0x15ca41) {
          console.log("" + JSON.stringify(_0x15ca41));
          console.log("receive请求失败，请检查网路重试");
          _0x15ca41.includes("403") && ($.banip = true);
        } else {
          _0x47dcac = JSON.parse(_0x47dcac);
          if (_0x47dcac.code == 0) {
            process.stdout.write("----提现金" + _0x47dcac.data.amount + "(+" + _0x47dcac.data.receiveList[0].amount + ")");
            txjscore.push(_0x47dcac.data.receiveList[0].amount);
            if (_0x47dcac.data?.["state"] == 3) {
              process.stdout.write("----恭喜达成");
              if (_0x47dcac.data.cashRecord) {
                let _0x57a5bc = _0x47dcac.data.cashRecord;
                process.stdout.write(" 提现" + Number(_0x57a5bc.amount) + "元");
                await _0x3f4484(_0x57a5bc, Number(_0x57a5bc.amount));
              }
              $.txj = false;
              $.txjsuc = true;
            }
            $.leftAmount = _0x47dcac.data.leftAmount;
          } else {
            if (_0x47dcac.code == 80208) {
              process.stdout.write("----送的抽奖次数没有提现金");
            } else {
              if (_0x47dcac.code == 80209) {
                process.stdout.write("----完成标识");
                $.txj = false;
              } else {
                console.log(JSON.stringify(_0x47dcac));
              }
            }
          }
        }
      } catch (_0x3bce00) {
        $.logErr(_0x3bce00, _0x104b02);
      } finally {
        _0x8e3442(_0x47dcac);
      }
    });
  });
}
async function _0xd04088(_0x2ef5ed) {
  let _0x4690ab = {
    linkId: "wDNvX5t2N52cWEM8cLOa0g"
  };
  let _0x4a0945 = {
    appId: "c02c6",
    functionId: "inviteFissionDrawPrize",
    fn: "inviteFissionDrawPrize",
    body: _0x4690ab,
    appid: "activities_platform",
    apid: "activities_platform",
    clientVersion: $.UA.split(";")[2],
    ver: $.UA.split(";")[2],
    client: "ios",
    cl: "ios",
    user: $.UserName,
    t: Date.now(),
    code: 1,
    xcr: $.xcrflag,
    ua: $.UA
  };
  _0x4690ab = await _0xc75990.getbody(_0x4a0945);
  if (!_0x4690ab) {
    return;
  }
  return new Promise(async _0x36a5a5 => {
    $.dpost(_0x5035f3(_0x4690ab), async (_0x77af17, _0x3f47c1, _0x292931) => {
      try {
        if (_0x77af17) {
          console.log("" + JSON.stringify(_0x77af17));
          console.log("lottery请求失败，请检查网路重试");
          _0x77af17.includes("403") && ($.banip = true);
        } else {
          _0x292931 = JSON.parse(_0x292931);
          if (_0x292931.code == 0) {
            const _0x29f751 = _0x292931.data.prizeType;
            if (!_0x29f751) {
              fail++;
            }
            switch (_0x29f751) {
              case 1:
                process.stdout.write("垃.圾.券⚫");
                $.txjsuc && $.fail++;
                $.fail++;
                $.hotflag = false;
                break;
              case 4:
                let _0xaa0779 = parseFloat(_0x292931.data.prizeValue).toFixed(2);
                process.stdout.write(_0xaa0779 + "现金💰️");
                _0x404435.push(_0xaa0779);
                const _0x55f335 = {
                  prizeValue: _0x292931.data.prizeValue,
                  id: _0x292931.data.id,
                  poolBaseId: _0x292931.data.poolBaseId,
                  prizeGroupId: _0x292931.data.prizeGroupId,
                  prizeBaseId: _0x292931.data.prizeBaseId,
                  prizeType: _0x292931.data.prizeType,
                  amount: _0x292931.data.amount
                };
                _0x97bcd6.push(_0x55f335);
                $.fail = 0;
                $.hotflag = false;
                break;
              case 2:
                let _0x1b2d73 = parseFloat(_0x292931.data.prizeValue).toFixed(2);
                process.stdout.write(_0x1b2d73 + "红包🧧");
                _0x32c288.push(_0x1b2d73);
                $.fail = 0;
                $.hotflag = false;
                break;
              default:
                $.hotflag = false;
                console.log(JSON.stringify(_0x292931.data));
            }
          } else {
            if (_0x292931.errMsg.includes("火爆")) {
              process.stdout.write("未中奖 ");
              $.hotflag = true;
            } else {
              if (_0x292931.errMsg.includes("结束")) {
                $.end = true;
                $.hotflag = false;
                console.log(_0x292931.errMsg);
              } else {
                _0x292931.errMsg.includes("未登录") ? ($.isLogin = false, $.hotflag = false, console.log(_0x292931.errMsg)) : ($.hotflag = false, console.log(_0x292931.errMsg));
              }
            }
          }
        }
      } catch (_0x221669) {
        $.logErr(_0x221669, _0x3f47c1);
      } finally {
        _0x36a5a5(_0x292931);
      }
    });
  });
}
async function _0xf66e73(_0x39a099) {
  let _0x32d8f1 = {
      pageNum: _0x39a099,
      pageSize: 100,
      linkId: "wDNvX5t2N52cWEM8cLOa0g",
      business: "fission"
    },
    _0x1255af = {
      appId: "f2b1d",
      functionId: "superRedBagList",
      fn: "superRedBagList",
      body: _0x32d8f1,
      appid: "activities_platform",
      apid: "activities_platform",
      clientVersion: $.UA.split(";")[2],
      ver: $.UA.split(";")[2],
      client: "ios",
      cl: "ios",
      user: $.UserName,
      t: Date.now(),
      code: 1,
      xcr: $.xcrflag,
      ua: $.UA
    };
  $.xcrflag == 1 && ($.xcrflag = 0);
  _0x32d8f1 = await _0xc75990.getbody(_0x1255af);
  if (!_0x32d8f1) {
    return;
  }
  const _0xafa4c6 = {
    url: "https://api.m.jd.com/api",
    body: _0x32d8f1 + "&loginType=2&loginWQBiz=wegame&uuid=" + $.uuid + "&build=169088&screen=414*736&networkType=wifi&d_brand=iPhone&d_model=iPhone10,2&lang=zh_CN&osVersion=&partner=-1&cthr=1",
    headers: {},
    ciphers: _0x2fd5de.cpstr
  };
  _0xafa4c6.headers.Accept = "application/json, text/plain, */*";
  _0xafa4c6.headers["x-rp-client"] = "h5_1.0.0";
  _0xafa4c6.headers["Accept-Language"] = "zh-cn";
  _0xafa4c6.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0xafa4c6.headers["Content-Type"] = "application/x-www-form-urlencoded";
  _0xafa4c6.headers.Origin = "https://pro.m.jd.com";
  _0xafa4c6.headers["User-Agent"] = $.UA;
  _0xafa4c6.headers.Referer = "https://pro.m.jd.com/";
  _0xafa4c6.headers["x-referer-page"] = "https://pro.m.jd.com/";
  _0xafa4c6.headers["request-from"] = "native";
  _0xafa4c6.headers.Cookie = _0x496f74;
  let _0x582178 = _0xafa4c6;
  return new Promise(async _0x31176f => {
    $.dpost(_0x582178, async (_0x235736, _0x182824, _0x68ea36) => {
      try {
        _0x235736 ? (console.log("" + JSON.stringify(_0x235736)), console.log(" API请求失败，请检查网路重试"), _0x235736.includes("403") && ($.banip = true), _0x68ea36 = "") : (_0x68ea36 = JSON.parse(_0x68ea36), _0x68ea36.code == 0 ? $.baglist = _0x68ea36.data.items : console.log(_0x68ea36.errMsg));
      } catch (_0xa23780) {
        $.logErr(_0xa23780, _0x182824);
      } finally {
        _0x31176f(_0x68ea36);
      }
    });
  });
}
async function _0x3f4484(_0x44f2e0, _0x325998) {
  let _0xc27e3 = "functionId=apCashWithDraw&body={\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\",\"businessSource\":\"NONE\",\"base\":{\"id\":" + _0x44f2e0.id + ",\"business\":\"fission\",\"poolBaseId\":" + _0x44f2e0.poolBaseId + ",\"prizeGroupId\":" + _0x44f2e0.prizeGroupId + ",\"prizeBaseId\":" + _0x44f2e0.prizeBaseId + ",\"prizeType\":4}}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  return new Promise(async _0x485d64 => {
    $.dpost(_0x5035f3(_0xc27e3), async (_0x352723, _0x32524b, _0x583314) => {
      try {
        if (_0x352723) {
          console.log("" + JSON.stringify(_0x352723));
          console.log("apCashWithDraw请求失败，请检查网路重试");
          _0x352723.includes("403") && ($.banip = true);
        } else {
          _0x583314 = JSON.parse(_0x583314);
          if (_0x583314.code == 0) {
            if (_0x583314.data.message.indexOf("待发放") > -1) {
              process.stdout.write("" + (!$.txfail ? "❌" : "❌ "));
              $.txfail = true;
            } else {
              if (_0x583314.data.message.includes("上限")) {
                !_0x4cf851 && process.stdout.write("♻️ ");
                $.txfull = true;
                $.txfail = false;
              } else {
                _0x583314.data.message.includes("提现") ? (process.stdout.write("✔️ "), $.txsuc.push(_0x325998), $.txfail = false) : console.log(_0x583314.data.message);
              }
            }
          } else {
            console.log(_0x583314.errMsg);
          }
        }
      } catch (_0x80587b) {
        $.logErr(_0x80587b, _0x32524b);
      } finally {
        _0x485d64(_0x583314 || "");
      }
    });
  });
}
async function _0x40920e(_0xed3d5d, _0x2aeba1) {
  let _0x24ed71 = "functionId=apRecompenseDrawPrize&body={\"drawRecordId\":" + _0xed3d5d.id + ",\"business\":\"fission\",\"poolId\":" + _0xed3d5d.poolBaseId + ",\"prizeGroupId\":" + _0xed3d5d.prizeGroupId + ",\"prizeId\":" + _0xed3d5d.prizeBaseId + ",\"linkId\":\"wDNvX5t2N52cWEM8cLOa0g\"}&t=" + Date.now() + "&appid=activities_platform&client=ios&clientVersion=" + $.UA.split(";")[2];
  const _0xcb7956 = {
    Host: "api.m.jd.com",
    Origin: "https://pro.m.jd.com",
    Referer: "https://pro.m.jd.com/",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": $.UA,
    Cookie: _0x496f74
  };
  let _0x370be7 = {
    url: "https://api.m.jd.com/api",
    body: _0x24ed71,
    headers: _0xcb7956
  };
  return new Promise(async _0x3007ed => {
    $.dpost(_0x370be7, async (_0x4e05e6, _0x5d0898, _0x1fe2cb) => {
      try {
        if (_0x4e05e6) {
          console.log("" + JSON.stringify(_0x4e05e6));
          console.log("apRecompenseDrawPrize 请求失败，请检查网路重试");
          _0x4e05e6.includes("403") && ($.banip = true);
        } else {
          _0x1fe2cb = JSON.parse(_0x1fe2cb);
          if (_0x1fe2cb.code == 0) {
            _0x1fe2cb.data.resCode === "0" ? (process.stdout.write("🧧 "), $.toredsuc.push(_0x2aeba1)) : (process.stdout.write("❎ "), $.toredfailnum++);
          } else {
            if (_0x1fe2cb.errMsg === "失败") {
              process.stdout.write("❎ ");
              $.toredfailnum++;
            } else {
              console.log(_0x1fe2cb.errMsg);
            }
          }
        }
      } catch (_0x1ac0ce) {
        $.logErr(_0x1ac0ce, _0x5d0898);
      } finally {
        _0x3007ed(_0x1fe2cb);
      }
    });
  });
}
function _0x5035f3(_0xb53d16) {
  const _0x2b55b0 = {
    url: "https://api.m.jd.com/api?loginType=2&loginWQBiz=wegame&" + _0xb53d16 + "&x-api-eid-token=" + $.apitoken,
    headers: {}
  };
  _0x2b55b0.headers.Accept = "application/json, text/plain, */*";
  _0x2b55b0.headers["x-rp-client"] = "h5_1.0.0";
  _0x2b55b0.headers["Content-type"] = "application/x-www-form-urlencoded";
  _0x2b55b0.headers["User-Agent"] = $.UA;
  _0x2b55b0.headers["x-referer-page"] = "https://pro.m.jd.com/mall/active/B2Y13x641hwWfpsoRenCzfbz4jR/index.html";
  _0x2b55b0.headers.Origin = "https://pro.m.jd.com";
  _0x2b55b0.headers["X-Requested-With"] = "com.jingdong.app.mall";
  _0x2b55b0.headers.Referer = "https://pro.m.jd.com/mall/active/B2Y13x641hwWfpsoRenCzfbz4jR/index.html";
  _0x2b55b0.headers["Accept-Encoding"] = "gzip, deflate, br";
  _0x2b55b0.headers["Accept-language"] = "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7";
  _0x2b55b0.headers.Cookie = _0x496f74;
  return _0x2b55b0;
}
function _0x292091() {
  return new Promise(_0x3923e8 => {
    const _0x212bb2 = {
      url: "https://plogin.m.jd.com/cgi-bin/ml/islogin",
      headers: {},
      timeout: 10000
    };
    _0x212bb2.headers.Cookie = _0x496f74;
    _0x212bb2.headers.referer = "https://h5.m.jd.com/";
    _0x212bb2.headers["User-Agent"] = $.UA;
    const _0x43b70c = _0x212bb2;
    $.get(_0x43b70c, (_0x489b8a, _0x765cb2, _0xd3850e) => {
      try {
        if (_0xd3850e) {
          _0xd3850e = JSON.parse(_0xd3850e);
          if (!(_0xd3850e.islogin === "1")) {
            _0xd3850e.islogin === "0" && ($.isLogin = false);
          }
        }
      } catch (_0x589ae2) {
        console.log(_0x589ae2);
      } finally {
        _0x3923e8();
      }
    });
  });
}
function _0x4a5278() {
  return new Promise(_0x427f1 => {
    !_0x646375 ? $.msg($.name, "", "" + _0x2350c1) : $.log("京东账号" + $.index + $.nickName + "\n" + _0x2350c1);
    _0x427f1();
  });
}
function _0x3ec795(_0x4ddf35) {
  try {
    if (typeof JSON.parse(_0x4ddf35) == "object") {
      return true;
    }
  } catch (_0x435203) {
    console.log(_0x435203);
    console.log("京东服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x3fb7c7(_0x1058f2) {
  const _0x16a1af = _0x1058f2.getFullYear(),
    _0x3ce4e0 = ("0" + (_0x1058f2.getMonth() + 1)).slice(-2),
    _0x40b26a = ("0" + _0x1058f2.getDate()).slice(-2),
    _0x26f6f1 = ("0" + _0x1058f2.getHours()).slice(-2);
  const _0x437e99 = ("0" + _0x1058f2.getMinutes()).slice(-2),
    _0x269ab5 = ("0" + _0x1058f2.getSeconds()).slice(-2);
  return _0x16a1af + "/" + _0x3ce4e0 + "/" + _0x40b26a + " " + _0x26f6f1 + ":" + _0x437e99 + ":" + _0x269ab5;
}
function _0x52d3dc(_0x542776) {
  if (typeof _0x542776 == "string") {
    try {
      return JSON.parse(_0x542776);
    } catch (_0x3cee93) {
      console.log(_0x3cee93);
      $.msg($.name, "", "请勿随意在BoxJs输入框修改内容\n建议通过脚本去获取cookie");
      return [];
    }
  }
}
function Env(t, e) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, r) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null) {
      try {
        return JSON.stringify(t);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      const i = this.getdata(t);
      if (i) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let r = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        r = r ? 1 * r : 20;
        r = e && e.timeout ? e.timeout : r;
        const [o, h] = i.split("@"),
          n = {
            url: `http://${h}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: r
            },
            headers: {
              "X-Key": o,
              Accept: "*/*"
            }
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          r = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, r) : i ? this.fs.writeFileSync(e, r) : this.fs.writeFileSync(t, r);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let r = t;
      for (const t of i) if (r = Object(r)[t], void 0 === r) {
        return s;
      }
      return r;
    }
    lodash_set(t, e, s) {
      return Object(t) !== t ? t : (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s, t);
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          r = s ? this.getval(s) : "";
        if (r) {
          try {
            const t = JSON.parse(r);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, r] = /^@(.*?)\.(.*?)$/.exec(e),
          o = this.getval(i),
          h = i ? "null" === o ? null : o || "{}" : "{}";
        try {
          const e = JSON.parse(h);
          this.lodash_set(e, r, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const o = {};
          this.lodash_set(o, r, t);
          s = this.setval(JSON.stringify(o), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(t) : this.isQuanX() ? $prefs.valueForKey(t) : this.isNode() ? (this.data = this.loaddata(), this.data[t]) : this.data && this.data[t] || null;
    }
    setval(t, e) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(t, e) : this.isQuanX() ? $prefs.setValueForKey(t, e) : this.isNode() ? (this.data = this.loaddata(), this.data[e] = t, this.writedata(), !0) : this.data && this.data[e] || null;
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar));
    }
    get(t, e = () => {}) {
      t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(t, (t, s, i) => {
        !t && s && (s.body = i, s.statusCode = s.status);
        e(t, s, i);
      })) : this.isQuanX() ? (this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
        hints: !1
      })), $task.fetch(t).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => e(t))) : this.isNode() && (this.initGotEnv(t), this.got(t).on("redirect", (t, e) => {
        try {
          if (t.headers["set-cookie"]) {
            const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            s && this.ckjar.setCookieSync(s, null);
            e.cookieJar = this.ckjar;
          }
        } catch (t) {
          this.logErr(t);
        }
      }).then(t => {
        const {
          statusCode: s,
          statusCode: i,
          headers: r,
          body: o
        } = t;
        e(null, {
          status: s,
          statusCode: i,
          headers: r,
          body: o
        }, o);
      }, t => {
        const {
          message: s,
          response: i
        } = t;
        e(s, i, i && i.body);
      }));
    }
    post(t, e = () => {}) {
      if (t.body && t.headers && !t.headers["Content-Type"] && (t.headers["Content-Type"] = "application/x-www-form-urlencoded"), t.headers && delete t.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(t, (t, s, i) => {
          !t && s && (s.body = i, s.statusCode = s.status);
          e(t, s, i);
        });
      } else {
        if (this.isQuanX()) {
          t.method = "POST";
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: r,
              body: o
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: r,
              body: o
            }, o);
          }, t => e(t));
        } else {
          if (this.isNode()) {
            this.initGotEnv(t);
            const {
              url: s,
              ...i
            } = t;
            this.got.post(s, i).then(t => {
              const {
                statusCode: s,
                statusCode: i,
                headers: r,
                body: o
              } = t;
              e(null, {
                status: s,
                statusCode: i,
                headers: r,
                body: o
              }, o);
            }, t => {
              const {
                message: s,
                response: i
              } = t;
              e(s, i, i && i.body);
            });
          }
        }
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    msg(e = t, s = "", i = "", r) {
      const o = t => {
        if (!t) {
          return t;
        }
        if ("string" == typeof t) {
          return this.isLoon() ? t : this.isQuanX() ? {
            "open-url": t
          } : this.isSurge() ? {
            url: t
          } : void 0;
        }
        if ("object" == typeof t) {
          if (this.isLoon()) {
            let e = t.openUrl || t.url || t["open-url"],
              s = t.mediaUrl || t["media-url"];
            return {
              openUrl: e,
              mediaUrl: s
            };
          }
          if (this.isQuanX()) {
            let e = t["open-url"] || t.url || t.openUrl,
              s = t["media-url"] || t.mediaUrl;
            return {
              "open-url": e,
              "media-url": s
            };
          }
          if (this.isSurge()) {
            let e = t.url || t.openUrl || t["open-url"];
            return {
              url: e
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(e, s, i, o(r)) : this.isQuanX() && $notify(e, s, i, o(r))), !this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.join(this.logSeparator));
    }
    logErr(t, e) {
      const s = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      s ? this.log("", `❗️${this.name}, 错误!`, t.stack) : this.log("", `❗️${this.name}, 错误!`, t);
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = new Date().getTime(),
        s = (e - this.startTime) / 1000;
      this.log("", `🔔${this.name}, 结束! 🕛 ${s} 秒`);
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(t);
    }
  }(t, e);
}