import { NextRequest } from "next/server";
import { ai } from "../../lib/gemini";

type PermitRequest = {
  citizenship: string;
  destination: string;
};

export async function POST(req: NextRequest) {
  try {
    const {
      citizenship,
      destination,
    }: PermitRequest = await req.json();

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",

      contents: `
Generate student permit guidance.

Return ONLY valid JSON.
 
DO NOT INCLUDE any text outside of the JSON object, nor the markdown fences.

Format:
{
  "guidancePath": "",
  "permitRequired": true,
  "documents": [],
  "financialRequirements": "",
  "workRights": ""
}

Citizenship: ${citizenship}
Destination: ${destination}
`,
    });

    const text = response.text ?? "";

    const cleaned = text
  .trim()
  .replace(/```json|```/gi, "")
  .trim();


    const parsed = JSON.parse(cleaned);

    return Response.json({
      success: true,
      data: parsed,
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