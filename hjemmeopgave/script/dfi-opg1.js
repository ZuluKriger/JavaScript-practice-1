//Globale variabler
var wsurl;



//det der skal ske når siden loader
window.onload = function(){



    //url/adresse til webservicen i variabel
    wsurl = "https://api.dfi.dk/v1/film/74245";


};

//function til at kalde webservicen
function kaldWerbservice(){

        fetch(wsurl, {
            method: 'get',
            headers: new Headers({
                //medsend brugernavn og password til DFI
                Authorization: "Basic " + btoa('F005936:JRbT1fWVMH0bm3n')
            })
        }).then(function(response){


            return response.json();
        }).then(function(jsonsvar){


            console.log(jsonsvar);
        }).catch(function(error){


            console.log("Der er sket en fejl!!!!");
            alert("FEJL!!!");
        })



};


//function til at udskrive data/resultatet i html
function udskrivData(){



};