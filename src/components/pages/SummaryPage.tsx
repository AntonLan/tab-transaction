import { FC } from 'react'
import HeaderCard from '@/components/HeaderCard'
import Card from '@/components/Card'
import { useData } from '@/hooks/useData'
import { tabs } from '@/constants/tabs'
import Utils from '@/utils/Utils'

const SummaryPage: FC = () => {
	const { data } = useData()


	return (
		<>
			<HeaderCard
			count={data?.total} />
			<div className='mx-auto grid grid-cols-2 gap-2 mt-2'>
				{tabs.map(card => (
					<Card
						count={Utils.getTotalTransaction(data?.data, card)}
						key={card}
						title={card}
					/>
				))}
			</div>
		</>
	)
}

export default SummaryPage