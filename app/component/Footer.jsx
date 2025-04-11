import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white p-10">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/2">
          <h5 className="text-2xl">The Mobile Shop</h5>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae,
            voluptatum.
          </p>
        </div>
        <div className="w-1/2">
          <h5 className="text-2xl">Links</h5>
          <ul className="text-sm">
            <li>
              <Link href="#" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Insert
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Display
              </Link>
            </li>
          </ul>
        </div>
        <div>
        <Image src="/images/mob1.jpeg" alt='img'  width={100} height={100} />
        </div>
      </div>
    </footer>
  )
}

export default Footer
