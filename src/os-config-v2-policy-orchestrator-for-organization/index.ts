/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsConfigV2PolicyOrchestratorForOrganizationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. Action to be done by the orchestrator in
  * 'projects/{project_id}/zones/{zone_id}' locations defined by the
  * 'orchestration_scope'. Allowed values:
  * - 'UPSERT' - Orchestrator will create or update target resources.
  * - 'DELETE' - Orchestrator will delete target resources, if they exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#action OsConfigV2PolicyOrchestratorForOrganization#action}
  */
  readonly action: string;
  /**
  * Optional. Freeform text describing the purpose of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#description OsConfigV2PolicyOrchestratorForOrganization#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#id OsConfigV2PolicyOrchestratorForOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels as key value pairs
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#labels OsConfigV2PolicyOrchestratorForOrganization#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Part of 'parent'. Required. The parent resource name in the form of:
  * * 'organizations/{organization_id}/locations/global'
  * * 'folders/{folder_id}/locations/global'
  * * 'projects/{project_id_or_number}/locations/global'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#organization_id OsConfigV2PolicyOrchestratorForOrganization#organization_id}
  */
  readonly organizationId: string;
  /**
  * Required. The logical identifier of the policy orchestrator, with the following
  * restrictions:
  * 
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the parent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#policy_orchestrator_id OsConfigV2PolicyOrchestratorForOrganization#policy_orchestrator_id}
  */
  readonly policyOrchestratorId: string;
  /**
  * Optional. State of the orchestrator. Can be updated to change orchestrator behaviour.
  * Allowed values:
  * - 'ACTIVE' - orchestrator is actively looking for actions to be taken.
  * - 'STOPPED' - orchestrator won't make any changes.
  * 
  * Note: There might be more states added in the future. We use string here
  * instead of an enum, to avoid the need of propagating new states to all the
  * client code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#state OsConfigV2PolicyOrchestratorForOrganization#state}
  */
  readonly state?: string;
  /**
  * orchestrated_resource block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#orchestrated_resource OsConfigV2PolicyOrchestratorForOrganization#orchestrated_resource}
  */
  readonly orchestratedResource: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResource;
  /**
  * orchestration_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#orchestration_scope OsConfigV2PolicyOrchestratorForOrganization#orchestration_scope}
  */
  readonly orchestrationScope?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScope;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#timeouts OsConfigV2PolicyOrchestratorForOrganization#timeouts}
  */
  readonly timeouts?: OsConfigV2PolicyOrchestratorForOrganizationTimeouts;
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetails {
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetailsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetailsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type_url - computed: true, optional: false, required: false
  public get typeUrl() {
    return this.getStringAttribute('type_url');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetailsList extends cdktf.ComplexList {

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetailsOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateError {
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorList extends cdktf.ComplexList {

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationState {
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // failed_actions - computed: true, optional: false, required: false
  public get failedActions() {
    return this.getStringAttribute('failed_actions');
  }

  // finish_time - computed: true, optional: false, required: false
  public get finishTime() {
    return this.getStringAttribute('finish_time');
  }

  // performed_actions - computed: true, optional: false, required: false
  public get performedActions() {
    return this.getStringAttribute('performed_actions');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // rollout_resource - computed: true, optional: false, required: false
  public get rolloutResource() {
    return this.getStringAttribute('rollout_resource');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateList extends cdktf.ComplexList {

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetails {
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetailsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetailsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type_url - computed: true, optional: false, required: false
  public get typeUrl() {
    return this.getStringAttribute('type_url');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetailsList extends cdktf.ComplexList {

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetailsOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateError {
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // details - computed: true, optional: false, required: false
  private _details = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorDetailsList(this, "details", false);
  public get details() {
    return this._details;
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorList extends cdktf.ComplexList {

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationState {
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // error - computed: true, optional: false, required: false
  private _error = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateErrorList(this, "error", false);
  public get error() {
    return this._error;
  }

  // failed_actions - computed: true, optional: false, required: false
  public get failedActions() {
    return this.getStringAttribute('failed_actions');
  }

  // finish_time - computed: true, optional: false, required: false
  public get finishTime() {
    return this.getStringAttribute('finish_time');
  }

  // performed_actions - computed: true, optional: false, required: false
  public get performedActions() {
    return this.getStringAttribute('performed_actions');
  }

  // progress - computed: true, optional: false, required: false
  public get progress() {
    return this.getNumberAttribute('progress');
  }

  // rollout_resource - computed: true, optional: false, required: false
  public get rolloutResource() {
    return this.getStringAttribute('rollout_resource');
  }

  // start_time - computed: true, optional: false, required: false
  public get startTime() {
    return this.getStringAttribute('start_time');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateList extends cdktf.ComplexList {

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationState {
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationStateToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationState): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationState | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationState | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_iteration_state - computed: true, optional: false, required: false
  private _currentIterationState = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateCurrentIterationStateList(this, "current_iteration_state", false);
  public get currentIterationState() {
    return this._currentIterationState;
  }

  // previous_iteration_state - computed: true, optional: false, required: false
  private _previousIterationState = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStatePreviousIterationStateList(this, "previous_iteration_state", false);
  public get previousIterationState() {
    return this._previousIterationState;
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateList extends cdktf.ComplexList {

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels {
  /**
  * Labels are identified by key/value pairs in this map.
  * A VM should contain all the key/value pairs specified in this
  * map to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#labels OsConfigV2PolicyOrchestratorForOrganization#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
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
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels {
  /**
  * Labels are identified by key/value pairs in this map.
  * A VM should contain all the key/value pairs specified in this
  * map to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#labels OsConfigV2PolicyOrchestratorForOrganization#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels = value.labels;
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
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories {
  /**
  * Required. The OS short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#os_short_name OsConfigV2PolicyOrchestratorForOrganization#os_short_name}
  */
  readonly osShortName: string;
  /**
  * The OS version
  * 
  * Prefix matches are supported if asterisk(*) is provided as the
  * last character. For example, to match all versions with a major
  * version of '7', specify the following value for this field '7.*'
  * 
  * An empty string matches all OS versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#os_version OsConfigV2PolicyOrchestratorForOrganization#os_version}
  */
  readonly osVersion?: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_short_name: {
      value: cdktf.stringToHclTerraform(struct!.osShortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osShortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osShortName = this._osShortName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osShortName = undefined;
      this._osVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osShortName = value.osShortName;
      this._osVersion = value.osVersion;
    }
  }

  // os_short_name - computed: false, optional: false, required: true
  private _osShortName?: string; 
  public get osShortName() {
    return this.getStringAttribute('os_short_name');
  }
  public set osShortName(value: string) {
    this._osShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osShortNameInput() {
    return this._osShortName;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilter {
  /**
  * Target all VMs in the project. If true, no other criteria is
  * permitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#all OsConfigV2PolicyOrchestratorForOrganization#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * exclusion_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#exclusion_labels OsConfigV2PolicyOrchestratorForOrganization#exclusion_labels}
  */
  readonly exclusionLabels?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels[] | cdktf.IResolvable;
  /**
  * inclusion_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#inclusion_labels OsConfigV2PolicyOrchestratorForOrganization#inclusion_labels}
  */
  readonly inclusionLabels?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels[] | cdktf.IResolvable;
  /**
  * inventories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#inventories OsConfigV2PolicyOrchestratorForOrganization#inventories}
  */
  readonly inventories?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories[] | cdktf.IResolvable;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    exclusion_labels: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsToTerraform, true)(struct!.exclusionLabels),
    inclusion_labels: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsToTerraform, true)(struct!.inclusionLabels),
    inventories: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesToTerraform, true)(struct!.inventories),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclusion_labels: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsToHclTerraform, true)(struct!.exclusionLabels),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsList",
    },
    inclusion_labels: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsToHclTerraform, true)(struct!.inclusionLabels),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsList",
    },
    inventories: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesToHclTerraform, true)(struct!.inventories),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._exclusionLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionLabels = this._exclusionLabels?.internalValue;
    }
    if (this._inclusionLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inclusionLabels = this._inclusionLabels?.internalValue;
    }
    if (this._inventories?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventories = this._inventories?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._all = undefined;
      this._exclusionLabels.internalValue = undefined;
      this._inclusionLabels.internalValue = undefined;
      this._inventories.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._all = value.all;
      this._exclusionLabels.internalValue = value.exclusionLabels;
      this._inclusionLabels.internalValue = value.inclusionLabels;
      this._inventories.internalValue = value.inventories;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // exclusion_labels - computed: false, optional: true, required: false
  private _exclusionLabels = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabelsList(this, "exclusion_labels", false);
  public get exclusionLabels() {
    return this._exclusionLabels;
  }
  public putExclusionLabels(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterExclusionLabels[] | cdktf.IResolvable) {
    this._exclusionLabels.internalValue = value;
  }
  public resetExclusionLabels() {
    this._exclusionLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionLabelsInput() {
    return this._exclusionLabels.internalValue;
  }

  // inclusion_labels - computed: false, optional: true, required: false
  private _inclusionLabels = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabelsList(this, "inclusion_labels", false);
  public get inclusionLabels() {
    return this._inclusionLabels;
  }
  public putInclusionLabels(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInclusionLabels[] | cdktf.IResolvable) {
    this._inclusionLabels.internalValue = value;
  }
  public resetInclusionLabels() {
    this._inclusionLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inclusionLabelsInput() {
    return this._inclusionLabels.internalValue;
  }

  // inventories - computed: false, optional: true, required: false
  private _inventories = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventoriesList(this, "inventories", false);
  public get inventories() {
    return this._inventories;
  }
  public putInventories(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterInventories[] | cdktf.IResolvable) {
    this._inventories.internalValue = value;
  }
  public resetInventories() {
    this._inventories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoriesInput() {
    return this._inventories.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters {
  /**
  * Required. The OS short name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#os_short_name OsConfigV2PolicyOrchestratorForOrganization#os_short_name}
  */
  readonly osShortName: string;
  /**
  * The OS version
  * 
  * Prefix matches are supported if asterisk(*) is provided as the
  * last character. For example, to match all versions with a major
  * version of '7', specify the following value for this field '7.*'
  * 
  * An empty string matches all OS versions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#os_version OsConfigV2PolicyOrchestratorForOrganization#os_version}
  */
  readonly osVersion?: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    os_short_name: cdktf.stringToTerraform(struct!.osShortName),
    os_version: cdktf.stringToTerraform(struct!.osVersion),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    os_short_name: {
      value: cdktf.stringToHclTerraform(struct!.osShortName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_version: {
      value: cdktf.stringToHclTerraform(struct!.osVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._osShortName !== undefined) {
      hasAnyValues = true;
      internalValueResult.osShortName = this._osShortName;
    }
    if (this._osVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVersion = this._osVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._osShortName = undefined;
      this._osVersion = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._osShortName = value.osShortName;
      this._osVersion = value.osVersion;
    }
  }

  // os_short_name - computed: false, optional: false, required: true
  private _osShortName?: string; 
  public get osShortName() {
    return this.getStringAttribute('os_short_name');
  }
  public set osShortName(value: string) {
    this._osShortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osShortNameInput() {
    return this._osShortName;
  }

  // os_version - computed: false, optional: true, required: false
  private _osVersion?: string; 
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }
  public set osVersion(value: string) {
    this._osVersion = value;
  }
  public resetOsVersion() {
    this._osVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVersionInput() {
    return this._osVersion;
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#bucket OsConfigV2PolicyOrchestratorForOrganization#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#generation OsConfigV2PolicyOrchestratorForOrganization#generation}
  */
  readonly generation?: string;
  /**
  * Required. Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#object OsConfigV2PolicyOrchestratorForOrganization#object}
  */
  readonly object: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcs): any {
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
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
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

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#sha256_checksum OsConfigV2PolicyOrchestratorForOrganization#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the
  * protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#uri OsConfigV2PolicyOrchestratorForOrganization#uri}
  */
  readonly uri: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFile {
  /**
  * Defaults to false. When false, files are subject to validations
  * based on the file type:
  * 
  * Remote: A checksum must be specified.
  * Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#allow_insecure OsConfigV2PolicyOrchestratorForOrganization#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#local_path OsConfigV2PolicyOrchestratorForOrganization#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gcs OsConfigV2PolicyOrchestratorForOrganization#gcs}
  */
  readonly gcs?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#remote OsConfigV2PolicyOrchestratorForOrganization#remote}
  */
  readonly remote?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemote;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToTerraform(struct!.gcs),
    remote: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToTerraform(struct!.remote),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsList",
    },
    remote: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforce {
  /**
  * Optional arguments to pass to the source during execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#args OsConfigV2PolicyOrchestratorForOrganization#args}
  */
  readonly args?: string[];
  /**
  * Required. The script interpreter to use.
  * Possible values:
  * INTERPRETER_UNSPECIFIED
  * NONE
  * SHELL
  * POWERSHELL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#interpreter OsConfigV2PolicyOrchestratorForOrganization#interpreter}
  */
  readonly interpreter: string;
  /**
  * Only recorded for enforce Exec.
  * Path to an output file (that is created by this Exec) whose
  * content will be recorded in OSPolicyResourceCompliance after a
  * successful run. Absence or failure to read this file will result in
  * this ExecResource being non-compliant. Output file size is limited to
  * 500K bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#output_file_path OsConfigV2PolicyOrchestratorForOrganization#output_file_path}
  */
  readonly outputFilePath?: string;
  /**
  * An inline script.
  * The size of the script is limited to 32KiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#script OsConfigV2PolicyOrchestratorForOrganization#script}
  */
  readonly script?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#file OsConfigV2PolicyOrchestratorForOrganization#file}
  */
  readonly file?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFile;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforce): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    output_file_path: cdktf.stringToTerraform(struct!.outputFilePath),
    script: cdktf.stringToTerraform(struct!.script),
    file: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileToTerraform(struct!.file),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforce): any {
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
    interpreter: {
      value: cdktf.stringToHclTerraform(struct!.interpreter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_file_path: {
      value: cdktf.stringToHclTerraform(struct!.outputFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforce | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._outputFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilePath = this._outputFilePath;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforce | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._interpreter = undefined;
      this._outputFilePath = undefined;
      this._script = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._interpreter = value.interpreter;
      this._outputFilePath = value.outputFilePath;
      this._script = value.script;
      this._file.internalValue = value.file;
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

  // interpreter - computed: false, optional: false, required: true
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output_file_path - computed: false, optional: true, required: false
  private _outputFilePath?: string; 
  public get outputFilePath() {
    return this.getStringAttribute('output_file_path');
  }
  public set outputFilePath(value: string) {
    this._outputFilePath = value;
  }
  public resetOutputFilePath() {
    this._outputFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilePathInput() {
    return this._outputFilePath;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#bucket OsConfigV2PolicyOrchestratorForOrganization#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#generation OsConfigV2PolicyOrchestratorForOrganization#generation}
  */
  readonly generation?: string;
  /**
  * Required. Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#object OsConfigV2PolicyOrchestratorForOrganization#object}
  */
  readonly object: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcs): any {
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
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
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

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#sha256_checksum OsConfigV2PolicyOrchestratorForOrganization#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the
  * protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#uri OsConfigV2PolicyOrchestratorForOrganization#uri}
  */
  readonly uri: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFile {
  /**
  * Defaults to false. When false, files are subject to validations
  * based on the file type:
  * 
  * Remote: A checksum must be specified.
  * Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#allow_insecure OsConfigV2PolicyOrchestratorForOrganization#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#local_path OsConfigV2PolicyOrchestratorForOrganization#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gcs OsConfigV2PolicyOrchestratorForOrganization#gcs}
  */
  readonly gcs?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#remote OsConfigV2PolicyOrchestratorForOrganization#remote}
  */
  readonly remote?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemote;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsToTerraform(struct!.gcs),
    remote: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToTerraform(struct!.remote),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsList",
    },
    remote: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidate {
  /**
  * Optional arguments to pass to the source during execution.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#args OsConfigV2PolicyOrchestratorForOrganization#args}
  */
  readonly args?: string[];
  /**
  * Required. The script interpreter to use.
  * Possible values:
  * INTERPRETER_UNSPECIFIED
  * NONE
  * SHELL
  * POWERSHELL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#interpreter OsConfigV2PolicyOrchestratorForOrganization#interpreter}
  */
  readonly interpreter: string;
  /**
  * Only recorded for enforce Exec.
  * Path to an output file (that is created by this Exec) whose
  * content will be recorded in OSPolicyResourceCompliance after a
  * successful run. Absence or failure to read this file will result in
  * this ExecResource being non-compliant. Output file size is limited to
  * 500K bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#output_file_path OsConfigV2PolicyOrchestratorForOrganization#output_file_path}
  */
  readonly outputFilePath?: string;
  /**
  * An inline script.
  * The size of the script is limited to 32KiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#script OsConfigV2PolicyOrchestratorForOrganization#script}
  */
  readonly script?: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#file OsConfigV2PolicyOrchestratorForOrganization#file}
  */
  readonly file?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFile;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    interpreter: cdktf.stringToTerraform(struct!.interpreter),
    output_file_path: cdktf.stringToTerraform(struct!.outputFilePath),
    script: cdktf.stringToTerraform(struct!.script),
    file: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileToTerraform(struct!.file),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidate): any {
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
    interpreter: {
      value: cdktf.stringToHclTerraform(struct!.interpreter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_file_path: {
      value: cdktf.stringToHclTerraform(struct!.outputFilePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    script: {
      value: cdktf.stringToHclTerraform(struct!.script),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._interpreter !== undefined) {
      hasAnyValues = true;
      internalValueResult.interpreter = this._interpreter;
    }
    if (this._outputFilePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputFilePath = this._outputFilePath;
    }
    if (this._script !== undefined) {
      hasAnyValues = true;
      internalValueResult.script = this._script;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._args = undefined;
      this._interpreter = undefined;
      this._outputFilePath = undefined;
      this._script = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._args = value.args;
      this._interpreter = value.interpreter;
      this._outputFilePath = value.outputFilePath;
      this._script = value.script;
      this._file.internalValue = value.file;
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

  // interpreter - computed: false, optional: false, required: true
  private _interpreter?: string; 
  public get interpreter() {
    return this.getStringAttribute('interpreter');
  }
  public set interpreter(value: string) {
    this._interpreter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interpreterInput() {
    return this._interpreter;
  }

  // output_file_path - computed: false, optional: true, required: false
  private _outputFilePath?: string; 
  public get outputFilePath() {
    return this.getStringAttribute('output_file_path');
  }
  public set outputFilePath(value: string) {
    this._outputFilePath = value;
  }
  public resetOutputFilePath() {
    this._outputFilePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFilePathInput() {
    return this._outputFilePath;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExec {
  /**
  * enforce block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#enforce OsConfigV2PolicyOrchestratorForOrganization#enforce}
  */
  readonly enforce?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforce;
  /**
  * validate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#validate OsConfigV2PolicyOrchestratorForOrganization#validate}
  */
  readonly validate: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidate;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforce: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceToTerraform(struct!.enforce),
    validate: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateToTerraform(struct!.validate),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enforce: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceToHclTerraform(struct!.enforce),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceList",
    },
    validate: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateToHclTerraform(struct!.validate),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enforce?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforce = this._enforce?.internalValue;
    }
    if (this._validate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.validate = this._validate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enforce.internalValue = undefined;
      this._validate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enforce.internalValue = value.enforce;
      this._validate.internalValue = value.validate;
    }
  }

  // enforce - computed: false, optional: true, required: false
  private _enforce = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforceOutputReference(this, "enforce");
  public get enforce() {
    return this._enforce;
  }
  public putEnforce(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecEnforce) {
    this._enforce.internalValue = value;
  }
  public resetEnforce() {
    this._enforce.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceInput() {
    return this._enforce.internalValue;
  }

  // validate - computed: false, optional: false, required: true
  private _validate = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidateOutputReference(this, "validate");
  public get validate() {
    return this._validate;
  }
  public putValidate(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecValidate) {
    this._validate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#bucket OsConfigV2PolicyOrchestratorForOrganization#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#generation OsConfigV2PolicyOrchestratorForOrganization#generation}
  */
  readonly generation?: string;
  /**
  * Required. Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#object OsConfigV2PolicyOrchestratorForOrganization#object}
  */
  readonly object: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcs): any {
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
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
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

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#sha256_checksum OsConfigV2PolicyOrchestratorForOrganization#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the
  * protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#uri OsConfigV2PolicyOrchestratorForOrganization#uri}
  */
  readonly uri: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFile {
  /**
  * Defaults to false. When false, files are subject to validations
  * based on the file type:
  * 
  * Remote: A checksum must be specified.
  * Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#allow_insecure OsConfigV2PolicyOrchestratorForOrganization#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#local_path OsConfigV2PolicyOrchestratorForOrganization#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gcs OsConfigV2PolicyOrchestratorForOrganization#gcs}
  */
  readonly gcs?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#remote OsConfigV2PolicyOrchestratorForOrganization#remote}
  */
  readonly remote?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemote;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsToTerraform(struct!.gcs),
    remote: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteToTerraform(struct!.remote),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsList",
    },
    remote: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFile {
  /**
  * A a file with this content.
  * The size of the content is limited to 32KiB.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#content OsConfigV2PolicyOrchestratorForOrganization#content}
  */
  readonly content?: string;
  /**
  * Required. The absolute path of the file within the VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#path OsConfigV2PolicyOrchestratorForOrganization#path}
  */
  readonly path: string;
  /**
  * Consists of three octal digits which represent, in
  * order, the permissions of the owner, group, and other users for the
  * file (similarly to the numeric mode used in the linux chmod
  * utility). Each digit represents a three bit number with the 4 bit
  * corresponding to the read permissions, the 2 bit corresponds to the
  * write bit, and the one bit corresponds to the execute permission.
  * Default behavior is 755.
  * 
  * Below are some examples of permissions and their associated values:
  * read, write, and execute: 7
  * read and execute: 5
  * read and write: 6
  * read only: 4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#permissions OsConfigV2PolicyOrchestratorForOrganization#permissions}
  */
  readonly permissions?: string;
  /**
  * Required. Desired state of the file.
  * Possible values:
  * DESIRED_STATE_UNSPECIFIED
  * PRESENT
  * ABSENT
  * CONTENTS_MATCH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#state OsConfigV2PolicyOrchestratorForOrganization#state}
  */
  readonly state: string;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#file OsConfigV2PolicyOrchestratorForOrganization#file}
  */
  readonly file?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFile;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    path: cdktf.stringToTerraform(struct!.path),
    permissions: cdktf.stringToTerraform(struct!.permissions),
    state: cdktf.stringToTerraform(struct!.state),
    file: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileToTerraform(struct!.file),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFile): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content: {
      value: cdktf.stringToHclTerraform(struct!.content),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    permissions: {
      value: cdktf.stringToHclTerraform(struct!.permissions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._content !== undefined) {
      hasAnyValues = true;
      internalValueResult.content = this._content;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._permissions !== undefined) {
      hasAnyValues = true;
      internalValueResult.permissions = this._permissions;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._content = undefined;
      this._path = undefined;
      this._permissions = undefined;
      this._state = undefined;
      this._file.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._content = value.content;
      this._path = value.path;
      this._permissions = value.permissions;
      this._state = value.state;
      this._file.internalValue = value.file;
    }
  }

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
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

  // permissions - computed: false, optional: true, required: false
  private _permissions?: string; 
  public get permissions() {
    return this.getStringAttribute('permissions');
  }
  public set permissions(value: string) {
    this._permissions = value;
  }
  public resetPermissions() {
    this._permissions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgApt {
  /**
  * Required. Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#name OsConfigV2PolicyOrchestratorForOrganization#name}
  */
  readonly name: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgApt): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#bucket OsConfigV2PolicyOrchestratorForOrganization#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#generation OsConfigV2PolicyOrchestratorForOrganization#generation}
  */
  readonly generation?: string;
  /**
  * Required. Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#object OsConfigV2PolicyOrchestratorForOrganization#object}
  */
  readonly object: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcs): any {
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
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
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

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#sha256_checksum OsConfigV2PolicyOrchestratorForOrganization#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the
  * protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#uri OsConfigV2PolicyOrchestratorForOrganization#uri}
  */
  readonly uri: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSource {
  /**
  * Defaults to false. When false, files are subject to validations
  * based on the file type:
  * 
  * Remote: A checksum must be specified.
  * Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#allow_insecure OsConfigV2PolicyOrchestratorForOrganization#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#local_path OsConfigV2PolicyOrchestratorForOrganization#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gcs OsConfigV2PolicyOrchestratorForOrganization#gcs}
  */
  readonly gcs?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#remote OsConfigV2PolicyOrchestratorForOrganization#remote}
  */
  readonly remote?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemote;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToTerraform(struct!.gcs),
    remote: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToTerraform(struct!.remote),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsList",
    },
    remote: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDeb {
  /**
  * Whether dependencies should also be installed.
  * - install when false: 'dpkg -i package'
  * - install when true: 'apt-get update && apt-get -y install
  * package.deb'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#pull_deps OsConfigV2PolicyOrchestratorForOrganization#pull_deps}
  */
  readonly pullDeps?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#source OsConfigV2PolicyOrchestratorForOrganization#source}
  */
  readonly source: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSource;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_deps: cdktf.booleanToTerraform(struct!.pullDeps),
    source: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceToTerraform(struct!.source),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDeb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_deps: {
      value: cdktf.booleanToHclTerraform(struct!.pullDeps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDeb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullDeps = this._pullDeps;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDeb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pullDeps = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pullDeps = value.pullDeps;
      this._source.internalValue = value.source;
    }
  }

  // pull_deps - computed: false, optional: true, required: false
  private _pullDeps?: boolean | cdktf.IResolvable; 
  public get pullDeps() {
    return this.getBooleanAttribute('pull_deps');
  }
  public set pullDeps(value: boolean | cdktf.IResolvable) {
    this._pullDeps = value;
  }
  public resetPullDeps() {
    this._pullDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullDepsInput() {
    return this._pullDeps;
  }

  // source - computed: false, optional: false, required: true
  private _source = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGooget {
  /**
  * Required. Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#name OsConfigV2PolicyOrchestratorForOrganization#name}
  */
  readonly name: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGooget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGooget): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGooget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGooget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#bucket OsConfigV2PolicyOrchestratorForOrganization#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#generation OsConfigV2PolicyOrchestratorForOrganization#generation}
  */
  readonly generation?: string;
  /**
  * Required. Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#object OsConfigV2PolicyOrchestratorForOrganization#object}
  */
  readonly object: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs): any {
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
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
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

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#sha256_checksum OsConfigV2PolicyOrchestratorForOrganization#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the
  * protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#uri OsConfigV2PolicyOrchestratorForOrganization#uri}
  */
  readonly uri: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSource {
  /**
  * Defaults to false. When false, files are subject to validations
  * based on the file type:
  * 
  * Remote: A checksum must be specified.
  * Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#allow_insecure OsConfigV2PolicyOrchestratorForOrganization#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#local_path OsConfigV2PolicyOrchestratorForOrganization#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gcs OsConfigV2PolicyOrchestratorForOrganization#gcs}
  */
  readonly gcs?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#remote OsConfigV2PolicyOrchestratorForOrganization#remote}
  */
  readonly remote?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToTerraform(struct!.gcs),
    remote: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToTerraform(struct!.remote),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsList",
    },
    remote: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsi {
  /**
  * Additional properties to use during installation.
  * This should be in the format of Property=Setting.
  * Appended to the defaults of 'ACTION=INSTALL
  * REBOOT=ReallySuppress'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#properties OsConfigV2PolicyOrchestratorForOrganization#properties}
  */
  readonly properties?: string[];
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#source OsConfigV2PolicyOrchestratorForOrganization#source}
  */
  readonly source: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSource;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    properties: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.properties),
    source: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceToTerraform(struct!.source),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsi): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    properties: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.properties),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsi | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsi | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._properties = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._properties = value.properties;
      this._source.internalValue = value.source;
    }
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string[]; 
  public get properties() {
    return this.getListAttribute('properties');
  }
  public set properties(value: string[]) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // source - computed: false, optional: false, required: true
  private _source = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs {
  /**
  * Required. Bucket of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#bucket OsConfigV2PolicyOrchestratorForOrganization#bucket}
  */
  readonly bucket: string;
  /**
  * Generation number of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#generation OsConfigV2PolicyOrchestratorForOrganization#generation}
  */
  readonly generation?: string;
  /**
  * Required. Name of the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#object OsConfigV2PolicyOrchestratorForOrganization#object}
  */
  readonly object: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket: cdktf.stringToTerraform(struct!.bucket),
    generation: cdktf.stringToTerraform(struct!.generation),
    object: cdktf.stringToTerraform(struct!.object),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs): any {
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
    generation: {
      value: cdktf.stringToHclTerraform(struct!.generation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object: {
      value: cdktf.stringToHclTerraform(struct!.object),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._generation !== undefined) {
      hasAnyValues = true;
      internalValueResult.generation = this._generation;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucket = undefined;
      this._generation = undefined;
      this._object = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucket = value.bucket;
      this._generation = value.generation;
      this._object = value.object;
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

  // generation - computed: false, optional: true, required: false
  private _generation?: string; 
  public get generation() {
    return this.getStringAttribute('generation');
  }
  public set generation(value: string) {
    this._generation = value;
  }
  public resetGeneration() {
    this._generation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generationInput() {
    return this._generation;
  }

  // object - computed: false, optional: false, required: true
  private _object?: string; 
  public get object() {
    return this.getStringAttribute('object');
  }
  public set object(value: string) {
    this._object = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote {
  /**
  * SHA256 checksum of the remote file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#sha256_checksum OsConfigV2PolicyOrchestratorForOrganization#sha256_checksum}
  */
  readonly sha256Checksum?: string;
  /**
  * Required. URI from which to fetch the object. It should contain both the
  * protocol and path following the format '{protocol}://{location}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#uri OsConfigV2PolicyOrchestratorForOrganization#uri}
  */
  readonly uri: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sha256_checksum: cdktf.stringToTerraform(struct!.sha256Checksum),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sha256_checksum: {
      value: cdktf.stringToHclTerraform(struct!.sha256Checksum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sha256Checksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sha256Checksum = this._sha256Checksum;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sha256Checksum = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sha256Checksum = value.sha256Checksum;
      this._uri = value.uri;
    }
  }

  // sha256_checksum - computed: false, optional: true, required: false
  private _sha256Checksum?: string; 
  public get sha256Checksum() {
    return this.getStringAttribute('sha256_checksum');
  }
  public set sha256Checksum(value: string) {
    this._sha256Checksum = value;
  }
  public resetSha256Checksum() {
    this._sha256Checksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sha256ChecksumInput() {
    return this._sha256Checksum;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSource {
  /**
  * Defaults to false. When false, files are subject to validations
  * based on the file type:
  * 
  * Remote: A checksum must be specified.
  * Cloud Storage: An object generation number must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#allow_insecure OsConfigV2PolicyOrchestratorForOrganization#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * A local path within the VM to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#local_path OsConfigV2PolicyOrchestratorForOrganization#local_path}
  */
  readonly localPath?: string;
  /**
  * gcs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gcs OsConfigV2PolicyOrchestratorForOrganization#gcs}
  */
  readonly gcs?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs;
  /**
  * remote block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#remote OsConfigV2PolicyOrchestratorForOrganization#remote}
  */
  readonly remote?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    local_path: cdktf.stringToTerraform(struct!.localPath),
    gcs: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToTerraform(struct!.gcs),
    remote: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToTerraform(struct!.remote),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_insecure: {
      value: cdktf.booleanToHclTerraform(struct!.allowInsecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    local_path: {
      value: cdktf.stringToHclTerraform(struct!.localPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsToHclTerraform(struct!.gcs),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsList",
    },
    remote: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteToHclTerraform(struct!.remote),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowInsecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowInsecure = this._allowInsecure;
    }
    if (this._localPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPath = this._localPath;
    }
    if (this._gcs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcs = this._gcs?.internalValue;
    }
    if (this._remote?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.remote = this._remote?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowInsecure = undefined;
      this._localPath = undefined;
      this._gcs.internalValue = undefined;
      this._remote.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowInsecure = value.allowInsecure;
      this._localPath = value.localPath;
      this._gcs.internalValue = value.gcs;
      this._remote.internalValue = value.remote;
    }
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure');
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure;
  }

  // local_path - computed: false, optional: true, required: false
  private _localPath?: string; 
  public get localPath() {
    return this.getStringAttribute('local_path');
  }
  public set localPath(value: string) {
    this._localPath = value;
  }
  public resetLocalPath() {
    this._localPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localPathInput() {
    return this._localPath;
  }

  // gcs - computed: false, optional: true, required: false
  private _gcs = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcsOutputReference(this, "gcs");
  public get gcs() {
    return this._gcs;
  }
  public putGcs(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceGcs) {
    this._gcs.internalValue = value;
  }
  public resetGcs() {
    this._gcs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsInput() {
    return this._gcs.internalValue;
  }

  // remote - computed: false, optional: true, required: false
  private _remote = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemoteOutputReference(this, "remote");
  public get remote() {
    return this._remote;
  }
  public putRemote(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceRemote) {
    this._remote.internalValue = value;
  }
  public resetRemote() {
    this._remote.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpm {
  /**
  * Whether dependencies should also be installed.
  * - install when false: 'rpm --upgrade --replacepkgs package.rpm'
  * - install when true: 'yum -y install package.rpm' or
  * 'zypper -y install package.rpm'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#pull_deps OsConfigV2PolicyOrchestratorForOrganization#pull_deps}
  */
  readonly pullDeps?: boolean | cdktf.IResolvable;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#source OsConfigV2PolicyOrchestratorForOrganization#source}
  */
  readonly source: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSource;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pull_deps: cdktf.booleanToTerraform(struct!.pullDeps),
    source: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceToTerraform(struct!.source),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pull_deps: {
      value: cdktf.booleanToHclTerraform(struct!.pullDeps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pullDeps !== undefined) {
      hasAnyValues = true;
      internalValueResult.pullDeps = this._pullDeps;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pullDeps = undefined;
      this._source.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pullDeps = value.pullDeps;
      this._source.internalValue = value.source;
    }
  }

  // pull_deps - computed: false, optional: true, required: false
  private _pullDeps?: boolean | cdktf.IResolvable; 
  public get pullDeps() {
    return this.getBooleanAttribute('pull_deps');
  }
  public set pullDeps(value: boolean | cdktf.IResolvable) {
    this._pullDeps = value;
  }
  public resetPullDeps() {
    this._pullDeps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullDepsInput() {
    return this._pullDeps;
  }

  // source - computed: false, optional: false, required: true
  private _source = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYum {
  /**
  * Required. Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#name OsConfigV2PolicyOrchestratorForOrganization#name}
  */
  readonly name: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYum): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypper {
  /**
  * Required. Package name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#name OsConfigV2PolicyOrchestratorForOrganization#name}
  */
  readonly name: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypper): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
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
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkg {
  /**
  * Required. The desired state the agent should maintain for this package.
  * Possible values:
  * DESIRED_STATE_UNSPECIFIED
  * INSTALLED
  * REMOVED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#desired_state OsConfigV2PolicyOrchestratorForOrganization#desired_state}
  */
  readonly desiredState: string;
  /**
  * apt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#apt OsConfigV2PolicyOrchestratorForOrganization#apt}
  */
  readonly apt?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgApt;
  /**
  * deb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#deb OsConfigV2PolicyOrchestratorForOrganization#deb}
  */
  readonly deb?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDeb;
  /**
  * googet block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#googet OsConfigV2PolicyOrchestratorForOrganization#googet}
  */
  readonly googet?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGooget;
  /**
  * msi block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#msi OsConfigV2PolicyOrchestratorForOrganization#msi}
  */
  readonly msi?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsi;
  /**
  * rpm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#rpm OsConfigV2PolicyOrchestratorForOrganization#rpm}
  */
  readonly rpm?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpm;
  /**
  * yum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#yum OsConfigV2PolicyOrchestratorForOrganization#yum}
  */
  readonly yum?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYum;
  /**
  * zypper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#zypper OsConfigV2PolicyOrchestratorForOrganization#zypper}
  */
  readonly zypper?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypper;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    apt: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptToTerraform(struct!.apt),
    deb: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebToTerraform(struct!.deb),
    googet: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetToTerraform(struct!.googet),
    msi: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiToTerraform(struct!.msi),
    rpm: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmToTerraform(struct!.rpm),
    yum: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumToTerraform(struct!.yum),
    zypper: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperToTerraform(struct!.zypper),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apt: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptToHclTerraform(struct!.apt),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptList",
    },
    deb: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebToHclTerraform(struct!.deb),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebList",
    },
    googet: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetToHclTerraform(struct!.googet),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetList",
    },
    msi: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiToHclTerraform(struct!.msi),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiList",
    },
    rpm: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmToHclTerraform(struct!.rpm),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmList",
    },
    yum: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumToHclTerraform(struct!.yum),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumList",
    },
    zypper: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperToHclTerraform(struct!.zypper),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._deb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deb = this._deb?.internalValue;
    }
    if (this._googet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googet = this._googet?.internalValue;
    }
    if (this._msi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.msi = this._msi?.internalValue;
    }
    if (this._rpm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpm = this._rpm?.internalValue;
    }
    if (this._yum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yum = this._yum?.internalValue;
    }
    if (this._zypper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zypper = this._zypper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._desiredState = undefined;
      this._apt.internalValue = undefined;
      this._deb.internalValue = undefined;
      this._googet.internalValue = undefined;
      this._msi.internalValue = undefined;
      this._rpm.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._desiredState = value.desiredState;
      this._apt.internalValue = value.apt;
      this._deb.internalValue = value.deb;
      this._googet.internalValue = value.googet;
      this._msi.internalValue = value.msi;
      this._rpm.internalValue = value.rpm;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // desired_state - computed: false, optional: false, required: true
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgApt) {
    this._apt.internalValue = value;
  }
  public resetApt() {
    this._apt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt.internalValue;
  }

  // deb - computed: false, optional: true, required: false
  private _deb = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDebOutputReference(this, "deb");
  public get deb() {
    return this._deb;
  }
  public putDeb(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgDeb) {
    this._deb.internalValue = value;
  }
  public resetDeb() {
    this._deb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debInput() {
    return this._deb.internalValue;
  }

  // googet - computed: false, optional: true, required: false
  private _googet = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGoogetOutputReference(this, "googet");
  public get googet() {
    return this._googet;
  }
  public putGooget(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgGooget) {
    this._googet.internalValue = value;
  }
  public resetGooget() {
    this._googet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googetInput() {
    return this._googet.internalValue;
  }

  // msi - computed: false, optional: true, required: false
  private _msi = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsiOutputReference(this, "msi");
  public get msi() {
    return this._msi;
  }
  public putMsi(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgMsi) {
    this._msi.internalValue = value;
  }
  public resetMsi() {
    this._msi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msiInput() {
    return this._msi.internalValue;
  }

  // rpm - computed: false, optional: true, required: false
  private _rpm = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpmOutputReference(this, "rpm");
  public get rpm() {
    return this._rpm;
  }
  public putRpm(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgRpm) {
    this._rpm.internalValue = value;
  }
  public resetRpm() {
    this._rpm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpmInput() {
    return this._rpm.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgYum) {
    this._yum.internalValue = value;
  }
  public resetYum() {
    this._yum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum.internalValue;
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgZypper) {
    this._zypper.internalValue = value;
  }
  public resetZypper() {
    this._zypper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryApt {
  /**
  * Required. Type of archive files in this repository.
  * Possible values:
  * ARCHIVE_TYPE_UNSPECIFIED
  * DEB
  * DEB_SRC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#archive_type OsConfigV2PolicyOrchestratorForOrganization#archive_type}
  */
  readonly archiveType: string;
  /**
  * Required. List of components for this repository. Must contain at least one
  * item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#components OsConfigV2PolicyOrchestratorForOrganization#components}
  */
  readonly components: string[];
  /**
  * Required. Distribution of this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#distribution OsConfigV2PolicyOrchestratorForOrganization#distribution}
  */
  readonly distribution: string;
  /**
  * URI of the key file for this repository. The agent maintains a
  * keyring at '/etc/apt/trusted.gpg.d/osconfig_agent_managed.gpg'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gpg_key OsConfigV2PolicyOrchestratorForOrganization#gpg_key}
  */
  readonly gpgKey?: string;
  /**
  * Required. URI for this repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#uri OsConfigV2PolicyOrchestratorForOrganization#uri}
  */
  readonly uri: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    archive_type: cdktf.stringToTerraform(struct!.archiveType),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    distribution: cdktf.stringToTerraform(struct!.distribution),
    gpg_key: cdktf.stringToTerraform(struct!.gpgKey),
    uri: cdktf.stringToTerraform(struct!.uri),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryApt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    archive_type: {
      value: cdktf.stringToHclTerraform(struct!.archiveType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    distribution: {
      value: cdktf.stringToHclTerraform(struct!.distribution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gpg_key: {
      value: cdktf.stringToHclTerraform(struct!.gpgKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryApt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._archiveType !== undefined) {
      hasAnyValues = true;
      internalValueResult.archiveType = this._archiveType;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._distribution !== undefined) {
      hasAnyValues = true;
      internalValueResult.distribution = this._distribution;
    }
    if (this._gpgKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKey = this._gpgKey;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryApt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._archiveType = undefined;
      this._components = undefined;
      this._distribution = undefined;
      this._gpgKey = undefined;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._archiveType = value.archiveType;
      this._components = value.components;
      this._distribution = value.distribution;
      this._gpgKey = value.gpgKey;
      this._uri = value.uri;
    }
  }

  // archive_type - computed: false, optional: false, required: true
  private _archiveType?: string; 
  public get archiveType() {
    return this.getStringAttribute('archive_type');
  }
  public set archiveType(value: string) {
    this._archiveType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveTypeInput() {
    return this._archiveType;
  }

  // components - computed: false, optional: false, required: true
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // distribution - computed: false, optional: false, required: true
  private _distribution?: string; 
  public get distribution() {
    return this.getStringAttribute('distribution');
  }
  public set distribution(value: string) {
    this._distribution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get distributionInput() {
    return this._distribution;
  }

  // gpg_key - computed: false, optional: true, required: false
  private _gpgKey?: string; 
  public get gpgKey() {
    return this.getStringAttribute('gpg_key');
  }
  public set gpgKey(value: string) {
    this._gpgKey = value;
  }
  public resetGpgKey() {
    this._gpgKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeyInput() {
    return this._gpgKey;
  }

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGoo {
  /**
  * Required. The name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#name OsConfigV2PolicyOrchestratorForOrganization#name}
  */
  readonly name: string;
  /**
  * Required. The url of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#url OsConfigV2PolicyOrchestratorForOrganization#url}
  */
  readonly url: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGoo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGoo): any {
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
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGoo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGoo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._url = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._url = value.url;
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

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYum {
  /**
  * Required. The location of the repository directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#base_url OsConfigV2PolicyOrchestratorForOrganization#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#display_name OsConfigV2PolicyOrchestratorForOrganization#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gpg_keys OsConfigV2PolicyOrchestratorForOrganization#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * Required. A one word, unique name for this repository. This is  the 'repo
  * id' in the yum config file and also the 'display_name' if
  * 'display_name' is omitted. This id is also used as the unique
  * identifier when checking for resource conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#id OsConfigV2PolicyOrchestratorForOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYum): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
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
    gpg_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gpgKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYum | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYum | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
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
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypper {
  /**
  * Required. The location of the repository directory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#base_url OsConfigV2PolicyOrchestratorForOrganization#base_url}
  */
  readonly baseUrl: string;
  /**
  * The display name of the repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#display_name OsConfigV2PolicyOrchestratorForOrganization#display_name}
  */
  readonly displayName?: string;
  /**
  * URIs of GPG keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#gpg_keys OsConfigV2PolicyOrchestratorForOrganization#gpg_keys}
  */
  readonly gpgKeys?: string[];
  /**
  * Required. A one word, unique name for this repository. This is the 'repo
  * id' in the zypper config file and also the 'display_name' if
  * 'display_name' is omitted. This id is also used as the unique
  * identifier when checking for GuestPolicy conflicts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#id OsConfigV2PolicyOrchestratorForOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_url: cdktf.stringToTerraform(struct!.baseUrl),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    gpg_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.gpgKeys),
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base_url: {
      value: cdktf.stringToHclTerraform(struct!.baseUrl),
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
    gpg_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.gpgKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseUrl = this._baseUrl;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._gpgKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpgKeys = this._gpgKeys;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseUrl = undefined;
      this._displayName = undefined;
      this._gpgKeys = undefined;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseUrl = value.baseUrl;
      this._displayName = value.displayName;
      this._gpgKeys = value.gpgKeys;
      this._id = value.id;
    }
  }

  // base_url - computed: false, optional: false, required: true
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // gpg_keys - computed: false, optional: true, required: false
  private _gpgKeys?: string[]; 
  public get gpgKeys() {
    return this.getListAttribute('gpg_keys');
  }
  public set gpgKeys(value: string[]) {
    this._gpgKeys = value;
  }
  public resetGpgKeys() {
    this._gpgKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpgKeysInput() {
    return this._gpgKeys;
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
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepository {
  /**
  * apt block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#apt OsConfigV2PolicyOrchestratorForOrganization#apt}
  */
  readonly apt?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryApt;
  /**
  * goo block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#goo OsConfigV2PolicyOrchestratorForOrganization#goo}
  */
  readonly goo?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGoo;
  /**
  * yum block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#yum OsConfigV2PolicyOrchestratorForOrganization#yum}
  */
  readonly yum?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYum;
  /**
  * zypper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#zypper OsConfigV2PolicyOrchestratorForOrganization#zypper}
  */
  readonly zypper?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypper;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apt: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptToTerraform(struct!.apt),
    goo: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooToTerraform(struct!.goo),
    yum: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumToTerraform(struct!.yum),
    zypper: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperToTerraform(struct!.zypper),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepository): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apt: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptToHclTerraform(struct!.apt),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptList",
    },
    goo: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooToHclTerraform(struct!.goo),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooList",
    },
    yum: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumToHclTerraform(struct!.yum),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumList",
    },
    zypper: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperToHclTerraform(struct!.zypper),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepository | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apt?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apt = this._apt?.internalValue;
    }
    if (this._goo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goo = this._goo?.internalValue;
    }
    if (this._yum?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.yum = this._yum?.internalValue;
    }
    if (this._zypper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.zypper = this._zypper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepository | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apt.internalValue = undefined;
      this._goo.internalValue = undefined;
      this._yum.internalValue = undefined;
      this._zypper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apt.internalValue = value.apt;
      this._goo.internalValue = value.goo;
      this._yum.internalValue = value.yum;
      this._zypper.internalValue = value.zypper;
    }
  }

  // apt - computed: false, optional: true, required: false
  private _apt = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryAptOutputReference(this, "apt");
  public get apt() {
    return this._apt;
  }
  public putApt(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryApt) {
    this._apt.internalValue = value;
  }
  public resetApt() {
    this._apt.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aptInput() {
    return this._apt.internalValue;
  }

  // goo - computed: false, optional: true, required: false
  private _goo = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGooOutputReference(this, "goo");
  public get goo() {
    return this._goo;
  }
  public putGoo(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryGoo) {
    this._goo.internalValue = value;
  }
  public resetGoo() {
    this._goo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gooInput() {
    return this._goo.internalValue;
  }

  // yum - computed: false, optional: true, required: false
  private _yum = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYumOutputReference(this, "yum");
  public get yum() {
    return this._yum;
  }
  public putYum(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryYum) {
    this._yum.internalValue = value;
  }
  public resetYum() {
    this._yum.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yumInput() {
    return this._yum.internalValue;
  }

  // zypper - computed: false, optional: true, required: false
  private _zypper = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypperOutputReference(this, "zypper");
  public get zypper() {
    return this._zypper;
  }
  public putZypper(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryZypper) {
    this._zypper.internalValue = value;
  }
  public resetZypper() {
    this._zypper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zypperInput() {
    return this._zypper.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources {
  /**
  * Required. The id of the resource with the following restrictions:
  * 
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the OS policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#id OsConfigV2PolicyOrchestratorForOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * exec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#exec OsConfigV2PolicyOrchestratorForOrganization#exec}
  */
  readonly exec?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExec;
  /**
  * file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#file OsConfigV2PolicyOrchestratorForOrganization#file}
  */
  readonly file?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFile;
  /**
  * pkg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#pkg OsConfigV2PolicyOrchestratorForOrganization#pkg}
  */
  readonly pkg?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkg;
  /**
  * repository block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#repository OsConfigV2PolicyOrchestratorForOrganization#repository}
  */
  readonly repository?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepository;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    exec: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecToTerraform(struct!.exec),
    file: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileToTerraform(struct!.file),
    pkg: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgToTerraform(struct!.pkg),
    repository: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryToTerraform(struct!.repository),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exec: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecList",
    },
    file: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileToHclTerraform(struct!.file),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileList",
    },
    pkg: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgToHclTerraform(struct!.pkg),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgList",
    },
    repository: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryToHclTerraform(struct!.repository),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._file?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file?.internalValue;
    }
    if (this._pkg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pkg = this._pkg?.internalValue;
    }
    if (this._repository?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repository = this._repository?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._exec.internalValue = undefined;
      this._file.internalValue = undefined;
      this._pkg.internalValue = undefined;
      this._repository.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._exec.internalValue = value.exec;
      this._file.internalValue = value.file;
      this._pkg.internalValue = value.pkg;
      this._repository.internalValue = value.repository;
    }
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

  // exec - computed: false, optional: true, required: false
  private _exec = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesExec) {
    this._exec.internalValue = value;
  }
  public resetExec() {
    this._exec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // file - computed: false, optional: true, required: false
  private _file = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFileOutputReference(this, "file");
  public get file() {
    return this._file;
  }
  public putFile(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesFile) {
    this._file.internalValue = value;
  }
  public resetFile() {
    this._file.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file.internalValue;
  }

  // pkg - computed: false, optional: true, required: false
  private _pkg = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkgOutputReference(this, "pkg");
  public get pkg() {
    return this._pkg;
  }
  public putPkg(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesPkg) {
    this._pkg.internalValue = value;
  }
  public resetPkg() {
    this._pkg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg.internalValue;
  }

  // repository - computed: false, optional: true, required: false
  private _repository = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepositoryOutputReference(this, "repository");
  public get repository() {
    return this._repository;
  }
  public putRepository(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesRepository) {
    this._repository.internalValue = value;
  }
  public resetRepository() {
    this._repository.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository.internalValue;
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups {
  /**
  * inventory_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#inventory_filters OsConfigV2PolicyOrchestratorForOrganization#inventory_filters}
  */
  readonly inventoryFilters?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#resources OsConfigV2PolicyOrchestratorForOrganization#resources}
  */
  readonly resources: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources[] | cdktf.IResolvable;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inventory_filters: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersToTerraform, true)(struct!.inventoryFilters),
    resources: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesToTerraform, true)(struct!.resources),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inventory_filters: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersToHclTerraform, true)(struct!.inventoryFilters),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersList",
    },
    resources: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesToHclTerraform, true)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inventoryFilters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inventoryFilters = this._inventoryFilters?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inventoryFilters.internalValue = undefined;
      this._resources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inventoryFilters.internalValue = value.inventoryFilters;
      this._resources.internalValue = value.resources;
    }
  }

  // inventory_filters - computed: false, optional: true, required: false
  private _inventoryFilters = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFiltersList(this, "inventory_filters", false);
  public get inventoryFilters() {
    return this._inventoryFilters;
  }
  public putInventoryFilters(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsInventoryFilters[] | cdktf.IResolvable) {
    this._inventoryFilters.internalValue = value;
  }
  public resetInventoryFilters() {
    this._inventoryFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inventoryFiltersInput() {
    return this._inventoryFilters.internalValue;
  }

  // resources - computed: false, optional: false, required: true
  private _resources = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies {
  /**
  * This flag determines the OS policy compliance status when none of the
  * resource groups within the policy are applicable for a VM. Set this value
  * to 'true' if the policy needs to be reported as compliant even if the
  * policy has nothing to validate or enforce.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#allow_no_resource_group_match OsConfigV2PolicyOrchestratorForOrganization#allow_no_resource_group_match}
  */
  readonly allowNoResourceGroupMatch?: boolean | cdktf.IResolvable;
  /**
  * Policy description.
  * Length of the description is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#description OsConfigV2PolicyOrchestratorForOrganization#description}
  */
  readonly description?: string;
  /**
  * Required. The id of the OS policy with the following restrictions:
  * 
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#id OsConfigV2PolicyOrchestratorForOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Required. Policy mode
  * Possible values:
  * MODE_UNSPECIFIED
  * VALIDATION
  * ENFORCEMENT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#mode OsConfigV2PolicyOrchestratorForOrganization#mode}
  */
  readonly mode: string;
  /**
  * resource_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#resource_groups OsConfigV2PolicyOrchestratorForOrganization#resource_groups}
  */
  readonly resourceGroups: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups[] | cdktf.IResolvable;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_no_resource_group_match: cdktf.booleanToTerraform(struct!.allowNoResourceGroupMatch),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    mode: cdktf.stringToTerraform(struct!.mode),
    resource_groups: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsToTerraform, true)(struct!.resourceGroups),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_no_resource_group_match: {
      value: cdktf.booleanToHclTerraform(struct!.allowNoResourceGroupMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_groups: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsToHclTerraform, true)(struct!.resourceGroups),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNoResourceGroupMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNoResourceGroupMatch = this._allowNoResourceGroupMatch;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._resourceGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroups = this._resourceGroups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNoResourceGroupMatch = undefined;
      this._description = undefined;
      this._id = undefined;
      this._mode = undefined;
      this._resourceGroups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNoResourceGroupMatch = value.allowNoResourceGroupMatch;
      this._description = value.description;
      this._id = value.id;
      this._mode = value.mode;
      this._resourceGroups.internalValue = value.resourceGroups;
    }
  }

  // allow_no_resource_group_match - computed: false, optional: true, required: false
  private _allowNoResourceGroupMatch?: boolean | cdktf.IResolvable; 
  public get allowNoResourceGroupMatch() {
    return this.getBooleanAttribute('allow_no_resource_group_match');
  }
  public set allowNoResourceGroupMatch(value: boolean | cdktf.IResolvable) {
    this._allowNoResourceGroupMatch = value;
  }
  public resetAllowNoResourceGroupMatch() {
    this._allowNoResourceGroupMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNoResourceGroupMatchInput() {
    return this._allowNoResourceGroupMatch;
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

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // resource_groups - computed: false, optional: false, required: true
  private _resourceGroups = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroupsList(this, "resource_groups", false);
  public get resourceGroups() {
    return this._resourceGroups;
  }
  public putResourceGroups(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesResourceGroups[] | cdktf.IResolvable) {
    this._resourceGroups.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupsInput() {
    return this._resourceGroups.internalValue;
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudget {
  /**
  * Specifies a fixed value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#fixed OsConfigV2PolicyOrchestratorForOrganization#fixed}
  */
  readonly fixed?: number;
  /**
  * Specifies the relative value defined as a percentage, which will be
  * multiplied by a reference value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#percent OsConfigV2PolicyOrchestratorForOrganization#percent}
  */
  readonly percent?: number;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed: cdktf.numberToTerraform(struct!.fixed),
    percent: cdktf.numberToTerraform(struct!.percent),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudget): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed: {
      value: cdktf.numberToHclTerraform(struct!.fixed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    percent: {
      value: cdktf.numberToHclTerraform(struct!.percent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudget | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixed = this._fixed;
    }
    if (this._percent !== undefined) {
      hasAnyValues = true;
      internalValueResult.percent = this._percent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudget | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixed = undefined;
      this._percent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixed = value.fixed;
      this._percent = value.percent;
    }
  }

  // fixed - computed: false, optional: true, required: false
  private _fixed?: number; 
  public get fixed() {
    return this.getNumberAttribute('fixed');
  }
  public set fixed(value: number) {
    this._fixed = value;
  }
  public resetFixed() {
    this._fixed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedInput() {
    return this._fixed;
  }

  // percent - computed: false, optional: true, required: false
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
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRollout {
  /**
  * Required. This determines the minimum duration of time to wait after the
  * configuration changes are applied through the current rollout. A
  * VM continues to count towards the 'disruption_budget' at least
  * until this duration of time has passed after configuration changes are
  * applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#min_wait_duration OsConfigV2PolicyOrchestratorForOrganization#min_wait_duration}
  */
  readonly minWaitDuration: string;
  /**
  * disruption_budget block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#disruption_budget OsConfigV2PolicyOrchestratorForOrganization#disruption_budget}
  */
  readonly disruptionBudget: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudget;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    min_wait_duration: cdktf.stringToTerraform(struct!.minWaitDuration),
    disruption_budget: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetToTerraform(struct!.disruptionBudget),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRollout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    min_wait_duration: {
      value: cdktf.stringToHclTerraform(struct!.minWaitDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disruption_budget: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetToHclTerraform(struct!.disruptionBudget),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRollout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minWaitDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.minWaitDuration = this._minWaitDuration;
    }
    if (this._disruptionBudget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.disruptionBudget = this._disruptionBudget?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRollout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minWaitDuration = undefined;
      this._disruptionBudget.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minWaitDuration = value.minWaitDuration;
      this._disruptionBudget.internalValue = value.disruptionBudget;
    }
  }

  // min_wait_duration - computed: false, optional: false, required: true
  private _minWaitDuration?: string; 
  public get minWaitDuration() {
    return this.getStringAttribute('min_wait_duration');
  }
  public set minWaitDuration(value: string) {
    this._minWaitDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minWaitDurationInput() {
    return this._minWaitDuration;
  }

  // disruption_budget - computed: false, optional: false, required: true
  private _disruptionBudget = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudgetOutputReference(this, "disruption_budget");
  public get disruptionBudget() {
    return this._disruptionBudget;
  }
  public putDisruptionBudget(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutDisruptionBudget) {
    this._disruptionBudget.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disruptionBudgetInput() {
    return this._disruptionBudget.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1Payload {
  /**
  * OS policy assignment description.
  * Length of the description is limited to 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#description OsConfigV2PolicyOrchestratorForOrganization#description}
  */
  readonly description?: string;
  /**
  * The etag for this OS policy assignment.
  * If this is provided on update, it must match the server's etag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#etag OsConfigV2PolicyOrchestratorForOrganization#etag}
  */
  readonly etag?: string;
  /**
  * Resource name.
  * 
  * Format:
  * 'projects/{project_number}/locations/{location}/osPolicyAssignments/{os_policy_assignment_id}'
  * 
  * This field is ignored when you create an OS policy assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#name OsConfigV2PolicyOrchestratorForOrganization#name}
  */
  readonly name?: string;
  /**
  * instance_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#instance_filter OsConfigV2PolicyOrchestratorForOrganization#instance_filter}
  */
  readonly instanceFilter: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilter;
  /**
  * os_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#os_policies OsConfigV2PolicyOrchestratorForOrganization#os_policies}
  */
  readonly osPolicies: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies[] | cdktf.IResolvable;
  /**
  * rollout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#rollout OsConfigV2PolicyOrchestratorForOrganization#rollout}
  */
  readonly rollout: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRollout;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1Payload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    etag: cdktf.stringToTerraform(struct!.etag),
    name: cdktf.stringToTerraform(struct!.name),
    instance_filter: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterToTerraform(struct!.instanceFilter),
    os_policies: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesToTerraform, true)(struct!.osPolicies),
    rollout: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutToTerraform(struct!.rollout),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1Payload): any {
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
    etag: {
      value: cdktf.stringToHclTerraform(struct!.etag),
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
    instance_filter: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterToHclTerraform(struct!.instanceFilter),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterList",
    },
    os_policies: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesToHclTerraform, true)(struct!.osPolicies),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesList",
    },
    rollout: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutToHclTerraform(struct!.rollout),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1Payload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._etag !== undefined) {
      hasAnyValues = true;
      internalValueResult.etag = this._etag;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._instanceFilter?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFilter = this._instanceFilter?.internalValue;
    }
    if (this._osPolicies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osPolicies = this._osPolicies?.internalValue;
    }
    if (this._rollout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rollout = this._rollout?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1Payload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._etag = undefined;
      this._name = undefined;
      this._instanceFilter.internalValue = undefined;
      this._osPolicies.internalValue = undefined;
      this._rollout.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._etag = value.etag;
      this._name = value.name;
      this._instanceFilter.internalValue = value.instanceFilter;
      this._osPolicies.internalValue = value.osPolicies;
      this._rollout.internalValue = value.rollout;
    }
  }

  // baseline - computed: true, optional: false, required: false
  public get baseline() {
    return this.getBooleanAttribute('baseline');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // etag - computed: false, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // revision_create_time - computed: true, optional: false, required: false
  public get revisionCreateTime() {
    return this.getStringAttribute('revision_create_time');
  }

  // revision_id - computed: true, optional: false, required: false
  public get revisionId() {
    return this.getStringAttribute('revision_id');
  }

  // rollout_state - computed: true, optional: false, required: false
  public get rolloutState() {
    return this.getStringAttribute('rollout_state');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // instance_filter - computed: false, optional: false, required: true
  private _instanceFilter = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilterOutputReference(this, "instance_filter");
  public get instanceFilter() {
    return this._instanceFilter;
  }
  public putInstanceFilter(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadInstanceFilter) {
    this._instanceFilter.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFilterInput() {
    return this._instanceFilter.internalValue;
  }

  // os_policies - computed: false, optional: false, required: true
  private _osPolicies = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPoliciesList(this, "os_policies", false);
  public get osPolicies() {
    return this._osPolicies;
  }
  public putOsPolicies(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOsPolicies[] | cdktf.IResolvable) {
    this._osPolicies.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osPoliciesInput() {
    return this._osPolicies.internalValue;
  }

  // rollout - computed: false, optional: false, required: true
  private _rollout = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRolloutOutputReference(this, "rollout");
  public get rollout() {
    return this._rollout;
  }
  public putRollout(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadRollout) {
    this._rollout.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolloutInput() {
    return this._rollout.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResource {
  /**
  * Optional. ID of the resource to be used while generating set of affected resources.
  * 
  * For UPSERT action the value is auto-generated during PolicyOrchestrator
  * creation when not set. When the value is set it should following next
  * restrictions:
  * 
  * * Must contain only lowercase letters, numbers, and hyphens.
  * * Must start with a letter.
  * * Must be between 1-63 characters.
  * * Must end with a number or a letter.
  * * Must be unique within the project.
  * 
  * For DELETE action, ID must be specified explicitly during
  * PolicyOrchestrator creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#id OsConfigV2PolicyOrchestratorForOrganization#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * os_policy_assignment_v1_payload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#os_policy_assignment_v1_payload OsConfigV2PolicyOrchestratorForOrganization#os_policy_assignment_v1_payload}
  */
  readonly osPolicyAssignmentV1Payload?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1Payload;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    os_policy_assignment_v1_payload: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadToTerraform(struct!.osPolicyAssignmentV1Payload),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_policy_assignment_v1_payload: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadToHclTerraform(struct!.osPolicyAssignmentV1Payload),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._osPolicyAssignmentV1Payload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osPolicyAssignmentV1Payload = this._osPolicyAssignmentV1Payload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._osPolicyAssignmentV1Payload.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._osPolicyAssignmentV1Payload.internalValue = value.osPolicyAssignmentV1Payload;
    }
  }

  // id - computed: false, optional: true, required: false
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

  // os_policy_assignment_v1_payload - computed: false, optional: true, required: false
  private _osPolicyAssignmentV1Payload = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1PayloadOutputReference(this, "os_policy_assignment_v1_payload");
  public get osPolicyAssignmentV1Payload() {
    return this._osPolicyAssignmentV1Payload;
  }
  public putOsPolicyAssignmentV1Payload(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOsPolicyAssignmentV1Payload) {
    this._osPolicyAssignmentV1Payload.internalValue = value;
  }
  public resetOsPolicyAssignmentV1Payload() {
    this._osPolicyAssignmentV1Payload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osPolicyAssignmentV1PayloadInput() {
    return this._osPolicyAssignmentV1Payload.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelector {
  /**
  * Optional. Names of the locations in scope.
  * Format: 'us-central1-a'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#included_locations OsConfigV2PolicyOrchestratorForOrganization#included_locations}
  */
  readonly includedLocations?: string[];
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_locations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedLocations),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    included_locations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedLocations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedLocations !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedLocations = this._includedLocations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedLocations = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedLocations = value.includedLocations;
    }
  }

  // included_locations - computed: false, optional: true, required: false
  private _includedLocations?: string[]; 
  public get includedLocations() {
    return this.getListAttribute('included_locations');
  }
  public set includedLocations(value: string[]) {
    this._includedLocations = value;
  }
  public resetIncludedLocations() {
    this._includedLocations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedLocationsInput() {
    return this._includedLocations;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelector {
  /**
  * Optional. Names of the folders in scope.
  * Format: 'folders/{folder_id}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#included_folders OsConfigV2PolicyOrchestratorForOrganization#included_folders}
  */
  readonly includedFolders?: string[];
  /**
  * Optional. Names of the projects in scope.
  * Format: 'projects/{project_number}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#included_projects OsConfigV2PolicyOrchestratorForOrganization#included_projects}
  */
  readonly includedProjects?: string[];
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included_folders: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedFolders),
    included_projects: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includedProjects),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    included_folders: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedFolders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    included_projects: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includedProjects),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._includedFolders !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedFolders = this._includedFolders;
    }
    if (this._includedProjects !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedProjects = this._includedProjects;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._includedFolders = undefined;
      this._includedProjects = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._includedFolders = value.includedFolders;
      this._includedProjects = value.includedProjects;
    }
  }

  // included_folders - computed: false, optional: true, required: false
  private _includedFolders?: string[]; 
  public get includedFolders() {
    return this.getListAttribute('included_folders');
  }
  public set includedFolders(value: string[]) {
    this._includedFolders = value;
  }
  public resetIncludedFolders() {
    this._includedFolders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedFoldersInput() {
    return this._includedFolders;
  }

  // included_projects - computed: false, optional: true, required: false
  private _includedProjects?: string[]; 
  public get includedProjects() {
    return this.getListAttribute('included_projects');
  }
  public set includedProjects(value: string[]) {
    this._includedProjects = value;
  }
  public resetIncludedProjects() {
    this._includedProjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedProjectsInput() {
    return this._includedProjects;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors {
  /**
  * location_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#location_selector OsConfigV2PolicyOrchestratorForOrganization#location_selector}
  */
  readonly locationSelector?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelector;
  /**
  * resource_hierarchy_selector block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#resource_hierarchy_selector OsConfigV2PolicyOrchestratorForOrganization#resource_hierarchy_selector}
  */
  readonly resourceHierarchySelector?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelector;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location_selector: osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorToTerraform(struct!.locationSelector),
    resource_hierarchy_selector: osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorToTerraform(struct!.resourceHierarchySelector),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location_selector: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorToHclTerraform(struct!.locationSelector),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorList",
    },
    resource_hierarchy_selector: {
      value: osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorToHclTerraform(struct!.resourceHierarchySelector),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locationSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locationSelector = this._locationSelector?.internalValue;
    }
    if (this._resourceHierarchySelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceHierarchySelector = this._resourceHierarchySelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locationSelector.internalValue = undefined;
      this._resourceHierarchySelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locationSelector.internalValue = value.locationSelector;
      this._resourceHierarchySelector.internalValue = value.resourceHierarchySelector;
    }
  }

  // location_selector - computed: false, optional: true, required: false
  private _locationSelector = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelectorOutputReference(this, "location_selector");
  public get locationSelector() {
    return this._locationSelector;
  }
  public putLocationSelector(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsLocationSelector) {
    this._locationSelector.internalValue = value;
  }
  public resetLocationSelector() {
    this._locationSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationSelectorInput() {
    return this._locationSelector.internalValue;
  }

  // resource_hierarchy_selector - computed: false, optional: true, required: false
  private _resourceHierarchySelector = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelectorOutputReference(this, "resource_hierarchy_selector");
  public get resourceHierarchySelector() {
    return this._resourceHierarchySelector;
  }
  public putResourceHierarchySelector(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsResourceHierarchySelector) {
    this._resourceHierarchySelector.internalValue = value;
  }
  public resetResourceHierarchySelector() {
    this._resourceHierarchySelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceHierarchySelectorInput() {
    return this._resourceHierarchySelector.internalValue;
  }
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsList extends cdktf.ComplexList {
  public internalValue? : OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors[] | cdktf.IResolvable

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
  public get(index: number): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsOutputReference {
    return new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScope {
  /**
  * selectors block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#selectors OsConfigV2PolicyOrchestratorForOrganization#selectors}
  */
  readonly selectors?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors[] | cdktf.IResolvable;
}

export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    selectors: cdktf.listMapper(osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsToTerraform, true)(struct!.selectors),
  }
}


export function osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeOutputReference | OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScope): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    selectors: {
      value: cdktf.listMapperHcl(osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsToHclTerraform, true)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScope | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScope | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._selectors.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._selectors.internalValue = value.selectors;
    }
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}
export interface OsConfigV2PolicyOrchestratorForOrganizationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#create OsConfigV2PolicyOrchestratorForOrganization#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#delete OsConfigV2PolicyOrchestratorForOrganization#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#update OsConfigV2PolicyOrchestratorForOrganization#update}
  */
  readonly update?: string;
}

export function osConfigV2PolicyOrchestratorForOrganizationTimeoutsToTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationTimeouts | cdktf.IResolvable): any {
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


export function osConfigV2PolicyOrchestratorForOrganizationTimeoutsToHclTerraform(struct?: OsConfigV2PolicyOrchestratorForOrganizationTimeouts | cdktf.IResolvable): any {
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

export class OsConfigV2PolicyOrchestratorForOrganizationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OsConfigV2PolicyOrchestratorForOrganizationTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OsConfigV2PolicyOrchestratorForOrganizationTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization google_os_config_v2_policy_orchestrator_for_organization}
*/
export class OsConfigV2PolicyOrchestratorForOrganization extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_os_config_v2_policy_orchestrator_for_organization";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsConfigV2PolicyOrchestratorForOrganization resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsConfigV2PolicyOrchestratorForOrganization to import
  * @param importFromId The id of the existing OsConfigV2PolicyOrchestratorForOrganization that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsConfigV2PolicyOrchestratorForOrganization to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_os_config_v2_policy_orchestrator_for_organization", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/os_config_v2_policy_orchestrator_for_organization google_os_config_v2_policy_orchestrator_for_organization} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsConfigV2PolicyOrchestratorForOrganizationConfig
  */
  public constructor(scope: Construct, id: string, config: OsConfigV2PolicyOrchestratorForOrganizationConfig) {
    super(scope, id, {
      terraformResourceType: 'google_os_config_v2_policy_orchestrator_for_organization',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.34.1',
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
    this._action = config.action;
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._organizationId = config.organizationId;
    this._policyOrchestratorId = config.policyOrchestratorId;
    this._state = config.state;
    this._orchestratedResource.internalValue = config.orchestratedResource;
    this._orchestrationScope.internalValue = config.orchestrationScope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // orchestration_state - computed: true, optional: false, required: false
  private _orchestrationState = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationStateList(this, "orchestration_state", false);
  public get orchestrationState() {
    return this._orchestrationState;
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // policy_orchestrator_id - computed: false, optional: false, required: true
  private _policyOrchestratorId?: string; 
  public get policyOrchestratorId() {
    return this.getStringAttribute('policy_orchestrator_id');
  }
  public set policyOrchestratorId(value: string) {
    this._policyOrchestratorId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyOrchestratorIdInput() {
    return this._policyOrchestratorId;
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // orchestrated_resource - computed: false, optional: false, required: true
  private _orchestratedResource = new OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceOutputReference(this, "orchestrated_resource");
  public get orchestratedResource() {
    return this._orchestratedResource;
  }
  public putOrchestratedResource(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResource) {
    this._orchestratedResource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestratedResourceInput() {
    return this._orchestratedResource.internalValue;
  }

  // orchestration_scope - computed: false, optional: true, required: false
  private _orchestrationScope = new OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeOutputReference(this, "orchestration_scope");
  public get orchestrationScope() {
    return this._orchestrationScope;
  }
  public putOrchestrationScope(value: OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScope) {
    this._orchestrationScope.internalValue = value;
  }
  public resetOrchestrationScope() {
    this._orchestrationScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orchestrationScopeInput() {
    return this._orchestrationScope.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OsConfigV2PolicyOrchestratorForOrganizationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OsConfigV2PolicyOrchestratorForOrganizationTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      policy_orchestrator_id: cdktf.stringToTerraform(this._policyOrchestratorId),
      state: cdktf.stringToTerraform(this._state),
      orchestrated_resource: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceToTerraform(this._orchestratedResource.internalValue),
      orchestration_scope: osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeToTerraform(this._orchestrationScope.internalValue),
      timeouts: osConfigV2PolicyOrchestratorForOrganizationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_orchestrator_id: {
        value: cdktf.stringToHclTerraform(this._policyOrchestratorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orchestrated_resource: {
        value: osConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceToHclTerraform(this._orchestratedResource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestratedResourceList",
      },
      orchestration_scope: {
        value: osConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeToHclTerraform(this._orchestrationScope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationOrchestrationScopeList",
      },
      timeouts: {
        value: osConfigV2PolicyOrchestratorForOrganizationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OsConfigV2PolicyOrchestratorForOrganizationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
