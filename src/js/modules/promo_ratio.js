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