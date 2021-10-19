// https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerGcpUserAccessBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required. Access level that a user must have to be granted access. Only one access level is supported, not multiple. This repeated field must have exactly one element. Example: "accessPolicies/9522/accessLevels/device_trusted"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html#access_levels AccessContextManagerGcpUserAccessBinding#access_levels}
  */
  readonly accessLevels: string[];
  /**
  * Required. Immutable. Google Group id whose members are subject to this binding's restrictions. See "id" in the G Suite Directory API's Groups resource. If a group's email address/alias is changed, this resource will continue to point at the changed group. This field does not accept group email addresses or aliases. Example: "01d520gv4vjcrht"
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html#group_key AccessContextManagerGcpUserAccessBinding#group_key}
  */
  readonly groupKey: string;
  /**
  * Required. ID of the parent organization.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html#organization_id AccessContextManagerGcpUserAccessBinding#organization_id}
  */
  readonly organizationId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html#timeouts AccessContextManagerGcpUserAccessBinding#timeouts}
  */
  readonly timeouts?: AccessContextManagerGcpUserAccessBindingTimeouts;
}
export interface AccessContextManagerGcpUserAccessBindingTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html#create AccessContextManagerGcpUserAccessBinding#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html#delete AccessContextManagerGcpUserAccessBinding#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html#update AccessContextManagerGcpUserAccessBinding#update}
  */
  readonly update?: string;
}

function accessContextManagerGcpUserAccessBindingTimeoutsToTerraform(struct?: AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference | AccessContextManagerGcpUserAccessBindingTimeouts): any {
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

export class AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html google_access_context_manager_gcp_user_access_binding}
*/
export class AccessContextManagerGcpUserAccessBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_access_context_manager_gcp_user_access_binding";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/access_context_manager_gcp_user_access_binding.html google_access_context_manager_gcp_user_access_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerGcpUserAccessBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerGcpUserAccessBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_gcp_user_access_binding',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._accessLevels = config.accessLevels;
    this._groupKey = config.groupKey;
    this._organizationId = config.organizationId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_levels - computed: false, optional: false, required: true
  private _accessLevels?: string[]; 
  public get accessLevels() {
    return this.getListAttribute('access_levels');
  }
  public set accessLevels(value: string[]) {
    this._accessLevels = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelsInput() {
    return this._accessLevels
  }

  // group_key - computed: false, optional: false, required: true
  private _groupKey?: string; 
  public get groupKey() {
    return this.getStringAttribute('group_key');
  }
  public set groupKey(value: string) {
    this._groupKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupKeyInput() {
    return this._groupKey
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: AccessContextManagerGcpUserAccessBindingTimeouts | undefined; 
  private __timeoutsOutput = new AccessContextManagerGcpUserAccessBindingTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: AccessContextManagerGcpUserAccessBindingTimeouts | undefined) {
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
      access_levels: cdktf.listMapper(cdktf.stringToTerraform)(this._accessLevels),
      group_key: cdktf.stringToTerraform(this._groupKey),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      timeouts: accessContextManagerGcpUserAccessBindingTimeoutsToTerraform(this._timeouts),
    };
  }
}
