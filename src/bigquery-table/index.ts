// https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BigqueryTableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies column names to use for data clustering. Up to four top-level columns are allowed, and should be specified in descending priority order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#clustering BigqueryTable#clustering}
  */
  readonly clustering?: string[];
  /**
  * The dataset ID to create the table in. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}
  */
  readonly datasetId: string;
  /**
  * Whether or not to allow Terraform to destroy the instance. Unless this field is set to false in Terraform state, a terraform destroy or terraform apply that would delete the instance will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#deletion_protection BigqueryTable#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The field description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#description BigqueryTable#description}
  */
  readonly description?: string;
  /**
  * The time when this table expires, in milliseconds since the epoch. If not present, the table will persist indefinitely. Expired tables will be deleted and their storage reclaimed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#expiration_time BigqueryTable#expiration_time}
  */
  readonly expirationTime?: number;
  /**
  * A descriptive name for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#friendly_name BigqueryTable#friendly_name}
  */
  readonly friendlyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#id BigqueryTable#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A mapping of labels to assign to the resource.
  * 
  * 				**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * 				Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#labels BigqueryTable#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The maximum staleness of data that could be returned when the table (or stale MV) is queried. Staleness encoded as a string encoding of [SQL IntervalValue type](https://cloud.google.com/bigquery/docs/reference/standard-sql/data-types#interval_type).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#max_staleness BigqueryTable#max_staleness}
  */
  readonly maxStaleness?: string;
  /**
  * The ID of the project in which the resource belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#project BigqueryTable#project}
  */
  readonly project?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * A JSON schema for the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#schema BigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  * A unique ID for the resource. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}
  */
  readonly tableId: string;
  /**
  * encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#encryption_configuration BigqueryTable#encryption_configuration}
  */
  readonly encryptionConfiguration?: BigqueryTableEncryptionConfiguration;
  /**
  * external_data_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#external_data_configuration BigqueryTable#external_data_configuration}
  */
  readonly externalDataConfiguration?: BigqueryTableExternalDataConfiguration;
  /**
  * materialized_view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#materialized_view BigqueryTable#materialized_view}
  */
  readonly materializedView?: BigqueryTableMaterializedView;
  /**
  * range_partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#range_partitioning BigqueryTable#range_partitioning}
  */
  readonly rangePartitioning?: BigqueryTableRangePartitioning;
  /**
  * table_constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#table_constraints BigqueryTable#table_constraints}
  */
  readonly tableConstraints?: BigqueryTableTableConstraints;
  /**
  * table_replication_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#table_replication_info BigqueryTable#table_replication_info}
  */
  readonly tableReplicationInfo?: BigqueryTableTableReplicationInfo;
  /**
  * time_partitioning block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#time_partitioning BigqueryTable#time_partitioning}
  */
  readonly timePartitioning?: BigqueryTableTimePartitioning;
  /**
  * view block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#view BigqueryTable#view}
  */
  readonly view?: BigqueryTableView;
}
export interface BigqueryTableEncryptionConfiguration {
  /**
  * The self link or full name of a key which should be used to encrypt this table. Note that the default bigquery service account will need to have encrypt/decrypt permissions on this key - you may want to see the google_bigquery_default_service_account datasource and the google_kms_crypto_key_iam_binding resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#kms_key_name BigqueryTable#kms_key_name}
  */
  readonly kmsKeyName: string;
}

export function bigqueryTableEncryptionConfigurationToTerraform(struct?: BigqueryTableEncryptionConfigurationOutputReference | BigqueryTableEncryptionConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
  }
}


export function bigqueryTableEncryptionConfigurationToHclTerraform(struct?: BigqueryTableEncryptionConfigurationOutputReference | BigqueryTableEncryptionConfiguration): any {
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

export class BigqueryTableEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableEncryptionConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableEncryptionConfiguration | undefined) {
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

  // kms_key_version - computed: true, optional: false, required: false
  public get kmsKeyVersion() {
    return this.getStringAttribute('kms_key_version');
  }
}
export interface BigqueryTableExternalDataConfigurationAvroOptions {
  /**
  * If sourceFormat is set to "AVRO", indicates whether to interpret logical types as the corresponding BigQuery data type (for example, TIMESTAMP), instead of using the raw type (for example, INTEGER).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#use_avro_logical_types BigqueryTable#use_avro_logical_types}
  */
  readonly useAvroLogicalTypes: boolean | cdktf.IResolvable;
}

export function bigqueryTableExternalDataConfigurationAvroOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationAvroOptionsOutputReference | BigqueryTableExternalDataConfigurationAvroOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    use_avro_logical_types: cdktf.booleanToTerraform(struct!.useAvroLogicalTypes),
  }
}


export function bigqueryTableExternalDataConfigurationAvroOptionsToHclTerraform(struct?: BigqueryTableExternalDataConfigurationAvroOptionsOutputReference | BigqueryTableExternalDataConfigurationAvroOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    use_avro_logical_types: {
      value: cdktf.booleanToHclTerraform(struct!.useAvroLogicalTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableExternalDataConfigurationAvroOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationAvroOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._useAvroLogicalTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.useAvroLogicalTypes = this._useAvroLogicalTypes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationAvroOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._useAvroLogicalTypes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._useAvroLogicalTypes = value.useAvroLogicalTypes;
    }
  }

  // use_avro_logical_types - computed: false, optional: false, required: true
  private _useAvroLogicalTypes?: boolean | cdktf.IResolvable; 
  public get useAvroLogicalTypes() {
    return this.getBooleanAttribute('use_avro_logical_types');
  }
  public set useAvroLogicalTypes(value: boolean | cdktf.IResolvable) {
    this._useAvroLogicalTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useAvroLogicalTypesInput() {
    return this._useAvroLogicalTypes;
  }
}
export interface BigqueryTableExternalDataConfigurationCsvOptions {
  /**
  * Indicates if BigQuery should accept rows that are missing trailing optional columns.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#allow_jagged_rows BigqueryTable#allow_jagged_rows}
  */
  readonly allowJaggedRows?: boolean | cdktf.IResolvable;
  /**
  * Indicates if BigQuery should allow quoted data sections that contain newline characters in a CSV file. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#allow_quoted_newlines BigqueryTable#allow_quoted_newlines}
  */
  readonly allowQuotedNewlines?: boolean | cdktf.IResolvable;
  /**
  * The character encoding of the data. The supported values are UTF-8 or ISO-8859-1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}
  */
  readonly encoding?: string;
  /**
  * The separator for fields in a CSV file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#field_delimiter BigqueryTable#field_delimiter}
  */
  readonly fieldDelimiter?: string;
  /**
  * The value that is used to quote data sections in a CSV file. If your data does not contain quoted sections, set the property value to an empty string. If your data contains quoted newline characters, you must also set the allow_quoted_newlines property to true. The API-side default is ", specified in Terraform escaped as \". Due to limitations with Terraform default values, this value is required to be explicitly set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#quote BigqueryTable#quote}
  */
  readonly quote: string;
  /**
  * The number of rows at the top of a CSV file that BigQuery will skip when reading the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

export function bigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationCsvOptionsOutputReference | BigqueryTableExternalDataConfigurationCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_jagged_rows: cdktf.booleanToTerraform(struct!.allowJaggedRows),
    allow_quoted_newlines: cdktf.booleanToTerraform(struct!.allowQuotedNewlines),
    encoding: cdktf.stringToTerraform(struct!.encoding),
    field_delimiter: cdktf.stringToTerraform(struct!.fieldDelimiter),
    quote: cdktf.stringToTerraform(struct!.quote),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}


export function bigqueryTableExternalDataConfigurationCsvOptionsToHclTerraform(struct?: BigqueryTableExternalDataConfigurationCsvOptionsOutputReference | BigqueryTableExternalDataConfigurationCsvOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_jagged_rows: {
      value: cdktf.booleanToHclTerraform(struct!.allowJaggedRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_quoted_newlines: {
      value: cdktf.booleanToHclTerraform(struct!.allowQuotedNewlines),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_delimiter: {
      value: cdktf.stringToHclTerraform(struct!.fieldDelimiter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    quote: {
      value: cdktf.stringToHclTerraform(struct!.quote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_leading_rows: {
      value: cdktf.numberToHclTerraform(struct!.skipLeadingRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableExternalDataConfigurationCsvOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationCsvOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowJaggedRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowJaggedRows = this._allowJaggedRows;
    }
    if (this._allowQuotedNewlines !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowQuotedNewlines = this._allowQuotedNewlines;
    }
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    if (this._fieldDelimiter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldDelimiter = this._fieldDelimiter;
    }
    if (this._quote !== undefined) {
      hasAnyValues = true;
      internalValueResult.quote = this._quote;
    }
    if (this._skipLeadingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLeadingRows = this._skipLeadingRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationCsvOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowJaggedRows = undefined;
      this._allowQuotedNewlines = undefined;
      this._encoding = undefined;
      this._fieldDelimiter = undefined;
      this._quote = undefined;
      this._skipLeadingRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowJaggedRows = value.allowJaggedRows;
      this._allowQuotedNewlines = value.allowQuotedNewlines;
      this._encoding = value.encoding;
      this._fieldDelimiter = value.fieldDelimiter;
      this._quote = value.quote;
      this._skipLeadingRows = value.skipLeadingRows;
    }
  }

  // allow_jagged_rows - computed: false, optional: true, required: false
  private _allowJaggedRows?: boolean | cdktf.IResolvable; 
  public get allowJaggedRows() {
    return this.getBooleanAttribute('allow_jagged_rows');
  }
  public set allowJaggedRows(value: boolean | cdktf.IResolvable) {
    this._allowJaggedRows = value;
  }
  public resetAllowJaggedRows() {
    this._allowJaggedRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowJaggedRowsInput() {
    return this._allowJaggedRows;
  }

  // allow_quoted_newlines - computed: false, optional: true, required: false
  private _allowQuotedNewlines?: boolean | cdktf.IResolvable; 
  public get allowQuotedNewlines() {
    return this.getBooleanAttribute('allow_quoted_newlines');
  }
  public set allowQuotedNewlines(value: boolean | cdktf.IResolvable) {
    this._allowQuotedNewlines = value;
  }
  public resetAllowQuotedNewlines() {
    this._allowQuotedNewlines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowQuotedNewlinesInput() {
    return this._allowQuotedNewlines;
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }

  // field_delimiter - computed: false, optional: true, required: false
  private _fieldDelimiter?: string; 
  public get fieldDelimiter() {
    return this.getStringAttribute('field_delimiter');
  }
  public set fieldDelimiter(value: string) {
    this._fieldDelimiter = value;
  }
  public resetFieldDelimiter() {
    this._fieldDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldDelimiterInput() {
    return this._fieldDelimiter;
  }

  // quote - computed: false, optional: false, required: true
  private _quote?: string; 
  public get quote() {
    return this.getStringAttribute('quote');
  }
  public set quote(value: string) {
    this._quote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get quoteInput() {
    return this._quote;
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows;
  }
}
export interface BigqueryTableExternalDataConfigurationGoogleSheetsOptions {
  /**
  * Range of a sheet to query from. Only used when non-empty. At least one of range or skip_leading_rows must be set. Typical format: "sheet_name!top_left_cell_id:bottom_right_cell_id" For example: "sheet1!A1:B20"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#range BigqueryTable#range}
  */
  readonly range?: string;
  /**
  * The number of rows at the top of the sheet that BigQuery will skip when reading the data. At least one of range or skip_leading_rows must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#skip_leading_rows BigqueryTable#skip_leading_rows}
  */
  readonly skipLeadingRows?: number;
}

export function bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference | BigqueryTableExternalDataConfigurationGoogleSheetsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    range: cdktf.stringToTerraform(struct!.range),
    skip_leading_rows: cdktf.numberToTerraform(struct!.skipLeadingRows),
  }
}


