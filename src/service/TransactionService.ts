class TransactionService {

	static getData = async () => {
		let res = await fetch('data.json')
		return res.json()
	}

}

export default TransactionService