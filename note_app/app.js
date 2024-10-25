const btn = document.querySelector("button");

const notesCon = document.querySelector(".notes-container")

const notes = document.querySelectorAll(".input-box")

function showIteam(){
    notesCon.innerHTML = localStorage.getItem("notes")
}


function storeData() {
    localStorage.setItem("notes" , notesCon.innerHTML);
}






btn.addEventListener("click" , ()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");

    inputBox.className = "input-box";

    inputBox.setAttribute("contenteditable" , "true");

    img.src = "./images/delete.png";

    notesCon.appendChild(inputBox).appendChild(img)

})

notesCon.addEventListener("click" , (e)=>{
    if(e.target.tagName === "IMG")
        {
            e.target.parentElement.remove();
            storeData()
        }

    //  else if(e.target.tagName === "P")   {
    //     notes= document.querySelectorAll(".input-box");

    //     notes.forEach(nt =>{
    //         nt.onkeyup = function() {
    //             storeData();
    //         }
    //     })
    //  }
})


// Assign keyup event handler directly to the notes container
notesCon.addEventListener("keyup", (e) => {
    if (e.target.classList.contains("input-box")) {
        storeData();
    }
});
     

document.addEventListener('DOMContentLoaded', showIteam);



