import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface AuthenticatedRequest extends Request {
  user?: any;
}

const authenticateToken = (roles: string[] = []) => {
  return (
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
  ): void => {
    const token = req.header("Authorization")?.split(" ")[1];

    if (!token) {
      res.status(401).json({ message: "Access denied. No token provided." });
      return;
    }

    jwt.verify(
      token,
      process.env.JWT_SECRET as string,
      (err: jwt.VerifyErrors | null, user: any) => {
        if (err) {
          res.status(403).json({ message: "Invalid or expired token." });
          return;
        }

        if (roles.length && !roles.includes(user.role)) {
          res
            .status(403)
            .json({ message: "Access denied. Insufficient permissions." });
          return;
        }

        req.user = user;
        next();
      }
    );
  };
};

export default authenticateToken;
