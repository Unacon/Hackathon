const img = document.getElementById('img');
const text = document.getElementById('text');


images = [];
images.push('./images/img1');
images.push('./images/img2');
images.push('./images/img3');



text1 = [];
text1.push('Dificuldade em passar na entrevista? Keep Calm, que o Rocket te dá um help!');
text1.push('É meme que fala? Nosso método vai lacrar!');
text1.push('Você poderá ir mais longe com o nosso jeito de ensinar com memes. Bora?');


var nrImagem = 1;
var refrescar = 3;

rodarImagens = function () {
    document.images["img"].src = images[nrImagem];
    text.innerHTML = text1[nrImagem];

 
    nrImagem = (nrImagem + 1) % images.length; 
 }
 var intervalControl = setInterval(rodarImagens, 1000 * refrescar);