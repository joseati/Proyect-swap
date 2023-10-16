import React ,{useState}from 'react'
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
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Total y media de importes y viajes vendidos',
      },
    },
    scales:{
      x:{
        barPercentage:0.5,
      },
      y:{
        barPercentage:0.6,
      },
    },

  };

export const GraficoEstAdmin = ({prepareDataChart}) => {
  const totalViajes = "Nº de viajes(total) vendidos"
  const totalImport = "Nº de Importes(total)"
  const avgImport = "Media de Importes(total)"
  const allTravels = "Nº de Viajes creados (total)"

 const labels = [totalViajes, totalImport, avgImport, allTravels]
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
 const [show, setShow] = useState(true)
  return (
    <>
    <Button variant="info"className='mt-1' onClick={()=> setShow(!show)}>Ver { show ? "Grafico de barras": "Grafico de Lineas"}</Button>
    {show ?  <Line data={data} options={options}/> 
    :<Bar data={data} options={options}/>}
    </>
    
  )
}