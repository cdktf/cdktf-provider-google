/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClouddeployDeliveryPipelineConfig extends cdktf.TerraformMetaArguments {
  /**
  * User annotations. These attributes can only be set and used by the user, and not by Google Cloud Deploy. See https://google.aip.dev/128#annotations for more details such as format and size limitations.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field `effective_annotations` for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#annotations ClouddeployDeliveryPipeline#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Description of the `DeliveryPipeline`. Max length is 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#description ClouddeployDeliveryPipeline#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#id ClouddeployDeliveryPipeline#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels are attributes that can be set and used by both the user and by Google Cloud Deploy. Labels must meet the following constraints: * Keys and values can contain only lowercase letters, numeric characters, underscores, and dashes. * All characters must use UTF-8 encoding, and international characters are allowed. * Keys must start with a lowercase letter or international character. * Each resource is limited to a maximum of 64 labels. Both keys and values are additionally constrained to be <= 128 bytes.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#labels ClouddeployDeliveryPipeline#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#location ClouddeployDeliveryPipeline#location}
  */
  readonly location: string;
  /**
  * Name of the `DeliveryPipeline`. Format is [a-z][a-z0-9\-]{0,62}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#name ClouddeployDeliveryPipeline#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#project ClouddeployDeliveryPipeline#project}
  */
  readonly project?: string;
  /**
  * When suspended, no new releases or rollouts can be created, but in-progress ones will complete.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#suspended ClouddeployDeliveryPipeline#suspended}
  */
  readonly suspended?: boolean | cdktf.IResolvable;
  /**
  * serial_pipeline block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#serial_pipeline ClouddeployDeliveryPipeline#serial_pipeline}
  */
  readonly serialPipeline?: ClouddeployDeliveryPipelineSerialPipeline;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#timeouts ClouddeployDeliveryPipeline#timeouts}
  */
  readonly timeouts?: ClouddeployDeliveryPipelineTimeouts;
}
export interface ClouddeployDeliveryPipelineConditionPipelineReadyCondition {
}

