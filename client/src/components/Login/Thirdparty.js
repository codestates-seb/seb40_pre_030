import styled from "styled-components"



const Thirdparty=()=>{

const Buttoncontent= styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: column;

`

    return(
           <Buttoncontent>
            <button>Log in with Goolge</button>
            <button>Log in with Github</button>
            <button>Log in with Facebook</button>
            </Buttoncontent>
    )
}

export default Thirdparty