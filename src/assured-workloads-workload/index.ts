/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssuredWorkloadsWorkloadConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Input only. The billing account used for the resources which are direct children of workload. This billing account is initially associated with the resources created as part of Workload creation. After the initial creation of these resources, the customer can change the assigned billing account. The resource name has the form `billingAccounts/{billing_account_id}`. For example, `billingAccounts/012345-567890-ABCDEF`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#billing_account AssuredWorkloadsWorkload#billing_account}
  */
  readonly billingAccount?: string;
  /**
  * Required. Immutable. Compliance Regime associated with this workload. Possible values: COMPLIANCE_REGIME_UNSPECIFIED, IL4, CJIS, FEDRAMP_HIGH, FEDRAMP_MODERATE, US_REGIONAL_ACCESS, HIPAA, HITRUST, EU_REGIONS_AND_SUPPORT, CA_REGIONS_AND_SUPPORT, ITAR, AU_REGIONS_AND_US_SUPPORT, ASSURED_WORKLOADS_FOR_PARTNERS, ISR_REGIONS, ISR_REGIONS_AND_SUPPORT, CA_PROTECTED_B, IL5, IL2, JP_REGIONS_AND_SUPPORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#compliance_regime AssuredWorkloadsWorkload#compliance_regime}
  */
  readonly complianceRegime: string;
  /**
  * Required. The user-assigned display name of the Workload. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, and spaces. Example: My Workload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}
  */
  readonly displayName: string;
  /**
  * Optional. Indicates the sovereignty status of the given workload. Currently meant to be used by Europe/Canada customers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#enable_sovereign_controls AssuredWorkloadsWorkload#enable_sovereign_controls}
  */
  readonly enableSovereignControls?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#id AssuredWorkloadsWorkload#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels applied to the workload.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field `effective_labels` for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#labels AssuredWorkloadsWorkload#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#location AssuredWorkloadsWorkload#location}
  */
  readonly location: string;
  /**
  * The organization for the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#organization AssuredWorkloadsWorkload#organization}
  */
  readonly organization: string;
  /**
  * Optional. Partner regime associated with this workload. Possible values: PARTNER_UNSPECIFIED, LOCAL_CONTROLS_BY_S3NS, SOVEREIGN_CONTROLS_BY_T_SYSTEMS, SOVEREIGN_CONTROLS_BY_SIA_MINSAIT, SOVEREIGN_CONTROLS_BY_PSN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#partner AssuredWorkloadsWorkload#partner}
  */
  readonly partner?: string;
  /**
  * Input only. The parent resource for the resources managed by this Assured Workload. May be either empty or a folder resource which is a child of the Workload parent. If not specified all resources are created under the parent organization. Format: folders/{folder_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#provisioned_resources_parent AssuredWorkloadsWorkload#provisioned_resources_parent}
  */
  readonly provisionedResourcesParent?: string;
  /**
  * Optional. Indicates whether the e-mail notification for a violation is enabled for a workload. This value will be by default True, and if not present will be considered as true. This should only be updated via updateWorkload call. Any Changes to this field during the createWorkload call will not be honored. This will always be true while creating the workload.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#violation_notifications_enabled AssuredWorkloadsWorkload#violation_notifications_enabled}
  */
  readonly violationNotificationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * kms_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#kms_settings AssuredWorkloadsWorkload#kms_settings}
  */
  readonly kmsSettings?: AssuredWorkloadsWorkloadKmsSettings;
  /**
  * partner_permissions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#partner_permissions AssuredWorkloadsWorkload#partner_permissions}
  */
  readonly partnerPermissions?: AssuredWorkloadsWorkloadPartnerPermissions;
  /**
  * resource_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#resource_settings AssuredWorkloadsWorkload#resource_settings}
  */
  readonly resourceSettings?: AssuredWorkloadsWorkloadResourceSettings[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#timeouts AssuredWorkloadsWorkload#timeouts}
  */
  readonly timeouts?: AssuredWorkloadsWorkloadTimeouts;
}
export interface AssuredWorkloadsWorkloadComplianceStatus {
}

