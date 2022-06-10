type CollapsibleBlockProps = {
  isOpen: boolean
  children: React.ReactNode
  className?: string
}

export default function CollapsibleBlock(props: CollapsibleBlockProps) {
  const { isOpen, children, className } = props
  return isOpen ? <div className={className}>{children}</div> : null
}
