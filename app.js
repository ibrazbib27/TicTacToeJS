    var final = false;
   var startTime, endTime;              
   var count = 0; 
  
//top
(document.getElementsByClassName('top')[0]).addEventListener("click", function(){topMove(0)}, false);
(document.getElementsByClassName('top')[1]).addEventListener("click", function(){topMove(1)}, false);
(document.getElementsByClassName('top')[2]).addEventListener("click", function(){topMove(2)}, false);
               function topMove(i){
                   if(((document.getElementsByClassName('top')[i]).textContent) === "X" || ((document.getElementsByClassName('top')[i]).textContent) === "O"){
                       alert("Err: Invalid Move: This square has already been selected, Please select another square");
                   }
                   else{
                       if(count%2 === 0){
                           (document.getElementsByClassName('top')[i]).innerHTML = "<h1>X</h1>";
                           theWinner();
                       }
                       else{
                          (document.getElementsByClassName('top')[i]).innerHTML = "<h1>O</h1>";
                            theWinner();
                       }
                       count++;
                        if(count === 1)
                           startTime =  new Date();
                       if(final === false)
                        theDraw();
                   }
               }
              
               
               //middle
               
               (document.getElementsByClassName('middle')[0]).addEventListener("click", function(){midMove(0)}, false);
(document.getElementsByClassName('middle')[1]).addEventListener("click", function(){midMove(1)}, false);
(document.getElementsByClassName('middle')[2]).addEventListener("click", function(){midMove(2)}, false);
               function midMove(i){
                   if(((document.getElementsByClassName('middle')[i]).textContent) === "X" || ((document.getElementsByClassName('middle')[i]).textContent) === "O"){
                       alert("Err: Invalid Move: This square has already been selected, Please select another square");
                   }
                   else{
                       if(count%2 === 0){
                           (document.getElementsByClassName('middle')[i]).innerHTML = "<h1>X</h1>";
                           theWinner();
                       }
                       else{
                          (document.getElementsByClassName('middle')[i]).innerHTML = "<h1>O</h1>";
                            theWinner();
                       }
                       count++;
                        if(count === 1)
                           startTime = new Date();
                       if(final === false)
                        theDraw();
                   }
               }
                       
        //bottom
                                      (document.getElementsByClassName('bottom')[0]).addEventListener("click", function(){bottomMove(0)}, false);
(document.getElementsByClassName('bottom')[1]).addEventListener("click", function(){bottomMove(1)}, false);
(document.getElementsByClassName('bottom')[2]).addEventListener("click", function(){bottomMove(2)}, false);
               function bottomMove(i){
                   if(((document.getElementsByClassName('bottom')[i]).textContent) === "X" || ((document.getElementsByClassName('bottom')[i]).textContent) === "O"){
                       alert("Err: Invalid Move: This square has already been selected, Please select another square");
                   }
                   else{
                       if(count%2 === 0){
                           (document.getElementsByClassName('bottom')[i]).innerHTML = "<h1>X</h1>";
                           theWinner();
                       }
                       else{
                          (document.getElementsByClassName('bottom')[i]).innerHTML = "<h1>O</h1>";
                            theWinner();
                       }
                       count++;
                       if(count === 1)
                           startTime = new Date();
                       if(final === false)
                       theDraw();
                   }
               }
                //draw
               function theDraw(){ 
                    if(count === 9){
                         endTime = new Date();
                        var elapseTime = endTime - startTime;
                        elapseTime /= 1000;
                       var seconds = Math.round(elapseTime);
                          setTimeout(function() {if(!alert("Game result:       DRAW \nNo. of Moves:      "+ count + "\nGame Duration:   "+seconds + " seconds" +"\n\nclick the 'OK' button to play again")){window.location.reload();}}, 100);
                                 }
                                 
               } 
               function theWinner(){
                   //verify X win
                  for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('bottom')[i]).textContent === 'X'){
                         
                          if(i === 2)
                              winnerFound(0);
                      }
                      else{
                          
                          break;
            }            
                  }
                   
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('middle')[i]).textContent === 'X'){
                         
                          if(i === 2)
                              winnerFound(0);
                      }
                      else{
                          
                          break;
            }            
                  }
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('top')[i]).textContent === 'X'){
                          if(i === 2)
                              winnerFound(0);
                      }
                      else{
                          
                          break;
            }            
                  }
                   
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('left')[i]).textContent === 'X'){
                         
                          if(i === 2)
                              winnerFound(0);
                      }
                      else{
                          
                          break;
            }            
                  }
                   
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('center')[i]).textContent === 'X'){
                         
                          if(i === 2)
                              winnerFound(0);
                      }
                      else{
                          
                          break;
            }            
                  }
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('right')[i]).textContent === 'X'){
                         
                          if(i === 2)
                              winnerFound(0);
                      }
                      else{
                          
                          break;
            }            
                  }
                   
                   
             //verify O win
                  for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('bottom')[i]).textContent === 'O'){
                         
                          if(i === 2)
                              winnerFound(1);
                      }
                      else{
                          
                          break;
            }            
                  }
                   
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('middle')[i]).textContent === 'O'){
                         
                          if(i === 2)
                              winnerFound(1);
                      }
                      else{
                          
                          break;
            }            
                  }
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('top')[i]).textContent === 'O'){
                         
                          if(i === 2)
                              winnerFound(1);
                      }
                      else{
                          
                          break;
            }            
                  }
                   
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('left')[i]).textContent === 'O'){
                         
                          if(i === 2)
                              winnerFound(1);
                      }
                      else{
                          
                          break;
            }            
                  }
                   
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('center')[i]).textContent === 'O'){
                         
                          if(i === 2)
                              winnerFound(1);
                      }
                      else{
                          
                          break;
            }            
                  }
                      for(var i = 0; i < 3; i++){
                      if((document.getElementsByClassName('right')[i]).textContent === 'O'){
                         
                          if(i === 2)
                              winnerFound(1);
                      }
                      else{
                          
                          break;
            }            
                  }
                   //diagnals
             if(((document.getElementsByClassName('top')[0]).textContent === 'O') && ((document.getElementsByClassName('middle')[1]).textContent === 'O') && ((document.getElementsByClassName('bottom')[2]).textContent === 'O'))
                    winnerFound(1);
               if(((document.getElementsByClassName('top')[2]).textContent === 'O') && ((document.getElementsByClassName('middle')[1]).textContent === 'O') && ((document.getElementsByClassName('bottom')[0]).textContent === 'O'))
                    winnerFound(1);     
             if(((document.getElementsByClassName('top')[0]).textContent === 'X') && ((document.getElementsByClassName('middle')[1]).textContent === 'X') && ((document.getElementsByClassName('bottom')[2]).textContent === 'X'))
                    winnerFound(0);
            if(((document.getElementsByClassName('top')[2]).textContent === 'X') && ((document.getElementsByClassName('middle')[1]).textContent === 'X') && ((document.getElementsByClassName('bottom')[0]).textContent === 'X'))
                    winnerFound(0); 
               }
    function winnerFound(result){
        final = true;
        var letter;
        if(result === 0)
            letter = 'X';
        if(result === 1)
            letter = 'O';
        
          endTime = new Date();
                        var elapseTime = endTime - startTime;
                        elapseTime /= 1000;
                       var seconds = Math.round(elapseTime);
                          setTimeout(function() {if(!alert("Game result:       "+letter+" wins! \nNo. of Moves:      "+ count + "\nGame Duration:   "+seconds + " seconds" +"\n\nclick the 'OK' button to play again")){window.location.reload();}}, 100);
    }