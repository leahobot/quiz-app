import styled, { createGlobalStyle } from "styled-components";
import bg_image from "./images/country-side.jpg";

export const GlobalStyle = createGlobalStyle`
    html{
        height: 100%;
    }

    body{
        background-image: url(${bg_image});
        background-size: cover;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
    }

    *{
        box-sizing: border-box;
    }
`;

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	.score {
		color: white;
		font-size: 1.4rem;
		margin-bottom: 0.5rem;
	}

	h1 {
		// background-image: linear-gradient(180deg, #cdad78, #6d6a04);
		// background-size: 100%;
		// background-clip: text;
		// --webkit-background-clip: text;
		// --webkit-text-fill-color: transparent;
		// --moz-background-clip: text;
		// --mos-text-fill-color: transparent;
		// filter: drop-shadow(2px, 2px, #008583);
		font-size: 4.7rem;
		font-weight: 600;
		text-align: center;
		margin: 15px 0 5px 0;
		color: white;
	}

	.start,
	.next {
		cursor: pointer;
		background: linear-gradient(180deg, #cdad78, #6d6a04);
		border: 2px solid #6d6a04;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
		border-radius: 10px;
		height: 40px;
		margin: 20px 0;
		padding: 0 40px;
		color: white;
	}

	.start {
		max-width: 200px;
	}
`;
