import React, {ChangeEvent, useState} from 'react';
import {useFormik} from "formik";
import {
    Button,
    FormControl,
    FormControlLabel,
    FormGroup,
    FormLabel,
    Grid,
    IconButton, Radio, RadioGroup,
    TextField
} from "@mui/material";

import {useAppDispatch} from "../../src/store/store";
import {addUsersTC} from "../../src/reducers/users-reducer";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import defaultAva from './flowers.jpg'


type FormikErrorType = {
    name?: string
    email?: string
    phone?: string
    position_id?: string
    photo?: string
}

export type FormType = {
    name: string
    email: string
    phone: string
    position_id: string
    photo: File | null
}

export const Form = () => {
    const dispatch = useAppDispatch()

    const [ava, setAva] = useState(null)

    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]
            if (file.size < 4000000) {
                convertFileToBase64(file, (file64: string) => {
                    // setAva(file64)
                    formik.setFieldValue('photo', file);  // Обновление значения поля photo в объекте формы
                    // console.log(formik.values.photo);
                })
            } else {
                console.error('Error: ', 'Файл слишком большого размера')
            }
        }
    }

    const convertFileToBase64 = (
        file: File,
        callBack: (value: string) => void
    ) => {
        const reader = new FileReader();
        reader.onloadend = () => {
            const file64 = reader.result as string
            callBack(file64)
        }
        reader.readAsDataURL(file)
    }


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            position_id: '',
            photo: null,
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.name) {
                errors.name = 'Required'
            }
            if (!values.email) {
                errors.email = 'Required'
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (!values.phone) {
                errors.phone = 'Required';
            } else if (!/^[\+]{0,1}380([0-9]{9})$/.test(values.phone)) {
                errors.phone = 'Invalid phone number. Please use the format +38 (XXX) XXX-XX-XX';
            }
            if (!values.position_id) {
                errors.position_id = 'Required'
            }
            return errors
        },
        onSubmit: values => {
            console.log(values)
            debugger
            // formik.resetForm()
            dispatch(addUsersTC(values))
        },
    })

    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <form onSubmit={formik.handleSubmit}>
                    <FormGroup>

                        <TextField label="Name"
                                   margin="normal"
                                   {...formik.getFieldProps('name')}
                        />
                        {formik.touched.name && formik.errors.name &&
                            <div style={{color: 'red'}}>{formik.errors.name}</div>}

                        <TextField label="Email"
                                   margin="normal"
                                   {...formik.getFieldProps('email')}
                        />
                        {formik.touched.email && formik.errors.email &&
                            <div style={{color: 'red'}}>{formik.errors.email}</div>}

                        <TextField label="Phone"
                                   margin="normal"
                                   helperText='+38 (XXX) XXX-XX-XX'
                                   {...formik.getFieldProps('phone')}
                        />
                        {formik.touched.phone && formik.errors.phone &&
                            <div style={{color: 'red'}}>{formik.errors.phone}</div>}

                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Select your position</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="1"
                                {...formik.getFieldProps('position_id')}
                            >
                                <FormControlLabel value="1" control={<Radio/>} label="Security"/>
                                <FormControlLabel value="2" control={<Radio/>} label="Designer"/>
                                <FormControlLabel value="3" control={<Radio/>} label="Content manager"/>
                                <FormControlLabel value="4" control={<Radio/>} label="Lawyer"/>
                            </RadioGroup>
                        </FormControl>
                        {formik.touched.position_id && formik.errors.position_id &&
                            <div style={{color: 'red'}}>{formik.errors.position_id}</div>}

                        <div>
                            {/*<img*/}
                            {/*    src={ava || defaultAva}*/}
                            {/*    style={{width: '100px'}}*/}
                            {/*    alt="ava"*/}
                            {/*/>*/}
                            <label>
                                <input type="file"
                                       name='photo'
                                       onChange={uploadHandler}
                                       style={{display: 'none'}}
                                />
                                <IconButton component="span">
                                    ADD PHOTO
                                    <CloudUploadIcon/>
                                </IconButton>
                            </label>
                            <p>{formik.values.photo ? 'Photo added ✅' : ''}</p>
                        </div>

                        <Button type={'submit'} variant={'contained'} color={'primary'}>
                            SIGN UP
                        </Button>
                    </FormGroup>
                </form>
            </FormControl>
        </Grid>
    </Grid>
}


export default Form;













// <div>
//     <img
//         src={ava || defaultAva}
//         style={{width: '100px'}}
//         alt="ava"
//     />
//     <label>
//         <input type="file"
//                accept='image/*'
//                style={{display: 'none'}}
//                {...formik.getFieldProps('photo')}
//         />
//         <IconButton component="span">
//             <CloudUploadIcon/>
//         </IconButton>
//     </label>
//
//     <FileInput/>
// </div>