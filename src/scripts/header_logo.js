import header_logo_src from '../assets/header_logo.png';

const header_logo = document.createElement('img');
header_logo.id = 'header_logo';
header_logo.src = header_logo_src;
header_logo.addEventListener('click', () => {
    location.reload();
});

export default header_logo;
