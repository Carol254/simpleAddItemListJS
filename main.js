const list = document.querySelector("ul");
const inputVal = document.getElementById("item");
const  btn = document.querySelector('button');

btn.addEventListener("click",addItem);

function addItem(){
   
    let listItem = inputVal.value;
    console.log(listItem);
    inputVal == '';

    const wholeList = document.createElement('li');
    const spanCreated = document.createElement('span');
    const btnCreated = document.createElement('button');

    wholeList.appendChild(spanCreated);
    wholeList.appendChild(btnCreated);

    spanCreated.textContent = listItem;
    btnCreated.textContent = 'Delete';

    list.appendChild(wholeList);

    btnCreated.addEventListener('click', clearItemList);

    function clearItemList(){
        list.removeChild(wholeList);
    }
    inputVal.focus();
  
}
