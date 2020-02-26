let char8 = document.getElementById('length8');
let char12 = document.getElementById('length12');
let char18 = document.getElementById('length18');
let char32 = document.getElementById('length32');
let copyText = document.getElementById('copytext');

let randcharacters = `0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz~!@#$%^&*()_-+={[}]|:;"'<,>.?/`;
let area = document.getElementById('pswdarea');

function randPass(length){ //picks and makes the random password
    let result = '';
    let i = 0;
   
    for(;i< length; i++){
        result += randcharacters.charAt(Math.floor(Math.random() * randcharacters.length));
    };
    return result;

};

char8.addEventListener('click', function generatePswd(){
    area.textContent = randPass(8)
});
char12.addEventListener('click', function generatePswd(){
    area.textContent = randPass(12)
});
char18.addEventListener('click', function generatePswd(){
    area.textContent = randPass(12)
});
char18.addEventListener('click', function generatePswd(){
    area.textContent = randPass(18)
});
char32.addEventListener('click', function generatePswd(){
    area.textContent = randPass(32)
});

copyText.addEventListener('click', function moi(){ //copy the teksti
    const selection = window.getSelection();
    const range = document.createRange();
    
    range.selectNodeContents(area);
    selection.removeAllRanges();
    selection.addRange(range);

    try{
        document.execCommand('copy'); //copies the text
        area.textContent = 'Copied!'

    } catch{
        console.log('umm what?');
    };

});
