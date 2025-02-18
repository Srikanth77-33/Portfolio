import styled from "styled-components";
import { Button } from "antd";

export const StyledProjects = styled.div`
margin: 128px 7vw 64px;
color: white;
span {
    color: #773588;
}

.ant-card.ant-card-bordered {
    background-color: transparent !important;
    box-shadow: #773588 0px 3px 4px 2px !important;
    color: white !important;
    transition: 0.5s !important;
    border: 1px solid #773588;
}

.ant-card.ant-card-bordered:hover {
    transform: scale(1.02);
    box-shadow: #773588 0px 4px 5px 3px !important;
}

.projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    column-gap: 24px;
    row-gap: 48px;
}

.content {
    .title {
        text-align: center;
        font-size: 1.5em;
    }
    .desc {

    }
}

.actions {
    display: flex;
    justify-content: space-around;
}
.custom-button:hover {
  background-color: #8806f3 !important;
}
`

export const StyledButton = styled(Button)`
background-color: #623686;
border: none;
.ant-btn-icon {
    color: white;
}
span {
    color: white;
}
`