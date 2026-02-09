import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'

const page = () => {
  return (
    <>
       <section className="card-cta">
         <div className="flex flex-col gap-6 max-w-lg">
          <h2>From Practice to Offer: AI-Powered Interview Prep </h2>
          <p className="text-lg">Master real interview questions with instant, personalized AI feedback</p>
          <Button asChild className="btn-primary max-sm:w -full">
            <Link href="/interview"> Start an Interview</Link>
          </Button>

         </div>
           <Image src="/robot.png" alt="AI Robot" width={500} height={500}  className="max-sm:hidden" />
       </section>

       <section className="flex flex-col gap-6 mt-8">
        <h2>Your Interviws</h2>
        <div className ="interviews-section">
          {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id}/>
          ))}

        </div>
       </section>
       <section className="fleex flex-col gap-6 mt-8" >
        <h2> Take an  Interview</h2>

        <div className='interviews-section'>
           {dummyInterviews.map((interview) => (
            <InterviewCard {...interview} key={interview.id} />
          ))}
          {/* <p>You haven't taken any interviews yet</p> */}

        </div>

       </section>
    </>
  )
}

export default page