export default `

    input restaurantInputData {
        name : String!
        city : String!
        lat : Float!
        long : Float!       
    }

    input restaurantInput {
        data : restaurantInputData
    }

    input searchRestaurantInputData {
        lat : Float!
        long : Float!
    }

    input searchRestaurantInput {
        data : searchRestaurantInputData!
    }

    type restaurantData {
        name : String!
        city : String!
        lat : Float
        long : Float     
    }

    type restaurantResponse{
        success : Boolean  
        data : restaurantData
        error : Error
    }

    type restaurantsResponse {
        success : Boolean
        data : [restaurantData!]
        error : Error
    }
`