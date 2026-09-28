import React from 'react'
import Header from '@/components/common/Header'
import HeroBanner from '@/components/HeroBanner'
import ProblemSection from '@/components/Problemsection'
import HowItWorks from '@/components/HowltWorks'
import IndigenousMealScanner from '@/components/IrdigenousMealScanner'
import CoreFeatures from '@/components/CoreFeatures'

export default function page() {
  return (
    <>
      <Header />
      <HeroBanner />
      <ProblemSection />
      <HowItWorks />
      <IndigenousMealScanner />
      <CoreFeatures />
    </>
  )
}
