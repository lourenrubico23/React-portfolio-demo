import React from 'react'
import TableLoader from '../../../../partials/TableLoader'
import NoData from '../../../../partials/NoData'
import { LiaEdit, LiaHistorySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import { setIsActive, setIsAdd, setIsDelete } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'

const PortfolioTable = ({isLoading, isFetching, portfolio, setItemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext) 
    const [isArchiving, setIsArchiving] = React.useState(0)
    const [id, setId] = React.useState('')
    let counter= 1;


    const handleEdit = (item) => {
        dispatch(setIsAdd(true))
        setItemEdit(item)  
    }

    const handleActive = (item) => { // for Archive button
        dispatch(setIsActive(true))
        setId(item.portfolio_aid)
        setIsArchiving(0)
    }

    const handleRestore = (item) => { //for Restore button
        dispatch(setIsActive(true))
        setId(item.portfolio_aid)
        setIsArchiving(1)
    
    }
    const handleDelete = (item) => { //for Delete button
        dispatch(setIsDelete(true))
        setId(item.portfolio_aid)
       
    }

    

  return (
    <>
    <div className="table-wrapper relative">
        {isFetching && <SpinnerFetching/>}
                        <table>
                            <thead>
                                <tr>
                                    <th className='w-[20px]'>#</th>
                                    <th className='w-[150px]'>Title</th>
                                    <th className='w-[80px]'>Category</th>
                                    <th className='w-[80px]'>Publish</th>
                                    <th className='w-[100px]'>Action</th>
                                </tr>
                            </thead>
                            <tbody >
                            {isLoading && ( 
                                <tr >
                                    <td colSpan={9}>
                                        <TableLoader count="20" cols="4"/>
                                    </td>
                                </tr>)
                                }

                                {portfolio?.data.length === 0 && (
                                    <tr>
                                        <td colSpan={9}>
                                            <NoData/>
                                        </td>
                                    </tr>
                                )}
                            
                                    {portfolio?.data.map((item, key) => (
                                        <tr key={key}>
                                            <td>{counter++}</td>
                                            <td>{item.portfolio_title}</td>
                                            <td>{item.portfolio_category}</td>
                                            <td>{item.portfolio_publish_date}</td>
                                            <td className='table-action'>
                                            <ul>
                                                {item.portfolio_is_active ? (
                                                    <>
                                                        <li><button className="tooltip" data-tooltip="Edit" onClick={() => handleEdit(item)}><LiaEdit/></button></li>
                                                        <li><button className="tooltip" data-tooltip="Archive" onClick={() => handleActive(item)} ><PiArchive /></button></li>
                                                    </>
                                                ) : (
                                                    <>
                                                    <li><button className="tooltip" data-tooltip="Restore" onClick={() => handleRestore(item)}><LiaHistorySolid/></button></li>
                                                    <li><button className="tooltip" data-tooltip="Delete" onClick={() => handleDelete(item)} ><LiaTrashAltSolid/></button></li></>
                                                )}
                                            </ul>
                                            </td>
                                        </tr>
                                    ))}
                                        
                                 
                            </tbody>
                        </table>
                    </div>
                    {store.isActive && <ModalConfirm position="center" queryKey="portfolio" endpoint={`/v1/portfolio/active/${id}`} isArchiving={isArchiving} />}

                    {store.isDelete && <ModalDelete position="center" queryKey="portfolio" endpoint={`/v1/portfolio/${id}`} />}
                    
                    
</>
  )
}

export default PortfolioTable
