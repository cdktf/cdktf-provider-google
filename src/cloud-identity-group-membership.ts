// https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIdentityGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Group to create this membership in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#group CloudIdentityGroupMembership#group}
  */
  readonly group: string;
  /**
  * preferred_member_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#preferred_member_key CloudIdentityGroupMembership#preferred_member_key}
  */
  readonly preferredMemberKey?: CloudIdentityGroupMembershipPreferredMemberKey;
  /**
  * roles block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#roles CloudIdentityGroupMembership#roles}
  */
  readonly roles: CloudIdentityGroupMembershipRoles[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#timeouts CloudIdentityGroupMembership#timeouts}
  */
  readonly timeouts?: CloudIdentityGroupMembershipTimeouts;
}
export interface CloudIdentityGroupMembershipPreferredMemberKey {
  /**
  * The ID of the entity.

For Google-managed entities, the id must be the email address of an existing
group or user.

For external-identity-mapped entities, the id must be a string conforming
to the Identity Source's requirements.

Must be unique within a namespace.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#id CloudIdentityGroupMembership#id}
  */
  readonly id: string;
  /**
  * The namespace in which the entity exists.

If not specified, the EntityKey represents a Google-managed entity
such as a Google user or a Google Group.

If specified, the EntityKey represents an external-identity-mapped group.
The namespace must correspond to an identity source created in Admin Console
and must be in the form of 'identitysources/{identity_source_id}'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#namespace CloudIdentityGroupMembership#namespace}
  */
  readonly namespace?: string;
}

function cloudIdentityGroupMembershipPreferredMemberKeyToTerraform(struct?: CloudIdentityGroupMembershipPreferredMemberKeyOutputReference | CloudIdentityGroupMembershipPreferredMemberKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}

export class CloudIdentityGroupMembershipPreferredMemberKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string | undefined; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string | undefined) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace
  }
}
export interface CloudIdentityGroupMembershipRoles {
  /**
  * The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#name CloudIdentityGroupMembership#name}
  */
  readonly name: string;
}

function cloudIdentityGroupMembershipRolesToTerraform(struct?: CloudIdentityGroupMembershipRoles): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export interface CloudIdentityGroupMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#create CloudIdentityGroupMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#delete CloudIdentityGroupMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html#update CloudIdentityGroupMembership#update}
  */
  readonly update?: string;
}

function cloudIdentityGroupMembershipTimeoutsToTerraform(struct?: CloudIdentityGroupMembershipTimeoutsOutputReference | CloudIdentityGroupMembershipTimeouts): any {
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

export class CloudIdentityGroupMembershipTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html google_cloud_identity_group_membership}
*/
export class CloudIdentityGroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_cloud_identity_group_membership";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/cloud_identity_group_membership.html google_cloud_identity_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIdentityGroupMembershipConfig
  */
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
  private _group?: string; 
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
  private _preferredMemberKey?: CloudIdentityGroupMembershipPreferredMemberKey | undefined; 
  private __preferredMemberKeyOutput = new CloudIdentityGroupMembershipPreferredMemberKeyOutputReference(this as any, "preferred_member_key", true);
  public get preferredMemberKey() {
    return this.__preferredMemberKeyOutput;
  }
  public putPreferredMemberKey(value: CloudIdentityGroupMembershipPreferredMemberKey | undefined) {
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
  private _roles?: CloudIdentityGroupMembershipRoles[]; 
  public get roles() {
    // Getting the computed value is not yet implemented
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
  private _timeouts?: CloudIdentityGroupMembershipTimeouts | undefined; 
  private __timeoutsOutput = new CloudIdentityGroupMembershipTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: CloudIdentityGroupMembershipTimeouts | undefined) {
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
      preferred_member_key: cloudIdentityGroupMembershipPreferredMemberKeyToTerraform(this._preferredMemberKey),
      roles: cdktf.listMapper(cloudIdentityGroupMembershipRolesToTerraform)(this._roles),
      timeouts: cloudIdentityGroupMembershipTimeoutsToTerraform(this._timeouts),
    };
  }
}
