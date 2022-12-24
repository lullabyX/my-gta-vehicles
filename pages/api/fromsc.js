import cheerio from "cheerio";

const categories = [
  {Name: "Boats", Url: "boats"},
  {Name: "Commercial", Url: "commercial"},
  {Name: "Compacts", Url: "compacts"},
  {Name: "Coupes", Url: "coupes"},
  {Name: "Cycles", Url: "cycles"},
  {Name: "Emergency", Url: "emergency"},
  {Name: "Helicopters", Url: "helicopters"},
  {Name: "Industrial", Url: "industrial"},
  {Name: "Military", Url: "military"},
  {Name: "Motorcycles", Url: "motorcycles"},
  {Name: "Muscle", Url: "muscle"},
  {Name: "Off-Road", Url: "off-road"},
  {Name: "Open Wheel", Url: "open-wheel"},
  {Name: "Planes", Url: "planes"},
  {Name: "Sedans", Url: "sedans"},
  {Name: "Service", Url: "service"},
  {Name: "Sports", Url: "sports"},
  {Name: "Sports Classics", Url: "sports-classics"},
  {Name: "Super", Url: "super"},
  {Name: "SUVs", Url: "suvs"},
  {Name: "Utility", Url: "utility"},
  {Name: "Vans", Url: "vans"},
];

const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(404).json({message: "Not Found"});
  }
  const retrievedVehiclesObj = {};
  const headers = new Headers();
  const body = JSON.parse(req.body);
  const token = body.token;
  if (!token) {
    return res.status(401).json({message: "no token found"});
  }

  headers.append("Authorization", `Bearer ${token}`);
  headers.append("Cookie", "AutoLoginCheck=1");

  const requestOptions = {
    // mode: 'no-cors',
    method: "POST",
    headers: headers,
    redirect: "follow",
    // credentials: "include",
  };
  try {
    for (let i = 0; i < 22; i++) {
      const res = await fetch(
        `https://socialclub.rockstargames.com/gtav/VehiclesAjax?config=&slot=Freemode&category=${categories[i].Url}`,
        requestOptions
      );
      const response = await res.text();
      const $ = cheerio.load(response, {xmlMode: true});
      const data = JSON.parse($("script")[0].children[0].data);
      const vehicles = data.VehiclesJson.VehicleCollections[i];
      retrievedVehiclesObj[categories[i].Name] = {};
      retrievedVehiclesObj[categories[i].Name]["TotalVehicles"] =
        vehicles.TotalVehicles || {};
      retrievedVehiclesObj[categories[i].Name]["Vehicles"] =
        vehicles.Vehicles || {};
    }
    return res.status(201).json(retrievedVehiclesObj);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: "something went wrong"});
  }
};

export default handler;
