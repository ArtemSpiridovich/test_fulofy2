import s from '../styles/Title.module.sass'

export function Title() {
  return (
    <div className={s.title}>
      <h1 className={s.title__title}>Личный профиль</h1>
      <span className={s.title__text}>Главная/Личный профиль</span>
    </div>
  )
}
