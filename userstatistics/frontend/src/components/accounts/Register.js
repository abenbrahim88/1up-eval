import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { register } from "../../actions/auth";

export class Register extends Component {
  state = {
    username: "",
    first_name: "",
    last_name: "",
    gender: "",
    email: "",
    tel: "",
    password: "",
    password2: "",
    photo: null
  };
  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  };
  OnImageChange = e => {
    this.setState({
      photo: e.target.files[0]
    });
  };
  onSubmit = e => {
    e.preventDefault();
    let form_data = new FormData();

    if (this.state.password !== this.state.password2) {
      alert("Passwords do not match!");
    } else {
      form_data.append("username", this.state.username);
      form_data.append("first_name", this.state.first_name);
      form_data.append("last_name", this.state.last_name);
      form_data.append("gender", this.state.gender);
      form_data.append("email", this.state.email);
      form_data.append("tel", this.state.tel);
      form_data.append("password", this.state.password);
      form_data.append("photo", this.state.photo, this.state.photo.name);

      this.props.register(form_data);
    }
  };
  onChange = e => this.setState({ [e.target.name]: e.target.value });
  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const {
      username,
      first_name,
      last_name,
      gender,
      email,
      tel,
      password,
      password2
    } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <i
            className="text-center far fa-chart-bar fa-5x"
            style={{ color: "#ffed00" }}
          />
          <h2 className="text-center">Register</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
                required
              />
            </div>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="first_name"
                onChange={this.onChange}
                value={first_name}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="last_name"
                onChange={this.onChange}
                value={last_name}
                required
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <select
                className="form-control"
                name="gender"
                onChange={this.onChange}
                value={gender}
                required
              >
                <option />
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={this.onChange}
                value={email}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                className="form-control"
                name="tel"
                onChange={this.onChange}
                value={tel}
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
              <small style={{ color: "#ff007f" }}>
                Phone format: 123-456-7890
              </small>
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password2"
                onChange={this.onChange}
                value={password2}
                required
              />
            </div>
            <div className="form-group">
              <label>Picture</label>
              <input
                type="file"
                className="form-control-file"
                accept="image/png, image/jpeg"
                name="photo"
                onChange={this.OnImageChange}
              />
            </div>
            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Register
              </button>
            </div>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(
  mapStateToProps,
  { register }
)(Register);
