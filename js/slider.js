const slider = document.querySelectorAll(".slider");

const switchToTheRight = document.querySelector(".switch_to_the_right");
const switchToTheLeft = document.querySelector(".switch_to_the_left");

switchToTheRight.addEventListener("click", function () {

  for (i = 0; i < slider.length; i++) {

    if (slider[i].classList.contains("on_the_main_screen")) {

      if (slider[++i]) {

        slider[--i].classList.remove("on_the_main_screen");
        slider[i].classList.add("drift_to_the_left");

        slider[++i].classList.remove("drift_to_the_right");
        slider[i].classList.add("on_the_main_screen");

        if(slider[++i]){
          switchToTheLeft.src = "img/Vector 15.png";
        }else{

          switchToTheRight.src = "img/Vector 16.png";

        }

        break;
      }

    }

  }

});

switchToTheLeft.addEventListener("click", function () {

  for (i = 0; i < slider.length; i++) {

    if (slider[i].classList.contains("on_the_main_screen")) {

      if (slider[--i]) {

        console.log(1);
        
        slider[++i].classList.remove("on_the_main_screen");
        slider[i].classList.add("drift_to_the_right");

        slider[--i].classList.remove("drift_to_the_left");
        slider[i].classList.add("on_the_main_screen");

        if(slider[--i]){
          switchToTheRight.src = "img/Vector 12.png";
        }else{

          switchToTheLeft.src = "img/Vector 13.png";

        }
        
        break;
      }

      ++i;

    }

  }

});
