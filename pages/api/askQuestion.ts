import { adminDb } from "@/firebaseAdmin";
import query from "@/lib/queryApi";
import { NextApiRequest, NextApiResponse } from "next";
import admin from "firebase-admin";


type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;

  // const answer = getAnswer(question);

  if (!prompt || !chatId || !model || !session) {
    return res.status(400).json({ answer: "Missing parameters" });
  }

  const reaponse = await query(prompt, chatId, model);

  const message: Message = {
    text: reaponse || "ChatGpt was unable to find your answer",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
        _id: "chatgpt",
        name: "ChatGpt",
        avatar: "https://ui-avatars.com/api/?name=chatgpt",
    }
  };

  await adminDb.collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);


  res.status(200).json({ answer: message.text });
}
