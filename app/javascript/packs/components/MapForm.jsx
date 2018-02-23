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
      search: {
        input: '',
        lat: 35.68054,
        lng: 139.767052,
      },
      pins: props.pins,
    }
    this.updateMap = this.updateMap.bind(this);
    this.searchMap = this.searchMap.bind(this);
  }

  searchMap() {
    this.googleMapsClient.geocode({ address: this.state.search.input }).asPromise()
      .then((res) => {
        return res.json
      })
      .then((body) => {
        const location = body.results[0].geometry.location
        this.setState({search: {lat: location.lat, lng: location.lng}})
        console.log(location)
        console.log(this.state)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  updateMap() {
    if(this.state.saving) { return }
    this.setState({saving: true})

    const path = this.state.id == null ? "../maps" : `../../maps/${this.state.id}`
    const method = this.state.id == null ? "POST" : "PATCH"
    request(
      path,
      this.state,
      (body) => { this.setState({id: body.data.id, saving: false}) },
      (e) => { console.error(e);  this.setState({saving: false}) },
      method,
    )
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
    mapSearchInput: {
      marginTop: 30,
    },
    mapSearchButton: {

    },
    pinsListContainer: {
      marginTop: 30,
    },
    pinsListTitle: {
      fontSize: '120%',
    },
    saveButton: {
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
          <Gmap center={this.state.search} />
          <InputField
            placeholder="地図上の位置を検索"
            value={this.state.search.input}
            onchange={(e) => { this.setState({search: {input: e.target.value} })}}
            style={this.styles.mapSearchInput}/>
            <CircleButton
              onclick={this.searchMap}
              style={this.styles.mapSearchButton} >
              検索
            </CircleButton>
        </div>

        <div style={this.styles.pinsListContainer}>
          <div style={this.styles.pinsListTitle}>
            ピンの一覧
          </div>
          {
            this.state.pins.map(pin => (
              <MapPinItem
                key={pin.id}
                name={pin.name}
              />
            ))
          }
        </div>
        <CircleButton
          onclick={this.updateMap}
          style={this.styles.saveButton} >
          更新
        </CircleButton>
      </div>
    )
  }
}

MapForm.defaultProps = {
}

MapForm.propTypes = {
}

export default MapForm
