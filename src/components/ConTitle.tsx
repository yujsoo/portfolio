function ConTitle({
  title,
  subTitle,
  desc,
}: {
  title: string
  subTitle: string
  desc: React.ReactNode
}) {
  return (
    <h3 className="mb-16 text-center">
      <span className="block mb-4 text-[#9e9eae] font-light font-PPNeueMontreal">
        {subTitle}
      </span>
      <strong className="block mb-4 text-3xl sm:text-4xl font-bold">
        {title}
      </strong>
      <p className="text-[15px] sm:text-lg leading-normal break-keep">{desc}</p>
    </h3>
  )
}

export default ConTitle
