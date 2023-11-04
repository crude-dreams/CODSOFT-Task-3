const input=document.getElementById("inputbox");
const content=document.getElementById("content");     
function Add(){
    
    if(input.value ==""){
        alert("Task cannot be Empty!"); 
    }
    else{
        let txt=document.createElement("p");
        txt.innerHTML=input.value;
        content.appendChild(txt);
        let ic=document.createElement("button");
        txt.appendChild(ic);
        let a=document.createElement("span");
        txt.appendChild(a);
        
    }  
    inputbox.value="";
    Save();
}

content.addEventListener("click",function(f)
{
    if(f.target.tagName==="BUTTON"){
       f.target.parentElement.remove();
        Save();
    }
    else if(f.target.tagName==="SPAN"){
        inputbox.value=content.innerText;
        f.target.parentElement.remove();
        Save();
    }

},false);



function Save(){
    localStorage.setItem("data",content.innerHTML);
}

function Show(){
    content.innerHTML=localStorage.getItem("data");
}

function Delete(){
    localStorage.removeItem("data");
    location.reload();
}
Show();



