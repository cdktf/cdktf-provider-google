// https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudRunV2JobConfig extends cdktf.TerraformMetaArguments {
  /**
  * Arbitrary identifier for the API client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#client CloudRunV2Job#client}
  */
  readonly client?: string;
  /**
  * Arbitrary version identifier for the API client.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#client_version CloudRunV2Job#client_version}
  */
  readonly clientVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#id CloudRunV2Job#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * KRM-style labels for the resource. User-provided labels are shared with Google's billing system, so they can be used to filter, or break down billing charges by team, component, environment, state, etc. For more information, visit https://cloud.google.com/resource-manager/docs/creating-managing-labels or https://cloud.google.com/run/docs/configuring/labels Cloud Run will populate some labels with 'run.googleapis.com' or 'serving.knative.dev' namespaces. Those labels are read-only, and user changes will not be preserved.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#labels CloudRunV2Job#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The launch stage as defined by Google Cloud Platform Launch Stages. Cloud Run supports ALPHA, BETA, and GA. If no value is specified, GA is assumed. Possible values: ["UNIMPLEMENTED", "PRELAUNCH", "EARLY_ACCESS", "ALPHA", "BETA", "GA", "DEPRECATED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#launch_stage CloudRunV2Job#launch_stage}
  */
  readonly launchStage?: string;
  /**
  * The location of the cloud run job
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#location CloudRunV2Job#location}
  */
  readonly location?: string;
  /**
  * Name of the Job.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#project CloudRunV2Job#project}
  */
  readonly project?: string;
  /**
  * binary_authorization block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#binary_authorization CloudRunV2Job#binary_authorization}
  */
  readonly binaryAuthorization?: CloudRunV2JobBinaryAuthorization;
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#template CloudRunV2Job#template}
  */
  readonly template: CloudRunV2JobTemplate;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#timeouts CloudRunV2Job#timeouts}
  */
  readonly timeouts?: CloudRunV2JobTimeouts;
}
export interface CloudRunV2JobConditions {
}

