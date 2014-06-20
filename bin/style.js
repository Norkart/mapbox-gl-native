"use strict"; //Min tolkning av stilarket. Finnes en spec på github.com/mapbox/mapbox-gl-style-spec, men er veldig uferdig.

module.exports = {
    "buckets": { //Buckets angir objekttyper som skal males på samme måte, virker det som.
        "bane": {
            "source": "outdoors", //Egentlig robpvn.12o4x977, men navnet den får ved innlesing er foreløpig hardkodet
            "layer": "bane",	
            "type": "line"
        },
	"jernbanestasjon": {
            "source": "outdoors", 
            "layer": "jernbanestasjon",
	    "size": 9,
            "type": "point"
        },
	"flyplasspunkt_1": {
            "source": "outdoors", 
            "layer": "flyplasspunkt",
            "field": "type",		//Tror dette er nærmere utvelgelseskriterie
            "value": 1,
	    "size": 12,			//Av en eller annen grunn må størrelsen for punkter oppgis her og ikke i classes
            "type": "point"
        },
	"flyplasspunkt_2": {
            "source": "outdoors", 
            "layer": "flyplasspunkt",
            "field": "type",
            "value": 2,
	    "size": 9,		//Kunne også lagt inn "icon": "airport" for å bruke ferdiglagd ikon
            "type": "point"
        },
	"flyplasspunkt_3": {
            "source": "outdoors", 
            "layer": "flyplasspunkt",
            "field": "type",
            "value": 3,
	    "size": 6,
            "type": "point"
        },
	"admingrense_Riks": {
            "source": "outdoors", 
            "layer": "admingrense",
            "field": "objtype",
            "value": "Riksgrense",
            "type": "line"
        },
	"admingrense_Territorial": {
            "source": "outdoors", 
            "layer": "admingrense",
            "field": "objtype",
            "value": "Territorialgrense",
            "type": "line"
        },
	"admingrense_Fylke": {
            "source": "outdoors", 
            "layer": "admingrense",
            "field": "objtype",
            "value": "Fylkesgrense",
            "type": "line"
        },
	"admingrense_Kommune": {
            "source": "outdoors", 
            "layer": "admingrense",
            "field": "objtype",
            "value": "Kommunegrense",
            "type": "line"
        },
	"TettBebyggelse": {
            "source": "outdoors", 
            "layer": "TettBebyggelse",
            "type": "fill"
        }
    },
    "structure": [ //Structure angir hvilken objekttype (bucket) som assosieres med hvilken tegneregel.
	{
            "name": "TettBebyggelse", 	//Av ukjent grunn måtte denne flyttes først for at jernbanestasjon skulle la seg tegne. Sammenheng med at det er en flate?
            "bucket": "TettBebyggelse"	
        },
	{
            "name": "bane_Bane", //Tegneregelen, flere objekter kan assosieres med samme regel
            "bucket": "bane"	//objektet, flere regler kan assosieres til samme objekt
        },
	{
            "name": "bane_Bane_skravur", 
            "bucket": "bane"	
        },
	{
            "name": "jernbanestasjon", 
            "bucket": "jernbanestasjon"	
        },
	{
            "name": "flyplasspunkt_all", 
            "bucket": "flyplasspunkt_1"	
        },
	{
            "name": "flyplasspunkt_all", 
            "bucket": "flyplasspunkt_2"	
        },
	{
            "name": "flyplasspunkt_all", 
            "bucket": "flyplasspunkt_3"	
        },
	{
            "name": "admingrense_Riks", 
            "bucket": "admingrense_Riks"	
        },
	{
            "name": "admingrense_Territorial", 
            "bucket": "admingrense_Territorial"	
        },
	{
            "name": "admingrense_Fylke", 
            "bucket": "admingrense_Fylke"	
        },
	{
            "name": "admingrense_Kommune", 
            "bucket": "admingrense_Kommune"	
        }
    ],
    "constants": { //Er konstantverdier som kan refereres fra tegneregler
        "land": "rgb(244,239,225)",
        "water": "#cdd",
	"admingrense": "rgba(102,165,168,0.6)",
	"flyplasspunkt": "rgba(100,200,100,0.9)"
    },
    "classes": [ //Classes er samlinger av tegneregler, det vil si tema/tegneregelsett det kan skiftes mellom
        {
            "name": "default",
            "layers": {	//Tegneregel
                "bane_Bane": {
                    "color": "rgba(168,110,138,0.8)",
                    "width": 3.0
                },
		"bane_Bane_skravur": {
                    "color": "#000000",
                    "dasharray": [
                        2,
                        31
                    ],
                    "width": 5
                },
		"jernbanestasjon": {
                    "color": "rgba(187,68,136, 0.9)"
                },
		"flyplasspunkt_all": {
                    "color": "flyplasspunkt",
                },
		"admingrense_Riks": {
                    "color": "admingrense",
                    "width": 4.0
                },
		"admingrense_Territorial": {
                    "color": "admingrense",
                    "width": 4.0
                },
		"admingrense_Fylke": {
                    "color": "admingrense",
                    "width": 2.0
                },
		"admingrense_Kommune": {
                    "color": "admingrense",
                    "width": 1.0
                },
		"TettBebyggelse": {
                    "color": "rgba(56,79,89,0.4)"
                }
            }
        }
    ],
    "sprite": "/img/maki-sprite" //Tror dette referer til spriteskjemaet som skal brukes, hvorav sprites refereres med navn i tegnereglene, men usikker på hvordan dette forholder seg til spriteURL i constants.cpp
};
