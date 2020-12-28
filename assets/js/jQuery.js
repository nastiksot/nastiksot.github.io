

$('.accordion').accordion({
    heightStyle: 'content'
});
$('.sortable-ul').sortable();
$(".clearButton").click(function(event){
    $(this).closest(".clearButton").remove();
});



