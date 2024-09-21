//Sat Sep 21 2024 06:18:27 GMT+0000 (Coordinated Universal Time)
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
    retries: 3
  });
  const _0x436168 = checkVersion("yht.js", "5a2fd20d2a568ca5f3f541c6b7881328");
  let _0x5a10b4 = [];
  _0x436168 && (_0x5a10b4 = _0x436168.split(","));
  const _0x5f065c = process.env.yht_ck,
    _0x2ff171 = process.env.yht_showinviteId;
  if (!_0x5f065c) {
    logAndNotify("请先设置环境变量 yht_ck");
    return;
  }
  const _0x5068af = !!_0x2ff171;
  let _0x1f11e8 = _0x5f065c.replaceAll("&", "\n").split("\n");
  for (let _0x2cd579 = 0; _0x2cd579 < _0x1f11e8.length; _0x2cd579++) {
    ua = generateUserAgent();
    const _0xd70425 = _0x1f11e8[_0x2cd579],
      _0x49b8bd = await sendGetRequest("https://webapi.qmai.cn/web/catering/crm/personal-info", _0xd70425);
    if (!_0x49b8bd.data.status) {
      logAndNotify("账号【" + (_0x2cd579 + 1) + "】 登录失败☹");
      continue;
    }
    logAndNotify("🧐" + _0x49b8bd.data.data.mobilePhone + "🧐");
    const _0x24e63e = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/takePartInNurture", _0xd70425, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    if (_0x24e63e.data.status) {
      logAndNotify("账号【" + (_0x2cd579 + 1) + "】 开启种树成功");
      logAndNotify("账号【" + (_0x2cd579 + 1) + "】 userId=【" + _0x24e63e.data.data.userId + "】");
    } else {
      logAndNotify("账号【" + (_0x2cd579 + 1) + "】 忽略此提示【" + _0x24e63e.data.message + "】");
    }
    const _0x4eb3d3 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/taskInfo", _0xd70425, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    logAndNotify("账号【" + (_0x2cd579 + 1) + "】 被助力次数:【" + _0x4eb3d3.data.data.dailyInviteNum + "】");
    const _0x25bb9e = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/activityInfo", _0xd70425, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      }),
      _0x4ac751 = _0x25bb9e.data.data.nurtureStageVo;
    logAndNotify("账号【" + (_0x2cd579 + 1) + "】 剩余肥料【" + _0x4ac751.nutrientRemaining + "】");
    for (let _0x4410df = 0; _0x4410df < _0x4ac751.nutrientRemaining; _0x4410df++) {
      const _0x395821 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/add/nutrient", _0xd70425, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5"
      });
      if (_0x395821.data.status) {
        logAndNotify("账号【" + (_0x2cd579 + 1) + "】 施肥【" + (_0x4410df + 1) + "】次成功");
      } else {
        logAndNotify("账号【" + (_0x2cd579 + 1) + "】 施肥【" + (_0x4410df + 1) + "】次失败");
      }
    }
    const _0x221009 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/nurture/stageInfo", _0xd70425, {
      activityId: "1025694534292430849",
      appid: "wx4080846d0cec2fd5"
    });
    if (_0x221009.data.status) {
      const _0x74e61e = _0x221009.data.data;
      logAndNotify("账号【" + (_0x2cd579 + 1) + "】 当前是【" + _0x74e61e.name + "】, 再施肥【" + (_0x74e61e.upgradeThreshold - _0x74e61e.nutrientUsed) + "】次 成为【" + _0x74e61e.nextName + "】");
    }
    const _0x3f3eef = new Date().getDay();
    if (_0x3f3eef === 2) {
      const _0x5a4c09 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/receive/takePartInReceive", _0xd70425, {
        activityId: "1038508490954362881",
        timestamp: "",
        signature: "",
        qzGtd: "",
        gdtVid: "",
        data: "",
        version: 1,
        appid: "wx4080846d0cec2fd5"
      });
      _0x5a4c09.data.status ? logAndNotify("账号【" + (_0x2cd579 + 1) + "】 领卷成功") : logAndNotify("账号【" + (_0x2cd579 + 1) + "】 领卷失败，可以忽略: " + _0x5a4c09.data.message);
    }
    const _0x252e91 = await sendPostRequest("https://webapi.qmai.cn/web/catering/crm/coupon/list", _0xd70425, {
      pageNo: 1,
      pageSize: 1000,
      useStatus: 0,
      appid: "wx4080846d0cec2fd5"
    });
    if (_0x252e91.data.status) {
      logAndNotify("账号【" + (_0x2cd579 + 1) + "】 优惠卷总数量: " + _0x252e91.data.data.totalNum);
      for (const _0x5e0dcb of _0x252e91.data.data.data) {
        logAndNotify("账号【" + (_0x2cd579 + 1) + "】 优惠卷: " + _0x5e0dcb.title + " 有效期【" + _0x5e0dcb.expireDesc + "】");
      }
    } else {
      logAndNotify("账号【" + (_0x2cd579 + 1) + "】 获取优惠卷失败: " + _0x252e91.data.message);
    }
    logAndNotify("账号【" + (_0x2cd579 + 1) + "】 开始助力其他人");
    for (const _0x38de70 of _0x5a10b4) {
      const _0x5515a3 = await sendPostRequest("https://webapi.qmai.cn/web/cmk-center/task/userHelp", _0xd70425, {
        activityId: "1025694534292430849",
        appid: "wx4080846d0cec2fd5",
        inviteUserId: _0x38de70
      });
      if (_0x5515a3.data.status) {
        if (_0x5068af) {
          logAndNotify("账号【" + (_0x2cd579 + 1) + "】 【" + _0x38de70 + "】 助力成功");
        } else {
          logAndNotify("账号【" + (_0x2cd579 + 1) + "】 助力成功");
        }
      } else {
        if (_0x5068af) {
          logAndNotify("账号【" + (_0x2cd579 + 1) + "】 【" + _0x38de70 + "】 助力失败: " + _0x5515a3.data.message);
        } else {
          logAndNotify("账号【" + (_0x2cd579 + 1) + "】 助力失败: " + _0x5515a3.data.message);
        }
        if (_0x5515a3.data.message === "今日助力次数已达上限") {
          break;
        }
      }
    }
  }
})().catch(_0x5dd85e => {
  logAndNotify(_0x5dd85e);
}).finally(() => {
  sendNotify("益禾堂", notifyStr);
  $.done();
});
async function sendPostRequest(_0x1fb3c2, _0xb9d8d3, _0x4b462f) {
  try {
    const _0x1274dc = {
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
        "User-Agent": ua
      },
      _0x279a8b = {
        ..._0x1274dc,
        ...{
          "Qm-User-Token": _0xb9d8d3
        }
      },
      _0x46e405 = axios.create({
        headers: _0x279a8b,
        timeout: 60000
      });
    return _0x46e405.post(_0x1fb3c2, _0x4b462f);
  } catch (_0x144930) {
    if (axios.isAxiosError(_0x144930)) {
      if (_0x144930.code === "ECONNABORTED" && _0x144930.message.includes("timeout")) {
        console.error("请求超时：", _0x144930.message);
      } else {
        console.error("其他错误：", _0x144930.message);
      }
    } else {
      console.error("未知错误：", _0x144930);
    }
    throw _0x144930;
  }
}
async function sendGetRequest(_0x1c42ce, _0x3430d0) {
  try {
    const _0x7c6b1f = {
        "Qm-From": "wechat",
        "Qm-From-Type": "catering",
        Referer: "https://servicewechat.com/wx4080846d0cec2fd5/391/page-frame.html",
        "User-Agent": ua
      },
      _0x258c9e = {
        ..._0x7c6b1f,
        ...{
          "Qm-User-Token": _0x3430d0
        }
      },
      _0x46abcd = axios.create({
        headers: _0x258c9e,
        timeout: 60000
      });
    return _0x46abcd.get(_0x1c42ce);
  } catch (_0x120093) {
    if (axios.isAxiosError(_0x120093)) {
      if (_0x120093.code === "ECONNABORTED" && _0x120093.message.includes("timeout")) {
        console.error("请求超时：", _0x120093.message);
      } else {
        console.error("其他错误：", _0x120093.message);
      }
    } else {
      console.error("未知错误：", _0x120093);
    }
    throw _0x120093;
  }
}
function logAndNotify(_0x4804b5) {
  1;
  $.log(_0x4804b5);
  notifyStr += _0x4804b5;
  notifyStr += "\n";
}
function delay(_0x5885a0) {
  return new Promise(_0x1ea6b9 => setTimeout(_0x1ea6b9, _0x5885a0));
}
function Env(_0x57c1b3, _0x3a3728) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class _0x1ad91d {
    constructor(_0x192fc1) {
      this.env = _0x192fc1;
    }
    send(_0x4e707d, _0x3888ab = "GET") {
      _0x4e707d = "string" == typeof _0x4e707d ? {
        url: _0x4e707d
      } : _0x4e707d;
      let _0x4baa36 = this.get;
      "POST" === _0x3888ab && (_0x4baa36 = this.post);
      return new Promise((_0x300402, _0x340bbd) => {
        _0x4baa36.call(this, _0x4e707d, (_0x3643ea, _0x1509b1, _0x4894ca) => {
          _0x3643ea ? _0x340bbd(_0x3643ea) : _0x300402(_0x1509b1);
        });
      });
    }
    get(_0xab39be) {
      return this.send.call(this.env, _0xab39be);
    }
    post(_0x1312ed) {
      return this.send.call(this.env, _0x1312ed, "POST");
    }
  }
  return new class {
    constructor(_0x187d2a, _0x706a90) {
      this.name = _0x187d2a;
      this.http = new _0x1ad91d(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, _0x706a90);
      this.log("", "🔔" + this.name + ", 开始!");
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
    toObj(_0x3a5952, _0x4a5da2 = null) {
      try {
        return JSON.parse(_0x3a5952);
      } catch {
        return _0x4a5da2;
      }
    }
    toStr(_0x10b607, _0x40abdb = null) {
      try {
        return JSON.stringify(_0x10b607);
      } catch {
        return _0x40abdb;
      }
    }
    getjson(_0x5073f3, _0x4ff671) {
      let _0x1abe00 = _0x4ff671;
      const _0x242aad = this.getdata(_0x5073f3);
      if (_0x242aad) {
        try {
          _0x1abe00 = JSON.parse(this.getdata(_0x5073f3));
        } catch {}
      }
      return _0x1abe00;
    }
    setjson(_0xd80e09, _0x3fb71b) {
      try {
        return this.setdata(JSON.stringify(_0xd80e09), _0x3fb71b);
      } catch {
        return !1;
      }
    }
    getScript(_0xcb2fa2) {
      return new Promise(_0x2ea05e => {
        this.get({
          url: _0xcb2fa2
        }, (_0x53d98f, _0x249125, _0x54ec0b) => _0x2ea05e(_0x54ec0b));
      });
    }
    runScript(_0xe0e5c0, _0x4e802c) {
      return new Promise(_0x39b9ab => {
        let _0x487fc6 = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        _0x487fc6 = _0x487fc6 ? _0x487fc6.replace(/\n/g, "").trim() : _0x487fc6;
        let _0x19ca7e = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        _0x19ca7e = _0x19ca7e ? 1 * _0x19ca7e : 20;
        _0x19ca7e = _0x4e802c && _0x4e802c.timeout ? _0x4e802c.timeout : _0x19ca7e;
        const [_0xf40485, _0x1516ee] = _0x487fc6.split("@"),
          _0x7c237b = {
            url: "http://" + _0x1516ee + "/v1/scripting/evaluate",
            body: {
              script_text: _0xe0e5c0,
              mock_type: "cron",
              timeout: _0x19ca7e
            },
            headers: {
              "X-Key": _0xf40485,
              Accept: "*/*"
            }
          };
        this.post(_0x7c237b, (_0x4d6f7b, _0xff5511, _0x25a41d) => _0x39b9ab(_0x25a41d));
      }).catch(_0x2fae0a => this.logErr(_0x2fae0a));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x5035ee = this.path.resolve(this.dataFile),
          _0x1b0a96 = this.path.resolve(process.cwd(), this.dataFile),
          _0x558da6 = this.fs.existsSync(_0x5035ee),
          _0x10d12d = !_0x558da6 && this.fs.existsSync(_0x1b0a96);
        if (!_0x558da6 && !_0x10d12d) {
          return {};
        }
        {
          const _0x16103a = _0x558da6 ? _0x5035ee : _0x1b0a96;
          try {
            return JSON.parse(this.fs.readFileSync(_0x16103a));
          } catch (_0x11b50b) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const _0x47b557 = this.path.resolve(this.dataFile),
          _0x341a22 = this.path.resolve(process.cwd(), this.dataFile),
          _0x1a7ac9 = this.fs.existsSync(_0x47b557),
          _0x20f71c = !_0x1a7ac9 && this.fs.existsSync(_0x341a22),
          _0x4d47ae = JSON.stringify(this.data);
        _0x1a7ac9 ? this.fs.writeFileSync(_0x47b557, _0x4d47ae) : _0x20f71c ? this.fs.writeFileSync(_0x341a22, _0x4d47ae) : this.fs.writeFileSync(_0x47b557, _0x4d47ae);
      }
    }
    lodash_get(_0x216477, _0x3b797f, _0x338130) {
      const _0x3f4b68 = _0x3b797f.replace(/\[(\d+)\]/g, ".$1").split(".");
      let _0x2f2666 = _0x216477;
      for (const _0x5886d9 of _0x3f4b68) if (_0x2f2666 = Object(_0x2f2666)[_0x5886d9], void 0 === _0x2f2666) {
        return _0x338130;
      }
      return _0x2f2666;
    }
    lodash_set(_0x12723b, _0x44c910, _0xf245d8) {
      return Object(_0x12723b) !== _0x12723b ? _0x12723b : (Array.isArray(_0x44c910) || (_0x44c910 = _0x44c910.toString().match(/[^.[\]]+/g) || []), _0x44c910.slice(0, -1).reduce((_0x137cf1, _0x5b8479, _0x1b5ec6) => Object(_0x137cf1[_0x5b8479]) === _0x137cf1[_0x5b8479] ? _0x137cf1[_0x5b8479] : _0x137cf1[_0x5b8479] = Math.abs(_0x44c910[_0x1b5ec6 + 1]) >> 0 == +_0x44c910[_0x1b5ec6 + 1] ? [] : {}, _0x12723b)[_0x44c910[_0x44c910.length - 1]] = _0xf245d8, _0x12723b);
    }
    getdata(_0x262eef) {
      let _0x2a7a5f = this.getval(_0x262eef);
      if (/^@/.test(_0x262eef)) {
        const [, _0x3aa192, _0x2542f0] = /^@(.*?)\.(.*?)$/.exec(_0x262eef),
          _0x6f4e5f = _0x3aa192 ? this.getval(_0x3aa192) : "";
        if (_0x6f4e5f) {
          try {
            const _0x48801a = JSON.parse(_0x6f4e5f);
            _0x2a7a5f = _0x48801a ? this.lodash_get(_0x48801a, _0x2542f0, "") : _0x2a7a5f;
          } catch (_0x113e83) {
            _0x2a7a5f = "";
          }
        }
      }
      return _0x2a7a5f;
    }
    setdata(_0x360431, _0x5116e4) {
      let _0x51815c = !1;
      if (/^@/.test(_0x5116e4)) {
        const [, _0x2f4af1, _0x27ff04] = /^@(.*?)\.(.*?)$/.exec(_0x5116e4),
          _0x3dfa52 = this.getval(_0x2f4af1),
          _0x27f6e4 = _0x2f4af1 ? "null" === _0x3dfa52 ? null : _0x3dfa52 || "{}" : "{}";
        try {
          const _0x4e7802 = JSON.parse(_0x27f6e4);
          this.lodash_set(_0x4e7802, _0x27ff04, _0x360431);
          _0x51815c = this.setval(JSON.stringify(_0x4e7802), _0x2f4af1);
        } catch (_0x1db6ae) {
          const _0x1f51f9 = {};
          this.lodash_set(_0x1f51f9, _0x27ff04, _0x360431);
          _0x51815c = this.setval(JSON.stringify(_0x1f51f9), _0x2f4af1);
        }
      } else {
        _0x51815c = this.setval(_0x360431, _0x5116e4);
      }
      return _0x51815c;
    }
    getval(_0x5dbe51) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(_0x5dbe51) : this.isQuanX() ? $prefs.valueForKey(_0x5dbe51) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x5dbe51]) : this.data && this.data[_0x5dbe51] || null;
    }
    setval(_0xfc2361, _0x536237) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(_0xfc2361, _0x536237) : this.isQuanX() ? $prefs.setValueForKey(_0xfc2361, _0x536237) : this.isNode() ? (this.data = this.loaddata(), this.data[_0x536237] = _0xfc2361, this.writedata(), !0) : this.data && this.data[_0x536237] || null;
    }
    initGotEnv(_0x1c49ee) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      _0x1c49ee && (_0x1c49ee.headers = _0x1c49ee.headers ? _0x1c49ee.headers : {}, void 0 === _0x1c49ee.headers.Cookie && void 0 === _0x1c49ee.cookieJar && (_0x1c49ee.cookieJar = this.ckjar));
    }
    get(_0x1422ba, _0x4de97d = () => {}) {
      _0x1422ba.headers && (delete _0x1422ba.headers["Content-Type"], delete _0x1422ba.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (_0x1422ba.headers = _0x1422ba.headers || {}, Object.assign(_0x1422ba.headers, {
        "X-Surge-Skip-Scripting": !1
      })), $httpClient.get(_0x1422ba, (_0x580537, _0x4cb64a, _0x464b95) => {
        !_0x580537 && _0x4cb64a && (_0x4cb64a.body = _0x464b95, _0x4cb64a.statusCode = _0x4cb64a.status);
        _0x4de97d(_0x580537, _0x4cb64a, _0x464b95);
      })) : this.isQuanX() ? (this.isNeedRewrite && (_0x1422ba.opts = _0x1422ba.opts || {}, Object.assign(_0x1422ba.opts, {
        hints: !1
      })), $task.fetch(_0x1422ba).then(_0x2f4afb => {
        const {
          statusCode: _0x563c58,
          statusCode: _0x365532,
          headers: _0x59d317,
          body: _0x1ba833
        } = _0x2f4afb;
        _0x4de97d(null, {
          status: _0x563c58,
          statusCode: _0x365532,
          headers: _0x59d317,
          body: _0x1ba833
        }, _0x1ba833);
      }, _0xfb63d0 => _0x4de97d(_0xfb63d0))) : this.isNode() && (this.initGotEnv(_0x1422ba), this.got(_0x1422ba).on("redirect", (_0x28d2ee, _0x2d78ab) => {
        try {
          if (_0x28d2ee.headers["set-cookie"]) {
            const _0xbc28f = _0x28d2ee.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            _0xbc28f && this.ckjar.setCookieSync(_0xbc28f, null);
            _0x2d78ab.cookieJar = this.ckjar;
          }
        } catch (_0x76057a) {
          this.logErr(_0x76057a);
        }
      }).then(_0x4b7b82 => {
        const {
          statusCode: _0x3d051a,
          statusCode: _0x2ff35b,
          headers: _0x97962a,
          body: _0x297e77
        } = _0x4b7b82;
        _0x4de97d(null, {
          status: _0x3d051a,
          statusCode: _0x2ff35b,
          headers: _0x97962a,
          body: _0x297e77
        }, _0x297e77);
      }, _0xb11f7f => {
        const {
          message: _0x47ff59,
          response: _0x34ca66
        } = _0xb11f7f;
        _0x4de97d(_0x47ff59, _0x34ca66, _0x34ca66 && _0x34ca66.body);
      }));
    }
    post(_0xfde594, _0x26ab02 = () => {}) {
      if (_0xfde594.body && _0xfde594.headers && !_0xfde594.headers["Content-Type"] && (_0xfde594.headers["Content-Type"] = "application/x-www-form-urlencoded"), _0xfde594.headers && delete _0xfde594.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (_0xfde594.headers = _0xfde594.headers || {}, Object.assign(_0xfde594.headers, {
          "X-Surge-Skip-Scripting": !1
        }));
        $httpClient.post(_0xfde594, (_0x44ab72, _0x448fb6, _0x1a0472) => {
          !_0x44ab72 && _0x448fb6 && (_0x448fb6.body = _0x1a0472, _0x448fb6.statusCode = _0x448fb6.status);
          _0x26ab02(_0x44ab72, _0x448fb6, _0x1a0472);
        });
      } else {
        if (this.isQuanX()) {
          _0xfde594.method = "POST";
          this.isNeedRewrite && (_0xfde594.opts = _0xfde594.opts || {}, Object.assign(_0xfde594.opts, {
            hints: !1
          }));
          $task.fetch(_0xfde594).then(_0x2451b3 => {
            const {
              statusCode: _0x594d43,
              statusCode: _0x4b241,
              headers: _0x11f2b7,
              body: _0x3eda19
            } = _0x2451b3;
            _0x26ab02(null, {
              status: _0x594d43,
              statusCode: _0x4b241,
              headers: _0x11f2b7,
              body: _0x3eda19
            }, _0x3eda19);
          }, _0x314b4a => _0x26ab02(_0x314b4a));
        } else {
          if (this.isNode()) {
            this.initGotEnv(_0xfde594);
            const {
              url: _0xbde254,
              ..._0x48fa2c
            } = _0xfde594;
            this.got.post(_0xbde254, _0x48fa2c).then(_0x175ecb => {
              const {
                statusCode: _0x655e0d,
                statusCode: _0x266fb1,
                headers: _0x187985,
                body: _0x2af720
              } = _0x175ecb;
              _0x26ab02(null, {
                status: _0x655e0d,
                statusCode: _0x266fb1,
                headers: _0x187985,
                body: _0x2af720
              }, _0x2af720);
            }, _0x3f3b47 => {
              const {
                message: _0x23770e,
                response: _0xc29c4a
              } = _0x3f3b47;
              _0x26ab02(_0x23770e, _0xc29c4a, _0xc29c4a && _0xc29c4a.body);
            });
          }
        }
      }
    }
    time(_0x848ee6, _0x272b45 = null) {
      const _0x1cf7d8 = _0x272b45 ? new Date(_0x272b45) : new Date();
      let _0x2aac10 = {
        "M+": _0x1cf7d8.getMonth() + 1,
        "d+": _0x1cf7d8.getDate(),
        "H+": _0x1cf7d8.getHours(),
        "m+": _0x1cf7d8.getMinutes(),
        "s+": _0x1cf7d8.getSeconds(),
        "q+": Math.floor((_0x1cf7d8.getMonth() + 3) / 3),
        S: _0x1cf7d8.getMilliseconds()
      };
      /(y+)/.test(_0x848ee6) && (_0x848ee6 = _0x848ee6.replace(RegExp.$1, (_0x1cf7d8.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let _0x47aaf3 in _0x2aac10) new RegExp("(" + _0x47aaf3 + ")").test(_0x848ee6) && (_0x848ee6 = _0x848ee6.replace(RegExp.$1, 1 == RegExp.$1.length ? _0x2aac10[_0x47aaf3] : ("00" + _0x2aac10[_0x47aaf3]).substr(("" + _0x2aac10[_0x47aaf3]).length)));
      return _0x848ee6;
    }
    msg(_0x4be6e2 = _0x57c1b3, _0x3fb8d8 = "", _0x581661 = "", _0x47626e) {
      const _0x5d6633 = _0x18f72a => {
        if (!_0x18f72a) {
          return _0x18f72a;
        }
        if ("string" == typeof _0x18f72a) {
          return this.isLoon() ? _0x18f72a : this.isQuanX() ? {
            "open-url": _0x18f72a
          } : this.isSurge() ? {
            url: _0x18f72a
          } : void 0;
        }
        if ("object" == typeof _0x18f72a) {
          if (this.isLoon()) {
            let _0x2e0837 = _0x18f72a.openUrl || _0x18f72a.url || _0x18f72a["open-url"],
              _0x3a8c4e = _0x18f72a.mediaUrl || _0x18f72a["media-url"];
            return {
              openUrl: _0x2e0837,
              mediaUrl: _0x3a8c4e
            };
          }
          if (this.isQuanX()) {
            let _0x32f94a = _0x18f72a["open-url"] || _0x18f72a.url || _0x18f72a.openUrl,
              _0x3c1857 = _0x18f72a["media-url"] || _0x18f72a.mediaUrl;
            return {
              "open-url": _0x32f94a,
              "media-url": _0x3c1857
            };
          }
          if (this.isSurge()) {
            let _0x2d4eee = _0x18f72a.url || _0x18f72a.openUrl || _0x18f72a["open-url"];
            return {
              url: _0x2d4eee
            };
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(_0x4be6e2, _0x3fb8d8, _0x581661, _0x5d6633(_0x47626e)) : this.isQuanX() && $notify(_0x4be6e2, _0x3fb8d8, _0x581661, _0x5d6633(_0x47626e))), !this.isMuteLog) {
        let _0x39c595 = ["", "==============📣系统通知📣=============="];
        _0x39c595.push(_0x4be6e2);
        _0x3fb8d8 && _0x39c595.push(_0x3fb8d8);
        _0x581661 && _0x39c595.push(_0x581661);
        console.log(_0x39c595.join("\n"));
        this.logs = this.logs.concat(_0x39c595);
      }
    }
    log(..._0x24133f) {
      _0x24133f.length > 0 && (this.logs = [...this.logs, ..._0x24133f]);
      console.log(_0x24133f.join(this.logSeparator));
    }
    logErr(_0xa8d7f9, _0x2a957e) {
      const _0x40420a = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      _0x40420a ? this.log("", "❗️" + this.name + ", 错误!", _0xa8d7f9.stack) : this.log("", "❗️" + this.name + ", 错误!", _0xa8d7f9);
    }
    wait(_0x5bdd0f) {
      return new Promise(_0x9e0f39 => setTimeout(_0x9e0f39, _0x5bdd0f));
    }
    done(_0x4c7232 = {}) {
      const _0x33ef70 = new Date().getTime(),
        _0x56e68f = (_0x33ef70 - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + _0x56e68f + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(_0x4c7232);
    }
  }(_0x57c1b3, _0x3a3728);
}
function checkVersion(_0xa7c25a, _0x54e31f) {
  try {
    logAndNotify("文件md5：" + _0x54e31f);
    const _0x17376a = SyncRequest("GET", "https://checktoke.filegear-sg.me/api/update/check?fileName=" + _0xa7c25a + "&fileMd5=" + _0x54e31f),
      _0x540f3b = JSON.parse(_0x17376a.getBody("utf8"));
    _0x540f3b.code === 301 ? process.exit(0) : logAndNotify(_0x540f3b.data);
    if (_0x540f3b.data2 && _0x540f3b.data2.inviteData) {
      return _0x540f3b.data2.inviteData;
    }
  } catch (_0x163ee1) {
    logAndNotify("版本检查失败:", _0x163ee1);
  }
}
function generateUserAgent() {
  return "Mozilla/5.0 (iPhone; CPU iPhone OS 13_2_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/" + Math.floor(Math.random() * 8 + 7) + "." + Math.floor(Math.random() * 10) + "." + (Math.floor(Math.random() * 10000) + 10000) + " NetType/WIFI Language/zh_CN";
}