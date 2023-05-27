import { Configuration, OpenAIApi } from "openai";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const congifuration = new Configuration({
    apiKey: OPENAI_API_KEY,
});

const openai = new OpenAIApi(congifuration);

export default openai;