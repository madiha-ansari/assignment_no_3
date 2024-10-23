import React from 'react'

const Services = () => {
    return (
        <div>
            <div className='flex justify-around bg-red-500 p-8'>

                <div className="">
                    <h1 className='text-white'>My Services</h1>
                    <br />
                    <ul className='text-blue-600 '>
                        <li>Student</li>
                        <li>Teching</li>
                        <li>Developer</li>
                        <li> Artists</li></ul>
                </div>
                <div>
                    <h1 className='text-white'>My fronted</h1>
                    <br />
                    <ul className='text-blue-600'><li>Html</li>
                        <li>Css</li>
                        <li>Bootscript</li>
                        <li>Media Querry</li></ul>
                </div>
                <div>
                    <h1 className='text-white'>My Backend</h1><br />
                    <ul className='text-blue-600'><li>Java Script</li>
                        <li>Tailwant</li>
                        <li>Type Script</li>
                        <li>Node js</li></ul>
                </div>
            </div>
        </div>
    )
}

export default Services