export function cloudRunV2JobConditionsToTerraform(struct?: CloudRunV2JobConditions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudRunV2JobConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobConditions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobConditions | undefined) {
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

export class CloudRunV2JobConditionsList extends cdktf.ComplexList {

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
  public get(index: number): CloudRunV2JobConditionsOutputReference {
    return new CloudRunV2JobConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobLatestCreatedExecution {
}

export function cloudRunV2JobLatestCreatedExecutionToTerraform(struct?: CloudRunV2JobLatestCreatedExecution): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudRunV2JobLatestCreatedExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobLatestCreatedExecution | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobLatestCreatedExecution | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // completion_time - computed: true, optional: false, required: false
  public get completionTime() {
    return this.getStringAttribute('completion_time');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class CloudRunV2JobLatestCreatedExecutionList extends cdktf.ComplexList {

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
  public get(index: number): CloudRunV2JobLatestCreatedExecutionOutputReference {
    return new CloudRunV2JobLatestCreatedExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTerminalCondition {
}

export function cloudRunV2JobTerminalConditionToTerraform(struct?: CloudRunV2JobTerminalCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class CloudRunV2JobTerminalConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTerminalCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTerminalCondition | undefined) {
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

export class CloudRunV2JobTerminalConditionList extends cdktf.ComplexList {

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
  public get(index: number): CloudRunV2JobTerminalConditionOutputReference {
    return new CloudRunV2JobTerminalConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobBinaryAuthorization {
  /**
  * If present, indicates to use Breakglass using this justification. If useDefault is False, then it must be empty. For more information on breakglass, see https://cloud.google.com/binary-authorization/docs/using-breakglass
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#breakglass_justification CloudRunV2Job#breakglass_justification}
  */
  readonly breakglassJustification?: string;
  /**
  * If True, indicates to use the default project's binary authorization policy. If False, binary authorization will be disabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#use_default CloudRunV2Job#use_default}
  */
  readonly useDefault?: boolean | cdktf.IResolvable;
}

export function cloudRunV2JobBinaryAuthorizationToTerraform(struct?: CloudRunV2JobBinaryAuthorizationOutputReference | CloudRunV2JobBinaryAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breakglass_justification: cdktf.stringToTerraform(struct!.breakglassJustification),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
  }
}

export class CloudRunV2JobBinaryAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobBinaryAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakglassJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakglassJustification = this._breakglassJustification;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobBinaryAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._breakglassJustification = undefined;
      this._useDefault = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._breakglassJustification = value.breakglassJustification;
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
export interface CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef {
  /**
  * The name of the secret in Cloud Secret Manager. Format: {secretName} if the secret is in the same project. projects/{project}/secrets/{secretName} if the secret is in a different project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#secret CloudRunV2Job#secret}
  */
  readonly secret: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#version CloudRunV2Job#version}
  */
  readonly version: string;
}

export function cloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference | CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret: cdktf.stringToTerraform(struct!.secret),
    version: cdktf.stringToTerraform(struct!.version),
  }
}

export class CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef | undefined) {
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface CloudRunV2JobTemplateTemplateContainersEnvValueSource {
  /**
  * secret_key_ref block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#secret_key_ref CloudRunV2Job#secret_key_ref}
  */
  readonly secretKeyRef?: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef;
}

export function cloudRunV2JobTemplateTemplateContainersEnvValueSourceToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference | CloudRunV2JobTemplateTemplateContainersEnvValueSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_key_ref: cloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}

export class CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersEnvValueSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersEnvValueSource | undefined) {
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
  private _secretKeyRef = new CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: CloudRunV2JobTemplateTemplateContainersEnvValueSourceSecretKeyRef) {
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
export interface CloudRunV2JobTemplateTemplateContainersEnv {
  /**
  * Name of the environment variable. Must be a C_IDENTIFIER, and mnay not exceed 32768 characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * Variable references $(VAR_NAME) are expanded using the previous defined environment variables in the container and any route environment variables. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. Defaults to "", and the maximum length is 32768 bytes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#value CloudRunV2Job#value}
  */
  readonly value?: string;
  /**
  * value_source block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#value_source CloudRunV2Job#value_source}
  */
  readonly valueSource?: CloudRunV2JobTemplateTemplateContainersEnvValueSource;
}

export function cloudRunV2JobTemplateTemplateContainersEnvToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_source: cloudRunV2JobTemplateTemplateContainersEnvValueSourceToTerraform(struct!.valueSource),
  }
}

export class CloudRunV2JobTemplateTemplateContainersEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersEnv | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersEnv | cdktf.IResolvable | undefined) {
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
  private _valueSource = new CloudRunV2JobTemplateTemplateContainersEnvValueSourceOutputReference(this, "value_source");
  public get valueSource() {
    return this._valueSource;
  }
  public putValueSource(value: CloudRunV2JobTemplateTemplateContainersEnvValueSource) {
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

export class CloudRunV2JobTemplateTemplateContainersEnvList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateContainersEnv[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateContainersEnvOutputReference {
    return new CloudRunV2JobTemplateTemplateContainersEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#value CloudRunV2Job#value}
  */
  readonly value?: string;
}

export function cloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference {
    return new CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet {
  /**
  * Path to access on the HTTP server. Defaults to '/'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#path CloudRunV2Job#path}
  */
  readonly path?: string;
  /**
  * http_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#http_headers CloudRunV2Job#http_headers}
  */
  readonly httpHeaders?: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
}

export function cloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference | CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    http_headers: cdktf.listMapper(cloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}

export class CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket {
  /**
  * Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to 8080.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#port CloudRunV2Job#port}
  */
  readonly port?: number;
}

export function cloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference | CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._port = value.port;
    }
  }

  // port - computed: false, optional: true, required: false
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
export interface CloudRunV2JobTemplateTemplateContainersLivenessProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#failure_threshold CloudRunV2Job#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#initial_delay_seconds CloudRunV2Job#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#period_seconds CloudRunV2Job#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#timeout_seconds CloudRunV2Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#http_get CloudRunV2Job#http_get}
  */
  readonly httpGet?: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#tcp_socket CloudRunV2Job#tcp_socket}
  */
  readonly tcpSocket?: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket;
}

export function cloudRunV2JobTemplateTemplateContainersLivenessProbeToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference | CloudRunV2JobTemplateTemplateContainersLivenessProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketToTerraform(struct!.tcpSocket),
  }
}

export class CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersLivenessProbe | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersLivenessProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
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

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeHttpGet) {
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
  private _tcpSocket = new CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: CloudRunV2JobTemplateTemplateContainersLivenessProbeTcpSocket) {
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
export interface CloudRunV2JobTemplateTemplateContainersPorts {
  /**
  * Port number the container listens on. This must be a valid TCP port number, 0 < containerPort < 65536.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#container_port CloudRunV2Job#container_port}
  */
  readonly containerPort?: number;
  /**
  * If specified, used to specify which protocol to use. Allowed values are "http1" and "h2c".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name?: string;
}

export function cloudRunV2JobTemplateTemplateContainersPortsToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersPorts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_port: cdktf.numberToTerraform(struct!.containerPort),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CloudRunV2JobTemplateTemplateContainersPortsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersPorts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersPorts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerPort = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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
}

export class CloudRunV2JobTemplateTemplateContainersPortsList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateContainersPorts[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateContainersPortsOutputReference {
    return new CloudRunV2JobTemplateTemplateContainersPortsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateContainersResources {
  /**
  * Only memory and CPU are supported. Note: The only supported values for CPU are '1', '2', '4', and '8'. Setting 4 CPU requires at least 2Gi of memory. The values of the map is string form of the 'quantity' k8s type: https://github.com/kubernetes/kubernetes/blob/master/staging/src/k8s.io/apimachinery/pkg/api/resource/quantity.go
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#limits CloudRunV2Job#limits}
  */
  readonly limits?: { [key: string]: string };
}

export function cloudRunV2JobTemplateTemplateContainersResourcesToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersResourcesOutputReference | CloudRunV2JobTemplateTemplateContainersResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
  }
}

