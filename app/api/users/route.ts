import User from "@/lib/model/User";
import { connectToDB } from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
    try {
        const { userId } = auth()

        if(!userId){
           return new NextResponse("Unauthorized", {status : 401})
        }

        await connectToDB();

        let user = await User.findOne({ clerkId: userId})

        if (!user) {
            user = await User.create({clerkId: userId})
            await user.save();
        }

        return NextResponse.json(user, {status: 200 })

    } catch (err) {
        console.log("[user_GET]", err);
        return new NextResponse("Internal Server Error", { status : 500})
    }
}


export const dynamic = "force-dynamic";