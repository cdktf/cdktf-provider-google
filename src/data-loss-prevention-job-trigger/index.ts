// https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLossPreventionJobTriggerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the job trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#description DataLossPreventionJobTrigger#description}
  */
  readonly description?: string;
  /**
  * User set display name of the job trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#display_name DataLossPreventionJobTrigger#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#id DataLossPreventionJobTrigger#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The parent of the trigger, either in the format 'projects/{{project}}'
  * or 'projects/{{project}}/locations/{{location}}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#parent DataLossPreventionJobTrigger#parent}
  */
  readonly parent: string;
  /**
  * Whether the trigger is currently active. Default value: "HEALTHY" Possible values: ["PAUSED", "HEALTHY", "CANCELLED"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#status DataLossPreventionJobTrigger#status}
  */
  readonly status?: string;
  /**
  * The trigger id can contain uppercase and lowercase letters, numbers, and hyphens;
  * that is, it must match the regular expression: [a-zA-Z\d-_]+.
  * The maximum length is 100 characters. Can be empty to allow the system to generate one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#trigger_id DataLossPreventionJobTrigger#trigger_id}
  */
  readonly triggerId?: string;
  /**
  * inspect_job block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#inspect_job DataLossPreventionJobTrigger#inspect_job}
  */
  readonly inspectJob?: DataLossPreventionJobTriggerInspectJob;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#timeouts DataLossPreventionJobTrigger#timeouts}
  */
  readonly timeouts?: DataLossPreventionJobTriggerTimeouts;
  /**
  * triggers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#triggers DataLossPreventionJobTrigger#triggers}
  */
  readonly triggers: DataLossPreventionJobTriggerTriggers[] | cdktf.IResolvable;
}
export interface DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig {
  /**
  * If this template is specified, it will serve as the default de-identify template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#deidentify_template DataLossPreventionJobTrigger#deidentify_template}
  */
  readonly deidentifyTemplate?: string;
  /**
  * If this template is specified, it will serve as the de-identify template for images.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#image_redact_template DataLossPreventionJobTrigger#image_redact_template}
  */
  readonly imageRedactTemplate?: string;
  /**
  * If this template is specified, it will serve as the de-identify template for structured content such as delimited files and tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#structured_deidentify_template DataLossPreventionJobTrigger#structured_deidentify_template}
  */
  readonly structuredDeidentifyTemplate?: string;
}

