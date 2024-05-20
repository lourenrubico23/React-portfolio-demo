import React from 'react'
import Navigation from '../../../../partials/Navigation'
import { Link } from 'react-router-dom'
import PortfolioTable from './PortfolioTable'
import { FiPlus } from 'react-icons/fi'
import Header from '../../../../partials/header/Header'
import ModalAddPortfolio from './ModalAddPortfolio'
import useQueryData from '../../../../custom-hook/useQueryData'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsAdd } from '../../../../../store/StoreAction'
import ModalError from '../../../../partials/modals/ModalError'
import Toast from '../../../../partials/Toast'

const Portfolio = () => {
    const {store, dispatch} =React.useContext(StoreContext)
    const [isSearch, setIsSearch] = React.useState(false)
    const [keyword, setKeyword] = React.useState('')
    const [itemEdit, setItemEdit ] = React.useState(null);

    const {
        isLoading,
        isFetching,
        error,
        data: portfolio,
      } = useQueryData(
        isSearch ? "/v1/portfolio/search" : "/v1/portfolio", // endpoint
        isSearch ? "post" : "get", // method
        "portfolio", // key
        {
            searchValue: keyword
        }
      );

      const handleAdd = () => {
        dispatch(setIsAdd(true))
        setItemEdit(null)//for reset of modal from update to add
      }


  return (
    <section className='flex overflow-x-hidden'>
    <Navigation/>
    <main className='w-[calc(100%-250px)]'>
        <Header/>
        <div className='flex relative'>
            <div className='main-wrapper transition-all px-4 py-3 w-full'>
                <div className='flex justify-between items-center'>
                    <h1>Database</h1>
                    {/* <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/> */}
                </div>    
            
                <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                   <h1>Search</h1>
                    <button className='btn btn--accent'  onClick={handleAdd}><FiPlus/>New</button>
                </div>

                <PortfolioTable isLoading={isLoading} portfolio={portfolio} isFetching={isFetching} setItemEdit={setItemEdit}/>
            </div>
            
            
        </div>
    </main>

    {store.isAdd && <ModalAddPortfolio itemEdit={itemEdit}/>}
    {store.error && <ModalError position='center'/>}
    {store.success && <Toast/>}
</section>
  )
}

export default Portfolio
