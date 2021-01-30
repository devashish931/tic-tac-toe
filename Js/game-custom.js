 var counter = 0;
 var player1;
 var player2;
 let gameMode;
 let blockPlayed = 'X';
 isMachinePlayed = false;

 function changeSymbol() {
     if (blockPlayed === 'X') {
         blockPlayed = 'O';
     } else {
         blockPlayed = 'X';
     }
 }
 getGameMode();
 //  playerMode();
 //  computerMode();
 function getGameMode(startGame) {
     $('.modal').removeClass('C');
     $('.close').addClass('C');
     $('.modal>.wish').html('select game mode....');
     $('.modal').append('<button class="computer" modeComp=true>computer</button><button class="human" modeComp=false>player</button>');
     $('.modal').on('click', '.computer,.human', function() {
         $('.modal>button').addClass('C');
         $('.modal').addClass('C');
         $('.close').removeClass('C');
         gameMode = $(this).attr('modeComp');
         if (gameMode === 'true') {
             computerMode();
         } else {
             playerMode();
         }
     })
 }