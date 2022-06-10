import { CSSProperties } from 'react'
import classNames from 'classnames'
import s from './ProgressBar.module.css'

type Props = {
  steps: string[]
  current: number
  className?: string
}

export function ProgressBarView(props: Props) {
  const { steps, current, className } = props
  const style = { '--steps': steps.length } as CSSProperties
  return (
    <div className={classNames(s.container, className)}>
      <ul className={s.progressbar} style={style}>
        {steps.map((step, index) => {
          return (
            <li
              key={step}
              className={classNames(s.item, current >= index + 1 && s.active)}
            >
              {step}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export function MobileProgressBar(props: Props) {
  const { steps, current, className } = props
  const style = {
    '--currentStep': current,
    '--steps': steps.length,
  } as CSSProperties

  return (
    <div className={classNames(s.mobileContainer, className)}>
      <span className={s.mobileStep}>
        step {current} / {steps.length}
      </span>
      <div className={s.line} role="presentation" style={style} />
    </div>
  )
}

export default function ProgressBar(props: Props) {
  return (
    <>
      <ProgressBarView {...props} />
      <MobileProgressBar {...props} />
    </>
  )
}
