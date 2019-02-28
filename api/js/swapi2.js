var wsurl = "https://swapi.co/api/people/";

var fremurl, tilbageurl;

kaldWebservice();

function kaldWebservice() {
    fetch(wsurl, {
        method: 'get' // get/hent data
    }).then(function (svar) {

        return svar.json(); // hvis det gik godt - så lav til json
    }).then(function (jsonsvar) {
        console.log("jsonsvar: " + jsonsvar.results[2].name); // Console.log først data og tjek, hvad du får retur fra webapi'et - så du ved, hvad du kan hapse ... fx "name", "hair_color" osv.
        udskrivData(jsonsvar); // Når styr på data - så send det videre til udskriv-funktionen
    }).catch(function (error) {
        // Det der skal ske, hvis der opstår en fejl
        console.log("Der er sket en fejl" + error);
        alert(error);
    });
}


function navFrem() {
    wsurl = fremurl;
    kaldWebservice();
};

function navTilbage() {
    wsurl = tilbageurl;
    kaldWebservice();
};




// Håndterer data og udskriver i html - eller hvad der nu skal ske
function udskrivData(jsondata) {

    // Håndter paging - altså hvis der er en "next" eller previous
    if (jsondata.next != null) {
        console.log(jsondata.next);
        fremurl = jsondata.next;
        document.getElementById("frem").style.display = "inline";
    } else { 
        document.getElementById("frem").style.display = "none";
    }
    if (jsondata.previous != null) {
        console.log(jsondata.previous);
        tilbageurl = jsondata.previous;
        document.getElementById("tilbage").style.display = "inline";
    } else {
        document.getElementById("tilbage").style.display = "none";
    }

    var infotekst = "";

    infotekst = "<ul>";
    for (var x in jsondata.results) {

        infotekst += "<div class='box'>" + jsondata.results[x].name + " - " + jsondata.results[x].eye_color + "</div>";
    }
    infotekst += "</ul>";

    document.getElementById("resultat").innerHTML = infotekst;
}