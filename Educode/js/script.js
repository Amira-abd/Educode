
var price= "";
var ordername = "";
var phone = "";
var address = "";
var delivery = "";

function getdata(){
    debugger;
price=document.getElementById("price").value;
ordername=document.getElementById("ordername").value;
phone=document.getElementById("phone").value;
address=document.getElementById("address").value;
delivery=document.getElementById("delivery").value;
console.log("order inforamation" + price + ordername + phone + address + delivery);
}