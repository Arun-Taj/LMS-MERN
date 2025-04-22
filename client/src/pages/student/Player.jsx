import React, { useContext } from 'react'

const Player = () => {
  const {enrolledCourses,totalHours}=useContext(AuthContext)
  return (
    <div className='p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36'>
      {/* Left column */}
      <div>
        <h2 className='text-xl font-semibold'>Course Structure</h2>
      </div>

      {/* Right coulmn */}
      <div>

      </div>
      Player
    </div>
  )
}

export default Player
