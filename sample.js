
const raket = document.querySelector(".one");

async function rockets(){

    const url = "https://launchlibrary.net/1.3/rocket";
    const rak = await fetch(url); 
    console.log(rak);   

    const rake = await rak.json();
    console.log(rake);
    const rakket = rake.rockets;
    console.log(rakket.length);


    for(b=0;b<rakket.length;b++){

        if(rakket[b].id!==171&&rakket[b].id!==3&&rakket[b].id!==4&&rakket[b].id!==9&&rakket[b].id!==10&&rakket[b].id!==12&&rakket[b].id!==14&&rakket[b].id!==15&&rakket[b].id!==16&&rakket[b].id!==17&&rakket[b].id!==18&&rakket[b].id!==22&&rakket[b].id!==24&&rakket[b].id!==32)
        {

        const html = `
        <div class="contain3">
        
        <div> NAME: ${rakket[b].name}</div><br>
        <img src= "${rakket[b].imageURL}" alt="rockets" width="300px" </img>
        </div>
        `
        raket.innerHTML += html; 
        }
    
        else{
            raket.innerHTML += "";
        }
        
    }
}

rockets();