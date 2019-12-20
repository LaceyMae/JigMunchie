var good;

var UpPress = document.getElementById("UpBtn");
var DownPress = document.getElementById("DownBtn");
var LeftPress = document.getElementById("LeftBtn");
var RightPress = document.getElementById("RightBtn");

var arrowBox = document.getElementById("arrowContainer");

var arrows = [UpPress, DownPress, LeftPress, RightPress];


 UpPress.classList.add('hide');
 DownPress.classList.add('hide');
 LeftPress.classList.add('hide');
RightPress.classList.add('hide');


let random = Math.floor(Math.random()*arrows.length)
console.log(arrows[random]);

var randArrows = (arrows[random]);
startGame();

function startGame(){
    if (randArrows == DownPress){
        DownPress.classList.remove('hide');
    }
        else if (randArrows == UpPress){
            UpPress.classList.remove('hide');
        }
            else if (randArrows == LeftPress){
                LeftPress.classList.remove('hide');
            }
                else if (randArrows == RightPress){
                    RightPress.classList.remove('hide');
    }

 }

 document.onkeydown = function(e) {
    if(e.keyCode == 38 && randArrows == UpPress){
        alert("yay"); }
        
        else if(e.keyCode != 38 && randArrows == UpPress){
          alert("boo");
          }  
    }

    document.onkeydown = function(e) {
        if(e.keyCode == 40 && randArrows == DownPress){
            alert("yay"); }
            
            else if(e.keyCode != 40 && randArrows == DownPress){
              alert("boo");
              }  
        }

document.onkeydown = function(e) {
    if(e.keyCode == 37 && randArrows == LeftPress){
        alert("yay"); }
        
        else if(e.keyCode != 37 && randArrows == LeftPress){
          alert("boo");
          }  
    }

    document.onkeydown = function(e) {
        if(e.keyCode == 39 && randArrows == RightPress){
            alert("yay"); }
            
            else if(e.keyCode != 39 && randArrows == RightPress){
              alert("boo");
              }  
        }

//  document.onkeydown = function(e) {
//     switch(e.keyCode){
//     case Up:
//     if(e.keyCode == 38 && randArrows == UpPress){
//         alert("yay"); }
        
//         else if(e.keyCode != 38 && randArrows == UpPress){
//           alert("boo");
//           }  break;
    
    

//     case 40:
//         if(e.keyCode == 40 && randArrows == DownPress){
//             alert("yay"); }
            
//             else if(e.keyCode != 40 && randArrows == DownPress){
//               alert("boo");
//               }  
//         break;

// case 37:
//     if(e.keyCode == 37 && randArrows == LeftPress){
//         alert("yay"); }
        
//         else if(e.keyCode != 37 && randArrows == LeftPress){
//           alert("boo");
//           }  
//     break;

//   case 39:
//         if(e.keyCode == 39 && randArrows == RightPress){
//             alert("yay"); }
            
//             else if(e.keyCode != 39 && randArrows == RightPress){
//               alert("boo");
//               }  
//     break;
// };}


