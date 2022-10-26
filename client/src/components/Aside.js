import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' 
import { faPen,faCommentAlt } from "@fortawesome/free-solid-svg-icons";
const AsideWrap=styled.div`
width: 300px;
float: right;
margin-right:50px;
.asideTop{
    background-color: #FEF6DF;
    border: 1px solid #F1E1B6;
    margin-bottom: 20px;
    .asideheader{
        border-top: 1px solid #F1E1B6;
        background-color: #FCF1D1;
     font-size: 15px;
        font-weight: bold;
    }
    .asidecontent{
        padding: 5px;
        font-size:12px;
    }
}
.asideBottom{
    border: 1px solid #E1E4E6;
    .asideBottomhead{
        padding: 12px;
border-bottom: 1px solid #E1E4E6;

background-color: #FAFBFB;
    }
    .asideBotWrap{
        border: 1px solid #E1E4E6;
        padding: 12px;
        .asidebottitle{
            display: flex;
            flex-direction:row;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }
    }
   
}
`
const Aside = ()=>{
    
return (
    <>
<AsideWrap>
    <div className='asideTop'>
            <ul className='asideul'>
                <li className='asideheader asidecontent' >The Overflow Blog</li>
                <li className='asidecontent'>
                    <div >  <span>
                    <FontAwesomeIcon icon={faPen} /> 
                    </span> <a href='https://stackoverflow.blog/2022/10/24/how-hardware-and-software-can-maximize-your-flow-states/?cb=1&_ga=2.206072915.1741655448.1666525029-1930885377.1656908536'>
                  He helped build .NET and VS Code — Now’s he working on Web3 (Ep. 499)</a>
                    </div>
                </li>
                <li className='asidecontent'>
                <div> <span>
                    <FontAwesomeIcon icon={faPen} /> 
                    </span>  <a href='https://stackoverflow.blog/2022/10/25/a-flight-simulator-for-developers-to-practice-real-world-challenges-and-surprises-ep-500/?cb=1&_ga=2.234070366.1741655448.1666525029-1930885377.1656908536'>How hardware and software can maximize your flow states</a></div></li>
                <li  className='asideheader asidecontent'>Featured on Meta</li>
                <li className='asidecontent'><div><span>
                    <FontAwesomeIcon icon={faCommentAlt} /> 
                    </span> <a href='https://meta.stackexchange.com/questions/383022/the-2022-community-a-thon-has-begun?cb=1'>The 2022 Community-a-thon has begun!</a></div></li>
                <li className='asidecontent'><div><span>
                    <FontAwesomeIcon icon={faCommentAlt} /> 
                    </span> <a href='https://meta.stackexchange.com/questions/383026/mobile-app-infrastructure-being-decommissioned?cb=1'>Staging Ground Workflow: Canned Comments</a></div></li>
                <li className='asidecontent'><div><span>
                    <FontAwesomeIcon icon={faCommentAlt} /> 
                     </span> <a href='https://meta.stackoverflow.com/questions/420897/staging-ground-workflow-canned-comments?cb=1'>The [script] tag is being burninated</a></div></li>
                <li className='asidecontent'> <div><span>
                    <FontAwesomeIcon icon={faCommentAlt} /> 
                    </span> <a href='https://meta.stackoverflow.com/questions/406928/the-script-tag-is-being-burninated?cb=1'>Ask Wizard Test Graduation</a></div></li>
                <li  className='asideheader asidecontent'>Hot Meta Posts</li>
                <li className='asidecontent' ><div><span>9 </span><a href='https://meta.stackoverflow.com/questions/421007/should-i-edit-questions-to-tidy-code-snippets?cb=1'>25 Burninate [self-hosting]</a></div></li>
            </ul>
            </div>
    <div className='asideBottom'>

            <div className='asideBottomhead'>Collectives</div>
            <div className='asideBotWrap'>
                <div className='asidebottitle'>
                    <div className='asideimg'><img  src='https://user-images.githubusercontent.com/107850055/197710729-3110e35f-2fca-4811-a9a3-2fa45cb57c59.png'/></div>
                    <div>Google Cloud</div>
                    <div className='asidebtn'><button>Join</button></div>
                    </div>
<span className='asideBotCon'>Google Cloud provides organizations with leading infrastructure, platform capabilities...</span>
</div>
<div className='asideBotWrap'>
                <div className='asidebottitle'>
                    <div className='asideimg'><img  src='https://user-images.githubusercontent.com/107850055/197701251-e450a62e-dc1f-4bab-a5bd-afd7ef642ab9.png'/></div>
                    <div>Twilio</div>
                    <div className='asidebtn'><button>Join</button></div>
                    </div>
<span className='asideBotCon'>Twilio has democratized channels like voice, text, chat, video, and email by virtualizing the...</span>
</div>
<div className='asideBotWrap'>
                <div className='asidebottitle'>
                    <div className='asideimg'><img src='https://user-images.githubusercontent.com/107850055/197701256-2fddfddc-78c7-4f22-9e02-ff245c822213.png'></img></div>
                    <div>WSO2</div>
                    <div className='asidebtn'><button>Join</button></div>
                    </div>
<span className='asideBotCon'>WSO2 solutions give enterprises the flexibility to deploy applications and services on-...</span>
</div>

</div>

  

</AsideWrap>
   </>
)
}
export default Aside