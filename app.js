const bannerBtn = document.querySelector('.banner-btn');
const xBtn = document.querySelector('.x-btn');
const EnteredName = document.querySelector(".name-input");
const Name = document.querySelector('.entered-name');
let i = 0;


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
	let name = EnteredName.value;
	console.log(name);
	
    if (i < name.length) {
        Name.innerText += name.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
    
}

