function ProjectTableTitle({
  tableTitle,
  length,
}: {
  tableTitle: string
  length: number
}) {
  return (
    <div className="flex justify-between mb-1 items-end">
      <p className="text-sm md:text-base font-bold">({length})</p>
      <p className="text-sm md:text-base font-PPNeueMontreal">{tableTitle}</p>
    </div>
  )
}

export default ProjectTableTitle
