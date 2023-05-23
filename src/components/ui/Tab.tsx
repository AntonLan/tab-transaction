import { FC } from 'react'
import { tabs } from '@/constants/tabs'
import { useNavigateParams } from '@/hooks/useNavigateParams'
import Utils from '@/utils/Utils'
import { useSearchParams } from 'react-router-dom'

interface TabProps {
	title: string
}

const Tab: FC<TabProps> = ({ title }) => {
	const navigation = useNavigateParams()
	const [searchParams] = useSearchParams()

	const handleClick = () => {
		let index = String(tabs.indexOf(title))
		navigation('/navigator', { tab: index })
	}


	return (
		<li className='mr-2 cursor-pointer'>
			<div
				onClick={handleClick}
				className={Utils.checkActiveTab(Number(searchParams.get('tab')), title)}>
				{title}
			</div>
		</li>
	)
}

export default Tab