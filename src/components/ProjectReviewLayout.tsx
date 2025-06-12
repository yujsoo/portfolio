import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface ProjectReviewLayoutProps {
  title: React.ReactNode
  date: string
  children: React.ReactNode
}

function ProjectReviewLayout({
  title,
  date,
  children,
}: ProjectReviewLayoutProps) {
  const controls = useAnimation()

  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [refCon, inViewCon] = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 40 })
    }
  }, [inView, controls])

  return (
    <>
      <section className="sm:mt-60 mt-40 border-b border-b-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <div className="bg-white overflow-hidden">
            <motion.div
              ref={ref}
              initial={{ opacity: 0, y: 70 }}
              animate={controls}
              transition={{ duration: 0.6, ease: 'easeOut' }}>
              <p className="inline-block px-2 py-1 sm:text-md lg:text-xl text-sm font-poppins text-white bg-black">
                {date}
              </p>
              <h3 className="sm:text-8xl lg:text-9xl text-6xl font-extrabold break-keep">
                {title}
              </h3>
            </motion.div>
          </div>
        </div>
      </section>
      <motion.section
        ref={refCon}
        initial={{ x: -50, opacity: 0 }}
        animate={inViewCon ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-screen-xl mx-auto pt-24 px-6">
        {children}
      </motion.section>
    </>
  )
}

export default ProjectReviewLayout
