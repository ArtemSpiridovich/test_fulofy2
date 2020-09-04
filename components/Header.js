import s from '../styles/header.module.sass'

export function Header() {
  return (
    <div className={s.header}>
      <img className={s.header__notifications} src={'./notifications.svg'}/>
      <img className={s.header__line} src={'./line.svg'}/>
      <img className={s.header__avatar} src={'./avatar.svg'}/>
      <span className={s.header__text}>Иванова А.</span>
    </div>
)
}
