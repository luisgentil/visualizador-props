import React from 'react'

export const VisualizadorProps = (props) => {

    let company = "SAE";

        
        return (      
     <>
    <h1>Visualizador Props</h1><p>Usuario: {props.usuario}</p>
    <p>Edad: {props.edad}</p>
    <p>Ciudad: {props.ciudad}</p>
    <p>Empresa: {company}</p>
    </>

  )
}
