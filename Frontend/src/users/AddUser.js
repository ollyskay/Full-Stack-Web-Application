import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function AddUser() {
    let navigate = useNavigate();

    const [user, setUser] = useState({
        name: '',
        username: '',
        email: '',
    });

    const { name, username, email } = user;

    const onInputChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user", user);
        navigate('/');
    };

    return (
        <div className="container">
            <div className="row justify-content-center mt-5">
                <div className="col-md-6">
                    <div className="card shadow rounded-lg border-0">
                        <div className="card-body p-5">
                            <h2 className="card-title text-center mb-4">Register User</h2>
                            <form onSubmit={(e) => onSubmit(e)}>
                                <div className="mb-3">
                                    <label htmlFor="Name" className="form-label text-primary font-weight-bold">
                                        Name
                                    </label>
                                    <input
                                        type={"text"}
                                        className="form-control"
                                        placeholder="Enter your name"
                                        name="name"
                                        value={name}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Username" className="form-label text-success font-weight-bold">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Enter your username"
                                        name="username"
                                        value={username}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="Email" className="form-label text-danger font-weight-bold">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter your email Address"
                                        name="email"
                                        value={email}
                                        onChange={(e) => onInputChange(e)}
                                    />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Submit
                                    </button>
                                    <Link className="btn btn-secondary btn-lg ml-2" to="/">
                                        Cancel
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
