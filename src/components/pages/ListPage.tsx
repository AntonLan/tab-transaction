import { FC } from 'react'
import TabsBar from '@/components/ui/TabsBar'
import TabContent from '@/components/TabContent'

const ListPage: FC = () => {
	return (
		<div className='w-full mt-2'>
			<TabsBar />
			<TabContent />
		</div>
	)
}

export default ListPage