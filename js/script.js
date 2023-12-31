var pendingListItemHolder = document.querySelector("#pendingListItemHolder");
var completedListItemHolder = document.querySelector("#completedListItemHolder");
var addNewItemBtn = document.querySelector("#addNewItemBtn");
var newItemText = document.querySelector("#newItemText");
var checkedBox = document.querySelector("#checkedBox");
var deleteIcon = document.querySelector("#deleteIcon");

var statusDone = document.querySelector("#statusDone");
var statusPending = document.querySelector("#statusPending");

addNewItemBtn.addEventListener("click", function(){
    if(newItemText.value === ''){
        alert("You must write somethng!");
    }else{
        var newPendingItem = document.createElement("li");
        newPendingItem.classList.add("statusPending");
        newPendingItem.innerHTML = `<div class="d-flex justify-content-between align-items-center">
        <div>
        <i id="statusDone" class="fa-regular fa-circle"></i>
            ${newItemText.value}
        </div>
        <i id="deleteIcon" class="fa-solid fa-trash-can"></i>
    </div>`
        pendingListItemHolder.appendChild(newPendingItem);        
    }
});
// addNewItemBtn.addEventListener("click", function(){
//     var newPendingItem = document.createElement("li");
//     newPendingItem.classList.add("statusWaitting");
//     newPendingItem.innerText= newItemText.value;
//     completedListItemHolder.appendChild(newPendingItem);
//     newItemText.value = "";
// });


// statusDone.addEventListener("click", function(){
//     console.log("statusDone");
// })

statusDone.addEventListener("click", function(e){
    let tag = e.target.tagName;
    console.log(tag);
});




// let ulMain = document.querySelector(".ulMain");
// let liItem = document.querySelector(".liItem");



// liItem.addEventListener("click", function(e){
//     let tag = e.target.tagName;
//     console.log(tag);
// });



