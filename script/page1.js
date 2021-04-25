const img = document.getElementById('img');
console.log(img)
const image =['red','blue','orange'];
let i = 1;

img.addEventListener('click', () => {
    img.style.backgroundColor = image[i];
    i++;
    if(i==3){
        i=0;
    }


});
    
