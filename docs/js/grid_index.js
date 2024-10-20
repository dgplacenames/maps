fetch('https://dgplacenames.github.io/maps/geoJSON/Armstrong_0.js')
    .then(response => response.text())
    .then(jsText => {
        eval(jsText); // `text` variable is now defined
        const data = text.features.map((item) => ({
            Text: item.properties.Text,
            Area: item.properties.Area,
            Link: item.properties.Hyperlink.replace('Ayrshire1775', 'Ayrshire1775'.toLowerCase())
        }));

        new gridjs.Grid({
            columns: [
                { id: 'Text', name: 'Text', sort: true },
                { id: 'Area', name: 'Area', sort: true },
                { id: 'Link', name: 'Link', sort: true, formatter: cell => gridjs.html(cell) },
            ],
            data: data,
            search: true,
            sort: true,
        }).render(document.getElementById('wrapper'));
    })
    .catch(error => console.error('Error:', error));
