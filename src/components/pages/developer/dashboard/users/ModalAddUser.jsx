import React from 'react'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import { LiaTimesSolid } from 'react-icons/lia'
import { Formik, Form } from 'formik'
import { InputFileUpload, InputText,InputTextArea } from '../../../../helpers/FormInputs'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import { setError, setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'
import { StoreContext } from '../../../../../store/StoreContext'
import * as Yup from 'yup'
import { queryData } from '../../../../helpers/queryData'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import useUploadPhoto from '../../../../custom-hook/useUploadPhoto'
import { devBaseImgUrl } from '../../../../helpers/functions-general'
    


const ModalAddUser = ({itemEdit}) => {
    const {store, dispatch} = React.useContext(StoreContext)

    const handleClose = () => dispatch(setIsAdd(false))


  /*   const { uploadPhoto, handleChangePhoto, photo } = useUploadPhoto(
        `/v1/upload/photo`,
        dispatch
      ); */

    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/user/${itemEdit.user_aid}` : `/v1/user`,
            itemEdit ? "put" : "post",
            values
        ),
        // ;

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["user"] });
        if (data.success) {
            dispatch(setIsAdd(false));
            dispatch(setSuccess(true));
            dispatch(setMessage(`Successfuly updated.`));
        } else {
            dispatch(setError(true));
            dispatch(setMessage(data.error));
        }
      
        },
    });

    const initVal = {
        user_name: itemEdit ? itemEdit.user_name : "",
        user_email: itemEdit ? itemEdit.user_email : "",
        
    }

    const yupSchema = Yup.object({
        user_name: Yup.string().required("Required*"),
        user_email: Yup.string().required("Required*").email('Invalid Email')

    })

  return (
    <ModalWrapper>
    <div className="main-modal w-[300px] bg-secondary text-content h-full">
              <div className="modal-header p-4 relative">
                  <h2>{itemEdit ? "Edit" : "New"}</h2>
                  <button className='absolute top-[25px] right-4' onClick={handleClose}><LiaTimesSolid/></button>
              </div>
              <div className="modal-body p-4">
                  <Formik
                        initialValues={initVal}
                        validationSchema={yupSchema}
                        onSubmit={async (values) => {
                            /* uploadPhoto() */
                            mutation.mutate(values)
                          }}
                  >
                      {(props) => {
                          return (
                      <Form  className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow overflow-y-auto'>

                    

                            <div className="input-wrap">
                                <InputText
                                    label="Name"
                                    type="text"
                                    name="user_name"
                                />
                            </div>
                            <div className="input-wrap">
                                <InputText
                                    label="Email"
                                    type="text"
                                    name="user_email"
                                />
                            </div>
                        
                      
                        </div>

                      <div className='form-action'>
                          <button className='btn btn-form btn--accent' type="submit"> {mutation.isPending ? <SpinnerButton/> : "Add"}</button>
                          <button className='btn btn-form btn--cancel' type="button" onClick={handleClose}>Cancel</button>
                      </div>
                  </Form>)}}
                  
                  </Formik>
              </div>
      </div>
  </ModalWrapper>

  )
}

export default ModalAddUser