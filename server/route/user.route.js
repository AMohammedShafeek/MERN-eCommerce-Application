import { Router } from 'express';

// import all controllers
import { registerUserController, verifyEmailController } from '../controllers/user.controller.js';

const userRouter = Router();

// Add routes
userRouter.post('/register', registerUserController)
userRouter.post('/verifyEmail', verifyEmailController)

export default userRouter
