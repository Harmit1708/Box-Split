let square = document.getElementById("square");

square.addEventListener('click',function(e){
    console.log(e)
    let height = e.target.offsetHeight/2;
    let width = e.target.offsetWidth/2;
    console.log(height,width);
   for(let i=0;i<4;i++){
        let div = document.createElement('div');
        div.id = e.target.id+i;
        div.className = 'square';
        div.style.height = height+"px";
        div.style.width = width+"px";
        document.getElementById(e.target.id).appendChild(div)
    }
});

