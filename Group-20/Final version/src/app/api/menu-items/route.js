import {isAdmin} from "@/app/api/auth/[...nextauth]/route";

import menuitems from "../../../../public/db/menuitems.json";

export async function POST(req) {

}

export async function PUT(req) {

}

export async function GET() {
  return Response.json(
    menuitems
  );
}

export async function DELETE(req) {

}