function generatePoem(event) {
    event.preventDefault();

    let poemElement =document.querySelector("#poem");

    new Typewriter('#poem', {
        strings:"La tombe dit à la rose " ,
        autoStart: true,
        delay: 1,
        cursor: "",
      });


    
}


let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);