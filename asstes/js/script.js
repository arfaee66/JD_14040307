var text = 'خوش آمدید';

var curr = 0;

function write(){
 var elem = document.getElementById('wl');
   
    if (curr < text.length) {
    elem.textContent = elem.textContent + text.charAt(curr);
   curr++;
} else {
    elem.textContent ='';
    curr = 0
}
};
setInterval(write,300);


