const dateFormat = (date) =>{
  
  let temp = date.split(" ")
  
  let res = `${temp[3]}-${formatMonth(temp[1])}-${temp[2]}`
  return res
}

const formatMonth = (month) => {
  console.log(month);
  let res;
  switch(month){
    case "Jan":
      res = "01"
      break;
    case "Feb":
     res = "02"
     break;
    case "Mar":
     res = "03"
     break;
    case "Apr":
      res = "04"
      break;
    case "May":
     res = "05"
     break;
    case "Jun":
     res = "06"
     break;
    case "Jul":
      res = "07"
      break;
    case "Aug":
     res = "08"
     break;
    case "Sep":
     res = "09"
     break;
    case "Oct":
      res = "10"
      break;
    case "Nov":
     res = "11"
     break;
    case "Dec":
     res = "12"
     break;
    
  }
  return res
}
module.exports = dateFormat