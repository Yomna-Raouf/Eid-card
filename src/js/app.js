const bannerBtn = document.querySelector('.banner-btn');
const xBtn = document.querySelector('.x-btn');
const EnteredName = document.querySelector(".name-input");
const Author = document.querySelector('.author-name');
const Name = document.querySelector('.entered-name')
const Image = document.querySelector('.banner');
let i = 0;
let j = 0;

window.onload= () => {
    document.getElementById("my_audio").play();
}

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
}

