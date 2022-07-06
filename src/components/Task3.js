import axios from 'axios'
import React,{useState} from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

export const Task3 = () => {

    const [organizationName, setorganizationName] = useState('')
    const [organizationShortName , setorganizationShortName ] = useState('')
    const [organizationurl, setorganizationurl] = useState('')
    const [logo, setlogo] = useState('')

    const saveData=()=>{
        axios.post(`http://122.170.12.63:90//api/Organization/addOrganization`,
        organizationName,
        organizationShortName,
        organizationurl,
        logo
        )
    }
  return (
    <div>   <Form>
    <Form.Field>
      <label>organization Name  :</label>
      <input name='organization Name'  onChange={(e)=>setorganizationName(e.target.value)} />
    </Form.Field>
    <Form.Field style={{marginTop:20}} >
      <label>organization Short Name  :</label>
      <input name='organization Short Name' onChange={(e)=>setorganizationShortName(e.target.value)}  />
    </Form.Field>
    <Form.Field style={{marginTop:20}}>
      <label>organization url  :</label>
      <input name='organization url ' onChange={(e)=>setorganizationurl(e.target.value)}  />
    </Form.Field>
    <Form.Field style={{marginTop:20}}>
      <label>LOGO  :</label>
      <input name='LOGO '  onChange={(e)=>setlogo(e.target.value)}  />
    </Form.Field>
    
    <Button  style={{marginTop:20,marginRight:20}} type='submit' onClick={saveData}>Save</Button> 
    {/* <Button  style={{marginTop:20}} type='submit' >Cancle</Button> */}
  </Form></div>
  )
}
