import RestaurantModel from '../models/Restaurant';

export default async(parent,args,context) => {

    try {

        let restaurants = await RestaurantModel.getAllRestaurants();
          
        restaurants = restaurants.map((item) => {
            console.log("items",item);

            return {
                name : item.name,
                city : item.city,
                lat : item.location.coordinates[0],
                long : item.location.coordinates[1]
            }
        })

        console.log("Restaurants",restaurants); 
        
        return {
            success : true,
            data : restaurants,
            error : null
        }

    }
    catch(e) {
        console.log(e);
        return {
            success : false,
            data : null,
            error : {
                message : e,
                status : 500
            }
        }

    }
}