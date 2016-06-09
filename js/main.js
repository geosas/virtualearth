Ext.namespace("GEOR.Addons");

GEOR.Addons.VirtualEarth = Ext.extend(GEOR.Addons.Base, {

    bingLayer: null,

    /**
     * Method: init
     *
     * Parameters:
     * record - {Ext.data.record} a record with the addon parameters
     */
    init: function(record) {
        this.bingLayer = this.createLayer();
        if (this.target) {
            // create a button to be inserted in toolbar:
            this.components = this.target.insertButton(this.position, {
                xtype: 'button',
                enableToggle: true,
                tooltip: this.getTooltip(record),
                iconCls: "addon-template",
                listeners: {
                    "toggle": this.onCheckchange,
                    scope: this
                }
            });
            this.target.doLayout();

        } else {
            // create a menu item for the "tools" menu:
            this.item = new Ext.menu.CheckItem({
                text: this.getText(record),
                qtip: this.getQtip(record),
                iconCls: "addon-template",
                checked: false,
                listeners: {
                    "checkchange": this.onCheckchange,
                    scope: this
                }
            });
        }
    },

    /**
     * Method: onCheckchange
     *
     */
    onCheckchange: function(item, checked) {
        if (checked) {
            this.map.addLayer(this.bingLayer);
        } else {
            this.map.removeLayer(this.bingLayer);
        }
    },

    /**
     * Method: createLayer
     *
     */
    createLayer: function() {
        return new OpenLayers.Layer.Bing({
   	    key: this.options.key,
            name : this.options.name,
            type : this.options.type,
            projection: GEOR.config.MAP_SRS,
            isBaseLayer: true,
            displayInLayerSwitcher: true
        });
    },

    /**
     * Method: tr
     *
     */
    tr: function(str) {
        return OpenLayers.i18n(str);
    },

    /**
     * Method: destroy
     *
     */
    destroy: function() {
        this.bingLayer.destroy();
        this.bingLayer = null;
        GEOR.Addons.Base.prototype.destroy.call(this);
    }
});
