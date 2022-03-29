

function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }
}

function seterror(id, error){
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}
  function validateForm(){
    var returnval = true;
    clearErrors();
  }   

//     var name = document.forms['myForm']["fname"].value;
//     if (name.length<5){
//         seterror("name", "*Length of name is too short");
//         returnval = false;
//     }

//     if (name.length == 0){
//         seterror("name", "*Length of name cannot be zero!");
//         returnval = false;
//     }

     let email = document.forms['myForm']["femail"].value;
    //   if (email !== "admin@gmail.com"){
    //      seterror("email", "*Email is not valid");
    //      returnval = false;
    //  } 
    //  }

//     var phone = document.forms['myForm']["fphone"].value;
//     if (phone.length != 10){
//         seterror("phone", "*Phone number should be of 10 digits!");
//         returnval = false;
//     }

     let password = document.forms['myForm']["fpass"].value;
    //   if (password !== "123456"){
    //      seterror("pass", "*Invalid password");
    //      returnval = false;
    //  } else{
    //    return function myFunction() {
    //     location.replace("remitter.html")
    //   }
    
    //  }
function myFunction() {
    if(email == "admin@gmail.com" && password == "123456"){
            
             location.replace("remitter-registration.html");
      
    }else{
      seterror("phone", "*Email is wrong");
      seterror("cpass", "*Password is wrong!");
      returnval = false;
    }
  }
//     var cpassword = document.forms['myForm']["fcpass"].value;
//     if (cpassword != password){
//         seterror("cpass", "*Password and Confirm password should match!");
//         returnval = false;
//     }

//     return returnval;
// }

// function myFunction() {
//   location.replace("remitter-registration.html");
// }
  

