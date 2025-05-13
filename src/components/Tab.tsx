import styled from "styled-components";

const Styles = {
    Tab: styled.div`
        display: inline-block; 
        align-items: center; 
        width: fit-content; 
        padding: 1vw; 

        a{
            text-decoration: none; 
            color: white; 
            font-size: 1.5vw; 
            font-weight: bold; 
        }
        a:hover{
            color: lightblue; 
        }
        a:active{
            color: darkblue;
        }
        `
};

interface SelectProps{
    link: string
    text: string
  }

const Tab = ( { link, text } : SelectProps ) => {
    return (
        <Styles.Tab>
            <a href={link}>{text}</a>
        </Styles.Tab>
    )
}

export default Tab
