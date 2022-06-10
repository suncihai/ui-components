import s from './ThreeDots.module.css'

export default function ThreeDots() {
  return (
    <div className={s.pageLoading}>
      <div className={s.threeBalls}>
        <div className={s.ball1} />
        <div className={s.ball2} />
        <div className={s.ball3} />
      </div>
    </div>
  )
}
