import React from 'react'
import PropTypes from 'prop-types'

const CircleButton = props => (
    <div
      style={{...props.style, ...styles.container}}
      onClick={props.onclick} >
      { props.children }
    </div>
)

const styles = {
  container: {
    width: 48,
    height: 48,
    lineHeight: '48px',
    borderRadius: 24,
    backgroundColor: '#B3057E',
    justifyContent: 'center',
    boxShadow: '2px 2px 3px #ddd',
  },
}

CircleButton.defaultProps = {
}

CircleButton.propTypes = {
}

export default CircleButton
