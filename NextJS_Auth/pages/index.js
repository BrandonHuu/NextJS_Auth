import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Head from 'next/head'

export default function Page() {
  const router = useRouter()

  useEffect(()=>{router.push('/auth/login')},[])

  return (<>
  <Head>
    <title>Bored_auth index</title>
  </Head>
    <div className="page">
      <header className="navbar navbar-expand-md navbar-dark d-print-none">
        <div className="container-xl">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar-menu">
            <span className="navbar-toggler-icon"></span>
          </button>
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pr-0 pr-md-3">
            <a href=".">XcomegaX</a>
          </h1>
          <div className="navbar-nav flex-row order-md-last">
            <div className="nav-item">
              <span className="avatar avatar-sm" >

              </span>
            </div>
          </div>
        </div>
      </header>
      <div className="content">
        <div className="container-xl">
          <h2>Bored_auth</h2>
         
        </div>
      </div>
    </div>
  </>)
}