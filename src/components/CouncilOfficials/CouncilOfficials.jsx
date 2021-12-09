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
import Seo from "../seo"

const CouncilOfficials = () => {
    return (
        <>
            <Container>
                <Seo description="Isolo LCDA Local Council Chairman and Its populace."
                    title="Isolo Officials Honorables."
                />
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
                        name="Otunba Adebayo Olasoju"
                        title="Chairman Isolo LCDA"
                        pathimage={ chairmanimage }
                        email={ "olasojuadebayo.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                </div>
                <div className="space-above-officials">
                    <OfficialTemplate
                        name="Shakiru Adeola Sodiq"
                        title="Vice Chairman Isolo LCDA"
                        pathimage="https://res.cloudinary.com/rashot/image/upload/v1635494550/2_zuiope.jpg"
                        email={ "honshakiruadeolasodiq.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                    <OfficialTemplate
                        name="Akeem Ayoola Alarape (Leader of the house)"
                        title="Councilor Ilasamaja Ward"
                        pathimage={ Leader }
                        email={ "honadeyemialarape.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                    <OfficialTemplate
                        name="Kanayo Oyedinma  O. (Deputy Leader Isolo LCDA)"
                        title="Councilor Okota Ward"
                        pathimage={ deputy }
                        email={ "honosoundukanayo.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                    <OfficialTemplate
                        name="Bisodun Odusina Adeoye"
                        title=" Councilor Ishaga/Ire-Akari Ward"
                        pathimage={ bisodun }
                        email={ "honabisodunodusina.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                    <OfficialTemplate
                        name="Idris Babatunde Amusa "
                        title="Councilor Akinbaye Ward"
                        pathimage={ idris }
                        email={ "honbabatundeidris.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                    <OfficialTemplate
                        name="Chidieberi Magnus Iheasirim"
                        title="Councilor Ajao Estate"
                        pathimage={ igboman }
                        email={ "honbabatundeidris.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                    <OfficialTemplate
                        name="Kayode Olanrewaju"
                        title="Councilor Alagbeji Ward"
                        email={ "honolanrewajukayode.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                        pathimage={ kayode }
                    />
                    <OfficialTemplate
                        name="Yusuf TemiTope Agbabiaka"
                        title="Councilor Apana Ward"
                        pathimage="https://res.cloudinary.com/rashot/image/upload/v1635494628/9_nifdf2.jpg"
                        email={ "honagbabiakayussuf.isololcda@gmail.com" }
                        icon={ <i class="fas fa-envelope-open"></i> }
                    />
                </div>
            </Container>
        </>
    )
}

export default CouncilOfficials
