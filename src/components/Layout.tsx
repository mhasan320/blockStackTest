import { useRouter } from 'next/router'
import React from 'react'
import Header from './Header/Index';

function Layout({children} : {children: React.ReactNode}) {

  return (
    <div>
        <Header/>
        {children}
    </div>
  )
}

export default Layout