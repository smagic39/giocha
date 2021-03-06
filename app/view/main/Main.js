Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',
    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel',
        'TutorialApp.view.main.List',
        'TutorialApp.view.product.List',
        'TutorialApp.view.order.List',
        'TutorialApp.view.order.OrderController',
        'TutorialApp.view.order.Datbanh',
        'TutorialApp.view.customer.List',
        'TutorialApp.view.customer.CustomerController',
        'TutorialApp.view.customer.Form'
    ],
    controller: 'main',
    viewModel: 'main',
    plugins: 'viewport',
    ui: 'navigation',
    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,
    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list',
        items: [{
                xtype: 'button',
                text: 'Logout',
                margin: '10 0',
                handler: 'onClickButton'
            }]
    },
    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },
    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },
    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },
    items: [
        {
            title: 'Khách hàng',
            iconCls: 'fa-user',
            items: [{
                    xtype: 'customerList'
                }]
        },
        {
            title: 'Sản phẩm',
            iconCls: 'fa-pie-chart',
            items: [{
                    xtype: 'productList'
                }]
        },
        {
            title: 'Đặt Bánh Giò Chả',
            iconCls: 'fa-yelp',
            items: [{xtype: 'orderList'}]

        },
        {
            title: 'Thống kê',
            iconCls: 'fa-pie-chart',
            items: [{xtype: 'line-marked1'}]

        }]

});