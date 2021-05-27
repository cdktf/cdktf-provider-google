// https://www.terraform.io/docs/providers/google/r/project_organization_policy.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectOrganizationPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Constraint the Policy is configuring, for example, serviceuser.services.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#constraint ProjectOrganizationPolicy#constraint}
  */
  readonly constraint: string;
  /**
  * The project ID.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#project ProjectOrganizationPolicy#project}
  */
  readonly project: string;
  /**
  * Version of the Policy. Default version is 0.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#version ProjectOrganizationPolicy#version}
  */
  readonly version?: number;
  /**
  * boolean_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#boolean_policy ProjectOrganizationPolicy#boolean_policy}
  */
  readonly booleanPolicy?: ProjectOrganizationPolicyBooleanPolicy[];
  /**
  * list_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#list_policy ProjectOrganizationPolicy#list_policy}
  */
  readonly listPolicy?: ProjectOrganizationPolicyListPolicy[];
  /**
  * restore_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#restore_policy ProjectOrganizationPolicy#restore_policy}
  */
  readonly restorePolicy?: ProjectOrganizationPolicyRestorePolicy[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#timeouts ProjectOrganizationPolicy#timeouts}
  */
  readonly timeouts?: ProjectOrganizationPolicyTimeouts;
}
export interface ProjectOrganizationPolicyBooleanPolicy {
  /**
  * If true, then the Policy is enforced. If false, then any configuration is acceptable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#enforced ProjectOrganizationPolicy#enforced}
  */
  readonly enforced: boolean;
}

function projectOrganizationPolicyBooleanPolicyToTerraform(struct?: ProjectOrganizationPolicyBooleanPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
  }
}

export interface ProjectOrganizationPolicyListPolicyAllow {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#all ProjectOrganizationPolicy#all}
  */
  readonly all?: boolean;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#values ProjectOrganizationPolicy#values}
  */
  readonly values?: string[];
}

function projectOrganizationPolicyListPolicyAllowToTerraform(struct?: ProjectOrganizationPolicyListPolicyAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ProjectOrganizationPolicyListPolicyDeny {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#all ProjectOrganizationPolicy#all}
  */
  readonly all?: boolean;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#values ProjectOrganizationPolicy#values}
  */
  readonly values?: string[];
}

function projectOrganizationPolicyListPolicyDenyToTerraform(struct?: ProjectOrganizationPolicyListPolicyDeny): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export interface ProjectOrganizationPolicyListPolicy {
  /**
  * If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#inherit_from_parent ProjectOrganizationPolicy#inherit_from_parent}
  */
  readonly inheritFromParent?: boolean;
  /**
  * The Google Cloud Console will try to default to a configuration that matches the value specified in this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#suggested_value ProjectOrganizationPolicy#suggested_value}
  */
  readonly suggestedValue?: string;
  /**
  * allow block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#allow ProjectOrganizationPolicy#allow}
  */
  readonly allow?: ProjectOrganizationPolicyListPolicyAllow[];
  /**
  * deny block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#deny ProjectOrganizationPolicy#deny}
  */
  readonly deny?: ProjectOrganizationPolicyListPolicyDeny[];
}

function projectOrganizationPolicyListPolicyToTerraform(struct?: ProjectOrganizationPolicyListPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    suggested_value: cdktf.stringToTerraform(struct!.suggestedValue),
    allow: cdktf.listMapper(projectOrganizationPolicyListPolicyAllowToTerraform)(struct!.allow),
    deny: cdktf.listMapper(projectOrganizationPolicyListPolicyDenyToTerraform)(struct!.deny),
  }
}

export interface ProjectOrganizationPolicyRestorePolicy {
  /**
  * May only be set to true. If set, then the default Policy is restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#default ProjectOrganizationPolicy#default}
  */
  readonly default: boolean;
}

function projectOrganizationPolicyRestorePolicyToTerraform(struct?: ProjectOrganizationPolicyRestorePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
  }
}

export interface ProjectOrganizationPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#create ProjectOrganizationPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#delete ProjectOrganizationPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#read ProjectOrganizationPolicy#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#update ProjectOrganizationPolicy#update}
  */
  readonly update?: string;
}

function projectOrganizationPolicyTimeoutsToTerraform(struct?: ProjectOrganizationPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html google_project_organization_policy}
*/
export class ProjectOrganizationPolicy extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html google_project_organization_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectOrganizationPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectOrganizationPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_organization_policy',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._constraint = config.constraint;
    this._project = config.project;
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

  // project - computed: false, optional: false, required: true
  private _project: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
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
  private _booleanPolicy?: ProjectOrganizationPolicyBooleanPolicy[];
  public get booleanPolicy() {
    return this.interpolationForAttribute('boolean_policy') as any;
  }
  public set booleanPolicy(value: ProjectOrganizationPolicyBooleanPolicy[] ) {
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
  private _listPolicy?: ProjectOrganizationPolicyListPolicy[];
  public get listPolicy() {
    return this.interpolationForAttribute('list_policy') as any;
  }
  public set listPolicy(value: ProjectOrganizationPolicyListPolicy[] ) {
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
  private _restorePolicy?: ProjectOrganizationPolicyRestorePolicy[];
  public get restorePolicy() {
    return this.interpolationForAttribute('restore_policy') as any;
  }
  public set restorePolicy(value: ProjectOrganizationPolicyRestorePolicy[] ) {
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
  private _timeouts?: ProjectOrganizationPolicyTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: ProjectOrganizationPolicyTimeouts ) {
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
      project: cdktf.stringToTerraform(this._project),
      version: cdktf.numberToTerraform(this._version),
      boolean_policy: cdktf.listMapper(projectOrganizationPolicyBooleanPolicyToTerraform)(this._booleanPolicy),
      list_policy: cdktf.listMapper(projectOrganizationPolicyListPolicyToTerraform)(this._listPolicy),
      restore_policy: cdktf.listMapper(projectOrganizationPolicyRestorePolicyToTerraform)(this._restorePolicy),
      timeouts: projectOrganizationPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
