fetch('geoJSON/georefs.js')
    .then(response => response.text())
    .then(jsText => {
        eval(jsText); // `maps` variable is now defined
        const data = georefs.maps.map((item) => ({
            name: item.name,
            date: item.date,
            parish: item.parish,
            county: item.county,
            county: item.county,
            mapmaker: item.mapmaker,
            nls: item.nls,
            allmaps: item.allmaps,
            
        }));

        new gridjs.Grid({
            columns: [
                { id: 'name', name: 'Georeferenced Map', },
                { id: 'date', name: 'Date', sort: true },
                { id: 'parish', name: 'Parish', sort: true },
                { id: 'county', name: 'County', sort: true },
                { id: 'mapmaker', name: 'Mapmaker', sort: true },
                { id: 'nls', name: 'NLS ID', formatter: cell => gridjs.html(`<a href=https://maps.nls.uk/view/${cell}>${cell}</a>`)},
                { id: 'allmaps', name: 'AllMaps', formatter: cell => gridjs.html(`<a href=https://viewer.allmaps.org/?url=https://annotations.allmaps.org/images/${cell}>${cell}</a>`) },
            ],
            data: data,
            search: true,
        }).render(document.getElementById('wrapper'));
    })
    .catch(error => console.error('Error:', error));


  