export function assuredWorkloadsWorkloadComplianceStatusToTerraform(struct?: AssuredWorkloadsWorkloadComplianceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function assuredWorkloadsWorkloadComplianceStatusToHclTerraform(struct?: AssuredWorkloadsWorkloadComplianceStatus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AssuredWorkloadsWorkloadComplianceStatusOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssuredWorkloadsWorkloadComplianceStatus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadComplianceStatus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // acknowledged_violation_count - computed: true, optional: false, required: false
  public get acknowledgedViolationCount() {
    return this.getNumberListAttribute('acknowledged_violation_count');
  }

  // active_violation_count - computed: true, optional: false, required: false
  public get activeViolationCount() {
    return this.getNumberListAttribute('active_violation_count');
  }
}

export class AssuredWorkloadsWorkloadComplianceStatusList extends cdktf.ComplexList {

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
  public get(index: number): AssuredWorkloadsWorkloadComplianceStatusOutputReference {
    return new AssuredWorkloadsWorkloadComplianceStatusOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssuredWorkloadsWorkloadEkmProvisioningResponse {
}

export function assuredWorkloadsWorkloadEkmProvisioningResponseToTerraform(struct?: AssuredWorkloadsWorkloadEkmProvisioningResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function assuredWorkloadsWorkloadEkmProvisioningResponseToHclTerraform(struct?: AssuredWorkloadsWorkloadEkmProvisioningResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssuredWorkloadsWorkloadEkmProvisioningResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadEkmProvisioningResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ekm_provisioning_error_domain - computed: true, optional: false, required: false
  public get ekmProvisioningErrorDomain() {
    return this.getStringAttribute('ekm_provisioning_error_domain');
  }

  // ekm_provisioning_error_mapping - computed: true, optional: false, required: false
  public get ekmProvisioningErrorMapping() {
    return this.getStringAttribute('ekm_provisioning_error_mapping');
  }

  // ekm_provisioning_state - computed: true, optional: false, required: false
  public get ekmProvisioningState() {
    return this.getStringAttribute('ekm_provisioning_state');
  }
}

export class AssuredWorkloadsWorkloadEkmProvisioningResponseList extends cdktf.ComplexList {

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
  public get(index: number): AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference {
    return new AssuredWorkloadsWorkloadEkmProvisioningResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssuredWorkloadsWorkloadResources {
}

export function assuredWorkloadsWorkloadResourcesToTerraform(struct?: AssuredWorkloadsWorkloadResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function assuredWorkloadsWorkloadResourcesToHclTerraform(struct?: AssuredWorkloadsWorkloadResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AssuredWorkloadsWorkloadResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssuredWorkloadsWorkloadResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // resource_id - computed: true, optional: false, required: false
  public get resourceId() {
    return this.getNumberAttribute('resource_id');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
}

export class AssuredWorkloadsWorkloadResourcesList extends cdktf.ComplexList {

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
  public get(index: number): AssuredWorkloadsWorkloadResourcesOutputReference {
    return new AssuredWorkloadsWorkloadResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssuredWorkloadsWorkloadSaaEnrollmentResponse {
}

export function assuredWorkloadsWorkloadSaaEnrollmentResponseToTerraform(struct?: AssuredWorkloadsWorkloadSaaEnrollmentResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function assuredWorkloadsWorkloadSaaEnrollmentResponseToHclTerraform(struct?: AssuredWorkloadsWorkloadSaaEnrollmentResponse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssuredWorkloadsWorkloadSaaEnrollmentResponse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadSaaEnrollmentResponse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // setup_errors - computed: true, optional: false, required: false
  public get setupErrors() {
    return this.getListAttribute('setup_errors');
  }

  // setup_status - computed: true, optional: false, required: false
  public get setupStatus() {
    return this.getStringAttribute('setup_status');
  }
}

export class AssuredWorkloadsWorkloadSaaEnrollmentResponseList extends cdktf.ComplexList {

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
  public get(index: number): AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference {
    return new AssuredWorkloadsWorkloadSaaEnrollmentResponseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssuredWorkloadsWorkloadKmsSettings {
  /**
  * Required. Input only. Immutable. The time at which the Key Management Service will automatically create a new version of the crypto key and mark it as the primary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#next_rotation_time AssuredWorkloadsWorkload#next_rotation_time}
  */
  readonly nextRotationTime: string;
  /**
  * Required. Input only. Immutable. will be advanced by this period when the Key Management Service automatically rotates a key. Must be at least 24 hours and at most 876,000 hours.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#rotation_period AssuredWorkloadsWorkload#rotation_period}
  */
  readonly rotationPeriod: string;
}

export function assuredWorkloadsWorkloadKmsSettingsToTerraform(struct?: AssuredWorkloadsWorkloadKmsSettingsOutputReference | AssuredWorkloadsWorkloadKmsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    next_rotation_time: cdktf.stringToTerraform(struct!.nextRotationTime),
    rotation_period: cdktf.stringToTerraform(struct!.rotationPeriod),
  }
}


export function assuredWorkloadsWorkloadKmsSettingsToHclTerraform(struct?: AssuredWorkloadsWorkloadKmsSettingsOutputReference | AssuredWorkloadsWorkloadKmsSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    next_rotation_time: {
      value: cdktf.stringToHclTerraform(struct!.nextRotationTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rotation_period: {
      value: cdktf.stringToHclTerraform(struct!.rotationPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssuredWorkloadsWorkloadKmsSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AssuredWorkloadsWorkloadKmsSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nextRotationTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextRotationTime = this._nextRotationTime;
    }
    if (this._rotationPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.rotationPeriod = this._rotationPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadKmsSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nextRotationTime = undefined;
      this._rotationPeriod = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nextRotationTime = value.nextRotationTime;
      this._rotationPeriod = value.rotationPeriod;
    }
  }

  // next_rotation_time - computed: false, optional: false, required: true
  private _nextRotationTime?: string; 
  public get nextRotationTime() {
    return this.getStringAttribute('next_rotation_time');
  }
  public set nextRotationTime(value: string) {
    this._nextRotationTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextRotationTimeInput() {
    return this._nextRotationTime;
  }

  // rotation_period - computed: false, optional: false, required: true
  private _rotationPeriod?: string; 
  public get rotationPeriod() {
    return this.getStringAttribute('rotation_period');
  }
  public set rotationPeriod(value: string) {
    this._rotationPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationPeriodInput() {
    return this._rotationPeriod;
  }
}
export interface AssuredWorkloadsWorkloadPartnerPermissions {
  /**
  * Optional. Allow partner to view violation alerts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#assured_workloads_monitoring AssuredWorkloadsWorkload#assured_workloads_monitoring}
  */
  readonly assuredWorkloadsMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Allow the partner to view inspectability logs and monitoring violations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#data_logs_viewer AssuredWorkloadsWorkload#data_logs_viewer}
  */
  readonly dataLogsViewer?: boolean | cdktf.IResolvable;
  /**
  * Optional. Allow partner to view access approval logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#service_access_approver AssuredWorkloadsWorkload#service_access_approver}
  */
  readonly serviceAccessApprover?: boolean | cdktf.IResolvable;
}

export function assuredWorkloadsWorkloadPartnerPermissionsToTerraform(struct?: AssuredWorkloadsWorkloadPartnerPermissionsOutputReference | AssuredWorkloadsWorkloadPartnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assured_workloads_monitoring: cdktf.booleanToTerraform(struct!.assuredWorkloadsMonitoring),
    data_logs_viewer: cdktf.booleanToTerraform(struct!.dataLogsViewer),
    service_access_approver: cdktf.booleanToTerraform(struct!.serviceAccessApprover),
  }
}


export function assuredWorkloadsWorkloadPartnerPermissionsToHclTerraform(struct?: AssuredWorkloadsWorkloadPartnerPermissionsOutputReference | AssuredWorkloadsWorkloadPartnerPermissions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assured_workloads_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.assuredWorkloadsMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    data_logs_viewer: {
      value: cdktf.booleanToHclTerraform(struct!.dataLogsViewer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_access_approver: {
      value: cdktf.booleanToHclTerraform(struct!.serviceAccessApprover),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssuredWorkloadsWorkloadPartnerPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AssuredWorkloadsWorkloadPartnerPermissions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assuredWorkloadsMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.assuredWorkloadsMonitoring = this._assuredWorkloadsMonitoring;
    }
    if (this._dataLogsViewer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLogsViewer = this._dataLogsViewer;
    }
    if (this._serviceAccessApprover !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccessApprover = this._serviceAccessApprover;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadPartnerPermissions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assuredWorkloadsMonitoring = undefined;
      this._dataLogsViewer = undefined;
      this._serviceAccessApprover = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assuredWorkloadsMonitoring = value.assuredWorkloadsMonitoring;
      this._dataLogsViewer = value.dataLogsViewer;
      this._serviceAccessApprover = value.serviceAccessApprover;
    }
  }

  // assured_workloads_monitoring - computed: false, optional: true, required: false
  private _assuredWorkloadsMonitoring?: boolean | cdktf.IResolvable; 
  public get assuredWorkloadsMonitoring() {
    return this.getBooleanAttribute('assured_workloads_monitoring');
  }
  public set assuredWorkloadsMonitoring(value: boolean | cdktf.IResolvable) {
    this._assuredWorkloadsMonitoring = value;
  }
  public resetAssuredWorkloadsMonitoring() {
    this._assuredWorkloadsMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assuredWorkloadsMonitoringInput() {
    return this._assuredWorkloadsMonitoring;
  }

  // data_logs_viewer - computed: false, optional: true, required: false
  private _dataLogsViewer?: boolean | cdktf.IResolvable; 
  public get dataLogsViewer() {
    return this.getBooleanAttribute('data_logs_viewer');
  }
  public set dataLogsViewer(value: boolean | cdktf.IResolvable) {
    this._dataLogsViewer = value;
  }
  public resetDataLogsViewer() {
    this._dataLogsViewer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLogsViewerInput() {
    return this._dataLogsViewer;
  }

  // service_access_approver - computed: false, optional: true, required: false
  private _serviceAccessApprover?: boolean | cdktf.IResolvable; 
  public get serviceAccessApprover() {
    return this.getBooleanAttribute('service_access_approver');
  }
  public set serviceAccessApprover(value: boolean | cdktf.IResolvable) {
    this._serviceAccessApprover = value;
  }
  public resetServiceAccessApprover() {
    this._serviceAccessApprover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccessApproverInput() {
    return this._serviceAccessApprover;
  }
}
export interface AssuredWorkloadsWorkloadResourceSettings {
  /**
  * User-assigned resource display name. If not empty it will be used to create a resource with the specified name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#display_name AssuredWorkloadsWorkload#display_name}
  */
  readonly displayName?: string;
  /**
  * Resource identifier. For a project this represents projectId. If the project is already taken, the workload creation will fail. For KeyRing, this represents the keyring_id. For a folder, don't set this value as folder_id is assigned by Google.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#resource_id AssuredWorkloadsWorkload#resource_id}
  */
  readonly resourceId?: string;
  /**
  * Indicates the type of resource. This field should be specified to correspond the id to the right project type (CONSUMER_PROJECT or ENCRYPTION_KEYS_PROJECT) Possible values: RESOURCE_TYPE_UNSPECIFIED, CONSUMER_PROJECT, ENCRYPTION_KEYS_PROJECT, KEYRING, CONSUMER_FOLDER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#resource_type AssuredWorkloadsWorkload#resource_type}
  */
  readonly resourceType?: string;
}

export function assuredWorkloadsWorkloadResourceSettingsToTerraform(struct?: AssuredWorkloadsWorkloadResourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    resource_id: cdktf.stringToTerraform(struct!.resourceId),
    resource_type: cdktf.stringToTerraform(struct!.resourceType),
  }
}


export function assuredWorkloadsWorkloadResourceSettingsToHclTerraform(struct?: AssuredWorkloadsWorkloadResourceSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_id: {
      value: cdktf.stringToHclTerraform(struct!.resourceId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AssuredWorkloadsWorkloadResourceSettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AssuredWorkloadsWorkloadResourceSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._resourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceId = this._resourceId;
    }
    if (this._resourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceType = this._resourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AssuredWorkloadsWorkloadResourceSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._resourceId = undefined;
      this._resourceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._resourceId = value.resourceId;
      this._resourceType = value.resourceType;
    }
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

  // resource_id - computed: false, optional: true, required: false
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  public resetResourceId() {
    this._resourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: true, required: false
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  public resetResourceType() {
    this._resourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }
}

export class AssuredWorkloadsWorkloadResourceSettingsList extends cdktf.ComplexList {
  public internalValue? : AssuredWorkloadsWorkloadResourceSettings[] | cdktf.IResolvable

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
  public get(index: number): AssuredWorkloadsWorkloadResourceSettingsOutputReference {
    return new AssuredWorkloadsWorkloadResourceSettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AssuredWorkloadsWorkloadTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#create AssuredWorkloadsWorkload#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#delete AssuredWorkloadsWorkload#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#update AssuredWorkloadsWorkload#update}
  */
  readonly update?: string;
}

export function assuredWorkloadsWorkloadTimeoutsToTerraform(struct?: AssuredWorkloadsWorkloadTimeouts | cdktf.IResolvable): any {
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


export function assuredWorkloadsWorkloadTimeoutsToHclTerraform(struct?: AssuredWorkloadsWorkloadTimeouts | cdktf.IResolvable): any {
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

export class AssuredWorkloadsWorkloadTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AssuredWorkloadsWorkloadTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AssuredWorkloadsWorkloadTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload google_assured_workloads_workload}
*/
export class AssuredWorkloadsWorkload extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_assured_workloads_workload";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssuredWorkloadsWorkload resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssuredWorkloadsWorkload to import
  * @param importFromId The id of the existing AssuredWorkloadsWorkload that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssuredWorkloadsWorkload to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_assured_workloads_workload", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.43.1/docs/resources/assured_workloads_workload google_assured_workloads_workload} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssuredWorkloadsWorkloadConfig
  */
  public constructor(scope: Construct, id: string, config: AssuredWorkloadsWorkloadConfig) {
    super(scope, id, {
      terraformResourceType: 'google_assured_workloads_workload',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.43.1',
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
    this._billingAccount = config.billingAccount;
    this._complianceRegime = config.complianceRegime;
    this._displayName = config.displayName;
    this._enableSovereignControls = config.enableSovereignControls;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._organization = config.organization;
    this._partner = config.partner;
    this._provisionedResourcesParent = config.provisionedResourcesParent;
    this._violationNotificationsEnabled = config.violationNotificationsEnabled;
    this._kmsSettings.internalValue = config.kmsSettings;
    this._partnerPermissions.internalValue = config.partnerPermissions;
    this._resourceSettings.internalValue = config.resourceSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // billing_account - computed: false, optional: true, required: false
  private _billingAccount?: string; 
  public get billingAccount() {
    return this.getStringAttribute('billing_account');
  }
  public set billingAccount(value: string) {
    this._billingAccount = value;
  }
  public resetBillingAccount() {
    this._billingAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get billingAccountInput() {
    return this._billingAccount;
  }

  // compliance_regime - computed: false, optional: false, required: true
  private _complianceRegime?: string; 
  public get complianceRegime() {
    return this.getStringAttribute('compliance_regime');
  }
  public set complianceRegime(value: string) {
    this._complianceRegime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceRegimeInput() {
    return this._complianceRegime;
  }

  // compliance_status - computed: true, optional: false, required: false
  private _complianceStatus = new AssuredWorkloadsWorkloadComplianceStatusList(this, "compliance_status", false);
  public get complianceStatus() {
    return this._complianceStatus;
  }

  // compliant_but_disallowed_services - computed: true, optional: false, required: false
  public get compliantButDisallowedServices() {
    return this.getListAttribute('compliant_but_disallowed_services');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // ekm_provisioning_response - computed: true, optional: false, required: false
  private _ekmProvisioningResponse = new AssuredWorkloadsWorkloadEkmProvisioningResponseList(this, "ekm_provisioning_response", false);
  public get ekmProvisioningResponse() {
    return this._ekmProvisioningResponse;
  }

  // enable_sovereign_controls - computed: false, optional: true, required: false
  private _enableSovereignControls?: boolean | cdktf.IResolvable; 
  public get enableSovereignControls() {
    return this.getBooleanAttribute('enable_sovereign_controls');
  }
  public set enableSovereignControls(value: boolean | cdktf.IResolvable) {
    this._enableSovereignControls = value;
  }
  public resetEnableSovereignControls() {
    this._enableSovereignControls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSovereignControlsInput() {
    return this._enableSovereignControls;
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

  // kaj_enrollment_state - computed: true, optional: false, required: false
  public get kajEnrollmentState() {
    return this.getStringAttribute('kaj_enrollment_state');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // partner - computed: false, optional: true, required: false
  private _partner?: string; 
  public get partner() {
    return this.getStringAttribute('partner');
  }
  public set partner(value: string) {
    this._partner = value;
  }
  public resetPartner() {
    this._partner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerInput() {
    return this._partner;
  }

  // provisioned_resources_parent - computed: false, optional: true, required: false
  private _provisionedResourcesParent?: string; 
  public get provisionedResourcesParent() {
    return this.getStringAttribute('provisioned_resources_parent');
  }
  public set provisionedResourcesParent(value: string) {
    this._provisionedResourcesParent = value;
  }
  public resetProvisionedResourcesParent() {
    this._provisionedResourcesParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedResourcesParentInput() {
    return this._provisionedResourcesParent;
  }

  // resources - computed: true, optional: false, required: false
  private _resources = new AssuredWorkloadsWorkloadResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }

  // saa_enrollment_response - computed: true, optional: false, required: false
  private _saaEnrollmentResponse = new AssuredWorkloadsWorkloadSaaEnrollmentResponseList(this, "saa_enrollment_response", false);
  public get saaEnrollmentResponse() {
    return this._saaEnrollmentResponse;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // violation_notifications_enabled - computed: true, optional: true, required: false
  private _violationNotificationsEnabled?: boolean | cdktf.IResolvable; 
  public get violationNotificationsEnabled() {
    return this.getBooleanAttribute('violation_notifications_enabled');
  }
  public set violationNotificationsEnabled(value: boolean | cdktf.IResolvable) {
    this._violationNotificationsEnabled = value;
  }
  public resetViolationNotificationsEnabled() {
    this._violationNotificationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get violationNotificationsEnabledInput() {
    return this._violationNotificationsEnabled;
  }

  // kms_settings - computed: false, optional: true, required: false
  private _kmsSettings = new AssuredWorkloadsWorkloadKmsSettingsOutputReference(this, "kms_settings");
  public get kmsSettings() {
    return this._kmsSettings;
  }
  public putKmsSettings(value: AssuredWorkloadsWorkloadKmsSettings) {
    this._kmsSettings.internalValue = value;
  }
  public resetKmsSettings() {
    this._kmsSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsSettingsInput() {
    return this._kmsSettings.internalValue;
  }

  // partner_permissions - computed: false, optional: true, required: false
  private _partnerPermissions = new AssuredWorkloadsWorkloadPartnerPermissionsOutputReference(this, "partner_permissions");
  public get partnerPermissions() {
    return this._partnerPermissions;
  }
  public putPartnerPermissions(value: AssuredWorkloadsWorkloadPartnerPermissions) {
    this._partnerPermissions.internalValue = value;
  }
  public resetPartnerPermissions() {
    this._partnerPermissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partnerPermissionsInput() {
    return this._partnerPermissions.internalValue;
  }

  // resource_settings - computed: false, optional: true, required: false
  private _resourceSettings = new AssuredWorkloadsWorkloadResourceSettingsList(this, "resource_settings", false);
  public get resourceSettings() {
    return this._resourceSettings;
  }
  public putResourceSettings(value: AssuredWorkloadsWorkloadResourceSettings[] | cdktf.IResolvable) {
    this._resourceSettings.internalValue = value;
  }
  public resetResourceSettings() {
    this._resourceSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSettingsInput() {
    return this._resourceSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AssuredWorkloadsWorkloadTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AssuredWorkloadsWorkloadTimeouts) {
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
      billing_account: cdktf.stringToTerraform(this._billingAccount),
      compliance_regime: cdktf.stringToTerraform(this._complianceRegime),
      display_name: cdktf.stringToTerraform(this._displayName),
      enable_sovereign_controls: cdktf.booleanToTerraform(this._enableSovereignControls),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      organization: cdktf.stringToTerraform(this._organization),
      partner: cdktf.stringToTerraform(this._partner),
      provisioned_resources_parent: cdktf.stringToTerraform(this._provisionedResourcesParent),
      violation_notifications_enabled: cdktf.booleanToTerraform(this._violationNotificationsEnabled),
      kms_settings: assuredWorkloadsWorkloadKmsSettingsToTerraform(this._kmsSettings.internalValue),
      partner_permissions: assuredWorkloadsWorkloadPartnerPermissionsToTerraform(this._partnerPermissions.internalValue),
      resource_settings: cdktf.listMapper(assuredWorkloadsWorkloadResourceSettingsToTerraform, true)(this._resourceSettings.internalValue),
      timeouts: assuredWorkloadsWorkloadTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      billing_account: {
        value: cdktf.stringToHclTerraform(this._billingAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_regime: {
        value: cdktf.stringToHclTerraform(this._complianceRegime),
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
      enable_sovereign_controls: {
        value: cdktf.booleanToHclTerraform(this._enableSovereignControls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      partner: {
        value: cdktf.stringToHclTerraform(this._partner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_resources_parent: {
        value: cdktf.stringToHclTerraform(this._provisionedResourcesParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      violation_notifications_enabled: {
        value: cdktf.booleanToHclTerraform(this._violationNotificationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kms_settings: {
        value: assuredWorkloadsWorkloadKmsSettingsToHclTerraform(this._kmsSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssuredWorkloadsWorkloadKmsSettingsList",
      },
      partner_permissions: {
        value: assuredWorkloadsWorkloadPartnerPermissionsToHclTerraform(this._partnerPermissions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssuredWorkloadsWorkloadPartnerPermissionsList",
      },
      resource_settings: {
        value: cdktf.listMapperHcl(assuredWorkloadsWorkloadResourceSettingsToHclTerraform, true)(this._resourceSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AssuredWorkloadsWorkloadResourceSettingsList",
      },
      timeouts: {
        value: assuredWorkloadsWorkloadTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AssuredWorkloadsWorkloadTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
