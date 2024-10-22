/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudIdentityGroupMembershipConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Group to create this membership in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#group CloudIdentityGroupMembership#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * preferred_member_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#preferred_member_key CloudIdentityGroupMembership#preferred_member_key}
  */
  readonly preferredMemberKey?: CloudIdentityGroupMembershipPreferredMemberKey;
  /**
  * roles block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#roles CloudIdentityGroupMembership#roles}
  */
  readonly roles: CloudIdentityGroupMembershipRoles[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#timeouts CloudIdentityGroupMembership#timeouts}
  */
  readonly timeouts?: CloudIdentityGroupMembershipTimeouts;
}
export interface CloudIdentityGroupMembershipPreferredMemberKey {
  /**
  * The ID of the entity.
  * 
  * For Google-managed entities, the id must be the email address of an existing
  * group or user.
  * 
  * For external-identity-mapped entities, the id must be a string conforming
  * to the Identity Source's requirements.
  * 
  * Must be unique within a namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#id CloudIdentityGroupMembership#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The namespace in which the entity exists.
  * 
  * If not specified, the EntityKey represents a Google-managed entity
  * such as a Google user or a Google Group.
  * 
  * If specified, the EntityKey represents an external-identity-mapped group.
  * The namespace must correspond to an identity source created in Admin Console
  * and must be in the form of 'identitysources/{identity_source_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#namespace CloudIdentityGroupMembership#namespace}
  */
  readonly namespace?: string;
}

export function cloudIdentityGroupMembershipPreferredMemberKeyToTerraform(struct?: CloudIdentityGroupMembershipPreferredMemberKeyOutputReference | CloudIdentityGroupMembershipPreferredMemberKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function cloudIdentityGroupMembershipPreferredMemberKeyToHclTerraform(struct?: CloudIdentityGroupMembershipPreferredMemberKeyOutputReference | CloudIdentityGroupMembershipPreferredMemberKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIdentityGroupMembershipPreferredMemberKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudIdentityGroupMembershipPreferredMemberKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIdentityGroupMembershipPreferredMemberKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._namespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._namespace = value.namespace;
    }
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
    return this._id;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface CloudIdentityGroupMembershipRolesExpiryDetail {
  /**
  * The time at which the MembershipRole will expire.
  * 
  * A timestamp in RFC3339 UTC "Zulu" format, with nanosecond
  * resolution and up to nine fractional digits.
  * 
  * Examples: "2014-10-02T15:01:23Z" and "2014-10-02T15:01:23.045123456Z".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#expire_time CloudIdentityGroupMembership#expire_time}
  */
  readonly expireTime: string;
}

export function cloudIdentityGroupMembershipRolesExpiryDetailToTerraform(struct?: CloudIdentityGroupMembershipRolesExpiryDetailOutputReference | CloudIdentityGroupMembershipRolesExpiryDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expire_time: cdktf.stringToTerraform(struct!.expireTime),
  }
}


export function cloudIdentityGroupMembershipRolesExpiryDetailToHclTerraform(struct?: CloudIdentityGroupMembershipRolesExpiryDetailOutputReference | CloudIdentityGroupMembershipRolesExpiryDetail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expire_time: {
      value: cdktf.stringToHclTerraform(struct!.expireTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIdentityGroupMembershipRolesExpiryDetailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudIdentityGroupMembershipRolesExpiryDetail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expireTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expireTime = this._expireTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIdentityGroupMembershipRolesExpiryDetail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expireTime = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expireTime = value.expireTime;
    }
  }

  // expire_time - computed: false, optional: false, required: true
  private _expireTime?: string; 
  public get expireTime() {
    return this.getStringAttribute('expire_time');
  }
  public set expireTime(value: string) {
    this._expireTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expireTimeInput() {
    return this._expireTime;
  }
}
export interface CloudIdentityGroupMembershipRoles {
  /**
  * The name of the MembershipRole. Must be one of OWNER, MANAGER, MEMBER. Possible values: ["OWNER", "MANAGER", "MEMBER"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#name CloudIdentityGroupMembership#name}
  */
  readonly name: string;
  /**
  * expiry_detail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#expiry_detail CloudIdentityGroupMembership#expiry_detail}
  */
  readonly expiryDetail?: CloudIdentityGroupMembershipRolesExpiryDetail;
}

export function cloudIdentityGroupMembershipRolesToTerraform(struct?: CloudIdentityGroupMembershipRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    expiry_detail: cloudIdentityGroupMembershipRolesExpiryDetailToTerraform(struct!.expiryDetail),
  }
}


