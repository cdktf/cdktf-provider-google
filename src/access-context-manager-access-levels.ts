// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerAccessLevelsConfig extends cdktf.TerraformMetaArguments {
  /** The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id} */
  readonly parent: string;
  /** access_levels block */
  readonly accessLevels?: AccessContextManagerAccessLevelsAccessLevels[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerAccessLevelsTimeouts;
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints {
  /** The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1". */
  readonly minimumVersion?: string;
  /** The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS"] */
  readonly osType: string;
}

function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    minimum_version: cdktf.stringToTerraform(struct!.minimumVersion),
    os_type: cdktf.stringToTerraform(struct!.osType),
  }
}

export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy {
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
  readonly osConstraints?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[];
}

function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_device_management_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedDeviceManagementLevels),
    allowed_encryption_statuses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedEncryptionStatuses),
    require_admin_approval: cdktf.booleanToTerraform(struct!.requireAdminApproval),
    require_corp_owned: cdktf.booleanToTerraform(struct!.requireCorpOwned),
    require_screen_lock: cdktf.booleanToTerraform(struct!.requireScreenLock),
    os_constraints: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform)(struct!.osConstraints),
  }
}

export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditions {
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
  readonly devicePolicy?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy[];
}

function accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    ip_subnetworks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipSubnetworks),
    members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.members),
    negate: cdktf.booleanToTerraform(struct!.negate),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    required_access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requiredAccessLevels),
    device_policy: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform)(struct!.devicePolicy),
  }
}

export interface AccessContextManagerAccessLevelsAccessLevelsBasic {
  /** How the conditions list should be combined to determine if a request
is granted this AccessLevel. If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"] */
  readonly combiningFunction?: string;
  /** conditions block */
  readonly conditions: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[];
}

function accessContextManagerAccessLevelsAccessLevelsBasicToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    combining_function: cdktf.stringToTerraform(struct!.combiningFunction),
    conditions: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform)(struct!.conditions),
  }
}

export interface AccessContextManagerAccessLevelsAccessLevelsCustomExpr {
  /** Description of the expression */
  readonly description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  readonly expression: string;
  /** String indicating the location of the expression for error reporting, e.g. a file name and a position in the file */
  readonly location?: string;
  /** Title for the expression, i.e. a short string describing its purpose. */
  readonly title?: string;
}

function accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomExpr): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export interface AccessContextManagerAccessLevelsAccessLevelsCustom {
  /** expr block */
  readonly expr: AccessContextManagerAccessLevelsAccessLevelsCustomExpr[];
}

function accessContextManagerAccessLevelsAccessLevelsCustomToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    expr: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform)(struct!.expr),
  }
}

export interface AccessContextManagerAccessLevelsAccessLevels {
  /** Description of the AccessLevel and its use. Does not affect behavior. */
  readonly description?: string;
  /** Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name} */
  readonly name: string;
  /** Human readable title. Must be unique within the Policy. */
  readonly title: string;
  /** basic block */
  readonly basic?: AccessContextManagerAccessLevelsAccessLevelsBasic[];
  /** custom block */
  readonly custom?: AccessContextManagerAccessLevelsAccessLevelsCustom[];
}

function accessContextManagerAccessLevelsAccessLevelsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    title: cdktf.stringToTerraform(struct!.title),
    basic: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicToTerraform)(struct!.basic),
    custom: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsCustomToTerraform)(struct!.custom),
  }
}

export interface AccessContextManagerAccessLevelsTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function accessContextManagerAccessLevelsTimeoutsToTerraform(struct?: AccessContextManagerAccessLevelsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class AccessContextManagerAccessLevels extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessLevelsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_levels',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._parent = config.parent;
    this._accessLevels = config.accessLevels;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // access_levels - computed: false, optional: true, required: false
  private _accessLevels?: AccessContextManagerAccessLevelsAccessLevels[];
  public get accessLevels() {
    return this.interpolationForAttribute('access_levels') as any;
  }
  public set accessLevels(value: AccessContextManagerAccessLevelsAccessLevels[] ) {
    this._accessLevels = value;
  }
  public resetAccessLevels() {
    this._accessLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerAccessLevelsTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: AccessContextManagerAccessLevelsTimeouts ) {
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
      parent: cdktf.stringToTerraform(this._parent),
      access_levels: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsToTerraform)(this._accessLevels),
      timeouts: accessContextManagerAccessLevelsTimeoutsToTerraform(this._timeouts),
    };
  }
}
