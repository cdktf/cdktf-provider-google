/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityposturePostureDeploymentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the posture deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#description SecurityposturePostureDeployment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#id SecurityposturePostureDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource, eg. global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#location SecurityposturePostureDeployment#location}
  */
  readonly location: string;
  /**
  * The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#parent SecurityposturePostureDeployment#parent}
  */
  readonly parent: string;
  /**
  * ID of the posture deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#posture_deployment_id SecurityposturePostureDeployment#posture_deployment_id}
  */
  readonly postureDeploymentId: string;
  /**
  * Relative name of the posture which needs to be deployed. It should be in the format:
  *   organizations/{organization_id}/locations/{location}/postures/{posture_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#posture_id SecurityposturePostureDeployment#posture_id}
  */
  readonly postureId: string;
  /**
  * Revision_id the posture which needs to be deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#posture_revision_id SecurityposturePostureDeployment#posture_revision_id}
  */
  readonly postureRevisionId: string;
  /**
  * The resource on which the posture should be deployed. This can be in one of the following formats:
  * projects/{project_number},
  * folders/{folder_number},
  * organizations/{organization_id}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#target_resource SecurityposturePostureDeployment#target_resource}
  */
  readonly targetResource: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#timeouts SecurityposturePostureDeployment#timeouts}
  */
  readonly timeouts?: SecurityposturePostureDeploymentTimeouts;
}
export interface SecurityposturePostureDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#create SecurityposturePostureDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#delete SecurityposturePostureDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#update SecurityposturePostureDeployment#update}
  */
  readonly update?: string;
}

export function securityposturePostureDeploymentTimeoutsToTerraform(struct?: SecurityposturePostureDeploymentTimeouts | cdktf.IResolvable): any {
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


export function securityposturePostureDeploymentTimeoutsToHclTerraform(struct?: SecurityposturePostureDeploymentTimeouts | cdktf.IResolvable): any {
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

export class SecurityposturePostureDeploymentTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurityposturePostureDeploymentTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SecurityposturePostureDeploymentTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment google_securityposture_posture_deployment}
*/
export class SecurityposturePostureDeployment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_securityposture_posture_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityposturePostureDeployment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityposturePostureDeployment to import
  * @param importFromId The id of the existing SecurityposturePostureDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityposturePostureDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_securityposture_posture_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/securityposture_posture_deployment google_securityposture_posture_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityposturePostureDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityposturePostureDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_securityposture_posture_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.39.0',
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
    this._description = config.description;
    this._id = config.id;
    this._location = config.location;
    this._parent = config.parent;
    this._postureDeploymentId = config.postureDeploymentId;
    this._postureId = config.postureId;
    this._postureRevisionId = config.postureRevisionId;
    this._targetResource = config.targetResource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // desired_posture_id - computed: true, optional: false, required: false
  public get desiredPostureId() {
    return this.getStringAttribute('desired_posture_id');
  }

  // desired_posture_revision_id - computed: true, optional: false, required: false
  public get desiredPostureRevisionId() {
    return this.getStringAttribute('desired_posture_revision_id');
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // failure_message - computed: true, optional: false, required: false
  public get failureMessage() {
    return this.getStringAttribute('failure_message');
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // posture_deployment_id - computed: false, optional: false, required: true
  private _postureDeploymentId?: string; 
  public get postureDeploymentId() {
    return this.getStringAttribute('posture_deployment_id');
  }
  public set postureDeploymentId(value: string) {
    this._postureDeploymentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureDeploymentIdInput() {
    return this._postureDeploymentId;
  }

  // posture_id - computed: false, optional: false, required: true
  private _postureId?: string; 
  public get postureId() {
    return this.getStringAttribute('posture_id');
  }
  public set postureId(value: string) {
    this._postureId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureIdInput() {
    return this._postureId;
  }

  // posture_revision_id - computed: false, optional: false, required: true
  private _postureRevisionId?: string; 
  public get postureRevisionId() {
    return this.getStringAttribute('posture_revision_id');
  }
  public set postureRevisionId(value: string) {
    this._postureRevisionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postureRevisionIdInput() {
    return this._postureRevisionId;
  }

  // reconciling - computed: true, optional: false, required: false
  public get reconciling() {
    return this.getBooleanAttribute('reconciling');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // target_resource - computed: false, optional: false, required: true
  private _targetResource?: string; 
  public get targetResource() {
    return this.getStringAttribute('target_resource');
  }
  public set targetResource(value: string) {
    this._targetResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetResourceInput() {
    return this._targetResource;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurityposturePostureDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurityposturePostureDeploymentTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      parent: cdktf.stringToTerraform(this._parent),
      posture_deployment_id: cdktf.stringToTerraform(this._postureDeploymentId),
      posture_id: cdktf.stringToTerraform(this._postureId),
      posture_revision_id: cdktf.stringToTerraform(this._postureRevisionId),
      target_resource: cdktf.stringToTerraform(this._targetResource),
      timeouts: securityposturePostureDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posture_deployment_id: {
        value: cdktf.stringToHclTerraform(this._postureDeploymentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posture_id: {
        value: cdktf.stringToHclTerraform(this._postureId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      posture_revision_id: {
        value: cdktf.stringToHclTerraform(this._postureRevisionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_resource: {
        value: cdktf.stringToHclTerraform(this._targetResource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: securityposturePostureDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurityposturePostureDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
