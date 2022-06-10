import { useCallback, useState } from 'react'
import s from './ToggleSwitch.module.css'

type ToggleSwitchProps = {
  isDisabled?: boolean
  onToggle: (toggleValue: boolean) => void
}
export default function ToggleSwitch(props: ToggleSwitchProps) {
  const { isDisabled, onToggle } = props
  const [toggleValue, setToggle] = useState<boolean>(true)

  const handleToggle = useCallback(() => {
    setToggle(!toggleValue)
    onToggle(toggleValue)
  }, [toggleValue, onToggle])

  return (
    <label className={s.toggle}>
      <input
        defaultChecked
        disabled={isDisabled}
        onChange={handleToggle}
        type="checkbox"
      />
      <i />
    </label>
  )
}