export class CloudRunV2JobTemplateTemplateContainersResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._limits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._limits = value.limits;
    }
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
}
export interface CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders {
  /**
  * The header field name
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * The header field value
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#value CloudRunV2Job#value}
  */
  readonly value?: string;
}

export function cloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders | cdktf.IResolvable | undefined) {
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

export class CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference {
    return new CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet {
  /**
  * Path to access on the HTTP server. Defaults to '/'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#path CloudRunV2Job#path}
  */
  readonly path?: string;
  /**
  * http_headers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#http_headers CloudRunV2Job#http_headers}
  */
  readonly httpHeaders?: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable;
}

export function cloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference | CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
    http_headers: cdktf.listMapper(cloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersToTerraform, true)(struct!.httpHeaders),
  }
}

export class CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._httpHeaders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
      this._httpHeaders.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetHttpHeaders[] | cdktf.IResolvable) {
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
export interface CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket {
  /**
  * Port number to access on the container. Must be in the range 1 to 65535. If not specified, defaults to 8080.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#port CloudRunV2Job#port}
  */
  readonly port?: number;
}

export function cloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference | CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port: cdktf.numberToTerraform(struct!.port),
  }
}

export class CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket | undefined) {
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
export interface CloudRunV2JobTemplateTemplateContainersStartupProbe {
  /**
  * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#failure_threshold CloudRunV2Job#failure_threshold}
  */
  readonly failureThreshold?: number;
  /**
  * Number of seconds after the container has started before the probe is initiated. Defaults to 0 seconds. Minimum value is 0. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#initial_delay_seconds CloudRunV2Job#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value for liveness probe is 3600. Maximum value for startup probe is 240. Must be greater or equal than timeoutSeconds
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#period_seconds CloudRunV2Job#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 3600. Must be smaller than periodSeconds. More info: https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle#container-probes
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#timeout_seconds CloudRunV2Job#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
  /**
  * http_get block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#http_get CloudRunV2Job#http_get}
  */
  readonly httpGet?: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet;
  /**
  * tcp_socket block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#tcp_socket CloudRunV2Job#tcp_socket}
  */
  readonly tcpSocket?: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket;
}

export function cloudRunV2JobTemplateTemplateContainersStartupProbeToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference | CloudRunV2JobTemplateTemplateContainersStartupProbe): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_threshold: cdktf.numberToTerraform(struct!.failureThreshold),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
    http_get: cloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetToTerraform(struct!.httpGet),
    tcp_socket: cloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketToTerraform(struct!.tcpSocket),
  }
}

