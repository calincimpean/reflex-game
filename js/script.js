var clickedTime; var createdTime; var reactionTime; var x,y,h,s,mi,interval,ms;var i=0;
createdTime=Date.now();const watch = document.querySelector('#watch');let milliseconds = 0;let timer;
color = ["rgb(124, 5, 156)","rgb(90, 173, 218)", "rgb(0, 68, 31)", "Red", "Orange", "Yellow ","Pink", "Orange", "Red","rgb(76,60,42)" ];

document.getElementById("item").onclick=function(){clickedTime=Date.now();
    document.getElementById("start").style.display ="none"
    reactionTime=(clickedTime-createdTime)/1000;
    b++;
    createdTime=Date.now();
    var today = new Date();
    myFunction();
    randomPlacementColorsAndShape(); 
    resetWatch();
    startWatch();
  }

  
  function myFunction() {
    const node = document.createElement("div");
    const node2 = document.createElement("hr");
    const textnode = document.createTextNode("★ " + reactionTime);
    node.appendChild(textnode);
    document.getElementById("scoreboard").appendChild(node).style.textShadow ="none";
    }
    function startWatch() {
        timer = setInterval(()=>{ 
          milliseconds += 10;
          let dateTimer = new Date(milliseconds);
          watch.innerHTML = 
            ('0'+dateTimer.getUTCSeconds()).slice(-2) + ':' +
            ('0'+dateTimer.getUTCMilliseconds()).slice(-3,-1);
        },10);
      };
      function resetWatch() {
        watch.classList.remove('paused');
        clearInterval(timer);
        milliseconds = 0;
        watch.innerHTML= '00:00';
      };
      

function randomPlacementColorsAndShape(){
    x=Math.floor(Math.random() * 20);
    y=Math.floor(Math.random() * 20);
    document.getElementById("item").style.transform = 'translate('+ x +'vw,'+ y+'vw)';
    i=Math.floor(Math.random() * 10);
    document.getElementById("item").style.backgroundColor = color[i];
    h=Math.floor(Math.random() * 3);
    if(h==0)
    {
        
        document.getElementById("item").style.width ="7vw";
        document.getElementById("item").style.height ="7vw";
        document.getElementById("item").style.borderRadius = "100%";
        document.getElementById("item").style.borderLeft = "0";
        document.getElementById("item").style.borderRight = "0";
        document.getElementById("item").style.borderBottom = "0";
        document.getElementById("item").style.backgroundColor = color[i];
        
    }
    
    else if(h==1)
    {
        document.getElementById("item").style.backgroundColor = color[i];
        document.getElementById("item").style.borderRadius = "0%";
        document.getElementById("item").style.width ="7vw";
        document.getElementById("item").style.height ="7vw";
        document.getElementById("item").style.borderLeft = "0";
        document.getElementById("item").style.borderRight = "0";
        document.getElementById("item").style.borderBottom = "0";
        
    }
    else
    {
        document.getElementById("item").style.borderRadius = "0%";
        document.getElementById("item").style.width =0;
        document.getElementById("item").style.height =0;
        document.getElementById("item").style.backgroundColor = "#0f0a1e";
        document.getElementById("item").style.borderLeft = "3.5vw solid transparent";
        document.getElementById("item").style.borderRight = "3.5vw solid transparent";
        document.getElementById("item").style.borderBottom = "7vw solid " + color[i];
        

    }
}
btn.addEventListener("click", function onClick(event){
document.getElementById("scoreboard").style.display ="none";
document.getElementById("btn2").style.display ="block";
});

btn2.addEventListener("click", function onClick(event){
    document.getElementById("scoreboard").style.display ="block";
    document.getElementById("btn2").style.display ="none";
    });


  