function showElement(y,z){
  var x = document.getElementById(y);
  var btn = document.getElementById(z)
  if (x.style.display=== "none"){
    x.style.display = "block";

    btn.innerHTML= "HIDE DETAILS";
    btn.style.backgroundColor= "white";
    btn.style.border = "solid 1px gray";
    btn.style.color="gray"
  }
  else {
    x.style.display = "none";
    btn.innerHTML= "VIEW DETAILS";

    btn.style.backgroundColor= "#C09CD1";
    btn.style.border = "none";
    btn.style.color="white";
}
}

function openForm(){
  var x = document.getElementById("leave-msg");
  if (x.style.display=== "none"){
    x.style.display = "block";
  }
  else {
    x.style.display = "none";
}
}

function sendemail(){
  const firstname = getElementById("fname");
  Email.send({ Host: "smtp.gmail.com", 
  To : '<recipient’s email address>', 
  From : "<sender’s email address>", 
  Subject : "<email subject>", 
  Body : "<email body>", }).then( message => alert("mail sent successfully") );

}

