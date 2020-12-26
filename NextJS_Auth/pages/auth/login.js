import Head from 'next/head'
import React, {useState} from 'react'
import {login} from '../../libs/auth';

export default function Home() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [remember,setRemember] = useState(false)

  const handleLogin = async function(evnt){
      evnt.preventDefault();
      const Status = await login({Email : email,Password:password})
      if(Status.status !== 200 || Status.message !== 'Matching user found') return;
      console.log(`Sucessful auth?`)
  }
  return (
    <div className="page">
      <Head>
        <title>Sign In</title>
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
          <form onSubmit={handleLogin } className="card card-md" >
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Login to your account</h2>
              <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control" placeholder="Enter email" />
              </div>
              <div className="mb-2">
                <label className="form-label">
                  Password
                <span className="form-label-description">
                    <a href="./forgot-password.html">I forgot password</a>
                  </span>
                </label>
                <div className="input-group input-group-flat">
                  <input type="password" value={password} onChange={e=> setPassword(e.target.value)}className="form-control" placeholder="Password" autoComplete="off" />
                  <span className="input-group-text">
                    <a href="#" className="link-secondary" title="" data-bs-toggle="tooltip" data-bs-original-title="Show password"><svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="12" cy="12" r="2"></circle><path d="M22 12c-2.667 4.667 -6 7 -10 7s-7.333 -2.333 -10 -7c2.667 -4.667 6 -7 10 -7s7.333 2.333 10 7"></path></svg>
                    </a>
                  </span>
                </div>
              </div>
              <div className="mb-2">
                <label className="form-check">
                  <input type="checkbox" value={remember} onChange={e=>setRemember(e.target.checked)} className="form-check-input" />
                  <span className="form-check-label">Remember me on this device</span>
                </label>
              </div>
              <div className="form-footer">
                <button type="submit" className="btn btn-primary w-100">Sign in</button>
              </div>
            </div>
          </form>
          <div className="text-center text-muted mt">
            Don't have account yet? <a href="./signup" tabIndex="-1">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  )
}
