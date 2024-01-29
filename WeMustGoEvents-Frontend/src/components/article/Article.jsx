import './article.css';

const Article = ({ imgUrl, date, text }) => (
  <div className="events-container_article">
    <div className="events-container_article-image">
      <img src={imgUrl} alt="blog_image" />
    </div>
    <div className="events-container_article-content">
      <div>
        <p>{date}</p>
        <h3>{text}</h3>
      </div>
      <p>Découvrir</p>
    </div>
  </div>
);

export default Article;
