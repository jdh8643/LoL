import { getChampionRotation } from "@/app/utils/rotate";
import { NextResponse } from "next/server";

// GET 요청에 대한 처리
export async function GET() {
  try {
    const rotation = await getChampionRotation();
    return NextResponse.json(rotation); // JSON 형태로 응답
  } catch (error) {
    console.error("Internal Server Error:", error);
    return NextResponse.json(
      { error: "챔피언 정보를 가지고 오는데 실패 했어요!" },
      { status: 500 }
    );
  }
}