export function bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToHclTerraform(struct?: BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference | BigqueryTableExternalDataConfigurationGoogleSheetsOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    range: {
      value: cdktf.stringToHclTerraform(struct!.range),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_leading_rows: {
      value: cdktf.numberToHclTerraform(struct!.skipLeadingRows),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._range !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range;
    }
    if (this._skipLeadingRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipLeadingRows = this._skipLeadingRows;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationGoogleSheetsOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._range = undefined;
      this._skipLeadingRows = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._range = value.range;
      this._skipLeadingRows = value.skipLeadingRows;
    }
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // skip_leading_rows - computed: false, optional: true, required: false
  private _skipLeadingRows?: number; 
  public get skipLeadingRows() {
    return this.getNumberAttribute('skip_leading_rows');
  }
  public set skipLeadingRows(value: number) {
    this._skipLeadingRows = value;
  }
  public resetSkipLeadingRows() {
    this._skipLeadingRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipLeadingRowsInput() {
    return this._skipLeadingRows;
  }
}
export interface BigqueryTableExternalDataConfigurationHivePartitioningOptions {
  /**
  * When set, what mode of hive partitioning to use when reading data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#mode BigqueryTable#mode}
  */
  readonly mode?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * When hive partition detection is requested, a common for all source uris must be required. The prefix must end immediately before the partition key encoding begins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#source_uri_prefix BigqueryTable#source_uri_prefix}
  */
  readonly sourceUriPrefix?: string;
}

export function bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference | BigqueryTableExternalDataConfigurationHivePartitioningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    source_uri_prefix: cdktf.stringToTerraform(struct!.sourceUriPrefix),
  }
}


