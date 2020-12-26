import Head from 'next/head'
import React, {useState} from 'react';
import {signUp} from '../../libs/auth';
export default function Home() {
  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [tos,setTos] = useState(false);

  const handleSignup = async function(evnt){
    evnt.preventDefault();
    if(!tos) return console.log('You must agree to the tos');
    
    const Status = await signUp({
      Username: username,
      Email: email,
      Password: password
    });
    console.log(Status);
  }
  return (
    <div className="page">
      <Head>
        <title>Sign Up</title>
      </Head>
        <div className="flex-fill d-flex flex-column justify-content-center py-4">
          <div className="container-tight py-6">
            <div className="text-center mb-4">
              <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
                <a href=".">
                  XcomegaX
                    </a>
              </h1>
            </div>
            <form onSubmit={handleSignup}className="card card-md">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Create new account</h2>
                <div className="mb-3">
                  <label className="form-label">Name</label>
                  <input type="text" value={username} onChange={e=>setUsername(e.target.value)}className="form-control" placeholder="Enter name" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email address</label>
                  <input type="email" value={email} onChange={e=>setEmail(e.target.value)}className="form-control" placeholder="Enter email" />
                </div>
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <div className="input-group input-group-flat">
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Password" autoComplete="off" />
                    <span className="input-group-text">
                      <a href="#" className="link-secondary" title="" data-bs-toggle="tooltip" data-bs-original-title="Show password"><svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="2"></circle><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                      </a>
                    </span>
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-check">
                    <input type="checkbox" onChange={e=>setTos(e.target.checked)}className="form-check-input" />
                    <span className="form-check-label">Agree the <a href="./terms-of-service.html" tabIndex="-1">terms and policy</a>.</span>
                  </label>
                </div>
                <div className="form-footer">
                  <button type="submit" className="btn btn-primary w-100">Create new account</button>
                </div>
              </div>
            </form>
            <div className="text-center text-muted mt">
              Already have account? <a href="./login" tabIndex="-1">Sign in</a>
            </div>
          </div>
        </div>
      </div>
  )
}
