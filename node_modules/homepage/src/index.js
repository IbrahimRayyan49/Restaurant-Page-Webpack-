import loadhome from "./Home.js";
import loadmenu from "./Menu.js";
import loadabout from "./about.js";
import loadcontact from "./contact.js";
import "./styles.css";

function applyTransition(callback) {
    const contentDiv = document.querySelector("#content");

    // Add the fade-out class
    contentDiv.classList.add("fade-out");

    // Wait for the transition to complete, then load new content
    setTimeout(() => {
        callback(); // Load the new content (e.g., home or menu)
        contentDiv.classList.remove("fade-out");
        contentDiv.classList.add("fade-in"); // Add fade-in effect

        // Remove the fade-in class after the animation
        setTimeout(() => {
            contentDiv.classList.remove("fade-in");
        }, 500); // Match the duration of the fade-in effect
    }, 500); // Match the duration of the fade-out effect
}
const menuButton = document.querySelector("#menu");
const homeButton = document.querySelector("#Mario");
const aboutButton = document.querySelector("#about");
const contactButton = document.querySelector("#contact");
menuButton.addEventListener("click",()=> applyTransition(loadmenu));
homeButton.addEventListener("click", ()=>applyTransition(loadhome));
aboutButton.addEventListener("click", ()=>applyTransition(loadabout));
contactButton.addEventListener("click", ()=>applyTransition(loadcontact));
applyTransition(loadhome); // Load the home page by default