let btn=document.querySelector(".btn");
let container=document.querySelector(".container")
btn.addEventListener("click",(e)=>
{
    e.preventDefault();
    console.log("button clicked");

    if(btn.innerText=="Light")
    {
        container.style.backgroundColor="black";
        btn.innerText="Dark"
        
       
        
    }
    else
    {
        
       container.style.backgroundColor="white";
        btn.innerText="Light"
    }
    
})