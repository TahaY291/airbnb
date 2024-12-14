import Navbar from "./components/Navbar"
import Hero from "./components/Hero" 
import Card from "./components/card"
import data from "./data.jsx"
import "./style.css"

function App() {
  let cardEl = data.map((card)=>{
    return <Card 
    key = {card.id}
    {...card}
// second way to get data
    card= {card}
    // first way to get data
    // img={card.coverImg}
    // rating={card.stats.rating} 
    // count={ card.stats.reviewCount } 
    // country={card.location} 
    // title={card.title} 
    // price={card.price}
    // openSpots={card.openSpots}
     />
  })
  return (
    <>
     <Navbar />
     <Hero />
     <section className="cards-list">
                {cardEl}
            </section>
    </>
  )
}

export default App
