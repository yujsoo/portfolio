import { motion } from 'framer-motion'

interface ProjectReviewLayoutProps {
  title: React.ReactNode
  date: string
  children: React.ReactNode
}

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

function ProjectReviewLayout({
  title,
  date,
  children,
}: ProjectReviewLayoutProps) {
  return (
    <>
      <section className="sm:mt-60 mt-40 border-b border-b-black">
        <div className="max-w-screen-xl mx-auto px-6">
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            <p className="inline-block px-2 py-1 sm:text-md lg:text-xl text-sm font-poppins text-white bg-black">
              {date}
            </p>
            <h3 className="sm:text-8xl lg:text-9xl text-6xl font-extrabold break-keep">
              {title}
            </h3>
          </motion.div>
        </div>
      </section>
      <motion.section
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="max-w-screen-xl mx-auto pt-24 px-6">
        {children}
      </motion.section>
    </>
  )
}

export default ProjectReviewLayout
