import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";
{
  /* Helpful to note and is require by the tools:
  - lowercase tags at a glance are easy to see what is a native DOM component
  - vs what is a user-created component, which is Capitalized. "Pizza" for example.
  */
}
const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="Mozzarella Cheese, Pepperoni" />
      <Pizza
        name="The Hawaiian Pizza"
        description="Sliced Ham, Pineapple, Mozzarella Cheese"
      />
      <Pizza
        name="The Big Meat Pizza"
        description="Bacon, Pepperoni, Italian Sausage, Chorizo Sausage"
      />
    </div>
  );

  // return React.createElement("div", {}, [
  //   React.createElement("h1", {}, "Padre Gino's"),
  //   React.createElement(Pizza, {
  //     name: "The Pepperoni Pizza",
  //     description: "some dope pizza yo",
  //   }),
  //   React.createElement(Pizza, {
  //     name: "Americano Pizza",
  //     description: "French fries and hot dogs, wtf Italy",
  //   }),
  //   React.createElement(Pizza, {
  //     name: "The Hawaiian",
  //     description: "pineapple and hame, wft America",
  //   }),
  //   React.createElement(Pizza, {
  //     name: "Chicken Pizza?",
  //     description: "chicken nuggies on your pizza, wtf UK",
  //   }),
  //   React.createElement(Pizza, {
  //     name: "Baked Potato Pizza",
  //     description: "unholy potato mash, wtf Minnesota",
  //   }),
  // ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
