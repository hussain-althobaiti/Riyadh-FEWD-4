var pets=["beagle","bunny","cat","iguana","pony"];


for (var i=0;i<pets.length;i++){
    console.log(pets[i]);
}

$('#button').click(function(){
    for (var h=0; h < pets.length; h++) {
        $("#list").append("<li><img src='./img/"+pets[h]+".jpg'></li>");
      }
});
  
$('#hide').click(function(){
    $('#list').toggle();
});
