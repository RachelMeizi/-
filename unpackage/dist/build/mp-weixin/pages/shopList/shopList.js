(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shopList/shopList"],{"3e30":function(t,e,n){"use strict";n.r(e);var o=n("43a5"),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=i.a},"43a5":function(t,e,n){"use strict";(function(t){function o(t){return s(t)||a(t)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function a(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var c=function(){return Promise.all([n.e("common/vendor"),n.e("components/myIssue")]).then(n.bind(null,"84a9"))},r=function(){return Promise.all([n.e("common/vendor"),n.e("components/xiujun-evaluate/uni-evaluate")]).then(n.bind(null,"b1e6"))},u=function(){return n.e("components/uni-search-bar/uni-search-bar").then(n.bind(null,"273d"))},m={components:{myIssue:c,uniEvaluate:r,uniSearchBar:u},data:function(){return{pages:"",page:1,photoList:[],orderNum:"",totalRate:1.3,startNum:1,commentList:[],shopList:[{id:1,name:"家政服务公司",isCredit:1,finishOrderNum:30,distance:"30",commentDegree:"5",img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573639616510&di=b2b21228fcb7f765d7fa3f257cf380a4&imgtype=0&src=http%3A%2F%2Ftxt15-2.book118.com%2F2018%2F0502%2Fbook164310%2F164309617.jpg",serveType:[{id:1,name:"月嫂"},{id:1,name:"家政"}]},{id:3,name:"啦啦啦月嫂公司",isCredit:1,finishOrderNum:50,distance:10,commentDegree:3.3,img:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573639616510&di=b2b21228fcb7f765d7fa3f257cf380a4&imgtype=0&src=http%3A%2F%2Ftxt15-2.book118.com%2F2018%2F0502%2Fbook164310%2F164309617.jpg",serveType:[{id:1,name:"月嫂"},{id:1,name:"家政"}]}]}},onLoad:function(e){this.pages=e.pages,this.orderNum=e.orderNum,console.log(e),"comment"==this.pages&&(this.getCommentList(1),t.setNavigationBarTitle({title:"我的评论"})),this.shopList.forEach(function(t){t.check=!1})},onReachBottom:function(){var t=this.page;t++,this.page=t,"shopList"==this.pages?this.getDataList(t):"comment"==this.pages&&this.getCommentList(t)},methods:{getCommentList:function(e){var n=this;this.$util.get("/worker/evaluateList?page="+e).then(function(e){n.totalRate=e.data.totalRate,e.data.commentList.forEach(function(t){t.rate=t.startNum/5}),console.log(e.data.commentList,"111111"),n.commentList.length<=0&&e.data.commentList.length>0?n.commentList=e.data.commentList:n.commentList.length>0&&e.data.commentList.length>0?n.commentList=[].concat(o(n.commentList),o(e.data.commentList)):0==e.data.length&&t.showToast({title:"没有更多数据了",icon:"none"})})},scoreChange:function(t){console.log(t),this.startNum=t},onChooseShop:function(e){var n=this.shopList;n.forEach(function(t){t.check=!1}),e.check=!0,this.shopList=n,t.setStorageSync("shopInfo",e),console.log(e.id,this.shopList)},publish:function(){var e=this,n={orderNum:this.orderNum,rate:this.startNum,content:this.content,imgList:this.photoList||[]};console.log(n,"5555555"),this.$util.post("/xf/CommentOrder",JSON.stringify(n)).then(function(n){200==n.data.status?(e.$util.success(n.data.msg),t.navigateBack({delta:1})):e.$util.fail(n.data.msg)})},getContent:function(t){this.content=t.detail.value},delImg:function(t){this.photoList.splice(t,1)},photo:function(){var e=this;t.chooseImage({count:6,sizeType:["original","compressed"],sourceType:["camera","album"],success:function(t){var n;console.log(t.tempFilePaths),e.photoList=e.photoList.concat(t.tempFilePaths),console.log(e.photoList,"this.photoList");var o=t.tempFilePaths.map(function(t,n){return e.$util.upload("/up/upload",t)});Promise.all(o).then(function(t){e.array=t.map(function(t){var e=JSON.parse(JSON.stringify(t.data).replace(/name/g,"src"));return n=JSON.parse(e).src,n}),e.photoList=e.array,console.log(e.photoList,"411111111"),e.photoList.length>=6&&(e.photoList=e.photoList.slice(0,6))})}})}}};e.default=m}).call(this,n("543d")["default"])},5244:function(t,e,n){"use strict";var o=n("b175"),i=n.n(o);i.a},b175:function(t,e,n){},c64c:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})},c8d6:function(t,e,n){"use strict";n.r(e);var o=n("c64c"),i=n("3e30");for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);n("5244");var s=n("2877"),c=Object(s["a"])(i["default"],o["a"],o["b"],!1,null,null,null);e["default"]=c.exports},e9a0:function(t,e,n){"use strict";(function(t){n("2b29"),n("921b");o(n("66fd"));var e=o(n("c8d6"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("543d")["createPage"])}},[["e9a0","common/runtime","common/vendor"]]]);