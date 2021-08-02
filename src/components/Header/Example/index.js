import React from "react";
import { connect } from "react-redux";

import Styles from "./styles";

export const Index = (props) => {
  return <Styles></Styles>;
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Index);
