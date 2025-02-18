import styled from "styled-components";
import { Button } from "antd";

export const StyledResume = styled.div`
margin: 128px 7vw 64px;
color: white;
img {
    width: 80vw;
    margin: 48px 0px;
}
.custom-button:hover {
  background-color: #8806f3 !important;
}
`

export const StyledButton = styled(Button)`
width: 200px;
height: 44px;
font-size: 1.2em;
background-color: #623686;
border: none;
.ant-btn-icon {
    color: white;
}
span {
    color: white;
}
`