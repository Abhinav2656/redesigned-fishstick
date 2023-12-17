function validateForm(){
    let fullname = documnet.getElementById('fullname').value
    let fathername=documnet.getElementById('father').value
    let mothername =document.getElementById('mother').value
    let mailid= document.getElementById('mail').value
    let mobilenumber=document.getElementById('number').value
    let username=document.getElementById('username').value
    let password =document.getElementById('password').value
    let confirmpassword=document.getElementById('repeatpassword').value
    let gender = document.getElementById('gender').value

    if(fullname ==="" || fathername ==="" || mothername ==="" || mailid ==="" || mobilenumber ==="" || username ==="" || password ==="" || confirmpassword ==="" || gender ==="" ){
        alert("All feilds must be filled out !")
        return;
    }
    window.location.href=("submission.html?name="+fullname)
};