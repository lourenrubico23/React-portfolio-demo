import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/header/Header'
import { CiSearch } from 'react-icons/ci'
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from 'react-icons/lia'
import { PiArchive } from 'react-icons/pi'
import ModalAddStudent from './ModalAddStudent'
import StudentTable from './StudentTable'
import ModalError from '../../../../partials/modals/ModalError'
import ModalValidate from '../../../../partials/modals/ModalValidate'
import ModalConfirm from '../../../../partials/modals/ModalConfirm'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow'
import useQueryData from '../../../../custom-hook/useQueryData'
import Toast from '../../../../partials/Toast'
import DatabaseInfoStudent from './DatabaseInfoStudent'
import Searchbar from './Searchbar'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsAdd } from '../../../../../store/StoreAction'

const Students = () => {
    const { store, dispatch } = React.useContext(StoreContext); //store is the initial value and the dispatch is the value that will be change  
    const [itemEdit, setItemEdit ] = React.useState(null);
    const [studentInfo, setStudentInfo] = React.useState('');;
    const [isSearch, setIsSeach] = React.useState(false);
    const [keyword, setKeyword] = React.useState('');

    const {
        isLoading,
        isFetching,
        error,
        data: student,
      } = useQueryData(
        isSearch ? "/v1/student/search" : "/v1/student", // endpoint
        isSearch ? "post" : "get", // method
        "student", // key
        {
            searchValue: keyword
        }
      );

      const handleAdd = () => {
        dispatch(setIsAdd(true))
        setItemEdit(null)//for reset of modal from update to add
      }

    

  return (
    <>
    <section className='flex overflow-x-hidden'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>
            <div className='flex relative'>
                <div className={`main-wrapper transition-all px-4 py-3 ${store.isShow ? "w-3/4" : "w-full"}`}>
                    <div className='flex justify-between items-center'>
                        <h1>Database</h1>
                        <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/>
                    </div>    
                
                    <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                        <ul className='flex space-x-10 '>
                            <li className='tab-link active'><Link to="/database/student">Student</Link></li>
                            <li className='tab-link'><Link to="/database/teacher">Teacher</Link></li>
                            <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                        </ul>
                        <button className='btn btn--accent' onClick={handleAdd}><FiPlus/>New</button>
                    </div>

                    <StudentTable setStudentInfo={setStudentInfo} isLoading={isLoading} student={student} setItemEdit={setItemEdit}/>
                </div>
                
                <DatabaseInfoStudent studentInfo={studentInfo} />
            </div>
        </main>

    </section>
    {store.isAdd && <ModalAddStudent itemEdit={itemEdit}/>}

    {store.success && <Toast/>}

    {/* <ModalError position="center"/> */}
    {/* <ModalValidate position="center"/> */}
   
    {/* <ModalDelete position="center"/> */}
    {/* <SpinnerWindow/> */}
    </>
  )
}

export default Students
