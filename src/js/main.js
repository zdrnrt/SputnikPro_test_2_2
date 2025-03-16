import 'jquery';
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Popover } from 'bootstrap';
import '../scss/style.scss'

import './blocks/aside.js'

import check_mark from "./modules/check_mark.js";
import showContent_listing from "./modules/listing.js";
import showContent_newProducts from "./modules/new_products.js";
import showContent_showContent_locks from "./modules/locks.js";
import showContent_outputAssort from "./modules/output_assort.js";
import showContent_tender from "./modules/tender.js";
import showContent_priceChange from "./modules/price_change.js";
import showContent_promoRatio from "./modules/promo_ratio.js";
import showContent_planner from "./modules/planner.js";
// import tb_regular_assort__chart from "./modules/regular_assortChart.js";
import howContent_summaryPlan from "./modules/summary_plan.js";
import tbRegAssortButton from "./modules/regular_assortTable_copy.js";
// import tbSeasonalityPreview from "./modules/seasonality_previewTable.js";
import loadDataSeasonality from "./modules/seasonality_visualLines.js";
import tbPromoRatioPerviewButton from "./modules/promoRatio_previewButton.js";
import {tbRegAssortOptimizationButton} from "./modules/regular_assortOptimizationForm.js";
import { ra_closeModalButton, ra_saveButton} from "./modules/regular_assortOptimizationForm.js";
import {promo_OptimizationButton} from "./modules/promo_OptimizationForm.js";
import {promo_closeModalButton, promo_saveModalButton} from "./modules/promo_OptimizationForm.js";
// import promo_PreviewButton from "./modules/promo_PreviewTable.js";
import {newProductOptimizationButton, newProductCloseModalButton, newProductSaveModalButton } from "./modules/newProduct_OptimizationForm.js";
import newProduct_PreviewButton from "./modules/newProduct_PreviewTable.js";
import {summaryPlan_OptimizationButton, summaryPlan_closeModalButton, summaryPlan_saveModalButton} from "./modules/summaryPlan_OptimizationForm.js";
import summaryPlan_PreviewButton from "./modules/summaryPlan_PreviewTable.js";
import {saveSettings, planner_selectScenarioRepeat, closeModal, closeAllModals } from "./modules/planner_formRepeat.js";
// import planner_saveButton from "./modules/planner_iframeSavedParam.js";
import {saveModalData, planner_addData} from "./modules/planner_saveModalRepetition.js";
import planner_formRepeatSelect from "./modules/planner_formRepeatSelect.js";
import saveSelectedGlobalParameters from "./modules/parametersGlobalChecked.js";
import saveSelectedGlobalParametersSeasonality from "./modules/seasonalityGlobalChecked.js";
import saveSelectedGlobalParametersRegular from "./modules/regularGlobalChecked.js";
import './modules/parametersOpen'
import './modules/seasonalityOpen'
import './modules/regularOpen'

//@import url("https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/css/bootstrap.min.css");


// мое

