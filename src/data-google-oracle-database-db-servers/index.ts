/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleOracleDatabaseDbServersConfig extends cdktf.TerraformMetaArguments {
  /**
  * exadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers#cloud_exadata_infrastructure DataGoogleOracleDatabaseDbServers#cloud_exadata_infrastructure}
  */
  readonly cloudExadataInfrastructure: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers#id DataGoogleOracleDatabaseDbServers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * location
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers#location DataGoogleOracleDatabaseDbServers#location}
  */
  readonly location: string;
  /**
  * The ID of the project in which the dataset is located. If it is not provided, the provider project is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers#project DataGoogleOracleDatabaseDbServers#project}
  */
  readonly project?: string;
}
export interface DataGoogleOracleDatabaseDbServersDbServersProperties {
}

export function dataGoogleOracleDatabaseDbServersDbServersPropertiesToTerraform(struct?: DataGoogleOracleDatabaseDbServersDbServersProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseDbServersDbServersPropertiesToHclTerraform(struct?: DataGoogleOracleDatabaseDbServersDbServersProperties): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseDbServersDbServersProperties | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseDbServersDbServersProperties | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // db_node_ids - computed: true, optional: false, required: false
  public get dbNodeIds() {
    return this.getListAttribute('db_node_ids');
  }

  // db_node_storage_size_gb - computed: true, optional: false, required: false
  public get dbNodeStorageSizeGb() {
    return this.getNumberAttribute('db_node_storage_size_gb');
  }

  // max_db_node_storage_size_gb - computed: true, optional: false, required: false
  public get maxDbNodeStorageSizeGb() {
    return this.getNumberAttribute('max_db_node_storage_size_gb');
  }

  // max_memory_size_gb - computed: true, optional: false, required: false
  public get maxMemorySizeGb() {
    return this.getNumberAttribute('max_memory_size_gb');
  }

  // max_ocpu_count - computed: true, optional: false, required: false
  public get maxOcpuCount() {
    return this.getNumberAttribute('max_ocpu_count');
  }

  // memory_size_gb - computed: true, optional: false, required: false
  public get memorySizeGb() {
    return this.getNumberAttribute('memory_size_gb');
  }

  // ocid - computed: true, optional: false, required: false
  public get ocid() {
    return this.getStringAttribute('ocid');
  }

  // ocpu_count - computed: true, optional: false, required: false
  public get ocpuCount() {
    return this.getNumberAttribute('ocpu_count');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // vm_count - computed: true, optional: false, required: false
  public get vmCount() {
    return this.getNumberAttribute('vm_count');
  }
}

export class DataGoogleOracleDatabaseDbServersDbServersPropertiesList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference {
    return new DataGoogleOracleDatabaseDbServersDbServersPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleOracleDatabaseDbServersDbServers {
}

export function dataGoogleOracleDatabaseDbServersDbServersToTerraform(struct?: DataGoogleOracleDatabaseDbServersDbServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGoogleOracleDatabaseDbServersDbServersToHclTerraform(struct?: DataGoogleOracleDatabaseDbServersDbServers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGoogleOracleDatabaseDbServersDbServersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleOracleDatabaseDbServersDbServers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleOracleDatabaseDbServersDbServers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // properties - computed: true, optional: false, required: false
  private _properties = new DataGoogleOracleDatabaseDbServersDbServersPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
}

export class DataGoogleOracleDatabaseDbServersDbServersList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleOracleDatabaseDbServersDbServersOutputReference {
    return new DataGoogleOracleDatabaseDbServersDbServersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers google_oracle_database_db_servers}
*/
export class DataGoogleOracleDatabaseDbServers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_oracle_database_db_servers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleOracleDatabaseDbServers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleOracleDatabaseDbServers to import
  * @param importFromId The id of the existing DataGoogleOracleDatabaseDbServers that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleOracleDatabaseDbServers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_oracle_database_db_servers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.49.3/docs/data-sources/oracle_database_db_servers google_oracle_database_db_servers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleOracleDatabaseDbServersConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleOracleDatabaseDbServersConfig) {
    super(scope, id, {
      terraformResourceType: 'google_oracle_database_db_servers',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.49.3',
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
    this._cloudExadataInfrastructure = config.cloudExadataInfrastructure;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cloud_exadata_infrastructure - computed: false, optional: false, required: true
  private _cloudExadataInfrastructure?: string; 
  public get cloudExadataInfrastructure() {
    return this.getStringAttribute('cloud_exadata_infrastructure');
  }
  public set cloudExadataInfrastructure(value: string) {
    this._cloudExadataInfrastructure = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudExadataInfrastructureInput() {
    return this._cloudExadataInfrastructure;
  }

  // db_servers - computed: true, optional: false, required: false
  private _dbServers = new DataGoogleOracleDatabaseDbServersDbServersList(this, "db_servers", false);
  public get dbServers() {
    return this._dbServers;
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

  // project - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_exadata_infrastructure: cdktf.stringToTerraform(this._cloudExadataInfrastructure),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud_exadata_infrastructure: {
        value: cdktf.stringToHclTerraform(this._cloudExadataInfrastructure),
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
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
