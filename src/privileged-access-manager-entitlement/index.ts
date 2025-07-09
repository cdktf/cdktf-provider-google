/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivilegedAccessManagerEntitlementConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID to use for this Entitlement. This will become the last part of the resource name.
  * This value should be 4-63 characters, and valid characters are "[a-z]", "[0-9]", and "-". The first character should be from [a-z].
  * This value should be unique among all other Entitlements under the specified 'parent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#entitlement_id PrivilegedAccessManagerEntitlement#entitlement_id}
  */
  readonly entitlementId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#id PrivilegedAccessManagerEntitlement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The region of the Entitlement resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#location PrivilegedAccessManagerEntitlement#location}
  */
  readonly location: string;
  /**
  * The maximum amount of time for which access would be granted for a request.
  * A requester can choose to ask for access for less than this duration but never more.
  * Format: calculate the time in seconds and concatenate it with 's' i.e. 2 hours = "7200s", 45 minutes = "2700s"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#max_request_duration PrivilegedAccessManagerEntitlement#max_request_duration}
  */
  readonly maxRequestDuration: string;
  /**
  * Format: projects/{project-id|project-number} or organizations/{organization-number} or folders/{folder-number}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#parent PrivilegedAccessManagerEntitlement#parent}
  */
  readonly parent: string;
  /**
  * additional_notification_targets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#additional_notification_targets PrivilegedAccessManagerEntitlement#additional_notification_targets}
  */
  readonly additionalNotificationTargets?: PrivilegedAccessManagerEntitlementAdditionalNotificationTargets;
  /**
  * approval_workflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#approval_workflow PrivilegedAccessManagerEntitlement#approval_workflow}
  */
  readonly approvalWorkflow?: PrivilegedAccessManagerEntitlementApprovalWorkflow;
  /**
  * eligible_users block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#eligible_users PrivilegedAccessManagerEntitlement#eligible_users}
  */
  readonly eligibleUsers: PrivilegedAccessManagerEntitlementEligibleUsers[] | cdktf.IResolvable;
  /**
  * privileged_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#privileged_access PrivilegedAccessManagerEntitlement#privileged_access}
  */
  readonly privilegedAccess: PrivilegedAccessManagerEntitlementPrivilegedAccess;
  /**
  * requester_justification_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#requester_justification_config PrivilegedAccessManagerEntitlement#requester_justification_config}
  */
  readonly requesterJustificationConfig: PrivilegedAccessManagerEntitlementRequesterJustificationConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#timeouts PrivilegedAccessManagerEntitlement#timeouts}
  */
  readonly timeouts?: PrivilegedAccessManagerEntitlementTimeouts;
}
export interface PrivilegedAccessManagerEntitlementAdditionalNotificationTargets {
  /**
  * Optional. Additional email addresses to be notified when a principal(requester) is granted access.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#admin_email_recipients PrivilegedAccessManagerEntitlement#admin_email_recipients}
  */
  readonly adminEmailRecipients?: string[];
  /**
  * Optional. Additional email address to be notified about an eligible entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#requester_email_recipients PrivilegedAccessManagerEntitlement#requester_email_recipients}
  */
  readonly requesterEmailRecipients?: string[];
}

export function privilegedAccessManagerEntitlementAdditionalNotificationTargetsToTerraform(struct?: PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference | PrivilegedAccessManagerEntitlementAdditionalNotificationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.adminEmailRecipients),
    requester_email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requesterEmailRecipients),
  }
}


