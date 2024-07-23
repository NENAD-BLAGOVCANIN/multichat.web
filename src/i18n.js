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
                        pricing: "Pricing",
                        about: "About",
                        docs: "Docs",
                        sign_up: "Sign up"
                    },
                    home: {
                        hero_section: {
                            title: "GET ON ANY DEVICE",
                            subtitle: "Your all-in-one messaging solution designed to streamline your digital communication experience.",
                            download_for_windows: "Download for Windows",
                            download_for_mac: "Download for MacOS",
                            windows_10_or_higher: "Windows 10 or higher",
                        },
                        section_2: {
                            title: "Bringing Your Conversations Together",
                            subtitle: `Welcome to MultiChat, your all-in-one messaging solution 
                            designed to streamline your digital communication experience. 
                            With MultiChat, you can conveniently manage multiple messaging services in one centralized location. 
                            Say goodbye to switching between apps and hello to effortless multitasking.`
                        },
                        platforms: {
                            title: "Platforms",
                            text: "Multichat lets you send and receive messages from many major messaging platforms, all in one app. We currently support these platforms:"
                        },
                        features: {
                            title: "Features",
                            box_1: {
                                title: "Dark & Light Modes",
                                text: "Choose your preferred color scheme to reduce eye strain."
                            },
                            box_2: {
                                title: "Multiple Messaging Platforms",
                                text: "Multichat lets you use many messaging platforms all in one place."
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
                                title: "Unlimited tabs",
                                text: "Open as meny tabs as you like, with each tab having it's own session with unique credentials"
                            },
                            box_6: {
                                title: "Notifications",
                                text: "Control your notifications, snooze or mute your messages when busy."
                            },
                        }
                    },
                    user_dropdown: {
                        my_account: "My Account",
                        logout: "Logout"
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
                        downloads: "Downloads",
                        pricing: "Pricing",
                        terms: "Terms of Service"
                    },
                    pricing: {
                        standard: "Standard Plan",
                        free: "Free Plan",
                        pro: "Pro Enterprise Plan",
                        billed_monthly: "Billed monthly",
                        month: "month",
                        up_to_20: "Up to 20 tabs",
                        up_to_5: "Up to 5 tabs",
                        unlimited_tabs: "Unlimited tabs",
                        basic_support: "Basic support",
                        priority_support: "Priority support",
                        premium_support: "Premium 24/7 support",
                        advanced_notifications: "Advanced notifications",
                        full_notifications: "Full notifications suite",
                        standard_notifications: "Standard desktop notifications"
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
                        home: "首頁",
                        downloads: "下載",
                        pricing: "定價",
                        about: "關於",
                        docs: "文件",
                        sign_up: "註冊"
                    },
                    home: {
                        hero_section: {
                            title: "適用於任何設備",
                            subtitle: "您的全方位消息解決方案，旨在簡化您的數字通信體驗。",
                            download_for_windows: "下載適用於Windows",
                            download_for_mac: "下載適用於MacOS",
                            windows_10_or_higher: "Windows 10或更高版本",
                        },
                        section_2: {
                            title: "聚合您的對話",
                            subtitle: `歡迎來到MultiChat，您的全方位消息解決方案，
                            旨在簡化您的數字通信體驗。
                            有了MultiChat，您可以方便地在一個集中的位置管理多個消息服務。
                            告別在應用之間切換，迎接輕鬆的多任務處理。`
                        },
                        platforms: {
                            title: "Multichat讓您能夠在許多主要消息平台上發送和接收消息："
                        },
                        features: {
                            title: "功能",
                            box_1: {
                                title: "深色和淺色模式",
                                text: "選擇您喜歡的配色方案以減少眼睛疲勞。"
                            },
                            box_2: {
                                title: "鍵盤快捷鍵",
                                text: "通過我們的廣泛鍵盤支持以光速移動。"
                            },
                            box_3: {
                                title: "可定制的用戶界面",
                                text: "根據您的偏好自定義用戶界面。"
                            },
                            box_4: {
                                title: "隱私和安全",
                                text: "您的所有消息均為端到端加密，因此您可以與朋友和家人私下通信。"
                            },
                            box_5: {
                                title: "不限賬號",
                                text: "打開任意多的標籤，每個標籤都有自己的會話和唯一的憑據。"
                            },
                            box_6: {
                                title: "通知",
                                text: "控制您的通知，忙碌時可以暫停或靜音消息。"
                            },
                        }
                    },
                    user_dropdown: {
                        my_account: "我的賬戶",
                        logout: "登出"
                    },
                    downloads: {
                        downloads: '下載',
                        version: "版本",
                        size: "大小",
                        download_btn: "下載",
                        system_reqs: "系統要求",
                    },
                    footer: {
                        website_description: `您的全方位消息解決方案，旨在簡化您的
                        數字通信體驗。有了Multichat，您可以方便地在一個集中的位置管理多個
                        消息服務。`,
                        newsletter: {
                            label: "訂閱我們的新聞郵件：",
                            your_email: "您的電子郵件",
                        },
                        quick_links: "快速鏈接",
                        home: "首頁",
                        blog: "博客",
                        features_and_privacy: "功能和隱私",
                        info: "信息",
                        privacy_policy: "隱私政策",
                        user_agreement: "用戶協議",
                        about_us: "關於我們",
                        users: "用戶",
                        sign_up: "註冊",
                        log_in: "登錄",
                        contact_support: "聯繫支持",
                        contact: "聯繫",
                        contact_live_support: "聯繫在線支持",
                        downloads: "下載",
                        pricing: "定價",
                        terms: "服務條款"
                    },
                    pricing: {
                        standard: "標準計劃",
                        free: "免費計劃",
                        pro: "專業企業計劃",
                        billed_monthly: "按月計費",
                        month: "月",
                        up_to_20: "最多20個標籤",
                        up_to_5: "最多5個標籤",
                        unlimited_tabs: "無限標籤",
                        basic_support: "基本支持",
                        priority_support: "優先支持",
                        premium_support: "高級24/7支持",
                        advanced_notifications: "高級通知",
                        full_notifications: "完整通知套件",
                        standard_notifications: "標準桌面通知"
                    },
                    login: {
                        remember_pass: "記住14天",
                        trouble_logging_in: "登錄有困難？",
                        enter_your_email: "輸入您的電子郵件",
                        welcome: "歡迎回來！請輸入您的詳細信息。",
                        login: "登錄",
                        email: "電子郵件",
                        password: "密碼",
                        forgot_password: "忘記密碼？",
                        dont_have_an_account: "還沒有賬戶？",
                        sign_up: "註冊"
                    },
                    register: {
                        sign_up: "註冊",
                        welcome: "歡迎！請輸入您的詳細信息。",
                        name: "名字",
                        email: "電子郵件",
                        password: "密碼",
                        enter_your_name: "輸入您的名字",
                        enter_your_email: "輸入您的電子郵件",
                        remember_me: "記住我",
                        login: "登錄",
                        already_have_an_account: "已經有賬戶了？",
                    }
                }
            },
        }
    }
    );

export default i18n;