// 导入自己需要的组件
// import {
//     Select,
//     Option,
//     OptionGroup,
//     Input,
//     Tree,
//     Dialog,
//     Row,
//     Col,
//     container,
//     Header,
//     Aside,
//     Main,
//     Footer,
//     Menu,
//     MenuItemGroup,
//     MenuItem,
//     Submenu,
//     Table,
//     TableColumn,
//     Dropdown,
//     RadioGroup,
//     RadioButton,
//     DropdownMenu,
//     DropdownItem,
//     Button
// } from 'element-ui'
import {
    Pagination,
    Dialog,
    Autocomplete,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Input,
    InputNumber,
    Radio,
    RadioGroup,
    RadioButton,
    Checkbox,
    CheckboxButton,
    CheckboxGroup,
    Switch,
    Select,
    Option,
    OptionGroup,
    Button,
    ButtonGroup,
    Table,
    TableColumn,
    DatePicker,
    TimeSelect,
    TimePicker,
    Popover,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Tree,
    Alert,
    Slider,
    Icon,
    Row,
    Col,
    Upload,
    Progress,
    Spinner,
    Badge,
    Card,
    Rate,
    Steps,
    Step,
    Carousel,
    CarouselItem,
    Collapse,
    CollapseItem,
    Cascader,
    ColorPicker,
    Transfer,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Timeline,
    TimelineItem,
    Link,
    Divider,
    Image,
    Calendar,
    Backtop,
    PageHeader,
    CascaderPanel,
    Loading,
    MessageBox,
    Message,
    Notification,
    avatar
} from 'element-ui'

const element = {
    install: function (Vue) {
        // Vue.use(Select)
        // Vue.use(Option)
        // Vue.use(OptionGroup)
        // Vue.use(Input)
        // Vue.use(Tree)
        // Vue.use(Dialog)
        // Vue.use(Row)
        // Vue.use(Col)
        // Vue.use(container)
        // Vue.use(Header)
        // Vue.use(Aside)
        // Vue.use(Main)
        // Vue.use(Footer)
        // Vue.use(Menu)
        // Vue.use(MenuItemGroup)
        // Vue.use(MenuItem)
        // Vue.use(Submenu)
        // Vue.use(Table)
        // Vue.use(TableColumn)
        // Vue.use(Dropdown)
        // Vue.use(RadioGroup)
        // Vue.use(RadioButton)
        // Vue.use(DropdownMenu)
        // Vue.use(DropdownItem)
        // Vue.use(Button)
        Vue.use(Pagination);
        Vue.use(Dialog);
        Vue.use(Autocomplete);
        Vue.use(Dropdown);
        Vue.use(DropdownMenu);
        Vue.use(DropdownItem);
        Vue.use(Menu);
        Vue.use(Submenu);
        Vue.use(MenuItem);
        Vue.use(MenuItemGroup);
        Vue.use(Input);
        Vue.use(InputNumber);
        Vue.use(Radio);
        Vue.use(RadioGroup);
        Vue.use(RadioButton);
        Vue.use(Checkbox);
        Vue.use(CheckboxButton);
        Vue.use(CheckboxGroup);
        Vue.use(Switch);
        Vue.use(Select);
        Vue.use(Option);
        Vue.use(OptionGroup);
        Vue.use(Button);
        Vue.use(ButtonGroup);
        Vue.use(Table);
        Vue.use(TableColumn);
        Vue.use(DatePicker);
        Vue.use(TimeSelect);
        Vue.use(TimePicker);
        Vue.use(Popover);
        Vue.use(Tooltip);
        Vue.use(Breadcrumb);
        Vue.use(BreadcrumbItem);
        Vue.use(Form);
        Vue.use(FormItem);
        Vue.use(Tabs);
        Vue.use(TabPane);
        Vue.use(Tag);
        Vue.use(Tree);
        Vue.use(Alert);
        Vue.use(Slider);
        Vue.use(Icon);
        Vue.use(Row);
        Vue.use(Col);
        Vue.use(Upload);
        Vue.use(Progress);
        Vue.use(Spinner);
        Vue.use(Badge);
        Vue.use(Card);
        Vue.use(Rate);
        Vue.use(Steps);
        Vue.use(Step);
        Vue.use(Carousel);
        Vue.use(CarouselItem);
        Vue.use(Collapse);
        Vue.use(CollapseItem);
        Vue.use(Cascader);
        Vue.use(ColorPicker);
        Vue.use(Transfer);
        Vue.use(Container);
        Vue.use(Header);
        Vue.use(Aside);
        Vue.use(Main);
        Vue.use(Footer);
        Vue.use(Timeline);
        Vue.use(TimelineItem);
        Vue.use(Link);
        Vue.use(Divider);
        Vue.use(Image);
        Vue.use(Calendar);
        Vue.use(Backtop);
        Vue.use(PageHeader);
        Vue.use(CascaderPanel);
        Vue.use(avatar);

        Vue.use(Loading.directive);

        Vue.prototype.$loading = Loading.service;
        Vue.prototype.$msgbox = MessageBox;
        Vue.prototype.$alert = MessageBox.alert;
        Vue.prototype.$confirm = MessageBox.confirm;
        Vue.prototype.$prompt = MessageBox.prompt;
        Vue.prototype.$notify = Notification;
        Vue.prototype.$message = Message;
    }
}
// let arr = ["pagination", "dialog", "autocomplete", "dropdown", "dropdown-menu", "dropdown-item", "menu", "submenu", "menu-item", "menu-item-group", "input", "input-number", "radio", "radio-group", "radio-button", "checkbox", "checkbox-button", "checkbox-group", "switch", "select", "option", "option-group", "button", "button-group", "table", "table-column", "date-picker", "time-select", "time-picker", "popover", "tooltip", "message-box", "breadcrumb", "breadcrumb-item", "form", "form-item", "tabs", "tab-pane", "tag", "tree", "alert", "notification", "slider", "loading", "icon", "row", "col", "upload", "progress", "spinner", "message", "badge", "card", "rate", "steps", "step", "carousel", "scrollbar", "carousel-item", "collapse", "collapse-item", "cascader", "color-picker", "transfer", "container", "header", "aside", "main", "footer", "timeline", "timeline-item", "link", "divider", "image", "calendar", "backtop", "infinite-scroll", "page-header", "cascader-panel", "avatar", "drawer"];


export default element