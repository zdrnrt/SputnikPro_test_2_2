export default window. saveSelectedGlobalParameters = function() {
    window.check_mark = function() {
        const statusElement = document.getElementById('check-mark_button');
        statusElement.style.display = 'inline';
        setTimeout(function() {
            statusElement.style.display = 'none';
        }, 5000);
    }
    window.check_mark()

    const parameters = {};
    const parametersBefore = {};

    // Получаем значения из селектов
    const timeAggregation = document.getElementById("parameters_aggregation-time");
    const skuAggregation = document.getElementById("parameters_aggregation-scu");
    const oosMethod = document.getElementById("parameters_oos-method");
    const promoMethod = document.getElementById("parameters_promo-method");
    const spikesMethod = document.getElementById("parameters_spikes-method");
    const salesRecoveryMethod = document.getElementById("parameters_sales_recovery-method");

    // Находим все радио-кнопки с именем 'flexRadioDefaultOOS'
const radioButtons = document.querySelectorAll('input[name="flexRadioDefaultOOS"]');
// Находим выбранную радио-кнопку
const selectedRadio = Array.from(radioButtons).find(radio => radio.checked);
// Получаем текст выбранной радио-кнопки
const selectedTextOOS = selectedRadio
  ? document.querySelector(`label[for="${selectedRadio.id}"]`).textContent.trim()
  : null;
  const selectedValueOOS = selectedRadio.value;

    // Сохраняем текстовые значения в объект
    parameters['агрегат по времени'] = timeAggregation.options[timeAggregation.selectedIndex].text;
    parameters['агрегат по позиции'] = skuAggregation.options[skuAggregation.selectedIndex].text;
    //parameters['очистка oos'] = oosMethod.options[oosMethod.selectedIndex].text;

    parameters['очистка oos'] = selectedTextOOS;

    parameters['очистка от промо']  = promoMethod.options[promoMethod.selectedIndex].text;
    parameters['очистка от выбросов'] = spikesMethod.options[spikesMethod.selectedIndex].text;
    parameters['восстановление'] = salesRecoveryMethod.options[salesRecoveryMethod.selectedIndex].text;

         // Сохраняем id и value выбранных селектов в объект в формате { id: value }
    parametersBefore[timeAggregation.id] = timeAggregation.value;
    parametersBefore[skuAggregation.id] = skuAggregation.value;
    //parametersBefore[oosMethod.id] = oosMethod.value;

    parametersBefore[oosMethod.id] = selectedValueOOS;

    parametersBefore[promoMethod.id] = promoMethod.value;
    parametersBefore[spikesMethod.id] = spikesMethod.value;
    parametersBefore[salesRecoveryMethod.id] = salesRecoveryMethod.value;

    // Сохраняем объект в localStorage как строку JSON
    localStorage.setItem('globalParameters', JSON.stringify(parameters));
    localStorage.setItem('globalParametersNewProducts', JSON.stringify(parameters));
    localStorage.setItem('globalParametersPromo', JSON.stringify(parameters));
    localStorage.setItem('globalParametersSummaryPlan', JSON.stringify(parameters));
    localStorage.setItem('globalParametersBefore', JSON.stringify(parametersBefore));

    // Выводим сообщение о сохранении
    console.log('Параметры сохранены в двух словарях:', parameters);
}
