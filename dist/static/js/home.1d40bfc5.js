/*! author by ldq-first */
webpackJsonp([5],{"7kk0":function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var u=t("Yarq"),l=a(u),r=t("AA3o"),o=a(r),i=t("UzKs"),d=a(i),c=t("xSur"),p=a(c),f=t("Y7Ml"),s=a(f),h=t("L4EM"),g=a(h),b=t("vXtS"),x=t("U0Mg"),m=a(x),_=t("qPo/"),k=function(e){function n(e){(0,o.default)(this,n);var t=(0,d.default)(this,(n.__proto__||(0,l.default)(n)).call(this,e));return t.state={count:0},t}return(0,s.default)(n,e),(0,p.default)(n,null,[{key:"propTypes",get:function(){return{location:PropTypes.obj.isRequired,history:PropTypes.obj.isRequired,match:PropTypes.obj.isRequired}}}]),(0,p.default)(n,[{key:"_handleClick",value:function(){this.setState({count:++this.state.count})}},{key:"_changeRoute",value:function(e,n){e.push(n)}},{key:"render",value:function(){var e=this;console.log(this.props);var n=this.props,t=(n.location,n.history);n.match;return g.default.createElement(b.Container,null,g.default.createElement("div",null,"this is home~",g.default.createElement("br",null),"当前计数：",this.state.count,g.default.createElement("br",null),g.default.createElement(m.default,{className:"btn",onClick:function(){return e._handleClick()}},"自增")),g.default.createElement("div",null,g.default.createElement(m.default,{className:"btn",onClick:function(){return e._changeRoute(t,"/page1")}},"跳转到 page1"),g.default.createElement(m.default,{className:"btn",onClick:function(){return e._changeRoute(t,"/page1/001")}},"跳转到 page1/001"),g.default.createElement(m.default,{className:"btn",onClick:function(){return e._changeRoute(t,"/page1?id=001")}},"跳转到 page1?id=001"),g.default.createElement(m.default,{className:"btn",onClick:function(){return e._changeRoute(t,"/page1/001?id=001&page=1")}},"跳转到 page1/001?id=001&page=1")))}}]),n}(h.Component);n.default=(0,_.withRouter)(k)},U0Mg:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(n,"__esModule",{value:!0});var u=t("x11r"),l=a(u),r=(0,l.default)(["\n    &.btn {\n        color: #fff;\n        overflow: hidden;\n        background: #7e57c2;\n        border-radius: 2px;\n        height: 36px;\n        line-height: 36px;\n        padding: 0;\n        min-width: 88px;\n        box-shadow: 0 1px 6px rgba(0,0,0,.4),\n                    0 1px 4px rgba(0,0,0,.2);\n        margin: 10px;\n        padding: 0 10px;\n        &:hover {\n            background: #7e57c2;\n        }\n    }\n"],["\n    &.btn {\n        color: #fff;\n        overflow: hidden;\n        background: #7e57c2;\n        border-radius: 2px;\n        height: 36px;\n        line-height: 36px;\n        padding: 0;\n        min-width: 88px;\n        box-shadow: 0 1px 6px rgba(0,0,0,.4),\n                    0 1px 4px rgba(0,0,0,.2);\n        margin: 10px;\n        padding: 0 10px;\n        &:hover {\n            background: #7e57c2;\n        }\n    }\n"]),o=t("Cese"),i=a(o),d=t("n0ly"),c=a(d),p=(0,i.default)(c.default)(r);n.default=p}});