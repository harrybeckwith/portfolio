const croatia = [
    {
        title: 'image 1'
        , imgSrc: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=4e3234720824a355e0981cba348e7483'
        , desc: 'description image 1'
  }
    , {
        title: 'image 2'
        , imgSrc: 'https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=ff050cdcff5e11b1a3b59327b0a3830f'
        , desc: 'description image 2'
  }
    , {
        title: 'image 3'
        , imgSrc: 'https://images.unsplash.com/photo-1499063078284-f78f7d89616a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=ebf9ef0069fa66ab414320004df5dece'
        , desc: 'description image 3'
  }
];
const germany = [
    {
        title: 'germany'
        , imgSrc: 'https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=4e3234720824a355e0981cba348e7483'
        , desc: 'description image 1'
  }
    , {
        title: 'image 2'
        , imgSrc: 'https://images.unsplash.com/photo-1502301197179-65228ab57f78?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=ff050cdcff5e11b1a3b59327b0a3830f'
        , desc: 'description image 2'
  }
    , {
        title: 'image 3'
        , imgSrc: 'https://images.unsplash.com/photo-1499063078284-f78f7d89616a?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&s=ebf9ef0069fa66ab414320004df5dece'
        , desc: 'description image 3'
  }
];
const gallery = document.querySelector('.gallery');
const selected = document.querySelector('.selected');
const selectedTitle = document.querySelector('.selected__title');
const selectedDesc = document.querySelector('.selected__desc');
const selectedImg = document.querySelector('.selected__img');

function destination(country) {
    for (var i = 0; i <= country.length; i++) {
        // This is the number we're on...
        var num = country[i];
        // We're creating a DOM element for the number
        // create html 
        // include object data
        var wrap = document.createElement('div');
        wrap.className = 'gallery__wrap';
        var elem = document.createElement('img');
        elem.className = 'gallery__img';
        elem.src = num.imgSrc;
        var title = document.createElement('h2');
        title.className = 'gallery__title';
        title.textContent = num.title;
        // combine to wrap
        wrap.appendChild(elem);
        wrap.appendChild(title);
        // ... and when we click, alert the value of `num`
        elem.addEventListener('click', (function (numCopy) {
            return function () {
                selectedImg.innerHTML = `<img src = "${numCopy.imgSrc}">`;
                selectedTitle.innerHTML = `${numCopy.title}`;
                selectedDesc.innerHTML = `${numCopy.desc}`;
            };
        })(num));
        gallery.appendChild(wrap);
        // hover effect of text appearing
        var galleryDiv = document.querySelectorAll('.gallery__wrap');

        function displayText() {
            this.classList.add('gallery__hover');
        }

        function removeText() {
            this.classList.remove('gallery__hover');
        }
        galleryDiv.forEach(pic => pic.addEventListener('mouseenter', displayText));
        galleryDiv.forEach(pic => pic.addEventListener('mouseleave', removeText));
    }
}
var path = window.location.pathname;
var pageName = path.split("/").pop();
console.log(pageName);
destination(eval(pageName));