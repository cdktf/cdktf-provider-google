/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApihubPluginConfig extends cdktf.TerraformMetaArguments {
  /**
  * The plugin description. Max length is 2000 characters (Unicode code
  * points).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#description ApihubPlugin#description}
  */
  readonly description?: string;
  /**
  * The display name of the plugin. Max length is 50 characters (Unicode code
  * points).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#id ApihubPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#location ApihubPlugin#location}
  */
  readonly location: string;
  /**
  * Possible values:
  * PLUGIN_CATEGORY_UNSPECIFIED
  * API_GATEWAY
  * API_PRODUCER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#plugin_category ApihubPlugin#plugin_category}
  */
  readonly pluginCategory?: string;
  /**
  * The ID to use for the Plugin resource, which will become the final
  * component of the Plugin's resource name. This field is optional.
  * 
  * * If provided, the same will be used. The service will throw an error if
  * the specified id is already used by another Plugin resource in the API hub
  * instance.
  * * If not provided, a system generated id will be used.
  * 
  * This value should be 4-63 characters, overall resource name which will be
  * of format
  * 'projects/{project}/locations/{location}/plugins/{plugin}',
  * its length is limited to 1000 characters and valid characters are
  * /a-z[0-9]-_/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#plugin_id ApihubPlugin#plugin_id}
  */
  readonly pluginId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#project ApihubPlugin#project}
  */
  readonly project?: string;
  /**
  * actions_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#actions_config ApihubPlugin#actions_config}
  */
  readonly actionsConfig?: ApihubPluginActionsConfig[] | cdktf.IResolvable;
  /**
  * config_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#config_template ApihubPlugin#config_template}
  */
  readonly configTemplate?: ApihubPluginConfigTemplate;
  /**
  * documentation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#documentation ApihubPlugin#documentation}
  */
  readonly documentation?: ApihubPluginDocumentation;
  /**
  * hosting_service block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#hosting_service ApihubPlugin#hosting_service}
  */
  readonly hostingService?: ApihubPluginHostingService;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#timeouts ApihubPlugin#timeouts}
  */
  readonly timeouts?: ApihubPluginTimeouts;
}
export interface ApihubPluginActionsConfig {
  /**
  * The description of the operation performed by the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#description ApihubPlugin#description}
  */
  readonly description: string;
  /**
  * The display name of the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}
  */
  readonly displayName: string;
  /**
  * The id of the action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#id ApihubPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The trigger mode supported by the action.
  * Possible values:
  * TRIGGER_MODE_UNSPECIFIED
  * API_HUB_ON_DEMAND_TRIGGER
  * API_HUB_SCHEDULE_TRIGGER
  * NON_API_HUB_MANAGED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#trigger_mode ApihubPlugin#trigger_mode}
  */
  readonly triggerMode: string;
}

export function apihubPluginActionsConfigToTerraform(struct?: ApihubPluginActionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
    trigger_mode: cdktf.stringToTerraform(struct!.triggerMode),
  }
}


