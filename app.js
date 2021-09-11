var notes = [2000,500,100,20,10,5,1];
var btnCheck = document.querySelector('#btn-check');
var inputTotalBill = document.querySelector('#input-total-bill') ;
var inputCashGiven = document.querySelector('#input-cash-given') 
console.log(btnCheck);
// inputTotalBill.addEventListener('change',enableCashGiven)

btnCheck.addEventListener('click', validateTotalBillAndCashGiven);

// function enableCashGiven(){
//     if(inputTotalBill >0){
//         inputCashGiven.disabled=false;
//     }
//     else{
//         inputCashGiven.disabled=true
//     }
// }

function validateTotalBillAndCashGiven(){
    // if(inputTotalBill <= 0 && inputCashGiven<=0 || inputTotalBill > inputCashGiven){
    //     console.log('invalid input');
    // }
    // else if(inputCashGiven === inputTotalBill){
    //     console.log('you need not return anything')
    // }
    // else{
    //     console.log('calculating');
    // }
    if(inputTotalBill.value >0 && inputCashGiven.value>0 && inputCashGiven.value >=inputTotalBill.value){
        if(inputCashGiven.value === inputTotalBill.value){
            console.log('nothing to return');
        }
        else{
            console.log('calculating');
        }
    }
    else{
    console.log('invalid input');
    }

}
