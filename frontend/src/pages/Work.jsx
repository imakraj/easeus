import React from 'react'
import WorkCard from '../components/WorkCard'
import work1 from '../assets/work/1.jpg'

const Work = () => {
  return (
    <>
      <section className='max-w-screen-2xl px-6 mx-auto justify-between relative py-24 flex sm:flex-row flex-col flex-wrap workCard'>
        <WorkCard
          image={work1}
          title="Hello world, My Name is Khan"
          desc="Breathe media, India's First Podcast network Label that set's itself."
        />
        <WorkCard
          image={work1}
          title="Hello world, My Name is Khan"
          desc="Breathe media, India's First Podcast network Label that set's itself."
        />
        <WorkCard
          image={work1}
          title="Hello world, My Name is Khan"
          desc="Breathe media, India's First Podcast network Label that set's itself."
        />
        <WorkCard
          image={work1}
          title="Hello world, My Name is Khan"
          desc="Breathe media, India's First Podcast network Label that set's itself."
        />
        <WorkCard
          image={work1}
          title="Hello world, My Name is Khan"
          desc="Breathe media, India's First Podcast network Label that set's itself."
        />
        <WorkCard
          image={work1}
          title="Hello world, My Name is Khan"
          desc="Breathe media, India's First Podcast network Label that set's itsels."
        />
      </section>
    </>
  )
}

export default Work