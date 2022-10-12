const categories = [
  { Name: "Boats", Url: "boats" },
  { Name: "Commercial", Url: "commercial" },
  { Name: "Compacts", Url: "compacts" },
  { Name: "Coupes", Url: "coupes" },
  { Name: "Cycles", Url: "cycles" },
  { Name: "Emergency", Url: "emergency" },
  { Name: "Helicopters", Url: "helicopters" },
  { Name: "Industrial", Url: "industrial" },
  { Name: "Military", Url: "military" },
  { Name: "Motorcycles", Url: "motorcycles" },
  { Name: "Muscle", Url: "muscle" },
  { Name: "Off-Road", Url: "off-road" },
  { Name: "Open Wheel", Url: "open-wheel" },
  { Name: "Planes", Url: "planes" },
  { Name: "Sedans", Url: "sedans" },
  { Name: "Service", Url: "service" },
  { Name: "Sports", Url: "sports" },
  { Name: "Sports Classics", Url: "sports-classics" },
  { Name: "Super", Url: "super" },
  { Name: "SUVs", Url: "suvs" },
  { Name: "Utility", Url: "utility" },
  { Name: "Vans", Url: "vans" },
];

export const retrieveVehicles = (token) => {
  const retrievedVehicles = {};
  const headers = new Headers();

  headers.append(
    "Authorization",
    "Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjQwMjFiOTUzLTFlYWItNGQ5ZC04YjJjLTllZTM0MDFjODRlZiIsInR5cCI6IkpXVCJ9.eyJuYW1laWQiOiIxNTc1OTgwNDQiLCJzY0F1dGguU2NBdXRoVG9rZW4iOiJBQUFBQWhRUXRnYUQ0emIrRG5jV0lpaXFUUW1IR0VjQVJQaHFJOXFSRmhUVTNsczZYUXpUQnJJZ2MzbUhwcmNraGlneWhZNU9Gdm1UR1NvbzlmUEhOSXJGNGlSY1ZUTnpKUEtZbXpBS0o0V2VWTitJbTFnMGM4MzJrdmhuOFFaMjl3RElmSkhqdDl3Mk05c2dBOWFnVXdncDBac0Jsd0k9Iiwic2NBdXRoLklzQU1pbm9yIjoiRmFsc2UiLCJzY0F1dGguTmlja25hbWUiOiJsdWxsYWJ5WFIiLCJzY0F1dGguQXZhdGFyVXJsIjoiaHR0cHM6Ly9hLnJzZy5zYy9uL2x1bGxhYnl4ci9uIiwic2NBdXRoLklzRW1haWxWZXJpZmllZCI6IlRydWUiLCJzY0F1dGguS2VlcE1lU2lnbmVkSW4iOiJGYWxzZSIsInNjQXV0aC5Ub2tlblN0b3JhZ2VUdGwiOiIwIiwic2NBdXRoLlJkcjJBY2Nlc3MiOiIiLCJuYmYiOjE2NjI4NDU3MDMsImF1ZCI6WyJodHRwczovL3NvY2lhbGNsdWIucm9ja3N0YXJnYW1lcy5jb20iLCJodHRwczovL3NjYXBpLnJvY2tzdGFyZ2FtZXMuY29tIl0sInNjb3BlIjoic2NhcGk6KiIsImV4cCI6MTY2Mjg0NjAwMywiaWF0IjoxNjYyODQ1NzAzLCJpc3MiOiJodHRwczovL3NpZ25pbi5yb2Nrc3RhcmdhbWVzLmNvbSJ9.c_aWTJVxG0HbGLepHdOA1UlogRb2w7i4JGFmbnEi7O_WexCI4g91Lnnx1W8MbhYSr7enu9aunpkG9MHtlyTsiXHxkdSgBY0KYDij_BfmiZi-uAewR2hK25dcc9-5ZRiyyyqDWdy5kGBaydYu_vw63zQziNsI5nsR-5adB9Sd67evcRdWbg16wrRNR38OTn7nacgxjpeEh8b3uEtoJMmAXsEnKoGoHCeVBNTCyVMgIeIhEKGqitjAA-5txVBLPPcWPNPg7T7EntgcDcZ80tgLP_4bO9od-Kell7rkmgUbbV6ytF88UDyUG3r-Tv_yJPS6acbbEMYRNAEVgIsvLV7k2w"
  );
  headers.append("Cookie", "AutoLoginCheck=1");

  const requestOptions = {
    // mode: 'no-cors',
    method: "POST",
    headers: headers,
    redirect: "follow",
    // credentials: "include",
  };
  for (let i = 0; i < 1; i++) {
    fetch(
      `https://socialclub.rockstargames.com/gtav/VehiclesAjax?category=${categories[i].Url}`,
      requestOptions
    )
      .then(async (res) => {
        return await res.text();
      })
      .then(function (response) {
        console.log(response);
        // const $ = cheerio.load(response.data, { xmlMode: true });
        // const vehicles =
        //   $("script")[0].children[0].data.VehiclesJson.VehiclesJson
        //     .VehicleCollections[i];

        // retrievedVehicles[categories[i].Name].TotalVehicles =
        //   vehicles.TotalVehicles;
        // retrievedVehicles[categories[i].Name].Vehicles = vehicles.Vehicles;
        console.log("====================================");
        console.log(retrievedVehicles);
        console.log("====================================");
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};
