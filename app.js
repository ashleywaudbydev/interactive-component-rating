    //----------VARIABLES----------\\

const submitButton = document.querySelector(".btn");
const thankYouSection = document.querySelector(".container-two");
const ratingSection = document.querySelector(".container");
const selectionText = document.querySelector(".selection");
const buttons = document.querySelectorAll("button.number");
const body = document.querySelector("body");


    //----------BUTTON FUNCTION THAT SUBMITS THE RATING ----------\\
submitButton.addEventListener('click',() => {
    thankYouSection.classList.remove("hide");
    ratingSection.classList.add("hide");

    //----------FUNCTION THAT SETS THE TIMER AND ALSO REFRESHES THE PAGE ----------\\
    setTimeout(timer,1000)
    function timer(){
        thankYouSection.classList.add("hide");
        ratingSection.classList.remove("hide");
       
        window.location = window.location.href;
    }
    setInterval('autoRefresh()');

    //----------IF STATEMENT THAT CREATES THE ERROR MESSAGE AND TELLS THE CODE TO OPEN THE ERROR MESSAGE BASED O A CONDITION----------\\
    if(selectionText.innerText === ``){
        thankYouSection.classList.add("hide");
        ratingSection.classList.add("hide");
        
    //----------CREATE THE ERROR MESSAGE ELEMENT----------//
        let errorMessage = document.createElement("div");
        
        let text = document.createTextNode("ERROR MESSAGE PLEASE CHOOSE A VALID OPTION!");
        errorMessage.setAttribute("id", "error");
    
    //----------APPEND THE ELEMTS TO THE PAGE ----------\\
        errorMessage.appendChild(text);
        
        body.appendChild(errorMessage);
    }
});
//----------A FOR EACH LOOP THAT TELLS THE CODE TO RETURN A STRING WITH THE TARGET VALUE INSIDE IT----------\\
buttons.forEach(button => {
    button.addEventListener("click", e => {
        let selection = e.target.value;
        return selectionText.innerText = `You selected ${selection} out of 5`
    });
});








