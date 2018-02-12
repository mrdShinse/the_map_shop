import React from 'react'
import PropTypes from 'prop-types'

const InputField = props => (
  <input type="text"
         placeholder={props.placeholder}
         style={styles.container}
         value={props.value}
         onChange={props.onchange} />
)

const styles = {
  container: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomStyle: 'solid',
    borderBottomColor: '#bbb',
    outline: 0,
    width: '60%',
  },
}

InputField.defaultProps = {
  placeholder: '',
  value: '',
}

InputField.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
}

export default InputField
