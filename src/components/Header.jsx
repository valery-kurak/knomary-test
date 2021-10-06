import React from 'react';
import avatar from '../assets/img/user-avatar.svg';
import burger from '../assets/img/burger.svg';
import burgerClose from '../assets/img/cross.svg';

export default function Header() {

  let burgerMenu = document.getElementById('burgerMenu');
  let burgerLinks = document.querySelector('.header__nav-mob');
  let burgerNotOpen = document.querySelector('.burger__not-open');
  let burgerOpen = document.querySelector('.burger__open');

  function closeBurger() {
    burgerLinks.classList.toggle('menu-grid');
    burgerOpen.classList.toggle('none');
    burgerNotOpen.classList.toggle('none');
  }

  return (
    
    <header className="header" id="header">

      <div className="company">

        <div className="company-logo">
          <p className="company-name">Knomary</p>
          <p className="company-desc">TEST</p>
        </div>

        <nav className="header__nav">
          <a className="header__nav--link  current-link" href="/">Курсы</a>
          <a className="header__nav--link" href="/">Отчеты</a>
          <a className="header__nav--link" href="/">Тестирования</a>
          <a className="header__nav--link  non-active" href="/">События</a>
          <a className="header__nav--link  non-active" href="/">База знаний</a>
          <a className="header__nav--link  non-active" href="/">Пользователи</a>
        </nav>

        <a className="burger-menu" id="burgerMenu" onClick={closeBurger}>

          <img className="burger__not-open" src={burger} alt="burger-menu" />
          <img className="burger__open  none" src={burgerClose} alt="burger-menu" />

        </a>

        <nav className="header__nav-mob">
          <a className="header__nav--link  current-link" href="/">Курсы</a>
          <a className="header__nav--link" href="/">Отчеты</a>
          <a className="header__nav--link" href="/">Тестирования</a>
          <a className="header__nav--link  non-active" href="/">События</a>
          <a className="header__nav--link  non-active" href="/">База знаний</a>
          <a className="header__nav--link  non-active" href="/">Пользователи</a>
        </nav>

        <div className="company__user">
          <img src={avatar} alt={"user"} className="company__user--avatar" />

          <div className="company__user--info">
            <p className="company__user--name">Виталий Лавов</p>
          <span className="company__user--position">Сотрудник</span>
          </div>
          
        </div>

    </div>

  </header>

  )
}
