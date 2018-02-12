import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

export default class Gmap extends React.Component {

  componentDidMount () {
    const map = new window.google.maps.Map(
      ReactDOM.findDOMNode(this.refs["map"]),
      {
        center: new window.google.maps.LatLng(35.729503, 139.710900),
        zoom: 17,
        mapTypeId: 'roadmap'
      }
    );
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
      <div ref="map" style={styles.container} />
    );
  }
}
