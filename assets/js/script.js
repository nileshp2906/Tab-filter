// Tab filter

const tabHeader = document.querySelectorAll(".header-list");
const chat = document.querySelector(".first")
const stat = document.querySelector(".second")
const call = document.querySelector(".third")

tabHeader.forEach((e,index)=>{
    e.addEventListener("click",function (on){
        on.preventDefault();
        for(let i of tabHeader) {
            i.classList.remove("active");
        }
        on.currentTarget.classList.add("active");
        console.log(e.dataset.name)

            if(e.dataset.name === "chat") {
                chat.classList.add("active");
                stat.classList.remove("active");
                call.classList.remove("active");
            }

            else if(e.dataset.name === "status") { 
                stat.classList.add("active");
                call.classList.remove("active");
                chat.classList.remove("active");
            }

            else {
                call.classList.add("active");
                stat.classList.remove("active");
                chat.classList.remove("active");
            }
    })
})