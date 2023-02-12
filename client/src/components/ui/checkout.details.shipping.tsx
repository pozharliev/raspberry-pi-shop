import { useEffect, useState } from "react";
import { Button, CheckoutDetailsInputContainer, Input, Error } from "@app/styles/checkout.style";
import { ICheckoutShipping } from "@app/services/checkout.service";

const CheckoutDetailsShipping = ({
	onClick,
	onChange,
	error,
}: {
	onClick: () => void;
	onChange: (data: ICheckoutShipping) => void;
	error: string;
}): JSX.Element => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [country, setCountry] = useState("");
	const [city, setCity] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");

	useEffect(() => {
		onChange({ name, email, country, city, address, phone });
	}, [name, email, country, city, address, phone]);

	return (
		<>
			<CheckoutDetailsInputContainer>
				<Input
					big={false}
					type="text"
					placeholder="Full Name"
					autoComplete="name"
					value={name}
					onChange={e => setName(e.target.value)}
				/>

				<Input
					big={false}
					type="text"
					placeholder="Email"
					autoComplete="email"
					value={email}
					onChange={e => setEmail(e.target.value)}
				/>
			</CheckoutDetailsInputContainer>

			<CheckoutDetailsInputContainer>
				<Input
					big={false}
					type="text"
					placeholder="Country"
					autoComplete="country-name"
					value={country}
					onChange={e => setCountry(e.target.value)}
				/>

				<Input
					big={false}
					type="text"
					placeholder="City"
					autoComplete="city"
					value={city}
					onChange={e => setCity(e.target.value)}
				/>
			</CheckoutDetailsInputContainer>

			<Input
				big={true}
				type="text"
				placeholder="Address"
				autoComplete="street-address"
				value={address}
				onChange={e => setAddress(e.target.value)}
			/>

			<Input big={true} type="text" placeholder="Phone" autoComplete="tel" value={phone} onChange={e => setPhone(e.target.value)} />

			{error !== "" ? <Error> {error} </Error> : null}

			<Button onClick={() => onClick()}> Continue </Button>
		</>
	);
};

export default CheckoutDetailsShipping;
