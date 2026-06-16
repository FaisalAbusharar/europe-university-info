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

  config: {
    responseMimeType: "application/json",
  },

  contents: `
Generate student permit guidance.

Return ONLY valid JSON.

Generate information specifically for:
Citizenship: ${citizenship}
Destination: ${destination}

Rules:
- Be concise.
- Explain for international students.
- Mention when information varies.
- Do not include markdown fences.
- Return plain text fields.

Format:

{
  "generalRequirements": "",
  "permitRequired": true,

  "documents": "",

  "financialRequirements": "",

  "insuranceRequirements": "",

  "processingTime": "",

  "workRights": "",

  "stayRules": "",

  "postStudyOptions": "",

  "guidanceSite": "",

  "notes": ""
}
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