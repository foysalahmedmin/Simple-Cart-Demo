// Items quantity updates;
function updateQuantity(isIncrease , quantityFieldId){
    const quantityField = document.getElementById(quantityFieldId);
    const quantityFieldValueString = quantityField.value ;
    const quantityFieldValue = parseInt(quantityFieldValueString);

    let newQuantityValue ;
    if(isIncrease == true){
        newQuantityValue = quantityFieldValue + 1 ;
    }else{
        newQuantityValue = quantityFieldValue - 1 ;
        if(newQuantityValue < 0){
            return false ;
        }
    }
    quantityField.value = newQuantityValue ;

    return newQuantityValue ;
}
// set total price of single item ;
function totalPrice(quantityValue , price, totalPriceFieldId){
    const totalPrice = quantityValue * price ;
    const totalPriceField = document.getElementById(totalPriceFieldId);
    totalPriceField.innerText = totalPrice ;
}

// Phone calculation;
document.getElementById("phoneDecrease").onclick = function(){
    // for phone items
    const phonePrice = 1219 ;
    const phoneQuantity = updateQuantity(false , "phoneQuantity");
    totalPrice(phoneQuantity , phonePrice, "phoneTotalPrice");
    subtotal()
}
document.getElementById("phoneIncrease").onclick = function(){
    // for case items 
    const phonePrice = 1219 ;
    const phoneQuantity = updateQuantity(true , "phoneQuantity");
    totalPrice(phoneQuantity , phonePrice, "phoneTotalPrice");
    subtotal()
}

// case calculation;
document.getElementById("caseDecrease").onclick = function(){
    const casePrice = 1219 ;
    const caseQuantity = updateQuantity(false , "caseQuantity");
    totalPrice(caseQuantity , casePrice, "caseTotalPrice");
    subtotal()
}
document.getElementById("caseIncrease").onclick = function(){
    const casePrice = 1219 ;
    const caseQuantity = updateQuantity(true , "caseQuantity");
    totalPrice(caseQuantity , casePrice, "caseTotalPrice");
    subtotal()
}

function subtotal(){

    const phoneTotalPriceString = document.getElementById("phoneTotalPrice").innerText ;
    const caseTotalPriceString = document.getElementById("caseTotalPrice").innerText ;
    const phoneTotalPrice =  parseFloat(phoneTotalPriceString);
    const caseTotalPrice = parseFloat(caseTotalPriceString);
    // total Calculations ;
    const subtotal =  phoneTotalPrice + caseTotalPrice ;
    const tax = +(subtotal * .05).toFixed(2) ;
    const total = subtotal + tax ;
    // update vale set ;
    document.getElementById('SubTotal').innerText = subtotal ;
    document.getElementById('tax').innerText = tax ;
    document.getElementById('total').innerText = total ; 


}
// remove items
const removeClasses = document.getElementsByClassName("remove-item");
for(const item of removeClasses)
    item.onclick = function(event){
    event.target.parentNode.parentNode.parentNode.parentNode.removeChild(event.target.parentNode.parentNode.parentNode) ;
}