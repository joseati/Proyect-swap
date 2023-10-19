import { useContext, useEffect, useState } from 'react'
import { Card, Col, Row, Button, DropdownButton, Dropdown } from 'react-bootstrap'
import { SwapContext } from '../../context/SwapContext'
import axios from 'axios'
import { monthString } from '../../Utils/getMonthString'
import { GraficoEstAdmin } from '../../Components/Graficos/GraficoEstAdmin'
import { MouthAllSell } from '../../Components/Graficos/MouthAllSell/MouthAllSell'


export const StatsAdmin = ({active, banned, numUsersMonth}) => {
  const { setReset, reset, user} = useContext(SwapContext)
  const [arrayTempPlanes, setArrayTempPlanes] = useState()
  const [arrayTempTrains, setArrayTempTrains] = useState()
  const [travelProductMonthly, setTravelProductMonthly] = useState()
  const [allSell, setAllSell ] = useState()
  const [prepareDataChart, setPrepareDataChart] = useState()
  const [boolGrafico, setBoolGrafico] = useState(0)
  const [ prepareDataChartMouth, setPrepareDataChartMouth ] = useState ()
  const [ allImportMoth, setAllImportMoth ] = useState ()
  const [avgImportMounth, setAvgImportMounth] = useState()
  const [allTravel, setAllTravel] = useState()
  const [tasaMes, setTasaMes] = useState()

  useEffect(() => {
    fetchTravelData()
    TPMonth()
    getAllSell()
    getAllSellForMounth()
    getAllImportSellMounth()
    getAllImportMothAvg()
    getAllTravelPro()
    tasa()
  }, [reset]);


  

  const fetchTravelData = () => {
    axios
      .get('http://localhost:4000/admin/getAllTravelsAdmin')
      .then((res) => {
        setArrayTempPlanes(res.data.plane);
        setArrayTempTrains(res.data.train);
        
      })
      .catch((err) => console.log(err));
  };

  const TPMonth = () =>{
    axios
        .get('http://localhost:4000/admin/getTravelsMonthly')
        .then((res)=>
          setTravelProductMonthly(res.data))
        .catch((err)=> console.log(err))
  }
  
  let actualMonth = new Date().getMonth()

  
 const getAllSell = async() =>{
  try{  
  const routesGenera = [
    axios.get("http://localhost:4000/admin/getAllSell"),
    axios.get("http://localhost:4000/admin/getAllImpotSell"),
    axios.get("http://localhost:4000/admin/getAvgImpotSell"),
   axios.get("http://localhost:4000/admin/getAllTravels")
  ]  
    const resultAllTrav = await Promise.all(routesGenera)
    const newData = resultAllTrav.map((e)=>e.data[0].num)
    const tasaVenta = (newData[0]/newData[3]) * 100
    newData.push(tasaVenta)
    setPrepareDataChart(newData)
    console.log(prepareDataChart);
  }catch(err){
    console.log(err);
  }
 }
 
  const getAllSellForMounth = async () => {
    try {
      const results = await Promise.all([
        axios.get('http://localhost:4000/admin/getAllSellJ'),
        axios.get('http://localhost:4000/admin/getAllSellf'),
        axios.get('http://localhost:4000/admin/getAllSellMarch'),
        axios.get('http://localhost:4000/admin/getAllSellA'),
        axios.get('http://localhost:4000/admin/getAllSellM'),
        axios.get('http://localhost:4000/admin/getAllSellJun'),
        axios.get('http://localhost:4000/admin/getAllSellJul'),
        axios.get('http://localhost:4000/admin/getAllSellAug'),
        axios.get('http://localhost:4000/admin/getAllSellSep'),
        axios.get('http://localhost:4000/admin/getAllSellOct'),
        axios.get('http://localhost:4000/admin/getAllSellNov'),
        axios.get('http://localhost:4000/admin/getAllSellDic'),
      ]);
  
      // Obtén los resultados de cada llamada y actualiza el estado
      const newData = results.map((res) => res.data[0].num);
  
      setPrepareDataChartMouth(newData);
      setReset(false);
    } catch (err) {
      console.log(err);
    }
  };
  const getAllImportSellMounth = async() =>{
    try{
      const resultImport = await Promise.all([
        axios.get('http://localhost:4000/admin/getAllImportJ'),
        axios.get('http://localhost:4000/admin/getAllImportf'),
        axios.get('http://localhost:4000/admin/getAllImportMarch'),
        axios.get('http://localhost:4000/admin/getAllImportA'),
        axios.get('http://localhost:4000/admin/getAllImportM'),
        axios.get('http://localhost:4000/admin/getAllImportJun'),
        axios.get('http://localhost:4000/admin/getAllImportJul'),
        axios.get('http://localhost:4000/admin/getAllImportAug'),
        axios.get('http://localhost:4000/admin/getAllImportSep'),
        axios.get('http://localhost:4000/admin/getAllImportOct'),
        axios.get('http://localhost:4000/admin/getAllImportNov'),
        axios.get('http://localhost:4000/admin/getAllImportDic'),
      ])
      const newData = resultImport.map((result ) => result == null ? 0 : result.data[0].sumClientPrice)
      const allImportMothData = newData.map((e)=> e == null ? 0 : e)
    
      setAllImportMoth(allImportMothData)
      setReset(false);
      
    }
    catch(err){
      console.log(err);
    }
    
  }
  
  const getAllImportMothAvg = async() =>{
    try{
    const getDataAVG = [
      axios.get('http://localhost:4000/admin/getAllAvgImportJ'),
        axios.get('http://localhost:4000/admin/getAllAvgImportf'),
        axios.get('http://localhost:4000/admin/getAllAvgImportMarch'),
        axios.get('http://localhost:4000/admin/getAllAvgImportA'),
        axios.get('http://localhost:4000/admin/getAllAvgImportM'),
        axios.get('http://localhost:4000/admin/getAllAvgImportJun'),
        axios.get('http://localhost:4000/admin/getAllAvgImportJul'),
        axios.get('http://localhost:4000/admin/getAllAvgImportAug'),
        axios.get('http://localhost:4000/admin/getAllAvgImportSep'),
        axios.get('http://localhost:4000/admin/getAllAvgImportOct'),
        axios.get('http://localhost:4000/admin/getAllAvgImportNov'),
        axios.get('http://localhost:4000/admin/getAllAvgImportDic'),
    ]
   
      const resultAvg = await Promise.all(getDataAVG)
      const prepareData = resultAvg.map((e)=> e.data[0].avgClientPrice)
      const prepareNotNULL = prepareData.map((elem)=> elem == null ? 0 : elem)
      setAvgImportMounth(prepareNotNULL)
    }catch(err){
      console.log(err);
    }
  }

  const getAllTravelPro = async() =>{
    try{
    const getData = [
      axios.get('http://localhost:4000/admin/getAllTravelJ'),
        axios.get('http://localhost:4000/admin/getAllTravelf'),
        axios.get('http://localhost:4000/admin/getAllTravelMarch'),
        axios.get('http://localhost:4000/admin/getAllTravelA'),
        axios.get('http://localhost:4000/admin/getAllTravelM'),
        axios.get('http://localhost:4000/admin/getAllTravelJun'),
        axios.get('http://localhost:4000/admin/getAllTravelJul'),
        axios.get('http://localhost:4000/admin/getAllTravelAug'),
        axios.get('http://localhost:4000/admin/getAllTravelSep'),
        axios.get('http://localhost:4000/admin/getAllTravelOct'),
        axios.get('http://localhost:4000/admin/getAllTravelNov'),
        axios.get('http://localhost:4000/admin/getAllTravelDic'),
    ]
    
      const result = await Promise.all(getData)
      const prepareData = result.map((e)=> e.data[0].num)
      const prepareNotNULL = prepareData.map((elem)=> elem == null ? 0 : elem)

      setAllTravel(prepareNotNULL)
  
      // console.log("resulttt", prepareData);
    }catch(err){
      console.log(err);
    }
  }
 

const showGrafico = () => {
  setReset(true)
  setBoolGrafico(1)

}
const showGraficoMes = () =>{
  setReset(true)
  setBoolGrafico(2)
}
const tasa = ()=>{
  const tasaMes = prepareDataChartMouth?.map((e,i)=> parseInt(e) / parseInt(allTravel[i]) * 100)
  // console.log(tasaMes);
  const tasaNoTNaN = tasaMes?.map((e)=> !e || isNaN(e) ? 0 : e)
  console.log(tasaNoTNaN);
      setTasaMes(tasaNoTNaN)
      setReset(false)
}
console.log(prepareDataChart);
  return (
    <Col className="d-flex align-items-center justify-content-center flex-column all-info-user">
                  <Row className="stats-section justify-content-center">

                    <Col xs={12} className="text-center p-5">
                    <h4 >Estadísticas de usuarios</h4>
                    </Col>

                   
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios totales: {active + banned}</Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>{`nº de Usuarios registrados este mes de ${monthString(actualMonth)}:`} {numUsersMonth}</Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios activos: {active}</Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                      <Card.Body>nº de Usuarios bloqueados: {banned}</Card.Body>
                    </Card>
                    
                    

                    <Col xs={12} className="text-center p-5">
                    <h4 >Estadísticas de viajes</h4>
                    </Col>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>nº de productos totales: {arrayTempPlanes?.length + arrayTempTrains?.length}</Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>{`nº de productos totales en ${monthString(actualMonth)} - 2023:`} {travelProductMonthly?.length}</Card.Body>
                    </Card>
                    <Card onLoad={getAllSell} style={{ width: '18rem'}}>
                    <Card.Body>nº de viajes vendidos(total):{allSell} </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>Importe de los viajes (total vendidos): {prepareDataChart &&prepareDataChart[1]}  €</Card.Body>
                    </Card>
                    
                    <Card style={{ width: '18rem'}}>
                    <Card.Body>Importe de los viajes (Media vendidos): {prepareDataChart && prepareDataChart[2]}  €</Card.Body>
                    </Card>
          
          <DropdownButton variant='secondary' id="dropdown-basic-button" title="Estadisticas">
          <Dropdown.Item variant= "primary" >
          <Button variant='info' onClick={showGrafico}>Estadisticas Generales</Button>
        </Dropdown.Item>
          <Dropdown.Item variant= "primary" >
          <Button variant='info' onClick={showGraficoMes}>Estadísticas por mes</Button>
        </Dropdown.Item>
          </DropdownButton>
        
        { boolGrafico == 1 ?<><Button className=" mt-2" variant='secondary' onClick={()=> setBoolGrafico(false)}>Cerrar Estadisticas</Button><GraficoEstAdmin
                    prepareDataChart = {prepareDataChart}
                    />
                    </>  :
                    null}
         { boolGrafico == 2 ?<><Button className=" mt-2" variant='secondary' onClick={()=> setBoolGrafico(false)}>Cerrar Estadisticas</Button>
         <MouthAllSell 
         prepareDataChartMouth = {prepareDataChartMouth}
         allImportMoth = {allImportMoth}
         avgImportMounth = {avgImportMounth}
         allTravel = {allTravel}
         tasaMes = {tasaMes}/>
         </>  :
                    null}
                  </Row>
              </Col>
  )
}
