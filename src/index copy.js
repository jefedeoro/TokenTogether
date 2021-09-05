import React from 'react'
import ReactDOM from 'react-dom'
import Form from './Form'
import { initContract } from './utils'

window.nearInitPromise = initContract()
  .then(() => {
    ReactDOM.render(
      <Form />,
      document.querySelector('#root')
    )
  })
  .catch(console.error)
