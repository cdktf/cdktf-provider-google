// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_level.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface AccessContextManagerAccessLevelConfig extends TerraformMetaArguments {
  /** Description of the AccessLevel and its use. Does not affect behavior. */
  readonly description?: string;
  /** Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name} */
  readonly name: string;
  /** The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id} */
  readonly parent: string;
  /** Human readable title. Must be unique within the Policy. */
  readonly title: string;
  /** basic block */
  readonly basic?: AccessContextManagerAccessLevelBasic[];
  /** custom block */
  readonly custom?: AccessContextManagerAccessLevelCustom[];
  /** timeouts block */
  readonly timeouts?: AccessContextManagerAccessLevelTimeouts;
}
export interface AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints {
  /** The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1". */
  readonly minimumVersion?: string;
  /** The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS"] */
  readonly osType: string;
}
export interface AccessContextManagerAccessLevelBasicConditionsDevicePolicy {
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
  readonly osConstraints?: AccessContextManagerAccessLevelBasicConditionsDevicePolicyOsConstraints[];
}
export interface AccessContextManagerAccessLevelBasicConditions {
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
  readonly devicePolicy?: AccessContextManagerAccessLevelBasicConditionsDevicePolicy[];
}
export interface AccessContextManagerAccessLevelBasic {
  /** How the conditions list should be combined to determine if a request
is granted this AccessLevel. If AND is used, each Condition in
conditions must be satisfied for the AccessLevel to be applied. If
OR is used, at least one Condition in conditions must be satisfied
for the AccessLevel to be applied. Default value: "AND" Possible values: ["AND", "OR"] */
  readonly combiningFunction?: string;
  /** conditions block */
  readonly conditions: AccessContextManagerAccessLevelBasicConditions[];
}
export interface AccessContextManagerAccessLevelCustomExpr {
  /** Description of the expression */
  readonly description?: string;
  /** Textual representation of an expression in Common Expression Language syntax. */
  readonly expression: string;
  /** String indicating the location of the expression for error reporting, e.g. a file name and a position in the file */
  readonly location?: string;
  /** Title for the expression, i.e. a short string describing its purpose. */
  readonly title?: string;
}
export interface AccessContextManagerAccessLevelCustom {
  /** expr block */
  readonly expr: AccessContextManagerAccessLevelCustomExpr[];
}
export interface AccessContextManagerAccessLevelTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class AccessContextManagerAccessLevel extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: AccessContextManagerAccessLevelConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_access_level',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._name = config.name;
    this._parent = config.parent;
    this._title = config.title;
    this._basic = config.basic;
    this._custom = config.custom;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this._description;
  }
  public set description(value: string | undefined) {
    this._description = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: false, optional: false, required: true
  private _name: string;
  public get name() {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  // parent - computed: false, optional: false, required: true
  private _parent: string;
  public get parent() {
    return this._parent;
  }
  public set parent(value: string) {
    this._parent = value;
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  // basic - computed: false, optional: true, required: false
  private _basic?: AccessContextManagerAccessLevelBasic[];
  public get basic() {
    return this._basic;
  }
  public set basic(value: AccessContextManagerAccessLevelBasic[] | undefined) {
    this._basic = value;
  }

  // custom - computed: false, optional: true, required: false
  private _custom?: AccessContextManagerAccessLevelCustom[];
  public get custom() {
    return this._custom;
  }
  public set custom(value: AccessContextManagerAccessLevelCustom[] | undefined) {
    this._custom = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerAccessLevelTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: AccessContextManagerAccessLevelTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      name: this._name,
      parent: this._parent,
      title: this._title,
      basic: this._basic,
      custom: this._custom,
      timeouts: this._timeouts,
    };
  }
}
