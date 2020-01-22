import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:7000'

ReactDOM.render(<App/>,document.getElementById('root'))