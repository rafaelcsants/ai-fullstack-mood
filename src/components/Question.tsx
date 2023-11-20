"use client";

import { askQuestion } from "@/utils/api";
import { useState } from "react";

const Question = () => {
	const [value, setValue] = useState("");
	const [loading, setLoading] = useState(false);
	const [response, setResponse] = useState();

	const onChange = (e) => {
		setValue(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		const answer = await askQuestion(value);
		setResponse(answer);
		setValue("");
		setLoading(false);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div className="flex items-center gap-2">
					<input
						disabled={loading}
						onChange={onChange}
						type="text"
						value={value}
						placeholder="Ask a question"
						className="border border-black/20 px-4 py-2 text-lg rounded-lg"
					/>
					<button
						type="submit"
						disabled={loading}
						className="bg-blue-400 px-4 py-2 rounded-lg text-lg hover:bg-zinc-200"
					>
						Ask
					</button>
				</div>
			</form>
			{loading && <div>...Loading</div>}
			{response && <div>{response}</div>}
		</div>
	);
};

export default Question;
