/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApihubPluginInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for this plugin instance. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#disable ApihubPluginInstance#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * The display name for this plugin instance. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#display_name ApihubPluginInstance#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#id ApihubPluginInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#location ApihubPluginInstance#location}
  */
  readonly location: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#plugin ApihubPluginInstance#plugin}
  */
  readonly plugin: string;
  /**
  * The ID to use for the plugin instance, which will become the final
  * component of the plugin instance's resource name. This field is optional.
  * 
  * * If provided, the same will be used. The service will throw an error if
  * the specified id is already used by another plugin instance in the plugin
  * resource.
  * * If not provided, a system generated id will be used.
  * 
  * This value should be 4-63 characters, and valid characters
  * are /a-z[0-9]-_/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#plugin_instance_id ApihubPluginInstance#plugin_instance_id}
  */
  readonly pluginInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#project ApihubPluginInstance#project}
  */
  readonly project?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#actions ApihubPluginInstance#actions}
  */
  readonly actions?: ApihubPluginInstanceActions[] | cdktf.IResolvable;
  /**
  * auth_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#auth_config ApihubPluginInstance#auth_config}
  */
  readonly authConfig?: ApihubPluginInstanceAuthConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#timeouts ApihubPluginInstance#timeouts}
  */
  readonly timeouts?: ApihubPluginInstanceTimeouts;
}
export interface ApihubPluginInstanceActionsHubInstanceActionLastExecution {
}

