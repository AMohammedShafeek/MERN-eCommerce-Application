import jwt from "jsonwebtoken";

const auth = async (request, response, next) => {
  try {
    const token = request.cookies.accessToken || request?.headers?.authorization?.split(" ")[1]

    // if(!token){
    //     token = request.query.token
    // }

    if(!token){
        return response.status(401).json({
            msg: 'provide Token'
        })
    }

    const decode = await jwt.verify(token,process.env.SECRET_KEY_ACCESS_TOKEN)

    if(!decode){
        return response.status(401).json({
            error: true,
            success: false,
            message: 'Unauthorized Access'      
        })
    }

    request.userId = decode.id

    next()

  } catch (error) {
    return response.status(500).json({
      error: true,
      success: false,
      message: "You have not Login",
    });
  }
};

export default auth