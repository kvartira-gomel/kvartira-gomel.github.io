ymaps.ready(function () {
    // Для начала проверим, поддерживает ли плеер браузер пользователя.
    if (!ymaps.panorama.isSupported()) {
        // Если нет, то просто ничего не будем делать.
        return;
    }

    // Ищем панораму в переданной точке.
    ymaps.panorama.locate([55.733685, 37.588264]).done(
        function (panoramas) {
            // Убеждаемся, что найдена хотя бы одна панорама.
            if (panoramas.length > 0) {
                // Создаем плеер с одной из полученных панорам.
                var player = new ymaps.panorama.Player(
                    'player1',
                    // Панорамы в ответе отсортированы по расстоянию
                    // от переданной в panorama.locate точки. Выбираем первую,
                    // она будет ближайшей.
                    panoramas[0],
                    // Зададим направление взгляда, отличное от значения
                    // по умолчанию.
                    { direction: [256, 16] }
                );
            }
        },
        function (error) {
            // Если что-то пошло не так, сообщим об этом пользователю.
            alert(error.message);
        }
    );

    // Для добавления панорамы на страницу также можно воспользоваться
    // методом panorama.createPlayer. Этот метод ищет ближайщую панораму и
    // в случае успеха создает плеер с найденной панорамой.
    ymaps.panorama.createPlayer(
        'player2',
        [59.938557, 30.316198],
        // Ищем воздушную панораму.
        { layer: 'yandex#airPanorama' }
    )
        .done(function (player) {
            // player – это ссылка на экземпляр плеера.
        });
});



window.addEventListener('load', () => {
    setTimeout(() => {
        //console.log('Страница полностью загружена, включая все стили, изображения и зависимые ресурсы');
    }, 3000)

});