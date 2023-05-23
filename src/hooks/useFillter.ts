import { useEffect, useState } from 'react'
import { TransactionType } from '@/model/TransactionType'

export const useFilter = (tab: string, transactions?: TransactionType[]) => {
	const [rows, setRows] = useState<TransactionType[]>([])


	useEffect(() => {
		const getRowsData = () => {
			let filterArray = transactions?.filter(e => e.type === tab )
			if (filterArray) {
				setRows(filterArray)
			}
		}
		getRowsData()
	}, [tab])


	return { rows }
}