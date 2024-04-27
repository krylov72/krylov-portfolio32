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
opacity:0;

    ${props => props.isOpen && css<{isOpen: boolean}>`
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    opacity:1;
    background-color: ${ColorTheme.colors.firstbg};
        transition:.2s ease-in-out;
        width:50vw;
        height:50vh;
        justify-content:center;
        align-items:center;
        top:25%;
    `}

`
const FormName = styled.label`
display:block;
text-align:start;
margin-bottom:20px;
`
const FormText = styled.input`
display:block;
border:none;
border-bottom:1px solid;


`
const FormArea = styled.textarea`
display:block;
resize:none;
width:40vw;
height:150px;
`
const ExitButton = styled.button<{isOpen:boolean}>`
span{
    &:before{
            position:absolute;
            content:'';
            width:15px;
            height:1px;
            top:15px;;
            right:10px;
            background-color: red;
            transform:rotate(45deg)
        }
        &:after{
            position:absolute;
            content:'';
            width:15px;
            height:1px;
            top:15px;;
            right:10px;
            background-color: red;
            transform:rotate(-45deg)
        }
}
`

const SubmitButton = styled.button<{isOpen:boolean}> `
top:10px;
width:150px;
height:20px;
  background-color: #fff;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, .5) 0 2px 5px 0;
  box-sizing: border-box;
  color: #0f1111;
  cursor: pointer;
  display: inline-block;
  padding: 0 10px 0 11px;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  width: 100px;
  &:hover{
    transform:scale(1.1);
    transition:.2s ease-in-out;
  }
  &:not(hover) {
    transform:scale(1);
    transition:.2s ease-in-out;
  }
`

export const S = {
    Contacts,
    Description,
    ContactsForm,
    FormName,
    FormText,
    FormArea,
    ExitButton,
    SubmitButton
}