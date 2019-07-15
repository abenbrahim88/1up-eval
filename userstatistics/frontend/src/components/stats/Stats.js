import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStats } from "../../actions/stats";

export class Stats extends Component {
  static PropTypes = {
    stats: PropTypes.array.isRequired,
    getStats: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getStats();
  }
  render() {
    return (
      <Fragment>
        <h2>User informations</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>UserName</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Login Dates</th>

              <th />
            </tr>
          </thead>
          <tbody>
            {/* {this.props.stats.map(stat => (
              <tr key={stat.id}>
                <td>{stat.id}</td>
                <td>{stat.username}</td>
                <td>{stat.dates}</td>
                <td>{stat.first_name}</td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </Fragment>
    );
  }
}
const mapStatetoProps = state => ({
  stats: state.stats.stats
});
export default connect(
  mapStatetoProps,
  { getStats }
)(Stats);
