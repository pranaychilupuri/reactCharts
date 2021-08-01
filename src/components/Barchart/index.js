import './index.css'

import {
  BarChart,
  Bar,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts"


export default function App(props) {

  const {data} = props

  return (
    <BarChart
      width={350}
      height={150}
      data={data}
      margin={{
        top: 30,
        right: 50,
        left: 0,
        bottom: 5
      }}
      barSize={70}
    >
      <XAxis dataKey="name" padding={{ left: 5, right: 0 }} />
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="sales" fill="gold" background={{ fill: "#ffffff" }} label={{ position: "top" }}/>
    </BarChart>
  )
}
