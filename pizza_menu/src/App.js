// import logo from "./logo.svg";
import "./App.css";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {color: 'red', fontSize: "48px", textTransform: "uppercase"};
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Domino's Pizza Menu</h1>
    </header>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 9;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if(!isOpen) return (
  //   <p>we're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
  // )

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours = {closeHour} openHours = {openHour}/>
      ) : (
        <p>
          we're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({closeHours, openHours}) {
  return (
    <div className="order">
      <p>we're open from {openHours} until {closeHours}:00. Come and visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>

      {numPizza > 0 ? (
        //  react fragment
        <>
          <p>Domino’s Pizza offers a variety of delicious options, including Veg Pizzas like Veg Extravaganza, Peppy Paneer, and Margherita, and Non-Veg Pizzas such as Chicken Dominator, Non-Veg Supreme, and Chicken Golden Delight. They also serve Burger Pizzas, Pizza Mania variants, and sides like Garlic Breadsticks, Stuffed Garlic Bread, Chicken Wings, and Chicken/Veg Parcels. To satisfy your sweet tooth, they have Choco Lava Cake, along with dips like Cheese Jalapeno and Cheesy Dip. Visit the official Domino’s website or your nearest outlet for the latest menu and pricing. 🍕✨</p>

        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      </>
      ) : (
        <p> we're still working on our menu please come later.</p>
      )}
      {/* <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        price={12}
        photoName="pizzas/funghi.jpg"
      />

      <Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={6}
        photoName="pizzas/focaccia.jpg"
      />

      <Pizza
        name= "Pizza Margherita"
        ingredients= "Tomato and mozarella"
        price= {10}
        photoName= "pizzas/margherita.jpg"
      />

      <Pizza
        name= "Pizza Spinaci"
        ingredients= "Tomato, mozarella, spinach, and ricotta cheese"
        price= {12}
        photoName= "pizzas/spinaci.jpg"
      />

      <Pizza
        name= "Pizza Salamino"
        ingredients= "Tomato, mozarella, and pepperoni"
        price= {15}
        photoName= "pizzas/salamino.jpg"
      />

      <Pizza
        name= "Pizza Prosciutto"
        ingredients= "Tomato, mozarella, ham, aragula, and burrata cheese"
        price= {18}
        photoName= "pizzas/prosciutto.jpg"
      /> */}
    </main>
  );
}

function Pizza({pizzaObj}) {
  console.log(pizzaObj);

  // if (props.pizzaObj.soldOut) return null;
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name}></img>
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
        
      </div>
    </li>
  );
}

export default App;
