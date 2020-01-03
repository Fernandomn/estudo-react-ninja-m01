'use strict'

// var React = require('react')
import React, { Component } from 'react'
import Timer from './timer'
import Button from './button'

class App extends Component {
  constructor (props) {
    // console.log('constructor app')
    super()
    this.state = {
      checked: false,
      showContent: false
    }
  }

  render () {
    // console.log('render app')
    return (
      <div>
        <label>
          <input
            type='checkbox'
            checked={this.state.checked}
            onChange={() => {
              this.setState(
                { checked: !this.state.checked },
                () => {
                  this.setState({ showContent: this.state.checked })
                })
            }}
          />
          Mostrar conteúdo
        </label>
        {this.state.showContent && <div>Olha eu aqui!</div>}

      </div>
      // <div>
      //   <form
      //     onSubmit={(e) => {
      //       e.preventDefault()
      //       console.log('event', e)
      //     }}
      //     onChange={(e) => {
      //       console.log('name', e.target.name)
      //       console.log('value', e.target.value)
      //     }}
      //   >
      //     <input type='name' name='name'/>
      //     <input type='email' name='email'/>
      //
      //     <button type='submit'>Enviar</button>
      //     {/*<select multiple value={this.state.multiValues} onChange={e => {*/}
      //     {/*  console.log(e.target.value)*/}
      //     {/*  this.setState({*/}
      //     {/*    value: e.target.value,*/}
      //     {/*    multiValues: this.state.multiValues.includes(e.target.value) ? this.state.multiValues.remove(e.target.value) : this.state.multiValues.push(e.target.value)*/}
      //     {/*  })*/}
      //     {/*}}>*/}
      //     {/*  <option value='1'>Opção 1</option>*/}
      //     {/*  <option value='2'>Opção 2</option>*/}
      //     {/*  <option value='3'>Opção 3</option>*/}
      //     {/*</select>*/}
      //     {/*<input type='text' defaultValue='Valor inicial'/>*/}
      //     {/*<label>*/}
      //     {/*  <input*/}
      //     {/*    type='checkbox'*/}
      //     {/*    value='my-checkbox'*/}
      //     {/*    checked={this.state.checked}*/}
      //     {/*    onChange={event => {*/}
      //     {/*      this.setState({ checked: event.target.checked })*/}
      //     {/*    }}*/}
      //     {/*  />*/}
      //     {/*  Checkbox*/}
      //     {/*</label>*/}
      //     {/*<input type='radio' name='rd' value='1'/> Radio 1*/}
      //     {/*<input type='radio' name='rd' value='2' defaultChecked/> Radio 2*/}
      //   </form>
      // </div>
      // <div>
      // <Timer time={this.state.time}/>
      // <button onClick={() => {
      //     this.setState({ time: this.state.time + 10 })
      //   }}
      //   >
      //     Change props
      //   </button>
      // </div>
      // <div>
      //   <Square color={this.state.color}/>
      //
      //   {['red', 'green', 'blue'].map((color, index) => (
      //     <Button key={index} handleClick={() => this.setState({ color })}>
      //       {color}
      //     </Button>
      //   ))}
      //
      // </div>
      // <div className={'container'} onClick={() => this.setState({ text: 'outroTexto' })}>
      //   {this.state.text}
      // </div>
      // <div className={'containter'}>
      //   <LikeButton/>
      //   <SearchButton/>
      // </div>
      // <div className='container' onClick={(e) => {
      //   alert('clicou')
      // }}>
      //   {/*<Title name='Fernando' lastname={{ first: 'Medeiros', last: 'do Nascimento' }}/>*/}
      //   {/*{['blue', 'red', 'green'].map((color, index) => (*/}
      //   {/*  <Square key={index} color={color}/>*/}
      //   {/*))}*/}
      //   <Square/>
      // </div>
    )
  }
}

export default App
