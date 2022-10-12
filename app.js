//Toglogchiin eeljiig hadgalah huvisagch, Negduuger togloch 0, hoerdugaar toglogch 1
var activePlayer=0;

//Toglogchiin tsugleelsan onoog hadgalah huvisagch
var scores =[0,0];

//Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
var roundScore =0;





//program ehlehed beldeh
document.getElementById("score-0").textContent =0;
document.getElementById('score-1').textContent=0;
document.getElementById('current-0').textContent=0;
document.getElementById('current-1').textContent=0;

var diceDom=document.querySelector('.dice');
      diceDom.style.display="none";

      //Shoog shidev event listner 
document.querySelector('.btn-roll').addEventListener('click', function () {
    //1-6 dotors sanamsargui neg too gargaj avna
    var diceNumber =Math.floor(Math.random()*6)+1;
     
    //shoonii zurgiig web deer gargaj irbe
    diceDom.style.display="block";
    
    //buusan sanamsargui toond hargalzah shoonii zurgiig web deer gargaj irne.
    diceDom.src ='dice-'+ diceNumber+'.png';

    //Buusan too 1 ees ylgaatai bol idevhtei Toglogchiin eeljiin onoog nemegduulne
    if(diceNumber !==1){
       // 1-ees zlgaatai too buulaa. buusan toog toglogchid nemj ogno.
       roundScore = roundScore + diceNumber;
       document.getElementById('current-'+ activePlayer).textContent = roundScore;
    }else{
        // 1 buusan tul toglogchiin eeljiig ene hesegt solij ogno

        //ene toglogchiin eeljindee tsugluulsan onoog  0 bolgoh
        roundScore=0;
        document.getElementById('current-'+ activePlayer).textContent = 0;
 
     //Toglogchiin eeljiig nogoo toglogch ruu shiljuulne.
    //herev idevhtei toglogch n 0 baival idevhtei toglogchiig 1 bolgoh
    //ugui bol idevhtei toglogchiig 0bolgo

    activePlayer===0 ? (activePlayer=1) : (activePlayer=0);

    //Ulaan tsegiig shiljuuleh
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    //shoog tur alga bolgoh
    diceDom.style.display="none";

    // if(activePlayer ===0){
    //     activePlayer =1;
    // }else{
    //     activePlayer =0;
    // }
    }
});
