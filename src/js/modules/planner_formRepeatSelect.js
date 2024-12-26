export default window.planner_formRepeatSelect = function() {
    const intervalSelect = document.getElementById('planner_intervalRepetition__header');
    const dayOfWeekParagraph = document.querySelector('.planner_visionParagraphDayOfWeek');
    const dayOfWeekSelect = document.getElementById('planner_dayOfWeekRepeat');
    const intervalWrapperDay = document.querySelector('.planner_intervalWrapperDay');

    const selectedValue = intervalSelect.value;

    if (selectedValue === 'repeat_daily') {
        dayOfWeekParagraph.style.display = 'none';
        dayOfWeekSelect.style.display = 'none';
        intervalWrapperDay.textContent = 'день';
    } else if (selectedValue === 'repeat_weekly') {
        dayOfWeekParagraph.style.display = 'block';
        dayOfWeekSelect.style.display = 'block';
        intervalWrapperDay.textContent = 'неделя';
    } else if (selectedValue === 'repeat_monthly') {
        dayOfWeekParagraph.style.display = 'block';
        dayOfWeekSelect.style.display = 'block';
        intervalWrapperDay.textContent = 'месяц';
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    planner_formRepeatSelect();
});