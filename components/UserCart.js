import s from '../styles/userCart.module.sass'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Link from "next/link";
import {IconButton} from "@material-ui/core";

export function UserCard({name = 'Иванова Анна Михайловна', href, text, children}) {
  return (
    <AppBar className={s.cart} position="static">
      <Toolbar className={s.cart__container}>
        <div>
          <img className={s.container__avatar} src={'./avatar.svg'}/>
          <Typography variant="h6" className={s.container__text}>
            {name}
          </Typography>
        </div>
        <div>
          <IconButton className={s.container__button} color="primary" aria-label="upload picture" component="span">
            <Link href={href}>
              <a>
                <span className={s.button__text}>{text}</span>
                {children}
              </a>
            </Link>
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  )
}
