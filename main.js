import { doApi,doAllApi ,createAllSelects} from "./functions.js";
const searchInput = document.getElementById("id_input");
const contentHolder = document.getElementById("content");
let selectList = document.querySelector("#id_select");

const init = () => {
    doAllApi();
    createAllSelects();

document.querySelector("#ISRAEL").addEventListener("click", () =>{
    doApi("ISRAEL");
})
document.querySelector("#USA").addEventListener("click", () =>{
    doApi("USA");
})
document.querySelector("#UK").addEventListener("click", () =>{
    doApi("UK");
})
document.querySelector("#FRANCE").addEventListener("click", () =>{
    doApi("FRANCE");
})
document.querySelector("#THAILAND").addEventListener("click", () =>{
    doApi("THAILAND");
})

selectList?.addEventListener("change", () => { 
    let selectVal = document.querySelector("#id_select").value;
    doApi(selectVal);
})   
}
const searchByCountry = (event) => {
    event.preventDefault();
    const term = searchInput.value;
    debugger
    doApi(term);

}

init();
searchForm.addEventListener("submit", searchByCountry);
