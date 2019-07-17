import UserModel from '../models/User';


export default async(parent,args,context) => {

    //args.request.data.name

    try{

        let userInfo = {
            name : args.request.data.name,
            email : args.request.data.email,
            password : args.request.data.password,
            lat : args.request.data.lat,
            long : args.request.data.long
        }
    
        let user = await UserModel.getUserByEmail(userInfo.email);
        
        if(!user) {
            
            let userCollection  = await UserModel.createUser(userInfo);
    
            return {
                success : true,
                data : { 
                    name :  userCollection.name, 
                    email : userCollection.email 
                },
                error : null
            }
    
        }
    
        else{
            return {
                success : false,
                data : null,
                error : {
                    message : "User Already Exists",
                    status : 400
                }
            }
    
        }
        
    }
    catch(e){

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