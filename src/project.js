require=function e(t,r,o){function n(u,i){if(!r[u]){if(!t[u]){var s="function"==typeof require&&require;if(!i&&s)return s(u,!0);if(c)return c(u,!0);var a=new Error("Cannot find module '"+u+"'");throw a.code="MODULE_NOT_FOUND",a}var l=r[u]={exports:{}};t[u][0].call(l.exports,function(e){var r=t[u][1][e];return n(r?r:e)},l,l.exports,e,t,r,o)}return r[u].exports}for(var c="function"==typeof require&&require,u=0;u<o.length;u++)n(o[u]);return n}({ChildClass:[function(e,t,r){"use strict";cc._RF.push(t,"58ad30XPqVHQoduXxkcQ/vu","ChildClass"),Object.defineProperty(r,"__esModule",{value:!0});var o=e("./SuperClass"),n=cc._decorator.ccclass,c=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.testAsync=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(e,t){setTimeout(function(){e("Hello, World! From ChildClass!")},1e3)})]})})},t.prototype.onLoad=function(){},t}(o["default"]);c=__decorate([n],c),r["default"]=c,cc._RF.pop()},{"./SuperClass":"SuperClass"}],CsvScene2:[function(e,t,r){"use strict";cc._RF.push(t,"ad6abll8ZRBuZDx+5w2iuWh","CsvScene2"),Object.defineProperty(r,"__esModule",{value:!0});var o=cc._decorator,n=o.ccclass,c=o.property,u=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.text="hello",t}return __extends(t,e),t.prototype.onLoad=function(){},t}(cc.Component);__decorate([c(cc.Label)],u.prototype,"label",void 0),__decorate([c({"default":"hello"})],u.prototype,"text",void 0),u=__decorate([n],u),r["default"]=u,cc._RF.pop()},{}],CsvScene:[function(e,t,r){"use strict";cc._RF.push(t,"b90c88yxQRN+7K5VipN+oJO","CsvScene"),Object.defineProperty(r,"__esModule",{value:!0});var o=cc._decorator,n=o.ccclass,c=(o.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){},t}(cc.Component));c=__decorate([n],c),r.CsvScene=c,cc._RF.pop()},{}],SuperClass:[function(e,t,r){"use strict";cc._RF.push(t,"7cd6am2IKhCU7zkCn2hKJMV","SuperClass"),Object.defineProperty(r,"__esModule",{value:!0});var o=cc._decorator,n=o.ccclass,c=o.property,u=(o.executionOrder,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.text="hello",t}return __extends(t,e),t.prototype.onLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=this.label,[4,this.testAsync()];case 1:return e.string=t.sent(),[2]}})})},t.prototype.testAsync=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(e,t){setTimeout(function(){e("Hello, World!")},1e3)})]})})},t}(cc.Component));__decorate([c(cc.Label)],u.prototype,"label",void 0),__decorate([c({"default":"hello"})],u.prototype,"text",void 0),u=__decorate([n],u),r["default"]=u,cc._RF.pop()},{}]},{},["ChildClass","CsvScene","CsvScene2","SuperClass"]);