import Mongoose from 'mongoose';

const restaurentSchema = new Mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    location : {
        type : {
            type : String,
            enum : ['Point'],
            required : true
        },
        coordinates : {
            type : [Number],
            required : true
        }
    }
});


class Restaurant {

    static getRetaurentByID(_id){
        return this.findOne({
            _id : Mongoose.mongo.ObjectID(_id)
        })
    }

    static getAllRestaurants() {

        return this.find().exec();
    }

    static insert(restaurantInfo) {
        const restaurent = this({
            name : restaurantInfo.name,
            city : restaurantInfo.city,
            location : {
                type : 'Point',
                coordinates : [ restaurantInfo.lat,restaurantInfo.long ]
            }
        });

        return restaurent.save();
    }

    static searchRestaurant(lat,long) {
        
        return this.aggregate([
            {
                '$geoNear' : {
                    'near' :{ type : "Point", coordinates : [ lat,long ] },
                    'spherical' : true,
                    'distanceField' : 'dist',
                    'maxDistance' : 50000
                }
            }
        ]).exec();
    }
}

restaurentSchema.loadClass(Restaurant);

export default Mongoose.model('Restaurant',restaurentSchema);