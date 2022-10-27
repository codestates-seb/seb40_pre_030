 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStackOverflow} from '@fortawesome/free-brands-svg-icons'
import styled from 'styled-components'

const stackoverflowimg=()=>{

const Stackicon = styled.div`
    font-size: 40px;
    margin-bottom: 20px;
    color: orange;

`


    return(
            <Stackicon>
                 <FontAwesomeIcon icon={faStackOverflow} />
            </Stackicon>
    
         
    )
}

export default stackoverflowimg