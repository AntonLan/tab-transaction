import { ButtonHTMLAttributes, FC } from 'react'

interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string
}

const MyButton: FC<MyButtonProps> = ({ text, ...props }) => {
	return (
		<button
			className='text-center rounded w-fit min-w-[150px] py-2 text-white bg-blue-500 px-2.5 hover:bg-blue-700'
			{...props}>
			{text}
		</button>
	)
}

export default MyButton