const slogan = document.getElementById('splash');
console.log(slogan);

let i = 1;

setTimeout(() => {
    url = "http://127.0.0.1:5500/page1.html";
    window.location.assign(url)
},2000);

