import React from 'react'
import Hero from '../Components/Hero'
import Homecards from '../Components/Homecards'
import JobListings from '../Components/JobListings'
import VuewAllJobs from '../Components/VuewAllJobs'

const HomePage = () => {
  return (
    <>
     <Hero />
     <Homecards />
     <JobListings isHome={true} />
     <VuewAllJobs />
    </>
  )
}

export default HomePage