import React from 'react'
import Link from 'next/link'
const Header = () => {
  return (
  <>
  <nav className="flex bg-blue-950 text-white p-5">
<div>
<h5 className='text-2xl'>The Mobile Shop</h5>
</div>
<div className="flex gap-5 ml-auto text-2xl" >
<Link href='/'>Home</Link>
<Link href='/display'>Display</Link>
<Link href='/insert'>Insert</Link>
<Link href='/product'>Product</Link>
</div>
  </nav>
  </>
  )
}

export default Header
