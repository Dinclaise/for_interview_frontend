let page = 1;
let loading = false;

const imageContainer = document.getElementById('image-container');
const loadingIndicator = document.getElementById('loading');

const fetchImages = () => {
    loading = true;
    loadingIndicator.style.display = 'block';
    setTimeout(() => {
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < 10; i++) {
            const img = document.createElement('img');
            img.src = `https://picsum.photos/300/200?random=${page * 10 + i}`;
            img.loading = 'lazy'; // Ленивая загрузка
            fragment.appendChild(img);
        }
        imageContainer.appendChild(fragment);
        loading = false;
        loadingIndicator.style.display = 'none';
    }, 1000); // Имитация задержки
};

window.addEventListener('scroll', () => {
    if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5 &&
        !loading
    ) {
        page++;
        fetchImages();
    }
});

// Инициализация первой загрузки
fetchImages();
