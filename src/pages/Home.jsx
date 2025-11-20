// src/pages/Home.jsx
import React from 'react'
import FeatureCard from '../FeatureCard'

export default function Home() {
  return (
    <div>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="pt-20 sm:pt-24 md:pt-28 pb-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
                Build, collaborate, and ship like a pro
              </h1>
              <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
                A modern developer platform inspired by GitHub’s simplicity and power.
              </p>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-gray-50 to-transparent dark:from-gray-900"></div>
      </section>
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>
      </div>

      <section className="mx-auto max-w-7xl px-6 pt-10 sm:pt-12 md:pt-14 pb-24 sm:pb-28 md:pb-32">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Everything you need to build
          </h1>
          <p className="mt-3 text-lg text-gray-700 dark:text-gray-300">
            Powerful features to help you develop, collaborate, and ship your projects faster.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="h-5 w-5 text-blue-600 dark:text-blue-400"><path d="M4 4h16v16H4z" fill="none"/><path d="M7 8h2v2H7V8zm0 4h2v2H7v-2zm8-4h2v2h-2V8zm0 4h2v2h-2v-2z" /></svg>}
            title="Collaborative coding"
            description="Write, review, and manage code with powerful tools designed for teams of all sizes."
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="h-5 w-5 text-green-600 dark:text-green-400"><path d="M7 7a5 5 0 1010 0" fill="none"/><path d="M7 7v10m10-10v10M12 7v10" stroke="currentColor" strokeWidth="2" fill="none"/></svg>}
            title="Version control"
            description="Track every change, branch with confidence, and merge seamlessly with Git integration."
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="h-5 w-5 text-purple-600 dark:text-purple-400"><path d="M12 3l8 4v6c0 5-8 8-8 8s-8-3-8-8V7l8-4z" fill="none" stroke="currentColor" strokeWidth="2"/></svg>}
            title="Security first"
            description="Protect your code with advanced security features, vulnerability scanning, and secret detection."
          />
          <FeatureCard
            icon={<svg viewBox="0 0 24 24" className="h-5 w-5 text-orange-600 dark:text-orange-400"><path d="M13 2l1 5 5 1-5 1-1 5-1-5-5-1 5-1 1-5z" fill="currentColor"/></svg>}
            title="Automation"
            description="Automate workflows, testing, and deployments with powerful CI/CD pipelines."
          />
        </div>
      </section>
    </div>
  )
}

