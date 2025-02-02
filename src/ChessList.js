import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export const ChessList = () => {

    const [chesses, setChesses] = useState([]);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("https://chess.sulla.hu/chess")
            .then((response) => response.data)
            .then((data) => setChesses(data))
            .catch(console.log)
            .finally(() => setLoading(false));
    }, [])

    return (
        <div className='p-5 m-auto text-center content bg-ivory'>
            {isLoading ? (
                <div className='spinner-border'></div>
            ) : (
                <div>
                    <p className='h1'>Sakkozók</p>
                    {chesses.map((chess, index) => (
                        <div className="card col-sm-3 d-inline-block m-1 p-2" key={index}>
                            <p className="h5">Név: {chess.name}</p>
                            <p className="">Születési dátum: {chess.birth_date}</p>
                            <p className="text-info">Megnyert világbajnokságok: {chess.world_ch_won}</p>
                            <div className="card-body">
                                <NavLink key={chess.id} to={"/chess/" + chess.id}>
                                    <img alt={chess.name}
                                        className="img-fluid"
                                        style={{ maxHeight: 200 }}
                                        src={chess.image_url ? chess.image_url :
                                            "https://via.placeholder.com/400x800"} /></NavLink>
                                <br />
                                <NavLink to={chess.profile_url} target="_blank">Wikipédia link</NavLink><br />
                                <NavLink to={"/mod-chess/" + chess.id}>
                                    <button className='btn btn-warning bi bi-pencil' style={{fontSize:"1rem"}}>
                                        Módosítás
                                    </button>
                                    </NavLink> &nbsp;&nbsp;
                                <NavLink to={"/del-chess/" + chess.id}>
                                    <button className='btn btn-danger bi bi-trash3' style={{fontSize:"1rem"}}>
                                        Törlés
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
