import React from 'react'
import '../Styles/Choose.css'
import { PiCoffeeFill } from "react-icons/pi";
import { GiHotMeal } from "react-icons/gi";
import { IoChevronBackOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import dataMeals from '../Data/MealsData.json';
import img1 from '../Assets/appetizer.jpeg'
import img2 from '../Assets/maincourse.jpeg'
import img3 from '../Assets/cake.jpeg'
import img4 from '../Assets/drink.jpeg'

function ChoosePage() {
    // state 
    const navigate = useNavigate();

    const navigateToMenu = () =>{
        navigate('/menu')
    }

    const navigateToMeals = (name) =>{
        navigate(`/meals-menu/${name}`)
    }

    const navigateToWelcome = () =>{
        navigate('/')
    }

    const getPic = {
        'Appetizer': img1,
        'Main Course': img2,
        'Dessert': img3,
        'Beverages': img4
    }

  return (
    <div className='choose-container'>
        <div className="choose-header">
            <h2>Find Your Perfect Taste</h2>
            <p>Explore Our Menu and choose what you’re craving today.</p>
        </div>
        

        <div className="choose-card">
            {dataMeals.map((meal) => (
                <div className="choose-box" key={meal.id} onClick={() =>navigateToMeals(meal.name)}>
                    <img src={getPic[meal.name]} alt={meal.name} />
                    <h3>{meal.name}</h3>
                </div>
            ))} 
        </div>

        <div className="choose-btn">
            <button onClick={navigateToWelcome}>
                <IoChevronBackOutline /> Back
            </button>    
        </div>
        
    </div>
  )
}

export default ChoosePage