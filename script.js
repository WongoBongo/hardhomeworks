'use strict';
let lang = 'ru';

if (lang === 'ru') {
    console.log('Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье')
} else if (lang === 'en') {
    console.log("Monday,Tuesday,Wednesday,Thursda,Friday,Saturday,Sunday")
};
lang = 'en';
switch (lang) {
    case 'ru':
        console.log('Понедельник,Вторник,Среда,Четверг,Пятница,Суббота,Воскресенье');
        break;
    case 'en':
        console.log("Monday,Tuesday,Wednesday,Thursda,Friday,Saturday,Sunday");
        break;
}

    const lang_array = [];
    lang_array['ru'] = ['Пн', 'Вт', 'СР', 'Чт', 'Пт', 'Сб', 'Вс'];
    lang_array['en'] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

console.log(lang_array[lang = 'en']);

let namePerson = 'Артем';
namePerson == 'Артем' ? console.log('директор') : console.log('студент') && namePerson == 'Александр' ? console.log('преподаватель') : console.log('студент'); 