export function bigqueryTableExternalDataConfigurationHivePartitioningOptionsToHclTerraform(struct?: BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference | BigqueryTableExternalDataConfigurationHivePartitioningOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_partition_filter: {
      value: cdktf.booleanToHclTerraform(struct!.requirePartitionFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_uri_prefix: {
      value: cdktf.stringToHclTerraform(struct!.sourceUriPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._sourceUriPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUriPrefix = this._sourceUriPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationHivePartitioningOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mode = undefined;
      this._requirePartitionFilter = undefined;
      this._sourceUriPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mode = value.mode;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._sourceUriPrefix = value.sourceUriPrefix;
    }
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

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // source_uri_prefix - computed: false, optional: true, required: false
  private _sourceUriPrefix?: string; 
  public get sourceUriPrefix() {
    return this.getStringAttribute('source_uri_prefix');
  }
  public set sourceUriPrefix(value: string) {
    this._sourceUriPrefix = value;
  }
  public resetSourceUriPrefix() {
    this._sourceUriPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUriPrefixInput() {
    return this._sourceUriPrefix;
  }
}
export interface BigqueryTableExternalDataConfigurationJsonOptions {
  /**
  * The character encoding of the data. The supported values are UTF-8, UTF-16BE, UTF-16LE, UTF-32BE, and UTF-32LE. The default value is UTF-8.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#encoding BigqueryTable#encoding}
  */
  readonly encoding?: string;
}

export function bigqueryTableExternalDataConfigurationJsonOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationJsonOptionsOutputReference | BigqueryTableExternalDataConfigurationJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encoding: cdktf.stringToTerraform(struct!.encoding),
  }
}


export function bigqueryTableExternalDataConfigurationJsonOptionsToHclTerraform(struct?: BigqueryTableExternalDataConfigurationJsonOptionsOutputReference | BigqueryTableExternalDataConfigurationJsonOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encoding: {
      value: cdktf.stringToHclTerraform(struct!.encoding),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableExternalDataConfigurationJsonOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationJsonOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.encoding = this._encoding;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationJsonOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._encoding = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._encoding = value.encoding;
    }
  }

  // encoding - computed: false, optional: true, required: false
  private _encoding?: string; 
  public get encoding() {
    return this.getStringAttribute('encoding');
  }
  public set encoding(value: string) {
    this._encoding = value;
  }
  public resetEncoding() {
    this._encoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodingInput() {
    return this._encoding;
  }
}
export interface BigqueryTableExternalDataConfigurationParquetOptions {
  /**
  * Indicates whether to use schema inference specifically for Parquet LIST logical type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#enable_list_inference BigqueryTable#enable_list_inference}
  */
  readonly enableListInference?: boolean | cdktf.IResolvable;
  /**
  * Indicates whether to infer Parquet ENUM logical type as STRING instead of BYTES by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#enum_as_string BigqueryTable#enum_as_string}
  */
  readonly enumAsString?: boolean | cdktf.IResolvable;
}

export function bigqueryTableExternalDataConfigurationParquetOptionsToTerraform(struct?: BigqueryTableExternalDataConfigurationParquetOptionsOutputReference | BigqueryTableExternalDataConfigurationParquetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_list_inference: cdktf.booleanToTerraform(struct!.enableListInference),
    enum_as_string: cdktf.booleanToTerraform(struct!.enumAsString),
  }
}


export function bigqueryTableExternalDataConfigurationParquetOptionsToHclTerraform(struct?: BigqueryTableExternalDataConfigurationParquetOptionsOutputReference | BigqueryTableExternalDataConfigurationParquetOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_list_inference: {
      value: cdktf.booleanToHclTerraform(struct!.enableListInference),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enum_as_string: {
      value: cdktf.booleanToHclTerraform(struct!.enumAsString),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableExternalDataConfigurationParquetOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfigurationParquetOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableListInference !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableListInference = this._enableListInference;
    }
    if (this._enumAsString !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumAsString = this._enumAsString;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfigurationParquetOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableListInference = undefined;
      this._enumAsString = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableListInference = value.enableListInference;
      this._enumAsString = value.enumAsString;
    }
  }

  // enable_list_inference - computed: false, optional: true, required: false
  private _enableListInference?: boolean | cdktf.IResolvable; 
  public get enableListInference() {
    return this.getBooleanAttribute('enable_list_inference');
  }
  public set enableListInference(value: boolean | cdktf.IResolvable) {
    this._enableListInference = value;
  }
  public resetEnableListInference() {
    this._enableListInference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableListInferenceInput() {
    return this._enableListInference;
  }

  // enum_as_string - computed: false, optional: true, required: false
  private _enumAsString?: boolean | cdktf.IResolvable; 
  public get enumAsString() {
    return this.getBooleanAttribute('enum_as_string');
  }
  public set enumAsString(value: boolean | cdktf.IResolvable) {
    this._enumAsString = value;
  }
  public resetEnumAsString() {
    this._enumAsString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumAsStringInput() {
    return this._enumAsString;
  }
}
export interface BigqueryTableExternalDataConfiguration {
  /**
  * Let BigQuery try to autodetect the schema and format of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#autodetect BigqueryTable#autodetect}
  */
  readonly autodetect: boolean | cdktf.IResolvable;
  /**
  * The compression type of the data source. Valid values are "NONE" or "GZIP".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#compression BigqueryTable#compression}
  */
  readonly compression?: string;
  /**
  * The connection specifying the credentials to be used to read external storage, such as Azure Blob, Cloud Storage, or S3. The connectionId can have the form "{{project}}.{{location}}.{{connection_id}}" or "projects/{{project}}/locations/{{location}}/connections/{{connection_id}}".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#connection_id BigqueryTable#connection_id}
  */
  readonly connectionId?: string;
  /**
  * Specifies how source URIs are interpreted for constructing the file set to load.  By default source URIs are expanded against the underlying storage.  Other options include specifying manifest files. Only applicable to object storage systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#file_set_spec_type BigqueryTable#file_set_spec_type}
  */
  readonly fileSetSpecType?: string;
  /**
  * Indicates if BigQuery should allow extra values that are not represented in the table schema. If true, the extra values are ignored. If false, records with extra columns are treated as bad records, and if there are too many bad records, an invalid error is returned in the job result. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#ignore_unknown_values BigqueryTable#ignore_unknown_values}
  */
  readonly ignoreUnknownValues?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of bad records that BigQuery can ignore when reading data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#max_bad_records BigqueryTable#max_bad_records}
  */
  readonly maxBadRecords?: number;
  /**
  * Metadata Cache Mode for the table. Set this to enable caching of metadata from external data source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#metadata_cache_mode BigqueryTable#metadata_cache_mode}
  */
  readonly metadataCacheMode?: string;
  /**
  * Object Metadata is used to create Object Tables. Object Tables contain a listing of objects (with their metadata) found at the sourceUris. If ObjectMetadata is set, sourceFormat should be omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#object_metadata BigqueryTable#object_metadata}
  */
  readonly objectMetadata?: string;
  /**
  * When creating an external table, the user can provide a reference file with the table schema. This is enabled for the following formats: AVRO, PARQUET, ORC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#reference_file_schema_uri BigqueryTable#reference_file_schema_uri}
  */
  readonly referenceFileSchemaUri?: string;
  /**
  * A JSON schema for the external table. Schema is required for CSV and JSON formats and is disallowed for Google Cloud Bigtable, Cloud Datastore backups, and Avro formats when using external tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#schema BigqueryTable#schema}
  */
  readonly schema?: string;
  /**
  *  Please see sourceFormat under ExternalDataConfiguration in Bigquery's public API documentation (https://cloud.google.com/bigquery/docs/reference/rest/v2/tables#externaldataconfiguration) for supported formats. To use "GOOGLE_SHEETS" the scopes must include "googleapis.com/auth/drive.readonly".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#source_format BigqueryTable#source_format}
  */
  readonly sourceFormat?: string;
  /**
  * A list of the fully-qualified URIs that point to your data in Google Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#source_uris BigqueryTable#source_uris}
  */
  readonly sourceUris: string[];
  /**
  * avro_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#avro_options BigqueryTable#avro_options}
  */
  readonly avroOptions?: BigqueryTableExternalDataConfigurationAvroOptions;
  /**
  * csv_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#csv_options BigqueryTable#csv_options}
  */
  readonly csvOptions?: BigqueryTableExternalDataConfigurationCsvOptions;
  /**
  * google_sheets_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#google_sheets_options BigqueryTable#google_sheets_options}
  */
  readonly googleSheetsOptions?: BigqueryTableExternalDataConfigurationGoogleSheetsOptions;
  /**
  * hive_partitioning_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#hive_partitioning_options BigqueryTable#hive_partitioning_options}
  */
  readonly hivePartitioningOptions?: BigqueryTableExternalDataConfigurationHivePartitioningOptions;
  /**
  * json_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#json_options BigqueryTable#json_options}
  */
  readonly jsonOptions?: BigqueryTableExternalDataConfigurationJsonOptions;
  /**
  * parquet_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#parquet_options BigqueryTable#parquet_options}
  */
  readonly parquetOptions?: BigqueryTableExternalDataConfigurationParquetOptions;
}

export function bigqueryTableExternalDataConfigurationToTerraform(struct?: BigqueryTableExternalDataConfigurationOutputReference | BigqueryTableExternalDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodetect: cdktf.booleanToTerraform(struct!.autodetect),
    compression: cdktf.stringToTerraform(struct!.compression),
    connection_id: cdktf.stringToTerraform(struct!.connectionId),
    file_set_spec_type: cdktf.stringToTerraform(struct!.fileSetSpecType),
    ignore_unknown_values: cdktf.booleanToTerraform(struct!.ignoreUnknownValues),
    max_bad_records: cdktf.numberToTerraform(struct!.maxBadRecords),
    metadata_cache_mode: cdktf.stringToTerraform(struct!.metadataCacheMode),
    object_metadata: cdktf.stringToTerraform(struct!.objectMetadata),
    reference_file_schema_uri: cdktf.stringToTerraform(struct!.referenceFileSchemaUri),
    schema: cdktf.stringToTerraform(struct!.schema),
    source_format: cdktf.stringToTerraform(struct!.sourceFormat),
    source_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceUris),
    avro_options: bigqueryTableExternalDataConfigurationAvroOptionsToTerraform(struct!.avroOptions),
    csv_options: bigqueryTableExternalDataConfigurationCsvOptionsToTerraform(struct!.csvOptions),
    google_sheets_options: bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToTerraform(struct!.googleSheetsOptions),
    hive_partitioning_options: bigqueryTableExternalDataConfigurationHivePartitioningOptionsToTerraform(struct!.hivePartitioningOptions),
    json_options: bigqueryTableExternalDataConfigurationJsonOptionsToTerraform(struct!.jsonOptions),
    parquet_options: bigqueryTableExternalDataConfigurationParquetOptionsToTerraform(struct!.parquetOptions),
  }
}


export function bigqueryTableExternalDataConfigurationToHclTerraform(struct?: BigqueryTableExternalDataConfigurationOutputReference | BigqueryTableExternalDataConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autodetect: {
      value: cdktf.booleanToHclTerraform(struct!.autodetect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compression: {
      value: cdktf.stringToHclTerraform(struct!.compression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_id: {
      value: cdktf.stringToHclTerraform(struct!.connectionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_set_spec_type: {
      value: cdktf.stringToHclTerraform(struct!.fileSetSpecType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_unknown_values: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreUnknownValues),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_bad_records: {
      value: cdktf.numberToHclTerraform(struct!.maxBadRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metadata_cache_mode: {
      value: cdktf.stringToHclTerraform(struct!.metadataCacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    object_metadata: {
      value: cdktf.stringToHclTerraform(struct!.objectMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reference_file_schema_uri: {
      value: cdktf.stringToHclTerraform(struct!.referenceFileSchemaUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_format: {
      value: cdktf.stringToHclTerraform(struct!.sourceFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    avro_options: {
      value: bigqueryTableExternalDataConfigurationAvroOptionsToHclTerraform(struct!.avroOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableExternalDataConfigurationAvroOptionsList",
    },
    csv_options: {
      value: bigqueryTableExternalDataConfigurationCsvOptionsToHclTerraform(struct!.csvOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableExternalDataConfigurationCsvOptionsList",
    },
    google_sheets_options: {
      value: bigqueryTableExternalDataConfigurationGoogleSheetsOptionsToHclTerraform(struct!.googleSheetsOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableExternalDataConfigurationGoogleSheetsOptionsList",
    },
    hive_partitioning_options: {
      value: bigqueryTableExternalDataConfigurationHivePartitioningOptionsToHclTerraform(struct!.hivePartitioningOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableExternalDataConfigurationHivePartitioningOptionsList",
    },
    json_options: {
      value: bigqueryTableExternalDataConfigurationJsonOptionsToHclTerraform(struct!.jsonOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableExternalDataConfigurationJsonOptionsList",
    },
    parquet_options: {
      value: bigqueryTableExternalDataConfigurationParquetOptionsToHclTerraform(struct!.parquetOptions),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableExternalDataConfigurationParquetOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableExternalDataConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableExternalDataConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodetect !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodetect = this._autodetect;
    }
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._connectionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionId = this._connectionId;
    }
    if (this._fileSetSpecType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSetSpecType = this._fileSetSpecType;
    }
    if (this._ignoreUnknownValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreUnknownValues = this._ignoreUnknownValues;
    }
    if (this._maxBadRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBadRecords = this._maxBadRecords;
    }
    if (this._metadataCacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataCacheMode = this._metadataCacheMode;
    }
    if (this._objectMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectMetadata = this._objectMetadata;
    }
    if (this._referenceFileSchemaUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.referenceFileSchemaUri = this._referenceFileSchemaUri;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._sourceFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceFormat = this._sourceFormat;
    }
    if (this._sourceUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceUris = this._sourceUris;
    }
    if (this._avroOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroOptions = this._avroOptions?.internalValue;
    }
    if (this._csvOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csvOptions = this._csvOptions?.internalValue;
    }
    if (this._googleSheetsOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleSheetsOptions = this._googleSheetsOptions?.internalValue;
    }
    if (this._hivePartitioningOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hivePartitioningOptions = this._hivePartitioningOptions?.internalValue;
    }
    if (this._jsonOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonOptions = this._jsonOptions?.internalValue;
    }
    if (this._parquetOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parquetOptions = this._parquetOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableExternalDataConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autodetect = undefined;
      this._compression = undefined;
      this._connectionId = undefined;
      this._fileSetSpecType = undefined;
      this._ignoreUnknownValues = undefined;
      this._maxBadRecords = undefined;
      this._metadataCacheMode = undefined;
      this._objectMetadata = undefined;
      this._referenceFileSchemaUri = undefined;
      this._schema = undefined;
      this._sourceFormat = undefined;
      this._sourceUris = undefined;
      this._avroOptions.internalValue = undefined;
      this._csvOptions.internalValue = undefined;
      this._googleSheetsOptions.internalValue = undefined;
      this._hivePartitioningOptions.internalValue = undefined;
      this._jsonOptions.internalValue = undefined;
      this._parquetOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autodetect = value.autodetect;
      this._compression = value.compression;
      this._connectionId = value.connectionId;
      this._fileSetSpecType = value.fileSetSpecType;
      this._ignoreUnknownValues = value.ignoreUnknownValues;
      this._maxBadRecords = value.maxBadRecords;
      this._metadataCacheMode = value.metadataCacheMode;
      this._objectMetadata = value.objectMetadata;
      this._referenceFileSchemaUri = value.referenceFileSchemaUri;
      this._schema = value.schema;
      this._sourceFormat = value.sourceFormat;
      this._sourceUris = value.sourceUris;
      this._avroOptions.internalValue = value.avroOptions;
      this._csvOptions.internalValue = value.csvOptions;
      this._googleSheetsOptions.internalValue = value.googleSheetsOptions;
      this._hivePartitioningOptions.internalValue = value.hivePartitioningOptions;
      this._jsonOptions.internalValue = value.jsonOptions;
      this._parquetOptions.internalValue = value.parquetOptions;
    }
  }

  // autodetect - computed: false, optional: false, required: true
  private _autodetect?: boolean | cdktf.IResolvable; 
  public get autodetect() {
    return this.getBooleanAttribute('autodetect');
  }
  public set autodetect(value: boolean | cdktf.IResolvable) {
    this._autodetect = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autodetectInput() {
    return this._autodetect;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: string; 
  public get compression() {
    return this.getStringAttribute('compression');
  }
  public set compression(value: string) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // connection_id - computed: false, optional: true, required: false
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // file_set_spec_type - computed: false, optional: true, required: false
  private _fileSetSpecType?: string; 
  public get fileSetSpecType() {
    return this.getStringAttribute('file_set_spec_type');
  }
  public set fileSetSpecType(value: string) {
    this._fileSetSpecType = value;
  }
  public resetFileSetSpecType() {
    this._fileSetSpecType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSetSpecTypeInput() {
    return this._fileSetSpecType;
  }

  // ignore_unknown_values - computed: false, optional: true, required: false
  private _ignoreUnknownValues?: boolean | cdktf.IResolvable; 
  public get ignoreUnknownValues() {
    return this.getBooleanAttribute('ignore_unknown_values');
  }
  public set ignoreUnknownValues(value: boolean | cdktf.IResolvable) {
    this._ignoreUnknownValues = value;
  }
  public resetIgnoreUnknownValues() {
    this._ignoreUnknownValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUnknownValuesInput() {
    return this._ignoreUnknownValues;
  }

  // max_bad_records - computed: false, optional: true, required: false
  private _maxBadRecords?: number; 
  public get maxBadRecords() {
    return this.getNumberAttribute('max_bad_records');
  }
  public set maxBadRecords(value: number) {
    this._maxBadRecords = value;
  }
  public resetMaxBadRecords() {
    this._maxBadRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBadRecordsInput() {
    return this._maxBadRecords;
  }

  // metadata_cache_mode - computed: false, optional: true, required: false
  private _metadataCacheMode?: string; 
  public get metadataCacheMode() {
    return this.getStringAttribute('metadata_cache_mode');
  }
  public set metadataCacheMode(value: string) {
    this._metadataCacheMode = value;
  }
  public resetMetadataCacheMode() {
    this._metadataCacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataCacheModeInput() {
    return this._metadataCacheMode;
  }

  // object_metadata - computed: false, optional: true, required: false
  private _objectMetadata?: string; 
  public get objectMetadata() {
    return this.getStringAttribute('object_metadata');
  }
  public set objectMetadata(value: string) {
    this._objectMetadata = value;
  }
  public resetObjectMetadata() {
    this._objectMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectMetadataInput() {
    return this._objectMetadata;
  }

  // reference_file_schema_uri - computed: false, optional: true, required: false
  private _referenceFileSchemaUri?: string; 
  public get referenceFileSchemaUri() {
    return this.getStringAttribute('reference_file_schema_uri');
  }
  public set referenceFileSchemaUri(value: string) {
    this._referenceFileSchemaUri = value;
  }
  public resetReferenceFileSchemaUri() {
    this._referenceFileSchemaUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceFileSchemaUriInput() {
    return this._referenceFileSchemaUri;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // source_format - computed: false, optional: true, required: false
  private _sourceFormat?: string; 
  public get sourceFormat() {
    return this.getStringAttribute('source_format');
  }
  public set sourceFormat(value: string) {
    this._sourceFormat = value;
  }
  public resetSourceFormat() {
    this._sourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceFormatInput() {
    return this._sourceFormat;
  }

  // source_uris - computed: false, optional: false, required: true
  private _sourceUris?: string[]; 
  public get sourceUris() {
    return this.getListAttribute('source_uris');
  }
  public set sourceUris(value: string[]) {
    this._sourceUris = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUrisInput() {
    return this._sourceUris;
  }

  // avro_options - computed: false, optional: true, required: false
  private _avroOptions = new BigqueryTableExternalDataConfigurationAvroOptionsOutputReference(this, "avro_options");
  public get avroOptions() {
    return this._avroOptions;
  }
  public putAvroOptions(value: BigqueryTableExternalDataConfigurationAvroOptions) {
    this._avroOptions.internalValue = value;
  }
  public resetAvroOptions() {
    this._avroOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroOptionsInput() {
    return this._avroOptions.internalValue;
  }

  // csv_options - computed: false, optional: true, required: false
  private _csvOptions = new BigqueryTableExternalDataConfigurationCsvOptionsOutputReference(this, "csv_options");
  public get csvOptions() {
    return this._csvOptions;
  }
  public putCsvOptions(value: BigqueryTableExternalDataConfigurationCsvOptions) {
    this._csvOptions.internalValue = value;
  }
  public resetCsvOptions() {
    this._csvOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvOptionsInput() {
    return this._csvOptions.internalValue;
  }

  // google_sheets_options - computed: false, optional: true, required: false
  private _googleSheetsOptions = new BigqueryTableExternalDataConfigurationGoogleSheetsOptionsOutputReference(this, "google_sheets_options");
  public get googleSheetsOptions() {
    return this._googleSheetsOptions;
  }
  public putGoogleSheetsOptions(value: BigqueryTableExternalDataConfigurationGoogleSheetsOptions) {
    this._googleSheetsOptions.internalValue = value;
  }
  public resetGoogleSheetsOptions() {
    this._googleSheetsOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSheetsOptionsInput() {
    return this._googleSheetsOptions.internalValue;
  }

  // hive_partitioning_options - computed: false, optional: true, required: false
  private _hivePartitioningOptions = new BigqueryTableExternalDataConfigurationHivePartitioningOptionsOutputReference(this, "hive_partitioning_options");
  public get hivePartitioningOptions() {
    return this._hivePartitioningOptions;
  }
  public putHivePartitioningOptions(value: BigqueryTableExternalDataConfigurationHivePartitioningOptions) {
    this._hivePartitioningOptions.internalValue = value;
  }
  public resetHivePartitioningOptions() {
    this._hivePartitioningOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hivePartitioningOptionsInput() {
    return this._hivePartitioningOptions.internalValue;
  }

  // json_options - computed: false, optional: true, required: false
  private _jsonOptions = new BigqueryTableExternalDataConfigurationJsonOptionsOutputReference(this, "json_options");
  public get jsonOptions() {
    return this._jsonOptions;
  }
  public putJsonOptions(value: BigqueryTableExternalDataConfigurationJsonOptions) {
    this._jsonOptions.internalValue = value;
  }
  public resetJsonOptions() {
    this._jsonOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonOptionsInput() {
    return this._jsonOptions.internalValue;
  }

  // parquet_options - computed: false, optional: true, required: false
  private _parquetOptions = new BigqueryTableExternalDataConfigurationParquetOptionsOutputReference(this, "parquet_options");
  public get parquetOptions() {
    return this._parquetOptions;
  }
  public putParquetOptions(value: BigqueryTableExternalDataConfigurationParquetOptions) {
    this._parquetOptions.internalValue = value;
  }
  public resetParquetOptions() {
    this._parquetOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parquetOptionsInput() {
    return this._parquetOptions.internalValue;
  }
}
export interface BigqueryTableMaterializedView {
  /**
  * Allow non incremental materialized view definition. The default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#allow_non_incremental_definition BigqueryTable#allow_non_incremental_definition}
  */
  readonly allowNonIncrementalDefinition?: boolean | cdktf.IResolvable;
  /**
  * Specifies if BigQuery should automatically refresh materialized view when the base table is updated. The default is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#enable_refresh BigqueryTable#enable_refresh}
  */
  readonly enableRefresh?: boolean | cdktf.IResolvable;
  /**
  * A query whose result is persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#query BigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies maximum frequency at which this materialized view will be refreshed. The default is 1800000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#refresh_interval_ms BigqueryTable#refresh_interval_ms}
  */
  readonly refreshIntervalMs?: number;
}

export function bigqueryTableMaterializedViewToTerraform(struct?: BigqueryTableMaterializedViewOutputReference | BigqueryTableMaterializedView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_non_incremental_definition: cdktf.booleanToTerraform(struct!.allowNonIncrementalDefinition),
    enable_refresh: cdktf.booleanToTerraform(struct!.enableRefresh),
    query: cdktf.stringToTerraform(struct!.query),
    refresh_interval_ms: cdktf.numberToTerraform(struct!.refreshIntervalMs),
  }
}


export function bigqueryTableMaterializedViewToHclTerraform(struct?: BigqueryTableMaterializedViewOutputReference | BigqueryTableMaterializedView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_non_incremental_definition: {
      value: cdktf.booleanToHclTerraform(struct!.allowNonIncrementalDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.enableRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.refreshIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableMaterializedViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableMaterializedView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNonIncrementalDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNonIncrementalDefinition = this._allowNonIncrementalDefinition;
    }
    if (this._enableRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRefresh = this._enableRefresh;
    }
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._refreshIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshIntervalMs = this._refreshIntervalMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableMaterializedView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowNonIncrementalDefinition = undefined;
      this._enableRefresh = undefined;
      this._query = undefined;
      this._refreshIntervalMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowNonIncrementalDefinition = value.allowNonIncrementalDefinition;
      this._enableRefresh = value.enableRefresh;
      this._query = value.query;
      this._refreshIntervalMs = value.refreshIntervalMs;
    }
  }

  // allow_non_incremental_definition - computed: false, optional: true, required: false
  private _allowNonIncrementalDefinition?: boolean | cdktf.IResolvable; 
  public get allowNonIncrementalDefinition() {
    return this.getBooleanAttribute('allow_non_incremental_definition');
  }
  public set allowNonIncrementalDefinition(value: boolean | cdktf.IResolvable) {
    this._allowNonIncrementalDefinition = value;
  }
  public resetAllowNonIncrementalDefinition() {
    this._allowNonIncrementalDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNonIncrementalDefinitionInput() {
    return this._allowNonIncrementalDefinition;
  }

  // enable_refresh - computed: false, optional: true, required: false
  private _enableRefresh?: boolean | cdktf.IResolvable; 
  public get enableRefresh() {
    return this.getBooleanAttribute('enable_refresh');
  }
  public set enableRefresh(value: boolean | cdktf.IResolvable) {
    this._enableRefresh = value;
  }
  public resetEnableRefresh() {
    this._enableRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRefreshInput() {
    return this._enableRefresh;
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // refresh_interval_ms - computed: false, optional: true, required: false
  private _refreshIntervalMs?: number; 
  public get refreshIntervalMs() {
    return this.getNumberAttribute('refresh_interval_ms');
  }
  public set refreshIntervalMs(value: number) {
    this._refreshIntervalMs = value;
  }
  public resetRefreshIntervalMs() {
    this._refreshIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshIntervalMsInput() {
    return this._refreshIntervalMs;
  }
}
export interface BigqueryTableRangePartitioningRange {
  /**
  * End of the range partitioning, exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#end BigqueryTable#end}
  */
  readonly end: number;
  /**
  * The width of each range within the partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#interval BigqueryTable#interval}
  */
  readonly interval: number;
  /**
  * Start of the range partitioning, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#start BigqueryTable#start}
  */
  readonly start: number;
}

export function bigqueryTableRangePartitioningRangeToTerraform(struct?: BigqueryTableRangePartitioningRangeOutputReference | BigqueryTableRangePartitioningRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    interval: cdktf.numberToTerraform(struct!.interval),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function bigqueryTableRangePartitioningRangeToHclTerraform(struct?: BigqueryTableRangePartitioningRangeOutputReference | BigqueryTableRangePartitioningRange): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableRangePartitioningRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableRangePartitioningRange | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableRangePartitioningRange | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._end = undefined;
      this._interval = undefined;
      this._start = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._end = value.end;
      this._interval = value.interval;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: false, required: true
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // start - computed: false, optional: false, required: true
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}
export interface BigqueryTableRangePartitioning {
  /**
  * The field used to determine how to create a range-based partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#field BigqueryTable#field}
  */
  readonly field: string;
  /**
  * range block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#range BigqueryTable#range}
  */
  readonly range: BigqueryTableRangePartitioningRange;
}

export function bigqueryTableRangePartitioningToTerraform(struct?: BigqueryTableRangePartitioningOutputReference | BigqueryTableRangePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    range: bigqueryTableRangePartitioningRangeToTerraform(struct!.range),
  }
}


export function bigqueryTableRangePartitioningToHclTerraform(struct?: BigqueryTableRangePartitioningOutputReference | BigqueryTableRangePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    range: {
      value: bigqueryTableRangePartitioningRangeToHclTerraform(struct!.range),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableRangePartitioningRangeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableRangePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableRangePartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._range?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.range = this._range?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableRangePartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._field = undefined;
      this._range.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._field = value.field;
      this._range.internalValue = value.range;
    }
  }

  // field - computed: false, optional: false, required: true
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // range - computed: false, optional: false, required: true
  private _range = new BigqueryTableRangePartitioningRangeOutputReference(this, "range");
  public get range() {
    return this._range;
  }
  public putRange(value: BigqueryTableRangePartitioningRange) {
    this._range.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range.internalValue;
  }
}
export interface BigqueryTableTableConstraintsForeignKeysColumnReferences {
  /**
  * The column in the primary key that are referenced by the referencingColumn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#referenced_column BigqueryTable#referenced_column}
  */
  readonly referencedColumn: string;
  /**
  * The column that composes the foreign key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#referencing_column BigqueryTable#referencing_column}
  */
  readonly referencingColumn: string;
}

export function bigqueryTableTableConstraintsForeignKeysColumnReferencesToTerraform(struct?: BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference | BigqueryTableTableConstraintsForeignKeysColumnReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    referenced_column: cdktf.stringToTerraform(struct!.referencedColumn),
    referencing_column: cdktf.stringToTerraform(struct!.referencingColumn),
  }
}


export function bigqueryTableTableConstraintsForeignKeysColumnReferencesToHclTerraform(struct?: BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference | BigqueryTableTableConstraintsForeignKeysColumnReferences): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    referenced_column: {
      value: cdktf.stringToHclTerraform(struct!.referencedColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referencing_column: {
      value: cdktf.stringToHclTerraform(struct!.referencingColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableTableConstraintsForeignKeysColumnReferences | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._referencedColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedColumn = this._referencedColumn;
    }
    if (this._referencingColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencingColumn = this._referencingColumn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableTableConstraintsForeignKeysColumnReferences | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._referencedColumn = undefined;
      this._referencingColumn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._referencedColumn = value.referencedColumn;
      this._referencingColumn = value.referencingColumn;
    }
  }

  // referenced_column - computed: false, optional: false, required: true
  private _referencedColumn?: string; 
  public get referencedColumn() {
    return this.getStringAttribute('referenced_column');
  }
  public set referencedColumn(value: string) {
    this._referencedColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedColumnInput() {
    return this._referencedColumn;
  }

  // referencing_column - computed: false, optional: false, required: true
  private _referencingColumn?: string; 
  public get referencingColumn() {
    return this.getStringAttribute('referencing_column');
  }
  public set referencingColumn(value: string) {
    this._referencingColumn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencingColumnInput() {
    return this._referencingColumn;
  }
}
export interface BigqueryTableTableConstraintsForeignKeysReferencedTable {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#dataset_id BigqueryTable#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#project_id BigqueryTable#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z, A-Z), numbers (0-9), or underscores (_). The maximum length is 1,024 characters. Certain operations allow suffixing of the table ID with a partition decorator, such as sample_table$20190123.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#table_id BigqueryTable#table_id}
  */
  readonly tableId: string;
}

export function bigqueryTableTableConstraintsForeignKeysReferencedTableToTerraform(struct?: BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference | BigqueryTableTableConstraintsForeignKeysReferencedTable): any {
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


export function bigqueryTableTableConstraintsForeignKeysReferencedTableToHclTerraform(struct?: BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference | BigqueryTableTableConstraintsForeignKeysReferencedTable): any {
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

export class BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableTableConstraintsForeignKeysReferencedTable | undefined {
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

  public set internalValue(value: BigqueryTableTableConstraintsForeignKeysReferencedTable | undefined) {
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
export interface BigqueryTableTableConstraintsForeignKeys {
  /**
  * Set only if the foreign key constraint is named.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#name BigqueryTable#name}
  */
  readonly name?: string;
  /**
  * column_references block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#column_references BigqueryTable#column_references}
  */
  readonly columnReferences: BigqueryTableTableConstraintsForeignKeysColumnReferences;
  /**
  * referenced_table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#referenced_table BigqueryTable#referenced_table}
  */
  readonly referencedTable: BigqueryTableTableConstraintsForeignKeysReferencedTable;
}

export function bigqueryTableTableConstraintsForeignKeysToTerraform(struct?: BigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    column_references: bigqueryTableTableConstraintsForeignKeysColumnReferencesToTerraform(struct!.columnReferences),
    referenced_table: bigqueryTableTableConstraintsForeignKeysReferencedTableToTerraform(struct!.referencedTable),
  }
}


export function bigqueryTableTableConstraintsForeignKeysToHclTerraform(struct?: BigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    column_references: {
      value: bigqueryTableTableConstraintsForeignKeysColumnReferencesToHclTerraform(struct!.columnReferences),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableTableConstraintsForeignKeysColumnReferencesList",
    },
    referenced_table: {
      value: bigqueryTableTableConstraintsForeignKeysReferencedTableToHclTerraform(struct!.referencedTable),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableTableConstraintsForeignKeysReferencedTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableTableConstraintsForeignKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._columnReferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.columnReferences = this._columnReferences?.internalValue;
    }
    if (this._referencedTable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.referencedTable = this._referencedTable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableTableConstraintsForeignKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._columnReferences.internalValue = undefined;
      this._referencedTable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._columnReferences.internalValue = value.columnReferences;
      this._referencedTable.internalValue = value.referencedTable;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // column_references - computed: false, optional: false, required: true
  private _columnReferences = new BigqueryTableTableConstraintsForeignKeysColumnReferencesOutputReference(this, "column_references");
  public get columnReferences() {
    return this._columnReferences;
  }
  public putColumnReferences(value: BigqueryTableTableConstraintsForeignKeysColumnReferences) {
    this._columnReferences.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnReferencesInput() {
    return this._columnReferences.internalValue;
  }

  // referenced_table - computed: false, optional: false, required: true
  private _referencedTable = new BigqueryTableTableConstraintsForeignKeysReferencedTableOutputReference(this, "referenced_table");
  public get referencedTable() {
    return this._referencedTable;
  }
  public putReferencedTable(value: BigqueryTableTableConstraintsForeignKeysReferencedTable) {
    this._referencedTable.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get referencedTableInput() {
    return this._referencedTable.internalValue;
  }
}

export class BigqueryTableTableConstraintsForeignKeysList extends cdktf.ComplexList {
  public internalValue? : BigqueryTableTableConstraintsForeignKeys[] | cdktf.IResolvable

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
  public get(index: number): BigqueryTableTableConstraintsForeignKeysOutputReference {
    return new BigqueryTableTableConstraintsForeignKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BigqueryTableTableConstraintsPrimaryKey {
  /**
  * The columns that are composed of the primary key constraint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#columns BigqueryTable#columns}
  */
  readonly columns: string[];
}

export function bigqueryTableTableConstraintsPrimaryKeyToTerraform(struct?: BigqueryTableTableConstraintsPrimaryKeyOutputReference | BigqueryTableTableConstraintsPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    columns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.columns),
  }
}


export function bigqueryTableTableConstraintsPrimaryKeyToHclTerraform(struct?: BigqueryTableTableConstraintsPrimaryKeyOutputReference | BigqueryTableTableConstraintsPrimaryKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    columns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.columns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableTableConstraintsPrimaryKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableTableConstraintsPrimaryKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._columns !== undefined) {
      hasAnyValues = true;
      internalValueResult.columns = this._columns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableTableConstraintsPrimaryKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._columns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._columns = value.columns;
    }
  }

  // columns - computed: false, optional: false, required: true
  private _columns?: string[]; 
  public get columns() {
    return this.getListAttribute('columns');
  }
  public set columns(value: string[]) {
    this._columns = value;
  }
  // Temporarily expose input value. Use with caution.
  public get columnsInput() {
    return this._columns;
  }
}
export interface BigqueryTableTableConstraints {
  /**
  * foreign_keys block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#foreign_keys BigqueryTable#foreign_keys}
  */
  readonly foreignKeys?: BigqueryTableTableConstraintsForeignKeys[] | cdktf.IResolvable;
  /**
  * primary_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#primary_key BigqueryTable#primary_key}
  */
  readonly primaryKey?: BigqueryTableTableConstraintsPrimaryKey;
}

export function bigqueryTableTableConstraintsToTerraform(struct?: BigqueryTableTableConstraintsOutputReference | BigqueryTableTableConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    foreign_keys: cdktf.listMapper(bigqueryTableTableConstraintsForeignKeysToTerraform, true)(struct!.foreignKeys),
    primary_key: bigqueryTableTableConstraintsPrimaryKeyToTerraform(struct!.primaryKey),
  }
}


export function bigqueryTableTableConstraintsToHclTerraform(struct?: BigqueryTableTableConstraintsOutputReference | BigqueryTableTableConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    foreign_keys: {
      value: cdktf.listMapperHcl(bigqueryTableTableConstraintsForeignKeysToHclTerraform, true)(struct!.foreignKeys),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableTableConstraintsForeignKeysList",
    },
    primary_key: {
      value: bigqueryTableTableConstraintsPrimaryKeyToHclTerraform(struct!.primaryKey),
      isBlock: true,
      type: "list",
      storageClassType: "BigqueryTableTableConstraintsPrimaryKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableTableConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableTableConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._foreignKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.foreignKeys = this._foreignKeys?.internalValue;
    }
    if (this._primaryKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableTableConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._foreignKeys.internalValue = undefined;
      this._primaryKey.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._foreignKeys.internalValue = value.foreignKeys;
      this._primaryKey.internalValue = value.primaryKey;
    }
  }

  // foreign_keys - computed: false, optional: true, required: false
  private _foreignKeys = new BigqueryTableTableConstraintsForeignKeysList(this, "foreign_keys", false);
  public get foreignKeys() {
    return this._foreignKeys;
  }
  public putForeignKeys(value: BigqueryTableTableConstraintsForeignKeys[] | cdktf.IResolvable) {
    this._foreignKeys.internalValue = value;
  }
  public resetForeignKeys() {
    this._foreignKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreignKeysInput() {
    return this._foreignKeys.internalValue;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey = new BigqueryTableTableConstraintsPrimaryKeyOutputReference(this, "primary_key");
  public get primaryKey() {
    return this._primaryKey;
  }
  public putPrimaryKey(value: BigqueryTableTableConstraintsPrimaryKey) {
    this._primaryKey.internalValue = value;
  }
  public resetPrimaryKey() {
    this._primaryKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey.internalValue;
  }
}
export interface BigqueryTableTableReplicationInfo {
  /**
  * The interval at which the source materialized view is polled for updates. The default is 300000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#replication_interval_ms BigqueryTable#replication_interval_ms}
  */
  readonly replicationIntervalMs?: number;
  /**
  * The ID of the source dataset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#source_dataset_id BigqueryTable#source_dataset_id}
  */
  readonly sourceDatasetId: string;
  /**
  * The ID of the source project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#source_project_id BigqueryTable#source_project_id}
  */
  readonly sourceProjectId: string;
  /**
  * The ID of the source materialized view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#source_table_id BigqueryTable#source_table_id}
  */
  readonly sourceTableId: string;
}

export function bigqueryTableTableReplicationInfoToTerraform(struct?: BigqueryTableTableReplicationInfoOutputReference | BigqueryTableTableReplicationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replication_interval_ms: cdktf.numberToTerraform(struct!.replicationIntervalMs),
    source_dataset_id: cdktf.stringToTerraform(struct!.sourceDatasetId),
    source_project_id: cdktf.stringToTerraform(struct!.sourceProjectId),
    source_table_id: cdktf.stringToTerraform(struct!.sourceTableId),
  }
}


export function bigqueryTableTableReplicationInfoToHclTerraform(struct?: BigqueryTableTableReplicationInfoOutputReference | BigqueryTableTableReplicationInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replication_interval_ms: {
      value: cdktf.numberToHclTerraform(struct!.replicationIntervalMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_dataset_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceDatasetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_project_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_table_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableTableReplicationInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableTableReplicationInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicationIntervalMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationIntervalMs = this._replicationIntervalMs;
    }
    if (this._sourceDatasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceDatasetId = this._sourceDatasetId;
    }
    if (this._sourceProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceProjectId = this._sourceProjectId;
    }
    if (this._sourceTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTableId = this._sourceTableId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableTableReplicationInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._replicationIntervalMs = undefined;
      this._sourceDatasetId = undefined;
      this._sourceProjectId = undefined;
      this._sourceTableId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._replicationIntervalMs = value.replicationIntervalMs;
      this._sourceDatasetId = value.sourceDatasetId;
      this._sourceProjectId = value.sourceProjectId;
      this._sourceTableId = value.sourceTableId;
    }
  }

  // replication_interval_ms - computed: false, optional: true, required: false
  private _replicationIntervalMs?: number; 
  public get replicationIntervalMs() {
    return this.getNumberAttribute('replication_interval_ms');
  }
  public set replicationIntervalMs(value: number) {
    this._replicationIntervalMs = value;
  }
  public resetReplicationIntervalMs() {
    this._replicationIntervalMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationIntervalMsInput() {
    return this._replicationIntervalMs;
  }

  // source_dataset_id - computed: false, optional: false, required: true
  private _sourceDatasetId?: string; 
  public get sourceDatasetId() {
    return this.getStringAttribute('source_dataset_id');
  }
  public set sourceDatasetId(value: string) {
    this._sourceDatasetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceDatasetIdInput() {
    return this._sourceDatasetId;
  }

  // source_project_id - computed: false, optional: false, required: true
  private _sourceProjectId?: string; 
  public get sourceProjectId() {
    return this.getStringAttribute('source_project_id');
  }
  public set sourceProjectId(value: string) {
    this._sourceProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceProjectIdInput() {
    return this._sourceProjectId;
  }

  // source_table_id - computed: false, optional: false, required: true
  private _sourceTableId?: string; 
  public get sourceTableId() {
    return this.getStringAttribute('source_table_id');
  }
  public set sourceTableId(value: string) {
    this._sourceTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTableIdInput() {
    return this._sourceTableId;
  }
}
export interface BigqueryTableTimePartitioning {
  /**
  * Number of milliseconds for which to keep the storage for a partition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#expiration_ms BigqueryTable#expiration_ms}
  */
  readonly expirationMs?: number;
  /**
  * The field used to determine how to create a time-based partition. If time-based partitioning is enabled without this value, the table is partitioned based on the load time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#field BigqueryTable#field}
  */
  readonly field?: string;
  /**
  * If set to true, queries over this table require a partition filter that can be used for partition elimination to be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#require_partition_filter BigqueryTable#require_partition_filter}
  */
  readonly requirePartitionFilter?: boolean | cdktf.IResolvable;
  /**
  * The supported types are DAY, HOUR, MONTH, and YEAR, which will generate one partition per day, hour, month, and year, respectively.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#type BigqueryTable#type}
  */
  readonly type: string;
}

export function bigqueryTableTimePartitioningToTerraform(struct?: BigqueryTableTimePartitioningOutputReference | BigqueryTableTimePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expiration_ms: cdktf.numberToTerraform(struct!.expirationMs),
    field: cdktf.stringToTerraform(struct!.field),
    require_partition_filter: cdktf.booleanToTerraform(struct!.requirePartitionFilter),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function bigqueryTableTimePartitioningToHclTerraform(struct?: BigqueryTableTimePartitioningOutputReference | BigqueryTableTimePartitioning): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expiration_ms: {
      value: cdktf.numberToHclTerraform(struct!.expirationMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    field: {
      value: cdktf.stringToHclTerraform(struct!.field),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_partition_filter: {
      value: cdktf.booleanToHclTerraform(struct!.requirePartitionFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableTimePartitioningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableTimePartitioning | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expirationMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationMs = this._expirationMs;
    }
    if (this._field !== undefined) {
      hasAnyValues = true;
      internalValueResult.field = this._field;
    }
    if (this._requirePartitionFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.requirePartitionFilter = this._requirePartitionFilter;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableTimePartitioning | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expirationMs = undefined;
      this._field = undefined;
      this._requirePartitionFilter = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expirationMs = value.expirationMs;
      this._field = value.field;
      this._requirePartitionFilter = value.requirePartitionFilter;
      this._type = value.type;
    }
  }

  // expiration_ms - computed: true, optional: true, required: false
  private _expirationMs?: number; 
  public get expirationMs() {
    return this.getNumberAttribute('expiration_ms');
  }
  public set expirationMs(value: number) {
    this._expirationMs = value;
  }
  public resetExpirationMs() {
    this._expirationMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationMsInput() {
    return this._expirationMs;
  }

  // field - computed: false, optional: true, required: false
  private _field?: string; 
  public get field() {
    return this.getStringAttribute('field');
  }
  public set field(value: string) {
    this._field = value;
  }
  public resetField() {
    this._field = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldInput() {
    return this._field;
  }

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface BigqueryTableView {
  /**
  * A query that BigQuery executes when the view is referenced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#query BigqueryTable#query}
  */
  readonly query: string;
  /**
  * Specifies whether to use BigQuery's legacy SQL for this view. The default value is true. If set to false, the view will use BigQuery's standard SQL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#use_legacy_sql BigqueryTable#use_legacy_sql}
  */
  readonly useLegacySql?: boolean | cdktf.IResolvable;
}

export function bigqueryTableViewToTerraform(struct?: BigqueryTableViewOutputReference | BigqueryTableView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    query: cdktf.stringToTerraform(struct!.query),
    use_legacy_sql: cdktf.booleanToTerraform(struct!.useLegacySql),
  }
}


export function bigqueryTableViewToHclTerraform(struct?: BigqueryTableViewOutputReference | BigqueryTableView): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    query: {
      value: cdktf.stringToHclTerraform(struct!.query),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_legacy_sql: {
      value: cdktf.booleanToHclTerraform(struct!.useLegacySql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BigqueryTableViewOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BigqueryTableView | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._query !== undefined) {
      hasAnyValues = true;
      internalValueResult.query = this._query;
    }
    if (this._useLegacySql !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLegacySql = this._useLegacySql;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BigqueryTableView | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._query = undefined;
      this._useLegacySql = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._query = value.query;
      this._useLegacySql = value.useLegacySql;
    }
  }

  // query - computed: false, optional: false, required: true
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // use_legacy_sql - computed: false, optional: true, required: false
  private _useLegacySql?: boolean | cdktf.IResolvable; 
  public get useLegacySql() {
    return this.getBooleanAttribute('use_legacy_sql');
  }
  public set useLegacySql(value: boolean | cdktf.IResolvable) {
    this._useLegacySql = value;
  }
  public resetUseLegacySql() {
    this._useLegacySql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLegacySqlInput() {
    return this._useLegacySql;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table google_bigquery_table}
*/
export class BigqueryTable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_bigquery_table";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BigqueryTable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BigqueryTable to import
  * @param importFromId The id of the existing BigqueryTable that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BigqueryTable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_bigquery_table", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.19.0/docs/resources/bigquery_table google_bigquery_table} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BigqueryTableConfig
  */
  public constructor(scope: Construct, id: string, config: BigqueryTableConfig) {
    super(scope, id, {
      terraformResourceType: 'google_bigquery_table',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.19.0',
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
    this._clustering = config.clustering;
    this._datasetId = config.datasetId;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._expirationTime = config.expirationTime;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._labels = config.labels;
    this._maxStaleness = config.maxStaleness;
    this._project = config.project;
    this._requirePartitionFilter = config.requirePartitionFilter;
    this._schema = config.schema;
    this._tableId = config.tableId;
    this._encryptionConfiguration.internalValue = config.encryptionConfiguration;
    this._externalDataConfiguration.internalValue = config.externalDataConfiguration;
    this._materializedView.internalValue = config.materializedView;
    this._rangePartitioning.internalValue = config.rangePartitioning;
    this._tableConstraints.internalValue = config.tableConstraints;
    this._tableReplicationInfo.internalValue = config.tableReplicationInfo;
    this._timePartitioning.internalValue = config.timePartitioning;
    this._view.internalValue = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clustering - computed: false, optional: true, required: false
  private _clustering?: string[]; 
  public get clustering() {
    return this.getListAttribute('clustering');
  }
  public set clustering(value: string[]) {
    this._clustering = value;
  }
  public resetClustering() {
    this._clustering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusteringInput() {
    return this._clustering;
  }

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

  // deletion_protection - computed: false, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
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

  // expiration_time - computed: true, optional: true, required: false
  private _expirationTime?: number; 
  public get expirationTime() {
    return this.getNumberAttribute('expiration_time');
  }
  public set expirationTime(value: number) {
    this._expirationTime = value;
  }
  public resetExpirationTime() {
    this._expirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationTimeInput() {
    return this._expirationTime;
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

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // max_staleness - computed: false, optional: true, required: false
  private _maxStaleness?: string; 
  public get maxStaleness() {
    return this.getStringAttribute('max_staleness');
  }
  public set maxStaleness(value: string) {
    this._maxStaleness = value;
  }
  public resetMaxStaleness() {
    this._maxStaleness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStalenessInput() {
    return this._maxStaleness;
  }

  // num_bytes - computed: true, optional: false, required: false
  public get numBytes() {
    return this.getNumberAttribute('num_bytes');
  }

  // num_long_term_bytes - computed: true, optional: false, required: false
  public get numLongTermBytes() {
    return this.getNumberAttribute('num_long_term_bytes');
  }

  // num_rows - computed: true, optional: false, required: false
  public get numRows() {
    return this.getNumberAttribute('num_rows');
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

  // require_partition_filter - computed: false, optional: true, required: false
  private _requirePartitionFilter?: boolean | cdktf.IResolvable; 
  public get requirePartitionFilter() {
    return this.getBooleanAttribute('require_partition_filter');
  }
  public set requirePartitionFilter(value: boolean | cdktf.IResolvable) {
    this._requirePartitionFilter = value;
  }
  public resetRequirePartitionFilter() {
    this._requirePartitionFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePartitionFilterInput() {
    return this._requirePartitionFilter;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
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

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // encryption_configuration - computed: false, optional: true, required: false
  private _encryptionConfiguration = new BigqueryTableEncryptionConfigurationOutputReference(this, "encryption_configuration");
  public get encryptionConfiguration() {
    return this._encryptionConfiguration;
  }
  public putEncryptionConfiguration(value: BigqueryTableEncryptionConfiguration) {
    this._encryptionConfiguration.internalValue = value;
  }
  public resetEncryptionConfiguration() {
    this._encryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionConfigurationInput() {
    return this._encryptionConfiguration.internalValue;
  }

  // external_data_configuration - computed: false, optional: true, required: false
  private _externalDataConfiguration = new BigqueryTableExternalDataConfigurationOutputReference(this, "external_data_configuration");
  public get externalDataConfiguration() {
    return this._externalDataConfiguration;
  }
  public putExternalDataConfiguration(value: BigqueryTableExternalDataConfiguration) {
    this._externalDataConfiguration.internalValue = value;
  }
  public resetExternalDataConfiguration() {
    this._externalDataConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalDataConfigurationInput() {
    return this._externalDataConfiguration.internalValue;
  }

  // materialized_view - computed: false, optional: true, required: false
  private _materializedView = new BigqueryTableMaterializedViewOutputReference(this, "materialized_view");
  public get materializedView() {
    return this._materializedView;
  }
  public putMaterializedView(value: BigqueryTableMaterializedView) {
    this._materializedView.internalValue = value;
  }
  public resetMaterializedView() {
    this._materializedView.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get materializedViewInput() {
    return this._materializedView.internalValue;
  }

  // range_partitioning - computed: false, optional: true, required: false
  private _rangePartitioning = new BigqueryTableRangePartitioningOutputReference(this, "range_partitioning");
  public get rangePartitioning() {
    return this._rangePartitioning;
  }
  public putRangePartitioning(value: BigqueryTableRangePartitioning) {
    this._rangePartitioning.internalValue = value;
  }
  public resetRangePartitioning() {
    this._rangePartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangePartitioningInput() {
    return this._rangePartitioning.internalValue;
  }

  // table_constraints - computed: false, optional: true, required: false
  private _tableConstraints = new BigqueryTableTableConstraintsOutputReference(this, "table_constraints");
  public get tableConstraints() {
    return this._tableConstraints;
  }
  public putTableConstraints(value: BigqueryTableTableConstraints) {
    this._tableConstraints.internalValue = value;
  }
  public resetTableConstraints() {
    this._tableConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableConstraintsInput() {
    return this._tableConstraints.internalValue;
  }

  // table_replication_info - computed: false, optional: true, required: false
  private _tableReplicationInfo = new BigqueryTableTableReplicationInfoOutputReference(this, "table_replication_info");
  public get tableReplicationInfo() {
    return this._tableReplicationInfo;
  }
  public putTableReplicationInfo(value: BigqueryTableTableReplicationInfo) {
    this._tableReplicationInfo.internalValue = value;
  }
  public resetTableReplicationInfo() {
    this._tableReplicationInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReplicationInfoInput() {
    return this._tableReplicationInfo.internalValue;
  }

  // time_partitioning - computed: false, optional: true, required: false
  private _timePartitioning = new BigqueryTableTimePartitioningOutputReference(this, "time_partitioning");
  public get timePartitioning() {
    return this._timePartitioning;
  }
  public putTimePartitioning(value: BigqueryTableTimePartitioning) {
    this._timePartitioning.internalValue = value;
  }
  public resetTimePartitioning() {
    this._timePartitioning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePartitioningInput() {
    return this._timePartitioning.internalValue;
  }

  // view - computed: false, optional: true, required: false
  private _view = new BigqueryTableViewOutputReference(this, "view");
  public get view() {
    return this._view;
  }
  public putView(value: BigqueryTableView) {
    this._view.internalValue = value;
  }
  public resetView() {
    this._view.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clustering: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clustering),
      dataset_id: cdktf.stringToTerraform(this._datasetId),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      expiration_time: cdktf.numberToTerraform(this._expirationTime),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      max_staleness: cdktf.stringToTerraform(this._maxStaleness),
      project: cdktf.stringToTerraform(this._project),
      require_partition_filter: cdktf.booleanToTerraform(this._requirePartitionFilter),
      schema: cdktf.stringToTerraform(this._schema),
      table_id: cdktf.stringToTerraform(this._tableId),
      encryption_configuration: bigqueryTableEncryptionConfigurationToTerraform(this._encryptionConfiguration.internalValue),
      external_data_configuration: bigqueryTableExternalDataConfigurationToTerraform(this._externalDataConfiguration.internalValue),
      materialized_view: bigqueryTableMaterializedViewToTerraform(this._materializedView.internalValue),
      range_partitioning: bigqueryTableRangePartitioningToTerraform(this._rangePartitioning.internalValue),
      table_constraints: bigqueryTableTableConstraintsToTerraform(this._tableConstraints.internalValue),
      table_replication_info: bigqueryTableTableReplicationInfoToTerraform(this._tableReplicationInfo.internalValue),
      time_partitioning: bigqueryTableTimePartitioningToTerraform(this._timePartitioning.internalValue),
      view: bigqueryTableViewToTerraform(this._view.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clustering: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clustering),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      dataset_id: {
        value: cdktf.stringToHclTerraform(this._datasetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
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
      expiration_time: {
        value: cdktf.numberToHclTerraform(this._expirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      max_staleness: {
        value: cdktf.stringToHclTerraform(this._maxStaleness),
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
      require_partition_filter: {
        value: cdktf.booleanToHclTerraform(this._requirePartitionFilter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      table_id: {
        value: cdktf.stringToHclTerraform(this._tableId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_configuration: {
        value: bigqueryTableEncryptionConfigurationToHclTerraform(this._encryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableEncryptionConfigurationList",
      },
      external_data_configuration: {
        value: bigqueryTableExternalDataConfigurationToHclTerraform(this._externalDataConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableExternalDataConfigurationList",
      },
      materialized_view: {
        value: bigqueryTableMaterializedViewToHclTerraform(this._materializedView.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableMaterializedViewList",
      },
      range_partitioning: {
        value: bigqueryTableRangePartitioningToHclTerraform(this._rangePartitioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableRangePartitioningList",
      },
      table_constraints: {
        value: bigqueryTableTableConstraintsToHclTerraform(this._tableConstraints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableTableConstraintsList",
      },
      table_replication_info: {
        value: bigqueryTableTableReplicationInfoToHclTerraform(this._tableReplicationInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableTableReplicationInfoList",
      },
      time_partitioning: {
        value: bigqueryTableTimePartitioningToHclTerraform(this._timePartitioning.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableTimePartitioningList",
      },
      view: {
        value: bigqueryTableViewToHclTerraform(this._view.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BigqueryTableViewList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
