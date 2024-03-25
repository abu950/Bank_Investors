import { useDispatch, useSelector } from "react-redux"
import { Button } from "../styledBlock/CommonStyles"

export const AllInvestor = () => {
    const investorStatusUpdate = useSelector((state) => state.investorStatusUpdate)

    const dispatch = useDispatch()

    const addInvestor = () => {
        dispatch({ type: 'STATUS', payload: { create: true } })
    }

    return (<>
        <div className="in_flex">
            <div className="inves_add">
                <span className="aply">All Investor</span>
                <div className="btn_crt sts_sprt adding">
                    <Button onClick={() => {
                        addInvestor()
                    }}>ADD INVESTORS</Button>
                </div>
            </div>
        </div>
    </>)
}