import { analyze } from "@/utils/ai";
import { getUserByClerkId } from "@/utils/auth";
import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export const POST = async () => {
	const user = getUserByClerkId();
	const entry = await prisma.journalEntry.create({
		data: {
			userId: (await user).id,
			content: "Write about your day!",
		},
	});

	const analysis = await analyze(entry.content);
	await prisma.analysis.create({
		data: {
			entryId: entry.id,
			...analysis,
		},
	});
	return NextResponse.json({ data: entry });
};
