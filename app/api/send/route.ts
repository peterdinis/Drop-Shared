import { NextResponse } from "next/server";
import {Resend} from "resend";

export async function GET() {
    const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY as unknown as string);

    const {data} = await resend.emails.send({
        from: "",
        to: "",
        subject: "",
        html: ""
    });

    return NextResponse.json({data});

}