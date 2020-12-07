// https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIdentityGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /** The name of the Group to create this membership in. */
  readonly group: string;
  /** preferred_member_key block */
  readonly preferredMemberKey?: CloudIdentityGroupMembershipPreferredMemberKey[];
  /** roles block */
  readonly roles: CloudIdentityGroupMembershipRoles[];
  /** timeouts block */
  readonly timeouts?: CloudIdentityGroupMembershipTimeouts;
}
export interface CloudIdentityGroupMembershipPreferredMemberKey {
  /** The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace. */
  readonly id: string;
  /** The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'. */
  readonly namespace?: string;
}

function cloudIdentityGroupMembershipPreferredMemberKeyToTerraform(struct?: CloudIdentityGroupMembershipPreferredMemberKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export interface CloudIdentityGroupMembershipRoles {
  /** The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"] */
  readonly name: string;
}

function cloudIdentityGroupMembershipRolesToTerraform(struct?: CloudIdentityGroupMembershipRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CloudIdentityGroupMembershipTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

function cloudIdentityGroupMembershipTimeoutsToTerraform(struct?: CloudIdentityGroupMembershipTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


// Resource

export class CloudIdentityGroupMembership extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

  public constructor(scope: Construct, id: string, config: CloudIdentityGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._group = config.group;
    this._preferredMemberKey = config.preferredMemberKey;
    this._roles = config.roles;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // group - computed: false, optional: false, required: true
  private _group: string;
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // preferred_member_key - computed: false, optional: true, required: false
  private _preferredMemberKey?: CloudIdentityGroupMembershipPreferredMemberKey[];
  public get preferredMemberKey() {
    return this.interpolationForAttribute('preferred_member_key') as any;
  }
  public set preferredMemberKey(value: CloudIdentityGroupMembershipPreferredMemberKey[] ) {
    this._preferredMemberKey = value;
  }
  public resetPreferredMemberKey() {
    this._preferredMemberKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMemberKeyInput() {
    return this._preferredMemberKey
  }

  // roles - computed: false, optional: false, required: true
  private _roles: CloudIdentityGroupMembershipRoles[];
  public get roles() {
    return this.interpolationForAttribute('roles') as any;
  }
  public set roles(value: CloudIdentityGroupMembershipRoles[]) {
    this._roles = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: CloudIdentityGroupMembershipTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: CloudIdentityGroupMembershipTimeouts ) {
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
      group: cdktf.stringToTerraform(this._group),
      preferred_member_key: cdktf.listMapper(cloudIdentityGroupMembershipPreferredMemberKeyToTerraform)(this._preferredMemberKey),
      roles: cdktf.listMapper(cloudIdentityGroupMembershipRolesToTerraform)(this._roles),
      timeouts: cloudIdentityGroupMembershipTimeoutsToTerraform(this._timeouts),
    };
  }
}
