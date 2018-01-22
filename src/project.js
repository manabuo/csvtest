require=function e(t,o,n){function c(i,l){if(!o[i]){if(!t[i]){var s="function"==typeof require&&require;if(!l&&s)return s(i,!0);if(r)return r(i,!0);var u=new Error("Cannot find module '"+i+"'");throw u.code="MODULE_NOT_FOUND",u}var a=o[i]={exports:{}};t[i][0].call(a.exports,function(e){var o=t[i][1][e];return c(o?o:e)},a,a.exports,e,t,o,n)}return o[i].exports}for(var r="function"==typeof require&&require,i=0;i<n.length;i++)c(n[i]);return c}({ChildClass:[function(e,t,o){"use strict";cc._RF.push(t,"58ad30XPqVHQoduXxkcQ/vu","ChildClass"),Object.defineProperty(o,"__esModule",{value:!0});var n=e("./SuperClass"),c=cc._decorator.ccclass,r=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.testAsync=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(e,t){setTimeout(function(){e("Hello, World! From ChildClass!")},1e3)})]})})},t.prototype.onLoad=function(){},t}(n["default"]);r=__decorate([c],r),o["default"]=r,cc._RF.pop()},{"./SuperClass":"SuperClass"}],CsvScene2:[function(e,t,o){"use strict";cc._RF.push(t,"ad6abll8ZRBuZDx+5w2iuWh","CsvScene2"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,r=n.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.text="hello",t}return __extends(t,e),t.prototype.onLoad=function(){},t}(cc.Component);__decorate([r(cc.Label)],i.prototype,"label",void 0),__decorate([r({"default":"hello"})],i.prototype,"text",void 0),i=__decorate([c],i),o["default"]=i,cc._RF.pop()},{}],CsvScene3:[function(e,t,o){"use strict";cc._RF.push(t,"213a5NXPtxOSqEME5drthX0","CsvScene3"),cc.Class({"extends":cc.Component,properties:{},onLoad:function(){console.log(ccxt.exchanges)}}),cc._RF.pop()},{}],CsvScene:[function(e,t,o){"use strict";cc._RF.push(t,"b90c88yxQRN+7K5VipN+oJO","CsvScene"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,r=(n.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){console.log(ccxt.exchanges)},t}(cc.Component));r=__decorate([c],r),o.CsvScene=r,cc._RF.pop()},{}],ItemControl:[function(e,t,o){"use strict";cc._RF.push(t,"76b2dDF3stBVb5jnhjeNhVB","ItemControl"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,r=n.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t._index=null,t}return __extends(t,e),t.prototype.onClick=function(){console.log(this.node.name),console.log(this.node),console.log("ItemControl.onClick"),this.node.getComponent("SpriteNew").setVisible(!1)},t}(cc.Component);__decorate([r({"default":null})],i.prototype,"_index",void 0),i=__decorate([c],i),o["default"]=i,cc._RF.pop()},{}],ListViewControl:[function(e,t,o){"use strict";cc._RF.push(t,"fcdc5ybCl9MPJUDD1vMylGe","ListViewControl"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,r=n.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ItemTemplate=null,t.ScrollView=null,t.LabelSelectedStage=null,t}return __extends(t,e),t.prototype.onLoad=function(){for(var e=0;e<6;e++){var t=cc.instantiate(this.ItemTemplate);t.getChildByName("LabelStage").getComponent(cc.Label).string="ステージ："+("0"+(e+1)).slice(-2);for(var o="難易度：★",n=Math.floor(e/2),c=0;c<n;c++)o+="★";t.getChildByName("LabelLevel").getComponent(cc.Label).string=o,t.getComponent("ItemControl")._index=e,this.ScrollView.content.addChild(t)}},t.prototype.clickItem=function(e){console.log("clickItem(item)"),e.getChildByName("SpriteNew").getComponent(cc.Sprite).setVisible(!1),this.LabelSelectedStage.string="ステージ："+("0"+(e.getComponent("ItemControl")._index+1)).slice(-2)},t.prototype.clickButtonTop=function(){this.ScrollView.scrollToTop()},t}(cc.Component);__decorate([r(cc.Prefab)],i.prototype,"ItemTemplate",void 0),__decorate([r(cc.ScrollView)],i.prototype,"ScrollView",void 0),__decorate([r(cc.Label)],i.prototype,"LabelSelectedStage",void 0),i=__decorate([c],i),o.ListViewControl=i,cc._RF.pop()},{}],SuperClass:[function(e,t,o){"use strict";cc._RF.push(t,"7cd6am2IKhCU7zkCn2hKJMV","SuperClass"),Object.defineProperty(o,"__esModule",{value:!0});var n=cc._decorator,c=n.ccclass,r=n.property,i=(n.executionOrder,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.text="hello",t}return __extends(t,e),t.prototype.onLoad=function(){return __awaiter(this,void 0,void 0,function(){var e;return __generator(this,function(t){switch(t.label){case 0:return e=this.label,[4,this.testAsync()];case 1:return e.string=t.sent(),[2]}})})},t.prototype.testAsync=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,new Promise(function(e,t){setTimeout(function(){e("Hello, World!")},1e3)})]})})},t}(cc.Component));__decorate([r(cc.Label)],i.prototype,"label",void 0),__decorate([r({"default":"hello"})],i.prototype,"text",void 0),i=__decorate([c],i),o["default"]=i,cc._RF.pop()},{}]},{},["ChildClass","CsvScene","CsvScene2","CsvScene3","ItemControl","ListViewControl","SuperClass"]);