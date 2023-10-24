/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgPolicyCustomConstraintConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to take if the condition is met. Possible values: ["ALLOW", "DENY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#action_type OrgPolicyCustomConstraint#action_type}
  */
  readonly actionType: string;
  /**
  * A CEL condition that refers to a supported service resource, for example 'resource.management.autoUpgrade == false'. For details about CEL usage, see [Common Expression Language](https://cloud.google.com/resource-manager/docs/organization-policy/creating-managing-custom-constraints#common_expression_language).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#condition OrgPolicyCustomConstraint#condition}
  */
  readonly condition: string;
  /**
  * A human-friendly description of the constraint to display as an error message when the policy is violated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#description OrgPolicyCustomConstraint#description}
  */
  readonly description?: string;
  /**
  * A human-friendly name for the constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#display_name OrgPolicyCustomConstraint#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#id OrgPolicyCustomConstraint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A list of RESTful methods for which to enforce the constraint. Can be 'CREATE', 'UPDATE', or both. Not all Google Cloud services support both methods. To see supported methods for each service, find the service in [Supported services](https://cloud.google.com/resource-manager/docs/organization-policy/custom-constraint-supported-services).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#method_types OrgPolicyCustomConstraint#method_types}
  */
  readonly methodTypes: string[];
  /**
  * Immutable. The name of the custom constraint. This is unique within the organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#name OrgPolicyCustomConstraint#name}
  */
  readonly name: string;
  /**
  * The parent of the resource, an organization. Format should be 'organizations/{organization_id}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#parent OrgPolicyCustomConstraint#parent}
  */
  readonly parent: string;
  /**
  * Immutable. The fully qualified name of the Google Cloud REST resource containing the object and field you want to restrict. For example, 'container.googleapis.com/NodePool'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#resource_types OrgPolicyCustomConstraint#resource_types}
  */
  readonly resourceTypes: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#timeouts OrgPolicyCustomConstraint#timeouts}
  */
  readonly timeouts?: OrgPolicyCustomConstraintTimeouts;
}
export interface OrgPolicyCustomConstraintTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#create OrgPolicyCustomConstraint#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#delete OrgPolicyCustomConstraint#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#update OrgPolicyCustomConstraint#update}
  */
  readonly update?: string;
}

export function orgPolicyCustomConstraintTimeoutsToTerraform(struct?: OrgPolicyCustomConstraintTimeouts | cdktf.IResolvable): any {
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

export class OrgPolicyCustomConstraintTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgPolicyCustomConstraintTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OrgPolicyCustomConstraintTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint google_org_policy_custom_constraint}
*/
export class OrgPolicyCustomConstraint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_org_policy_custom_constraint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgPolicyCustomConstraint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgPolicyCustomConstraint to import
  * @param importFromId The id of the existing OrgPolicyCustomConstraint that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgPolicyCustomConstraint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_org_policy_custom_constraint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.3.0/docs/resources/org_policy_custom_constraint google_org_policy_custom_constraint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgPolicyCustomConstraintConfig
  */
  public constructor(scope: Construct, id: string, config: OrgPolicyCustomConstraintConfig) {
    super(scope, id, {
      terraformResourceType: 'google_org_policy_custom_constraint',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.3.0',
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
    this._actionType = config.actionType;
    this._condition = config.condition;
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._methodTypes = config.methodTypes;
    this._name = config.name;
    this._parent = config.parent;
    this._resourceTypes = config.resourceTypes;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // condition - computed: false, optional: false, required: true
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // method_types - computed: false, optional: false, required: true
  private _methodTypes?: string[]; 
  public get methodTypes() {
    return this.getListAttribute('method_types');
  }
  public set methodTypes(value: string[]) {
    this._methodTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTypesInput() {
    return this._methodTypes;
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

  // resource_types - computed: false, optional: false, required: true
  private _resourceTypes?: string[]; 
  public get resourceTypes() {
    return this.getListAttribute('resource_types');
  }
  public set resourceTypes(value: string[]) {
    this._resourceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypesInput() {
    return this._resourceTypes;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new OrgPolicyCustomConstraintTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: OrgPolicyCustomConstraintTimeouts) {
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
      action_type: cdktf.stringToTerraform(this._actionType),
      condition: cdktf.stringToTerraform(this._condition),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      method_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._methodTypes),
      name: cdktf.stringToTerraform(this._name),
      parent: cdktf.stringToTerraform(this._parent),
      resource_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._resourceTypes),
      timeouts: orgPolicyCustomConstraintTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
