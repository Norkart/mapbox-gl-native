"use strict";

module.exports = {
    "buckets": {
        "bane": {
            "source": "outdoors", //Egentlig robpvn.12o4x977, men navnet den får ved innlesing er hardkodet
            "layer": "bane",
            "field": "objtype",
            "value": "Bane",
            "type": "line"
        }
    },
    "structure": [
        {
            "name": "bane_Bane",
            "bucket": "bane"
        }
    ],
    "constants": {
        "land": "rgb(244,239,225)",
        "water": "#cdd"
    },
    "classes": [
        {
            "name": "default",
            "layers": {
                "bane_Bane": {
                    "color": "#000000",
                    "width": 6.8
                }
            }
        }
    ],
    "sprite": "/img/maki-sprite"
};
