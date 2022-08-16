import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Pokemon extends Component {
  render() {
    const {name, type, averageWeight, image} = this.props.pokemon;
    return (
      <div className='pokemon'>
       <strong>Nome:</strong> {name} <br />
       <strong>Tipo:</strong>{type} <br />
       <strong>Peso Médio:</strong>{`${averageWeight.value} ${averageWeight.measurementUnit}`}
        <img src={image} />
      </div>
    );
  }
}

Pokemon.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string,
      type: PropTypes.string,
      averageWeight: PropTypes.shape({
        measurementUnit: PropTypes.string,
        value: PropTypes.number,
      }),
      image: PropTypes.string,
    }).isRequired,
  };
  

export default Pokemon;
