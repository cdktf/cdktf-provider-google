// https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerAccessLevelsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The AccessPolicy this AccessLevel lives in.
Format: accessPolicies/{policy_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#parent AccessContextManagerAccessLevels#parent}
  */
  readonly parent: string;
  /**
  * access_levels block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#access_levels AccessContextManagerAccessLevels#access_levels}
  */
  readonly accessLevels?: AccessContextManagerAccessLevelsAccessLevels[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#timeouts AccessContextManagerAccessLevels#timeouts}
  */
  readonly timeouts?: AccessContextManagerAccessLevelsTimeouts;
}
export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints {
  /**
  * The minimum allowed OS version. If not set, any version
of this OS satisfies the constraint.
Format: "major.minor.patch" such as "10.5.301", "9.2.1".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#minimum_version AccessContextManagerAccessLevels#minimum_version}
  */
  readonly minimumVersion?: string;
  /**
  * The operating system type of the device. Possible values: ["OS_UNSPECIFIED", "DESKTOP_MAC", "DESKTOP_WINDOWS", "DESKTOP_LINUX", "DESKTOP_CHROME_OS", "ANDROID", "IOS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#os_type AccessContextManagerAccessLevels#os_type}
  */
  readonly osType: string;
}

function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minimum_version: cdktf.stringToTerraform(struct!.minimumVersion),
    os_type: cdktf.stringToTerraform(struct!.osType),
  }
}

export interface AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy {
  /**
  * A list of allowed device management levels.
An empty list allows all management levels. Possible values: ["MANAGEMENT_UNSPECIFIED", "NONE", "BASIC", "COMPLETE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#allowed_device_management_levels AccessContextManagerAccessLevels#allowed_device_management_levels}
  */
  readonly allowedDeviceManagementLevels?: string[];
  /**
  * A list of allowed encryptions statuses.
An empty list allows all statuses. Possible values: ["ENCRYPTION_UNSPECIFIED", "ENCRYPTION_UNSUPPORTED", "UNENCRYPTED", "ENCRYPTED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#allowed_encryption_statuses AccessContextManagerAccessLevels#allowed_encryption_statuses}
  */
  readonly allowedEncryptionStatuses?: string[];
  /**
  * Whether the device needs to be approved by the customer admin.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#require_admin_approval AccessContextManagerAccessLevels#require_admin_approval}
  */
  readonly requireAdminApproval?: boolean | cdktf.IResolvable;
  /**
  * Whether the device needs to be corp owned.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#require_corp_owned AccessContextManagerAccessLevels#require_corp_owned}
  */
  readonly requireCorpOwned?: boolean | cdktf.IResolvable;
  /**
  * Whether or not screenlock is required for the DevicePolicy
to be true. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#require_screen_lock AccessContextManagerAccessLevels#require_screen_lock}
  */
  readonly requireScreenLock?: boolean | cdktf.IResolvable;
  /**
  * os_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#os_constraints AccessContextManagerAccessLevels#os_constraints}
  */
  readonly osConstraints?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[];
}

function accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_device_management_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedDeviceManagementLevels),
    allowed_encryption_statuses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedEncryptionStatuses),
    require_admin_approval: cdktf.booleanToTerraform(struct!.requireAdminApproval),
    require_corp_owned: cdktf.booleanToTerraform(struct!.requireCorpOwned),
    require_screen_lock: cdktf.booleanToTerraform(struct!.requireScreenLock),
    os_constraints: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraintsToTerraform)(struct!.osConstraints),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allowed_device_management_levels - computed: false, optional: true, required: false
  private _allowedDeviceManagementLevels?: string[] | undefined; 
  public get allowedDeviceManagementLevels() {
    return this.getListAttribute('allowed_device_management_levels');
  }
  public set allowedDeviceManagementLevels(value: string[] | undefined) {
    this._allowedDeviceManagementLevels = value;
  }
  public resetAllowedDeviceManagementLevels() {
    this._allowedDeviceManagementLevels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDeviceManagementLevelsInput() {
    return this._allowedDeviceManagementLevels
  }

  // allowed_encryption_statuses - computed: false, optional: true, required: false
  private _allowedEncryptionStatuses?: string[] | undefined; 
  public get allowedEncryptionStatuses() {
    return this.getListAttribute('allowed_encryption_statuses');
  }
  public set allowedEncryptionStatuses(value: string[] | undefined) {
    this._allowedEncryptionStatuses = value;
  }
  public resetAllowedEncryptionStatuses() {
    this._allowedEncryptionStatuses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedEncryptionStatusesInput() {
    return this._allowedEncryptionStatuses
  }

  // require_admin_approval - computed: false, optional: true, required: false
  private _requireAdminApproval?: boolean | cdktf.IResolvable | undefined; 
  public get requireAdminApproval() {
    return this.getBooleanAttribute('require_admin_approval') as any;
  }
  public set requireAdminApproval(value: boolean | cdktf.IResolvable | undefined) {
    this._requireAdminApproval = value;
  }
  public resetRequireAdminApproval() {
    this._requireAdminApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAdminApprovalInput() {
    return this._requireAdminApproval
  }

  // require_corp_owned - computed: false, optional: true, required: false
  private _requireCorpOwned?: boolean | cdktf.IResolvable | undefined; 
  public get requireCorpOwned() {
    return this.getBooleanAttribute('require_corp_owned') as any;
  }
  public set requireCorpOwned(value: boolean | cdktf.IResolvable | undefined) {
    this._requireCorpOwned = value;
  }
  public resetRequireCorpOwned() {
    this._requireCorpOwned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireCorpOwnedInput() {
    return this._requireCorpOwned
  }

  // require_screen_lock - computed: false, optional: true, required: false
  private _requireScreenLock?: boolean | cdktf.IResolvable | undefined; 
  public get requireScreenLock() {
    return this.getBooleanAttribute('require_screen_lock') as any;
  }
  public set requireScreenLock(value: boolean | cdktf.IResolvable | undefined) {
    this._requireScreenLock = value;
  }
  public resetRequireScreenLock() {
    this._requireScreenLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireScreenLockInput() {
    return this._requireScreenLock
  }

  // os_constraints - computed: false, optional: true, required: false
  private _osConstraints?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | undefined; 
  public get osConstraints() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('os_constraints') as any;
  }
  public set osConstraints(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyOsConstraints[] | undefined) {
    this._osConstraints = value;
  }
  public resetOsConstraints() {
    this._osConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osConstraintsInput() {
    return this._osConstraints
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#ip_subnetworks AccessContextManagerAccessLevels#ip_subnetworks}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#members AccessContextManagerAccessLevels#members}
  */
  readonly members?: string[];
  /**
  * Whether to negate the Condition. If true, the Condition becomes
a NAND over its non-empty fields, each field must be false for
the Condition overall to be satisfied. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#negate AccessContextManagerAccessLevels#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The request must originate from one of the provided
countries/regions.
Format: A valid ISO 3166-1 alpha-2 code.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#regions AccessContextManagerAccessLevels#regions}
  */
  readonly regions?: string[];
  /**
  * A list of other access levels defined in the same Policy,
referenced by resource name. Referencing an AccessLevel which
does not exist is an error. All access levels listed must be
granted for the Condition to be true.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#required_access_levels AccessContextManagerAccessLevels#required_access_levels}
  */
  readonly requiredAccessLevels?: string[];
  /**
  * device_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#device_policy AccessContextManagerAccessLevels#device_policy}
  */
  readonly devicePolicy?: AccessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicy;
}

function accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicConditions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_subnetworks: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipSubnetworks),
    members: cdktf.listMapper(cdktf.stringToTerraform)(struct!.members),
    negate: cdktf.booleanToTerraform(struct!.negate),
    regions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.regions),
    required_access_levels: cdktf.listMapper(cdktf.stringToTerraform)(struct!.requiredAccessLevels),
    device_policy: accessContextManagerAccessLevelsAccessLevelsBasicConditionsDevicePolicyToTerraform(struct!.devicePolicy),
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#combining_function AccessContextManagerAccessLevels#combining_function}
  */
  readonly combiningFunction?: string;
  /**
  * conditions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#conditions AccessContextManagerAccessLevels#conditions}
  */
  readonly conditions: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[];
}

function accessContextManagerAccessLevelsAccessLevelsBasicToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference | AccessContextManagerAccessLevelsAccessLevelsBasic): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    combining_function: cdktf.stringToTerraform(struct!.combiningFunction),
    conditions: cdktf.listMapper(accessContextManagerAccessLevelsAccessLevelsBasicConditionsToTerraform)(struct!.conditions),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsBasicOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // combining_function - computed: false, optional: true, required: false
  private _combiningFunction?: string | undefined; 
  public get combiningFunction() {
    return this.getStringAttribute('combining_function');
  }
  public set combiningFunction(value: string | undefined) {
    this._combiningFunction = value;
  }
  public resetCombiningFunction() {
    this._combiningFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get combiningFunctionInput() {
    return this._combiningFunction
  }

  // conditions - computed: false, optional: false, required: true
  private _conditions?: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[]; 
  public get conditions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('conditions') as any;
  }
  public set conditions(value: AccessContextManagerAccessLevelsAccessLevelsBasicConditions[]) {
    this._conditions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsCustomExpr {
  /**
  * Description of the expression
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#description AccessContextManagerAccessLevels#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#expression AccessContextManagerAccessLevels#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#location AccessContextManagerAccessLevels#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#title AccessContextManagerAccessLevels#title}
  */
  readonly title?: string;
}

function accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustomExpr): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
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
    return this._expression
  }

  // location - computed: false, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // title - computed: false, optional: true, required: false
  private _title?: string | undefined; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string | undefined) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }
}
export interface AccessContextManagerAccessLevelsAccessLevelsCustom {
  /**
  * expr block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#expr AccessContextManagerAccessLevels#expr}
  */
  readonly expr: AccessContextManagerAccessLevelsAccessLevelsCustomExpr;
}

