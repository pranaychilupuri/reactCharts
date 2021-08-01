import {PieChart, Pie, Cell} from 'recharts'
import './index.css'

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']
const RADIAN = Math.PI / 180

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5
  const x = cx + radius * Math.cos(-midAngle * RADIAN)
  const y = cy + radius * Math.sin(-midAngle * RADIAN)

  return (
    <text
      x={x}
      y={y}
      fill="black"
      textAnchor={x > cx ? 'start' : 'end'}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  )
}

export default function App(props) {

  const {data} = props
  return (
    <PieChart width={400} height={150}>
      <Pie
        data={data}
        cx={170}
        cy={80}
        innerRadius={35}
        outerRadius={60}
        fill="#8884d8"
        paddingAngle={0}
        dataKey="value"
        label={renderCustomizedLabel}
      >
        {data.map((entry, color) => (
          <Cell fill={COLORS[color % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  )
}

