
var Logout = document.getElementById("Logout");
Logout.addEventListener("click",function(){
            localStorage.setItem('login',false)
            location.href="index.html"
            
        });

var table = document.getElementById("table-body");
var infoContent = document.getElementById("info-content");
var count = document.getElementById("count");


function createTable(id, Customer,date, Amount, Status,time){

//     <tr class="data-row">
//     <td class="column1">28</td>
//     <td class="column2">Larisa</td>
//     <td class="column3">Llaneza</td>
//     <td class="column4">SCallison@non.org</td>
//     <td class="column5">(763)248-9034</td>
// </tr>
    var tableRow = document.createElement("tr");
    tableRow.classList.add("data-row");
    tableRow.id= id;
     

   

    var columnOne = document.createElement("td");
    columnOne.classList.add("column1");
    columnOne.innerText=id;
    tableRow.appendChild(columnOne);
    // id,fullName,dob,gender,currentCity,currentCountry
    var columnTwo = document.createElement("td");
    columnTwo.classList.add("column2");
    columnTwo.innerText= Customer;
    tableRow.appendChild(columnTwo);

    var columnThree = document.createElement("td");
    columnThree.classList.add("column3");
    columnThree.innerText= date,time;
    tableRow.appendChild(columnThree);

    var coloumFour = document.createElement("td");
    coloumFour.classList.add("coloum4");
    coloumFour.innerText=  Amount;
    tableRow.appendChild(coloumFour);
   
    var coloumFive = document.createElement("td");
    coloumFive.classList.add("coloum5");
    coloumFive.innerText= Status;
    tableRow.appendChild(coloumFive);

   
    
    table.appendChild(tableRow);
   
}
var http = new XMLHttpRequest();
http.open("GET",'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/orders', true);
http.send();

http.onreadystatechange = function(){
    if (http.readyState === 4){
     var response = JSON.parse(http.responseText);
        for(var i=0; i<response.length; i++){
            id = response[i]["id"]
            Customer=response[i]["customerName"]
            date = response[i]["orderDate"]
            Amount = response[i]["amount"]
            Status = response[i]["orderStatus"]
            time = response[i]["orderTime"]
            createTable(id, Customer,date, Amount, Status,time)
          console.log(response)
        }
      }


    }
    var searchBox = document.getElementById("New")
    var searchBox2 = document.getElementById("Packed")
    var searchBox3 = document.getElementById("InTransit")
    var searchBox4 = document.getElementById("Delivered")
var tableSearch = document.getElementsByClassName("data-row")

// new search
New.addEventListener("click", function () {
    values = searchBox.checked

    for (i = 0; i < tableSearch.length; i++) {
      
        
       tableSearch[i].style.display = "none"
       if ( values === true) {
      var name=  document.getElementsByClassName("coloum5")[i].innerText ;
      var count = document.getElementById("count").innerText;
      console.log(count)
     if(name ==="New"){
        tableSearch[i].style.display = ""
        
        document.getElementById("count").innerText = tableSearch.length- i

     }
    else{
        tableSearch[i].style.display = "none"
       
    }

    }
    else{
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = 0
    } 
    }
   

});

// packed 
Packed.addEventListener("click", function () {
    value1 = searchBox2.checked

    for (i = 0; i < tableSearch.length; i++) {
      
        
     
       if ( value1 === true) {
      var name=  document.getElementsByClassName("coloum5")[i].innerText ;
     if(name ==="Packed"){
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = tableSearch.length- i
     }
    else{
        tableSearch[i].style.display = "none"
    }

    }
    else{
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = 0
    } 
    }
   

});
// InTransit

InTransit.addEventListener("click", function () {
    value2 = searchBox3.checked

    for (i = 0; i < tableSearch.length; i++) {
      
        
      
       if ( value2 === true) {
      var name=  document.getElementsByClassName("coloum5")[i].innerText ;
     if(name ==="InTransit"){
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = tableSearch.length- i
     }
    else{
        tableSearch[i].style.display = "none"
    }

    }
    else{
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = 0
    } 
    }
   

});

// Delivered

Delivered.addEventListener("click", function () {
    value3 = searchBox4.checked

    for (i = 0; i < tableSearch.length; i++) {
      
        
      
       if ( value3 === true) {
      var name=  document.getElementsByClassName("coloum5")[i].innerText ;
     if(name ==="Delivered"){
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = tableSearch.length- i
     }
    else{
       
        tableSearch[i].style.display = "none"
        
    }

    }
    else{
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = 0
    } 
    }
   

});