function displayPoem(response) {
    console.log("poem generatated");
    new Typewriter('#poem', {
        strings: response.data.answer ,
        autoStart: true,
        delay: 1,
        cursor: "",
      });

}

function generatePoem(event) {
    event.preventDefault();

let instructionsInput = document.querySelector ("#user-instructions");
    let apiKey = "ao388bf0fd888baad0a8c60tb01ca234";
    let prompt = `User instructions:Generate a french poem ${instructionsInput.value}`;
    let context = "You are a romantic poem expert and love to write short poems.you mission is to generate a 4 line poem and seperate each line with <br/>. make sure you follow the user instructions,Do not include a title to the poem.sign the poem with shecodes AI inside a <strong> element at the end of the poem";
    let apiURL = ` https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;



    let poemElement = document.querySelector("#poem");
    poemElement.classList.remove("hidden");
 console.log ("Generating poem");  
 console.log ("Generating poem");  
    poemElement.innerHTML = `<div class="generating">Generating a French poem about ${instructionsInput.value}</div>`;
    
 console.log ("Generating poem");  
 console.log(`prompt: ${prompt}`);
 console.log(`context: ${context}`);

axios.get(apiURL).then(displayPoem);

    
}


let poemformElement = document.querySelector("#poem-generator-form");
poemformElement.addEventListener("submit", generatePoem);