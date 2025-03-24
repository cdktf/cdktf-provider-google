/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputePublicDelegatedPrefixConfig extends cdktf.TerraformMetaArguments {
  /**
  * The allocatable prefix length supported by this public delegated prefix. This field is optional and cannot be set for prefixes in DELEGATION mode. It cannot be set for IPv4 prefixes either, and it always defaults to 32.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#allocatable_prefix_length ComputePublicDelegatedPrefix#allocatable_prefix_length}
  */
  readonly allocatablePrefixLength?: number;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#description ComputePublicDelegatedPrefix#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#id ComputePublicDelegatedPrefix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP address range, in CIDR format, represented by this public delegated prefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#ip_cidr_range ComputePublicDelegatedPrefix#ip_cidr_range}
  */
  readonly ipCidrRange: string;
  /**
  * If true, the prefix will be live migrated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#is_live_migration ComputePublicDelegatedPrefix#is_live_migration}
  */
  readonly isLiveMigration?: boolean | cdktf.IResolvable;
  /**
  * Specifies the mode of this IPv6 PDP. MODE must be one of: DELEGATION,
  * EXTERNAL_IPV6_FORWARDING_RULE_CREATION. Possible values: ["DELEGATION", "EXTERNAL_IPV6_FORWARDING_RULE_CREATION"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#mode ComputePublicDelegatedPrefix#mode}
  */
  readonly mode?: string;
  /**
  * Name of the resource. The name must be 1-63 characters long, and
  * comply with RFC1035. Specifically, the name must be 1-63 characters
  * long and match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?'
  * which means the first character must be a lowercase letter, and all
  * following characters must be a dash, lowercase letter, or digit,
  * except the last character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#name ComputePublicDelegatedPrefix#name}
  */
  readonly name: string;
  /**
  * The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#parent_prefix ComputePublicDelegatedPrefix#parent_prefix}
  */
  readonly parentPrefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#project ComputePublicDelegatedPrefix#project}
  */
  readonly project?: string;
  /**
  * A region where the prefix will reside.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#region ComputePublicDelegatedPrefix#region}
  */
  readonly region: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#timeouts ComputePublicDelegatedPrefix#timeouts}
  */
  readonly timeouts?: ComputePublicDelegatedPrefixTimeouts;
}
export interface ComputePublicDelegatedPrefixTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#create ComputePublicDelegatedPrefix#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#delete ComputePublicDelegatedPrefix#delete}
  */
  readonly delete?: string;
}

export function computePublicDelegatedPrefixTimeoutsToTerraform(struct?: ComputePublicDelegatedPrefixTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function computePublicDelegatedPrefixTimeoutsToHclTerraform(struct?: ComputePublicDelegatedPrefixTimeouts | cdktf.IResolvable): any {
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

export class ComputePublicDelegatedPrefixTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputePublicDelegatedPrefixTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputePublicDelegatedPrefixTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix google_compute_public_delegated_prefix}
*/
export class ComputePublicDelegatedPrefix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_public_delegated_prefix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputePublicDelegatedPrefix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputePublicDelegatedPrefix to import
  * @param importFromId The id of the existing ComputePublicDelegatedPrefix that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputePublicDelegatedPrefix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_public_delegated_prefix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.26.0/docs/resources/compute_public_delegated_prefix google_compute_public_delegated_prefix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputePublicDelegatedPrefixConfig
  */
  public constructor(scope: Construct, id: string, config: ComputePublicDelegatedPrefixConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_public_delegated_prefix',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.26.0',
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
    this._allocatablePrefixLength = config.allocatablePrefixLength;
    this._description = config.description;
    this._id = config.id;
    this._ipCidrRange = config.ipCidrRange;
    this._isLiveMigration = config.isLiveMigration;
    this._mode = config.mode;
    this._name = config.name;
    this._parentPrefix = config.parentPrefix;
    this._project = config.project;
    this._region = config.region;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allocatable_prefix_length - computed: false, optional: true, required: false
  private _allocatablePrefixLength?: number; 
  public get allocatablePrefixLength() {
    return this.getNumberAttribute('allocatable_prefix_length');
  }
  public set allocatablePrefixLength(value: number) {
    this._allocatablePrefixLength = value;
  }
  public resetAllocatablePrefixLength() {
    this._allocatablePrefixLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatablePrefixLengthInput() {
    return this._allocatablePrefixLength;
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

  // ip_cidr_range - computed: false, optional: false, required: true
  private _ipCidrRange?: string; 
  public get ipCidrRange() {
    return this.getStringAttribute('ip_cidr_range');
  }
  public set ipCidrRange(value: string) {
    this._ipCidrRange = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipCidrRangeInput() {
    return this._ipCidrRange;
  }

  // is_live_migration - computed: false, optional: true, required: false
  private _isLiveMigration?: boolean | cdktf.IResolvable; 
  public get isLiveMigration() {
    return this.getBooleanAttribute('is_live_migration');
  }
  public set isLiveMigration(value: boolean | cdktf.IResolvable) {
    this._isLiveMigration = value;
  }
  public resetIsLiveMigration() {
    this._isLiveMigration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isLiveMigrationInput() {
    return this._isLiveMigration;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // parent_prefix - computed: false, optional: false, required: true
  private _parentPrefix?: string; 
  public get parentPrefix() {
    return this.getStringAttribute('parent_prefix');
  }
  public set parentPrefix(value: string) {
    this._parentPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentPrefixInput() {
    return this._parentPrefix;
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputePublicDelegatedPrefixTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputePublicDelegatedPrefixTimeouts) {
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
      allocatable_prefix_length: cdktf.numberToTerraform(this._allocatablePrefixLength),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip_cidr_range: cdktf.stringToTerraform(this._ipCidrRange),
      is_live_migration: cdktf.booleanToTerraform(this._isLiveMigration),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      parent_prefix: cdktf.stringToTerraform(this._parentPrefix),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      timeouts: computePublicDelegatedPrefixTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allocatable_prefix_length: {
        value: cdktf.numberToHclTerraform(this._allocatablePrefixLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      ip_cidr_range: {
        value: cdktf.stringToHclTerraform(this._ipCidrRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_live_migration: {
        value: cdktf.booleanToHclTerraform(this._isLiveMigration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
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
      parent_prefix: {
        value: cdktf.stringToHclTerraform(this._parentPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: computePublicDelegatedPrefixTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputePublicDelegatedPrefixTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
