import React from 'react';
import like from '../assets/img/like.svg';
import comment from '../assets/img/comment.svg';

export default function News({ name, description, likes, comments, tags, image }) {
  function TagsList(props){
    function getKey(str){
      let key = 0;
      for (let i = 0; i < str.length; i++) {
        key += str.charCodeAt(i);
      }
      return key.toString();
    }

    const tags = props.tags;
    const tagsItems = tags.map((tag) => {
      const key = getKey(tag)
      return <a href="/" className="genre" key={key}>{tag}</a>;
    });
    return (<div className="genres">{tagsItems}</div>);
  }
  return (
        <div className="news__card">
          <div className="news__card--genre">
            <img className="news__card--img" src={image} alt="news" />
            <TagsList tags={tags}/>
          </div>
          
          <a href="/" className="news-name  card-name">{name}</a>
          <p className="news__card--desc">{description}</p>

          <div className="news__card--activity">

            <div className="news__card--likes  activity-block">
              <img src={like} alt="like" />
              <span className="activity-count">{likes}</span>
            </div>

            <div className="news__card--comments  activity-block">
              <img src={comment} alt="comment" />
              <span className="activity-count">{comments}</span>
            </div>

          </div>
        </div>
  )
}

