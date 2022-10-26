 import { useState } from "react";
import styled from "styled-components";
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEarthAmericas , faCertificate , faCircleInfo} from '@fortawesome/free-solid-svg-icons'
// import { useNavigate } from "react-router-dom";

const ChangeLi = styled.li`
background: ${({ navbg }) => 
  navbg ? 'lightgray' : 'white'
};
box-sizing: border-box; 
border-right: solid 10px ${({ navbg }) => 
  navbg ? 'orange' : 'white'
};
color: ${({ navbg }) => 
  navbg ? 'black' : 'gray'
};
font-size: ${({ navbg }) => 
  navbg ? 'black' : 'gray' 
};

&:hover{
    color: black; 

}
`

const NavTitle = styled.div`
 margin: 10px
`

const Navbar =()=>{
    // const navigate = useNavigate();
const [navbg , setnavbg] = useState(false)


const NavContainer=styled.div`
        position: fixed;
        width: 20%;
        color: gray;
`
const Onclickevent = ()=>{
    
    setnavbg(!navbg)}
//     navigate("/main");
// }

    return(
        
        <NavContainer>
            <nav>
            <ol>
            <NavTitle>
            Home
            </NavTitle>
            <NavTitle>
            PUBLIC
            <ul>
            <ChangeLi navbg ={navbg} onClick={Onclickevent}>
            <FontAwesomeIcon icon={faEarthAmericas} />
                Questions</ChangeLi>
            <ChangeLi>Tags</ChangeLi>
            <ChangeLi>Users</ChangeLi>
            <ChangeLi>Companies</ChangeLi>
            </ul>
            </NavTitle>
            <NavTitle>
            COLLECTIVES
            <FontAwesomeIcon icon={faCircleInfo} />
            
            <ul>
            <ChangeLi>
            <FontAwesomeIcon icon={faCertificate} style={{color: 'orange'}}/>
            Explore Collectives
            </ChangeLi>
            
            </ul>
            </NavTitle>
            <NavTitle>
            TEAMS
            </NavTitle>
            </ol>
            </nav>
           
            </NavContainer>
        
    )
}

export default Navbar