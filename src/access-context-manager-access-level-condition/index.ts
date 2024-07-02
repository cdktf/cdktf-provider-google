/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerAccessLevelConditionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Access Level to add this condition to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#access_level AccessContextManagerAccessLevelCondition#access_level}
  */
  readonly accessLevel: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#id AccessContextManagerAccessLevelCondition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of CIDR block IP subnetwork specification. May be IPv4
  * or IPv6.
  * Note that for a CIDR IP address block, the specified IP address
  * portion must be properly truncated (i.e. all the host bits must
  * be zero) or the input is considered malformed. For example,
  * "192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
  * for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
  * is not. The originating IP of a request must be in one of the
  * listed subnets in order for this Condition to be true.
  * If empty, all IP addresses are allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#ip_subnetworks AccessContextManagerAccessLevelCondition#ip_subnetworks}
  */
  readonly ipSubnetworks?: string[];
  /**
  * An allowed list of members (users, service accounts).
  * Using groups is not supported yet.
  * 
  * The signed-in user originating the request must be a part of one
  * of the provided members. If not specified, a request may come
  * from any user (logged in/not logged in, not present in any
  * groups, etc.).
  * Formats: 'user:{emailid}', 'serviceAccount:{emailid}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#members AccessContextManagerAccessLevelCondition#members}
  */
  readonly members?: string[];
  /**
  * Whether to negate the Condition. If true, the Condition becomes
  * a NAND over its non-empty fields, each field must be false for
  * the Condition overall to be satisfied. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#negate AccessContextManagerAccessLevelCondition#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The request must originate from one of the provided
  * countries/regions.
  * Format: A valid ISO 3166-1 alpha-2 code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#regions AccessContextManagerAccessLevelCondition#regions}
  */
  readonly regions?: string[];
  /**
  * A list of other access levels defined in the same Policy,
  * referenced by resource name. Referencing an AccessLevel which
  * does not exist is an error. All access levels listed must be
  * granted for the Condition to be true.
  * Format: accessPolicies/{policy_id}/accessLevels/{short_name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#required_access_levels AccessContextManagerAccessLevelCondition#required_access_levels}
  */
  readonly requiredAccessLevels?: string[];
  /**
  * device_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#device_policy AccessContextManagerAccessLevelCondition#device_policy}
  */
  readonly devicePolicy?: AccessContextManagerAccessLevelConditionDevicePolicy;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#timeouts AccessContextManagerAccessLevelCondition#timeouts}
  */
  readonly timeouts?: AccessContextManagerAccessLevelConditionTimeouts;
  /**
  * vpc_network_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#vpc_network_sources AccessContextManagerAccessLevelCondition#vpc_network_sources}
  */
  readonly vpcNetworkSources?: AccessContextManagerAccessLevelConditionVpcNetworkSources[] | cdktf.IResolvable;
}
export interface AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints {
  /**
  * The minimum allowed OS version. If not set, any version
  * of this OS satisfies the constraint.
  * Format: "major.minor.patch" such as "10.5.301", "9.2.1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#minimum_version AccessContextManagerAccessLevelCondition#minimum_version}
  */
  readonly minimumVersion?: string;
  /**
  * The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#os_type AccessContextManagerAccessLevelCondition#os_type}
  */
  readonly osType: string;
}

export function accessContextManagerAccessLevelConditionDevicePolicyOsConstraintsToTerraform(struct?: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_version: cdktf.stringToTerraform(struct!.minimumVersion),
    os_type: cdktf.stringToTerraform(struct!.osType),
  }
}


export function accessContextManagerAccessLevelConditionDevicePolicyOsConstraintsToHclTerraform(struct?: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minimum_version: {
      value: cdktf.stringToHclTerraform(struct!.minimumVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minimumVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumVersion = this._minimumVersion;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._minimumVersion = undefined;
      this._osType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._minimumVersion = value.minimumVersion;
      this._osType = value.osType;
    }
  }

  // minimum_version - computed: false, optional: true, required: false
  private _minimumVersion?: string; 
  public get minimumVersion() {
    return this.getStringAttribute('minimum_version');
  }
  public set minimumVersion(value: string) {
    this._minimumVersion = value;
  }
  public resetMinimumVersion() {
    this._minimumVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumVersionInput() {
    return this._minimumVersion;
  }

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }
}

