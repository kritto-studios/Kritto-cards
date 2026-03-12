// Card opening

const card = document.querySelector(".card-front");

card.addEventListener("click", function(){
    card.style.transform = "rotateY(-180deg)";
});


// Personalization from URL

const params = new URLSearchParams(window.location.search);

const to = params.get("to");
const from = params.get("from");

if(to){
    document.getElementById("toName").innerText = "Dear " + to + ",";
}

if(from){
    document.getElementById("fromName").innerText = from;
}
