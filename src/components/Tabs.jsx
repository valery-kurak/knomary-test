import React from 'react';

export default function Tabs({ educations, items, activeItem, setActiveItem }) {

  const onSelectItem = index => {
    setActiveItem(index);
  }

  let allTypes = educations.map(count => count.type);
  let courses = allTypes.filter(type => type === 'course')
  let tests = allTypes.filter(type => type === 'test');
  let events = allTypes.filter(type => type === 'event');

  let typesArray = [courses.length, tests.length, events.length];

  return (
    <ul className="tabs">
      <li className={activeItem === null ? 'tab  tab-active' : 'tab'}
          onClick={() => onSelectItem(null)}>Все
        <p className="tab-count"><span>{allTypes.length}</span></p>
      </li>

      {items && items.map((name, index) =>
        <li
        className={activeItem === index ? 'tab  tab-active' : 'tab'}
        onClick={() => onSelectItem(index)}
        key={`${name}_${index}`}>
        {name}

        {name === 'Курсы'
        ? 
        <div>
          <p className="tab-count">
            <span>{courses.length}</span>
          </p>
        </div> :''}

        {name === 'Тесты'
        ? 
        <div>
          <p className="tab-count">
            <span>{tests.length}</span>
          </p>
        </div> : ''
        }

        {name === 'События'
        ?       
        <div> 
          <p className="tab-count">
            <span>{events.length}</span>
          </p>
        </div> : ''
        }
      </li>)}

          


    </ul>
  )
}
