$(function () {
    const $expressions = $("#Yuna-container .expression");
    let currentIndex = 0;

    $("#change-button").on("click", function () {
        $expressions.eq(currentIndex).removeClass("active");
        currentIndex = (currentIndex + 1) % $expressions.length;
        $expressions.eq(currentIndex).addClass("active");
    });
});


