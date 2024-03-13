import React from "react";
import CountUp from 'react-countup';

 
const Chifre = () => {
    return(
        <div>
             <div class="counter-area pt-20 pb-120">
            <div class="container">
                <div class="row">
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter-item">
                       

                            <h3 class="count mb-0"  > <CountUp start={0} end={10000} duration={2.75} separator=''/> </h3>
                            <h2 class="count-inner-text mb-0">10000</h2>
                            <h4 class="count-title mb-0">SUPERFICIE DU BÂTIMENT</h4>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter-item">
                            <h3 class="count mb-0"  ><CountUp start={0} end={2000} duration={2.75} separator=''/></h3>
                            <h2 class="count-inner-text mb-0">2000</h2>
                            <h4 class="count-title mb-0">CAPACITÉE DE PRODUCTION</h4>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter-item">
                            <h3 class="count mb-0" data-counterup-time="2500"><CountUp start={0} end={2000} duration={2.75} separator='' /></h3>
                            <h2 class="count-inner-text mb-0">2000</h2>
                            <h4 class="count-title mb-0">EMPLOYÉS</h4>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6">
                        <div class="counter-item">
                            <h3 class="count mb-0" data-counterup-time="3000"><CountUp start={0} end={1974} duration={2.75} separator='' /></h3>
                            <h2 class="count-inner-text mb-0">1974</h2>
                            <h4 class="count-title mb-0">CRÉATION</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Chifre;