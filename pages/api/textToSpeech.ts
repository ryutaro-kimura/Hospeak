import { NextApiHandler } from "next"

const handler: NextApiHandler = async (req, res) => {
  const keyText = process.env.SUBSCRIPTION_KEY;
  const regionText = process.env.SERVICE_REGION;
  const obj = {key: keyText, region: regionText}
  res.send(obj);
  console.log('textToSpeech OK');
}

export default handler