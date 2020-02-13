module.exports = function getRouteFile (route) {
    return require.context("./pages", true, /\.tpl.html/)(route)
}
