import pizzaimg from "./Images/pizza.png";
export default function loadabout()
{
const homediv=document.querySelector("#content");
homediv.innerHTML=`
<img src="${pizzaimg}" id="pizzaimg"><div class="about-title"><h1>For the love of the pizza</h1>
        <p>At Mario’s, pizza isn’t just food — it’s a tradition.
            Hand-kneaded dough, slow-simmered sauce, and fresh ingredients come together in every homemade slice.
            From our family kitchen to your table.<br> welcome home.</p></div>`;

          
}