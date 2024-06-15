import { TypeAnimation } from "react-type-animation";

const TypingAnim = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed once, initially
                "TRÒ CHUYỆN VỚI AI",
                1000,
                "ĐƯỢC XÂY DỰNG VỚI SUBJECT TUTOR CHATBOX TUPO 🤖",
                2000,
            ]}
            speed={50}
            style={{
                fontSize: "60px",
                color: "white",
                display: "inline-block",
                textShadow: "1px 1px 20px #000",
            }}
            repeat={Infinity}
        />
    );
};

export default TypingAnim;
