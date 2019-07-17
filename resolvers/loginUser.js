import UserModel from '../models/User';

export default async(parent,args,context) => {

    try {

        let userInfo = {
            email : args.request.data.email,
            password : args.request.data.password
        }
    
        let userCollection = await UserModel.getUserByEmail(userInfo.email);
        // console.log("userCollection",userCollection);
        if(userCollection){
           
            if(UserModel.validatePassword(userCollection,userInfo.password)){
    
                return {
                    success : true,
                    data : userCollection,
                    error : null
                }
    
            }
            else{
    
                return {
                    success : false,
                    data : null,
                    error : {
                        message : "Invalid Credentials",
                        status : 400
                    }
                }
    
            }
    
        }
        else{
    
            return {
                success : false,
                data : null,
                error : {
                    message : "User Not Found",
                    status : 404
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