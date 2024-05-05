const form = document.getElementById("film-form");
const titleElement = document.querySelector("#title");
const directorElement = document.querySelector("#director");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

// UI Objesini Baslatma
const ui = new UI();

// Storage baslatma
const storage = new Storage();

// Tum Eventleri Yukleme

eventListeners();
  
function eventListeners(){
    form.addEventListener("submit",addFilm);
    document.addEventListener("DOMContentLoaded",function(){
        let films = storage.getFilmFromStorage();
        ui.loadAllFilms(films);
    });
    cardBody.addEventListener("click",deleteFilm);
    clear.addEventListener("click",clearAllFilms);
}

function addFilm(e){
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;

    if( title === "" || director === "" || url === "" ){   // Inputlardan Biri Bos Olarsa
            // Hata 
        ui.displayMessages("tum alanlari doldurun","danger");
    }
    else{
         // Yeni Film Olusturma
        const newFilm = new Film(title,director,url);

        ui.addFilmToUI(newFilm);  // Arayuze Film Ekleme
        storage.addFilmToStorage(newFilm);  // Storage'e Film Ekleme
        ui.displayMessages("Film basariyla eklendi","success")
    }

    ui.clearInputs(titleElement,directorElement,urlElement);   // yazdigimiz deyerler sonradan silinsin(Inputda)


    e.preventDefault();
}


// Secdiyimiz Filmi Silmek
function deleteFilm(e){
    if(e.target.id === "delete-film"){
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); // elementin parent'i, onun evvelki qardasi onun da evvelki qardasi(sibling'i)
                                                                                                                                // title yazilan hisseye gelir ve orani silir
        ui.displayMessages("Silme islemi tamamlandi","success")
    }
}

// Butun Filmleri Silmek
function clearAllFilms(){
    if(confirm("Emin misiniz?")){
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
    }
    
}