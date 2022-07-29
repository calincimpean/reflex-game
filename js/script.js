var s=0;var mi=0;var clickedTime; var createdTime; var reactionTime; var b=0;var x,y,h,s,mi;
createdTime=Date.now();
color = ["rgb(124, 5, 156)","rgb(90, 173, 218)", "rgb(0, 68, 31)", "Red", "Orange", "Yellow ","Pink", "Orange", "Red","rgb(76,60,42)" ];
// document.querySelector(".maindiv").addEventListener("click", () =>clickedTime=Date.now())
document.getElementById("item").onclick=function(){clickedTime=Date.now();
    document.getElementById("start").style.display ="none"
    // var elapsedTime = 0;
    // elapsedTime = Date.now() - startTime();
    reactionTime=(clickedTime-createdTime)/1000;
    b++;
    createdTime=Date.now();
    var today = new Date();
    s=0;mi=0;
     
    mi=Date().getTime;
    s=Date().getSeconds;
    // document.getElementById('txt').innerHTML =  s + "." + mi;
    myFunction();
    randomPlacementColorsAndShape();

      
    
  }
  
  
    

function startTime() {
    var today = new Date();
    let s = today.getSeconds();
    let mi = today.getMilliseconds();
    s = checkTime(s);
    mi = checkTime(mi);
    document.getElementById('txt').innerHTML =  s + "." + mi;
    setTimeout(startTime, 1000);
  }
  
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  
    return i;
  }
  
  
  
  
//   function aa() {
//     // document.getElementsByClassName("maindiv").onclick=function()
//     document.querySelector(".maindiv").addEventListener("click", () =>clickedTime=Date.now())
//     reactionTime=(clickedTime-createdTime)/1000;
//     document.getElementById('txt').innerHTML ="---" + reactionTime;}

  
  function myFunction() {
    const node = document.createElement("div");
    const node2 = document.createElement("hr");
    const textnode = document.createTextNode("★ " + reactionTime);
    node.appendChild(textnode);
    document.getElementById("scoreboard").appendChild(node).style.color ="Yellow";
    // document.getElementById("scoreboard").appendChild(node2).style.border="1px solid rgb(124, 5, 156) ";
    }

function randomPlacementColorsAndShape(){
    x=Math.floor(Math.random() * 401);
    y=Math.floor(Math.random() * 401);
    document.getElementById("item").style.transform = 'translate('+ x +'%,'+ y+'%)';
    i=Math.floor(Math.random() * 10);
    document.getElementById("item").style.backgroundColor = color[i];
    h=Math.floor(Math.random() * 3);
    if(h==0)
    {
        document.getElementById("item").style.border ="2 px solid yellow"
        document.getElementById("item").style.width ="100px";
        document.getElementById("item").style.height ="100px";
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
        document.getElementById("item").style.width ="100px";
        document.getElementById("item").style.height ="100px";
        document.getElementById("item").style.borderLeft = "0";
        document.getElementById("item").style.borderRight = "0";
        document.getElementById("item").style.borderBottom = "0";
        
    }
    else
    {
        document.getElementById("item").style.borderRadius = "0%";
        document.getElementById("item").style.width =0;
        document.getElementById("item").style.height =0;
        document.getElementById("item").style.backgroundColor = "black";
        document.getElementById("item").style.borderLeft = "50px solid transparent";
        document.getElementById("item").style.borderRight = "50px solid transparent";
        document.getElementById("item").style.borderBottom = "100px solid " + color[i];
        

    }
}
btn.addEventListener("click", function onClick(event){
document.getElementById("scoreboard").style.display ="none"
});

// btn.addEventListener("click", function onClick(event){
// document.getElementById("scoreboard").style.display ="none" });

  