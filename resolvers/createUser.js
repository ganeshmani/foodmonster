import UserModel from '../models/User';


export default async(parent,args,context) => {

    console.log("args",args);

    //args.request.data.name

    let userInfo = {
        name : args.request.data.name,
        email : args.request.data.email,
        password : args.request.data.password
    }

    let user = await UserModel.getUserByEmail(userInfo.email);

    if(!user) {

        let userCollection  = await UserModel.createUser(userInfo);

        return {
            success : true,
            data : { 
                name :  userCollection.name, 
                email : userCollection.email 
            }
        }

    }

    else{
        return {
            success : false,
            data : null
        }

    }
}