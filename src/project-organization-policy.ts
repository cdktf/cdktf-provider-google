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
  readonly booleanPolicy?: ProjectOrganizationPolicyBooleanPolicy;
  /**
  * list_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#list_policy ProjectOrganizationPolicy#list_policy}
  */
  readonly listPolicy?: ProjectOrganizationPolicyListPolicy;
  /**
  * restore_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#restore_policy ProjectOrganizationPolicy#restore_policy}
  */
  readonly restorePolicy?: ProjectOrganizationPolicyRestorePolicy;
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
  readonly enforced: boolean | cdktf.IResolvable;
}

function projectOrganizationPolicyBooleanPolicyToTerraform(struct?: ProjectOrganizationPolicyBooleanPolicyOutputReference | ProjectOrganizationPolicyBooleanPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enforced: cdktf.booleanToTerraform(struct!.enforced),
  }
}

export class ProjectOrganizationPolicyBooleanPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // enforced - computed: false, optional: false, required: true
  private _enforced?: boolean | cdktf.IResolvable; 
  public get enforced() {
    return this.getBooleanAttribute('enforced') as any;
  }
  public set enforced(value: boolean | cdktf.IResolvable) {
    this._enforced = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enforcedInput() {
    return this._enforced
  }
}
export interface ProjectOrganizationPolicyListPolicyAllow {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#all ProjectOrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#values ProjectOrganizationPolicy#values}
  */
  readonly values?: string[];
}

function projectOrganizationPolicyListPolicyAllowToTerraform(struct?: ProjectOrganizationPolicyListPolicyAllowOutputReference | ProjectOrganizationPolicyListPolicyAllow): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class ProjectOrganizationPolicyListPolicyAllowOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable | undefined; 
  public get all() {
    return this.getBooleanAttribute('all') as any;
  }
  public set all(value: boolean | cdktf.IResolvable | undefined) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[] | undefined; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[] | undefined) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface ProjectOrganizationPolicyListPolicyDeny {
  /**
  * The policy allows or denies all values.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#all ProjectOrganizationPolicy#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * The policy can define specific values that are allowed or denied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#values ProjectOrganizationPolicy#values}
  */
  readonly values?: string[];
}

function projectOrganizationPolicyListPolicyDenyToTerraform(struct?: ProjectOrganizationPolicyListPolicyDenyOutputReference | ProjectOrganizationPolicyListPolicyDeny): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    values: cdktf.listMapper(cdktf.stringToTerraform)(struct!.values),
  }
}

export class ProjectOrganizationPolicyListPolicyDenyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable | undefined; 
  public get all() {
    return this.getBooleanAttribute('all') as any;
  }
  public set all(value: boolean | cdktf.IResolvable | undefined) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[] | undefined; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[] | undefined) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values
  }
}
export interface ProjectOrganizationPolicyListPolicy {
  /**
  * If set to true, the values from the effective Policy of the parent resource are inherited, meaning the values set in this Policy are added to the values inherited up the hierarchy.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#inherit_from_parent ProjectOrganizationPolicy#inherit_from_parent}
  */
  readonly inheritFromParent?: boolean | cdktf.IResolvable;
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
  readonly allow?: ProjectOrganizationPolicyListPolicyAllow;
  /**
  * deny block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#deny ProjectOrganizationPolicy#deny}
  */
  readonly deny?: ProjectOrganizationPolicyListPolicyDeny;
}

function projectOrganizationPolicyListPolicyToTerraform(struct?: ProjectOrganizationPolicyListPolicyOutputReference | ProjectOrganizationPolicyListPolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inherit_from_parent: cdktf.booleanToTerraform(struct!.inheritFromParent),
    suggested_value: cdktf.stringToTerraform(struct!.suggestedValue),
    allow: projectOrganizationPolicyListPolicyAllowToTerraform(struct!.allow),
    deny: projectOrganizationPolicyListPolicyDenyToTerraform(struct!.deny),
  }
}

export class ProjectOrganizationPolicyListPolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // inherit_from_parent - computed: false, optional: true, required: false
  private _inheritFromParent?: boolean | cdktf.IResolvable | undefined; 
  public get inheritFromParent() {
    return this.getBooleanAttribute('inherit_from_parent') as any;
  }
  public set inheritFromParent(value: boolean | cdktf.IResolvable | undefined) {
    this._inheritFromParent = value;
  }
  public resetInheritFromParent() {
    this._inheritFromParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritFromParentInput() {
    return this._inheritFromParent
  }

  // suggested_value - computed: true, optional: true, required: false
  private _suggestedValue?: string | undefined; 
  public get suggestedValue() {
    return this.getStringAttribute('suggested_value');
  }
  public set suggestedValue(value: string | undefined) {
    this._suggestedValue = value;
  }
  public resetSuggestedValue() {
    this._suggestedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suggestedValueInput() {
    return this._suggestedValue
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: ProjectOrganizationPolicyListPolicyAllow | undefined; 
  private __allowOutput = new ProjectOrganizationPolicyListPolicyAllowOutputReference(this as any, "allow", true);
  public get allow() {
    return this.__allowOutput;
  }
  public putAllow(value: ProjectOrganizationPolicyListPolicyAllow | undefined) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow
  }

  // deny - computed: false, optional: true, required: false
  private _deny?: ProjectOrganizationPolicyListPolicyDeny | undefined; 
  private __denyOutput = new ProjectOrganizationPolicyListPolicyDenyOutputReference(this as any, "deny", true);
  public get deny() {
    return this.__denyOutput;
  }
  public putDeny(value: ProjectOrganizationPolicyListPolicyDeny | undefined) {
    this._deny = value;
  }
  public resetDeny() {
    this._deny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denyInput() {
    return this._deny
  }
}
export interface ProjectOrganizationPolicyRestorePolicy {
  /**
  * May only be set to true. If set, then the default Policy is restored.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html#default ProjectOrganizationPolicy#default}
  */
  readonly default: boolean | cdktf.IResolvable;
}

function projectOrganizationPolicyRestorePolicyToTerraform(struct?: ProjectOrganizationPolicyRestorePolicyOutputReference | ProjectOrganizationPolicyRestorePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.booleanToTerraform(struct!.default),
  }
}

export class ProjectOrganizationPolicyRestorePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // default - computed: false, optional: false, required: true
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default') as any;
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default
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

function projectOrganizationPolicyTimeoutsToTerraform(struct?: ProjectOrganizationPolicyTimeoutsOutputReference | ProjectOrganizationPolicyTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ProjectOrganizationPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // read - computed: false, optional: true, required: false
  private _read?: string | undefined; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string | undefined) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/project_organization_policy.html google_project_organization_policy}
*/
export class ProjectOrganizationPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_project_organization_policy";

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
  private _constraint?: string; 
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
  private _project?: string; 
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
  private _version?: number | undefined; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number | undefined) {
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
  private _booleanPolicy?: ProjectOrganizationPolicyBooleanPolicy | undefined; 
  private __booleanPolicyOutput = new ProjectOrganizationPolicyBooleanPolicyOutputReference(this as any, "boolean_policy", true);
  public get booleanPolicy() {
    return this.__booleanPolicyOutput;
  }
  public putBooleanPolicy(value: ProjectOrganizationPolicyBooleanPolicy | undefined) {
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
  private _listPolicy?: ProjectOrganizationPolicyListPolicy | undefined; 
  private __listPolicyOutput = new ProjectOrganizationPolicyListPolicyOutputReference(this as any, "list_policy", true);
  public get listPolicy() {
    return this.__listPolicyOutput;
  }
  public putListPolicy(value: ProjectOrganizationPolicyListPolicy | undefined) {
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
  private _restorePolicy?: ProjectOrganizationPolicyRestorePolicy | undefined; 
  private __restorePolicyOutput = new ProjectOrganizationPolicyRestorePolicyOutputReference(this as any, "restore_policy", true);
  public get restorePolicy() {
    return this.__restorePolicyOutput;
  }
  public putRestorePolicy(value: ProjectOrganizationPolicyRestorePolicy | undefined) {
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
  private _timeouts?: ProjectOrganizationPolicyTimeouts | undefined; 
  private __timeoutsOutput = new ProjectOrganizationPolicyTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: ProjectOrganizationPolicyTimeouts | undefined) {
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
      boolean_policy: projectOrganizationPolicyBooleanPolicyToTerraform(this._booleanPolicy),
      list_policy: projectOrganizationPolicyListPolicyToTerraform(this._listPolicy),
      restore_policy: projectOrganizationPolicyRestorePolicyToTerraform(this._restorePolicy),
      timeouts: projectOrganizationPolicyTimeoutsToTerraform(this._timeouts),
    };
  }
}
