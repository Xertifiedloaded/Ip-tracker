import classes from './hero.module.css'
import Right from '../../assets/images/icon-arrow.svg'
const Hero = () => {
    return (
        <div className={classes.main}>
            <h1>IP Address Tracker</h1>
            <div className={classes.inputs}>
                <input type="text" placeholder='192.212.174.101' />
                    <img src={Right} alt="" />
            </div>
        </div>
    )
}

export default Hero;