(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/orderList/orderList"],{"115f":function(e,t,n){},2595:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r})},"88af":function(e,t,n){"use strict";(function(e){n("2b29"),n("921b");o(n("66fd"));var t=o(n("9d37"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},8904:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{headerPosition:"fixed",headerTop:"90upx",tabbarIndex:0,typeText:{unpaid:"等待付款",back:"等待商家发货",unreceived:"商家已发货",completed:"交易已完成",refunds:"商品退货处理中"},orderType:["待付款","待收货","待评价","已完成"],list:[{orderNum:"154444444",freight:12,payment:22,goods:[{goods_id:12,spec:"S码 白色",img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4179540173,406565321&fm=15&gp=0.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:10,disRate:.5,disRatePrice:5,numner:1},{goods_id:1,spec:"S码 白色",img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4179540173,406565321&fm=15&gp=0.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:10,disRate:.5,disRatePrice:5,numner:1}]},{orderNum:"15444444444",freight:12,payment:168,goods:[{goods_id:0,spec:"S码 白色",img:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4179540173,406565321&fm=15&gp=0.jpg",name:"商品名称商品名称商品名称商品名称商品名称",price:"168.00",disRate:.5,disRatePrice:10,numner:1}]}]}},onLoad:function(e){},onPageScroll:function(e){},methods:{onComment:function(t){e.navigateTo({url:"/pages/shopList/shopList?pages=publish&goodOrderNum="+t.orderNum})},showType:function(e){this.tabbarIndex=e},onDetail:function(t){e.navigateTo({url:"/pages/shopMall/orderDetail/orderDetail?status="+this.tabbarIndex+"&orderNum="+t.orderNum})}}};t.default=n}).call(this,n("543d")["default"])},"9d37":function(e,t,n){"use strict";n.r(t);var o=n("2595"),r=n("b473");for(var i in r)"default"!==i&&function(e){n.d(t,e,function(){return r[e]})}(i);n("dbcd");var a=n("2877"),u=Object(a["a"])(r["default"],o["a"],o["b"],!1,null,null,null);t["default"]=u.exports},b473:function(e,t,n){"use strict";n.r(t);var o=n("8904"),r=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);t["default"]=r.a},dbcd:function(e,t,n){"use strict";var o=n("115f"),r=n.n(o);r.a}},[["88af","common/runtime","common/vendor"]]]);