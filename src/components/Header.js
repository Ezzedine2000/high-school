import { Fade } from 'react-reveal';
const Header = () => {
    return (
        <div className="Header">
            <div className="overlay">
                <div className="textBox">
                    <Fade left><h3 className="title">ثانوية عز الدين بن الوزير</h3></Fade>
                    <Fade right>
                        <p className="text">
                            مدرسة ثانوية حكومية تقع في مدينة الرياض
                            تسعى إلى تزويد الطلاب بالمعرفة والمهارات اللازمة للنجاح في حياتهم المهنية والتعليمية؛
                            وتسعى إلى إعداد الطلاب ليصبحوا مواطنين مسؤولين ومؤثرين في المجتمع
                        </p>
                    </Fade>
                </div>
            </div>
        </div>
    );
};
export default Header;
