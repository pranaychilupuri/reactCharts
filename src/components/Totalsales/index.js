import Areachart from '../Areachart'
import Piechart from '../Piechart'
import Barchart from '../Barchart'
import Treechart from '../Treechart'
import './index.css'

export default function App() {

  const areaData = [
    {
      day: "1",
      dailySales: 227645.4,
    },
    {
      day: "2",
      dailySales: 261283.1,
    },
    {
      day: "3",
      dailySales: 301111.6,
    },
    {
      day: "4",
      dailySales: 307045.9,
    },
    {
      day: "5",
      dailySales: 265507.4,
    },
    {
      day: "6",
      dailySales: 246267.6,
    },
    {
      day: "7",
      dailySales: 248077.6,
    },
    {
      day: "8",
      dailySales: 283331.2,
    },
    {
      day: "9",
      dailySales: 242493.6,
    },
    {
      day: "10",
      dailySales: 255566,
    },
    {
      day: "11",
      dailySales: 308991.4,
    },
    {
      day: "12",
      dailySales: 271320.3,
    },
    {
      day: "13",
      dailySales: 275179.9,
    },
    {
      day: "14",
      dailySales: 259363.4,
    },
    {
      day: "15",
      dailySales: 261017.9,
    },
    {
      day: "16",
      dailySales: 291304.4,
    },
    {
      day: "17",
      dailySales: 310700,
    },
    {
      day: "18",
      dailySales: 324309.5,
    },
    {
      day: "19",
      dailySales: 291561.5,
    },
    {
      day: "20",
      dailySales: 280917.3,
    },
    {
      day: "21",
      dailySales: 242975.8,
    },
    {
      day: "22",
      dailySales: 250384.7,
    },
    {
      day: "23",
      dailySales: 241496.1,
    },
    {
      day: "24",
      dailySales: 304214.3,
    },
    {
      day: "25",
      dailySales: 283845.1,
    },
    {
      day: "26",
      dailySales: 324000.1,
    },
    {
      day: "27",
      dailySales: 278582,
    },
    {
      day: "28",
      dailySales: 288652.1,
    },
    {
      day: "29",
      dailySales: 250707.8,
    },
    {
      day: "30",
      dailySales: 225467.4,
    },
    {
      day: "31",
      dailySales: 148160.5,
    },
  ]

  const pieData = [
    {name: 'Corporate', value: 2557613.8},
    {name: 'Home Office', value: 1587941},
    {name: 'Consumer', value: 4221926.1},
  ]

  const barData = {
    data: [
    {
      name: "Central",
      sales: 1845546.1,
    },
    {
      name: "South",
      sales: 1081831.7,
    },
    {
      name: "North",
      sales: 804001.9,
    },
    {
      name: "Oceania",
      sales: 742118.6,
    },
    {
      name: "Southeast Asia",
      sales: 548781.4,
    }
  ]
}

const treeData = [
  {
    name: "Technology",
    children: [
      { name: "Axes", size: 1851701},
    ]
  },
  {
    name: "Furniture",
    children: [
      { name: "AnchorControl", size: 1645213.5 },
    ]
  },
  {
    name: "Office Supplies",
    children: [
      { name: "Data", size: 1561365.2 },
    ]
  },
]
  
  return (
    <div>
        <h1 className="totalsales-heading">Total Sales</h1>
        <div className="totalsales-container">
            <Areachart data = {areaData}/>
            <Piechart data = {pieData} />
            <Barchart data = {barData.data} />
            <Treechart data = {treeData}/>
        </div>
    </div>
  )
}
