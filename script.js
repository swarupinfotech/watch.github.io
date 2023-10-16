// Created by Swarup Mahato⚡⚡ 



var ID = document.getElementById.bind(document);


this.onload = function()
{
  var sec, min, hr, clock, secondHand, minuteHand, hourHand, secDeg, minDeg, hrDeg, radius, start, i, spanDeg, top, right, clockIsPaused;
  
  
  
  //loading clock ----->
  
  function loadClock()
  {
    sec = new Date().getSeconds() + 2;
    min = new Date().getMinutes();
    hr = new Date().getHours();
    clock = ID("clock-wrapper");
    secondHand = ID("clock-second");
    minuteHand = ID("clock-minute");
    hourHand = ID("clock-hour");
    
    secDeg = (sec * 6);    
    minDeg = (min + (sec / 60)) * 6; 
    hrDeg = ((hr - 12) * 30) + ((min / 60) * 30);
  }
  document.addEventListener("visibilitychange", loadClock);
  loadClock();
  
  radius = ((clock.offsetWidth - 20) / 2);
  
  
  
  //starting clock ----->
  
  function clockFunc()
  {
    secondHand.style.WebkitTransform = "rotate(" + secDeg + "deg)";
    minuteHand.style.WebkitTransform = "rotate(" + minDeg + "deg)";
    hourHand.style.WebkitTransform = "rotate(" + hrDeg + "deg)";
    secondHand.style.transform = "rotate(" + secDeg + "deg)";
    minuteHand.style.transform = "rotate(" + minDeg + "deg)";
    hourHand.style.transform = "rotate(" + hrDeg + "deg)";
   
    secDeg += 6;    minDeg += 0.1;    hrDeg += 0.1/60;
    hr = new Date().getHours();
    if (hr > 11)
      ID("am-pm").innerHTML = "PM";
    else
      ID("am-pm").innerHTML = "AM";
  }
  function startClock()
  { start = setInterval(clockFunc, 1000); }
  startClock();

 

  //creating hours strokes (with the <span> tag) ----->
  
  for (i = 0, spanDeg = 0; i < 12; i++, spanDeg += 30)
  {
    top = (Math.cos(spanDeg * Math.PI/180) * (radius - 10)).toFixed(6);
    right = (Math.sin(spanDeg * Math.PI/180) * (radius - 10)).toFixed(6);
    
    clock.insertAdjacentHTML("beforeend", "<span class='digits d" + i + "'></span>");
    clock.getElementsByClassName("d"+i)[0].style.WebkitTransform = "rotate(" + spanDeg + "deg)";
    clock.getElementsByClassName("d"+i)[0].style.transform = "rotate(" + spanDeg + "deg)";
    clock.getElementsByClassName("d"+i)[0].style.top = ((radius - 9.5) - top) + "px";
    clock.getElementsByClassName("d"+i)[0].style.right = ((radius - 1.5) - right) + "px";
  }
  
  
  
  //creating minutes strokes (with the <span> tag) ----->
  
  for (i = 0, spanDeg = 0; i < 60; i++, spanDeg += 6)
  {
    if (spanDeg % 30 !== 0)
    {
      top = (Math.cos(spanDeg * Math.PI/180) * (radius - 10)).toFixed(6);
      right = (Math.sin(spanDeg * Math.PI/180) * (radius - 10)).toFixed(6);
      
      clock.insertAdjacentHTML("beforeend", "<span class='mini-digits md" + i + "'></span>");
      clock.getElementsByClassName("md"+i)[0].style.WebkitTransform = "rotate(" + spanDeg + "deg)";
      clock.getElementsByClassName("md"+i)[0].style.transform = "rotate(" + spanDeg + "deg)";
      clock.getElementsByClassName("md"+i)[0].style.top = ((radius - 4) - top) + "px";
      clock.getElementsByClassName("md"+i)[0].style.right = ((radius - 0.5) - right) + "px";
    }
    else continue;
  }
  
  
  
  //freeze/unfreeze time ----->
  
  ID("my-name").onclick = function()
  {
    if (clockIsPaused)
      clockIsPaused = false,
      loadClock(),
      setTimeout(startClock, 0);
    else
      clockIsPaused = true,
      clearInterval(start);
  };
};




//END ----->
 
 
 
 





alert("Hi, there! :) \n\nClick on my name to freeze time. ;)");


 
 
 
 
 
 
 
 





