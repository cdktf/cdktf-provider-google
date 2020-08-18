// https://www.terraform.io/docs/providers/google/r/project_iam_custom_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface ProjectIamCustomRoleConfig extends TerraformMetaArguments {
  /** A human-readable description for the role. */
  readonly description?: string;
  /** The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified. */
  readonly permissions: string[];
  /** The project that the service account will be created in. Defaults to the provider project configuration. */
  readonly project?: string;
  /** The camel case role id to use for this role. Cannot contain - characters. */
  readonly roleId: string;
  /** The current launch stage of the role. Defaults to GA. */
  readonly stage?: string;
  /** A human-readable title for the role. */
  readonly title: string;
}

// Resource

export class ProjectIamCustomRole extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: ProjectIamCustomRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_project_iam_custom_role',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._permissions = config.permissions;
    this._project = config.project;
    this._roleId = config.roleId;
    this._stage = config.stage;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // deleted - computed: true, optional: false, required: true
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

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

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions: string[];
  public get permissions() {
    return this._permissions;
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId: string;
  public get roleId() {
    return this._roleId;
  }
  public set roleId(value: string) {
    this._roleId = value;
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string;
  public get stage() {
    return this._stage;
  }
  public set stage(value: string | undefined) {
    this._stage = value;
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this._title;
  }
  public set title(value: string) {
    this._title = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      description: this._description,
      permissions: this._permissions,
      project: this._project,
      role_id: this._roleId,
      stage: this._stage,
      title: this._title,
    };
  }
}
