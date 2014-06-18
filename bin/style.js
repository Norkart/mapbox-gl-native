"use strict"; //Min tolkning av stilarket. Finnes en spec på github.com/mapbox/mapbox-gl-style-spec, men er veldig uferdig.

module.exports = {
    "buckets": { //Buckets angir objekttyper som skal males på samme måte, virker det som.
        "bane": {
            "source": "outdoors", //Egentlig robpvn.12o4x977, men navnet den får ved innlesing er foreløpig hardkodet
            "layer": "bane",
            "field": "objtype",
            "value": "Bane",
            "type": "line"
        }
    },
    "structure": [ //Structure angir hvilken objekttype (bucket) som assosieres med hvilken tegneregel.
        {
            "name": "bane_Bane",
            "bucket": "bane"
        }
    ],
    "constants": { //Er konstantverdier som kan refereres fra tegneregler
        "land": "rgb(244,239,225)",
        "water": "#cdd"
    },
    "classes": [ //Classes er samlinger av tegneregler, det vil si tema/tegneregelsett det kan skiftes mellom
        {
            "name": "default",
            "layers": {	//Tegneregel
                "bane_Bane": {
                    "color": "#000000",
                    "width": 6.8
                }
            }
        }
    ],
    "sprite": "/img/maki-sprite" //Tror dette referer til spriteskjemaet som skal brukes, hvorav sprites refereres med navn i tegnereglene, men usikker på hvordan dette forholder seg til spriteURL i constants.cpp
};
