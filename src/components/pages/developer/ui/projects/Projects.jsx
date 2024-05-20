import React from 'react'
import { StoreContext } from '../../../../../store/StoreContext';
import useQueryData from '../../../../custom-hook/useQueryData';
import { setIsShow } from '../../../../../store/StoreAction';
import SpinnerFetching from '../../../../partials/spinners/SpinnerFetching';
import ModalProject from './ModalProject';
import { devBaseImgUrl } from '../../../../helpers/functions-general';


const Projects = () => {
    const {store,dispatch} = React.useContext(StoreContext)
    const [info, setInfo] = React.useState(null)


  const {
    isLoading,
    isFetching,
    error,
    data: portfolio,
  } = useQueryData(
      "/v1/portfolio", // endpoint
     "get", // method
   "portfolio", // key
  
  );

  const handleShowMore = (item) => {
    dispatch(setIsShow(true))
    setInfo(item)
  }


  return (
    <>
    <section>
            <div className='container'>
                <h3 className='text-center mb-5 text-content'>My Projects</h3>
                <div className='relative'>
                    {isLoading ? (
                        <SpinnerFetching />
                    ) : (
                        <div className='grid grid-cols-3 gap-5'>
                            {portfolio?.data.map((item, key) => (
                                <div className='project_card'key={key}>
                                    <img
                                        className='w-full h-[300px] object-cover'
                                        src={`${devBaseImgUrl}/${item.portfolio_image}`}
                                        alt=''
                                    />
                                    <h4 className='text-center pt-5 pb-2 mb-0'>{item.portfolio_title}</h4>
                                    <ul className='flex justify-between opacity-55 mb-10'>
                                        <li>
                                            <small>{item.portfolio_category}</small>
                                        </li>
                                        <li>
                                            <small>{item.portfolio_publish_date}</small>
                                        </li>
                                    </ul>
                                    <p className='line-clamp-2'>
                                    {item.portfolio_description}
                                    </p>
                                    <button className='btn btn--accent w-full justify-center py-3' onClick={() => handleShowMore(item)}>More</button>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </section>

        {store.isShow && <ModalProject position='center' info={info}/>}
        </>
  )
}

export default Projects
