// $(document).ready(function() {

//     // Form validation goes here!

//     function validateName(){
//         var fname = $('#fname').val();
//         if(fname == "" || fname == null)
//         {
//             console.log('First name is missing');
//             return false;
//         }
        
//     }

//     var isValid = isValidString(fname);
    
//     function isValidString(str)
//     {
//     for(i=0;i<str.length;i++)
//     {
//         t = str.charCodeAt(i);
//             //alert(t);
//         if((t<65) || ((t>90) && (t<97)) || (t>122))
//         {
//             console.log('Not valid Name');
//             return false;        //return;
//         }
//     }
//     return true;
//     }
    

//     function validTel(){

//     }

// });


$('.btnSave').click(function(){

console.log($('#name').val());
console.log($('#lname').val());
console.log($('#phone').val());
console.log($('#phone1').val());
console.log($('#phone2').val());
console.log($('#address').val());
console.log($('#address2').val());
console.log($('#address-city').val());
console.log($('.address-state').val());
console.log($('.address-postal-code').val());
console.log($('#phone').val());
console.log($('#phone').val());
console.log($('#phone').val());
console.log($('#phone').val());


})