export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deidentify_template: cdktf.stringToTerraform(struct!.deidentifyTemplate),
    image_redact_template: cdktf.stringToTerraform(struct!.imageRedactTemplate),
    structured_deidentify_template: cdktf.stringToTerraform(struct!.structuredDeidentifyTemplate),
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deidentify_template: {
      value: cdktf.stringToHclTerraform(struct!.deidentifyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_redact_template: {
      value: cdktf.stringToHclTerraform(struct!.imageRedactTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    structured_deidentify_template: {
      value: cdktf.stringToHclTerraform(struct!.structuredDeidentifyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deidentifyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deidentifyTemplate = this._deidentifyTemplate;
    }
    if (this._imageRedactTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRedactTemplate = this._imageRedactTemplate;
    }
    if (this._structuredDeidentifyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.structuredDeidentifyTemplate = this._structuredDeidentifyTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deidentifyTemplate = undefined;
      this._imageRedactTemplate = undefined;
      this._structuredDeidentifyTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deidentifyTemplate = value.deidentifyTemplate;
      this._imageRedactTemplate = value.imageRedactTemplate;
      this._structuredDeidentifyTemplate = value.structuredDeidentifyTemplate;
    }
  }

  // deidentify_template - computed: false, optional: true, required: false
  private _deidentifyTemplate?: string; 
  public get deidentifyTemplate() {
    return this.getStringAttribute('deidentify_template');
  }
  public set deidentifyTemplate(value: string) {
    this._deidentifyTemplate = value;
  }
  public resetDeidentifyTemplate() {
    this._deidentifyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyTemplateInput() {
    return this._deidentifyTemplate;
  }

  // image_redact_template - computed: false, optional: true, required: false
  private _imageRedactTemplate?: string; 
  public get imageRedactTemplate() {
    return this.getStringAttribute('image_redact_template');
  }
  public set imageRedactTemplate(value: string) {
    this._imageRedactTemplate = value;
  }
  public resetImageRedactTemplate() {
    this._imageRedactTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRedactTemplateInput() {
    return this._imageRedactTemplate;
  }

  // structured_deidentify_template - computed: false, optional: true, required: false
  private _structuredDeidentifyTemplate?: string; 
  public get structuredDeidentifyTemplate() {
    return this.getStringAttribute('structured_deidentify_template');
  }
  public set structuredDeidentifyTemplate(value: string) {
    this._structuredDeidentifyTemplate = value;
  }
  public resetStructuredDeidentifyTemplate() {
    this._structuredDeidentifyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get structuredDeidentifyTemplateInput() {
    return this._structuredDeidentifyTemplate;
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable {
  /**
  * The ID of the dataset containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The ID of the project containing this table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * The ID of the table. The ID must contain only letters (a-z,
  * A-Z), numbers (0-9), or underscores (_). The maximum length
  * is 1,024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}
  */
  readonly tableId?: string;
}

export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable): any {
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


export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable): any {
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

export class DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable | undefined {
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

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable | undefined) {
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
export interface DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig {
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#table DataLossPreventionJobTrigger#table}
  */
  readonly table: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable;
}

export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    table: dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableToTerraform(struct!.table),
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    table: {
      value: dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._table?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.table = this._table?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._table.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._table.internalValue = value.table;
    }
  }

  // table - computed: false, optional: false, required: true
  private _table = new DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTableOutputReference(this, "table");
  public get table() {
    return this._table;
  }
  public putTable(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigTable) {
    this._table.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tableInput() {
    return this._table.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsDeidentify {
  /**
  * User settable Cloud Storage bucket and folders to store de-identified files.
  * 
  * This field must be set for cloud storage deidentification.
  * 
  * The output Cloud Storage bucket must be different from the input bucket.
  * 
  * De-identified files will overwrite files in the output path.
  * 
  * Form of: gs://bucket/folder/ or gs://bucket
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#cloud_storage_output DataLossPreventionJobTrigger#cloud_storage_output}
  */
  readonly cloudStorageOutput: string;
  /**
  * List of user-specified file type groups to transform. If specified, only the files with these filetypes will be transformed.
  * 
  * If empty, all supported files will be transformed. Supported types may be automatically added over time.
  * 
  * If a file type is set in this field that isn't supported by the Deidentify action then the job will fail and will not be successfully created/started. Possible values: ["IMAGE", "TEXT_FILE", "CSV", "TSV"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#file_types_to_transform DataLossPreventionJobTrigger#file_types_to_transform}
  */
  readonly fileTypesToTransform?: string[];
  /**
  * transformation_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#transformation_config DataLossPreventionJobTrigger#transformation_config}
  */
  readonly transformationConfig?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig;
  /**
  * transformation_details_storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#transformation_details_storage_config DataLossPreventionJobTrigger#transformation_details_storage_config}
  */
  readonly transformationDetailsStorageConfig?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig;
}

export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_output: cdktf.stringToTerraform(struct!.cloudStorageOutput),
    file_types_to_transform: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fileTypesToTransform),
    transformation_config: dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigToTerraform(struct!.transformationConfig),
    transformation_details_storage_config: dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigToTerraform(struct!.transformationDetailsStorageConfig),
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsDeidentifyToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference | DataLossPreventionJobTriggerInspectJobActionsDeidentify): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_output: {
      value: cdktf.stringToHclTerraform(struct!.cloudStorageOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_types_to_transform: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileTypesToTransform),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    transformation_config: {
      value: dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigToHclTerraform(struct!.transformationConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigList",
    },
    transformation_details_storage_config: {
      value: dataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigToHclTerraform(struct!.transformationDetailsStorageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsDeidentify | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStorageOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStorageOutput = this._cloudStorageOutput;
    }
    if (this._fileTypesToTransform !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileTypesToTransform = this._fileTypesToTransform;
    }
    if (this._transformationConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationConfig = this._transformationConfig?.internalValue;
    }
    if (this._transformationDetailsStorageConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.transformationDetailsStorageConfig = this._transformationDetailsStorageConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsDeidentify | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStorageOutput = undefined;
      this._fileTypesToTransform = undefined;
      this._transformationConfig.internalValue = undefined;
      this._transformationDetailsStorageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStorageOutput = value.cloudStorageOutput;
      this._fileTypesToTransform = value.fileTypesToTransform;
      this._transformationConfig.internalValue = value.transformationConfig;
      this._transformationDetailsStorageConfig.internalValue = value.transformationDetailsStorageConfig;
    }
  }

  // cloud_storage_output - computed: false, optional: false, required: true
  private _cloudStorageOutput?: string; 
  public get cloudStorageOutput() {
    return this.getStringAttribute('cloud_storage_output');
  }
  public set cloudStorageOutput(value: string) {
    this._cloudStorageOutput = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStorageOutputInput() {
    return this._cloudStorageOutput;
  }

  // file_types_to_transform - computed: false, optional: true, required: false
  private _fileTypesToTransform?: string[]; 
  public get fileTypesToTransform() {
    return this.getListAttribute('file_types_to_transform');
  }
  public set fileTypesToTransform(value: string[]) {
    this._fileTypesToTransform = value;
  }
  public resetFileTypesToTransform() {
    this._fileTypesToTransform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypesToTransformInput() {
    return this._fileTypesToTransform;
  }

  // transformation_config - computed: false, optional: true, required: false
  private _transformationConfig = new DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfigOutputReference(this, "transformation_config");
  public get transformationConfig() {
    return this._transformationConfig;
  }
  public putTransformationConfig(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationConfig) {
    this._transformationConfig.internalValue = value;
  }
  public resetTransformationConfig() {
    this._transformationConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationConfigInput() {
    return this._transformationConfig.internalValue;
  }

  // transformation_details_storage_config - computed: false, optional: true, required: false
  private _transformationDetailsStorageConfig = new DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfigOutputReference(this, "transformation_details_storage_config");
  public get transformationDetailsStorageConfig() {
    return this._transformationDetailsStorageConfig;
  }
  public putTransformationDetailsStorageConfig(value: DataLossPreventionJobTriggerInspectJobActionsDeidentifyTransformationDetailsStorageConfig) {
    this._transformationDetailsStorageConfig.internalValue = value;
  }
  public resetTransformationDetailsStorageConfig() {
    this._transformationDetailsStorageConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transformationDetailsStorageConfigInput() {
    return this._transformationDetailsStorageConfig.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails {
}

export function dataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference | DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference | DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsPubSub {
  /**
  * Cloud Pub/Sub topic to send notifications to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#topic DataLossPreventionJobTrigger#topic}
  */
  readonly topic: string;
}

export function dataLossPreventionJobTriggerInspectJobActionsPubSubToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference | DataLossPreventionJobTriggerInspectJobActionsPubSub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topic: cdktf.stringToTerraform(struct!.topic),
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsPubSubToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference | DataLossPreventionJobTriggerInspectJobActionsPubSub): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topic: {
      value: cdktf.stringToHclTerraform(struct!.topic),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsPubSub | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topic !== undefined) {
      hasAnyValues = true;
      internalValueResult.topic = this._topic;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsPubSub | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._topic = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._topic = value.topic;
    }
  }

  // topic - computed: false, optional: false, required: true
  private _topic?: string; 
  public get topic() {
    return this.getStringAttribute('topic');
  }
  public set topic(value: string) {
    this._topic = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topicInput() {
    return this._topic;
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog {
}

export function dataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference | DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference | DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc {
}

export function dataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference | DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference | DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriver {
}

export function dataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverOutputReference | DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverOutputReference | DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriver): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriver | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriver | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable {
  /**
  * Dataset ID of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * Name of the table. If is not set a new one will be generated for you with the following format:
  * 'dlp_googleapis_yyyy_mm_dd_[dlp_job_id]'. Pacific timezone will be used for generating the date details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}
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


export function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableOutputReference | DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTable): any {
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
  * Inspect and must be unspecified for Risk jobs. Columns are derived from the Finding
  * object. If appending to an existing table, any columns from the predefined schema
  * that are missing will be added. No columns in the existing table will be deleted.
  * 
  * If unspecified, then all available columns will be used for a new table or an (existing)
  * table with no schema, and no changes will be made to an existing table that has a schema.
  * Only for use with external storage. Possible values: ["BASIC_COLUMNS", "GCS_COLUMNS", "DATASTORE_COLUMNS", "BIG_QUERY_COLUMNS", "ALL_COLUMNS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#output_schema DataLossPreventionJobTrigger#output_schema}
  */
  readonly outputSchema?: string;
  /**
  * table block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#table DataLossPreventionJobTrigger#table}
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


export function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigOutputReference | DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_schema: {
      value: cdktf.stringToHclTerraform(struct!.outputSchema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    table: {
      value: dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableToHclTerraform(struct!.table),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigTableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#output_config DataLossPreventionJobTrigger#output_config}
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


export function dataLossPreventionJobTriggerInspectJobActionsSaveFindingsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference | DataLossPreventionJobTriggerInspectJobActionsSaveFindings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    output_config: {
      value: dataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigToHclTerraform(struct!.outputConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * deidentify block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#deidentify DataLossPreventionJobTrigger#deidentify}
  */
  readonly deidentify?: DataLossPreventionJobTriggerInspectJobActionsDeidentify;
  /**
  * job_notification_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#job_notification_emails DataLossPreventionJobTrigger#job_notification_emails}
  */
  readonly jobNotificationEmails?: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails;
  /**
  * pub_sub block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#pub_sub DataLossPreventionJobTrigger#pub_sub}
  */
  readonly pubSub?: DataLossPreventionJobTriggerInspectJobActionsPubSub;
  /**
  * publish_findings_to_cloud_data_catalog block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#publish_findings_to_cloud_data_catalog DataLossPreventionJobTrigger#publish_findings_to_cloud_data_catalog}
  */
  readonly publishFindingsToCloudDataCatalog?: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog;
  /**
  * publish_summary_to_cscc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#publish_summary_to_cscc DataLossPreventionJobTrigger#publish_summary_to_cscc}
  */
  readonly publishSummaryToCscc?: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc;
  /**
  * publish_to_stackdriver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#publish_to_stackdriver DataLossPreventionJobTrigger#publish_to_stackdriver}
  */
  readonly publishToStackdriver?: DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriver;
  /**
  * save_findings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#save_findings DataLossPreventionJobTrigger#save_findings}
  */
  readonly saveFindings?: DataLossPreventionJobTriggerInspectJobActionsSaveFindings;
}

export function dataLossPreventionJobTriggerInspectJobActionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deidentify: dataLossPreventionJobTriggerInspectJobActionsDeidentifyToTerraform(struct!.deidentify),
    job_notification_emails: dataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsToTerraform(struct!.jobNotificationEmails),
    pub_sub: dataLossPreventionJobTriggerInspectJobActionsPubSubToTerraform(struct!.pubSub),
    publish_findings_to_cloud_data_catalog: dataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogToTerraform(struct!.publishFindingsToCloudDataCatalog),
    publish_summary_to_cscc: dataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccToTerraform(struct!.publishSummaryToCscc),
    publish_to_stackdriver: dataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverToTerraform(struct!.publishToStackdriver),
    save_findings: dataLossPreventionJobTriggerInspectJobActionsSaveFindingsToTerraform(struct!.saveFindings),
  }
}


export function dataLossPreventionJobTriggerInspectJobActionsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobActions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deidentify: {
      value: dataLossPreventionJobTriggerInspectJobActionsDeidentifyToHclTerraform(struct!.deidentify),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsDeidentifyList",
    },
    job_notification_emails: {
      value: dataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsToHclTerraform(struct!.jobNotificationEmails),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsList",
    },
    pub_sub: {
      value: dataLossPreventionJobTriggerInspectJobActionsPubSubToHclTerraform(struct!.pubSub),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsPubSubList",
    },
    publish_findings_to_cloud_data_catalog: {
      value: dataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogToHclTerraform(struct!.publishFindingsToCloudDataCatalog),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogList",
    },
    publish_summary_to_cscc: {
      value: dataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccToHclTerraform(struct!.publishSummaryToCscc),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccList",
    },
    publish_to_stackdriver: {
      value: dataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverToHclTerraform(struct!.publishToStackdriver),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverList",
    },
    save_findings: {
      value: dataLossPreventionJobTriggerInspectJobActionsSaveFindingsToHclTerraform(struct!.saveFindings),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsSaveFindingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._deidentify?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deidentify = this._deidentify?.internalValue;
    }
    if (this._jobNotificationEmails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobNotificationEmails = this._jobNotificationEmails?.internalValue;
    }
    if (this._pubSub?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubSub = this._pubSub?.internalValue;
    }
    if (this._publishFindingsToCloudDataCatalog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishFindingsToCloudDataCatalog = this._publishFindingsToCloudDataCatalog?.internalValue;
    }
    if (this._publishSummaryToCscc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishSummaryToCscc = this._publishSummaryToCscc?.internalValue;
    }
    if (this._publishToStackdriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishToStackdriver = this._publishToStackdriver?.internalValue;
    }
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
      this._deidentify.internalValue = undefined;
      this._jobNotificationEmails.internalValue = undefined;
      this._pubSub.internalValue = undefined;
      this._publishFindingsToCloudDataCatalog.internalValue = undefined;
      this._publishSummaryToCscc.internalValue = undefined;
      this._publishToStackdriver.internalValue = undefined;
      this._saveFindings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deidentify.internalValue = value.deidentify;
      this._jobNotificationEmails.internalValue = value.jobNotificationEmails;
      this._pubSub.internalValue = value.pubSub;
      this._publishFindingsToCloudDataCatalog.internalValue = value.publishFindingsToCloudDataCatalog;
      this._publishSummaryToCscc.internalValue = value.publishSummaryToCscc;
      this._publishToStackdriver.internalValue = value.publishToStackdriver;
      this._saveFindings.internalValue = value.saveFindings;
    }
  }

  // deidentify - computed: false, optional: true, required: false
  private _deidentify = new DataLossPreventionJobTriggerInspectJobActionsDeidentifyOutputReference(this, "deidentify");
  public get deidentify() {
    return this._deidentify;
  }
  public putDeidentify(value: DataLossPreventionJobTriggerInspectJobActionsDeidentify) {
    this._deidentify.internalValue = value;
  }
  public resetDeidentify() {
    this._deidentify.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyInput() {
    return this._deidentify.internalValue;
  }

  // job_notification_emails - computed: false, optional: true, required: false
  private _jobNotificationEmails = new DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmailsOutputReference(this, "job_notification_emails");
  public get jobNotificationEmails() {
    return this._jobNotificationEmails;
  }
  public putJobNotificationEmails(value: DataLossPreventionJobTriggerInspectJobActionsJobNotificationEmails) {
    this._jobNotificationEmails.internalValue = value;
  }
  public resetJobNotificationEmails() {
    this._jobNotificationEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNotificationEmailsInput() {
    return this._jobNotificationEmails.internalValue;
  }

  // pub_sub - computed: false, optional: true, required: false
  private _pubSub = new DataLossPreventionJobTriggerInspectJobActionsPubSubOutputReference(this, "pub_sub");
  public get pubSub() {
    return this._pubSub;
  }
  public putPubSub(value: DataLossPreventionJobTriggerInspectJobActionsPubSub) {
    this._pubSub.internalValue = value;
  }
  public resetPubSub() {
    this._pubSub.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSubInput() {
    return this._pubSub.internalValue;
  }

  // publish_findings_to_cloud_data_catalog - computed: false, optional: true, required: false
  private _publishFindingsToCloudDataCatalog = new DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalogOutputReference(this, "publish_findings_to_cloud_data_catalog");
  public get publishFindingsToCloudDataCatalog() {
    return this._publishFindingsToCloudDataCatalog;
  }
  public putPublishFindingsToCloudDataCatalog(value: DataLossPreventionJobTriggerInspectJobActionsPublishFindingsToCloudDataCatalog) {
    this._publishFindingsToCloudDataCatalog.internalValue = value;
  }
  public resetPublishFindingsToCloudDataCatalog() {
    this._publishFindingsToCloudDataCatalog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishFindingsToCloudDataCatalogInput() {
    return this._publishFindingsToCloudDataCatalog.internalValue;
  }

  // publish_summary_to_cscc - computed: false, optional: true, required: false
  private _publishSummaryToCscc = new DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCsccOutputReference(this, "publish_summary_to_cscc");
  public get publishSummaryToCscc() {
    return this._publishSummaryToCscc;
  }
  public putPublishSummaryToCscc(value: DataLossPreventionJobTriggerInspectJobActionsPublishSummaryToCscc) {
    this._publishSummaryToCscc.internalValue = value;
  }
  public resetPublishSummaryToCscc() {
    this._publishSummaryToCscc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishSummaryToCsccInput() {
    return this._publishSummaryToCscc.internalValue;
  }

  // publish_to_stackdriver - computed: false, optional: true, required: false
  private _publishToStackdriver = new DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriverOutputReference(this, "publish_to_stackdriver");
  public get publishToStackdriver() {
    return this._publishToStackdriver;
  }
  public putPublishToStackdriver(value: DataLossPreventionJobTriggerInspectJobActionsPublishToStackdriver) {
    this._publishToStackdriver.internalValue = value;
  }
  public resetPublishToStackdriver() {
    this._publishToStackdriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishToStackdriverInput() {
    return this._publishToStackdriver.internalValue;
  }

  // save_findings - computed: false, optional: true, required: false
  private _saveFindings = new DataLossPreventionJobTriggerInspectJobActionsSaveFindingsOutputReference(this, "save_findings");
  public get saveFindings() {
    return this._saveFindings;
  }
  public putSaveFindings(value: DataLossPreventionJobTriggerInspectJobActionsSaveFindings) {
    this._saveFindings.internalValue = value;
  }
  public resetSaveFindings() {
    this._saveFindings.internalValue = undefined;
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
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#path DataLossPreventionJobTrigger#path}
  */
  readonly path: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
  * phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#words DataLossPreventionJobTrigger#words}
  */
  readonly words: string[];
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionary {
  /**
  * cloud_storage_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#cloud_storage_path DataLossPreventionJobTrigger#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath;
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#word_list DataLossPreventionJobTrigger#word_list}
  */
  readonly wordList?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStruct;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructToTerraform(struct!.wordList),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_path: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathToHclTerraform(struct!.cloudStoragePath),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathList",
    },
    word_list: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#score DataLossPreventionJobTrigger#score}
  */
  readonly score: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names
  * listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
  /**
  * Version of the information type to use. By default, the version is set to stable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#version DataLossPreventionJobTrigger#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sensitivity_score DataLossPreventionJobTrigger#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoType): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#group_indexes DataLossPreventionJobTrigger#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
  * Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#pattern DataLossPreventionJobTrigger#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#score DataLossPreventionJobTrigger#score}
  */
  readonly score: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredType {
  /**
  * Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342'
  * or 'projects/project-id/storedInfoTypes/432452342'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredType): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
    }
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateType {
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes {
  /**
  * If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#exclusion_type DataLossPreventionJobTrigger#exclusion_type}
  */
  readonly exclusionType?: string;
  /**
  * Likelihood to return for this CustomInfoType. This base value can be altered by a detection rule if the finding meets the criteria
  * specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#likelihood DataLossPreventionJobTrigger#likelihood}
  */
  readonly likelihood?: string;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#dictionary DataLossPreventionJobTrigger#dictionary}
  */
  readonly dictionary?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionary;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#info_type DataLossPreventionJobTrigger#info_type}
  */
  readonly infoType: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoType;
  /**
  * regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#regex DataLossPreventionJobTrigger#regex}
  */
  readonly regex?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegex;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sensitivity_score DataLossPreventionJobTrigger#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScore;
  /**
  * stored_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#stored_type DataLossPreventionJobTrigger#stored_type}
  */
  readonly storedType?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredType;
  /**
  * surrogate_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#surrogate_type DataLossPreventionJobTrigger#surrogate_type}
  */
  readonly surrogateType?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateType;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_type: cdktf.stringToTerraform(struct!.exclusionType),
    likelihood: cdktf.stringToTerraform(struct!.likelihood),
    dictionary: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryToTerraform(struct!.dictionary),
    info_type: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeToTerraform(struct!.infoType),
    regex: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexToTerraform(struct!.regex),
    sensitivity_score: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
    stored_type: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeToTerraform(struct!.storedType),
    surrogate_type: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeToTerraform(struct!.surrogateType),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_type: {
      value: cdktf.stringToHclTerraform(struct!.exclusionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    likelihood: {
      value: cdktf.stringToHclTerraform(struct!.likelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryToHclTerraform(struct!.dictionary),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryList",
    },
    info_type: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeList",
    },
    regex: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexToHclTerraform(struct!.regex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexList",
    },
    sensitivity_score: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreList",
    },
    stored_type: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeToHclTerraform(struct!.storedType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeList",
    },
    surrogate_type: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeToHclTerraform(struct!.surrogateType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionType = this._exclusionType;
    }
    if (this._likelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihood = this._likelihood;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    if (this._storedType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storedType = this._storedType?.internalValue;
    }
    if (this._surrogateType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.surrogateType = this._surrogateType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionType = undefined;
      this._likelihood = undefined;
      this._dictionary.internalValue = undefined;
      this._infoType.internalValue = undefined;
      this._regex.internalValue = undefined;
      this._sensitivityScore.internalValue = undefined;
      this._storedType.internalValue = undefined;
      this._surrogateType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionType = value.exclusionType;
      this._likelihood = value.likelihood;
      this._dictionary.internalValue = value.dictionary;
      this._infoType.internalValue = value.infoType;
      this._regex.internalValue = value.regex;
      this._sensitivityScore.internalValue = value.sensitivityScore;
      this._storedType.internalValue = value.storedType;
      this._surrogateType.internalValue = value.surrogateType;
    }
  }

  // exclusion_type - computed: false, optional: true, required: false
  private _exclusionType?: string; 
  public get exclusionType() {
    return this.getStringAttribute('exclusion_type');
  }
  public set exclusionType(value: string) {
    this._exclusionType = value;
  }
  public resetExclusionType() {
    this._exclusionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionTypeInput() {
    return this._exclusionType;
  }

  // likelihood - computed: false, optional: true, required: false
  private _likelihood?: string; 
  public get likelihood() {
    return this.getStringAttribute('likelihood');
  }
  public set likelihood(value: string) {
    this._likelihood = value;
  }
  public resetLikelihood() {
    this._likelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodInput() {
    return this._likelihood;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // info_type - computed: false, optional: false, required: true
  private _infoType = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesInfoType) {
    this._infoType.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }

  // stored_type - computed: false, optional: true, required: false
  private _storedType = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredTypeOutputReference(this, "stored_type");
  public get storedType() {
    return this._storedType;
  }
  public putStoredType(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesStoredType) {
    this._storedType.internalValue = value;
  }
  public resetStoredType() {
    this._storedType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storedTypeInput() {
    return this._storedType.internalValue;
  }

  // surrogate_type - computed: false, optional: true, required: false
  private _surrogateType = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateTypeOutputReference(this, "surrogate_type");
  public get surrogateType() {
    return this._surrogateType;
  }
  public putSurrogateType(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesSurrogateType) {
    this._surrogateType.internalValue = value;
  }
  public resetSurrogateType() {
    this._surrogateType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get surrogateTypeInput() {
    return this._surrogateType.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesOutputReference {
    return new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#score DataLossPreventionJobTrigger#score}
  */
  readonly score: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
  /**
  * Version of the information type to use. By default, the version is set to stable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#version DataLossPreventionJobTrigger#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sensitivity_score DataLossPreventionJobTrigger#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScore;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes | cdktf.IResolvable): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesOutputReference {
    return new DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#score DataLossPreventionJobTrigger#score}
  */
  readonly score: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
  /**
  * Version of the information type to use. By default, the version is set to stable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#version DataLossPreventionJobTrigger#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sensitivity_score DataLossPreventionJobTrigger#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType {
  /**
  * Max findings limit for the given infoType.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#max_findings DataLossPreventionJobTrigger#max_findings}
  */
  readonly maxFindings?: number;
  /**
  * info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#info_type DataLossPreventionJobTrigger#info_type}
  */
  readonly infoType?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings: cdktf.numberToTerraform(struct!.maxFindings),
    info_type: dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToTerraform(struct!.infoType),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_findings: {
      value: cdktf.numberToHclTerraform(struct!.maxFindings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    info_type: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeToHclTerraform(struct!.infoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindings !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindings = this._maxFindings;
    }
    if (this._infoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoType = this._infoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxFindings = undefined;
      this._infoType.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxFindings = value.maxFindings;
      this._infoType.internalValue = value.infoType;
    }
  }

  // max_findings - computed: false, optional: true, required: false
  private _maxFindings?: number; 
  public get maxFindings() {
    return this.getNumberAttribute('max_findings');
  }
  public set maxFindings(value: number) {
    this._maxFindings = value;
  }
  public resetMaxFindings() {
    this._maxFindings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsInput() {
    return this._maxFindings;
  }

  // info_type - computed: false, optional: true, required: false
  private _infoType = new DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference(this, "info_type");
  public get infoType() {
    return this._infoType;
  }
  public putInfoType(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeInfoType) {
    this._infoType.internalValue = value;
  }
  public resetInfoType() {
    this._infoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypeInput() {
    return this._infoType.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference {
    return new DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigLimits {
  /**
  * Max number of findings that will be returned for each item scanned. The maximum returned is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#max_findings_per_item DataLossPreventionJobTrigger#max_findings_per_item}
  */
  readonly maxFindingsPerItem?: number;
  /**
  * Max number of findings that will be returned per request/job. The maximum returned is 2000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#max_findings_per_request DataLossPreventionJobTrigger#max_findings_per_request}
  */
  readonly maxFindingsPerRequest?: number;
  /**
  * max_findings_per_info_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#max_findings_per_info_type DataLossPreventionJobTrigger#max_findings_per_info_type}
  */
  readonly maxFindingsPerInfoType?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_findings_per_item: cdktf.numberToTerraform(struct!.maxFindingsPerItem),
    max_findings_per_request: cdktf.numberToTerraform(struct!.maxFindingsPerRequest),
    max_findings_per_info_type: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeToTerraform, true)(struct!.maxFindingsPerInfoType),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigLimitsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_findings_per_item: {
      value: cdktf.numberToHclTerraform(struct!.maxFindingsPerItem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_findings_per_request: {
      value: cdktf.numberToHclTerraform(struct!.maxFindingsPerRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_findings_per_info_type: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeToHclTerraform, true)(struct!.maxFindingsPerInfoType),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFindingsPerItem !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerItem = this._maxFindingsPerItem;
    }
    if (this._maxFindingsPerRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerRequest = this._maxFindingsPerRequest;
    }
    if (this._maxFindingsPerInfoType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFindingsPerInfoType = this._maxFindingsPerInfoType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFindingsPerItem = undefined;
      this._maxFindingsPerRequest = undefined;
      this._maxFindingsPerInfoType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFindingsPerItem = value.maxFindingsPerItem;
      this._maxFindingsPerRequest = value.maxFindingsPerRequest;
      this._maxFindingsPerInfoType.internalValue = value.maxFindingsPerInfoType;
    }
  }

  // max_findings_per_item - computed: false, optional: true, required: false
  private _maxFindingsPerItem?: number; 
  public get maxFindingsPerItem() {
    return this.getNumberAttribute('max_findings_per_item');
  }
  public set maxFindingsPerItem(value: number) {
    this._maxFindingsPerItem = value;
  }
  public resetMaxFindingsPerItem() {
    this._maxFindingsPerItem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerItemInput() {
    return this._maxFindingsPerItem;
  }

  // max_findings_per_request - computed: false, optional: true, required: false
  private _maxFindingsPerRequest?: number; 
  public get maxFindingsPerRequest() {
    return this.getNumberAttribute('max_findings_per_request');
  }
  public set maxFindingsPerRequest(value: number) {
    this._maxFindingsPerRequest = value;
  }
  public resetMaxFindingsPerRequest() {
    this._maxFindingsPerRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerRequestInput() {
    return this._maxFindingsPerRequest;
  }

  // max_findings_per_info_type - computed: false, optional: true, required: false
  private _maxFindingsPerInfoType = new DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoTypeList(this, "max_findings_per_info_type", false);
  public get maxFindingsPerInfoType() {
    return this._maxFindingsPerInfoType;
  }
  public putMaxFindingsPerInfoType(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimitsMaxFindingsPerInfoType[] | cdktf.IResolvable) {
    this._maxFindingsPerInfoType.internalValue = value;
  }
  public resetMaxFindingsPerInfoType() {
    this._maxFindingsPerInfoType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFindingsPerInfoTypeInput() {
    return this._maxFindingsPerInfoType.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#score DataLossPreventionJobTrigger#score}
  */
  readonly score: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
  /**
  * Version of the information type to use. By default, the version is set to stable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#version DataLossPreventionJobTrigger#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sensitivity_score DataLossPreventionJobTrigger#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScore;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes | cdktf.IResolvable): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesOutputReference {
    return new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
  /**
  * A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#path DataLossPreventionJobTrigger#path}
  */
  readonly path: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._path = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._path = value.path;
    }
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct {
  /**
  * Words or phrases defining the dictionary. The dictionary must contain at least one
  * phrase and every phrase must contain at least 2 characters that are letters or digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#words DataLossPreventionJobTrigger#words}
  */
  readonly words: string[];
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    words: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.words),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    words: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.words),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._words !== undefined) {
      hasAnyValues = true;
      internalValueResult.words = this._words;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._words = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._words = value.words;
    }
  }

  // words - computed: false, optional: false, required: true
  private _words?: string[]; 
  public get words() {
    return this.getListAttribute('words');
  }
  public set words(value: string[]) {
    this._words = value;
  }
  // Temporarily expose input value. Use with caution.
  public get wordsInput() {
    return this._words;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary {
  /**
  * cloud_storage_path block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#cloud_storage_path DataLossPreventionJobTrigger#cloud_storage_path}
  */
  readonly cloudStoragePath?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath;
  /**
  * word_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#word_list DataLossPreventionJobTrigger#word_list}
  */
  readonly wordList?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cloud_storage_path: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToTerraform(struct!.cloudStoragePath),
    word_list: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToTerraform(struct!.wordList),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cloud_storage_path: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathToHclTerraform(struct!.cloudStoragePath),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathList",
    },
    word_list: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructToHclTerraform(struct!.wordList),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cloudStoragePath?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudStoragePath = this._cloudStoragePath?.internalValue;
    }
    if (this._wordList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wordList = this._wordList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cloudStoragePath.internalValue = undefined;
      this._wordList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cloudStoragePath.internalValue = value.cloudStoragePath;
      this._wordList.internalValue = value.wordList;
    }
  }

  // cloud_storage_path - computed: false, optional: true, required: false
  private _cloudStoragePath = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(this, "cloud_storage_path");
  public get cloudStoragePath() {
    return this._cloudStoragePath;
  }
  public putCloudStoragePath(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath) {
    this._cloudStoragePath.internalValue = value;
  }
  public resetCloudStoragePath() {
    this._cloudStoragePath.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudStoragePathInput() {
    return this._cloudStoragePath.internalValue;
  }

  // word_list - computed: false, optional: true, required: false
  private _wordList = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStructOutputReference(this, "word_list");
  public get wordList() {
    return this._wordList;
  }
  public putWordList(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryWordListStruct) {
    this._wordList.internalValue = value;
  }
  public resetWordList() {
    this._wordList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wordListInput() {
    return this._wordList.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
  * the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#group_indexes DataLossPreventionJobTrigger#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
  * (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#pattern DataLossPreventionJobTrigger#pattern}
  */
  readonly pattern?: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity {
  /**
  * Number of characters after the finding to consider. Either this or window_before must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#window_after DataLossPreventionJobTrigger#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider. Either this or window_after must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#window_before DataLossPreventionJobTrigger#window_before}
  */
  readonly windowBefore?: number;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_after: {
      value: cdktf.numberToHclTerraform(struct!.windowAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_before: {
      value: cdktf.numberToHclTerraform(struct!.windowBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowAfter = this._windowAfter;
    }
    if (this._windowBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBefore = this._windowBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowAfter = undefined;
      this._windowBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowAfter = value.windowAfter;
      this._windowBefore = value.windowBefore;
    }
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter;
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword {
  /**
  * hotword_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#hotword_regex DataLossPreventionJobTrigger#hotword_regex}
  */
  readonly hotwordRegex?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex;
  /**
  * proximity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#proximity DataLossPreventionJobTrigger#proximity}
  */
  readonly proximity?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hotword_regex: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToTerraform(struct!.hotwordRegex),
    proximity: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToTerraform(struct!.proximity),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hotword_regex: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexToHclTerraform(struct!.hotwordRegex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexList",
    },
    proximity: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityToHclTerraform(struct!.proximity),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hotwordRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRegex = this._hotwordRegex?.internalValue;
    }
    if (this._proximity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hotwordRegex.internalValue = undefined;
      this._proximity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hotwordRegex.internalValue = value.hotwordRegex;
      this._proximity.internalValue = value.proximity;
    }
  }

  // hotword_regex - computed: false, optional: true, required: false
  private _hotwordRegex = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegexOutputReference(this, "hotword_regex");
  public get hotwordRegex() {
    return this._hotwordRegex;
  }
  public putHotwordRegex(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordHotwordRegex) {
    this._hotwordRegex.internalValue = value;
  }
  public resetHotwordRegex() {
    this._hotwordRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex.internalValue;
  }

  // proximity - computed: false, optional: true, required: false
  private _proximity = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximityOutputReference(this, "proximity");
  public get proximity() {
    return this._proximity;
  }
  public putProximity(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordProximity) {
    this._proximity.internalValue = value;
  }
  public resetProximity() {
    this._proximity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore {
  /**
  * The sensitivity score applied to the resource. Possible values: ["SENSITIVITY_LOW", "SENSITIVITY_MODERATE", "SENSITIVITY_HIGH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#score DataLossPreventionJobTrigger#score}
  */
  readonly score: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    score: cdktf.stringToTerraform(struct!.score),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    score: {
      value: cdktf.stringToHclTerraform(struct!.score),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._score !== undefined) {
      hasAnyValues = true;
      internalValueResult.score = this._score;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._score = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._score = value.score;
    }
  }

  // score - computed: false, optional: false, required: true
  private _score?: string; 
  public get score() {
    return this.getStringAttribute('score');
  }
  public set score(value: string) {
    this._score = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scoreInput() {
    return this._score;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
  /**
  * Name of the information type. Either a name of your choosing when creating a CustomInfoType, or one of the names listed
  * at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
  /**
  * Version of the information type to use. By default, the version is set to stable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#version DataLossPreventionJobTrigger#version}
  */
  readonly version?: string;
  /**
  * sensitivity_score block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sensitivity_score DataLossPreventionJobTrigger#sensitivity_score}
  */
  readonly sensitivityScore?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.stringToTerraform(struct!.version),
    sensitivity_score: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToTerraform(struct!.sensitivityScore),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable): any {
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
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sensitivity_score: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreToHclTerraform(struct!.sensitivityScore),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    if (this._sensitivityScore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sensitivityScore = this._sensitivityScore?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._version = undefined;
      this._sensitivityScore.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._version = value.version;
      this._sensitivityScore.internalValue = value.sensitivityScore;
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

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // sensitivity_score - computed: false, optional: true, required: false
  private _sensitivityScore = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScoreOutputReference(this, "sensitivity_score");
  public get sensitivityScore() {
    return this._sensitivityScore;
  }
  public putSensitivityScore(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesSensitivityScore) {
    this._sensitivityScore.internalValue = value;
  }
  public resetSensitivityScore() {
    this._sensitivityScore.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sensitivityScoreInput() {
    return this._sensitivityScore.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference {
    return new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#info_types DataLossPreventionJobTrigger#info_types}
  */
  readonly infoTypes: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToTerraform, true)(struct!.infoTypes),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._infoTypes.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._infoTypes.internalValue = value.infoTypes;
    }
  }

  // info_types - computed: false, optional: false, required: true
  private _infoTypes = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegex {
  /**
  * The index of the submatch to extract as findings. When not specified, the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#group_indexes DataLossPreventionJobTrigger#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression.
  * Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#pattern DataLossPreventionJobTrigger#pattern}
  */
  readonly pattern: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: false, required: true
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRule {
  /**
  * How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#matching_type DataLossPreventionJobTrigger#matching_type}
  */
  readonly matchingType: string;
  /**
  * dictionary block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#dictionary DataLossPreventionJobTrigger#dictionary}
  */
  readonly dictionary?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary;
  /**
  * exclude_by_hotword block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#exclude_by_hotword DataLossPreventionJobTrigger#exclude_by_hotword}
  */
  readonly excludeByHotword?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword;
  /**
  * exclude_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#exclude_info_types DataLossPreventionJobTrigger#exclude_info_types}
  */
  readonly excludeInfoTypes?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes;
  /**
  * regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#regex DataLossPreventionJobTrigger#regex}
  */
  readonly regex?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegex;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    matching_type: cdktf.stringToTerraform(struct!.matchingType),
    dictionary: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryToTerraform(struct!.dictionary),
    exclude_by_hotword: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToTerraform(struct!.excludeByHotword),
    exclude_info_types: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToTerraform(struct!.excludeInfoTypes),
    regex: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexToTerraform(struct!.regex),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    matching_type: {
      value: cdktf.stringToHclTerraform(struct!.matchingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dictionary: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryToHclTerraform(struct!.dictionary),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryList",
    },
    exclude_by_hotword: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordToHclTerraform(struct!.excludeByHotword),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordList",
    },
    exclude_info_types: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesToHclTerraform(struct!.excludeInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesList",
    },
    regex: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexToHclTerraform(struct!.regex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchingType = this._matchingType;
    }
    if (this._dictionary?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dictionary = this._dictionary?.internalValue;
    }
    if (this._excludeByHotword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeByHotword = this._excludeByHotword?.internalValue;
    }
    if (this._excludeInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes?.internalValue;
    }
    if (this._regex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.regex = this._regex?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._matchingType = undefined;
      this._dictionary.internalValue = undefined;
      this._excludeByHotword.internalValue = undefined;
      this._excludeInfoTypes.internalValue = undefined;
      this._regex.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._matchingType = value.matchingType;
      this._dictionary.internalValue = value.dictionary;
      this._excludeByHotword.internalValue = value.excludeByHotword;
      this._excludeInfoTypes.internalValue = value.excludeInfoTypes;
      this._regex.internalValue = value.regex;
    }
  }

  // matching_type - computed: false, optional: false, required: true
  private _matchingType?: string; 
  public get matchingType() {
    return this.getStringAttribute('matching_type');
  }
  public set matchingType(value: string) {
    this._matchingType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchingTypeInput() {
    return this._matchingType;
  }

  // dictionary - computed: false, optional: true, required: false
  private _dictionary = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(this, "dictionary");
  public get dictionary() {
    return this._dictionary;
  }
  public putDictionary(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleDictionary) {
    this._dictionary.internalValue = value;
  }
  public resetDictionary() {
    this._dictionary.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryInput() {
    return this._dictionary.internalValue;
  }

  // exclude_by_hotword - computed: false, optional: true, required: false
  private _excludeByHotword = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotwordOutputReference(this, "exclude_by_hotword");
  public get excludeByHotword() {
    return this._excludeByHotword;
  }
  public putExcludeByHotword(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeByHotword) {
    this._excludeByHotword.internalValue = value;
  }
  public resetExcludeByHotword() {
    this._excludeByHotword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeByHotwordInput() {
    return this._excludeByHotword.internalValue;
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(this, "exclude_info_types");
  public get excludeInfoTypes() {
    return this._excludeInfoTypes;
  }
  public putExcludeInfoTypes(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes) {
    this._excludeInfoTypes.internalValue = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes.internalValue;
  }

  // regex - computed: false, optional: true, required: false
  private _regex = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(this, "regex");
  public get regex() {
    return this._regex;
  }
  public putRegex(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleRegex) {
    this._regex.internalValue = value;
  }
  public resetRegex() {
    this._regex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
  /**
  * The index of the submatch to extract as findings. When not specified,
  * the entire match is returned. No more than 3 may be included.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#group_indexes DataLossPreventionJobTrigger#group_indexes}
  */
  readonly groupIndexes?: number[];
  /**
  * Pattern defining the regular expression. Its syntax
  * (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#pattern DataLossPreventionJobTrigger#pattern}
  */
  readonly pattern?: string;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_indexes: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.groupIndexes),
    pattern: cdktf.stringToTerraform(struct!.pattern),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_indexes: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.groupIndexes),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    pattern: {
      value: cdktf.stringToHclTerraform(struct!.pattern),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIndexes !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIndexes = this._groupIndexes;
    }
    if (this._pattern !== undefined) {
      hasAnyValues = true;
      internalValueResult.pattern = this._pattern;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupIndexes = undefined;
      this._pattern = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupIndexes = value.groupIndexes;
      this._pattern = value.pattern;
    }
  }

  // group_indexes - computed: false, optional: true, required: false
  private _groupIndexes?: number[]; 
  public get groupIndexes() {
    return this.getNumberListAttribute('group_indexes');
  }
  public set groupIndexes(value: number[]) {
    this._groupIndexes = value;
  }
  public resetGroupIndexes() {
    this._groupIndexes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIndexesInput() {
    return this._groupIndexes;
  }

  // pattern - computed: false, optional: true, required: false
  private _pattern?: string; 
  public get pattern() {
    return this.getStringAttribute('pattern');
  }
  public set pattern(value: string) {
    this._pattern = value;
  }
  public resetPattern() {
    this._pattern = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternInput() {
    return this._pattern;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
  /**
  * Set the likelihood of a finding to a fixed value. Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#fixed_likelihood DataLossPreventionJobTrigger#fixed_likelihood}
  */
  readonly fixedLikelihood?: string;
  /**
  * Increase or decrease the likelihood by the specified number of levels. For example,
  * if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
  * then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
  * Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
  * adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
  * will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#relative_likelihood DataLossPreventionJobTrigger#relative_likelihood}
  */
  readonly relativeLikelihood?: number;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fixed_likelihood: cdktf.stringToTerraform(struct!.fixedLikelihood),
    relative_likelihood: cdktf.numberToTerraform(struct!.relativeLikelihood),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fixed_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.fixedLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relative_likelihood: {
      value: cdktf.numberToHclTerraform(struct!.relativeLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fixedLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedLikelihood = this._fixedLikelihood;
    }
    if (this._relativeLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativeLikelihood = this._relativeLikelihood;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fixedLikelihood = undefined;
      this._relativeLikelihood = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fixedLikelihood = value.fixedLikelihood;
      this._relativeLikelihood = value.relativeLikelihood;
    }
  }

  // fixed_likelihood - computed: false, optional: true, required: false
  private _fixedLikelihood?: string; 
  public get fixedLikelihood() {
    return this.getStringAttribute('fixed_likelihood');
  }
  public set fixedLikelihood(value: string) {
    this._fixedLikelihood = value;
  }
  public resetFixedLikelihood() {
    this._fixedLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedLikelihoodInput() {
    return this._fixedLikelihood;
  }

  // relative_likelihood - computed: false, optional: true, required: false
  private _relativeLikelihood?: number; 
  public get relativeLikelihood() {
    return this.getNumberAttribute('relative_likelihood');
  }
  public set relativeLikelihood(value: number) {
    this._relativeLikelihood = value;
  }
  public resetRelativeLikelihood() {
    this._relativeLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeLikelihoodInput() {
    return this._relativeLikelihood;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximity {
  /**
  * Number of characters after the finding to consider. Either this or window_before must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#window_after DataLossPreventionJobTrigger#window_after}
  */
  readonly windowAfter?: number;
  /**
  * Number of characters before the finding to consider. Either this or window_after must be specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#window_before DataLossPreventionJobTrigger#window_before}
  */
  readonly windowBefore?: number;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    window_after: cdktf.numberToTerraform(struct!.windowAfter),
    window_before: cdktf.numberToTerraform(struct!.windowBefore),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    window_after: {
      value: cdktf.numberToHclTerraform(struct!.windowAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_before: {
      value: cdktf.numberToHclTerraform(struct!.windowBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._windowAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowAfter = this._windowAfter;
    }
    if (this._windowBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowBefore = this._windowBefore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._windowAfter = undefined;
      this._windowBefore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._windowAfter = value.windowAfter;
      this._windowBefore = value.windowBefore;
    }
  }

  // window_after - computed: false, optional: true, required: false
  private _windowAfter?: number; 
  public get windowAfter() {
    return this.getNumberAttribute('window_after');
  }
  public set windowAfter(value: number) {
    this._windowAfter = value;
  }
  public resetWindowAfter() {
    this._windowAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowAfterInput() {
    return this._windowAfter;
  }

  // window_before - computed: false, optional: true, required: false
  private _windowBefore?: number; 
  public get windowBefore() {
    return this.getNumberAttribute('window_before');
  }
  public set windowBefore(value: number) {
    this._windowBefore = value;
  }
  public resetWindowBefore() {
    this._windowBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowBeforeInput() {
    return this._windowBefore;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRule {
  /**
  * hotword_regex block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#hotword_regex DataLossPreventionJobTrigger#hotword_regex}
  */
  readonly hotwordRegex?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex;
  /**
  * likelihood_adjustment block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#likelihood_adjustment DataLossPreventionJobTrigger#likelihood_adjustment}
  */
  readonly likelihoodAdjustment?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment;
  /**
  * proximity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#proximity DataLossPreventionJobTrigger#proximity}
  */
  readonly proximity?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximity;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hotword_regex: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexToTerraform(struct!.hotwordRegex),
    likelihood_adjustment: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToTerraform(struct!.likelihoodAdjustment),
    proximity: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityToTerraform(struct!.proximity),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hotword_regex: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexToHclTerraform(struct!.hotwordRegex),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexList",
    },
    likelihood_adjustment: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentToHclTerraform(struct!.likelihoodAdjustment),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentList",
    },
    proximity: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityToHclTerraform(struct!.proximity),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hotwordRegex?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRegex = this._hotwordRegex?.internalValue;
    }
    if (this._likelihoodAdjustment?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.likelihoodAdjustment = this._likelihoodAdjustment?.internalValue;
    }
    if (this._proximity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.proximity = this._proximity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hotwordRegex.internalValue = undefined;
      this._likelihoodAdjustment.internalValue = undefined;
      this._proximity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hotwordRegex.internalValue = value.hotwordRegex;
      this._likelihoodAdjustment.internalValue = value.likelihoodAdjustment;
      this._proximity.internalValue = value.proximity;
    }
  }

  // hotword_regex - computed: false, optional: true, required: false
  private _hotwordRegex = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(this, "hotword_regex");
  public get hotwordRegex() {
    return this._hotwordRegex;
  }
  public putHotwordRegex(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleHotwordRegex) {
    this._hotwordRegex.internalValue = value;
  }
  public resetHotwordRegex() {
    this._hotwordRegex.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRegexInput() {
    return this._hotwordRegex.internalValue;
  }

  // likelihood_adjustment - computed: false, optional: true, required: false
  private _likelihoodAdjustment = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(this, "likelihood_adjustment");
  public get likelihoodAdjustment() {
    return this._likelihoodAdjustment;
  }
  public putLikelihoodAdjustment(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment) {
    this._likelihoodAdjustment.internalValue = value;
  }
  public resetLikelihoodAdjustment() {
    this._likelihoodAdjustment.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get likelihoodAdjustmentInput() {
    return this._likelihoodAdjustment.internalValue;
  }

  // proximity - computed: false, optional: true, required: false
  private _proximity = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(this, "proximity");
  public get proximity() {
    return this._proximity;
  }
  public putProximity(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleProximity) {
    this._proximity.internalValue = value;
  }
  public resetProximity() {
    this._proximity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proximityInput() {
    return this._proximity.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules {
  /**
  * exclusion_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#exclusion_rule DataLossPreventionJobTrigger#exclusion_rule}
  */
  readonly exclusionRule?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRule;
  /**
  * hotword_rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#hotword_rule DataLossPreventionJobTrigger#hotword_rule}
  */
  readonly hotwordRule?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRule;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclusion_rule: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleToTerraform(struct!.exclusionRule),
    hotword_rule: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleToTerraform(struct!.hotwordRule),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclusion_rule: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleToHclTerraform(struct!.exclusionRule),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleList",
    },
    hotword_rule: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleToHclTerraform(struct!.hotwordRule),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclusionRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclusionRule = this._exclusionRule?.internalValue;
    }
    if (this._hotwordRule?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hotwordRule = this._hotwordRule?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = undefined;
      this._hotwordRule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclusionRule.internalValue = value.exclusionRule;
      this._hotwordRule.internalValue = value.hotwordRule;
    }
  }

  // exclusion_rule - computed: false, optional: true, required: false
  private _exclusionRule = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRuleOutputReference(this, "exclusion_rule");
  public get exclusionRule() {
    return this._exclusionRule;
  }
  public putExclusionRule(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesExclusionRule) {
    this._exclusionRule.internalValue = value;
  }
  public resetExclusionRule() {
    this._exclusionRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusionRuleInput() {
    return this._exclusionRule.internalValue;
  }

  // hotword_rule - computed: false, optional: true, required: false
  private _hotwordRule = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRuleOutputReference(this, "hotword_rule");
  public get hotwordRule() {
    return this._hotwordRule;
  }
  public putHotwordRule(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesHotwordRule) {
    this._hotwordRule.internalValue = value;
  }
  public resetHotwordRule() {
    this._hotwordRule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hotwordRuleInput() {
    return this._hotwordRule.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesOutputReference {
    return new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet {
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#info_types DataLossPreventionJobTrigger#info_types}
  */
  readonly infoTypes?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#rules DataLossPreventionJobTrigger#rules}
  */
  readonly rules: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules[] | cdktf.IResolvable;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info_types: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesToTerraform, true)(struct!.infoTypes),
    rules: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesToTerraform, true)(struct!.rules),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesList",
    },
    rules: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesToHclTerraform, true)(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._infoTypes.internalValue = value.infoTypes;
      this._rules.internalValue = value.rules;
    }
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetOutputReference {
    return new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobInspectConfig {
  /**
  * When true, excludes type information of the findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#exclude_info_types DataLossPreventionJobTrigger#exclude_info_types}
  */
  readonly excludeInfoTypes?: boolean | cdktf.IResolvable;
  /**
  * When true, a contextual quote from the data that triggered a finding is included in the response.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#include_quote DataLossPreventionJobTrigger#include_quote}
  */
  readonly includeQuote?: boolean | cdktf.IResolvable;
  /**
  * Only returns findings equal or above this threshold. See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#min_likelihood DataLossPreventionJobTrigger#min_likelihood}
  */
  readonly minLikelihood?: string;
  /**
  * custom_info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#custom_info_types DataLossPreventionJobTrigger#custom_info_types}
  */
  readonly customInfoTypes?: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes[] | cdktf.IResolvable;
  /**
  * info_types block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#info_types DataLossPreventionJobTrigger#info_types}
  */
  readonly infoTypes?: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes[] | cdktf.IResolvable;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#limits DataLossPreventionJobTrigger#limits}
  */
  readonly limits?: DataLossPreventionJobTriggerInspectJobInspectConfigLimits;
  /**
  * rule_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#rule_set DataLossPreventionJobTrigger#rule_set}
  */
  readonly ruleSet?: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet[] | cdktf.IResolvable;
}

export function dataLossPreventionJobTriggerInspectJobInspectConfigToTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_info_types: cdktf.booleanToTerraform(struct!.excludeInfoTypes),
    include_quote: cdktf.booleanToTerraform(struct!.includeQuote),
    min_likelihood: cdktf.stringToTerraform(struct!.minLikelihood),
    custom_info_types: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesToTerraform, true)(struct!.customInfoTypes),
    info_types: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesToTerraform, true)(struct!.infoTypes),
    limits: dataLossPreventionJobTriggerInspectJobInspectConfigLimitsToTerraform(struct!.limits),
    rule_set: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetToTerraform, true)(struct!.ruleSet),
  }
}


export function dataLossPreventionJobTriggerInspectJobInspectConfigToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobInspectConfigOutputReference | DataLossPreventionJobTriggerInspectJobInspectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_info_types: {
      value: cdktf.booleanToHclTerraform(struct!.excludeInfoTypes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    include_quote: {
      value: cdktf.booleanToHclTerraform(struct!.includeQuote),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_likelihood: {
      value: cdktf.stringToHclTerraform(struct!.minLikelihood),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesToHclTerraform, true)(struct!.customInfoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesList",
    },
    info_types: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesToHclTerraform, true)(struct!.infoTypes),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesList",
    },
    limits: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigLimitsList",
    },
    rule_set: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobInspectConfigRuleSetToHclTerraform, true)(struct!.ruleSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobInspectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobInspectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeInfoTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeInfoTypes = this._excludeInfoTypes;
    }
    if (this._includeQuote !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeQuote = this._includeQuote;
    }
    if (this._minLikelihood !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLikelihood = this._minLikelihood;
    }
    if (this._customInfoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customInfoTypes = this._customInfoTypes?.internalValue;
    }
    if (this._infoTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.infoTypes = this._infoTypes?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._ruleSet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleSet = this._ruleSet?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobInspectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeInfoTypes = undefined;
      this._includeQuote = undefined;
      this._minLikelihood = undefined;
      this._customInfoTypes.internalValue = undefined;
      this._infoTypes.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._ruleSet.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeInfoTypes = value.excludeInfoTypes;
      this._includeQuote = value.includeQuote;
      this._minLikelihood = value.minLikelihood;
      this._customInfoTypes.internalValue = value.customInfoTypes;
      this._infoTypes.internalValue = value.infoTypes;
      this._limits.internalValue = value.limits;
      this._ruleSet.internalValue = value.ruleSet;
    }
  }

  // exclude_info_types - computed: false, optional: true, required: false
  private _excludeInfoTypes?: boolean | cdktf.IResolvable; 
  public get excludeInfoTypes() {
    return this.getBooleanAttribute('exclude_info_types');
  }
  public set excludeInfoTypes(value: boolean | cdktf.IResolvable) {
    this._excludeInfoTypes = value;
  }
  public resetExcludeInfoTypes() {
    this._excludeInfoTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInfoTypesInput() {
    return this._excludeInfoTypes;
  }

  // include_quote - computed: false, optional: true, required: false
  private _includeQuote?: boolean | cdktf.IResolvable; 
  public get includeQuote() {
    return this.getBooleanAttribute('include_quote');
  }
  public set includeQuote(value: boolean | cdktf.IResolvable) {
    this._includeQuote = value;
  }
  public resetIncludeQuote() {
    this._includeQuote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeQuoteInput() {
    return this._includeQuote;
  }

  // min_likelihood - computed: false, optional: true, required: false
  private _minLikelihood?: string; 
  public get minLikelihood() {
    return this.getStringAttribute('min_likelihood');
  }
  public set minLikelihood(value: string) {
    this._minLikelihood = value;
  }
  public resetMinLikelihood() {
    this._minLikelihood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLikelihoodInput() {
    return this._minLikelihood;
  }

  // custom_info_types - computed: false, optional: true, required: false
  private _customInfoTypes = new DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypesList(this, "custom_info_types", false);
  public get customInfoTypes() {
    return this._customInfoTypes;
  }
  public putCustomInfoTypes(value: DataLossPreventionJobTriggerInspectJobInspectConfigCustomInfoTypes[] | cdktf.IResolvable) {
    this._customInfoTypes.internalValue = value;
  }
  public resetCustomInfoTypes() {
    this._customInfoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInfoTypesInput() {
    return this._customInfoTypes.internalValue;
  }

  // info_types - computed: false, optional: true, required: false
  private _infoTypes = new DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypesList(this, "info_types", false);
  public get infoTypes() {
    return this._infoTypes;
  }
  public putInfoTypes(value: DataLossPreventionJobTriggerInspectJobInspectConfigInfoTypes[] | cdktf.IResolvable) {
    this._infoTypes.internalValue = value;
  }
  public resetInfoTypes() {
    this._infoTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoTypesInput() {
    return this._infoTypes.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataLossPreventionJobTriggerInspectJobInspectConfigLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataLossPreventionJobTriggerInspectJobInspectConfigLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // rule_set - computed: false, optional: true, required: false
  private _ruleSet = new DataLossPreventionJobTriggerInspectJobInspectConfigRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
  public putRuleSet(value: DataLossPreventionJobTriggerInspectJobInspectConfigRuleSet[] | cdktf.IResolvable) {
    this._ruleSet.internalValue = value;
  }
  public resetRuleSet() {
    this._ruleSet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleSetInput() {
    return this._ruleSet.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields {
  /**
  * Name describing the field excluded from scanning.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsOutputReference {
    return new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields {
  /**
  * Name of a BigQuery field to be returned with the findings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference {
    return new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields {
  /**
  * Name describing the field to which scanning is limited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsOutputReference {
    return new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference {
  /**
  * The dataset ID of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#dataset_id DataLossPreventionJobTrigger#dataset_id}
  */
  readonly datasetId: string;
  /**
  * The Google Cloud Platform project ID of the project containing the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}
  */
  readonly projectId: string;
  /**
  * The name of the table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#table_id DataLossPreventionJobTrigger#table_id}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference): any {
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
  * Max number of rows to scan. If the table has more rows than this value, the rest of the rows are omitted.
  * If not set, or if set to 0, all rows will be scanned. Only one of rowsLimit and rowsLimitPercent can be
  * specified. Cannot be used in conjunction with TimespanConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#rows_limit DataLossPreventionJobTrigger#rows_limit}
  */
  readonly rowsLimit?: number;
  /**
  * Max percentage of rows to scan. The rest are omitted. The number of rows scanned is rounded down.
  * Must be between 0 and 100, inclusively. Both 0 and 100 means no limit. Defaults to 0. Only one of
  * rowsLimit and rowsLimitPercent can be specified. Cannot be used in conjunction with TimespanConfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#rows_limit_percent DataLossPreventionJobTrigger#rows_limit_percent}
  */
  readonly rowsLimitPercent?: number;
  /**
  * How to sample rows if not all rows are scanned. Meaningful only when used in conjunction with either
  * rowsLimit or rowsLimitPercent. If not specified, rows are scanned in the order BigQuery reads them.
  * If TimespanConfig is set, set this to an empty string to avoid using the default value. Default value: "TOP" Possible values: ["TOP", "RANDOM_START"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sample_method DataLossPreventionJobTrigger#sample_method}
  */
  readonly sampleMethod?: string;
  /**
  * excluded_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#excluded_fields DataLossPreventionJobTrigger#excluded_fields}
  */
  readonly excludedFields?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields[] | cdktf.IResolvable;
  /**
  * identifying_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#identifying_fields DataLossPreventionJobTrigger#identifying_fields}
  */
  readonly identifyingFields?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[] | cdktf.IResolvable;
  /**
  * included_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#included_fields DataLossPreventionJobTrigger#included_fields}
  */
  readonly includedFields?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields[] | cdktf.IResolvable;
  /**
  * table_reference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#table_reference DataLossPreventionJobTrigger#table_reference}
  */
  readonly tableReference: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReference;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rows_limit: cdktf.numberToTerraform(struct!.rowsLimit),
    rows_limit_percent: cdktf.numberToTerraform(struct!.rowsLimitPercent),
    sample_method: cdktf.stringToTerraform(struct!.sampleMethod),
    excluded_fields: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsToTerraform, true)(struct!.excludedFields),
    identifying_fields: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsToTerraform, true)(struct!.identifyingFields),
    included_fields: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsToTerraform, true)(struct!.includedFields),
    table_reference: dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceToTerraform(struct!.tableReference),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rows_limit: {
      value: cdktf.numberToHclTerraform(struct!.rowsLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rows_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.rowsLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_method: {
      value: cdktf.stringToHclTerraform(struct!.sampleMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    excluded_fields: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsToHclTerraform, true)(struct!.excludedFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsList",
    },
    identifying_fields: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsToHclTerraform, true)(struct!.identifyingFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList",
    },
    included_fields: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsToHclTerraform, true)(struct!.includedFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsList",
    },
    table_reference: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceToHclTerraform(struct!.tableReference),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsTableReferenceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._rowsLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowsLimit = this._rowsLimit;
    }
    if (this._rowsLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rowsLimitPercent = this._rowsLimitPercent;
    }
    if (this._sampleMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleMethod = this._sampleMethod;
    }
    if (this._excludedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludedFields = this._excludedFields?.internalValue;
    }
    if (this._identifyingFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifyingFields = this._identifyingFields?.internalValue;
    }
    if (this._includedFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.includedFields = this._includedFields?.internalValue;
    }
    if (this._tableReference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableReference = this._tableReference?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rowsLimit = undefined;
      this._rowsLimitPercent = undefined;
      this._sampleMethod = undefined;
      this._excludedFields.internalValue = undefined;
      this._identifyingFields.internalValue = undefined;
      this._includedFields.internalValue = undefined;
      this._tableReference.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rowsLimit = value.rowsLimit;
      this._rowsLimitPercent = value.rowsLimitPercent;
      this._sampleMethod = value.sampleMethod;
      this._excludedFields.internalValue = value.excludedFields;
      this._identifyingFields.internalValue = value.identifyingFields;
      this._includedFields.internalValue = value.includedFields;
      this._tableReference.internalValue = value.tableReference;
    }
  }

  // rows_limit - computed: false, optional: true, required: false
  private _rowsLimit?: number; 
  public get rowsLimit() {
    return this.getNumberAttribute('rows_limit');
  }
  public set rowsLimit(value: number) {
    this._rowsLimit = value;
  }
  public resetRowsLimit() {
    this._rowsLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsLimitInput() {
    return this._rowsLimit;
  }

  // rows_limit_percent - computed: false, optional: true, required: false
  private _rowsLimitPercent?: number; 
  public get rowsLimitPercent() {
    return this.getNumberAttribute('rows_limit_percent');
  }
  public set rowsLimitPercent(value: number) {
    this._rowsLimitPercent = value;
  }
  public resetRowsLimitPercent() {
    this._rowsLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsLimitPercentInput() {
    return this._rowsLimitPercent;
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

  // excluded_fields - computed: false, optional: true, required: false
  private _excludedFields = new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFieldsList(this, "excluded_fields", false);
  public get excludedFields() {
    return this._excludedFields;
  }
  public putExcludedFields(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsExcludedFields[] | cdktf.IResolvable) {
    this._excludedFields.internalValue = value;
  }
  public resetExcludedFields() {
    this._excludedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedFieldsInput() {
    return this._excludedFields.internalValue;
  }

  // identifying_fields - computed: false, optional: true, required: false
  private _identifyingFields = new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFieldsList(this, "identifying_fields", false);
  public get identifyingFields() {
    return this._identifyingFields;
  }
  public putIdentifyingFields(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIdentifyingFields[] | cdktf.IResolvable) {
    this._identifyingFields.internalValue = value;
  }
  public resetIdentifyingFields() {
    this._identifyingFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyingFieldsInput() {
    return this._identifyingFields.internalValue;
  }

  // included_fields - computed: false, optional: true, required: false
  private _includedFields = new DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFieldsList(this, "included_fields", false);
  public get includedFields() {
    return this._includedFields;
  }
  public putIncludedFields(value: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsIncludedFields[] | cdktf.IResolvable) {
    this._includedFields.internalValue = value;
  }
  public resetIncludedFields() {
    this._includedFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedFieldsInput() {
    return this._includedFields.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#bucket_name DataLossPreventionJobTrigger#bucket_name}
  */
  readonly bucketName: string;
  /**
  * A list of regular expressions matching file paths to exclude. All files in the bucket that match at
  * least one of these regular expressions will be excluded from the scan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#exclude_regex DataLossPreventionJobTrigger#exclude_regex}
  */
  readonly excludeRegex?: string[];
  /**
  * A list of regular expressions matching file paths to include. All files in the bucket
  * that match at least one of these regular expressions will be included in the set of files,
  * except for those that also match an item in excludeRegex. Leaving this field empty will
  * match all files by default (this is equivalent to including .* in the list)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#include_regex DataLossPreventionJobTrigger#include_regex}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bucket_name: {
      value: cdktf.stringToHclTerraform(struct!.bucketName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    exclude_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_regex: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeRegex),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * in the path is allowed.
  * 
  * If the url ends in a trailing slash, the bucket or directory represented by the url will be scanned
  * non-recursively (content in sub-directories will not be scanned). This means that 'gs://mybucket/' is
  * equivalent to 'gs://mybucket/*', and 'gs://mybucket/directory/' is equivalent to 'gs://mybucket/directory/*'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#url DataLossPreventionJobTrigger#url}
  */
  readonly url?: string;
  /**
  * regex_file_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#regex_file_set DataLossPreventionJobTrigger#regex_file_set}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    regex_file_set: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetToHclTerraform(struct!.regexFileSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetRegexFileSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * then the rest of the bytes are omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#bytes_limit_per_file DataLossPreventionJobTrigger#bytes_limit_per_file}
  */
  readonly bytesLimitPerFile?: number;
  /**
  * Max percentage of bytes to scan from a file. The rest are omitted. The number of bytes scanned is rounded down.
  * Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#bytes_limit_per_file_percent DataLossPreventionJobTrigger#bytes_limit_per_file_percent}
  */
  readonly bytesLimitPerFilePercent?: number;
  /**
  * List of file type groups to include in the scan. If empty, all files are scanned and available data
  * format processors are applied. In addition, the binary content of the selected files is always scanned as well.
  * Images are scanned only as binary if the specified region does not support image inspection and no fileTypes were specified. Possible values: ["BINARY_FILE", "TEXT_FILE", "IMAGE", "WORD", "PDF", "AVRO", "CSV", "TSV", "POWERPOINT", "EXCEL"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#file_types DataLossPreventionJobTrigger#file_types}
  */
  readonly fileTypes?: string[];
  /**
  * Limits the number of files to scan to this percentage of the input FileSet. Number of files scanned is rounded down.
  * Must be between 0 and 100, inclusively. Both 0 and 100 means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#files_limit_percent DataLossPreventionJobTrigger#files_limit_percent}
  */
  readonly filesLimitPercent?: number;
  /**
  * How to sample bytes if not all bytes are scanned. Meaningful only when used in conjunction with bytesLimitPerFile.
  * If not specified, scanning would start from the top. Possible values: ["TOP", "RANDOM_START"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#sample_method DataLossPreventionJobTrigger#sample_method}
  */
  readonly sampleMethod?: string;
  /**
  * file_set block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#file_set DataLossPreventionJobTrigger#file_set}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes_limit_per_file: {
      value: cdktf.numberToHclTerraform(struct!.bytesLimitPerFile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bytes_limit_per_file_percent: {
      value: cdktf.numberToHclTerraform(struct!.bytesLimitPerFilePercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    file_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fileTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    files_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.filesLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_method: {
      value: cdktf.stringToHclTerraform(struct!.sampleMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_set: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetToHclTerraform(struct!.fileSet),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsFileSetList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#namespace_id DataLossPreventionJobTrigger#namespace_id}
  */
  readonly namespaceId?: string;
  /**
  * The ID of the project to which the entities belong.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#project_id DataLossPreventionJobTrigger#project_id}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace_id: {
      value: cdktf.stringToHclTerraform(struct!.namespaceId),
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#kind DataLossPreventionJobTrigger#kind}
  */
  readonly kind: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKind;
  /**
  * partition_id block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#partition_id DataLossPreventionJobTrigger#partition_id}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kind: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindToHclTerraform(struct!.kind),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsKindList",
    },
    partition_id: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdToHclTerraform(struct!.partitionId),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsPartitionIdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
export interface DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields {
  /**
  * Name describing the field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
  */
  readonly name: string;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList extends cdktf.ComplexList {
  public internalValue? : DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[] | cdktf.IResolvable

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
  public get(index: number): DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference {
    return new DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions {
  /**
  * identifying_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#identifying_fields DataLossPreventionJobTrigger#identifying_fields}
  */
  readonly identifyingFields?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[] | cdktf.IResolvable;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifying_fields: cdktf.listMapper(dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsToTerraform, true)(struct!.identifyingFields),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifying_fields: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsToHclTerraform, true)(struct!.identifyingFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifyingFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifyingFields = this._identifyingFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._identifyingFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._identifyingFields.internalValue = value.identifyingFields;
    }
  }

  // identifying_fields - computed: false, optional: true, required: false
  private _identifyingFields = new DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFieldsList(this, "identifying_fields", false);
  public get identifyingFields() {
    return this._identifyingFields;
  }
  public putIdentifyingFields(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsIdentifyingFields[] | cdktf.IResolvable) {
    this._identifyingFields.internalValue = value;
  }
  public resetIdentifyingFields() {
    this._identifyingFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyingFieldsInput() {
    return this._identifyingFields.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions {
  /**
  * A short description of where the data is coming from. Will be stored once in the job. 256 max length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#description DataLossPreventionJobTrigger#description}
  */
  readonly description?: string;
  /**
  * To organize findings, these labels will be added to each finding.
  * 
  * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: '[a-z]([-a-z0-9]*[a-z0-9])?'.
  * 
  * Label values must be between 0 and 63 characters long and must conform to the regular expression '([a-z]([-a-z0-9]*[a-z0-9])?)?'.
  * 
  * No more than 10 labels can be associated with a given finding.
  * 
  * Examples:
  * * '"environment" : "production"'
  * * '"pipeline" : "etl"'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#labels DataLossPreventionJobTrigger#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * These are labels that each inspection request must include within their 'finding_labels' map. Request
  * may contain others, but any missing one of these will be rejected.
  * 
  * Label keys must be between 1 and 63 characters long and must conform to the following regular expression: '[a-z]([-a-z0-9]*[a-z0-9])?'.
  * 
  * No more than 10 keys can be required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#required_finding_label_keys DataLossPreventionJobTrigger#required_finding_label_keys}
  */
  readonly requiredFindingLabelKeys?: string[];
  /**
  * table_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#table_options DataLossPreventionJobTrigger#table_options}
  */
  readonly tableOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions;
}

export function dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsToTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    required_finding_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.requiredFindingLabelKeys),
    table_options: dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsToTerraform(struct!.tableOptions),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions): any {
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
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    required_finding_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.requiredFindingLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    table_options: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsToHclTerraform(struct!.tableOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._requiredFindingLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredFindingLabelKeys = this._requiredFindingLabelKeys;
    }
    if (this._tableOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableOptions = this._tableOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._labels = undefined;
      this._requiredFindingLabelKeys = undefined;
      this._tableOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._labels = value.labels;
      this._requiredFindingLabelKeys = value.requiredFindingLabelKeys;
      this._tableOptions.internalValue = value.tableOptions;
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

  // required_finding_label_keys - computed: false, optional: true, required: false
  private _requiredFindingLabelKeys?: string[]; 
  public get requiredFindingLabelKeys() {
    return this.getListAttribute('required_finding_label_keys');
  }
  public set requiredFindingLabelKeys(value: string[]) {
    this._requiredFindingLabelKeys = value;
  }
  public resetRequiredFindingLabelKeys() {
    this._requiredFindingLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredFindingLabelKeysInput() {
    return this._requiredFindingLabelKeys;
  }

  // table_options - computed: false, optional: true, required: false
  private _tableOptions = new DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptionsOutputReference(this, "table_options");
  public get tableOptions() {
    return this._tableOptions;
  }
  public putTableOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsTableOptions) {
    this._tableOptions.internalValue = value;
  }
  public resetTableOptions() {
    this._tableOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableOptionsInput() {
    return this._tableOptions.internalValue;
  }
}
export interface DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField {
  /**
  * Specification of the field containing the timestamp of scanned items. Used for data sources like Datastore and BigQuery.
  * 
  * For BigQuery: Required to filter out rows based on the given start and end times. If not specified and the table was
  * modified between the given start and end times, the entire table will be scanned. The valid data types of the timestamp
  * field are: INTEGER, DATE, TIMESTAMP, or DATETIME BigQuery column.
  * 
  * For Datastore. Valid data types of the timestamp field are: TIMESTAMP. Datastore entity will be scanned if the
  * timestamp property does not exist or its value is empty or invalid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#name DataLossPreventionJobTrigger#name}
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * scanning files that have not been modified since the last time the JobTrigger executed. This will
  * be based on the time of the execution of the last run of the JobTrigger or the timespan endTime
  * used in the last run of the JobTrigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#enable_auto_population_of_timespan_config DataLossPreventionJobTrigger#enable_auto_population_of_timespan_config}
  */
  readonly enableAutoPopulationOfTimespanConfig?: boolean | cdktf.IResolvable;
  /**
  * Exclude files, tables, or rows newer than this value. If not set, no upper time limit is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#end_time DataLossPreventionJobTrigger#end_time}
  */
  readonly endTime?: string;
  /**
  * Exclude files, tables, or rows older than this value. If not set, no lower time limit is applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#start_time DataLossPreventionJobTrigger#start_time}
  */
  readonly startTime?: string;
  /**
  * timestamp_field block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#timestamp_field DataLossPreventionJobTrigger#timestamp_field}
  */
  readonly timestampField?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField;
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


export function dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_auto_population_of_timespan_config: {
      value: cdktf.booleanToHclTerraform(struct!.enableAutoPopulationOfTimespanConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    end_time: {
      value: cdktf.stringToHclTerraform(struct!.endTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_time: {
      value: cdktf.stringToHclTerraform(struct!.startTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp_field: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldToHclTerraform(struct!.timestampField),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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

  // timestamp_field - computed: false, optional: true, required: false
  private _timestampField = new DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampFieldOutputReference(this, "timestamp_field");
  public get timestampField() {
    return this._timestampField;
  }
  public putTimestampField(value: DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigTimestampField) {
    this._timestampField.internalValue = value;
  }
  public resetTimestampField() {
    this._timestampField.internalValue = undefined;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#big_query_options DataLossPreventionJobTrigger#big_query_options}
  */
  readonly bigQueryOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptions;
  /**
  * cloud_storage_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#cloud_storage_options DataLossPreventionJobTrigger#cloud_storage_options}
  */
  readonly cloudStorageOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptions;
  /**
  * datastore_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#datastore_options DataLossPreventionJobTrigger#datastore_options}
  */
  readonly datastoreOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptions;
  /**
  * hybrid_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#hybrid_options DataLossPreventionJobTrigger#hybrid_options}
  */
  readonly hybridOptions?: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions;
  /**
  * timespan_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#timespan_config DataLossPreventionJobTrigger#timespan_config}
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
    hybrid_options: dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsToTerraform(struct!.hybridOptions),
    timespan_config: dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigToTerraform(struct!.timespanConfig),
  }
}


export function dataLossPreventionJobTriggerInspectJobStorageConfigToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobStorageConfigOutputReference | DataLossPreventionJobTriggerInspectJobStorageConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    big_query_options: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsToHclTerraform(struct!.bigQueryOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigBigQueryOptionsList",
    },
    cloud_storage_options: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsToHclTerraform(struct!.cloudStorageOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigCloudStorageOptionsList",
    },
    datastore_options: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsToHclTerraform(struct!.datastoreOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigDatastoreOptionsList",
    },
    hybrid_options: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsToHclTerraform(struct!.hybridOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsList",
    },
    timespan_config: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigToHclTerraform(struct!.timespanConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigTimespanConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._hybridOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridOptions = this._hybridOptions?.internalValue;
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
      this._hybridOptions.internalValue = undefined;
      this._timespanConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bigQueryOptions.internalValue = value.bigQueryOptions;
      this._cloudStorageOptions.internalValue = value.cloudStorageOptions;
      this._datastoreOptions.internalValue = value.datastoreOptions;
      this._hybridOptions.internalValue = value.hybridOptions;
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

  // hybrid_options - computed: false, optional: true, required: false
  private _hybridOptions = new DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptionsOutputReference(this, "hybrid_options");
  public get hybridOptions() {
    return this._hybridOptions;
  }
  public putHybridOptions(value: DataLossPreventionJobTriggerInspectJobStorageConfigHybridOptions) {
    this._hybridOptions.internalValue = value;
  }
  public resetHybridOptions() {
    this._hybridOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridOptionsInput() {
    return this._hybridOptions.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#inspect_template_name DataLossPreventionJobTrigger#inspect_template_name}
  */
  readonly inspectTemplateName?: string;
  /**
  * actions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#actions DataLossPreventionJobTrigger#actions}
  */
  readonly actions?: DataLossPreventionJobTriggerInspectJobActions[] | cdktf.IResolvable;
  /**
  * inspect_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#inspect_config DataLossPreventionJobTrigger#inspect_config}
  */
  readonly inspectConfig?: DataLossPreventionJobTriggerInspectJobInspectConfig;
  /**
  * storage_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#storage_config DataLossPreventionJobTrigger#storage_config}
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
    inspect_config: dataLossPreventionJobTriggerInspectJobInspectConfigToTerraform(struct!.inspectConfig),
    storage_config: dataLossPreventionJobTriggerInspectJobStorageConfigToTerraform(struct!.storageConfig),
  }
}


export function dataLossPreventionJobTriggerInspectJobToHclTerraform(struct?: DataLossPreventionJobTriggerInspectJobOutputReference | DataLossPreventionJobTriggerInspectJob): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inspect_template_name: {
      value: cdktf.stringToHclTerraform(struct!.inspectTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    actions: {
      value: cdktf.listMapperHcl(dataLossPreventionJobTriggerInspectJobActionsToHclTerraform, true)(struct!.actions),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobActionsList",
    },
    inspect_config: {
      value: dataLossPreventionJobTriggerInspectJobInspectConfigToHclTerraform(struct!.inspectConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobInspectConfigList",
    },
    storage_config: {
      value: dataLossPreventionJobTriggerInspectJobStorageConfigToHclTerraform(struct!.storageConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerInspectJobStorageConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._inspectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectConfig = this._inspectConfig?.internalValue;
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
      this._inspectConfig.internalValue = undefined;
      this._storageConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inspectTemplateName = value.inspectTemplateName;
      this._actions.internalValue = value.actions;
      this._inspectConfig.internalValue = value.inspectConfig;
      this._storageConfig.internalValue = value.storageConfig;
    }
  }

  // inspect_template_name - computed: false, optional: true, required: false
  private _inspectTemplateName?: string; 
  public get inspectTemplateName() {
    return this.getStringAttribute('inspect_template_name');
  }
  public set inspectTemplateName(value: string) {
    this._inspectTemplateName = value;
  }
  public resetInspectTemplateName() {
    this._inspectTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateNameInput() {
    return this._inspectTemplateName;
  }

  // actions - computed: false, optional: true, required: false
  private _actions = new DataLossPreventionJobTriggerInspectJobActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }
  public putActions(value: DataLossPreventionJobTriggerInspectJobActions[] | cdktf.IResolvable) {
    this._actions.internalValue = value;
  }
  public resetActions() {
    this._actions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionsInput() {
    return this._actions.internalValue;
  }

  // inspect_config - computed: false, optional: true, required: false
  private _inspectConfig = new DataLossPreventionJobTriggerInspectJobInspectConfigOutputReference(this, "inspect_config");
  public get inspectConfig() {
    return this._inspectConfig;
  }
  public putInspectConfig(value: DataLossPreventionJobTriggerInspectJobInspectConfig) {
    this._inspectConfig.internalValue = value;
  }
  public resetInspectConfig() {
    this._inspectConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectConfigInput() {
    return this._inspectConfig.internalValue;
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#create DataLossPreventionJobTrigger#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#delete DataLossPreventionJobTrigger#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#update DataLossPreventionJobTrigger#update}
  */
  readonly update?: string;
}

export function dataLossPreventionJobTriggerTimeoutsToTerraform(struct?: DataLossPreventionJobTriggerTimeouts | cdktf.IResolvable): any {
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


export function dataLossPreventionJobTriggerTimeoutsToHclTerraform(struct?: DataLossPreventionJobTriggerTimeouts | cdktf.IResolvable): any {
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

export class DataLossPreventionJobTriggerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
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
export interface DataLossPreventionJobTriggerTriggersManual {
}

export function dataLossPreventionJobTriggerTriggersManualToTerraform(struct?: DataLossPreventionJobTriggerTriggersManualOutputReference | DataLossPreventionJobTriggerTriggersManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataLossPreventionJobTriggerTriggersManualToHclTerraform(struct?: DataLossPreventionJobTriggerTriggersManualOutputReference | DataLossPreventionJobTriggerTriggersManual): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataLossPreventionJobTriggerTriggersManualOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataLossPreventionJobTriggerTriggersManual | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLossPreventionJobTriggerTriggersManual | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataLossPreventionJobTriggerTriggersSchedule {
  /**
  * With this option a job is started a regular periodic basis. For example: every day (86400 seconds).
  * 
  * A scheduled start time will be skipped if the previous execution has not ended when its scheduled time occurs.
  * 
  * This value must be set to a time duration greater than or equal to 1 day and can be no longer than 60 days.
  * 
  * A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#recurrence_period_duration DataLossPreventionJobTrigger#recurrence_period_duration}
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


export function dataLossPreventionJobTriggerTriggersScheduleToHclTerraform(struct?: DataLossPreventionJobTriggerTriggersScheduleOutputReference | DataLossPreventionJobTriggerTriggersSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recurrence_period_duration: {
      value: cdktf.stringToHclTerraform(struct!.recurrencePeriodDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
  * manual block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#manual DataLossPreventionJobTrigger#manual}
  */
  readonly manual?: DataLossPreventionJobTriggerTriggersManual;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#schedule DataLossPreventionJobTrigger#schedule}
  */
  readonly schedule?: DataLossPreventionJobTriggerTriggersSchedule;
}

export function dataLossPreventionJobTriggerTriggersToTerraform(struct?: DataLossPreventionJobTriggerTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manual: dataLossPreventionJobTriggerTriggersManualToTerraform(struct!.manual),
    schedule: dataLossPreventionJobTriggerTriggersScheduleToTerraform(struct!.schedule),
  }
}


export function dataLossPreventionJobTriggerTriggersToHclTerraform(struct?: DataLossPreventionJobTriggerTriggers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manual: {
      value: dataLossPreventionJobTriggerTriggersManualToHclTerraform(struct!.manual),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerTriggersManualList",
    },
    schedule: {
      value: dataLossPreventionJobTriggerTriggersScheduleToHclTerraform(struct!.schedule),
      isBlock: true,
      type: "list",
      storageClassType: "DataLossPreventionJobTriggerTriggersScheduleList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
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
    if (this._manual?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.manual = this._manual?.internalValue;
    }
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
      this._manual.internalValue = undefined;
      this._schedule.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manual.internalValue = value.manual;
      this._schedule.internalValue = value.schedule;
    }
  }

  // manual - computed: false, optional: true, required: false
  private _manual = new DataLossPreventionJobTriggerTriggersManualOutputReference(this, "manual");
  public get manual() {
    return this._manual;
  }
  public putManual(value: DataLossPreventionJobTriggerTriggersManual) {
    this._manual.internalValue = value;
  }
  public resetManual() {
    this._manual.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualInput() {
    return this._manual.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger google_data_loss_prevention_job_trigger}
*/
export class DataLossPreventionJobTrigger extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_loss_prevention_job_trigger";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLossPreventionJobTrigger resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLossPreventionJobTrigger to import
  * @param importFromId The id of the existing DataLossPreventionJobTrigger that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLossPreventionJobTrigger to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_data_loss_prevention_job_trigger", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.14.0/docs/resources/data_loss_prevention_job_trigger google_data_loss_prevention_job_trigger} Resource
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
        providerVersion: '6.14.0',
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
    this._description = config.description;
    this._displayName = config.displayName;
    this._id = config.id;
    this._parent = config.parent;
    this._status = config.status;
    this._triggerId = config.triggerId;
    this._inspectJob.internalValue = config.inspectJob;
    this._timeouts.internalValue = config.timeouts;
    this._triggers.internalValue = config.triggers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // trigger_id - computed: true, optional: true, required: false
  private _triggerId?: string; 
  public get triggerId() {
    return this.getStringAttribute('trigger_id');
  }
  public set triggerId(value: string) {
    this._triggerId = value;
  }
  public resetTriggerId() {
    this._triggerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerIdInput() {
    return this._triggerId;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
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
      trigger_id: cdktf.stringToTerraform(this._triggerId),
      inspect_job: dataLossPreventionJobTriggerInspectJobToTerraform(this._inspectJob.internalValue),
      timeouts: dataLossPreventionJobTriggerTimeoutsToTerraform(this._timeouts.internalValue),
      triggers: cdktf.listMapper(dataLossPreventionJobTriggerTriggersToTerraform, true)(this._triggers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_id: {
        value: cdktf.stringToHclTerraform(this._triggerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      inspect_job: {
        value: dataLossPreventionJobTriggerInspectJobToHclTerraform(this._inspectJob.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionJobTriggerInspectJobList",
      },
      timeouts: {
        value: dataLossPreventionJobTriggerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataLossPreventionJobTriggerTimeouts",
      },
      triggers: {
        value: cdktf.listMapperHcl(dataLossPreventionJobTriggerTriggersToHclTerraform, true)(this._triggers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLossPreventionJobTriggerTriggersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
