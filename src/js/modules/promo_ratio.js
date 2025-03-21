export default window.showContent_promoRatio = function() {
    fetch('./src/html/promo_ratio.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById('mainContent').innerHTML = html;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

//   // Находим главный чекбокс и все подчиненные чекбоксы по data-атрибуту
//   const mainCheckbox = document.querySelector('.main-checkbox[data-group="metrics"]');
//   const subCheckboxes = document.querySelectorAll('.sub-checkbox[data-group="metrics"]');

//   // Обработчик для главного чекбокса
//   mainCheckbox.addEventListener('change', function () {
//     if (this.checked) {
//       // Если главный чекбокс отмечен, отмечаем все подчиненные
//       subCheckboxes.forEach(checkbox => {
//         checkbox.checked = true;
//       });
//     } else {
//       // Если главный чекбокс снят, снимаем все подчиненные
//       subCheckboxes.forEach(checkbox => {
//         checkbox.checked = false;
//       });
//     }
//   });

//   // Обработчики для подчиненных чекбоксов
//   subCheckboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', function () {
//       // Если любой из подчиненных чекбоксов снят, делаем главный чекбокс серым
//       if (!this.checked) {
//         mainCheckbox.indeterminate = true;
//       } else {
//         // Если все подчиненные чекбоксы отмечены, снимаем серый цвет
//         const allChecked = Array.from(subCheckboxes).every(checkbox => checkbox.checked);
//         if (allChecked) {
//           mainCheckbox.indeterminate = false;
//           mainCheckbox.checked = true;
//         }
//       }
//     });
//   });
