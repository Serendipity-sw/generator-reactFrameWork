const entry = require("./webpack.entry.conf");
const path = require('path')
const newEntry = {};
for (let name in entry) {
    newEntry[name] = entry[name][0]
}
let config = {
    entry: newEntry,
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css", ".pcss"],
        alias:{
            '@':path.join(__dirname, '..', '../app/public')
        }
    }
};
module.exports = config;
