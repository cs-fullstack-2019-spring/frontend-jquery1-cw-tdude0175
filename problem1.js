
$("div.red").css("color","red");
//child of id overrides everything
//could tell it that one is more important than the other?
//< > ?
$("div#myElement div:nth-child(2)").css("color","pink").css("background","orange");
$("div#myElement").css("color","blue").on("click",function () {
    alert("Element clicked");
});
$("div#myElement div:nth-child(1)").css("color","white").css("background","green");
console.log($("div"));