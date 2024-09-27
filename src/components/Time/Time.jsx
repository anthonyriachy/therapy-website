import React from 'react'
import "./Time.css"

function Time() {
  return (
    <main className='time-main'>
        <h1 className='header'>Hours</h1>
        <section className='time-list'>
            <section className='time'>
                <span className='day'>Monday</span>
                <span>8:00 AM - 5:00 PM</span>
            </section>
            <section className='time'>
                <span className='day'>Monday</span>
                <span>8:00 AM - 5:00 PM</span>
            </section>
            <section className='time bg-[#F7F0E6] text-black flex justify-between align-middle rounded-lg' >
                <div>
                    <span className='day'>Monday</span>
                    <span>8:00 AM - 5:00 PM</span>
                </div>
                <div className='status '>
                    <span className='active'></span>
                    <span className='active-text'>Open Now</span>
                </div>
            </section>
            <section className='time'>
                <span className='day'>Monday</span>
                <span>8:00 AM - 5:00 PM</span>
            </section>
            <section className='time'>
                <span className='day'>Monday</span>
                <span>8:00 AM - 5:00 PM</span>
            </section>
            <section className='time'>
                <span className='day'>Saturday</span>
                <span>closed</span>
            </section>
        </section>
    </main>
  )
}

export default Time