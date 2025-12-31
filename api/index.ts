import { callModel } from '../src/api';
import { addCorsHeaders } from '../src/utils';

interface IRequestBody {
	techStack: string[];
	goldCircleWhy: string[];
	goldCircleHow: string[];
	goldCircleWhat: string[];
}

export default async function handler(req, res) {
	const allowOrigin = process.env.ALLOW_ORIGIN || '*';
	res.setHeader('Access-Control-Allow-Origin', allowOrigin);
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

	if (req.method === 'OPTIONS') {
		return res.status(200).end();
	}

	await new Promise((resolve) => setTimeout(resolve, 3000));

	const data: IRequestBody = req.body;

	let content = '';
	content += `Tech Stack: ${data.techStack.join(', ')}\n\n`;
	content += `Why: ${data.goldCircleWhy.join(', ')}\n\n`;
	content += `How: ${data.goldCircleHow.join(', ')}\n\n`;
	content += `What: ${data.goldCircleWhat.join(', ')}`;

	const modelResponse = await callModel({ apiKey: process.env.API_KEY, content });
	res.status(200).json(modelResponse);
}