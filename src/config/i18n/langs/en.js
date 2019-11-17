import enLocale from 'element-ui/lib/locale/lang/en'
const en = {
    lang: {
        name: "English",
        locale: "en"
    },
    message: {
        'hello': 'hello, world',
    },
    aside_menu: {
        admin:"Admin",
        homePage: "home page",
        systemSetup: "System setup",
        userManagement: "user management",
        fundManagement: "fund management",
        navigation: "navigation",
        navigationSub: {
            roleManagement: "role management",
            userManagement: "role management",
            userPrivileges: "user privileges",
            activity: "activity"
        },
        errorPage: "error page"
    },
    head_menu: {
        personalInformation: "infor Show",
        modifyInformation: "infor Modify",
        signOut: "Sign Out"
    },
    ...enLocale
}

export default en