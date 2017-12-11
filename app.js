/**
 * Ext.onReady Similar Code = JAVASCRIPT : window.onload = function(){ //
 * codehere } = jQuery : $(document).ready({ alert("헬로 월드"); })
 */

Ext.onReady(function() {
	// 3강
	// Ext.Msg.alert("타이틀", "Hello world");

	// 4강
	/*Ext.create("Ext.panel.Panel", {
		width : 300,
		height : 300,
		renderTo : Ext.getBody(), // Body 패널 안에
		border : true,

		items : [ {
			xtype : 'textfield'
		}, {  
			xtype : 'button',
			text : '버튼'
		} ]
	})
	 */

	// 5강
	Ext.create("Ext.container.Viewport", { //도화지 클래스 선언
		renderTo : Ext.getBody(),
		layout:'border',//border와 region이 쌍으로 이뤄 설정되어야 함.
		border:true, 
		items:[{
			xtype:'panel',
			border:true,
			flex:1,
			region: 'north',
			layout:'border',
			
			items:[{
				xtype:'panel',
				flex:1,
				border:true,
				region:'west'
			},{
				xtype:'panel',
				flex:1,
				border:true,
				region:'center'
			}]
		},
		{
			xtype:'panel',
			border:true,
			flex:1,
			region: 'center'
		}]
	})
})

// 초창기에는 Html , jsp ... 특정 영역에 extjs 코드를 부분 삽입 하는 일을 많이 함.
// Ext.으로 시작하면 Ext.에서 만든 클래스

/*
 * 
 * This file launches the application by asking Ext JS to create and launch()
 * the Application class.
 * 
 * Ext.application({ extend: 'Study.Application',
 * 
 * name: 'Study',
 * 
 * requires: [ // This will automatically load all classes in the Study
 * namespace // so that application classes do not need to require each other.
 * 'Study.*' ], // The name of the initial view to create. mainView:
 * 'Study.view.main.Main' });
 */