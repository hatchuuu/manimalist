import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-black text-white mt-5 p-5">
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Left Column */}
                <div className="flex justify-center sm:justify-start">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Karya Ryan Kusuma. All rights reserved.</p>
                </div>

                {/* Right Column: Social Media Links */}
                <div className="flex justify-center sm:justify-end space-x-4">
                    <Link href="https://instagram.com/yankuniku" className="hover:underline">
                        Instagram
                    </Link>
                    <Link href="#" className="hover:underline">
                        Facebook
                    </Link>
                    <Link href="#" className="hover:underline">
                        Twitter
                    </Link>
                </div>
            </div>
        </footer>
    )
}

export default Footer
