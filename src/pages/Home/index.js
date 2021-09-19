import React from "react";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../utils/store/store";
import { Menu } from "../../components/ComponentContainers/Menu";
import { Sidebar } from "../../components/ComponentContainers/Sidebar";
import PropTypes from "prop-types";
const Home = ({ list }) => {
  return (
    <div className="w-full h-full flex lg:flex-col">
      <Sidebar list={list.coffees} />
      <Menu list={list.coffees} />
    </div>
  );
};

Home.propTypes = {
  list: PropTypes.shape({
    coffees: PropTypes.array.isRequired,
  }),
};

/* using currying func react-redux/connect in order to talk to dispatcher
mapDispatchToProps returns store's data as prop to the component
*/
export default connect(mapDispatchToProps)(Home);
