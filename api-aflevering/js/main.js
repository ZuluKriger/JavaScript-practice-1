var wsurl;

window.onload = function () {

    wsurl = "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=eb649e75af51446fb777dd2a97552a0d";
        

    kaldWebservice();
};



function kaldWebservice() {


    fetch(wsurl, {

        method: 'get' // get/hent data

    }).then(function (response) {

        return response.json(); // hvis det gik godt - så lav til json

    }).then(function (jsonsvar) {

        console.log("jsonsvar: " + jsonsvar); // Console.log først data og tjek, hvad du får retur fra webapi'et - så du ved, hvad du kan hapse ... fx "name", "hair_color" osv.
        udskrivData(jsonsvar); // Når styr på data - så send det videre til udskriv-funktionen

    }).catch(function (error) {

        // Det der skal ske, hvis der opstår en fejl
        console.log("Der er sket en fejl" + error);

        alert(error);
    });
}




// Håndterer data og udskriver i html - eller hvad der nu skal ske
function udskrivData(jsondata) {


    var nyheder = "";

    for(var x in jsondata.articles){

        console.log(jsondata.articles[x].title);

        var nyhedsklasse = "box";

        if(x == 0){
            nyhedsklasse = "boxmaster";
        }

        nyheder += `<div class="${nyhedsklasse}">
        <h2>${jsondata.articles[x].title}</h2>
        <p class="dato">${jsondata.articles[x].publishedAt}</p>
        <p class="descr">${jsondata.articles[x].description}</p>
        <img src="${jsondata.articles[x].urlToImage}"
            alt="">
        <p><a href="${jsondata.articles[x].url}">Læs mere</a></p>
    </div>`

    }

    document.getElementById("resultat").innerHTML = nyheder;

}