// Задание

// Напишите приложение, которое работает так:

//     у приложения есть верхняя панель навигации с такими пунктами:
//         лого;
//         меню;
//         корзина;
//     в верхнем меню 2 страницы: "Товары" и "Корзина";
//     На странице "Товары" выводить 10 товаров на экран;
//     в каждом товаре выводит кнопку "Купить". Если товар уже куплен, второй раз добавить его в корзину нельзя;
//     при нажатии на нее товар добавляется в корзину в store;
//     в верхней панели навигации выводится количество товаров в корзине;
//     на странице "Корзина" выводится список товаров, и рядом с каждым из них - кнопка "Удалить";

// Чтобы получить список товаров, нужно отправит GET-запрос по адресу: https://62becfba0bc9b125615fd0f7.mockapi.io/api/products?page=1&limit=10.