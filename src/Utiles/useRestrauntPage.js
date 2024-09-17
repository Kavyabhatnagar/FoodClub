import { useEffect, useState } from "react";
import { menu_api } from "./comman";
const useRestrauntPage = (resId) =>{
    const [restInfo,setrestInfo]= useState(null);
  useEffect(()=>{
    FetchMenu();
  },[]);
  const FetchMenu = async()=>{
    // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId="+ resId+"&catalog_qa=undefined&submitAction=ENTER");
    const data = await fetch(menu_api + resId);
    const json = await data.json();
    console.log(json);
    setrestInfo(json.data);

};
    return restInfo;
    
    
}
export default useRestrauntPage;