// функция для доп.сведения - акции
window.showContent_action = function() {
    // Используем fetch для загрузки HTML-кода из action.html
    fetch('./src/html/action.html')
        .then(response => {
            // Проверяем, успешно ли выполнен запрос
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text(); // Преобразуем ответ в текст
        })
        .then(html => {
            // Вставляем загруженный HTML в контейнер maincontent
            document.getElementById('mainContent').innerHTML = html;
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// функция для Прогнозирование - регулярный ассортимент
// функция для Прогнозирование - промо
window.showContent_promo = function() {
  fetch('./src/html/promo.html')
      .then(response => {
          // Проверяем, успешно ли выполнен запрос
          if (!response.ok) {
              throw new Error('Network response was not ok ' + response.statusText);
          }
          return response.text(); // Преобразуем ответ в текст
      })
      .then(html => {
          // Вставляем загруженный HTML в контейнер maincontent
          document.getElementById('mainContent').innerHTML = html;
      })
      .catch(error => {
          console.error('There has been a problem with your fetch operation:', error);
      });
}


/*вставка картинки*/
// window.tb_seasonality = function(){
//   const imageUrl = 'https://avatars.dzeninfra.ru/get-zen_doc/3445317/pub_615a8e1687bd902369c1e59c_615a99021c6451628b2b5664/scale_1200';
//   document.getElementById('tb_seasonality').src = imageUrl;
// }
/*вставка картинки*/


import imageZE from '/images/users/ZilevichElizaveta.jpg';
import imageTO from '/images/users/TkachevOleg.jpg';
import imageTG from '/images/users/TolokGalina.jpg';
import imageNP from '/images/users/question.jpg';
import imageU1 from '/images/users/user1.png';

/*вставка юзера ПЕРЕНЕСЬТИ*/
window.updateUserImage = function() {
  const userSelect = document.getElementById('header_top_user');
  const userImageDiv = document.getElementById('userImage');
  const images = {
      option1: imageNP, //  для нового пользователя
      option2: imageZE , // Зилевич Елизаветы
      option3: imageU1, 
      option4: imageTO , 
      option5: imageU1, // Путь к изображению Шварёва Данила
      option6: imageTG,
      option7: imageU1 // Путь к изображению Толок Галина

  };

  const selectedValue = userSelect.value;

  // Очищаем предыдущий контент
  userImageDiv.innerHTML = '';

  if (selectedValue && images[selectedValue]) {
      const img = document.createElement('img');
      img.src = images[selectedValue];
      img.alt = selectedValue;
      img.style.width = '50px';
      img.style.borderRadius = '50px';
      userImageDiv.appendChild(img);
  }

  
}
/*вставка юзера*/

// $(document).ready(function() {
//     App.init();
//     Highlight.init();
//   });
  

  document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.visible');
  
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Удаляем класс 'active' у всех пунктов
            menuItems.forEach(i => i.classList.remove('actived'));
            // Добавляем класс 'active' к текущему пункту
            this.classList.add('actived');
        });
    });
  
  
  });



//REG ASSORT***************************************************************************************************************************************************
        // document.getElementById('regular_assort__calculateForecastButton').addEventListener('click', loadAndFilterData);
    
