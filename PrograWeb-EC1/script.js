let numTurns=0;
let turn="x";
let gameMatrix=[];
let message=document.getElementById("message");
let title=document.getElementById("title");
let victory="none";
function matrixGeneration(){
    for(let i=0;i<3;i++){
        let row=[];
        for(let j=0;j<3;j++){
            let tag=`${i}${j}`;
            document.getElementById(tag).innerHTML="?";
            document.getElementById(tag).className=("animate__animated animate__flipInY");
            row.push("?");
        }
        gameMatrix.push(row);
    }
    message.innerHTML=`<b>Turn: </b> ${turn} player`;
    gameInput();
}
function refresh(){
    for(let i=0;i<3;i++){
        let row=[];
        for(let j=0;j<3;j++){
            let tag=`${i}${j}`;
            document.getElementById(tag).innerHTML=gameMatrix[i][j];
        }
    }
}
function gameInput(){
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            let tag=`${i}${j}`;
            
            document.getElementById(tag).addEventListener("click",()=>{
                if(victory=="none" && gameMatrix[i][j]=="?"){
                if(numTurns<9){
                    gameMatrix[i][j]=turn;
                    gameDynamic(turn);
                    if(turn=="x"){
                        turn="o";
                    }else{
                        turn="x";
                    }
                    if(victory=="none"){
                        message.className="";
                        setTimeout(()=>{
                          message.className="animate__animated animate__bounceIn";
                        },10);
                        
                        message.innerHTML=`<b>Turn: </b> ${turn} player`;
                        refresh();
                    }else{
                      title.className="";
                        setTimeout(()=>{
                          title.className="mt-5 animate__animated animate__tada";
                        },10);
                        
                        title.innerHTML=`<b>Champion: </b> ${victory} player`;
                      message.className="";
                        setTimeout(()=>{
                          message.className="animate__animated animate__bounceIn";
                        },10);
                        
                        message.innerHTML="<b>No more turns :(</b>"
                        refresh();
                    }
                }
                numTurns++;
                if(numTurns>=9){
                    if(victory=="none"){
                      title.className="";
                        setTimeout(()=>{
                          title.className="mt-5 animate__animated animate__tada";
                        },10);
                        
                    title.innerHTML=`<b>It's a draw</b>`;
                    }else{
                      title.className="";
                        setTimeout(()=>{
                          title.className="mt-5 animate__animated animate__tada";
                        },10);
                        
                        title.innerHTML=`<b>Champion: </b> ${victory} player`;
                    }
                    message.innerHTML="<b>No more turns :(</b>"
                }
                }
            });
            
        }
    }
}
function gameDynamic(turn){
    for(let i=0;i<3;i++){
        if(gameMatrix[i][0]==turn && gameMatrix[i][1]==turn && gameMatrix[i][2]==turn){
            victory=turn;
            document.getElementById(`${i}0`).className="";
            document.getElementById(`${i}1`).className="";
            document.getElementById(`${i}2`).className="";
            document.getElementById(`${i}0`).style.backgroundColor="lightGreen";
            document.getElementById(`${i}1`).style.backgroundColor="lightGreen";
            document.getElementById(`${i}2`).style.backgroundColor="lightGreen";
            setTimeout(()=>{
              document.getElementById(`${i}0`).className="animate__animated animate__pulse";
            },0);
          setTimeout(()=>{
              document.getElementById(`${i}1`).className="animate__animated animate__pulse";
            },500);
          setTimeout(()=>{
              document.getElementById(`${i}2`).className="animate__animated animate__pulse";
            },1000);
            break;
        }
        if(gameMatrix[0][i]==turn && gameMatrix[1][i]==turn && gameMatrix[2][i]==turn){
            victory=turn;
            document.getElementById(`0${i}`).className="";
            document.getElementById(`1${i}`).className="";
            document.getElementById(`2${i}`).className="";
            document.getElementById(`0${i}`).style.backgroundColor="lightGreen";
            document.getElementById(`1${i}`).style.backgroundColor="lightGreen";
            document.getElementById(`2${i}`).style.backgroundColor="lightGreen";
            setTimeout(()=>{
              document.getElementById(`0${i}`).className="animate__animated animate__pulse";
            },0);
          setTimeout(()=>{
              document.getElementById(`1${i}`).className="animate__animated animate__pulse";
            },500);
          setTimeout(()=>{
              document.getElementById(`2${i}`).className="animate__animated animate__pulse";
            },1000);
            break;
        }
    }
    if(gameMatrix[0][0]==turn && gameMatrix[1][1]==turn && gameMatrix[2][2]==turn){
        victory=turn;
        document.getElementById(`00`).className="";
        document.getElementById(`11`).className="";
        document.getElementById(`22`).className="";
        document.getElementById(`00`).style.backgroundColor="lightGreen";
        document.getElementById(`11`).style.backgroundColor="lightGreen";
        document.getElementById(`22`).style.backgroundColor="lightGreen";
        setTimeout(()=>{
              document.getElementById(`00`).className="animate__animated animate__pulse";
            },0);
          setTimeout(()=>{
              document.getElementById(`11`).className="animate__animated animate__pulse";
            },500);
          setTimeout(()=>{
              document.getElementById(`22`).className="animate__animated animate__pulse";
            },1000);
    }
    if(gameMatrix[0][2]==turn && gameMatrix[1][1]==turn && gameMatrix[2][0]==turn){
        victory=turn;
        document.getElementById(`02`).className="";
        document.getElementById(`11`).className="";
        document.getElementById(`20`).className="";
        document.getElementById(`02`).style.backgroundColor="lightGreen";
        document.getElementById(`11`).style.backgroundColor="lightGreen";
        document.getElementById(`20`).style.backgroundColor="lightGreen";
        setTimeout(()=>{
              document.getElementById(`20`).className="animate__animated animate__pulse";
            },0);
          setTimeout(()=>{
              document.getElementById(`11`).className="animate__animated animate__pulse";
            },500);
          setTimeout(()=>{
              document.getElementById(`02`).className="animate__animated animate__pulse";
            },1000);
    }

}
matrixGeneration();