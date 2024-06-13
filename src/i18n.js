import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    home: {
                        hero_section: {
                            title: "Welcome to Multichat",
                            subtitle: "Access all of your messages from one platform.",
                            download_for_windows: "Download for Windows"
                        },
                        secion_2: {
                            title: "Bringing Your Conversations Together",
                            subtitle: `Welcome to MultiChat, your all-in-one messaging solution 
                            designed to streamline your digital communication experience. 
                            With MultiChat, you can conveniently manage multiple messaging services in one centralized location. 
                            Say goodbye to switching between apps and hello to effortless multitasking.`
                        },
                        platforms: {
                            title: "Multichat lets you send and receive messages from many major messaging platforms:"
                        },
                        features: {
                            title: "Features",
                            box_1: {
                                title: "Dark & Light Modes",
                                text: "Choose your preferred color scheme to reduce eye strain."
                            },
                            box_2: {
                                title: "Keyboard Shortcuts",
                                text: "Move at the speed of light with our extensive keyboard support."
                            },
                            box_3: {
                                title: "Customizable UI",
                                text: "Customize the UI based on your preferences."
                            },
                            box_4: {
                                title: "Privacy and Security",
                                text: "All of your messages are e2e encrypted, so you can communicate privately with your friends and family."
                            },
                            box_5: {
                                title: "Unlimited accounts",
                                text: "Open as meny tabs as you like, with each tab having it's own session with unique credentials"
                            },
                            box_6: {
                                title: "Notifications",
                                text: "Control your notifications, snooze or mute your messages when busy."
                            },
                        }
                    },
                    login: {
                        remember_me: "Remember Me",
                        trouble_logging_in: "Trouble logging in?",
                        login: "Login",
                        email: "Email",
                        password: "Password",
                    },
                }
            },
            zh: {
                translation: {

                    login: {
                        remember_me: "Remember Me",
                        trouble_logging_in: "Trouble logging in?",
                        login: "Login",
                        email: "Email",
                        password: "Password",
                    },
                }
            },
        }
    }
    );

export default i18n;