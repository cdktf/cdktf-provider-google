/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryDatasetConfig extends cdktf.TerraformMetaArguments {
  /**
  * A unique ID for this dataset, without the project name. The ID
  * must contain only letters (a-z, A-Z), numbers (0-9), or
  * underscores (_). The maximum length is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Defines the default collation specification of future tables created
  * in the dataset. If a table is created in this dataset without table-level
  * default collation, then the table inherits the dataset default collation,
  * which is applied to the string fields that do not have explicit collation
  * specified. A change to this field affects only tables created afterwards,
  * and does not alter the existing tables.
  * 
  * The following values are supported:
  * - 'und:ci': undetermined locale, case insensitive.
  * - '': empty string. Default to case-sensitive behavior.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#default_collation BigqueryDataset#default_collation}
  */
  readonly defaultCollation?: string;
  /**
  * The default partition expiration for all partitioned tables in
  * the dataset, in milliseconds.
  * Once this property is set, all newly-created partitioned tables in
  * the dataset will have an 'expirationMs' property in the 'timePartitioning'
  * settings set to this value, and changing the value will only
  * affect new tables, not existing ones. The storage in a partition will
  * have an expiration time of its partition time plus this value.
  * Setting this property overrides the use of 'defaultTableExpirationMs'
  * for partitioned tables: only one of 'defaultTableExpirationMs' and
  * 'defaultPartitionExpirationMs' will be used for any new partitioned
  * table. If you provide an explicit 'timePartitioning.expirationMs' when
  * creating or updating a partitioned table, that value takes precedence
  * over the default partition expiration time indicated by this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#default_partition_expiration_ms BigqueryDataset#default_partition_expiration_ms}
  */
  readonly defaultPartitionExpirationMs?: number;
  /**
  * The default lifetime of all tables in the dataset, in milliseconds.
  * The minimum value is 3600000 milliseconds (one hour).
  * Once this property is set, all newly-created tables in the dataset
  * will have an 'expirationTime' property set to the creation time plus
  * the value in this property, and changing the value will only affect
  * new tables, not existing ones. When the 'expirationTime' for a given
  * table is reached, that table will be deleted automatically.
  * If a table's 'expirationTime' is modified or removed before the
  * table expires, or if you provide an explicit 'expirationTime' when
  * creating a table, that value takes precedence over the default
  * expiration time indicated by this property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#default_table_expiration_ms BigqueryDataset#default_table_expiration_ms}
  */
  readonly defaultTableExpirationMs?: number;
  /**
  * If set to 'true', delete all the tables in the
  * dataset when destroying the resource; otherwise,
  * destroying the resource will fail if tables are present.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#delete_contents_on_destroy BigqueryDataset#delete_contents_on_destroy}
  */
  readonly deleteContentsOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * A user-friendly description of the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#description BigqueryDataset#description}
  */
  readonly description?: string;
  /**
  * A descriptive name for the dataset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#friendly_name BigqueryDataset#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#id BigqueryDataset#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * TRUE if the dataset and its table names are case-insensitive, otherwise FALSE.
  * By default, this is FALSE, which means the dataset and its table names are
  * case-sensitive. This field does not affect routine references.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#is_case_insensitive BigqueryDataset#is_case_insensitive}
  */
  readonly isCaseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * The labels associated with this dataset. You can use these to
  * organize and group your datasets.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#labels BigqueryDataset#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The geographic location where the dataset should reside.
  * See [official docs](https://cloud.google.com/bigquery/docs/dataset-locations).
  * There are two types of locations, regional or multi-regional. A regional
  * location is a specific geographic place, such as Tokyo, and a multi-regional
  * location is a large geographic area, such as the United States, that
  * contains at least two geographic places.
  * The default value is multi-regional location 'US'.
  * Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#location BigqueryDataset#location}
  */
  readonly location?: string;
  /**
  * Defines the time travel window in hours. The value can be from 48 to 168 hours (2 to 7 days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#max_time_travel_hours BigqueryDataset#max_time_travel_hours}
  */
  readonly maxTimeTravelHours?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#project BigqueryDataset#project}
  */
  readonly project?: string;
  /**
  * The tags attached to this table. Tag keys are globally unique. Tag key is expected to be
  * in the namespaced format, for example "123456789012/environment" where 123456789012 is the
  * ID of the parent organization or project resource for this tag key. Tag value is expected
  * to be the short name, for example "Production". See [Tag definitions](https://cloud.google.com/iam/docs/tags-access-control#definitions)
  * for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#resource_tags BigqueryDataset#resource_tags}
  */
  readonly resourceTags?: { [key: string]: string };
  /**
  * Specifies the storage billing model for the dataset.
  * Set this flag value to LOGICAL to use logical bytes for storage billing,
  * or to PHYSICAL to use physical bytes instead.
  * 
  * LOGICAL is the default if this flag isn't specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#storage_billing_model BigqueryDataset#storage_billing_model}
  */
  readonly storageBillingModel?: string;
  /**
  * access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#access BigqueryDataset#access}
  */
  readonly access?: BigqueryDatasetAccess[] | cdktf.IResolvable;
  /**
  * default_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#default_encryption_configuration BigqueryDataset#default_encryption_configuration}
  */
  readonly defaultEncryptionConfiguration?: BigqueryDatasetDefaultEncryptionConfiguration;
  /**
  * external_catalog_dataset_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#external_catalog_dataset_options BigqueryDataset#external_catalog_dataset_options}
  */
  readonly externalCatalogDatasetOptions?: BigqueryDatasetExternalCatalogDatasetOptions;
  /**
  * external_dataset_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#external_dataset_reference BigqueryDataset#external_dataset_reference}
  */
  readonly externalDatasetReference?: BigqueryDatasetExternalDatasetReference;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#timeouts BigqueryDataset#timeouts}
  */
  readonly timeouts?: BigqueryDatasetTimeouts;
}
export interface BigqueryDatasetAccessCondition {
  /**
  * Description of the expression. This is a longer text which describes the expression,
  * e.g. when hovered over it in a UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#description BigqueryDataset#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#expression BigqueryDataset#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file
  * name and a position in the file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#location BigqueryDataset#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose.
  * This can be used e.g. in UIs which allow to enter the expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#title BigqueryDataset#title}
  */
  readonly title?: string;
}

export function bigqueryDatasetAccessConditionToTerraform(struct?: BigqueryDatasetAccessConditionOutputReference | BigqueryDatasetAccessCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function bigqueryDatasetAccessConditionToHclTerraform(struct?: BigqueryDatasetAccessConditionOutputReference | BigqueryDatasetAccessCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expression: {
      value: cdktf.stringToHclTerraform(struct!.expression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessConditionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
    }
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface BigqueryDatasetAccessDatasetDataset {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#project_id BigqueryDataset#project_id}
  */
  readonly projectId: string;
}

export function bigqueryDatasetAccessDatasetDatasetToTerraform(struct?: BigqueryDatasetAccessDatasetDatasetOutputReference | BigqueryDatasetAccessDatasetDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}


export function bigqueryDatasetAccessDatasetDatasetToHclTerraform(struct?: BigqueryDatasetAccessDatasetDatasetOutputReference | BigqueryDatasetAccessDatasetDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessDatasetDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessDatasetDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessDatasetDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }
}
export interface BigqueryDatasetAccessDataset {
  /**
  * Which resources in the dataset this entry applies to. Currently, only views are supported,
  * but additional target types may be added in the future. Possible values: VIEWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#target_types BigqueryDataset#target_types}
  */
  readonly targetTypes: string[];
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#dataset BigqueryDataset#dataset}
  */
  readonly dataset: BigqueryDatasetAccessDatasetDataset;
}

export function bigqueryDatasetAccessDatasetToTerraform(struct?: BigqueryDatasetAccessDatasetOutputReference | BigqueryDatasetAccessDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetTypes),
    dataset: bigqueryDatasetAccessDatasetDatasetToTerraform(struct!.dataset),
  }
}


export function bigqueryDatasetAccessDatasetToHclTerraform(struct?: BigqueryDatasetAccessDatasetOutputReference | BigqueryDatasetAccessDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    dataset: {
      value: bigqueryDatasetAccessDatasetDatasetToHclTerraform(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryDatasetAccessDatasetDatasetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetTypes = this._targetTypes;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetTypes = undefined;
      this._dataset.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetTypes = value.targetTypes;
      this._dataset.internalValue = value.dataset;
    }
  }

  // target_types - computed: false, optional: false, required: true
  private _targetTypes?: string[]; 
  public get targetTypes() {
    return this.getListAttribute('target_types');
  }
  public set targetTypes(value: string[]) {
    this._targetTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypesInput() {
    return this._targetTypes;
  }

  // dataset - computed: false, optional: false, required: true
  private _dataset = new BigqueryDatasetAccessDatasetDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BigqueryDatasetAccessDatasetDataset) {
    this._dataset.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }
}
export interface BigqueryDatasetAccessRoutine {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#project_id BigqueryDataset#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the routine. The ID must contain only letters (a-z,
  * A-Z), numbers (0-9), or underscores (_). The maximum length
  * is 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#routine_id BigqueryDataset#routine_id}
  */
  readonly routineId: string;
}

