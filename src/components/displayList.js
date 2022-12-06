import React, { useState } from 'react';
import { Button } from '@mui/material';

function DisplayList() {
    const [users, setUsers] = useState([
        { id: 1, date: "20/06/2022",status: "Pending", time:'11:30', doctorid: '1' ,feedback:"random feedback" , patientid: '1' ,prescription:'download' , rating:4},
        { id: 2, date: "20/06/2022",status: "Pending", time:'11:30', doctorid: '3' ,feedback:"random feedback" , patientid: '2' ,prescription:'download' , rating:3},
        { id: 3, date: "20/06/2022",status: "Pending", time:'11:30', doctorid: '5' ,feedback:"random feedback" , patientid: '3' ,prescription:'download' , rating:3},
        { id: 4, date: "20/06/2022",status: "Pending", time:'11:30', doctorid: '6' ,feedback:"random feedback" , patientid: '4' ,prescription:'download' , rating:4},
        { id: 5, date: "20/06/2022",status: "Pending", time:'11:30', doctorid: '2' ,feedback:"random feedback" , patientid: '5' ,prescription:'download' , rating:5}
    ]);

    return (
        <div className="container">
            <h3 className="p-3 text-center">React - Display a list of items</h3>
            <table className="table table-striped table-bordered m-5">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Time</th>
                        <th>Doctor id</th>
                        <th>Feedback description</th>
                        <th>Patient id</th>
                        <th>Prescription</th>
                        <th>Rating</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users && users.map(user =>
                        <tr key={user.date}>
                            <td>{user.date}</td>
                            <td>{user.status}</td>
                            <td>{user.time}</td>
                            <td>{user.doctorid}</td>
                            <td>{user.feedback}</td>
                            <td>{user.patientid}</td>
                            <td>{user.prescription}</td>
                            <td>{user.rating}</td>
                            <td><Button class='btn btn-primary'>Approve</Button>
                            </td>
                            <td><Button class='btn btn-danger'>Cancel</Button></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default DisplayList;