import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faAngleUp,faAngleDown } from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

const Main=styled.main`
width:100vw;
height:100vh;
margin:auto;
background-color:#F1F2F3;
.Mainsection{
    width:60%;
    margin:auto;
}
.Askheader{
    width:100%;
    height:100px;
    font-size:30px;
    display:flex;
    justify-content:left;
    align-items:center;
      background-image: url(https://cdn.sstatic.net/Img/ask/background.svg?v=c56910988bdf);
    background-position: right bottom ;
    background-repeat: no-repeat;
    
    .AskheadTitle{
        margin-left:25px;
    }
}
   
}
.MainWrap{
    display:flex;
    flex-flow: row nowrap;

   
    .Askform{
        display: flex;
        flex-flow: column;
        flex: 1 1 auto;
     
        .Formtitle{
            font-weight:bold;
        }
        .Submitbtn{
            font-size:15px;
            background-color:#0A95FF;
            border:none;
            border-radius:2px;
            color:#fff;
            margin-top:15px;
        }
        .AskSection{
            background-color: white;
            padding: 20px;
            box-shadow: grey 0px 0px 3px;
            border-radius: 3px;
            font-size:18px;
            .Forminput{
                width:100%;
                height:10px; 
                font-size:15px;
                margin-top:10px;
                margin-bottom:15px;
            }
            .Forminput2{
                width:100%;
                height:300px; 
                font-size:15px;
                margin-top:10px;
                margin-bottom:15px;
            }
        }
    }
    .Aside{
        width:280px;
   
       
        font-size:10px;
        margin-left:15px;
       
        .Asidewrap{
            box-shadow: grey 0px 0px 3px;
            border-radius: 3px;
            margin-bottom:20px;
        }
    
      
        .Asidep{
            padding:5px;
            font-size:10px;
        }
        .AsideTopic{
            font-size:10px;
            border-bottom:1px solid #E4E6E8;
     
            padding-bottom:5px;   
        .TopicBtn{
        border:none;
        background-color:#F1F2F3;;
        font-size:15px;
        margin-top:5px;
        font-weight:bold;
        }
      
           }
           .AsideSlide{
            padding:5px;
            font-size:15px;
           
        }
   .AsideTitle{
    background-color:#F8F9F9;
    font-size:17px;
    padding:5px;
    margin-bottom:5px;
    border-bottom:1px solid #E4E6E8;

}.AsideTopicWrap{
   
    padding:5px;
}
.TopicBtn2{
border:none;
width:100%;
    background-color:#F1F2F3;;
    font-size:14px;
    box-shadow: grey 0px 0px 3px;
    border-radius: 3px;
   
}   
    }
}
`
const Askquetion=()=>{
  
  
    return (
        <>
        <Main>
<section className='Mainsection'>
    <div>
        <div className='Askheader'>
            <h1 className='AskheadTitle'>Ask a public question</h1>
        </div>
    <div className='MainWrap'>
<form className='Askform'><section className='AskSection'>
    <div><div>
        <label className='Formtitle'>Title</label>
        <p>Be specific and imagine you’re asking a question to another person</p>
        <div><input className='Forminput' placeholder="e.g. Is there an R function for finding the index of an element in a vector?"></input></div>
        </div></div>
    <div>
    <label className='Formtitle'>Body</label>
        <p>Include all the information someone would need to answer your question</p>
        <input className='Forminput2' placeholder="Markdown editor"></input>
    </div>
    <div>
    <label className='Formtitle'>Tags</label>
        <p>Add up to 5 tags to describe what your question is about</p>
<input className='Forminput' placeholder="e.g. (angular sql-server string)"></input>
    </div>
</section>
<div><button className='Submitbtn'>Review your question</button></div>
</form>
<aside className='Aside'>
    <div className='Asidewrap'>
        <div className='AsideTitle'>
        <h3 >Step 1: Draft your question</h3>
        </div>
    <div className='wrap1'>
        <div className='wrap2'>
        <div>
<p className='AsideSlide'>The community is here to help you with specific coding, algorithm, or language problems.
<br/>
<br/>
Avoid asking opinion-based questions.</p>

    </div>
    <ol>
        <li><div className='AsideTopic'><button  className='TopicBtn' >Summarize the problem</button><span></span><FontAwesomeIcon icon={faAngleUp}/> </div>
        <div className='AsideSlide'>
         <ul>
        <li>1. Include details about your goal</li>
        <li>2. Describe expected and actual</li>
        <li>3. results Include any error messages</li>
        </ul>
         
    
        </div>
        </li>
        <li><div className='AsideTopic'>
            <button   className='TopicBtn'>Describe what you`ve tried</button><span><FontAwesomeIcon icon={faAngleUp}/> </span>
            </div>
            <div className='AsideSlide'>
              <p>Show what you’ve tried and tell us what you found (on this site or elsewhere) and why it didn’t meet your needs. You can get better answers when you provide research.</p>
              </div></li>
        <li><div   className='AsideTopic'><button className='TopicBtn'>Show some code</button><span><FontAwesomeIcon icon={faAngleUp}/> </span></div><div className='AsideSlide'>
       <p>When appropriate, share the minimum amount of code others need to reproduce your problem (also called a minimum, reproducible example)</p>
           </div></li>
    </ol>
    </div>
    </div>
    </div>
    <div>
        <div>
        <button className='TopicBtn2'>Have a non-programming question? </button>
        <span></span></div>
        <div>
            <div className='AsideTopicWrap'>
                {/* <div >
                <a href="https://superuser.com/help/on-topic"  >Summarize the ploblem</a> </div>
                <p class="sc-kIZKsT hJazSU">Troubleshooting hardware and software issues</p>
                <div  className='AsideTopic'>
                <a href="https://softwareengineering.stackexchange.com/" className='asidea'>Describe what you`ve tried</a><FontAwesomeIcon icon={faAngleUp}/> </div>
                <p class="sc-kIZKsT hJazSU">For software development methods and process questions</p>
                <div className='AsideTopic2'>
                <a href="https://hardwarerecs.stackexchange.com/help/on-topic"className='asidea' >Show some code</a><FontAwesomeIcon icon={faAngleUp}/> 
                <p class="sc-kIZKsT hJazSU">Software recommendations Ask questions about the site on <a href="https://meta.stackoverflow.com/" class="sc-chKnlQ cKCfGf">meta</a></p>
                </div> */}
               
            </div>
            </div></div>
    <div><div>
        <button className='TopicBtn2'>More helpful links </button>
    <span></span></div><div></div></div>
 
</aside>
    </div>
    </div>
</section>
        </Main>
        </>
    )
}
export default Askquetion