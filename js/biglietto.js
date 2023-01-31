//Chiedere numero km
const totKm = prompt("Quanti km è il tuo viaggio?")
console.log (totKm);
//Chiedere età passeggero
const age = prompt('Quanti anni hai ?')
console.log (age);
// definire costo per km e moltiplicarlo per i km che deve fare il passegero
const priceKm = 0.21
console.log (priceKm);
const priceTravel = priceKm * totKm
console.log(priceTravel)
//  applicare socnto in base all'età del passegero  20% per i minorenni 40% per gli over 65.
const discountSenior = ((priceTravel / 100) * 40 )
const discountYoungh = ((priceTravel / 100) * 20 )
const priceTotalSenior =( priceTravel - discountSenior)
const priceTotalYoungh= ( priceTravel - discountYoungh)
let priceFinal

if (age >= 65){ 
    priceFinal = priceTotalSenior.toFixed(2)
    console.log (priceFinal)
} else if (age < 18) {
    priceFinal = priceTotalYoungh.toFixed(2)
    console.log (priceFinal)
}else{
    priceFinal =  priceTravel.toFixed(2)
    console.log (priceFinal)
}
