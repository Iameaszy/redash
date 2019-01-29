import styled, { css } from 'styled-components';


export const CellButton = styled.button`
border: none;
width: 56px;
height: 26px;
line-height: 1;
cursor:pointer;
background: ${props => (props.color ? props.color : 'rgb(86, 127, 202)')};
color: white;
${props => props.marginLeft && css`
        margin-left: ${props.marginLeft}
`}
`;

export const NetworkFailure = styled.div`
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction:column;

.error-text{
    color: red;
    font-weight: bold;
}
`;
export const HomeStyle = styled.div`
display:flex;
color:white;
.content{
    width: 100%;
    text-align: center;
    line-height:6;
}
.side-bar{
    padding-top:10px;
    [class*="icon"]{
            padding-right:10px;
    }
    .toggle{
        text-align: center;
    padding-right: 5px;
    padding-top: 10px;
    color: white;
    cursor:pointer;
    }
    background: slateblue;
    min-height: 100vh;

    .menu{
        display:flex;
        padding: 5px;
        margin: 5px 0;
        font-size:20px;
        cursor:pointer;
        border-bottom:solid 1px deepskyblue;

        &:last-child{
            border:none;
        }

        &:hover{
            background: rgba(0,0,0,0.5);
        }
    }

    .fa-home{
        margin-top:0;
    }
}
`;
