class ChartType {
  constructor({ datasetName = '', divID = ''}) {
    this.datasetName = datasetName;
    this.divID = divID;
  }

  prepare() {
    console.log("Preparing " + this.datasetName + this.divID);
    console.log("Tossing dough...");
    console.log("Adding sauce");
    console.log("Adding toppings:");

    // for (let topping of this.toppings) {
    //   console.log(topping + "  ");
    //}
  }

  bake() {
    console.log("Bake for 25 minutes at 350");
  }

  cut() {
    console.log("Cutting the pizza into diagonal slices");
  }

  box() {
    console.log("Place pizza in official PizzaStore box");
  }

  getName() {
    return this.name;
  }
}

//export default Pizza;
