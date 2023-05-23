import { tabs } from '@/constants/tabs'
import { TransactionType } from '@/model/TransactionType'

class Utils {

	getTotalTransaction = (arr?: TransactionType[], title?: string): number => {
		let buffer = 0
		let filterArray = arr?.filter(e => e.type === title)
		if (filterArray) {
			for (let i = 0; i < filterArray.length; i++) {
				buffer += Number(filterArray[i].amount)
			}
		}
		return buffer
	}

	checkActiveTab = (active: number, title: string): string => {
		if (tabs[active] === title) {
			return 'inline-block p-4 text-black border-2 bg-gray-200 border-b-0 rounded-t-lg'
		}
		return 'inline-block p-4 text-black border-2 border-b-0 rounded-t-lg'
	}


}

export default new Utils()