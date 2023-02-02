import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";
import cookie from "cookie";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {

    const { email, password } = req.body;

    let user;
    
    user = await prisma.user.findUnique({
        where: {
            email
        }
    });

    if(user && password == user.password) {
        const token = jwt.sign({
            id: user.id,
            email: user.email,
            time: Date.now(),

        }, "hello", {
            expiresIn: "8h"
        })

        res.setHeader("Set-Cookie", cookie.serialize("StreamMux", token, {
            httpOnly: true,
            maxAge: 8*60*60,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        }));
        
        res.send(user)
    } else {
        res.status(401);
        res.json({ error: "Error! Email or password is wrong."});
    }

}