function accessContextManagerAccessLevelsAccessLevelsCustomToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference | AccessContextManagerAccessLevelsAccessLevelsCustom): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expr: accessContextManagerAccessLevelsAccessLevelsCustomExprToTerraform(struct!.expr),
  }
}

export class AccessContextManagerAccessLevelsAccessLevelsCustomOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // expr - computed: false, optional: false, required: true
  private _expr?: AccessContextManagerAccessLevelsAccessLevelsCustomExpr; 
  private __exprOutput = new AccessContextManagerAccessLevelsAccessLevelsCustomExprOutputReference(this as any, "expr", true);
  public get expr() {
    return this.__exprOutput;
  }
  public putExpr(value: AccessContextManagerAccessLevelsAccessLevelsCustomExpr) {
    this._expr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get exprInput() {
    return this._expr
  }
}
export interface AccessContextManagerAccessLevelsAccessLevels {
  /**
  * Description of the AccessLevel and its use. Does not affect behavior.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#description AccessContextManagerAccessLevels#description}
  */
  readonly description?: string;
  /**
  * Resource name for the Access Level. The short_name component must begin
with a letter and only include alphanumeric and '_'.
Format: accessPolicies/{policy_id}/accessLevels/{short_name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#name AccessContextManagerAccessLevels#name}
  */
  readonly name: string;
  /**
  * Human readable title. Must be unique within the Policy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#title AccessContextManagerAccessLevels#title}
  */
  readonly title: string;
  /**
  * basic block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#basic AccessContextManagerAccessLevels#basic}
  */
  readonly basic?: AccessContextManagerAccessLevelsAccessLevelsBasic;
  /**
  * custom block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#custom AccessContextManagerAccessLevels#custom}
  */
  readonly custom?: AccessContextManagerAccessLevelsAccessLevelsCustom;
}

function accessContextManagerAccessLevelsAccessLevelsToTerraform(struct?: AccessContextManagerAccessLevelsAccessLevels): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

export interface AccessContextManagerAccessLevelsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#create AccessContextManagerAccessLevels#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#delete AccessContextManagerAccessLevels#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html#update AccessContextManagerAccessLevels#update}
  */
  readonly update?: string;
}

function accessContextManagerAccessLevelsTimeoutsToTerraform(struct?: AccessContextManagerAccessLevelsTimeoutsOutputReference | AccessContextManagerAccessLevelsTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html google_access_context_manager_access_levels}
*/
export class AccessContextManagerAccessLevels extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_access_context_manager_access_levels";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_access_levels.html google_access_context_manager_access_levels} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerAccessLevelsConfig
  */
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
  private _parent?: string; 
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
  private _accessLevels?: AccessContextManagerAccessLevelsAccessLevels[] | undefined; 
  public get accessLevels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('access_levels') as any;
  }
  public set accessLevels(value: AccessContextManagerAccessLevelsAccessLevels[] | undefined) {
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
  private _timeouts?: AccessContextManagerAccessLevelsTimeouts | undefined; 
  private __timeoutsOutput = new AccessContextManagerAccessLevelsTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AccessContextManagerAccessLevelsTimeouts | undefined) {
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
