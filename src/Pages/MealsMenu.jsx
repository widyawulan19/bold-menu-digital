import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../Styles/MealsMenu.css'
import { IoChevronBackOutline } from "react-icons/io5";
import img1 from '../Assets/appetizer.jpeg'
import img2 from '../Assets/maincourse.jpeg'
import img3 from '../Assets/cake.jpeg'
import img4 from '../Assets/drink.jpeg'

function MealsMenu({ data }) {
  const { categoryName } = useParams();
  const decodedCategory = decodeURIComponent(categoryName);
  const navigate = useNavigate();

    const navigateToChoose = () =>{
        navigate('/choose')
    }

  const currentCategory = data.find(
    (cat) => cat.name.toLowerCase() === decodedCategory.toLowerCase()
  );

  if (!currentCategory) return <p>Menu tidak ditemukan</p>;

  const getPic = {
    'Appetizer': img1,
    'Main Course': img2,
    'Dessert': img3,
    'Beverages': img4
  };

  return (
    <div className='meals-container'>

        <div className="meals-header">
            <button onClick={navigateToChoose}><IoChevronBackOutline /></button>
            <h2>{currentCategory.name}</h2>
            <span></span>
        </div>

        <div className="meals-pic">
            <img src={getPic[currentCategory.name]} alt={currentCategory.name} />
        </div>

        <div className="meals-box">
        {currentCategory.items.map((item, index) => (
            <div className='meals-card' key={index}>
                <div className="meals-name">
                    <h3> 
                        {item.name}
                        {item.badge && <span className="badge">{item.badge}</span>}
                    </h3>
                    <p className='desc'>{item.description}</p>
                </div>
                <div className="meals-price">
                    {item.price && <p>{item.price}K</p>}
                    {(item.ice || item.hot) && (
                        <div className="price-box">
                            <p>
                                {item.ice && `ICE ${item.ice}K `}
                            </p>
                            <p>
                                {item.hot && `HOT ${item.hot}K`}
                            </p>
                        </div>
                        
                    )}
                </div>
           

            
            </div>
        ))}
      </div>

    </div>
  )
}

export default MealsMenu