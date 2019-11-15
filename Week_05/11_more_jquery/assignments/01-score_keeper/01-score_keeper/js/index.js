$(document).ready(function() {
    var score=0;

    function add5(){
        score+=5;
        $("#result").html(score);
    }

    function zero(){
        score=0;
        $("#result").html(score);

    }
    function add10(){
        score+=10;
        $("#result").html(score)
    }
    function sub1(){
        score-=1;
        $("#result").html(score)
    }


    $("#zero").click(zero);

    $("#add5").click(add5);

    $("#add10").click(add10);

    $("#sub1").click(sub1);
});
