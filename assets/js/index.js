// Notification Container
const closeNotify = document.querySelector('#close-notification');
const closeNotifyH2 = document.querySelector('#close__notification');
const showNotifyH2 = document.querySelector('.show-notification');
const closeNotifyH5 = document.querySelector('#close__notification__h5');

// Side Bars
const hamBarsEl = document.querySelector('#ham-bars');
const sideBarEl = document.querySelector('.side__bar');
const sideBarCloseBtn = document.querySelector('#close__btn');
// Price
const priceBtnEl = document.querySelectorAll('#price-btns');
const pricingEl = document.querySelectorAll('#pricing');
// Accordion
const accordionHeaders = document.querySelectorAll('.accordion-header');
const accordionContents = document.querySelectorAll('.accordion-content');
// Select Option
const selectTexts = document.querySelectorAll(".custom-select .select-text");
const selectOptions = document.querySelectorAll(".custom-select .select-options");
// Counter
const counterEl = document.querySelectorAll('#counter');
// Progress
const progressContainer = document.querySelectorAll('.progress');
// Nav Menu
// const menuHasChildEl = document.querySelector('.menu-item-has-children');
// const menuHasChild = document.querySelector('#opener');
// const subMenu = document.querySelector('#sub-menu');
const allmenuHasChild = document.querySelectorAll('.side__bar #sub-menu-opener');
const allsubMenu = document.querySelectorAll('.side__bar #sub-menu');

const navLinks = document.querySelectorAll('.nav-links');


const playBtnEl = document.querySelectorAll('.play-btn-con');

// scroll to top
const scrollTopEl = document.querySelector('.scroll__top');



// Accordion
const handleAccordion = (clickedheader,index) => {
  accordionHeaders.forEach((header) => {
    if(clickedheader === header){
      header.classList.toggle('active')
    }else{
      header.classList.remove('active')
    }
  })
  accordionContents.forEach((content,i) => {
    if(index === i){
      content.classList.toggle("active")
    }else{
      content.classList.remove('active')
    }
  })
}




// // Accordion
// accordionHeaders.forEach((header, index) => {
//   header.addEventListener('click', function () {
//     // Remove 'active' class from all other accordion headers
//     accordionHeaders.forEach((otherHeader) => {
//       if (otherHeader !== header) {
//         otherHeader.classList.remove('active');
//       }
//     });

//     // Remove 'active' class from all other accordion contents
//     accordionContents.forEach((content) => {
//       if (content !== this.nextElementSibling) {
//         content.style.display = 'none';
//       }
//     });

//     this.classList.toggle('active');
//     const content = this.nextElementSibling;

//     if (content.style.display === 'block') {
//       content.style.display = 'none';
//     } else {
//       content.style.display = 'block';
//     }
//   });

//   if (index === 0) {
//     header.classList.add('active');
//     accordionContents[index].style.display = 'block';
//   }
// });


// Notification Toggle
const closeNotification = () => {
  const notifyDiv = document.querySelector('#notification');
  notifyDiv.classList.toggle('active')
}

const toggleNotificationH2 = () => {
  const notifyDiv = document.querySelector('.notification-wrap');
  notifyDiv.classList.toggle('active');
}

// SideBar Toggle
const handleSideBar = () => {
  sideBarEl.classList.toggle('active')
}

// sideBar Close
const handleCloseSideBar = (e) => {
  if(e.target === sideBarEl || e.target === sideBarCloseBtn){
    sideBarEl.classList.toggle('active')
  }
}

// Price buttom and View Toggle
const handlePrice = (e) => {
  if(e.target === priceBtnEl[0]){
    priceBtnEl[0].classList.add('active')
    priceBtnEl[1].classList.remove('active')
    pricingEl[0].classList.add('active')
    pricingEl[1].classList.remove('active')
  }else{
    priceBtnEl[1].classList.add('active')
    priceBtnEl[0].classList.remove('active')
    pricingEl[1].classList.add('active')
    pricingEl[0].classList.remove('active')
  }
}


// Counter Start
const startCount = (counter) => {
  // Duration of the counter
    let speed = 200;

    const target = +counter.dataset.value;
    let count = 0;
    let increment = target / speed;

    const timer = setInterval(() => {
      count += increment;
      counter.innerText = `${Math.floor(count)} K`;

      if(count >= target){
        clearInterval(timer);
        counter.innerText = `${target} K`;
      }
    },8);
}

const handleCounter = () => {

  // Watching if the counter is in view or not
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        startCount(entry.target);
        observer.unobserve(entry.target);
      }
    })
  })

  // Looping through counter elements and passing to Intersection Observer
  counterEl.forEach(item => {
    observer.observe(item)
  })
}


// Progress Bar Start
const startProgressBar = (container) => {
  const progressThumb = container.querySelector('.progress-thumb');
  const progressLabel = container.querySelector('.progress-label');

  const dataValue = progressThumb.getAttribute('data-value');
  const targetValue = parseInt(dataValue);

  let currentValue = 0;

  const incrementValue = targetValue / 100;

  const interval = setInterval(()=>{
    if(currentValue >= targetValue){
      clearInterval(interval)
    }else{
      currentValue += incrementValue;
      progressThumb.style.width = currentValue + '%';
      progressLabel.textContent = Math.round(currentValue) + '%';
    }
  },15)
}

const handleProgressBar = () => {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        startProgressBar(entry.target);
        observer.unobserve(entry.target);
      }
    })
  })
  progressContainer.forEach(item => {
    observer.observe(item);
  })
}


