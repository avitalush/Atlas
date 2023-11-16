import atlasClass from './countryClass.js'
export const doApi = async (search= "all") => {
    let url =  (`https://restcountries.com/v3.1/name/${search}/?fields=name,flags,maps,population,languages,capital,borders,latlng`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        if(data.status != 404){
            createAllAtlas(data);

console.log(data);
        }
 

    }
    catch(err){
        console.log(err);
        alert("Sorry, the country was not found :(")
      }
}
export const doAllApi = async () => {
    let url =  (`https://restcountries.com/v3.1/alpha?codes=all,IL,USA,GH,FR,GH?fields=name,flags,maps,population,languages,capital,borders,latlng`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        if(data.status != 404){
              createAllAtlas(data);
console.log(data);
        }
 

    }
    catch(err){
        console.log(err);
        alert("Sorry, the country was not found :(")
      }
}
const createAtlas = (ar) => {
    document.querySelector("#content").innerHTML = "";
        const country = new atlasClass("#content", ar[0],  realName, doApi);
    country.showMore();
    
   
}
const createAllAtlas = (ar) => {
    document.querySelector("#content").innerHTML = "";
    ar.forEach( (item) => {
        const country = new atlasClass("#content", item,  realName, doApi);
    country.render();
    })
   
}
const realName = async (search) => {
    let url = `https://restcountries.com/v3.1/name/${search}`;
    let resp = await fetch(url);
    let data = await resp.json();
   
             let fullCountry = null;
             if(data.status != 404){
                fullCountry=await  (data[0].name.common)
            }
    return fullCountry!==null?fullCountry:'';
}
export const createAllSelects = async(allCountries_ar) => {
       
    let sorted_arr =[];
    let select = document.querySelector("#id_select");
    let url =  (`https://restcountries.com/v3.1/all`);
    try {
        let resp = await fetch(url);
        let data = await resp.json();
        if(data.status != 404){
          
             sorted_arr = data.sort((a, b) => a.name.common.localeCompare(b.name.common));

        }
 

    }
    catch(err){
        console.log(err);
      }


    sorted_arr.forEach(item => {
        select.innerHTML += `<option value="${item.name.common}">${item.name.common}</option>`;
    });
};
