(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-439bcfec"],{"0242":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("dialog 弹窗")]),a("hr"),a("h2",[s._v("概述")]),a("p",[s._v("基于 element 二次封装的弹窗")]),a("h2",[s._v("基础布局")]),a("div",{staticClass:"demo-block"},[a("rz-button",{attrs:{type:"primary"},on:{click:function(t){s.isShowDialog=!0},sureClick:s.sureClick}},[s._v("点击")]),a("el2-dialog",{attrs:{show:s.isShowDialog,title:"弹窗"},on:{"update:show":function(t){s.isShowDialog=t}}})],1),a("demo-block",[a("div",{attrs:{slot:"desc"},slot:"desc"},[a("html",[a("head"),a("body",[a("rz-button",{attrs:{type:"primary"},on:{click:function(t){s.isShowDialog=!0},sureclick:s.sureClick}},[s._v("点击")]),a("el2-dialog",{attrs:{show:s.isShowDialog,title:"弹窗"},on:{"update:show":function(t){s.isShowDialog=t}}})],1)])]),a("div",{attrs:{slot:"highlight"},slot:"highlight"},[a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-html"}},[a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("rz-button")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("type")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"primary"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@click")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"isShowDialog = true"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("@sureClick")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"sureClick"')]),s._v("\n  >")]),s._v("点击"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("rz-button")]),s._v("\n>")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el2-dialog")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v(":show.sync")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"isShowDialog"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("title")]),s._v("="),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"弹窗"')]),s._v(">")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("el2-dialog")]),s._v(">")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("<"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),a("span",{pre:!0,attrs:{class:"javascript"}},[s._v("\n  "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("default")]),s._v(" {\n    data() {\n      "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("return")]),s._v(" {\n        "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("isShowDialog")]),s._v(": "),a("span",{pre:!0,attrs:{class:"hljs-literal"}},[s._v("false")]),s._v(", "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 是否显示弹窗")]),s._v("\n      };\n    },\n    "),a("span",{pre:!0,attrs:{class:"hljs-attr"}},[s._v("methods")]),s._v(": {\n      sureClick() {\n        "),a("span",{pre:!0,attrs:{class:"hljs-built_in"}},[s._v("console")]),s._v(".log("),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"点击确定按钮"')]),s._v(");\n      },\n    },\n  };\n")]),a("span",{pre:!0,attrs:{class:"hljs-tag"}},[s._v("</"),a("span",{pre:!0,attrs:{class:"hljs-name"}},[s._v("script")]),s._v(">")]),s._v("\n")])])])]),a("h3",[s._v("属性")]),s._m(0),a("h3",[s._v("插槽")]),s._m(1),a("h3",[s._v("事件")]),s._m(2)],1)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("参数")]),a("th",[s._v("说明")]),a("th",[s._v("类型")]),a("th",[s._v("可选值")]),a("th",[s._v("默认值")])])]),a("tbody",[a("tr",[a("td",[s._v("visible")]),a("td",[s._v("是否显示 Dialog")]),a("td",[s._v("boolean")]),a("td",[s._v("—")]),a("td",[s._v("false")])]),a("tr",[a("td",[s._v("title")]),a("td",[s._v("Dialog 的标题")]),a("td",[s._v("string")]),a("td"),a("td")]),a("tr",[a("td",[s._v("width")]),a("td",[s._v("Dialog 的宽度")]),a("td",[s._v("string")]),a("td"),a("td")])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("name")]),a("th",[s._v("说明")])])]),a("tbody",[a("tr",[a("td",[s._v("—")]),a("td",[s._v("Dialog 的内容")])])])])},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("table",{staticClass:"table"},[a("thead",[a("tr",[a("th",[s._v("事件名称")]),a("th",[s._v("说明")]),a("th",[s._v("回调参数")])])]),a("tbody",[a("tr",[a("td",[s._v("sureClick")]),a("td",[s._v("Dialog 点击确定按钮的事件")]),a("td",[s._v("—")])])])])}],n={data:function(){return{isShowDialog:!1}},methods:{sureClick:function(){console.log("点击确定按钮")}}},l=n,v=a("2877"),_=Object(v["a"])(l,r,e,!1,null,null,null);t["default"]=_.exports},"5aa3":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("快速上手")]),a("p",[s._v("本节将介绍如何在项目中使用 roninwz-ui。")]),a("hr"),a("h2",[s._v("简介")]),a("p",[a("code",{pre:!0},[s._v("roninwz-ui")]),s._v(" 是一款基于 "),a("code",{pre:!0},[s._v("Vue.js 2.0")]),s._v(" 的前端 UI 组件库，本人学习实践记录。")]),a("h2",[s._v("安装")]),a("p",[s._v("推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install roninwz-ui --save\n")])]),a("h2",[s._v("全局导入")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 导入ui组件库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" RoninwzUI "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"roninwz-ui"')]),s._v(";\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"roninwz-ui/lib/theme/index.css"')]),s._v("; "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 导入RoninwzUI样式")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 注册组件库")]),s._v("\nVue.use(RoninwzUI);\n")])])])}],n=a("2877"),l={},v=Object(n["a"])(l,r,e,!1,null,null,null);t["default"]=v.exports},"93b0":function(s,t,a){"use strict";a.r(t);var r=function(){var s=this,t=s.$createElement;s._self._c;return s._m(0)},e=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",[a("h1",[s._v("快速上手")]),a("p",[s._v("本节将介绍如何在项目中使用 roninwz-ui。")]),a("hr"),a("h2",[s._v("简介")]),a("p",[a("code",{pre:!0},[s._v("roninwz-ui")]),s._v(" 是一款基于 "),a("code",{pre:!0},[s._v("Vue.js 2.0")]),s._v(" 的前端 UI 组件库，本人学习实践记录。")]),a("h2",[s._v("安装")]),a("p",[s._v("推荐使用 npm 的方式安装，它能更好地和 webpack 打包工具配合使用。")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-bash"}},[s._v("npm install roninwz-ui --save\n")])]),a("h2",[s._v("全局导入")]),a("pre",{pre:!0},[a("code",{pre:!0,attrs:{"v-pre":"",class:"language-js"}},[a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 导入ui组件库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" RoninwzUI "),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"roninwz-ui"')]),s._v(";\n\n"),a("span",{pre:!0,attrs:{class:"hljs-keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"hljs-string"}},[s._v('"roninwz-ui/lib/theme/index.css"')]),s._v("; "),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 导入RoninwzUI样式")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"hljs-comment"}},[s._v("// 注册组件库")]),s._v("\nVue.use(RoninwzUI);\n")])])])}],n=a("2877"),l={},v=Object(n["a"])(l,r,e,!1,null,null,null);t["default"]=v.exports},c176:function(s,t,a){var r={"./dialog.md":"0242","./element2.md":"93b0","./quickstart.md":"5aa3"};function e(s){var t=n(s);return a(t)}function n(s){if(!a.o(r,s)){var t=new Error("Cannot find module '"+s+"'");throw t.code="MODULE_NOT_FOUND",t}return r[s]}e.keys=function(){return Object.keys(r)},e.resolve=n,s.exports=e,e.id="c176"}}]);
//# sourceMappingURL=chunk-439bcfec.7fc13f2b.js.map