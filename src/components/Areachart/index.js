import './index.css'
import {
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip
} from "recharts"

export default function App(props) {

  const {data} = props
  return (
    <AreaChart
      width={350}
      height={125}
      data={data}
      margin={{
        top: 30,
        right: 5,
        left: 25,
        bottom: 0
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Area type="monotone" dataKey="dailySales" stroke="orange" fill="yellow" />
    </AreaChart>
  )
}
