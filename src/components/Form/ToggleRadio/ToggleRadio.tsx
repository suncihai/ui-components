import { useState, useEffect, useCallback } from 'react'
import classNames from 'classnames'
import { ComponentPropsWithoutRef } from 'react'
import { Field, FieldInputProps, FieldAttributes } from 'formik'

import s from './ToggleRadio.module.css'

type ToggleRadioProps = ComponentPropsWithoutRef<'input'> & {
  field?: FieldInputProps<string | number>
  labelOn?: string
  labelOff?: string
  defaultChecked?: boolean
  setFieldValue?: (
    field: string,
    value: boolean,
    shouldValidate?: boolean
  ) => void
}

function ToggleRadio(props: ToggleRadioProps) {
  const {
    field,
    defaultChecked = false,
    setFieldValue,
    labelOn = 'yes',
    labelOff = 'no',
  } = props
  const [checked, setChecked] = useState<boolean>(defaultChecked)

  const toggle = useCallback(() => {
    setChecked((value) => !value)
  }, [])

  useEffect(() => {
    setFieldValue(field.name, checked)
  }, [checked, field.name, setFieldValue])

  return (
    <div className={s.container} onClick={toggle}>
      <input hidden {...field} checked={checked} type="checkbox" />
      <div className={s.dot}>
        <div
          className={classNames(
            checked ? s.radioToggleOn : s.radioToggleOff,
            checked && s.isOn
          )}
        >
          <div className={s.labelContainer}>
            <p className={s.labelOn}>{labelOn}</p>
            <p className={s.labelOff}>{labelOff}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ToggleRadioWrapper(props: FieldAttributes<any>) {
  return <Field {...props} component={ToggleRadio} />
}
