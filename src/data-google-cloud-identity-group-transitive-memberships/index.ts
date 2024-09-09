// https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/cloud_identity_group_transitive_memberships
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleCloudIdentityGroupTransitiveMembershipsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Group to get memberships from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/cloud_identity_group_transitive_memberships#group DataGoogleCloudIdentityGroupTransitiveMemberships#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/cloud_identity_group_transitive_memberships#id DataGoogleCloudIdentityGroupTransitiveMemberships#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey {
}

export function dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyToTerraform(struct?: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyToHclTerraform(struct?: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // namespace - computed: true, optional: false, required: false
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
}

export class DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference {
    return new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles {
}

export function dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesToTerraform(struct?: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesToHclTerraform(struct?: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRoles | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }
}

export class DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference {
    return new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships {
}

export function dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsToTerraform(struct?: DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsToHclTerraform(struct?: DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleCloudIdentityGroupTransitiveMembershipsMemberships | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // member - computed: true, optional: false, required: false
  public get member() {
    return this.getStringAttribute('member');
  }

  // preferred_member_key - computed: true, optional: false, required: false
  private _preferredMemberKey = new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsPreferredMemberKeyList(this, "preferred_member_key", false);
  public get preferredMemberKey() {
    return this._preferredMemberKey;
  }

  // relation_type - computed: true, optional: false, required: false
  public get relationType() {
    return this.getStringAttribute('relation_type');
  }

  // roles - computed: true, optional: false, required: false
  private _roles = new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsRolesList(this, "roles", true);
  public get roles() {
    return this._roles;
  }
}

export class DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference {
    return new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/cloud_identity_group_transitive_memberships google_cloud_identity_group_transitive_memberships}
*/
export class DataGoogleCloudIdentityGroupTransitiveMemberships extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_cloud_identity_group_transitive_memberships";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleCloudIdentityGroupTransitiveMemberships resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleCloudIdentityGroupTransitiveMemberships to import
  * @param importFromId The id of the existing DataGoogleCloudIdentityGroupTransitiveMemberships that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/cloud_identity_group_transitive_memberships#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleCloudIdentityGroupTransitiveMemberships to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_cloud_identity_group_transitive_memberships", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.1.0/docs/data-sources/cloud_identity_group_transitive_memberships google_cloud_identity_group_transitive_memberships} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleCloudIdentityGroupTransitiveMembershipsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleCloudIdentityGroupTransitiveMembershipsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_cloud_identity_group_transitive_memberships',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.1.0',
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // memberships - computed: true, optional: false, required: false
  private _memberships = new DataGoogleCloudIdentityGroupTransitiveMembershipsMembershipsList(this, "memberships", false);
  public get memberships() {
    return this._memberships;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
