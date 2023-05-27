function myFunction() {
    var myname = document.getElementById("myname").value;
    localStorage.setItem("textvalue",myname);
    
    
    var myphone = document.getElementById("myphone").value;
    localStorage.setItem("textvalue",myphone);
    var myaddress = document.getElementById("myaddress").value;
    localStorage.setItem("textvalue",myaddress);
    var mymail = document.getElementById("mymail").value;
    localStorage.setItem("textvalue",mymail);
    var myorder = document.getElementById("order").value;
    localStorage.setItem("textvalue",myorder);
    result = myname + "," + myphone + "," + myaddress + "," + mymail +" , "+myorder;
    localStorage.setItem("textvalue",result);
    alert(result);
    
    return result;
    
    
  }
 