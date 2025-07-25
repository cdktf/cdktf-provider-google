/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AccessContextManagerIngressPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy#id AccessContextManagerIngressPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the Service Perimeter to add this resource to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy#ingress_policy_name AccessContextManagerIngressPolicy#ingress_policy_name}
  */
  readonly ingressPolicyName: string;
  /**
  * A GCP resource that is inside of the service perimeter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy#resource AccessContextManagerIngressPolicy#resource}
  */
  readonly resource: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy#timeouts AccessContextManagerIngressPolicy#timeouts}
  */
  readonly timeouts?: AccessContextManagerIngressPolicyTimeouts;
}
export interface AccessContextManagerIngressPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy#create AccessContextManagerIngressPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy#delete AccessContextManagerIngressPolicy#delete}
  */
  readonly delete?: string;
}

export function accessContextManagerIngressPolicyTimeoutsToTerraform(struct?: AccessContextManagerIngressPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function accessContextManagerIngressPolicyTimeoutsToHclTerraform(struct?: AccessContextManagerIngressPolicyTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AccessContextManagerIngressPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AccessContextManagerIngressPolicyTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AccessContextManagerIngressPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy google_access_context_manager_ingress_policy}
*/
export class AccessContextManagerIngressPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_access_context_manager_ingress_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AccessContextManagerIngressPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AccessContextManagerIngressPolicy to import
  * @param importFromId The id of the existing AccessContextManagerIngressPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AccessContextManagerIngressPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_access_context_manager_ingress_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/access_context_manager_ingress_policy google_access_context_manager_ingress_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AccessContextManagerIngressPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AccessContextManagerIngressPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_access_context_manager_ingress_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.45.0',
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
    this._id = config.id;
    this._ingressPolicyName = config.ingressPolicyName;
    this._resource = config.resource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_id - computed: true, optional: false, required: false
  public get accessPolicyId() {
    return this.getStringAttribute('access_policy_id');
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

  // ingress_policy_name - computed: false, optional: false, required: true
  private _ingressPolicyName?: string; 
  public get ingressPolicyName() {
    return this.getStringAttribute('ingress_policy_name');
  }
  public set ingressPolicyName(value: string) {
    this._ingressPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPolicyNameInput() {
    return this._ingressPolicyName;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AccessContextManagerIngressPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AccessContextManagerIngressPolicyTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      ingress_policy_name: cdktf.stringToTerraform(this._ingressPolicyName),
      resource: cdktf.stringToTerraform(this._resource),
      timeouts: accessContextManagerIngressPolicyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress_policy_name: {
        value: cdktf.stringToHclTerraform(this._ingressPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: accessContextManagerIngressPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AccessContextManagerIngressPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
