// Show me what you've got!

//SOME HINTS:
// Return the value of an attribute:
// $(selector).attr(attribute)

// Set the attribute and value:
// $(selector).attr(attribute,value)

// Set attribute and value using a function:
// $(selector).attr(attribute,function(index,currentvalue))

// Set multiple attributes and values:
// $(selector).attr({attribute:value, attribute:value,...})
// $(selector).attr({attribute:value, attribute:value,...})

$(document).ready(function() {

    $("#1").click(function() {
    $("#screen img").attr("src","img/blue-planet.jpg");
});
    $("#2").click(function() {
    $("#screen img").attr("src","img/cnn.jpg");
});
    $("#3").click(function() {
    $("#screen img").attr("src","img/good-will-hunting.jpg");
});
    $("#4").click(function() {
    $("#screen img").attr("src","img/gravity.jpg");
});
    $("#5").click(function() {
    $("#screen img").attr("src","img/koyaanisqatsi.jpg");
});
    $("#6").click(function() {
    $("#screen img").attr("src","img/parts-unknown.jpg");
});
    $("#7").click(function() {
    $("#screen img").attr("src","img/star-wars-solo.jpeg");
});
    $("#8").click(function() {
    $("#screen img").attr("src","img/stranger-things.jpg");
});
    $("#9").click(function() {
    $("#screen img").attr("src","img/deadpool.jpg");
});

});
