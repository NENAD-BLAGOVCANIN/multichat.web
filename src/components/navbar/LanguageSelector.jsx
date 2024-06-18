import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {

    const { t, i18n } = useTranslation();

    const lngs = {
        en: { nativeName: 'English', code: 'en' },
        zh: { nativeName: 'Chinese', code: 'zh' }
    };


    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setCurrentLanguage(lng);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const handleChange = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <select onChange={handleChange} value={currentLanguage} className="form-select bg-transparent pointer color-text border-0">
                {Object.keys(lngs).map((lng) => (
                    <option key={lng} value={lng}>
                        {lngs[lng].code}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default LanguageSelector;
