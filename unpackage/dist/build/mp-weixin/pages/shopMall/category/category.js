(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopMall/category/category"],{"347e":function(t,i,e){},"4dfd":function(t,i,e){"use strict";e.r(i);var n=e("7ed9"),a=e.n(n);for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);i["default"]=a.a},"7be3":function(t,i,e){"use strict";var n=e("347e"),a=e.n(n);a.a},"7ed9":function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e={data:function(){return{showCategoryIndex:0,headerPosition:"fixed",city:"北京",categoryList:[{id:1,title:"家用电器",banner:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1275117093,2668160548&fm=26&gp=0.jpg",list:[{id:2,title:"冰箱",img:"1.jpg"},{id:3,title:"电视",img:"2.jpg"},{id:4,title:"空调",img:"3.jpg"},{id:5,name:"洗衣机",img:"4.jpg"},{id:6,name:"风扇",img:"5.jpg"}]},{id:2,title:"办公用品",banner:"../../static/img/category/banner.jpg",list:[{title:"打印机",img:"1.jpg"},{title:"路由器",img:"2.jpg"},{title:"扫描仪",img:"3.jpg"},{name:"投影仪",img:"4.jpg"},{name:"墨盒",img:"5.jpg"},{name:"纸类",img:"6.jpg"}]},{id:3,title:"日常用品",banner:"../../static/img/category/banner.jpg",list:[{title:"茶具",img:"1.jpg"},{title:"花瓶",img:"2.jpg"},{title:"纸巾",img:"3.jpg"},{title:"毛巾",img:"4.jpg"},{name:"牙膏",img:"5.jpg"},{name:"保鲜膜",img:"6.jpg"},{name:"保鲜袋",img:"7.jpg"}]},{id:4,title:"蔬菜水果",banner:"../../static/img/category/banner.jpg",list:[{title:"苹果",img:"1.jpg"},{title:"芒果",img:"2.jpg"},{title:"椰子",img:"3.jpg"},{name:"橙子",img:"4.jpg"},{name:"奇异果",img:"5.jpg"},{name:"玉米",img:"6.jpg"},{name:"百香果",img:"7.jpg"}]}]}},onPageScroll:function(t){t.scrollTop>=0?this.headerPosition="fixed":this.headerPosition="absolute"},onShow:function(){var t=this;this.$util.get("/login/sgetNav?types=goods").then(function(i){t.categoryList=i.data})},onLoad:function(){},methods:{toMsg:function(){t.navigateTo({url:"../msg/msg"})},showCategory:function(t){this.showCategoryIndex=t},toCategory:function(i,e){console.log(),t.navigateTo({url:"/pages/shopMall/goodsList/goodsList?fid="+e.id+"&sid="+i.id})},toSearch:function(){t.showToast({title:"建议跳转到新页面做搜索功能"})}}};i.default=e}).call(this,e("543d")["default"])},"82bc":function(t,i,e){"use strict";e.r(i);var n=e("dafd"),a=e("4dfd");for(var o in a)"default"!==o&&function(t){e.d(i,t,function(){return a[t]})}(o);e("7be3");var g=e("2877"),s=Object(g["a"])(a["default"],n["a"],n["b"],!1,null,null,null);i["default"]=s.exports},dafd:function(t,i,e){"use strict";var n=function(){var t=this,i=t.$createElement;t._self._c},a=[];e.d(i,"a",function(){return n}),e.d(i,"b",function(){return a})},f347:function(t,i,e){"use strict";(function(t){e("2b29"),e("921b");n(e("66fd"));var i=n(e("82bc"));function n(t){return t&&t.__esModule?t:{default:t}}t(i.default)}).call(this,e("543d")["createPage"])}},[["f347","common/runtime","common/vendor"]]]);