export function privilegedAccessManagerEntitlementAdditionalNotificationTargetsToHclTerraform(struct?: PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference | PrivilegedAccessManagerEntitlementAdditionalNotificationTargets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_email_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.adminEmailRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    requester_email_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requesterEmailRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementAdditionalNotificationTargets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminEmailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminEmailRecipients = this._adminEmailRecipients;
    }
    if (this._requesterEmailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.requesterEmailRecipients = this._requesterEmailRecipients;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementAdditionalNotificationTargets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminEmailRecipients = undefined;
      this._requesterEmailRecipients = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminEmailRecipients = value.adminEmailRecipients;
      this._requesterEmailRecipients = value.requesterEmailRecipients;
    }
  }

  // admin_email_recipients - computed: false, optional: true, required: false
  private _adminEmailRecipients?: string[]; 
  public get adminEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('admin_email_recipients'));
  }
  public set adminEmailRecipients(value: string[]) {
    this._adminEmailRecipients = value;
  }
  public resetAdminEmailRecipients() {
    this._adminEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminEmailRecipientsInput() {
    return this._adminEmailRecipients;
  }

  // requester_email_recipients - computed: false, optional: true, required: false
  private _requesterEmailRecipients?: string[]; 
  public get requesterEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('requester_email_recipients'));
  }
  public set requesterEmailRecipients(value: string[]) {
    this._requesterEmailRecipients = value;
  }
  public resetRequesterEmailRecipients() {
    this._requesterEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterEmailRecipientsInput() {
    return this._requesterEmailRecipients;
  }
}
export interface PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers {
  /**
  * Users who are being allowed for the operation. Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at: https://cloud.google.com/iam/docs/principal-identifiers#v1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#principals PrivilegedAccessManagerEntitlement#principals}
  */
  readonly principals: string[];
}

export function privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
  }
}


export function privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToHclTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._principals = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._principals = value.principals;
    }
  }

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }
}
export interface PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps {
  /**
  * How many users from the above list need to approve.
  * If there are not enough distinct users in the list above then the workflow
  * will indefinitely block. Should always be greater than 0. Currently 1 is the only
  * supported value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#approvals_needed PrivilegedAccessManagerEntitlement#approvals_needed}
  */
  readonly approvalsNeeded?: number;
  /**
  * Optional. Additional email addresses to be notified when a grant is pending approval.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#approver_email_recipients PrivilegedAccessManagerEntitlement#approver_email_recipients}
  */
  readonly approverEmailRecipients?: string[];
  /**
  * approvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#approvers PrivilegedAccessManagerEntitlement#approvers}
  */
  readonly approvers: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers;
}

export function privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    approvals_needed: cdktf.numberToTerraform(struct!.approvalsNeeded),
    approver_email_recipients: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.approverEmailRecipients),
    approvers: privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToTerraform(struct!.approvers),
  }
}


