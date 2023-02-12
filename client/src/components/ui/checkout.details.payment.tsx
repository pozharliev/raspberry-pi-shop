import { useEffect, useState } from "react";
import { Button, CheckoutDetailsInputContainer, Input, Error } from "@app/styles/checkout.style";
import { ICheckoutPayment } from "@app/services/checkout.service";

const CheckoutDetailsPayment = ({ onClick, onChange, error }: { onClick: () => void, onChange: (data: ICheckoutPayment) => void, error: string }): JSX.Element => {
	const [cardNumber, setCardNumber] = useState("");
	const [startDate, setStartDate] = useState("");
	const [endDate, setEndDate] = useState("");
	const [cvv, setCvv] = useState("");
	const [name, setName] = useState("");

	useEffect(() => {
		onChange({ cardNumber, startDate, endDate, cvv, name });
	}, [cardNumber, startDate, endDate, cvv, name]);

	return (
		<>
			<Input
				big={true}
				type="text"
				placeholder="Card Number"
				autoComplete="cc-number"
				value={cardNumber}
				onChange={(e) => setCardNumber(e.target.value)} />

			<CheckoutDetailsInputContainer>
				<Input
					big={false}
					type="text"
					placeholder="Start Date"
					value={startDate}
					onChange={(e) => setStartDate(e.target.value)} />

				<Input
					big={false}
					type="text"
					placeholder="Start Date"
					autoComplete="cc-exp"
					value={endDate}
					onChange={(e) => setEndDate(e.target.value)} />
			</CheckoutDetailsInputContainer>

			<CheckoutDetailsInputContainer>
				<Input
					big={false}
					type="text"
					placeholder="CVV"
					autoComplete="cc-csc"
					value={cvv}
					onChange={(e) => setCvv(e.target.value)} />

				<Input
					big={false}
					type="text"
					placeholder="Name"
					autoComplete="name"
					value={name}
					onChange={(e) => setName(e.target.value)} />
			</CheckoutDetailsInputContainer>

			{
				error !== "" ?
					<Error> {error} </Error> :
					null
			}

			<Button onClick={() => onClick()}> Check Out </Button>
		</>
	);
};

export default CheckoutDetailsPayment;
