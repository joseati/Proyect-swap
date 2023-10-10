export const initialValueTrain = {

    // Valores insert de travel_product
    origin:"", 
    destiny:"",
    passengers: "",
    commentaries: "",
    original_price:"",
    client_price:"",
    exchange_rate:"",
     // Valores insert de plane_product
    // travel_product_id: "", /* se tiene que rescatar en el back */
    train_travel_id:"", /* 1 si es solo ida o 2 si es ida y vuelta */
    origin_trainStation_id:"", /* Se tendran que rescartar en el back tras una consulta en la tabla airpot con el company_name*/
    destiny_trainStation_id:"",
    departure_date:"", 
    departure_time:"",
    arrival_date:"",
    arrival_time:"",
    compani_name: "",
    // Informacion del vuelo de vuelta si lo hubiera
    // plane_travel_id:"", /*  2 si es ida y vuelta */
    origin_trainStation_id_tp2:"",
    destiny_trainStation_id_tp2:"",
    departure_date_tp2:"", 
    departure_time_tp2:"",
    arrival_date_tp2:"",
    arrival_time_tp2:"",
    compani_name_tp2: "",
  }
