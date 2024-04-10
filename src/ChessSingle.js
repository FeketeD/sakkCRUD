import React, { useState, useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import axios from 'axios';

export function ChessSingle() {
    const params = useParams();
    const id = params.chessId;
    const [chess, setChess] = useState([]);
    const [isLoading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`https://chess.sulla.hu/chess/${id}`)
            .then((res) => res.data)
            .then((data) => setChess(data))
            .catch(console.log)
            .finally(() => {
                setLoading(false);
            });
    }
        , [id]);


    return (
        <div className="py-5 m-auto text-center content bg-lavender container">
            {isLoading || !chess.id ? (
                <div className="spinner-border"></div>
            ) : (
                <div className="card p-1">
                    <div className="card-body d-flex justify-content-around align-items-center">
                        <img alt={chess.name}
                            className="img-fluid rounded"
                            style={{ maxHeight: "500px" }}
                            src={chess.image_url ? chess.image_url :
                                "https://via.placeholder.com/400x800"}
                        />
                        <div className='flex-column'>
                            <h5 className="card-title">Sakkozó neve: {chess.name}</h5>
                            <div className="lead">Születési dátuma: {chess.birth_date}</div>
                            <div className="lead">Nyert világbajnokságok: {chess.world_ch_won}</div>
                        </div>
                    </div>
                    <div className='d-flex justify-content-between mx-3'>
                        <div>
                            <NavLink to={chess.profile_url} target="_blank">{chess.profile_url}</NavLink>
                        </div>
                        <br />
                        <div>
                            <NavLink to="/">
                                <button className='btn btn-primary bi bi-backspace'>
                                    Vissza
                                </button>
                            </NavLink>
                            <NavLink to={"/mod-chess/" + chess.id}>
                                <button className='btn btn-warning bi bi-pencil'>
                                    Módosítás
                                </button>
                            </NavLink>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}