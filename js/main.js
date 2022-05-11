// menu
const menu = document.querySelector('.bars');
const navItems = document.querySelector('.nav-items');
const closeB = document.querySelector('.closeBtn');
const navLinks = document.querySelectorAll('.nav-links');
const box = document.getElementById('box')

const popUpBtn = document.getElementById('modal')

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
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

// openModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = document.querySelector(button.dataset.modalTarget)
//         openModal(modal)
//     })
// })


// overlay.addEventListener('click', () => {
//     const modals = document.querySelectorAll('.modal.active')
//     modals.forEach(modal => {
//         closeModal(modal)
//     })
// })

// closeModalButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const modal = button.closest('.modal')
//         closeModal(modal)
//     })
// })

// function openModal(modal) {
//     if (modal == null) return
//     modal.classList.add('active')
//     overlay.classList.add('active')
// }




// //CARDS 
// const seeProject = document.querySelectorAll('.btn-pop');
// const popup = document.querySelector('.pop-bg');

// seeProject.forEach((project) => {
//   project.addEventListener('click', () => {
//     popup.classList.add('display');
//   });
// });

const cards = [
    {   id:1,
        heading: 'Multi-Post Stories',
        description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
        description2 : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s with the
        releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
        when an unknown printer took a galley of type veris lapoa todoe.`,
        languages: ['css', 'HTML','Bootstrap', 'Ruby'],
        languages2: ['css', 'HTML', 'Ruby on Rails','Github'],

        image: "/images/popup.png",
        seelive: 'See live',
        seesource: 'See source',
        button: 'See project'
    },
    {
        id:2,
        heading: 'Multi-Post Stories',
        description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
        description2 : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s with the
        releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
        when an unknown printer took a galley of type veris lapoa todoe.`,
        languages: ['css', 'HTML','Bootstrap', 'Ruby'],
        languages2: ['css', 'HTML', 'Ruby on Rails','Github'],

        button: 'See project',
        image: "/images/popup.png",
        seelive: 'See live',
        seesource: 'See source'
    },
    {
        id:3,
        heading: 'Multi-Post Stories',
        description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
        description2 : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s with the
        releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
        when an unknown printer took a galley of type veris lapoa todoe.`,
        languages: ['css', 'HTML','Bootstrap', 'Ruby'],
        languages2: ['css', 'HTML', 'Ruby on Rails','Github'],

        image: "/images/popup.png",

        button: 'See project',
        seelive: 'See live',
        seesource: 'See source'
    },
    {
        id:4,
        heading: 'Multi-Post Stories',
        description: `A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.`,
        description2 : `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it 1960s with the
        releaLorem Ipsum is simply dummy text of the printing and typesetting  ever since the 1500s,
        when an unknown printer took a galley of type veris lapoa todoe.`,
        languages: ['css', 'HTML','Bootstrap', 'Ruby'],
        languages2: ['css', 'HTML', 'Ruby on Rails','Github'],
        image: "/images/popup.png",
        button: 'See project',
        seelive: 'See live',
        seesource: 'See source'
    }
]

// const ul = document.querySelector('.cards');
// const popDiv = document.querySelector('.pop-bg');

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
        <button data-modal-target="#modal" onclick="modal(${card.id})">See Project</button>
    </div>
</div>
`
).join('');

  box.innerHTML += projecCards



  const popUp = (card) => {
      const temp = document.createElement('template')
      temp.innerHTML = `
    <div class="modal-header">
        <h3 class="cd12">${card.heading}</h3>
      <button data-close-button class="close-button" onclick="closeModal()">&times;</button>
    </div>
    <img src="${card.image}" alt="popup-img">
    <p class="modal-body">
        ${card.description2}
    </p>
    <ul>
    ${card.languages2.map((lang) => `<li>${lang}</li>`).join('')}
    </ul>
    <button>${card.seelive}</button>
    <button>${card.seesource}</button>
      `
      popUpBtn.classList.add('active')
      popUpBtn.appendChild(temp.content)


  }


const modal = (id) => {
    cards.find((item) => {
        if(Number(id) === Number(item.id)){
            return popUp(item)
        }
        return undefined
    })
}

function closeModal() {
    popUpBtn.classList.remove('active')
    // overlay.classList.remove('active')
}


// ul.innerHTML += projecCards;

// const modalData = (card) => {
//   const template = document.createElement('template');

//   template.innerHTML = `
//         <li class="card-details pop-data">
//           <div class="close-btn">
//           <img class="close-x" onclick=(vanish()) src="./close.png" alt="close"></div>
//          <div> <h2 class="title t-pop">${card.title}</h2></div>
//          <div>
//           <ul class="tech-btns pop-btns">
//             <li>CANOPY</li>
//             <li class="common">Back End Dev</li>
//             <li class="common">2015</li>
//           </ul>
//           </div>
//           <div class="image">
          
//             <img src="${card.image}" alt="tonic" />
//           </div>
//           <div class="text-div pop-div">
//             <p class="paragraph p-pop">
//             ${card.description}
//             </p>
//             <div>
//             <ul class="languages">
//             ${card.language.map((lang) => `<li>${lang}</li>`).join('')}
//             </ul>
//             <div class="links">
//             <button class="see-project see-project-dsk" data-index-number="2" href="${
//   card.links[0]
// }"
//               >See live <span> <img class="logo-tag" src="./Icon.png" alt="" srcset=""></span> </button
//             >
//              <button class="see-project see-project-dsk" data-index-number="2" href="${
//   card.links[1]
// }"
//               >See source <span><img class="logo-tag" src="./Vector.png" alt="" srcset=""></span> 
//             </button>
//           </div>
//           </div>
//           </div>
//         </li>
    
//     `;

//   popDiv.appendChild(template.content);
// };

