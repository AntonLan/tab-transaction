import { FC } from 'react'
import MyButton from '@/components/ui/MyButton'
import { useNavigateParams } from '@/hooks/useNavigateParams'
import { tabs } from '@/constants/tabs'

interface CardProps {
	title: string
	count?: number
}

const Card: FC<CardProps> = ({ title, count }) => {
	const navigation = useNavigateParams()


	const handleClick = () => {
		let index = String(tabs.indexOf(title))
		navigation('/navigator', { tab: index })
	}


	return (
		<div className='max-w-[720px] border-2 border-gray-300 h-[200px] flex
		flex-col px-[15px] py-[20px] gap-6'>
			<h1 className='font-bold'>{count}</h1>
			<p>{title}</p>
			<div className='flex justify-end mt-10'>
				<MyButton
					onClick={handleClick}
					text='See all' />
			</div>
		</div>
	)
}

export default Card