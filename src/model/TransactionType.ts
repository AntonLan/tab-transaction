import { NameType } from '@/model/NameType'
import { TransactionStatusType } from '@/model/TransactionStatusType'

export type TransactionType = {
	_id: string,
	amount: number,
	type: TransactionStatusType,
	name: NameType,
	company: string,
	email: string,
	phone: string,
	address: string

}