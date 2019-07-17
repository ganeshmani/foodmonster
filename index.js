
import express from 'express';
import { ApolloServer,gql } from 'apollo-server-express';
import * as bodyParser from 'body-parser';

import mongoose from 'mongoose';

import cors from 'cors';

import UserTypes from './types/User';
import RestaurantTypes from './types/Restaurent';
import CommonTypes from './types/Common';

import createUser from './resolvers/createUser';
import loginUser from './resolvers/loginUser';
import getAllRestaurants from './resolvers/getAllRestaurants';
import addRestaurant from './resolvers/addRestaurant';
import searchRestaurant from './resolvers/searchRestaurant';
const typeDefs = `
    ${CommonTypes}
    ${UserTypes}
    ${RestaurantTypes}
    type Query {
        hello : String
        loginUser(request : loginUserInput) : loginUserResponse
        getAllRestaurants : restaurantsResponse
        searchRestaurant(request : searchRestaurantInput!) : restaurantsResponse
    }

    type Mutation {
        createUser(request : createUserInput) : createdUserResponse
        addRestaurant(request : restaurantInput) : restaurantResponse
    }
`;

const resolvers = {
    Query : {
        loginUser,
        getAllRestaurants,
        searchRestaurant
    },
    Mutation : {
        createUser,
        addRestaurant
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context : ({req,res}) => {
        return {
            req,res
        }
    }
});

const app = express();

app.use(cors());

const PORT = 4001;

server.applyMiddleware({ app });

mongoose.connect('mongodb://localhost:27017/foodmonster',{ useNewUrlParser : true });

mongoose.connection.on('error',err => {
    console.log(`Error in mongoose connection ${err}`);
});

mongoose.connection.on('connected',() => {
    console.log("Mongoose connected successfully");


    app.listen(PORT, () => {
        console.log(`server listening in port ${PORT}`);
    });
        
})






