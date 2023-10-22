import MyComponent from './components/welcome/MyComponent'

type Props = {}

const App = (props: Props) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <MyComponent />
    </div>
  )
}

export default App