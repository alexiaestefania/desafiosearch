import React from 'react';

export default function Loading() {
    const searchsvg = require("./assets/searchlarge.svg") as string;
    return (
        <div>
           Pesquise um perfil do GitHub
            <img src={searchsvg} alt="icone de busca" />
             
        </div>
    )
}