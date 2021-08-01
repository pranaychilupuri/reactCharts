import Areachart from '../Areachart'
import Piechart from '../Piechart'
import Barchart from '../Barchart'
import Treechart from '../Treechart'
import './index.css'

export default function App() {

  const areaData = [
    {
      day: "1",
      dailySales: 473,
    },
    {
      day: "2",
      dailySales: 512,
    },
    {
      day: "3",
      dailySales: 543,
    },
    {
      day: "4",
      dailySales: 551,
    },
    {
      day: "5",
      dailySales: 554,
    },
    {
      day: "6",
      dailySales: 536,
    },
    {
      day: "7",
      dailySales: 502,
    },
    {
      day: "8",
      dailySales: 493,
    },
    {
      day: "9",
      dailySales: 522,
    },
    {
      day: "10",
      dailySales: 554,
    },
    {
      day: "11",
      dailySales: 561,
    },
    {
      day: "12",
      dailySales: 556,
    },
    {
      day: "13",
      dailySales: 555,
    },
    {
      day: "14",
      dailySales: 487,
    },
    {
      day: "15",
      dailySales: 497,
    },
    {
      day: "16",
      dailySales: 495,
    },
    {
      day: "17",
      dailySales: 530,
    },
    {
      day: "18",
      dailySales: 560,
    },
    {
      day: "19",
      dailySales: 561,
    },
    {
      day: "20",
      dailySales: 542,
    },
    {
      day: "21",
      dailySales: 482,
    },
    {
      day: "22",
      dailySales: 500,
    },
    {
      day: "23",
      dailySales: 509,
    },
    {
      day: "24",
      dailySales: 540,
    },
    {
      day: "25",
      dailySales: 565,
    },
    {
      day: "26",
      dailySales: 555,
    },
    {
      day: "27",
      dailySales: 528,
    },
    {
      day: "28",
      dailySales: 522,
    },
    {
      day: "29",
      dailySales: 470,
    },
    {
      day: "30",
      dailySales: 468,
    },
    {
      day: "31",
      dailySales: 303,
    },
  ]

  const pieData = [
    {name: 'Corporate', value: 1394},
    {name: 'Home Office', value: 865},
    {name: 'Consumer', value: 2387},
  ]

  const barData = {
    data: [
    {
      name: "Central",
      sales: 1809,
    },
    {
      name: "South",
      sales: 1394,
    },
    {
      name: "North",
      sales: 1018,
    },
    {
      name: "Oceania",
      sales: 604,
    },
    {
      name: "Southeast Asia",
      sales: 556,
    }
  ]
}

const treeData = [
  {
    name: "Technology",
    children: [
      {size: 1976},
    ]
  },
  {
    name: "Furniture",
    children: [
      {size: 1929},
    ]
  },
  {
    name: "Office Supplies",
    children: [
      {size: 2719},
    ]
  },
]
  
  return (
    <div className="container">
        <h1 className="totalcustomers-heading">Total Customers</h1>
        <div className="totalcustomers-container">
            <Areachart data = {areaData}/>
            <Piechart data = {pieData}/>
            <Barchart data = {barData.data}/>
            <Treechart data = {treeData}/>
        </div>
    </div>
  )
}

