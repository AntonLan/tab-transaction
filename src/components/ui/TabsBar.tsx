import { FC } from 'react'
import Tab from '@/components/ui/Tab'
import { tabs } from '@/constants/tabs'

const TabsBar: FC = () => {
	return (
		<ul className='flex flex-wrap justify-center text-sm font-medium text-center text-black border-b border-gray-300'>
			{tabs.map(t => (
				<Tab key={t} title={t} />
			))}
		</ul>
	)
}

export default TabsBar