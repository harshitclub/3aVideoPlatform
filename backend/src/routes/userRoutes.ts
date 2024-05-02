import express from "express";
import {
  bulkUserSignup,
  sendForgetMail,
  sendGeneratePassMail,
  userForgetPassword,
  userGeneratePassword,
  userLogin,
  userLogout,
  userProfile,
  userSignup,
  userUpdatePassword,
} from "../controllers/uesrController";
import { authCheck } from "../middlewares/auth";

const userRouter = express.Router();

userRouter.post("/bulk", bulkUserSignup);
userRouter.post("/signup", userSignup);
userRouter.post("/login", userLogin);
userRouter.patch("/send-generate-password-mail", sendGeneratePassMail);
userRouter.patch("/set-password/:token", userGeneratePassword);
userRouter.get("/profile", authCheck, userProfile);
userRouter.patch("/forget-mail", sendForgetMail);
userRouter.patch("/forget-password/:token", userForgetPassword);
userRouter.patch("/change-password", authCheck, userUpdatePassword);
userRouter.get("/logout", userLogout);

export default userRouter;
