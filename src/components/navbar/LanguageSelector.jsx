import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSelector = () => {
    const { t, i18n } = useTranslation();

    const lngs = {
        en: { nativeName: 'English', code: 'en' },
        zh: { nativeName: 'Chinese', code: 'zh' }
    };

    const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const handleLanguageChange = (lng) => {
            setCurrentLanguage(lng);
        };

        i18n.on('languageChanged', handleLanguageChange);

        return () => {
            i18n.off('languageChanged', handleLanguageChange);
        };
    }, [i18n]);

    const handleChange = (lng) => {
        i18n.changeLanguage(lng);
        setDropdownOpen(false);
    };

    return (
        <div className="language-selector me-3">
            <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='btn text-white'
            >
                <FontAwesomeIcon icon={faGlobe} className='pe-2' />
                {lngs[currentLanguage]?.nativeName || lngs.en.nativeName}
                <FontAwesomeIcon icon={faChevronDown} className='text-white small ps-2' />
            </button>
            {dropdownOpen && (
                <ul className="dropdown-menu">
                    {Object.keys(lngs).map((lng) => (
                        <li key={lng}>
                            <button
                                onClick={() => handleChange(lng)}
                                className="dropdown-item"
                            >
                                {lngs[lng].nativeName}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default LanguageSelector;
