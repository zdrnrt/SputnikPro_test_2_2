
export default window.promo_PreviewButton = function() {
    const methodSelect = document.getElementById('promo_method');
    const selectedMethod = methodSelect.value;

    let csvFilePath;
    if (selectedMethod === 'promo_moving__сalculated') {
        csvFilePath = './images/demo_file/test_forecast_csv.csv'; 
    } else if (selectedMethod === 'promo_not_selected') {
          // Если выбран метод promo_not_selected, выводим сообщение в iframe
          const iframe = document.getElementById('promo_PreviewIframe');
          const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
          iframeDoc.open();
          iframeDoc.write(
              `<html>
              <head>
                  <title>Сообщение</title>
                  <style>
                      body {
                          font-family: Arial, sans-serif;
                          background-color: #f4f4f4;
                          text-align: start;
                          padding: 20px;
                      }
                      h1 {
                          color: #ff0000;/* Цвет текста сообщения */
                      }
                  </style>
              </head>
              <body>
                  <h5>Выберите коэффициент</h5>
              </body>
              </html>`
          );
          iframeDoc.close();
          return; // Завершаем выполнение функции
        


    } else if (selectedMethod === 'promo_weighted__custom') {
        csvFilePath = './images/demo_file/test_forecast_csv2.csv'; 
    } else {
        console.warn('Неизвестный метод прогнозирования:', selectedMethod);
        return; // Выход из функции, если метод не распознан
    }

    // Загружаем CSV-файл
    // fetch(csvFilePath)
    //     .then(response => {
    //         if (!response.ok) {
    //             throw new Error('Сетевой ответ не OK');
    //         }
    //         return response.text();
    //     })
    //     .then(data => {
    //         console.log('Данные CSV:');
    //         // Здесь  обработать данные  console.log('Данные CSV:', data);
    //     })
    //     .catch(error => {
    //         console.error('Ошибка при загрузке CSV:', error);
    //     });


    Papa.parse(csvFilePath, {
        download: true,
        header: true,
        complete: function(results) {
            const iframe = document.getElementById('promo_PreviewIframe');
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

            // Очищаем содержимое iframe
            iframeDoc.open();
            iframeDoc.write(
                `<html>
                <head>
                    <title>CSV Data</title>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            background-color: #f4f4f4;
                        }
                        table {
                            width: 100%;
                            border-collapse: collapse;
                            margin-top: 0px;
                            font-size: 12px;
                        }
                        th {
                            background-color: #4CAF50; /* Цвет фона заголовков */
                            font-size: 14px;
                            color: white; /* Цвет текста заголовков */
                            padding: 10px;
                        }
                        td {
                            border: 1px solid #ddd; /* Цвет границ ячеек */
                            padding: 8px;
                        }
                        tr:nth-child(even) {
                            background-color: #f2f2f2; /* Цвет фона четных строк */
                        }
                        tr:hover {
                            background-color: #ddd; /* Цвет фона строки при наведении */
                        }
                    </style>
                </head>
                <body>
                    <table>
                        <thead>
                            <tr>`
            );

            // Добавляем заголовки
            const headers = Object.keys(results.data[0]);
            headers.forEach(header => {
                iframeDoc.write(`<th>${header}</th>`);
            });
            iframeDoc.write('</tr></thead><tbody>');

            // Добавляем строки данных
            results.data.forEach(row => {
                iframeDoc.write('<tr>');
                Object.values(row).forEach(cell => {
                    iframeDoc.write(`<td>${cell}</td>`);
                });
                iframeDoc.write('</tr>');
            });

            iframeDoc.write('</tbody></table>');
            iframeDoc.write('</body></html>');
            iframeDoc.close();
        }
    });
}