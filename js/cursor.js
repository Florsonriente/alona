  // COOL CURSOR


  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.style.border = '0px solid red'; // Change border to red
    //   cursor.style.background = 'white'; // 
      cursor.style.transition = '0.15s';


  });
  
  /*
  
  document.body.addEventListener("mouseover", function(e) {
      cursor.style.border = '3px solid red'; // Change border to red
      cursor.style.background = 'white'; // 
  });*/
  