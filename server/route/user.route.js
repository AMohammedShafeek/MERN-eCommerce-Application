import { Router } from 'express';

// import all controllers
import { registerUserController } from '../controllers/user.controller.js';

const userRouter = Router();

// Add routes
userRouter.post('/register', registerUserController)

export default userRouter
