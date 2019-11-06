

$(document).ready(function()
{
    console.log('connected !!!');
    var div1 =$("#mainDiv");
    console.log(div1);

    var div2=$('.secDiv');

    console.log(div2);

    // div1.(function(){
    //     console.log('tast');

    // });

    div1.click(function(){
        console.log("ff")
    })
    // $("#mainDiv").onClick(function()
    // {
    //     console.log("fffff")
    // })
});