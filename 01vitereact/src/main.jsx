import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// A custom component
function MyApp() {
  return (
    <div>
      <h1>Custom App | Sid</h1>
    </div>
  )
}

// Manually created React element using plain object structure
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
    children: 'Click me to visit Google'
  }
}

// JSX element
const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>
)

const container = document.getElementById('root')
const root = createRoot(container)

// Render JSX element or any component
root.render(
  <StrictMode>
    {anotherElement}
    {/* <App /> */}
    {/* <MyApp /> */}
  </StrictMode>
)
