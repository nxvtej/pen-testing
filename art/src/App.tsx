/** @format */

import { useState } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import "./App.css";
import axios from "axios";

function App() {
	const [token, setToken] = useState<string>("");

	return (
		<>
			<input type='text' placeholder='OTP' />
			<input type='text' placeholder='new password' />

			{/* backend verfies this
      buti dont have webstie runnign */}
			<Turnstile
				onSuccess={(token) => {
					setToken(token);
				}}
				siteKey='0x4AAAAAAAXtEe2JIeAEUcjX'
			/>

			<button
				onClick={() => {
					axios.post("http://localhost:3000/reset-password", {
						email: "harkirat@gmail.com",
						otp: "123456",
						token: token,
					});
				}}>
				Update password
			</button>
		</>
	);
}

export default App;
