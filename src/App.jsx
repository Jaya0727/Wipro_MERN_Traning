import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Footer from './components/Footer'
import Header from './components/Header'
import Mainpart from './components/Mainpart'
import Category from './components/Category'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Mainpart />
      <Category/>
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-10">
        <Card title="men polo crew neck T-shirt" price="299 " image="/Images/Tshirt.jpg"/>
        <Card title="Men fit polo Shirt" price="429" image="/Images/Shirt.jpg"/>
        <Card title="Women Short Skirt" price= "599" image ="/Images/Skirt.jpg"/>
      </section>
      <Footer />
    </>
  );
};
export default App;