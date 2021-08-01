import Areachart from '../Areachart'
import Piechart from '../Piechart'
import Barchart from '../Barchart'
import Treechart from '../Treechart'
import './index.css'

export default function App() {

  const areaData = [
    {
      day: "1",
      dailySales: 26330.30,
    },
    {
      day: "2",
      dailySales: 36829.61,
    },
    {
      day: "3",
      dailySales: 42151.32,
    },
    {
      day: "4",
      dailySales: 35234.61,
    },
    {
      day: "5",
      dailySales: 27076.97,
    },
    {
      day: "6",
      dailySales: 32505.51,
    },
    {
      day: "7",
      dailySales: 25364.15,
    },
    {
      day: "8",
      dailySales: 35767.85,
    },
    {
      day: "9",
      dailySales: 17299.48,
    },
    {
      day: "10",
      dailySales: 18808.28,
    },
    {
      day: "11",
      dailySales: 35099.43,
    },
    {
      day: "12",
      dailySales: 39111.65,
    },
    {
      day: "13",
      dailySales: 26757.89,
    },
    {
      day: "14",
      dailySales: 26084.64,
    },
    {
      day: "15",
      dailySales: 29008.36,
    },
    {
      day: "16",
      dailySales: 36845.35,
    },
    {
      day: "17",
      dailySales: 39165.29,
    },
    {
      day: "18",
      dailySales: 39278.28,
    },
    {
      day: "19",
      dailySales: 31618.85,
    },
    {
      day: "20",
      dailySales: 32960.84,
    },
    {
      day: "21",
      dailySales: 29539.35,
    },
    {
      day: "22",
      dailySales: 37131.99,
    },
    {
      day: "23",
      dailySales: 30631.34,
    },
    {
      day: "24",
      dailySales: 42221.54,
    },
    {
      day: "25",
      dailySales: 35380.05,
    },
    {
      day: "26",
      dailySales: 23105.59,
    },
    {
      day: "27",
      dailySales: 39658.35,
    },
    {
      day: "28",
      dailySales: 35979.88,
    },
    {
      day: "29",
      dailySales: 27445.28,
    },
    {
      day: "30",
      dailySales: 25398,
    },
    {
      day: "31",
      dailySales: 16082.66,
    },
  ]

  const pieData = [
    {name: 'Corporate', value: 287934.71},
    {name: 'Home Office', value: 192336.77},
    {name: 'Consumer', value: 495601.19},
  ]

  const barData = {
    data: [
    {
      name: "Central",
      sales: 205593.79,
    },
    {
      name: "South",
      sales: 120780.9,
    },
    {
      name: "North",
      sales: 98614.53,
    },
    {
      name: "Oceania",
      sales: 77138.59,
    },
    {
      name: "Southeast Asia",
      sales: 8976.22,
    }
  ]
}

const treeData = [
  {
    name: "Technology",
    children: [
      {size: 237863.83},
    ]
  },
  {
    name: "Furniture",
    children: [
      {size: 79574.71},
    ]
  },
  {
    name: "Office Supplies",
    children: [
      {size: 193665.57},
    ]
  },
]
  
  return (
    <div>
        <h1 className="totalprofits-heading">Total Profits</h1>
        <div className="totalprofits-container">
            <Areachart data = {areaData}/>
            <Piechart data = {pieData} />
            <Barchart data = {barData.data} />
            <Treechart data = {treeData}/>
        </div>
    </div>
  )
}

