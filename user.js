var table = document.getElementById("table-body");
var infoContent = document.getElementById("info-content");


function createTable(id,profilePic,fullName,dob,gender,currentCity,currentCountry){

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
    columnTwo.innerText= dob;
    tableRow.appendChild(columnTwo);

    var columnThree = document.createElement("td");
    columnThree.classList.add("column3");
    columnThree.innerText= fullName;
    tableRow.appendChild(columnThree);

    var coloumFour = document.createElement("td");
    coloumFour.classList.add("coloum4");
    coloumFour.innerText= dob;
    tableRow.appendChild(coloumFour);
   
    var coloumFive = document.createElement("td");
    coloumFive.classList.add("coloum5");
    coloumFive.innerText= gender;
    tableRow.appendChild(coloumFive);

    var coloumSix = document.createElement("td");
    coloumSix.classList.add("coloum6");
    coloumSix.innerText= currentCity,currentCountry;
    tableRow.appendChild(coloumSix);
    
    table.appendChild(tableRow);
   
}
var http = new XMLHttpRequest();
http.open("GET",'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users', true);
http.send();

http.onreadystatechange = function(){
    if (http.readyState === 4){
     var response = JSON.parse(http.responseText);
        for(var i=0; i<response.length; i++){
            id = response[i]["id"]
            profilePic=response[i]["profilePic"]
            fullName = response[i]["fullName"]
            dob = response[i]["dob"]
            gender = response[i]["gender"]
            currentCity = response[i]["currentCity"]
            currentCountry = response[i]["currentCountry"]

            description = response[i]["description"]

            createTable(id,profilePic,fullName,dob,gender,currentCity,currentCountry)
          console.log(gender)
        }
      }


    }
    var searchBox = document.getElementById("Searchbox")
var tableSearch = document.getElementsByClassName("data-row")
searchBox.addEventListener("input", function () {
    values = searchBox.value
    for (i = 0; i < tableSearch.length; i++) {
        name = tableSearch[i].getElementsByClassName("column3")[0].innerText
        name = name.toLowerCase()
        if (!(name.includes(values))) {
            tableSearch[i].style.display = "none"
        }
        else {
            tableSearch[i].style.display = ""
        }
    }

});