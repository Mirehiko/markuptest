$(document).ready(function () {

    const footer = document.querySelector('.footer');
    let dataLoading = false;
    const dataContainer = document.querySelector('.cards');
    let loadCount = 0;

    document.addEventListener('scroll', () => {
        if (loadCount > 1 && !dataLoading) {
            alert('All data loaded');
            dataLoading = true;
            return;
        }

        if (isInViewport(footer) && !dataLoading) {
            dataLoading = true;
            setTimeout(() => {
                dataContainer.append(getData());
                loadCount++;
                dataLoading = false;
            }, 1000);
        }
    });

});


function getData() {
    let result = '';
    const dataExample = {
        name: 'User name',
        image: '',
        youtubeViews: '123',
        vkViews: 'asd',
        instaViews: '56456',
    }
    for (let i = 0; i < 8; i++) {
        result += getCardTemplate(dataExample);
    }
    return result;
}

function getCardTemplate(item) {
    return `
        <div class="card-container">
          <div class="card-wrapper">
            <div class="card">
              <div class="cover">
                <div class="cover-text">
                  <h2>${item.name}</h2>
                  <div>${item.youtubeViews}</div>
                  <div>${item.vkViews}</div>
                  <div>${item.instaViews}</div>
                </div>
              </div>
              <img src="${item.image}">
            </div>
          </div>
        </div>
    `;
}

function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;
    var windowWidth = window.innerWidth || document.documentElement.clientWidth;

    return rect.bottom > 0 && rect.top < windowHeight && rect.right > 0 && rect.left < windowWidth;
}
