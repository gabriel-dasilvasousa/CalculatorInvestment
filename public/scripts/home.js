const valueSelector = document.querySelectorAll(".items-grid li")

for(values of valueSelector){
    values.addEventListener("click", handleItemSelected)   
}

const collectedYears = document.querySelector("input[name=years]")

function handleItemSelected(event){
    for(value of valueSelector){
        if(value.classList.contains("selected")){
            value.classList.toggle("selected")
        }
    }
    const itemLi = event.target
    itemLi.classList.toggle("selected")

    const itemId = itemLi.dataset.id
    // console.log(itemId)
    collectedYears.value = itemId
    
}

