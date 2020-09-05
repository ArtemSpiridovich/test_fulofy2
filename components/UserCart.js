import s from '../styles/userCart.module.sass'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Link from "next/link";

const useStyles = makeStyles({
  root: {
    minWidth: '24px',
    width: 'max-content',
    '@media screen and (max-width: 840px)': {
      maxWidth: '24px',
      width: '24px',
      overFlow: 'hidden'
    }
  },
  label: {
    maxWidth: 'max-content',
    width: 'max-content',
    '@media screen and (max-width: 840px)': {
      maxWidth: '24px',
      width: '24px'
    }
  },
});

export function UserCard({name = 'Иванова Анна Михайловна', href, text, src}) {
  const classes = useStyles()
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
          <Button classes={{
            label: classes.label,
            root: classes.root
          }} className={s.container__button} disableRipple={true} color="inherit">
            <Link href={href}>
              <a>
                <span className={s.button__text}>{text}</span>
                <img className={s.container__img} src={src}/>
              </a>
            </Link>
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
