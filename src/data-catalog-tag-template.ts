// https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import { TerraformResource } from 'cdktf';
import { TerraformMetaArguments } from 'cdktf';

// Configuration

export interface DataCatalogTagTemplateConfig extends TerraformMetaArguments {
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
export interface DataCatalogTagTemplateFieldsTypeEnumType {
  /** allowed_values block */
  readonly allowedValues: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[];
}
export interface DataCatalogTagTemplateFieldsType {
  /** Represents primitive types - string, bool etc.
 Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"] */
  readonly primitiveType?: string;
  /** enum_type block */
  readonly enumType?: DataCatalogTagTemplateFieldsTypeEnumType[];
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
export interface DataCatalogTagTemplateTimeouts {
  readonly create?: string;
  readonly delete?: string;
  readonly update?: string;
}

// Resource

export class DataCatalogTagTemplate extends TerraformResource {

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
    return this._displayName;
  }
  public set displayName(value: string | undefined) {
    this._displayName = value;
  }

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean;
  public get forceDelete() {
    return this._forceDelete;
  }
  public set forceDelete(value: boolean | undefined) {
    this._forceDelete = value;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string;
  public get id() {
    return this._id ?? this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }

  // name - computed: true, optional: false, required: true
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string;
  public get project() {
    return this._project ?? this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }

  // region - computed: true, optional: true, required: false
  private _region?: string;
  public get region() {
    return this._region ?? this.getStringAttribute('region');
  }
  public set region(value: string | undefined) {
    this._region = value;
  }

  // tag_template_id - computed: false, optional: false, required: true
  private _tagTemplateId: string;
  public get tagTemplateId() {
    return this._tagTemplateId;
  }
  public set tagTemplateId(value: string) {
    this._tagTemplateId = value;
  }

  // fields - computed: false, optional: false, required: true
  private _fields: DataCatalogTagTemplateFields[];
  public get fields() {
    return this._fields;
  }
  public set fields(value: DataCatalogTagTemplateFields[]) {
    this._fields = value;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataCatalogTagTemplateTimeouts;
  public get timeouts() {
    return this._timeouts;
  }
  public set timeouts(value: DataCatalogTagTemplateTimeouts | undefined) {
    this._timeouts = value;
  }

  // =========
  // SYNTHESIS
  // =========

  public synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: this._displayName,
      force_delete: this._forceDelete,
      project: this._project,
      region: this._region,
      tag_template_id: this._tagTemplateId,
      fields: this._fields,
      timeouts: this._timeouts,
    };
  }
}