window.loadAndFilterData = function() {

window.saveGlobalParametersRegular = function() {
    let currentData = JSON.parse(localStorage.getItem('globalParameters'));
    if (!currentData) {
        currentData = {};
    }
    const regularAssortMethodForecast = document.getElementById('regular_assort_method');
    const regular_method = regularAssortMethodForecast.options[regularAssortMethodForecast.selectedIndex].text;
    currentData['методы прогноза'] = regular_method;
    localStorage.setItem('globalParameters', JSON.stringify(currentData));
}
window.saveGlobalParametersRegular();

// Получаем параметры из localStorage
const parameters = JSON.parse(localStorage.getItem('globalParameters'));
const iframe = document.getElementById('tb_regular_assort_results');
// Проверяем наличие ключей и выводим соответствующие сообщения
if (!parameters || !parameters['очистка от выбросов']) {
iframe.contentDocument.body.innerHTML = '<p>Выберите глобальные параметры</p>';
return; // Прекращаем выполнение функции
}
if (!parameters['сезонность']) {
iframe.contentDocument.body.innerHTML = '<p>Выберите метод расчета сезонности</p>';
return; // Прекращаем выполнение функции
}
window.filterData = function(data) {
    const parameters = JSON.parse(localStorage.getItem('globalParameters'));
    return data.filter(row => {
        return Object.keys(parameters).every(key => {
            if (row[key] !== undefined) {
            return row[key].toString().toLowerCase() === parameters[key].toString().toLowerCase();   // Приведение к нижнему регистру для независимости от регистра
            }
            return true;
        });
    });
};
  
window.displayTable = function(data) {
    const iframe = document.getElementById('tb_regular_assort_results');
    const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
    iframeDocument.body.innerHTML = '';

             

// Добавление стилей
const style = document.createElement('style');
style.textContent = 
`table {
width: 100%;
border-collapse: collapse;
margin-top: 0px;
font-size: 12px;
font-size: 16px;
font-family: 'Arial', sans-serif; 
}
th, td {
border: 1px solid #ddd;
padding: 10px;
text-align: left;
width: auto;
}
th {
background-color:rgb(36, 76, 223);
color: white; 
font-family: 'Arial', sans-serif;
}
tr:nth-child(even) {
background-color: #f2f2f2;
}
tr:hover {
background-color: #ddd;
}
td:first-child {
font-weight: bold;
font-family: 'Arial', sans-serif;`
;
iframeDocument.head.appendChild(style);
        const table = iframeDocument.createElement('table');
        table.innerHTML = ''; // Очистка предыдущего содержимого
        if (data.length === 0) {
            table.innerHTML = '<tr><td colspan="100%">Нет данных для отображения</td></tr>';
            iframeDocument.body.appendChild(table);
            return;
        }

              // Определяем желаемый порядок
    const desiredOrder = [
      'WAPE, %',
      'BIAS, %',
      'Кол-во позиций с прогнозом',
      'Всего позиций с продажами',
      'Доля, %',
      'недопрогноз, %',
      'перепрогноз, %',
      'Объем прогноза, шт',
      'Объем продаж, шт',
      'Доля, %2'
  ];
  // Сортируем данные по желаемому порядку
  data.sort((a, b) => {
    const indexA = desiredOrder.indexOf(a['МЕРЫ']); // Приводим к нижнему регистру
    const indexB = desiredOrder.indexOf(b['МЕРЫ']);
    
    // Сравниваем индексы
    return indexA - indexB;
});
  
// Создание заголовков, начиная с 7-го столбца
    const headers = Object.keys(data[0]);
    const headerRow = document.createElement('tr');
    for (let i = 6; i < headers.length; i++) { // Начинаем с 7-го столбца (индекс 6)
        const th = document.createElement('th');
        th.textContent = headers[i];
        headerRow.appendChild(th);
    }
    table.appendChild(headerRow);
    const percentColumns = ['WAPE, %', 'BIAS, %', 'Доля, %', 'Доля, %2', 'недопрогноз, %', 'перепрогноз, %'];

// Заполнение таблицы данными, начиная с 7-го столбца
data.forEach(row => {
  const tr = document.createElement('tr');
  for (let i = 6; i < headers.length; i++) { // Начинаем с 7-го столбца (индекс 6)
      const td = document.createElement('td');
      let cellValue = row[headers[i]];
    
          if (typeof cellValue === 'number') {
           // Проверяем, есть ли соответствующее название в столбце "МЕРЫ"
           if (row['МЕРЫ'] && percentColumns.includes(row['МЕРЫ'])) {
            cellValue = (cellValue * 100).toFixed(0) + '%'; // Преобразование в процент
          } else {
              cellValue = cellValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });// Округл, разделение на локали до без знаков после запятой для остальных чисел
          }
        }
          td.textContent = cellValue;
          tr.appendChild(td);
      }
      table.appendChild(tr);
  });
iframeDocument.body.appendChild(table);
};

// const url = './public/images/users/regAssort2.xlsx';// ссылки для локального компа
// fetch('./public/images/users/regAssort2.xlsx')// ссылки для локального компа
const url = '   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/regAssort3.xlsx';
fetch('   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/regAssort3.xlsx')
// fetch('./public/images/demo_file/regAssort3.xlsx')// ссылки для локального компа
    .then(response => {
        if (!response.ok) {
            throw new Error('Сеть не отвечает');
        }
        return response.arrayBuffer();
    })
    .then(data => {
        const workbook = XLSX.read(data, { type: 'array' });
        const firstSheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[firstSheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);

        // console.log(jsonData); // Проверка загруженных данных

        const filteredData = window.filterData(jsonData);
        window.displayTable(filteredData);
    })
    .catch(error => {
        console.error('Ошибка загрузки файла:', error);
    });
};
  