export function privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToHclTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    approvals_needed: {
      value: cdktf.numberToHclTerraform(struct!.approvalsNeeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    approver_email_recipients: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.approverEmailRecipients),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    approvers: {
      value: privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversToHclTerraform(struct!.approvers),
      isBlock: true,
      type: "list",
      storageClassType: "PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._approvalsNeeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvalsNeeded = this._approvalsNeeded;
    }
    if (this._approverEmailRecipients !== undefined) {
      hasAnyValues = true;
      internalValueResult.approverEmailRecipients = this._approverEmailRecipients;
    }
    if (this._approvers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.approvers = this._approvers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._approvalsNeeded = undefined;
      this._approverEmailRecipients = undefined;
      this._approvers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._approvalsNeeded = value.approvalsNeeded;
      this._approverEmailRecipients = value.approverEmailRecipients;
      this._approvers.internalValue = value.approvers;
    }
  }

  // approvals_needed - computed: false, optional: true, required: false
  private _approvalsNeeded?: number; 
  public get approvalsNeeded() {
    return this.getNumberAttribute('approvals_needed');
  }
  public set approvalsNeeded(value: number) {
    this._approvalsNeeded = value;
  }
  public resetApprovalsNeeded() {
    this._approvalsNeeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalsNeededInput() {
    return this._approvalsNeeded;
  }

  // approver_email_recipients - computed: false, optional: true, required: false
  private _approverEmailRecipients?: string[]; 
  public get approverEmailRecipients() {
    return cdktf.Fn.tolist(this.getListAttribute('approver_email_recipients'));
  }
  public set approverEmailRecipients(value: string[]) {
    this._approverEmailRecipients = value;
  }
  public resetApproverEmailRecipients() {
    this._approverEmailRecipients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approverEmailRecipientsInput() {
    return this._approverEmailRecipients;
  }

  // approvers - computed: false, optional: false, required: true
  private _approvers = new PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApproversOutputReference(this, "approvers");
  public get approvers() {
    return this._approvers;
  }
  public putApprovers(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsApprovers) {
    this._approvers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get approversInput() {
    return this._approvers.internalValue;
  }
}

export class PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList extends cdktf.ComplexList {
  public internalValue? : PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[] | cdktf.IResolvable

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
  public get(index: number): PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference {
    return new PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals {
  /**
  * Optional. Do the approvers need to provide a justification for their actions?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#require_approver_justification PrivilegedAccessManagerEntitlement#require_approver_justification}
  */
  readonly requireApproverJustification?: boolean | cdktf.IResolvable;
  /**
  * steps block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#steps PrivilegedAccessManagerEntitlement#steps}
  */
  readonly steps: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[] | cdktf.IResolvable;
}

export function privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_approver_justification: cdktf.booleanToTerraform(struct!.requireApproverJustification),
    steps: cdktf.listMapper(privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToTerraform, true)(struct!.steps),
  }
}


export function privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToHclTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference | PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_approver_justification: {
      value: cdktf.booleanToHclTerraform(struct!.requireApproverJustification),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    steps: {
      value: cdktf.listMapperHcl(privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsToHclTerraform, true)(struct!.steps),
      isBlock: true,
      type: "list",
      storageClassType: "PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireApproverJustification !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireApproverJustification = this._requireApproverJustification;
    }
    if (this._steps?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.steps = this._steps?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requireApproverJustification = undefined;
      this._steps.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requireApproverJustification = value.requireApproverJustification;
      this._steps.internalValue = value.steps;
    }
  }

  // require_approver_justification - computed: false, optional: true, required: false
  private _requireApproverJustification?: boolean | cdktf.IResolvable; 
  public get requireApproverJustification() {
    return this.getBooleanAttribute('require_approver_justification');
  }
  public set requireApproverJustification(value: boolean | cdktf.IResolvable) {
    this._requireApproverJustification = value;
  }
  public resetRequireApproverJustification() {
    this._requireApproverJustification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireApproverJustificationInput() {
    return this._requireApproverJustification;
  }

  // steps - computed: false, optional: false, required: true
  private _steps = new PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }
}
export interface PrivilegedAccessManagerEntitlementApprovalWorkflow {
  /**
  * manual_approvals block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#manual_approvals PrivilegedAccessManagerEntitlement#manual_approvals}
  */
  readonly manualApprovals: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals;
}

export function privilegedAccessManagerEntitlementApprovalWorkflowToTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference | PrivilegedAccessManagerEntitlementApprovalWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual_approvals: privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToTerraform(struct!.manualApprovals),
  }
}


export function privilegedAccessManagerEntitlementApprovalWorkflowToHclTerraform(struct?: PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference | PrivilegedAccessManagerEntitlementApprovalWorkflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual_approvals: {
      value: privilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsToHclTerraform(struct!.manualApprovals),
      isBlock: true,
      type: "list",
      storageClassType: "PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementApprovalWorkflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manualApprovals?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualApprovals = this._manualApprovals?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementApprovalWorkflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._manualApprovals.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._manualApprovals.internalValue = value.manualApprovals;
    }
  }

  // manual_approvals - computed: false, optional: false, required: true
  private _manualApprovals = new PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovalsOutputReference(this, "manual_approvals");
  public get manualApprovals() {
    return this._manualApprovals;
  }
  public putManualApprovals(value: PrivilegedAccessManagerEntitlementApprovalWorkflowManualApprovals) {
    this._manualApprovals.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get manualApprovalsInput() {
    return this._manualApprovals.internalValue;
  }
}
export interface PrivilegedAccessManagerEntitlementEligibleUsers {
  /**
  * Users who are being allowed for the operation. Each entry should be a valid v1 IAM Principal Identifier. Format for these is documented at "https://cloud.google.com/iam/docs/principal-identifiers#v1"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#principals PrivilegedAccessManagerEntitlement#principals}
  */
  readonly principals: string[];
}

