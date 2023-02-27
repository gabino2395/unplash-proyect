import React from 'react'
import ReactDOM from 'react-dom/client'
import ImageContainer from './componente2/img-container/ImageContainer'
import Input from './componente2/Input/Input'
// import App from './App'
import './index.css'
import { DataContext } from './componente2/contexto/DataContext'
import Unplash from './componente2/Unplash/Unplash'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<DataContext>


<Unplash/>
</DataContext>
    {/* <App /> */}
  </React.StrictMode>,
)
