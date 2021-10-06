import React from 'react';
import dateSvg from '../assets/img/date.svg';

export default function Education({ name, date, progress, type, image, activeItem, setActiveItem }) {

  return (
            <div>   
          
            <img className="education__card--img" src={image} alt="education-img" />

            <div className="education__card--info">

              <div className="education__card--progress">

                <p className="education__card--type">
                  {type === 'course' ? 'Курс' : '' || type === 'test' ? 'Тест' : '' || type === 'event' ? 'Событие' : ''}
                </p>
                <p className="education__card--status">
                  {progress === 0 ? 'не пройдено' : '' 
                  || progress === 100 ? 'пройден' : '' 
                  || progress >= 1 && progress <=99 ? `${progress}% пройдено` : ''}
                </p>

              </div>

              <div className={type === 'event' ? 'none' : 'progress-bar'}>
                <div className="progress-bar__track">
                    <div className="progress-bar__line" style={{ width: `${progress}%` }}></div>
                </div>
              </div>

              <a className="card-name" href="/">{name}</a>

              <div className="education__card--date">
                <img src={dateSvg} alt="date" />
                <p className="education__card--date-availabled">Доступен до: {date}</p>
              </div>

            </div>

          </div>
  )
}
