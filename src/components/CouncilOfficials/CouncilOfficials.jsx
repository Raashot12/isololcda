import { Container } from "@material-ui/core"
import React from "react"
import OfficialTemplate from "../../helpers/OfficialTemplate"
import chairmanimage from "../../images/1.jpg"
import deputy from "../../images/3.jpg"
import Leader from "../../images/4.jpg"
import bisodun from "../../images/5.jpg"
import idris from "../../images/6.jpg"
import igboman from "../../images/7.jpg"
import kayode from "../../images/8.jpg"

const CouncilOfficials = () => {
    return (
        <>
            <Container>
                <div
                    style={ {
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: "2rem",
                    } }
                >
                    <OfficialTemplate
                        name="Otunba Bayo Olasoju"
                        title="Chairman Isolo LCDA"
                        pathimage={ chairmanimage }
                    />
                </div>
                <div className="space-above-officials">
                    <OfficialTemplate
                        name="Shakiru Adeola Sodiq"
                        title="Vice Chairman Isolo LCDA"
                        pathimage="https://res.cloudinary.com/rashot/image/upload/v1635494550/2_zuiope.jpg"
                    />
                    <OfficialTemplate
                        name="Akeem Ayoola Alarape (Leader of the house)"
                        title="Councilor Ilasamaja Ward"
                        pathimage={ Leader }
                    />
                    <OfficialTemplate
                        name="Kanayo Oyedinma  Osodun"
                        title="Deputy Leader Isolo LCDA"
                        pathimage={ deputy }
                    />
                    <OfficialTemplate
                        name="Bisodun Odusina Adeoye"
                        title=" Councilor Ishaga/Ire-Akari Ward"
                        pathimage={ bisodun }
                    />
                    <OfficialTemplate
                        name="Idris Babatunde Amusa "
                        title="Councilor Akinbaye Ward"
                        pathimage={ idris }
                    />
                    <OfficialTemplate
                        name="Chidieberi Magnus Iheasirim"
                        title="Councilor Ajao Estate"
                        pathimage={ igboman }
                    />
                    <OfficialTemplate
                        name="Kayode Olanrewaju"
                        title="Councilor Alagbeji Ward"
                        pathimage={ kayode }
                    />
                    <OfficialTemplate
                        name="Yusuf TemiTope Agbabiaka"
                        title="Councilor Apana Ward"
                        pathimage="https://res.cloudinary.com/rashot/image/upload/v1635494628/9_nifdf2.jpg"
                    />
                </div>
            </Container>
        </>
    )
}

export default CouncilOfficials
