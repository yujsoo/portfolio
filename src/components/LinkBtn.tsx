import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function LinkBtn({ text, url }: { text: string; url: string }) {
  return (
    <Link
      target="_blank"
      to={url}
      className="inline-flex items-center gap-2 group text-black">
      <p className="flex items-center justify-center h-2 w-2 group-hover:h-6 group-hover:w-6 rounded-full bg-primary transition-all duration-300 ease-in-out relative">
        <FiArrowRight className="w-3 h-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </p>
      <p className="relative">
        {text}
        <span className="absolute left-0 -bottom-0 h-[1px] w-full bg-black scale-x-100 group-hover:scale-x-0 origin-right transition-transform duration-300 ease-in-out" />
      </p>
    </Link>
  )
}

export default LinkBtn
