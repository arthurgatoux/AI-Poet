"use server"

import { ChatPromptTemplate } from "@langchain/core/prompts";
import { ChatOpenAI } from "@langchain/openai";
import { StringOutputParser } from "@langchain/core/output_parsers";

const model = new ChatOpenAI({
    model: "gpt-3.5-turbo",
    temperature: 0.7,
});

const prompt = ChatPromptTemplate.fromMessages([
    ["system", "You are a talented poet."],
    ["human", "Write a very short poem. :{topic}"]
]);

const outputParser = new StringOutputParser();

const chain = prompt.pipe(model).pipe(outputParser);

export async function generatePoem(topic : string) {
    const poem = await chain.invoke({topic});
    return poem;
}