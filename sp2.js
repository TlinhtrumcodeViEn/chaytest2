const sortVy = document.getElementById("sort");
let sortData = [];
if(sortVy){
    sortVy.onchange = event => {
        console.log(event.target.value);
    }
}