export class CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersStartupProbe | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersStartupProbe | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureThreshold = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
      this._httpGet.internalValue = undefined;
      this._tcpSocket.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureThreshold = value.failureThreshold;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
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

  // http_get - computed: false, optional: true, required: false
  private _httpGet = new CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGetOutputReference(this, "http_get");
  public get httpGet() {
    return this._httpGet;
  }
  public putHttpGet(value: CloudRunV2JobTemplateTemplateContainersStartupProbeHttpGet) {
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
  private _tcpSocket = new CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocketOutputReference(this, "tcp_socket");
  public get tcpSocket() {
    return this._tcpSocket;
  }
  public putTcpSocket(value: CloudRunV2JobTemplateTemplateContainersStartupProbeTcpSocket) {
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
export interface CloudRunV2JobTemplateTemplateContainersVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'. For Cloud SQL volumes, it can be left empty, or must otherwise be /cloudsql. All instances defined in the Volume will be available as /cloudsql/[instance]. For more information on Cloud SQL volumes, visit https://cloud.google.com/sql/docs/mysql/connect-run
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#mount_path CloudRunV2Job#mount_path}
  */
  readonly mountPath: string;
  /**
  * This must match the Name of a Volume.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name: string;
}

export function cloudRunV2JobTemplateTemplateContainersVolumeMountsToTerraform(struct?: CloudRunV2JobTemplateTemplateContainersVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateContainersVolumeMounts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainersVolumeMounts | cdktf.IResolvable | undefined) {
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

export class CloudRunV2JobTemplateTemplateContainersVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateContainersVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference {
    return new CloudRunV2JobTemplateTemplateContainersVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateContainers {
  /**
  * Arguments to the entrypoint. The docker image's CMD is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#args CloudRunV2Job#args}
  */
  readonly args?: string[];
  /**
  * Entrypoint array. Not executed within a shell. The docker image's ENTRYPOINT is used if this is not provided. Variable references $(VAR_NAME) are expanded using the container's environment. If a variable cannot be resolved, the reference in the input string will be unchanged. The $(VAR_NAME) syntax can be escaped with a double $$, ie: $$(VAR_NAME). Escaped references will never be expanded, regardless of whether the variable exists or not. More info: https://kubernetes.io/docs/tasks/inject-data-application/define-command-argument-container/#running-a-command-in-a-shell
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#command CloudRunV2Job#command}
  */
  readonly command?: string[];
  /**
  * URL of the Container image in Google Container Registry or Google Artifact Registry. More info: https://kubernetes.io/docs/concepts/containers/images
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#image CloudRunV2Job#image}
  */
  readonly image: string;
  /**
  * Name of the container specified as a DNS_LABEL.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name?: string;
  /**
  * Container's working directory. If not specified, the container runtime's default will be used, which might be configured in the container image.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#working_dir CloudRunV2Job#working_dir}
  */
  readonly workingDir?: string;
  /**
  * env block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#env CloudRunV2Job#env}
  */
  readonly env?: CloudRunV2JobTemplateTemplateContainersEnv[] | cdktf.IResolvable;
  /**
  * liveness_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#liveness_probe CloudRunV2Job#liveness_probe}
  */
  readonly livenessProbe?: CloudRunV2JobTemplateTemplateContainersLivenessProbe;
  /**
  * ports block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#ports CloudRunV2Job#ports}
  */
  readonly ports?: CloudRunV2JobTemplateTemplateContainersPorts[] | cdktf.IResolvable;
  /**
  * resources block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#resources CloudRunV2Job#resources}
  */
  readonly resources?: CloudRunV2JobTemplateTemplateContainersResources;
  /**
  * startup_probe block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#startup_probe CloudRunV2Job#startup_probe}
  */
  readonly startupProbe?: CloudRunV2JobTemplateTemplateContainersStartupProbe;
  /**
  * volume_mounts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#volume_mounts CloudRunV2Job#volume_mounts}
  */
  readonly volumeMounts?: CloudRunV2JobTemplateTemplateContainersVolumeMounts[] | cdktf.IResolvable;
}

export function cloudRunV2JobTemplateTemplateContainersToTerraform(struct?: CloudRunV2JobTemplateTemplateContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    working_dir: cdktf.stringToTerraform(struct!.workingDir),
    env: cdktf.listMapper(cloudRunV2JobTemplateTemplateContainersEnvToTerraform, true)(struct!.env),
    liveness_probe: cloudRunV2JobTemplateTemplateContainersLivenessProbeToTerraform(struct!.livenessProbe),
    ports: cdktf.listMapper(cloudRunV2JobTemplateTemplateContainersPortsToTerraform, true)(struct!.ports),
    resources: cloudRunV2JobTemplateTemplateContainersResourcesToTerraform(struct!.resources),
    startup_probe: cloudRunV2JobTemplateTemplateContainersStartupProbeToTerraform(struct!.startupProbe),
    volume_mounts: cdktf.listMapper(cloudRunV2JobTemplateTemplateContainersVolumeMountsToTerraform, true)(struct!.volumeMounts),
  }
}

