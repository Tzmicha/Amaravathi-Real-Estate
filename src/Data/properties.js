import prop1 from "../assets/property1.jpg";
import prop2 from "../assets/property2.jpg";
import villa from "../assets/villa.jpg";

const properties = [
  {
    id: 1,
    badge: "Premium Plot",
    type: "Residential Plot",
    name: "Green City Plots",
    loc: "Tadikonda, Amaravati",
    chips: ["200–500 Sq Yds", "DTCP Approved"],
    price: "₹18,999/Sq Yd",
    status: "ready",
    image: prop1,
  },
  {
    id: 2,
    badge: "Luxury Villa",
    type: "Villa",
    name: "Sapphire Villas",
    loc: "Mangalagiri, Amaravati",
    chips: ["2400–3500 Sqft", "4 BHK"],
    price: "₹1.25 Cr+",
    status: "const",
    image: villa,
  },
  {
    id: 3,
    badge: "Premium Apt",
    type: "Apartment",
    name: "Capital Heights",
    loc: "Guntur, Amaravati Road",
    chips: ["2–4 BHK", "2 Towers"],
    price: "₹56 L+",
    status: "const",
    image: prop2,
  },
  {
    id: 4,
    badge: "Commercial",
    type: "Commercial Space",
    name: "Business Square",
    loc: "Amaravati Capital Region",
    chips: ["500–5000 Sqft", "Ready to Move"],
    price: "₹75 L+",
    status: "ready",
    image: null,
  },
];

export default properties;
