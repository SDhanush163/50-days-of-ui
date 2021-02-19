$(document).ready(function () {
    $(".links li a").click(function () {
        $(".links li a").removeClass("active");
        $("header span i").removeClass("active");
        $(this).addClass("active");
    });

    $("header span i").click(function () {
        $(".links li a").removeClass("active");
        $("header span i").removeClass("active");
        $(this).addClass("active");
    });

    $(document).on("scroll", onScroll);
    $('a[href^="#"]').on("click", function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $("a").each(function () {
            $(this).removeClass("active");
        });
        $(this).addClass("active");

        var target = this.hash,
            menu = target;
        $target = $(target);
        $("html, body")
            .stop()
            .animate(
                {
                    scrollTop: $target.offset().top + 2,
                },
                500,
                "swing",
                function () {
                    window.location.hash = target;
                    $(document).on("scroll", onScroll);
                }
            );
    });

    $(".color").click(function () {
        $(".color").removeClass("active");
        $(this).addClass("active");
        replaceAttributes($(this).data("hex"));
    });
});

function replaceAttributes(color) {
    let replacerObject = {
        mainPic: "",
        miniPic: "",
        bodyClass: "",
        headerClass: "",
        btnClass: "",
        badgeClass: "",
    };
    switch (color) {
        case "pink":
            replacerObject = {
                mainPic: "instax-main-pink.png",
                miniPic: "instax-mini-pink.png",
                bodyClass: "body-pink",
                headerClass: "header-pink",
                btnClass: "btn-pink",
                badgeClass: "badge-pink",
            };
            break;

        case "blue":
            replacerObject = {
                mainPic: "instax-main-blue.png",
                miniPic: "instax-mini-blue.png",
                bodyClass: "body-blue",
                headerClass: "header-blue",
                btnClass: "btn-blue",
                badgeClass: "badge-blue",
            };
            break;

        case "ice-blue":
            replacerObject = {
                mainPic: "instax-main-ice-blue.png",
                miniPic: "instax-mini-ice-blue.png",
                bodyClass: "body-ice-blue",
                headerClass: "header-ice-blue",
                btnClass: "btn-ice-blue",
                badgeClass: "badge-ice-blue",
            };
            break;
        case "lime-green":
            replacerObject = {
                mainPic: "instax-main-green.png",
                miniPic: "instax-mini-green.png",
                bodyClass: "body-green",
                headerClass: "header-green",
                btnClass: "btn-green",
                badgeClass: "badge-green",
            };
            break;

        case "smokey-white":
            replacerObject = {
                mainPic: "instax-main-white.png",
                miniPic: "instax-mini-white.png",
                bodyClass: "body-white",
                headerClass: "header-white",
                btnClass: "btn-white",
                badgeClass: "badge-white",
            };
            break;
        default:
            replacerObject = {
                mainPic: "instax-main-pink.png",
                miniPic: "instax-mini-pink.png",
                bodyClass: "body-pink",
                headerClass: "header-pink",
                btnClass: "btn-pink",
                badgeClass: "badge-pink",
            };
            break;
    }

    replaceImage(replacerObject);
    replaceColor(replacerObject);
}

function replaceImage(replacer) {
    const { mainPic, miniPic } = replacer;
    $(".showcase-img img").attr("src", `resources/images/${miniPic}`);
    $(".main-img img").attr("src", `resources/images/${mainPic}`);
}

function replaceColor(replacer) {
    const { bodyClass, headerClass, btnClass, badgeClass } = replacer;
    let oldBgClass = $("#main").attr("class");
    $("#main").removeClass(oldBgClass);
    $("#main").addClass(bodyClass);

    let oldHeaderClass = $("#header").attr("class");
    $("#header").removeClass(oldHeaderClass);
    $("#header").addClass(headerClass);

    let oldBtnClass = $("#btn-purchase").attr("class");
    $("#btn-purchase").removeClass(oldBtnClass);
    $("#btn-purchase").addClass(`btn ${btnClass}`);

    let oldBadgeClass = $(".sub-section h3").attr("class");
    $(".sub-section h3").removeClass(oldBadgeClass);
    $(".sub-section h3").addClass(badgeClass);
}

function onScroll(event) {
    var scrollPos = $(document).scrollTop();
    $(".links li a").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (
            refElement.position().top <= scrollPos &&
            refElement.position().top + refElement.height() > scrollPos
        ) {
            $(".links li a").removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}
