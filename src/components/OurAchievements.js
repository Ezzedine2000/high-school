import { Row } from "react-bootstrap";
import { Fade } from "react-reveal";
import teamImage from '../Images/teamImage.png';
const OurAchievements = () => {
    return (
        <div className="OurAchievements">
            <Fade bottom>
                <Row>
                    <div className="text">
                        <h3>فريقنا</h3>
                        تضم المدرسة فريقًا من المعلمين المؤهلين والملتزمين بمساعدة الطلاب على تحقيق أهدافهم. تتعاون المدرسة مع أولياء الأمور والمعلمين الآخرين لضمان حصول الطلاب على أفضل تعليم ممكن.
                    </div>
                    <img src={teamImage} alt="" />
                </Row>
            </Fade>
            <Fade bottom>
                <Row>
                    <img src="https://pbs.twimg.com/media/F7qxQ2VWsAEURGN?format=jpg&name=large" alt="" />
                    <div className="text">
                        <h3>هدفنا</h3>
                        تعد ثانوية عز الدين بن الوزير مدرسة رائدة في التعليم الثانوي في الرياض. تسعى المدرسة إلى إعداد الطلاب للنجاح في حياتهم المهنية والتعليمية، وتلتزم بتزويدهم بالمعرفة والمهارات اللازمة لتحقيق أهدافهم.
                    </div>
                </Row>
            </Fade>
        </div>
    );
};
export default OurAchievements;