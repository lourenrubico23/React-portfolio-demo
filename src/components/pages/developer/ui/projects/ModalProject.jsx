import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsShow } from '../../../../../store/StoreAction'


const ModalProject = ({position, info}) => {
    const {store, dispatch} = React.useContext(StoreContext)

    const handleClose = () => dispatch(setIsShow(false))


  return (
    <ModalWrapper position={position}>
        <div className='bg-secondary p-5 max-w-[900px] w-full relative'>
            <button className='absolute  top-2 right-2' onClick={handleClose}><LiaTimesSolid className='text-xl'/></button>
            <div className='grid grid-cols-2 gap-8'>
                <img src="http://via.placeholder.com/400x400" alt="" className='w-full h-[400px] object-cover block' />

                <div className='content'>
                    <h3>{info.portfolio_title}</h3>
                    <small>{info.portfolio_category}</small>
                    <p className='my-5'>{info.portfolio_description}</p>
                </div>
            </div>
        </div>


    </ModalWrapper>
  )
}

export default ModalProject
