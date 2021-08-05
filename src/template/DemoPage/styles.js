import styled from "styled-components";
const Styles = styled.div`
    display : flex;
    flex-direction : column;
    justify-content : center;
    padding : 5% 15%;
    h1{
        position: relative
        left : 20%;
    }
    .button-box{
        border : 1px solid black;
        height : 100px;
        display : flex;
        flex-direction : row;
        justify-content : center;
        
        button{
            background : white;
            margin : 10px 10px;
            border : 5px solid orange;
            border-radius : 10px;
        }

        button:hover{
            background : orange;
            color : white;
        }

        button:active{
            background : red;
            border : 5px solid red;
            color : white;
        }
    }

    .list-box{
        margin : 0px 50px;
        display : flex;
        flex-direction : row;
        justify-content : center;
        flex-wrap: wrap;
        .box{
            height : 100px;
            width : 100px;
            color : white;
            background : orange;
            border-radius : 10px;
            justify-content : center;
            display : flex;
            margin : 50px 50px;
            p{
                position : relative;
                margin : auto auto;
            }
        }
    }

    .users{
        margin : 20px 20px;
        border : 2px solid black;
    }

`;
export default Styles;
