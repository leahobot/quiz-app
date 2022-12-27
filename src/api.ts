import { shuffleArray } from "./utils";

export interface Question {
	category: string;
	correctAnswer: string;
	difficulty: string;
	incorrectAnswers: string[];
	question: string;
	type: string;
}

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
	EASY = "easy",
	MEDIUM = "medium",
	HARD = "hard",
}

export const fetchQuestions = async (
	amount: number,
	difficulty: Difficulty,
): Promise<QuestionState[]> => {
	const endpoint = `${process.env.REACT_APP_API_URL}&limit=${amount}&region=NG&difficulty=${difficulty}&tags=africa,1990's,people,food,general_knowledge,food_and_drink,comics&type=multiple`;
	const data = await (await fetch(endpoint)).json();
	return data.map((question: Question) => ({
		...question,
		answers: shuffleArray([
			question.correctAnswer,
			...question.incorrectAnswers,
		]),
	}));
};
