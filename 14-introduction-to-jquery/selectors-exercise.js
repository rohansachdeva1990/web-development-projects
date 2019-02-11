if (!jQuery) {
    alert("jQuery not connected!");
} else {

    // 2. Select all divs and give them purple background
    $("div").css("background-color", "purple");

    // 3. Sect the divs  with class "highlight" and make them 200px wide
    $(".highlight").css("width", "200px");

    // 4. Select the div with id "third" and give it a orange border
    $("#third").css("border", "2px solid orange");

    // 5. Select te first div only and change its font color to pink
    //$($("div")[0]).css("color", "pink");
    // Or using css psuedo selector
    $("div:first-of-type").css("color", "pink");
}