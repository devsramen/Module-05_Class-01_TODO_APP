var pendingListItemHolder = document.querySelector("#pendingListItemHolder");
var completedListItemHolder = document.querySelector("#completedListItemHolder");
var addNewItemBtn = document.querySelector("#addNewItemBtn");
var newItemText = document.querySelector("#newItemText");
var checkedBox = document.querySelector("#checkedBox");
var deleteIcon = document.querySelector("#deleteIcon");

// function te(){
//     console.log(newItemText);
// }
// te();
addNewItemBtn.addEventListener("click", function(){
    var newPendingItem = document.createElement("li");
    newPendingItem.classList.add("statusPending");
    newPendingItem.innerHTML = `<div class="d-flex justify-content-between align-items-center">
    <div>
    <i id="statusDone" class="fa-solid fa-square-check"></i>
        ${newItemText.value}
    </div>
    <i id="deleteIcon" class="fa-solid fa-trash-can"></i>
</div>`
    pendingListItemHolder.appendChild(newPendingItem);
});
addNewItemBtn.addEventListener("click", function(){
    var newPendingItem = document.createElement("li");
    newPendingItem.classList.add("statusWaitting");
    newPendingItem.innerText= newItemText.value;
    completedListItemHolder.appendChild(newPendingItem);
    newItemText.value = "";
});


    

