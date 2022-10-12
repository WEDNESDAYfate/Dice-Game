//Togloomiin buh gazart ashiglah global huvisagch

//toloom duussan esegiig hadgalah toloviin huvisagch
var isNewGame;

//ali togloch shoo shidev ve
var activePlayer;

//hoer toglogchiin tsugluulsan onoonuud
var scores;

//idevhtei toglogchiin tsugluulj baigaa eeljiin onoo
var roundScore;

//Shoonii zurgiig uzuuleh elementiig DOM-ooc haij olood end hadgalav
var diceDom=document.querySelector('.dice');

//togloomiig ehluuleh
initGame();

// tohloom ehlehed beldeh
function initGame(){
    //togloom ehelelee gedet tolov oruulah
    isNewGame= true;
            //Toglogchiin eeljiig hadgalah huvisagch, Negduuger togloch 0, hoerdugaar toglogch 1
        activePlayer=0;

        //Toglogchiin tsugleelsan onoog hadgalah huvisagch
        scores =[0,0];

        //Toglogchiin eeljindee tsugluulj baigaa onoog hadgalah huvisagch
        roundScore =0;

        //program ehlehed beldeh
        document.getElementById("score-0").textContent =0;
        document.getElementById('score-1').textContent=0;
        document.getElementById('current-0').textContent=0;
        document.getElementById('current-1').textContent=0;

         
        // Toglogchdiin neriig butsaaj gargah
        document.getElementById('name-0').textContent="Player 1";
        document.getElementById('name-1').textContent="Player 2";

        document.querySelector(".player-0-panel").classList.remove("winner");
        document.querySelector(".player-1-panel").classList.remove("winner");

        document.querySelector(".player-0-panel").classList.remove("active");
        document.querySelector(".player-1-panel").classList.remove("active");

        document.querySelector(".player-0-panel").classList.add("active");

        diceDom.style.display="none";
}

      //Shoog shidev event listner 
document.querySelector('.btn-roll').addEventListener('click', function () {
   if(isNewGame === true) {
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
            switchToNextPlayer();
        }
   }else{
     alert("Game over");
   }
});

// HOLD tovhcnooo event list ner
document.querySelector(".btn-hold").addEventListener("click", function(){
   if(isNewGame){
     //ug toglogchiiin tsugluulsan eeljiin onoog global onoon deer nemj ogno.
     scores[activePlayer]= scores[activePlayer]+ roundScore;
   
     //delgets deer onoog oorchloh
     document.getElementById("score-"+ activePlayer).textContent= scores[activePlayer];

  // Yg toglogch hojson esegiig shalgah
  if(scores[activePlayer] >= 10){
      //Toglogchiiin duussan tolovt oruulah
      isNewGame =false;
      //Ylagch gesen testiig gargah
      document.getElementById("name-"+ activePlayer).textContent = "WINNER!!!";
      document.querySelector('.player-' + activePlayer + '-panel').classList.add("winner");
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove("active");
  }else{
      switchToNextPlayer();
  }  
   } else{
    alert("Game over");

   }
})

function switchToNextPlayer() {

     //eeljiin onoog 0 bolgoh
     roundScore =0;
     document.getElementById("current-"+ activePlayer).textContent = 0;
    
     //Toglogchiin eeljiig nogoo toglogch ruu shiljuulne.
    //herev idevhtei toglogch n 0 baival idevhtei toglogchiig 1 bolgoh
    //ugui bol idevhtei toglogchiig 0bolgo
    activePlayer===0 ? (activePlayer=1) : (activePlayer=0);
    // if(activePlayer ===0){
    //     activePlayer =1;
    // }else{
    //     activePlayer =0;
    // }  

    //Ulaan tsegiig shiljuuleh
    document.querySelector('.player-0-panel').classList.toggle("active");
    document.querySelector('.player-1-panel').classList.toggle("active");

    //shoog tur alga bolgoh
    diceDom.style.display="none";

}

//shine togloom ehluuleh tovchiin event listner
document.querySelector(".btn-new").addEventListener("click", initGame);
