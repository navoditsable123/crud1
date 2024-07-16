import axios from "axios";
import { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Delete = () => {
    const { studentID } = useParams()
    const [student, setStudent] = useState()
    const navigate = useNavigate()

    async function fethdata() {
        const result = await axios.get(`http://localhost:8080/student/${studentID}`)
        setStudent(result.data)
    }
    useEffect(() => {
        fethdata()
    }, [])
    function deletedata() {
        axios.delete(`http://localhost:8080/student/${studentID}`)
        alert("data deleted")
        navigate("/show")

    }
    return (
        <>

            <div>
                <button type='submit' onClick={() => deletedata()} >yes</button>
                <NavLink to={"/show"} >No</NavLink>
            </div>


        </>
    )
}
export default Delete;