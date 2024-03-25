import { useSelector } from "react-redux"


export const InvestorHeader = () => {
    const investorStatusUpdate = useSelector((state) => state.investorStatusUpdate)
    const investorList = useSelector((state) => state.investorList)
    console.log(90, investorStatusUpdate)
    const fetchData = () => {

        if (investorStatusUpdate.allDetails)
            return <>
                <p>Investors</p>
                <p>Investors</p>
            </>
        else if (investorStatusUpdate.create)
            return <>
                <p>ADD Investors</p>
                <p>{`Investors>ADD Investors`}</p>
            </>

        else if (investorStatusUpdate.update)
            return <>
                <p>Edit Investors</p>
                <p>{`Investors>Edit Investors`}</p>
            </>
        else
            return <>
                <p>{investorList[investorStatusUpdate.Id][1].value}</p>
                <p>{`Investors>${investorList[investorStatusUpdate.Id][1].value}`}</p>
            </>

    }
    return (<>
        <div className="ist_txt">
            {fetchData()}
        </div>
    </>)
}