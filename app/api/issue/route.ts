import  { connectToDB }  from "@/lib/mongoDB";
import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server"
import Issue from "../../../lib/model/Issue";

export const POST = async(req: NextRequest) => {
    try {
        // const { userId } = auth();

        // if(!userId){
        //     return new NextResponse("Unauthorized", { status: 403 })
        // }

        await connectToDB()

        const {  name, email, number, message } = await req.json()

        // const existingGetEstimate = await Issue.findOne({ email })

        // if(existingGetEstimate){
        //     return new NextResponse("Issue already exists", {status: 400})
        // }

        if(!name || !email || !number || !message  ){
            return new NextResponse("Required", {status: 400 })
        }

        const newIssue = await Issue.create({
            name, email, number, message,
        })

        await newIssue.save()
        return NextResponse.json(newIssue, {status: 200 })

    } catch (err) {
        console.log("[issue_POST]", err);
        return new NextResponse("Internal Server Error", {status: 500})
    }
}