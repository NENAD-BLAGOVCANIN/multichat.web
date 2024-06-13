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
                    navbar: {
                        home: "Home",
                        downloads: "Downloads",
                        subscriptions: "Subscriptions",
                        docs: "Docs",
                    },
                    home: {
                        hero_section: {
                            title: "Welcome to Multichat",
                            subtitle: "Access all of your messages from one platform.",
                            download_for_windows: "Download for Windows"
                        },
                        section_2: {
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
                    downloads: {
                        downloads: 'Downloads',
                        version: "VERSION",
                        size: "SIZE",
                        download_btn: "Download",
                        system_reqs: "System Requirements",
                    },
                    footer: {
                        website_description: `Your all-in-one messaging solution designed to streamline your 
                            digital communication experience. With Multichat, you can conveniently manage multiple
                            messaging services in one centralized location.`,
                        newsletter: {
                            label: "Sign up for our newsletter:",
                            your_email: "Your Email",
                        },
                        quick_links: "Quick Links",
                        home: "Home",
                        blog: "Blog",
                        features_and_privacy: "Features & Privacy",
                        info: "Info",
                        privacy_policy: "Privacy Policy",
                        user_agreement: "User Agreement",
                        about_us: "About Us",
                        users: "Users",
                        sign_up: "Sign Up",
                        log_in: "Log In",
                        contact_support: "Contact Support",
                        contact: "Contact",
                        contact_live_support: "Contact live support",
                    },
                    login: {
                        remember_pass: "Remember for 14 days",
                        trouble_logging_in: "Trouble logging in?",
                        enter_your_email: "Enter your email",
                        welcome: "Welcome back! Please enter your details.",
                        login: "Log In",
                        email: "Email",
                        password: "Password",
                        forgot_password: "Forgot password?",
                        dont_have_an_account: "Don't have an account?",
                        sign_up: "Sign Up"
                    },
                    register: {
                        sign_up: "Sign Up",
                        welcome: "Welcome! Please enter your details.",
                        name: "Name",
                        email: "Email",
                        password: "Password",
                        enter_your_name: "Enter your name",
                        enter_your_email: "Enter your email",
                        remember_me: "Remember Me",
                        login: "Log In",
                        already_have_an_account: "Already have an account?",
                    }
                }
            },
            zh: {
                translation: {
                    navbar: {
                        home: "Home",
                        downloads: "Downloads",
                        subscriptions: "Subscriptions",
                        docs: "Docs",
                    },
                    home: {
                        hero_section: {
                            title: "Welcome to Multichat",
                            subtitle: "從一個平台存取您的所有訊息。",
                            download_for_windows: "Download for Windows"
                        },
                        section_2: {
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
                    footer: {
                        website_description: `Your all-in-one messaging solution designed to streamline your 
                            digital communication experience. With Multichat, you can conveniently manage multiple
                            messaging services in one centralized location.`,
                        newsletter: {
                            label: "Sign up for our newsletter:",
                            your_email: "Your Email",
                        },
                        quick_links: "Quick Links",
                        home: "Home",
                        blog: "Blog",
                        features_and_privacy: "Features & Privacy",
                        info: "Info",
                        privacy_policy: "Privacy Policy",
                        user_agreement: "User Agreement",
                        about_us: "About Us",
                        users: "Users",
                        sign_up: "Sign Up",
                        log_in: "Log In",
                        contact_support: "Contact Support",
                        contact: "Contact",
                        contact_live_support: "Contact live support",
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
        }
    }
    );

export default i18n;