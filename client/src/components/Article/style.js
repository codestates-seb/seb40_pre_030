import styled from 'styled-components'

export const ArticleWrapper = styled.div`
.title{
  font-size: 2rem;
}
.date_wrapper{
  display: flex;
  border-bottom: 1px solid gray;
  div{
    margin-right: 1rem;
  }
}
`
export const ArticleContent = styled.article`
  display: flex;
  .vote-section{
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
  }
  .body-footer{
    display: flex;
    .post-owner{
      margin-left: 3rem
    }
  }
  img{
    width: 20px;
    height: 20px;
  }
`