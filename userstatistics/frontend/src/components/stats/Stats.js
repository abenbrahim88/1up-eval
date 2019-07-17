import React, { Component, Fragment } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import ReactHtmlParser from "react-html-parser";
export class Stats extends Component {
  render() {
    let badges = "";
    if (this.props.data.id == "") {
      return null;
    } else {
      if (this.props.data.is_active) {
        badges += '<span class="badge badge-success mr-2">Active</span>';
      } else {
        badges += '<span class="badge badge-danger mr-2">Deactive</span>';
      }
      if (this.props.data.is_staff) {
        badges += '<span class="badge badge-primary mr-2">Admin</span>';
      } else {
        badges += '<span class="badge badge-primary mr-2"> Not Admin</span>';
      }
    }
    return (
      <Fragment>
        <div className="col-md-12 m-auto">
          <div className="card mt-5">
            <div class="card-header">
              <h6 style={{ color: "#61615d" }}>
                <i className=" far fa-chart-bar fa-2x" /> User Informations and
                login statistics by month
              </h6>
            </div>

            <div className="row card-body ">
              <div className="col-md-4">
                <div className="card">
                  <div class="card-header">
                    <h6 style={{ color: "#61615d" }}>
                      <i className=" far fa-user " /> User Informations
                    </h6>
                  </div>
                  <div className="card-body">
                    <img
                      src={this.props.data.photo}
                      class="img-thumbnail"
                      width="200"
                      height="200"
                    />
                    <h6>
                      <strong>Username:</strong> {this.props.data.username}
                    </h6>
                    <h6>
                      <strong>First Name:</strong> {this.props.data.first_name}
                    </h6>
                    <h6>
                      <strong>Last Name:</strong> {this.props.data.last_name}
                    </h6>
                    <h6>
                      <strong>Gender:</strong> {this.props.data.gender}
                    </h6>
                    <h6>
                      <strong>Email:</strong> {this.props.data.email}
                    </h6>
                    <h6>
                      <strong>Phone:</strong> {this.props.data.tel}
                    </h6>
                    <h6>
                      <strong>Date Joined:</strong>{" "}
                      {this.props.data.date_joined.split("T")[0]}
                    </h6>
                    <h6>
                      <strong>User Properties:</strong>
                    </h6>
                    <h6>{ReactHtmlParser(badges)}</h6>
                  </div>
                </div>
              </div>
              <div className="col-md-8">
                <div className="card">
                  <div class="card-header">
                    <h6 style={{ color: "#61615d" }}>
                      <i className=" far fa-chart-bar " /> login statistics by
                      month
                    </h6>
                  </div>
                  <div className="card-body">
                    <BarChart
                      width={600}
                      height={300}
                      data={this.props.data.statistics}
                      margin={{
                        top: 20,
                        right: 20,
                        left: 20,
                        bottom: 5
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="value" fill="#00b6ff" />
                    </BarChart>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Stats;
