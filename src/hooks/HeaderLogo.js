import { useEffect, useState } from "react";


export const useDynamicLogo = () => {

    const texts = ['WELCOME TO', 'FRONTROOM', 'FRONTEND EASY!'];
    const [isChanged, setIsChanged] = useState(false);
    const [text, setText] = useState(texts[0])

    useEffect(() => {

        const timeoutText = texts.forEach((text, index) => {

            setTimeout(() => {

                setTimeout(() => {
                    setIsChanged(true);
                }, 1000)

                setText(text);

                setIsChanged(false);

            }, index * 2000);

        });

        const timeoutFinal = setTimeout(() => {
            clearTimeout(timeoutText)
            setText('FRONTROOM')
            setIsChanged(false)
        }, 2000 * texts.length)

        return () => { clearTimeout(timeoutFinal) }

    }, []);

    return [texts, isChanged, text]
}