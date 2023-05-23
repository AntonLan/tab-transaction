import { FC } from 'react'
import MyButton from '@/components/ui/MyButton'
import { useNavigateParams } from '@/hooks/useNavigateParams'

interface HeaderCardProps {
	count?: number
}

const HeaderCard: FC<HeaderCardProps> = ({count}) => {
	const navigation = useNavigateParams()

	const handleClick = () => {
		navigation('/navigator', {tab: '0'})
	}


	return (
		<div className='w-full border-2 border-gray-300'>
			<div className='h-[50px] bg-gray-200 border-b-2 border-gray-300'/>
			<div className='flex flex-col items-center justify-center my-[20px] gap-5'>
				<h1 className='font-bold text-[24px] pr-[200px]'>
					Welcome
				</h1>
				<p className='text-[18px]'>
					With supporting text below as a natural lead-in to additional content.
				</p>
				<MyButton
					onClick={handleClick}
					text='See transactions'/>
			</div>
			<div className='h-[50px] flex items-center justify-center bg-gray-200 border-t-2 border-gray-300'>
				<p>You have {count} transaction</p>
			</div>
		</div>
	)
}

export default HeaderCard