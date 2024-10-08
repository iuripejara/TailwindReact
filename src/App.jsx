
import './App.css'
import BottonBar from './components/Boottombar'
import { useState } from "react"
import Header from './components/Header'
import Container from './components/Header/Container'
import Sidebar from './components/Sidebar'

export default function App() {

  const [count, setCount] = useState(0)
  return (
    <>
      <Header />
      <Container>
        <div className="flex flex-col md:flex-row gap-2 xl:gap-4 h-full relative">
          <Sidebar />
          <div className='h-full'>
            <h1 className="text-3xl text-center">Ready to start with Tailwind!</h1>
            <button
              className="
              w-fit mx-auto my-8 px-4 py-2 rounded-lg transition-colors
              border-transparent hover:border-cyan-500 border-2"
              onClick={() => setCount((count) => count + 1)}
            >
              count is {count}
            </button>
          </div>
          <BottonBar/>
        </div>
      </Container>
    </>
  )
}


