import { FC } from 'react'
import HandsomeCard from './HandsomeCard'
import Cards from './HandsomeData'
import { CardsContainer } from './style'

const HandsomesCard: FC = () => {
	return (
		<CardsContainer>
			<div className='cards-content'>
				{/* <p className='careers'>Careers</p> */}
				<h2 className='our-team'>Our team</h2>
				<div className='cards-grid-container'>
					{
						Cards.map(({ name, image }, index) =>
							<HandsomeCard key={`handsomecard_${index}`} name={name} image={image} />
						)
					}
				</div>

			</div>
		</CardsContainer>
	)
}

export default HandsomesCard