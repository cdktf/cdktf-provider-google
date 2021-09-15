// https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogTagConfig extends cdktf.TerraformMetaArguments {
  /**
  * Resources like Entry can have schemas associated with them. This scope allows users to attach tags to an
individual column based on that schema.

For attaching a tag to a nested column, use '.' to separate the column names. Example:
'outer_column.inner_column'
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#column DataCatalogTag#column}
  */
  readonly column?: string;
  /**
  * The name of the parent this tag is attached to. This can be the name of an entry or an entry group. If an entry group, the tag will be attached to
all entries in that group.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#parent DataCatalogTag#parent}
  */
  readonly parent?: string;
  /**
  * The resource name of the tag template that this tag uses. Example:
projects/{project_id}/locations/{location}/tagTemplates/{tagTemplateId}
This field cannot be modified after creation.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#template DataCatalogTag#template}
  */
  readonly template: string;
  /**
  * fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#fields DataCatalogTag#fields}
  */
  readonly fields: DataCatalogTagFields[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#timeouts DataCatalogTag#timeouts}
  */
  readonly timeouts?: DataCatalogTagTimeouts;
}
export interface DataCatalogTagFields {
  /**
  * Holds the value for a tag field with boolean type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#bool_value DataCatalogTag#bool_value}
  */
  readonly boolValue?: boolean | cdktf.IResolvable;
  /**
  * Holds the value for a tag field with double type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#double_value DataCatalogTag#double_value}
  */
  readonly doubleValue?: number;
  /**
  * The display name of the enum value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#enum_value DataCatalogTag#enum_value}
  */
  readonly enumValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#field_name DataCatalogTag#field_name}
  */
  readonly fieldName: string;
  /**
  * Holds the value for a tag field with string type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#string_value DataCatalogTag#string_value}
  */
  readonly stringValue?: string;
  /**
  * Holds the value for a tag field with timestamp type.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#timestamp_value DataCatalogTag#timestamp_value}
  */
  readonly timestampValue?: string;
}

function dataCatalogTagFieldsToTerraform(struct?: DataCatalogTagFields): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    bool_value: cdktf.booleanToTerraform(struct!.boolValue),
    double_value: cdktf.numberToTerraform(struct!.doubleValue),
    enum_value: cdktf.stringToTerraform(struct!.enumValue),
    field_name: cdktf.stringToTerraform(struct!.fieldName),
    string_value: cdktf.stringToTerraform(struct!.stringValue),
    timestamp_value: cdktf.stringToTerraform(struct!.timestampValue),
  }
}

export interface DataCatalogTagTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#create DataCatalogTag#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#delete DataCatalogTag#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html#update DataCatalogTag#update}
  */
  readonly update?: string;
}

function dataCatalogTagTimeoutsToTerraform(struct?: DataCatalogTagTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html google_data_catalog_tag}
*/
export class DataCatalogTag extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_data_catalog_tag";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag.html google_data_catalog_tag} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogTagConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogTagConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_tag',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._column = config.column;
    this._parent = config.parent;
    this._template = config.template;
    this._fields = config.fields;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // column - computed: false, optional: true, required: false
  private _column?: string;
  public get column() {
    return this.getStringAttribute('column');
  }
  public set column(value: string ) {
    this._column = value;
  }
  public resetColumn() {
    this._column = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get columnInput() {
    return this._column
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string;
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string ) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent
  }

  // template - computed: false, optional: false, required: true
  private _template: string;
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template
  }

  // template_displayname - computed: true, optional: false, required: false
  public get templateDisplayname() {
    return this.getStringAttribute('template_displayname');
  }

  // fields - computed: false, optional: false, required: true
  private _fields: DataCatalogTagFields[];
  public get fields() {
    return this.interpolationForAttribute('fields') as any;
  }
  public set fields(value: DataCatalogTagFields[]) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: DataCatalogTagTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: DataCatalogTagTimeouts ) {
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
      column: cdktf.stringToTerraform(this._column),
      parent: cdktf.stringToTerraform(this._parent),
      template: cdktf.stringToTerraform(this._template),
      fields: cdktf.listMapper(dataCatalogTagFieldsToTerraform)(this._fields),
      timeouts: dataCatalogTagTimeoutsToTerraform(this._timeouts),
    };
  }
}
