let modalData = {};

function saveModalData() {
    modalData.intervalNum = document.getElementById('planner_intervalPeriodicity').value;
    modalData.dayOfWeekRepeat = document.getElementById('planner_dayOfWeekRepeat').value;
    modalData.selectedTime = document.getElementById('planner_selectedTime').value;
    modalData.selectedStartDate = document.getElementById('planner_selectedStartDate').value;

    const endingOptions = document.querySelectorAll('input[name="options"]:checked');
    let endingInfo = '';
    endingOptions.forEach(option => {
        if (option.value === 'never') {
            endingInfo = 'Никогда';
        } else if (option.value === 'number') {
            const times = document.getElementById('planner_ModalRepetition__times').value;
            endingInfo = `Спустя ${times} раз`;
        } else if (option.value === 'date') {
            const endDate = document.getElementById('dateInput').value;
            endingInfo = `Дата:${endDate}`;
        }
    });
    
    modalData.endingInfo = endingInfo;
    closeModal('planner_weeklyModal');
}

function addData() {
    const scenarioName = document.getElementById('planner__scenarioName').value;
    const block = document.getElementById('planner__block').value;
    const scenarioCustom = document.getElementById('planner__scenarioCustom').value;

    const resultHTML = 
        `<h3>Данные</h3>
        <p><strong>Наименование:</strong> ${scenarioName}</p>
        <p><strong>Блок:</strong> ${block}</p>
        <p><strong>Сценарий настройки:</strong> ${scenarioCustom}</p>
        <p><strong>Интервал:</strong> ${modalData.intervalNum} день(я)</p>
        <p><strong>Дни повторения:</strong> ${modalData.dayOfWeekRepeat}</p>
        <p><strong>Время запуска:</strong> ${modalData.selectedTime}</p>
        <p><strong>Дата начала:</strong> ${modalData.selectedStartDate}</p>
        <p><strong>Окончание:</strong> ${modalData.endingInfo}</p>`
    ;

    const iframe = document.getElementById('planner_Iframe');
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    iframeDoc.open();
    iframeDoc.write(resultHTML);
    iframeDoc.close();
}

export { saveModalData, addData};

window.saveModalData = saveModalData;
window.addData = addData;