export function bigqueryDatasetAccessRoutineToTerraform(struct?: BigqueryDatasetAccessRoutineOutputReference | BigqueryDatasetAccessRoutine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    routine_id: cdktf.stringToTerraform(struct!.routineId),
  }
}


export function bigqueryDatasetAccessRoutineToHclTerraform(struct?: BigqueryDatasetAccessRoutineOutputReference | BigqueryDatasetAccessRoutine): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    routine_id: {
      value: cdktf.stringToHclTerraform(struct!.routineId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessRoutineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessRoutine | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._routineId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routineId = this._routineId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessRoutine | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._routineId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._routineId = value.routineId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // routine_id - computed: false, optional: false, required: true
  private _routineId?: string; 
  public get routineId() {
    return this.getStringAttribute('routine_id');
  }
  public set routineId(value: string) {
    this._routineId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get routineIdInput() {
    return this._routineId;
  }
}
export interface BigqueryDatasetAccessView {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#dataset_id BigqueryDataset#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#project_id BigqueryDataset#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z,
  * A-Z), numbers (0-9), or underscores (_). The maximum length
  * is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#table_id BigqueryDataset#table_id}
  */
  readonly tableId: string;
}

export function bigqueryDatasetAccessViewToTerraform(struct?: BigqueryDatasetAccessViewOutputReference | BigqueryDatasetAccessView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    table_id: cdktf.stringToTerraform(struct!.tableId),
  }
}


