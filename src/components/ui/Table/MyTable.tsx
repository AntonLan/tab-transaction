import { FC } from 'react'
import TableHead from '@/components/ui/Table/TableHead'
import TableRow from '@/components/ui/Table/TableRow'
import { TransactionType } from '@/model/TransactionType'

interface MyTableProps {
	rows: TransactionType[]
}

const MyTable: FC<MyTableProps> = ({rows}) => {
	return (
		<div>
			<table className='w-[400px] text-sm text-center text-black mx-auto'>
				<TableHead />
				<tbody>
				{rows?.map(r => (
					<TableRow
						key={r._id}
						name={r.name.first}
						amount={r.amount}
					/>
				))}
				</tbody>
			</table>
		</div>
	)
}

export default MyTable