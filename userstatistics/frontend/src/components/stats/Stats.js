import React, { Component, Fragment } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

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
    const data = [
      {
        name: "Jan",
        value: 4000
      },
      {
        name: "Feb",
        value: 3000
      },
      {
        name: "Mar",
        value: 2000
      },
      {
        name: "Apr",
        value: 2780
      },
      {
        name: "May",
        value: 1890
      },
      {
        name: "Jun",
        value: 2390
      },
      {
        name: "Jul",
        value: 2390
      },
      {
        name: "Aug",
        value: 3490
      },
      {
        name: "Sept",
        value: 3490
      },
      {
        name: "Oct",
        value: 3490
      },
      {
        name: "Nov",
        value: 3490
      },
      {
        name: "Dec",
        value: 3490
      }
    ];
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
        <div className="col-md-7 m-auto">
          <div className="card card-body mt-5">
            <i
              className="text-center far fa-chart-bar fa-5x"
              style={{ color: "#ffed00" }}
            />
            <h4 className="text-center">
              Canvas For User Login Stats {"    "}
              <span class="badge badge-danger">Data are not real </span>
            </h4>

            <BarChart
              width={600}
              height={300}
              data={data}
              margin={{
                top: 20,
                right: 60,
                left: 20,
                bottom: 5
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#00b6ff" />
            </BarChart>
          </div>
        </div>
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
