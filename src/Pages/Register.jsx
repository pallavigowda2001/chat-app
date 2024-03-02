import React from 'react'
import { Link } from 'react-router-dom'

function Register() {
  return (
    
      <section id="hero">
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-sm-12">
                    <div className="card">
                        <div className="card-header bg-dark">
                            <h6 className="display-6 text-center text-success">Register Here</h6>
                        </div>
                        <div className="card-body">
                            <form autoComplete="off">
                                 <div className="form-group mt-2">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name"  
                                    className='form-control' required/>
                                 </div>
                                 <div className="form-group mt-2">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email"  
                                    className='form-control' required/>
                                 </div>
                                 <div className="form-group mt-2">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" id="password"  
                                    className='form-control' required/>
                                 </div>
                                 <div className="form-group mt-2">
                                    <label htmlFor="file">Choose avatar image</label>
                                    <input type="file" name="file" id="file"  
                                    className='form-control' required/>
                                 </div>
                                 <div className="form-group mt-2">
                                    <input type="submit" value="Register" className='btn btn-info'/>
                                 </div>
                            </form>
                        </div>
                        <div className="card-footer">
                        <Link to={`/login`} className='btn.btn-link'>Already  Registered Here</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  )
}

export default Register
