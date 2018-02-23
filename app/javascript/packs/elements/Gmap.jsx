import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Gmap extends React.Component {

  componentDidMount () {
    this.renderMap();
  }
  componentDidUpdate() {
    this.renderMap();
  }

  renderMap() {
    const tokyo = {
      lat: 35.68054,
      lng: 139.767052
    }
    if (window.google != undefined) {
      const map = new window.google.maps.Map(
        ReactDOM.findDOMNode(this.refs["map"]),
        {
          center: new window.google.maps.LatLng(
            this.props.center.lat || tokyo.lat,
            this.props.center.lng || tokyo.lng
          ),
          zoom: 17,
          mapTypeId: 'roadmap'
        }
      );
    }
  }

  render() {
    const styles = {
      container: {
        width: '100%',
        height: 500,
        backgroundColor: '#aaffaa',
      },
    }

    return (
      <div ref="map" style={styles.container}>
        cannot render map!
      </div>
    );
  }
}
