// Globale variabler
var wsurl; // overordnet webservice-url - som kan tilpasses undervejs = global
var navfrem, navtilbage; // url til at bladre til next og previous



// Det der skal ske når siden loader
window.onload = function () {

    document.getElementById("frem").addEventListener("click", function () {

        wsurl = fremurl;
        kaldWebservice();
    });



    document.getElementById("tilbage").addEventListener("click", function () {

        wsurl = tilbageurl;
        kaldWebservice();
    })


    document.getElementById("inpSoeg").addEventListener("keyup", soegWebservice);

    wsurl = "https://swapi.co/api/people/"; // Søger i alt - og ikke en bestemt person
    kaldWebservice();
    
};




// Funktion til at håndtere søgning
function soegWebservice() {
    var soegeord = document.getElementById("inpSoeg").value;
    wsurl = "https://swapi.co/api/people/?search=" + soegeord;

    kaldWebservice();
}






// Funktion til at kalde webservicen
function kaldWebservice() {



    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {
        return response.json();

    }).then(function (jsonsvar) {
        console.log(jsonsvar);
        udskrivData(jsonsvar);


    }).catch(function (error) {
        console.log("der er sket en fejl")
        alert("FEJL");
    });

}

// Funktion til at udskrive data/resultatet i html
function udskrivData(jasondata) {
    if (jasondata.next != null) {
        fremurl = jasondata.next;
    }


    if (jasondata.previous != null) {
        tilbageurl = jasondata.previous;
    }



    var resultattxt = "";



    for (var x in jasondata.results) {
        resultattxt += "<div class='box'>" + jasondata.results[x].name + "</div>";
    }



    document.getElementById("resultat").innerHTML = resultattxt;
}