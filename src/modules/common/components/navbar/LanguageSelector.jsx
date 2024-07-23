import { faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { Translate } from 'react-bootstrap-icons';
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
            <span
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className='px-2 pointer d-flex align-items-center'
            >
                <Translate className='me-2' />
                {lngs[currentLanguage]?.nativeName || lngs.en.nativeName}
                <FontAwesomeIcon icon={faChevronDown} className='small ps-2' />
            </span>
            {dropdownOpen && (
                <ul className="dropdown-menu dropdown-menu-left shadow-lg rounded">
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
