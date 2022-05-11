// menu
const menu = document.querySelector('.bars');
const navItems = document.querySelector('.nav-items');
const closeB = document.querySelector('.closeBtn');
const navLinks = document.querySelectorAll('.nav-links');
const box = document.getElementById('box');

const popUpBtn = document.getElementById('modal');

menu.addEventListener('click', () => {
  navItems.classList.toggle('nav-bar');
  closeB.style.display = 'flex';
  menu.style.display = 'none';
});

function closeBtn() {
  navItems.classList.remove('nav-bar');
  menu.style.display = 'block';
}

navLinks.forEach((element) => {
  element.addEventListener('click', closeBtn);
});

// popup

const cards = [
  {
    id: 1,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s `,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],

    image: '/images/popup.png',
    seelive: 'See live',
    seesource: 'See source',
    button: 'See project',
  },
  {
    id: 2,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s `,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],

    button: 'See project',
    image: '/images/popup.png',
    seelive: 'See live',
    seesource: 'See source',
  },
  {
    id: 3,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        `,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],

    image: '/images/popup.png',

    button: 'See project',
    seelive: 'See live',
    seesource: 'See source',
  },
  {
    id: 4,
    heading: 'Multi-Post Stories',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    description2: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,.`,
    languages: ['css', 'HTML', 'Bootstrap', 'Ruby'],
    languages2: ['css', 'HTML', 'Ruby on Rails', 'Github'],
    image: '/images/popup.png',
    button: 'See project',
    seelive: 'See live',
    seesource: 'See source',
  },
];

const projecCards = cards
  .map(
    (card) => `
    <div class="work${card.id}">
    <div class="cd11"></div>
    <div class="cont">
        <h3 class="cd12">${card.heading}</h3>
        <p class="cd13">
           ${card.description} 
        </p>
        <div class="cd14">
            <ul class="cdlinks">
    ${card.languages.map((lang) => `<li>${lang}</li>`).join('')}
             
            </ul>
        </div>
        <button data-modal-target="#modal" class="openmd" onclick="modal(${card.id})">See Project</button>
    </div>
</div>
`,
  ).join('');

box.innerHTML += projecCards;

function closeModal() {
  popUpBtn.classList.remove('active');
}
const popUp = (card) => {
  const temp = document.createElement('template');
  popUpBtn.innerHTML = '';
  temp.innerHTML = `
    <div class="modal-header">
        <h3 class="cd12">${card.heading}</h3>
      <button data-close-button class="close-button">&times;</button>
    </div>
    <img src="${card.image}" alt="popup-img">
    <p class="modal-body">
        ${card.description2}
    </p>
    <ul>
    ${card.languages2.map((lang) => `<li>${lang}</li>`).join('')}
    </ul>
    <div class="p-btn">
    <button>${card.seelive} <i class="fa-solid fa-arrow-up-right-from-square"></i></button>
    <button>${card.seesource} <i class="fa-brands fa-github"></i></button>
    </div>
      `;

  popUpBtn.classList.add('active');
  popUpBtn.append(temp.content);
  const closebt = document.querySelector('.close-button');
  closebt.addEventListener('click', closeModal);
};

/* eslint-disable no-unused-vars */
const modal = (id) => {
  cards.find((item) => {
    if (Number(id) === Number(item.id)) {
      return popUp(item);
    }
    return undefined;
  });
};
