

var Logout = document.getElementById("Logout");
Logout.addEventListener("click",function(){
            localStorage.setItem('login',false)
            location.href="index.html"
            
        });


var table = document.getElementById("table-body");
var infoContent = document.getElementById("info-content");


function createTable(id,ProductName,ProductBrand,ExpiryDate,UnitPrice,Stock){

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
    columnTwo.innerText= ProductName;
    tableRow.appendChild(columnTwo);

    var columnThree = document.createElement("td");
    columnThree.classList.add("column3");
    columnThree.innerText= ProductBrand;
    tableRow.appendChild(columnThree);

    var coloumFour = document.createElement("td");
    coloumFour.classList.add("coloum4");
    coloumFour.innerText= ExpiryDate;
    tableRow.appendChild(coloumFour);
   
    var coloumFive = document.createElement("td");
    coloumFive.classList.add("coloum5");
    coloumFive.innerText= UnitPrice;
    tableRow.appendChild(coloumFive);

    var coloumSix = document.createElement("td");
    coloumSix.classList.add("coloum6");
    coloumSix.innerText= Stock;
    tableRow.appendChild(coloumSix);
    
    table.appendChild(tableRow);
   
}
var http = new XMLHttpRequest();
http.open("GET",'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/products', true);
http.send();

http.onreadystatechange = function(){
    if (http.readyState === 4){
     var response = JSON.parse(http.responseText);
        for(var i=0; i<response.length; i++){
            id = response[i]["id"]
            ProductName=response[i]["medicineName"]
            ProductBrand = response[i]["medicineBrand"]
            ExpiryDate = response[i]["expiryDate"]
            UnitPrice = response[i]["unitPrice"]
            Stock = response[i]["stock"]
           

        

            createTable(id,ProductName,ProductBrand,ExpiryDate,UnitPrice,Stock)
          console.log(response)
        }
      }


    }
    var searchBox = document.getElementById("search1")
    var searchBox2 = document.getElementById("search2")
   var  value2 = searchBox.checked
  var  value1 = searchBox2.checked
   
var tableSearch = document.getElementsByClassName("data-row")
// Exprie
search1.addEventListener("click", function () {
    value2 = searchBox.checked
  
    console.log(value2)
    for (i = 0; i < tableSearch.length; i++) {
      
        
      
       if ( value2 === true) {
      var name=  document.getElementsByClassName("coloum4")[i].innerText ;
     
     if(name[9]   == 1){
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = tableSearch.length- i
     }
    else{
        tableSearch[i].style.display = "none"
    }

    }
    // else if ( value1 === true){
    //     tableSearch[i].style.display = ""
    // }
   
    else{
        tableSearch[i].style.display = ""
        document.getElementById("count").innerText = 0
    }
    
    
  
    
    }
   

});
// low stock
search2.addEventListener("click", function () {
    value1 = searchBox2.checked
  
    console.log(value1)
    for (i = 0; i < tableSearch.length; i++) {
      
        
      
       if ( value1 === true) {
      var name=  document.getElementsByClassName("coloum6")[i].innerText ;
     if(name <= 100){
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