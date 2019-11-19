var pets=["beagle","bunny","cat","iguana","pony"];


// for (var i=0;i<pets.length;i++){
//     console.log(pets[i]);
// }



$('#button').click(function(){
    var arraySelectValue = $("#array-animals-select-list").val();

switch (arraySelectValue) {
    case "beagle":
                $("#list").html("<li><img src='./img/beagle.jpg'></li>");
                break;
    case "bunny":
                $("#list").html("<li><img src='./img/bunny.jpg'></li>");
                break;
    case "cat":
                $("#list").html("<li><img src='./img/cat.jpg'></li>");
                break;
    case "iguana":
                $("#list").html("<li><img src='./img/iguana.jpg'></li>");
                break;
    case "pony":
                $("#list").html("<li><img src='./img/pony.jpg'></li>");
                break;
};

});





$('#button2').click(function(){
    for (var h=0; h < pets.length; h++) {
        $("#list2").html("<li><img src='./img/"+pets[h]+".jpg'></li>");
      }
});


  
$('#hide').click(function(){
    $('#list').toggle();
});
