import tickets from "@/app/database";
import { NextResponse } from "next/server";

export async function GET(_: Request, {params}: {params: Promise<{id: string}>}) {

    const {id} = await params;

    if(!id) return NextResponse.json({error: "Ticket id is request"});

    const parseId = Number(id);
    if(Number.isNaN(parseId)) {
        return NextResponse.json({error: "Ticket id must be a number"})
    };

    const ticket = tickets.find((ticket) => ticket.id === parseId);
    if(!ticket) return NextResponse.json({error: "Ticket not found"});

    return NextResponse.json(ticket);

}