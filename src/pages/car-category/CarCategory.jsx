import { useEffect, useState } from "react";
import {  useSearchParams } from "react-router-dom";
import { carsData } from "../../../allcars";

function CartCategory() {
    const [searchParams] = useSearchParams();
    const category = searchParams.get('category');
    const [cars,setCars] = useState([])

    useEffect(()=> {
        const allCars = carsData;
        switch(category) {
            case 'coupe' :
                setCars(allCars.coupe)
            break;
            case 'sedan' :
                setCars(allCars.sedan)
            break;
            case 'suv' :
                setCars(allCars.suv)
            break;
            case 'hatchback' :
                setCars(allCars.hatchback)
            break;
            case 'luxury' :
                setCars(allCars.luxury)
            break;
        }
    },[category])
    return(
        <>
              <div className="category-section">
                {cars.map((item) => (
                  <div className="category-card" key={item.id} >
                    <img src={item.image} alt="" />
                    <span>{item.name}</span>
        
                  </div>
                ))}
        
              </div>
      </>
    )
}
export default CartCategory;