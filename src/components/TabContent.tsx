import { FC } from 'react'
import MyTable from '@/components/ui/Table/MyTable'
import { useSearchParams } from 'react-router-dom'
import { tabs } from '@/constants/tabs'
import { useData } from '@/hooks/useData'
import { useFilter } from '@/hooks/useFillter'

const TabContent: FC = () => {
	const {data} = useData()
	const [searchParams] = useSearchParams()
	const {rows} = useFilter(tabs[Number(searchParams.get('tab'))], data?.data)



	return (
		<>
			<MyTable
				rows={rows}
			/>
		</>
	)
}

export default TabContent