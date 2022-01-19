import React from 'react';
import photo from '../../img/developer_img.jpg';

import './About.scss';

function About() {
    return (
        <>
        <div className='about'>
          <img src={photo} />
          <div className='about__tableDescr'>
          <table>
            <tr>
              <td>Ф.И.О.:</td>
              <td>Стовповец Станислав Анатольевич</td>
            </tr>
            <tr>
              <td>Возраст:</td>
              <td>35</td>
            </tr>
            <tr>
              <td>Семейное положение:</td>
              <td>не женат</td>
            </tr>
            <tr>
              <td>Контактный телефон:</td>
              <td>+38 095 543-54-92</td>
            </tr>
            <tr>
              <td>e-mail:</td>
              <td>stasromanov316@gmail.com</td>
            </tr>
            <tr>
              <td>Место проживания:</td>
              <td>г.Кропивницкий, проулок Акимовский 13, кв.2</td>
            </tr>
          </table>
          </div>                       
   
        </div>
        <div className='about__workDescr'>
          <h3>Образование</h3>
          <p>2003 - 2008 - КИРУЭ, форма обучения дневная, получил образование психолог-специалист</p>
          <h3>Опыт работы в it</h3>
          <p>01 - 03.2018 - менеджер технической поддержки клиентов joom (https://www.joom.com/ru) </p>
          <p>04.2018 - 10.2018 - помощник сео-оптимизатора, веб студия DvaCom</p>
          <p>11.2018 - 06.2019 - сео-оптимизатор, веб студия DvaCom</p>
          <p>06.2019 - 03.2020 - программист, веб студия DvaCom</p>
          <p>04.2020 - 08.2020 - support manager/manual tester в Express Solutions </p>
          <p>08.2020 - 11.2021 - программист / тестировщик / seo инженер-оптимизатор / аудитор сайтов / менеджер по настройке google рекламы, веб студия DvaCom (https://dvacom.net/)</p>

          <h3>Знание технологий</h3>
          <p>html, css, js, php, mySql</p>
          <p>Базовые знания: react, laravel, ajax (fetch/axios/jQuery), OOP, MVC, jQuery, bootstrap, git</p>

          <h3>Дополнительная информация</h3>
          <p>Уровень английского: средний</p>
          <p>О себе: Быстро обучаюсь новому, пунктуальный, ответственный, немного перфекционист:) Изучаю программирование последние 5 лет</p>
        </div>
        </>
    )
}

export default About;
