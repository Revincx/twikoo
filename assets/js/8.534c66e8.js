(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{375:function(t,e,n){"use strict";n.r(e);var i=n(373),s={name:"Layout",components:{ParentLayout:i.a},mounted:function(){this.initTwikoo(),this.initJs()},methods:{initTwikoo:function(){try{twikoo.init({envId:"https://twikoo.vercel.app",onCommentLoaded:this.initLightGallery})}catch(t){}},initLightGallery:function(){for(var t=document.getElementsByClassName("tk-content"),e=0;e<t.length;e++){var n=t[e],i=n.getElementsByTagName("img");if(i.length>0){for(var s=0;s<i.length;s++){var r=i[s],o=document.createElement("a");o.setAttribute("class","tk-lg-link"),o.setAttribute("href",r.getAttribute("src")),o.setAttribute("data-src",r.getAttribute("src")),o.appendChild(r.cloneNode(!1)),r.parentNode.insertBefore(o,r.nextSibling),r.remove()}lightGallery(n,{selector:".tk-lg-link",share:!1})}}},initJs:function(){var t=this.$refs.twikooJs;t&&(t.onload=this.initTwikoo,this.$router.afterEach(this.onRoute))},onRoute:function(t,e){t.path!==e.path&&this.initTwikoo()}}},r=n(45),o=Object(r.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ParentLayout",{scopedSlots:t._u([{key:"page-bottom",fn:function(){return[n("div",{staticClass:"page-edit"},[n("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.css",integrity:"sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",crossorigin:"anonymous"}}),t._v(" "),n("script",{attrs:{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/katex.min.js",integrity:"sha384-g7c+Jr9ZivxKLnZTDUhnkOnsh30B4H0rpLUpJ4jAIKs4fnJI+sEnkvrMWph2EDg4",crossorigin:"anonymous"}}),t._v(" "),n("script",{attrs:{defer:"",src:"https://cdn.jsdelivr.net/npm/katex@0.12.0/dist/contrib/auto-render.min.js",integrity:"sha384-mll67QQFJfxn0IYznZYonOWZ644AWYC+Pt2cHqMaRhXVrursRwvLnLaebdGIlYNa",crossorigin:"anonymous"}}),t._v(" "),n("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/css/lightgallery.css"}}),t._v(" "),n("script",{attrs:{src:"https://cdn.jsdelivr.net/npm/lightgallery@2.1.8/lightgallery.min.js"}}),t._v(" "),n("div",{attrs:{id:"twikoo"}}),t._v(" "),n("script",{ref:"twikooJs",attrs:{src:"https://cdn.jsdelivr.net/npm/twikoo@1.4.5/dist/twikoo.all.min.js"}})])]},proxy:!0}])})}),[],!1,null,null,null);e.default=o.exports}}]);