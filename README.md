Addon Virtual Earth
===================

This addon allows user to display Virtual Earth basemap on all over the world.

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
            "name": "Aerial imagery with a road overlay",
            "type": "AerialWithLabels"
        },
        "title": {
            "en": "Bing - Virtual Earth Base Map",
            "fr": "Fond de carte Virtual Earth",
        },
        "description": {
            "en": "Microsoft Bing - Virtual Earth Base Map all over the world",
            "fr": "Fond de carte Microsoft Bing - Virtual Earth sur le monde entier",
        }
    }
```

### Setup

First, you have to create an account on Bing web site :https://www.bingmapsportal.com and then you can create your own key. 

You can choose between five differents basemaps :
Type | Title
---- | -----
Aerial | Aerial imagery.
AerialWithLabels | Aerial imagery with a road overlay.
Birdseye | Bird’s eye (oblique|angle) imagery
BirdseyeWithLabels | Bird’s eye imagery with a road overlay.
Road | Roads without additional imagery.