export function cloudIdentityGroupMembershipRolesToHclTerraform(struct?: CloudIdentityGroupMembershipRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry_detail: {
      value: cloudIdentityGroupMembershipRolesExpiryDetailToHclTerraform(struct!.expiryDetail),
      isBlock: true,
      type: "list",
      storageClassType: "CloudIdentityGroupMembershipRolesExpiryDetailList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIdentityGroupMembershipRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CloudIdentityGroupMembershipRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._expiryDetail?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryDetail = this._expiryDetail?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIdentityGroupMembershipRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._expiryDetail.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._expiryDetail.internalValue = value.expiryDetail;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // expiry_detail - computed: false, optional: true, required: false
  private _expiryDetail = new CloudIdentityGroupMembershipRolesExpiryDetailOutputReference(this, "expiry_detail");
  public get expiryDetail() {
    return this._expiryDetail;
  }
  public putExpiryDetail(value: CloudIdentityGroupMembershipRolesExpiryDetail) {
    this._expiryDetail.internalValue = value;
  }
  public resetExpiryDetail() {
    this._expiryDetail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDetailInput() {
    return this._expiryDetail.internalValue;
  }
}

export class CloudIdentityGroupMembershipRolesList extends cdktf.ComplexList {
  public internalValue? : CloudIdentityGroupMembershipRoles[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CloudIdentityGroupMembershipRolesOutputReference {
    return new CloudIdentityGroupMembershipRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CloudIdentityGroupMembershipTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#create CloudIdentityGroupMembership#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#delete CloudIdentityGroupMembership#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#update CloudIdentityGroupMembership#update}
  */
  readonly update?: string;
}

export function cloudIdentityGroupMembershipTimeoutsToTerraform(struct?: CloudIdentityGroupMembershipTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudIdentityGroupMembershipTimeoutsToHclTerraform(struct?: CloudIdentityGroupMembershipTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudIdentityGroupMembershipTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudIdentityGroupMembershipTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudIdentityGroupMembershipTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership google_cloud_identity_group_membership}
*/
export class CloudIdentityGroupMembership extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_identity_group_membership";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudIdentityGroupMembership resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudIdentityGroupMembership to import
  * @param importFromId The id of the existing CloudIdentityGroupMembership that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudIdentityGroupMembership to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_identity_group_membership", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.8.0/docs/resources/cloud_identity_group_membership google_cloud_identity_group_membership} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudIdentityGroupMembershipConfig
  */
  public constructor(scope: Construct, id: string, config: CloudIdentityGroupMembershipConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group_membership',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.8.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._group = config.group;
    this._id = config.id;
    this._preferredMemberKey.internalValue = config.preferredMemberKey;
    this._roles.internalValue = config.roles;
    this._timeouts.internalValue = config.timeouts;
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
    return this._group;
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

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // preferred_member_key - computed: false, optional: true, required: false
  private _preferredMemberKey = new CloudIdentityGroupMembershipPreferredMemberKeyOutputReference(this, "preferred_member_key");
  public get preferredMemberKey() {
    return this._preferredMemberKey;
  }
  public putPreferredMemberKey(value: CloudIdentityGroupMembershipPreferredMemberKey) {
    this._preferredMemberKey.internalValue = value;
  }
  public resetPreferredMemberKey() {
    this._preferredMemberKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredMemberKeyInput() {
    return this._preferredMemberKey.internalValue;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new CloudIdentityGroupMembershipRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: CloudIdentityGroupMembershipRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudIdentityGroupMembershipTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudIdentityGroupMembershipTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      preferred_member_key: cloudIdentityGroupMembershipPreferredMemberKeyToTerraform(this._preferredMemberKey.internalValue),
      roles: cdktf.listMapper(cloudIdentityGroupMembershipRolesToTerraform, true)(this._roles.internalValue),
      timeouts: cloudIdentityGroupMembershipTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_member_key: {
        value: cloudIdentityGroupMembershipPreferredMemberKeyToHclTerraform(this._preferredMemberKey.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudIdentityGroupMembershipPreferredMemberKeyList",
      },
      roles: {
        value: cdktf.listMapperHcl(cloudIdentityGroupMembershipRolesToHclTerraform, true)(this._roles.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CloudIdentityGroupMembershipRolesList",
      },
      timeouts: {
        value: cloudIdentityGroupMembershipTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudIdentityGroupMembershipTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
