import React from 'react';
import Navbar from '../../components/Navbar';
import RateArticle from '../../containers/RateArticle';
import CommentContainer from '../../containers/CommentContainer';
import { Link } from "react-router-dom";
import DeleteArticleContainer from '../../containers/DeleteArticle';
import '../../../assets/styles/getarticle.scss';
import ShareArticle from '../ShareArticle';

const ArticleComponent = (props) => {
  const { articleId, article: { id, title, body, author, description, tagList = [] }, handleLike, handleDislike, handleBookmark, auth } = props;
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <div className="article-main">
            <div className="row">
              <div className="col-md-10">
                <h1 className="article-title">{title}</h1>
                { id ? (<div><RateArticle articleId={id} /><ShareArticle {...props.article} /></div>) : null}
              </div>
              {(auth !== undefined) && (auth.username === author) ? (
                <>
                  <div className="col-md-1 edit-btn">
                    <Link to="/article/update">
                      <button className="btn btn-outline-primary" >Edit</button></Link>
                  </div>
                  <div className="col-md-1">
                    <DeleteArticleContainer id={id} />
                  </div>
                </>
              ) : ("")}
            </div>
            <div className="article-desc">{description}</div>
            <div>{author}</div>
            <img className="card-image" alt="" src="https://picsum.photos/600/300" />
            <div className="article-body">{body}</div>
            <div className="like-dislike">
              <i className="fa fa-thumbs-up" onClick={handleLike} role="presentation" style={{ color: 'blue' }} />
              <i className="fa fa-thumbs-down" onClick={handleDislike} role="presentation" style={{ color: 'red' }}/>
              <i className="fa fa-bookmark" onClick={handleBookmark} role="presentation" style={{ color: 'gold' }}/></div>
            <div className="all-tags"><hr />
              <ul>{tagList.map(tag => <li key={tag} className="tag">{tag}</li>)}</ul>
              <div>
                <CommentContainer articleId={articleId} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ArticleComponent;
