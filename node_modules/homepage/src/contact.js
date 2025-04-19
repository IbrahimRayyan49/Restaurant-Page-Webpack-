export default function loadabout()
{
    const aboutdiv=document.querySelector("#content");
    aboutdiv.innerHTML=` <div class="hours"><h1>Hours</h1>
        <p>Sunday: 12:00 - 22:00</p>
        <p>Monday: 12:00 - 22:00</p>
        <p>Tuesday: 12:00 - 22:00</p>
        <p>Wednesday: 12:00 - 22:00</p>
        <p>Thursday: 12:00 - 23:30</p>
        <p>Friday: 12:00 - 23:30</p>
        <p>Saturday: 12:00 - 22:00</p></div>
        <div class="phone">
            <h1>Contact us</h1>
            <p>Phone: 123-456-7890</p>
        </div>`;
}