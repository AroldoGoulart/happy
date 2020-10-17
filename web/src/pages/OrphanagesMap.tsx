/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import mapMarkerImg from '../images/Local.svg';

import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'
import '../styles/pages/orphanages-map.css'

function OrphanagesMap(){
    let accessToken= process.env.REACT_APP_MAPBOX_TOKEN;
    // Can be satellite-v9,  satellite-streets-v11, outdoors-v11, streets-v11
    let typeOfMap="streets-v11"
    let url = `https://api.mapbox.com/styles/v1/mapbox/${typeOfMap}/tiles/256/{z}/{x}/{y}@2x?access_token=${accessToken}`;

    console.log(accessToken)

    return(
       <div id="page-map">
           <aside>
               <header>
                   <img src={mapMarkerImg} alt="Happy"/>

                   <h2>Escolha um orfanato no mapa</h2>
                   <p>Muitas crianças estão esperando a sua visita</p>
               </header>

               <footer>
                    <strong>Cuiabá</strong>
                    <strong>MT</strong>
                </footer>
           </aside>


           <Map
                center={[ -15.601382,-56.0907888 ]}
                zoom={15.5}
                style={{ width: '100%', height: '100%' }}
            >   
                <TileLayer url={url}/>
           </Map>

           <Link to="" className="create-orphanage">
               <FiPlus size={32} color="#fff"/>
           </Link>
        </div>
    )
}

// TileLayer sem cadastro
function TileLayerWithoutToken() {
    return(
       <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    )
}

export default OrphanagesMap