import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './App/Store.jsx'
import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './components/Layout.jsx'
import Form from './components/Form.jsx'
import DisplayInputs from './components/Display.jsx'

const router = createHashRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Form />} />
      <Route path='display' element={<DisplayInputs />} />
    </Route>
  )
)



createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
)
