(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/loginBase/writeUserInfo/writeUserInfo"],{"0384":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i})},7410:function(e,t,n){},"79c3":function(e,t,n){"use strict";n.r(t);var o=n("e994"),i=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=i.a},"857e":function(e,t,n){"use strict";n.r(t);var o=n("0384"),i=n("79c3");for(var a in i)"default"!==a&&function(e){n.d(t,e,function(){return i[e]})}(a);n("a709");var r=n("2877"),s=Object(r["a"])(i["default"],o["a"],o["b"],!1,null,null,null);t["default"]=s.exports},a709:function(e,t,n){"use strict";var o=n("7410"),i=n.n(o);i.a},ba31:function(e,t,n){"use strict";(function(e){n("2b29"),n("921b");o(n("66fd"));var t=o(n("857e"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},e994:function(e,t,n){"use strict";(function(e){function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){i(e,t,n[t])})}return e}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(n.bind(null,"c14f"))},r={components:{wPicker:a},data:function(){return{showPop:!1,birthday:"2018-09-12",pages:2,gender:1,serveType:"请选择",headurl:"/static/logo.png",address:"定位当前位置",pickerRegion:"请选择位置"}},onLoad:function(e){this.pages=e.pages,console.log(this.pages,this.$store.state.isShop,"000")},onShow:function(){this.serveType="请选择";var t=e.getStorageSync("selectlist");if(t){this.selectlist=t;var n=t.map(function(e){return e.name});this.serveType=n.join(",")}console.log(t,"0000000000000")},methods:{onShowPop:function(){e.navigateTo({url:"/pages/shopServe/shopServe?pages=shop"})},onGetLocation:function(){var t=this;console.log(444),e.chooseLocation({success:function(e){t.address=e.name,t.lat=e.latitude,t.lng=e.longitude,console.log("位置名称："+e.name),console.log("详细地址："+e.address),console.log("纬度："+e.latitude),console.log("经度："+e.longitude)}})},showMulLinkageThreePicker:function(){this.$refs.regionPicker.show()},onConfirmRegion:function(e){console.log(e,"字符串转数组"),this.pickerRegion=e.result},onChange:function(e){console.log(e);var t=e.map(function(e){return e.text});this.labelId=e.map(function(e){return e.id}),this.priceDefault=t.join(","),console.log(this.priceDefault)},radioChange:function(e){console.log(e.detail.value),this.gender=e.detail.value},showPicker:function(){var e=this;setTimeout(function(){e.isShow=!0},100)},closePicker:function(){this.isShow=!1},formSumbit:function(t){var n=this;this.formValue=t.detail.value;var i=o({},t.detail.value,{gender:parseInt(this.gender),headurl:this.headurl,birthday:this.birthday,region:this.pickerRegion,address:this.address,lat:this.lat,lng:this.lng,shopServeType:this.selectlist,shopImg:this.headurl});console.log(i,"555555");var a="";a=2==this.pages?"/xf/MerchantEnter":"/worker/upUser",this.$util.post(a,JSON.stringify(i)).then(function(t){200==t.data.status?e.navigateBack({delta:1}):n.$util.fail(t.data.msg)})},DateChange:function(e){this.birthday=e.detail.value},changeFirstDate:function(e){this.firstDate=e.detail.value},ChooseImage:function(){var t=this;e.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album"],success:function(e){t.$util.upload("/up/upload",e.tempFilePaths[0]).then(function(e){console.log(JSON.parse(e.data),"444"),t.headurl=JSON.parse(e.data).name})}})}}};t.default=r}).call(this,n("543d")["default"])}},[["ba31","common/runtime","common/vendor"]]]);