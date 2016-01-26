
$('.signin').on('click', function()
{
        $('.signin').fadeOut(1000);
        $('.modal').css('display','block')
    });


$('.close').on('click',function()
{
		$('.modal').fadeOut(300);
		$('.signin').css('display','block')
});

$('.submit').on('click',function()
{
		$("input").addClass("error");

});

$("input").on('focus',function()
{
		$("input").removeClass("error");

});