export class CloudRunV2JobTemplateTemplateContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
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
      this._command = value.command;
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
  private _env = new CloudRunV2JobTemplateTemplateContainersEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: CloudRunV2JobTemplateTemplateContainersEnv[] | cdktf.IResolvable) {
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
  private _livenessProbe = new CloudRunV2JobTemplateTemplateContainersLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: CloudRunV2JobTemplateTemplateContainersLivenessProbe) {
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
  private _ports = new CloudRunV2JobTemplateTemplateContainersPortsList(this, "ports", false);
  public get ports() {
    return this._ports;
  }
  public putPorts(value: CloudRunV2JobTemplateTemplateContainersPorts[] | cdktf.IResolvable) {
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
  private _resources = new CloudRunV2JobTemplateTemplateContainersResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: CloudRunV2JobTemplateTemplateContainersResources) {
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
  private _startupProbe = new CloudRunV2JobTemplateTemplateContainersStartupProbeOutputReference(this, "startup_probe");
  public get startupProbe() {
    return this._startupProbe;
  }
  public putStartupProbe(value: CloudRunV2JobTemplateTemplateContainersStartupProbe) {
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
  private _volumeMounts = new CloudRunV2JobTemplateTemplateContainersVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: CloudRunV2JobTemplateTemplateContainersVolumeMounts[] | cdktf.IResolvable) {
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

export class CloudRunV2JobTemplateTemplateContainersList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateContainers[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateContainersOutputReference {
    return new CloudRunV2JobTemplateTemplateContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance {
  /**
  * The Cloud SQL instance connection names, as can be found in https://console.cloud.google.com/sql/instances. Visit https://cloud.google.com/sql/docs/mysql/connect-run for more information on how to connect Cloud SQL and Cloud Run. Format: {project}:{location}:{instance}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#instances CloudRunV2Job#instances}
  */
  readonly instances?: string[];
}

export function cloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceToTerraform(struct?: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference | CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instances),
  }
}

export class CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance | undefined) {
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
    return this.getListAttribute('instances');
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
export interface CloudRunV2JobTemplateTemplateVolumesSecretItems {
  /**
  * Integer octal mode bits to use on this file, must be a value between 01 and 0777 (octal). If 0 or not set, the Volume's default mode will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#mode CloudRunV2Job#mode}
  */
  readonly mode: number;
  /**
  * The relative path of the secret in the container.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#path CloudRunV2Job#path}
  */
  readonly path: string;
  /**
  * The Cloud Secret Manager secret version. Can be 'latest' for the latest value or an integer for a specific version
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#version CloudRunV2Job#version}
  */
  readonly version: string;
}

export function cloudRunV2JobTemplateTemplateVolumesSecretItemsToTerraform(struct?: CloudRunV2JobTemplateTemplateVolumesSecretItems | cdktf.IResolvable): any {
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

export class CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateVolumesSecretItems | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateVolumesSecretItems | cdktf.IResolvable | undefined) {
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

  // mode - computed: false, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class CloudRunV2JobTemplateTemplateVolumesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateVolumesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference {
    return new CloudRunV2JobTemplateTemplateVolumesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateVolumesSecret {
  /**
  * Integer representation of mode bits to use on created files by default. Must be a value between 0000 and 0777 (octal), defaulting to 0444. Directories within the path are not affected by this setting.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#default_mode CloudRunV2Job#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * The name of the secret in Cloud Secret Manager. Format: {secret} if the secret is in the same project. projects/{project}/secrets/{secret} if the secret is in a different project.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#secret CloudRunV2Job#secret}
  */
  readonly secret: string;
  /**
  * items block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#items CloudRunV2Job#items}
  */
  readonly items?: CloudRunV2JobTemplateTemplateVolumesSecretItems[] | cdktf.IResolvable;
}

export function cloudRunV2JobTemplateTemplateVolumesSecretToTerraform(struct?: CloudRunV2JobTemplateTemplateVolumesSecretOutputReference | CloudRunV2JobTemplateTemplateVolumesSecret): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    secret: cdktf.stringToTerraform(struct!.secret),
    items: cdktf.listMapper(cloudRunV2JobTemplateTemplateVolumesSecretItemsToTerraform, true)(struct!.items),
  }
}

export class CloudRunV2JobTemplateTemplateVolumesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateVolumesSecret | undefined {
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

  public set internalValue(value: CloudRunV2JobTemplateTemplateVolumesSecret | undefined) {
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
  private _items = new CloudRunV2JobTemplateTemplateVolumesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: CloudRunV2JobTemplateTemplateVolumesSecretItems[] | cdktf.IResolvable) {
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
export interface CloudRunV2JobTemplateTemplateVolumes {
  /**
  * Volume's name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#name CloudRunV2Job#name}
  */
  readonly name: string;
  /**
  * cloud_sql_instance block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#cloud_sql_instance CloudRunV2Job#cloud_sql_instance}
  */
  readonly cloudSqlInstance?: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance;
  /**
  * secret block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#secret CloudRunV2Job#secret}
  */
  readonly secret?: CloudRunV2JobTemplateTemplateVolumesSecret;
}

export function cloudRunV2JobTemplateTemplateVolumesToTerraform(struct?: CloudRunV2JobTemplateTemplateVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    cloud_sql_instance: cloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceToTerraform(struct!.cloudSqlInstance),
    secret: cloudRunV2JobTemplateTemplateVolumesSecretToTerraform(struct!.secret),
  }
}

export class CloudRunV2JobTemplateTemplateVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudRunV2JobTemplateTemplateVolumes | cdktf.IResolvable | undefined {
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
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._cloudSqlInstance.internalValue = undefined;
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
  private _cloudSqlInstance = new CloudRunV2JobTemplateTemplateVolumesCloudSqlInstanceOutputReference(this, "cloud_sql_instance");
  public get cloudSqlInstance() {
    return this._cloudSqlInstance;
  }
  public putCloudSqlInstance(value: CloudRunV2JobTemplateTemplateVolumesCloudSqlInstance) {
    this._cloudSqlInstance.internalValue = value;
  }
  public resetCloudSqlInstance() {
    this._cloudSqlInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudSqlInstanceInput() {
    return this._cloudSqlInstance.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new CloudRunV2JobTemplateTemplateVolumesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: CloudRunV2JobTemplateTemplateVolumesSecret) {
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

export class CloudRunV2JobTemplateTemplateVolumesList extends cdktf.ComplexList {
  public internalValue? : CloudRunV2JobTemplateTemplateVolumes[] | cdktf.IResolvable

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
  public get(index: number): CloudRunV2JobTemplateTemplateVolumesOutputReference {
    return new CloudRunV2JobTemplateTemplateVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudRunV2JobTemplateTemplateVpcAccess {
  /**
  * VPC Access connector name. Format: projects/{project}/locations/{location}/connectors/{connector}, where {project} can be project id or number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#connector CloudRunV2Job#connector}
  */
  readonly connector?: string;
  /**
  * Traffic VPC egress settings. Possible values: ["ALL_TRAFFIC", "PRIVATE_RANGES_ONLY"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#egress CloudRunV2Job#egress}
  */
  readonly egress?: string;
}

export function cloudRunV2JobTemplateTemplateVpcAccessToTerraform(struct?: CloudRunV2JobTemplateTemplateVpcAccessOutputReference | CloudRunV2JobTemplateTemplateVpcAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector: cdktf.stringToTerraform(struct!.connector),
    egress: cdktf.stringToTerraform(struct!.egress),
  }
}

export class CloudRunV2JobTemplateTemplateVpcAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplateVpcAccess | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplateTemplateVpcAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connector = undefined;
      this._egress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connector = value.connector;
      this._egress = value.egress;
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

  // egress - computed: false, optional: true, required: false
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
}
export interface CloudRunV2JobTemplateTemplate {
  /**
  * A reference to a customer managed encryption key (CMEK) to use to encrypt this container image. For more information, go to https://cloud.google.com/run/docs/securing/using-cmek
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#encryption_key CloudRunV2Job#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * The execution environment being used to host this Task. Possible values: ["EXECUTION_ENVIRONMENT_GEN1", "EXECUTION_ENVIRONMENT_GEN2"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#execution_environment CloudRunV2Job#execution_environment}
  */
  readonly executionEnvironment?: string;
  /**
  * Number of retries allowed per Task, before marking this Task failed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#max_retries CloudRunV2Job#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * Email address of the IAM service account associated with the Task of a Job. The service account represents the identity of the running task, and determines what permissions the task has. If not provided, the task will use the project's default service account.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#service_account CloudRunV2Job#service_account}
  */
  readonly serviceAccount?: string;
  /**
  * Max allowed time duration the Task may be active before the system will actively try to mark it failed and kill associated containers. This applies per attempt of a task, meaning each retry can run for the full timeout.

A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#timeout CloudRunV2Job#timeout}
  */
  readonly timeout?: string;
  /**
  * containers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#containers CloudRunV2Job#containers}
  */
  readonly containers?: CloudRunV2JobTemplateTemplateContainers[] | cdktf.IResolvable;
  /**
  * volumes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#volumes CloudRunV2Job#volumes}
  */
  readonly volumes?: CloudRunV2JobTemplateTemplateVolumes[] | cdktf.IResolvable;
  /**
  * vpc_access block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#vpc_access CloudRunV2Job#vpc_access}
  */
  readonly vpcAccess?: CloudRunV2JobTemplateTemplateVpcAccess;
}

export function cloudRunV2JobTemplateTemplateToTerraform(struct?: CloudRunV2JobTemplateTemplateOutputReference | CloudRunV2JobTemplateTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_key: cdktf.stringToTerraform(struct!.encryptionKey),
    execution_environment: cdktf.stringToTerraform(struct!.executionEnvironment),
    max_retries: cdktf.numberToTerraform(struct!.maxRetries),
    service_account: cdktf.stringToTerraform(struct!.serviceAccount),
    timeout: cdktf.stringToTerraform(struct!.timeout),
    containers: cdktf.listMapper(cloudRunV2JobTemplateTemplateContainersToTerraform, true)(struct!.containers),
    volumes: cdktf.listMapper(cloudRunV2JobTemplateTemplateVolumesToTerraform, true)(struct!.volumes),
    vpc_access: cloudRunV2JobTemplateTemplateVpcAccessToTerraform(struct!.vpcAccess),
  }
}

export class CloudRunV2JobTemplateTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplateTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKey = this._encryptionKey;
    }
    if (this._executionEnvironment !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionEnvironment = this._executionEnvironment;
    }
    if (this._maxRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRetries = this._maxRetries;
    }
    if (this._serviceAccount !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccount = this._serviceAccount;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._containers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers?.internalValue;
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

  public set internalValue(value: CloudRunV2JobTemplateTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encryptionKey = undefined;
      this._executionEnvironment = undefined;
      this._maxRetries = undefined;
      this._serviceAccount = undefined;
      this._timeout = undefined;
      this._containers.internalValue = undefined;
      this._volumes.internalValue = undefined;
      this._vpcAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encryptionKey = value.encryptionKey;
      this._executionEnvironment = value.executionEnvironment;
      this._maxRetries = value.maxRetries;
      this._serviceAccount = value.serviceAccount;
      this._timeout = value.timeout;
      this._containers.internalValue = value.containers;
      this._volumes.internalValue = value.volumes;
      this._vpcAccess.internalValue = value.vpcAccess;
    }
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

  // execution_environment - computed: true, optional: true, required: false
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

  // max_retries - computed: true, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this.getNumberAttribute('max_retries');
  }
  public set maxRetries(value: number) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
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
  private _containers = new CloudRunV2JobTemplateTemplateContainersList(this, "containers", false);
  public get containers() {
    return this._containers;
  }
  public putContainers(value: CloudRunV2JobTemplateTemplateContainers[] | cdktf.IResolvable) {
    this._containers.internalValue = value;
  }
  public resetContainers() {
    this._containers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers.internalValue;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes = new CloudRunV2JobTemplateTemplateVolumesList(this, "volumes", false);
  public get volumes() {
    return this._volumes;
  }
  public putVolumes(value: CloudRunV2JobTemplateTemplateVolumes[] | cdktf.IResolvable) {
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
  private _vpcAccess = new CloudRunV2JobTemplateTemplateVpcAccessOutputReference(this, "vpc_access");
  public get vpcAccess() {
    return this._vpcAccess;
  }
  public putVpcAccess(value: CloudRunV2JobTemplateTemplateVpcAccess) {
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
export interface CloudRunV2JobTemplate {
  /**
  * KRM-style labels for the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#labels CloudRunV2Job#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Specifies the maximum desired number of tasks the execution should run at given time. Must be <= taskCount. When the job is run, if this field is 0 or unset, the maximum possible value will be used for that execution. The actual number of tasks running in steady state will be less than this number when there are fewer tasks waiting to be completed remaining, i.e. when the work left to do is less than max parallelism.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#parallelism CloudRunV2Job#parallelism}
  */
  readonly parallelism?: number;
  /**
  * Specifies the desired number of tasks the execution should run. Setting to 1 means that parallelism is limited to 1 and the success of that task signals the success of the execution. More info: https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#task_count CloudRunV2Job#task_count}
  */
  readonly taskCount?: number;
  /**
  * template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#template CloudRunV2Job#template}
  */
  readonly template: CloudRunV2JobTemplateTemplate;
}

export function cloudRunV2JobTemplateToTerraform(struct?: CloudRunV2JobTemplateOutputReference | CloudRunV2JobTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    parallelism: cdktf.numberToTerraform(struct!.parallelism),
    task_count: cdktf.numberToTerraform(struct!.taskCount),
    template: cloudRunV2JobTemplateTemplateToTerraform(struct!.template),
  }
}

export class CloudRunV2JobTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._parallelism !== undefined) {
      hasAnyValues = true;
      internalValueResult.parallelism = this._parallelism;
    }
    if (this._taskCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCount = this._taskCount;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudRunV2JobTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._labels = undefined;
      this._parallelism = undefined;
      this._taskCount = undefined;
      this._template.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._labels = value.labels;
      this._parallelism = value.parallelism;
      this._taskCount = value.taskCount;
      this._template.internalValue = value.template;
    }
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

  // parallelism - computed: true, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this.getNumberAttribute('parallelism');
  }
  public set parallelism(value: number) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // task_count - computed: true, optional: true, required: false
  private _taskCount?: number; 
  public get taskCount() {
    return this.getNumberAttribute('task_count');
  }
  public set taskCount(value: number) {
    this._taskCount = value;
  }
  public resetTaskCount() {
    this._taskCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCountInput() {
    return this._taskCount;
  }

  // template - computed: false, optional: false, required: true
  private _template = new CloudRunV2JobTemplateTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: CloudRunV2JobTemplateTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}
export interface CloudRunV2JobTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#create CloudRunV2Job#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#delete CloudRunV2Job#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job#update CloudRunV2Job#update}
  */
  readonly update?: string;
}

export function cloudRunV2JobTimeoutsToTerraform(struct?: CloudRunV2JobTimeoutsOutputReference | CloudRunV2JobTimeouts | cdktf.IResolvable): any {
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

export class CloudRunV2JobTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudRunV2JobTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudRunV2JobTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job google_cloud_run_v2_job}
*/
export class CloudRunV2Job extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_run_v2_job";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_run_v2_job google_cloud_run_v2_job} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudRunV2JobConfig
  */
  public constructor(scope: Construct, id: string, config: CloudRunV2JobConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_run_v2_job',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.48.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._client = config.client;
    this._clientVersion = config.clientVersion;
    this._id = config.id;
    this._labels = config.labels;
    this._launchStage = config.launchStage;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._binaryAuthorization.internalValue = config.binaryAuthorization;
    this._template.internalValue = config.template;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
  private _conditions = new CloudRunV2JobConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // execution_count - computed: true, optional: false, required: false
  public get executionCount() {
    return this.getNumberAttribute('execution_count');
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

  // latest_created_execution - computed: true, optional: false, required: false
  private _latestCreatedExecution = new CloudRunV2JobLatestCreatedExecutionList(this, "latest_created_execution", false);
  public get latestCreatedExecution() {
    return this._latestCreatedExecution;
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

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
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
  private _terminalCondition = new CloudRunV2JobTerminalConditionList(this, "terminal_condition", false);
  public get terminalCondition() {
    return this._terminalCondition;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // binary_authorization - computed: false, optional: true, required: false
  private _binaryAuthorization = new CloudRunV2JobBinaryAuthorizationOutputReference(this, "binary_authorization");
  public get binaryAuthorization() {
    return this._binaryAuthorization;
  }
  public putBinaryAuthorization(value: CloudRunV2JobBinaryAuthorization) {
    this._binaryAuthorization.internalValue = value;
  }
  public resetBinaryAuthorization() {
    this._binaryAuthorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryAuthorizationInput() {
    return this._binaryAuthorization.internalValue;
  }

  // template - computed: false, optional: false, required: true
  private _template = new CloudRunV2JobTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: CloudRunV2JobTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudRunV2JobTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudRunV2JobTimeouts) {
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
      client: cdktf.stringToTerraform(this._client),
      client_version: cdktf.stringToTerraform(this._clientVersion),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      launch_stage: cdktf.stringToTerraform(this._launchStage),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      binary_authorization: cloudRunV2JobBinaryAuthorizationToTerraform(this._binaryAuthorization.internalValue),
      template: cloudRunV2JobTemplateToTerraform(this._template.internalValue),
      timeouts: cloudRunV2JobTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
