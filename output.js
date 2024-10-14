//Mon Oct 14 2024 02:40:35 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("益禾堂"),
  axios = require("axios"),
  axiosRetry = require("axios-retry").default,
  {
    sendNotify
  } = require("./sendNotify"),
  SyncRequest = require("sync-request");
let notifyStr = "";
var ua = "";
(async () => {
  axiosRetry(axios, {
    "retries": 3
  });
  const _0x6d0464 = process.env.yht_zl,
    _0x517d52 = "691033043055370241,559841571541866236";
  let _0x5abd2d = [];
  _0x517d52 && (_0x5abd2d = _0x517d52.split(","));
  const _0x20a307 = process.env.yht_ck,
    _0x4753a9 = process.env.yht_showinviteId;
  if (!_0x20a307) {
    logAndNotify("请先设置环境变量 yht_ck");
    return;
  }
  const _0x32dcd7 = _0x6d0464 ? _0x6d0464.split("&") : "";
  _0x5abd2d.concat(_0x32dcd7);
  const _0xfdb6ab = !!_0x4753a9;
  let _0x182566 = _0x20a307.replaceAll("&", "\n").split("\n");
  for (let _0x157739 = 0; _0x157739 < _0x182566.length; _0x157739++) {
    ua = generateUserAgent();
    const _0x57e3f2 = _0x182566[_0x157739],
      _0x100e11 = await sendGetRequest("https://webapi.qmai.cn/web/catering/crm/personal-info", _0x57e3f2);
    if (!_0x100e11.data.status) {
      logAndNotify("账号【" + (_0x157739 + 1) + "】 登录失败☹");
      continue;
    }
    logAndNotify("🧐" + _0x100e11.data.data.mobilePhone + "🧐");
    const _0x3bd02e = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/takePartInNurture", _0x57e3f2, {
      "activityId": "1025694534292430849",
      "appid": "wx4080846d0cec2fd5"
    });
    _0x3bd02e.data.status ? (logAndNotify("账号【" + (_0x157739 + 1) + "】 开启种树成功"), logAndNotify("账号【" + (_0x157739 + 1) + "】 userId=【" + _0x3bd02e.data.data.userId + "】")) : logAndNotify("账号【" + (_0x157739 + 1) + "】 忽略此提示【" + _0x3bd02e.data.message + "】");
    const _0xc5e09a = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/taskInfo", _0x57e3f2, {
      "activityId": "1025694534292430849",
      "appid": "wx4080846d0cec2fd5"
    });
    logAndNotify("账号【" + (_0x157739 + 1) + "】 被助力次数:【" + _0xc5e09a.data.data.dailyInviteNum + "】");
    const _0x16ef22 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/stageInfo", _0x57e3f2, {
      "activityId": "1025694534292430849",
      "appid": "wx4080846d0cec2fd5"
    });
    let _0x5c9141 = 0;
    if (_0x16ef22.data.status) {
      const _0x402c41 = _0x16ef22.data.data;
      if (_0x402c41.level === 3) logAndNotify("账号【" + (_0x157739 + 1) + "】 当前是【" + _0x402c41.name + "】 可以领取奖励了");else {
        _0x5c9141 = _0x402c41.upgradeThreshold - _0x402c41.nutrientUsed;
        logAndNotify("账号【" + (_0x157739 + 1) + "】 当前是【" + _0x402c41.name + "】, 再施肥【" + _0x5c9141 + "】次 成为【" + _0x402c41.nextName + "】");
      }
    }
    const _0x29ada5 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/activityInfo", _0x57e3f2, {
        "activityId": "1025694534292430849",
        "appid": "wx4080846d0cec2fd5"
      }),
      _0x4dc479 = _0x29ada5.data.data.nurtureStageVo;
    logAndNotify("账号【" + (_0x157739 + 1) + "】 剩余肥料【" + _0x4dc479.nutrientRemaining + "】");
    _0x5c9141 < _0x4dc479.nutrientRemaining ? logAndNotify("账号【" + (_0x157739 + 1) + "】 本次只需要施肥【" + _0x5c9141 + "】次即可完成任务，请及时领取奖励！！！！！！！！！！！！！！！") : _0x5c9141 = _0x4dc479.nutrientRemaining;
    for (let _0x2750c8 = 0; _0x2750c8 < _0x5c9141; _0x2750c8++) {
      const _0x484e04 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/add/nutrient", _0x57e3f2, {
        "activityId": "1025694534292430849",
        "appid": "wx4080846d0cec2fd5"
      });
      _0x484e04.data.status ? logAndNotify("账号【" + (_0x157739 + 1) + "】 施肥【" + (_0x2750c8 + 1) + "】次成功") : logAndNotify("账号【" + (_0x157739 + 1) + "】 施肥【" + (_0x2750c8 + 1) + "】次失败");
    }
    const _0x530ff7 = new Date().getDay();
    if (_0x530ff7 === 2) {
      const _0xd51e6c = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/receive/takePartInReceive", _0x57e3f2, {
        "activityId": "1038508490954362881",
        "timestamp": "",
        "signature": "",
        "qzGtd": "",
        "gdtVid": "",
        "data": "",
        "version": 1,
        "appid": "wx4080846d0cec2fd5"
      });
      _0xd51e6c.data.status ? logAndNotify("账号【" + (_0x157739 + 1) + "】 领卷成功") : logAndNotify("账号【" + (_0x157739 + 1) + "】 领卷失败，可以忽略: " + _0xd51e6c.data.message);
    }
    const _0x2242b4 = await sendPostRequest("https://webapi.qmai.cn/web/catering/crm/coupon/list", _0x57e3f2, {
      "pageNo": 1,
      "pageSize": 1000,
      "useStatus": 0,
      "appid": "wx4080846d0cec2fd5"
    });
    if (_0x2242b4.data.status) {
      logAndNotify("账号【" + (_0x157739 + 1) + "】 优惠卷总数量: " + _0x2242b4.data.data.totalNum);
      for (const _0x2d5b91 of _0x2242b4.data.data.data) {
        logAndNotify("账号【" + (_0x157739 + 1) + "】 优惠卷: " + _0x2d5b91.title + " 有效期【" + _0x2d5b91.expireDesc + "】");
      }
    } else logAndNotify("账号【" + (_0x157739 + 1) + "】 获取优惠卷失败: " + _0x2242b4.data.message);
    logAndNotify("账号【" + (_0x157739 + 1) + "】 开始助力其他人");
    for (const _0x2be8fd of _0x5abd2d) {
      const _0x2c062b = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/userHelp", _0x57e3f2, {
        "activityId": "1025694534292430849",
        "appid": "wx4080846d0cec2fd5",
        "inviteUserId": _0x2be8fd
      });
      if (_0x2c062b.data.status) _0xfdb6ab ? logAndNotify("账号【" + (_0x157739 + 1) + "】 【" + _0x2be8fd + "】 助力成功") : logAndNotify("账号【" + (_0x157739 + 1) + "】 助力成功");else {
        _0xfdb6ab ? logAndNotify("账号【" + (_0x157739 + 1) + "】 【" + _0x2be8fd + "】 助力失败: " + _0x2c062b.data.message) : logAndNotify("账号【" + (_0x157739 + 1) + "】 助力失败: " + _0x2c062b.data.message);
        if (_0x2c062b.data.message === "今日助力次数已达上限") break;
      }
    }
  }
})().catch(_0xc5d1e9 => {
  logAndNotify(_0xc5d1e9);
}).finally(() => {
  sendNotify("益禾堂", notifyStr);
  $.done();
});
async function sendPostRequest(_0x54c3e1, _0x7900e, _0x6c5a57) {
  try {
    await delay(500);
    const _0x4ad4bc = {
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Referer": "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
        "User-Agent": ua
      },
      _0x4877d6 = {
        ..._0x4ad4bc,
        ...{
          "Qm-User-Token": _0x7900e
        }
      },
      _0x1902ea = axios.create({
        "headers": _0x4877d6,
        "timeout": 60000
      });
    return _0x1902ea.post(_0x54c3e1, _0x6c5a57);
  } catch (_0x38dbf9) {
    axios.isAxiosError(_0x38dbf9) ? _0x38dbf9.code === "ECONNABORTED" && _0x38dbf9.message.includes("timeout") ? console.error("请求超时：", _0x38dbf9.message) : console.error("其他错误：", _0x38dbf9.message) : console.error("未知错误：", _0x38dbf9);
    throw _0x38dbf9;
  }
}
async function sendGetRequest(_0x249b20, _0x3b217a) {
  try {
    await delay(500);
    const _0x5dcea3 = {
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        "Referer": "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
        "User-Agent": ua
      },
      _0x12566b = {
        ..._0x5dcea3,
        ...{
          "Qm-User-Token": _0x3b217a
        }
      },
      _0x2ac2a7 = axios.create({
        "headers": _0x12566b,
        "timeout": 60000
      });
    return _0x2ac2a7.get(_0x249b20);
  } catch (_0x1031e9) {
    if (axios.isAxiosError(_0x1031e9)) _0x1031e9.code === "ECONNABORTED" && _0x1031e9.message.includes("timeout") ? console.error("请求超时：", _0x1031e9.message) : console.error("其他错误：", _0x1031e9.message);else {
      console.error("未知错误：", _0x1031e9);
    }
    throw _0x1031e9;
  }
}
function logAndNotify(_0x1d49ea) {
  1;
  $.log(_0x1d49ea);
  notifyStr += _0x1d49ea;
  notifyStr += "\n";
}
function delay(_0x2944a5) {
  return new Promise(_0x122ddc => setTimeout(_0x122ddc, _0x2944a5));
}
function Env(_0x2a8e56, _0x6a2f27) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x464479 {
    constructor(_0x52cdb7) {
      this.env = _0x52cdb7;
    }
    ["send"](_0x5de453, _0x34a75b = "GET") {
      _0x5de453 = "string" == typeof _0x5de453 ? {
        "url": _0x5de453
      } : _0x5de453;
      let _0x46ba4c = this.get;
      return "POST" === _0x34a75b && (_0x46ba4c = this.post), new Promise((_0x2654a4, _0x186d27) => {
        _0x46ba4c.call(this, _0x5de453, (_0x2cfe09, _0x21e5b8, _0x2c5c2a) => {
          _0x2cfe09 ? _0x186d27(_0x2cfe09) : _0x2654a4(_0x21e5b8);
        });
      });
    }
    ["get"](_0x226e7c) {
      return this.send.call(this.env, _0x226e7c);
    }
    ["post"](_0x59e261) {
      return this.send.call(this.env, _0x59e261, "POST");
    }
  }
  return new class {
    constructor(_0x674776, _0xf0fc1d) {
      this.name = _0x674776;
      this.http = new _0x464479(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0xf0fc1d);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    ["isNode"]() {
      return "undefined" != typeof module && !!module.exports;
    }
    ["isQuanX"]() {
      return "undefined" != typeof $task;
    }
    ["isSurge"]() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    ["isLoon"]() {
      return "undefined" != typeof $loon;
    }
    ["toObj"](_0x4b249c, _0x3d0090 = null) {
      try {
        return JSON.parse(_0x4b249c);
      } catch {
        return _0x3d0090;
      }
    }
    ["toStr"](_0x3b4f5b, _0x452db6 = null) {
      try {
        return JSON.stringify(_0x3b4f5b);
      } catch {
        return _0x452db6;
      }
    }
    ["getjson"](_0x5582bf, _0x3f1b12) {
      let _0x210601 = _0x3f1b12;
      const _0x339307 = this.getdata(_0x5582bf);
      if (_0x339307) {
        try {
          _0x210601 = JSON.parse(this.getdata(_0x5582bf));
        } catch {}
      }
      return _0x210601;
    }
    ["setjson"](_0x4cdf35, _0x12ad4b) {
      try {
        return this.setdata(JSON.stringify(_0x4cdf35), _0x12ad4b);
      } catch {
        return !1;
      }
    }
    ["getScript"](_0x38fb77) {
      return new Promise(_0x1e0f51 => {
        this.get({
          "url": _0x38fb77
        }, (_0x28a269, _0x5a1b1e, _0x28d0c4) => _0x1e0f51(_0x28d0c4));
      });
    }
    ["runScript"](_0x4c695c, _0x505200) {
      return new Promise(_0x3fe7b4 => {
        let _0x35cd1a = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x35cd1a = _0x35cd1a ? _0x35cd1a.replace(/\n/g, "").trim() : _0x35cd1a;
        let _0x299439 = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x299439 = _0x299439 ? 1 * _0x299439 : 20;
        _0x299439 = _0x505200 && _0x505200.timeout ? _0x505200.timeout : _0x299439;
        const [_0x4d2f45, _0x1054e6] = _0x35cd1a.split("@"),
          _0x221f01 = {
            "url": "http://" + _0x1054e6 + "/v1/scripting/evaluate",
            "body": {
              "script_text": _0x4c695c,
              "mock_type": "cron",
              "timeout": _0x299439
            },
            "headers": {
              "X-Key": _0x4d2f45,
              "Accept": "*/*"
            }
          };
        this.post(_0x221f01, (_0x1dc08f, _0x3a9a95, _0x443d78) => _0x3fe7b4(_0x443d78));
      }).catch(_0x5ca087 => this.logErr(_0x5ca087));
    }
    ["loaddata"]() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x4c0d34 = this.path.resolve(this.dataFile),
          _0x1eab3f = this.path.resolve(process.cwd(), this.dataFile),
          _0x19b2b2 = this.fs.existsSync(_0x4c0d34),
          _0x1c44c1 = !_0x19b2b2 && this.fs.existsSync(_0x1eab3f);
        if (!_0x19b2b2 && !_0x1c44c1) return {};
        {
          const _0x19e88f = _0x19b2b2 ? _0x4c0d34 : _0x1eab3f;
          try {
            return JSON.parse(this.fs.readFileSync(_0x19e88f));
          } catch (_0x4e2537) {
            return {};
          }
        }
      }
    }
    ["writedata"]() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x2a8ebb = this.path.resolve(this.dataFile),
          _0x2c1ff4 = this.path.resolve(process.cwd(), this.dataFile),
          _0x59ab3d = this.fs.existsSync(_0x2a8ebb),
          _0x3ecfd9 = !_0x59ab3d && this.fs.existsSync(_0x2c1ff4),
          _0x5e08bb = JSON.stringify(this.data);
        _0x59ab3d ? this.fs.writeFileSync(_0x2a8ebb, _0x5e08bb) : _0x3ecfd9 ? this.fs.writeFileSync(_0x2c1ff4, _0x5e08bb) : this.fs.writeFileSync(_0x2a8ebb, _0x5e08bb);
      }
    }
    ["lodash_get"](_0x15dce6, _0x182b85, _0x22cec2) {
      const _0x457d47 = _0x182b85.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x3459f0 = _0x15dce6;
      for (const _0x4ad25e of _0x457d47) if (_0x3459f0 = Object(_0x3459f0)[_0x4ad25e], void 0 === _0x3459f0) return _0x22cec2;
      return _0x3459f0;
    }
    ["lodash_set"](_0x213438, _0xe48463, _0x250739) {
      return Object(_0x213438) !== _0x213438 ? _0x213438 : (Array.isArray(_0xe48463) || (_0xe48463 = _0xe48463.toString().match(/[^.[\]]+/g) || []), _0xe48463.slice(0, -1).reduce((_0x30f8ae, _0x15bea7, _0x51a115) => Object(_0x30f8ae[_0x15bea7]) === _0x30f8ae[_0x15bea7] ? _0x30f8ae[_0x15bea7] : _0x30f8ae[_0x15bea7] = Math.abs(_0xe48463[_0x51a115 + 1]) >> 0 == +_0xe48463[_0x51a115 + 1] ? [] : {}, _0x213438)[_0xe48463[_0xe48463.length - 1]] = _0x250739, _0x213438);
    }
    ["getdata"](_0x54dc0b) {
      let _0x5e7bde = this.getval(_0x54dc0b);
      if (/^@/.test(_0x54dc0b)) {
        const [, _0x3add91, _0x36c437] = /^@(.*?)\.(.*?)$/.exec(_0x54dc0b),
          _0x418302 = _0x3add91 ? this.getval(_0x3add91) : "";
        if (_0x418302) try {
          const _0xef2452 = JSON.parse(_0x418302);
          _0x5e7bde = _0xef2452 ? this.lodash_get(_0xef2452, _0x36c437, "") : _0x5e7bde;
        } catch (_0x56fec8) {
          _0x5e7bde = "";
        }
      }
      return _0x5e7bde;
    }
    ["setdata"](_0x501013, _0x32c49c) {
      let _0x55f44f = false;
      if (/^@/.test(_0x32c49c)) {
        const [, _0x281cbd, _0x5bac66] = /^@(.*?)\.(.*?)$/.exec(_0x32c49c),
          _0xe22de3 = this.getval(_0x281cbd),
          _0x43f849 = _0x281cbd ? "null" === _0xe22de3 ? null : _0xe22de3 || "{}" : "{}";
        try {
          const _0x215df9 = JSON.parse(_0x43f849);
          this.lodash_set(_0x215df9, _0x5bac66, _0x501013);
          _0x55f44f = this.setval(JSON.stringify(_0x215df9), _0x281cbd);
        } catch (_0x3f5d25) {
          const _0x43d9cd = {};
          this.lodash_set(_0x43d9cd, _0x5bac66, _0x501013);
          _0x55f44f = this.setval(JSON.stringify(_0x43d9cd), _0x281cbd);
        }
      } else _0x55f44f = this.setval(_0x501013, _0x32c49c);
      return _0x55f44f;
    }
    ["getval"](_0xcd76c8) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0xcd76c8) : this.isQuanX() ? $prefs.valueForKey(_0xcd76c8) : this.isNode() ? (this.data = this.loaddata(), this.data[_0xcd76c8]) : this.data && this.data[_0xcd76c8] || null;
    }
    ["setval"](_0x254a2a, _0x5ddfb1) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0x254a2a, _0x5ddfb1) : this.isQuanX() ? $prefs.setValueForKey(_0x254a2a, _0x5ddfb1) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5ddfb1] = _0x254a2a, this.writedata(), !0) : this.data && this.data[_0x5ddfb1] || null;
    }
    ["initGotEnv"](_0x4de863) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x4de863 && (_0x4de863.headers = _0x4de863.headers ? _0x4de863.headers : {}, void 0 === _0x4de863.headers.Cookie && void 0 === _0x4de863.cookieJar && (_0x4de863.cookieJar = this.ckjar));
    }
    ["get"](_0x5b87d4, _0x1891d3 = () => {}) {
      _0x5b87d4.headers && (delete _0x5b87d4.headers["Content-Type"], delete _0x5b87d4.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x5b87d4.headers = _0x5b87d4.headers || {}, Object.assign(_0x5b87d4.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x5b87d4, (_0x422cdc, _0xcc769, _0x3abdf1) => {
        !_0x422cdc && _0xcc769 && (_0xcc769.body = _0x3abdf1, _0xcc769.statusCode = _0xcc769.status);
        _0x1891d3(_0x422cdc, _0xcc769, _0x3abdf1);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x5b87d4.opts = _0x5b87d4.opts || {}, Object.assign(_0x5b87d4.opts, {
        "hints": !1
      })), $task.fetch(_0x5b87d4).then(_0x235c89 => {
        const {
          statusCode: _0x2ef2cb,
          statusCode: _0x426be9,
          headers: _0x5151a2,
          body: _0x5d0a7c
        } = _0x235c89;
        _0x1891d3(null, {
          "status": _0x2ef2cb,
          "statusCode": _0x426be9,
          "headers": _0x5151a2,
          "body": _0x5d0a7c
        }, _0x5d0a7c);
      }, _0x28baf8 => _0x1891d3(_0x28baf8))) : this.isNode() && (this.initGotEnv(_0x5b87d4), this.got(_0x5b87d4).on("redirect", (_0x67fbaa, _0x14f390) => {
        try {
          if (_0x67fbaa.headers["set-cookie"]) {
            const _0x35b197 = _0x67fbaa.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0x35b197 && this.ckjar.setCookieSync(_0x35b197, null);
            _0x14f390.cookieJar = this.ckjar;
          }
        } catch (_0x1bc4ea) {
          this.logErr(_0x1bc4ea);
        }
      }).then(_0x55172e => {
        const {
          statusCode: _0x165b5b,
          statusCode: _0x621715,
          headers: _0x3fd1ba,
          body: _0x1a2f37
        } = _0x55172e;
        _0x1891d3(null, {
          "status": _0x165b5b,
          "statusCode": _0x621715,
          "headers": _0x3fd1ba,
          "body": _0x1a2f37
        }, _0x1a2f37);
      }, _0x3f767f => {
        const {
          message: _0x1ec8e6,
          response: _0x2c10af
        } = _0x3f767f;
        _0x1891d3(_0x1ec8e6, _0x2c10af, _0x2c10af && _0x2c10af.body);
      }));
    }
    ["post"](_0x40ba16, _0x38d83d = () => {}) {
      if (_0x40ba16.body && _0x40ba16.headers && !_0x40ba16.headers["Content-Type"] && (_0x40ba16.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0x40ba16.headers && delete _0x40ba16.headers["Content-Length"], this.isSurge() || this.isLoon()) this.isSurge() && this.isNeedRewrite && (_0x40ba16.headers = _0x40ba16.headers || {}, Object.assign(_0x40ba16.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.post(_0x40ba16, (_0x5630df, _0x257943, _0x417b63) => {
        !_0x5630df && _0x257943 && (_0x257943.body = _0x417b63, _0x257943.statusCode = _0x257943.status);
        _0x38d83d(_0x5630df, _0x257943, _0x417b63);
      });else {
        if (this.isQuanX()) _0x40ba16.method = "POST", this.isNeedRewrite && (_0x40ba16.opts = _0x40ba16.opts || {}, Object.assign(_0x40ba16.opts, {
          "hints": !1
        })), $task.fetch(_0x40ba16).then(_0x297be7 => {
          const {
            statusCode: _0x44bb41,
            statusCode: _0x21c7ba,
            headers: _0x7dc3bd,
            body: _0x4a93cc
          } = _0x297be7;
          _0x38d83d(null, {
            "status": _0x44bb41,
            "statusCode": _0x21c7ba,
            "headers": _0x7dc3bd,
            "body": _0x4a93cc
          }, _0x4a93cc);
        }, _0x3ba9cf => _0x38d83d(_0x3ba9cf));else {
          if (this.isNode()) {
            this.initGotEnv(_0x40ba16);
            const {
              url: _0x517ca0,
              ..._0x369602
            } = _0x40ba16;
            this.got.post(_0x517ca0, _0x369602).then(_0x569e9a => {
              const {
                statusCode: _0x2e15f4,
                statusCode: _0x2b52c3,
                headers: _0x3066c7,
                body: _0x18ef05
              } = _0x569e9a;
              _0x38d83d(null, {
                "status": _0x2e15f4,
                "statusCode": _0x2b52c3,
                "headers": _0x3066c7,
                "body": _0x18ef05
              }, _0x18ef05);
            }, _0x2bfaa2 => {
              const {
                message: _0x2858ae,
                response: _0xe14080
              } = _0x2bfaa2;
              _0x38d83d(_0x2858ae, _0xe14080, _0xe14080 && _0xe14080.body);
            });
          }
        }
      }
    }
    ["time"](_0x119f44, _0x50dc42 = null) {
      const _0x4818d0 = _0x50dc42 ? new Date(_0x50dc42) : new Date();
      let _0x455482 = {
        "M+": _0x4818d0.getMonth() + 1,
        "d+": _0x4818d0.getDate(),
        "H+": _0x4818d0.getHours(),
        "m+": _0x4818d0.getMinutes(),
        "s+": _0x4818d0.getSeconds(),
        "q+": Math.floor((_0x4818d0.getMonth() + 3) / 3),
        "S": _0x4818d0.getMilliseconds()
      };
      /(y+)/.test(_0x119f44) && (_0x119f44 = _0x119f44.replace(RegExp.$1, (_0x4818d0.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x1b88c1 in _0x455482) new RegExp("(" + _0x1b88c1 + ")").test(_0x119f44) && (_0x119f44 = _0x119f44.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x455482[_0x1b88c1] : ("00" + _0x455482[_0x1b88c1]).substr(("" + _0x455482[_0x1b88c1]).length)));
      return _0x119f44;
    }
    ["msg"](_0x4c1346 = _0x2a8e56, _0x54e307 = "", _0x625945 = "", _0x458dd2) {
      const _0x2b8b27 = _0x4494d3 => {
        if (!_0x4494d3) return _0x4494d3;
        if ("string" == typeof _0x4494d3) return this.isLoon() ? _0x4494d3 : this.isQuanX() ? {
          "open-url": _0x4494d3
        } : this.isSurge() ? {
          "url": _0x4494d3
        } : void 0;
        if ("object" == typeof _0x4494d3) {
          if (this.isLoon()) {
            let _0xa85066 = _0x4494d3.openUrl || _0x4494d3.url || _0x4494d3["open-url"],
              _0xc3299b = _0x4494d3.mediaUrl || _0x4494d3["media-url"];
            return {
              "openUrl": _0xa85066,
              "mediaUrl": _0xc3299b
            };
          }
          if (this.isQuanX()) {
            let _0x3e6aa0 = _0x4494d3["open-url"] || _0x4494d3.url || _0x4494d3.openUrl,
              _0x5797d4 = _0x4494d3["media-url"] || _0x4494d3.mediaUrl;
            return {
              "open-url": _0x3e6aa0,
              "media-url": _0x5797d4
            };
          }
          if (this.isSurge()) {
            let _0x4891ec = _0x4494d3.url || _0x4494d3.openUrl || _0x4494d3["open-url"];
            return {
              "url": _0x4891ec
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4c1346, _0x54e307, _0x625945, _0x2b8b27(_0x458dd2)) : this.isQuanX() && $notify(_0x4c1346, _0x54e307, _0x625945, _0x2b8b27(_0x458dd2))), !this.isMuteLog) {
        let _0x3646e6 = ["", "==============📣系统通知📣=============="];
        _0x3646e6.push(_0x4c1346);
        _0x54e307 && _0x3646e6.push(_0x54e307);
        _0x625945 && _0x3646e6.push(_0x625945);
        console.log(_0x3646e6.join("\n"));
        this.logs = this.logs.concat(_0x3646e6);
      }
    }
    ["log"](..._0x26f298) {
      _0x26f298.length > 0 && (this.logs = [...this.logs, ..._0x26f298]);
      console.log(_0x26f298.join(this.logSeparator));
    }
    ["logErr"](_0x5ea752, _0x537e51) {
      const _0x59c581 = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x59c581 ? this.log("", "❗️" + this.name + ", 错误!", _0x5ea752.stack) : this.log("", "❗️" + this.name + ", 错误!", _0x5ea752);
    }
    ["wait"](_0x45abe3) {
      return new Promise(_0x3e239b => setTimeout(_0x3e239b, _0x45abe3));
    }
    ["done"](_0x35272d = {}) {
      const _0x3beed6 = new Date().getTime(),
        _0x9d4c2 = (_0x3beed6 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x9d4c2 + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x35272d);
    }
  }(_0x2a8e56, _0x6a2f27);
}
function checkVersion(_0x4d154a, _0x2b2942) {
  try {
    logAndNotify("文件md5：" + _0x2b2942);
    const _0x1580fa = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0x4d154a + "&fileMd5=" + _0x2b2942),
      _0x5f1a03 = JSON.parse(_0x1580fa.getBody("utf8"));
    _0x5f1a03.code === 301 ? process.exit(0) : logAndNotify(_0x5f1a03.data);
    if (_0x5f1a03.data2 && _0x5f1a03.data2.inviteData) return _0x5f1a03.data2.inviteData;
  } catch (_0x5df5c0) {
    logAndNotify("版本检查失败:", _0x5df5c0);
  }
}
function generateUserAgent() {
  return "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/" + Math.floor(Math.random() * 8 + 7) + "." + Math.floor(Math.random() * 10) + "." + (Math.floor(Math.random() * 10000) + 10000) + " NetType/WIFI Language/zh_CN";
}