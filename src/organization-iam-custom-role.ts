// https://www.terraform.io/docs/providers/google/r/organization_iam_custom_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface OrganizationIamCustomRoleConfig extends TerraformMetaArguments {
  /** A human-readable description for the role. */
  readonly description?: string;
  /** The numeric ID of the organization in which you want to create a custom role. */
  readonly orgId: string;
  /** The names of the permissions this role grants when bound in an IAM policy. At least one permission must be specified. */
  readonly permissions: string[];
  /** The role id to use for this role. */
  readonly roleId: string;
  /** The current launch stage of the role. Defaults to GA. */
  readonly stage?: string;
  /** A human-readable title for the role. */
  readonly title: string;
}

// Resource

export class OrganizationIamCustomRole extends TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: OrganizationIamCustomRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'google_organization_iam_custom_role',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._orgId = config.orgId;
    this._permissions = config.permissions;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId: string;
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string) {
    this._orgId = value;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions: string[];
  public get permissions() {
    return this._permissions;
  }
  public set permissions(value: string[]) {
    this._permissions = value;
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
      org_id: this._orgId,
      permissions: this._permissions,
      role_id: this._roleId,
      stage: this._stage,
      title: this._title,
    };
  }
}
