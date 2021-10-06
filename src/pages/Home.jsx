import React from 'react';
import { Tabs, Education, News }  from '../components';

function Home({ educations, news, activeItem, setActiveItem }) {

  return (
    <div className="content">

      <section className="education  block  container">

        <h1 className="block-title">Назначенное обучение</h1>
        
        <Tabs educations={educations} activeItem={activeItem} setActiveItem={setActiveItem} onClickItem={(name) => console.log(name)} items={['Курсы', 'Тесты', 'События']}/>
      
        {activeItem === null
          ?
          <div className="education__cards">
            {educations.map((obj =>
                <div className={obj.type === 'event' ? 'education__card  education__card--no-progress' : 'education__card'}>
                    <Education key={obj.name} {...obj} activeItem={activeItem} setActiveItem={setActiveItem} onClickItem={(name) => console.log(name)} items={['Курсы', 'Тесты', 'События']} />
                </div>))}  
          </div>
        : '' }

        {activeItem === 0
          ?
          <div className="education__cards">
            {educations.map((obj =>
                <div className={obj.type === 'course' ? 'education__card' : 'none'}>
                  {obj.type === 'course' ?
                    <Education key={obj.name} {...obj} activeItem={activeItem} setActiveItem={setActiveItem} onClickItem={(name) => console.log(name)} items={['Курсы', 'Тесты', 'События']} />
                  : '' }
                </div>))}  
          </div>
        : '' }

        {activeItem === 1
          ?
          <div className="education__cards">
            {educations.map((obj =>
                <div className={obj.type === 'test' ? 'education__card' : 'none'}>
                  {obj.type === 'test' ?
                    <Education key={obj.name} {...obj} activeItem={activeItem} setActiveItem={setActiveItem} onClickItem={(name) => console.log(name)} items={['Курсы', 'Тесты', 'События']} />
                  : '' }
                </div>))}  
          </div>
        : '' }

        
        {activeItem === 2
          ?
          <div className="education__cards">
            {educations.map((obj =>
                <div className={obj.type === 'event' ? 'education__card  education__card--no-progress' : 'none'}>
                  {obj.type === 'event' ?
                    <Education key={obj.name} {...obj} activeItem={activeItem} setActiveItem={setActiveItem} onClickItem={(name) => console.log(name)} items={['Курсы', 'Тесты', 'События']} />
                  : '' }
                </div>))}  
          </div>
        : '' }
      </section>

      <section className="news  block  container">
        <h1 className="block-title">Новости</h1>
        <div className="news__cards">
          {news.map((obj => 
              <News key={obj.name} {...obj} />
            ))}
        </div>
      </section>

    </div>
  )
}

export default Home;