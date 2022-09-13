// https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionJobTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the job trigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#description DataLossPreventionJobTrigger#description}
  */
  readonly description?: string;
  /**
  * User set display name of the job trigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#display_name DataLossPreventionJobTrigger#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#id DataLossPreventionJobTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the trigger, either in the format 'projects/{{project}}'
or 'projects/{{project}}/locations/{{location}}'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#parent DataLossPreventionJobTrigger#parent}
  */
  readonly parent: string;
  /**
  * Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#status DataLossPreventionJobTrigger#status}
  */
  readonly status?: string;
  /**
  * inspect_job block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#inspect_job DataLossPreventionJobTrigger#inspect_job}
  */
  readonly inspectJob?: DataLossPreventionJobTriggerInspectJob;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#timeouts DataLossPreventionJobTrigger#timeouts}
  */
  readonly timeouts?: DataLossPreventionJobTriggerTimeouts;
  /**
  * triggers block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#triggers DataLossPreventionJobTrigger#triggers}
  */
  readonly triggers: DataLossPreventionJobTriggerTriggers[] | cdktf.IResolvable;
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable {
  /**
  * Dataset ID of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Name of the table. If is not set a new one will be generated for you with the following format:
'dlp_googleapis_yyyy_mm_dd_[dlp_job_id]'. Pacific timezone will be used for generating the date details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}
  */
  readonly tableId?: string;
}

export function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference | DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable): any {
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

export class DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable | undefined {
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

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable | undefined) {
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

  // table_id - computed: false, optional: true, required: false
  private _tableId?: string; 
  public get tableId() {
    return this.getStringAttribute('table_id');
  }
  public set tableId(value: string) {
    this._tableId = value;
  }
  public resetTableId() {
    this._tableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableIdInput() {
    return this._tableId;
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig {
  /**
  * Schema used for writing the findings for Inspect jobs. This field is only used for
Inspect and must be unspecified for Risk jobs. Columns are derived from the Finding
object. If appending to an existing table, any columns from the predefined schema
that are missing will be added. No columns in the existing table will be deleted.

If unspecified, then all available columns will be used for a new table or an (existing)
table with no schema, and no changes will be made to an existing table that has a schema.
Only for use with external storage. Possible values: ["BASIC_COLUMNS", "GCS_COLUMNS", "DATASTORE_COLUMNS", "BIG_QUERY_COLUMNS", "ALL_COLUMNS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#output_schema DataLossPreventionJobTrigger#output_schema}
  */
  readonly outputSchema?: string;
  /**
  * table block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#table DataLossPreventionJobTrigger#table}
  */
  readonly table: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable;
}

export function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference | DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_schema: cdktf.stringToTerraform(struct!.outputSchema),
    table: dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableToTerraform(struct!.table),
  }
}

export class DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputSchema !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputSchema = this._outputSchema;
    }
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputSchema = undefined;
      this._table.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputSchema = value.outputSchema;
      this._table.internalValue = value.table;
    }
  }

  // output_schema - computed: false, optional: true, required: false
  private _outputSchema?: string; 
  public get outputSchema() {
    return this.getStringAttribute('output_schema');
  }
  public set outputSchema(value: string) {
    this._outputSchema = value;
  }
  public resetOutputSchema() {
    this._outputSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSchemaInput() {
    return this._outputSchema;
  }

  // table - computed: false, optional: false, required: true
  private _table = new DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable) {
    this._table.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindings {
  /**
  * output_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#output_config DataLossPreventionJobTrigger#output_config}
  */
  readonly outputConfig: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig;
}

export function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference | DataLossPreventionJobTriggerInspectJobActionsSaveFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    output_config: dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigToTerraform(struct!.outputConfig),
  }
}

export class DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsSaveFindings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._outputConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputConfig = this._outputConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._outputConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._outputConfig.internalValue = value.outputConfig;
    }
  }

  // output_config - computed: false, optional: false, required: true
  private _outputConfig = new DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference(this, "output_config");
  public get outputConfig() {
    return this._outputConfig;
  }
  public putOutputConfig(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig) {
    this._outputConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputConfigInput() {
    return this._outputConfig.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobActions {
  /**
  * save_findings block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#save_findings DataLossPreventionJobTrigger#save_findings}
  */
  readonly saveFindings: DataLossPreventionJobTriggerInspectJobActionsSaveFindings;
}

export function dataLossPreventionJobTriggerInspectJobActionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    save_findings: dataLossPreventionJobTriggerInspectJobActionsSaveFindingsToTerraform(struct!.saveFindings),
  }
}

export class DataLossPreventionJobTriggerInspectJobActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._saveFindings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveFindings = this._saveFindings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._saveFindings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._saveFindings.internalValue = value.saveFindings;
    }
  }

  // save_findings - computed: false, optional: false, required: true
  private _saveFindings = new DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference(this, "save_findings");
  public get saveFindings() {
    return this._saveFindings;
  }
  public putSaveFindings(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindings) {
    this._saveFindings.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get saveFindingsInput() {
    return this._saveFindings.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobActionsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobActions[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobActionsOutputReference {
    return new DataLossPreventionJobTriggerInspectJobActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference {
  /**
  * The dataset ID of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the table.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}
  */
  readonly tableId: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference): any {
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

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference | undefined {
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

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference | undefined) {
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
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions {
  /**
  * table_reference block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#table_reference DataLossPreventionJobTrigger#table_reference}
  */
  readonly tableReference: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table_reference: dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceToTerraform(struct!.tableReference),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tableReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReference = this._tableReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tableReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tableReference.internalValue = value.tableReference;
    }
  }

  // table_reference - computed: false, optional: false, required: true
  private _tableReference = new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference(this, "table_reference");
  public get tableReference() {
    return this._tableReference;
  }
  public putTableReference(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference) {
    this._tableReference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableReferenceInput() {
    return this._tableReference.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet {
  /**
  * The name of a Cloud Storage bucket.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#bucket_name DataLossPreventionJobTrigger#bucket_name}
  */
  readonly bucketName: string;
  /**
  * A list of regular expressions matching file paths to exclude. All files in the bucket that match at
least one of these regular expressions will be excluded from the scan.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#exclude_regex DataLossPreventionJobTrigger#exclude_regex}
  */
  readonly excludeRegex?: string[];
  /**
  * A list of regular expressions matching file paths to include. All files in the bucket
that match at least one of these regular expressions will be included in the set of files,
except for those that also match an item in excludeRegex. Leaving this field empty will
match all files by default (this is equivalent to including .* in the list)
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#include_regex DataLossPreventionJobTrigger#include_regex}
  */
  readonly includeRegex?: string[];
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bucket_name: cdktf.stringToTerraform(struct!.bucketName),
    exclude_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeRegex),
    include_regex: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeRegex),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bucketName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucketName = this._bucketName;
    }
    if (this._excludeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeRegex = this._excludeRegex;
    }
    if (this._includeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeRegex = this._includeRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bucketName = undefined;
      this._excludeRegex = undefined;
      this._includeRegex = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bucketName = value.bucketName;
      this._excludeRegex = value.excludeRegex;
      this._includeRegex = value.includeRegex;
    }
  }

  // bucket_name - computed: false, optional: false, required: true
  private _bucketName?: string; 
  public get bucketName() {
    return this.getStringAttribute('bucket_name');
  }
  public set bucketName(value: string) {
    this._bucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketNameInput() {
    return this._bucketName;
  }

  // exclude_regex - computed: false, optional: true, required: false
  private _excludeRegex?: string[]; 
  public get excludeRegex() {
    return this.getListAttribute('exclude_regex');
  }
  public set excludeRegex(value: string[]) {
    this._excludeRegex = value;
  }
  public resetExcludeRegex() {
    this._excludeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeRegexInput() {
    return this._excludeRegex;
  }

  // include_regex - computed: false, optional: true, required: false
  private _includeRegex?: string[]; 
  public get includeRegex() {
    return this.getListAttribute('include_regex');
  }
  public set includeRegex(value: string[]) {
    this._includeRegex = value;
  }
  public resetIncludeRegex() {
    this._includeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRegexInput() {
    return this._includeRegex;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet {
  /**
  * The Cloud Storage url of the file(s) to scan, in the format 'gs://<bucket>/<path>'. Trailing wildcard
in the path is allowed.

If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned
non-recursively (content in sub-directories will not be scanned). This means that 'gs://mybucket/' is
equivalent to 'gs://mybucket/*', and 'gs://mybucket/directory/' is equivalent to 'gs://mybucket/directory/*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#url DataLossPreventionJobTrigger#url}
  */
  readonly url?: string;
  /**
  * regex_file_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#regex_file_set DataLossPreventionJobTrigger#regex_file_set}
  */
  readonly regexFileSet?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url: cdktf.stringToTerraform(struct!.url),
    regex_file_set: dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetToTerraform(struct!.regexFileSet),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._regexFileSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regexFileSet = this._regexFileSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._url = undefined;
      this._regexFileSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._url = value.url;
      this._regexFileSet.internalValue = value.regexFileSet;
    }
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // regex_file_set - computed: false, optional: true, required: false
  private _regexFileSet = new DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference(this, "regex_file_set");
  public get regexFileSet() {
    return this._regexFileSet;
  }
  public putRegexFileSet(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet) {
    this._regexFileSet.internalValue = value;
  }
  public resetRegexFileSet() {
    this._regexFileSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexFileSetInput() {
    return this._regexFileSet.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions {
  /**
  * Max number of bytes to scan from a file. If a scanned file's size is bigger than this value
then the rest of the bytes are omitted.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#bytes_limit_per_file DataLossPreventionJobTrigger#bytes_limit_per_file}
  */
  readonly bytesLimitPerFile?: number;
  /**
  * Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#bytes_limit_per_file_percent DataLossPreventionJobTrigger#bytes_limit_per_file_percent}
  */
  readonly bytesLimitPerFilePercent?: number;
  /**
  * List of file type groups to include in the scan. If empty, all files are scanned and available data
format processors are applied. In addition, the binary content of the selected files is always scanned as well.
Images are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified. Possible values: ["BINARY_FILE", "TEXT_FILE", "IMAGE", "WORD", "PDF", "AVRO", "CSV", "TSV"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#file_types DataLossPreventionJobTrigger#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down.
Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#files_limit_percent DataLossPreventionJobTrigger#files_limit_percent}
  */
  readonly filesLimitPercent?: number;
  /**
  * How to sample bytes if not all bytes are scanned. Meaningful only when used in conjunction with bytesLimitPerFile.
If not specified, scanning would start from the top. Possible values: ["TOP", "RANDOM_START"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#sample_method DataLossPreventionJobTrigger#sample_method}
  */
  readonly sampleMethod?: string;
  /**
  * file_set block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#file_set DataLossPreventionJobTrigger#file_set}
  */
  readonly fileSet: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes_limit_per_file: cdktf.numberToTerraform(struct!.bytesLimitPerFile),
    bytes_limit_per_file_percent: cdktf.numberToTerraform(struct!.bytesLimitPerFilePercent),
    file_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileTypes),
    files_limit_percent: cdktf.numberToTerraform(struct!.filesLimitPercent),
    sample_method: cdktf.stringToTerraform(struct!.sampleMethod),
    file_set: dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetToTerraform(struct!.fileSet),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesLimitPerFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesLimitPerFile = this._bytesLimitPerFile;
    }
    if (this._bytesLimitPerFilePercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesLimitPerFilePercent = this._bytesLimitPerFilePercent;
    }
    if (this._fileTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypes = this._fileTypes;
    }
    if (this._filesLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesLimitPercent = this._filesLimitPercent;
    }
    if (this._sampleMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleMethod = this._sampleMethod;
    }
    if (this._fileSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSet = this._fileSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesLimitPerFile = undefined;
      this._bytesLimitPerFilePercent = undefined;
      this._fileTypes = undefined;
      this._filesLimitPercent = undefined;
      this._sampleMethod = undefined;
      this._fileSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytesLimitPerFile = value.bytesLimitPerFile;
      this._bytesLimitPerFilePercent = value.bytesLimitPerFilePercent;
      this._fileTypes = value.fileTypes;
      this._filesLimitPercent = value.filesLimitPercent;
      this._sampleMethod = value.sampleMethod;
      this._fileSet.internalValue = value.fileSet;
    }
  }

  // bytes_limit_per_file - computed: false, optional: true, required: false
  private _bytesLimitPerFile?: number; 
  public get bytesLimitPerFile() {
    return this.getNumberAttribute('bytes_limit_per_file');
  }
  public set bytesLimitPerFile(value: number) {
    this._bytesLimitPerFile = value;
  }
  public resetBytesLimitPerFile() {
    this._bytesLimitPerFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesLimitPerFileInput() {
    return this._bytesLimitPerFile;
  }

  // bytes_limit_per_file_percent - computed: false, optional: true, required: false
  private _bytesLimitPerFilePercent?: number; 
  public get bytesLimitPerFilePercent() {
    return this.getNumberAttribute('bytes_limit_per_file_percent');
  }
  public set bytesLimitPerFilePercent(value: number) {
    this._bytesLimitPerFilePercent = value;
  }
  public resetBytesLimitPerFilePercent() {
    this._bytesLimitPerFilePercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesLimitPerFilePercentInput() {
    return this._bytesLimitPerFilePercent;
  }

  // file_types - computed: false, optional: true, required: false
  private _fileTypes?: string[]; 
  public get fileTypes() {
    return this.getListAttribute('file_types');
  }
  public set fileTypes(value: string[]) {
    this._fileTypes = value;
  }
  public resetFileTypes() {
    this._fileTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesInput() {
    return this._fileTypes;
  }

  // files_limit_percent - computed: false, optional: true, required: false
  private _filesLimitPercent?: number; 
  public get filesLimitPercent() {
    return this.getNumberAttribute('files_limit_percent');
  }
  public set filesLimitPercent(value: number) {
    this._filesLimitPercent = value;
  }
  public resetFilesLimitPercent() {
    this._filesLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesLimitPercentInput() {
    return this._filesLimitPercent;
  }

  // sample_method - computed: false, optional: true, required: false
  private _sampleMethod?: string; 
  public get sampleMethod() {
    return this.getStringAttribute('sample_method');
  }
  public set sampleMethod(value: string) {
    this._sampleMethod = value;
  }
  public resetSampleMethod() {
    this._sampleMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleMethodInput() {
    return this._sampleMethod;
  }

  // file_set - computed: false, optional: false, required: true
  private _fileSet = new DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference(this, "file_set");
  public get fileSet() {
    return this._fileSet;
  }
  public putFileSet(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet) {
    this._fileSet.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSetInput() {
    return this._fileSet.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind {
  /**
  * The name of the Datastore kind.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId {
  /**
  * If not empty, the ID of the namespace to which the entities belong.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#namespace_id DataLossPreventionJobTrigger#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * The ID of the project to which the entities belong.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace_id: cdktf.stringToTerraform(struct!.namespaceId),
    project_id: cdktf.stringToTerraform(struct!.projectId),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceId = this._namespaceId;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._namespaceId = undefined;
      this._projectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._namespaceId = value.namespaceId;
      this._projectId = value.projectId;
    }
  }

  // namespace_id - computed: false, optional: true, required: false
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  public resetNamespaceId() {
    this._namespaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
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
export interface DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions {
  /**
  * kind block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#kind DataLossPreventionJobTrigger#kind}
  */
  readonly kind: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
  /**
  * partition_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#partition_id DataLossPreventionJobTrigger#partition_id}
  */
  readonly partitionId: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kind: dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindToTerraform(struct!.kind),
    partition_id: dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdToTerraform(struct!.partitionId),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kind?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind?.internalValue;
    }
    if (this._partitionId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionId = this._partitionId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kind.internalValue = undefined;
      this._partitionId.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kind.internalValue = value.kind;
      this._partitionId.internalValue = value.partitionId;
    }
  }

  // kind - computed: false, optional: false, required: true
  private _kind = new DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference(this, "kind");
  public get kind() {
    return this._kind;
  }
  public putKind(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind) {
    this._kind.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind.internalValue;
  }

  // partition_id - computed: false, optional: false, required: true
  private _partitionId = new DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference(this, "partition_id");
  public get partitionId() {
    return this._partitionId;
  }
  public putPartitionId(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId) {
    this._partitionId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIdInput() {
    return this._partitionId.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField {
  /**
  * Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery.

For BigQuery: Required to filter out rows based on the given start and end times. If not specified and the table was
modified between the given start and end times, the entire table will be scanned. The valid data types of the timestamp
field are: INTEGER, DATE, TIMESTAMP, or DATETIME BigQuery column.

For Datastore. Valid data types of the timestamp field are: TIMESTAMP. Datastore entity will be scanned if the
timestamp property does not exist or its value is empty or invalid.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
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
export interface DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig {
  /**
  * When the job is started by a JobTrigger we will automatically figure out a valid startTime to avoid
scanning files that have not been modified since the last time the JobTrigger executed. This will
be based on the time of the execution of the last run of the JobTrigger.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#enable_auto_population_of_timespan_config DataLossPreventionJobTrigger#enable_auto_population_of_timespan_config}
  */
  readonly enableAutoPopulationOfTimespanConfig?: boolean | cdktf.IResolvable;
  /**
  * Exclude files or rows newer than this value. If set to zero, no upper time limit is applied.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#end_time DataLossPreventionJobTrigger#end_time}
  */
  readonly endTime?: string;
  /**
  * Exclude files or rows older than this value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#start_time DataLossPreventionJobTrigger#start_time}
  */
  readonly startTime?: string;
  /**
  * timestamp_field block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#timestamp_field DataLossPreventionJobTrigger#timestamp_field}
  */
  readonly timestampField: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_auto_population_of_timespan_config: cdktf.booleanToTerraform(struct!.enableAutoPopulationOfTimespanConfig),
    end_time: cdktf.stringToTerraform(struct!.endTime),
    start_time: cdktf.stringToTerraform(struct!.startTime),
    timestamp_field: dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldToTerraform(struct!.timestampField),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAutoPopulationOfTimespanConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAutoPopulationOfTimespanConfig = this._enableAutoPopulationOfTimespanConfig;
    }
    if (this._endTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.endTime = this._endTime;
    }
    if (this._startTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.startTime = this._startTime;
    }
    if (this._timestampField?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampField = this._timestampField?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAutoPopulationOfTimespanConfig = undefined;
      this._endTime = undefined;
      this._startTime = undefined;
      this._timestampField.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAutoPopulationOfTimespanConfig = value.enableAutoPopulationOfTimespanConfig;
      this._endTime = value.endTime;
      this._startTime = value.startTime;
      this._timestampField.internalValue = value.timestampField;
    }
  }

  // enable_auto_population_of_timespan_config - computed: false, optional: true, required: false
  private _enableAutoPopulationOfTimespanConfig?: boolean | cdktf.IResolvable; 
  public get enableAutoPopulationOfTimespanConfig() {
    return this.getBooleanAttribute('enable_auto_population_of_timespan_config');
  }
  public set enableAutoPopulationOfTimespanConfig(value: boolean | cdktf.IResolvable) {
    this._enableAutoPopulationOfTimespanConfig = value;
  }
  public resetEnableAutoPopulationOfTimespanConfig() {
    this._enableAutoPopulationOfTimespanConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoPopulationOfTimespanConfigInput() {
    return this._enableAutoPopulationOfTimespanConfig;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // start_time - computed: false, optional: true, required: false
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  public resetStartTime() {
    this._startTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // timestamp_field - computed: false, optional: false, required: true
  private _timestampField = new DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference(this, "timestamp_field");
  public get timestampField() {
    return this._timestampField;
  }
  public putTimestampField(value: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField) {
    this._timestampField.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampFieldInput() {
    return this._timestampField.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfig {
  /**
  * big_query_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#big_query_options DataLossPreventionJobTrigger#big_query_options}
  */
  readonly bigQueryOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
  /**
  * cloud_storage_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#cloud_storage_options DataLossPreventionJobTrigger#cloud_storage_options}
  */
  readonly cloudStorageOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
  /**
  * datastore_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#datastore_options DataLossPreventionJobTrigger#datastore_options}
  */
  readonly datastoreOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
  /**
  * timespan_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#timespan_config DataLossPreventionJobTrigger#timespan_config}
  */
  readonly timespanConfig?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    big_query_options: dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsToTerraform(struct!.bigQueryOptions),
    cloud_storage_options: dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsToTerraform(struct!.cloudStorageOptions),
    datastore_options: dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsToTerraform(struct!.datastoreOptions),
    timespan_config: dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigToTerraform(struct!.timespanConfig),
  }
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bigQueryOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigQueryOptions = this._bigQueryOptions?.internalValue;
    }
    if (this._cloudStorageOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageOptions = this._cloudStorageOptions?.internalValue;
    }
    if (this._datastoreOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreOptions = this._datastoreOptions?.internalValue;
    }
    if (this._timespanConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timespanConfig = this._timespanConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bigQueryOptions.internalValue = undefined;
      this._cloudStorageOptions.internalValue = undefined;
      this._datastoreOptions.internalValue = undefined;
      this._timespanConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryOptions.internalValue = value.bigQueryOptions;
      this._cloudStorageOptions.internalValue = value.cloudStorageOptions;
      this._datastoreOptions.internalValue = value.datastoreOptions;
      this._timespanConfig.internalValue = value.timespanConfig;
    }
  }

  // big_query_options - computed: false, optional: true, required: false
  private _bigQueryOptions = new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference(this, "big_query_options");
  public get bigQueryOptions() {
    return this._bigQueryOptions;
  }
  public putBigQueryOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions) {
    this._bigQueryOptions.internalValue = value;
  }
  public resetBigQueryOptions() {
    this._bigQueryOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigQueryOptionsInput() {
    return this._bigQueryOptions.internalValue;
  }

  // cloud_storage_options - computed: false, optional: true, required: false
  private _cloudStorageOptions = new DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference(this, "cloud_storage_options");
  public get cloudStorageOptions() {
    return this._cloudStorageOptions;
  }
  public putCloudStorageOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions) {
    this._cloudStorageOptions.internalValue = value;
  }
  public resetCloudStorageOptions() {
    this._cloudStorageOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageOptionsInput() {
    return this._cloudStorageOptions.internalValue;
  }

  // datastore_options - computed: false, optional: true, required: false
  private _datastoreOptions = new DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference(this, "datastore_options");
  public get datastoreOptions() {
    return this._datastoreOptions;
  }
  public putDatastoreOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions) {
    this._datastoreOptions.internalValue = value;
  }
  public resetDatastoreOptions() {
    this._datastoreOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreOptionsInput() {
    return this._datastoreOptions.internalValue;
  }

  // timespan_config - computed: false, optional: true, required: false
  private _timespanConfig = new DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference(this, "timespan_config");
  public get timespanConfig() {
    return this._timespanConfig;
  }
  public putTimespanConfig(value: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig) {
    this._timespanConfig.internalValue = value;
  }
  public resetTimespanConfig() {
    this._timespanConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timespanConfigInput() {
    return this._timespanConfig.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJob {
  /**
  * The name of the template to run when this job is triggered.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#inspect_template_name DataLossPreventionJobTrigger#inspect_template_name}
  */
  readonly inspectTemplateName: string;
  /**
  * actions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#actions DataLossPreventionJobTrigger#actions}
  */
  readonly actions: DataLossPreventionJobTriggerInspectJobActions[] | cdktf.IResolvable;
  /**
  * storage_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#storage_config DataLossPreventionJobTrigger#storage_config}
  */
  readonly storageConfig: DataLossPreventionJobTriggerInspectJobStorageConfig;
}

export function dataLossPreventionJobTriggerInspectJobToTerraform(struct?: DataLossPreventionJobTriggerInspectJobOutputReference | DataLossPreventionJobTriggerInspectJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inspect_template_name: cdktf.stringToTerraform(struct!.inspectTemplateName),
    actions: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobActionsToTerraform, true)(struct!.actions),
    storage_config: dataLossPreventionJobTriggerInspectJobStorageConfigToTerraform(struct!.storageConfig),
  }
}

export class DataLossPreventionJobTriggerInspectJobOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJob | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inspectTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplateName = this._inspectTemplateName;
    }
    if (this._actions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actions = this._actions?.internalValue;
    }
    if (this._storageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageConfig = this._storageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJob | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inspectTemplateName = undefined;
      this._actions.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectTemplateName = value.inspectTemplateName;
      this._actions.internalValue = value.actions;
      this._storageConfig.internalValue = value.storageConfig;
    }
  }

  // inspect_template_name - computed: false, optional: false, required: true
  private _inspectTemplateName?: string; 
  public get inspectTemplateName() {
    return this.getStringAttribute('inspect_template_name');
  }
  public set inspectTemplateName(value: string) {
    this._inspectTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateNameInput() {
    return this._inspectTemplateName;
  }

  // actions - computed: false, optional: false, required: true
  private _actions = new DataLossPreventionJobTriggerInspectJobActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataLossPreventionJobTriggerInspectJobActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // storage_config - computed: false, optional: false, required: true
  private _storageConfig = new DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference(this, "storage_config");
  public get storageConfig() {
    return this._storageConfig;
  }
  public putStorageConfig(value: DataLossPreventionJobTriggerInspectJobStorageConfig) {
    this._storageConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigInput() {
    return this._storageConfig.internalValue;
  }
}
export interface DataLossPreventionJobTriggerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#create DataLossPreventionJobTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#delete DataLossPreventionJobTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#update DataLossPreventionJobTrigger#update}
  */
  readonly update?: string;
}

export function dataLossPreventionJobTriggerTimeoutsToTerraform(struct?: DataLossPreventionJobTriggerTimeoutsOutputReference | DataLossPreventionJobTriggerTimeouts | cdktf.IResolvable): any {
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

export class DataLossPreventionJobTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataLossPreventionJobTriggerTimeouts | cdktf.IResolvable | undefined) {
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
export interface DataLossPreventionJobTriggerTriggersSchedule {
  /**
  * With this option a job is started a regular periodic basis. For example: every day (86400 seconds).

A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.

This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#recurrence_period_duration DataLossPreventionJobTrigger#recurrence_period_duration}
  */
  readonly recurrencePeriodDuration?: string;
}

export function dataLossPreventionJobTriggerTriggersScheduleToTerraform(struct?: DataLossPreventionJobTriggerTriggersScheduleOutputReference | DataLossPreventionJobTriggerTriggersSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recurrence_period_duration: cdktf.stringToTerraform(struct!.recurrencePeriodDuration),
  }
}

export class DataLossPreventionJobTriggerTriggersScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerTriggersSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recurrencePeriodDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurrencePeriodDuration = this._recurrencePeriodDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerTriggersSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recurrencePeriodDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recurrencePeriodDuration = value.recurrencePeriodDuration;
    }
  }

  // recurrence_period_duration - computed: false, optional: true, required: false
  private _recurrencePeriodDuration?: string; 
  public get recurrencePeriodDuration() {
    return this.getStringAttribute('recurrence_period_duration');
  }
  public set recurrencePeriodDuration(value: string) {
    this._recurrencePeriodDuration = value;
  }
  public resetRecurrencePeriodDuration() {
    this._recurrencePeriodDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrencePeriodDurationInput() {
    return this._recurrencePeriodDuration;
  }
}
export interface DataLossPreventionJobTriggerTriggers {
  /**
  * schedule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger#schedule DataLossPreventionJobTrigger#schedule}
  */
  readonly schedule?: DataLossPreventionJobTriggerTriggersSchedule;
}

export function dataLossPreventionJobTriggerTriggersToTerraform(struct?: DataLossPreventionJobTriggerTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    schedule: dataLossPreventionJobTriggerTriggersScheduleToTerraform(struct!.schedule),
  }
}

export class DataLossPreventionJobTriggerTriggersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerTriggers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._schedule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerTriggers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._schedule.internalValue = value.schedule;
    }
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new DataLossPreventionJobTriggerTriggersScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: DataLossPreventionJobTriggerTriggersSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }
}

export class DataLossPreventionJobTriggerTriggersList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerTriggers[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerTriggersOutputReference {
    return new DataLossPreventionJobTriggerTriggersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger google_data_loss_prevention_job_trigger}
*/
export class DataLossPreventionJobTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_job_trigger";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_loss_prevention_job_trigger google_data_loss_prevention_job_trigger} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLossPreventionJobTriggerConfig
  */
  public constructor(scope: Construct, id: string, config: DataLossPreventionJobTriggerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_loss_prevention_job_trigger',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._status = config.status;
    this._inspectJob.internalValue = config.inspectJob;
    this._timeouts.internalValue = config.timeouts;
    this._triggers.internalValue = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // last_run_time - computed: true, optional: false, required: false
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // inspect_job - computed: false, optional: true, required: false
  private _inspectJob = new DataLossPreventionJobTriggerInspectJobOutputReference(this, "inspect_job");
  public get inspectJob() {
    return this._inspectJob;
  }
  public putInspectJob(value: DataLossPreventionJobTriggerInspectJob) {
    this._inspectJob.internalValue = value;
  }
  public resetInspectJob() {
    this._inspectJob.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectJobInput() {
    return this._inspectJob.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataLossPreventionJobTriggerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataLossPreventionJobTriggerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // triggers - computed: false, optional: false, required: true
  private _triggers = new DataLossPreventionJobTriggerTriggersList(this, "triggers", false);
  public get triggers() {
    return this._triggers;
  }
  public putTriggers(value: DataLossPreventionJobTriggerTriggers[] | cdktf.IResolvable) {
    this._triggers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      parent: cdktf.stringToTerraform(this._parent),
      status: cdktf.stringToTerraform(this._status),
      inspect_job: dataLossPreventionJobTriggerInspectJobToTerraform(this._inspectJob.internalValue),
      timeouts: dataLossPreventionJobTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      triggers: cdktf.listMapper(dataLossPreventionJobTriggerTriggersToTerraform, true)(this._triggers.internalValue),
    };
  }
}
