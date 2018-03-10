import React from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  FormControl,
  Icon,
  Input,
  InputLabel,
} from 'material-ui';

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
      input: {
        geoSearch: '',
      },
      search: {
        lat: 35.68054,
        lng: 139.767052,
      },
      pins: props.pins,
    }
    this.updateMap = this.updateMap.bind(this);
    this.searchMap = this.searchMap.bind(this);
  }

  searchMap() {
    this.googleMapsClient.geocode({ address: this.state.input.geoSearch }).asPromise()
      .then((res) => {
        return res.json
      })
      .then((body) => {
        const location = body.results[0].geometry.location
        this.setState({search: {lat: location.lat, lng: location.lng}})
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
    pinsListContainer: {
      marginTop: 30,
    },
    pinsListTitle: {
      fontSize: '120%',
    },
  }

  render() {
    return (
      <div style={this.styles.container}>
        <FormControl>
          <InputLabel htmlFor="titleInput">タイトル</InputLabel>
          <Input
            id="titleInput"
            placeholder="タイトル"
            value={this.state.name}
            onChange={(e) => { this.setState({name: e.target.value}) }}
          />
        </FormControl>
        <div style={this.styles.mapSearchContainer}>
          <Gmap center={this.state.search} />
          <FormControl>
            <InputLabel htmlFor="mapSearchInput">地図上の位置を検索</InputLabel>
            <Input
              id="mapSearchInput"
              placeholder="地図上の位置を検索"
              value={this.state.input.geoSearch}
              onChange={(e) => { this.setState({input: {geoSearch: e.target.value} })}}
            />
          </FormControl>
          <Button
            variant="fab"
            color="primary"
            onClick={this.searchMap} >
            <Icon>find_replace</Icon>
          </Button>
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
        <Button
          variant="fab"
          color="primary"
          onClick={this.updateMap} >
          <Icon>edit_icon</Icon>
        </Button>
      </div>
    )
  }
}

MapForm.defaultProps = {
}

MapForm.propTypes = {
}

export default MapForm
