import React from 'react'
import PropTypes from 'prop-types'

const MapPinItem = props => (
  <div>
    {props.name}
  </div>
)

MapPinItem.defaultProps = {
  id: null,
  name: '',
  lat: null,
  lng: null,
}

MapPinItem.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  lat: PropTypes.number,
  lng: PropTypes.number,
}

export default MapPinItem
