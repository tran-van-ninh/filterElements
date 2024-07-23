window.$ = document.querySelector.bind(document);
window.$$ = document.querySelectorAll.bind(document);

let button = $$('button');
let imgList = $$('img');
let wrapImage = $('.wrap-image');
// function searchImage(typeImage) {
//     imgList.forEach(function(e){
//         console.log(e.parentNode);
//         (typeImage == "all" || e.getAttribute('type') === typeImage) ? e.parentNode.classList.remove('hide') :   e.parentNode.classList.add('hide') ;
       
//     })
// }

// button.forEach( function(btn){
//     btn.addEventListener('click', function(e){
//         button.forEach(btn => {
//             btn.classList.remove('active');
//         })
//         console.log(e.currentTarget.getAttribute('class'));
//         console.log(this);
//         let type = e.currentTarget.getAttribute('type')
//         e.currentTarget.classList.add('active');
//         searchImage(type)
//     })
// })
let arr = [];


// List Data
imgList.forEach(item => {
    arr.push({
        src:item.src,
        type: item.getAttribute('type'),
    });
})

// Trích xuất data
function render(list){
    wrapImage.innerHTML = '';
    list.forEach(item => {
        let imgElement = document.createElement('img');
        let divElement = document.createElement('div');
        let divElementScale = document.createElement('div');
        let divElementRotate = document.createElement('div');

        divElementRotate.classList.add('rotate');
        divElementScale.classList.add('scale');

        imgElement.src = item.src;
        imgElement.setAttribute('type', item.type);

        divElementRotate.append(imgElement);
        divElementScale.append(divElementRotate);
        divElement.append(divElementScale)
        wrapImage.append(divElement);
    })
}

render(arr);

button.forEach(btn =>{
    btn.addEventListener('click', e =>{
        button.forEach(btn => {
            btn.classList.remove('active');
        })
        btn.classList.add('active');
        let type = e.currentTarget.getAttribute('type');
        let filterData = arr.filter(food => {
            return food.type == type;
        })
       type == 'all' ? render(arr) : render(filterData);
    })
})
