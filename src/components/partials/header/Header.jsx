import React from 'react'
import { CiBellOn } from 'react-icons/ci'
import { FaAngleDown } from 'react-icons/fa'
import { LiaAngleDownSolid, LiaKeySolid, LiaSignInAltSolid, LiaUserCircle } from 'react-icons/lia'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../../store/StoreContext'
import { checkLocalStorage } from '../../helpers/functions-general'

const Header = () => {
  const {store}  = React.useContext(StoreContext)
  const [showDropDown, setShowDropDown] = React.useState(false)

  const name = store.credentials?.data.user_name // to appear the name in the dashboard when login
  const email = store.credentials?.data.user_email

  const handleDropDown  = () => setShowDropDown(!showDropDown) // to show the dropdown

  const handleLogout = () => { //for logout
    setTimeout(() => {
      if (checkLocalStorage() !== null) {
        localStorage.removeItem("glatoken");
        //store.credentials.data.role_is_developer === 1
        //  ? window.location.replace(`${devNavUrl}/${developerPath}/login`) //for role when login
        window.location.replace(`/login`);
        return;
      }
    }, 1500);
  };

  return (
    <header className='header px-4 py-3 border-b border-line'>
      <div className='flex justify-end items-center gap-4 w-full relative'>
        <button className='text-3xl'><CiBellOn/></button>
        <img src="https:/via.placeholder.com/40x40" alt="" className='rounded-full object-cover size-[40px]' />

        <div>
          <button className='flex items-center gap-5' onClick={handleDropDown}>{name}<LiaAngleDownSolid/></button>
          <div className={`${showDropDown ? "block" : "hidden"} header-dropdown absolute bg-secondary p-4 rounded-md right-0 top-[calc(100%+10px)] text-center shadow-xs z-50`}>
          <img src="https:/via.placeholder.com/40x40" alt="" className='rounded-full object-cover size-[80px] mx-auto' />
          <h4 className='mb-1'>{name}</h4>
          <p  className='text-sm w-[150px] truncate'>{email}</p>

          <ul className='flex justify-center gap-5'>
            <li><Link to="#" className='text-2xl'><LiaUserCircle/></Link></li>
            <li><Link to="#" className='text-2xl'><LiaKeySolid/></Link></li>
            <li><button className='text-2xl' onClick={handleLogout}><LiaSignInAltSolid/></button></li>
          </ul>
          </div>
        </div>
        
      </div> 

    </header>
  )
}

export default Header
