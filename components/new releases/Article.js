import './Article.css'; 

export default function Article({ imageSrc, title, author, date, text }){
  return (
    <div className="article-card">
      <img src={imageSrc} alt="Article" className="article-image" />
      <div className="article-content">
        <div className="article-title">{title}</div>
        <div className="article-author">By: {author}</div>
        <div className="article-date">{date}</div>
        <div className="article-text">{text}</div>
      </div>
    </div>
  );
};

