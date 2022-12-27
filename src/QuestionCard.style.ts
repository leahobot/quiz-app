import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 1100px;
	background-color: white;
	border-radius: 10px;
	border: 1px solid #f8cf8d;
	padding: 10px 20px;
	box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
	text-align: center;
	font-size: 1.1rem;
`;

interface ButtonWrapperProps {
	correct: boolean;
	userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
	transition: all 0.3s ease;

	:hover {
		opacity: 0.6;
	}

	button {
		cursor: pointer;
		user-select: none;
		width: 100%;
		height: 35px;
		margin: 5px 0;
		background: ${({ correct, userClicked }) =>
			correct
				? "linear-gradient(90deg, #56ff84, #59bc86)"
				: !correct && userClicked
				? "linear-gradient(90deg, #57ff84, #59bc66)"
				: "linear-gradient(90deg, #56cc84, #59bse6)"};

		border: 2px solid #dbb988;
		box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
	}
`;
