/*! author by ldq-first */
webpackJsonp([6],{eM6t:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("x11r"),r=a(i),o=(0,r.default)(["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh);\n    background: url(",") no-repeat center / cover;\n    background-attachment: fixed;\n    @media (max-width: 50em) {\n        background: url(",") no-repeat center / cover;\n    }\n    .title {\n       height: 1.6em;\n       font-size: 20rem;\n       color: #E6467F;\n       text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,\n                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,\n                    0 5px 0 #aaa,\n                    0 6px 1px rgba(0,0,0,0.1),\n                    0 0 5px rgba(0,0,0,0.1),\n                    0 1px 3px rgba(0,0,0,0.3),\n                    0 3px 5px rgba(0,0,0,0.2),\n                    0 5px 10px rgba(0,0,0,0.25);\n        @media (max-width: 50em) {\n            font-size: 12rem;\n        }\n    }\n"],["\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: calc(100vh);\n    background: url(",") no-repeat center / cover;\n    background-attachment: fixed;\n    @media (max-width: 50em) {\n        background: url(",") no-repeat center / cover;\n    }\n    .title {\n       height: 1.6em;\n       font-size: 20rem;\n       color: #E6467F;\n       text-shadow: 0 1px 0 #ccc, 0 2px 0 #c9c9c9,\n                    0 3px 0 #bbb, 0 4px 0 #b9b9b9,\n                    0 5px 0 #aaa,\n                    0 6px 1px rgba(0,0,0,0.1),\n                    0 0 5px rgba(0,0,0,0.1),\n                    0 1px 3px rgba(0,0,0,0.3),\n                    0 3px 5px rgba(0,0,0,0.2),\n                    0 5px 10px rgba(0,0,0,0.25);\n        @media (max-width: 50em) {\n            font-size: 12rem;\n        }\n    }\n"]),d=t("Cese"),l=a(d),c=l.default.div(o,"/react-allfamily/dist/static/img/bg1.jpg","/react-allfamily/dist/static/img/bg2.jpg");e.default=c},taiN:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t("Yarq"),r=a(i),o=t("AA3o"),d=a(o),l=t("xSur"),c=a(l),g=t("UzKs"),p=a(g),s=t("Y7Ml"),u=a(s),m=t("L4EM"),b=a(m),f=t("vXtS"),h=t("eM6t"),x=a(h),v=function(n){function e(){return(0,d.default)(this,e),(0,p.default)(this,(e.__proto__||(0,r.default)(e)).apply(this,arguments))}return(0,u.default)(e,n),(0,c.default)(e,[{key:"render",value:function(){return b.default.createElement(f.Container,{className:"noPadding"},b.default.createElement(x.default,null,b.default.createElement("h1",{className:"title"},"404")))}}]),e}(m.Component);e.default=v},vXtS:function(n,e,t){"use strict";function a(n){return n&&n.__esModule?n:{default:n}}Object.defineProperty(e,"__esModule",{value:!0});var i=t("x11r"),r=a(i),o=(0,r.default)(["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    html {\n        height: 100vh;\n        overflow: auto;\n    }\n    body {\n        height: 100vh;\n        line-height: 1.6;\n        min-width: 320px;\n        color: #2c3e50;\n        /*background: linear-gradient(135deg, \n            rgba(78, 167, 224, 1) , \n            rgba(182, 173, 230, 1) 70%,\n            rgba(165, 153, 224, 0.6) );*/\n        background: linear-gradient(135deg, ",", ",');\n        background-attachment: fixed;\n        font-family: "Helvetica Neue", "Arial", " Segoe UI",\n                     "PingFang SC", "Hiragino Sans GB", "STHeiti",\n                      "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", \n                      "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", \n                      "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei",\n                      SimSun, sans-serif !important;\n    }\n    ::-webkit-scrollbar {\n        width: 0.5em\n    }\n\n    ::-webkit-scrollbar-track {\n        border-radius: 0.25em;\n        background: #ceb9d1\n    }\n\n    ::-webkit-scrollbar-thumb {\n        height: 0.5em;\n        border-radius: 0.25em;\n        background: #498bd6 linear-gradient(180deg,#fff,rgba(3,169,244,.5),#0277bd)\n    }\n    ul,\n    li {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n    a {\n        display: inline-block;\n        text-decoration: none;\n        color: #0060E9;\n        &:hover, &:hover * {\n            color: #3f51b5;\n        }\n    }\n    p {\n        margin: 10px 0;\n    }\n    button {\n        display: inline-block;\n        cursor: pointer;\n        border: none;\n        outline: none;\n        -webkit-appearance: none;\n    }\n    .icon {\n        width: 1em; height: 1em;\n        vertical-align: -0.15em;\n        fill: currentColor;\n        overflow: hidden;\n    }\n    svg {\n        fill: '," !important;\n    }\n    .fade-enter {\n        opacity: 0.01;\n        transform: translateY(-100%);\n    }\n\n    .fade-enter.fade-enter-active {\n        opacity: 1;\n        transform: translateY(0);\n        transition: opacity 500ms ease-in;\n    }\n\n    .fade-exit {\n        opacity: 1;\n    }\n\n    .fade-exit.fade-exit-active {\n        opacity: 0.01;\n        transition: opacity 300ms ease-in;\n    }\n"],["\n    * {\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n    }\n    html {\n        height: 100vh;\n        overflow: auto;\n    }\n    body {\n        height: 100vh;\n        line-height: 1.6;\n        min-width: 320px;\n        color: #2c3e50;\n        /*background: linear-gradient(135deg, \n            rgba(78, 167, 224, 1) , \n            rgba(182, 173, 230, 1) 70%,\n            rgba(165, 153, 224, 0.6) );*/\n        background: linear-gradient(135deg, ",", ",');\n        background-attachment: fixed;\n        font-family: "Helvetica Neue", "Arial", " Segoe UI",\n                     "PingFang SC", "Hiragino Sans GB", "STHeiti",\n                      "Microsoft YaHei", "Microsoft JhengHei", "Source Han Sans SC", \n                      "Noto Sans CJK SC", "Source Han Sans CN", "Noto Sans SC", \n                      "Source Han Sans TC", "Noto Sans CJK TC", "WenQuanYi Micro Hei",\n                      SimSun, sans-serif !important;\n    }\n    ::-webkit-scrollbar {\n        width: 0.5em\n    }\n\n    ::-webkit-scrollbar-track {\n        border-radius: 0.25em;\n        background: #ceb9d1\n    }\n\n    ::-webkit-scrollbar-thumb {\n        height: 0.5em;\n        border-radius: 0.25em;\n        background: #498bd6 linear-gradient(180deg,#fff,rgba(3,169,244,.5),#0277bd)\n    }\n    ul,\n    li {\n        margin: 0;\n        padding: 0;\n        list-style: none;\n    }\n    a {\n        display: inline-block;\n        text-decoration: none;\n        color: #0060E9;\n        &:hover, &:hover * {\n            color: #3f51b5;\n        }\n    }\n    p {\n        margin: 10px 0;\n    }\n    button {\n        display: inline-block;\n        cursor: pointer;\n        border: none;\n        outline: none;\n        -webkit-appearance: none;\n    }\n    .icon {\n        width: 1em; height: 1em;\n        vertical-align: -0.15em;\n        fill: currentColor;\n        overflow: hidden;\n    }\n    svg {\n        fill: '," !important;\n    }\n    .fade-enter {\n        opacity: 0.01;\n        transform: translateY(-100%);\n    }\n\n    .fade-enter.fade-enter-active {\n        opacity: 1;\n        transform: translateY(0);\n        transition: opacity 500ms ease-in;\n    }\n\n    .fade-exit {\n        opacity: 1;\n    }\n\n    .fade-exit.fade-exit-active {\n        opacity: 0.01;\n        transition: opacity 300ms ease-in;\n    }\n"]),d=(0,r.default)(["\n    padding: 1em;\n    padding-left: 13rem;\n    &.per {\n        padding: 0;\n        padding-left: 10rem;\n    } \n    &.noPadding {\n        padding: 0;\n        padding-left: 10rem;\n    }\n    @media (max-width: 50em) {\n        padding: 1em;\n        padding-top: 70px; \n        &.noPadding {\n            padding: 0;  \n        }\n        &.topPadding {\n            padding: 0;\n            padding-top: 53px;\n        }\n    }\n    .getSong {\n        margin-top: 1em;\n    }\n    .githubAppBar {\n        background: ",";\n    }\n    &.userInfo {\n        .githubUrl {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            margin-top: 1em;\n            cursor: pointer;\n            text-transform: lowercase;\n            .item-icon {\n                width: 2em;\n                height: 2em;\n                color: #007bba;\n                margin-right: 2em;\n            }\n        }\n    }\n    \n    \n"],["\n    padding: 1em;\n    padding-left: 13rem;\n    &.per {\n        padding: 0;\n        padding-left: 10rem;\n    } \n    &.noPadding {\n        padding: 0;\n        padding-left: 10rem;\n    }\n    @media (max-width: 50em) {\n        padding: 1em;\n        padding-top: 70px; \n        &.noPadding {\n            padding: 0;  \n        }\n        &.topPadding {\n            padding: 0;\n            padding-top: 53px;\n        }\n    }\n    .getSong {\n        margin-top: 1em;\n    }\n    .githubAppBar {\n        background: ",";\n    }\n    &.userInfo {\n        .githubUrl {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            width: 100%;\n            margin-top: 1em;\n            cursor: pointer;\n            text-transform: lowercase;\n            .item-icon {\n                width: 2em;\n                height: 2em;\n                color: #007bba;\n                margin-right: 2em;\n            }\n        }\n    }\n    \n    \n"]),l=t("Cese"),c=a(l),g=t("MehW"),p=g.lightBlue[400],s=g.deepPurple[200],u=g.blue[500],m=g.blue[600];e.default=(0,l.injectGlobal)(o,p,s,m);var b=c.default.div(d,u);n.exports={Container:b}}});