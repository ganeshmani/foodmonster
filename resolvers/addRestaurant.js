import RestaurantModel from '../models/Restaurant';

export default async(parent,args,context) => {

    
    try {

        let restaurantInfo = {
            name : args.request.data.name,
            city : args.request.data.city,
            lat : args.request.data.lat,
            long : args.request.data.long
        }
        
        let restaurant = await RestaurantModel.insert(restaurantInfo);

        return {
            success : true,
            data : restaurant,
            error : null
        }
        
    }
    catch(e){
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