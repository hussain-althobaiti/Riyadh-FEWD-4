$('#mainHeading').css('color',"#8f48");
$('#mainDiv').html('<p> a new paragraph added  </p>');
$('#mainDiv').html('<span> a new paragraph added000000  </span>');



$('#secDiv').text('simple text added to the div');
$('#secDiv').css({
    'border':'1px solid red',
    'padding-top':'100px',
    'height':'100px',});


var divText=$('#secDiv').text();
console.log(divText);
divText ='the new text to add '
$('#secDiv').append(divText);

console.log( $('#secDiv').css('height'));


function someMagic()
{
    var x= $('#secDiv').text();
    var num=30;
    if(num%3==0 && num %5==0){
    // console.log('pling plong')
    $('#secDiv').text('pling plong');
    }else {
        // console.log('not a factor')
        $('#secDiv').text('not a factor');
    }
}
$('#inputButton').click(someMagic);

