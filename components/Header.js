import s from '../styles/header.module.sass'

export function Header({name = 'Иванова А.'}) {
  let num = name.indexOf(' ', 0)
  name[num+1].toUpperCase();
  let headerName = name.slice(0, num+2)
  return (
    <div className={s.header}>
      <img className={s.header__notifications} src={'./notifications.svg'} alt={''}/>
      <img className={s.header__line} src={'./line.svg'} alt={''}/>
      <img className={s.header__avatar} src={'./avatar.svg'} alt={''}/>
      <span className={s.header__text}>{headerName + '.'}</span>
    </div>
)
}