export class AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference {
    return new AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelConditionDevicePolicy {
  /**
  * A list of allowed device management levels.
  * An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#allowed_device_management_levels AccessContextManagerAccessLevelCondition#allowed_device_management_levels}
  */
  readonly allowedDeviceManagementLevels?: string[];
  /**
  * A list of allowed encryptions statuses.
  * An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#allowed_encryption_statuses AccessContextManagerAccessLevelCondition#allowed_encryption_statuses}
  */
  readonly allowedEncryptionStatuses?: string[];
  /**
  * Whether the device needs to be approved by the customer admin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#require_admin_approval AccessContextManagerAccessLevelCondition#require_admin_approval}
  */
  readonly requireAdminApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether the device needs to be corp owned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#require_corp_owned AccessContextManagerAccessLevelCondition#require_corp_owned}
  */
  readonly requireCorpOwned?: boolean | cdktf.IResolvable;
  /**
  * Whether or not screenlock is required for the DevicePolicy
  * to be true. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#require_screen_lock AccessContextManagerAccessLevelCondition#require_screen_lock}
  */
  readonly requireScreenLock?: boolean | cdktf.IResolvable;
  /**
  * os_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#os_constraints AccessContextManagerAccessLevelCondition#os_constraints}
  */
  readonly osConstraints?: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints[] | cdktf.IResolvable;
}

export function accessContextManagerAccessLevelConditionDevicePolicyToTerraform(struct?: AccessContextManagerAccessLevelConditionDevicePolicyOutputReference | AccessContextManagerAccessLevelConditionDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_device_management_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedDeviceManagementLevels),
    allowed_encryption_statuses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedEncryptionStatuses),
    require_admin_approval: cdktf.booleanToTerraform(struct!.requireAdminApproval),
    require_corp_owned: cdktf.booleanToTerraform(struct!.requireCorpOwned),
    require_screen_lock: cdktf.booleanToTerraform(struct!.requireScreenLock),
    os_constraints: cdktf.listMapper(accessContextManagerAccessLevelConditionDevicePolicyOsConstraintsToTerraform, true)(struct!.osConstraints),
  }
}


