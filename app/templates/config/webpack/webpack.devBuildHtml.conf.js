const fs = require("fs");
const rimraf = require('rimraf');
const webpackFile = require("./webpack.file.conf");
const entryBuild = require('../entry/entry');
const webpackComConf = require('./webpack.com.conf');
/*删除开发目录*/
rimraf.sync(webpackFile.devDirectory);
/*创建开发目录*/
fs.mkdirSync(webpackFile.devDirectory);

/*生成HTML*/
let htmlCont = fs.readFileSync("index.html", "utf-8");
let scriptInsert = `
<script type=text/javascript src=js/manifest.js></script>
<script type=text/javascript src=js/vendor.js></script>
<script type=text/javascript src=js/common.js></script>
<script type=text/javascript src=js/key.js></script>
`;
htmlCont = htmlCont.replace('</body>', scriptInsert + '</body>');
entryBuild.map((data) => {
    fs.writeFile(webpackFile.devDirectory + '/' + data.name + '.html',
        htmlCont.replace('js/key.js', 'js/' + data.name + '.js').replace('gloomyTempalteTitle', webpackComConf.titleFun(data.name,data.title)),
        'utf8',
        function (err) {
            if (err) {
                return console.log(err);
            }
        });
});
