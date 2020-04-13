import {
    Tabs as ReactTabs,
    TabList as ReactTabList,
    Tab as ReactTab,
    TabPanel as ReactTabPanel
} from 'react-tabs';

import '../sass/components/tabs.sass';

class Tabs extends ReactTabs {}
Tabs.defaultProps = {
    ...Tabs.defaultProps,
    className: 'tabs'
};
Tabs.role = 'Tabs';

class TabList extends ReactTabList {}
TabList.defaultProps = {
    ...TabList.defaultProps,
    className: 'tabs__list'
};
TabList.role = 'TabList';

class Tab extends ReactTab {}
Tab.defaultProps = {
    ...Tab.defaultProps,
    className:         'tabs__tab',
    selectedClassName: 'tabs__tab--selected'
};
Tab.role = 'Tab';

class TabPanel extends ReactTabPanel {}
TabPanel.defaultProps = {
    ...TabPanel.defaultProps,
    className:         'tabs__panel',
    selectedClassName: 'tabs__panel--selected'
};
Tab.role = 'TabPanel';

export { Tabs, TabList, Tab, TabPanel };