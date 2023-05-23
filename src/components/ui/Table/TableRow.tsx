import { FC } from 'react'

interface TableRowProps {
	name: string
	amount: number
}

const TableRow: FC<TableRowProps> = ({name, amount}) => {
	return (
		<tr className='bg-white border-b text-black font-medium'>
			<th scope='row' className='py-3 font-medium'>
				{name}
			</th>
			<th scope='row' className='py-3 font-medium'>
				{amount}
			</th>
		</tr>
	)
}

export default TableRow