/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/compute_storage_pool_types
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleComputeStoragePoolTypesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/compute_storage_pool_types#project DataGoogleComputeStoragePoolTypes#project}
  */
  readonly project?: string;
  /**
  * Name of the storage pool type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/compute_storage_pool_types#storage_pool_type DataGoogleComputeStoragePoolTypes#storage_pool_type}
  */
  readonly storagePoolType: string;
  /**
  * The name of the zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/compute_storage_pool_types#zone DataGoogleComputeStoragePoolTypes#zone}
  */
  readonly zone: string;
}
export interface DataGoogleComputeStoragePoolTypesDeprecated {
}

export function dataGoogleComputeStoragePoolTypesDeprecatedToTerraform(struct?: DataGoogleComputeStoragePoolTypesDeprecated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleComputeStoragePoolTypesDeprecatedToHclTerraform(struct?: DataGoogleComputeStoragePoolTypesDeprecated): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleComputeStoragePoolTypesDeprecatedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleComputeStoragePoolTypesDeprecated | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleComputeStoragePoolTypesDeprecated | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getStringAttribute('deleted');
  }

  // deprecated - computed: true, optional: false, required: false
  public get deprecated() {
    return this.getStringAttribute('deprecated');
  }

  // obsolete - computed: true, optional: false, required: false
  public get obsolete() {
    return this.getStringAttribute('obsolete');
  }

  // replacement - computed: true, optional: false, required: false
  public get replacement() {
    return this.getStringAttribute('replacement');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataGoogleComputeStoragePoolTypesDeprecatedList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleComputeStoragePoolTypesDeprecatedOutputReference {
    return new DataGoogleComputeStoragePoolTypesDeprecatedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/compute_storage_pool_types google_compute_storage_pool_types}
*/
export class DataGoogleComputeStoragePoolTypes extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_storage_pool_types";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleComputeStoragePoolTypes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleComputeStoragePoolTypes to import
  * @param importFromId The id of the existing DataGoogleComputeStoragePoolTypes that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/compute_storage_pool_types#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleComputeStoragePoolTypes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_storage_pool_types", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/data-sources/compute_storage_pool_types google_compute_storage_pool_types} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleComputeStoragePoolTypesConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleComputeStoragePoolTypesConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_storage_pool_types',
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
    this._project = config.project;
    this._storagePoolType = config.storagePoolType;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
  }

  // deprecated - computed: true, optional: false, required: false
  private _deprecated = new DataGoogleComputeStoragePoolTypesDeprecatedList(this, "deprecated", false);
  public get deprecated() {
    return this._deprecated;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // kind - computed: true, optional: false, required: false
  public get kind() {
    return this.getStringAttribute('kind');
  }

  // max_pool_provisioned_capacity_gb - computed: true, optional: false, required: false
  public get maxPoolProvisionedCapacityGb() {
    return this.getNumberAttribute('max_pool_provisioned_capacity_gb');
  }

  // max_pool_provisioned_iops - computed: true, optional: false, required: false
  public get maxPoolProvisionedIops() {
    return this.getNumberAttribute('max_pool_provisioned_iops');
  }

  // max_pool_provisioned_throughput - computed: true, optional: false, required: false
  public get maxPoolProvisionedThroughput() {
    return this.getNumberAttribute('max_pool_provisioned_throughput');
  }

  // min_pool_provisioned_capacity_gb - computed: true, optional: false, required: false
  public get minPoolProvisionedCapacityGb() {
    return this.getNumberAttribute('min_pool_provisioned_capacity_gb');
  }

  // min_pool_provisioned_iops - computed: true, optional: false, required: false
  public get minPoolProvisionedIops() {
    return this.getNumberAttribute('min_pool_provisioned_iops');
  }

  // min_pool_provisioned_throughput - computed: true, optional: false, required: false
  public get minPoolProvisionedThroughput() {
    return this.getNumberAttribute('min_pool_provisioned_throughput');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // self_link_with_id - computed: true, optional: false, required: false
  public get selfLinkWithId() {
    return this.getStringAttribute('self_link_with_id');
  }

  // storage_pool_type - computed: false, optional: false, required: true
  private _storagePoolType?: string; 
  public get storagePoolType() {
    return this.getStringAttribute('storage_pool_type');
  }
  public set storagePoolType(value: string) {
    this._storagePoolType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storagePoolTypeInput() {
    return this._storagePoolType;
  }

  // supported_disk_types - computed: true, optional: false, required: false
  public get supportedDiskTypes() {
    return this.getListAttribute('supported_disk_types');
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      project: cdktf.stringToTerraform(this._project),
      storage_pool_type: cdktf.stringToTerraform(this._storagePoolType),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_pool_type: {
        value: cdktf.stringToHclTerraform(this._storagePoolType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
