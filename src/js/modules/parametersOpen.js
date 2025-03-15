window.showContent_parameters = function () {
    const mainContent = document.getElementById('mainContent');
    fetch('./src/html/parameters.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Модуль не отвечает');
            }
            return response.text();
        })
        .then(data => {
            // Вставляем загруженный HTML в mainContent
            mainContent.innerHTML = data;
  
            // Загружаем сохранённые параметры
            loadSelectedGlobalParametersBefore();
  
            // Инициализируем Popover для динамически загруженных элементов
            initializePopovers();
  
            // Инициализируем иконки (если необходимо)
            initializeIcons();
        })
        .catch(error => {
            console.error('Ошибка при загрузке файла:', error);
            mainContent.innerHTML = 'Ошибка при загрузке';
        });
  
    // Функция для загрузки сохранённых параметров
    function loadSelectedGlobalParametersBefore() {
        const parametersBefore = JSON.parse(localStorage.getItem('globalParametersBefore'));
        if (parametersBefore) {
            for (const id in parametersBefore) {
                const selectElement = document.getElementById(id);
                if (selectElement) {
                    selectElement.value = parametersBefore[id];
                }
            }
        }
    }
  
    // Функция для инициализации Popover
    function initializePopovers() {
        const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
        popoverTriggerList.forEach(function (popoverTriggerEl) {
            new bootstrap.Popover(popoverTriggerEl);
        });
    }
  
    // Функция для инициализации иконок
    function initializeIcons() {
        const iconElements = [].slice.call(document.querySelectorAll('svg use'));
        iconElements.forEach(function (iconEl) {
            const href = iconEl.getAttribute('xlink:href');
            if (href && !document.querySelector(href)) {
                console.warn(`Иконка ${href} не найдена в DOM`);
            }
        });
    }
  };
  