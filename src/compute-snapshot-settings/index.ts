/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeSnapshotSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#id ComputeSnapshotSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#project ComputeSnapshotSettings#project}
  */
  readonly project?: string;
  /**
  * storage_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#storage_location ComputeSnapshotSettings#storage_location}
  */
  readonly storageLocation: ComputeSnapshotSettingsStorageLocation;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#timeouts ComputeSnapshotSettings#timeouts}
  */
  readonly timeouts?: ComputeSnapshotSettingsTimeouts;
}
export interface ComputeSnapshotSettingsStorageLocationLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#location ComputeSnapshotSettings#location}
  */
  readonly location: string;
  /**
  * Name of the location. It should be one of the Cloud Storage buckets.
  * Only one location can be specified. (should match location)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#name ComputeSnapshotSettings#name}
  */
  readonly name: string;
}

export function computeSnapshotSettingsStorageLocationLocationsToTerraform(struct?: ComputeSnapshotSettingsStorageLocationLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    location: cdktf.stringToTerraform(struct!.location),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function computeSnapshotSettingsStorageLocationLocationsToHclTerraform(struct?: ComputeSnapshotSettingsStorageLocationLocations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSnapshotSettingsStorageLocationLocationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ComputeSnapshotSettingsStorageLocationLocations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSnapshotSettingsStorageLocationLocations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._location = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._location = value.location;
      this._name = value.name;
    }
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
}

export class ComputeSnapshotSettingsStorageLocationLocationsList extends cdktf.ComplexList {
  public internalValue? : ComputeSnapshotSettingsStorageLocationLocations[] | cdktf.IResolvable

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
  public get(index: number): ComputeSnapshotSettingsStorageLocationLocationsOutputReference {
    return new ComputeSnapshotSettingsStorageLocationLocationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ComputeSnapshotSettingsStorageLocation {
  /**
  * The chosen location policy Possible values: ["NEAREST_MULTI_REGION", "LOCAL_REGION", "SPECIFIC_LOCATIONS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#policy ComputeSnapshotSettings#policy}
  */
  readonly policy: string;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#locations ComputeSnapshotSettings#locations}
  */
  readonly locations?: ComputeSnapshotSettingsStorageLocationLocations[] | cdktf.IResolvable;
}

export function computeSnapshotSettingsStorageLocationToTerraform(struct?: ComputeSnapshotSettingsStorageLocationOutputReference | ComputeSnapshotSettingsStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    locations: cdktf.listMapper(computeSnapshotSettingsStorageLocationLocationsToTerraform, true)(struct!.locations),
  }
}


export function computeSnapshotSettingsStorageLocationToHclTerraform(struct?: ComputeSnapshotSettingsStorageLocationOutputReference | ComputeSnapshotSettingsStorageLocation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locations: {
      value: cdktf.listMapperHcl(computeSnapshotSettingsStorageLocationLocationsToHclTerraform, true)(struct!.locations),
      isBlock: true,
      type: "set",
      storageClassType: "ComputeSnapshotSettingsStorageLocationLocationsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ComputeSnapshotSettingsStorageLocationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ComputeSnapshotSettingsStorageLocation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._locations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.locations = this._locations?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ComputeSnapshotSettingsStorageLocation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._locations.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._locations.internalValue = value.locations;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new ComputeSnapshotSettingsStorageLocationLocationsList(this, "locations", true);
  public get locations() {
    return this._locations;
  }
  public putLocations(value: ComputeSnapshotSettingsStorageLocationLocations[] | cdktf.IResolvable) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }
}
export interface ComputeSnapshotSettingsTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#create ComputeSnapshotSettings#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#delete ComputeSnapshotSettings#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#update ComputeSnapshotSettings#update}
  */
  readonly update?: string;
}

export function computeSnapshotSettingsTimeoutsToTerraform(struct?: ComputeSnapshotSettingsTimeouts | cdktf.IResolvable): any {
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


export function computeSnapshotSettingsTimeoutsToHclTerraform(struct?: ComputeSnapshotSettingsTimeouts | cdktf.IResolvable): any {
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

export class ComputeSnapshotSettingsTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeSnapshotSettingsTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeSnapshotSettingsTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings google_compute_snapshot_settings}
*/
export class ComputeSnapshotSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_snapshot_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeSnapshotSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeSnapshotSettings to import
  * @param importFromId The id of the existing ComputeSnapshotSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeSnapshotSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_snapshot_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.46.0/docs/resources/compute_snapshot_settings google_compute_snapshot_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeSnapshotSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeSnapshotSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_snapshot_settings',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.46.0',
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
    this._project = config.project;
    this._storageLocation.internalValue = config.storageLocation;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // storage_location - computed: false, optional: false, required: true
  private _storageLocation = new ComputeSnapshotSettingsStorageLocationOutputReference(this, "storage_location");
  public get storageLocation() {
    return this._storageLocation;
  }
  public putStorageLocation(value: ComputeSnapshotSettingsStorageLocation) {
    this._storageLocation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageLocationInput() {
    return this._storageLocation.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeSnapshotSettingsTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeSnapshotSettingsTimeouts) {
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
      project: cdktf.stringToTerraform(this._project),
      storage_location: computeSnapshotSettingsStorageLocationToTerraform(this._storageLocation.internalValue),
      timeouts: computeSnapshotSettingsTimeoutsToTerraform(this._timeouts.internalValue),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_location: {
        value: computeSnapshotSettingsStorageLocationToHclTerraform(this._storageLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ComputeSnapshotSettingsStorageLocationList",
      },
      timeouts: {
        value: computeSnapshotSettingsTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeSnapshotSettingsTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
