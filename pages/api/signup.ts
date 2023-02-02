import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../lib/prisma";
import jwt from "jsonwebtoken";
import cookie from "cookie";

export default async function (req: NextApiRequest, res: NextApiResponse) {

    const { email, password } = req.body;
    let user;

    try {
        user = await prisma.user.create({
            data: {
                email,
                password
            }
        })
    } catch(e) {
        res.send(401);
        res.json({ error: "User already exits"});
        return;
    }

    const token = jwt.sign({
        email: user.email,
        id: user.id,
        time: Date.now()
    }, 
    "hello",
    { expiresIn: "8h" });

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("StreamMux", token, {
            httpOnly: true,
            maxAge: 8*60*60,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production"
        }),
    );

    res.json(user);
}