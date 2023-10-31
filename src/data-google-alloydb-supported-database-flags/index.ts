/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/data-sources/alloydb_supported_database_flags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGoogleAlloydbSupportedDatabaseFlagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/data-sources/alloydb_supported_database_flags#id DataGoogleAlloydbSupportedDatabaseFlags#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The canonical id for the location. For example: "us-east1".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/data-sources/alloydb_supported_database_flags#location DataGoogleAlloydbSupportedDatabaseFlags#location}
  */
  readonly location: string;
  /**
  * Project ID of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/data-sources/alloydb_supported_database_flags#project DataGoogleAlloydbSupportedDatabaseFlags#project}
  */
  readonly project?: string;
}
export interface DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions {
}

export function dataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsToTerraform(struct?: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // max_value - computed: true, optional: false, required: false
  public get maxValue() {
    return this.getStringAttribute('max_value');
  }

  // min_value - computed: true, optional: false, required: false
  public get minValue() {
    return this.getStringAttribute('min_value');
  }
}

export class DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference {
    return new DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions {
}

export function dataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsToTerraform(struct?: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_values - computed: true, optional: false, required: false
  public get allowedValues() {
    return this.getListAttribute('allowed_values');
  }
}

export class DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference {
    return new DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags {
}

export function dataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsToTerraform(struct?: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // accepts_multiple_values - computed: true, optional: false, required: false
  public get acceptsMultipleValues() {
    return this.getBooleanAttribute('accepts_multiple_values');
  }

  // flag_name - computed: true, optional: false, required: false
  public get flagName() {
    return this.getStringAttribute('flag_name');
  }

  // integer_restrictions - computed: true, optional: false, required: false
  private _integerRestrictions = new DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsIntegerRestrictionsList(this, "integer_restrictions", false);
  public get integerRestrictions() {
    return this._integerRestrictions;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // requires_db_restart - computed: true, optional: false, required: false
  public get requiresDbRestart() {
    return this.getBooleanAttribute('requires_db_restart');
  }

  // string_restrictions - computed: true, optional: false, required: false
  private _stringRestrictions = new DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsStringRestrictionsList(this, "string_restrictions", false);
  public get stringRestrictions() {
    return this._stringRestrictions;
  }

  // supported_db_versions - computed: true, optional: false, required: false
  public get supportedDbVersions() {
    return this.getListAttribute('supported_db_versions');
  }

  // value_type - computed: true, optional: false, required: false
  public get valueType() {
    return this.getStringAttribute('value_type');
  }
}

export class DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList extends cdktf.ComplexList {

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
  public get(index: number): DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference {
    return new DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/data-sources/alloydb_supported_database_flags google_alloydb_supported_database_flags}
*/
export class DataGoogleAlloydbSupportedDatabaseFlags extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_alloydb_supported_database_flags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGoogleAlloydbSupportedDatabaseFlags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGoogleAlloydbSupportedDatabaseFlags to import
  * @param importFromId The id of the existing DataGoogleAlloydbSupportedDatabaseFlags that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/data-sources/alloydb_supported_database_flags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGoogleAlloydbSupportedDatabaseFlags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_alloydb_supported_database_flags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/data-sources/alloydb_supported_database_flags google_alloydb_supported_database_flags} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGoogleAlloydbSupportedDatabaseFlagsConfig
  */
  public constructor(scope: Construct, id: string, config: DataGoogleAlloydbSupportedDatabaseFlagsConfig) {
    super(scope, id, {
      terraformResourceType: 'google_alloydb_supported_database_flags',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.4.0',
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
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
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

  // supported_database_flags - computed: true, optional: false, required: false
  private _supportedDatabaseFlags = new DataGoogleAlloydbSupportedDatabaseFlagsSupportedDatabaseFlagsList(this, "supported_database_flags", false);
  public get supportedDatabaseFlags() {
    return this._supportedDatabaseFlags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
