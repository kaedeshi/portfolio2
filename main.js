'use strict';

{
  const hamburger = document.getElementById('hamburger');
  const border1 = document.getElementById('border1');
  const border2 = document.getElementById('border2');
  const openMenu = document.getElementById('open-menu');
  const mensMenu = document.getElementById('open-mensmenu');
  const womensMenu = document.getElementById('open-womensmenu');
  const mask = document.getElementById('mask');
  const menssp = document.getElementById('mens-sp');
  const womenssp = document.getElementById('womens-sp');
  const pickMenssp = document.getElementById('pick-mensitem-sp');
  const pickWomenssp = document.getElementById('pick-womensitem-sp');
  const headerMens = document.getElementById('header-mens');
  const headerWomens = document.getElementById('header-womens');
  const menspc = document.getElementById('header-open-mensmenu');
  const womenspc = document.getElementById('header-open-womensmenu');
  const pickMens = document.getElementById('pick-mensitem');
  const pickWomens = document.getElementById('pick-womensitem');


  const menuNewitems = document.querySelectorAll('main .new-item div .newitem-list li a');
  const newitemContents = document.querySelectorAll('main .new-item div .newitem-content');
  const menuItems = document.querySelectorAll('main .items div .item-list li a');
  const contents = document.querySelectorAll('main .items > div .content');

  const contactButton = document.getElementById('contact-button');

  // const loginButton = document.getElementById('login-button');


  menuNewitems.forEach(clickedNewitem => {
    clickedNewitem.addEventListener('click',e =>{
      e.preventDefault();

      menuNewitems.forEach(newitem =>{
        newitem.classList.remove('active');
      });
      clickedNewitem.classList.add('active');

      newitemContents.forEach(newitemContent => {
        newitemContent.classList.remove('active');
      });
      document.getElementById(clickedNewitem.dataset.id).classList.add('active');
    });
  });

  menuItems.forEach(clickedItem => {
    clickedItem.addEventListener('click',e =>{
      e.preventDefault();

      menuItems.forEach(item =>{
        item.classList.remove('active');
      });
      clickedItem.classList.add('active');

      contents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(clickedItem.dataset.id).classList.add('active');
    });
  });

  hamburger.addEventListener('click',() =>{
    border1.classList.toggle('show');
    border2.classList.toggle('show');
    openMenu.classList.toggle('show');
    mask.classList.toggle('show');
    mensMenu.classList.remove('show');
    womensMenu.classList.remove('show');
  });
  mask.addEventListener('click',() =>{
    border1.classList.remove('show');
    border2.classList.remove('show');
    openMenu.classList.remove('show');
    mask.classList.remove('show');
    mensMenu.classList.remove('show');
    womensMenu.classList.remove('show');
  });

  menssp.classList.remove('show');
  womenssp.classList.remove('show');
  menssp.addEventListener('click',() =>{
    mensMenu.classList.toggle('show');
    womensMenu.classList.remove('show');
  });
  womenssp.addEventListener('click',() =>{
    womensMenu.classList.toggle('show');
    mensMenu.classList.remove('show');
  });

  pickMenssp.addEventListener('click',() =>{
    border1.classList.remove('show');
    border2.classList.remove('show');
    openMenu.classList.remove('show');
    mask.classList.remove('show');
    mensMenu.classList.remove('show');
    womensMenu.classList.remove('show');
  });
  pickWomenssp.addEventListener('click',() =>{
    border1.classList.remove('show');
    border2.classList.remove('show');
    openMenu.classList.remove('show');
    mask.classList.remove('show');
    mensMenu.classList.remove('show');
    womensMenu.classList.remove('show');
  });
  pickMens.addEventListener('click',() =>{
    menspc.classList.remove('show');
    womenspc.classList.remove('show');
  });
  pickWomens.addEventListener('click',() =>{
    menspc.classList.remove('show');
    womenspc.classList.remove('show');
  });

  headerMens.addEventListener('click',() =>{
    menspc.classList.toggle('show');
    womenspc.classList.remove('show');
  });
  headerWomens.addEventListener('click',() =>{
    womenspc.classList.toggle('show');
    menspc.classList.remove('show');
  });


  contactButton.addEventListener('click',() => {
    if (confirm('送信しますがよろしいですか？') === true) {
      alert('送信しました');
    } 
  });
}