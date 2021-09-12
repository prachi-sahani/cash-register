var notesAvailable = [2000,500,100,20,10,5,1];
var btnCheck = document.querySelector('#btn-check');
var btnNext = document.querySelector('#btn-next');
var inputTotalBill = document.querySelector('#input-total-bill') ;
var inputCashGiven = document.querySelector('#input-cash-received') 
var count = document.querySelectorAll('.count');
var messageDiv = document.querySelector('#message')
var divInputCashGiven=document.querySelector('#div-input-cash-received')
// inputTotalBill.addEventListener('change',enableCashGiven)

btnNext.addEventListener('click', validateBillAmount);

// function enableCashGiven(){
//     if(inputTotalBill >0){
//         inputCashGiven.disabled=false;
//     }
//     else{
//         inputCashGiven.disabled=true
//     }
// }

function validateBillAmount(){
    totalBill=Number(inputTotalBill.value);
    if(totalBill > 0){
         btnNext.style.display='none';
         divInputCashGiven.style.display='block';
         messageDiv.innerHTML="";


    }
    else{
        showMessage('Enter valid bill amount')
    }
}
btnCheck.addEventListener('click', validateTotalBillAndCashGiven);


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
    }

}

function showMessage(message){
    messageDiv.innerHTML = message
}


function calculateChange(totalBill,cashGiven){
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
