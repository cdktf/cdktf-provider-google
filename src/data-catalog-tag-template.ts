// https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogTagTemplateConfig extends cdktf.TerraformMetaArguments {
  /** The display name for this template. */
  readonly displayName?: string;
  /** This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template. */
  readonly forceDelete?: boolean;
  readonly project?: string;
  /** Template location region. */
  readonly region?: string;
  /** The id of the tag template to create. */
  readonly tagTemplateId: string;
  /** fields block */
  readonly fields: DataCatalogTagTemplateFields[];
  /** timeouts block */
  readonly timeouts?: DataCatalogTagTemplateTimeouts;
}
export interface DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues {
  /** The display name of the enum value. */
  readonly displayName: string;
}

function dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesToTerraform(struct?: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}

export interface DataCatalogTagTemplateFieldsTypeEnumType {
  /** allowed_values block */
  readonly allowedValues: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[];
}

function dataCatalogTagTemplateFieldsTypeEnumTypeToTerraform(struct?: DataCatalogTagTemplateFieldsTypeEnumType): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allowed_values: cdktf.listMapper(dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesToTerraform)(struct!.allowedValues),
  }
}

export interface DataCatalogTagTemplateFieldsType {
  /** Represents primitive types - string, bool etc.
 Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"] */
  readonly primitiveType?: string;
  /** enum_type block */
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
  /** The display name for this field. */
  readonly displayName?: string;
  readonly fieldId: string;
  /** Whether this is a required field. Defaults to false. */
  readonly isRequired?: boolean;
  /** The order of this field with respect to other fields in this tag template.
A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential. */
  readonly order?: number;
  /** type block */
  readonly type: DataCatalogTagTemplateFieldsType[];
}

function dataCatalogTagTemplateFieldsToTerraform(struct?: DataCatalogTagTemplateFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    order: cdktf.numberToTerraform(struct!.order),
    type: cdktf.listMapper(dataCatalogTagTemplateFieldsTypeToTerraform)(struct!.type),
  }
}

export interface DataCatalogTagTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
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


// Resource

export class DataCatalogTagTemplate extends cdktf.TerraformResource {

  // ===========
  // INITIALIZER
  // ===========

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
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean ) {
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
