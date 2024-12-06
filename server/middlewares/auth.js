import jwt from 'jsonwebtoken'

// Middleware Function to decode jwt token to get clerkId
const authUser = async(req, res, next) => {
    try {
        
    } catch (error) {
        console.log(error.message)
        res.json({success:false, message:error.message})
    }
}

export default authUser