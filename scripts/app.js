//Define o comportamento das interações com barra de navegação
const navButton = document.querySelector(".nav__button");
const navLinks = document.querySelector(".nav__links");
const clickOut = document.querySelectorAll("section");

navButton.addEventListener("click", () => {
    navButton.classList.toggle("ativo");
    navLinks.classList.toggle("ativo");
})
clickOut.forEach((section) => {
    section.addEventListener("click", () => {
        navButton.classList.remove("ativo");
        navLinks.classList.remove("ativo");
    })
})

//Envia o e-mail do usuário para a planilha.
document.querySelector('#formulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.querySelector('#email').value;

    fetch('https://api.sheetmonkey.io/form/fMQ24qrsnpG39y4Ad11scz',  {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({email}),
    })

    const ctaButton = document.querySelector("#ctabutton");
    if (alterado = false) {
        ctaButton.textContent = 'Cadastro realizado com sucesso!';
    } else {
        ctaButton.textContent = 'Registration successful!';
    }
});

//Traduz a página para o inglês

let alterado = false;
const tradutor = document.querySelector('.tradutor');
const elementos = document.querySelectorAll('.t');
const textosOriginais = Array.from(elementos).map(elemento => elemento.innerHTML);
const textosTraduzidos = [
    'Home',
    'Products',
    'About',
    'Stage',
    'Contact',
    'Traduzir',
    'WELCOME TO <span>ZADA</span> <br/>CONNECT WITH<br/> YOUR BETTER VERSION<br/>',
    "We don't just fit in as a clothing brand; we are inspiration in motion. Our goal is to drive and add to your personal development. We are here to encourage you to achieve your goals, overcome obstacles, and turn challenges into opportunities. Get inspired by our values and seek your best version, engage with the process, and surpass the top.",
    'ORIGINAL FROM BRASÍLIA',
    '“DRYFITZADA" SHIRT',
    "Polyamide with UV50+ protection",
    'Antibacterial',
    'Composition: 91% polyester, 9% elastane',
    'Weight: 160 g/m²',
    '"NOGIZADA" SHORTS',
    'Reinforced stitching',
    'Elastic waistband with adjustment',
    'TRANSFORM YOUR ENERGY WITH <span>ZADA</span> AND BOLD SNACKS',
    'Energy bar: Mix of almonds, honey, and cocoa. 100% natural ingredients from the cerrado. Weight 61g, 200kcal, 22g of protein, 25g of carbohydrates, 8g of total fats, 5g of fiber, zinc, and magnesium.',
    'At <span>ZADA</span>, every detail matters. From the packaging to the choice of nutrients. Always thinking about our roots. Our collaboration with Bold is an example of this.',
    'BOLDZADA is an unofficial partnership*',
    'At <span>ZADA</span>, our roots are deeply connected to our Brazilian cerrado. We find inspiration in the athletes, artists, and unique personalities of this region. Every project we create reflects this rich heritage, celebrating not only the calango lifestyle but also the local culture and talent. At <span>ZADA</span>, we strive to highlight and elevate our talents, contributing to a movement of pride and authenticity in each creation.',
    'Meet the <span>ZADA</span>TEAM, our community dedicated to connecting more deeply with you. Here, we seek to entertain and inspire through movement, providing a personalized and authentic experience. Explore with us the entire <span>ZADA</span> universe, where every interaction is an opportunity to share our vision and celebrate the passion for the lifestyle that unites us.',
    'Join our team!',
    'WHO SHINES ON THE <span>ZADA</span> STAGE',
    "Leonardo Souza de Oliveira, known as Leléo, was born in 2002 and grew up in Riacho II. At 11 years old, he started training jiu-jitsu and has been competing since he was 13 years old until now at 22 years old. Currently training at the We Flow Jiu-Jitsu school, he has accumulated several podiums and participations on the biggest stages in the world. <span>ZADA</span> is inspired by Leo's technical excellence, determination, and commitment to living the sport.",
    "Noah Werneck, born in 2014, son of parents from Brasília and currently living in Sacramento, California, trains at his father’s academy, Cassio Werneck, the last black belt world champion from Brasília in 2004. In just 2 years of competitions, Noah has already won over 60 medals. Inspired by Noah's exceptional dedication, <span>ZADA</span> is pleased to present him. His most important titles include the Pan-American and the two-time “American Nationals” champion.",
    'Join our team and learn more!',
    'Contact us and buy now!',
    'I want to receive exclusive offers from ZADA:',
    'Sign up now!',
    "ZADA &#xae; All rights reserved."
];

tradutor.addEventListener('click', ()=> {
    elementos.forEach((elemento, index) => {
        elemento.innerHTML = alterado ? textosOriginais[index] : textosTraduzidos[index];
    });
    alterado = !alterado;
    console.log(alterado)
})
