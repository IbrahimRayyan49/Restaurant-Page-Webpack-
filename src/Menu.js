export default function Menu()
{
    const content_div=document.querySelector("#content");
    content_div.innerHTML=`<div class="periods" style="margin-top: 80px;">
            <div class="title"><h1>Lunch</h1>
            <p>11:30am - 4:00pm</p></div>
            <div class="menu">
                <div class="menu-items"><h1>Margarita</h1>
                <p>cheese, basil, love</p></div>
                <div class="menu-items"><h1>Lasagna</h1>
                <p>Ricotta cheese, Marinara sauce, 
                    Ground beef, Parmesan
                </p></div>
                <div class="menu-items"><h1>Caprese Salad</h1>
                <p>Tomatoes, Mozzarella, Olive oil, Basil</p></div>
            </div>
        </div>
        <div class="periods">
            <div class="title"><h1>Dinner</h1>
            <p>4:00pm - close</p></div>
            <div class="menu">
                <div class="menu-items"><h1>Margarita</h1>
                    <p>cheese, basil, love</p></div>
                <div class="menu-items"><h1>Fettuccine Alfredo</h1>
                <p>Cream, Parmesan</p></div>
                <div class="menu-items"><h1>Antipasto Platter</h1>
                <p>Prosciutto, Mozzarella balls, Marinated olives, Artichokes</p></div>
            </div>
            </div>
            
        </div>`;
}