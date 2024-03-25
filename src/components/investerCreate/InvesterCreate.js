import { useEffect, useState } from "react"
import { Button } from "../styledBlock/CommonStyles"
import { ValidateValues } from "../../utils/Validation"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { states } from "../../utils/CommonVariable"

let state = states
let country = [{ label: 'US' }]

let creationDetailsInvestor = [
    { label: "Investor Profile Photo", value: { fileName: '', image: '' }, type: 'file' },
    { label: "Investor Name", value: '' },
    { label: "Investor Email Address", value: '' },
    { label: "Contact Number", value: '', type: 'number' },
    { label: "Country", value: '', drop: country },
    { label: "City", value: '', drop: state },
    { label: "Investor Type", value: '' },
    { label: "Investor Bank", value: '' },
    { label: "Investor Account No", value: '', type: 'number' },
    { label: "Subsidiary Email-id", value: '' },
    { label: "Subsidiary Bank Name", value: '' },
    { label: "Subsidiary Account Number", value: '', type: 'number' },
    { label: "Investments", value: '', type: 'number' },
    { label: "Deals", value: '', type: 'number' }
]

export const InvestorCreate = () => {

    const [creationDetails, setCrationDetails] = useState(JSON.parse(JSON.stringify(creationDetailsInvestor)))

    const investorStatusUpdate = useSelector((state) => state.investorStatusUpdate)


    const [showErr, setShowErr] = useState(false)

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const investorList = useSelector((state) => state.investorList)

    const saveFormDetails = () => {
        if (ValidateValues(creationDetails)) {
            if (investorStatusUpdate.update)
                dispatch({ type: 'UPDATE', payload: { id: investorStatusUpdate.Id, data: creationDetails } })
            else
                dispatch({ type: 'ADD', payload: creationDetails })
            dispatch({ type: 'STATUS', payload: { allDetails: true } })
            setCrationDetails(creationDetailsInvestor)
        }

        else
            setShowErr(true)
        // dispatch({ type: 'ADD', payload: creationDetails })
    }

    console.log(investorList, 'investorList')


    const updateVaues = (e, index) => {
        // let clone = [...creationDetails]
        let clone = JSON.parse(JSON.stringify(creationDetails))
        if (e.target.files && e.target.files[0]) {
            clone[index].value.fileName = e.target.files[0].name
            clone[index].value.image = URL.createObjectURL(e.target.files[0])
        }
        else
            clone[index].value = e.target.value
        setCrationDetails(clone)
    }

    console.log('creationDetails', creationDetails)

    useEffect(() => {
        if (investorStatusUpdate.update) {
            console.log('investorList[investorStatusUpdate.id]', investorList[investorStatusUpdate.Id], investorList, investorStatusUpdate)
            setCrationDetails(investorList[investorStatusUpdate.Id])
            return
        }

        setCrationDetails(JSON.parse(JSON.stringify(creationDetailsInvestor)))

    }, [])

    return (<>
        <div className="form_align_hed">
            <p className="over_txt">Overview</p>
            <div className="">
                {creationDetails?.map((item, index) =>
                    <>
                        <div className="form_align">
                            <p>{item.label}</p>
                            {!item.drop?.length ?
                                item.type == 'file' ?
                                    <>
                                        <div className={`file_int ${showErr && !item.value.fileName.length && 'error'}`}>
                                            {item.value.image !== '' && <img className="fil_img" src={item.value.image} alt="file loading" />}
                                            <input type="file" onChange={(e) => updateVaues(e, index)} id="fileInput" class="input-file" />
                                            <label for="fileInput" className="choose">Choose</label>
                                        </div>
                                    </>
                                    : <input type={item.type} className={`${showErr && !item.value.trim()?.length && 'error'}`} onChange={(e) => updateVaues(e, index)} value={item.value} />

                                : <select className={`place ${showErr && !item.value.length && 'error'}`} value={item.value !== '' ? item.value : undefined} onChange={(e) => updateVaues(e, index)} name={`select ${item.label.toLowerCase()}`} id="cars">
                                    {item.drop.map((place, index) =>
                                        <>
                                            {index == 0 && <option disabled selected>{`Choose ${item.label}`}</option>}
                                            <option>{place.label}</option>
                                        </>
                                    )}

                                </select>}
                        </div >
                    </>
                )}
                <div className="btn_crt sts_sprt smt">
                    <Button onClick={() => {
                        saveFormDetails()
                        navigate('/')
                    }}>SUBMIT</Button>
                </div>
            </div >
        </div >
    </>)
}