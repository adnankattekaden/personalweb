function validateform(){
    var name=document.getElementById("Name").value
    var email=document.getElementById("Email").value
    var telephone=document.getElementById("Telephone").value
    var message=document.getElementById("message").value
    if (name == "") {
      alert("Enter A Name")
    }else if (email == "") {
      alert("enter an Valid Email")
    }
    else if (telephone == "") {
      alert("enter an Valid PhoneNUmber")
    }
    else if (message == "") {
      alert("enter Some Text")
    }
  }