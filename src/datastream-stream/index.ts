// https://www.terraform.io/docs/providers/google/r/datastream_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatastreamStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * A reference to a KMS encryption key. If provided, it will be used to encrypt the data. If left blank, data
will be encrypted using an internal Stream-specific encryption key provisioned through KMS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#customer_managed_encryption_key DatastreamStream#customer_managed_encryption_key}
  */
  readonly customerManagedEncryptionKey?: string;
  /**
  * Desired state of the Stream. Set this field to 'RUNNING' to start the stream, and 'PAUSED' to pause the stream.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#desired_state DatastreamStream#desired_state}
  */
  readonly desiredState?: string;
  /**
  * Display name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#display_name DatastreamStream#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#id DatastreamStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#labels DatastreamStream#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the location this stream is located in.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#location DatastreamStream#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#project DatastreamStream#project}
  */
  readonly project?: string;
  /**
  * The stream identifier.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#stream_id DatastreamStream#stream_id}
  */
  readonly streamId: string;
  /**
  * backfill_all block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#backfill_all DatastreamStream#backfill_all}
  */
  readonly backfillAll?: DatastreamStreamBackfillAll;
  /**
  * backfill_none block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#backfill_none DatastreamStream#backfill_none}
  */
  readonly backfillNone?: DatastreamStreamBackfillNone;
  /**
  * destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#destination_config DatastreamStream#destination_config}
  */
  readonly destinationConfig: DatastreamStreamDestinationConfig;
  /**
  * source_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#source_config DatastreamStream#source_config}
  */
  readonly sourceConfig: DatastreamStreamSourceConfig;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#timeouts DatastreamStream#timeouts}
  */
  readonly timeouts?: DatastreamStreamTimeouts;
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#collation DatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_columns DatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases {
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_tables DatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference {
    return new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamBackfillAllMysqlExcludedObjects {
  /**
  * mysql_databases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_databases DatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function datastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct?: DatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference | DatastreamStreamBackfillAllMysqlExcludedObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(datastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}

export class DatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAllMysqlExcludedObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAllMysqlExcludedObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: DatastreamStreamBackfillAllMysqlExcludedObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface DatastreamStreamBackfillAll {
  /**
  * mysql_excluded_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_excluded_objects DatastreamStream#mysql_excluded_objects}
  */
  readonly mysqlExcludedObjects?: DatastreamStreamBackfillAllMysqlExcludedObjects;
}

export function datastreamStreamBackfillAllToTerraform(struct?: DatastreamStreamBackfillAllOutputReference | DatastreamStreamBackfillAll): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_excluded_objects: datastreamStreamBackfillAllMysqlExcludedObjectsToTerraform(struct!.mysqlExcludedObjects),
  }
}

export class DatastreamStreamBackfillAllOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillAll | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlExcludedObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlExcludedObjects = this._mysqlExcludedObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillAll | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlExcludedObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlExcludedObjects.internalValue = value.mysqlExcludedObjects;
    }
  }

  // mysql_excluded_objects - computed: false, optional: true, required: false
  private _mysqlExcludedObjects = new DatastreamStreamBackfillAllMysqlExcludedObjectsOutputReference(this, "mysql_excluded_objects");
  public get mysqlExcludedObjects() {
    return this._mysqlExcludedObjects;
  }
  public putMysqlExcludedObjects(value: DatastreamStreamBackfillAllMysqlExcludedObjects) {
    this._mysqlExcludedObjects.internalValue = value;
  }
  public resetMysqlExcludedObjects() {
    this._mysqlExcludedObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlExcludedObjectsInput() {
    return this._mysqlExcludedObjects.internalValue;
  }
}
export interface DatastreamStreamBackfillNone {
}

