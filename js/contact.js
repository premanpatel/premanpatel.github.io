  
/* function validate() {
  let fName = document.querySelector(".user_fname")
  let lName = document.querySelector(".user_lname")
  let email = document.querySelector(".user_email")
  let phoneNumber = document.querySelector(".user_phone")
  let message = document.querySelector(".user_message")
  let submit = document.querySelector(".submit");

  submit.addEventListener("click", (e)=>{
    e.preventDefault()

    if(fName.value == "" || lName.value == "" || email.value == "" || phoneNumber.value == "" || message.value == ""){
      //add popup
    }
    else{
      sendmail(fName.value, lName.value, email.value, phoneNumber.value, message.value);
    }
  })
validate()
function sendmail(fname, lname, email, phoneNum, msg){
  emailjs.send("service_rr2dsgn","template_014ciz5",{
    message: msg,
    reply_to: email,
    phone: phoneNum,
    user_fname: fname,
    user_lname: lname,
    });
}
} */

function sendMail(params){
  var tempParams = {
    fName: document.getElementById("user_fname"),
    lName: document.getElementById("user_lname"),
    email: document.getElementById("user_email"),
    phoneNumber: document.getElementById("user_phone"),
    msg: document.getElementById("user_message"),
  }

  emailjs.send('service_rr2dsgn', 'template_014ciz5', tempParams)
  .then(function() {
    console.log('SUCCESS!');
}, function(error) {
    console.log('FAILED...', error);
});
}