// https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RuntimeconfigConfigIamMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#config RuntimeconfigConfigIamMember#config}
  */
  readonly config: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#member RuntimeconfigConfigIamMember#member}
  */
  readonly member: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#project RuntimeconfigConfigIamMember#project}
  */
  readonly project?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#role RuntimeconfigConfigIamMember#role}
  */
  readonly role: string;
  /**
  * condition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#condition RuntimeconfigConfigIamMember#condition}
  */
  readonly condition?: RuntimeconfigConfigIamMemberCondition[];
}
export interface RuntimeconfigConfigIamMemberCondition {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#description RuntimeconfigConfigIamMember#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#expression RuntimeconfigConfigIamMember#expression}
  */
  readonly expression: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html#title RuntimeconfigConfigIamMember#title}
  */
  readonly title: string;
}

function runtimeconfigConfigIamMemberConditionToTerraform(struct?: RuntimeconfigConfigIamMemberCondition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html google_runtimeconfig_config_iam_member}
*/
export class RuntimeconfigConfigIamMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_runtimeconfig_config_iam_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/runtimeconfig_config_iam_member.html google_runtimeconfig_config_iam_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RuntimeconfigConfigIamMemberConfig
  */
  public constructor(scope: Construct, id: string, config: RuntimeconfigConfigIamMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'google_runtimeconfig_config_iam_member',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._config = config.config;
    this._member = config.member;
    this._project = config.project;
    this._role = config.role;
    this._condition = config.condition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config: string;
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member - computed: false, optional: false, required: true
  private _member: string;
  public get member() {
    return this.getStringAttribute('member');
  }
  public set member(value: string) {
    this._member = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberInput() {
    return this._member
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // role - computed: false, optional: false, required: true
  private _role: string;
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role
  }

  // condition - computed: false, optional: true, required: false
  private _condition?: RuntimeconfigConfigIamMemberCondition[];
  public get condition() {
    return this.interpolationForAttribute('condition') as any;
  }
  public set condition(value: RuntimeconfigConfigIamMemberCondition[] ) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      member: cdktf.stringToTerraform(this._member),
      project: cdktf.stringToTerraform(this._project),
      role: cdktf.stringToTerraform(this._role),
      condition: cdktf.listMapper(runtimeconfigConfigIamMemberConditionToTerraform)(this._condition),
    };
  }
}