export function datastreamStreamBackfillNoneToTerraform(struct?: DatastreamStreamBackfillNoneOutputReference | DatastreamStreamBackfillNone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatastreamStreamBackfillNoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamBackfillNone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamBackfillNone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset {
  /**
  * Dataset ID in the format projects/{project}/datasets/{dataset_id}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#dataset_id DatastreamStream#dataset_id}
  */
  readonly datasetId: string;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id: cdktf.stringToTerraform(struct!.datasetId),
  }
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetId = this._datasetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetId = value.datasetId;
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
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate {
  /**
  * If supplied, every created dataset will have its name prefixed by the provided value.
The prefix and name will be separated by an underscore. i.e. _.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#dataset_id_prefix DatastreamStream#dataset_id_prefix}
  */
  readonly datasetIdPrefix?: string;
  /**
  * Describes the Cloud KMS encryption key that will be used to protect destination BigQuery
table. The BigQuery Service Account associated with your project requires access to this
encryption key. i.e. projects/{project}/locations/{location}/keyRings/{key_ring}/cryptoKeys/{cryptoKey}.
See https://cloud.google.com/bigquery/docs/customer-managed-encryption for more information.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#kms_key_name DatastreamStream#kms_key_name}
  */
  readonly kmsKeyName?: string;
  /**
  * The geographic location where the dataset should reside.
See https://cloud.google.com/bigquery/docs/locations for supported locations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#location DatastreamStream#location}
  */
  readonly location: string;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_id_prefix: cdktf.stringToTerraform(struct!.datasetIdPrefix),
    kms_key_name: cdktf.stringToTerraform(struct!.kmsKeyName),
    location: cdktf.stringToTerraform(struct!.location),
  }
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetIdPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetIdPrefix = this._datasetIdPrefix;
    }
    if (this._kmsKeyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyName = this._kmsKeyName;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetIdPrefix = undefined;
      this._kmsKeyName = undefined;
      this._location = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetIdPrefix = value.datasetIdPrefix;
      this._kmsKeyName = value.kmsKeyName;
      this._location = value.location;
    }
  }

  // dataset_id_prefix - computed: false, optional: true, required: false
  private _datasetIdPrefix?: string; 
  public get datasetIdPrefix() {
    return this.getStringAttribute('dataset_id_prefix');
  }
  public set datasetIdPrefix(value: string) {
    this._datasetIdPrefix = value;
  }
  public resetDatasetIdPrefix() {
    this._datasetIdPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetIdPrefixInput() {
    return this._datasetIdPrefix;
  }

  // kms_key_name - computed: false, optional: true, required: false
  private _kmsKeyName?: string; 
  public get kmsKeyName() {
    return this.getStringAttribute('kms_key_name');
  }
  public set kmsKeyName(value: string) {
    this._kmsKeyName = value;
  }
  public resetKmsKeyName() {
    this._kmsKeyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyNameInput() {
    return this._kmsKeyName;
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
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets {
  /**
  * dataset_template block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#dataset_template DatastreamStream#dataset_template}
  */
  readonly datasetTemplate: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset_template: datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateToTerraform(struct!.datasetTemplate),
  }
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._datasetTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasetTemplate = this._datasetTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._datasetTemplate.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._datasetTemplate.internalValue = value.datasetTemplate;
    }
  }

  // dataset_template - computed: false, optional: false, required: true
  private _datasetTemplate = new DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplateOutputReference(this, "dataset_template");
  public get datasetTemplate() {
    return this._datasetTemplate;
  }
  public putDatasetTemplate(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsDatasetTemplate) {
    this._datasetTemplate.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetTemplateInput() {
    return this._datasetTemplate.internalValue;
  }
}
export interface DatastreamStreamDestinationConfigBigqueryDestinationConfig {
  /**
  * The guaranteed data freshness (in seconds) when querying tables created by the stream.
Editing this field will only affect new tables created in the future, but existing tables
will not be impacted. Lower values mean that queries will return fresher data, but may result in higher cost.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#data_freshness DatastreamStream#data_freshness}
  */
  readonly dataFreshness?: string;
  /**
  * single_target_dataset block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#single_target_dataset DatastreamStream#single_target_dataset}
  */
  readonly singleTargetDataset?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset;
  /**
  * source_hierarchy_datasets block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#source_hierarchy_datasets DatastreamStream#source_hierarchy_datasets}
  */
  readonly sourceHierarchyDatasets?: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets;
}

export function datastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct?: DatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference | DatastreamStreamDestinationConfigBigqueryDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_freshness: cdktf.stringToTerraform(struct!.dataFreshness),
    single_target_dataset: datastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetToTerraform(struct!.singleTargetDataset),
    source_hierarchy_datasets: datastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsToTerraform(struct!.sourceHierarchyDatasets),
  }
}

