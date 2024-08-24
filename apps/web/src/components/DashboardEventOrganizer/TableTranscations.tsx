export default function TableTransactions () {
    return (
        <div className="pt-5">
            <div className="p-5 border border-solid border-white rounded-md">
                        <table className="w-full">
                            <thead className="bg-third border-b-2 border-gray-100">
                                <tr className="text-secondary">
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">No</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Id Transaction</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Total</th>
                                    <th className="p-3 text-sm font-semibold tracking-wide text-left">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-secondary">
                                    <td className="p-3 text-primary font-normal text-sm">1</td>
                                    <td className="p-3 text-primary font-normal text-sm truncate">Id Transaction</td>
                                    <td className="p-3 text-primary font-normal text-sm">0</td>
                                    <td className="p-3 text-primary font-normal text-sm">Paid</td>
                                </tr>
                                <tr className="bg-secondary">
                                    <td className="p-3 text-primary font-normal text-sm">2</td>
                                    <td className="p-3 text-primary font-normal text-sm truncate">Id Transaction</td>
                                    <td className="p-3 text-primary font-normal text-sm">0</td>
                                    <td className="p-3 text-primary font-normal text-sm">Paid</td>
                                </tr>
                                <tr className="bg-secondary">
                                    <td className="p-3 text-primary font-normal text-sm">3</td>
                                    <td className="p-3 text-primary font-normal text-sm truncate">Id Transaction</td>
                                    <td className="p-3 text-primary font-normal text-sm">0</td>
                                    <td className="p-3 text-primary font-normal text-sm">Paid</td>
                                </tr>
                            </tbody>
                        </table>
                </div>
        </div>
    )
}