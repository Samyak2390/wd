const contacts = ['Ram:123456', 'Shyam:654321', 'Hari:987654', 'Gita:489612', 'Rita:998877'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.onclick = function(){
    let name = input.value.toLowerCase();
    for(let i = 0; i<contacts.length; i++){
        let splitContact = contacts[i].split(':');
        if(splitContact[0].toLowerCase() === name){
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1];
            break;
        }
        else{
            para.textContent = 'Name not found!!';
        }
    }
}