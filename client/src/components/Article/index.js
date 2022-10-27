import ReactMarkdown from 'react-markdown'
import Tag from '../Board/Tag'

import { ArticleContent, ArticleWrapper } from './style'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";

const dummyArticle =  {
  post_id: 1,
  createdAt: '2022. 10. 26',
  modifiedAt: '2022. 10. 27',  
  title: 'how to write stackoverflow',
  body: `this is the longest body`,
  displayName: 'admin',
  photoURL: 'https://w.namu.la/s/4c30cf3fed5c1a9052a52b527b9c3a4ae98534ee72dfbfd8d728cec568db7a657709d8d87507681663b495ed4355acd9049fd552bf810bda0c5252715ba7c634a5e79b21e222dca1fdf34b945146ceaffa04f4c604defd926a0bdcdd7f290978ec649f7517275885f066c43e15d422df',
  voteCount: 3,
  tag: ['reactjs', 'testing']
}

const data = `
# 헤딩

***굵게***


`

const Article = () => {

  return(
    <ArticleWrapper>
      <div className='title'>title</div>
      <div>
        <div className='date_wrapper'>
          <div>Asked 1 days ago</div>
          <div>Modified today</div>
          <div>Viewed 279 times</div>
        </div>
        <ArticleContent>
          <div className='vote-section'>
            <FontAwesomeIcon icon={faCaretUp}/>
            {dummyArticle.voteCount}
            <FontAwesomeIcon icon={faCaretDown}/>
          </div>
          <div className='body-section'>
            <div className='body-main'>
              {dummyArticle.body}
            </div>
            <div className='body-tag'>
              {dummyArticle.tag.map((el, idx) => (
                <Tag key={idx} value={el}/>
              ))}
            </div>
            <div className='body-footer'>
              <div>
                <Tag value='Share' />
                <Tag value='Edit' />
                <Tag value='Delete' />
                <Tag value='Flag' />
              </div>
              <div className='post-owner'>
                <div className='user-action-item'>asked 4 min ago</div>
                <div className='user-avatar'>
                  <img src={dummyArticle.photoURL} alt='avatar' /> 
                  {dummyArticle.displayName}
                </div>
              </div>
            </div>
          </div>

        </ArticleContent>
      </div>
    </ArticleWrapper>
  )
}
export default Article;