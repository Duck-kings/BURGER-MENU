$(function(){
    
    $("div").click(function(){
        var frs = $("#frs");
        var scd = $("#scd");
        var tr = $("#tr");
        frs.toggleClass("frs_active");
        scd.toggle();
        tr.toggleClass("tr_active");
        
    });
});