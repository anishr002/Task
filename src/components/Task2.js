import React,{useEffect,useState} from 'react'
import Table from 'react-bootstrap/Table';
import axios from 'axios'
export const Task2 = () => {
    const [apiData, setApiData] = useState([])
    useEffect(() => {
     axios.get(`http://122.170.12.63:90/api/Organization/getAllOrganization`).then((getData)=>{
        setApiData(getData.data)
     })
    })
    
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>

                        <th>Organization Name</th>
                        <th>Short Name</th>
                        <th>URL</th>
                        <th>Logo</th>
                    </tr>
                </thead>
                <tbody>
                     {apiData.map((data)=>{
                        return(
                            <tr>
                            <td>{data.organizationName}</td>
                            <td>{data.organizationShortName}</td>
                            <td>{data.organizationURL}</td>
                            <td>{data.organizationLOGO}</td>
                        </tr>
                        )
                    })} 

                </tbody>
            </Table></div>
    )
}
