import { FC } from 'react'
// Component
import Link from 'next/link'
import AddRental from '../index'
import Button from '@components/block/Button';

import {
	MainTittle,
	SubContainer,
	SubTittle,
} from './style'

interface IAddRentalHomeProps { }
const AddRentalHome: FC<IAddRentalHomeProps> = () => {
	return (
		<AddRental>
			<MainTittle>
				Institutional quality management for all
			</MainTittle>
			<SubContainer>
				<SubTittle>
					Condoo leverages technology
					to empower our team of professional managers,
					maintenance technicians, and leasing agents for
					condo landlords with as few as one unit.
				</SubTittle>
			</SubContainer>
			<Link href={'signup'}>
				<Button width={159} height={44}>Get Started</Button>
			</Link>
		</AddRental>
	)
}

export default AddRentalHome