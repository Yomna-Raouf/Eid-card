import x from './test';
console.log(`I imported ${x} from another module`);
const bannerBtn = document.querySelector('.banner-btn');
const xBtn = document.querySelector('.x-btn');
const EnteredName = document.querySelector(".name-input");
const Name = document.querySelector('.entered-name');
const gender = document.querySelector('.user-gender');
const options = document.getElementById("Selected-option");
const Image = document.querySelector('.banner');
const downloadBtn = document.querySelector('.download-btn');
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

downloadBtn.addEventListener('click', () => {
    domtoimage.toBlob(Image)
    .then(function(blob) {
      window.saveAs(blob, 'my-node.png');
    });
}); 
/*
$('.download-btn').click(function() { 
    var elm = $('.banner').get(0);
    var lebar = "600";
    var tinggi = "450";
    var type = "jpg";
    var fileName = "happyEid";
    html2canvas(elm).then(function(canvas) {
        var canWidth = canvas.width;
        var canHeight = canvas.height;
        var img = Canvas2Image.convertToImage(canvas, canWidth, canHeight);
        Canvas2Image.saveAsImage(canvas, lebar, tinggi, type, fileName);
    })
})*/

const typing = () => {
    let userGender = options.options[options.selectedIndex].text;
	let name = userGender + " "  + EnteredName.value;
	console.log(name);
	
    if (i < name.length) {
        Name.innerText += name.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
    
}

