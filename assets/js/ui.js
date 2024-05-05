// Arayuz - UI

function UI(){

}


// UI'a Film Eklemek
UI.prototype.addFilmToUI = function(newFilm){
    /* <tr>
            <td><img src="" class="img-fluid img-thumbnail"></td>f
            <td></td>
            <td></td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr> --> */
        const filmList = document.getElementById("films");
        
        // yazdigimiz filmler ardicil silinmeden elave olunmasi ucun
        filmList.innerHTML +=`
        <tr>
            <td><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td>${newFilm.title}</td>
            <td>${newFilm.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        
            `
}
UI.prototype.clearInputs = function(element1,element2,element3){
    element1.value = "";     // yazdiglarimiz input hissesinden silinsin deye 
    element2.value = "";
    element3.value = "";
}


// Hata Mesajlari Eklemek
UI.prototype.displayMessages = function(message,type){
    const cardBody = document.querySelector(".card-body")    // html'den card-body olan divi secdik
    //Alert Div Olusturma
    const div = document.createElement("div");               // teze div yaratdiq
    div.className = `alert alert-${type}`;                   // div'e class verdik 
    div.textContent = message;                               // mesaj hissesi elave eledik

    cardBody.appendChild(div);                  // yaratdigimiz divi cardBody'e elave etdik

    setTimeout(function(){                    // alert'in 1 saniye sonra silinmesi ucun
        div.remove();
    },1000);
}

// Bu kod parçası, films dizisini kullanarak bir film listesini HTML içerisine yüklemek için kullanılan bir metodu temsil eder. 
UI.prototype.loadAllFilms = function(films){
    const filmList = document.getElementById("films");
    
    films.forEach(function(film) {
        filmList.innerHTML += `
        <tr>
            <td><img src="${film.url}" class="img-fluid img-thumbnail"></td>
            <td>${film.title}</td>
            <td>${film.director}</td>
            <td><a href="#" id = "delete-film" class = "btn btn-danger">Filmi Sil</a></td>
        </tr>
        `
    });
}   

// Secdiyimiz Filmi UI'dan Silmek
UI.prototype.deleteFilmFromUI = function(element){
    element.parentElement.parentElement.remove();    // element a, onun parent'i th, th'nin de parent'i tr
}



// Butun Filmler UI'dan Silmek
UI.prototype.clearAllFilmsFromUI = function(){
    const filmList = document.getElementById("films");
    // filmList.innerHTML = ""; yazaraq da silmek olar ama bu usul yavas usuldur


    /* Bu kod parçası, bir HTML elementinin çocuklarını (child elements) 
    sırayla kontrol ederek ve her seferinde ilk çocuğu (firstElementChild) kaldırarak bir döngü oluşturur.*/

    while(filmList.firstElementChild !== null){  // Child olmuyana qeder
        filmList.firstElementChild.remove();
    }
}