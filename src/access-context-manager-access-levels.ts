// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerAccessLevelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#id AccessContextManagerAccessLevels#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#parent AccessContextManagerAccessLevels#parent}
  */
  readonly parent: string;
  /**
  * access_levels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#access_levels AccessContextManagerAccessLevels#access_levels}
  */
  readonly accessLevels?: AccessContextManagerAccessLevelsAccessLevels[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#timeouts AccessContextManagerAccessLevels#timeouts}
  */
  readonly timeouts?: AccessContextManagerAccessLevelsTimeouts;
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints {
  /**
  * The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#minimum_version AccessContextManagerAccessLevels#minimum_version}
  */
  readonly minimumVersion?: string;
  /**
  * The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#os_type AccessContextManagerAccessLevels#os_type}
  */
  readonly osType: string;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_version: cdktf.stringToTerraform(struct!.minimumVersion),
    os_type: cdktf.stringToTerraform(struct!.osType),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints | cdktf.IResolvable | undefined) {
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

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference {
    return new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy {
  /**
  * A list of allowed device management levels.
An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#allowed_device_management_levels AccessContextManagerAccessLevels#allowed_device_management_levels}
  */
  readonly allowedDeviceManagementLevels?: string[];
  /**
  * A list of allowed encryptions statuses.
An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#allowed_encryption_statuses AccessContextManagerAccessLevels#allowed_encryption_statuses}
  */
  readonly allowedEncryptionStatuses?: string[];
  /**
  * Whether the device needs to be approved by the customer admin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#require_admin_approval AccessContextManagerAccessLevels#require_admin_approval}
  */
  readonly requireAdminApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether the device needs to be corp owned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#require_corp_owned AccessContextManagerAccessLevels#require_corp_owned}
  */
  readonly requireCorpOwned?: boolean | cdktf.IResolvable;
  /**
  * Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#require_screen_lock AccessContextManagerAccessLevels#require_screen_lock}
  */
  readonly requireScreenLock?: boolean | cdktf.IResolvable;
  /**
  * os_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#os_constraints AccessContextManagerAccessLevels#os_constraints}
  */
  readonly osConstraints?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | cdktf.IResolvable;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy): any {
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
    os_constraints: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform, true)(struct!.osConstraints),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy | undefined {
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

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy | undefined) {
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
  private _osConstraints = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsList(this, "os_constraints", false);
  public get osConstraints() {
    return this._osConstraints;
  }
  public putOsConstraints(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | cdktf.IResolvable) {
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
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditions {
  /**
  * A list of CIDR block IP subnetwork specification. May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#ip_subnetworks AccessContextManagerAccessLevels#ip_subnetworks}
  */
  readonly ipSubnetworks?: string[];
  /**
  * An allowed list of members (users, service accounts).
Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#members AccessContextManagerAccessLevels#members}
  */
  readonly members?: string[];
  /**
  * Whether to negate the Condition. If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#negate AccessContextManagerAccessLevels#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The request must originate from one of the provided
countries/regions.
Format: A valid ISO 3166-1 alpha-2 code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#regions AccessContextManagerAccessLevels#regions}
  */
  readonly regions?: string[];
  /**
  * A list of other access levels defined in the same Policy,
referenced by resource name. Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#required_access_levels AccessContextManagerAccessLevels#required_access_levels}
  */
  readonly requiredAccessLevels?: string[];
  /**
  * device_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#device_policy AccessContextManagerAccessLevels#device_policy}
  */
  readonly devicePolicy?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_subnetworks: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipSubnetworks),
    members: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.members),
    negate: cdktf.booleanToTerraform(struct!.negate),
    regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regions),
    required_access_levels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredAccessLevels),
    device_policy: accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform(struct!.devicePolicy),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasicConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipSubnetworks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSubnetworks = this._ipSubnetworks;
    }
    if (this._members !== undefined) {
      hasAnyValues = true;
      internalValueResult.members = this._members;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._regions !== undefined) {
      hasAnyValues = true;
      internalValueResult.regions = this._regions;
    }
    if (this._requiredAccessLevels !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredAccessLevels = this._requiredAccessLevels;
    }
    if (this._devicePolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devicePolicy = this._devicePolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipSubnetworks = undefined;
      this._members = undefined;
      this._negate = undefined;
      this._regions = undefined;
      this._requiredAccessLevels = undefined;
      this._devicePolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipSubnetworks = value.ipSubnetworks;
      this._members = value.members;
      this._negate = value.negate;
      this._regions = value.regions;
      this._requiredAccessLevels = value.requiredAccessLevels;
      this._devicePolicy.internalValue = value.devicePolicy;
    }
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
  private _devicePolicy = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference(this, "device_policy");
  public get devicePolicy() {
    return this._devicePolicy;
  }
  public putDevicePolicy(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy) {
    this._devicePolicy.internalValue = value;
  }
  public resetDevicePolicy() {
    this._devicePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyInput() {
    return this._devicePolicy.internalValue;
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelsAccessLevelsBasicConditions[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference {
    return new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasic {
  /**
  * How the conditions list should be combined to determine if a request
is granted this AccessLevel. If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#combining_function AccessContextManagerAccessLevels#combining_function}
  */
  readonly combiningFunction?: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#conditions AccessContextManagerAccessLevels#conditions}
  */
  readonly conditions: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[] | cdktf.IResolvable;
}

export function accessContextManagerAccessLevelsAccessLevelsBasicToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combining_function: cdktf.stringToTerraform(struct!.combiningFunction),
    conditions: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform, true)(struct!.conditions),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._combiningFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.combiningFunction = this._combiningFunction;
    }
    if (this._conditions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conditions = this._conditions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._combiningFunction = undefined;
      this._conditions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._combiningFunction = value.combiningFunction;
      this._conditions.internalValue = value.conditions;
    }
  }

  // combining_function - computed: false, optional: true, required: false
  private _combiningFunction?: string; 
  public get combiningFunction() {
    return this.getStringAttribute('combining_function');
  }
  public set combiningFunction(value: string) {
    this._combiningFunction = value;
  }
  public resetCombiningFunction() {
    this._combiningFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combiningFunctionInput() {
    return this._combiningFunction;
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions = new AccessContextManagerAccessLevelsAccessLevelsBasicConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsCustomExpr {
  /**
  * Description of the expression
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#expression AccessContextManagerAccessLevels#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#location AccessContextManagerAccessLevels#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}
  */
  readonly title?: string;
}

export function accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustomExpr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsCustomExpr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsCustomExpr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
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

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsCustom {
  /**
  * expr block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#expr AccessContextManagerAccessLevels#expr}
  */
  readonly expr: AccessContextManagerAccessLevelsAccessLevelsCustomExpr;
}

export function accessContextManagerAccessLevelsAccessLevelsCustomToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustom): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform(struct!.expr),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevelsCustom | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expr?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expr = this._expr?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevelsCustom | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expr.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expr.internalValue = value.expr;
    }
  }

  // expr - computed: false, optional: false, required: true
  private _expr = new AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(this, "expr");
  public get expr() {
    return this._expr;
  }
  public putExpr(value: AccessContextManagerAccessLevelsAccessLevelsCustomExpr) {
    this._expr.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr.internalValue;
  }
}
export interface AccessContextManagerAccessLevelsAccessLevels {
  /**
  * Description of the AccessLevel and its use. Does not affect behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#description AccessContextManagerAccessLevels#description}
  */
  readonly description?: string;
  /**
  * Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#name AccessContextManagerAccessLevels#name}
  */
  readonly name: string;
  /**
  * Human readable title. Must be unique within the Policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#title AccessContextManagerAccessLevels#title}
  */
  readonly title: string;
  /**
  * basic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#basic AccessContextManagerAccessLevels#basic}
  */
  readonly basic?: AccessContextManagerAccessLevelsAccessLevelsBasic;
  /**
  * custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#custom AccessContextManagerAccessLevels#custom}
  */
  readonly custom?: AccessContextManagerAccessLevelsAccessLevelsCustom;
}

