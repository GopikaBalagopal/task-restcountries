
    let div=document.createElement("div")
    div.setAttribute("class","container");
    let p=document.createElement("div");
    p.setAttribute("class","row");
    p.classList.add("row" ,"m-3")
    div.append(p);
    
    fetch("https://restcountries.com/v2/all").then((data)=> data.json()).then((response)=>{
        Countries(response);
    }).catch((error)=> console.log(error));
    
    function Countries(response){
        response.forEach(({name,alpha3Code,capital,region,flag,latlng})=>{
            let countrycode=alpha3Code;
            if(latlng == undefined){
                latlng=[0,0];
            }
            let lattitude=latlng[0];
            let longitude=latlng[1];
            p.innerHTML+=`<div class="col-lg-4 col-sm-12">
                <div class="card text-white bg-dark mb-3" style="max-width: 15rem;">
                <h4 class="card-header">${name}</h4>
                 <img src="${flag}" class="card-img-top">
                 <div class="card-body">
                 <h6>Capital: ${capital}</h6>
                 <h6>Region: ${region}</h6>
                 <h6>Country Code: ${countrycode}</h6>
                 <center><a href="https://api.openweathermap.org/data/2.5/weather?lat=${lattitude}&lon=${longitude}&appid={596b78e7e5a97f300caf7e95cf0e1b4f}" class="btn btn-light" target="_blank">Check for Weather</a> </center>
                 </div>
               </div>
                  </div>`
            document.body.append(p);
                   });
    }
  
    
  