export function apihubPluginActionsConfigToHclTerraform(struct?: ApihubPluginActionsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trigger_mode: {
      value: cdktf.stringToHclTerraform(struct!.triggerMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginActionsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApihubPluginActionsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._triggerMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.triggerMode = this._triggerMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginActionsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._id = undefined;
      this._triggerMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._id = value.id;
      this._triggerMode = value.triggerMode;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // trigger_mode - computed: false, optional: false, required: true
  private _triggerMode?: string; 
  public get triggerMode() {
    return this.getStringAttribute('trigger_mode');
  }
  public set triggerMode(value: string) {
    this._triggerMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerModeInput() {
    return this._triggerMode;
  }
}

export class ApihubPluginActionsConfigList extends cdktf.ComplexList {
  public internalValue? : ApihubPluginActionsConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApihubPluginActionsConfigOutputReference {
    return new ApihubPluginActionsConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions {
  /**
  * Description of the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#description ApihubPlugin#description}
  */
  readonly description?: string;
  /**
  * Display name of the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}
  */
  readonly displayName: string;
  /**
  * Id of the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#id ApihubPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function apihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsToTerraform(struct?: ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function apihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsToHclTerraform(struct?: ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList extends cdktf.ComplexList {
  public internalValue? : ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference {
    return new ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions {
  /**
  * Description of the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#description ApihubPlugin#description}
  */
  readonly description?: string;
  /**
  * Display name of the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#display_name ApihubPlugin#display_name}
  */
  readonly displayName: string;
  /**
  * Id of the option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#id ApihubPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function apihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsToTerraform(struct?: ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function apihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsToHclTerraform(struct?: ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._id = value.id;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

export class ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList extends cdktf.ComplexList {
  public internalValue? : ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference {
    return new ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApihubPluginConfigTemplateAdditionalConfigTemplate {
  /**
  * Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#description ApihubPlugin#description}
  */
  readonly description?: string;
  /**
  * ID of the config variable. Must be unique within the configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#id ApihubPlugin#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Flag represents that this 'ConfigVariable' must be provided for a
  * PluginInstance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#required ApihubPlugin#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
  /**
  * Regular expression in RE2 syntax used for validating the 'value' of a
  * 'ConfigVariable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#validation_regex ApihubPlugin#validation_regex}
  */
  readonly validationRegex?: string;
  /**
  * Type of the parameter: string, int, bool etc.
  * Possible values:
  * VALUE_TYPE_UNSPECIFIED
  * STRING
  * INT
  * BOOL
  * SECRET
  * ENUM
  * MULTI_SELECT
  * MULTI_STRING
  * MULTI_INT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#value_type ApihubPlugin#value_type}
  */
  readonly valueType: string;
  /**
  * enum_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#enum_options ApihubPlugin#enum_options}
  */
  readonly enumOptions?: ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[] | cdktf.IResolvable;
  /**
  * multi_select_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#multi_select_options ApihubPlugin#multi_select_options}
  */
  readonly multiSelectOptions?: ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[] | cdktf.IResolvable;
}

export function apihubPluginConfigTemplateAdditionalConfigTemplateToTerraform(struct?: ApihubPluginConfigTemplateAdditionalConfigTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    required: cdktf.booleanToTerraform(struct!.required),
    validation_regex: cdktf.stringToTerraform(struct!.validationRegex),
    value_type: cdktf.stringToTerraform(struct!.valueType),
    enum_options: cdktf.listMapper(apihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsToTerraform, true)(struct!.enumOptions),
    multi_select_options: cdktf.listMapper(apihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsToTerraform, true)(struct!.multiSelectOptions),
  }
}


export function apihubPluginConfigTemplateAdditionalConfigTemplateToHclTerraform(struct?: ApihubPluginConfigTemplateAdditionalConfigTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validation_regex: {
      value: cdktf.stringToHclTerraform(struct!.validationRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_type: {
      value: cdktf.stringToHclTerraform(struct!.valueType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum_options: {
      value: cdktf.listMapperHcl(apihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsToHclTerraform, true)(struct!.enumOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList",
    },
    multi_select_options: {
      value: cdktf.listMapperHcl(apihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsToHclTerraform, true)(struct!.multiSelectOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApihubPluginConfigTemplateAdditionalConfigTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._validationRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationRegex = this._validationRegex;
    }
    if (this._valueType !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueType = this._valueType;
    }
    if (this._enumOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumOptions = this._enumOptions?.internalValue;
    }
    if (this._multiSelectOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiSelectOptions = this._multiSelectOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginConfigTemplateAdditionalConfigTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._id = undefined;
      this._required = undefined;
      this._validationRegex = undefined;
      this._valueType = undefined;
      this._enumOptions.internalValue = undefined;
      this._multiSelectOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._id = value.id;
      this._required = value.required;
      this._validationRegex = value.validationRegex;
      this._valueType = value.valueType;
      this._enumOptions.internalValue = value.enumOptions;
      this._multiSelectOptions.internalValue = value.multiSelectOptions;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // validation_regex - computed: false, optional: true, required: false
  private _validationRegex?: string; 
  public get validationRegex() {
    return this.getStringAttribute('validation_regex');
  }
  public set validationRegex(value: string) {
    this._validationRegex = value;
  }
  public resetValidationRegex() {
    this._validationRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationRegexInput() {
    return this._validationRegex;
  }

  // value_type - computed: false, optional: false, required: true
  private _valueType?: string; 
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
  public set valueType(value: string) {
    this._valueType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueTypeInput() {
    return this._valueType;
  }

  // enum_options - computed: false, optional: true, required: false
  private _enumOptions = new ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptionsList(this, "enum_options", false);
  public get enumOptions() {
    return this._enumOptions;
  }
  public putEnumOptions(value: ApihubPluginConfigTemplateAdditionalConfigTemplateEnumOptions[] | cdktf.IResolvable) {
    this._enumOptions.internalValue = value;
  }
  public resetEnumOptions() {
    this._enumOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumOptionsInput() {
    return this._enumOptions.internalValue;
  }

  // multi_select_options - computed: false, optional: true, required: false
  private _multiSelectOptions = new ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptionsList(this, "multi_select_options", false);
  public get multiSelectOptions() {
    return this._multiSelectOptions;
  }
  public putMultiSelectOptions(value: ApihubPluginConfigTemplateAdditionalConfigTemplateMultiSelectOptions[] | cdktf.IResolvable) {
    this._multiSelectOptions.internalValue = value;
  }
  public resetMultiSelectOptions() {
    this._multiSelectOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiSelectOptionsInput() {
    return this._multiSelectOptions.internalValue;
  }
}

export class ApihubPluginConfigTemplateAdditionalConfigTemplateList extends cdktf.ComplexList {
  public internalValue? : ApihubPluginConfigTemplateAdditionalConfigTemplate[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference {
    return new ApihubPluginConfigTemplateAdditionalConfigTemplateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount {
  /**
  * The service account to be used for authenticating request.
  * 
  * The 'iam.serviceAccounts.getAccessToken' permission should be granted on
  * this service account to the impersonator service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}
  */
  readonly serviceAccount: string;
}

export function apihubPluginConfigTemplateAuthConfigTemplateServiceAccountToTerraform(struct?: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference | ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function apihubPluginConfigTemplateAuthConfigTemplateServiceAccountToHclTerraform(struct?: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference | ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceAccount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceAccount = value.serviceAccount;
    }
  }

  // service_account - computed: false, optional: false, required: true
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }
}
export interface ApihubPluginConfigTemplateAuthConfigTemplate {
  /**
  * The list of authentication types supported by the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#supported_auth_types ApihubPlugin#supported_auth_types}
  */
  readonly supportedAuthTypes: string[];
  /**
  * service_account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#service_account ApihubPlugin#service_account}
  */
  readonly serviceAccount?: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount;
}

export function apihubPluginConfigTemplateAuthConfigTemplateToTerraform(struct?: ApihubPluginConfigTemplateAuthConfigTemplateOutputReference | ApihubPluginConfigTemplateAuthConfigTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    supported_auth_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedAuthTypes),
    service_account: apihubPluginConfigTemplateAuthConfigTemplateServiceAccountToTerraform(struct!.serviceAccount),
  }
}


export function apihubPluginConfigTemplateAuthConfigTemplateToHclTerraform(struct?: ApihubPluginConfigTemplateAuthConfigTemplateOutputReference | ApihubPluginConfigTemplateAuthConfigTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    supported_auth_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedAuthTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    service_account: {
      value: apihubPluginConfigTemplateAuthConfigTemplateServiceAccountToHclTerraform(struct!.serviceAccount),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginConfigTemplateAuthConfigTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginConfigTemplateAuthConfigTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._supportedAuthTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedAuthTypes = this._supportedAuthTypes;
    }
    if (this._serviceAccount?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginConfigTemplateAuthConfigTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._supportedAuthTypes = undefined;
      this._serviceAccount.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._supportedAuthTypes = value.supportedAuthTypes;
      this._serviceAccount.internalValue = value.serviceAccount;
    }
  }

  // supported_auth_types - computed: false, optional: false, required: true
  private _supportedAuthTypes?: string[]; 
  public get supportedAuthTypes() {
    return this.getListAttribute('supported_auth_types');
  }
  public set supportedAuthTypes(value: string[]) {
    this._supportedAuthTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedAuthTypesInput() {
    return this._supportedAuthTypes;
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount = new ApihubPluginConfigTemplateAuthConfigTemplateServiceAccountOutputReference(this, "service_account");
  public get serviceAccount() {
    return this._serviceAccount;
  }
  public putServiceAccount(value: ApihubPluginConfigTemplateAuthConfigTemplateServiceAccount) {
    this._serviceAccount.internalValue = value;
  }
  public resetServiceAccount() {
    this._serviceAccount.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount.internalValue;
  }
}
export interface ApihubPluginConfigTemplate {
  /**
  * additional_config_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#additional_config_template ApihubPlugin#additional_config_template}
  */
  readonly additionalConfigTemplate?: ApihubPluginConfigTemplateAdditionalConfigTemplate[] | cdktf.IResolvable;
  /**
  * auth_config_template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#auth_config_template ApihubPlugin#auth_config_template}
  */
  readonly authConfigTemplate?: ApihubPluginConfigTemplateAuthConfigTemplate;
}

export function apihubPluginConfigTemplateToTerraform(struct?: ApihubPluginConfigTemplateOutputReference | ApihubPluginConfigTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_config_template: cdktf.listMapper(apihubPluginConfigTemplateAdditionalConfigTemplateToTerraform, true)(struct!.additionalConfigTemplate),
    auth_config_template: apihubPluginConfigTemplateAuthConfigTemplateToTerraform(struct!.authConfigTemplate),
  }
}


export function apihubPluginConfigTemplateToHclTerraform(struct?: ApihubPluginConfigTemplateOutputReference | ApihubPluginConfigTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_config_template: {
      value: cdktf.listMapperHcl(apihubPluginConfigTemplateAdditionalConfigTemplateToHclTerraform, true)(struct!.additionalConfigTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginConfigTemplateAdditionalConfigTemplateList",
    },
    auth_config_template: {
      value: apihubPluginConfigTemplateAuthConfigTemplateToHclTerraform(struct!.authConfigTemplate),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginConfigTemplateAuthConfigTemplateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginConfigTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginConfigTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalConfigTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalConfigTemplate = this._additionalConfigTemplate?.internalValue;
    }
    if (this._authConfigTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authConfigTemplate = this._authConfigTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginConfigTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalConfigTemplate.internalValue = undefined;
      this._authConfigTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalConfigTemplate.internalValue = value.additionalConfigTemplate;
      this._authConfigTemplate.internalValue = value.authConfigTemplate;
    }
  }

  // additional_config_template - computed: false, optional: true, required: false
  private _additionalConfigTemplate = new ApihubPluginConfigTemplateAdditionalConfigTemplateList(this, "additional_config_template", false);
  public get additionalConfigTemplate() {
    return this._additionalConfigTemplate;
  }
  public putAdditionalConfigTemplate(value: ApihubPluginConfigTemplateAdditionalConfigTemplate[] | cdktf.IResolvable) {
    this._additionalConfigTemplate.internalValue = value;
  }
  public resetAdditionalConfigTemplate() {
    this._additionalConfigTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalConfigTemplateInput() {
    return this._additionalConfigTemplate.internalValue;
  }

  // auth_config_template - computed: false, optional: true, required: false
  private _authConfigTemplate = new ApihubPluginConfigTemplateAuthConfigTemplateOutputReference(this, "auth_config_template");
  public get authConfigTemplate() {
    return this._authConfigTemplate;
  }
  public putAuthConfigTemplate(value: ApihubPluginConfigTemplateAuthConfigTemplate) {
    this._authConfigTemplate.internalValue = value;
  }
  public resetAuthConfigTemplate() {
    this._authConfigTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigTemplateInput() {
    return this._authConfigTemplate.internalValue;
  }
}
export interface ApihubPluginDocumentation {
  /**
  * The uri of the externally hosted documentation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#external_uri ApihubPlugin#external_uri}
  */
  readonly externalUri?: string;
}

export function apihubPluginDocumentationToTerraform(struct?: ApihubPluginDocumentationOutputReference | ApihubPluginDocumentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_uri: cdktf.stringToTerraform(struct!.externalUri),
  }
}


export function apihubPluginDocumentationToHclTerraform(struct?: ApihubPluginDocumentationOutputReference | ApihubPluginDocumentation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_uri: {
      value: cdktf.stringToHclTerraform(struct!.externalUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginDocumentationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginDocumentation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUri = this._externalUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginDocumentation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._externalUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._externalUri = value.externalUri;
    }
  }

  // external_uri - computed: false, optional: true, required: false
  private _externalUri?: string; 
  public get externalUri() {
    return this.getStringAttribute('external_uri');
  }
  public set externalUri(value: string) {
    this._externalUri = value;
  }
  public resetExternalUri() {
    this._externalUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUriInput() {
    return this._externalUri;
  }
}
export interface ApihubPluginHostingService {
  /**
  * The URI of the service implemented by the plugin developer, used to
  * invoke the plugin's functionality. This information is only required for
  * user defined plugins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#service_uri ApihubPlugin#service_uri}
  */
  readonly serviceUri?: string;
}

export function apihubPluginHostingServiceToTerraform(struct?: ApihubPluginHostingServiceOutputReference | ApihubPluginHostingService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_uri: cdktf.stringToTerraform(struct!.serviceUri),
  }
}


export function apihubPluginHostingServiceToHclTerraform(struct?: ApihubPluginHostingServiceOutputReference | ApihubPluginHostingService): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_uri: {
      value: cdktf.stringToHclTerraform(struct!.serviceUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginHostingServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginHostingService | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceUri = this._serviceUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginHostingService | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._serviceUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._serviceUri = value.serviceUri;
    }
  }

  // service_uri - computed: false, optional: true, required: false
  private _serviceUri?: string; 
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }
  public set serviceUri(value: string) {
    this._serviceUri = value;
  }
  public resetServiceUri() {
    this._serviceUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceUriInput() {
    return this._serviceUri;
  }
}
export interface ApihubPluginTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#create ApihubPlugin#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#delete ApihubPlugin#delete}
  */
  readonly delete?: string;
}

export function apihubPluginTimeoutsToTerraform(struct?: ApihubPluginTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function apihubPluginTimeoutsToHclTerraform(struct?: ApihubPluginTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApihubPluginTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin google_apihub_plugin}
*/
export class ApihubPlugin extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apihub_plugin";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApihubPlugin resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApihubPlugin to import
  * @param importFromId The id of the existing ApihubPlugin that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApihubPlugin to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apihub_plugin", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin google_apihub_plugin} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApihubPluginConfig
  */
  public constructor(scope: Construct, id: string, config: ApihubPluginConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apihub_plugin',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.46.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._pluginCategory = config.pluginCategory;
    this._pluginId = config.pluginId;
    this._project = config.project;
    this._actionsConfig.internalValue = config.actionsConfig;
    this._configTemplate.internalValue = config.configTemplate;
    this._documentation.internalValue = config.documentation;
    this._hostingService.internalValue = config.hostingService;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // ownership_type - computed: true, optional: false, required: false
  public get ownershipType() {
    return this.getStringAttribute('ownership_type');
  }

  // plugin_category - computed: false, optional: true, required: false
  private _pluginCategory?: string; 
  public get pluginCategory() {
    return this.getStringAttribute('plugin_category');
  }
  public set pluginCategory(value: string) {
    this._pluginCategory = value;
  }
  public resetPluginCategory() {
    this._pluginCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginCategoryInput() {
    return this._pluginCategory;
  }

  // plugin_id - computed: false, optional: false, required: true
  private _pluginId?: string; 
  public get pluginId() {
    return this.getStringAttribute('plugin_id');
  }
  public set pluginId(value: string) {
    this._pluginId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginIdInput() {
    return this._pluginId;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // actions_config - computed: false, optional: true, required: false
  private _actionsConfig = new ApihubPluginActionsConfigList(this, "actions_config", false);
  public get actionsConfig() {
    return this._actionsConfig;
  }
  public putActionsConfig(value: ApihubPluginActionsConfig[] | cdktf.IResolvable) {
    this._actionsConfig.internalValue = value;
  }
  public resetActionsConfig() {
    this._actionsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsConfigInput() {
    return this._actionsConfig.internalValue;
  }

  // config_template - computed: false, optional: true, required: false
  private _configTemplate = new ApihubPluginConfigTemplateOutputReference(this, "config_template");
  public get configTemplate() {
    return this._configTemplate;
  }
  public putConfigTemplate(value: ApihubPluginConfigTemplate) {
    this._configTemplate.internalValue = value;
  }
  public resetConfigTemplate() {
    this._configTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configTemplateInput() {
    return this._configTemplate.internalValue;
  }

  // documentation - computed: false, optional: true, required: false
  private _documentation = new ApihubPluginDocumentationOutputReference(this, "documentation");
  public get documentation() {
    return this._documentation;
  }
  public putDocumentation(value: ApihubPluginDocumentation) {
    this._documentation.internalValue = value;
  }
  public resetDocumentation() {
    this._documentation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentationInput() {
    return this._documentation.internalValue;
  }

  // hosting_service - computed: false, optional: true, required: false
  private _hostingService = new ApihubPluginHostingServiceOutputReference(this, "hosting_service");
  public get hostingService() {
    return this._hostingService;
  }
  public putHostingService(value: ApihubPluginHostingService) {
    this._hostingService.internalValue = value;
  }
  public resetHostingService() {
    this._hostingService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostingServiceInput() {
    return this._hostingService.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApihubPluginTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApihubPluginTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      plugin_category: cdktf.stringToTerraform(this._pluginCategory),
      plugin_id: cdktf.stringToTerraform(this._pluginId),
      project: cdktf.stringToTerraform(this._project),
      actions_config: cdktf.listMapper(apihubPluginActionsConfigToTerraform, true)(this._actionsConfig.internalValue),
      config_template: apihubPluginConfigTemplateToTerraform(this._configTemplate.internalValue),
      documentation: apihubPluginDocumentationToTerraform(this._documentation.internalValue),
      hosting_service: apihubPluginHostingServiceToTerraform(this._hostingService.internalValue),
      timeouts: apihubPluginTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_category: {
        value: cdktf.stringToHclTerraform(this._pluginCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_id: {
        value: cdktf.stringToHclTerraform(this._pluginId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      actions_config: {
        value: cdktf.listMapperHcl(apihubPluginActionsConfigToHclTerraform, true)(this._actionsConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApihubPluginActionsConfigList",
      },
      config_template: {
        value: apihubPluginConfigTemplateToHclTerraform(this._configTemplate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApihubPluginConfigTemplateList",
      },
      documentation: {
        value: apihubPluginDocumentationToHclTerraform(this._documentation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApihubPluginDocumentationList",
      },
      hosting_service: {
        value: apihubPluginHostingServiceToHclTerraform(this._hostingService.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApihubPluginHostingServiceList",
      },
      timeouts: {
        value: apihubPluginTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApihubPluginTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
