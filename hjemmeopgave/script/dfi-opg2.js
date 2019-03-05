//Globale variabler
var dfiurl;



//det der skal ske når siden loader
window.onload = function(){
    


    //url/adresse til webservicen i variabel
    dfiurl = "https://api.dfi.dk/v1/film/?sortby=title&releasestart=2019";

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

        var filmresultat = "";

        for(var x in jsonData.FilmList) {

            filmresultat += "<div>" + jsonData.FilmList[x].Title + "(" + jsonData.FilmList[x].ReleaseYear + ")</div>";
        }

        document.getElementById("resultat").innerHTML = filmresultat;

};