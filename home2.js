const cl=document.querySelectorAll(".cl");
cl.forEach((ele)=>{
    ele.addEventListener('click',()=>{
        console.log(ele.children[2].innerHTML)
    });
})