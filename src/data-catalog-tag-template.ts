// https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogTagTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for this template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#display_name DataCatalogTagTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#force_delete DataCatalogTagTemplate#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#project DataCatalogTagTemplate#project}
  */
  readonly project?: string;
  /**
  * Template location region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#region DataCatalogTagTemplate#region}
  */
  readonly region?: string;
  /**
  * The id of the tag template to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#tag_template_id DataCatalogTagTemplate#tag_template_id}
  */
  readonly tagTemplateId: string;
  /**
  * fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#fields DataCatalogTagTemplate#fields}
  */
  readonly fields: DataCatalogTagTemplateFields[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#timeouts DataCatalogTagTemplate#timeouts}
  */
  readonly timeouts?: DataCatalogTagTemplateTimeouts;
}
export interface DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues {
  /**
  * The display name of the enum value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#display_name DataCatalogTagTemplate#display_name}
  */
  readonly displayName: string;
}

function dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesToTerraform(struct?: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}

export interface DataCatalogTagTemplateFieldsTypeEnumType {
  /**
  * allowed_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#allowed_values DataCatalogTagTemplate#allowed_values}
  */
  readonly allowedValues: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[];
}

function dataCatalogTagTemplateFieldsTypeEnumTypeToTerraform(struct?: DataCatalogTagTemplateFieldsTypeEnumType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_values: cdktf.listMapper(dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesToTerraform)(struct!.allowedValues),
  }
}

export interface DataCatalogTagTemplateFieldsType {
  /**
  * Represents primitive types - string, bool etc.
 Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#primitive_type DataCatalogTagTemplate#primitive_type}
  */
  readonly primitiveType?: string;
  /**
  * enum_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#enum_type DataCatalogTagTemplate#enum_type}
  */
  readonly enumType?: DataCatalogTagTemplateFieldsTypeEnumType[];
}

function dataCatalogTagTemplateFieldsTypeToTerraform(struct?: DataCatalogTagTemplateFieldsType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    primitive_type: cdktf.stringToTerraform(struct!.primitiveType),
    enum_type: cdktf.listMapper(dataCatalogTagTemplateFieldsTypeEnumTypeToTerraform)(struct!.enumType),
  }
}

export interface DataCatalogTagTemplateFields {
  /**
  * A description for this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#description DataCatalogTagTemplate#description}
  */
  readonly description?: string;
  /**
  * The display name for this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#display_name DataCatalogTagTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#field_id DataCatalogTagTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Whether this is a required field. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#is_required DataCatalogTagTemplate#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The order of this field with respect to other fields in this tag template.
A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#order DataCatalogTagTemplate#order}
  */
  readonly order?: number;
  /**
  * type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#type DataCatalogTagTemplate#type}
  */
  readonly type: DataCatalogTagTemplateFieldsType[];
}

function dataCatalogTagTemplateFieldsToTerraform(struct?: DataCatalogTagTemplateFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    order: cdktf.numberToTerraform(struct!.order),
    type: cdktf.listMapper(dataCatalogTagTemplateFieldsTypeToTerraform)(struct!.type),
  }
}

export interface DataCatalogTagTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#create DataCatalogTagTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#delete DataCatalogTagTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html#update DataCatalogTagTemplate#update}
  */
  readonly update?: string;
}

function dataCatalogTagTemplateTimeoutsToTerraform(struct?: DataCatalogTagTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html google_data_catalog_tag_template}
*/
export class DataCatalogTagTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_data_catalog_tag_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html google_data_catalog_tag_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogTagTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogTagTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_tag_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._forceDelete = config.forceDelete;
    this._project = config.project;
    this._region = config.region;
    this._tagTemplateId = config.tagTemplateId;
    this._fields = config.fields;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string;
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string ) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable;
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable ) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
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
    return this._project
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region
  }

  // tag_template_id - computed: false, optional: false, required: true
  private _tagTemplateId: string;
  public get tagTemplateId() {
    return this.getStringAttribute('tag_template_id');
  }
  public set tagTemplateId(value: string) {
    this._tagTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTemplateIdInput() {
    return this._tagTemplateId
  }

  // fields - computed: false, optional: false, required: true
  private _fields: DataCatalogTagTemplateFields[];
  public get fields() {
    return this.interpolationForAttribute('fields') as any;
  }
  public set fields(value: DataCatalogTagTemplateFields[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataCatalogTagTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataCatalogTagTemplateTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      tag_template_id: cdktf.stringToTerraform(this._tagTemplateId),
      fields: cdktf.listMapper(dataCatalogTagTemplateFieldsToTerraform)(this._fields),
      timeouts: dataCatalogTagTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
