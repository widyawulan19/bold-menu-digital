import React from 'react'
import '../Styles/BoldWelcome.css'
import img from '../Assets/welcomepic.jpeg'
import { IoChevronForwardOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

function BoldWelcome() {
    // state 
    const navigate = useNavigate();
    
    const navigateToChoose = () =>{
        navigate('/choose')
    }

  return (
    <div className='bold-container'>
        <div className="bold-title">
            <h4>Elevate Your Plate, Embrace Elegance</h4>
            <h1>THE MENU</h1>
            <p>
                A place where quality ingredients and thoughtful cooking come together for a memorable meal.
            </p>
        </div>

        <div className="bold-photo">
            <img src={img} alt="Welcome Pic" />
            <div className="bold-span">
                <h3>Savora Kitchen</h3>
            </div>
        </div>

        <div className="bold-btn">
            <button onClick={navigateToChoose}>
                Discover Our Menu <IoChevronForwardOutline />
            </button>
        </div>

        <div className="bold-footer">
             <p>CREATE BY LUMINOUS.ID</p>
        </div>

    </div>
  )
}

export default BoldWelcome