export default window. saveSelectedGlobalParameters = function() {
    window.check_mark = function() {
        const statusElement = document.getElementById('check-mark_button');
        statusElement.style.display = 'inline';
        setTimeout(function() {
            statusElement.style.display = 'none';
        }, 5000);
    }
    window.check_mark()
    // Создаем объект для хранения значений
    const parameters = {};

    // Получаем значения из селектов
    const timeAggregation = document.getElementById("parameters_aggregation-time");
    const skuAggregation = document.getElementById("parameters_aggregation-scu");
    const oosMethod = document.getElementById("parameters_oos-method");
    const promoMethod = document.getElementById("parameters_promo-method");
    const spikesMethod = document.getElementById("parameters_spikes-method");
    const salesRecoveryMethod = document.getElementById("parameters_sales_recovery-method");

    // Сохраняем текстовые значения в объект
    parameters['агрегат по времени'] = timeAggregation.options[timeAggregation.selectedIndex].text;
    parameters['агрегат по позиции'] = skuAggregation.options[skuAggregation.selectedIndex].text;
    parameters['очистка oos'] = oosMethod.options[oosMethod.selectedIndex].text;
    parameters['очистка от промо']  = promoMethod.options[promoMethod.selectedIndex].text;
    parameters['очистка от выбросов'] = spikesMethod.options[spikesMethod.selectedIndex].text;
    parameters['восстановление'] = salesRecoveryMethod.options[salesRecoveryMethod.selectedIndex].text;

    // Получаем значения чекбоксов
    // parameters.oosChecked = document.getElementById("parameters_oos-chek").checked;
    // parameters.promoChecked = document.getElementById("parameters_promo-chek").checked;
    // parameters.seasonChecked = document.getElementById("parameters_season-chek").checked;
    // parameters.spikesChecked = document.getElementById("parameters_spikes-chek").checked;
    // parameters.salesRecoveryChecked = document.getElementById("parameters_sales_recovery-chek").checked;

    // Сохраняем объект в localStorage как строку JSON
    localStorage.setItem('globalParameters', JSON.stringify(parameters));
    localStorage.setItem('globalParametersNewProducts', JSON.stringify(parameters));

    // Выводим сообщение о сохранении
    console.log('Параметры сохранены в двух словарях:', parameters);
}

