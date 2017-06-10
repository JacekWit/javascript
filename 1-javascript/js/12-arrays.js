'use strict'

var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';
//
imiona.push('Geralt');

console.log(imiona);

imiona.pop ();
imiona.pop ();
console.log(imiona);

console.log(imiona.unshift('Robert'));
/*
console.log(imiona);

console.log(imiona);
console.log(imiona.length);

for (var i = 0; i <imiona.length ; i++) {
    console.log(imiona[i]);
}
*/
/*imiona.forEach(function(element, i) {
    console.log ('Element nr' + i + '=' + element);
});
console.log(imiona.join("-"));*/

/*console.log(imiona.reverse);
(*/
var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);
console.log(zbiorImion);

console.log(zbiorImion).indexOf('Mariusz'));
console.log(Array.isArray(zbiorImion));