export function apihubPluginInstanceActionsHubInstanceActionLastExecutionToTerraform(struct?: ApihubPluginInstanceActionsHubInstanceActionLastExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apihubPluginInstanceActionsHubInstanceActionLastExecutionToHclTerraform(struct?: ApihubPluginInstanceActionsHubInstanceActionLastExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApihubPluginInstanceActionsHubInstanceActionLastExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceActionsHubInstanceActionLastExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // end_time - computed: true, optional: false, required: false
  public get endTime() {
    return this.getStringAttribute('end_time');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // result - computed: true, optional: false, required: false
  public get result() {
    return this.getStringAttribute('result');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
}

export class ApihubPluginInstanceActionsHubInstanceActionLastExecutionList extends cdktf.ComplexList {

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
  public get(index: number): ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference {
    return new ApihubPluginInstanceActionsHubInstanceActionLastExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApihubPluginInstanceActionsHubInstanceAction {
}

export function apihubPluginInstanceActionsHubInstanceActionToTerraform(struct?: ApihubPluginInstanceActionsHubInstanceAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apihubPluginInstanceActionsHubInstanceActionToHclTerraform(struct?: ApihubPluginInstanceActionsHubInstanceAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApihubPluginInstanceActionsHubInstanceActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApihubPluginInstanceActionsHubInstanceAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceActionsHubInstanceAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_execution_state - computed: true, optional: false, required: false
  public get currentExecutionState() {
    return this.getStringAttribute('current_execution_state');
  }

  // last_execution - computed: true, optional: false, required: false
  private _lastExecution = new ApihubPluginInstanceActionsHubInstanceActionLastExecutionList(this, "last_execution", false);
  public get lastExecution() {
    return this._lastExecution;
  }
}

export class ApihubPluginInstanceActionsHubInstanceActionList extends cdktf.ComplexList {

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
  public get(index: number): ApihubPluginInstanceActionsHubInstanceActionOutputReference {
    return new ApihubPluginInstanceActionsHubInstanceActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApihubPluginInstanceActionsCurationConfigCustomCuration {
  /**
  * The unique name of the curation resource. This will be the name of the
  * curation resource in the format:
  * 'projects/{project}/locations/{location}/curations/{curation}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#curation ApihubPluginInstance#curation}
  */
  readonly curation: string;
}

export function apihubPluginInstanceActionsCurationConfigCustomCurationToTerraform(struct?: ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference | ApihubPluginInstanceActionsCurationConfigCustomCuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curation: cdktf.stringToTerraform(struct!.curation),
  }
}


export function apihubPluginInstanceActionsCurationConfigCustomCurationToHclTerraform(struct?: ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference | ApihubPluginInstanceActionsCurationConfigCustomCuration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curation: {
      value: cdktf.stringToHclTerraform(struct!.curation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceActionsCurationConfigCustomCuration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curation !== undefined) {
      hasAnyValues = true;
      internalValueResult.curation = this._curation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceActionsCurationConfigCustomCuration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._curation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._curation = value.curation;
    }
  }

  // curation - computed: false, optional: false, required: true
  private _curation?: string; 
  public get curation() {
    return this.getStringAttribute('curation');
  }
  public set curation(value: string) {
    this._curation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get curationInput() {
    return this._curation;
  }
}
export interface ApihubPluginInstanceActionsCurationConfig {
  /**
  * Possible values:
  * CURATION_TYPE_UNSPECIFIED
  * DEFAULT_CURATION_FOR_API_METADATA
  * CUSTOM_CURATION_FOR_API_METADATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#curation_type ApihubPluginInstance#curation_type}
  */
  readonly curationType?: string;
  /**
  * custom_curation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#custom_curation ApihubPluginInstance#custom_curation}
  */
  readonly customCuration?: ApihubPluginInstanceActionsCurationConfigCustomCuration;
}

export function apihubPluginInstanceActionsCurationConfigToTerraform(struct?: ApihubPluginInstanceActionsCurationConfigOutputReference | ApihubPluginInstanceActionsCurationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curation_type: cdktf.stringToTerraform(struct!.curationType),
    custom_curation: apihubPluginInstanceActionsCurationConfigCustomCurationToTerraform(struct!.customCuration),
  }
}


export function apihubPluginInstanceActionsCurationConfigToHclTerraform(struct?: ApihubPluginInstanceActionsCurationConfigOutputReference | ApihubPluginInstanceActionsCurationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curation_type: {
      value: cdktf.stringToHclTerraform(struct!.curationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_curation: {
      value: apihubPluginInstanceActionsCurationConfigCustomCurationToHclTerraform(struct!.customCuration),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceActionsCurationConfigCustomCurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceActionsCurationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceActionsCurationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._curationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.curationType = this._curationType;
    }
    if (this._customCuration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCuration = this._customCuration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceActionsCurationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._curationType = undefined;
      this._customCuration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._curationType = value.curationType;
      this._customCuration.internalValue = value.customCuration;
    }
  }

  // curation_type - computed: true, optional: true, required: false
  private _curationType?: string; 
  public get curationType() {
    return this.getStringAttribute('curation_type');
  }
  public set curationType(value: string) {
    this._curationType = value;
  }
  public resetCurationType() {
    this._curationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curationTypeInput() {
    return this._curationType;
  }

  // custom_curation - computed: false, optional: true, required: false
  private _customCuration = new ApihubPluginInstanceActionsCurationConfigCustomCurationOutputReference(this, "custom_curation");
  public get customCuration() {
    return this._customCuration;
  }
  public putCustomCuration(value: ApihubPluginInstanceActionsCurationConfigCustomCuration) {
    this._customCuration.internalValue = value;
  }
  public resetCustomCuration() {
    this._customCuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCurationInput() {
    return this._customCuration.internalValue;
  }
}
export interface ApihubPluginInstanceActions {
  /**
  * This should map to one of the action id specified
  * in actions_config in the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#action_id ApihubPluginInstance#action_id}
  */
  readonly actionId: string;
  /**
  * The schedule for this plugin instance action. This can only be set if the
  * plugin supports API_HUB_SCHEDULE_TRIGGER mode for this action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#schedule_cron_expression ApihubPluginInstance#schedule_cron_expression}
  */
  readonly scheduleCronExpression?: string;
  /**
  * The time zone for the schedule cron expression. If not provided, UTC will
  * be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#schedule_time_zone ApihubPluginInstance#schedule_time_zone}
  */
  readonly scheduleTimeZone?: string;
  /**
  * curation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#curation_config ApihubPluginInstance#curation_config}
  */
  readonly curationConfig?: ApihubPluginInstanceActionsCurationConfig;
}

export function apihubPluginInstanceActionsToTerraform(struct?: ApihubPluginInstanceActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_id: cdktf.stringToTerraform(struct!.actionId),
    schedule_cron_expression: cdktf.stringToTerraform(struct!.scheduleCronExpression),
    schedule_time_zone: cdktf.stringToTerraform(struct!.scheduleTimeZone),
    curation_config: apihubPluginInstanceActionsCurationConfigToTerraform(struct!.curationConfig),
  }
}


export function apihubPluginInstanceActionsToHclTerraform(struct?: ApihubPluginInstanceActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_id: {
      value: cdktf.stringToHclTerraform(struct!.actionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.scheduleCronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.scheduleTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    curation_config: {
      value: apihubPluginInstanceActionsCurationConfigToHclTerraform(struct!.curationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceActionsCurationConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApihubPluginInstanceActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionId = this._actionId;
    }
    if (this._scheduleCronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleCronExpression = this._scheduleCronExpression;
    }
    if (this._scheduleTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTimeZone = this._scheduleTimeZone;
    }
    if (this._curationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.curationConfig = this._curationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._actionId = undefined;
      this._scheduleCronExpression = undefined;
      this._scheduleTimeZone = undefined;
      this._curationConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._actionId = value.actionId;
      this._scheduleCronExpression = value.scheduleCronExpression;
      this._scheduleTimeZone = value.scheduleTimeZone;
      this._curationConfig.internalValue = value.curationConfig;
    }
  }

  // action_id - computed: false, optional: false, required: true
  private _actionId?: string; 
  public get actionId() {
    return this.getStringAttribute('action_id');
  }
  public set actionId(value: string) {
    this._actionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionIdInput() {
    return this._actionId;
  }

  // hub_instance_action - computed: true, optional: false, required: false
  private _hubInstanceAction = new ApihubPluginInstanceActionsHubInstanceActionList(this, "hub_instance_action", false);
  public get hubInstanceAction() {
    return this._hubInstanceAction;
  }

  // schedule_cron_expression - computed: true, optional: true, required: false
  private _scheduleCronExpression?: string; 
  public get scheduleCronExpression() {
    return this.getStringAttribute('schedule_cron_expression');
  }
  public set scheduleCronExpression(value: string) {
    this._scheduleCronExpression = value;
  }
  public resetScheduleCronExpression() {
    this._scheduleCronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleCronExpressionInput() {
    return this._scheduleCronExpression;
  }

  // schedule_time_zone - computed: true, optional: true, required: false
  private _scheduleTimeZone?: string; 
  public get scheduleTimeZone() {
    return this.getStringAttribute('schedule_time_zone');
  }
  public set scheduleTimeZone(value: string) {
    this._scheduleTimeZone = value;
  }
  public resetScheduleTimeZone() {
    this._scheduleTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTimeZoneInput() {
    return this._scheduleTimeZone;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // curation_config - computed: false, optional: true, required: false
  private _curationConfig = new ApihubPluginInstanceActionsCurationConfigOutputReference(this, "curation_config");
  public get curationConfig() {
    return this._curationConfig;
  }
  public putCurationConfig(value: ApihubPluginInstanceActionsCurationConfig) {
    this._curationConfig.internalValue = value;
  }
  public resetCurationConfig() {
    this._curationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get curationConfigInput() {
    return this._curationConfig.internalValue;
  }
}

export class ApihubPluginInstanceActionsList extends cdktf.ComplexList {
  public internalValue? : ApihubPluginInstanceActions[] | cdktf.IResolvable

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
  public get(index: number): ApihubPluginInstanceActionsOutputReference {
    return new ApihubPluginInstanceActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApihubPluginInstanceAuthConfigApiKeyConfigApiKey {
  /**
  * The resource name of the secret version in the format,
  * format as: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function apihubPluginInstanceAuthConfigApiKeyConfigApiKeyToTerraform(struct?: ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference | ApihubPluginInstanceAuthConfigApiKeyConfigApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function apihubPluginInstanceAuthConfigApiKeyConfigApiKeyToHclTerraform(struct?: ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference | ApihubPluginInstanceAuthConfigApiKeyConfigApiKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfigApiKeyConfigApiKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfigApiKeyConfigApiKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface ApihubPluginInstanceAuthConfigApiKeyConfig {
  /**
  * The location of the API key.
  * The default value is QUERY.
  * Possible values:
  * HTTP_ELEMENT_LOCATION_UNSPECIFIED
  * QUERY
  * HEADER
  * PATH
  * BODY
  * COOKIE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#http_element_location ApihubPluginInstance#http_element_location}
  */
  readonly httpElementLocation: string;
  /**
  * The parameter name of the API key.
  * E.g. If the API request is "https://example.com/act?api_key=",
  * "api_key" would be the parameter name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#name ApihubPluginInstance#name}
  */
  readonly name: string;
  /**
  * api_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#api_key ApihubPluginInstance#api_key}
  */
  readonly apiKey: ApihubPluginInstanceAuthConfigApiKeyConfigApiKey;
}

export function apihubPluginInstanceAuthConfigApiKeyConfigToTerraform(struct?: ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference | ApihubPluginInstanceAuthConfigApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_element_location: cdktf.stringToTerraform(struct!.httpElementLocation),
    name: cdktf.stringToTerraform(struct!.name),
    api_key: apihubPluginInstanceAuthConfigApiKeyConfigApiKeyToTerraform(struct!.apiKey),
  }
}


export function apihubPluginInstanceAuthConfigApiKeyConfigToHclTerraform(struct?: ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference | ApihubPluginInstanceAuthConfigApiKeyConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_element_location: {
      value: cdktf.stringToHclTerraform(struct!.httpElementLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key: {
      value: apihubPluginInstanceAuthConfigApiKeyConfigApiKeyToHclTerraform(struct!.apiKey),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfigApiKeyConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpElementLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpElementLocation = this._httpElementLocation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._apiKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKey = this._apiKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfigApiKeyConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpElementLocation = undefined;
      this._name = undefined;
      this._apiKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpElementLocation = value.httpElementLocation;
      this._name = value.name;
      this._apiKey.internalValue = value.apiKey;
    }
  }

  // http_element_location - computed: false, optional: false, required: true
  private _httpElementLocation?: string; 
  public get httpElementLocation() {
    return this.getStringAttribute('http_element_location');
  }
  public set httpElementLocation(value: string) {
    this._httpElementLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpElementLocationInput() {
    return this._httpElementLocation;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // api_key - computed: false, optional: false, required: true
  private _apiKey = new ApihubPluginInstanceAuthConfigApiKeyConfigApiKeyOutputReference(this, "api_key");
  public get apiKey() {
    return this._apiKey;
  }
  public putApiKey(value: ApihubPluginInstanceAuthConfigApiKeyConfigApiKey) {
    this._apiKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey.internalValue;
  }
}
export interface ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig {
  /**
  * The service account to be used for authenticating request.
  * 
  * The 'iam.serviceAccounts.getAccessToken' permission should be granted on
  * this service account to the impersonator service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#service_account ApihubPluginInstance#service_account}
  */
  readonly serviceAccount: string;
}

export function apihubPluginInstanceAuthConfigGoogleServiceAccountConfigToTerraform(struct?: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference | ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
  }
}


export function apihubPluginInstanceAuthConfigGoogleServiceAccountConfigToHclTerraform(struct?: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference | ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig): any {
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

export class ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig | undefined) {
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
export interface ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret {
  /**
  * The resource name of the secret version in the format,
  * format as: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretToTerraform(struct?: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference | ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretToHclTerraform(struct?: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference | ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig {
  /**
  * The client identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#client_id ApihubPluginInstance#client_id}
  */
  readonly clientId: string;
  /**
  * client_secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#client_secret ApihubPluginInstance#client_secret}
  */
  readonly clientSecret: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret;
}

export function apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigToTerraform(struct?: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference | ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretToTerraform(struct!.clientSecret),
  }
}


export function apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigToHclTerraform(struct?: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference | ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
    }
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret = new ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigClientSecret) {
    this._clientSecret.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }
}
export interface ApihubPluginInstanceAuthConfigUserPasswordConfigPassword {
  /**
  * The resource name of the secret version in the format,
  * format as: 'projects/* /secrets/* /versions/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#secret_version ApihubPluginInstance#secret_version}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly secretVersion: string;
}

export function apihubPluginInstanceAuthConfigUserPasswordConfigPasswordToTerraform(struct?: ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference | ApihubPluginInstanceAuthConfigUserPasswordConfigPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_version: cdktf.stringToTerraform(struct!.secretVersion),
  }
}


export function apihubPluginInstanceAuthConfigUserPasswordConfigPasswordToHclTerraform(struct?: ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference | ApihubPluginInstanceAuthConfigUserPasswordConfigPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_version: {
      value: cdktf.stringToHclTerraform(struct!.secretVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfigUserPasswordConfigPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretVersion = this._secretVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfigUserPasswordConfigPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretVersion = value.secretVersion;
    }
  }

  // secret_version - computed: false, optional: false, required: true
  private _secretVersion?: string; 
  public get secretVersion() {
    return this.getStringAttribute('secret_version');
  }
  public set secretVersion(value: string) {
    this._secretVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretVersionInput() {
    return this._secretVersion;
  }
}
export interface ApihubPluginInstanceAuthConfigUserPasswordConfig {
  /**
  * Username.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#username ApihubPluginInstance#username}
  */
  readonly username: string;
  /**
  * password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#password ApihubPluginInstance#password}
  */
  readonly password: ApihubPluginInstanceAuthConfigUserPasswordConfigPassword;
}

export function apihubPluginInstanceAuthConfigUserPasswordConfigToTerraform(struct?: ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference | ApihubPluginInstanceAuthConfigUserPasswordConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    username: cdktf.stringToTerraform(struct!.username),
    password: apihubPluginInstanceAuthConfigUserPasswordConfigPasswordToTerraform(struct!.password),
  }
}


export function apihubPluginInstanceAuthConfigUserPasswordConfigToHclTerraform(struct?: ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference | ApihubPluginInstanceAuthConfigUserPasswordConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: apihubPluginInstanceAuthConfigUserPasswordConfigPasswordToHclTerraform(struct!.password),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfigUserPasswordConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._password?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfigUserPasswordConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._username = undefined;
      this._password.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._username = value.username;
      this._password.internalValue = value.password;
    }
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // password - computed: false, optional: false, required: true
  private _password = new ApihubPluginInstanceAuthConfigUserPasswordConfigPasswordOutputReference(this, "password");
  public get password() {
    return this._password;
  }
  public putPassword(value: ApihubPluginInstanceAuthConfigUserPasswordConfigPassword) {
    this._password.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password.internalValue;
  }
}
export interface ApihubPluginInstanceAuthConfig {
  /**
  * Possible values:
  * AUTH_TYPE_UNSPECIFIED
  * NO_AUTH
  * GOOGLE_SERVICE_ACCOUNT
  * USER_PASSWORD
  * API_KEY
  * OAUTH2_CLIENT_CREDENTIALS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#auth_type ApihubPluginInstance#auth_type}
  */
  readonly authType: string;
  /**
  * api_key_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#api_key_config ApihubPluginInstance#api_key_config}
  */
  readonly apiKeyConfig?: ApihubPluginInstanceAuthConfigApiKeyConfig;
  /**
  * google_service_account_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#google_service_account_config ApihubPluginInstance#google_service_account_config}
  */
  readonly googleServiceAccountConfig?: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig;
  /**
  * oauth2_client_credentials_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#oauth2_client_credentials_config ApihubPluginInstance#oauth2_client_credentials_config}
  */
  readonly oauth2ClientCredentialsConfig?: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig;
  /**
  * user_password_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#user_password_config ApihubPluginInstance#user_password_config}
  */
  readonly userPasswordConfig?: ApihubPluginInstanceAuthConfigUserPasswordConfig;
}

export function apihubPluginInstanceAuthConfigToTerraform(struct?: ApihubPluginInstanceAuthConfigOutputReference | ApihubPluginInstanceAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_type: cdktf.stringToTerraform(struct!.authType),
    api_key_config: apihubPluginInstanceAuthConfigApiKeyConfigToTerraform(struct!.apiKeyConfig),
    google_service_account_config: apihubPluginInstanceAuthConfigGoogleServiceAccountConfigToTerraform(struct!.googleServiceAccountConfig),
    oauth2_client_credentials_config: apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigToTerraform(struct!.oauth2ClientCredentialsConfig),
    user_password_config: apihubPluginInstanceAuthConfigUserPasswordConfigToTerraform(struct!.userPasswordConfig),
  }
}


export function apihubPluginInstanceAuthConfigToHclTerraform(struct?: ApihubPluginInstanceAuthConfigOutputReference | ApihubPluginInstanceAuthConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_type: {
      value: cdktf.stringToHclTerraform(struct!.authType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    api_key_config: {
      value: apihubPluginInstanceAuthConfigApiKeyConfigToHclTerraform(struct!.apiKeyConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceAuthConfigApiKeyConfigList",
    },
    google_service_account_config: {
      value: apihubPluginInstanceAuthConfigGoogleServiceAccountConfigToHclTerraform(struct!.googleServiceAccountConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigList",
    },
    oauth2_client_credentials_config: {
      value: apihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigToHclTerraform(struct!.oauth2ClientCredentialsConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigList",
    },
    user_password_config: {
      value: apihubPluginInstanceAuthConfigUserPasswordConfigToHclTerraform(struct!.userPasswordConfig),
      isBlock: true,
      type: "list",
      storageClassType: "ApihubPluginInstanceAuthConfigUserPasswordConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceAuthConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApihubPluginInstanceAuthConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authType !== undefined) {
      hasAnyValues = true;
      internalValueResult.authType = this._authType;
    }
    if (this._apiKeyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiKeyConfig = this._apiKeyConfig?.internalValue;
    }
    if (this._googleServiceAccountConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleServiceAccountConfig = this._googleServiceAccountConfig?.internalValue;
    }
    if (this._oauth2ClientCredentialsConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oauth2ClientCredentialsConfig = this._oauth2ClientCredentialsConfig?.internalValue;
    }
    if (this._userPasswordConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userPasswordConfig = this._userPasswordConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceAuthConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authType = undefined;
      this._apiKeyConfig.internalValue = undefined;
      this._googleServiceAccountConfig.internalValue = undefined;
      this._oauth2ClientCredentialsConfig.internalValue = undefined;
      this._userPasswordConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authType = value.authType;
      this._apiKeyConfig.internalValue = value.apiKeyConfig;
      this._googleServiceAccountConfig.internalValue = value.googleServiceAccountConfig;
      this._oauth2ClientCredentialsConfig.internalValue = value.oauth2ClientCredentialsConfig;
      this._userPasswordConfig.internalValue = value.userPasswordConfig;
    }
  }

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // api_key_config - computed: false, optional: true, required: false
  private _apiKeyConfig = new ApihubPluginInstanceAuthConfigApiKeyConfigOutputReference(this, "api_key_config");
  public get apiKeyConfig() {
    return this._apiKeyConfig;
  }
  public putApiKeyConfig(value: ApihubPluginInstanceAuthConfigApiKeyConfig) {
    this._apiKeyConfig.internalValue = value;
  }
  public resetApiKeyConfig() {
    this._apiKeyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyConfigInput() {
    return this._apiKeyConfig.internalValue;
  }

  // google_service_account_config - computed: false, optional: true, required: false
  private _googleServiceAccountConfig = new ApihubPluginInstanceAuthConfigGoogleServiceAccountConfigOutputReference(this, "google_service_account_config");
  public get googleServiceAccountConfig() {
    return this._googleServiceAccountConfig;
  }
  public putGoogleServiceAccountConfig(value: ApihubPluginInstanceAuthConfigGoogleServiceAccountConfig) {
    this._googleServiceAccountConfig.internalValue = value;
  }
  public resetGoogleServiceAccountConfig() {
    this._googleServiceAccountConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleServiceAccountConfigInput() {
    return this._googleServiceAccountConfig.internalValue;
  }

  // oauth2_client_credentials_config - computed: false, optional: true, required: false
  private _oauth2ClientCredentialsConfig = new ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfigOutputReference(this, "oauth2_client_credentials_config");
  public get oauth2ClientCredentialsConfig() {
    return this._oauth2ClientCredentialsConfig;
  }
  public putOauth2ClientCredentialsConfig(value: ApihubPluginInstanceAuthConfigOauth2ClientCredentialsConfig) {
    this._oauth2ClientCredentialsConfig.internalValue = value;
  }
  public resetOauth2ClientCredentialsConfig() {
    this._oauth2ClientCredentialsConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2ClientCredentialsConfigInput() {
    return this._oauth2ClientCredentialsConfig.internalValue;
  }

  // user_password_config - computed: false, optional: true, required: false
  private _userPasswordConfig = new ApihubPluginInstanceAuthConfigUserPasswordConfigOutputReference(this, "user_password_config");
  public get userPasswordConfig() {
    return this._userPasswordConfig;
  }
  public putUserPasswordConfig(value: ApihubPluginInstanceAuthConfigUserPasswordConfig) {
    this._userPasswordConfig.internalValue = value;
  }
  public resetUserPasswordConfig() {
    this._userPasswordConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPasswordConfigInput() {
    return this._userPasswordConfig.internalValue;
  }
}
export interface ApihubPluginInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#create ApihubPluginInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#delete ApihubPluginInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#update ApihubPluginInstance#update}
  */
  readonly update?: string;
}

export function apihubPluginInstanceTimeoutsToTerraform(struct?: ApihubPluginInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function apihubPluginInstanceTimeoutsToHclTerraform(struct?: ApihubPluginInstanceTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApihubPluginInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApihubPluginInstanceTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApihubPluginInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance google_apihub_plugin_instance}
*/
export class ApihubPluginInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apihub_plugin_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApihubPluginInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApihubPluginInstance to import
  * @param importFromId The id of the existing ApihubPluginInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApihubPluginInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apihub_plugin_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/apihub_plugin_instance google_apihub_plugin_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApihubPluginInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ApihubPluginInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apihub_plugin_instance',
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
    this._disable = config.disable;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._plugin = config.plugin;
    this._pluginInstanceId = config.pluginInstanceId;
    this._project = config.project;
    this._actions.internalValue = config.actions;
    this._authConfig.internalValue = config.authConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
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

  // plugin - computed: false, optional: false, required: true
  private _plugin?: string; 
  public get plugin() {
    return this.getStringAttribute('plugin');
  }
  public set plugin(value: string) {
    this._plugin = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin;
  }

  // plugin_instance_id - computed: false, optional: false, required: true
  private _pluginInstanceId?: string; 
  public get pluginInstanceId() {
    return this.getStringAttribute('plugin_instance_id');
  }
  public set pluginInstanceId(value: string) {
    this._pluginInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInstanceIdInput() {
    return this._pluginInstanceId;
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

  // actions - computed: false, optional: true, required: false
  private _actions = new ApihubPluginInstanceActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: ApihubPluginInstanceActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // auth_config - computed: false, optional: true, required: false
  private _authConfig = new ApihubPluginInstanceAuthConfigOutputReference(this, "auth_config");
  public get authConfig() {
    return this._authConfig;
  }
  public putAuthConfig(value: ApihubPluginInstanceAuthConfig) {
    this._authConfig.internalValue = value;
  }
  public resetAuthConfig() {
    this._authConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authConfigInput() {
    return this._authConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApihubPluginInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApihubPluginInstanceTimeouts) {
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
      disable: cdktf.booleanToTerraform(this._disable),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      plugin: cdktf.stringToTerraform(this._plugin),
      plugin_instance_id: cdktf.stringToTerraform(this._pluginInstanceId),
      project: cdktf.stringToTerraform(this._project),
      actions: cdktf.listMapper(apihubPluginInstanceActionsToTerraform, true)(this._actions.internalValue),
      auth_config: apihubPluginInstanceAuthConfigToTerraform(this._authConfig.internalValue),
      timeouts: apihubPluginInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      plugin: {
        value: cdktf.stringToHclTerraform(this._plugin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugin_instance_id: {
        value: cdktf.stringToHclTerraform(this._pluginInstanceId),
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
      actions: {
        value: cdktf.listMapperHcl(apihubPluginInstanceActionsToHclTerraform, true)(this._actions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApihubPluginInstanceActionsList",
      },
      auth_config: {
        value: apihubPluginInstanceAuthConfigToHclTerraform(this._authConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApihubPluginInstanceAuthConfigList",
      },
      timeouts: {
        value: apihubPluginInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApihubPluginInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
