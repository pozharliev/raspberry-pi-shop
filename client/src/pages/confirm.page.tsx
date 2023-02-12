import { ConfirmPageContainer, Heading, Text } from "@app/styles/confirm.style";
import { CheckMark } from "@app/components/common/svg";
import { MEDIUM, SMALL } from "@app/const";

const ConfirmPage: React.FC = (): JSX.Element => {
	return (
		<ConfirmPageContainer>
			<CheckMark
				initial={{ width: 197, height: 197 }}
				breakpoints={{ [MEDIUM]: { width: 150, height: 150 }, [SMALL]: { width: 125, height: 125 } }}
			/>
			<Heading> You are all set!</Heading>
			<Text>
				{" "}
				Thanks for using our services, <br /> we hope you enjoy your purchase!{" "}
			</Text>
		</ConfirmPageContainer>
	);
};

export default ConfirmPage;
