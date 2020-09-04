import s from '../styles/userCart.module.sass'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

export function UserCard({toggle, setToggle}) {
  const classes = useStyles()
  return (
    <AppBar className={s.cart} position="static">
      <Toolbar className={s.cart__container}>
        <div>
          <img className={s.container__avatar} src={'./avatar.svg'}/>
          <Typography variant="h6" className={s.container__text}>
            Иванова Анна Михайловна
          </Typography>
        </div>
        <div>
          <Button onClick={() => setToggle(!toggle)} classes={{
            label: classes.label,
            root: classes.root
          }} className={s.container__button} disableRipple={true} color="inherit">
            {
              toggle ? <>
                  <span className={s.button__text}>Редактировать</span>
                  <img className={s.container__img} src={'./edit.svg'}/>
                </>
                : <>
                  <span className={s.button__text}>Закрыть</span>
                  <img className={s.container__img} src={'./close.svg'}/>
                </>
            }
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  )
}
