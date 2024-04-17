import styled from "styled-components"
import { font } from "../../../styles/Common"

const Contacts = styled.section`

`

const Description = styled.p`
margin:20px 0 30px;
    ${font({weight:500, Fmax:18, Fmin:13})};
    max-width:275px;
    width:100%;
    text-align: center;
`

export const S = {
    Contacts,
    Description
}