var APP_DATA = {
  "scenes": [
    {
      "id": "0-blick-von-breuningerseite",
      "name": "Blick von Breuningerseite",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.4265486406019514
      },
      "linkHotspots": [
        {
          "yaw": 1.0955277362303608,
          "pitch": 0.1497307943476418,
          "rotation": 0,
          "target": "1-blick-von-leonhardskirche"
        },
        {
          "yaw": -0.5130869430640015,
          "pitch": 0.21396128951168691,
          "rotation": 0,
          "target": "14-blick-von-breuninger"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.28381768193380275,
          "pitch": -0.47859965919915837,
          "title": "CIVIC HUB<br>",
          "text": "Bildung, Kultur, Kommunikation &amp; Austausch<br>"
        }
      ]
    },
    {
      "id": "1-blick-von-leonhardskirche",
      "name": "Blick von Leonhardskirche",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4353773839734636,
          "pitch": 0.1923679431580254,
          "rotation": 0,
          "target": "0-blick-von-breuningerseite"
        },
        {
          "yaw": 0.5572112777879994,
          "pitch": 0.1905856841406539,
          "rotation": 0,
          "target": "2-blick-zum-civic--eco-hub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-blick-zum-civic--eco-hub",
      "name": "Blick zum CIVIC & ECO HUB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.742707397025862,
          "pitch": 0.042592579146125686,
          "rotation": 0,
          "target": "1-blick-von-leonhardskirche"
        },
        {
          "yaw": 0.4668557230766126,
          "pitch": 0.0906088107029639,
          "rotation": 0,
          "target": "3-eingangsbereich-von-creative-hub"
        },
        {
          "yaw": -1.0339287961397172,
          "pitch": -0.021482430776281092,
          "rotation": 0,
          "target": "14-blick-von-breuninger"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-eingangsbereich-von-creative-hub",
      "name": "Eingangsbereich von CREATIVE HUB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.3668528767437902,
          "pitch": 0.0629687273324997,
          "rotation": 0,
          "target": "2-blick-zum-civic--eco-hub"
        },
        {
          "yaw": 2.650076356995868,
          "pitch": 0.06510925010827506,
          "rotation": 0,
          "target": "11-blick-zum-creative--civic-hub"
        },
        {
          "yaw": 1.0913722124392748,
          "pitch": 0.1369569964953552,
          "rotation": 0,
          "target": "4-experimentierraum"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-experimentierraum",
      "name": "Experimentierraum",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9293680619075033,
          "pitch": 0.17240930096977358,
          "rotation": 0,
          "target": "3-eingangsbereich-von-creative-hub"
        },
        {
          "yaw": 0.81101804456328,
          "pitch": 0.165671199922226,
          "rotation": 0,
          "target": "5-interaktionsraum-mit-blick-zum-eg"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.47277287023881165,
          "pitch": 0.23282987928670806,
          "title": "Experimentierraum<br>",
          "text": "Bereich, in dem Nutzer und Nutzungen (Werkstätte, Workshop &amp; Kurse) den Raum bespielen können. Informeller Raum ohne vorbestimmte Nutzung.<br>"
        }
      ]
    },
    {
      "id": "5-interaktionsraum-mit-blick-zum-eg",
      "name": "Interaktionsraum mit Blick zum EG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.1176499632212007,
          "pitch": 0.2376374822643541,
          "rotation": 0,
          "target": "4-experimentierraum"
        },
        {
          "yaw": -0.206224519644854,
          "pitch": 0.1785284628110233,
          "rotation": 0,
          "target": "6-interaktionsraum-mit-plattformen-zur-terrasse"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.24977677381380836,
          "pitch": 0.3960741002666932,
          "title": "Interaktionsraum",
          "text": "Hier finden kleine Ausstellungen von Werkstattarbeiten. Nutzer können in diesem Bereich auch sitzen, kleine Einführungen machen, usw.<br>"
        }
      ]
    },
    {
      "id": "6-interaktionsraum-mit-plattformen-zur-terrasse",
      "name": "Interaktionsraum mit Plattformen zur Terrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2348692140699402,
          "pitch": 0.20421915991783557,
          "rotation": 0,
          "target": "5-interaktionsraum-mit-blick-zum-eg"
        },
        {
          "yaw": -2.803457800577995,
          "pitch": 0.16766116680845577,
          "rotation": 0,
          "target": "7-interaktionsraum-im-4og"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-interaktionsraum-im-4og",
      "name": "Interaktionsraum im 4.OG",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4419019305217553,
          "pitch": 0.12288560313809427,
          "rotation": 0,
          "target": "6-interaktionsraum-mit-plattformen-zur-terrasse"
        },
        {
          "yaw": 2.089461439655876,
          "pitch": 0.19692658589266365,
          "rotation": 0,
          "target": "8-grnterrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-grnterrasse",
      "name": "Grünterrasse",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.31818631306288836,
          "pitch": 0.03332845376645288,
          "rotation": 0,
          "target": "9-terrasse-mit-blick-zum-eco-hub"
        },
        {
          "yaw": -1.8471871333781138,
          "pitch": 0.24487639218400048,
          "rotation": 0,
          "target": "7-interaktionsraum-im-4og"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.09943447174673814,
          "pitch": 0.24998523116212112,
          "title": "Grünterrasse",
          "text": "Terrasse mit Rasen und Obstbäume<br>"
        }
      ]
    },
    {
      "id": "9-terrasse-mit-blick-zum-eco-hub",
      "name": "Terrasse mit Blick zum ECO HUB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.007866595812586752,
          "pitch": 0.14034014231000924,
          "rotation": 0,
          "target": "10-terrasse-mit-blick-zum-civic-hub"
        },
        {
          "yaw": 0.5440713609323851,
          "pitch": 0.15150617757977614,
          "rotation": 0,
          "target": "8-grnterrasse"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-terrasse-mit-blick-zum-civic-hub",
      "name": "Terrasse mit Blick zum CIVIC HUB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7080052616903956,
          "pitch": 0.16584507033983797,
          "rotation": 0,
          "target": "9-terrasse-mit-blick-zum-eco-hub"
        },
        {
          "yaw": -2.2710316273351587,
          "pitch": 0.20932440797221652,
          "rotation": 0,
          "target": "11-blick-zum-creative--civic-hub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-blick-zum-creative--civic-hub",
      "name": "Blick zum CREATIVE & CIVIC HUB",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.263430567418621,
          "pitch": 0.02232184436496709,
          "rotation": 0,
          "target": "12-blick-zum-hubs"
        },
        {
          "yaw": 0.8652185678414082,
          "pitch": 0.006382664860623777,
          "rotation": 0,
          "target": "13-blick-von-straenseite-i"
        },
        {
          "yaw": -0.562964878560269,
          "pitch": 0.07039103589779572,
          "rotation": 0,
          "target": "3-eingangsbereich-von-creative-hub"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-blick-zum-hubs",
      "name": "Blick zum HUBs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8523903856115727,
          "pitch": 0.20053471464067663,
          "rotation": 0,
          "target": "11-blick-zum-creative--civic-hub"
        },
        {
          "yaw": 0.7058973644107063,
          "pitch": 0.2530327148030409,
          "rotation": 0,
          "target": "13-blick-von-straenseite-i"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-blick-von-straenseite-i",
      "name": "Blick von Straßenseite I",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1581512181817466,
          "pitch": 0.2375222412626048,
          "rotation": 0,
          "target": "12-blick-zum-hubs"
        },
        {
          "yaw": -0.6088884549728455,
          "pitch": 0.20380400927867726,
          "rotation": 0,
          "target": "11-blick-zum-creative--civic-hub"
        },
        {
          "yaw": 0.9024027912348345,
          "pitch": 0.2247007918816717,
          "rotation": 0,
          "target": "14-blick-von-breuninger"
        },
        {
          "yaw": 0.8328549851600968,
          "pitch": 0.049042379433545946,
          "rotation": 0,
          "target": "0-blick-von-breuningerseite"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -1.2750639246113096,
          "pitch": -0.3563065678068398,
          "title": "ECO HUB<br>",
          "text": "Wohlbefinden, Sport, Freizeit &amp; Gartenbau<br>"
        },
        {
          "yaw": -0.18438192372501305,
          "pitch": -0.23351730203114585,
          "title": "Gewächshaus",
          "text": "Urban Gardening<br>"
        }
      ]
    },
    {
      "id": "14-blick-von-breuninger",
      "name": "Blick von Breuninger",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.293390037176124,
          "pitch": 0.09784893448236076,
          "rotation": 0,
          "target": "0-blick-von-breuningerseite"
        },
        {
          "yaw": 1.7944146232183513,
          "pitch": 0.14091201612166948,
          "rotation": 0,
          "target": "1-blick-von-leonhardskirche"
        },
        {
          "yaw": 0.7596731495137536,
          "pitch": 0.1362253038285317,
          "rotation": 0,
          "target": "2-blick-zum-civic--eco-hub"
        },
        {
          "yaw": -0.6860032702845906,
          "pitch": 0.17568102064832836,
          "rotation": 0,
          "target": "13-blick-von-straenseite-i"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.15975955936862718,
          "pitch": -0.3211118103910824,
          "title": "CREATIVE HUB<br>",
          "text": "Werken, Gestalten, Herstellen &amp; Experimentieren<br>"
        }
      ]
    }
  ],
  "name": "Urban Act",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
