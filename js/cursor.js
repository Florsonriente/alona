  // COOL CURSOR


  var cursor = document.getElementById("cursor");
  document.body.addEventListener("mousemove", function(e) {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
      cursor.style.border = '3px solid red'; // Change border to red
      cursor.style.background = 'white'; // 
  });
  
  /*
  
  document.body.addEventListener("mouseover", function(e) {
      cursor.style.border = '3px solid red'; // Change border to red
      cursor.style.background = 'white'; // 
  });*/
  