//NEWS PRODUCTS global**********************************************************************************~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
       // document.getElementById('regular_assort__calculateForecastButton').addEventListener('click', loadAndFilterData);
    
       window.loadAndFilterDataNewProducts = function() {
        window.saveGlobalParametersRegularNewProducts = function() {
            let currentData = JSON.parse(localStorage.getItem('globalParametersNewProducts'));
            if (!currentData) {
                currentData = {};
            }
            const newProductAggregationGeo = document.getElementById('new_product__aggregation-geo'); //забираю
            const newProductAggregationGroup = document.getElementById('new_product__aggregation-group'); //забираю
            const newProductAggregationAddParameter = document.getElementById('new_product__aggregation-parameter'); //забираю


            const AggregationGeo = newProductAggregationGeo.options[newProductAggregationGeo.selectedIndex].text;//присваиваю
            const AggregationGroup = newProductAggregationGroup.options[newProductAggregationGroup.selectedIndex].text;//присваиваю
            const AggregationAddParameter = newProductAggregationAddParameter.options[newProductAggregationAddParameter.selectedIndex].text;//присваиваю


            currentData['агрегат по географии'] = AggregationGeo; // добавляю в словарь
            currentData['агрегат по позиции'] = AggregationGroup; // добавляю в словарь
            currentData['дополнительные показатели'] = AggregationAddParameter; // добавляю в словарь
            localStorage.setItem('globalParametersNewProducts', JSON.stringify(currentData));
        }
        window.saveGlobalParametersRegularNewProducts();

        window.filterDataNewProducts = function(data) {
            const parameters = JSON.parse(localStorage.getItem('globalParametersNewProducts'));
            return data.filter(row => {
                return Object.keys(parameters).every(key => {
                    if (row[key] !== undefined) {
                      return row[key].toString().toLowerCase() === parameters[key].toString().toLowerCase();
                    }
                    return true;
                });
            });
        };

        window.displayTableNewProducts = function(data) {
            const iframe = document.getElementById('new_product_PreviewIframe');
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.body.innerHTML = '';

            // Добавление стилей
  const style = document.createElement('style');
  style.textContent = 
  `table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0px;
    font-size: 12px;
    font-size: 16px;
    font-family: 'Arial', sans-serif; 
}
th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    width: auto;
}
th {
    background-color:rgb(36, 76, 223);
    color: white; 
    font-family: 'Arial', sans-serif;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
tr:hover {
    background-color: #ddd;
}
     td:first-child {
  font-weight: bold;
  font-family: 'Arial', sans-serif;`
;
  iframeDocument.head.appendChild(style);
            const table = iframeDocument.createElement('table');
            table.innerHTML = ''; // Очистка предыдущего содержимого
            if (data.length === 0) {
                table.innerHTML = '<tr><td colspan="100%">Нет данных для отображения</td></tr>';
                iframeDocument.body.appendChild(table);
                return;
            }

             // Определяем желаемый порядок
    const desiredOrder = [
      'WAPE, %',
      'BIAS, %',
      'Кол-во позиций с прогнозом',
      'Всего позиций с продажами',
      'Доля, %',
      'недопрогноз, %',
      'перепрогноз, %',
      'Объем прогноза, шт',
      'Объем продаж, шт',
      'Доля, %2'
  ];
  // Сортируем данные по желаемому порядку
  data.sort((a, b) => {
    const indexA = desiredOrder.indexOf(a['МЕРЫ']); // Приводим к нижнему регистру
    const indexB = desiredOrder.indexOf(b['МЕРЫ']);
    
    // Сравниваем индексы
    return indexA - indexB;
});

// Создание заголовков, начиная с 4-го столбца
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  for (let i = 3; i < headers.length; i++) { // Начинаем с 4-го столбца (индекс 3)
      const th = document.createElement('th');
      th.textContent = headers[i];
      headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  const percentColumns = ['WAPE, %', 'BIAS, %', 'Доля, %', 'Доля, %2', 'недопрогноз, %', 'перепрогноз, %'];

// Заполнение таблицы данными, начиная с 7-го столбца
data.forEach(row => {
const tr = document.createElement('tr');
for (let i = 3; i < headers.length; i++) { // Начинаем с 4-го столбца (индекс 3)
    const td = document.createElement('td');
    let cellValue = row[headers[i]];
  
        if (typeof cellValue === 'number') {
         // Проверяем, есть ли соответствующее название в столбце "МЕРЫ"
         if (row['МЕРЫ'] && percentColumns.includes(row['МЕРЫ'])) {
          cellValue = (cellValue * 100).toFixed(0) + '%'; // Преобразование в процент
        } else {
            cellValue = cellValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });// Округление до двух знаков после запятой для остальных чисел
        }
      }
        td.textContent = cellValue;
        tr.appendChild(td);
    }
    table.appendChild(tr);
});
iframeDocument.body.appendChild(table);
};

        // const url = './public/images/users/regAssort2.xlsx';// ссылки для локального компа
        // fetch('./public/images/users/regAssort2.xlsx')// ссылки для локального компа
        const url = '   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/newProducts1.xlsx';
        fetch('   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/newProducts1.xlsx')
        // fetch('./public/images/demo_file/newProducts1.xlsx')// ссылки для локального компа
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                return response.arrayBuffer();
            })
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // console.log(jsonData); // Проверка загруженных данных

                const filteredData = window.filterDataNewProducts(jsonData);
                window.displayTableNewProducts(filteredData);
            })
            .catch(error => {
                console.error('Ошибка загрузки файла:', error);
            });
    };


    //PROMO global-------------+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
       window.loadAndFilterDataPromo = function() {
        window.saveGlobalParametersPromo = function() {
            let currentData = JSON.parse(localStorage.getItem('globalParametersPromo'));
            if (!currentData) {
                currentData = {};
            }
            const promoСoefficients = document.getElementById('promo_method'); //забираю

            const promoCoefficient = promoСoefficients.options[promoСoefficients.selectedIndex].text;//присваиваю

            currentData['выбор коэффициентов'] = promoCoefficient; // добавляю в словарь

            localStorage.setItem('globalParametersPromo', JSON.stringify(currentData));
        }
        window.saveGlobalParametersPromo();

        window.filterDataPromo = function(data) {
            const parameters = JSON.parse(localStorage.getItem('globalParametersPromo'));
            return data.filter(row => {
                return Object.keys(parameters).every(key => {
                    if (row[key] !== undefined) {
                      return row[key].toString().toLowerCase() === parameters[key].toString().toLowerCase();
                    }
                    return true;
                });
            });
        };

        window.displayTablePromo = function(data) {
            const iframe = document.getElementById('promo_PreviewIframe');
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.body.innerHTML = '';

            // Добавление стилей
  const style = document.createElement('style');
  style.textContent = 
  `table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 0px;
    font-size: 12px;
    font-size: 16px;
    font-family: 'Arial', sans-serif; 
}
th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: left;
    width: auto;
}
th {
    background-color:rgb(36, 76, 223);
    color: white; 
    font-family: 'Arial', sans-serif;
}
tr:nth-child(even) {
    background-color: #f2f2f2;
}
tr:hover {
    background-color: #ddd;
}
     td:first-child {
  font-weight: bold;
  font-family: 'Arial', sans-serif;`
;
  iframeDocument.head.appendChild(style);
            const table = iframeDocument.createElement('table');
            table.innerHTML = ''; // Очистка предыдущего содержимого
            if (data.length === 0) {
                table.innerHTML = '<tr><td colspan="100%">Нет данных для отображения</td></tr>';
                iframeDocument.body.appendChild(table);
                return;
            }

             // Определяем желаемый порядок
    const desiredOrder = [
      'WAPE, %',
      'BIAS, %',
      'Кол-во позиций с прогнозом',
      'Всего позиций с продажами',
      'Доля, %',
      'недопрогноз, %',
      'перепрогноз, %',
      'Объем прогноза, шт',
      'Объем продаж, шт',
      'Доля, %2'
  ];
  // Сортируем данные по желаемому порядку
  data.sort((a, b) => {
    const indexA = desiredOrder.indexOf(a['МЕРЫ']); // Приводим к нижнему регистру
    const indexB = desiredOrder.indexOf(b['МЕРЫ']);
    
    // Сравниваем индексы
    return indexA - indexB;
});

// Создание заголовков, начиная с 4-го столбца
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  for (let i = 2; i < headers.length; i++) { // Начинаем с 4-го столбца (индекс 3)
      const th = document.createElement('th');
      th.textContent = headers[i];
      headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  const percentColumns = ['WAPE, %', 'BIAS, %', 'Доля, %', 'Доля, %2', 'недопрогноз, %', 'перепрогноз, %'];

// Заполнение таблицы данными, начиная с 7-го столбца
data.forEach(row => {
const tr = document.createElement('tr');
for (let i = 2; i < headers.length; i++) { // Начинаем с 4-го столбца (индекс 3)
    const td = document.createElement('td');
    let cellValue = row[headers[i]];
  
        if (typeof cellValue === 'number') {
         // Проверяем, есть ли соответствующее название в столбце "МЕРЫ"
         if (row['МЕРЫ'] && percentColumns.includes(row['МЕРЫ'])) {
          cellValue = (cellValue * 100).toFixed(0) + '%'; // Преобразование в процент
        } else {
            cellValue = cellValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });// Округление до двух знаков после запятой для остальных чисел
        }
      }
        td.textContent = cellValue;
        tr.appendChild(td);
    }
    table.appendChild(tr);
});
iframeDocument.body.appendChild(table);
};

        // const url = './public/images/users/regAssort2.xlsx';// ссылки для локального компа
        // fetch('./public/images/users/regAssort2.xlsx')// ссылки для локального компа
        const url = '   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/promo.xlsx';
        fetch('   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/promo.xlsx')
        // fetch('./public/images/demo_file/promo.xlsx')// ссылки для локального компа
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                return response.arrayBuffer();
            })
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // console.log(jsonData); // Проверка загруженных данных

                const filteredData = window.filterDataPromo(jsonData);
                window.displayTablePromo(filteredData);
            })
            .catch(error => {
                console.error('Ошибка загрузки файла:', error);
            });
    };

    //summaryPlanGlobalMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
       // document.getElementById('regular_assort__calculateForecastButton').addEventListener('click', loadAndFilterData);
    
       window.loadAndFilterDataSummaryPlan = function() {
        window.saveGlobalParametersSummaryPlan = function() {
            let currentData = JSON.parse(localStorage.getItem('globalParametersSummaryPlan'));
            if (!currentData) {
                currentData = {};
            }
            // const newProductAggregationGeo = document.getElementById('new_product__aggregation-geo'); //забираю
            // const newProductAggregationGroup = document.getElementById('new_product__aggregation-group'); //забираю
            // const newProductAggregationAddParameter = document.getElementById('new_product__aggregation-parameter'); //забираю
                //Получаем значения чекбоксов
    currentData['регулярный ассортимент'] = document.getElementById("summary_plan__regAssort").checked ? "true" : "false";;//забираю
    currentData['промо'] = document.getElementById("summary_plan__promo").checked ? "true" : "false";;
    currentData['новинки'] = document.getElementById("summary_plan__newsProducts").checked ? "true" : "false";;
    currentData['учёт каннибализации'] = document.getElementById("summary_plan__cannibalization").checked ? "true" : "false";

            // const AggregationGeo = newProductAggregationGeo.options[newProductAggregationGeo.selectedIndex].text;//присваиваю
            // const AggregationGroup = newProductAggregationGroup.options[newProductAggregationGroup.selectedIndex].text;//присваиваю
            // const AggregationAddParameter = newProductAggregationAddParameter.options[newProductAggregationAddParameter.selectedIndex].text;//присваиваю

            // currentData['агрегат по географии'] = AggregationGeo; // добавляю в словарь
            // currentData['агрегат по позиции'] = AggregationGroup; // добавляю в словарь
            // currentData['дополнительные показатели'] = AggregationAddParameter; // добавляю в словарь
            localStorage.setItem('globalParametersSummaryPlan', JSON.stringify(currentData));
        }
        window.saveGlobalParametersSummaryPlan();

        window.filterDataSummaryPlan = function(data) {
            const parameters = JSON.parse(localStorage.getItem('globalParametersSummaryPlan'));
            return data.filter(row => {
                return Object.keys(parameters).every(key => {
                    if (row[key] !== undefined) {
                      return row[key].toString().toLowerCase() === parameters[key].toString().toLowerCase();
                    }
                    return true;
                });
            });
        };



        window.displayTableSummaryPlan = function(data) {
            const iframe = document.getElementById('summaryPlan_PreviewIframe');
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            iframeDocument.body.innerHTML = '';

            // Добавление стилей
  const style = document.createElement('style');
  style.textContent = 
      `table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 0px;
          font-size: 12px;
          font-size: 16px;
          font-family: 'Arial', sans-serif; 
      }
      th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
          width: auto;
      }
      th {
          background-color:rgb(36, 76, 223);
          color: white; 
          font-family: 'Arial', sans-serif;
      }
      tr:nth-child(even) {
          background-color: #f2f2f2;
      }
      tr:hover {
          background-color: #ddd;
      }
           td:first-child {
        font-weight: bold;
        font-family: 'Arial', sans-serif;`
  ;
  iframeDocument.head.appendChild(style);
            const table = iframeDocument.createElement('table');
            table.innerHTML = ''; // Очистка предыдущего содержимого
            if (data.length === 0) {
                table.innerHTML = '<tr><td colspan="100%">Нет данных для отображения</td></tr>';
                iframeDocument.body.appendChild(table);
                return;
            }

             // Определяем желаемый порядок
    const desiredOrder = [
      'WAPE, %',
      'BIAS, %',
      'Кол-во позиций с прогнозом',
      'Всего позиций с продажами',
      'Доля, %',
      'недопрогноз, %',
      'перепрогноз, %',
      'Объем прогноза, шт',
      'Объем продаж, шт',
      'Доля, %2'
  ];
  // Сортируем данные по желаемому порядку
  data.sort((a, b) => {
    const indexA = desiredOrder.indexOf(a['МЕРЫ']); // Приводим к нижнему регистру
    const indexB = desiredOrder.indexOf(b['МЕРЫ']);
    
    // Сравниваем индексы
    return indexA - indexB;
});

// Создание заголовков, начиная с 4-го столбца
  const headers = Object.keys(data[0]);
  const headerRow = document.createElement('tr');
  for (let i = 4; i < headers.length; i++) { // Начинаем с 4-го столбца (индекс 3)
      const th = document.createElement('th');
      th.textContent = headers[i];
      headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  const percentColumns = ['WAPE, %', 'BIAS, %', 'Доля, %', 'Доля, %2', 'недопрогноз, %', 'перепрогноз, %'];

// Заполнение таблицы данными, начиная с 7-го столбца
data.forEach(row => {
const tr = document.createElement('tr');
for (let i = 4; i < headers.length; i++) { // Начинаем с 4-го столбца (индекс 3)
    const td = document.createElement('td');
    let cellValue = row[headers[i]];
  
        if (typeof cellValue === 'number') {
         // Проверяем, есть ли соответствующее название в столбце "МЕРЫ"
         if (row['МЕРЫ'] && percentColumns.includes(row['МЕРЫ'])) {
          cellValue = (cellValue * 100).toFixed(0) + '%'; // Преобразование в процент
        } else {
            cellValue = cellValue.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });// Округление до двух знаков после запятой для остальных чисел
        }
      }
        td.textContent = cellValue;
        tr.appendChild(td);
    }
    table.appendChild(tr);
});
iframeDocument.body.appendChild(table);
};

        // const url = './public/images/users/regAssort2.xlsx';// ссылки для локального компа
        // fetch('./public/images/users/regAssort2.xlsx')// ссылки для локального компа
        const url = '   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/summaryPlan.xlsx';
        fetch('   https://raw.githubusercontent.com/Kujavia/SputnikPro_test_2_2/master/public/images/demo_file/summaryPlan.xlsx')
        // fetch('./public/images/demo_file/summaryPlan.xlsx')// ссылки для локального компа
            .then(response => {
                if (!response.ok) {
                    throw new Error('Сеть не отвечает');
                }
                return response.arrayBuffer();
            })
            .then(data => {
                const workbook = XLSX.read(data, { type: 'array' });
                const firstSheetName = workbook.SheetNames[0];
                const worksheet = workbook.Sheets[firstSheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);

                // console.log(jsonData); // Проверка загруженных данных

                const filteredData = window.filterDataSummaryPlan(jsonData);
                window.displayTableSummaryPlan(filteredData);
            })
            .catch(error => {
                console.error('Ошибка загрузки файла:', error);
            });
    };
