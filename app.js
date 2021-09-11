var notesAvailable = [2000,500,100,20,10,5,1];
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
    totalBill=Number(inputTotalBill.value);
    cashGiven = Number(inputCashGiven.value)
    if( totalBill>0 && cashGiven>0 && cashGiven>=totalBill){
        if(cashGiven === totalBill){
            console.log('nothing to return');
        }
        else{
            console.log('calculating');
            var amountToBeReturned = inputCashGiven.value- inputTotalBill.value;
            console.log(amountToBeReturned);
        }
    }
    else{
        console.log((inputCashGiven.value),' ', inputTotalBill.value,' invalid input',inputCashGiven.value>=inputTotalBill.value);
    }

}
