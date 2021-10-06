import React from 'react';
import axios from 'axios';

import { Home } from "./pages";
import { Header, Footer }  from './components';
import { Route } from 'react-router-dom';

function App() {
  const [educations, setEducations] = React.useState([]);
  const [news, setNews] = React.useState([]);

  const [activeItem, setActiveItem] = React.useState(null);

  React.useEffect(() => {
    axios.get('education.json').then(({ data }) => {
      setEducations(data);
    });
    axios.get('news.json').then(({ data }) => {
      setNews(data);
    });
  }, []);

  return (
  <div>
    <Header />
      <Route path='/' render={() => <Home educations={educations} activeItem={activeItem} setActiveItem={setActiveItem} news={news} />} exact />
    <Footer />
  </div>
  );
}

export default App;
