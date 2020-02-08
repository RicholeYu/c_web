import "styles/index.less"
// import $ from 'jquery'

$(() => {
    function handleHash() {
        let hashName = location.hash.slice(1) || "index"
        hashName = hashName === "/" ? "index" : hashName
        $(document.body).removeClass(["index", "about", "news", "platform", "product", "solution", "product_decisionengine", "product_smartscore"])
        $(document.body).addClass(hashName)
    }

    handleHash()
    $(window).on("hashchange", handleHash)

    new Swiper(".swiper-container", {
        loop: true, // 循环模式选项
        autoplay: true,

        // 如果需要分页器
        pagination: {
            el: ".swiper-pagination",
            bulletClass: "swiper-bullet",
            bulletActiveClass: "swiper-bullet-active"
        },

        // 如果需要前进后退按钮
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        }
    })
    $(".nav-justified").on("click", "li", function () {
        $(".nav-justified").find("li").removeClass("active")
        $(this).addClass("active")
    })
    $(".solution-ct-left").on("click", ".li-flex", function () {
        $(".solution-ct-left").find(".li-flex").removeClass("active")
        $(this).addClass("active")
        let type = $(this).attr("data-type")
        $(".solution-ct-right").removeClass("active")
        $(".solution-ct-right[data-type=" + type + "]").addClass("active")
    })
})

