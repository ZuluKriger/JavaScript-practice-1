//Globale variabler
var dfiurl;



//det der skal ske når siden loader
window.onload = function(){
    


    //url/adresse til webservicen i variabel
    dfiurl = "https://api.dfi.dk/v1/film/74245";

    kaldWerbservice();
};

//function til at kalde webservicen
function kaldWerbservice(){

    fetch(dfiurl, {
        method: 'get',
        headers: new Headers({
            Authorization: "Basic " + btoa('F005936:JRbTlfWVMH0bm3n')
        })
    }).then(function(response){
        

        return response.json();

    }).then(function(jsonsvar){


        console.log(jsonsvar);


        udskrivData(jsonsvar);

    }).catch(function(error){

        console.log("Der er sket en fejl!!");
        alert("FEJL!!!");
    })





};


//function til at udskrive data/resultatet i html
function udskrivData(jsonData){

        document.getElementById("titel").innerHTML = jsonData.Title + " (" + jsonData.DanishTitle + ")";


        document.getElementById("beskrivelse").innerHTML = jsonData.Description;


        document.getElementById("premiere").innerHTML = "premiere: " + jsonData.Premiere[0].PremiereDate; 


};