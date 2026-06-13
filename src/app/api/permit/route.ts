import { NextRequest } from "next/server";
import { ai } from "../../lib/gemini";

type PermitRequest = {
  citizenship: string;
  destination: string;
  level?: string;
  duration?: string;
};

console.log(process.env.GOOGLE_GENAI_API_KEY)
console.log(process.env.JWT_SECRET)

export async function POST(req: NextRequest) {
  try {
    const {
      citizenship,
      destination,
      level,
      duration,
    }: PermitRequest = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `
Generate student permit guidance.

Citizenship: ${citizenship}
Destination: ${destination}
Study level: ${level ?? "Not provided"}
Duration: ${duration ?? "Not provided"}

Return concise JSON.
      `,
    });

    return Response.json({
      success: true,
      text: response.text,
    });
  } catch (err) {
    console.error(err);

    return Response.json(
      {
        success: false,
        error: "Failed to generate permit path",
      },
      { status: 500 }
    );
  }
}