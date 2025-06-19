function TextTag({ text }: { text: string }) {
  return (
    <p className="px-2 mb-4 inline-block bg-primary-dark text-white">{text}</p>
  )
}

export default TextTag
