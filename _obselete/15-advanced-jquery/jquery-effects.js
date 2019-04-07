$("#fadeBtn").on("click", function() {
    $('div').fadeToggle(1000, function() {
        //console.log("FADE completed");
        // Common scenario is to remove them from DOM
        // $(this).remove();
    });
});


$("#slideBtn").on("click", function() {
    $('div').slideToggle();
});