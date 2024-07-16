import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Show = () => {

    const [student, setstudent] = useState([])

    async function getstudentdata() {
        const result = await axios.get("http://localhost:8080/student")
        setstudent(result.data)

    }
    useEffect(() => {
        getstudentdata()
    }, [])

    return (
        <>
            <table >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>contact</th>
                        <th>Gender</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((stu, index) => {
                            return (
                                <tr key={index}>
                                    <td>{stu.name}</td>
                                    <td>{stu.lastname}</td>
                                    <td>{stu.email}</td>
                                    <td>{stu.role}</td>
                                    <td>{stu.contact}</td>
                                    <td>{stu.gender}</td>

                                    <td>
                                        <NavLink to={`/student/updatevalue/${stu.id}`}><button>Update</button></NavLink>
                                        <NavLink to={`/student/delete/${stu.id}`}><button>Delete</button></NavLink>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>

            </table>

        </>
    )
}
export default Show;