function Storage(){

}


// Storage'e Film Eklemek (Genel)
Storage.prototype.addFilmToStorage = function(newFilm){
    let films = this.getFilmFromStorage();     // asagida yazilan funksiya(sahib oldugumuz array)
    films.push(newFilm);   // array'a filmleri elave etmek
    /*
    Bu Formada Array'in Icine Objeler Elave Olur
    [
        {title:"asdasda",director:"asdasda",url:"dajshdja"},
        {title:"asdasda",director:"asdasda",url:"dajshdja"}
    ]
    */

    // Array'i String'e Donusdurub LocalStorage'e Yazmaq
    localStorage.setItem("films",JSON.stringify(films));
    
}
//Storage'e Film Eklemek(Esas)
Storage.prototype.getFilmFromStorage = function(){
    let films;

    if(localStorage.getItem("films") === null){   // deger yoxdursa storage bos qalsin
        films = [];
    }
    else{
        films = JSON.parse(localStorage.getItem("films"));   // storage'e filmi elave etmek
    }
    return films;
}

// bu kod parçası films dizisi içindeki belirli bir filmi filmTitle ile karşılaştırarak bulur ve o filmi diziden kaldırır.
Storage.prototype.deleteFilmFromStorage = function(filmTitle){
    
    let films = this.getFilmFromStorage();   
    // splice - array'dan silmek ucun
    films.forEach(function(film,index){
        if(film.title === filmTitle){
            films.splice(index,1)   // bu objenin oldugu index'den bir dene silinecek 

        }
    });

    localStorage.setItem("films",JSON.stringify(films));   // elediyimiz deyisiklikleri l.storage'e elave edir
}

// Butun Filmleri Local Storage'den Silmek 
Storage.prototype.clearAllFilmsFromStorage = function(){
    localStorage.removeItem("films")      
}