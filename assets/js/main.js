


const tooggleContentByTab =() => {
    let tabs = document.querySelectorAll('.products-block__tab');
    let contents = document.querySelectorAll('.products-block__wrapper');
    //console.log (tabs) ;
    console.log (contents); 
    tabs.forEach((tab,index) => {
        console.log(tab);
        tab.addEventListener('click' , () =>{
            console.log('test click');
            tabs.forEach(tab_2=> {
                tab_2.classList.remove('active');
             tab.classList.add('active');
            })
            contents.forEach((content) =>{
                content.classList.remove('active');
            }
        )
        tab.classList.add('active');
        contents[index].classList.add('active');
 })
    })
}
tooggleContentByTab();

//mobile menu
var burger = document.querySelector('.burger');
var mobileMenu = document.querySelector('.mobile-menu');
var crest = document.querySelector('.crest');

burger.addEventListener('click',()=>{
    

    console.log(burger);
    console.log(mobileMenu);
  //  if(burger.classList.contains('active')){
    //    burger.classList.remove('active');
      //  mobileMenu.classList.remove('active');
   // }
    //else
        //burger.classList.add('active')
        //mobileMenu.classList.add('active');
    
//});

burger.classList.toggle('active');
mobileMenu.classList.toggle('active');
});

crest.addEventListener('click',()=>{
    burger.classList.remove('active');
    mobileMenu.classList.remove('active');
});


const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.btn-right',
      prevEl: '.btn-left',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });