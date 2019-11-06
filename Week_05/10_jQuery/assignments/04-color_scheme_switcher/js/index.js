document.getElementById('grayButton');

$(document).ready(function(){

    $('#grayButton').click(grayButtonClicked);

    function grayButtonClicked(){
        $("body").css("background-color","gray");
        $("body").css("color","white");
        
    }
    $('#whiteButton').click(whiteButtonClicked);

    function whiteButtonClicked(){
        $("body").css("background-color","white");
        $("body").css("color","black");
        
    }


})
