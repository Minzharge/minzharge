import React, { useState } from 'react'
import {BsBatteryCharging} from 'react-icons/bs'

function ProductVariants() {
    const [clamp, setClamp] = useState(false)
    const [power, setPower] = useState(false)
    const [wheels, setWheels] = useState(false)
    const [spechide, setSpechide] = useState('lead');
  const table_data = [{
        name: "iQube Standard",
        price: "₹ 1,08,268",
        onRoad: "(On-Road Price, Salem)",
        offerLink: '#',
        kms: "100 Km, 78 Kmph, 117 kg, 5 Hrs"
    },
    {
        name: "iQube Standard",
        price: "₹ 1,08,268",
        onRoad: "(On-Road Price, Salem)",
        offerLink: '#',
        kms: "100 Km, 78 Kmph, 117 kg, 5 Hrs"
    },
];

const handleshowhide = (event) => {
    const getSpec = event.target.value;
    setSpechide(getSpec);

}
  return (
<div></div>
  )
}

export default ProductVariants