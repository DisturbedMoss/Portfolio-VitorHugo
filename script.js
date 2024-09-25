//Dark mode
let darkMode = localStorage.getItem('darkMode');
const themeSwitch = document.getElementById('themeSwitch');

const enableDarkMode = () => {
    document.body.classList.add('darkMode')
    localStorage.setItem('darkMode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkMode')
    localStorage.setItem('darkMode', null)
}

if(darkMode === "active") enableDarkMode();

themeSwitch.addEventListener("click", () => {
    darkMode = localStorage.getItem('darkMode')
    darkMode !== "active" ? enableDarkMode() : disableDarkMode();
})
//Dark mode
//Idioma
const languageBtn = document.getElementById('language');
const spanLanguage = languageBtn.querySelectorAll('span');
let languageMode = localStorage.getItem('languageMode');

const enableEnglish = () => {
    spanLanguage.forEach(span => {
        span.classList.add('languageMode');
        localStorage.setItem('languageMode', 'active');
        english();
    });
};
const disableEnglish = () => {
    spanLanguage.forEach(span => {
        span.classList.remove('languageMode');
        localStorage.setItem('languageMode', null);
        portuguese();
    });
};

if(languageMode === "active") enableEnglish();

function button(evento) {
    evento.preventDefault();

    languageMode = localStorage.getItem('languageMode');
    languageMode !== "active" ? enableEnglish() : disableEnglish();
}

function english(){

    const lang1 = document.querySelector('.lang1');
    const lang2 = document.querySelector('.lang2');
    const lang3 = document.querySelector('.lang3');
    const lang4 = document.querySelector('.lang4');
    const lang5 = document.querySelector('.lang5');
    const lang6 = document.querySelector('.lang6');
    const lang7 = document.querySelector('.lang7');
    const lang8 = document.querySelector('.lang8');
    const lang9 = document.querySelector('.lang9');
    const lang10 = document.querySelector('.lang10');
    const lang11 = document.querySelector('.lang11');
    const lang12 = document.querySelector('.lang12');

    lang1.innerHTML = 'Technologies';
    lang2.innerHTML = 'About me';
    lang3.innerHTML = 'Projects';
    lang4.innerHTML = 'About me';
    lang5.innerHTML = `<p>My name is Vitor Hugo, I'm 23 years old and I live in Cabo Frio. I'm currently studying Systems Analysis and Development and I'm looking for a job in the front-end development area.</p><p>Since I was a child, I've always had an interest in drawing, and this has helped me develop an artistic and creative vision that greatly assists me in producing the design of my projects.</p><p>Since 2020, I've been dedicated to studying web programming. I've studied web components such as HTML and CSS and the JavaScript language, and I've been developing personal projects to put my acquired knowledge into practice.</p><p>I seek to enhance my skills in the area of front-end development, keeping up with market trends and studying new technologies that can further enrich my knowledge. Additionally, I intend to delve deeper into full-stack development, having acquired a basic understanding of MySQL and Git. I believe that a solid understanding of front-end, combined with back-end knowledge, is fundamental to the success of any programmer.</p><p>My goal is to build a solid and successful career in the field of technology, applying my technical skills and my artistic vision to create innovative and impactful solutions. I believe that the front-end development area is full of challenging opportunities, and I am determined to face each challenge with enthusiasm and dedication.</p><p>I am fully convinced that with effort and perseverance, I will achieve my objectives.</p>`;
    lang6.innerHTML = 'Developer Front-end';
    lang7.innerHTML = '&copy; 2024 Vitor Hugo. All rights reserved.';
    lang8.innerHTML = 'Intermediate JavaScript skills';
    lang9.innerHTML = 'Intermediate HTML5 skills';
    lang10.innerHTML = 'Intermediate CSS3 skills';
    lang11.innerHTML = 'Beginner Git skills';
    lang12.innerHTML = 'Beginner MySQL skills';
}
function portuguese(){

    const lang1 = document.querySelector('.lang1');
    const lang2 = document.querySelector('.lang2');
    const lang3 = document.querySelector('.lang3');
    const lang4 = document.querySelector('.lang4');
    const lang5 = document.querySelector('.lang5');
    const lang6 = document.querySelector('.lang6');
    const lang7 = document.querySelector('.lang7');
    const lang8 = document.querySelector('.lang8');
    const lang9 = document.querySelector('.lang9');
    const lang10 = document.querySelector('.lang10');
    const lang11 = document.querySelector('.lang11');
    const lang12 = document.querySelector('.lang12');

    lang1.innerHTML = 'Tecnologias';
    lang2.innerHTML = 'Sobre mim';
    lang3.innerHTML = 'Projetos';
    lang4.innerHTML = 'Sobre mim';
    lang5.innerHTML = '<p>Meu nome é Vitor Hugo, tenho 23 anos e moro em Cabo Frio. Atualmente, estou cursando Análise e Desenvolvimento de Sistemas e estou à procura de trabalho na área de desenvolvimento front-end. Desde pequeno, sempre tive interesse por desenhos, e isso me ajudou a desenvolver uma visão artística e criativa que me auxilia bastante na produção do design dos meus projetos.</p><p>Desde 2020, tenho me dedicado aos estudos relacionados à programação web. Estudei Componentes web, como HTML e CSS e a linguagem JavaScript, e venho desenvolvendo projetos pessoais para colocar em prática os conhecimentos adquiridos.</p><p>Busco aprimorar minhas habilidades na área de desenvolvimento front-end, acompanhando as tendências do mercado e estudando novas tecnologias que possam enriquecer ainda mais o meu conhecimento. Além disso, pretendo me aprofundar em desenvolvimento full stack adquiri conhecimento básico em MySQL e Git. Acredito que um bom conhecimento em front-end aliado ao conhecimento de back end são fundamentais para o sucesso de qualquer programador</p><p>Tenho como objetivo construir uma carreira sólida e bem-sucedida no campo da tecnologia, aplicando minhas habilidades técnicas e minha visão artística para criar soluções inovadoras e impactantes. Acredito que a área de desenvolvimento front-end é repleta de oportunidades desafiadoras, e estou determinado a enfrentar cada desafio com entusiasmo e dedicação.</p><p>Tenho plena convicção de que, com esforço e perseverança, alcançarei meus objetivos.</p>';
    lang6.innerHTML = 'Desenvolvedor Front-end';
    lang7.innerHTML = '&copy; 2024 Vitor Hugo. Todos os direitos reservados.';
    lang8.innerHTML = 'Javascript | Nível Intermediário';
    lang9.innerHTML = 'HTML5 | Nível Intermediário';
    lang10.innerHTML = 'CSS3 | Nível Intermediário';
    lang11.innerHTML = 'Git | Nível Básico';
    lang12.innerHTML = 'MySQL | Nível Básico';
}
if(languageBtn){languageBtn.addEventListener('click', button);};
//Idioma
//Auto scroll
const links = document.querySelectorAll('.navbar-nav a');

links.forEach(link => {
    link.addEventListener('click', (evento) => {
        evento.preventDefault();

        const sectionId = link.getAttribute('href');
        const section = document.querySelector(sectionId);

        window.scrollTo({
            top: section.offsetTop-100,
            behavior:'smooth'
        });
    });
});
//Auto scroll
//Hamburger
const hamburger = document.querySelector('.hamburger');
const hamburgerLinks = document.querySelector('.links')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    hamburgerLinks.classList.toggle('active');
});
//Hamburger