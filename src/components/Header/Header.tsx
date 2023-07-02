import './header.css'
import { TbCircleCaretLeft } from 'react-icons/tb';
import { FaRegBell } from 'react-icons/fa';

function Header() {
  return (
    <div className="homeHeader">

      <button className="icon">
        <TbCircleCaretLeft style={{height:"18px", width:"18px", color:"#C4C4C4"}}/>
      </button>

      <button className="icon">
        <FaRegBell style={{height:"18px", width:"20px", color:"#C4C4C4"}}/>
      </button>
      
  </div>
  )
}

export default Header