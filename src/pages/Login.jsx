import OutlinedInput from '@mui/material/OutlinedInput'
import Button from '@mui/material/Button'

import { useState } from 'react'
import { useNavigate } from 'react-router'
import { orderService } from '../services/orde.service'

export const Login = () => {
    const navigate = useNavigate()
    const [fullName, setFullName] = useState('')
    const [id, setId] = useState('')

    const onGoTo = (destination) => {
        navigate(destination)
    }

    const onLogin = async () => {
        const credentials = { fullName, id }
        if (!fullName || !id) return
        try {
            await orderService.login(credentials)
            onGoTo('/')
        } catch (error) {
            // userMgs()
            console.log('nono');
        }
    }

    const handleChange = (ev) => {
        const field = ev.target.name
        const value = ev.target.value
        switch (field) {
            // case 'fullName':
            //     setFullName(value)
            //     break
            case 'id':
                setId(value)
                break
            default:
                setFullName(value)
        }
    }


    return <div className='login flex column'>
        <h2>So good see you again :)</h2>
        <form className='flex column' onSubmit={onLogin}>

            <OutlinedInput sx={{ borderRadius: "50px" }} onChange={handleChange} autoFocus className='user-input'
                placeholder='Enter full name' variant='filled' type='text' name='fullName' />
            <OutlinedInput sx={{ borderRadius: "50px", marginTop: "20px" }} onChange={handleChange} className='user-input'
                placeholder='Enter ID' variant='filled' type='text' autoComplete='off'
                name='id' />
            <Button sx={{ borderRadius: "50px", width: "220px", backgroundColor: "#ea0037", fontWeight: "bold" }} variant="contained" onClick={onLogin} className='login-btn'>
                Lets get started
            </Button>
        </form>
    </div>
}