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

    type restaurantData {
        name : String!
        city : String!
        lat : Float!
        long : Float!     
    }

    type restaurantResponse{
        success : Boolean  
        data : restaurantData
    }
`