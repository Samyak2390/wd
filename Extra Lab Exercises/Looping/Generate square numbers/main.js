const para = document.querySelector('p');
const input = document.querySelector('input');
const button = document.querySelector('button');


button.onclick = function(){
    let num = input.value;
    para.textContent = 'Output: ';
    for(let i = 1; i<=num; i++){
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
            continue;
        }

          para.textContent += i + ' ';
    }
}