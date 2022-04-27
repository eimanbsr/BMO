'use strict';

const cancelBtn = document.querySelector('.cancellink');
const bType = document.querySelector('.btype');
const bLang = document.querySelector('.blang');
let sliderStatus = false;
let expandStatus = false;
let diagnos = '';



bType.addEventListener('click', function () {
  leftExpand();
});

bLang.addEventListener('click', function () {
  rightExpand();
});

///////TOP BAR: Left Button/////////////////////
const leftExpand = function () {
  if (expandStatus === false && diagnos !== 'left') {
    gsap.to('.topbar', {
      duration: 0.5,
      height: '238px',
      ease: 'expo.out',
    });
    gsap.to('.accordin', {
      duration: 0.5,
      paddingTop: '307px',
      ease: 'expo.out',
    });
    document.querySelector('.arrow1').style.transform = 'rotate(90deg)';
    //Slide------------------------------
    if (sliderStatus == true) {
      gsap.to('.topslider_grid', {
        duration: 0.5,
        left: '0px',
        ease: 'expo.out',
      });
    }
    diagnos = 'left';
    expandStatus = true;
    sliderStatus = false;
    //------------------------------------
  } else if (expandStatus === true && diagnos === 'left') {
    gsap.to('.topbar', {
      duration: 0.5,
      height: '48px',
      ease: 'expo.out',
    });
    gsap.to('.accordin', {
      duration: 0.5,
      paddingTop: '120px',
      ease: 'expo.out',
    });
    diagnos = '';
    expandStatus = false;
    document.querySelector('.arrow1').style.transform = 'rotate(0deg)';
    document.querySelector('.arrow2').style.transform = 'rotate(0deg)';
  }
  if (diagnos === 'right' && expandStatus === true && sliderStatus === true) {
    gsap.to('.topslider_grid', {
      duration: 0.5,
      left: '0px',
      ease: 'expo.out',
    });
    diagnos = 'left';
    expandStatus = true;
    sliderStatus = false;
    document.querySelector('.arrow1').style.transform = 'rotate(90deg)';
    document.querySelector('.arrow2').style.transform = 'rotate(0deg)';
  }
  console.log(
    'Clicked: ' +
      diagnos +
      ' - Open: ' +
      expandStatus +
      ' - Slide: ' +
      sliderStatus
  );
};

///////TOP BAR: Right Button/////////////////////
const rightExpand = function () {
  if (expandStatus === false && diagnos !== 'right') {
    gsap.to('.topbar', {
      duration: 0.5,
      height: '238px',
      ease: 'expo.out',
    });
    gsap.to('.accordin', {
      duration: 0.5,
      paddingTop: '307px',
      ease: 'expo.out',
    });
    document.querySelector('.arrow2').style.transform = 'rotate(90deg)';
    //Slide-------------------------------
    if (sliderStatus == false) {
      gsap.to('.topslider_grid', {
        duration: 0.5,
        left: '-100%',
        ease: 'expo.out',
      });
    }
    diagnos = 'right';
    expandStatus = true;
    sliderStatus = true;
    //------------------------------------
  } else if (expandStatus === true && diagnos === 'right') {
    gsap.to('.topbar', {
      duration: 0.5,
      height: '48px',
      ease: 'expo.out',
    });
    gsap.to('.accordin', {
      duration: 0.5,
      paddingTop: '120px',
      ease: 'expo.out',
    });
    diagnos = '';
    expandStatus = false;
    document.querySelector('.arrow1').style.transform = 'rotate(0deg)';
    document.querySelector('.arrow2').style.transform = 'rotate(0deg)';
  }

  if (diagnos === 'left' && expandStatus === true && sliderStatus === false) {
    gsap.to('.topslider_grid', {
      duration: 0.5,
      left: '-100%',
      ease: 'expo.out',
    });
    diagnos = 'right';
    expandStatus = true;
    sliderStatus = true;
    document.querySelector('.arrow1').style.transform = 'rotate(0deg)';
    document.querySelector('.arrow2').style.transform = 'rotate(90deg)';
  }
  console.log(
    'Clicked: ' +
      diagnos +
      ' - Open: ' +
      expandStatus +
      ' - Slide: ' +
      sliderStatus
  );
};

///Search///////////////////////////////////
cancelBtn.addEventListener('click', function () {
  blurFunction();
});

function focusFunction() {
  document.querySelector('.searchbox').style.color = 'var(--slate)';
  gsap.to('.search', {
    duration: 0.5,
    gridTemplateColumns: 'auto 65px',
    ease: 'expo.out',
    delay: 0.2,
  });
  gsap.to('.footerwrap', {
    duration: 0.4,
    height: '58px',
    ease: 'expo.out',
  });
}

function blurFunction() {
  document.querySelector('.searchbox').style.color = 'var(--slate)';
  document.querySelector('.searchbox').value = '';
  gsap.to('.search', {
    duration: 0.5,
    gridTemplateColumns: 'auto 0px',
    ease: 'expo.out',
  });
  gsap.to('.footerwrap', {
    duration: 0.4,
    height: '110px',
    ease: 'expo.out',
  });
}

////////////////////////////////////////////
///Main Menu////////////////////////////////
////////////////////////////////////////////

const acc_btns = document.querySelectorAll('.accordion-header');
const acc_contents = document.querySelectorAll('.accordion-body');

acc_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    
// Close Blue top bar
        gsap.to('.topbar', {
          duration: 0.5,
          height: '48px',
          ease: 'expo.out',
        });
        gsap.to('.accordin', {
          duration: 0.5,
          paddingTop: '120px',
          ease: 'expo.out',
        });
        diagnos = '';
        expandStatus = false;
        document.querySelector('.arrow1').style.transform = 'rotate(0deg)';
        document.querySelector('.arrow2').style.transform = 'rotate(0deg)';



    acc_contents.forEach((acc) => {
      if (
        e.target.nextElementSibling !== acc &&
        acc.classList.contains('active')
      ) {
        acc.classList.remove('active');
        acc_btns.forEach((btn) => btn.classList.remove('active'));
      }
    });

    const panel = btn.nextElementSibling;
    panel.classList.toggle('active');
    btn.classList.toggle('active');
  });
});
