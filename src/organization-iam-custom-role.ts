// https://www.terraform.io/docs/providers/google/r/organization_iam_custom_role.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrganizationIamCustomRoleConfig extends cdktf.TerraformMetaArguments {
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

export class OrganizationIamCustomRole extends cdktf.TerraformResource {

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

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // permissions - computed: false, optional: false, required: true
  private _permissions: string[];
  public get permissions() {
    return this.getListAttribute('permissions');
  }
  public set permissions(value: string[]) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions
  }

  // role_id - computed: false, optional: false, required: true
  private _roleId: string;
  public get roleId() {
    return this.getStringAttribute('role_id');
  }
  public set roleId(value: string) {
    this._roleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleIdInput() {
    return this._roleId
  }

  // stage - computed: false, optional: true, required: false
  private _stage?: string;
  public get stage() {
    return this.getStringAttribute('stage');
  }
  public set stage(value: string ) {
    this._stage = value;
  }
  public resetStage() {
    this._stage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stageInput() {
    return this._stage
  }

  // title - computed: false, optional: false, required: true
  private _title: string;
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      org_id: cdktf.stringToTerraform(this._orgId),
      permissions: cdktf.listMapper(cdktf.stringToTerraform)(this._permissions),
      role_id: cdktf.stringToTerraform(this._roleId),
      stage: cdktf.stringToTerraform(this._stage),
      title: cdktf.stringToTerraform(this._title),
    };
  }
}
