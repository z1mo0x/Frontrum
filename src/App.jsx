import { useState, } from 'react'
import './App.css'
import Hero from './components/UI/Hero/Hero';
import Layout from './components/UI/Layout/Layout';

function App() {


  const [logged, setLogged] = useState(false);
  const [buttonActive, setButtonActive] = useState(true)

  return (
    <>
      <Layout logged={logged}>
        <Hero />
      </Layout>
    </>
  )
}

export default App
