import classes from './map.module.css'
import { MapContainer, TileLayer,  Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import mark from 'leaflet'
import { cities } from '../../constant/index'
const MapLayout = () => {
    const position = [7.2236468, 3.4355762]
    const ZoomLevel = 10.5
    const markerIcon = new mark.Icon({
        iconUrl: require("../../assets/images/marker.png"),
        iconSize: [35, 45],
    })
    return (
        <div className={classes.main}>
            <MapContainer center={position} zoom={ZoomLevel} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank"> contributors'
                    url="https://api.maptiler.com/maps/topo-v2/256/{z}/{x}/{y}@2x.png?key=gpmZFquOu8yhR1lzs6Us"
                />
             
                <Marker position={position} icon={markerIcon}>
                    <Popup>
                        <p>hello</p>
                    </Popup>
                </Marker>
            </MapContainer>,
        </div>
    )
}

export default MapLayout