const starsEl = document.querySelectorAll(".fa-star");
const emojisEl = document.querySelectorAll(".far");
const colorsAr = ["Red", "orange", "blue", "lightgreen", "green"];
const h4El = document.querySelector("h4");
const btnEl = document.querySelector("button");

updateRating(0);


starsEl.forEach((starsEl, index)=>{
    starsEl.addEventListener("click", ()=>{
        updateRating(index);
    });
});
function updateRating (index){
    starsEl.forEach((starsEl, idx)=>{
        if(idx < index + 1){
            starsEl.classList.add("active");
        }else{
            starsEl.classList.remove("active")
        }
    });
    emojisEl.forEach(emojiEl=>{
        emojiEl.style.transform = `translateX(-${index * 56}px)`;
        emojiEl.style.color = colorsAr[index];
    });
}

btnEl.addEventListener("click", ()=>{
    thanks();
})

function thanks (){
    h4El.classList.add("active");
    btnEl.classList.add("active");
}
