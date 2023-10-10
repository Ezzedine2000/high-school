import {Fade} from "react-reveal";

const OurPlace = () => {
    return (
        <div className="OurPlace">
            <Fade bottom>
                <h3>موقعنا</h3>
                <iframe title={"map"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3628.4222285205274!2d46.83269218500266!3d24.574620484189577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2fa7538d8986d5%3A0x47fe7571e2f0756!2z2YXYr9ix2LPYqSDYudiyINin2YTYr9mK2YYg2KjZhiDYp9mE2YjYstmK2LEg2KfZhNir2KfZhtmI2YrYqQ!5e0!3m2!1sar!2ssa!4v1696520675473!5m2!1sar!2ssa" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Fade>
        </div>
    );
};
export default OurPlace;