import styled from 'styled-components';

export const HomeStyle = styled.div`
display:flex;
color:white;
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