export function accessContextManagerAccessLevelsAccessLevelsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    basic: accessContextManagerAccessLevelsAccessLevelsBasicToTerraform(struct!.basic),
    custom: accessContextManagerAccessLevelsAccessLevelsCustomToTerraform(struct!.custom),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AccessContextManagerAccessLevelsAccessLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._custom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.custom = this._custom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerAccessLevelsAccessLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._title = undefined;
      this._basic.internalValue = undefined;
      this._custom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._title = value.title;
      this._basic.internalValue = value.basic;
      this._custom.internalValue = value.custom;
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

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: AccessContextManagerAccessLevelsAccessLevelsBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // custom - computed: false, optional: true, required: false
  private _custom = new AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference(this, "custom");
  public get custom() {
    return this._custom;
  }
  public putCustom(value: AccessContextManagerAccessLevelsAccessLevelsCustom) {
    this._custom.internalValue = value;
  }
  public resetCustom() {
    this._custom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInput() {
    return this._custom.internalValue;
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsList extends cdktf.ComplexList {
  public internalValue? : AccessContextManagerAccessLevelsAccessLevels[] | cdktf.IResolvable

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
  public get(index: number): AccessContextManagerAccessLevelsAccessLevelsOutputReference {
    return new AccessContextManagerAccessLevelsAccessLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AccessContextManagerAccessLevelsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#create AccessContextManagerAccessLevels#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#delete AccessContextManagerAccessLevels#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels#update AccessContextManagerAccessLevels#update}
  */
  readonly update?: string;
}

export function accessContextManagerAccessLevelsTimeoutsToTerraform(struct?: AccessContextManagerAccessLevelsTimeoutsOutputReference | AccessContextManagerAccessLevelsTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerAccessLevelsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AccessContextManagerAccessLevelsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerAccessLevelsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels google_access_context_manager_access_levels}
*/
export class AccessContextManagerAccessLevels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_access_levels";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels google_access_context_manager_access_levels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerAccessLevelsConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessLevelsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_levels',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._id = config.id;
    this._parent = config.parent;
    this._accessLevels.internalValue = config.accessLevels;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels = new AccessContextManagerAccessLevelsAccessLevelsList(this, "access_levels", true);
  public get accessLevels() {
    return this._accessLevels;
  }
  public putAccessLevels(value: AccessContextManagerAccessLevelsAccessLevels[] | cdktf.IResolvable) {
    this._accessLevels.internalValue = value;
  }
  public resetAccessLevels() {
    this._accessLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerAccessLevelsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerAccessLevelsTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      access_levels: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsToTerraform, true)(this._accessLevels.internalValue),
      timeouts: accessContextManagerAccessLevelsTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
