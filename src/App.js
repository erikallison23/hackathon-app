import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import Map from './maps';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      resortname: '',
      resortcountry: '',
      reportdate: '',
      reporttime: '',
      conditions: '',
      newsnow_in: '',
      lastsnow: '',
      pctopen: '',
      lowersnow_in: '',
      uppersnow_in: ''

    }
  };

  componentWillMount() {

    let site = ('http://api.weatherunlocked.com/api/snowreport/13032?app_id=5710b818&app_key=d9598f6a1d938e07c268dac375d9d74b');

    let config = { headers: { 'Accept': 'application/json' } }

    axios.get(site, config)
      .then((response) => {
        console.log('object', response.data)

        var snowObject = {
          'resortname': response.data.resortname,
          'resortcountry': response.data.resortcountry,
          'reportdate': response.data.reportdate,
          'reporttime': response.data.reporttime,
          'conditions': response.data.conditions,
          'newsnow_in': response.data.newsnow_in,
          'lastsnow': response.data.lastsnow,
          'pctopen': response.data.pctopen,
          'lowersnow_in': response.data.lowersnow_in,
          'uppersnow_in': response.data.uppersnow_in
        }

        this.setState({
          resortname: snowObject.resortname,
          resortcountry: snowObject.resortcountry,
          reportdate: snowObject.reportdate,
          reporttime: snowObject.reporttime,
          conditions: snowObject.conditions,
          newsnow_in: snowObject.newsnow_in,
          lastsnow: snowObject.lastsnow,
          pctopen: snowObject.pctopen,
          lowersnow_in: snowObject.lowersnow_in,
          uppersnow_in: snowObject.uppersnow_in

        })
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Crans-Montana Weather App</h1>
          <p className="App-intro">
            Scroll down for the current resort conditions for Crans-Montana in the Swiss Alps.
        </p>
        </header>

        <div className="parallax">

          <div style={{ height: '1000px', backgroundURL: ('https://s3.onthesnow.com/images/trailmaps/switzerland/crans-montana/20161012075851/xlarge.jpg'), fontSize: '36px' }}>

          </div>
        </div>

        <div className='container'>
          <div className='row' id='row-1'>

            <div className='col-md-4' id='col-1'>

              <div className='card' id='card-1'>
                <div className='card-header' id='header-1'>Current Resort Report</div>

                <p id='cond-table'>
                  <br />
                  Resort: {this.state.resortname}
                  <br />
                  <br />
                  Country: {this.state.resortcountry}
                  <br />
                  <br />
                  Date: {this.state.reportdate}
                  <br />
                  <br />
                  Time of report: {this.state.reporttime}
                  <br />
                  <br />
                  Conditions: {this.state.conditions}
                  <br />
                  <br />
                  New Snow (inches): {this.state.newsnow_in}
                  <br />
                  <br />
                  Last Snowfall: {this.state.lastsnow}
                  <br />
                  <br />
                  Amount of mountain open: {this.state.pctopen}%
                  <br />
                  <br />
                  Lower mountain total (inches): {this.state.lowersnow_in}
                  <br />
                  <br />
                  Upper mountain total (inches): {this.state.uppersnow_in}

                </p>

              </div>
            </div>

            <div className="col-md-6" id='col-2'>

              <h2 className="card-header text-center" id='h2' style={{ color: 'white', float: 'inherit', textAlign: 'center' }}>Check out our location!</h2>
              <div className='border round' id='map' style={{ height: '300px', width: '500px', float: 'inherit', }}>
                {<Map
                  lat={this.state.location && this.state.location.lat}
                  lng={this.state.location && this.state.location.lng}
                />}
              </div>

            </div>


          </div>
        </div>
      </div>
    );
  }
}

export default App;
