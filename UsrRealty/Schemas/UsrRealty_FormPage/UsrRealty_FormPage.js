define("UsrRealty_FormPage", /**SCHEMA_DEPS*/["@creatio-devkit/common"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(sdk)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "CardToggleTabPanel",
				"values": {
					"styleType": "default",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrRealty"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "87674523-0da8-4f06-aa44-a31eaa937dbd",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_fgcqs4p",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_fgcqs4p_caption)#",
					"color": "primary",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"menuItems": [],
					"clickMode": "menu",
					"icon": "actions-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_4jmu0ms",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_4jmu0ms_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrCalcAverageRealtyPrice",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter1"
						}
					},
					"icon": "calculator-button-icon"
				},
				"parentName": "Button_fgcqs4p",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "CalcMaxPriceMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(CalcMaxPriceMenuItem_caption)#",
					"visible": true,
					"clicked": {
						"request": "usr.RunWebServiceButtonRequest"
					},
					"icon": "sum-button-icon"
				},
				"parentName": "Button_fgcqs4p",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "AddVisitMenuItem",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_alw6fy5_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAutoAddRealtyVisitProcess",
							"processRunType": "ForTheSelectedPage",
							"showNotification": true,
							"recordIdProcessParameterName": "RealtyIdParameter"
						}
					},
					"icon": "add-button-icon"
				},
				"parentName": "Button_fgcqs4p",
				"propertyName": "menuItems",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_vmt7i4o_caption)#",
					"color": "accent",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "document-new-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrPriceUSD",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPriceUSD_wf7537a",
					"labelPosition": "auto",
					"control": "$PDS_UsrPriceUSD_wf7537a",
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrArea",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrArea_r0khzxp",
					"labelPosition": "auto",
					"control": "$PDS_UsrArea_r0khzxp"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NumberInput_odfcc3j",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCommission_hdjygtp",
					"labelPosition": "auto",
					"control": "$PDS_UsrCommission_hdjygtp",
					"visible": true,
					"readonly": true,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Type",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrType_xlmo5d5",
					"labelPosition": "auto",
					"control": "$PDS_UsrType_xlmo5d5",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "addRecord_alz2ha6",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_alz2ha6_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Type",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "OfferType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrOfferType_66up9j8",
					"labelPosition": "auto",
					"control": "$PDS_UsrOfferType_66up9j8",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "addRecord_yhi3fui",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_yhi3fui_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "OfferType",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_zericqk",
					"labelPosition": "auto",
					"control": "$PDS_UsrComment_zericqk",
					"multiline": false,
					"visible": false,
					"readonly": false,
					"placeholder": "",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 2,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_sqkdxst",
					"labelPosition": "auto",
					"control": "$PDS_UsrManager_sqkdxst",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "UsrCountry",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCountry_oyhpasz",
					"labelPosition": "auto",
					"control": "$PDS_UsrCountry_oyhpasz",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "CommissionPercent",
				"values": {
					"layoutConfig": {
						"column": 2,
						"row": 3,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrOfferTypeUsrCommissionPercent",
					"control": "$PDS_UsrOfferTypeUsrCommissionPercent",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "UsrCity",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCity_ve1dn57",
					"labelPosition": "auto",
					"control": "$PDS_UsrCity_ve1dn57",
					"listActions": [],
					"showValueAsLink": true,
					"controlActions": [],
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"tooltip": "",
					"valueDetails": null,
					"layoutConfig": {
						"column": 1,
						"row": 4,
						"colSpan": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_9qvj79h",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_9qvj79h_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridContainer_1y24f59",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9qvj79h",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_w7szwud",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_1y24f59",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_3g5cygh",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_3g5cygh_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrRealtyVisit",
							"defaultValues": [
								{
									"attributeName": "UsrParentRealty",
									"value": "$UsrParentRealty"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_w7szwud",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ooh7e5i",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ooh7e5i_caption)#",
					"icon": "reload-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_f75dy80DS"
						}
					}
				},
				"parentName": "FlexContainer_w7szwud",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_nz6satt",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_nz6satt_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_w7szwud",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_9k7933c",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_9k7933c_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_f75dy80"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_nz6satt",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_s00ezsj",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_s00ezsj_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrRealtyVisit"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_nz6satt",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_0xn1ker",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_0xn1ker_placeholder)#",
					"iconOnly": true,
					"targetAttributes": [
						"GridDetail_f75dy80"
					]
				},
				"parentName": "FlexContainer_w7szwud",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_5943hl5",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_9qvj79h",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_f75dy80",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						},
						"editable": {
							"enable": true,
							"itemsCreation": false
						}
					},
					"items": "$GridDetail_f75dy80",
					"visible": true,
					"fitContent": true,
					"primaryColumnName": "GridDetail_f75dy80DS_Id",
					"columns": [
						{
							"id": "5cd1dbd4-bb99-718f-6334-e9d7872bb548",
							"code": "GridDetail_f75dy80DS_UsrVisitDateTime",
							"caption": "#ResourceString(GridDetail_f75dy80DS_UsrVisitDateTime)#",
							"dataValueType": 7
						},
						{
							"id": "98b16373-5aac-0b50-6f87-4ce4e50a96a2",
							"code": "GridDetail_f75dy80DS_UsrComment",
							"caption": "#ResourceString(GridDetail_f75dy80DS_UsrComment)#",
							"dataValueType": 28,
							"width": 159
						},
						{
							"id": "26a5f80d-848a-d02f-8c8a-8e3f03d78f44",
							"code": "GridDetail_f75dy80DS_UsrPotentialCustomer",
							"caption": "#ResourceString(GridDetail_f75dy80DS_UsrPotentialCustomer)#",
							"dataValueType": 10,
							"width": 147
						},
						{
							"id": "68f8769e-e0dc-bad9-cf37-854964add4bb",
							"code": "GridDetail_f75dy80DS_CreatedOn",
							"caption": "#ResourceString(GridDetail_f75dy80DS_CreatedOn)#",
							"dataValueType": 7
						},
						{
							"id": "92ef0a6c-87ae-e7a3-c767-e9c7d663e3a5",
							"code": "GridDetail_f75dy80DS_UsrParentRealty",
							"caption": "#ResourceString(GridDetail_f75dy80DS_UsrParentRealty)#",
							"dataValueType": 10,
							"width": 134
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_5943hl5",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPriceUSD_wf7537a": {
						"modelConfig": {
							"path": "PDS.UsrPriceUSD"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(UsrPriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrArea_r0khzxp": {
						"modelConfig": {
							"path": "PDS.UsrArea"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 1,
									"message": "#ResourceString(UsrAreaCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrColumn4_3ni4vq1": {
						"modelConfig": {
							"path": "PDS.UsrColumn4"
						}
					},
					"PDS_UsrColumn5_k4kho8u": {
						"modelConfig": {
							"path": "PDS.UsrColumn5"
						}
					},
					"PDS_UsrComment_zericqk": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						},
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						}
					},
					"PDS_UsrManager_sqkdxst": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrType_xlmo5d5": {
						"modelConfig": {
							"path": "PDS.UsrType"
						}
					},
					"PDS_UsrOfferType_66up9j8": {
						"modelConfig": {
							"path": "PDS.UsrOfferType"
						}
					},
					"PDS_UsrCommission_hdjygtp": {
						"modelConfig": {
							"path": "PDS.UsrCommission"
						}
					},
					"PDS_UsrOfferTypeUsrCommissionPercent": {
						"modelConfig": {
							"path": "PDS.UsrOfferTypeUsrCommissionPercent"
						}
					},
					"PDS_UsrCountry_oyhpasz": {
						"modelConfig": {
							"path": "PDS.UsrCountry"
						}
					},
					"PDS_UsrCity_ve1dn57": {
						"modelConfig": {
							"path": "PDS.UsrCity"
						}
					},
					"GridDetail_f75dy80": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_f75dy80DS",
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrComment"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_f75dy80DS_UsrVisitDateTime": {
									"modelConfig": {
										"path": "GridDetail_f75dy80DS.UsrVisitDateTime"
									}
								},
								"GridDetail_f75dy80DS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_f75dy80DS.UsrComment"
									}
								},
								"GridDetail_f75dy80DS_UsrPotentialCustomer": {
									"modelConfig": {
										"path": "GridDetail_f75dy80DS.UsrPotentialCustomer"
									}
								},
								"GridDetail_f75dy80DS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_f75dy80DS.CreatedOn"
									}
								},
								"GridDetail_f75dy80DS_UsrParentRealty": {
									"modelConfig": {
										"path": "GridDetail_f75dy80DS.UsrParentRealty"
									}
								},
								"GridDetail_f75dy80DS_Id": {
									"modelConfig": {
										"path": "GridDetail_f75dy80DS.Id"
									}
								}
							}
						}
					},
					"UsrParentRealty": {
						"modelConfig": {
							"path": "PDS.Id"
						}
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_f75dy80DS": [
							{
								"attributePath": "UsrOwner",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrRealty",
							"attributes": {
								"UsrOfferTypeUsrCommissionPercent": {
									"path": "UsrOfferType.UsrCommissionPercent",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_f75dy80DS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrRealtyVisit",
							"attributes": {
								"UsrVisitDateTime": {
									"path": "UsrVisitDateTime"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"UsrPotentialCustomer": {
									"path": "UsrPotentialCustomer"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								},
								"UsrParentRealty": {
									"path": "UsrParentRealty"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
          {

				request: "usr.PushButtonRequest",
                /* Implementation of the custom query handler. */
                handler: async (request, next) => {
                    this.console.log("Button works...");
                    Terrasoft.showInformation("My button was pressed.");
                    var price = await request.$context.PDS_UsrPriceUSD_wf7537a;
                    this.console.log("Price = " + price);
                    request.$context.PDS_UsrPriceUSD_wf7537a = price * 0.2;
                    /* Call the next handler if it exists and return its result. */
                    return next?.handle(request);
                  }
                 },
          
               {
				request: "crt.HandleViewModelAttributeChangeRequest",

                /* The custom implementation of the system query handler. */
                handler: async (request, next) => {

                       if (request.attributeName === 'PDS_UsrPriceUSD_wf7537a' || 				// if price changed
                       request.attributeName === 'PDS_UsrOfferTypeUsrCommissionPercent' ) { 		// or percent changed
                       var price = await request.$context.PDS_UsrPriceUSD_wf7537a;
                       var percent = await request.$context.PDS_UsrOfferTypeUsrCommissionPercent;

                       var commission = price * percent / 100;
                       request.$context.PDS_UsrCommission_hdjygtp = commission;

                       }

                       /* Call the next handler if it exists and return its result. */
                       return next?.handle(request);

                }
            },
               {
        request: "crt.HandleViewModelAttributeChangeRequest",
        /* The custom implementation of the system query handler. */
        handler: async (request, next) => {
            if (request.attributeName === 'PDS_UsrPriceUSD_wf7537a') {
                const selectedPrice = await request.$context.PDS_UsrPriceUSD_wf7537a;
                const isPriceGreaterThan = selectedPrice > 20000 ;
                /* Check the request status. */
                if (isPriceGreaterThan) {
                    /* If the price is greater than 20000 then, apply the required validator to the Comment attribute. */
                    request.$context.enableAttributeValidator('PDS_UsrComment_zericqk', 'required');
                } else {
                    /* Do not apply the required validator to the Comment attribute for price less than 20000. */
                    request.$context.disableAttributeValidator('PDS_UsrComment_zericqk', 'required');
                }
            }
            /* Call the next handler if it exists and return its result. */
            return next?.handle(request);
        }
    },           

          {

				request: "usr.RunWebServiceButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					this.console.log("Run web service button works...");
 
                  
					// get id from type lookup type object
					var typeObject = await request.$context.PDS_UsrType_xlmo5d5;
					var typeId = "";
					if (typeObject) {
						typeId = typeObject.value;
					}
                  

					// get id from type lookup offer type object

					var offerTypeObject = await request.$context.PDS_UsrOfferType_66up9j8;

					var offerTypeId = "";

					if (offerTypeObject)
                    {
						offerTypeId = offerTypeObject.value;

					}
                  
                    /* Create an instance of the HTTP client from @creatio-devkit/common. */
					const httpClientService = new sdk.HttpClientService();
                  

					/* Specify the URL to retrieve the current rate. Use the coindesk.com external service. */

					const baseUrl = Terrasoft.utils.uri.getConfigurationWebServiceBaseUrl();

					const transferName = "rest";

					const serviceName = "RealtyService";

					const methodName = "GetMinPriceByTypeId";

					const endpoint = Terrasoft.combinePath(baseUrl, transferName, serviceName, methodName);
                  
					//const endpoint = "http://in-9knz2j3:9010/0/rest/RealtyService/GetMinPriceByTypeId";

					/* Send a POST HTTP request. The HTTP client converts the response body from JSON to a JS object automatically. */
      					var params = {

						realtyTypeId: typeId,

						realtyOfferTypeId: offerTypeId,

						entityName: "UsrRealty"

					};

					const response = await httpClientService.post(endpoint, params);
                    this.console.log("response min price = " + response.body.GetMinPriceByTypeIdResult);

					/* Call the next handler if it exists and return its result. */

					return next?.handle(request);

				}

			},

          
        ]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
          
            /* The validator type must contain a vendor prefix.
               Format the validator type in PascalCase. */
               "usr.DGValidator": {
                validator: function (config) {
                        return function (control) {

                        let value = control.value;
                        let minValue = config.minValue;

                        let valueIsCorrect = value >= minValue;
                        var result;
                        if (valueIsCorrect) {
                            result = null;
                        } else {
                            result = {
                                "usr.DGValidator": { 
                                   message: config.message
                                 }
                           };

                        }
                        
return result;
                     };
                },
                params: [
                    {
                        name: "minValue"
                    },
                    {
                        name: "message"
                    }
                ],
                async: false
            }

		
          
        }/**SCHEMA_VALIDATORS*/
	};
});