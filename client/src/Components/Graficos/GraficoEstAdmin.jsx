import {useState}from 'react'
import { Button } from 'react-bootstrap';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line, Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
 
  );
  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Total y media de importes y viajes vendidos',
      },
    },

  };

export const GraficoEstAdmin = ({prepareDataChart}) => {
  const totalViajes = "Nº de viajes(total) vendidos"
  const totalImport = "Nº de Importes(total)"
  const avgImport = "Media de Importes(total)"
  const allTravels = "Nº de Viajes creados (total)"
  const tasaventas = "Nº de Viajes vendidos / nº viajes creados  "

 const labels = [totalViajes, totalImport, avgImport, allTravels, tasaventas]
//  console.log(prepareDataChart);

 const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Total',
      data: prepareDataChart,
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(155, 99, 132, 0.5)',
    },
    
  ],
 }
 const dataBar = {
  labels,
  datasets: [
    {
      fill: true,
      label: 'Total',
      data: prepareDataChart,
      borderColor: 'rgb(155, 99, 132)',
      backgroundColor: 'rgba(55, 199, 132, 0.9)',
    },
    
  ],
 }
 const [show, setShow] = useState(true)
  return (
    <>
    <Button variant="info"className='mt-1' onClick={()=> setShow(!show)}>Ver { show ? "Grafico de barras": "Grafico de Lineas"}</Button>
    {show ?  <Line data={data} options={options}/> 
    :<Bar data={dataBar} options={options}/>}
    </>
    
  )
}
