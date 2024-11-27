var config = {
    style: 'mapbox://styles/mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoidm0xMTk2MiIsImEiOiJjbTFqbHFsNWwxMGxxMmlweXdjYm9qZnNoIn0.Ca6Vt9ybed8zD4ZopE358Q',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: true,
    theme: 'dark',
    use3dTerrain: true, // map set to 3d
    auto: false,
    title: 'Seismic Hazards and Recent Earthquake activity',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Victoria Martinez and Yi Hong Huang',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'INTRO CHAPTER',
            image: './path/to/image/source.png',
            description: 'King County is located in the heart of the Puget Sound region in Washington state. It is the most populous county in the state with over 2.2 million residents calling it home. King County covers a total of 2,130 square miles of land across cities like Seattle, Bellevue, Tacoma, and Renton. King County features urban centers, lush forests, scenic mountains, and expansive waterways. This vibrant area has become one of the fastest growing cities in the world. King County also lies on top of the Cascadia Subduction Zone and many other faults. The Cascadia Subduction Zone is a major tectonic plate boundary where the Juan de Fuca Plate subducts beneath the North American Plate, posing risk of megathrust earthquakes. King County also sits criss-crossed on top of the Seattle Fault and South Whidbey Island Fault which are capable of producing smaller earthquakes. The Cascadia Subduction Zone is a part of the Pacific Ring of Fire, parts of the Pacific Ocean where high levels of seismic and volcanic activity are present making it one of the most geologically active regions in the world.',
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
               },
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
                   layer: 'seismic-layer',
                   opacity: 1,
               }
            ],
            onChapterExit: [
                {
                    layer: 'seismic-layer',
                    opacity: 0,
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            title: 'Earthquakes in Seismic Hazard Areas',
            image: './images',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-122.03322, 47.46372],
                zoom: 9.1,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'easeTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'earthquakes-layer',
                    opacity: 1,
                 }, {
                    layer: 'seismic-layer',
                    opacity: 0,
                 }, {
                    layer: 'city-layer',
                    opacity: 0,
                 }, {  
                    layer: 'city-line-layer',
                    opacity: 0,
                 },
            ],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            interactive: true,
            title: 'Liquefaction: Seismic Hazards and Earthquake Activity found',
            image: './images/liquefaction-hazard-map.pdf.png',
            description: 'With liquefaction occuring in various areas through King County, the loss in soil stability due to earthquakes, poses various hazards for residents and anyone within King County. The damage that is followed by earthquake shaking affects roads, infrastructure, homes and anything else that lies within the seismic hazard areas including populations residing there. There is a current King County Regional Hazard Mitigation Plan that helps track down seismic hazard areas and is in the process of addressing the risks. This plan has also helped develop strategies to enhance resilience in these areas, getting rid of vulnerabilities in areas impacted by soil liquefaction from earthquakes. Using the map and the visuals to understand policies, seismic activity and recent earthquakes these can help us prepare for future earthquake impacts and take the correct measures to help save our communities.',
            location: {
                center: [-121.88008, 47.47291],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'city-layer',
                   opacity: 1,
                }, {
                   layer: 'earthquakes-layer',
                   opacity: 1,
                }, {
                   layer: 'seismic-layer',
                   opacity: 1,
                }, {  
                   layer: 'city-line-layer',
                   opacity: 1,
                },
            ],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            interactive: true,
            title: 'Interactive Seismic Hazards and Earthquake Visual ',
            image: './graph.svg',
            description: 'Interactive map to view seismic activity and population growth over time.',
            location: {
                center: [-121.88008, 47.47291],
                zoom: 9,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                   layer: 'city-layer',
                   opacity: 1,
                }, {
                   layer: 'earthquakes-layer',
                   opacity: 1,
                }, {
                   layer: 'seismic-layer',
                   opacity: 1,
                }, {  
                   layer: 'city-line-layer',
                   opacity: 1,
                },
            ],
            onChapterExit: []
        }
    ]
};
