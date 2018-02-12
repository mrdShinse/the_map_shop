import React from 'react'
import PropTypes from 'prop-types'

import CircleButton from '../elements/CircleButton'
import InputField from '../elements/InputField'
import MapPinItem from '../elements/MapPinItem'
import Gmap from '../elements/Gmap'
import request from '../shared/request'

import ENV from '../../../../env.json'

class MapForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id || null,
      name: props.name || '',
      saving: false,
    }
    this.updateMap = this.updateMap.bind(this);
  }

  updateMap() {
    if(this.state.saving) { return }
    this.setState({saving: true})

    if(this.state.id == null) {
      request(
        "../maps",
        this.state,
        (body) => { this.setState({id: body.data.id, saving: false}) },
        (e) => { console.error(e);  this.setState({saving: false}) },
        "POST"
      )
    } else {
      request(
        `../../maps/${this.state.id}`,
        this.state,
        (body) => { this.setState({id: body.data.id, saving: false}) },
        (e) => { console.error(e);  this.setState({saving: false}) },
        "PATCH"
      )
    }
  }

  googleMapsClient = require('@google/maps').createClient({
    key: ENV['GOOGLEMAP_KEY'],
    Promise: Promise
  })

  styles = {
    container: {
      width: '100%',
      marginTop: 30,
    },
    mapSearchContainer: {
      display: 'flex',
      flex: 1,
      flexWrap: 'wrap',
      width: '100%',
      marginTop: 30,
    },
    pinsListContainer: {
      marginTop: 30,
    },
    pinsListTitle: {
      fontSize: '120%',
    },
    saveButtonContainer: {
      position: 'absolute',
      right: 70,
      bottom: 60,
    },
  }

  render() {
    return (
      <div style={this.styles.container}>
        <InputField
          placeholder="タイトル"
          value={this.state.name}
          onchange={(e) => { this.setState({name: e.target.value}) }}/>

        <div style={this.styles.mapSearchContainer}>
          <Gmap />
          <InputField
            placeholder="地図上の位置を検索" />
        </div>

        <div style={this.styles.pinsListContainer}>
          <div style={this.styles.pinsListTitle}>
            ピンの一覧
          </div>
          { this.props.pins.map(pin => (<MapPinItem/>)) }
        </div>
        <div style={this.styles.saveButtonContainer}>
          <CircleButton
            onclick={this.updateMap}>
            更新
          </CircleButton>
        </div>
      </div>
    )
  }
}

MapForm.defaultProps = {
  pins: [],
}

MapForm.propTypes = {
}

export default MapForm
