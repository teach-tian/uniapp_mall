(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/order/order"],{"6fa0":function(e,t,a){"use strict";a.r(t);var r=a("c5de"),i=a("c6c3");for(var n in i)"default"!==n&&function(e){a.d(t,e,function(){return i[e]})}(n);a("7ec6");var s=a("2877"),d=Object(s["a"])(i["default"],r["a"],r["b"],!1,null,null,null);t["default"]=d.exports},"7ec6":function(e,t,a){"use strict";var r=a("978a"),i=a.n(r);i.a},"978a":function(e,t,a){},a22b:function(e,t,a){"use strict";(function(e){a("58cb"),a("921b");r(a("66fd"));var t=r(a("6fa0"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},c5de:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=(e._self._c,e._f("toFixed")(e.total.price)),r=e._f("toFixed")(e.endPrice),i=e._f("toFixed")(e.endPrice);e.$mp.data=Object.assign({},{$root:{f0:a,f1:r,f2:i}})},i=[];a.d(t,"a",function(){return r}),a.d(t,"b",function(){return i})},c6c3:function(e,t,a){"use strict";a.r(t);var r=a("d719"),i=a.n(r);for(var n in r)"default"!==n&&function(e){a.d(t,e,function(){return r[e]})}(n);t["default"]=i.a},d719:function(e,t,a){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r={data:function(){return{array:[{name:"请选择配送方式"}],index:0,shop:[],total:{},address:{},addressFalg:"",endPrice:"",message:"",show:!1,imgUrl:this.$imgUrl}},onLoad:function(){this.getData()},onShow:function(){this.getAddress()},filters:{toFixed:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return parseFloat(e).toFixed(t)}},methods:{listAddress:function(){this.$href("../address/list?back=1")},addAddress:function(){this.$href("../address/add?back=1")},getAddress:function(){var t=this;this.$request("/member/getOrderAddress",{id:e.getStorageSync("addressid")}).then(function(r){console.log(a(r," at pages\\order\\order.vue:123")),e.setStorageSync("addressid",r.data.id),t.address=r.data,t.addressFalg=r.code})},getData:function(){var t=this;this.$request("/member/getBuyShopInfo",{data:e.getStorageSync("orderShop")}).then(function(e){console.log(a(e," at pages\\order\\order.vue:133")),t.shop=e.data.shop,t.total=e.data.all,t.array=t.array.concat(e.data.logistics),t.endPrice=e.data.all.price,t.show=!0})},logistics:function(e){this.index=e.target.value,0!=this.index?this.endPrice=parseFloat(this.total.price)+parseFloat(this.array[this.index].price):this.endPrice=this.total.price},payBtn:function(){var t=this;0!=this.index?""!=e.getStorageSync("addressid")?(console.log(a(this.array[this.index].id," at pages\\order\\order.vue:165")),this.$request("/member/order",{orderShop:e.getStorageSync("orderShop"),addressid:e.getStorageSync("addressid"),price:this.endPrice,logistics:this.array[this.index].id,message:this.message}).then(function(e){1==e.code&&t.$href("pay?id="+e.data.id)})):e.showToast({title:"请先添加收货地址",icon:"none"}):e.showToast({title:"请选择配送方式",icon:"none"})}}};t.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])}},[["a22b","common/runtime","common/vendor"]]]);