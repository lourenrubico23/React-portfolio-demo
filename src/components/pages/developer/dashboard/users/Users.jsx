import React from 'react'
import { FiPlus } from 'react-icons/fi'
import { setIsAdd } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import Navigation from '../../../../partials/Navigation'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'
import ModalAddUser from './ModalAddUser'
import Header from '../../ui/header/Header'
import UsersTable from './UsersTable'
import useQueryData from '../../../../custom-hook/useQueryData'


const Users = () => {
  const handleAdd = () => {
    dispatch(setIsAdd(true))
    setItemEdit(null)
  }
const {store, dispatch} =React.useContext(StoreContext)
const [isSearch, setIsSearch] = React.useState(false);
const [keyword, setKeyword] = React.useState('');
const [itemEdit, setItemEdit] = React.useState(null);


const {
  isLoading,
  isFetching,
  error,
  data: user,
} = useQueryData(
  isSearch ? "/v1/user/search" : "/v1/user", // endpoint
  isSearch ? "post" : "get", // method
 "user", // key
  {
      searchValue: keyword
  }
);

  return (
    <section className='flex overflow-x-hidden'>
      <Navigation/>
      <main className='w-[calc(100%-250px)]'>
        <Header/>
        <div className='flex relative'>



        <div className={`main-wrapper transition-all  px-4 py-3  w-full`}>
          <div className='flex items-center justify-between'>
            <h1>USER LIST</h1>
            
              
              {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
            
          </div>
        
        
        <div className="tab flex items-center justify-between mt-8 border-b border-line mb-8 ">
        <h1>SEARCH</h1>
        <button className='btn btn--accent ' onClick={handleAdd}>
          <FiPlus/> New
        </button>
      </div>

      <UsersTable isLoading={isLoading} user={user} isFetching={isFetching} setItemEdit={setItemEdit}/>
      
      </div>
     


    </div>
      </main>
      {store.isAdd && <ModalAddUser itemEdit={itemEdit}/>}
      {store.error  && <ModalError position='center'/>}
      {store.success  && <Toast/>}

    </section>
  )
}

export default Users

