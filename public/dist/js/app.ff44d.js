webpackJsonp([1,2],[,,,,,,,,,,,,,,function(t,e,a){"use strict";function n(t,e,a){if(t)this.date=[t.substr(0,4),"-",t.substr(4,2),"-",t.substr(-2)].join("");else{var n=new Date;this.date=[n.getFullYear(),"-",this._cover(n.getMonth()+1),"-",this._cover(n.getDate())].join("")}this.bef=e||0,this.aft=a||0,this.weekDayArr=["Sun","Mon","Tues","Wen","Thur","Fri","Sat"],this.weekDayCNArr=["日","一","二","三","四","五","六"],this.monthArr=["00","01","02","03","04","05","06","07","08","09","10","11","12"],this.monthENArr=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}n.prototype={constructor:n,now:function(t){t&&(this.date=[t.substr(0,4),"-",t.substr(4,2),"-",t.substr(-2)].join(""));var e=this.date?new Date(this.date):new Date;return[e.getFullYear(),this._cover(e.getMonth()+1),this._cover(e.getDate())].join("")},today:function(){var t=new Date;return[t.getFullYear(),this._cover(t.getMonth()+1),this._cover(t.getDate())].join("")},before:function(t){return this._calc(t||1,"before")},beforeCN:function(t){return this.CHN(this._calc(t||1,"before"))},after:function(t){return this._calc(t||1,"after")},afterCN:function(t){return this.CHN(this._calc(t||1,"after"))},month:function(){var t=this.date?new Date(this.date):new Date;return[t.getFullYear(),this._cover(t.getMonth()+1)].join("")},monthEN:function(t){return t=t?t:this.now(),this.monthENArr[parseInt(t.substr(4,2))]},beforeMonth:function(){var t=parseInt(this.month().substr(0,4),10),e=this.month().substr(4,2),a=this.monthArr.indexOf(e);return 1==a?(e="12",t--):e=this.monthArr[a-1],t+""+e},afterMonth:function(){var t=parseInt(this.month().substr(0,4),10),e=this.month().substr(4,2),a=this.monthArr.indexOf(e);return 12==a?(e="01",t++):e=this.monthArr[a+1],t+""+e},CHN:function(t){t=t?t:this.now();var e=t.substr(0,4)+"年",a=t.substr(4,2)+"月",n=t.substr(6,2)+"日";return e+a+n},weekDay:function(t){t=t?t:this.now();var e=new Date([t.substr(0,4),"-",t.substr(4,2),"-",t.substr(-2)].join("")).getDay();return{day:e,en:this.weekDayArr[e],cn:this.weekDayCNArr[e]}},_calc:function(t,e){var a=new Date(this.date),n=0;"before"===e?(n=0-this.bef,t=0-t):n=this.aft;var r=t||n||0,s=new Date(a.getTime()+864e5*r);return[s.getFullYear(),this._cover(s.getMonth()+1),this._cover(s.getDate())].join("")},_cover:function(t){var e=parseInt(t,10);return e<10?"0"+e:e}},t.exports=n},,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){a(119);var n=a(2)(a(70),a(135),null,null);t.exports=n.exports},function(t,e,a){"use strict";function n(t){var e=new Date(1e3*t);return r(e.getMonth()+1)+"-"+r(e.getDate())+" "+r(e.getHours())+":"+r(e.getMinutes())}Object.defineProperty(e,"__esModule",{value:!0}),e.date=n;var r=function(t){var e=parseInt(t,10);return e<10?"0"+e:e}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(3),s=n(r),i=a(137),o=n(i),u=a(128),c=n(u),l=a(127),d=n(l),f=a(126),h=n(f);s.default.use(o.default),e.default=new o.default({routes:[{name:"home",path:"/",component:c.default},{name:"detail",path:"/detail",component:d.default,meta:{scrollToTop:!0}},{name:"top-detail",path:"/top-detail",component:d.default,meta:{scrollToTop:!0}},{name:"oneday",path:"/date",component:h.default,meta:{scrollToTop:!0}},{path:"*",redirect:"/"}]})},function(t,e,a){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var s=a(3),i=r(s),o=a(139),u=r(o),c=a(76),l=n(c),d=a(14),f=r(d),h=a(75),m=r(h),v=new m.default(100);i.default.use(u.default);var p=new u.default.Store({state:{loadingDay:!1,date:(new f.default).now(),latest:[],day:[],oneday:{},article:{},comments:[]},actions:{FETCH_LATEST:function(t){var e=t.commit;t.state;return l.fetchLatest().then(function(t){var a=t.data;e("SET_LIST",a)})},FETCH_HISTORY:function(t,e){var a=t.commit,n=t.state;if(!n.loadingDay)return n.loadingDay=!0,l.fetchHistory(e).then(function(t){var e=t.data;n.loadingDay=!1,a("SET_HISTORY",e)}).catch(function(t){n.loadingDay=!1})},FETCH_ONEDAY:function(t,e){var a=t.commit;t.state;return l.fetchHistory(e).then(function(t){var e=t.data;a("SET_ONEDAY",e)})},FETCH_ARTICLE:function(t,e){var a=t.commit,n=(t.state,v.get(e));return n?a("SET_ARTICLE",n):l.fetchArticle(e).then(function(t){var n=t.data;v.put(e,n),a("SET_ARTICLE",n)})},FETCH_COMMENTS:function(t,e){var a=t.commit;t.state;return l.fetchComments(e).then(function(t){var e=t.data;a("SET_COMMENTS",e)})},FETCH_APICOMMENTS:function(t,e){var a=t.commit;t.state;return l.fetchAPIComments(e).then(function(t){var e=t.data;a("SET_APICOMMENTS",e)})}},mutations:{SET_LIST:function(t,e){t.latest=e},SET_HISTORY:function(t,e){if(e.length){var a={month:(new f.default).monthEN(e[0].dtime)+e[0].dtime.substr(6,2),date:(new f.default).CHN(e[0].dtime),data:e};t.day.push(a)}},SET_ONEDAY:function(t,e){if(e.length)t.oneday.data=[],t.oneday={month:(new f.default).monthEN(e[0].dtime)+e[0].dtime.substr(6,2),date:(new f.default).CHN(e[0].dtime),data:e};else{var a=t.route.query.dtime;if(a){var n=new f.default(t.route.query.dtime);t.oneday.data=[],t.oneday.month=n.monthEN()+a.substr(6,2),t.oneday.date=n.CHN()}}},SET_ARTICLE:function(t,e){t.article=e},SET_COMMENTS:function(t,e){t.comments=e},SET_APICOMMENTS:function(t,e){t.comments=e}}});e.default=p},,,function(t,e,a){a(114);var n=a(2)(a(67),a(130),null,null);t.exports=n.exports},,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"zhihu"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"article-item",props:["article"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"article-comments",props:["comments"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"history-item",props:["day","view"],computed:{dtime:function(){return this.$route.query.dtime}},mounted:function(){"oneday"==this.$route.name&&scrollTo(0,0)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"latest-item",props:["data"]}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(3),s=(n(r),a(42)),i=n(s),o=a(14),u=n(o),c=a(23),l=n(c),d=function(t){return t.dispatch("FETCH_ONEDAY",t.state.route.query.dtime)};e.default={name:"oneday",components:{History:i.default},preFetch:d,computed:{date:function(){d(this.$store);var t=new u.default(this.dtime);return{before:t.before(),beforeCN:t.beforeCN(),after:t.after(),afterCN:t.afterCN()}},oneDay:function(){return this.$store.state.oneday},dtime:function(){return this.$store.state.route.query.dtime}},methods:{fetch:function(){var t=this.dtime;l.default.post("/clear-error/"+t)}}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(80),s=n(r),i=a(78),o=n(i),u=a(3),c=(n(u),a(123)),l=n(c),d=a(124),f=n(d),h={fetchArticle:function(t){return t.dispatch("FETCH_ARTICLE",t.state.route.query.aid)},fetchComments:function(t){return t.dispatch("FETCH_COMMENTS",t.state.route.query.aid)},fetchAPIComments:function(t){return t.dispatch("FETCH_APICOMMENTS",t.state.route.query.aid)}};e.default={name:"detail",data:function(){return{showLoading:!1}},components:{Articles:l.default,Comments:f.default},computed:{showDayLik:function(){return"top-detail"!=this.$store.state.route.name},article:function(){return this.$store.state.article},comments:function(){var t=[];this.$store.state.comments.sort(function(t,e){return t.type<e.type});var e=!0,a=!1,n=void 0;try{for(var r,i=(0,o.default)(this.$store.state.comments);!(e=(r=i.next()).done);e=!0){var u=r.value;t.push.apply(t,(0,s.default)(u.comments))}}catch(t){a=!0,n=t}finally{try{!e&&i.return&&i.return()}finally{if(a)throw n}}return this.showLoading=!1,document.body.scrollTop=document.body.scrollTop+100,t}},beforeMount:function(){h.fetchArticle(this.$store)},mounted:function(){scrollTo(0,0)},beforeRouteLeave:function(t,e,a){this.$store.state.comments.length=0,a()},methods:{getComments:function(){if(0==this.comments.length){var t=this;this.showLoading=!0,"top-detail"==this.$store.state.route.name?h.fetchAPIComments(t.$store):setTimeout(function(){h.fetchComments(t.$store)},1e3)}}}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=a(3),s=(n(r),a(125)),i=n(s),o=a(42),u=n(o),c=a(14),l=n(c),d={fetchLatest:function(t){return t.dispatch("FETCH_LATEST")},fetchHistory:function(t,e){return t.dispatch("FETCH_HISTORY",e)}},f=function(t,e,a){var n,r,s,i=null,o=0;a||(a={});var u=function(){o=a.leading===!1?0:(new Date).getTime(),i=null,s=t.apply(n,r),i||(n=r=null)};return function(){var c=(new Date).getTime();o||a.leading!==!1||(o=c);var l=e-(c-o);return n=this,r=arguments,l<=0||l>e?(i&&(clearTimeout(i),i=null),o=c,s=t.apply(n,r),i||(n=r=null)):i||a.trailing===!1||(i=setTimeout(u,l)),s}};e.default={name:"home",data:function(){return{}},components:{Latest:i.default,History:u.default},preFetch:d.fetchLatest,computed:{now:function(){var t=(new l.default).now();return t.substr(0,4)+"-"+t.substr(4,2)+"-"+t.substr(6,2)},latest:function(){for(var t={top:[],latest:[],month:""},e=[],a=this.$store.state.latest,n=0,r=a.length;n<r;n++)a[n].title?a[n].top?t.top.push(a[n]):t.latest.push(a[n]):e.push(a[n]);for(var s=0,i=e.length;s<i;s++)for(var o=0,u=t.latest.length;o<u;o++)e[s].id==t.latest[o].id&&(t.latest[o].comments=e[s].comments,t.latest[o].popularity=e[s].popularity);if(t.latest.length){var c=t.latest[0].dtime;t.month=(new l.default).monthEN(c)+c.substr(6,2)}return t},histories:function(){return this.$store.state.day}},created:function(){var t=this;this.scrollEvent=f(function(e){window.innerHeight+document.body.scrollTop+150>=document.body.offsetHeight&&t.previousDay()},200)},beforeMount:function(){0==this.histories.length&&this.previousDay(),0==this.$store.state.latest.length&&d.fetchLatest(this.$store)},mounted:function(){scrollTo(0,sessionStorage.getItem("scrollTop")),window.addEventListener("scroll",this.scrollEvent)},beforeRouteLeave:function(t,e,a){"detail"!=t.name&&"top-detail"!=t.name||(this.$store.state.article={}),window.removeEventListener("scroll",this.scrollEvent),sessionStorage.setItem("scrollTop",document.body.scrollTop),a()},methods:{changeDate:function(t){var e=t.target.value.replace(/-/g,"");e&&this.$router.push("date?dtime="+e)},previousDay:function(){this.$store.state.loadingDay||(this.$store.state.date=new l.default(this.$store.state.date).before(),d.fetchHistory(this.$store,this.$store.state.date))}}}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}function r(t){this.size=0,this.limit=t,this.head=this.tail=void 0,this._keymap=(0,i.default)(null)}Object.defineProperty(e,"__esModule",{value:!0});var s=a(79),i=n(s);e.default=r;var o=r.prototype;o.put=function(t,e){var a,n=this.get(t,!0);return n||(this.size===this.limit&&(a=this.shift()),n={key:t},this._keymap[t]=n,this.tail?(this.tail.newer=n,n.older=this.tail):this.head=n,this.tail=n,this.size++),n.value=e,a},o.shift=function(){var t=this.head;return t&&(this.head=this.head.newer,this.head.older=void 0,t.newer=t.older=void 0,this._keymap[t.key]=void 0,this.size--),t},o.get=function(t,e){var a=this._keymap[t];if(void 0!==a)return a===this.tail?e?a:a.value:(a.newer&&(a===this.head&&(this.head=a.newer),a.newer.older=a.older),a.older&&(a.older.newer=a.newer),a.newer=void 0,a.older=this.tail,this.tail&&(this.tail.newer=a),this.tail=a,e?a:a.value)}},function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.fetchAPIComments=e.fetchComments=e.fetchArticle=e.fetchHistory=e.fetchLatest=void 0;var r=a(3),s=(n(r),a(23)),i=n(s);e.fetchLatest=function(t){return i.default.get("/latest")},e.fetchHistory=function(t){return i.default.get("/day/"+t)},e.fetchArticle=function(t){return i.default.get("/article/"+t)},e.fetchComments=function(t){return i.default.get("/article/"+t+"/comments")},e.fetchAPIComments=function(t){return i.default.get("/article/"+t+"/comments/api")}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,function(t,e,a){a(113);var n=a(2)(a(68),a(129),null,null);t.exports=n.exports},function(t,e,a){a(118);var n=a(2)(a(69),a(134),null,null);t.exports=n.exports},function(t,e,a){a(116);var n=a(2)(a(71),a(132),"data-v-57a81e41",null);t.exports=n.exports},function(t,e,a){a(117);var n=a(2)(a(72),a(133),"data-v-6104195c",null);t.exports=n.exports},function(t,e,a){a(120);var n=a(2)(a(73),a(136),"data-v-ce708f7e",null);t.exports=n.exports},function(t,e,a){a(115);var n=a(2)(a(74),a(131),null,null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article"},[a("div",{staticClass:"img-wrap",style:{"background-image":"url(http://ccforward.sinaapp.com/api/proxy.php?url=+"+t.article.image+")"}},[a("h1",[t._v(t._s(t.article.title))]),t._v(" "),a("span",[t._v(t._s(t.article.imageSource))]),t._v(" "),a("div",{staticClass:"img-mask"})]),t._v(" "),a("article",{domProps:{innerHTML:t._s(t.article.body)}})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"global-header"},[t._m(0),t._v(" "),a("div",{staticClass:"wrap"},[a("router-link",{attrs:{to:{path:"/"}}},[a("img",{attrs:{src:"data:image/png;base64,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",alt:"logo"}})]),t._v(" "),a("p",{staticClass:"power"},[t._v("Powered By Node.js & Vue.js")])],1)]),t._v(" "),a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view",{staticClass:"view"})],1)],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{attrs:{target:"_blank",href:"https://github.com/ccforward/zhihu",id:"forkme_banner"}},[a("span",[t._v("View on GitHub")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"date-pick"},[a("input",{attrs:{type:"date",min:"2013-05-19"},domProps:{value:t.now},on:{change:t.changeDate}}),t._v(" "),a("p",{staticClass:"date-desc"},[t._v("搜索知乎日报的某一天")])]),t._v(" "),t._m(0),t._v(" "),a("Latest",{attrs:{data:t.latest}}),t._v(" "),t._l(t.histories,function(t){return[a("History",{attrs:{day:t}})]}),t._v(" "),t._m(1)],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"statis-link"},[a("a",{attrs:{href:"/statistics"}},[t._v("去看看知乎日报的数据统计")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i",{staticClass:"loading"},[a("span",[t._v("Previous Day")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"history"},[t.data.month?a("div",{staticClass:"date"},[a("span",[a("i",{staticClass:"m"},[t._v(t._s(t.data.month.substr(0,3)))]),a("i",{staticClass:"d"},[t._v(t._s(t.data.month.substr(3,2)))])])]):t._e(),t._v(" "),a("ul",t._l(t.data.latest,function(e){return a("li",[a("router-link",{attrs:{to:{path:"top-detail",query:{aid:e.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("div",{directives:[{name:"lazy",rawName:"v-lazy:background-image",value:"http://ccforward.sinaapp.com/api/proxy.php?url="+e.image,expression:"'http://ccforward.sinaapp.com/api/proxy.php?url='+item.image",arg:"background-image"}],staticClass:"img"}),t._v(" "),a("p",{staticClass:"sns"},[a("i",{class:e.popularity>500&&"hot"},[t._v(t._s(e.popularity||0)+" likes")]),t._v(" | \n            "),a("i",[t._v(t._s(e.comments||0)+" comments")])])])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"date-container"},[a("div",{staticClass:"date-link"},[a("router-link",{staticClass:"date-before",attrs:{to:{path:"/date",query:{dtime:t.date.before}},replace:""}},[t._v("前一天 - "+t._s(t.date.beforeCN))]),t._v(" "),a("router-link",{staticClass:"date-after",attrs:{to:{path:"/date",query:{dtime:t.date.after}},replace:""}},[t._v(t._s(t.date.afterCN)+" - 后一天")])],1),t._v(" "),a("History",{attrs:{day:t.oneDay,view:!0}}),t._v(" "),t.oneDay.data?t._e():a("a",{staticClass:"fetch-day",on:{click:function(e){e.preventDefault(),t.fetch(e)}}},[t._v("刷新数据")]),t._v(" "),a("router-link",{staticStyle:{display:"block",margin:"10px 0"},attrs:{to:{path:"/"}}},[t._v("返回首页")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"article-comments",attrs:{id:"comment"}},t._l(t.comments,function(e){return a("section",{staticClass:"item"},[a("div",{staticClass:"avatar"},[a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://ccforward.sinaapp.com/api/proxy.php?url="+e.avatar,expression:"'http://ccforward.sinaapp.com/api/proxy.php?url='+item.avatar"}]})]),t._v(" "),a("div",{staticClass:"content"},[a("p",{staticClass:"author"},[t._v(t._s(e.author)+" "),a("span",{class:e.likes>10&&"hot"},[a("i",{staticClass:"icon like"}),t._v(t._s(e.likes))])]),t._v(" "),a("p",{staticClass:"cmt"},[t._v("\n        "+t._s(e.content)+"\n      ")]),t._v(" "),e.reply_to?a("div",{staticClass:"reply"},[a("span",[t._v("//"+t._s(e.reply_to.author)+" : ")]),t._v(t._s(e.reply_to.content)+"\n      ")]):t._e(),t._v(" "),a("span",{staticClass:"date"},[t._v(t._s(t._f("date")(e.time)))])])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"history"},[t.day.month?a("div",{staticClass:"date"},[a("span",[a("i",{staticClass:"m"},[t._v(t._s(t.day.month.substr(0,3)))]),a("i",{staticClass:"d"},[t._v(t._s(t.day.month.substr(3,2)))])]),t._v(" "),t.view?a("router-link",{staticClass:"day-link",attrs:{to:{path:"/date",query:{dtime:t.dtime}}}},[a("small",[t._v(t._s(t.day.date))])]):a("router-link",{staticClass:"day-link",attrs:{to:{path:"/date",query:{dtime:t.day.data[0].dtime}}}},[a("small",[t._v(t._s(t.day.date))])])],1):t._e(),t._v(" "),a("ul",t._l(t.day.data,function(e){return a("li",[a("router-link",{attrs:{to:{path:"detail",query:{aid:e.id}}}},[a("span",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),t.view?a("img",{attrs:{src:"http://ccforward.sinaapp.com/api/proxy.php?url="+e.image}}):a("img",{directives:[{name:"lazy",rawName:"v-lazy",value:"http://ccforward.sinaapp.com/api/proxy.php?url="+e.image,expression:"'http://ccforward.sinaapp.com/api/proxy.php?url='+item.image"}]}),t._v(" "),a("p",{staticClass:"sns"},[a("i",{class:e.popularity>500&&"hot"},[t._v(t._s(e.popularity)+" likes")]),t._v(" |\n            "),a("i",[t._v(t._s(e.comments)+" comments")])])])],1)}))])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"detail"},[t.showDayLik?a("router-link",{staticClass:"day-link",attrs:{to:{path:"/date?dtime="+t.article.dtime}}},[t._v("看看这一天的所有文章")]):t._e(),t._v(" "),a("Articles",{attrs:{article:t.article}}),t._v(" "),t.showDayLik?a("router-link",{staticClass:"day-link day-link-bottom",attrs:{to:{path:"/date?dtime="+t.article.dtime}}},[t._v("看看这一天的所有文章")]):t._e(),t._v(" "),a("button",{on:{click:t.getComments}},[a("i",{staticClass:"icon comments"}),t._v(" "),0==t.comments.length?a("span",[t._v("点击查看最新点评")]):a("span",[t._v("最新点评")])]),t._v(" "),a("i",{directives:[{name:"show",rawName:"v-show",value:t.showLoading,expression:"showLoading"}],staticClass:"loading"}),t._v(" "),a("Comments",{attrs:{comments:t.comments}}),t._v(" "),a("router-link",{attrs:{to:{path:"/"}}},[t._v("返回首页")])],1)},staticRenderFns:[]}},,,,,function(t,e,a){"use strict";function n(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}function r(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0}),e.store=e.router=e.app=void 0;var s=a(46),i=r(s),o=a(3),u=r(o),c=a(49),l=a(47),d=r(l),f=a(48),h=r(f),m=a(45),v=r(m),p=a(44),_=r(p),y=a(43),g=n(y);u.default.use(d.default),(0,c.sync)(v.default,_.default),(0,i.default)(g).forEach(function(t){u.default.filter(t,g[t])}),u.default.config.debug=!0;var b=new u.default({el:"#app",name:"zhihu",router:_.default,store:v.default,render:function(t){return t(h.default)}});e.app=b,e.router=_.default,e.store=v.default}],[141]);