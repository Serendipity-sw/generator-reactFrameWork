module.exports = {
    plugins: [
        require('postcss-import'),
        require('precss'),
        require('postcss-initial'),
        require('postcss-preset-env'),
        require('autoprefixer'),
        require('postcss-pxtorem')({
            rootValue: 100,
            unitPrecision: 5,
            propList: ['*'],
            selectorBlackList: [],
            replace: true,
            mediaQuery: false,
            minPixelValue: 0
        }),
        require('postcss-modules')
    ]
}