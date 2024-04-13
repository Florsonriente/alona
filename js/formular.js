let energyConsumptionSummary = function(energyConsumers, energyConsumptionValue){
    let score = 0;

    if (energyConsumers <=1) {
        if (energyConsumptionValue <=1000) {score = 100;}
    else if (energyConsumptionValue <=1500) {score = 50;}
    else if (energyConsumptionValue >=1501) {score = 0;}
     }

     if (energyConsumers <=2) {
        if (energyConsumptionValue <=1000) {score = 100;}
    else if (energyConsumptionValue <=1500) {score = 50;}
    else if (energyConsumptionValue >=1501) {score = 0;}
     }
    

if (energyConsumers <=3) {
    if (energyConsumptionValue <=1500) {score = 100;}
else if (energyConsumptionValue <=3000) {score = 50;}
else if (energyConsumptionValue >=3001) {score = 0;}
 }

  return score;
  };



  let energyConsumptionSummary = function(energyConsumers, energyConsumptionValue){
    let score = 0;
  if (energyConsumptionValue <=1500 && energyConsumers >=3 ){
  score = 100; 
  }else if (energyConsumptionValue <=3000  && energyConsumers >=3 ){
  score = 50; 
  } else if (energyConsumptionValue <=5000 && energyConsumers >=3 ){
  score = 0; 
  } 
  else if (energyConsumptionValue <=3000 && energyConsumers ===2 ){
  score = 0; 
  }else if (energyConsumptionValue <=1500 && energyConsumers ===2 ){
  score = 50; 
  } else if (energyConsumptionValue <=1000 && energyConsumers ===2 ){
  score = 100; 
  }
  else if (energyConsumptionValue <=2000 && energyConsumers ===1 ){
  score = 0; 
  }else if (energyConsumptionValue <=1500 && energyConsumers ===1 ){
  score = 50; 
  } else if (energyConsumptionValue <=1000 && energyConsumers ===1 ){
  score = 100; 
  } 
  return score;
  };


  $(document).on('scroll', function(){
    // Adjust speed for .block2
    $('.block2').css({
        "left": Math.max(-(0.9*window.scrollY)) + "px",
        "transition": "left 1.2s ease"
    });

    // Adjust speed for .hero
    $('.hero').css({
        "left": Math.max(-(0.45*window.scrollY)) + "px",
       // "width":"100vw",
       "opacity":"0%",
        "transition": "left 1.2s ease"

    });

    $(".hero p").css({
      "left": "10%",
      "transition": "left 1.2s ease",
      "opacity": "100%",
    });
    $(" .scrollerpics").css({
      "transform": "scale(1.3)",
      "transition": " 1.2s ease"
       });
    $(".subblockpics:nth-child(2").css({
      "opacity": "100%",
       "transition": " 1.2s ease",
      "transition-delay": "0.5s ease",
      "margin-left":"-30vw",
    });
    $(".subblockpics:nth-child(3").css({
      "opacity": "100%",
      "margin-left":"-20vw",
    
      "transition": " 1.2s ease",
      "transition-delay": "0.5s ease"
      
    });/**/
 
});
