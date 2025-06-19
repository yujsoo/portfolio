import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { otherItems } from '../data/otherItems'

function OtherItemsList({
  hoveredId,
  setHoveredId,
}: {
  hoveredId: number | null
  setHoveredId: (id: number | null) => void
}) {
  return (
    <ul className="border-t-2 border-black">
      {otherItems.map((item) => (
        <li
          key={item.id}
          className=" border-black border-b hover:bg-black hover:text-white transition-all transition-duration-300"
          onMouseEnter={() => setHoveredId(item.id)}
          onMouseLeave={() => setHoveredId(null)}>
          <Link to={item.link} className="flex p-6 relative">
            <div className="w-1/2 text-left relative overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: 0, opacity: 1 }}
                animate={{
                  y: hoveredId === item.id ? '-100%' : 0,
                  opacity: hoveredId === item.id ? 0 : 1,
                }}
                transition={{
                  duration: 0.3,
                  ease: 'easeInOut',
                }}>
                {item.title}
              </motion.span>
              <motion.span
                className="absolute top-0 left-0"
                initial={{ y: '100%', rotateX: -90, opacity: 0 }}
                animate={{
                  y: hoveredId === item.id ? '0%' : '100%',
                  rotateX: hoveredId === item.id ? 0 : -90,
                  opacity: hoveredId === item.id ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                }}
                aria-hidden="true">
                {item.title}
              </motion.span>
            </div>
            <p className="w-1/2 text-right md:text-left font-poppins">
              {item.date}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default OtherItemsList
