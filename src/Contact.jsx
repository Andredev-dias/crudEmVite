import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

import Menu from "./components/Menu"
import style from "./Contact.module.css"
export const Contact = () => {
  const geoData = ({ lat: -25.3721227, lng: -49.2151926 });

  const defaultPhoneNumber = '5141999994084';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleWhatsAppMessage = () => {
    const { name, email, message } = formData;

    const whatsappURL = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
    Nome:%20${name}%0D%0A
    Email:%20${email}%0D%0A
    Mensagem:%20${message}`;

    window.open(whatsappURL, '_blank');
  };

  return(
    <div>
      <Menu/>
      <h2>Contato</h2>
      <div>
        <div>
          <h3>Map</h3>
          <div className={style.wrapMap}>
                  <MapContainer center={[geoData.lat, geoData.lng]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                     {geoData.lat && geoData.lng && (
                        <Marker position={[geoData.lat, geoData.lng]}>
                            <Popup>
                              <a target='_blank' href="https://www.google.com.br/maps/place/R.+dos+Prov%C3%A9rbios,+160+-+Santa+C%C3%A2ndida,+Curitiba+-+PR,+82630-220/@-25.3721276,-49.2126177,17z/data=!3m1!4b1!4m6!3m5!1s0x94dce61807d25a9f:0xfc49a852e8e4aaf!8m2!3d-25.3721276!4d-49.2126177!16s%2Fg%2F11csc5f70g?entry=ttu">Entre no Google maps</a>
                            </Popup>
                        </Marker>
                    )}
                  </MapContainer>
          </div>
        </div>
        <div>
          <h3>zap</h3>
          <div>
            <label htmlFor="name">Nome:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label htmlFor="message">Mensagem:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
          </div>
          <button onClick={handleWhatsAppMessage}>Enviar mensagem</button>
        </div>
      </div>
    </div>
  )
}