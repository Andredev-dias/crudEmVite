import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import { useState } from "react";

import Menu from "./components/Menu"
import style from "./Contact.module.css"
export const Contact = () => {
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
                  <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                      <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                      </Popup>
                    </Marker>
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