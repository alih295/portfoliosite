import React from 'react'

function Footer() {
    return (
        <footer className='w-full py-8 md:py-12 px-4 md:px-20 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 border-t border-outline-variant/10 bg-surface'>
            <div className='flex flex-col items-center md:items-start gap-2'>
                <div className='text-label-md font-bold text-on-surface'>MERN.DEV</div>
                <p className='text-on-surface-variant text-label-md font-medium'>� 2024 MERN.DEV - Digital Craftsmanship</p>
            </div>

            <div className='flex gap-8'>
                <a 
                    href='https://github.com/alih295'
                    target='_blank'
                    rel='noreferrer'
                    className='text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors opacity-80 hover:opacity-100'
                >
                    GitHub
                </a>
                <a 
                    href='https://www.linkedin.com/in/hafiz-ali-haider-asghar-987992368/'
                    target='_blank'
                    rel='noreferrer'
                    className='text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors opacity-80 hover:opacity-100'
                >
                    LinkedIn
                </a>
                <a 
                    href='#'
                    className='text-on-surface-variant font-label-md text-label-md hover:text-secondary transition-colors opacity-80 hover:opacity-100'
                >
                    Twitter
                </a>
            </div>
        </footer>
    )
}

export default Footer
