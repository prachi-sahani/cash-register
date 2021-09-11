var notesAvailable = [2000,500,100,20,10,5,1];
var btnCheck = document.querySelector('#btn-check');
var inputTotalBill = document.querySelector('#input-total-bill') ;
var inputCashGiven = document.querySelector('#input-cash-given') 
var count = document.querySelectorAll('.count');
var messageDiv = document.querySelector('#message')
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
        messageDiv.innerHTML="";
        calculateChange(totalBill,cashGiven);
        
    }
    else{
        notesAvailable.forEach((note,index)=>{
            count[index].innerHTML=""
        })
        if(totalBill<=0){
            showMessage('Enter valid bill amount')
        }
        else if(cashGiven<totalBill){
            showMessage('Ask for more cash!')
        }
        console.log('invalid');
    }

}

function showMessage(message){
    messageDiv.innerHTML = message
}


function calculateChange(totalBill,cashGiven){
        console.log('calculating');
        var amountToBeReturned = cashGiven- totalBill;
        var remainingAmount = amountToBeReturned;
        notesAvailable.forEach((note,index)=>{
            var numberOfNote = 0;
            if(remainingAmount >= note){
                numberOfNote = Math.trunc(remainingAmount / note);
                remainingAmount-= note*numberOfNote;
            }
            count[index].innerHTML=numberOfNote
        })
}
