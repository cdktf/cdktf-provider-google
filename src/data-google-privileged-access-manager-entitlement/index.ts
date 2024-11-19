/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGooglePrivilegedAccessManagerEntitlementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for this Entitlement. This will become the last part of the resource name.
  * This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
  * This value should be unique among all other Entitlements under the specified 'parent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement#entitlement_id DataGooglePrivilegedAccessManagerEntitlement#entitlement_id}
  */
  readonly entitlementId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement#id DataGooglePrivilegedAccessManagerEntitlement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region of the Entitlement resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement#location DataGooglePrivilegedAccessManagerEntitlement#location}
  */
  readonly location?: string;
  /**
  * Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement#parent DataGooglePrivilegedAccessManagerEntitlement#parent}
  */
  readonly parent?: string;
}
export interface DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets {
}

export function dataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin_email_recipients - computed: true, optional: false, required: false
  public get adminEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_email_recipients'));
  }

  // requester_email_recipients - computed: true, optional: false, required: false
  public get requesterEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('requester_email_recipients'));
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers {
}

export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps {
}

export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // approvals_needed - computed: true, optional: false, required: false
  public get approvalsNeeded() {
    return this.getNumberAttribute('approvals_needed');
  }

  // approver_email_recipients - computed: true, optional: false, required: false
  public get approverEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('approver_email_recipients'));
  }

  // approvers - computed: true, optional: false, required: false
  private _approvers = new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList(this, "approvers", false);
  public get approvers() {
    return this._approvers;
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals {
}

export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // require_approver_justification - computed: true, optional: false, required: false
  public get requireApproverJustification() {
    return this.getBooleanAttribute('require_approver_justification');
  }

  // steps - computed: true, optional: false, required: false
  private _steps = new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow {
}

export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // manual_approvals - computed: true, optional: false, required: false
  private _manualApprovals = new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList(this, "manual_approvals", false);
  public get manualApprovals() {
    return this._manualApprovals;
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementEligibleUsers {
}

export function dataGooglePrivilegedAccessManagerEntitlementEligibleUsersToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementEligibleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementEligibleUsersToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementEligibleUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementEligibleUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementEligibleUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // principals - computed: true, optional: false, required: false
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementEligibleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings {
}

export function dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition_expression - computed: true, optional: false, required: false
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess {
}

export function dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource - computed: true, optional: false, required: false
  public get resource() {
    return this.getStringAttribute('resource');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // role_bindings - computed: true, optional: false, required: false
  private _roleBindings = new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess {
}

export function dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // gcp_iam_access - computed: true, optional: false, required: false
  private _gcpIamAccess = new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList(this, "gcp_iam_access", false);
  public get gcpIamAccess() {
    return this._gcpIamAccess;
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory {
}

export function dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured {
}

export function dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig {
}

export function dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigToTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigToHclTerraform(struct?: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // not_mandatory - computed: true, optional: false, required: false
  private _notMandatory = new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList(this, "not_mandatory", false);
  public get notMandatory() {
    return this._notMandatory;
  }

  // unstructured - computed: true, optional: false, required: false
  private _unstructured = new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList(this, "unstructured", false);
  public get unstructured() {
    return this._unstructured;
  }
}

export class DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference {
    return new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement google_privileged_access_manager_entitlement}
*/
export class DataGooglePrivilegedAccessManagerEntitlement extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privileged_access_manager_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGooglePrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGooglePrivilegedAccessManagerEntitlement to import
  * @param importFromId The id of the existing DataGooglePrivilegedAccessManagerEntitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGooglePrivilegedAccessManagerEntitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_privileged_access_manager_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.12.0/docs/data-sources/privileged_access_manager_entitlement google_privileged_access_manager_entitlement} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGooglePrivilegedAccessManagerEntitlementConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGooglePrivilegedAccessManagerEntitlementConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_privileged_access_manager_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.12.0',
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
    this._entitlementId = config.entitlementId;
    this._id = config.id;
    this._location = config.location;
    this._parent = config.parent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_notification_targets - computed: true, optional: false, required: false
  private _additionalNotificationTargets = new DataGooglePrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList(this, "additional_notification_targets", false);
  public get additionalNotificationTargets() {
    return this._additionalNotificationTargets;
  }

  // approval_workflow - computed: true, optional: false, required: false
  private _approvalWorkflow = new DataGooglePrivilegedAccessManagerEntitlementApprovalWorkflowList(this, "approval_workflow", false);
  public get approvalWorkflow() {
    return this._approvalWorkflow;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // eligible_users - computed: true, optional: false, required: false
  private _eligibleUsers = new DataGooglePrivilegedAccessManagerEntitlementEligibleUsersList(this, "eligible_users", false);
  public get eligibleUsers() {
    return this._eligibleUsers;
  }

  // entitlement_id - computed: false, optional: true, required: false
  private _entitlementId?: string; 
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }
  public set entitlementId(value: string) {
    this._entitlementId = value;
  }
  public resetEntitlementId() {
    this._entitlementId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementIdInput() {
    return this._entitlementId;
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

  // max_request_duration - computed: true, optional: false, required: false
  public get maxRequestDuration() {
    return this.getStringAttribute('max_request_duration');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // privileged_access - computed: true, optional: false, required: false
  private _privilegedAccess = new DataGooglePrivilegedAccessManagerEntitlementPrivilegedAccessList(this, "privileged_access", false);
  public get privilegedAccess() {
    return this._privilegedAccess;
  }

  // requester_justification_config - computed: true, optional: false, required: false
  private _requesterJustificationConfig = new DataGooglePrivilegedAccessManagerEntitlementRequesterJustificationConfigList(this, "requester_justification_config", false);
  public get requesterJustificationConfig() {
    return this._requesterJustificationConfig;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      entitlement_id: cdktf.stringToTerraform(this._entitlementId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      entitlement_id: {
        value: cdktf.stringToHclTerraform(this._entitlementId),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
