import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getStats } from "../../actions/stats";

export class Form extends Component {
  state = {
    username: ""
  };

  static PropTypes = {
    stats: PropTypes.array.isRequired,
    getStats: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getStats();
  }
  onChange = e => this.setState({ [e.target.name]: [e.target.value] });
  onSubmit = e => {
    e.preventDefault();
    const { username } = this.state;
    const stat = { username };
    this.props.addStat(this.stat);
  };
  render() {
    const { username } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Select a User</h2>
          <form onSubmit={this.onSubmit}>
            <div className="input-group col-md-6 m-auto">
              <select
                className="users"
                style={{ width: "70%" }}
                type="text"
                name="user"
                onChange={this.onChange}
                value={username}
              >
                {this.props.stats.map(stat => (
                  <option value={stat.id}>{stat.username}</option>
                ))}
              </select>

              <div className="input-group-append ">
                <button
                  type="submit"
                  className="btn btn-sm btn-outline-success pull-right "
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStatetoProps = state => ({
  stats: state.stats.stats
});
export default connect(
  mapStatetoProps,
  { getStats }
)(Form);
