// https://www.terraform.io/docs/providers/google/r/organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Constraint the Policy is configuring, for example, serviceuser.services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#constraint OrganizationPolicy#constraint}
  */
  readonly constraint: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#org_id OrganizationPolicy#org_id}
  */
  readonly orgId: string;
  /**
  * Version of the Policy. Default version is 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#version OrganizationPolicy#version}
  */
  readonly version?: number;
  /**
  * boolean_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#boolean_policy OrganizationPolicy#boolean_policy}
  */
  readonly booleanPolicy?: OrganizationPolicyBooleanPolicy[];
  /**
  * list_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#list_policy OrganizationPolicy#list_policy}
  */
  readonly listPolicy?: OrganizationPolicyListPolicy[];
  /**
  * restore_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#restore_policy OrganizationPolicy#restore_policy}
  */
  readonly restorePolicy?: OrganizationPolicyRestorePolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#timeouts OrganizationPolicy#timeouts}
  */
  readonly timeouts?: OrganizationPolicyTimeouts;
}
export interface OrganizationPolicyBooleanPolicy {
  /**
  * If true, then the Policy is enforced. If false, then any configuration is acceptable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#enforced OrganizationPolicy#enforced}
  */
  readonly enforced: boolean | cdktf.IResolvable;
}

function organizationPolicyBooleanPolicyToTerraform(struct?: OrganizationPolicyBooleanPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
  }
}

export interface OrganizationPolicyListPolicyAllow {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#all OrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#values OrganizationPolicy#values}
  */
  readonly values?: string[];
}

function organizationPolicyListPolicyAllowToTerraform(struct?: OrganizationPolicyListPolicyAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface OrganizationPolicyListPolicyDeny {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#all OrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#values OrganizationPolicy#values}
  */
  readonly values?: string[];
}

function organizationPolicyListPolicyDenyToTerraform(struct?: OrganizationPolicyListPolicyDeny): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface OrganizationPolicyListPolicy {
  /**
  * If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#inherit_from_parent OrganizationPolicy#inherit_from_parent}
  */
  readonly inheritFromParent?: boolean | cdktf.IResolvable;
  /**
  * The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#suggested_value OrganizationPolicy#suggested_value}
  */
  readonly suggestedValue?: string;
  /**
  * allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#allow OrganizationPolicy#allow}
  */
  readonly allow?: OrganizationPolicyListPolicyAllow[];
  /**
  * deny block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#deny OrganizationPolicy#deny}
  */
  readonly deny?: OrganizationPolicyListPolicyDeny[];
}

function organizationPolicyListPolicyToTerraform(struct?: OrganizationPolicyListPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    suggested_value: cdktf.stringToTerraform(struct!.suggestedValue),
    allow: cdktf.listMapper(organizationPolicyListPolicyAllowToTerraform)(struct!.allow),
    deny: cdktf.listMapper(organizationPolicyListPolicyDenyToTerraform)(struct!.deny),
  }
}

export interface OrganizationPolicyRestorePolicy {
  /**
  * May only be set to true. If set, then the default Policy is restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#default OrganizationPolicy#default}
  */
  readonly default: boolean | cdktf.IResolvable;
}

function organizationPolicyRestorePolicyToTerraform(struct?: OrganizationPolicyRestorePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
  }
}

export interface OrganizationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#create OrganizationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#delete OrganizationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#read OrganizationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html#update OrganizationPolicy#update}
  */
  readonly update?: string;
}

function organizationPolicyTimeoutsToTerraform(struct?: OrganizationPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html google_organization_policy}
*/
export class OrganizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_organization_policy";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/organization_policy.html google_organization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrganizationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: OrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._orgId = config.orgId;
    this._version = config.version;
    this._booleanPolicy = config.booleanPolicy;
    this._listPolicy = config.listPolicy;
    this._restorePolicy = config.restorePolicy;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // constraint - computed: false, optional: false, required: true
  private _constraint: string;
  public get constraint() {
    return this.getStringAttribute('constraint');
  }
  public set constraint(value: string) {
    this._constraint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintInput() {
    return this._constraint
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // version - computed: true, optional: true, required: false
  private _version?: number;
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version
  }

  // boolean_policy - computed: false, optional: true, required: false
  private _booleanPolicy?: OrganizationPolicyBooleanPolicy[];
  public get booleanPolicy() {
    return this.interpolationForAttribute('boolean_policy') as any;
  }
  public set booleanPolicy(value: OrganizationPolicyBooleanPolicy[] ) {
    this._booleanPolicy = value;
  }
  public resetBooleanPolicy() {
    this._booleanPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get booleanPolicyInput() {
    return this._booleanPolicy
  }

  // list_policy - computed: false, optional: true, required: false
  private _listPolicy?: OrganizationPolicyListPolicy[];
  public get listPolicy() {
    return this.interpolationForAttribute('list_policy') as any;
  }
  public set listPolicy(value: OrganizationPolicyListPolicy[] ) {
    this._listPolicy = value;
  }
  public resetListPolicy() {
    this._listPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listPolicyInput() {
    return this._listPolicy
  }

  // restore_policy - computed: false, optional: true, required: false
  private _restorePolicy?: OrganizationPolicyRestorePolicy[];
  public get restorePolicy() {
    return this.interpolationForAttribute('restore_policy') as any;
  }
  public set restorePolicy(value: OrganizationPolicyRestorePolicy[] ) {
    this._restorePolicy = value;
  }
  public resetRestorePolicy() {
    this._restorePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restorePolicyInput() {
    return this._restorePolicy
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: OrganizationPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: OrganizationPolicyTimeouts ) {
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
      constraint: cdktf.stringToTerraform(this._constraint),
      org_id: cdktf.stringToTerraform(this._orgId),
      version: cdktf.numberToTerraform(this._version),
      boolean_policy: cdktf.listMapper(organizationPolicyBooleanPolicyToTerraform)(this._booleanPolicy),
      list_policy: cdktf.listMapper(organizationPolicyListPolicyToTerraform)(this._listPolicy),
      restore_policy: cdktf.listMapper(organizationPolicyRestorePolicyToTerraform)(this._restorePolicy),
      timeouts: organizationPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
