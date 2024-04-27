import styled from "styled-components"
import { font } from "../../../styles/Common"
import { css } from "styled-components";
import { ColorTheme } from "../../../styles/Theme";

const Contacts = styled.section<{isOpen:boolean}>`
position:relative;
overflow:hidden;
justify-content:center;
align-items:center;

${props => props.isOpen && css<{isOpen: boolean}>`
opacity:1;
`}
`

const Description = styled.p`
margin:20px 0 30px;
    ${font({weight:500, Fmax:18, Fmin:13})};
    max-width:275px;
    width:100%;
    text-align: center;
`
const ContactsForm = styled.form<{isOpen: boolean}>`
position:fixed;
display:flex;
flex-direction:column;
transform:translateX(70vw);

    ${props => props.isOpen && css<{isOpen: boolean}>`
    transform:translateX(0);
    background-color: ${ColorTheme.colors.firstbg};
        transition:1s ease-in-out;
        width:50vw;
        height:50vh;
        justify-content:center;
        align-items:center;
        top:0;
    `}

`
const FormName = styled.label`
display:block;
text-align:start;
`
const FormText = styled.input`
display:block;
`
const FormArea = styled.textarea`
display:block;
resize:none;
width:200px;
height:100px;
`

export const S = {
    Contacts,
    Description,
    ContactsForm,
    FormName,
    FormText,
    FormArea
}