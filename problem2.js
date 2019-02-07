var image =$(".galleryItem").get( 1 );
timer=0;
// $("li").hide();
setInterval(function ()
{timer++;
    if(timer%2) {
        console.log("boop");
        $("ul li:nth-of-type(2):first").hide();
    }
    else
        {
            $("ul li:nth-of-type(2):first").show();
        }
},2000);
//interval easy to set. no need to stop
$("button:last").on("click",function ()
{
   $("tr:even").css("background","gray");

});
//could make it toggle