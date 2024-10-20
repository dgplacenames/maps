new gridjs.Grid({
  columns: [
    {
      data: (row) => row.properties.Text,
      name: "Text",
    },{
        data: (row) => row.properties.Area,
        name: "Area",
      },
      {
        data: (row) => row.properties.Hyperlink,
        name: "Link",
      },
  ],
  data: [
    {
      type: "Feature",
      properties: {
        fid: "1",
        Text: "Glaik",
        Area: "Carrick",
        Sheet: "Bottom Sheet",
        Hyperlink:
          "<a href=https://dgplacenames.github.io/maps/Ayrshire1775#14/55.0073/-5.045>Glaik</a>",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-5.051112566650409, 55.006322868528351],
            [-5.039615102575669, 55.005413396462778],
            [-5.038931660458965, 55.00825494183033],
            [-5.050429124533704, 55.009164349464804],
            [-5.051112566650409, 55.006322868528351],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        fid: "2",
        Text: "Harbour",
        Area: "Carrick",
        Sheet: "Bottom Sheet",
        Hyperlink:
          "<a href=https://dgplacenames.github.io/maps/Ayrshire1775#14/55.0138/-5.072>Harbour</a>",
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-5.079373008419016, 55.01304136171531],
            [-5.064811774982148, 55.012450609207413],
            [-5.064541712167905, 55.014639140445787],
            [-5.079102945604773, 55.015229860711891],
            [-5.079373008419016, 55.01304136171531],
          ],
        ],
      },
    },
  ],
  search: true,
  sort: true,
}).render(document.getElementById("wrapper"));
