import { FC } from 'react'

const TableHead: FC = () => {
	return (
		<thead className='text-xs text-gray-700 border-b'>
		<tr>
			<th scope='col' className='px-14 py-3'>
				Name
			</th>
			<th scope='col' className='px-14 py-3'>
				Amount
			</th>
		</tr>
		</thead>
	)
}

export default TableHead