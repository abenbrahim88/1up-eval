import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getUsers } from "../../actions/stats";
import Stats from "./Stats";
export class Form extends Component {
  state = {
    id: "",
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    date_joined: "",
    statistics: []
  };
  static PropTypes = {
    stats: PropTypes.array.isRequired,
    getUsers: PropTypes.func.isRequired
  };
  componentDidMount() {
    this.props.getUsers();
    $("#users").select2({
      placeholder: "Search for a user",
      allowClear: true
    });
  }
  async getStatistics(id) {
    try {
      const res = await fetch(`http://localhost:8000/api/stats/${id}`, {
        method: "GET",
        body: JSON.stringify(res),
        credentials: "same-origin", //include, same-origin
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      this.setState(data);
    } catch (e) {
      alert("hello");
    }
  }
  onSubmit = e => {
    e.preventDefault();
    this.getStatistics($("#users").val());
  };
  render() {
    return (
      <Fragment>
        <div className="col-md-6 m-auto">
          <div className="card mt-5">
            <div class="card-header">
              <h6 style={{ color: "#61615d" }}>
                <i className=" far fa-user " /> Users
              </h6>
            </div>
            <div className="card-body">
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <select
                    id="users"
                    style={{ width: "100%" }}
                    type="text"
                    name="user"
                    required
                    data-message="First you need to select a user"
                  >
                    <option />
                    {this.props.stats.map(stat => (
                      <option value={stat.id}>
                        {stat.first_name} {stat.last_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group ">
                  <button
                    type="submit"
                    className="btn btn-sm btn-success float-right"
                  >
                    <i class="fas fa-search" /> Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Stats data={this.state} />
      </Fragment>
    );
  }
}

const mapStatetoProps = state => ({
  stats: state.stats.stats
});
export default connect(
  mapStatetoProps,
  { getUsers }
)(Form);
