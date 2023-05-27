import openai from "./chatgpt";

const query = async (prompt: string, chatId: string, model: string) => {
  const response = await openai
    .createCompletion({
      model: model,
      prompt: prompt,
      max_tokens: 400,
      temperature: 0.9,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    })
    .then((response) => {
      return response.data.choices[0].text;
    })
    .catch((err) => {
      console.log(err);
      return `ChatGpt was unable to find your answer ${err.message}`;
    });

    return response;

    // try {
    //     return response.data.choices[0].text;
    // } catch (err) {
    //     console.log(err);
    //     return `ChatGpt was unable to find your answer ${err.message}`;
    // }
};

export default query;
