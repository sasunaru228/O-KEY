// instanciate new modal
let modal1 = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});
let modal2 = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});
let modal3 = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});
let modal4 = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});
let modal7 = new tingle.modal({
    footer: false,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
});
// set content
modal1.setContent('<div class="box__modal box__modal__1">' +
                                '<p class="logo">Смастерить <br> и повесить <br> скворечник</p>' +
                                '<p class="content">Весной птицы прилетают из тёплых стран. Самое время смастерить уникальный домик – скворечник, он поможет птицам устроить гнезда \n' +
    'в городских условиях. Его могут заселить скворцы, воробьи, мухоловки, иногда дятлы и даже белки. Вешать \n' +
    'у своего жилья домики-скворечники – старая народная традиция. Ведь вы сможете наслаждаться наблюдением за жизнью птиц. Птицы, живущие рядом, оказывают неоценимую помощь садоводам в борьбе \n' +
    'с насекомыми-вредителями \n' +
    'и радуют нас своим пением.</p>' +
                          '</div>');

modal7.setContent('<div class="box__modal box__modal__7">' +
    '<p class="logo">Поездка на ферму <br> или питомник</p>' +
    '<p class="content">Совместная поездка на ферму, соединение с природой и семьей приносит искреннюю радость и гармонию. Контакт с обитателями фермы, кормление и уход за ними, приобщение ко всем прелестям фермерского быта учит с уважением относиться к живому миру и сельскому труду. Здесь можно попробовать натуральные продукты, поучаствовать в занимательных мастер-классах, и напитаться силами родной земли.' +
    '</p>' +
    '</div>');
modal2.setContent('<div class="box__modal box__modal__2">' +
    '<p class="logo">Посадить дерево</p>' +
    '<p class="content">' +
    ' Деревья играют важную роль в жизни человека - дают нам тень в жару, приносят вкусные и полезные фрукты, добавляют красоты любому пейзажу. А кислород, вырабатываемый деревьями, помогает очистить воздух и сделать его более влажным. Деревья нужны также птицам и животным для того, чтобы жить и питаться. Вы можете внести свой вклад в озеленение планеты в городе или у себя на даче – ведь посадка дерева очень увлекательное занятие. Например, это может быть памятное дерево - в честь важного события в вашей семьи, о котором вы не забудете никогда. Кроме того, еще бывают сертификаты на посадку целого леса, названного в честь нашего близкого человека.' +
    '</p>' +
    '</div>');
modal3.setContent('<div class="box__modal box__modal__3">' +
    '<p class="logo">Найти и не сорвать <br> подснежник</p>' +
    '<p class="content">' +
    ' Простая прогулка в лес или парк может быть очень занятной. Часто, когда видим что-то красивое – бабочку,  редкий цветок или, например, подснежник, нам хочется сохранить это на память, показать находку друзьям, и мы даже не задумываемся, что такой цветок может погибнуть навсегда, что, в свою очередь может изменить экосистему. А если это будет фотоохота в поисках редких растений – то фотографии, в отличие от цветов, никогда не завянут! Любуйся, но только не срывай.' +
    '</p>' +
    '</div>');
modal4.setContent('<div class="box__modal box__modal__4">' +
    '<p class="logo">Собрать <br> накопившейся <br> мусор после зимы</p>' +
    '<p class="content">' +
    'Весной, когда всё оживает, самое время помочь природе и двору преобразиться. Собирайтесь с семьей и друзьями на спасение ваших любимых мест отдыха от сухих веток, различного мусора и бытовых отходов, оставленными человеком. Ведь полиэтилен разлагается в почве более тысячи лет. Всего пару часов труда на свежем воздухе – и вам гарантирован заряд позитива и гордости от благородной, важной работы, проделанной для нашей планеты.' +
    '</p>' +
    '</div>');






document.querySelector("#box1").addEventListener('click', () => {
    modal1.open()
})
document.querySelector("#box2").addEventListener('click', () => {
    modal2.open()
})
document.querySelector("#box3").addEventListener('click', () => {
    modal3.open()
})
document.querySelector("#box4").addEventListener('click', () => {
    modal4.open()
})
document.querySelector("#box7").addEventListener('click', () => {
    modal7.open()
})



$('#slider').slick({
    prevArrow: "<img src='img/prev.svg' class='prev' alt='1'>",
    nextArrow: "<img src='img/next.svg' class='next' alt='2'>",
});



