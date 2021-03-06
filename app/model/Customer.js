Ext.define('TutorialApp.model.Customer', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'email', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'creator', type: 'date'},
        {name: 'created_at', type: 'string'},
        {name: 'updated_at', type: 'string'}
    ],
});