export class DatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataFreshness !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFreshness = this._dataFreshness;
    }
    if (this._singleTargetDataset?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleTargetDataset = this._singleTargetDataset?.internalValue;
    }
    if (this._sourceHierarchyDatasets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceHierarchyDatasets = this._sourceHierarchyDatasets?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigBigqueryDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataFreshness = undefined;
      this._singleTargetDataset.internalValue = undefined;
      this._sourceHierarchyDatasets.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataFreshness = value.dataFreshness;
      this._singleTargetDataset.internalValue = value.singleTargetDataset;
      this._sourceHierarchyDatasets.internalValue = value.sourceHierarchyDatasets;
    }
  }

  // data_freshness - computed: false, optional: true, required: false
  private _dataFreshness?: string; 
  public get dataFreshness() {
    return this.getStringAttribute('data_freshness');
  }
  public set dataFreshness(value: string) {
    this._dataFreshness = value;
  }
  public resetDataFreshness() {
    this._dataFreshness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFreshnessInput() {
    return this._dataFreshness;
  }

  // single_target_dataset - computed: false, optional: true, required: false
  private _singleTargetDataset = new DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDatasetOutputReference(this, "single_target_dataset");
  public get singleTargetDataset() {
    return this._singleTargetDataset;
  }
  public putSingleTargetDataset(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSingleTargetDataset) {
    this._singleTargetDataset.internalValue = value;
  }
  public resetSingleTargetDataset() {
    this._singleTargetDataset.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleTargetDatasetInput() {
    return this._singleTargetDataset.internalValue;
  }

  // source_hierarchy_datasets - computed: false, optional: true, required: false
  private _sourceHierarchyDatasets = new DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasetsOutputReference(this, "source_hierarchy_datasets");
  public get sourceHierarchyDatasets() {
    return this._sourceHierarchyDatasets;
  }
  public putSourceHierarchyDatasets(value: DatastreamStreamDestinationConfigBigqueryDestinationConfigSourceHierarchyDatasets) {
    this._sourceHierarchyDatasets.internalValue = value;
  }
  public resetSourceHierarchyDatasets() {
    this._sourceHierarchyDatasets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHierarchyDatasetsInput() {
    return this._sourceHierarchyDatasets.internalValue;
  }
}
export interface DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat {
}

export function datastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat {
  /**
  * Compression of the loaded JSON file. Possible values: ["NO_COMPRESSION", "GZIP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#compression DatastreamStream#compression}
  */
  readonly compression?: string;
  /**
  * The schema file format along JSON data files. Possible values: ["NO_SCHEMA_FILE", "AVRO_SCHEMA_FILE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#schema_file_format DatastreamStream#schema_file_format}
  */
  readonly schemaFileFormat?: string;
}

export function datastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compression: cdktf.stringToTerraform(struct!.compression),
    schema_file_format: cdktf.stringToTerraform(struct!.schemaFileFormat),
  }
}

export class DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compression !== undefined) {
      hasAnyValues = true;
      internalValueResult.compression = this._compression;
    }
    if (this._schemaFileFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaFileFormat = this._schemaFileFormat;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compression = undefined;
      this._schemaFileFormat = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compression = value.compression;
      this._schemaFileFormat = value.schemaFileFormat;
    }
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

  // schema_file_format - computed: false, optional: true, required: false
  private _schemaFileFormat?: string; 
  public get schemaFileFormat() {
    return this.getStringAttribute('schema_file_format');
  }
  public set schemaFileFormat(value: string) {
    this._schemaFileFormat = value;
  }
  public resetSchemaFileFormat() {
    this._schemaFileFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaFileFormatInput() {
    return this._schemaFileFormat;
  }
}
export interface DatastreamStreamDestinationConfigGcsDestinationConfig {
  /**
  * The maximum duration for which new events are added before a file is closed and a new file is created.
A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s". Defaults to 900s.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#file_rotation_interval DatastreamStream#file_rotation_interval}
  */
  readonly fileRotationInterval?: string;
  /**
  * The maximum file size to be saved in the bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#file_rotation_mb DatastreamStream#file_rotation_mb}
  */
  readonly fileRotationMb?: number;
  /**
  * Path inside the Cloud Storage bucket to write data to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#path DatastreamStream#path}
  */
  readonly path?: string;
  /**
  * avro_file_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#avro_file_format DatastreamStream#avro_file_format}
  */
  readonly avroFileFormat?: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat;
  /**
  * json_file_format block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#json_file_format DatastreamStream#json_file_format}
  */
  readonly jsonFileFormat?: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat;
}

export function datastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct?: DatastreamStreamDestinationConfigGcsDestinationConfigOutputReference | DatastreamStreamDestinationConfigGcsDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_rotation_interval: cdktf.stringToTerraform(struct!.fileRotationInterval),
    file_rotation_mb: cdktf.numberToTerraform(struct!.fileRotationMb),
    path: cdktf.stringToTerraform(struct!.path),
    avro_file_format: datastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatToTerraform(struct!.avroFileFormat),
    json_file_format: datastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatToTerraform(struct!.jsonFileFormat),
  }
}

export class DatastreamStreamDestinationConfigGcsDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfigGcsDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileRotationInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationInterval = this._fileRotationInterval;
    }
    if (this._fileRotationMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileRotationMb = this._fileRotationMb;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._avroFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.avroFileFormat = this._avroFileFormat?.internalValue;
    }
    if (this._jsonFileFormat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonFileFormat = this._jsonFileFormat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfigGcsDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileRotationInterval = undefined;
      this._fileRotationMb = undefined;
      this._path = undefined;
      this._avroFileFormat.internalValue = undefined;
      this._jsonFileFormat.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileRotationInterval = value.fileRotationInterval;
      this._fileRotationMb = value.fileRotationMb;
      this._path = value.path;
      this._avroFileFormat.internalValue = value.avroFileFormat;
      this._jsonFileFormat.internalValue = value.jsonFileFormat;
    }
  }

  // file_rotation_interval - computed: true, optional: true, required: false
  private _fileRotationInterval?: string; 
  public get fileRotationInterval() {
    return this.getStringAttribute('file_rotation_interval');
  }
  public set fileRotationInterval(value: string) {
    this._fileRotationInterval = value;
  }
  public resetFileRotationInterval() {
    this._fileRotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationIntervalInput() {
    return this._fileRotationInterval;
  }

  // file_rotation_mb - computed: true, optional: true, required: false
  private _fileRotationMb?: number; 
  public get fileRotationMb() {
    return this.getNumberAttribute('file_rotation_mb');
  }
  public set fileRotationMb(value: number) {
    this._fileRotationMb = value;
  }
  public resetFileRotationMb() {
    this._fileRotationMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileRotationMbInput() {
    return this._fileRotationMb;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // avro_file_format - computed: false, optional: true, required: false
  private _avroFileFormat = new DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormatOutputReference(this, "avro_file_format");
  public get avroFileFormat() {
    return this._avroFileFormat;
  }
  public putAvroFileFormat(value: DatastreamStreamDestinationConfigGcsDestinationConfigAvroFileFormat) {
    this._avroFileFormat.internalValue = value;
  }
  public resetAvroFileFormat() {
    this._avroFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avroFileFormatInput() {
    return this._avroFileFormat.internalValue;
  }

  // json_file_format - computed: false, optional: true, required: false
  private _jsonFileFormat = new DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormatOutputReference(this, "json_file_format");
  public get jsonFileFormat() {
    return this._jsonFileFormat;
  }
  public putJsonFileFormat(value: DatastreamStreamDestinationConfigGcsDestinationConfigJsonFileFormat) {
    this._jsonFileFormat.internalValue = value;
  }
  public resetJsonFileFormat() {
    this._jsonFileFormat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonFileFormatInput() {
    return this._jsonFileFormat.internalValue;
  }
}
export interface DatastreamStreamDestinationConfig {
  /**
  * Destination connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#destination_connection_profile DatastreamStream#destination_connection_profile}
  */
  readonly destinationConnectionProfile: string;
  /**
  * bigquery_destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#bigquery_destination_config DatastreamStream#bigquery_destination_config}
  */
  readonly bigqueryDestinationConfig?: DatastreamStreamDestinationConfigBigqueryDestinationConfig;
  /**
  * gcs_destination_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#gcs_destination_config DatastreamStream#gcs_destination_config}
  */
  readonly gcsDestinationConfig?: DatastreamStreamDestinationConfigGcsDestinationConfig;
}

export function datastreamStreamDestinationConfigToTerraform(struct?: DatastreamStreamDestinationConfigOutputReference | DatastreamStreamDestinationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination_connection_profile: cdktf.stringToTerraform(struct!.destinationConnectionProfile),
    bigquery_destination_config: datastreamStreamDestinationConfigBigqueryDestinationConfigToTerraform(struct!.bigqueryDestinationConfig),
    gcs_destination_config: datastreamStreamDestinationConfigGcsDestinationConfigToTerraform(struct!.gcsDestinationConfig),
  }
}

export class DatastreamStreamDestinationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamDestinationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destinationConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationConnectionProfile = this._destinationConnectionProfile;
    }
    if (this._bigqueryDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryDestinationConfig = this._bigqueryDestinationConfig?.internalValue;
    }
    if (this._gcsDestinationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsDestinationConfig = this._gcsDestinationConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamDestinationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._destinationConnectionProfile = undefined;
      this._bigqueryDestinationConfig.internalValue = undefined;
      this._gcsDestinationConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._destinationConnectionProfile = value.destinationConnectionProfile;
      this._bigqueryDestinationConfig.internalValue = value.bigqueryDestinationConfig;
      this._gcsDestinationConfig.internalValue = value.gcsDestinationConfig;
    }
  }

  // destination_connection_profile - computed: false, optional: false, required: true
  private _destinationConnectionProfile?: string; 
  public get destinationConnectionProfile() {
    return this.getStringAttribute('destination_connection_profile');
  }
  public set destinationConnectionProfile(value: string) {
    this._destinationConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConnectionProfileInput() {
    return this._destinationConnectionProfile;
  }

  // bigquery_destination_config - computed: false, optional: true, required: false
  private _bigqueryDestinationConfig = new DatastreamStreamDestinationConfigBigqueryDestinationConfigOutputReference(this, "bigquery_destination_config");
  public get bigqueryDestinationConfig() {
    return this._bigqueryDestinationConfig;
  }
  public putBigqueryDestinationConfig(value: DatastreamStreamDestinationConfigBigqueryDestinationConfig) {
    this._bigqueryDestinationConfig.internalValue = value;
  }
  public resetBigqueryDestinationConfig() {
    this._bigqueryDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryDestinationConfigInput() {
    return this._bigqueryDestinationConfig.internalValue;
  }

  // gcs_destination_config - computed: false, optional: true, required: false
  private _gcsDestinationConfig = new DatastreamStreamDestinationConfigGcsDestinationConfigOutputReference(this, "gcs_destination_config");
  public get gcsDestinationConfig() {
    return this._gcsDestinationConfig;
  }
  public putGcsDestinationConfig(value: DatastreamStreamDestinationConfigGcsDestinationConfig) {
    this._gcsDestinationConfig.internalValue = value;
  }
  public resetGcsDestinationConfig() {
    this._gcsDestinationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsDestinationConfigInput() {
    return this._gcsDestinationConfig.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#collation DatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_columns DatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases {
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_tables DatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects {
  /**
  * mysql_databases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_databases DatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns {
  /**
  * Column collation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#collation DatastreamStream#collation}
  */
  readonly collation?: string;
  /**
  * Column name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#column DatastreamStream#column}
  */
  readonly column?: string;
  /**
  * The MySQL data type. Full data types list can be found here:
https://dev.mysql.com/doc/refman/8.0/en/data-types.html
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#data_type DatastreamStream#data_type}
  */
  readonly dataType?: string;
  /**
  * Whether or not the column can accept a null value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#nullable DatastreamStream#nullable}
  */
  readonly nullable?: boolean | cdktf.IResolvable;
  /**
  * The ordinal position of the column in the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#ordinal_position DatastreamStream#ordinal_position}
  */
  readonly ordinalPosition?: number;
  /**
  * Whether or not the column represents a primary key.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#primary_key DatastreamStream#primary_key}
  */
  readonly primaryKey?: boolean | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collation: cdktf.stringToTerraform(struct!.collation),
    column: cdktf.stringToTerraform(struct!.column),
    data_type: cdktf.stringToTerraform(struct!.dataType),
    nullable: cdktf.booleanToTerraform(struct!.nullable),
    ordinal_position: cdktf.numberToTerraform(struct!.ordinalPosition),
    primary_key: cdktf.booleanToTerraform(struct!.primaryKey),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collation !== undefined) {
      hasAnyValues = true;
      internalValueResult.collation = this._collation;
    }
    if (this._column !== undefined) {
      hasAnyValues = true;
      internalValueResult.column = this._column;
    }
    if (this._dataType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataType = this._dataType;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._ordinalPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.ordinalPosition = this._ordinalPosition;
    }
    if (this._primaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryKey = this._primaryKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collation = undefined;
      this._column = undefined;
      this._dataType = undefined;
      this._nullable = undefined;
      this._ordinalPosition = undefined;
      this._primaryKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collation = value.collation;
      this._column = value.column;
      this._dataType = value.dataType;
      this._nullable = value.nullable;
      this._ordinalPosition = value.ordinalPosition;
      this._primaryKey = value.primaryKey;
    }
  }

  // collation - computed: false, optional: true, required: false
  private _collation?: string; 
  public get collation() {
    return this.getStringAttribute('collation');
  }
  public set collation(value: string) {
    this._collation = value;
  }
  public resetCollation() {
    this._collation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collationInput() {
    return this._collation;
  }

  // column - computed: false, optional: true, required: false
  private _column?: string; 
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column;
  }

  // data_type - computed: false, optional: true, required: false
  private _dataType?: string; 
  public get dataType() {
    return this.getStringAttribute('data_type');
  }
  public set dataType(value: string) {
    this._dataType = value;
  }
  public resetDataType() {
    this._dataType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeInput() {
    return this._dataType;
  }

  // length - computed: true, optional: false, required: false
  public get length() {
    return this.getNumberAttribute('length');
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktf.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktf.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // ordinal_position - computed: false, optional: true, required: false
  private _ordinalPosition?: number; 
  public get ordinalPosition() {
    return this.getNumberAttribute('ordinal_position');
  }
  public set ordinalPosition(value: number) {
    this._ordinalPosition = value;
  }
  public resetOrdinalPosition() {
    this._ordinalPosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordinalPositionInput() {
    return this._ordinalPosition;
  }

  // primary_key - computed: false, optional: true, required: false
  private _primaryKey?: boolean | cdktf.IResolvable; 
  public get primaryKey() {
    return this.getBooleanAttribute('primary_key');
  }
  public set primaryKey(value: boolean | cdktf.IResolvable) {
    this._primaryKey = value;
  }
  public resetPrimaryKey() {
    this._primaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryKeyInput() {
    return this._primaryKey;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables {
  /**
  * Table name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#table DatastreamStream#table}
  */
  readonly table: string;
  /**
  * mysql_columns block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_columns DatastreamStream#mysql_columns}
  */
  readonly mysqlColumns?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: cdktf.stringToTerraform(struct!.table),
    mysql_columns: cdktf.listMapper(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsToTerraform, true)(struct!.mysqlColumns),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table;
    }
    if (this._mysqlColumns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlColumns = this._mysqlColumns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._table = undefined;
      this._mysqlColumns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._table = value.table;
      this._mysqlColumns.internalValue = value.mysqlColumns;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table?: string; 
  public get table() {
    return this.getStringAttribute('table');
  }
  public set table(value: string) {
    this._table = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table;
  }

  // mysql_columns - computed: false, optional: true, required: false
  private _mysqlColumns = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumnsList(this, "mysql_columns", false);
  public get mysqlColumns() {
    return this._mysqlColumns;
  }
  public putMysqlColumns(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesMysqlColumns[] | cdktf.IResolvable) {
    this._mysqlColumns.internalValue = value;
  }
  public resetMysqlColumns() {
    this._mysqlColumns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlColumnsInput() {
    return this._mysqlColumns.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases {
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#database DatastreamStream#database}
  */
  readonly database: string;
  /**
  * mysql_tables block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_tables DatastreamStream#mysql_tables}
  */
  readonly mysqlTables?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.stringToTerraform(struct!.database),
    mysql_tables: cdktf.listMapper(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesToTerraform, true)(struct!.mysqlTables),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._mysqlTables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlTables = this._mysqlTables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._database = undefined;
      this._mysqlTables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._database = value.database;
      this._mysqlTables.internalValue = value.mysqlTables;
    }
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // mysql_tables - computed: false, optional: true, required: false
  private _mysqlTables = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTablesList(this, "mysql_tables", false);
  public get mysqlTables() {
    return this._mysqlTables;
  }
  public putMysqlTables(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesMysqlTables[] | cdktf.IResolvable) {
    this._mysqlTables.internalValue = value;
  }
  public resetMysqlTables() {
    this._mysqlTables.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlTablesInput() {
    return this._mysqlTables.internalValue;
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList extends cdktf.ComplexList {
  public internalValue? : DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable

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
  public get(index: number): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference {
    return new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects {
  /**
  * mysql_databases block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_databases DatastreamStream#mysql_databases}
  */
  readonly mysqlDatabases: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable;
}

export function datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference | DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql_databases: cdktf.listMapper(datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesToTerraform, true)(struct!.mysqlDatabases),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysqlDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlDatabases = this._mysqlDatabases?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysqlDatabases.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysqlDatabases.internalValue = value.mysqlDatabases;
    }
  }

  // mysql_databases - computed: false, optional: false, required: true
  private _mysqlDatabases = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabasesList(this, "mysql_databases", false);
  public get mysqlDatabases() {
    return this._mysqlDatabases;
  }
  public putMysqlDatabases(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsMysqlDatabases[] | cdktf.IResolvable) {
    this._mysqlDatabases.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlDatabasesInput() {
    return this._mysqlDatabases.internalValue;
  }
}
export interface DatastreamStreamSourceConfigMysqlSourceConfig {
  /**
  * Maximum number of concurrent CDC tasks. The number should be non negative.
If not set (or set to 0), the system's default value will be used.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#max_concurrent_cdc_tasks DatastreamStream#max_concurrent_cdc_tasks}
  */
  readonly maxConcurrentCdcTasks?: number;
  /**
  * exclude_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#exclude_objects DatastreamStream#exclude_objects}
  */
  readonly excludeObjects?: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects;
  /**
  * include_objects block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#include_objects DatastreamStream#include_objects}
  */
  readonly includeObjects?: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects;
}

export function datastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigMysqlSourceConfigOutputReference | DatastreamStreamSourceConfigMysqlSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_cdc_tasks: cdktf.numberToTerraform(struct!.maxConcurrentCdcTasks),
    exclude_objects: datastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsToTerraform(struct!.excludeObjects),
    include_objects: datastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsToTerraform(struct!.includeObjects),
  }
}

export class DatastreamStreamSourceConfigMysqlSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfigMysqlSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentCdcTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentCdcTasks = this._maxConcurrentCdcTasks;
    }
    if (this._excludeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeObjects = this._excludeObjects?.internalValue;
    }
    if (this._includeObjects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeObjects = this._includeObjects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfigMysqlSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxConcurrentCdcTasks = undefined;
      this._excludeObjects.internalValue = undefined;
      this._includeObjects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxConcurrentCdcTasks = value.maxConcurrentCdcTasks;
      this._excludeObjects.internalValue = value.excludeObjects;
      this._includeObjects.internalValue = value.includeObjects;
    }
  }

  // max_concurrent_cdc_tasks - computed: true, optional: true, required: false
  private _maxConcurrentCdcTasks?: number; 
  public get maxConcurrentCdcTasks() {
    return this.getNumberAttribute('max_concurrent_cdc_tasks');
  }
  public set maxConcurrentCdcTasks(value: number) {
    this._maxConcurrentCdcTasks = value;
  }
  public resetMaxConcurrentCdcTasks() {
    this._maxConcurrentCdcTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentCdcTasksInput() {
    return this._maxConcurrentCdcTasks;
  }

  // exclude_objects - computed: false, optional: true, required: false
  private _excludeObjects = new DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjectsOutputReference(this, "exclude_objects");
  public get excludeObjects() {
    return this._excludeObjects;
  }
  public putExcludeObjects(value: DatastreamStreamSourceConfigMysqlSourceConfigExcludeObjects) {
    this._excludeObjects.internalValue = value;
  }
  public resetExcludeObjects() {
    this._excludeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeObjectsInput() {
    return this._excludeObjects.internalValue;
  }

  // include_objects - computed: false, optional: true, required: false
  private _includeObjects = new DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjectsOutputReference(this, "include_objects");
  public get includeObjects() {
    return this._includeObjects;
  }
  public putIncludeObjects(value: DatastreamStreamSourceConfigMysqlSourceConfigIncludeObjects) {
    this._includeObjects.internalValue = value;
  }
  public resetIncludeObjects() {
    this._includeObjects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeObjectsInput() {
    return this._includeObjects.internalValue;
  }
}
export interface DatastreamStreamSourceConfig {
  /**
  * Source connection profile resource. Format: projects/{project}/locations/{location}/connectionProfiles/{name}
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#source_connection_profile DatastreamStream#source_connection_profile}
  */
  readonly sourceConnectionProfile: string;
  /**
  * mysql_source_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#mysql_source_config DatastreamStream#mysql_source_config}
  */
  readonly mysqlSourceConfig: DatastreamStreamSourceConfigMysqlSourceConfig;
}

export function datastreamStreamSourceConfigToTerraform(struct?: DatastreamStreamSourceConfigOutputReference | DatastreamStreamSourceConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source_connection_profile: cdktf.stringToTerraform(struct!.sourceConnectionProfile),
    mysql_source_config: datastreamStreamSourceConfigMysqlSourceConfigToTerraform(struct!.mysqlSourceConfig),
  }
}

export class DatastreamStreamSourceConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamSourceConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sourceConnectionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceConnectionProfile = this._sourceConnectionProfile;
    }
    if (this._mysqlSourceConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlSourceConfig = this._mysqlSourceConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatastreamStreamSourceConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sourceConnectionProfile = undefined;
      this._mysqlSourceConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sourceConnectionProfile = value.sourceConnectionProfile;
      this._mysqlSourceConfig.internalValue = value.mysqlSourceConfig;
    }
  }

  // source_connection_profile - computed: false, optional: false, required: true
  private _sourceConnectionProfile?: string; 
  public get sourceConnectionProfile() {
    return this.getStringAttribute('source_connection_profile');
  }
  public set sourceConnectionProfile(value: string) {
    this._sourceConnectionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConnectionProfileInput() {
    return this._sourceConnectionProfile;
  }

  // mysql_source_config - computed: false, optional: false, required: true
  private _mysqlSourceConfig = new DatastreamStreamSourceConfigMysqlSourceConfigOutputReference(this, "mysql_source_config");
  public get mysqlSourceConfig() {
    return this._mysqlSourceConfig;
  }
  public putMysqlSourceConfig(value: DatastreamStreamSourceConfigMysqlSourceConfig) {
    this._mysqlSourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlSourceConfigInput() {
    return this._mysqlSourceConfig.internalValue;
  }
}
export interface DatastreamStreamTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#create DatastreamStream#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#delete DatastreamStream#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/datastream_stream#update DatastreamStream#update}
  */
  readonly update?: string;
}

export function datastreamStreamTimeoutsToTerraform(struct?: DatastreamStreamTimeoutsOutputReference | DatastreamStreamTimeouts | cdktf.IResolvable): any {
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

export class DatastreamStreamTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DatastreamStreamTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DatastreamStreamTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/datastream_stream google_datastream_stream}
*/
export class DatastreamStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_datastream_stream";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/datastream_stream google_datastream_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatastreamStreamConfig
  */
  public constructor(scope: Construct, id: string, config: DatastreamStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'google_datastream_stream',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.51.0',
        providerVersionConstraint: '~> 4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customerManagedEncryptionKey = config.customerManagedEncryptionKey;
    this._desiredState = config.desiredState;
    this._displayName = config.displayName;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._project = config.project;
    this._streamId = config.streamId;
    this._backfillAll.internalValue = config.backfillAll;
    this._backfillNone.internalValue = config.backfillNone;
    this._destinationConfig.internalValue = config.destinationConfig;
    this._sourceConfig.internalValue = config.sourceConfig;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // customer_managed_encryption_key - computed: false, optional: true, required: false
  private _customerManagedEncryptionKey?: string; 
  public get customerManagedEncryptionKey() {
    return this.getStringAttribute('customer_managed_encryption_key');
  }
  public set customerManagedEncryptionKey(value: string) {
    this._customerManagedEncryptionKey = value;
  }
  public resetCustomerManagedEncryptionKey() {
    this._customerManagedEncryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedEncryptionKeyInput() {
    return this._customerManagedEncryptionKey;
  }

  // desired_state - computed: false, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stream_id - computed: false, optional: false, required: true
  private _streamId?: string; 
  public get streamId() {
    return this.getStringAttribute('stream_id');
  }
  public set streamId(value: string) {
    this._streamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamIdInput() {
    return this._streamId;
  }

  // backfill_all - computed: false, optional: true, required: false
  private _backfillAll = new DatastreamStreamBackfillAllOutputReference(this, "backfill_all");
  public get backfillAll() {
    return this._backfillAll;
  }
  public putBackfillAll(value: DatastreamStreamBackfillAll) {
    this._backfillAll.internalValue = value;
  }
  public resetBackfillAll() {
    this._backfillAll.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillAllInput() {
    return this._backfillAll.internalValue;
  }

  // backfill_none - computed: false, optional: true, required: false
  private _backfillNone = new DatastreamStreamBackfillNoneOutputReference(this, "backfill_none");
  public get backfillNone() {
    return this._backfillNone;
  }
  public putBackfillNone(value: DatastreamStreamBackfillNone) {
    this._backfillNone.internalValue = value;
  }
  public resetBackfillNone() {
    this._backfillNone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backfillNoneInput() {
    return this._backfillNone.internalValue;
  }

  // destination_config - computed: false, optional: false, required: true
  private _destinationConfig = new DatastreamStreamDestinationConfigOutputReference(this, "destination_config");
  public get destinationConfig() {
    return this._destinationConfig;
  }
  public putDestinationConfig(value: DatastreamStreamDestinationConfig) {
    this._destinationConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationConfigInput() {
    return this._destinationConfig.internalValue;
  }

  // source_config - computed: false, optional: false, required: true
  private _sourceConfig = new DatastreamStreamSourceConfigOutputReference(this, "source_config");
  public get sourceConfig() {
    return this._sourceConfig;
  }
  public putSourceConfig(value: DatastreamStreamSourceConfig) {
    this._sourceConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceConfigInput() {
    return this._sourceConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DatastreamStreamTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DatastreamStreamTimeouts) {
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
      customer_managed_encryption_key: cdktf.stringToTerraform(this._customerManagedEncryptionKey),
      desired_state: cdktf.stringToTerraform(this._desiredState),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      project: cdktf.stringToTerraform(this._project),
      stream_id: cdktf.stringToTerraform(this._streamId),
      backfill_all: datastreamStreamBackfillAllToTerraform(this._backfillAll.internalValue),
      backfill_none: datastreamStreamBackfillNoneToTerraform(this._backfillNone.internalValue),
      destination_config: datastreamStreamDestinationConfigToTerraform(this._destinationConfig.internalValue),
      source_config: datastreamStreamSourceConfigToTerraform(this._sourceConfig.internalValue),
      timeouts: datastreamStreamTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
