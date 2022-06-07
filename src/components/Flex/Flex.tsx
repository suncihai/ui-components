import classNames from 'classnames'

export type FlexProps = {
  content?: 'around' | 'between' | 'evenly' | 'end' | 'start' | 'center'
  children: React.ReactNode
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  align?: 'start' | 'end' | 'baseline' | 'stretch' | 'center'
  className?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export default function Flex(props: FlexProps) {
  const {
    content = 'between',
    direction = 'row',
    align = 'center',
    onClick,
    children,
  } = props

  const className = classNames(
    `flex flex-${direction} justify-${content} items-${align}`,
    onClick && 'cursor-pointer',
    props.className
  )

  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  )
}
