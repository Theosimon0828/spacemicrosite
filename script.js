
// contact form

const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const nameError = document.querySelector("#nameError");
const subjectError = document.querySelector("#subjectError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");
const sum = document.querySelector(".sum");

try{

function validate(){
    event.preventDefault();

    var letters = /^[A-Za-z]+$/;
    if(name.value.trim().length >0&&name.value.trim().match(letters)){
        nameError.style.display = "none";
        var a = 1;
    }
    else{
        nameError.style.display = "block";
        var a = 0;
        
    }
    if(subject.value.trim().length >9){
        subjectError.style.display = "none";
        var b = 1;
    } 
    else{
        subjectError.style.display = "block";
       var b = 0;
    }
    var mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(email.value.trim().length >0&&email.value.trim().match(mail)){
        emailError.style.display = "none";   
        var c = 1;
    } 
    else{
        emailError.style.display = "block";
        var c = 0;
    }
        var add = /^[a-z0-9]+$/i;
    if(address.value.trim().length >25&&address.value.trim().match(add)){
        addressError.style.display = "none";
        var d = 1;
    } 
    else{
        addressError.style.display = "block";
        var d = 0;
        
    }
    const total = a+b+c+d;

    if (total === 4){
        sum.innerHTML = '<h1>"Validation Success"<h1>';
    }

    }


form.addEventListener("submit",validate);

}

catch(error) {
    // alert ("error found");
}


// gallery

const raket = document.querySelector(".one");

async function rockets()
{
    const url = "https://launchlibrary.net/1.3/rocket";
    const rak = await fetch(url); 
    console.log(rak);   

    const rake = await rak.json();
    console.log(rake);
    const rakket = rake.rockets;
    console.log(rakket.length);


    for(b=0;b<rakket.length;b++)
    {

        if(rakket[b].id!==171&&rakket[b].id!==3&&rakket[b].id!==4&&rakket[b].id!==9&&rakket[b].id!==10&&rakket[b].id!==12&&rakket[b].id!==14&&rakket[b].id!==15&&rakket[b].id!==16&&rakket[b].id!==17&&rakket[b].id!==18&&rakket[b].id!==22&&rakket[b].id!==24&&rakket[b].id!==32)

        {
            const html = `
            <div class="contain3">
        
            <div> NAME: ${rakket[b].name}</div><br>
            <img src= "${rakket[b].imageURL}" alt="rockets" width="300px" </img>
            </div>`
            raket.innerHTML += html; 
        }
    
        else
        {
            raket.innerHTML += "";
        }
        
    }
}

rockets();



// launches


const launcon = document.querySelector(".launch");

async function launches(){

    const url = "https://launchlibrary.net/1.3/launch";
    const res = await fetch(url);    
    const laun = await res.json();
    const launfinal = laun.launches;

    launcon.innerHTML="";
   for(c=0;c<launfinal.length;c++)
    {
        
        const html = `
        <div class="contain">
        <div> ID: <br> ${launfinal[c].id}</div><br>
        <div> NAME:<br> ${launfinal[c].name}</div><br>
        <div> DATE:<br> ${launfinal[c].net} </div>
        </div>
        `
        launcon.innerHTML += html;  
        
    }

}

launches();


// ISS location

const issmap = ("http://api.open-notify.org/iss-now.json");

const mymap = L.map('issmap').setView([0, 0], 1);

const attribution = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors';

const tileUrl ='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

const tiles = L.tileLayer(tileUrl,{attribution});

tiles.addTo(mymap);

async function getiss() {
    const response = await fetch(issmap);
    const results = await response.json();

    const obs = results.iss_position;
    const latitude = obs.latitude;
    const longitude = obs.longitude;

    L.marker([latitude, longitude]).addTo(mymap);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;

}

getiss();

// people in space function

const peopleinspace = ("http://api.open-notify.org/astros.json");

async function nopeople() {
    const container = document.querySelector(".people");

    const people = await fetch(peopleinspace);
    console.log(people);
    const results = await people.json();
    console.log(results);
    const final = results.people;
    console.log(results.number);

    for(i=0; i<final.length;i++){
            console.log(final[i].name)
        const html = `
        
        <div> ${final[i].name}</div>`
        container.innerHTML += html;
    }


}

nopeople();


