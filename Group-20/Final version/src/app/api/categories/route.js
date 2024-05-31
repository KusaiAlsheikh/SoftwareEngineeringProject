import {isAdmin} from "@/app/api/auth/[...nextauth]/route";
import categories from "../../../../public/db/categories.json";


export async function POST(req) {
}

export async function PUT(req) {

}

export async function GET() {
  return Response.json(
    categories
  );
}

export async function DELETE(req) {

}