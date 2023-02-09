function greet() {
	console.log('Hello');
}

let logGreeting = (miParametro) => miParametro();

//logGreeting(greet);

let logGreeting2 = (miParametro) => miParametro();
logGreeting2(function() {
	console.log('Hello from a function created on the fly')
})

let color = "rojo", talla = "M", modelo = "Clasico";

console.log("Juan tiene una playera talla " + talla + " de color " + color + " modelo " + modelo);
console.log(`Juan tiene una playera talla ${talla} de color ${color} modelo ${modelo}`);
