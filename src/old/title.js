'use strict'

import React from 'react'

const Title = ({ name, lastname }) => (
  <h1>Olá, {`${name} ${lastname.first} ${lastname.last}`}!</h1>
)
Title.defaultProps = {
  name: 'desconhecido',
  lastname: {
    first: 'sem',
    last: 'sobrenome'
  }
}
// const Title = React.createClass({
//   getDefaultProps: function () {
//     return {
//       name: 'Desconhecido',
//       lastname: { first: 'sem', last: 'sobrenome' }
//     }
//   },
//   render: function () {
//     return (
//       <h1>Olá {this.props.name + ' ' + this.props.lastname.first + ' ' + this.props.lastname.last}!</h1>
//     )
//   }
// })
export default Title
