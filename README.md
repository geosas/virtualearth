Addon Virtual Earth
===================

This geOrchestra viewer addon allows users to display Virtual Earth basemap on all over the world.

Authors: @hsquividant

Compatibility :  geOrchestra >= 15.06

Example addon config:

```js
    {
        "id": "virtualearth_0",
        "enabled": true,
        "name": "VirtualEarth",
        "options": {
            "key": "Put your own key",
            "type": "AerialWithLabels",
            "name": "Aerial imagery with a road overlay"
        },
        "title": {
            "en": "Bing - Virtual Earth Base Map",
            "fr": "Fond de carte Virtual Earth",
            "es": "Mapa base de Virtual Earth",
            "de": "Virtual Earth Kartenhintergrund",
        },
        "description": {
            "en": "Microsoft Bing - Virtual Earth Base Map all over the world",
            "fr": "Fond de carte Microsoft Bing - Virtual Earth sur le monde entier",
            "es": "Mapa base de Microsoft Bing - Virtual Earth en todo el mundo",
            "de": "Microsoft Bing - Virtual Earth Kartenhintergrund auf der ganzen Welt",
        }
    }
```

### Setup

First, you have to create an account on Bing web site https://www.bingmapsportal.com and then you can create your own key. 

In the *config.json* file, you have to replace **key** option by your own key and choose **type** and **name** between 5 different basemaps :

Type | Name
---- | -----
Aerial | Aerial imagery
AerialWithLabels | Aerial imagery with a road overlay
Birdseye | Bird’s eye (oblique-angle) imagery
BirdseyeWithLabels | Bird’s eye imagery with a road overlay
Road | Roads without additional imagery
