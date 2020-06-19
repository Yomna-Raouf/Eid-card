const bannerBtn = document.querySelector('.banner-btn');
const xBtn = document.querySelector('.x-btn');
const EnteredName = document.querySelector(".name-input");
const Author = document.querySelector('.author-name');
const Name = document.querySelector('.entered-name')
const loadBtn = document.querySelector('.load');
let i = 0;
let j = 0;

window.onload= () => {
    document.getElementById("my_audio").play();
}

function draw(text_title) {
  var ctx = document.getElementById('canvas').getContext('2d');
  var img = new Image();
  img.onload = function() {
    ctx.drawImage(img, 0, 0, 700, 700);
    ctx.fillText("Happy Eid:", 300, 200);
    ctx.fillText(  text_title , 350, 260);
    ctx.fillText( "From Yomna Raouf" , 330, 650);
    ctx.fillStyle = "#b71c1c";
    ctx.textBaseline = '#b71c1c';
    ctx.font = "35px 'Roboto Condensed'";
  };
  img.src = '../assets/eid.jpg';
}

loadBtn.addEventListener('click', () => {
    let temp = canvas.toDataURL();
    const link = document.createElement('a');
    document.body.appendChild(link);
    link.setAttribute('download', 'HappyEid.png');
    link.href = temp;
    link.click();
   // console.log(temp);
});


bannerBtn.addEventListener('click', () => {
    document.querySelector('.banner_2').style.display = 'none';
    document.querySelector('.banner').style.cssText = 'opacity: 1; visibility: visible';
    document.querySelector('.container').style.cssText = " background:rgb(243, 247, 251)"
    typing();
});

xBtn.addEventListener('click', () => {
    document.querySelector('.banner_2').style.display = 'flex';
    document.querySelector('.banner').style.cssText = 'opacity: 0; visibility: hidden';
    document.querySelector('.container').style.cssText = ' background:linear-gradient(to right, rgb(5, 85, 136), rgb(243, 247, 251));';
});

const typing = () => {
    let userName = `Happy Eid: \n   ${EnteredName.value}` 
    let author = `From Yomna Raouf`;   
    if (i < userName.length) {
        Name.innerText += userName.charAt(i);
        i++;
        setTimeout(typing, 150);
    }  
    if ( (i === userName.length) && (j < author.length) ) {
        Author.innerText += author.charAt(j);
        j++;
        setTimeout(typing, 150);
    } 
    draw( `${EnteredName.value}`);
}
