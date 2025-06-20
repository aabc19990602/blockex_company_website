import { useState } from "react"

function CompanyRegister() {
    const [country1, setCountry1] = useState('Estonia');
    const [country2, setCountry2] = useState('United Kingdom');
    const [country3, setCountry3] = useState('United States');
    const [country4, setCountry4] = useState('United Arab Emirates');
    const [country5, setCountry5] = useState('Singapore');
    const [country6, setCountry6] = useState('Pakistan');
    return (
        <div className="market" id="companyRegister">
            <div className="container">
                <p className="TopkenomicsP1">Company Registrations</p>
                <p className="TopkenomicsP2">We are registered in.</p>
                <div className="row justify-content-center mt-5">
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" onMouseEnter={() => setCountry1('In progress')}
                        onMouseLeave={() => setCountry1('Estonia')} >
                        <div className="serviceBox2">
                            <p className="mb-0">{country1}</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" onMouseEnter={() => setCountry2('In progress')}
                        onMouseLeave={() => setCountry2('United Kingdom')}>
                        <div className="serviceBox2">
                            <p className="mb-0">{country2}</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" onMouseEnter={() => setCountry3('In progress')}
                        onMouseLeave={() => setCountry3('United States')}>
                        <div className="serviceBox2">
                            <p className="mb-0">{country3}</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" onMouseEnter={() => setCountry4('In progress')}
                        onMouseLeave={() => setCountry4('United Arab Emirates')}>
                        <div className="serviceBox2">
                            <p className="mb-0">{country4}</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" onMouseEnter={() => setCountry5('In progress')}
                        onMouseLeave={() => setCountry5('Singapore')}>
                        <div className="serviceBox2">
                            <p className="mb-0">{country5}</p>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6" onMouseEnter={() => setCountry6('In progress')}
                        onMouseLeave={() => setCountry6('Pakistan')}>
                        <div className="serviceBox2">
                            <p className="mb-0">{country6}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CompanyRegister