export function privilegedAccessManagerEntitlementEligibleUsersToTerraform(struct?: PrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    principals: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.principals),
  }
}


export function privilegedAccessManagerEntitlementEligibleUsersToHclTerraform(struct?: PrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    principals: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.principals),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementEligibleUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._principals !== undefined) {
      hasAnyValues = true;
      internalValueResult.principals = this._principals;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementEligibleUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._principals = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._principals = value.principals;
    }
  }

  // principals - computed: false, optional: false, required: true
  private _principals?: string[]; 
  public get principals() {
    return cdktf.Fn.tolist(this.getListAttribute('principals'));
  }
  public set principals(value: string[]) {
    this._principals = value;
  }
  // Temporarily expose input value. Use with caution.
  public get principalsInput() {
    return this._principals;
  }
}

export class PrivilegedAccessManagerEntitlementEligibleUsersList extends cdktf.ComplexList {
  public internalValue? : PrivilegedAccessManagerEntitlementEligibleUsers[] | cdktf.IResolvable

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
  public get(index: number): PrivilegedAccessManagerEntitlementEligibleUsersOutputReference {
    return new PrivilegedAccessManagerEntitlementEligibleUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings {
  /**
  * The expression field of the IAM condition to be associated with the role. If specified, a user with an active grant for this entitlement would be able to access the resource only if this condition evaluates to true for their request.
  * https://cloud.google.com/iam/docs/conditions-overview#attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#condition_expression PrivilegedAccessManagerEntitlement#condition_expression}
  */
  readonly conditionExpression?: string;
  /**
  * IAM role to be granted. https://cloud.google.com/iam/docs/roles-overview.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#role PrivilegedAccessManagerEntitlement#role}
  */
  readonly role: string;
}

export function privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToTerraform(struct?: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition_expression: cdktf.stringToTerraform(struct!.conditionExpression),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToHclTerraform(struct?: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition_expression: {
      value: cdktf.stringToHclTerraform(struct!.conditionExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._conditionExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditionExpression = this._conditionExpression;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._conditionExpression = undefined;
      this._role = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._conditionExpression = value.conditionExpression;
      this._role = value.role;
    }
  }

  // condition_expression - computed: false, optional: true, required: false
  private _conditionExpression?: string; 
  public get conditionExpression() {
    return this.getStringAttribute('condition_expression');
  }
  public set conditionExpression(value: string) {
    this._conditionExpression = value;
  }
  public resetConditionExpression() {
    this._conditionExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionExpressionInput() {
    return this._conditionExpression;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}

export class PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList extends cdktf.ComplexList {
  public internalValue? : PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[] | cdktf.IResolvable

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
  public get(index: number): PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference {
    return new PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess {
  /**
  * Name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#resource PrivilegedAccessManagerEntitlement#resource}
  */
  readonly resource: string;
  /**
  * The type of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#resource_type PrivilegedAccessManagerEntitlement#resource_type}
  */
  readonly resourceType: string;
  /**
  * role_bindings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#role_bindings PrivilegedAccessManagerEntitlement#role_bindings}
  */
  readonly roleBindings: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[] | cdktf.IResolvable;
}

export function privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToTerraform(struct?: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference | PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource: cdktf.stringToTerraform(struct!.resource),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
    role_bindings: cdktf.listMapper(privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToTerraform, true)(struct!.roleBindings),
  }
}


export function privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToHclTerraform(struct?: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference | PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_type: {
      value: cdktf.stringToHclTerraform(struct!.resourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role_bindings: {
      value: cdktf.listMapperHcl(privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsToHclTerraform, true)(struct!.roleBindings),
      isBlock: true,
      type: "list",
      storageClassType: "PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    if (this._roleBindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roleBindings = this._roleBindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resource = undefined;
      this._resourceType = undefined;
      this._roleBindings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resource = value.resource;
      this._resourceType = value.resourceType;
      this._roleBindings.internalValue = value.roleBindings;
    }
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // role_bindings - computed: false, optional: false, required: true
  private _roleBindings = new PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindingsList(this, "role_bindings", false);
  public get roleBindings() {
    return this._roleBindings;
  }
  public putRoleBindings(value: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessRoleBindings[] | cdktf.IResolvable) {
    this._roleBindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBindingsInput() {
    return this._roleBindings.internalValue;
  }
}
export interface PrivilegedAccessManagerEntitlementPrivilegedAccess {
  /**
  * gcp_iam_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#gcp_iam_access PrivilegedAccessManagerEntitlement#gcp_iam_access}
  */
  readonly gcpIamAccess: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess;
}

export function privilegedAccessManagerEntitlementPrivilegedAccessToTerraform(struct?: PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference | PrivilegedAccessManagerEntitlementPrivilegedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_iam_access: privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToTerraform(struct!.gcpIamAccess),
  }
}


export function privilegedAccessManagerEntitlementPrivilegedAccessToHclTerraform(struct?: PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference | PrivilegedAccessManagerEntitlementPrivilegedAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_iam_access: {
      value: privilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessToHclTerraform(struct!.gcpIamAccess),
      isBlock: true,
      type: "list",
      storageClassType: "PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementPrivilegedAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpIamAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpIamAccess = this._gcpIamAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementPrivilegedAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpIamAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpIamAccess.internalValue = value.gcpIamAccess;
    }
  }

  // gcp_iam_access - computed: false, optional: false, required: true
  private _gcpIamAccess = new PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccessOutputReference(this, "gcp_iam_access");
  public get gcpIamAccess() {
    return this._gcpIamAccess;
  }
  public putGcpIamAccess(value: PrivilegedAccessManagerEntitlementPrivilegedAccessGcpIamAccess) {
    this._gcpIamAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpIamAccessInput() {
    return this._gcpIamAccess.internalValue;
  }
}
export interface PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory {
}

export function privilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToTerraform(struct?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference | PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function privilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToHclTerraform(struct?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference | PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured {
}

export function privilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToTerraform(struct?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference | PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function privilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToHclTerraform(struct?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference | PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface PrivilegedAccessManagerEntitlementRequesterJustificationConfig {
  /**
  * not_mandatory block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#not_mandatory PrivilegedAccessManagerEntitlement#not_mandatory}
  */
  readonly notMandatory?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory;
  /**
  * unstructured block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#unstructured PrivilegedAccessManagerEntitlement#unstructured}
  */
  readonly unstructured?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured;
}

export function privilegedAccessManagerEntitlementRequesterJustificationConfigToTerraform(struct?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference | PrivilegedAccessManagerEntitlementRequesterJustificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    not_mandatory: privilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToTerraform(struct!.notMandatory),
    unstructured: privilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToTerraform(struct!.unstructured),
  }
}


export function privilegedAccessManagerEntitlementRequesterJustificationConfigToHclTerraform(struct?: PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference | PrivilegedAccessManagerEntitlementRequesterJustificationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    not_mandatory: {
      value: privilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryToHclTerraform(struct!.notMandatory),
      isBlock: true,
      type: "list",
      storageClassType: "PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryList",
    },
    unstructured: {
      value: privilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredToHclTerraform(struct!.unstructured),
      isBlock: true,
      type: "list",
      storageClassType: "PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementRequesterJustificationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notMandatory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notMandatory = this._notMandatory?.internalValue;
    }
    if (this._unstructured?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unstructured = this._unstructured?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notMandatory.internalValue = undefined;
      this._unstructured.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notMandatory.internalValue = value.notMandatory;
      this._unstructured.internalValue = value.unstructured;
    }
  }

  // not_mandatory - computed: false, optional: true, required: false
  private _notMandatory = new PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatoryOutputReference(this, "not_mandatory");
  public get notMandatory() {
    return this._notMandatory;
  }
  public putNotMandatory(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfigNotMandatory) {
    this._notMandatory.internalValue = value;
  }
  public resetNotMandatory() {
    this._notMandatory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMandatoryInput() {
    return this._notMandatory.internalValue;
  }

  // unstructured - computed: false, optional: true, required: false
  private _unstructured = new PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructuredOutputReference(this, "unstructured");
  public get unstructured() {
    return this._unstructured;
  }
  public putUnstructured(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfigUnstructured) {
    this._unstructured.internalValue = value;
  }
  public resetUnstructured() {
    this._unstructured.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unstructuredInput() {
    return this._unstructured.internalValue;
  }
}
export interface PrivilegedAccessManagerEntitlementTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#create PrivilegedAccessManagerEntitlement#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#delete PrivilegedAccessManagerEntitlement#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#update PrivilegedAccessManagerEntitlement#update}
  */
  readonly update?: string;
}

export function privilegedAccessManagerEntitlementTimeoutsToTerraform(struct?: PrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable): any {
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


export function privilegedAccessManagerEntitlementTimeoutsToHclTerraform(struct?: PrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable): any {
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

export class PrivilegedAccessManagerEntitlementTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivilegedAccessManagerEntitlementTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement google_privileged_access_manager_entitlement}
*/
export class PrivilegedAccessManagerEntitlement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privileged_access_manager_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivilegedAccessManagerEntitlement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivilegedAccessManagerEntitlement to import
  * @param importFromId The id of the existing PrivilegedAccessManagerEntitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivilegedAccessManagerEntitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_privileged_access_manager_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/privileged_access_manager_entitlement google_privileged_access_manager_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivilegedAccessManagerEntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: PrivilegedAccessManagerEntitlementConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privileged_access_manager_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.43.0',
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
    this._maxRequestDuration = config.maxRequestDuration;
    this._parent = config.parent;
    this._additionalNotificationTargets.internalValue = config.additionalNotificationTargets;
    this._approvalWorkflow.internalValue = config.approvalWorkflow;
    this._eligibleUsers.internalValue = config.eligibleUsers;
    this._privilegedAccess.internalValue = config.privilegedAccess;
    this._requesterJustificationConfig.internalValue = config.requesterJustificationConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // entitlement_id - computed: false, optional: false, required: true
  private _entitlementId?: string; 
  public get entitlementId() {
    return this.getStringAttribute('entitlement_id');
  }
  public set entitlementId(value: string) {
    this._entitlementId = value;
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

  // max_request_duration - computed: false, optional: false, required: true
  private _maxRequestDuration?: string; 
  public get maxRequestDuration() {
    return this.getStringAttribute('max_request_duration');
  }
  public set maxRequestDuration(value: string) {
    this._maxRequestDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRequestDurationInput() {
    return this._maxRequestDuration;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // additional_notification_targets - computed: false, optional: true, required: false
  private _additionalNotificationTargets = new PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsOutputReference(this, "additional_notification_targets");
  public get additionalNotificationTargets() {
    return this._additionalNotificationTargets;
  }
  public putAdditionalNotificationTargets(value: PrivilegedAccessManagerEntitlementAdditionalNotificationTargets) {
    this._additionalNotificationTargets.internalValue = value;
  }
  public resetAdditionalNotificationTargets() {
    this._additionalNotificationTargets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalNotificationTargetsInput() {
    return this._additionalNotificationTargets.internalValue;
  }

  // approval_workflow - computed: false, optional: true, required: false
  private _approvalWorkflow = new PrivilegedAccessManagerEntitlementApprovalWorkflowOutputReference(this, "approval_workflow");
  public get approvalWorkflow() {
    return this._approvalWorkflow;
  }
  public putApprovalWorkflow(value: PrivilegedAccessManagerEntitlementApprovalWorkflow) {
    this._approvalWorkflow.internalValue = value;
  }
  public resetApprovalWorkflow() {
    this._approvalWorkflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvalWorkflowInput() {
    return this._approvalWorkflow.internalValue;
  }

  // eligible_users - computed: false, optional: false, required: true
  private _eligibleUsers = new PrivilegedAccessManagerEntitlementEligibleUsersList(this, "eligible_users", false);
  public get eligibleUsers() {
    return this._eligibleUsers;
  }
  public putEligibleUsers(value: PrivilegedAccessManagerEntitlementEligibleUsers[] | cdktf.IResolvable) {
    this._eligibleUsers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eligibleUsersInput() {
    return this._eligibleUsers.internalValue;
  }

  // privileged_access - computed: false, optional: false, required: true
  private _privilegedAccess = new PrivilegedAccessManagerEntitlementPrivilegedAccessOutputReference(this, "privileged_access");
  public get privilegedAccess() {
    return this._privilegedAccess;
  }
  public putPrivilegedAccess(value: PrivilegedAccessManagerEntitlementPrivilegedAccess) {
    this._privilegedAccess.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privilegedAccessInput() {
    return this._privilegedAccess.internalValue;
  }

  // requester_justification_config - computed: false, optional: false, required: true
  private _requesterJustificationConfig = new PrivilegedAccessManagerEntitlementRequesterJustificationConfigOutputReference(this, "requester_justification_config");
  public get requesterJustificationConfig() {
    return this._requesterJustificationConfig;
  }
  public putRequesterJustificationConfig(value: PrivilegedAccessManagerEntitlementRequesterJustificationConfig) {
    this._requesterJustificationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requesterJustificationConfigInput() {
    return this._requesterJustificationConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivilegedAccessManagerEntitlementTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivilegedAccessManagerEntitlementTimeouts) {
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
      entitlement_id: cdktf.stringToTerraform(this._entitlementId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      max_request_duration: cdktf.stringToTerraform(this._maxRequestDuration),
      parent: cdktf.stringToTerraform(this._parent),
      additional_notification_targets: privilegedAccessManagerEntitlementAdditionalNotificationTargetsToTerraform(this._additionalNotificationTargets.internalValue),
      approval_workflow: privilegedAccessManagerEntitlementApprovalWorkflowToTerraform(this._approvalWorkflow.internalValue),
      eligible_users: cdktf.listMapper(privilegedAccessManagerEntitlementEligibleUsersToTerraform, true)(this._eligibleUsers.internalValue),
      privileged_access: privilegedAccessManagerEntitlementPrivilegedAccessToTerraform(this._privilegedAccess.internalValue),
      requester_justification_config: privilegedAccessManagerEntitlementRequesterJustificationConfigToTerraform(this._requesterJustificationConfig.internalValue),
      timeouts: privilegedAccessManagerEntitlementTimeoutsToTerraform(this._timeouts.internalValue),
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
      max_request_duration: {
        value: cdktf.stringToHclTerraform(this._maxRequestDuration),
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
      additional_notification_targets: {
        value: privilegedAccessManagerEntitlementAdditionalNotificationTargetsToHclTerraform(this._additionalNotificationTargets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivilegedAccessManagerEntitlementAdditionalNotificationTargetsList",
      },
      approval_workflow: {
        value: privilegedAccessManagerEntitlementApprovalWorkflowToHclTerraform(this._approvalWorkflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivilegedAccessManagerEntitlementApprovalWorkflowList",
      },
      eligible_users: {
        value: cdktf.listMapperHcl(privilegedAccessManagerEntitlementEligibleUsersToHclTerraform, true)(this._eligibleUsers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivilegedAccessManagerEntitlementEligibleUsersList",
      },
      privileged_access: {
        value: privilegedAccessManagerEntitlementPrivilegedAccessToHclTerraform(this._privilegedAccess.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivilegedAccessManagerEntitlementPrivilegedAccessList",
      },
      requester_justification_config: {
        value: privilegedAccessManagerEntitlementRequesterJustificationConfigToHclTerraform(this._requesterJustificationConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PrivilegedAccessManagerEntitlementRequesterJustificationConfigList",
      },
      timeouts: {
        value: privilegedAccessManagerEntitlementTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PrivilegedAccessManagerEntitlementTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
