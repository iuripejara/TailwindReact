
import './App.css'
import Header from './components/Header'
import Container from './components/Header/Container'
import Sidebar from './components/Sidebar'

function App() {


  return (
    <>
      <Header/>
      <Container>
        <div className='flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative'>
          <Sidebar/>
        </div>
          
          <h1>fala mais</h1>
      </Container>
    </>
  )
}

export default App
