import React from 'react';
import { withRouter } from 'react-router';

class BenchForm extends React.Component {
  constructor(props) {
    super(props);

    this.coords = {lat: props.lat, lng: props.lng};

    this.state = {
      description: "",
      seating: 2
    };

    this.navigateToSearch = this.navigateToSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({[property]: e.target.value});
  }

  navigateToSearch() {
    this.props.router.push("/");
  }

  handleSubmit(e){
    e.preventDefault();
    const bench = Object.assign({}, this.state, this.coords);
    this.props.createBench({bench});
    this.navigateToSearch();
  }

  render() {
    return (
      <div className="new-bench-container">
        <div className="new-bench-form">
          <h3 className="new-bench-title">Create A Bench!</h3>

          <form onSubmit={this.handleSubmit}>
            <label className="bench-field">Description</label>
            <input type="text" value={this.state.description}
              onChange={this.update("description")} className="bench-field"/>

            <label className="bench-field">Number of Seats</label>
            <input min='0' type="number" value={this.state.seating}
              onChange={this.update("seating")} className="bench-field"/>

            <label className="bench-field">Latitude</label>
            <input type="text" disabled value={this.coords.lat} className="bench-field" />

            <label className="bench-field">Longitude</label>
            <input type="text" disabled value={this.coords.lng} className="bench-field" />

            <div className="button-holder">
              <input type="submit" value="Create Bench" className="new-bench-button" />
            </div>
          </form>

          <div className="button-holder">
           <button className="new-bench-button" onClick={this.navigateToSearch}>Cancel</button>
         </div>

        </div>
      </div>
    );
  }
}

export default withRouter(BenchForm);
