$(function () {

    var Tablebody = $("#Tablebody");
    var Tablerow =$("#Userstablebody")
    var Tabledata1 =$("#tabeldata1")
    var Tabledata2 =$("#tabeldata2")
    var Tabledata3 =$("#tabeldata3")
    var Tabledata4 =$("#tabeldata4")
    var Tabledata5 =$("#tabeldata5")
    var Tabledata6 =$("#tabeldata6")
    $("<p>").text("Hello World");

    $.ajax({
        url:'https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users',
        type:'get',
       
        success:function(response){
           
            console.log(response)
            // <tbody id="Tablebody" >
            // <tr id="Userstablebody">
            //     <td>0268-1239</td>
            //     <td>CHENOPODIUM ALBUM POLLEN</td>
            //     <td>ALK-Abello, Inc.</td>
            //     <td>24 Jul, 2029</td>
            //     <td>$632.22</td>
            //     <td>917</td>
            // </tr>
            createTable = (id,profilePic,fullName,dob,gender,currentCity,currentCountry) => {
                $(Tabledata1).text(id)
            //   $(Tabledata2).text(response[0].profilePic)
            // $(Tabledata2).prepend(`src`=response[0].profilePic )
              $(Tabledata3).text(fullName)
              $(Tabledata4).text(dob)
              $(Tabledata5).text(gender)
              $(Tabledata6).text(currentCity,currentCountry)
              }
            
         
          for(var i=0; i<response.length; i++){
            id = response[i]["id"]
           fullName=response[i]["fullName"]

            createTable(id,fullName)
          
        }

           
        }
    });
})