import { createContext, ReactNode, useEffect, useState } from 'react'
import { DataType } from '@/model/DataType'
import TransactionService from '@/service/TransactionService'

interface IProps {
	children: ReactNode
}

export interface DataContextInterface {
	data: DataType | undefined
}

export const dataContextDefaults: DataContextInterface = {
	data: undefined
}


export const DataContext = createContext<DataContextInterface>(dataContextDefaults)

export function DataContextProvider({ children }: IProps) {
	const [data, setData] = useState<DataType>()

	useEffect(() => {
		const fetching = async () => {
			try {
				let res = await TransactionService.getData()
				setData(res)
			} catch (error) {
				console.log(error)
			}
		}
		fetching()
	},[])

	return (
		<DataContext.Provider value={{ data }}>
			{children}
		</DataContext.Provider>
	)
}