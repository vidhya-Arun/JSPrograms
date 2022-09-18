const thirukkural = {
    /*
    kuralDisplayTamil : document.querySelector('.kuralDisplayT'),
    kuralDisplayEnglish : document.querySelector('.kuralDisplayE'),
    chapterNameT : document.querySelector('.spnChNameT'),
    chapterNameE : document.querySelector('.spnChNameE'),
    chapterGroupT : document.querySelector('.spnChGroupT'),
    chapterGroupE : document.querySelector('.spnChGroupE'),
    sectionT : document.querySelector('.spnSectionT'),
    sectionE : document.querySelector('.spnSectionE'),
    */
    getKuralbyNo : function(number){
        this.fetchThirukural(number);

    },
    getRandomKural : function(){
       // console.log("clcik");
       // total 1330 kural 
        let randomNo =  Math.floor(Math.random() * 1331);
        console.log(randomNo);
        this.fetchThirukural(randomNo);
    },
    fetchThirukural : function (number) {
        fetch('https://api-thirukkural.vercel.app/api?num=' + number + ';')
        .then(response => response.json())
        .then(result => {
       // console.log('Thirukural #', result.number)
       // console.log('Thirukural in tamil', result.line1)

           this.updateUI(result);
        })
        },
        updateUI : function(result){
            // Tamil kural display
            document.querySelector('.kuralDisplayT').innerHTML = result.line1 +'<br>' + result.line2;
            if ( document.querySelector('.spnChNameT').innerHTML !='null')
            {
            document.querySelector('.spnChNameT').innerHTML ='அதிகாரம்: '+ result.chap_tam;
            document.querySelector('.spnChGroupT').innerHTML = 'இயல்: ' + result.chapgrp_tam;
            document.querySelector('.spnSectionT').innerHTML = 'பால் : '+ result.sect_tam;

            document.querySelector('.spnChNameE').innerHTML = 'Chapter : '+ result.chap_eng;
            document.querySelector('.spnChGroupE').innerHTML = 'Group: ' +result.chapgrp_eng;
            document.querySelector('.spnSectionE').innerHTML ='Type: '+ result.sect_eng;
            }
            document.querySelector('.spnMeaningT').innerHTML ='பொருள் : '+ result.tam_exp;
            //result number display
            document.querySelector('.kuralnumber').innerHTML = result.number;
            
            // English kural display
            document.querySelector('.kuralDisplayE').innerHTML = result.eng;
           
            document.querySelector('.spnMeaningE').innerHTML ='Meaning :' + result.eng_exp;

        }

}