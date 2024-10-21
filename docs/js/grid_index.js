fetch('geoJSON/Armstrong_0.js')
    .then(response => response.text())
    .then(jsText => {
        eval(jsText); // `text` variable is now defined
        const data = text.features.map((item) => ({
            Link: item.properties.Hyperlink.replace('Ayrshire1775', 'Ayrshire1775'.toLowerCase()),
            Area: item.properties.Area,
            Sheet: item.properties.Sheet,
        }));

        new gridjs.Grid({
            columns: [
                { id: 'Link', name: 'Text', formatter: cell => gridjs.html(cell), width: 'auto',sort: true },
                { id: 'Area', name: 'Area', sort: false },
                { id: 'Sheet', name: 'Sheet', sort: false },
            ],
            data: data,
            search: true,
        }).render(document.getElementById('wrapper'));
    })
    .catch(error => console.error('Error:', error));
