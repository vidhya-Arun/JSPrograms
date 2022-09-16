const thirukkural = {
    kuralDisplayTamil : document.querySelector('.kuralDisplayT'),
    kuralDisplayEnglish : document.querySelector('.kuralDisplayE'),
    chapterNameT : document.querySelector('.spnChNameT'),
    chapterNameE : document.querySelector('.spnChNameE'),
    chapterGroupT : document.querySelector('.spnChGroupT'),
    chapterGroupE : document.querySelector('.spnChGroupE'),
    sectionT : document.querySelector('.spnSectionT'),
    sectionE : document.querySelector('.spnSectionE'),
    getKuralbyNo : function(){

    },
    getRandomKural : function(){
       // console.log("clcik");
        let randomNo =  Math.floor(Math.random() * 134);
        console.log(randomNo);
        this.fetchThirukural(randomNo);
    },
    fetchThirukural : function (number) {
        fetch('https://api-thirukkural.vercel.app/api?num=' + number + ';')
        .then(response => response.json())
        .then(result => {
        console.log('Thirukural #', result.number)
        console.log('Thirukural in tamil', result.line1)
        this.kuralDisplayTamil.innerHTML = result.line1 +'<br>' + result.line2;
       // alert(this.kuralDisplayTamil.innerHTML);
       this.chapterNameT.innerHTML = result.chap_tam;
       this.chapterGroupT.innerHTML = result.chapgrp_tam;
       this.sectionT.innerHTML = result.sect_tam;
       this.kuralDisplayEnglish.innerHTML = result.eng;
       this.chapterNameE.innerHTML = result.chap_eng;
       this.chapterGroupE.innerHTML = result.chapgrp_Eng;
       this.sectionE.innerHTML = result.sect_eng;

        })
        }
}