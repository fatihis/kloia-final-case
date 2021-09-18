import React from "react";
import { connect } from "react-redux";

const Home = (props) => {
  console.log(props.list);
  return <div></div>;
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    list: dispatch,
  };
};
export default connect(mapDispatchToProps)(Home);
