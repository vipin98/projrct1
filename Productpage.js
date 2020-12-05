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
            ProductName=response[i]["Miconazole Nitrate"]
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
   
var tableSearch = document.getElementsByClassName("data-row")
searchBox2.addEventListener("click", function () {
    values = searchBox2.checked
  
    console.log(values)
    for (i = 0; i < tableSearch.length; i++) {
      
        
       tableSearch[i].style.display = "none"
       if ( values === true) {
      var name=  document.getElementsByClassName("coloum6")[i].innerText ;
     if(name >= 100){
        tableSearch[i].style.display = "none"
        
     }
    else{
        tableSearch[i].style.display = ""
    }

    }
    
    
  
    
    }
   

});