// Добавление нового ребенка
document.getElementById('addChild').addEventListener('click', function() {
    var childrenInfo = document.getElementById('childrenInfo');
    var newChildDiv = document.createElement('div');
    newChildDiv.classList.add('child-info-block');
    newChildDiv.innerHTML = `
        <label>Имя Ребенка:</label>
        <input type="text" name="childName[]" required placeholder="Исмаил">

        <label>Возраст:</label>
        <input type="number" name="childAge[]" min="4" max="18" required placeholder="14">

        <label>Класс:</label>
        <select name="childClass[]">
            <option value="">Выберите класс</option>
            <option value="preschool">Дошкольник</option>
            <option value="1">1 класс</option>
            <option value="2">2 класс</option>
            <option value="3">3 класс</option>
            <option value="4">4 класс</option>
            <option value="5">5 класс</option>
            <option value="6">6 класс</option>
            <option value="7">7 класс</option>
            <option value="8">8 класс</option>
            <option value="9">9 класс</option>
            <option value="10">10 класс</option>
            <option value="11">11 класс</option>
        </select>
    </div>
        <img src="img/pngwing11.png" class="remove-child" alt="Удалить ребенка" />
    `;
    childrenInfo.appendChild(newChildDiv);
});

// Функция для удаления блока ребенка
document.addEventListener('click', function(e) {
    if (e.target && e.target.classList.contains('remove-child')) {
        e.target.parentNode.remove();
    }
});


// Обработка отправки формы
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь код для обработки и отправки формы на сервер
    alert('Форма отправлена');
});
