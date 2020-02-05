import "styles/index.less"
import jquery from "jquery"

jquery(() => {
    function handleHash () {
        let hashName = location.hash.slice(1) || "index"
        hashName = hashName === "/" ? "index" : hashName
        jquery(document.body).removeClass(["index", "about", "news", "platform", "product", "solution"])
        jquery(document.body).addClass(hashName)
    }

    handleHash()
    jquery(window).on("hashchange", handleHash)
})

