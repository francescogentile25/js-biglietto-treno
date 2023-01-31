//Chiedere numero km
const totKm = prompt("Quanti km è il tuo viaggio?")
const cardKm = document.getElementById('cardKm')
cardKm.innerHTML = ( 'I tuoi km totali sono: ' + totKm)
console.log (totKm);
// chidere nome passegero
const name = prompt('Come ti chiami?')
const idPassenger = document.getElementById('idPassenger')
idPassenger.innerHTML = ('Benvenuto a bordo '+ name)
//Chiedere età passeggero
const age = prompt('Quanti anni hai ?')
console.log (age);
// definire costo per km e moltiplicarlo per i km che deve fare il passegero
const priceKm = 0.21
console.log (priceKm);
const priceTravel = priceKm * totKm
const cardPriceTravel = document.getElementById ('cardPriceTravel')
cardPriceTravel.innerHTML = ( 'Il costo del viaggio è: '+ priceTravel + '&euro;')
console.log(priceTravel)
//  applicare socnto in base all'età del passegero  20% per i minorenni 40% per gli over 65.
const discountSenior = ((priceTravel / 100) * 40 )


const discountYoungh = ((priceTravel / 100) * 20 )


const priceTotalSenior =( priceTravel - discountSenior)
const priceTotalYoungh= ( priceTravel - discountYoungh)
let priceFinal
//IF ELSE 
// if (age >= 65){ 
//     priceFinal = priceTotalSenior.toFixed(2)
//     const cardPriceDiscountS =document.getElementById ('cardPriceDiscountS')
//     cardPriceDiscountS.innerHTML= (  'Il tuo sconto è di ' + discountSenior.toFixed(2) + '&euro;' )
//     const cardPriceFinalS= document.getElementById ('cardPriceFinalS')
//     cardPriceFinalS.innerHTML = ('Il costo totale è di: '+priceTotalSenior.toFixed(2))
//     console.log (priceFinal)
// } else if (age < 18) {
//     priceFinal = priceTotalYoungh.toFixed(2)
//     const cardPriceDiscount =document.getElementById ('cardPriceDiscountY')
//     cardPriceDiscount.innerHTML= (  'Il tuo sconto è di ' + discountYoungh.toFixed(2) + '&euro;' )
//     const cardPriceFinalY= document.getElementById ('cardPriceFinalY')
//     cardPriceFinalY.innerHTML = ('Il costo totale è di: '+priceTotalYoungh.toFixed(2) + '&euro;')
//     console.log (priceFinal)
// }else{
//     priceFinal =  priceTravel.toFixed(2)
//     console.log (priceFinal)
// }


//SWITCH
switch (true) {
    case age >= 65:
        priceFinal = priceTotalSenior.toFixed(2);
        const cardPriceDiscountS = document.getElementById("cardPriceDiscountS");
        cardPriceDiscountS.innerHTML = "Il tuo sconto è di " + discountSenior.toFixed(2) + "&euro;";
        const cardPriceFinalS = document.getElementById("cardPriceFinalS");
        cardPriceFinalS.innerHTML = "Il costo totale è di: " + priceTotalSenior.toFixed(2);
        console.log(priceFinal);
        break;
    case age < 18:
        priceFinal = priceTotalYoungh.toFixed(2);
        const cardPriceDiscount = document.getElementById("cardPriceDiscountY");
        cardPriceDiscount.innerHTML = "Il tuo sconto è di " + discountYoungh.toFixed(2) + "&euro;";
        const cardPriceFinalY = document.getElementById("cardPriceFinalY");
        cardPriceFinalY.innerHTML = "Il costo totale è di: " + priceTotalYoungh.toFixed(2) + "&euro;";
        console.log(priceFinal);
        break;
    default:
        priceFinal = priceTravel.toFixed(2);
        console.log(priceFinal);
}
