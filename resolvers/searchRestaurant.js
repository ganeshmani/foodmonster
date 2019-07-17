import RestaurantModel from '../models/Restaurant';

export default async(parent,args,context) => {

    try {

        const lat = args.request.data.lat;
        const long = args.request.data.long;

        let restaurants =  await RestaurantModel.searchRestaurant(lat,long);
        
        return {
            success : true,
            data : restaurants,
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