const handleMenuChilds = (index) => {

  if(allsubMenu[index].style.display === "block"){
    allsubMenu[index].style.display = "none"
  }else{
    allsubMenu[index].style.display = "block"
  }
}

const handleNavLinks = (nav) => {
  const current = Array.from(navLinks).find((link) => link === nav);
  navLinks.forEach(item => {
    item.parentNode.classList.remove('current-menu-item')
  })
  if(current){
    current.parentNode.classList.add('current-menu-item')
  }
}

const handleVideoPlayer = (playBtn) => {
  const popUp = document.createElement('div');
  popUp.className = 'video__popup';
  const close = '<img class="close__popup" src="./assets/icons/maki_cross.svg" alt="X"/>'
  const logo = '<img class="logo__popup" src="./assets/icons/mediclinic-logo-black.png" alt="Mediclinic"/>'

  if (playBtn === playBtnEl[0]) {
    popUp.innerHTML = `
    <div class="video__popup__wrapper" data-aos="zoom-in" data-aos-duration="1500">
      <div class="video__popup__title">${logo}${close}</div>
      <div class="video__con">
        <div class="loading">
        <div class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
        </div>
        </div>
        <iframe onload="showIFrame()" src="https://www.youtube.com/embed/wQ2TN_gI3sE" title="The American Hospital, Dubai‬ Corporate Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>`;
  } else {
    popUp.innerHTML = `
    <div class="video__popup__wrapper" data-aos="zoom-in" data-aos-duration="1500">
      <div class="video__popup__title">${logo}${close}</div>
      <div class="video__con">
        <div class="loading">
        <div class="dot-spinner">
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
            <div class="dot-spinner__dot"></div>
        </div>
        </div>
        <iframe onload="showIFrame()" src="https://www.youtube.com/embed/KqCUuvl1myg" title="Hospital Promotional Video - Why I Chose PCMH" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>`;
  }

  document.body.appendChild(popUp);

  const closePopupBtn = document.querySelector('.close__popup');
  closePopupBtn.addEventListener('click', function () {
    document.body.removeChild(popUp);
  });
};

const showIFrame = () => {
  const loadingText = document.querySelector('.loading');
  const iframe = document.querySelector('iframe');

  loadingText.style.display = 'none';
  iframe.style.display = 'block';
}

const handleScroll = () => {
    let height = 350;
		const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
		if (winScroll > height) {
			scrollTopEl.style.visibility = "visible"
      scrollTopEl.style.opacity = 1
		} else {
      scrollTopEl.style.visibility = "hidden"
      scrollTopEl.style.opacity = 0
		}
}

const handleScrollTop = () => {
  window.addEventListener('scroll', handleScroll);
	return () => window.removeEventListener('scroll', handleScroll);
}


const goToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

const toggleOptions = (index) => {
  closeOtherOptions(index)
  const optionsContainer = selectOptions[index];
  optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
}

const handleSelectOption = (index, e) => {
  const clickedOption = e.target.closest('li');
  if (clickedOption) {
    selectTexts[index].innerHTML = clickedOption.innerHTML;
    toggleOptions(index);
  }
}

const closeOtherOptions = (selectedIndex) => {
  for (let i = 0; i < selectOptions.length; i++) {
    if (i !== selectedIndex) {
      selectOptions[i].style.display = "none";
    }
  }
}

const toggleNotificationH5 = () => {
  const notifyContent = document.querySelector('.notification-content');
  notifyContent.classList.toggle('active')
}

const handleLoadingDots = () => {
  let count = 0;
  const target = 100;
  const speed = 200;
  let increment = target / speed;
  const timer = setInterval(()=>{
    count += increment;
    if(count >= target){
      clearInterval(timer);
    }
  },8)

}

// Initial Listener
window.addEventListener('load', function(){


  // Notification
  closeNotify?.addEventListener('click', closeNotification)
  closeNotifyH2?.addEventListener('click',toggleNotificationH2)
  showNotifyH2?.addEventListener('click',toggleNotificationH2)
  closeNotifyH5?.addEventListener('click',toggleNotificationH5)

  // Navlinks Active
  navLinks.forEach(nav => {
    nav.addEventListener('click',() => handleNavLinks(nav))
  })

  // Nav Menu
  allmenuHasChild.forEach((menu, index) => {
    menu.addEventListener('click', () => handleMenuChilds(index))
  });

  // Side Bar 
  hamBarsEl?.addEventListener('click', handleSideBar)
  sideBarEl?.addEventListener('click',handleCloseSideBar)

  // Price Buttons
  priceBtnEl.forEach(btn => {
    btn.addEventListener('click',handlePrice)
  })

  // Accordion
  accordionHeaders.forEach((header,index) => {
    header.addEventListener('click', () => handleAccordion(header,index))
  })
  

  // custom select options
  for (let i = 0; i < selectTexts.length; i++) {
    selectTexts[i].addEventListener('click', () => toggleOptions(i));
    selectOptions[i].addEventListener('click', (e) => handleSelectOption(i, e));
  }

  // Counter
  handleCounter();
  
  // Progress Bar
  handleProgressBar();

  // Video Player
  playBtnEl.forEach(playBtn => {
    playBtn.addEventListener('click',()=>handleVideoPlayer(playBtn))
  })


  // scroll top
  handleScrollTop()
  scrollTopEl?.addEventListener('click',goToTop)
  
})