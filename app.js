var notesAvailable = [2000,500,100,20,10,5,1];
var btnCheck = document.querySelector('#btn-check');
var inputTotalBill = document.querySelector('#input-total-bill') ;
var inputCashGiven = document.querySelector('#input-cash-given') 
var noteCount = {
    2000 : 0,
    500 : 0,
    100: 0,
    20: 0,
    10:0,
    5: 0,
    1: 0
}
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
    
    totalBill=Number(inputTotalBill.value);
    cashGiven = Number(inputCashGiven.value);

    
    if( totalBill>0 && cashGiven>0 && cashGiven>=totalBill){
        calculateChange(totalBill,cashGiven);
        
    }
    else{
        console.log('invalid input');
    }

}

function calculateChange(totalBill,cashGiven){
    var noteCount = {
        2000 : 0,
        500 : 0,
        100: 0,
        20: 0,
        10:0,
        5: 0,
        1: 0
    }
    if(cashGiven === totalBill){
        return noteCount;
    }
    else{
        console.log('calculating');
        var amountToBeReturned = cashGiven- totalBill;
        var remainingAmount = amountToBeReturned;
        notesAvailable.forEach((note)=>{
            // console.log(note);
            var numberOfNote = 0;
            if(remainingAmount >= note){
                numberOfNote = Math.trunc(remainingAmount / note);
                remainingAmount-= note*numberOfNote;
                noteCount[note]=numberOfNote;
                console.log(numberOfNote, remainingAmount);

            }
        })
        console.log(noteCount);
    }
    return noteCount;
}
