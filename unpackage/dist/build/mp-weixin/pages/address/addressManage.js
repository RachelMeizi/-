(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/address/addressManage"],{"1bd5":function(t,a,e){"use strict";e.r(a);var s=e("dd02"),n=e.n(s);for(var d in s)"default"!==d&&function(t){e.d(a,t,function(){return s[t]})}(d);a["default"]=n.a},"29e0":function(t,a,e){"use strict";var s=e("d9bb"),n=e.n(s);n.a},d6ca:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement;t._self._c},n=[];e.d(a,"a",function(){return s}),e.d(a,"b",function(){return n})},d9bb:function(t,a,e){},dbe7:function(t,a,e){"use strict";e.r(a);var s=e("d6ca"),n=e("1bd5");for(var d in n)"default"!==d&&function(t){e.d(a,t,function(){return n[t]})}(d);e("29e0");var i=e("2877"),o=Object(i["a"])(n["default"],s["a"],s["b"],!1,null,null,null);a["default"]=o.exports},dd02:function(t,a,e){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={data:function(){return{addressData:{name:"",mobile:"",address:"在地图选择",detailAddress:"",isDefault:1},pages:""}},onLoad:function(a){var e="新增收货地址";console.log(a,"option"),"edit"===a.type&&(e="编辑收货地址",this.addressData=JSON.parse(a.data),console.log(this.addressData,"8")),this.manageType=a.type,t.setNavigationBarTitle({title:e})},methods:{switchChange:function(t){t.detail.value?this.addressData.isDefault=1:this.addressData.isDefault=2},chooseLocation:function(){var a=this;t.chooseLocation({success:function(t){console.log(t,"44444444"),a.addressData.address=t.address+t.name,a.addressData.lat=t.latitude,a.addressData.lng=t.longitude}})},confirm:function(){var a,e=this,s=this.addressData;s.name?/(^1[3|4|5|7|8][0-9]{9}$)/.test(s.mobile)?s.address?s.detailAddress?(console.log(s,this.manageType),a="add"==this.manageType?"/xf/AddressAdd":"/xf/AddressUpdate",this.$util.post(a,JSON.stringify(s)).then(function(a){200==a.data.status?setTimeout(function(){t.navigateBack()},800):e.$util.fail("地址".concat("edit"==e.manageType?"修改":"添加","成功"))})):this.$util.fail("请填写门牌号信息"):this.$util.fail("请在地图选择所在位置"):this.$util.fail("请输入正确的手机号码"):this.$util.fail("请填写收货人姓名")}}};a.default=e}).call(this,e("543d")["default"])},f73d:function(t,a,e){"use strict";(function(t){e("2b29"),e("921b");s(e("66fd"));var a=s(e("dbe7"));function s(t){return t&&t.__esModule?t:{default:t}}t(a.default)}).call(this,e("543d")["createPage"])}},[["f73d","common/runtime","common/vendor"]]]);