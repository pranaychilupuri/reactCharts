import Totalsales from './components/Totalsales'
import Totalprofits from './components/Totalprofits'
import Totalorders from './components/Totalorders'
import Totalcustomers from './components/Totalcustomers'
import './App.css'

export default function App() {
  
  return (
    <div>
      <h1 className="heading">Global Superstore</h1>
      <div className="column-name">
        <h3 className="heading1">Breakdown by Segment</h3>
        <h3 className="heading2">Breakdown by Region</h3>
        <h3 className="heading3">Breakdown by Category</h3>
      </div>
      
      <div className="container">
        <Totalsales />
        <Totalprofits />
        <Totalorders />
        <Totalcustomers />
      </div>
    </div>
  )
}

