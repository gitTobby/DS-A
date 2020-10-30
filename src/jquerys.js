$(function(){
    $("nav a").click(function() {
        $("nav a").removeClass('selected');
        $(this).parent().toggleClass('selected');
        
    });
});