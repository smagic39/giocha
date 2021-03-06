Ext.define('TutorialApp.view.product.editProductForm', {
    extend: 'Ext.window.Window',
    xtype: 'editProductForm',    
    requires: [
        'Ext.form.Panel',        
    ],
    controller: 'ProductCTL',
    bodyPadding: 10,
    title: 'Edit product',
    modal: true,    
    layout: 'fit',
    closable: true,
    items: {
        xtype: 'form',
        reference: 'editProductForm',
        items: [{
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Tên sản phẩm:',
            allowBlank: false,
            msgTarget: 'under',
            bind: '{row.name}'
        },
        {
            xtype: 'textfield',
            name: 'price',
            fieldLabel: 'Giá',
            msgTarget: 'under',
            bind: '{row.price}'
        },
        {
            xtype: 'textfield',
            name: 'description',
            fieldLabel: 'Mô tả',
            msgTarget: 'under',
            bind: '{row.description}'
        },{
                xtype: 'hiddenfield',
                name: 'id',
                bind: '{row.id}'
            }],
        buttons: [
            {
                text: 'Sửa',
                formBind: true,
                name: 'save',
                listeners: {
                    click: 'editProductAction'
                }
            }]
    },
    listeners: {}
});