export function bigqueryDatasetAccessViewToHclTerraform(struct?: BigqueryDatasetAccessViewOutputReference | BigqueryDatasetAccessView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.datasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table_id: {
      value: cdktf.stringToHclTerraform(struct!.tableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetAccessView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._tableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableId = this._tableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccessView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
      this._projectId = undefined;
      this._tableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
      this._projectId = value.projectId;
      this._tableId = value.tableId;
    }
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // table_id - computed: false, optional: false, required: true
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface BigqueryDatasetAccess {
  /**
  * A domain to grant access to. Any users signed in with the
  * domain specified will be granted the specified access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#domain BigqueryDataset#domain}
  */
  readonly domain?: string;
  /**
  * An email address of a Google Group to grant access to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#group_by_email BigqueryDataset#group_by_email}
  */
  readonly groupByEmail?: string;
  /**
  * Some other type of member that appears in the IAM Policy but isn't a user,
  * group, domain, or special group. For example: 'allUsers'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#iam_member BigqueryDataset#iam_member}
  */
  readonly iamMember?: string;
  /**
  * Describes the rights granted to the user specified by the other
  * member of the access object. Basic, predefined, and custom roles
  * are supported. Predefined roles that have equivalent basic roles
  * are swapped by the API to their basic counterparts. See
  * [official docs](https://cloud.google.com/bigquery/docs/access-control).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#role BigqueryDataset#role}
  */
  readonly role?: string;
  /**
  * A special group to grant access to. Possible values include:
  * * 'projectOwners': Owners of the enclosing project.
  * * 'projectReaders': Readers of the enclosing project.
  * * 'projectWriters': Writers of the enclosing project.
  * * 'allAuthenticatedUsers': All authenticated BigQuery users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#special_group BigqueryDataset#special_group}
  */
  readonly specialGroup?: string;
  /**
  * An email address of a user to grant access to. For example:
  * fred@example.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#user_by_email BigqueryDataset#user_by_email}
  */
  readonly userByEmail?: string;
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#condition BigqueryDataset#condition}
  */
  readonly condition?: BigqueryDatasetAccessCondition;
  /**
  * dataset block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#dataset BigqueryDataset#dataset}
  */
  readonly dataset?: BigqueryDatasetAccessDataset;
  /**
  * routine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#routine BigqueryDataset#routine}
  */
  readonly routine?: BigqueryDatasetAccessRoutine;
  /**
  * view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#view BigqueryDataset#view}
  */
  readonly view?: BigqueryDatasetAccessView;
}

export function bigqueryDatasetAccessToTerraform(struct?: BigqueryDatasetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    group_by_email: cdktf.stringToTerraform(struct!.groupByEmail),
    iam_member: cdktf.stringToTerraform(struct!.iamMember),
    role: cdktf.stringToTerraform(struct!.role),
    special_group: cdktf.stringToTerraform(struct!.specialGroup),
    user_by_email: cdktf.stringToTerraform(struct!.userByEmail),
    condition: bigqueryDatasetAccessConditionToTerraform(struct!.condition),
    dataset: bigqueryDatasetAccessDatasetToTerraform(struct!.dataset),
    routine: bigqueryDatasetAccessRoutineToTerraform(struct!.routine),
    view: bigqueryDatasetAccessViewToTerraform(struct!.view),
  }
}


export function bigqueryDatasetAccessToHclTerraform(struct?: BigqueryDatasetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_by_email: {
      value: cdktf.stringToHclTerraform(struct!.groupByEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_member: {
      value: cdktf.stringToHclTerraform(struct!.iamMember),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    special_group: {
      value: cdktf.stringToHclTerraform(struct!.specialGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_by_email: {
      value: cdktf.stringToHclTerraform(struct!.userByEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: bigqueryDatasetAccessConditionToHclTerraform(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryDatasetAccessConditionList",
    },
    dataset: {
      value: bigqueryDatasetAccessDatasetToHclTerraform(struct!.dataset),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryDatasetAccessDatasetList",
    },
    routine: {
      value: bigqueryDatasetAccessRoutineToHclTerraform(struct!.routine),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryDatasetAccessRoutineList",
    },
    view: {
      value: bigqueryDatasetAccessViewToHclTerraform(struct!.view),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryDatasetAccessViewList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetAccessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BigqueryDatasetAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._groupByEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupByEmail = this._groupByEmail;
    }
    if (this._iamMember !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamMember = this._iamMember;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    if (this._specialGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.specialGroup = this._specialGroup;
    }
    if (this._userByEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.userByEmail = this._userByEmail;
    }
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    if (this._dataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset?.internalValue;
    }
    if (this._routine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.routine = this._routine?.internalValue;
    }
    if (this._view?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.view = this._view?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._groupByEmail = undefined;
      this._iamMember = undefined;
      this._role = undefined;
      this._specialGroup = undefined;
      this._userByEmail = undefined;
      this._condition.internalValue = undefined;
      this._dataset.internalValue = undefined;
      this._routine.internalValue = undefined;
      this._view.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._groupByEmail = value.groupByEmail;
      this._iamMember = value.iamMember;
      this._role = value.role;
      this._specialGroup = value.specialGroup;
      this._userByEmail = value.userByEmail;
      this._condition.internalValue = value.condition;
      this._dataset.internalValue = value.dataset;
      this._routine.internalValue = value.routine;
      this._view.internalValue = value.view;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // group_by_email - computed: false, optional: true, required: false
  private _groupByEmail?: string; 
  public get groupByEmail() {
    return this.getStringAttribute('group_by_email');
  }
  public set groupByEmail(value: string) {
    this._groupByEmail = value;
  }
  public resetGroupByEmail() {
    this._groupByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupByEmailInput() {
    return this._groupByEmail;
  }

  // iam_member - computed: false, optional: true, required: false
  private _iamMember?: string; 
  public get iamMember() {
    return this.getStringAttribute('iam_member');
  }
  public set iamMember(value: string) {
    this._iamMember = value;
  }
  public resetIamMember() {
    this._iamMember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamMemberInput() {
    return this._iamMember;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // special_group - computed: false, optional: true, required: false
  private _specialGroup?: string; 
  public get specialGroup() {
    return this.getStringAttribute('special_group');
  }
  public set specialGroup(value: string) {
    this._specialGroup = value;
  }
  public resetSpecialGroup() {
    this._specialGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specialGroupInput() {
    return this._specialGroup;
  }

  // user_by_email - computed: false, optional: true, required: false
  private _userByEmail?: string; 
  public get userByEmail() {
    return this.getStringAttribute('user_by_email');
  }
  public set userByEmail(value: string) {
    this._userByEmail = value;
  }
  public resetUserByEmail() {
    this._userByEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userByEmailInput() {
    return this._userByEmail;
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new BigqueryDatasetAccessConditionOutputReference(this, "condition");
  public get condition() {
    return this._condition;
  }
  public putCondition(value: BigqueryDatasetAccessCondition) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset = new BigqueryDatasetAccessDatasetOutputReference(this, "dataset");
  public get dataset() {
    return this._dataset;
  }
  public putDataset(value: BigqueryDatasetAccessDataset) {
    this._dataset.internalValue = value;
  }
  public resetDataset() {
    this._dataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset.internalValue;
  }

  // routine - computed: false, optional: true, required: false
  private _routine = new BigqueryDatasetAccessRoutineOutputReference(this, "routine");
  public get routine() {
    return this._routine;
  }
  public putRoutine(value: BigqueryDatasetAccessRoutine) {
    this._routine.internalValue = value;
  }
  public resetRoutine() {
    this._routine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routineInput() {
    return this._routine.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new BigqueryDatasetAccessViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: BigqueryDatasetAccessView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }
}

export class BigqueryDatasetAccessList extends cdktf.ComplexList {
  public internalValue? : BigqueryDatasetAccess[] | cdktf.IResolvable

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
  public get(index: number): BigqueryDatasetAccessOutputReference {
    return new BigqueryDatasetAccessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryDatasetDefaultEncryptionConfiguration {
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination
  * BigQuery table. The BigQuery Service Account associated with your project requires
  * access to this encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#kms_key_name BigqueryDataset#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function bigqueryDatasetDefaultEncryptionConfigurationToTerraform(struct?: BigqueryDatasetDefaultEncryptionConfigurationOutputReference | BigqueryDatasetDefaultEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function bigqueryDatasetDefaultEncryptionConfigurationToHclTerraform(struct?: BigqueryDatasetDefaultEncryptionConfigurationOutputReference | BigqueryDatasetDefaultEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_name: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetDefaultEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetDefaultEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetDefaultEncryptionConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyName = value.kmsKeyName;
    }
  }

  // kms_key_name - computed: false, optional: false, required: true
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
  }
}
export interface BigqueryDatasetExternalCatalogDatasetOptions {
  /**
  * The storage location URI for all tables in the dataset. Equivalent to hive metastore's
  * database locationUri. Maximum length of 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#default_storage_location_uri BigqueryDataset#default_storage_location_uri}
  */
  readonly defaultStorageLocationUri?: string;
  /**
  * A map of key value pairs defining the parameters and properties of the open source schema.
  * Maximum size of 2Mib.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#parameters BigqueryDataset#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

export function bigqueryDatasetExternalCatalogDatasetOptionsToTerraform(struct?: BigqueryDatasetExternalCatalogDatasetOptionsOutputReference | BigqueryDatasetExternalCatalogDatasetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_storage_location_uri: cdktf.stringToTerraform(struct!.defaultStorageLocationUri),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
  }
}


export function bigqueryDatasetExternalCatalogDatasetOptionsToHclTerraform(struct?: BigqueryDatasetExternalCatalogDatasetOptionsOutputReference | BigqueryDatasetExternalCatalogDatasetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_storage_location_uri: {
      value: cdktf.stringToHclTerraform(struct!.defaultStorageLocationUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetExternalCatalogDatasetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetExternalCatalogDatasetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultStorageLocationUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultStorageLocationUri = this._defaultStorageLocationUri;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetExternalCatalogDatasetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultStorageLocationUri = undefined;
      this._parameters = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultStorageLocationUri = value.defaultStorageLocationUri;
      this._parameters = value.parameters;
    }
  }

  // default_storage_location_uri - computed: false, optional: true, required: false
  private _defaultStorageLocationUri?: string; 
  public get defaultStorageLocationUri() {
    return this.getStringAttribute('default_storage_location_uri');
  }
  public set defaultStorageLocationUri(value: string) {
    this._defaultStorageLocationUri = value;
  }
  public resetDefaultStorageLocationUri() {
    this._defaultStorageLocationUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStorageLocationUriInput() {
    return this._defaultStorageLocationUri;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }
}
export interface BigqueryDatasetExternalDatasetReference {
  /**
  * The connection id that is used to access the externalSource.
  * Format: projects/{projectId}/locations/{locationId}/connections/{connectionId}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#connection BigqueryDataset#connection}
  */
  readonly connection: string;
  /**
  * External source that backs this dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#external_source BigqueryDataset#external_source}
  */
  readonly externalSource: string;
}

export function bigqueryDatasetExternalDatasetReferenceToTerraform(struct?: BigqueryDatasetExternalDatasetReferenceOutputReference | BigqueryDatasetExternalDatasetReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection: cdktf.stringToTerraform(struct!.connection),
    external_source: cdktf.stringToTerraform(struct!.externalSource),
  }
}


export function bigqueryDatasetExternalDatasetReferenceToHclTerraform(struct?: BigqueryDatasetExternalDatasetReferenceOutputReference | BigqueryDatasetExternalDatasetReference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection: {
      value: cdktf.stringToHclTerraform(struct!.connection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_source: {
      value: cdktf.stringToHclTerraform(struct!.externalSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryDatasetExternalDatasetReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryDatasetExternalDatasetReference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connection !== undefined) {
      hasAnyValues = true;
      internalValueResult.connection = this._connection;
    }
    if (this._externalSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalSource = this._externalSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryDatasetExternalDatasetReference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connection = undefined;
      this._externalSource = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connection = value.connection;
      this._externalSource = value.externalSource;
    }
  }

  // connection - computed: false, optional: false, required: true
  private _connection?: string; 
  public get connection() {
    return this.getStringAttribute('connection');
  }
  public set connection(value: string) {
    this._connection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionInput() {
    return this._connection;
  }

  // external_source - computed: false, optional: false, required: true
  private _externalSource?: string; 
  public get externalSource() {
    return this.getStringAttribute('external_source');
  }
  public set externalSource(value: string) {
    this._externalSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalSourceInput() {
    return this._externalSource;
  }
}
export interface BigqueryDatasetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#create BigqueryDataset#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#delete BigqueryDataset#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#update BigqueryDataset#update}
  */
  readonly update?: string;
}

export function bigqueryDatasetTimeoutsToTerraform(struct?: BigqueryDatasetTimeouts | cdktf.IResolvable): any {
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


export function bigqueryDatasetTimeoutsToHclTerraform(struct?: BigqueryDatasetTimeouts | cdktf.IResolvable): any {
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

export class BigqueryDatasetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BigqueryDatasetTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BigqueryDatasetTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset google_bigquery_dataset}
*/
export class BigqueryDataset extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_dataset";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigqueryDataset resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryDataset to import
  * @param importFromId The id of the existing BigqueryDataset that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryDataset to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_dataset", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.39.0/docs/resources/bigquery_dataset google_bigquery_dataset} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryDatasetConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryDatasetConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_dataset',
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
    this._datasetId = config.datasetId;
    this._defaultCollation = config.defaultCollation;
    this._defaultPartitionExpirationMs = config.defaultPartitionExpirationMs;
    this._defaultTableExpirationMs = config.defaultTableExpirationMs;
    this._deleteContentsOnDestroy = config.deleteContentsOnDestroy;
    this._description = config.description;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._isCaseInsensitive = config.isCaseInsensitive;
    this._labels = config.labels;
    this._location = config.location;
    this._maxTimeTravelHours = config.maxTimeTravelHours;
    this._project = config.project;
    this._resourceTags = config.resourceTags;
    this._storageBillingModel = config.storageBillingModel;
    this._access.internalValue = config.access;
    this._defaultEncryptionConfiguration.internalValue = config.defaultEncryptionConfiguration;
    this._externalCatalogDatasetOptions.internalValue = config.externalCatalogDatasetOptions;
    this._externalDatasetReference.internalValue = config.externalDatasetReference;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_time - computed: true, optional: false, required: false
  public get creationTime() {
    return this.getNumberAttribute('creation_time');
  }

  // dataset_id - computed: false, optional: false, required: true
  private _datasetId?: string; 
  public get datasetId() {
    return this.getStringAttribute('dataset_id');
  }
  public set datasetId(value: string) {
    this._datasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdInput() {
    return this._datasetId;
  }

  // default_collation - computed: true, optional: true, required: false
  private _defaultCollation?: string; 
  public get defaultCollation() {
    return this.getStringAttribute('default_collation');
  }
  public set defaultCollation(value: string) {
    this._defaultCollation = value;
  }
  public resetDefaultCollation() {
    this._defaultCollation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultCollationInput() {
    return this._defaultCollation;
  }

  // default_partition_expiration_ms - computed: false, optional: true, required: false
  private _defaultPartitionExpirationMs?: number; 
  public get defaultPartitionExpirationMs() {
    return this.getNumberAttribute('default_partition_expiration_ms');
  }
  public set defaultPartitionExpirationMs(value: number) {
    this._defaultPartitionExpirationMs = value;
  }
  public resetDefaultPartitionExpirationMs() {
    this._defaultPartitionExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPartitionExpirationMsInput() {
    return this._defaultPartitionExpirationMs;
  }

  // default_table_expiration_ms - computed: false, optional: true, required: false
  private _defaultTableExpirationMs?: number; 
  public get defaultTableExpirationMs() {
    return this.getNumberAttribute('default_table_expiration_ms');
  }
  public set defaultTableExpirationMs(value: number) {
    this._defaultTableExpirationMs = value;
  }
  public resetDefaultTableExpirationMs() {
    this._defaultTableExpirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTableExpirationMsInput() {
    return this._defaultTableExpirationMs;
  }

  // delete_contents_on_destroy - computed: false, optional: true, required: false
  private _deleteContentsOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteContentsOnDestroy() {
    return this.getBooleanAttribute('delete_contents_on_destroy');
  }
  public set deleteContentsOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteContentsOnDestroy = value;
  }
  public resetDeleteContentsOnDestroy() {
    this._deleteContentsOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteContentsOnDestroyInput() {
    return this._deleteContentsOnDestroy;
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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // friendly_name - computed: false, optional: true, required: false
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  public resetFriendlyName() {
    this._friendlyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // is_case_insensitive - computed: true, optional: true, required: false
  private _isCaseInsensitive?: boolean | cdktf.IResolvable; 
  public get isCaseInsensitive() {
    return this.getBooleanAttribute('is_case_insensitive');
  }
  public set isCaseInsensitive(value: boolean | cdktf.IResolvable) {
    this._isCaseInsensitive = value;
  }
  public resetIsCaseInsensitive() {
    this._isCaseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaseInsensitiveInput() {
    return this._isCaseInsensitive;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_modified_time - computed: true, optional: false, required: false
  public get lastModifiedTime() {
    return this.getNumberAttribute('last_modified_time');
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // max_time_travel_hours - computed: true, optional: true, required: false
  private _maxTimeTravelHours?: string; 
  public get maxTimeTravelHours() {
    return this.getStringAttribute('max_time_travel_hours');
  }
  public set maxTimeTravelHours(value: string) {
    this._maxTimeTravelHours = value;
  }
  public resetMaxTimeTravelHours() {
    this._maxTimeTravelHours = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxTimeTravelHoursInput() {
    return this._maxTimeTravelHours;
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

  // resource_tags - computed: false, optional: true, required: false
  private _resourceTags?: { [key: string]: string }; 
  public get resourceTags() {
    return this.getStringMapAttribute('resource_tags');
  }
  public set resourceTags(value: { [key: string]: string }) {
    this._resourceTags = value;
  }
  public resetResourceTags() {
    this._resourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTagsInput() {
    return this._resourceTags;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // storage_billing_model - computed: true, optional: true, required: false
  private _storageBillingModel?: string; 
  public get storageBillingModel() {
    return this.getStringAttribute('storage_billing_model');
  }
  public set storageBillingModel(value: string) {
    this._storageBillingModel = value;
  }
  public resetStorageBillingModel() {
    this._storageBillingModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageBillingModelInput() {
    return this._storageBillingModel;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // access - computed: false, optional: true, required: false
  private _access = new BigqueryDatasetAccessList(this, "access", true);
  public get access() {
    return this._access;
  }
  public putAccess(value: BigqueryDatasetAccess[] | cdktf.IResolvable) {
    this._access.internalValue = value;
  }
  public resetAccess() {
    this._access.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access.internalValue;
  }

  // default_encryption_configuration - computed: false, optional: true, required: false
  private _defaultEncryptionConfiguration = new BigqueryDatasetDefaultEncryptionConfigurationOutputReference(this, "default_encryption_configuration");
  public get defaultEncryptionConfiguration() {
    return this._defaultEncryptionConfiguration;
  }
  public putDefaultEncryptionConfiguration(value: BigqueryDatasetDefaultEncryptionConfiguration) {
    this._defaultEncryptionConfiguration.internalValue = value;
  }
  public resetDefaultEncryptionConfiguration() {
    this._defaultEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEncryptionConfigurationInput() {
    return this._defaultEncryptionConfiguration.internalValue;
  }

  // external_catalog_dataset_options - computed: false, optional: true, required: false
  private _externalCatalogDatasetOptions = new BigqueryDatasetExternalCatalogDatasetOptionsOutputReference(this, "external_catalog_dataset_options");
  public get externalCatalogDatasetOptions() {
    return this._externalCatalogDatasetOptions;
  }
  public putExternalCatalogDatasetOptions(value: BigqueryDatasetExternalCatalogDatasetOptions) {
    this._externalCatalogDatasetOptions.internalValue = value;
  }
  public resetExternalCatalogDatasetOptions() {
    this._externalCatalogDatasetOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalCatalogDatasetOptionsInput() {
    return this._externalCatalogDatasetOptions.internalValue;
  }

  // external_dataset_reference - computed: false, optional: true, required: false
  private _externalDatasetReference = new BigqueryDatasetExternalDatasetReferenceOutputReference(this, "external_dataset_reference");
  public get externalDatasetReference() {
    return this._externalDatasetReference;
  }
  public putExternalDatasetReference(value: BigqueryDatasetExternalDatasetReference) {
    this._externalDatasetReference.internalValue = value;
  }
  public resetExternalDatasetReference() {
    this._externalDatasetReference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDatasetReferenceInput() {
    return this._externalDatasetReference.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BigqueryDatasetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BigqueryDatasetTimeouts) {
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
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      default_collation: cdktf.stringToTerraform(this._defaultCollation),
      default_partition_expiration_ms: cdktf.numberToTerraform(this._defaultPartitionExpirationMs),
      default_table_expiration_ms: cdktf.numberToTerraform(this._defaultTableExpirationMs),
      delete_contents_on_destroy: cdktf.booleanToTerraform(this._deleteContentsOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      is_case_insensitive: cdktf.booleanToTerraform(this._isCaseInsensitive),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      max_time_travel_hours: cdktf.stringToTerraform(this._maxTimeTravelHours),
      project: cdktf.stringToTerraform(this._project),
      resource_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._resourceTags),
      storage_billing_model: cdktf.stringToTerraform(this._storageBillingModel),
      access: cdktf.listMapper(bigqueryDatasetAccessToTerraform, true)(this._access.internalValue),
      default_encryption_configuration: bigqueryDatasetDefaultEncryptionConfigurationToTerraform(this._defaultEncryptionConfiguration.internalValue),
      external_catalog_dataset_options: bigqueryDatasetExternalCatalogDatasetOptionsToTerraform(this._externalCatalogDatasetOptions.internalValue),
      external_dataset_reference: bigqueryDatasetExternalDatasetReferenceToTerraform(this._externalDatasetReference.internalValue),
      timeouts: bigqueryDatasetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dataset_id: {
        value: cdktf.stringToHclTerraform(this._datasetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_collation: {
        value: cdktf.stringToHclTerraform(this._defaultCollation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_partition_expiration_ms: {
        value: cdktf.numberToHclTerraform(this._defaultPartitionExpirationMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_table_expiration_ms: {
        value: cdktf.numberToHclTerraform(this._defaultTableExpirationMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_contents_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteContentsOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      is_case_insensitive: {
        value: cdktf.booleanToHclTerraform(this._isCaseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_time_travel_hours: {
        value: cdktf.stringToHclTerraform(this._maxTimeTravelHours),
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
      resource_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resourceTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      storage_billing_model: {
        value: cdktf.stringToHclTerraform(this._storageBillingModel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access: {
        value: cdktf.listMapperHcl(bigqueryDatasetAccessToHclTerraform, true)(this._access.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BigqueryDatasetAccessList",
      },
      default_encryption_configuration: {
        value: bigqueryDatasetDefaultEncryptionConfigurationToHclTerraform(this._defaultEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryDatasetDefaultEncryptionConfigurationList",
      },
      external_catalog_dataset_options: {
        value: bigqueryDatasetExternalCatalogDatasetOptionsToHclTerraform(this._externalCatalogDatasetOptions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryDatasetExternalCatalogDatasetOptionsList",
      },
      external_dataset_reference: {
        value: bigqueryDatasetExternalDatasetReferenceToHclTerraform(this._externalDatasetReference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryDatasetExternalDatasetReferenceList",
      },
      timeouts: {
        value: bigqueryDatasetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BigqueryDatasetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
