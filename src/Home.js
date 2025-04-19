export default function loadhome()
{
    const homediv=document.querySelector("#content");
    homediv.innerHTML=`<div class="welcome">
            <div class="writing">
                <h1>Welcome to Mario's</h1>
                <p>Your neighborhood pizza haven where tradition meets flavor! Known for our crispy crusts, rich tomato sauce, and generous toppings, we serve up handcrafted pizzas made fresh from scratch every day. Whether you're craving a classic Margherita, a hearty Pepperoni, or something custom-built to your taste, Mario’s delivers the perfect slice.</p>
            </div>
            <div class="photo"></div>
        </div>
        <div class="options">
            <div class="services"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>pizza</title><path d="M12,15A2,2 0 0,1 10,13C10,11.89 10.9,11 12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15M7,7C7,5.89 7.89,5 9,5A2,2 0 0,1 11,7A2,2 0 0,1 9,9C7.89,9 7,8.1 7,7M12,2C8.43,2 5.23,3.54 3,6L12,22L21,6C18.78,3.54 15.57,2 12,2Z" /></svg>
            <p>Homemade pizza</p></div>
            <div class="services"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>map-marker</title><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z" /></svg>
            <p>Amazing location</p></div>
            <div class="services"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>room-service</title><path d="M12,5A2,2 0 0,1 14,7C14,7.24 13.96,7.47 13.88,7.69C17.95,8.5 21,11.91 21,16H3C3,11.91 6.05,8.5 10.12,7.69C10.04,7.47 10,7.24 10,7A2,2 0 0,1 12,5M22,19H2V17H22V19Z" /></svg>
            <p>The best service</p></div>
        </div>`;
}
