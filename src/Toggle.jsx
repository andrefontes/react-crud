import { Flex } from "@chakra-ui/react";
import React from "react";
import styled from "styled-components"
const AppToggle = () => {
    const [isChecked, setChecked] = React.useState(false);
    
    
    const handleCheck = () => {
        setChecked((prevState) => !prevState)
        console.log('is checked' , isChecked);
    }
    return <PageWrapper>
        <h1>{isChecked ? 'checado' : 'Não checado'}</h1>

        
        {isChecked && (
        <div>

            wdqd qwedf wdqd qwedf 
            fweqf ewf ew
            f wef ewf ewf ewferfefwE
            fweqf ewf ew
            f wef ewf ewf ewferfefwE
        </div>
        )}
        
        <button onClick={handleCheck}>Toggle</button>
        
        </PageWrapper>
}

export default AppToggle;

const PageWrapper = styled.div`
    display: Flex;
    align-items: center;
    justify-content: center;
    backgrond-color: red;
    font-size: 1.5em;
    text-align: center;
    color: #BF4F74;
    background: blue;
    height:100vh;
    width: 100vw;
`;