export function accessContextManagerAccessLevelConditionDevicePolicyToHclTerraform(struct?: AccessContextManagerAccessLevelConditionDevicePolicyOutputReference | AccessContextManagerAccessLevelConditionDevicePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_device_management_levels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedDeviceManagementLevels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    allowed_encryption_statuses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedEncryptionStatuses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    require_admin_approval: {
      value: cdktf.booleanToHclTerraform(struct!.requireAdminApproval),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_corp_owned: {
      value: cdktf.booleanToHclTerraform(struct!.requireCorpOwned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_screen_lock: {
      value: cdktf.booleanToHclTerraform(struct!.requireScreenLock),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os_constraints: {
      value: cdktf.listMapperHcl(accessContextManagerAccessLevelConditionDevicePolicyOsConstraintsToHclTerraform, true)(struct!.osConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelConditionDevicePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelConditionDevicePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedDeviceManagementLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedDeviceManagementLevels = this._allowedDeviceManagementLevels;
    }
    if (this._allowedEncryptionStatuses !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedEncryptionStatuses = this._allowedEncryptionStatuses;
    }
    if (this._requireAdminApproval !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAdminApproval = this._requireAdminApproval;
    }
    if (this._requireCorpOwned !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireCorpOwned = this._requireCorpOwned;
    }
    if (this._requireScreenLock !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireScreenLock = this._requireScreenLock;
    }
    if (this._osConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osConstraints = this._osConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelConditionDevicePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedDeviceManagementLevels = undefined;
      this._allowedEncryptionStatuses = undefined;
      this._requireAdminApproval = undefined;
      this._requireCorpOwned = undefined;
      this._requireScreenLock = undefined;
      this._osConstraints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedDeviceManagementLevels = value.allowedDeviceManagementLevels;
      this._allowedEncryptionStatuses = value.allowedEncryptionStatuses;
      this._requireAdminApproval = value.requireAdminApproval;
      this._requireCorpOwned = value.requireCorpOwned;
      this._requireScreenLock = value.requireScreenLock;
      this._osConstraints.internalValue = value.osConstraints;
    }
  }

  // allowed_device_management_levels - computed: false, optional: true, required: false
  private _allowedDeviceManagementLevels?: string[]; 
  public get allowedDeviceManagementLevels() {
    return this.getListAttribute('allowed_device_management_levels');
  }
  public set allowedDeviceManagementLevels(value: string[]) {
    this._allowedDeviceManagementLevels = value;
  }
  public resetAllowedDeviceManagementLevels() {
    this._allowedDeviceManagementLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDeviceManagementLevelsInput() {
    return this._allowedDeviceManagementLevels;
  }

  // allowed_encryption_statuses - computed: false, optional: true, required: false
  private _allowedEncryptionStatuses?: string[]; 
  public get allowedEncryptionStatuses() {
    return this.getListAttribute('allowed_encryption_statuses');
  }
  public set allowedEncryptionStatuses(value: string[]) {
    this._allowedEncryptionStatuses = value;
  }
  public resetAllowedEncryptionStatuses() {
    this._allowedEncryptionStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEncryptionStatusesInput() {
    return this._allowedEncryptionStatuses;
  }

  // require_admin_approval - computed: false, optional: true, required: false
  private _requireAdminApproval?: boolean | cdktf.IResolvable; 
  public get requireAdminApproval() {
    return this.getBooleanAttribute('require_admin_approval');
  }
  public set requireAdminApproval(value: boolean | cdktf.IResolvable) {
    this._requireAdminApproval = value;
  }
  public resetRequireAdminApproval() {
    this._requireAdminApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminApprovalInput() {
    return this._requireAdminApproval;
  }

  // require_corp_owned - computed: false, optional: true, required: false
  private _requireCorpOwned?: boolean | cdktf.IResolvable; 
  public get requireCorpOwned() {
    return this.getBooleanAttribute('require_corp_owned');
  }
  public set requireCorpOwned(value: boolean | cdktf.IResolvable) {
    this._requireCorpOwned = value;
  }
  public resetRequireCorpOwned() {
    this._requireCorpOwned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCorpOwnedInput() {
    return this._requireCorpOwned;
  }

  // require_screen_lock - computed: false, optional: true, required: false
  private _requireScreenLock?: boolean | cdktf.IResolvable; 
  public get requireScreenLock() {
    return this.getBooleanAttribute('require_screen_lock');
  }
  public set requireScreenLock(value: boolean | cdktf.IResolvable) {
    this._requireScreenLock = value;
  }
  public resetRequireScreenLock() {
    this._requireScreenLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireScreenLockInput() {
    return this._requireScreenLock;
  }

  // os_constraints - computed: false, optional: true, required: false
  private _osConstraints = new AccessContextManagerAccessLevelConditionDevicePolicyOsConstraintsList(this, "os_constraints", false);
  public get osConstraints() {
    return this._osConstraints;
  }
  public putOsConstraints(value: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints[] | cdktf.IResolvable) {
    this._osConstraints.internalValue = value;
  }
  public resetOsConstraints() {
    this._osConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConstraintsInput() {
    return this._osConstraints.internalValue;
  }
}
export interface AccessContextManagerAccessLevelConditionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#create AccessContextManagerAccessLevelCondition#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#delete AccessContextManagerAccessLevelCondition#delete}
  */
  readonly delete?: string;
}

export function accessContextManagerAccessLevelConditionTimeoutsToTerraform(struct?: AccessContextManagerAccessLevelConditionTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function accessContextManagerAccessLevelConditionTimeoutsToHclTerraform(struct?: AccessContextManagerAccessLevelConditionTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerAccessLevelConditionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerAccessLevelConditionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerAccessLevelConditionTimeouts | cdktf.IResolvable | undefined) {
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
export interface AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork {
  /**
  * Required. Network name to be allowed by this Access Level. Networks of foreign organizations requires 'compute.network.get' permission to be granted to caller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#network AccessContextManagerAccessLevelCondition#network}
  */
  readonly network: string;
  /**
  * CIDR block IP subnetwork specification. Must be IPv4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#vpc_ip_subnetworks AccessContextManagerAccessLevelCondition#vpc_ip_subnetworks}
  */
  readonly vpcIpSubnetworks?: string[];
}

export function accessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkToTerraform(struct?: AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference | AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    vpc_ip_subnetworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vpcIpSubnetworks),
  }
}


export function accessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkToHclTerraform(struct?: AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference | AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork): any {
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
    vpc_ip_subnetworks: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vpcIpSubnetworks),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._vpcIpSubnetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcIpSubnetworks = this._vpcIpSubnetworks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._network = undefined;
      this._vpcIpSubnetworks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._network = value.network;
      this._vpcIpSubnetworks = value.vpcIpSubnetworks;
    }
  }

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // vpc_ip_subnetworks - computed: false, optional: true, required: false
  private _vpcIpSubnetworks?: string[]; 
  public get vpcIpSubnetworks() {
    return this.getListAttribute('vpc_ip_subnetworks');
  }
  public set vpcIpSubnetworks(value: string[]) {
    this._vpcIpSubnetworks = value;
  }
  public resetVpcIpSubnetworks() {
    this._vpcIpSubnetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIpSubnetworksInput() {
    return this._vpcIpSubnetworks;
  }
}
export interface AccessContextManagerAccessLevelConditionVpcNetworkSources {
  /**
  * vpc_subnetwork block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#vpc_subnetwork AccessContextManagerAccessLevelCondition#vpc_subnetwork}
  */
  readonly vpcSubnetwork?: AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork;
}

export function accessContextManagerAccessLevelConditionVpcNetworkSourcesToTerraform(struct?: AccessContextManagerAccessLevelConditionVpcNetworkSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vpc_subnetwork: accessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkToTerraform(struct!.vpcSubnetwork),
  }
}


export function accessContextManagerAccessLevelConditionVpcNetworkSourcesToHclTerraform(struct?: AccessContextManagerAccessLevelConditionVpcNetworkSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vpc_subnetwork: {
      value: accessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkToHclTerraform(struct!.vpcSubnetwork),
      isBlock: true,
      type: "list",
      storageClassType: "AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelConditionVpcNetworkSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vpcSubnetwork?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcSubnetwork = this._vpcSubnetwork?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelConditionVpcNetworkSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vpcSubnetwork.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vpcSubnetwork.internalValue = value.vpcSubnetwork;
    }
  }

  // vpc_subnetwork - computed: false, optional: true, required: false
  private _vpcSubnetwork = new AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetworkOutputReference(this, "vpc_subnetwork");
  public get vpcSubnetwork() {
    return this._vpcSubnetwork;
  }
  public putVpcSubnetwork(value: AccessContextManagerAccessLevelConditionVpcNetworkSourcesVpcSubnetwork) {
    this._vpcSubnetwork.internalValue = value;
  }
  public resetVpcSubnetwork() {
    this._vpcSubnetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcSubnetworkInput() {
    return this._vpcSubnetwork.internalValue;
  }
}

export class AccessContextManagerAccessLevelConditionVpcNetworkSourcesList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelConditionVpcNetworkSources[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference {
    return new AccessContextManagerAccessLevelConditionVpcNetworkSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition google_access_context_manager_access_level_condition}
*/
export class AccessContextManagerAccessLevelCondition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_access_level_condition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessContextManagerAccessLevelCondition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerAccessLevelCondition to import
  * @param importFromId The id of the existing AccessContextManagerAccessLevelCondition that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerAccessLevelCondition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_access_level_condition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.36.0/docs/resources/access_context_manager_access_level_condition google_access_context_manager_access_level_condition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerAccessLevelConditionConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessLevelConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_level_condition',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.36.0',
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
    this._accessLevel = config.accessLevel;
    this._id = config.id;
    this._ipSubnetworks = config.ipSubnetworks;
    this._members = config.members;
    this._negate = config.negate;
    this._regions = config.regions;
    this._requiredAccessLevels = config.requiredAccessLevels;
    this._devicePolicy.internalValue = config.devicePolicy;
    this._timeouts.internalValue = config.timeouts;
    this._vpcNetworkSources.internalValue = config.vpcNetworkSources;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel?: string; 
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel;
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

  // ip_subnetworks - computed: false, optional: true, required: false
  private _ipSubnetworks?: string[]; 
  public get ipSubnetworks() {
    return this.getListAttribute('ip_subnetworks');
  }
  public set ipSubnetworks(value: string[]) {
    this._ipSubnetworks = value;
  }
  public resetIpSubnetworks() {
    this._ipSubnetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetworksInput() {
    return this._ipSubnetworks;
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[]; 
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[]) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[]; 
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[]) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions;
  }

  // required_access_levels - computed: false, optional: true, required: false
  private _requiredAccessLevels?: string[]; 
  public get requiredAccessLevels() {
    return this.getListAttribute('required_access_levels');
  }
  public set requiredAccessLevels(value: string[]) {
    this._requiredAccessLevels = value;
  }
  public resetRequiredAccessLevels() {
    this._requiredAccessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAccessLevelsInput() {
    return this._requiredAccessLevels;
  }

  // device_policy - computed: false, optional: true, required: false
  private _devicePolicy = new AccessContextManagerAccessLevelConditionDevicePolicyOutputReference(this, "device_policy");
  public get devicePolicy() {
    return this._devicePolicy;
  }
  public putDevicePolicy(value: AccessContextManagerAccessLevelConditionDevicePolicy) {
    this._devicePolicy.internalValue = value;
  }
  public resetDevicePolicy() {
    this._devicePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyInput() {
    return this._devicePolicy.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerAccessLevelConditionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerAccessLevelConditionTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vpc_network_sources - computed: false, optional: true, required: false
  private _vpcNetworkSources = new AccessContextManagerAccessLevelConditionVpcNetworkSourcesList(this, "vpc_network_sources", false);
  public get vpcNetworkSources() {
    return this._vpcNetworkSources;
  }
  public putVpcNetworkSources(value: AccessContextManagerAccessLevelConditionVpcNetworkSources[] | cdktf.IResolvable) {
    this._vpcNetworkSources.internalValue = value;
  }
  public resetVpcNetworkSources() {
    this._vpcNetworkSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcNetworkSourcesInput() {
    return this._vpcNetworkSources.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      id: cdktf.stringToTerraform(this._id),
      ip_subnetworks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSubnetworks),
      members: cdktf.listMapper(cdktf.stringToTerraform, false)(this._members),
      negate: cdktf.booleanToTerraform(this._negate),
      regions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._regions),
      required_access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requiredAccessLevels),
      device_policy: accessContextManagerAccessLevelConditionDevicePolicyToTerraform(this._devicePolicy.internalValue),
      timeouts: accessContextManagerAccessLevelConditionTimeoutsToTerraform(this._timeouts.internalValue),
      vpc_network_sources: cdktf.listMapper(accessContextManagerAccessLevelConditionVpcNetworkSourcesToTerraform, true)(this._vpcNetworkSources.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level: {
        value: cdktf.stringToHclTerraform(this._accessLevel),
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
      ip_subnetworks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSubnetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      members: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._members),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      negate: {
        value: cdktf.booleanToHclTerraform(this._negate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      regions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._regions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      required_access_levels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requiredAccessLevels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device_policy: {
        value: accessContextManagerAccessLevelConditionDevicePolicyToHclTerraform(this._devicePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerAccessLevelConditionDevicePolicyList",
      },
      timeouts: {
        value: accessContextManagerAccessLevelConditionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerAccessLevelConditionTimeouts",
      },
      vpc_network_sources: {
        value: cdktf.listMapperHcl(accessContextManagerAccessLevelConditionVpcNetworkSourcesToHclTerraform, true)(this._vpcNetworkSources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AccessContextManagerAccessLevelConditionVpcNetworkSourcesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
