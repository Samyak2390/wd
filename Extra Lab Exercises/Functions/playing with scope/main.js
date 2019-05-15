var para = document.querySelector('p');

var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join(' ');
para.textContent = madeAString;
var madeAString = myArray.join();
para.append.textContent = madeAString;