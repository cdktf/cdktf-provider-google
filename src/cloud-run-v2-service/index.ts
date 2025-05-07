/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRunV2ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
  * 
  * Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected in new resources.
  * All system annotations in v1 now have a corresponding field in v2 Service.
  * 
  * This field follows Kubernetes annotations' namespacing, limits, and rules.
  * 
  * **Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
  * Please refer to the field 'effective_annotations' for all of the annotations present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#annotations CloudRunV2Service#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Arbitrary identifier for the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#client CloudRunV2Service#client}
  */
  readonly client?: string;
  /**
  * Arbitrary version identifier for the API client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#client_version CloudRunV2Service#client_version}
  */
  readonly clientVersion?: string;
  /**
  * One or more custom audiences that you want this service to support. Specify each custom audience as the full URL in a string. The custom audiences are encoded in the token and used to authenticate requests.
  * For more information, see https://cloud.google.com/run/docs/configuring/custom-audiences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#custom_audiences CloudRunV2Service#custom_audiences}
  */
  readonly customAudiences?: string[];
  /**
  * Whether Terraform will be prevented from destroying the service. Defaults to true.
  * When a'terraform destroy' or 'terraform apply' would delete the service,
  * the command will fail if this field is not set to false in Terraform state.
  * When the field is set to true or unset in Terraform state, a 'terraform apply'
  * or 'terraform destroy' that would delete the service will fail.
  * When the field is set to false, deleting the service is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#deletion_protection CloudRunV2Service#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * User-provided description of the Service. This field currently has a 512-character limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#description CloudRunV2Service#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#id CloudRunV2Service#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Provides the ingress settings for this Service. On output, returns the currently observed ingress settings, or INGRESS_TRAFFIC_UNSPECIFIED if no revision is active. Possible values: ["INGRESS_TRAFFIC_ALL", "INGRESS_TRAFFIC_INTERNAL_ONLY", "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#ingress CloudRunV2Service#ingress}
  */
  readonly ingress?: string;
  /**
  * Disables IAM permission check for run.routes.invoke for callers of this service. For more information, visit https://cloud.google.com/run/docs/securing/managing-access#invoker_check.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#invoker_iam_disabled CloudRunV2Service#invoker_iam_disabled}
  */
  readonly invokerIamDisabled?: boolean | cdktf.IResolvable;
  /**
  * Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component,
  * environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
  * 
  * Cloud Run API v2 does not support labels with  'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
  * All system labels in v1 now have a corresponding field in v2 Service.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#labels CloudRunV2Service#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The launch stage as defined by [Google Cloud Platform Launch Stages](https://cloud.google.com/products#product-launch-stages). Cloud Run supports ALPHA, BETA, and GA.
  * If no value is specified, GA is assumed. Set the launch stage to a preview stage on input to allow use of preview features in that stage. On read (or output), describes whether the resource uses preview features.
  * 
  * For example, if ALPHA is provided as input, but only BETA and GA-level features are used, this field will be BETA on output. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#launch_stage CloudRunV2Service#launch_stage}
  */
  readonly launchStage?: string;
  /**
  * The location of the cloud run service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#location CloudRunV2Service#location}
  */
  readonly location: string;
  /**
  * Name of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#project CloudRunV2Service#project}
  */
  readonly project?: string;
  /**
  * binary_authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#binary_authorization CloudRunV2Service#binary_authorization}
  */
  readonly binaryAuthorization?: CloudRunV2ServiceBinaryAuthorization;
  /**
  * build_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#build_config CloudRunV2Service#build_config}
  */
  readonly buildConfig?: CloudRunV2ServiceBuildConfig;
  /**
  * scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#scaling CloudRunV2Service#scaling}
  */
  readonly scaling?: CloudRunV2ServiceScaling;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#template CloudRunV2Service#template}
  */
  readonly template: CloudRunV2ServiceTemplate;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#timeouts CloudRunV2Service#timeouts}
  */
  readonly timeouts?: CloudRunV2ServiceTimeouts;
  /**
  * traffic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#traffic CloudRunV2Service#traffic}
  */
  readonly traffic?: CloudRunV2ServiceTraffic[] | cdktf.IResolvable;
}
export interface CloudRunV2ServiceConditions {
}

