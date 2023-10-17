import { useState } from 'react'
import {Button} from "react-bootstrap"
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
        text: 'Total (sumatorio) de viajes vendidos por mes',
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
export const MouthAllSell = ({tasaMes,allTravel, prepareDataChartMouth, allImportMoth, avgImportMounth}) => {
  console.log("dATOSSSS",allImportMoth);
  const labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
  //  console.log(prepareDataChart);
  
   const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Total de ventas sumatorio',
        data: prepareDataChartMouth.map((e)=> e),
        borderColor: 'rgb(75, 233, 132)',
        backgroundColor: 'rgba(15, 199, 132, 0.6)',
      },
      {
        fill: true,
        label: 'Total de importe de ventas por mes',
        data: allImportMoth?.map((e)=> e),
        borderColor: 'rgb(155, 99, 132)',
        backgroundColor: 'rgba(155, 99, 132, 0.5)',
      },
      {
        fill: true,
        label: 'Media de importe de ventas por mes',
        data: avgImportMounth?.map((e)=> e),
        borderColor: 'rgb(50, 99, 132)',
        backgroundColor: 'rgba(50, 99, 132, 0.6)',
      },
      {
        fill: true,
        label: 'Total de viajes subidos ',
        data: allTravel?.map((e)=> e),
        borderColor: 'rgb(50, 99, 132)',
        backgroundColor: 'rgba(50, 99, 132, 0.6)',
      },
      {
        fill: true,
        label: 'Porcentaje ventas por mes (%) ',
        data: tasaMes?.map((e)=> e),
        borderColor: 'rgb(190, 199, 132)',
        backgroundColor: 'rgba(190, 199, 132, 0.6)',
      },
      
      
    ],
   }
   const [show, setShow] = useState(true)
  return (
    <>
    <Button variant="info"className='mt-1' onClick={()=> setShow(!show)}>Ver {show ? "Grafico de Barras" : "Grafico de Lineas"}</Button>
    {show ?  <Line data={data} options={options}/> 
    :<Bar data={data} options={options}/>}
   
    
    
    </>
  )
}
