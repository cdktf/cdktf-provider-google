/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerAuthorizedOrgsDescConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of entities that need to use the authorization relationship during
  * evaluation, such as a device. Valid values are "ASSET_TYPE_DEVICE" and
  * "ASSET_TYPE_CREDENTIAL_STRENGTH". Possible values: ["ASSET_TYPE_DEVICE", "ASSET_TYPE_CREDENTIAL_STRENGTH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#asset_type AccessContextManagerAuthorizedOrgsDesc#asset_type}
  */
  readonly assetType?: string;
  /**
  * The direction of the authorization relationship between this organization
  * and the organizations listed in the "orgs" field. The valid values for this
  * field include the following:
  * 
  * AUTHORIZATION_DIRECTION_FROM: Allows this organization to evaluate traffic
  * in the organizations listed in the 'orgs' field.
  * 
  * AUTHORIZATION_DIRECTION_TO: Allows the organizations listed in the 'orgs'
  * field to evaluate the traffic in this organization.
  * 
  * For the authorization relationship to take effect, all of the organizations
  * must authorize and specify the appropriate relationship direction. For
  * example, if organization A authorized organization B and C to evaluate its
  * traffic, by specifying "AUTHORIZATION_DIRECTION_TO" as the authorization
  * direction, organizations B and C must specify
  * "AUTHORIZATION_DIRECTION_FROM" as the authorization direction in their
  * "AuthorizedOrgsDesc" resource. Possible values: ["AUTHORIZATION_DIRECTION_TO", "AUTHORIZATION_DIRECTION_FROM"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#authorization_direction AccessContextManagerAuthorizedOrgsDesc#authorization_direction}
  */
  readonly authorizationDirection?: string;
  /**
  * A granular control type for authorization levels. Valid value is "AUTHORIZATION_TYPE_TRUST". Possible values: ["AUTHORIZATION_TYPE_TRUST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#authorization_type AccessContextManagerAuthorizedOrgsDesc#authorization_type}
  */
  readonly authorizationType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#id AccessContextManagerAuthorizedOrgsDesc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource name for the 'AuthorizedOrgsDesc'. Format:
  * 'accessPolicies/{access_policy}/authorizedOrgsDescs/{authorized_orgs_desc}'.
  * The 'authorized_orgs_desc' component must begin with a letter, followed by
  * alphanumeric characters or '_'.
  * After you create an 'AuthorizedOrgsDesc', you cannot change its 'name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#name AccessContextManagerAuthorizedOrgsDesc#name}
  */
  readonly name: string;
  /**
  * The list of organization ids in this AuthorizedOrgsDesc.
  * Format: 'organizations/<org_number>'
  * Example: 'organizations/123456'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#orgs AccessContextManagerAuthorizedOrgsDesc#orgs}
  */
  readonly orgs?: string[];
  /**
  * Required. Resource name for the access policy which owns this 'AuthorizedOrgsDesc'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#parent AccessContextManagerAuthorizedOrgsDesc#parent}
  */
  readonly parent: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#timeouts AccessContextManagerAuthorizedOrgsDesc#timeouts}
  */
  readonly timeouts?: AccessContextManagerAuthorizedOrgsDescTimeouts;
}
export interface AccessContextManagerAuthorizedOrgsDescTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#create AccessContextManagerAuthorizedOrgsDesc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#delete AccessContextManagerAuthorizedOrgsDesc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#update AccessContextManagerAuthorizedOrgsDesc#update}
  */
  readonly update?: string;
}

export function accessContextManagerAuthorizedOrgsDescTimeoutsToTerraform(struct?: AccessContextManagerAuthorizedOrgsDescTimeouts | cdktf.IResolvable): any {
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


export function accessContextManagerAuthorizedOrgsDescTimeoutsToHclTerraform(struct?: AccessContextManagerAuthorizedOrgsDescTimeouts | cdktf.IResolvable): any {
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

export class AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerAuthorizedOrgsDescTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AccessContextManagerAuthorizedOrgsDescTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc}
*/
export class AccessContextManagerAuthorizedOrgsDesc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_authorized_orgs_desc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessContextManagerAuthorizedOrgsDesc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerAuthorizedOrgsDesc to import
  * @param importFromId The id of the existing AccessContextManagerAuthorizedOrgsDesc that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerAuthorizedOrgsDesc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_authorized_orgs_desc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.29.1/docs/resources/access_context_manager_authorized_orgs_desc google_access_context_manager_authorized_orgs_desc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerAuthorizedOrgsDescConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerAuthorizedOrgsDescConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_authorized_orgs_desc',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.29.1',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assetType = config.assetType;
    this._authorizationDirection = config.authorizationDirection;
    this._authorizationType = config.authorizationType;
    this._id = config.id;
    this._name = config.name;
    this._orgs = config.orgs;
    this._parent = config.parent;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asset_type - computed: false, optional: true, required: false
  private _assetType?: string; 
  public get assetType() {
    return this.getStringAttribute('asset_type');
  }
  public set assetType(value: string) {
    this._assetType = value;
  }
  public resetAssetType() {
    this._assetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assetTypeInput() {
    return this._assetType;
  }

  // authorization_direction - computed: false, optional: true, required: false
  private _authorizationDirection?: string; 
  public get authorizationDirection() {
    return this.getStringAttribute('authorization_direction');
  }
  public set authorizationDirection(value: string) {
    this._authorizationDirection = value;
  }
  public resetAuthorizationDirection() {
    this._authorizationDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationDirectionInput() {
    return this._authorizationDirection;
  }

  // authorization_type - computed: false, optional: true, required: false
  private _authorizationType?: string; 
  public get authorizationType() {
    return this.getStringAttribute('authorization_type');
  }
  public set authorizationType(value: string) {
    this._authorizationType = value;
  }
  public resetAuthorizationType() {
    this._authorizationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationTypeInput() {
    return this._authorizationType;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // orgs - computed: false, optional: true, required: false
  private _orgs?: string[]; 
  public get orgs() {
    return this.getListAttribute('orgs');
  }
  public set orgs(value: string[]) {
    this._orgs = value;
  }
  public resetOrgs() {
    this._orgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgsInput() {
    return this._orgs;
  }

  // parent - computed: false, optional: false, required: true
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerAuthorizedOrgsDescTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerAuthorizedOrgsDescTimeouts) {
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
      asset_type: cdktf.stringToTerraform(this._assetType),
      authorization_direction: cdktf.stringToTerraform(this._authorizationDirection),
      authorization_type: cdktf.stringToTerraform(this._authorizationType),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      orgs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._orgs),
      parent: cdktf.stringToTerraform(this._parent),
      timeouts: accessContextManagerAuthorizedOrgsDescTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asset_type: {
        value: cdktf.stringToHclTerraform(this._assetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_direction: {
        value: cdktf.stringToHclTerraform(this._authorizationDirection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_type: {
        value: cdktf.stringToHclTerraform(this._authorizationType),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      orgs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._orgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: accessContextManagerAuthorizedOrgsDescTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerAuthorizedOrgsDescTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