export function cloudRunV2ServiceConditionsToTerraform(struct?: CloudRunV2ServiceConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudRunV2ServiceConditionsToHclTerraform(struct?: CloudRunV2ServiceConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudRunV2ServiceConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceConditions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_reason - computed: true, optional: false, required: false
  public get executionReason() {
    return this.getStringAttribute('execution_reason');
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // revision_reason - computed: true, optional: false, required: false
  public get revisionReason() {
    return this.getStringAttribute('revision_reason');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CloudRunV2ServiceConditionsList extends cdktf.ComplexList {

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
  public get(index: number): CloudRunV2ServiceConditionsOutputReference {
    return new CloudRunV2ServiceConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTerminalCondition {
}

export function cloudRunV2ServiceTerminalConditionToTerraform(struct?: CloudRunV2ServiceTerminalCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudRunV2ServiceTerminalConditionToHclTerraform(struct?: CloudRunV2ServiceTerminalCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudRunV2ServiceTerminalConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTerminalCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTerminalCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // execution_reason - computed: true, optional: false, required: false
  public get executionReason() {
    return this.getStringAttribute('execution_reason');
  }

  // last_transition_time - computed: true, optional: false, required: false
  public get lastTransitionTime() {
    return this.getStringAttribute('last_transition_time');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }

  // revision_reason - computed: true, optional: false, required: false
  public get revisionReason() {
    return this.getStringAttribute('revision_reason');
  }

  // severity - computed: true, optional: false, required: false
  public get severity() {
    return this.getStringAttribute('severity');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CloudRunV2ServiceTerminalConditionList extends cdktf.ComplexList {

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
  public get(index: number): CloudRunV2ServiceTerminalConditionOutputReference {
    return new CloudRunV2ServiceTerminalConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTrafficStatuses {
}

export function cloudRunV2ServiceTrafficStatusesToTerraform(struct?: CloudRunV2ServiceTrafficStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudRunV2ServiceTrafficStatusesToHclTerraform(struct?: CloudRunV2ServiceTrafficStatuses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudRunV2ServiceTrafficStatusesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTrafficStatuses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTrafficStatuses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // percent - computed: true, optional: false, required: false
  public get percent() {
    return this.getNumberAttribute('percent');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getStringAttribute('revision');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getStringAttribute('tag');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }
}

export class CloudRunV2ServiceTrafficStatusesList extends cdktf.ComplexList {

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
  public get(index: number): CloudRunV2ServiceTrafficStatusesOutputReference {
    return new CloudRunV2ServiceTrafficStatusesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceBinaryAuthorization {
  /**
  * If present, indicates to use Breakglass using this justification. If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#breakglass_justification CloudRunV2Service#breakglass_justification}
  */
  readonly breakglassJustification?: string;
  /**
  * The path to a binary authorization policy. Format: projects/{project}/platforms/cloudRun/{policy-name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#policy CloudRunV2Service#policy}
  */
  readonly policy?: string;
  /**
  * If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#use_default CloudRunV2Service#use_default}
  */
  readonly useDefault?: boolean | cdktf.IResolvable;
}

export function cloudRunV2ServiceBinaryAuthorizationToTerraform(struct?: CloudRunV2ServiceBinaryAuthorizationOutputReference | CloudRunV2ServiceBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breakglass_justification: cdktf.stringToTerraform(struct!.breakglassJustification),
    policy: cdktf.stringToTerraform(struct!.policy),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
  }
}


export function cloudRunV2ServiceBinaryAuthorizationToHclTerraform(struct?: CloudRunV2ServiceBinaryAuthorizationOutputReference | CloudRunV2ServiceBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breakglass_justification: {
      value: cdktf.stringToHclTerraform(struct!.breakglassJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakglassJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakglassJustification = this._breakglassJustification;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._breakglassJustification = undefined;
      this._policy = undefined;
      this._useDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._breakglassJustification = value.breakglassJustification;
      this._policy = value.policy;
      this._useDefault = value.useDefault;
    }
  }

  // breakglass_justification - computed: false, optional: true, required: false
  private _breakglassJustification?: string; 
  public get breakglassJustification() {
    return this.getStringAttribute('breakglass_justification');
  }
  public set breakglassJustification(value: string) {
    this._breakglassJustification = value;
  }
  public resetBreakglassJustification() {
    this._breakglassJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakglassJustificationInput() {
    return this._breakglassJustification;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // use_default - computed: false, optional: true, required: false
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  public resetUseDefault() {
    this._useDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }
}
export interface CloudRunV2ServiceBuildConfig {
  /**
  * The base image used to build the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#base_image CloudRunV2Service#base_image}
  */
  readonly baseImage?: string;
  /**
  * Sets whether the function will receive automatic base image updates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#enable_automatic_updates CloudRunV2Service#enable_automatic_updates}
  */
  readonly enableAutomaticUpdates?: boolean | cdktf.IResolvable;
  /**
  * User-provided build-time environment variables for the function.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#environment_variables CloudRunV2Service#environment_variables}
  */
  readonly environmentVariables?: { [key: string]: string };
  /**
  * The name of the function (as defined in source code) that will be executed. Defaults to the resource name suffix, if not specified. For backward compatibility, if function with given name is not found, then the system will try to use function named "function".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#function_target CloudRunV2Service#function_target}
  */
  readonly functionTarget?: string;
  /**
  * Artifact Registry URI to store the built image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#image_uri CloudRunV2Service#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Service account to be used for building the container. The format of this field is 'projects/{projectId}/serviceAccounts/{serviceAccountEmail}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#service_account CloudRunV2Service#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * The Cloud Storage bucket URI where the function source code is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#source_location CloudRunV2Service#source_location}
  */
  readonly sourceLocation?: string;
  /**
  * Name of the Cloud Build Custom Worker Pool that should be used to build the Cloud Run function. The format of this field is 'projects/{project}/locations/{region}/workerPools/{workerPool}' where {project} and {region} are the project id and region respectively where the worker pool is defined and {workerPool} is the short name of the worker pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#worker_pool CloudRunV2Service#worker_pool}
  */
  readonly workerPool?: string;
}

export function cloudRunV2ServiceBuildConfigToTerraform(struct?: CloudRunV2ServiceBuildConfigOutputReference | CloudRunV2ServiceBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_image: cdktf.stringToTerraform(struct!.baseImage),
    enable_automatic_updates: cdktf.booleanToTerraform(struct!.enableAutomaticUpdates),
    environment_variables: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.environmentVariables),
    function_target: cdktf.stringToTerraform(struct!.functionTarget),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    source_location: cdktf.stringToTerraform(struct!.sourceLocation),
    worker_pool: cdktf.stringToTerraform(struct!.workerPool),
  }
}


export function cloudRunV2ServiceBuildConfigToHclTerraform(struct?: CloudRunV2ServiceBuildConfigOutputReference | CloudRunV2ServiceBuildConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_image: {
      value: cdktf.stringToHclTerraform(struct!.baseImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_automatic_updates: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutomaticUpdates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    environment_variables: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.environmentVariables),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    function_target: {
      value: cdktf.stringToHclTerraform(struct!.functionTarget),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_location: {
      value: cdktf.stringToHclTerraform(struct!.sourceLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    worker_pool: {
      value: cdktf.stringToHclTerraform(struct!.workerPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceBuildConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceBuildConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImage = this._baseImage;
    }
    if (this._enableAutomaticUpdates !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutomaticUpdates = this._enableAutomaticUpdates;
    }
    if (this._environmentVariables !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVariables = this._environmentVariables;
    }
    if (this._functionTarget !== undefined) {
      hasAnyValues = true;
      internalValueResult.functionTarget = this._functionTarget;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._sourceLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceLocation = this._sourceLocation;
    }
    if (this._workerPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.workerPool = this._workerPool;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceBuildConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseImage = undefined;
      this._enableAutomaticUpdates = undefined;
      this._environmentVariables = undefined;
      this._functionTarget = undefined;
      this._imageUri = undefined;
      this._serviceAccount = undefined;
      this._sourceLocation = undefined;
      this._workerPool = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseImage = value.baseImage;
      this._enableAutomaticUpdates = value.enableAutomaticUpdates;
      this._environmentVariables = value.environmentVariables;
      this._functionTarget = value.functionTarget;
      this._imageUri = value.imageUri;
      this._serviceAccount = value.serviceAccount;
      this._sourceLocation = value.sourceLocation;
      this._workerPool = value.workerPool;
    }
  }

  // base_image - computed: false, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // enable_automatic_updates - computed: false, optional: true, required: false
  private _enableAutomaticUpdates?: boolean | cdktf.IResolvable; 
  public get enableAutomaticUpdates() {
    return this.getBooleanAttribute('enable_automatic_updates');
  }
  public set enableAutomaticUpdates(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticUpdates = value;
  }
  public resetEnableAutomaticUpdates() {
    this._enableAutomaticUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticUpdatesInput() {
    return this._enableAutomaticUpdates;
  }

  // environment_variables - computed: false, optional: true, required: false
  private _environmentVariables?: { [key: string]: string }; 
  public get environmentVariables() {
    return this.getStringMapAttribute('environment_variables');
  }
  public set environmentVariables(value: { [key: string]: string }) {
    this._environmentVariables = value;
  }
  public resetEnvironmentVariables() {
    this._environmentVariables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVariablesInput() {
    return this._environmentVariables;
  }

  // function_target - computed: false, optional: true, required: false
  private _functionTarget?: string; 
  public get functionTarget() {
    return this.getStringAttribute('function_target');
  }
  public set functionTarget(value: string) {
    this._functionTarget = value;
  }
  public resetFunctionTarget() {
    this._functionTarget = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionTargetInput() {
    return this._functionTarget;
  }

  // image_uri - computed: false, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // service_account - computed: false, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // source_location - computed: false, optional: true, required: false
  private _sourceLocation?: string; 
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
  public set sourceLocation(value: string) {
    this._sourceLocation = value;
  }
  public resetSourceLocation() {
    this._sourceLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceLocationInput() {
    return this._sourceLocation;
  }

  // worker_pool - computed: false, optional: true, required: false
  private _workerPool?: string; 
  public get workerPool() {
    return this.getStringAttribute('worker_pool');
  }
  public set workerPool(value: string) {
    this._workerPool = value;
  }
  public resetWorkerPool() {
    this._workerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerPoolInput() {
    return this._workerPool;
  }
}
export interface CloudRunV2ServiceScaling {
  /**
  * Total instance count for the service in manual scaling mode. This number of instances is divided among all revisions with specified traffic based on the percent of traffic they are receiving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#manual_instance_count CloudRunV2Service#manual_instance_count}
  */
  readonly manualInstanceCount?: number;
  /**
  * Minimum number of instances for the service, to be divided among all revisions receiving traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#min_instance_count CloudRunV2Service#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * The [scaling mode](https://cloud.google.com/run/docs/reference/rest/v2/projects.locations.services#scalingmode) for the service. Possible values: ["AUTOMATIC", "MANUAL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#scaling_mode CloudRunV2Service#scaling_mode}
  */
  readonly scalingMode?: string;
}

export function cloudRunV2ServiceScalingToTerraform(struct?: CloudRunV2ServiceScalingOutputReference | CloudRunV2ServiceScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_instance_count: cdktf.numberToTerraform(struct!.manualInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
    scaling_mode: cdktf.stringToTerraform(struct!.scalingMode),
  }
}


export function cloudRunV2ServiceScalingToHclTerraform(struct?: CloudRunV2ServiceScalingOutputReference | CloudRunV2ServiceScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.manualInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaling_mode: {
      value: cdktf.stringToHclTerraform(struct!.scalingMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualInstanceCount = this._manualInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    if (this._scalingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.scalingMode = this._scalingMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualInstanceCount = undefined;
      this._minInstanceCount = undefined;
      this._scalingMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualInstanceCount = value.manualInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
      this._scalingMode = value.scalingMode;
    }
  }

  // manual_instance_count - computed: false, optional: true, required: false
  private _manualInstanceCount?: number; 
  public get manualInstanceCount() {
    return this.getNumberAttribute('manual_instance_count');
  }
  public set manualInstanceCount(value: number) {
    this._manualInstanceCount = value;
  }
  public resetManualInstanceCount() {
    this._manualInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInstanceCountInput() {
    return this._manualInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }

  // scaling_mode - computed: false, optional: true, required: false
  private _scalingMode?: string; 
  public get scalingMode() {
    return this.getStringAttribute('scaling_mode');
  }
  public set scalingMode(value: string) {
    this._scalingMode = value;
  }
  public resetScalingMode() {
    this._scalingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingModeInput() {
    return this._scalingMode;
  }
}
export interface CloudRunV2ServiceTemplateContainersBuildInfo {
}

export function cloudRunV2ServiceTemplateContainersBuildInfoToTerraform(struct?: CloudRunV2ServiceTemplateContainersBuildInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cloudRunV2ServiceTemplateContainersBuildInfoToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersBuildInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CloudRunV2ServiceTemplateContainersBuildInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateContainersBuildInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersBuildInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // function_target - computed: true, optional: false, required: false
  public get functionTarget() {
    return this.getStringAttribute('function_target');
  }

  // source_location - computed: true, optional: false, required: false
  public get sourceLocation() {
    return this.getStringAttribute('source_location');
  }
}

export class CloudRunV2ServiceTemplateContainersBuildInfoList extends cdktf.ComplexList {

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
  public get(index: number): CloudRunV2ServiceTemplateContainersBuildInfoOutputReference {
    return new CloudRunV2ServiceTemplateContainersBuildInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef {
  /**
  * The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}
  */
  readonly secret: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#version CloudRunV2Service#version}
  */
  readonly version?: string;
}

export function cloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefToTerraform(struct?: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference | CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference | CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secret = undefined;
      this._version = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secret = value.secret;
      this._version = value.version;
    }
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CloudRunV2ServiceTemplateContainersEnvValueSource {
  /**
  * secret_key_ref block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#secret_key_ref CloudRunV2Service#secret_key_ref}
  */
  readonly secretKeyRef?: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef;
}

export function cloudRunV2ServiceTemplateContainersEnvValueSourceToTerraform(struct?: CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference | CloudRunV2ServiceTemplateContainersEnvValueSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: cloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function cloudRunV2ServiceTemplateContainersEnvValueSourceToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference | CloudRunV2ServiceTemplateContainersEnvValueSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_key_ref: {
      value: cloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersEnvValueSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersEnvValueSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._secretKeyRef.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: CloudRunV2ServiceTemplateContainersEnvValueSourceSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface CloudRunV2ServiceTemplateContainersEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER, and may not exceed 32768 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name: string;
  /**
  * Literal value of the environment variable. Defaults to "" and the maximum allowed length is 32768 characters. Variable references are not supported in Cloud Run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#value CloudRunV2Service#value}
  */
  readonly value?: string;
  /**
  * value_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#value_source CloudRunV2Service#value_source}
  */
  readonly valueSource?: CloudRunV2ServiceTemplateContainersEnvValueSource;
}

export function cloudRunV2ServiceTemplateContainersEnvToTerraform(struct?: CloudRunV2ServiceTemplateContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_source: cloudRunV2ServiceTemplateContainersEnvValueSourceToTerraform(struct!.valueSource),
  }
}


export function cloudRunV2ServiceTemplateContainersEnvToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_source: {
      value: cloudRunV2ServiceTemplateContainersEnvValueSourceToHclTerraform(struct!.valueSource),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersEnvValueSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateContainersEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueSource = this._valueSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueSource.internalValue = value.valueSource;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_source - computed: false, optional: true, required: false
  private _valueSource = new CloudRunV2ServiceTemplateContainersEnvValueSourceOutputReference(this, "value_source");
  public get valueSource() {
    return this._valueSource;
  }
  public putValueSource(value: CloudRunV2ServiceTemplateContainersEnvValueSource) {
    this._valueSource.internalValue = value;
  }
  public resetValueSource() {
    this._valueSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueSourceInput() {
    return this._valueSource.internalValue;
  }
}

export class CloudRunV2ServiceTemplateContainersEnvList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateContainersEnv[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateContainersEnvOutputReference {
    return new CloudRunV2ServiceTemplateContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateContainersLivenessProbeGrpc {
  /**
  * Port number to access on the container. Number must be in the range 1 to 65535.
  * If not specified, defaults to the same value as container.ports[0].containerPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}
  */
  readonly port?: number;
  /**
  * The name of the service to place in the gRPC HealthCheckRequest
  * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
  * If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#service CloudRunV2Service#service}
  */
  readonly service?: string;
}

export function cloudRunV2ServiceTemplateContainersLivenessProbeGrpcToTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function cloudRunV2ServiceTemplateContainersLivenessProbeGrpcToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersLivenessProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders {
  /**
  * The header field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#value CloudRunV2Service#value}
  */
  readonly value?: string;
}

export function cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersToTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference {
    return new CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet {
  /**
  * Path to access on the HTTP server. Defaults to '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}
  */
  readonly path?: string;
  /**
  * Port number to access on the container. Number must be in the range 1 to 65535.
  * If not specified, defaults to the same value as container.ports[0].containerPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}
  */
  readonly port?: number;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}
  */
  readonly httpHeaders?: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
}

export function cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetToTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    http_headers: cdktf.listMapper(cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_headers: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._port = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._port = value.port;
      this._httpHeaders.internalValue = value.httpHeaders;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }
}
export interface CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket {
  /**
  * Port number to access on the container. Must be in the range 1 to 65535.
  * If not specified, defaults to the exposed port of the container, which
  * is the value of container.ports[0].containerPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}
  */
  readonly port: number;
}

export function cloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketToTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function cloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface CloudRunV2ServiceTemplateContainersLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#grpc CloudRunV2Service#grpc}
  */
  readonly grpc?: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#http_get CloudRunV2Service#http_get}
  */
  readonly httpGet?: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}
  */
  readonly tcpSocket?: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket;
}

export function cloudRunV2ServiceTemplateContainersLivenessProbeToTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    grpc: cloudRunV2ServiceTemplateContainersLivenessProbeGrpcToTerraform(struct!.grpc),
    http_get: cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function cloudRunV2ServiceTemplateContainersLivenessProbeToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference | CloudRunV2ServiceTemplateContainersLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: cloudRunV2ServiceTemplateContainersLivenessProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersLivenessProbeGrpcList",
    },
    http_get: {
      value: cloudRunV2ServiceTemplateContainersLivenessProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetList",
    },
    tcp_socket: {
      value: cloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersLivenessProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new CloudRunV2ServiceTemplateContainersLivenessProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: CloudRunV2ServiceTemplateContainersLivenessProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new CloudRunV2ServiceTemplateContainersLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: CloudRunV2ServiceTemplateContainersLivenessProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: CloudRunV2ServiceTemplateContainersLivenessProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface CloudRunV2ServiceTemplateContainersPorts {
  /**
  * Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#container_port CloudRunV2Service#container_port}
  */
  readonly containerPort?: number;
  /**
  * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name?: string;
}

export function cloudRunV2ServiceTemplateContainersPortsToTerraform(struct?: CloudRunV2ServiceTemplateContainersPortsOutputReference | CloudRunV2ServiceTemplateContainersPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudRunV2ServiceTemplateContainersPortsToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersPortsOutputReference | CloudRunV2ServiceTemplateContainersPorts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_port: {
      value: cdktf.numberToHclTerraform(struct!.containerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersPortsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersPorts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerPort = this._containerPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersPorts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._containerPort = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._containerPort = value.containerPort;
      this._name = value.name;
    }
  }

  // container_port - computed: false, optional: true, required: false
  private _containerPort?: number; 
  public get containerPort() {
    return this.getNumberAttribute('container_port');
  }
  public set containerPort(value: number) {
    this._containerPort = value;
  }
  public resetContainerPort() {
    this._containerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerPortInput() {
    return this._containerPort;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }
}
export interface CloudRunV2ServiceTemplateContainersResources {
  /**
  * Determines whether CPU is only allocated during requests. True by default if the parent 'resources' field is not set. However, if
  * 'resources' is set, this field must be explicitly set to true to preserve the default behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#cpu_idle CloudRunV2Service#cpu_idle}
  */
  readonly cpuIdle?: boolean | cdktf.IResolvable;
  /**
  * Only memory, CPU, and nvidia.com/gpu are supported. Use key 'cpu' for CPU limit, 'memory' for memory limit, 'nvidia.com/gpu' for gpu limit. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#limits CloudRunV2Service#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Determines whether CPU should be boosted on startup of a new container instance above the requested CPU threshold, this can help reduce cold-start latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#startup_cpu_boost CloudRunV2Service#startup_cpu_boost}
  */
  readonly startupCpuBoost?: boolean | cdktf.IResolvable;
}

export function cloudRunV2ServiceTemplateContainersResourcesToTerraform(struct?: CloudRunV2ServiceTemplateContainersResourcesOutputReference | CloudRunV2ServiceTemplateContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_idle: cdktf.booleanToTerraform(struct!.cpuIdle),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    startup_cpu_boost: cdktf.booleanToTerraform(struct!.startupCpuBoost),
  }
}


export function cloudRunV2ServiceTemplateContainersResourcesToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersResourcesOutputReference | CloudRunV2ServiceTemplateContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_idle: {
      value: cdktf.booleanToHclTerraform(struct!.cpuIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    startup_cpu_boost: {
      value: cdktf.booleanToHclTerraform(struct!.startupCpuBoost),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuIdle = this._cpuIdle;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._startupCpuBoost !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupCpuBoost = this._startupCpuBoost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuIdle = undefined;
      this._limits = undefined;
      this._startupCpuBoost = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuIdle = value.cpuIdle;
      this._limits = value.limits;
      this._startupCpuBoost = value.startupCpuBoost;
    }
  }

  // cpu_idle - computed: false, optional: true, required: false
  private _cpuIdle?: boolean | cdktf.IResolvable; 
  public get cpuIdle() {
    return this.getBooleanAttribute('cpu_idle');
  }
  public set cpuIdle(value: boolean | cdktf.IResolvable) {
    this._cpuIdle = value;
  }
  public resetCpuIdle() {
    this._cpuIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuIdleInput() {
    return this._cpuIdle;
  }

  // limits - computed: true, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // startup_cpu_boost - computed: false, optional: true, required: false
  private _startupCpuBoost?: boolean | cdktf.IResolvable; 
  public get startupCpuBoost() {
    return this.getBooleanAttribute('startup_cpu_boost');
  }
  public set startupCpuBoost(value: boolean | cdktf.IResolvable) {
    this._startupCpuBoost = value;
  }
  public resetStartupCpuBoost() {
    this._startupCpuBoost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupCpuBoostInput() {
    return this._startupCpuBoost;
  }
}
export interface CloudRunV2ServiceTemplateContainersStartupProbeGrpc {
  /**
  * Port number to access on the container. Number must be in the range 1 to 65535.
  * If not specified, defaults to the same value as container.ports[0].containerPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}
  */
  readonly port?: number;
  /**
  * The name of the service to place in the gRPC HealthCheckRequest
  * (see https://github.com/grpc/grpc/blob/master/doc/health-checking.md).
  * If this is not specified, the default behavior is defined by gRPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#service CloudRunV2Service#service}
  */
  readonly service?: string;
}

export function cloudRunV2ServiceTemplateContainersStartupProbeGrpcToTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference | CloudRunV2ServiceTemplateContainersStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function cloudRunV2ServiceTemplateContainersStartupProbeGrpcToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference | CloudRunV2ServiceTemplateContainersStartupProbeGrpc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersStartupProbeGrpc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersStartupProbeGrpc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
      this._service = value.service;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders {
  /**
  * The header field name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name: string;
  /**
  * The header field value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#value CloudRunV2Service#value}
  */
  readonly value?: string;
}

export function cloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersToTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference {
    return new CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateContainersStartupProbeHttpGet {
  /**
  * Path to access on the HTTP server. Defaults to '/'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}
  */
  readonly path?: string;
  /**
  * Port number to access on the container. Must be in the range 1 to 65535.
  * If not specified, defaults to the same value as container.ports[0].containerPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}
  */
  readonly port?: number;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#http_headers CloudRunV2Service#http_headers}
  */
  readonly httpHeaders?: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
}

export function cloudRunV2ServiceTemplateContainersStartupProbeHttpGetToTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference | CloudRunV2ServiceTemplateContainersStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    port: cdktf.numberToTerraform(struct!.port),
    http_headers: cdktf.listMapper(cloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}


export function cloudRunV2ServiceTemplateContainersStartupProbeHttpGetToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference | CloudRunV2ServiceTemplateContainersStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_headers: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersToHclTerraform, true)(struct!.httpHeaders),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._port = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._port = value.port;
      this._httpHeaders.internalValue = value.httpHeaders;
    }
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: CloudRunV2ServiceTemplateContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }
}
export interface CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket {
  /**
  * Port number to access on the container. Must be in the range 1 to 65535.
  * If not specified, defaults to the same value as container.ports[0].containerPort.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#port CloudRunV2Service#port}
  */
  readonly port?: number;
}

export function cloudRunV2ServiceTemplateContainersStartupProbeTcpSocketToTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference | CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function cloudRunV2ServiceTemplateContainersStartupProbeTcpSocketToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference | CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: true, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}
export interface CloudRunV2ServiceTemplateContainersStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#failure_threshold CloudRunV2Service#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#initial_delay_seconds CloudRunV2Service#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#period_seconds CloudRunV2Service#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#timeout_seconds CloudRunV2Service#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * grpc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#grpc CloudRunV2Service#grpc}
  */
  readonly grpc?: CloudRunV2ServiceTemplateContainersStartupProbeGrpc;
  /**
  * http_get block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#http_get CloudRunV2Service#http_get}
  */
  readonly httpGet?: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet;
  /**
  * tcp_socket block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#tcp_socket CloudRunV2Service#tcp_socket}
  */
  readonly tcpSocket?: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket;
}

export function cloudRunV2ServiceTemplateContainersStartupProbeToTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeOutputReference | CloudRunV2ServiceTemplateContainersStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    grpc: cloudRunV2ServiceTemplateContainersStartupProbeGrpcToTerraform(struct!.grpc),
    http_get: cloudRunV2ServiceTemplateContainersStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cloudRunV2ServiceTemplateContainersStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
  }
}


export function cloudRunV2ServiceTemplateContainersStartupProbeToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersStartupProbeOutputReference | CloudRunV2ServiceTemplateContainersStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_threshold: {
      value: cdktf.numberToHclTerraform(struct!.failureThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    grpc: {
      value: cloudRunV2ServiceTemplateContainersStartupProbeGrpcToHclTerraform(struct!.grpc),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersStartupProbeGrpcList",
    },
    http_get: {
      value: cloudRunV2ServiceTemplateContainersStartupProbeHttpGetToHclTerraform(struct!.httpGet),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersStartupProbeHttpGetList",
    },
    tcp_socket: {
      value: cloudRunV2ServiceTemplateContainersStartupProbeTcpSocketToHclTerraform(struct!.tcpSocket),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateContainersStartupProbe | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureThreshold = this._failureThreshold;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    if (this._grpc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpc = this._grpc?.internalValue;
    }
    if (this._httpGet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet?.internalValue;
    }
    if (this._tcpSocket?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSocket = this._tcpSocket?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._grpc.internalValue = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
      this._grpc.internalValue = value.grpc;
      this._httpGet.internalValue = value.httpGet;
      this._tcpSocket.internalValue = value.tcpSocket;
    }
  }

  // failure_threshold - computed: false, optional: true, required: false
  private _failureThreshold?: number; 
  public get failureThreshold() {
    return this.getNumberAttribute('failure_threshold');
  }
  public set failureThreshold(value: number) {
    this._failureThreshold = value;
  }
  public resetFailureThreshold() {
    this._failureThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureThresholdInput() {
    return this._failureThreshold;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }

  // grpc - computed: false, optional: true, required: false
  private _grpc = new CloudRunV2ServiceTemplateContainersStartupProbeGrpcOutputReference(this, "grpc");
  public get grpc() {
    return this._grpc;
  }
  public putGrpc(value: CloudRunV2ServiceTemplateContainersStartupProbeGrpc) {
    this._grpc.internalValue = value;
  }
  public resetGrpc() {
    this._grpc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcInput() {
    return this._grpc.internalValue;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new CloudRunV2ServiceTemplateContainersStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: CloudRunV2ServiceTemplateContainersStartupProbeHttpGet) {
    this._httpGet.internalValue = value;
  }
  public resetHttpGet() {
    this._httpGet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet.internalValue;
  }

  // tcp_socket - computed: false, optional: true, required: false
  private _tcpSocket = new CloudRunV2ServiceTemplateContainersStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: CloudRunV2ServiceTemplateContainersStartupProbeTcpSocket) {
    this._tcpSocket.internalValue = value;
  }
  public resetTcpSocket() {
    this._tcpSocket.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSocketInput() {
    return this._tcpSocket.internalValue;
  }
}
export interface CloudRunV2ServiceTemplateContainersVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#mount_path CloudRunV2Service#mount_path}
  */
  readonly mountPath: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name: string;
}

export function cloudRunV2ServiceTemplateContainersVolumeMountsToTerraform(struct?: CloudRunV2ServiceTemplateContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function cloudRunV2ServiceTemplateContainersVolumeMountsToHclTerraform(struct?: CloudRunV2ServiceTemplateContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateContainersVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainersVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._name = value.name;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
}

export class CloudRunV2ServiceTemplateContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference {
    return new CloudRunV2ServiceTemplateContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateContainers {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references are not supported in Cloud Run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#args CloudRunV2Service#args}
  */
  readonly args?: string[];
  /**
  * Base image for this container. If set, it indicates that the service is enrolled into automatic base image update.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#base_image_uri CloudRunV2Service#base_image_uri}
  */
  readonly baseImageUri?: string;
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#command CloudRunV2Service#command}
  */
  readonly command?: string[];
  /**
  * Containers which should be started before this container. If specified the container will wait to start until all containers with the listed names are healthy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#depends_on CloudRunV2Service#depends_on}
  */
  readonly dependsOn?: string[];
  /**
  * URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#image CloudRunV2Service#image}
  */
  readonly image: string;
  /**
  * Name of the container specified as a DNS_LABEL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name?: string;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#working_dir CloudRunV2Service#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#env CloudRunV2Service#env}
  */
  readonly env?: CloudRunV2ServiceTemplateContainersEnv[] | cdktf.IResolvable;
  /**
  * liveness_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#liveness_probe CloudRunV2Service#liveness_probe}
  */
  readonly livenessProbe?: CloudRunV2ServiceTemplateContainersLivenessProbe;
  /**
  * ports block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#ports CloudRunV2Service#ports}
  */
  readonly ports?: CloudRunV2ServiceTemplateContainersPorts;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#resources CloudRunV2Service#resources}
  */
  readonly resources?: CloudRunV2ServiceTemplateContainersResources;
  /**
  * startup_probe block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#startup_probe CloudRunV2Service#startup_probe}
  */
  readonly startupProbe?: CloudRunV2ServiceTemplateContainersStartupProbe;
  /**
  * volume_mounts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#volume_mounts CloudRunV2Service#volume_mounts}
  */
  readonly volumeMounts?: CloudRunV2ServiceTemplateContainersVolumeMounts[] | cdktf.IResolvable;
}

export function cloudRunV2ServiceTemplateContainersToTerraform(struct?: CloudRunV2ServiceTemplateContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    base_image_uri: cdktf.stringToTerraform(struct!.baseImageUri),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    depends_on: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dependsOn),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(cloudRunV2ServiceTemplateContainersEnvToTerraform, true)(struct!.env),
    liveness_probe: cloudRunV2ServiceTemplateContainersLivenessProbeToTerraform(struct!.livenessProbe),
    ports: cloudRunV2ServiceTemplateContainersPortsToTerraform(struct!.ports),
    resources: cloudRunV2ServiceTemplateContainersResourcesToTerraform(struct!.resources),
    startup_probe: cloudRunV2ServiceTemplateContainersStartupProbeToTerraform(struct!.startupProbe),
    volume_mounts: cdktf.listMapper(cloudRunV2ServiceTemplateContainersVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}


export function cloudRunV2ServiceTemplateContainersToHclTerraform(struct?: CloudRunV2ServiceTemplateContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    base_image_uri: {
      value: cdktf.stringToHclTerraform(struct!.baseImageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    depends_on: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dependsOn),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
    working_dir: {
      value: cdktf.stringToHclTerraform(struct!.workingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateContainersEnvToHclTerraform, true)(struct!.env),
      isBlock: true,
      type: "set",
      storageClassType: "CloudRunV2ServiceTemplateContainersEnvList",
    },
    liveness_probe: {
      value: cloudRunV2ServiceTemplateContainersLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersLivenessProbeList",
    },
    ports: {
      value: cloudRunV2ServiceTemplateContainersPortsToHclTerraform(struct!.ports),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersPortsList",
    },
    resources: {
      value: cloudRunV2ServiceTemplateContainersResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersResourcesList",
    },
    startup_probe: {
      value: cloudRunV2ServiceTemplateContainersStartupProbeToHclTerraform(struct!.startupProbe),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersStartupProbeList",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateContainersVolumeMountsToHclTerraform, true)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._baseImageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseImageUri = this._baseImageUri;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._dependsOn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dependsOn = this._dependsOn;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._workingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.workingDir = this._workingDir;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    if (this._ports?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ports = this._ports?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._startupProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.startupProbe = this._startupProbe?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._baseImageUri = undefined;
      this._command = undefined;
      this._dependsOn = undefined;
      this._image = undefined;
      this._name = undefined;
      this._workingDir = undefined;
      this._env.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
      this._ports.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._startupProbe.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._baseImageUri = value.baseImageUri;
      this._command = value.command;
      this._dependsOn = value.dependsOn;
      this._image = value.image;
      this._name = value.name;
      this._workingDir = value.workingDir;
      this._env.internalValue = value.env;
      this._livenessProbe.internalValue = value.livenessProbe;
      this._ports.internalValue = value.ports;
      this._resources.internalValue = value.resources;
      this._startupProbe.internalValue = value.startupProbe;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // base_image_uri - computed: false, optional: true, required: false
  private _baseImageUri?: string; 
  public get baseImageUri() {
    return this.getStringAttribute('base_image_uri');
  }
  public set baseImageUri(value: string) {
    this._baseImageUri = value;
  }
  public resetBaseImageUri() {
    this._baseImageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageUriInput() {
    return this._baseImageUri;
  }

  // build_info - computed: true, optional: false, required: false
  private _buildInfo = new CloudRunV2ServiceTemplateContainersBuildInfoList(this, "build_info", false);
  public get buildInfo() {
    return this._buildInfo;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // depends_on - computed: false, optional: true, required: false
  private _dependsOn?: string[]; 
  public get dependsOn() {
    return this.getListAttribute('depends_on');
  }
  public set dependsOn(value: string[]) {
    this._dependsOn = value;
  }
  public resetDependsOn() {
    this._dependsOn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dependsOnInput() {
    return this._dependsOn;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // working_dir - computed: false, optional: true, required: false
  private _workingDir?: string; 
  public get workingDir() {
    return this.getStringAttribute('working_dir');
  }
  public set workingDir(value: string) {
    this._workingDir = value;
  }
  public resetWorkingDir() {
    this._workingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workingDirInput() {
    return this._workingDir;
  }

  // env - computed: false, optional: true, required: false
  private _env = new CloudRunV2ServiceTemplateContainersEnvList(this, "env", true);
  public get env() {
    return this._env;
  }
  public putEnv(value: CloudRunV2ServiceTemplateContainersEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new CloudRunV2ServiceTemplateContainersLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: CloudRunV2ServiceTemplateContainersLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }

  // ports - computed: false, optional: true, required: false
  private _ports = new CloudRunV2ServiceTemplateContainersPortsOutputReference(this, "ports");
  public get ports() {
    return this._ports;
  }
  public putPorts(value: CloudRunV2ServiceTemplateContainersPorts) {
    this._ports.internalValue = value;
  }
  public resetPorts() {
    this._ports.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new CloudRunV2ServiceTemplateContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: CloudRunV2ServiceTemplateContainersResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // startup_probe - computed: false, optional: true, required: false
  private _startupProbe = new CloudRunV2ServiceTemplateContainersStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: CloudRunV2ServiceTemplateContainersStartupProbe) {
    this._startupProbe.internalValue = value;
  }
  public resetStartupProbe() {
    this._startupProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupProbeInput() {
    return this._startupProbe.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new CloudRunV2ServiceTemplateContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: CloudRunV2ServiceTemplateContainersVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}

export class CloudRunV2ServiceTemplateContainersList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateContainers[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateContainersOutputReference {
    return new CloudRunV2ServiceTemplateContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateNodeSelector {
  /**
  * The GPU to attach to an instance. See https://cloud.google.com/run/docs/configuring/services/gpu for configuring GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#accelerator CloudRunV2Service#accelerator}
  */
  readonly accelerator: string;
}

export function cloudRunV2ServiceTemplateNodeSelectorToTerraform(struct?: CloudRunV2ServiceTemplateNodeSelectorOutputReference | CloudRunV2ServiceTemplateNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerator: cdktf.stringToTerraform(struct!.accelerator),
  }
}


export function cloudRunV2ServiceTemplateNodeSelectorToHclTerraform(struct?: CloudRunV2ServiceTemplateNodeSelectorOutputReference | CloudRunV2ServiceTemplateNodeSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerator: {
      value: cdktf.stringToHclTerraform(struct!.accelerator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateNodeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateNodeSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accelerator !== undefined) {
      hasAnyValues = true;
      internalValueResult.accelerator = this._accelerator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateNodeSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accelerator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accelerator = value.accelerator;
    }
  }

  // accelerator - computed: false, optional: false, required: true
  private _accelerator?: string; 
  public get accelerator() {
    return this.getStringAttribute('accelerator');
  }
  public set accelerator(value: string) {
    this._accelerator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratorInput() {
    return this._accelerator;
  }
}
export interface CloudRunV2ServiceTemplateScaling {
  /**
  * Maximum number of serving instances that this resource should have. Must not be less than minimum instance count. If absent, Cloud Run will calculate
  * a default value based on the project's available container instances quota in the region and specified instance size.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#max_instance_count CloudRunV2Service#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Minimum number of serving instances that this resource should have. Defaults to 0. Must not be greater than maximum instance count.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#min_instance_count CloudRunV2Service#min_instance_count}
  */
  readonly minInstanceCount?: number;
}

export function cloudRunV2ServiceTemplateScalingToTerraform(struct?: CloudRunV2ServiceTemplateScalingOutputReference | CloudRunV2ServiceTemplateScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_instance_count: cdktf.numberToTerraform(struct!.maxInstanceCount),
    min_instance_count: cdktf.numberToTerraform(struct!.minInstanceCount),
  }
}


export function cloudRunV2ServiceTemplateScalingToHclTerraform(struct?: CloudRunV2ServiceTemplateScalingOutputReference | CloudRunV2ServiceTemplateScaling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.maxInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_instance_count: {
      value: cdktf.numberToHclTerraform(struct!.minInstanceCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateScalingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateScaling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceCount = this._maxInstanceCount;
    }
    if (this._minInstanceCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minInstanceCount = this._minInstanceCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateScaling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxInstanceCount = undefined;
      this._minInstanceCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxInstanceCount = value.maxInstanceCount;
      this._minInstanceCount = value.minInstanceCount;
    }
  }

  // max_instance_count - computed: false, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // min_instance_count - computed: false, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
  }
}
export interface CloudRunV2ServiceTemplateVolumesCloudSqlInstance {
  /**
  * The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#instances CloudRunV2Service#instances}
  */
  readonly instances?: string[];
}

export function cloudRunV2ServiceTemplateVolumesCloudSqlInstanceToTerraform(struct?: CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference | CloudRunV2ServiceTemplateVolumesCloudSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
  }
}


export function cloudRunV2ServiceTemplateVolumesCloudSqlInstanceToHclTerraform(struct?: CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference | CloudRunV2ServiceTemplateVolumesCloudSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instances),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateVolumesCloudSqlInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVolumesCloudSqlInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._instances = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._instances = value.instances;
    }
  }

  // instances - computed: false, optional: true, required: false
  private _instances?: string[]; 
  public get instances() {
    return cdktf.Fn.tolist(this.getListAttribute('instances'));
  }
  public set instances(value: string[]) {
    this._instances = value;
  }
  public resetInstances() {
    this._instances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }
}
export interface CloudRunV2ServiceTemplateVolumesEmptyDir {
  /**
  * The different types of medium supported for EmptyDir. Default value: "MEMORY" Possible values: ["MEMORY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#medium CloudRunV2Service#medium}
  */
  readonly medium?: string;
  /**
  * Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers in a pod. This field's values are of the 'Quantity' k8s type: https://kubernetes.io/docs/reference/kubernetes-api/common-definitions/quantity/. The default is nil which means that the limit is undefined. More info: https://kubernetes.io/docs/concepts/storage/volumes/#emptydir.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#size_limit CloudRunV2Service#size_limit}
  */
  readonly sizeLimit?: string;
}

export function cloudRunV2ServiceTemplateVolumesEmptyDirToTerraform(struct?: CloudRunV2ServiceTemplateVolumesEmptyDirOutputReference | CloudRunV2ServiceTemplateVolumesEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    medium: cdktf.stringToTerraform(struct!.medium),
    size_limit: cdktf.stringToTerraform(struct!.sizeLimit),
  }
}


export function cloudRunV2ServiceTemplateVolumesEmptyDirToHclTerraform(struct?: CloudRunV2ServiceTemplateVolumesEmptyDirOutputReference | CloudRunV2ServiceTemplateVolumesEmptyDir): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    medium: {
      value: cdktf.stringToHclTerraform(struct!.medium),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_limit: {
      value: cdktf.stringToHclTerraform(struct!.sizeLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVolumesEmptyDirOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateVolumesEmptyDir | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._medium !== undefined) {
      hasAnyValues = true;
      internalValueResult.medium = this._medium;
    }
    if (this._sizeLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeLimit = this._sizeLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVolumesEmptyDir | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._medium = undefined;
      this._sizeLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._medium = value.medium;
      this._sizeLimit = value.sizeLimit;
    }
  }

  // medium - computed: false, optional: true, required: false
  private _medium?: string; 
  public get medium() {
    return this.getStringAttribute('medium');
  }
  public set medium(value: string) {
    this._medium = value;
  }
  public resetMedium() {
    this._medium = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mediumInput() {
    return this._medium;
  }

  // size_limit - computed: false, optional: true, required: false
  private _sizeLimit?: string; 
  public get sizeLimit() {
    return this.getStringAttribute('size_limit');
  }
  public set sizeLimit(value: string) {
    this._sizeLimit = value;
  }
  public resetSizeLimit() {
    this._sizeLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeLimitInput() {
    return this._sizeLimit;
  }
}
export interface CloudRunV2ServiceTemplateVolumesGcs {
  /**
  * GCS Bucket name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#bucket CloudRunV2Service#bucket}
  */
  readonly bucket: string;
  /**
  * If true, mount the GCS bucket as read-only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#read_only CloudRunV2Service#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function cloudRunV2ServiceTemplateVolumesGcsToTerraform(struct?: CloudRunV2ServiceTemplateVolumesGcsOutputReference | CloudRunV2ServiceTemplateVolumesGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function cloudRunV2ServiceTemplateVolumesGcsToHclTerraform(struct?: CloudRunV2ServiceTemplateVolumesGcsOutputReference | CloudRunV2ServiceTemplateVolumesGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVolumesGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateVolumesGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVolumesGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._readOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._readOnly = value.readOnly;
    }
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface CloudRunV2ServiceTemplateVolumesNfs {
  /**
  * Path that is exported by the NFS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}
  */
  readonly path: string;
  /**
  * If true, mount the NFS volume as read only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#read_only CloudRunV2Service#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Hostname or IP address of the NFS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#server CloudRunV2Service#server}
  */
  readonly server: string;
}

export function cloudRunV2ServiceTemplateVolumesNfsToTerraform(struct?: CloudRunV2ServiceTemplateVolumesNfsOutputReference | CloudRunV2ServiceTemplateVolumesNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function cloudRunV2ServiceTemplateVolumesNfsToHclTerraform(struct?: CloudRunV2ServiceTemplateVolumesNfsOutputReference | CloudRunV2ServiceTemplateVolumesNfs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVolumesNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateVolumesNfs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVolumesNfs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._readOnly = undefined;
      this._server = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
      this._readOnly = value.readOnly;
      this._server = value.server;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // server - computed: false, optional: false, required: true
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface CloudRunV2ServiceTemplateVolumesSecretItems {
  /**
  * Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#mode CloudRunV2Service#mode}
  */
  readonly mode?: number;
  /**
  * The relative path of the secret in the container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#path CloudRunV2Service#path}
  */
  readonly path: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#version CloudRunV2Service#version}
  */
  readonly version?: string;
}

export function cloudRunV2ServiceTemplateVolumesSecretItemsToTerraform(struct?: CloudRunV2ServiceTemplateVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function cloudRunV2ServiceTemplateVolumesSecretItemsToHclTerraform(struct?: CloudRunV2ServiceTemplateVolumesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateVolumesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVolumesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._path = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._path = value.path;
      this._version = value.version;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CloudRunV2ServiceTemplateVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference {
    return new CloudRunV2ServiceTemplateVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateVolumesSecret {
  /**
  * Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#default_mode CloudRunV2Service#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}
  */
  readonly secret: string;
  /**
  * items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#items CloudRunV2Service#items}
  */
  readonly items?: CloudRunV2ServiceTemplateVolumesSecretItems[] | cdktf.IResolvable;
}

export function cloudRunV2ServiceTemplateVolumesSecretToTerraform(struct?: CloudRunV2ServiceTemplateVolumesSecretOutputReference | CloudRunV2ServiceTemplateVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    secret: cdktf.stringToTerraform(struct!.secret),
    items: cdktf.listMapper(cloudRunV2ServiceTemplateVolumesSecretItemsToTerraform, true)(struct!.items),
  }
}


export function cloudRunV2ServiceTemplateVolumesSecretToHclTerraform(struct?: CloudRunV2ServiceTemplateVolumesSecretOutputReference | CloudRunV2ServiceTemplateVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    items: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateVolumesSecretItemsToHclTerraform, true)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVolumesSecretItemsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateVolumesSecret | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVolumesSecret | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultMode = undefined;
      this._secret = undefined;
      this._items.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultMode = value.defaultMode;
      this._secret = value.secret;
      this._items.internalValue = value.items;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // items - computed: false, optional: true, required: false
  private _items = new CloudRunV2ServiceTemplateVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudRunV2ServiceTemplateVolumesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
  }
}
export interface CloudRunV2ServiceTemplateVolumes {
  /**
  * Volume's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#name CloudRunV2Service#name}
  */
  readonly name: string;
  /**
  * cloud_sql_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#cloud_sql_instance CloudRunV2Service#cloud_sql_instance}
  */
  readonly cloudSqlInstance?: CloudRunV2ServiceTemplateVolumesCloudSqlInstance;
  /**
  * empty_dir block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#empty_dir CloudRunV2Service#empty_dir}
  */
  readonly emptyDir?: CloudRunV2ServiceTemplateVolumesEmptyDir;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#gcs CloudRunV2Service#gcs}
  */
  readonly gcs?: CloudRunV2ServiceTemplateVolumesGcs;
  /**
  * nfs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#nfs CloudRunV2Service#nfs}
  */
  readonly nfs?: CloudRunV2ServiceTemplateVolumesNfs;
  /**
  * secret block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#secret CloudRunV2Service#secret}
  */
  readonly secret?: CloudRunV2ServiceTemplateVolumesSecret;
}

export function cloudRunV2ServiceTemplateVolumesToTerraform(struct?: CloudRunV2ServiceTemplateVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    cloud_sql_instance: cloudRunV2ServiceTemplateVolumesCloudSqlInstanceToTerraform(struct!.cloudSqlInstance),
    empty_dir: cloudRunV2ServiceTemplateVolumesEmptyDirToTerraform(struct!.emptyDir),
    gcs: cloudRunV2ServiceTemplateVolumesGcsToTerraform(struct!.gcs),
    nfs: cloudRunV2ServiceTemplateVolumesNfsToTerraform(struct!.nfs),
    secret: cloudRunV2ServiceTemplateVolumesSecretToTerraform(struct!.secret),
  }
}


export function cloudRunV2ServiceTemplateVolumesToHclTerraform(struct?: CloudRunV2ServiceTemplateVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_sql_instance: {
      value: cloudRunV2ServiceTemplateVolumesCloudSqlInstanceToHclTerraform(struct!.cloudSqlInstance),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVolumesCloudSqlInstanceList",
    },
    empty_dir: {
      value: cloudRunV2ServiceTemplateVolumesEmptyDirToHclTerraform(struct!.emptyDir),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVolumesEmptyDirList",
    },
    gcs: {
      value: cloudRunV2ServiceTemplateVolumesGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVolumesGcsList",
    },
    nfs: {
      value: cloudRunV2ServiceTemplateVolumesNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVolumesNfsList",
    },
    secret: {
      value: cloudRunV2ServiceTemplateVolumesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVolumesSecretList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._cloudSqlInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudSqlInstance = this._cloudSqlInstance?.internalValue;
    }
    if (this._emptyDir?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyDir = this._emptyDir?.internalValue;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._cloudSqlInstance.internalValue = undefined;
      this._emptyDir.internalValue = undefined;
      this._gcs.internalValue = undefined;
      this._nfs.internalValue = undefined;
      this._secret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._cloudSqlInstance.internalValue = value.cloudSqlInstance;
      this._emptyDir.internalValue = value.emptyDir;
      this._gcs.internalValue = value.gcs;
      this._nfs.internalValue = value.nfs;
      this._secret.internalValue = value.secret;
    }
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

  // cloud_sql_instance - computed: false, optional: true, required: false
  private _cloudSqlInstance = new CloudRunV2ServiceTemplateVolumesCloudSqlInstanceOutputReference(this, "cloud_sql_instance");
  public get cloudSqlInstance() {
    return this._cloudSqlInstance;
  }
  public putCloudSqlInstance(value: CloudRunV2ServiceTemplateVolumesCloudSqlInstance) {
    this._cloudSqlInstance.internalValue = value;
  }
  public resetCloudSqlInstance() {
    this._cloudSqlInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInstanceInput() {
    return this._cloudSqlInstance.internalValue;
  }

  // empty_dir - computed: false, optional: true, required: false
  private _emptyDir = new CloudRunV2ServiceTemplateVolumesEmptyDirOutputReference(this, "empty_dir");
  public get emptyDir() {
    return this._emptyDir;
  }
  public putEmptyDir(value: CloudRunV2ServiceTemplateVolumesEmptyDir) {
    this._emptyDir.internalValue = value;
  }
  public resetEmptyDir() {
    this._emptyDir.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyDirInput() {
    return this._emptyDir.internalValue;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new CloudRunV2ServiceTemplateVolumesGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: CloudRunV2ServiceTemplateVolumesGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new CloudRunV2ServiceTemplateVolumesNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: CloudRunV2ServiceTemplateVolumesNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new CloudRunV2ServiceTemplateVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: CloudRunV2ServiceTemplateVolumesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }
}

export class CloudRunV2ServiceTemplateVolumesList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateVolumes[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateVolumesOutputReference {
    return new CloudRunV2ServiceTemplateVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces {
  /**
  * The VPC network that the Cloud Run resource will be able to send traffic to. At least one of network or subnetwork must be specified. If both
  * network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If network is not specified, it will be
  * looked up from the subnetwork.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#network CloudRunV2Service#network}
  */
  readonly network?: string;
  /**
  * The VPC subnetwork that the Cloud Run resource will get IPs from. At least one of network or subnetwork must be specified. If both
  * network and subnetwork are specified, the given VPC subnetwork must belong to the given VPC network. If subnetwork is not specified, the
  * subnetwork with the same name with the network will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#subnetwork CloudRunV2Service#subnetwork}
  */
  readonly subnetwork?: string;
  /**
  * Network tags applied to this Cloud Run service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#tags CloudRunV2Service#tags}
  */
  readonly tags?: string[];
}

export function cloudRunV2ServiceTemplateVpcAccessNetworkInterfacesToTerraform(struct?: CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    subnetwork: cdktf.stringToTerraform(struct!.subnetwork),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
  }
}


export function cloudRunV2ServiceTemplateVpcAccessNetworkInterfacesToHclTerraform(struct?: CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnetwork: {
      value: cdktf.stringToHclTerraform(struct!.subnetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._subnetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetwork = this._subnetwork;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._subnetwork = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._subnetwork = value.subnetwork;
      this._tags = value.tags;
    }
  }

  // network - computed: true, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // subnetwork - computed: true, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

export class CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference {
    return new CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2ServiceTemplateVpcAccess {
  /**
  * VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#connector CloudRunV2Service#connector}
  */
  readonly connector?: string;
  /**
  * Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#egress CloudRunV2Service#egress}
  */
  readonly egress?: string;
  /**
  * network_interfaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#network_interfaces CloudRunV2Service#network_interfaces}
  */
  readonly networkInterfaces?: CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces[] | cdktf.IResolvable;
}

export function cloudRunV2ServiceTemplateVpcAccessToTerraform(struct?: CloudRunV2ServiceTemplateVpcAccessOutputReference | CloudRunV2ServiceTemplateVpcAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector: cdktf.stringToTerraform(struct!.connector),
    egress: cdktf.stringToTerraform(struct!.egress),
    network_interfaces: cdktf.listMapper(cloudRunV2ServiceTemplateVpcAccessNetworkInterfacesToTerraform, true)(struct!.networkInterfaces),
  }
}


export function cloudRunV2ServiceTemplateVpcAccessToHclTerraform(struct?: CloudRunV2ServiceTemplateVpcAccessOutputReference | CloudRunV2ServiceTemplateVpcAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector: {
      value: cdktf.stringToHclTerraform(struct!.connector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    egress: {
      value: cdktf.stringToHclTerraform(struct!.egress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_interfaces: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateVpcAccessNetworkInterfacesToHclTerraform, true)(struct!.networkInterfaces),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateVpcAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplateVpcAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connector !== undefined) {
      hasAnyValues = true;
      internalValueResult.connector = this._connector;
    }
    if (this._egress !== undefined) {
      hasAnyValues = true;
      internalValueResult.egress = this._egress;
    }
    if (this._networkInterfaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaces = this._networkInterfaces?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplateVpcAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connector = undefined;
      this._egress = undefined;
      this._networkInterfaces.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connector = value.connector;
      this._egress = value.egress;
      this._networkInterfaces.internalValue = value.networkInterfaces;
    }
  }

  // connector - computed: false, optional: true, required: false
  private _connector?: string; 
  public get connector() {
    return this.getStringAttribute('connector');
  }
  public set connector(value: string) {
    this._connector = value;
  }
  public resetConnector() {
    this._connector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector;
  }

  // egress - computed: true, optional: true, required: false
  private _egress?: string; 
  public get egress() {
    return this.getStringAttribute('egress');
  }
  public set egress(value: string) {
    this._egress = value;
  }
  public resetEgress() {
    this._egress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress;
  }

  // network_interfaces - computed: false, optional: true, required: false
  private _networkInterfaces = new CloudRunV2ServiceTemplateVpcAccessNetworkInterfacesList(this, "network_interfaces", false);
  public get networkInterfaces() {
    return this._networkInterfaces;
  }
  public putNetworkInterfaces(value: CloudRunV2ServiceTemplateVpcAccessNetworkInterfaces[] | cdktf.IResolvable) {
    this._networkInterfaces.internalValue = value;
  }
  public resetNetworkInterfaces() {
    this._networkInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfacesInput() {
    return this._networkInterfaces.internalValue;
  }
}
export interface CloudRunV2ServiceTemplate {
  /**
  * Unstructured key value map that may be set by external tools to store and arbitrary metadata. They are not queryable and should be preserved when modifying objects.
  * 
  * Cloud Run API v2 does not support annotations with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
  * All system annotations in v1 now have a corresponding field in v2 RevisionTemplate.
  * 
  * This field follows Kubernetes annotations' namespacing, limits, and rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#annotations CloudRunV2Service#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#encryption_key CloudRunV2Service#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The sandbox environment to host this Revision. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#execution_environment CloudRunV2Service#execution_environment}
  */
  readonly executionEnvironment?: string;
  /**
  * True if GPU zonal redundancy is disabled on this revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#gpu_zonal_redundancy_disabled CloudRunV2Service#gpu_zonal_redundancy_disabled}
  */
  readonly gpuZonalRedundancyDisabled?: boolean | cdktf.IResolvable;
  /**
  * Unstructured key value map that can be used to organize and categorize objects. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc.
  * For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels.
  * 
  * Cloud Run API v2 does not support labels with 'run.googleapis.com', 'cloud.googleapis.com', 'serving.knative.dev', or 'autoscaling.knative.dev' namespaces, and they will be rejected.
  * All system labels in v1 now have a corresponding field in v2 RevisionTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#labels CloudRunV2Service#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Sets the maximum number of requests that each serving instance can receive.
  * If not specified or 0, defaults to 80 when requested CPU >= 1 and defaults to 1 when requested CPU < 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#max_instance_request_concurrency CloudRunV2Service#max_instance_request_concurrency}
  */
  readonly maxInstanceRequestConcurrency?: number;
  /**
  * The unique name for the revision. If this field is omitted, it will be automatically generated based on the Service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#revision CloudRunV2Service#revision}
  */
  readonly revision?: string;
  /**
  * Email address of the IAM service account associated with the revision of the service. The service account represents the identity of the running revision, and determines what permissions the revision has. If not provided, the revision will use the project's default service account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#service_account CloudRunV2Service#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Enables session affinity. For more information, go to https://cloud.google.com/run/docs/configuring/session-affinity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#session_affinity CloudRunV2Service#session_affinity}
  */
  readonly sessionAffinity?: boolean | cdktf.IResolvable;
  /**
  * Max allowed time for an instance to respond to a request.
  * 
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#timeout CloudRunV2Service#timeout}
  */
  readonly timeout?: string;
  /**
  * containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#containers CloudRunV2Service#containers}
  */
  readonly containers?: CloudRunV2ServiceTemplateContainers[] | cdktf.IResolvable;
  /**
  * node_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#node_selector CloudRunV2Service#node_selector}
  */
  readonly nodeSelector?: CloudRunV2ServiceTemplateNodeSelector;
  /**
  * scaling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#scaling CloudRunV2Service#scaling}
  */
  readonly scaling?: CloudRunV2ServiceTemplateScaling;
  /**
  * volumes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#volumes CloudRunV2Service#volumes}
  */
  readonly volumes?: CloudRunV2ServiceTemplateVolumes[] | cdktf.IResolvable;
  /**
  * vpc_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#vpc_access CloudRunV2Service#vpc_access}
  */
  readonly vpcAccess?: CloudRunV2ServiceTemplateVpcAccess;
}

export function cloudRunV2ServiceTemplateToTerraform(struct?: CloudRunV2ServiceTemplateOutputReference | CloudRunV2ServiceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    execution_environment: cdktf.stringToTerraform(struct!.executionEnvironment),
    gpu_zonal_redundancy_disabled: cdktf.booleanToTerraform(struct!.gpuZonalRedundancyDisabled),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    max_instance_request_concurrency: cdktf.numberToTerraform(struct!.maxInstanceRequestConcurrency),
    revision: cdktf.stringToTerraform(struct!.revision),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    session_affinity: cdktf.booleanToTerraform(struct!.sessionAffinity),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    containers: cdktf.listMapper(cloudRunV2ServiceTemplateContainersToTerraform, true)(struct!.containers),
    node_selector: cloudRunV2ServiceTemplateNodeSelectorToTerraform(struct!.nodeSelector),
    scaling: cloudRunV2ServiceTemplateScalingToTerraform(struct!.scaling),
    volumes: cdktf.listMapper(cloudRunV2ServiceTemplateVolumesToTerraform, true)(struct!.volumes),
    vpc_access: cloudRunV2ServiceTemplateVpcAccessToTerraform(struct!.vpcAccess),
  }
}


export function cloudRunV2ServiceTemplateToHclTerraform(struct?: CloudRunV2ServiceTemplateOutputReference | CloudRunV2ServiceTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    encryption_key: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_environment: {
      value: cdktf.stringToHclTerraform(struct!.executionEnvironment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpu_zonal_redundancy_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.gpuZonalRedundancyDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    max_instance_request_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.maxInstanceRequestConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_affinity: {
      value: cdktf.booleanToHclTerraform(struct!.sessionAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    timeout: {
      value: cdktf.stringToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    containers: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateContainersToHclTerraform, true)(struct!.containers),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateContainersList",
    },
    node_selector: {
      value: cloudRunV2ServiceTemplateNodeSelectorToHclTerraform(struct!.nodeSelector),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateNodeSelectorList",
    },
    scaling: {
      value: cloudRunV2ServiceTemplateScalingToHclTerraform(struct!.scaling),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateScalingList",
    },
    volumes: {
      value: cdktf.listMapperHcl(cloudRunV2ServiceTemplateVolumesToHclTerraform, true)(struct!.volumes),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVolumesList",
    },
    vpc_access: {
      value: cloudRunV2ServiceTemplateVpcAccessToHclTerraform(struct!.vpcAccess),
      isBlock: true,
      type: "list",
      storageClassType: "CloudRunV2ServiceTemplateVpcAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2ServiceTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._executionEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionEnvironment = this._executionEnvironment;
    }
    if (this._gpuZonalRedundancyDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuZonalRedundancyDisabled = this._gpuZonalRedundancyDisabled;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._maxInstanceRequestConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxInstanceRequestConcurrency = this._maxInstanceRequestConcurrency;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._sessionAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAffinity = this._sessionAffinity;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
    }
    if (this._nodeSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector?.internalValue;
    }
    if (this._scaling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaling = this._scaling?.internalValue;
    }
    if (this._volumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes?.internalValue;
    }
    if (this._vpcAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcAccess = this._vpcAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._encryptionKey = undefined;
      this._executionEnvironment = undefined;
      this._gpuZonalRedundancyDisabled = undefined;
      this._labels = undefined;
      this._maxInstanceRequestConcurrency = undefined;
      this._revision = undefined;
      this._serviceAccount = undefined;
      this._sessionAffinity = undefined;
      this._timeout = undefined;
      this._containers.internalValue = undefined;
      this._nodeSelector.internalValue = undefined;
      this._scaling.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._vpcAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._encryptionKey = value.encryptionKey;
      this._executionEnvironment = value.executionEnvironment;
      this._gpuZonalRedundancyDisabled = value.gpuZonalRedundancyDisabled;
      this._labels = value.labels;
      this._maxInstanceRequestConcurrency = value.maxInstanceRequestConcurrency;
      this._revision = value.revision;
      this._serviceAccount = value.serviceAccount;
      this._sessionAffinity = value.sessionAffinity;
      this._timeout = value.timeout;
      this._containers.internalValue = value.containers;
      this._nodeSelector.internalValue = value.nodeSelector;
      this._scaling.internalValue = value.scaling;
      this._volumes.internalValue = value.volumes;
      this._vpcAccess.internalValue = value.vpcAccess;
    }
  }

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

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
  }

  // execution_environment - computed: false, optional: true, required: false
  private _executionEnvironment?: string; 
  public get executionEnvironment() {
    return this.getStringAttribute('execution_environment');
  }
  public set executionEnvironment(value: string) {
    this._executionEnvironment = value;
  }
  public resetExecutionEnvironment() {
    this._executionEnvironment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEnvironmentInput() {
    return this._executionEnvironment;
  }

  // gpu_zonal_redundancy_disabled - computed: false, optional: true, required: false
  private _gpuZonalRedundancyDisabled?: boolean | cdktf.IResolvable; 
  public get gpuZonalRedundancyDisabled() {
    return this.getBooleanAttribute('gpu_zonal_redundancy_disabled');
  }
  public set gpuZonalRedundancyDisabled(value: boolean | cdktf.IResolvable) {
    this._gpuZonalRedundancyDisabled = value;
  }
  public resetGpuZonalRedundancyDisabled() {
    this._gpuZonalRedundancyDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuZonalRedundancyDisabledInput() {
    return this._gpuZonalRedundancyDisabled;
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

  // max_instance_request_concurrency - computed: true, optional: true, required: false
  private _maxInstanceRequestConcurrency?: number; 
  public get maxInstanceRequestConcurrency() {
    return this.getNumberAttribute('max_instance_request_concurrency');
  }
  public set maxInstanceRequestConcurrency(value: number) {
    this._maxInstanceRequestConcurrency = value;
  }
  public resetMaxInstanceRequestConcurrency() {
    this._maxInstanceRequestConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceRequestConcurrencyInput() {
    return this._maxInstanceRequestConcurrency;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // service_account - computed: true, optional: true, required: false
  private _serviceAccount?: string; 
  public get serviceAccount() {
    return this.getStringAttribute('service_account');
  }
  public set serviceAccount(value: string) {
    this._serviceAccount = value;
  }
  public resetServiceAccount() {
    this._serviceAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountInput() {
    return this._serviceAccount;
  }

  // session_affinity - computed: false, optional: true, required: false
  private _sessionAffinity?: boolean | cdktf.IResolvable; 
  public get sessionAffinity() {
    return this.getBooleanAttribute('session_affinity');
  }
  public set sessionAffinity(value: boolean | cdktf.IResolvable) {
    this._sessionAffinity = value;
  }
  public resetSessionAffinity() {
    this._sessionAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAffinityInput() {
    return this._sessionAffinity;
  }

  // timeout - computed: true, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this.getStringAttribute('timeout');
  }
  public set timeout(value: string) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // containers - computed: false, optional: true, required: false
  private _containers = new CloudRunV2ServiceTemplateContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: CloudRunV2ServiceTemplateContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector = new CloudRunV2ServiceTemplateNodeSelectorOutputReference(this, "node_selector");
  public get nodeSelector() {
    return this._nodeSelector;
  }
  public putNodeSelector(value: CloudRunV2ServiceTemplateNodeSelector) {
    this._nodeSelector.internalValue = value;
  }
  public resetNodeSelector() {
    this._nodeSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector.internalValue;
  }

  // scaling - computed: false, optional: true, required: false
  private _scaling = new CloudRunV2ServiceTemplateScalingOutputReference(this, "scaling");
  public get scaling() {
    return this._scaling;
  }
  public putScaling(value: CloudRunV2ServiceTemplateScaling) {
    this._scaling.internalValue = value;
  }
  public resetScaling() {
    this._scaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingInput() {
    return this._scaling.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new CloudRunV2ServiceTemplateVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: CloudRunV2ServiceTemplateVolumes[] | cdktf.IResolvable) {
    this._volumes.internalValue = value;
  }
  public resetVolumes() {
    this._volumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes.internalValue;
  }

  // vpc_access - computed: false, optional: true, required: false
  private _vpcAccess = new CloudRunV2ServiceTemplateVpcAccessOutputReference(this, "vpc_access");
  public get vpcAccess() {
    return this._vpcAccess;
  }
  public putVpcAccess(value: CloudRunV2ServiceTemplateVpcAccess) {
    this._vpcAccess.internalValue = value;
  }
  public resetVpcAccess() {
    this._vpcAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcAccessInput() {
    return this._vpcAccess.internalValue;
  }
}
export interface CloudRunV2ServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#create CloudRunV2Service#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#delete CloudRunV2Service#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#update CloudRunV2Service#update}
  */
  readonly update?: string;
}

export function cloudRunV2ServiceTimeoutsToTerraform(struct?: CloudRunV2ServiceTimeouts | cdktf.IResolvable): any {
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


export function cloudRunV2ServiceTimeoutsToHclTerraform(struct?: CloudRunV2ServiceTimeouts | cdktf.IResolvable): any {
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

export class CloudRunV2ServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudRunV2ServiceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRunV2ServiceTimeouts | cdktf.IResolvable | undefined) {
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
export interface CloudRunV2ServiceTraffic {
  /**
  * Specifies percent of the traffic to this Revision. This defaults to zero if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#percent CloudRunV2Service#percent}
  */
  readonly percent?: number;
  /**
  * Revision to which to send this portion of traffic, if traffic allocation is by revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#revision CloudRunV2Service#revision}
  */
  readonly revision?: string;
  /**
  * Indicates a string to be part of the URI to exclusively reference this target.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#tag CloudRunV2Service#tag}
  */
  readonly tag?: string;
  /**
  * The allocation type for this traffic target. Possible values: ["TRAFFIC_TARGET_ALLOCATION_TYPE_LATEST", "TRAFFIC_TARGET_ALLOCATION_TYPE_REVISION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#type CloudRunV2Service#type}
  */
  readonly type?: string;
}

export function cloudRunV2ServiceTrafficToTerraform(struct?: CloudRunV2ServiceTraffic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percent: cdktf.numberToTerraform(struct!.percent),
    revision: cdktf.stringToTerraform(struct!.revision),
    tag: cdktf.stringToTerraform(struct!.tag),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function cloudRunV2ServiceTrafficToHclTerraform(struct?: CloudRunV2ServiceTraffic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudRunV2ServiceTrafficOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2ServiceTraffic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2ServiceTraffic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percent = undefined;
      this._revision = undefined;
      this._tag = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percent = value.percent;
      this._revision = value.revision;
      this._tag = value.tag;
      this._type = value.type;
    }
  }

  // percent - computed: true, optional: true, required: false
  private _percent?: number; 
  public get percent() {
    return this.getNumberAttribute('percent');
  }
  public set percent(value: number) {
    this._percent = value;
  }
  public resetPercent() {
    this._percent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentInput() {
    return this._percent;
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class CloudRunV2ServiceTrafficList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2ServiceTraffic[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2ServiceTrafficOutputReference {
    return new CloudRunV2ServiceTrafficOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service google_cloud_run_v2_service}
*/
export class CloudRunV2Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_run_v2_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudRunV2Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudRunV2Service to import
  * @param importFromId The id of the existing CloudRunV2Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudRunV2Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_run_v2_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/cloud_run_v2_service google_cloud_run_v2_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRunV2ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRunV2ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_v2_service',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.0',
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
    this._annotations = config.annotations;
    this._client = config.client;
    this._clientVersion = config.clientVersion;
    this._customAudiences = config.customAudiences;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._id = config.id;
    this._ingress = config.ingress;
    this._invokerIamDisabled = config.invokerIamDisabled;
    this._labels = config.labels;
    this._launchStage = config.launchStage;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._buildConfig.internalValue = config.buildConfig;
    this._scaling.internalValue = config.scaling;
    this._template.internalValue = config.template;
    this._timeouts.internalValue = config.timeouts;
    this._traffic.internalValue = config.traffic;
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

  // client - computed: false, optional: true, required: false
  private _client?: string; 
  public get client() {
    return this.getStringAttribute('client');
  }
  public set client(value: string) {
    this._client = value;
  }
  public resetClient() {
    this._client = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientInput() {
    return this._client;
  }

  // client_version - computed: false, optional: true, required: false
  private _clientVersion?: string; 
  public get clientVersion() {
    return this.getStringAttribute('client_version');
  }
  public set clientVersion(value: string) {
    this._clientVersion = value;
  }
  public resetClientVersion() {
    this._clientVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientVersionInput() {
    return this._clientVersion;
  }

  // conditions - computed: true, optional: false, required: false
  private _conditions = new CloudRunV2ServiceConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // creator - computed: true, optional: false, required: false
  public get creator() {
    return this.getStringAttribute('creator');
  }

  // custom_audiences - computed: false, optional: true, required: false
  private _customAudiences?: string[]; 
  public get customAudiences() {
    return this.getListAttribute('custom_audiences');
  }
  public set customAudiences(value: string[]) {
    this._customAudiences = value;
  }
  public resetCustomAudiences() {
    this._customAudiences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAudiencesInput() {
    return this._customAudiences;
  }

  // delete_time - computed: true, optional: false, required: false
  public get deleteTime() {
    return this.getStringAttribute('delete_time');
  }

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // expire_time - computed: true, optional: false, required: false
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }

  // generation - computed: true, optional: false, required: false
  public get generation() {
    return this.getStringAttribute('generation');
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

  // ingress - computed: true, optional: true, required: false
  private _ingress?: string; 
  public get ingress() {
    return this.getStringAttribute('ingress');
  }
  public set ingress(value: string) {
    this._ingress = value;
  }
  public resetIngress() {
    this._ingress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
  }

  // invoker_iam_disabled - computed: false, optional: true, required: false
  private _invokerIamDisabled?: boolean | cdktf.IResolvable; 
  public get invokerIamDisabled() {
    return this.getBooleanAttribute('invoker_iam_disabled');
  }
  public set invokerIamDisabled(value: boolean | cdktf.IResolvable) {
    this._invokerIamDisabled = value;
  }
  public resetInvokerIamDisabled() {
    this._invokerIamDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invokerIamDisabledInput() {
    return this._invokerIamDisabled;
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

  // last_modifier - computed: true, optional: false, required: false
  public get lastModifier() {
    return this.getStringAttribute('last_modifier');
  }

  // latest_created_revision - computed: true, optional: false, required: false
  public get latestCreatedRevision() {
    return this.getStringAttribute('latest_created_revision');
  }

  // latest_ready_revision - computed: true, optional: false, required: false
  public get latestReadyRevision() {
    return this.getStringAttribute('latest_ready_revision');
  }

  // launch_stage - computed: true, optional: true, required: false
  private _launchStage?: string; 
  public get launchStage() {
    return this.getStringAttribute('launch_stage');
  }
  public set launchStage(value: string) {
    this._launchStage = value;
  }
  public resetLaunchStage() {
    this._launchStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get launchStageInput() {
    return this._launchStage;
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

  // observed_generation - computed: true, optional: false, required: false
  public get observedGeneration() {
    return this.getStringAttribute('observed_generation');
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // terminal_condition - computed: true, optional: false, required: false
  private _terminalCondition = new CloudRunV2ServiceTerminalConditionList(this, "terminal_condition", false);
  public get terminalCondition() {
    return this._terminalCondition;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // traffic_statuses - computed: true, optional: false, required: false
  private _trafficStatuses = new CloudRunV2ServiceTrafficStatusesList(this, "traffic_statuses", false);
  public get trafficStatuses() {
    return this._trafficStatuses;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // urls - computed: true, optional: false, required: false
  public get urls() {
    return this.getListAttribute('urls');
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new CloudRunV2ServiceBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: CloudRunV2ServiceBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // build_config - computed: false, optional: true, required: false
  private _buildConfig = new CloudRunV2ServiceBuildConfigOutputReference(this, "build_config");
  public get buildConfig() {
    return this._buildConfig;
  }
  public putBuildConfig(value: CloudRunV2ServiceBuildConfig) {
    this._buildConfig.internalValue = value;
  }
  public resetBuildConfig() {
    this._buildConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buildConfigInput() {
    return this._buildConfig.internalValue;
  }

  // scaling - computed: false, optional: true, required: false
  private _scaling = new CloudRunV2ServiceScalingOutputReference(this, "scaling");
  public get scaling() {
    return this._scaling;
  }
  public putScaling(value: CloudRunV2ServiceScaling) {
    this._scaling.internalValue = value;
  }
  public resetScaling() {
    this._scaling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingInput() {
    return this._scaling.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new CloudRunV2ServiceTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: CloudRunV2ServiceTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRunV2ServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRunV2ServiceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic - computed: false, optional: true, required: false
  private _traffic = new CloudRunV2ServiceTrafficList(this, "traffic", false);
  public get traffic() {
    return this._traffic;
  }
  public putTraffic(value: CloudRunV2ServiceTraffic[] | cdktf.IResolvable) {
    this._traffic.internalValue = value;
  }
  public resetTraffic() {
    this._traffic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficInput() {
    return this._traffic.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      client: cdktf.stringToTerraform(this._client),
      client_version: cdktf.stringToTerraform(this._clientVersion),
      custom_audiences: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customAudiences),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ingress: cdktf.stringToTerraform(this._ingress),
      invoker_iam_disabled: cdktf.booleanToTerraform(this._invokerIamDisabled),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      launch_stage: cdktf.stringToTerraform(this._launchStage),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      binary_authorization: cloudRunV2ServiceBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      build_config: cloudRunV2ServiceBuildConfigToTerraform(this._buildConfig.internalValue),
      scaling: cloudRunV2ServiceScalingToTerraform(this._scaling.internalValue),
      template: cloudRunV2ServiceTemplateToTerraform(this._template.internalValue),
      timeouts: cloudRunV2ServiceTimeoutsToTerraform(this._timeouts.internalValue),
      traffic: cdktf.listMapper(cloudRunV2ServiceTrafficToTerraform, true)(this._traffic.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      client: {
        value: cdktf.stringToHclTerraform(this._client),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_version: {
        value: cdktf.stringToHclTerraform(this._clientVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_audiences: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customAudiences),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      ingress: {
        value: cdktf.stringToHclTerraform(this._ingress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      invoker_iam_disabled: {
        value: cdktf.booleanToHclTerraform(this._invokerIamDisabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      launch_stage: {
        value: cdktf.stringToHclTerraform(this._launchStage),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      binary_authorization: {
        value: cloudRunV2ServiceBinaryAuthorizationToHclTerraform(this._binaryAuthorization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRunV2ServiceBinaryAuthorizationList",
      },
      build_config: {
        value: cloudRunV2ServiceBuildConfigToHclTerraform(this._buildConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRunV2ServiceBuildConfigList",
      },
      scaling: {
        value: cloudRunV2ServiceScalingToHclTerraform(this._scaling.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRunV2ServiceScalingList",
      },
      template: {
        value: cloudRunV2ServiceTemplateToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRunV2ServiceTemplateList",
      },
      timeouts: {
        value: cloudRunV2ServiceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudRunV2ServiceTimeouts",
      },
      traffic: {
        value: cdktf.listMapperHcl(cloudRunV2ServiceTrafficToHclTerraform, true)(this._traffic.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudRunV2ServiceTrafficList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