export function clouddeployDeliveryPipelineConditionPipelineReadyConditionToTerraform(struct?: ClouddeployDeliveryPipelineConditionPipelineReadyCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineConditionPipelineReadyCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class ClouddeployDeliveryPipelineConditionPipelineReadyConditionList extends cdktf.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionPipelineReadyConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineConditionTargetsPresentCondition {
}

export function clouddeployDeliveryPipelineConditionTargetsPresentConditionToTerraform(struct?: ClouddeployDeliveryPipelineConditionTargetsPresentCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineConditionTargetsPresentCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // missing_targets - computed: true, optional: false, required: false
  public get missingTargets() {
    return this.getListAttribute('missing_targets');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
}

export class ClouddeployDeliveryPipelineConditionTargetsPresentConditionList extends cdktf.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionTargetsPresentConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineConditionTargetsTypeCondition {
}

export function clouddeployDeliveryPipelineConditionTargetsTypeConditionToTerraform(struct?: ClouddeployDeliveryPipelineConditionTargetsTypeCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineConditionTargetsTypeCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error_details - computed: true, optional: false, required: false
  public get errorDetails() {
    return this.getStringAttribute('error_details');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getBooleanAttribute('status');
  }
}

export class ClouddeployDeliveryPipelineConditionTargetsTypeConditionList extends cdktf.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionTargetsTypeConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineCondition {
}

export function clouddeployDeliveryPipelineConditionToTerraform(struct?: ClouddeployDeliveryPipelineCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ClouddeployDeliveryPipelineConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pipeline_ready_condition - computed: true, optional: false, required: false
  private _pipelineReadyCondition = new ClouddeployDeliveryPipelineConditionPipelineReadyConditionList(this, "pipeline_ready_condition", false);
  public get pipelineReadyCondition() {
    return this._pipelineReadyCondition;
  }

  // targets_present_condition - computed: true, optional: false, required: false
  private _targetsPresentCondition = new ClouddeployDeliveryPipelineConditionTargetsPresentConditionList(this, "targets_present_condition", false);
  public get targetsPresentCondition() {
    return this._targetsPresentCondition;
  }

  // targets_type_condition - computed: true, optional: false, required: false
  private _targetsTypeCondition = new ClouddeployDeliveryPipelineConditionTargetsTypeConditionList(this, "targets_type_condition", false);
  public get targetsTypeCondition() {
    return this._targetsTypeCondition;
  }
}

export class ClouddeployDeliveryPipelineConditionList extends cdktf.ComplexList {

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
  public get(index: number): ClouddeployDeliveryPipelineConditionOutputReference {
    return new ClouddeployDeliveryPipelineConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters {
  /**
  * Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#match_target_labels ClouddeployDeliveryPipeline#match_target_labels}
  */
  readonly matchTargetLabels?: { [key: string]: string };
  /**
  * Required. Values are deploy parameters in key-value pairs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#values ClouddeployDeliveryPipeline#values}
  */
  readonly values: { [key: string]: string };
}

export function clouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_target_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchTargetLabels),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchTargetLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchTargetLabels = this._matchTargetLabels;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchTargetLabels = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchTargetLabels = value.matchTargetLabels;
      this._values = value.values;
    }
  }

  // match_target_labels - computed: false, optional: true, required: false
  private _matchTargetLabels?: { [key: string]: string }; 
  public get matchTargetLabels() {
    return this.getStringMapAttribute('match_target_labels');
  }
  public set matchTargetLabels(value: { [key: string]: string }) {
    this._matchTargetLabels = value;
  }
  public resetMatchTargetLabels() {
    this._matchTargetLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTargetLabelsInput() {
    return this._matchTargetLabels;
  }

  // values - computed: false, optional: false, required: true
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList extends cdktf.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktf.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment {
  /**
  * Required. The percentage based deployments that will occur as a part of a `Rollout`. List is expected in ascending order and each integer n is 0 <= n < 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#percentages ClouddeployDeliveryPipeline#percentages}
  */
  readonly percentages: number[];
  /**
  * Whether to run verify tests after each percentage deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentages: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.percentages),
    verify: cdktf.booleanToTerraform(struct!.verify),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentages !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentages = this._percentages;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._percentages = undefined;
      this._verify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._percentages = value.percentages;
      this._verify = value.verify;
    }
  }

  // percentages - computed: false, optional: false, required: true
  private _percentages?: number[]; 
  public get percentages() {
    return this.getNumberListAttribute('percentages');
  }
  public set percentages(value: number[]) {
    this._percentages = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentagesInput() {
    return this._percentages;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs {
  /**
  * Required. Percentage deployment for the phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#percentage ClouddeployDeliveryPipeline#percentage}
  */
  readonly percentage: number;
  /**
  * Required. The ID to assign to the `Rollout` phase. This value must consist of lower-case letters, numbers, and hyphens, start with a letter and end with a letter or a number, and have a max length of 63 characters. In other words, it must match the following regex: `^[a-z]([a-z0-9-]{0,61}[a-z0-9])?$`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#phase_id ClouddeployDeliveryPipeline#phase_id}
  */
  readonly phaseId: string;
  /**
  * Skaffold profiles to use when rendering the manifest for this phase. These are in addition to the profiles list specified in the `DeliveryPipeline` stage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * Whether to run verify tests after the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
    phase_id: cdktf.stringToTerraform(struct!.phaseId),
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    verify: cdktf.booleanToTerraform(struct!.verify),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    if (this._phaseId !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseId = this._phaseId;
    }
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
      this._phaseId = undefined;
      this._profiles = undefined;
      this._verify = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
      this._phaseId = value.phaseId;
      this._profiles = value.profiles;
      this._verify = value.verify;
    }
  }

  // percentage - computed: false, optional: false, required: true
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }

  // phase_id - computed: false, optional: false, required: true
  private _phaseId?: string; 
  public get phaseId() {
    return this.getStringAttribute('phase_id');
  }
  public set phaseId(value: string) {
    this._phaseId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseIdInput() {
    return this._phaseId;
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList extends cdktf.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktf.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment {
  /**
  * phase_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#phase_configs ClouddeployDeliveryPipeline#phase_configs}
  */
  readonly phaseConfigs: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktf.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    phase_configs: cdktf.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsToTerraform, true)(struct!.phaseConfigs),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._phaseConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.phaseConfigs = this._phaseConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._phaseConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._phaseConfigs.internalValue = value.phaseConfigs;
    }
  }

  // phase_configs - computed: false, optional: false, required: true
  private _phaseConfigs = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigsList(this, "phase_configs", false);
  public get phaseConfigs() {
    return this._phaseConfigs;
  }
  public putPhaseConfigs(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentPhaseConfigs[] | cdktf.IResolvable) {
    this._phaseConfigs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get phaseConfigsInput() {
    return this._phaseConfigs.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun {
  /**
  * Whether Cloud Deploy should update the traffic stanza in a Cloud Run Service on the user's behalf to facilitate traffic splitting. This is required to be true for CanaryDeployments, but optional for CustomCanaryDeployments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#automatic_traffic_control ClouddeployDeliveryPipeline#automatic_traffic_control}
  */
  readonly automaticTrafficControl?: boolean | cdktf.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automatic_traffic_control: cdktf.booleanToTerraform(struct!.automaticTrafficControl),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automaticTrafficControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.automaticTrafficControl = this._automaticTrafficControl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._automaticTrafficControl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._automaticTrafficControl = value.automaticTrafficControl;
    }
  }

  // automatic_traffic_control - computed: false, optional: true, required: false
  private _automaticTrafficControl?: boolean | cdktf.IResolvable; 
  public get automaticTrafficControl() {
    return this.getBooleanAttribute('automatic_traffic_control');
  }
  public set automaticTrafficControl(value: boolean | cdktf.IResolvable) {
    this._automaticTrafficControl = value;
  }
  public resetAutomaticTrafficControl() {
    this._automaticTrafficControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automaticTrafficControlInput() {
    return this._automaticTrafficControl;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified HTTPRoute and Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#deployment ClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Required. Name of the Gateway API HTTPRoute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#http_route ClouddeployDeliveryPipeline#http_route}
  */
  readonly httpRoute: string;
  /**
  * Optional. The time to wait for route updates to propagate. The maximum configurable time is 3 hours, in seconds format. If unspecified, there is no wait time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#route_update_wait_time ClouddeployDeliveryPipeline#route_update_wait_time}
  */
  readonly routeUpdateWaitTime?: string;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#service ClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: cdktf.stringToTerraform(struct!.deployment),
    http_route: cdktf.stringToTerraform(struct!.httpRoute),
    route_update_wait_time: cdktf.stringToTerraform(struct!.routeUpdateWaitTime),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._httpRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRoute = this._httpRoute;
    }
    if (this._routeUpdateWaitTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeUpdateWaitTime = this._routeUpdateWaitTime;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._httpRoute = undefined;
      this._routeUpdateWaitTime = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._httpRoute = value.httpRoute;
      this._routeUpdateWaitTime = value.routeUpdateWaitTime;
      this._service = value.service;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // http_route - computed: false, optional: false, required: true
  private _httpRoute?: string; 
  public get httpRoute() {
    return this.getStringAttribute('http_route');
  }
  public set httpRoute(value: string) {
    this._httpRoute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRouteInput() {
    return this._httpRoute;
  }

  // route_update_wait_time - computed: false, optional: true, required: false
  private _routeUpdateWaitTime?: string; 
  public get routeUpdateWaitTime() {
    return this.getStringAttribute('route_update_wait_time');
  }
  public set routeUpdateWaitTime(value: string) {
    this._routeUpdateWaitTime = value;
  }
  public resetRouteUpdateWaitTime() {
    this._routeUpdateWaitTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeUpdateWaitTimeInput() {
    return this._routeUpdateWaitTime;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking {
  /**
  * Required. Name of the Kubernetes Deployment whose traffic is managed by the specified Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#deployment ClouddeployDeliveryPipeline#deployment}
  */
  readonly deployment: string;
  /**
  * Optional. Whether to disable Pod overprovisioning. If Pod overprovisioning is disabled then Cloud Deploy will limit the number of total Pods used for the deployment strategy to the number of Pods the Deployment has on the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#disable_pod_overprovisioning ClouddeployDeliveryPipeline#disable_pod_overprovisioning}
  */
  readonly disablePodOverprovisioning?: boolean | cdktf.IResolvable;
  /**
  * Required. Name of the Kubernetes Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#service ClouddeployDeliveryPipeline#service}
  */
  readonly service: string;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deployment: cdktf.stringToTerraform(struct!.deployment),
    disable_pod_overprovisioning: cdktf.booleanToTerraform(struct!.disablePodOverprovisioning),
    service: cdktf.stringToTerraform(struct!.service),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deployment !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployment = this._deployment;
    }
    if (this._disablePodOverprovisioning !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePodOverprovisioning = this._disablePodOverprovisioning;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deployment = undefined;
      this._disablePodOverprovisioning = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deployment = value.deployment;
      this._disablePodOverprovisioning = value.disablePodOverprovisioning;
      this._service = value.service;
    }
  }

  // deployment - computed: false, optional: false, required: true
  private _deployment?: string; 
  public get deployment() {
    return this.getStringAttribute('deployment');
  }
  public set deployment(value: string) {
    this._deployment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentInput() {
    return this._deployment;
  }

  // disable_pod_overprovisioning - computed: false, optional: true, required: false
  private _disablePodOverprovisioning?: boolean | cdktf.IResolvable; 
  public get disablePodOverprovisioning() {
    return this.getBooleanAttribute('disable_pod_overprovisioning');
  }
  public set disablePodOverprovisioning(value: boolean | cdktf.IResolvable) {
    this._disablePodOverprovisioning = value;
  }
  public resetDisablePodOverprovisioning() {
    this._disablePodOverprovisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePodOverprovisioningInput() {
    return this._disablePodOverprovisioning;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes {
  /**
  * gateway_service_mesh block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#gateway_service_mesh ClouddeployDeliveryPipeline#gateway_service_mesh}
  */
  readonly gatewayServiceMesh?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh;
  /**
  * service_networking block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#service_networking ClouddeployDeliveryPipeline#service_networking}
  */
  readonly serviceNetworking?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_service_mesh: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshToTerraform(struct!.gatewayServiceMesh),
    service_networking: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingToTerraform(struct!.serviceNetworking),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayServiceMesh?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayServiceMesh = this._gatewayServiceMesh?.internalValue;
    }
    if (this._serviceNetworking?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceNetworking = this._serviceNetworking?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gatewayServiceMesh.internalValue = undefined;
      this._serviceNetworking.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gatewayServiceMesh.internalValue = value.gatewayServiceMesh;
      this._serviceNetworking.internalValue = value.serviceNetworking;
    }
  }

  // gateway_service_mesh - computed: false, optional: true, required: false
  private _gatewayServiceMesh = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMeshOutputReference(this, "gateway_service_mesh");
  public get gatewayServiceMesh() {
    return this._gatewayServiceMesh;
  }
  public putGatewayServiceMesh(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesGatewayServiceMesh) {
    this._gatewayServiceMesh.internalValue = value;
  }
  public resetGatewayServiceMesh() {
    this._gatewayServiceMesh.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayServiceMeshInput() {
    return this._gatewayServiceMesh.internalValue;
  }

  // service_networking - computed: false, optional: true, required: false
  private _serviceNetworking = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworkingOutputReference(this, "service_networking");
  public get serviceNetworking() {
    return this._serviceNetworking;
  }
  public putServiceNetworking(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesServiceNetworking) {
    this._serviceNetworking.internalValue = value;
  }
  public resetServiceNetworking() {
    this._serviceNetworking.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNetworkingInput() {
    return this._serviceNetworking.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig {
  /**
  * cloud_run block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#cloud_run ClouddeployDeliveryPipeline#cloud_run}
  */
  readonly cloudRun?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun;
  /**
  * kubernetes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#kubernetes ClouddeployDeliveryPipeline#kubernetes}
  */
  readonly kubernetes?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_run: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunToTerraform(struct!.cloudRun),
    kubernetes: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesToTerraform(struct!.kubernetes),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudRun?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudRun = this._cloudRun?.internalValue;
    }
    if (this._kubernetes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubernetes = this._kubernetes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudRun.internalValue = undefined;
      this._kubernetes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudRun.internalValue = value.cloudRun;
      this._kubernetes.internalValue = value.kubernetes;
    }
  }

  // cloud_run - computed: false, optional: true, required: false
  private _cloudRun = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRunOutputReference(this, "cloud_run");
  public get cloudRun() {
    return this._cloudRun;
  }
  public putCloudRun(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigCloudRun) {
    this._cloudRun.internalValue = value;
  }
  public resetCloudRun() {
    this._cloudRun.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRunInput() {
    return this._cloudRun.internalValue;
  }

  // kubernetes - computed: false, optional: true, required: false
  private _kubernetes = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetesOutputReference(this, "kubernetes");
  public get kubernetes() {
    return this._kubernetes;
  }
  public putKubernetes(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigKubernetes) {
    this._kubernetes.internalValue = value;
  }
  public resetKubernetes() {
    this._kubernetes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesInput() {
    return this._kubernetes.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary {
  /**
  * canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#canary_deployment ClouddeployDeliveryPipeline#canary_deployment}
  */
  readonly canaryDeployment?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment;
  /**
  * custom_canary_deployment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#custom_canary_deployment ClouddeployDeliveryPipeline#custom_canary_deployment}
  */
  readonly customCanaryDeployment?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment;
  /**
  * runtime_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#runtime_config ClouddeployDeliveryPipeline#runtime_config}
  */
  readonly runtimeConfig?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary_deployment: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentToTerraform(struct!.canaryDeployment),
    custom_canary_deployment: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentToTerraform(struct!.customCanaryDeployment),
    runtime_config: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigToTerraform(struct!.runtimeConfig),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canaryDeployment = this._canaryDeployment?.internalValue;
    }
    if (this._customCanaryDeployment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customCanaryDeployment = this._customCanaryDeployment?.internalValue;
    }
    if (this._runtimeConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtimeConfig = this._runtimeConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canaryDeployment.internalValue = undefined;
      this._customCanaryDeployment.internalValue = undefined;
      this._runtimeConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canaryDeployment.internalValue = value.canaryDeployment;
      this._customCanaryDeployment.internalValue = value.customCanaryDeployment;
      this._runtimeConfig.internalValue = value.runtimeConfig;
    }
  }

  // canary_deployment - computed: false, optional: true, required: false
  private _canaryDeployment = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeploymentOutputReference(this, "canary_deployment");
  public get canaryDeployment() {
    return this._canaryDeployment;
  }
  public putCanaryDeployment(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCanaryDeployment) {
    this._canaryDeployment.internalValue = value;
  }
  public resetCanaryDeployment() {
    this._canaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryDeploymentInput() {
    return this._canaryDeployment.internalValue;
  }

  // custom_canary_deployment - computed: false, optional: true, required: false
  private _customCanaryDeployment = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeploymentOutputReference(this, "custom_canary_deployment");
  public get customCanaryDeployment() {
    return this._customCanaryDeployment;
  }
  public putCustomCanaryDeployment(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryCustomCanaryDeployment) {
    this._customCanaryDeployment.internalValue = value;
  }
  public resetCustomCanaryDeployment() {
    this._customCanaryDeployment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customCanaryDeploymentInput() {
    return this._customCanaryDeployment.internalValue;
  }

  // runtime_config - computed: false, optional: true, required: false
  private _runtimeConfig = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfigOutputReference(this, "runtime_config");
  public get runtimeConfig() {
    return this._runtimeConfig;
  }
  public putRuntimeConfig(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryRuntimeConfig) {
    this._runtimeConfig.internalValue = value;
  }
  public resetRuntimeConfig() {
    this._runtimeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtimeConfigInput() {
    return this._runtimeConfig.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard {
  /**
  * Whether to verify a deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#verify ClouddeployDeliveryPipeline#verify}
  */
  readonly verify?: boolean | cdktf.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verify: cdktf.booleanToTerraform(struct!.verify),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verify !== undefined) {
      hasAnyValues = true;
      internalValueResult.verify = this._verify;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._verify = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._verify = value.verify;
    }
  }

  // verify - computed: false, optional: true, required: false
  private _verify?: boolean | cdktf.IResolvable; 
  public get verify() {
    return this.getBooleanAttribute('verify');
  }
  public set verify(value: boolean | cdktf.IResolvable) {
    this._verify = value;
  }
  public resetVerify() {
    this._verify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyInput() {
    return this._verify;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStagesStrategy {
  /**
  * canary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#canary ClouddeployDeliveryPipeline#canary}
  */
  readonly canary?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary;
  /**
  * standard block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#standard ClouddeployDeliveryPipeline#standard}
  */
  readonly standard?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference | ClouddeployDeliveryPipelineSerialPipelineStagesStrategy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    canary: clouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryToTerraform(struct!.canary),
    standard: clouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardToTerraform(struct!.standard),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._canary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.canary = this._canary?.internalValue;
    }
    if (this._standard?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standard = this._standard?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._canary.internalValue = undefined;
      this._standard.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._canary.internalValue = value.canary;
      this._standard.internalValue = value.standard;
    }
  }

  // canary - computed: false, optional: true, required: false
  private _canary = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanaryOutputReference(this, "canary");
  public get canary() {
    return this._canary;
  }
  public putCanary(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyCanary) {
    this._canary.internalValue = value;
  }
  public resetCanary() {
    this._canary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canaryInput() {
    return this._canary.internalValue;
  }

  // standard - computed: false, optional: true, required: false
  private _standard = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandardOutputReference(this, "standard");
  public get standard() {
    return this._standard;
  }
  public putStandard(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategyStandard) {
    this._standard.internalValue = value;
  }
  public resetStandard() {
    this._standard.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineSerialPipelineStages {
  /**
  * Skaffold profiles to use when rendering the manifest for this stage's `Target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#profiles ClouddeployDeliveryPipeline#profiles}
  */
  readonly profiles?: string[];
  /**
  * The target_id to which this stage points. This field refers exclusively to the last segment of a target name. For example, this field would just be `my-target` (rather than `projects/project/locations/location/targets/my-target`). The location of the `Target` is inferred to be the same as the location of the `DeliveryPipeline` that contains this `Stage`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#target_id ClouddeployDeliveryPipeline#target_id}
  */
  readonly targetId?: string;
  /**
  * deploy_parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#deploy_parameters ClouddeployDeliveryPipeline#deploy_parameters}
  */
  readonly deployParameters?: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktf.IResolvable;
  /**
  * strategy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#strategy ClouddeployDeliveryPipeline#strategy}
  */
  readonly strategy?: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy;
}

export function clouddeployDeliveryPipelineSerialPipelineStagesToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    profiles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.profiles),
    target_id: cdktf.stringToTerraform(struct!.targetId),
    deploy_parameters: cdktf.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesDeployParametersToTerraform, true)(struct!.deployParameters),
    strategy: clouddeployDeliveryPipelineSerialPipelineStagesStrategyToTerraform(struct!.strategy),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._profiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.profiles = this._profiles;
    }
    if (this._targetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetId = this._targetId;
    }
    if (this._deployParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployParameters = this._deployParameters?.internalValue;
    }
    if (this._strategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipelineStages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._profiles = undefined;
      this._targetId = undefined;
      this._deployParameters.internalValue = undefined;
      this._strategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._profiles = value.profiles;
      this._targetId = value.targetId;
      this._deployParameters.internalValue = value.deployParameters;
      this._strategy.internalValue = value.strategy;
    }
  }

  // profiles - computed: false, optional: true, required: false
  private _profiles?: string[]; 
  public get profiles() {
    return this.getListAttribute('profiles');
  }
  public set profiles(value: string[]) {
    this._profiles = value;
  }
  public resetProfiles() {
    this._profiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profilesInput() {
    return this._profiles;
  }

  // target_id - computed: false, optional: true, required: false
  private _targetId?: string; 
  public get targetId() {
    return this.getStringAttribute('target_id');
  }
  public set targetId(value: string) {
    this._targetId = value;
  }
  public resetTargetId() {
    this._targetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdInput() {
    return this._targetId;
  }

  // deploy_parameters - computed: false, optional: true, required: false
  private _deployParameters = new ClouddeployDeliveryPipelineSerialPipelineStagesDeployParametersList(this, "deploy_parameters", false);
  public get deployParameters() {
    return this._deployParameters;
  }
  public putDeployParameters(value: ClouddeployDeliveryPipelineSerialPipelineStagesDeployParameters[] | cdktf.IResolvable) {
    this._deployParameters.internalValue = value;
  }
  public resetDeployParameters() {
    this._deployParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployParametersInput() {
    return this._deployParameters.internalValue;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy = new ClouddeployDeliveryPipelineSerialPipelineStagesStrategyOutputReference(this, "strategy");
  public get strategy() {
    return this._strategy;
  }
  public putStrategy(value: ClouddeployDeliveryPipelineSerialPipelineStagesStrategy) {
    this._strategy.internalValue = value;
  }
  public resetStrategy() {
    this._strategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy.internalValue;
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineStagesList extends cdktf.ComplexList {
  public internalValue? : ClouddeployDeliveryPipelineSerialPipelineStages[] | cdktf.IResolvable

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
  public get(index: number): ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference {
    return new ClouddeployDeliveryPipelineSerialPipelineStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClouddeployDeliveryPipelineSerialPipeline {
  /**
  * stages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#stages ClouddeployDeliveryPipeline#stages}
  */
  readonly stages?: ClouddeployDeliveryPipelineSerialPipelineStages[] | cdktf.IResolvable;
}

export function clouddeployDeliveryPipelineSerialPipelineToTerraform(struct?: ClouddeployDeliveryPipelineSerialPipelineOutputReference | ClouddeployDeliveryPipelineSerialPipeline): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stages: cdktf.listMapper(clouddeployDeliveryPipelineSerialPipelineStagesToTerraform, true)(struct!.stages),
  }
}

export class ClouddeployDeliveryPipelineSerialPipelineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClouddeployDeliveryPipelineSerialPipeline | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stages = this._stages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClouddeployDeliveryPipelineSerialPipeline | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stages.internalValue = value.stages;
    }
  }

  // stages - computed: false, optional: true, required: false
  private _stages = new ClouddeployDeliveryPipelineSerialPipelineStagesList(this, "stages", false);
  public get stages() {
    return this._stages;
  }
  public putStages(value: ClouddeployDeliveryPipelineSerialPipelineStages[] | cdktf.IResolvable) {
    this._stages.internalValue = value;
  }
  public resetStages() {
    this._stages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stagesInput() {
    return this._stages.internalValue;
  }
}
export interface ClouddeployDeliveryPipelineTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#create ClouddeployDeliveryPipeline#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#delete ClouddeployDeliveryPipeline#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#update ClouddeployDeliveryPipeline#update}
  */
  readonly update?: string;
}

export function clouddeployDeliveryPipelineTimeoutsToTerraform(struct?: ClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable): any {
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

export class ClouddeployDeliveryPipelineTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClouddeployDeliveryPipelineTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline}
*/
export class ClouddeployDeliveryPipeline extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_clouddeploy_delivery_pipeline";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClouddeployDeliveryPipeline resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClouddeployDeliveryPipeline to import
  * @param importFromId The id of the existing ClouddeployDeliveryPipeline that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClouddeployDeliveryPipeline to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_clouddeploy_delivery_pipeline", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/clouddeploy_delivery_pipeline google_clouddeploy_delivery_pipeline} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClouddeployDeliveryPipelineConfig
  */
  public constructor(scope: Construct, id: string, config: ClouddeployDeliveryPipelineConfig) {
    super(scope, id, {
      terraformResourceType: 'google_clouddeploy_delivery_pipeline',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.3.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._suspended = config.suspended;
    this._serialPipeline.internalValue = config.serialPipeline;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new ClouddeployDeliveryPipelineConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

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

  // effective_annotations - computed: true, optional: false, required: false
  private _effectiveAnnotations = new cdktf.StringMap(this, "effective_annotations");
  public get effectiveAnnotations() {
    return this._effectiveAnnotations;
  }

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // suspended - computed: false, optional: true, required: false
  private _suspended?: boolean | cdktf.IResolvable; 
  public get suspended() {
    return this.getBooleanAttribute('suspended');
  }
  public set suspended(value: boolean | cdktf.IResolvable) {
    this._suspended = value;
  }
  public resetSuspended() {
    this._suspended = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendedInput() {
    return this._suspended;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // serial_pipeline - computed: false, optional: true, required: false
  private _serialPipeline = new ClouddeployDeliveryPipelineSerialPipelineOutputReference(this, "serial_pipeline");
  public get serialPipeline() {
    return this._serialPipeline;
  }
  public putSerialPipeline(value: ClouddeployDeliveryPipelineSerialPipeline) {
    this._serialPipeline.internalValue = value;
  }
  public resetSerialPipeline() {
    this._serialPipeline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialPipelineInput() {
    return this._serialPipeline.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClouddeployDeliveryPipelineTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClouddeployDeliveryPipelineTimeouts) {
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
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      suspended: cdktf.booleanToTerraform(this._suspended),
      serial_pipeline: clouddeployDeliveryPipelineSerialPipelineToTerraform(this._serialPipeline.internalValue),
      timeouts: clouddeployDeliveryPipelineTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
