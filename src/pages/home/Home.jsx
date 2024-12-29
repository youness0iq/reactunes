import bg from "../../assets/bg00.gif"
import suves from "../../assets/download.jpg"
import "./Home.css"
import { category } from '../../../Category'
import { useNavigate } from "react-router-dom"
import fire from "../../assets/fire.avif"

function Home() {
  const navigate = useNavigate();
  return (
    <div className='home'>

      <div className="big-container">
        <div className="hero-bg">
          <img src={bg} alt="" />
        </div>
        <div className="div-container">
          <div className="content1"><img src={suves} alt="" /></div>
          <div className="content1"><img src={fire}/></div>
        </div>
      </div>

    <h1 className="my_car">CARS TO SELL :</h1>

      <div className="category-section">
        {category.slice(0, 5).map((item) => (
          <div className="category-card" key={item.id} onClick={() => navigate('/cars?category='+item.category)}>
            <img src={item.image} alt="" />
            <span>{item.name}</span>

          </div>
        ))}

      </div>
    </div>
  )
}

export default Home
