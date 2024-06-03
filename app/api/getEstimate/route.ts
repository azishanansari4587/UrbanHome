
import GetEstimate from "@/lib/model/GetEstimate";
import { connectToDB } from "@/lib/mongoDB";
// import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server"


export const POST = async(req: NextRequest) => {
    try {
        // const { userId } = auth();

        // if(!userId){
        //     return new NextResponse("Unauthorized", { status: 403 })
        // }

        await connectToDB()

        const {  name, email, number, floor, bhk, message } = await req.json()

        // const existingGetEstimate = await Estimate.findOne({ email })

        // if(existingGetEstimate){
        //     return new NextResponse("Estimated already exists", {status: 400})
        // }

        if(! name || !email || !number || !floor || !bhk ){
            return new NextResponse(" Required", {status: 400 })
        }

        const newEstimate = await GetEstimate.create({
            name, email, number, floor, bhk, message,
        })

        await newEstimate.save()

        return NextResponse.json(newEstimate, {status: 200 })

    } catch (err) {
        console.log("[estimate_POST]", err);
        return new NextResponse("Internal Server Error", {status: 500})
        
    }
}


