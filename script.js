let div=document.createElement("div")
div.id="countdown";div.style.border="1px solid red";div.style.width="100px";div.style.justifyItems="justify";div.style.display="grid"
// div.classList.add("count ","countdown");
let b=setTimeout(()=>{
    div.innerText='5'
    setTimeout(()=>{
        div.innerText='4'
        setTimeout(()=>{
            div.innerText='3'
            setTimeout(()=>{  
                div.innerText='2' 
                setTimeout(()=>{
                    div.innerText='1'
                    setTimeout(()=>{
                        div.innerText='0'
                        setTimeout(()=>{
                            div.innerText='Welcome to Asyn Programming'
            
                        },1000)
                    },1000)
                },1000)
            },1000)

    
        },1000)
    },1000)
},1000)
div.innerText=`${b}`

document.body.append(div)

