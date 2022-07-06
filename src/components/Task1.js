import axios from 'axios'
import React,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export const Task1 = () => {
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    const [organizationurl , setorganizationurl ] = useState('')


    console.log(Email)
    console.log(Password)
    console.log(organizationurl)

    const setDataAPI=()=>{
        axios.post(`http://122.170.12.63:90/api/auth/login`,
          Email,
          Password,
          organizationurl
        )
    }
  return (
    <div>
         <Form>
    <Form.Field>
      <label>Email  :</label>
      <input name='email' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
    </Form.Field>
    <Form.Field style={{marginTop:20}} >
      <label>Password  :</label>
      <input name='password' placeholder='Password'  onChange={(e)=>setPassword(e.target.value)}/>
    </Form.Field>
    <Form.Field style={{marginTop:20}}>
      <label>organization url  :</label>
      <input name='organization url ' placeholder='organization url'  onChange={(e)=>setorganizationurl(e.target.value)} />
    </Form.Field>
    
    <Button  style={{marginTop:20}} type='submit' onClick={setDataAPI}>Login</Button>
  </Form>
    </div>
  )
}
