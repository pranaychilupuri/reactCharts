import Areachart from '../Areachart'
import Piechart from '../Piechart'
import Barchart from '../Barchart'
import Treechart from '../Treechart'
import './index.css'

export default function App() {

  const areaData = [
    {
      day: "1",
      dailySales: 501,
    },
    {
      day: "2",
      dailySales: 537,
    },
    {
      day: "3",
      dailySales: 579,
    },
    {
      day: "4",
      dailySales: 604,
    },
    {
      day: "5",
      dailySales: 589,
    },
    {
      day: "6",
      dailySales: 568,
    },
    {
      day: "7",
      dailySales: 533,
    },
    {
      day: "8",
      dailySales: 529,
    },
    {
      day: "9",
      dailySales: 551,
    },
    {
      day: "10",
      dailySales: 583,
    },
    {
      day: "11",
      dailySales: 612,
    },
    {
      day: "12",
      dailySales: 602,
    },
    {
      day: "13",
      dailySales: 590,
    },
    {
      day: "14",
      dailySales: 522,
    },
    {
      day: "15",
      dailySales: 531,
    },
    {
      day: "16",
      dailySales: 530,
    },
    {
      day: "17",
      dailySales: 565,
    },
    {
      day: "18",
      dailySales: 610,
    },
    {
      day: "19",
      dailySales: 602,
    },
    {
      day: "20",
      dailySales: 576,
    },
    {
      day: "21",
      dailySales: 516,
    },
    {
      day: "22",
      dailySales: 522,
    },
    {
      day: "23",
      dailySales: 537,
    },
    {
      day: "24",
      dailySales: 574,
    },
    {
      day: "25",
      dailySales: 606,
    },
    {
      day: "26",
      dailySales: 595,
    },
    {
      day: "27",
      dailySales: 565,
    },
    {
      day: "28",
      dailySales: 553,
    },
    {
      day: "29",
      dailySales: 501,
    },
    {
      day: "30",
      dailySales: 491,
    },
    {
      day: "31",
      dailySales: 318,
    },
  ]

  const pieData = [
    {name: 'Corporate', value: 5094},
    {name: 'Home Office', value: 3170},
    {name: 'Consumer', value: 8627},
  ]

  const barData = {
    data: [
    {
      name: "Central",
      sales: 3481,
    },
    {
      name: "South",
      sales: 2175,
    },
    {
      name: "North",
      sales: 1537,
    },
    {
      name: "Oceania",
      sales: 1151,
    },
    {
      name: "Southeast Asia",
      sales: 974,
    }
  ]
}

const treeData = [
  {
    name: "Technology",
    children: [
      {size: 3150},
    ]
  },
  {
    name: "Furniture",
    children: [
      {size: 3157},
    ]
  },
  {
    name: "Office Supplies",
    children: [
      {size: 7036},
    ]
  },
]
  
  return (
    <div>
        <h1 className="totalorders-heading">Total Orders</h1>
        <div className="totalorders-container">
            <Areachart data = {areaData}/>
            <Piechart data = {pieData}/>
            <Barchart data = {barData.data}/>
            <Treechart data = {treeData}/>
        </div>
    </div>
  )
}

