export default `

  input createUserInputData {
     name : String!
     email : String!
     password : String!        
  }


  input createUserInput {
      data : createUserInputData
  }

  input loginUserData {
     email : String!
     password : String!
  }

  input loginUserInput {
      data : loginUserData
  }

  type userData {
      name : String!
      email : String!
  }

  type loginUserResponse {
    success : Boolean  
    data : userData
}

  type createdUserResponse{
      success : Boolean!
      data : userData
  }
`