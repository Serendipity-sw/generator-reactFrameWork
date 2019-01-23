# reactFrameWork
react脚手架

## 需要电脑安装的npm插件
    npm i rimraf -g
    
## 该脚手架可通过yeoman一键安装
  
    npm install -g yo
    
    npm install generator-react-cpt -g
    
    mkdir project && cd project
    
    yo react-cpt

# 注意!
    当需要将ES6 转 ES5 时需要安装插件 yarn add -D babel-preset-es2015
    并在.babelrc文件中在 "presets":["react","env"], 修改为"presets":["es2015","react","env"]
详情请参考[Babel 入门教程  作者：阮一峰](http://www.ruanyifeng.com/blog/2016/01/babel.html)
    
### 推荐插件
1. [ant design](https://ant.design/docs/react/introduce-cn) UI库
2. [styled-components](https://github.com/styled-components/styled-components) 样式主导生成元素.
3. [Sortable](https://github.com/RubaXa/Sortable) react中可拖拽插件.地址:[demo](http://rubaxa.github.io/Sortable/)
4. [react-motion](https://github.com/chenglou/react-motion) react一些动画
5. [react-router-transition](https://github.com/maisano/react-router-transition) react路由动画
6. [perfect-scrollbar](https://github.com/utatti/perfect-scrollbar) perfect-scrollbar滚动条插件

~~.[react-custom-scrollbars](https://github.com/malte-wessel/react-custom-scrollbars) 滚动条插件
需将该配置放入postcss.config.js中,且需要将其放在autoprefixer插件与postcss-modules插件中间.否则会有样式处理上的一些BUG,请勿搞乱顺序~~  弃用.当使用该插件,会导致项目打包时需要stage-1插件包, 该插件包,在webpack4中已准备弃用

    
### 项目集成插件
    1. [postcss](https://github.com/postcss/postcss) 样式预处理插件,请追加的样式文件后缀名为.pcss结尾的文件  
    2. [autoprefixer](https://github.com/postcss/autoprefixer) 样式处理,会自动追加浏览器前缀      
    3. [react-icons](https://github.com/gorangajic/react-icons) 字体图标库  
    4. [axios](https://github.com/axios/axios) http请求库  
    5. [js-xlsx](https://github.com/SheetJS/js-xlsx) excel生成读取工具 兼容IE8以上  
    6. [js-cookie](https://github.com/js-cookie/js-cookie) cookies操作插件 兼容IE8以上  
    7. [DOM to Image](https://github.com/tsayen/dom-to-image) dom生成img图片,浏览器支持一般,请详细观看该插件github文档  
    8. [prop-types](https://github.com/facebook/prop-types) 新增类型判断,详细文档请查看github文档 增加该插件势必为了规范在编码过程中导致变量类型混乱使用情况,针对类似1与字符串"1" 这种傻傻不分的人  
    9. [proposal-object-rest-spread](https://github.com/tc39/proposal-object-rest-spread) 新增对象拆分及合并写法. (例:let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };   let n = { x, y, ...z };  )    详细请参考github文档   配置手册在[babel-plugin-transform-object-rest-spread](http://babeljs.io/docs/en/babel-plugin-transform-object-rest-spread/)  
    10. [moment](http://momentjs.com/docs/)时间格式化插件,详细文档,请查阅该插件的doc文档  
    11. [postcss-preset-env](https://github.com/csstools/postcss-preset-env)允许你使用未来的 CSS 特性  
    12. [react-document-title](https://github.com/gaearon/react-document-title)允许你的组件修正document-title  
    13. [postcss-initial](https://github.com/maximkoretskiy/postcss-initial)加了 all: initial 的支持，重置了所有继承的样式  
    14. [postcss-modules](https://github.com/css-modules/postcss-modules)可以自动以组件为单位隔绝 CSS 选择器。  
    15. [postcss-pxtorem](https://github.com/cuth/postcss-pxtorem) px转rem单位 如使用请详细阅读文档手册 示例``require('postcss-pxtorem')({ rootValue: 100, unitPrecision: 5, propList: ['*'], selectorBlackList: [], replace: true, mediaQuery: false, minPixelValue: 0 })``  
    16. [precss](https://github.com/jonathantneal/precss) 预处理css的插件包,成了很多postcss插件的功能，比如嵌套，变量，继承，混合，循环，判断 .请着重翻阅改规则文档.  
    17. [postcss-import](https://github.com/postcss/postcss-import) css文件内部import插件.  
    18. [validator.js](https://github.com/chriso/validator.js) 字符串校验辅助插件.  

````注意项目启动及发布命令请详细参考根目录下package.json -> scripts 下命令 需主要使用到的命令为start及build````

### http请求使用说明

##### 项目中集成了http公共方法,使用的插件为axios http插件
    插件存放于根目录下app/public/js/insertFaceApi/httpRequest.js中
    
    1.HttpGet http get请求
        方法接收参数
            url 请求地址
            successCallBack 成功回调函数(如该参数无值,则将console.log打印信息)
            errorCallBack 错误回调函数  (如该参数无值,则将console.log打印信息)
    
    2.HttpPost http post请求
        方法接收参数
            url 请求地址
            dataObject 请求参数 {}
            successCallback 成功回调函数(如该参数无值,则将console.log打印信息)
            errorCallBack 错误回调函数  (如该参数无值,则将console.log打印信息)
    
    3.httpUrlGetAll http get 多并发请求
        方法接收参数
            urlList ['请求地址',...]
            successCallback 成功回调函数(如该参数无值,则将console.log打印信息)
            errorCallBack 错误回调函数  (如该参数无值,则将console.log打印信息)
    
    3.httpUrlPostAll http post 多并发请求
        方法接收参数
            urlList [{url:'',dataObject:{请求参数}},...]
            successCallback 成功回调函数(如该参数无值,则将console.log打印信息)
            errorCallBack 错误回调函数  (如该参数无值,则将console.log打印信息)
            
### 增加xlsx使用说明

##### 集成xlsx公共方法,使用插件为js-xlsx插件
    插件存放于根目录下app/public/js/xlsxProcess/xlsxProcess.js中
    
    1. ExcelWriteFile excel客户端导出
        方法接受参数:
            dataArray 数据集合 示例 [ ["基站名称", "基站地址", "小区编码(lac)", "扇区编码(cell_id或者ci)", "经度", "维度", "网络制式", "基站类型"]... ]
            fileName 下载文件名
            
        使浏览器进行file下载
        
        
### 增加cookie使用说明
[js-cookie](https://github.com/js-cookie/js-cookie)详细文档

    在需要使用的地方引用 `import * as Cookies from "js-cookie"`
    然后即可在内部使用 Cookies.get()...
