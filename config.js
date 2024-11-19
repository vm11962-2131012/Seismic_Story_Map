var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoidm0xMTk2MiIsImEiOiJjbTFqbHFsNWwxMGxxMmlweXdjYm9qZnNoIn0.Ca6Vt9ybed8zD4ZopE358Q',
    showMarkers: true,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: true, // map set to 3d 
    auto: false,
    title: 'Seismic Hazards and Recent Earthquake activity',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Victoria Martinez and Yi Hong',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'INTRO CHAPTER',
            image: './path/to/image/source.png',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            location: {
                center: [-122.34518, 47.67625],
                zoom: 9.5,
                pitch: 50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 0,
                }, {
                   layer: 'seismic-layer',
                   opacity: 0,
               }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Seismic Activity',
            image: './images/screenshot-2023-04-17-083100-1024x597.png',
            description: 'Due to our topic surrounding the environmental hazards in King County our first dataset, “Seismic Hazards”, focuses on data pertaining to seismic hazard areas that are subject to high risk of damage due to earthquakes. The data was collected under the King County Sensitive Areas Ordinance (SOA) in order to raise awareness of the issue due to the many residents and businesses occupying the areas impacted. This data records areas with soil liquefaction which occurs when consistent earthquakes occur in the same area  causing soils to lose their strength, turning soil into almost a liquid like material. These hazardous areas can lead to structural damage, landslides and geographical issues that prevent residents from living in safety.',
            location: {
                center: [-121.93090, 47.43191],
                zoom: 9.8,
                pitch: 65,
                bearing: 43.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 0,
                }, {
                   layer: 'seismic-layer',
                   opacity: 1,
               }
            ],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'EARTHQUAKE ACTIVITY CHAPTER',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.02352, 47.49886],
                zoom: 14,
                pitch: 73,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                }, {
                   layer: 'seismic-layer',
                   opacity: 1,
               }],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Soil Liquefaction: Seismic Hazards and Earthquake Activities',
            image: './images/liquefaction-hazard-map.pdf.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.03322, 47.46372],
                zoom: 9.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                }, {
                   layer: 'seismic-layer',
                   opacity: 1,
               }
            ],
            onChapterExit: []
        }
    ]
};
