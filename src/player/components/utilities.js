import React from 'react';

function leftPad(number){
    const pad = '00'; 
     return pad.substring(0, pad.length - number.length)+ number;
    //substring es para reemplazarle algo a un string
    //substring(desde (posicion), hasta (posicion))
}

function formattedTime(secs){
    //formato decimal por buena practica
    const minutes = parseInt(secs / 60, 10);
    const seconds = parseInt(secs % 60, 10);
    return `${minutes}:${leftPad(seconds.toString())}`
}

export default formattedTime;