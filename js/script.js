// **************** Практика **************** \\
// 1.Створи картки з товарами на основі масиву products, 
// приклад картки https://prnt.sc/KmgDlzqOIA3M
// 2. Реалізуй делегування подій на колекції карток
// Після кліку на картку повинно з'являтись модальне вікно з
//  детальною інформацією про продукт, приклад модального 
// вікна https://prnt.sc/vWNoCeZcw7ii
// Для реалізації модального вікна використай бібліотеку 
// basicLightbox (https://github.com/electerious/basicLightbox)

const products = [
    {
        id: 1, img: "https://www.vodafone.ua/shop/media/wysiwyg/novosti/Capture_1_large.JPG",
        name: "Монітор", price: 3000,
        description: "23-дюймовий монітор з Full HD роздільною здатністю.",
    },
    {
        id: 2, img: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzWqRMI3HQiDfICHAmbArmaP4uOOIjfz0sDITv0dfkpb0mbbgX",
        name: "Ноутбук", price: 20000,
        description: "Легкий та потужний ноутбук з 15-дюймовим дисплеєм та SSD.",
    },
    {
        id: 3, img: "https://cdn.27.ua/799/66/39/6841913_1.jpeg",
        name: "Смартфон", price: 8000,
        description: "Оснащений потрійною камерою та багатоядерним процесором.",
    },
    {
        id: 4, img: "https://cdn.27.ua/799/b6/16/4371990_1.jpeg",
        name: "Планшет", price: 12000,
        description: "10-дюймовий планшет з високою продуктивністю та Retina дисплеєм.",
    },
];
// // 1 Створи картки з товарами на основі масиву
const list = document.querySelector('.js-products');
function createMarkup(arr) {
    return arr.map(({ id, img, name, price, }) =>
        `<li class="item js-item" data-product-id="${id}">
            <img src="${img}" alt="${name}">
            <h2>${name}</h2>
            <p>Ціна: ${price} грн</p>
        </li>`
    ).join("")
}
list.insertAdjacentHTML('afterbegin', createMarkup(products))

list.addEventListener('click', handlerGetProduct);
function handlerGetProduct(evt) {
    if (evt.currentTarget === evt.target) {
        return;
    }
    // console.log(evt.target);
    // console.log(evt.currentTarget);
    const parent = evt.target.closest('.js-item');
    // console.log(parent);

    const currentId = Number(parent.dataset.productId);
    // console.log(currentId);
    const currentProduct = products.find(({ id }) => id === currentId);
    // console.log(currentProduct);

    // library modalwindow
    const instance = basicLightbox.create(`
       <div class="modal">
          <img src="${currentProduct.img}" alt="${currentProduct.name}">
          <h2>${currentProduct.name}</h2>
          <h3>${currentProduct.price}</h3>
          <p>${currentProduct.description}</p>
        </div>
    `);
    instance.show();
    // instance.show(() => console.log('lightbox now visible'));
}

// library
console.log(basicLightbox);