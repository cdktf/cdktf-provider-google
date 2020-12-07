// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level_condition.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerAccessLevelConditionConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Access Level to add this condition to. */
  readonly accessLevel: string;
  /** A list of CIDR block IP subnetwork specification. May be IPv4
or IPv6.
Note that for a CIDR IP address block, the specified IP address
portion must be properly truncated (i.e. all the host bits must
be zero) or the input is considered malformed. For example,
"192.0.2.0/24" is accepted but "192.0.2.1/24" is not. Similarly,
for IPv6, "2001:db8::/32" is accepted whereas "2001:db8::1/32"
is not. The originating IP of a request must be in one of the
listed subnets in order for this Condition to be true.
If empty, all IP addresses are allowed. */
  readonly ipSubnetworks?: string[];
  /** An allowed list of members (users, service accounts).
Using groups is not supported yet.

The signed-in user originating the request must be a part of one
of the provided members. If not specified, a request may come
from any user (logged in/not logged in, not present in any
groups, etc.).
Formats: 'user:{emailid}', 'serviceAccount:{emailid}' */
  readonly members?: string[];
  /** Whether to negate the Condition. If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false. */
  readonly negate?: boolean;
  /** The request must originate from one of the provided
countries/regions.
Format: A valid ISO 3166-1 alpha-2 code. */
  readonly regions?: string[];
  /** A list of other access levels defined in the same Policy,
referenced by resource name. Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name} */
  readonly requiredAccessLevels?: string[];
  /** device_policy block */
  readonly devicePolicy?: AccessContextManagerAccessLevelConditionDevicePolicy[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerAccessLevelConditionTimeouts;
}
export interface AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints {
  /** The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1". */
  readonly minimumVersion?: string;
  /** The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS"] */
  readonly osType: string;
}

function accessContextManagerAccessLevelConditionDevicePolicyOsConstraintsToTerraform(struct?: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    minimum_version: cdktf.stringToTerraform(struct!.minimumVersion),
    os_type: cdktf.stringToTerraform(struct!.osType),
  }
}

export interface AccessContextManagerAccessLevelConditionDevicePolicy {
  /** A list of allowed device management levels.
An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"] */
  readonly allowedDeviceManagementLevels?: string[];
  /** A list of allowed encryptions statuses.
An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"] */
  readonly allowedEncryptionStatuses?: string[];
  /** Whether the device needs to be approved by the customer admin. */
  readonly requireAdminApproval?: boolean;
  /** Whether the device needs to be corp owned. */
  readonly requireCorpOwned?: boolean;
  /** Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false. */
  readonly requireScreenLock?: boolean;
  /** os_constraints block */
  readonly osConstraints?: AccessContextManagerAccessLevelConditionDevicePolicyOsConstraints[];
}

function accessContextManagerAccessLevelConditionDevicePolicyToTerraform(struct?: AccessContextManagerAccessLevelConditionDevicePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_device_management_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedDeviceManagementLevels),
    allowed_encryption_statuses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedEncryptionStatuses),
    require_admin_approval: cdktf.booleanToTerraform(struct!.requireAdminApproval),
    require_corp_owned: cdktf.booleanToTerraform(struct!.requireCorpOwned),
    require_screen_lock: cdktf.booleanToTerraform(struct!.requireScreenLock),
    os_constraints: cdktf.listMapper(accessContextManagerAccessLevelConditionDevicePolicyOsConstraintsToTerraform)(struct!.osConstraints),
  }
}

export interface AccessContextManagerAccessLevelConditionTimeouts {
  readonly create?: string;
  readonly delete?: string;
}

function accessContextManagerAccessLevelConditionTimeoutsToTerraform(struct?: AccessContextManagerAccessLevelConditionTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


// Resource

export class AccessContextManagerAccessLevelCondition extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessLevelConditionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_level_condition',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessLevel = config.accessLevel;
    this._ipSubnetworks = config.ipSubnetworks;
    this._members = config.members;
    this._negate = config.negate;
    this._regions = config.regions;
    this._requiredAccessLevels = config.requiredAccessLevels;
    this._devicePolicy = config.devicePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: false, optional: false, required: true
  private _accessLevel: string;
  public get accessLevel() {
    return this.getStringAttribute('access_level');
  }
  public set accessLevel(value: string) {
    this._accessLevel = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelInput() {
    return this._accessLevel
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_subnetworks - computed: false, optional: true, required: false
  private _ipSubnetworks?: string[];
  public get ipSubnetworks() {
    return this.getListAttribute('ip_subnetworks');
  }
  public set ipSubnetworks(value: string[] ) {
    this._ipSubnetworks = value;
  }
  public resetIpSubnetworks() {
    this._ipSubnetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSubnetworksInput() {
    return this._ipSubnetworks
  }

  // members - computed: false, optional: true, required: false
  private _members?: string[];
  public get members() {
    return this.getListAttribute('members');
  }
  public set members(value: string[] ) {
    this._members = value;
  }
  public resetMembers() {
    this._members = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get membersInput() {
    return this._members
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean;
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean ) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate
  }

  // regions - computed: false, optional: true, required: false
  private _regions?: string[];
  public get regions() {
    return this.getListAttribute('regions');
  }
  public set regions(value: string[] ) {
    this._regions = value;
  }
  public resetRegions() {
    this._regions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionsInput() {
    return this._regions
  }

  // required_access_levels - computed: false, optional: true, required: false
  private _requiredAccessLevels?: string[];
  public get requiredAccessLevels() {
    return this.getListAttribute('required_access_levels');
  }
  public set requiredAccessLevels(value: string[] ) {
    this._requiredAccessLevels = value;
  }
  public resetRequiredAccessLevels() {
    this._requiredAccessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredAccessLevelsInput() {
    return this._requiredAccessLevels
  }

  // device_policy - computed: false, optional: true, required: false
  private _devicePolicy?: AccessContextManagerAccessLevelConditionDevicePolicy[];
  public get devicePolicy() {
    return this.interpolationForAttribute('device_policy') as any;
  }
  public set devicePolicy(value: AccessContextManagerAccessLevelConditionDevicePolicy[] ) {
    this._devicePolicy = value;
  }
  public resetDevicePolicy() {
    this._devicePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePolicyInput() {
    return this._devicePolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerAccessLevelConditionTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AccessContextManagerAccessLevelConditionTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level: cdktf.stringToTerraform(this._accessLevel),
      ip_subnetworks: cdktf.listMapper(cdktf.stringToTerraform)(this._ipSubnetworks),
      members: cdktf.listMapper(cdktf.stringToTerraform)(this._members),
      negate: cdktf.booleanToTerraform(this._negate),
      regions: cdktf.listMapper(cdktf.stringToTerraform)(this._regions),
      required_access_levels: cdktf.listMapper(cdktf.stringToTerraform)(this._requiredAccessLevels),
      device_policy: cdktf.listMapper(accessContextManagerAccessLevelConditionDevicePolicyToTerraform)(this._devicePolicy),
      timeouts: accessContextManagerAccessLevelConditionTimeoutsToTerraform(this._timeouts),
    };
  }
}
