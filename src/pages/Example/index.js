import React from "react";
import { connect } from "react-redux";
import Styles from "./styles";

import { fetchPosts, increment, decrement, createPost } from "../../actions";

export const index = (props) => {
  console.log(props);
  return (
    <Styles>
      <div className="example">
        <h1>Counter redux example</h1>
        <br />
        <h4>Counter : {props.counter}</h4>
        <br />
        <h4>Auth : {props.auth === true ? "True" : "False"}</h4>
        <br />
        <div className="mybutton">
          <button
            onClick={() => {
              props.fetchPosts();
            }}
          >
            Fetch
          </button>

          <button
            onClick={() => {
              props.createPost();
            }}
          >
            Post
          </button>

          <button
            onClick={() => {
              console.log(props);
            }}
          >
            Show Post
          </button>

          <button
            onClick={() => {
              props.increment();
            }}
          >
            Increment
          </button>

          <button
            onClick={() => {
              props.decrement();
            }}
          >
            Decrement
          </button>
        </div>
      </div>
    </Styles>
  );
};

const mapStateToProps = (state) => {
  return { ...state };
};

const mapDispatchToProps = {
  fetchPosts,
  increment,
  decrement,
  createPost,
};

export default connect(mapStateToProps, mapDispatchToProps)(index);
