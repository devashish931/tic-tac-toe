 function computerMode() {

     player1 = prompt('enter your name', 'human');
     player2 = 'machine';
     $('thead tr th:nth-child(1)').text(`${player1}` + ' (X)');
     $('thead tr th:nth-child(2)').text('machine (O)');
     $(document).on('click contextmenu', '.outer > #block', function(e) {
         e.preventDefault();
         isMachinePlayed = false;
         $(this).text(blockPlayed);
         changeSymbol();
         counter++;
         $(this).removeAttr('id');
         check();
         machineCheck();
     })

 }

 function playerMode() {
     player1 = prompt('name of player1 (X)', 'player1');
     player2 = prompt('name of player2 (O)', 'player2');
     $('thead tr th:nth-child(1)').text(`${player1}` + ' (X)');
     $('thead tr th:nth-child(2)').text(`${player2}` + ' (O)');
     $(document).on('click contextmenu', '.outer > #block', function(e) {
         e.preventDefault();
         $(this).text(blockPlayed);
         changeSymbol();
         counter++;
         check();
         $(this).removeAttr('id');
     })
 }
 $(document).on('click', '.replay', function() {
     counter = 0;
     $('.outer').fadeOut(150);
     $('.outer').fadeIn(150);
     $(`.outer div`).empty();
     blockPlayed = 'X';
     $(`.outer div`).attr('id', 'block');
 })
 $(document).on('click', '.close', function() {
     $(`.outer div`).empty();
     $('.modal').addClass('C');
     $(`.outer div`).attr('id', 'block');
     blockPlayed = 'X';
 })