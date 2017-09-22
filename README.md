# react-allfamily

> React全家桶脚手架  
> 使用React全家桶, Webpack, Bable, Immutable, Reselect, Axios, Fetch-jsonp, ESLint等  
> 实现了按需加载, 模块热替换, async/await 处理异步, Immutable数据化等功能

> [预览地址](http://ldq-first.github.io/react-allfamily/dist/#/)


## 技术栈
* **React**: [ 前端框架 ]
* **Redux**: [ 状态管理,组件通信 ] 
* **React-router**: [ 配置路由，组件切换, 按需加载 ]
* **ES6/7**: [ JS版本 ]
* **Webpack**: [ 模块化处理，编译打包 ]
* **material-ui**: [ UI框架 ]
* **Axios**: [ 基于Promise处理HTTP请求 ]
* **Fetch-jsonp**: [ 基于Promise处理jsonp跨域请求 ]
* **Classnames**: [ 处理类名 ]
* **Prop-types**: [ 组件的props中的变量进行类型检测 ]
* **Immutable**: [ Immutable数据化 ]
* **Reselect**: [ 使用缓存机制优化state ]
* **Styled-components**: [ CSS in JS ]
* **Redux-thunk&async/await**: [ redux中间件，处理异步事件 ]




## 开发服务器 webpack-dev-server

配置

```javascript
 devServer: {
        historyApiFallback: true, //任意的404响应都被替代为index.html
       /* 
        手机局域网访问 (手机和电脑在同一局域网[如：同一wifi]下，
        手机可通过电脑的局域网ip访问电脑进行调试)
       */
        host: '0.0.0.0', 
        port: 5050
    }
```



## bable

```javascript

babel-core //调用Babel的API进行转码
babel-loader
babel-preset-es2015 //用于解析 ES6
babel-preset-react //用于解析 JSX
babel-preset-stage-0 //用于解析 ES7 提案

//将辅助函数“搬”到一个单独的模块 babel-runtime 中，这样做能减小项目文件的大小。
babel-plugin-transform-runtime 

/*
Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，
比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，
以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。
举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。
如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。
*/
babel-polyfill

```



## webpack

```javascript
css-loader&style-loader //处理css
node-sass&sass-loader //处理sass
url-loader //将图片，字体等转成base64
json-loader //处理json文件

clean-webpack-plugin //清除指定文件
copy-webpack-plugin  //复制指定文件
extract-text-webpack-plugin //分离css，sass
html-webpack-plugin  //处理html
webpack-merge   //合并webpack配置
webpack.LoaderOptionsPlugin&autoprefixer  //添加css前缀
webpack.HashedModuleIdsPlugin  //优化模块
webpack.DllReferencePlugin   //优化打包
webpack.DefinePlugin   //定义环境
webpack.optimize.UglifyJsPlugin  //压缩JS
//根据模块调用次数，给模块分配ids，常被调用的ids分配更短的id，使得ids可预测，降低文件大小
 webpack.optimize.OccurrenceOrderPlugin

```