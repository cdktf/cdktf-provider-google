// https://www.terraform.io/docs/providers/google/r/project_iam_custom_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectIamCustomRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description for the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role#description ProjectIamCustomRole#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role#id ProjectIamCustomRole#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role#permissions ProjectIamCustomRole#permissions}
  */
  readonly permissions: string[];
  /**
  * The project that the service account will be created in. Defaults to the provider project configuration.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role#project ProjectIamCustomRole#project}
  */
  readonly project?: string;
  /**
  * The camel case role id to use for this role. Cannot contain - characters.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role#role_id ProjectIamCustomRole#role_id}
  */
  readonly roleId: string;
  /**
  * The current launch stage of the role. Defaults to GA.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role#stage ProjectIamCustomRole#stage}
  */
  readonly stage?: string;
  /**
  * A human-readable title for the role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role#title ProjectIamCustomRole#title}
  */
  readonly title: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role google_project_iam_custom_role}
*/
export class ProjectIamCustomRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_project_iam_custom_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/project_iam_custom_role google_project_iam_custom_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectIamCustomRoleConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectIamCustomRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_iam_custom_role',
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
    this._description = config.description;
    this._id = config.id;
    this._permissions = config.permissions;
    this._project = config.project;
    this._roleId = config.roleId;
    this._stage = config.stage;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: string[]; 
  public get permissions() {
    return cdktf.Fn.tolist(this.getListAttribute('permissions'));
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
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
    return this._project;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId?: string; 
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string; 
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      permissions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._permissions),
      project: cdktf.stringToTerraform(this._project),
      role_id: cdktf.stringToTerraform(this._roleId),
      stage: cdktf.stringToTerraform(this._stage),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
