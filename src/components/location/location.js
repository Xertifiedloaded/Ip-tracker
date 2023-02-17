import classes from '../location/location.module.css'
const Details = [
    {
        name: "IP ADDRESS",
        location: "192.212.174.101",

    },
    {
        name: "LOCATION",
        location: "FUNAAB ABEOKUTA",

    },
    {
        name: "TIMEZONE",
        location: "GMT +1",

    },
    {
        name: "ISP",
        location: "MTN NG",

    },
]
const Location = () => {
    return (
        <div className={classes.main}>
            <div className={classes.track}>
                {
                    Details.map((items, i) => (
                        <div className={classes.info} key={i}>
                            <p>{items.name}</p>
                            <h3>{items.location}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Location