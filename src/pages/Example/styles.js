// SASS MODEL
import styled from "styled-components";
const Styles = styled.div`
  min-height: 50rem;
  background-color: black;
  color: white;

  .example {
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${"" /* background-color : red; */}
    top : 100px;
    position: relative;
    p,
    h1,
    h5,
    h4 {
      margin: auto auto;
    }

    .mybutton {
      display: flex;
      flex-direction: row;
      justify-content: center;
      button {
        width: 80px;
        height: 50px;
        margin: auto 10px;
      }
    }
  }
`;
export default Styles;
