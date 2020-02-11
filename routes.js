const fs = require("fs")
const path = require("path")
const resolve = (path1, path2) => path.resolve(path1, path2)

function getRoutes (path) {
    let pathStat = fs.statSync(path)
    if (pathStat.isFile()) {
        if (/\.tpl\.html$/.test(path)) {
            return [{
                path,
                file: fs.readFileSync(path).toString()
            }]
        }
        return []
    } else {
        const dir = fs.readdirSync(path)
        let result = []
        for (let dirfile of dir) {
            let fileResult = getRoutes(resolve(path, dirfile))
            result = result.concat(fileResult)
        }
        return result
    }
}

module.exports = getRoutes(resolve(__dirname, "src/pages"))
