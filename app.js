const reasonInput = document.getElementById('input-reason');
const amountInput = document.getElementById('input-amount');
const cancelButton = document.getElementById('btn-cancel');
const confirmBtn = document.getElementById('btn-confirm');
const expensesList = document.getElementById('expenses-list');
const expensesTotal = document.getElementById('total-expenses');
let total = 0;


confirmBtn.addEventListener('click',()=>{
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;
    // we can add normal validation
    console.log(enteredReason+' '+enteredAmount);
    expensesList.appendChild(createDynamicList(enteredReason,enteredAmount));
    updateTotalExpenses(enteredAmount);
});

function updateTotalExpenses(enteredAmount){
    total = total + parseInt(enteredAmount);
    expensesTotal.innerText = total;

}

function clearData(){
    presentAlert();
    expensesList.innerHTML='';
    expensesTotal.innerHTML='';
}

cancelButton.addEventListener('click',()=>{
    clearData();
})

function createDynamicList(enteredReason,enteredAmount){
    var node = document.createElement("ion-item");
    var childnode1 =document.createElement("ion-label");  
    childnode1.innerText = enteredReason;  
    var childnode2 =document.createElement("ion-label");  
    childnode2.innerText = enteredAmount;   
    node.appendChild(childnode1);
    node.appendChild(childnode2);       
    return node;                      

// return `<ion-item>
//     <ion-label>${enteredReason}</ion-label>
//     <ion-label>${enteredAmount}</ion-label>
//   </ion-item>`
}