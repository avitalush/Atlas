export default class atlasClass {
    
    constructor(_parent, _item,  realName, doApi) {


    

this.parent=_parent;
        this.name = _item.name.common;
        this.flag = _item.flags.svg;
        this.pop = _item.population.toLocaleString();
        this.languages = Object.keys(_item.languages);
        this.capital = _item.capital;
      
        this.borders = _item.borders;
        this.latlng=_item.latlng;
        this.doApi = doApi;
        this.realName = realName;
    }

    showMore() {
        
        document.querySelector(this.parent).innerHTML=``;
        let div = document.createElement("div");
        div.className = "col-md-8 mx-auto p-4 border shadow overflow-hidden";
        div.style = "background-color:#b5b5b5d0"
        document.querySelector(this.parent).append(div);

        div.innerHTML = `
        <img src="${this.flag}" alt="${this.name}" class="w-50 float-end ms-4">
        <h2>${this.name}</h2>
        <div>POP: ${this.pop} </div>
        <div>Languages: ${this.languages}</div>
        <div>Capital: ${this.capital}</div>
        <div class="mt-3 "><strong>States with borders:</strong><br>
        <div class="borders_div "></div>
        </div>
        <iframe class="mt-4 col-12"  height="400" src="https://maps.google.com/maps?q=${this.latlng[0]},${this.latlng[1]}&z=7&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" ></iframe>
       `

        let borders_div = div.querySelector(".borders_div");
        this.borders.forEach(async (item) => {
            let a = document.createElement("a");
            a.style = "color: #335E7F; cursor: pointer;margin:0;heigth:inherit "
            a.innerHTML=`<p style="margin:0">${await this.realName(item)}</p>`
            borders_div.append(a);
            a.addEventListener("click", () => {
                this.doApi(item);
            })
        })



    }
    render(){
        const colEL = document.createElement("div");
        colEL.className = " col-12 col-md-6 col-lg-4 mt-3 ";
        const cardEl = document.createElement("div");  
        cardEl.className ="m-2  col-11 border border-2 shadow text-dark text-center mincard aos-init aos-animate" ;
        colEL.setAttribute("data-aos", "fade-down"); 
        colEL.setAttribute("data-aos-duration", "900");      
        cardEl.innerHTML = `
        <div class="img_container">
        <img src="${this.flag}" alt="${this.name}"class="mt-4 col-12 w-100 " >
        </div>
                  <h2>${this.name}</h2>
                  <p>POP: ${this.pop} </p>
                  <p>Languages: ${this.languages}</p>
                  <h4 class="  p-3 col-12 show" >Show more</h4>
        `;
        colEL.append(cardEl);
        document.querySelector(this.parent).append(colEL);
        let allShow=document.querySelectorAll(".show");
        allShow.forEach( (item) => {
            item.addEventListener("click", () => {
               this.showMore();
            })
        })
    }
}