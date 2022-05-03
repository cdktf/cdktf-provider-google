// https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCatalogTagTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for this template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * This confirms the deletion of any possible tags using this template. Must be set to true in order to delete the tag template.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#force_delete DataCatalogTagTemplate#force_delete}
  */
  readonly forceDelete?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#project DataCatalogTagTemplate#project}
  */
  readonly project?: string;
  /**
  * Template location region.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#region DataCatalogTagTemplate#region}
  */
  readonly region?: string;
  /**
  * The id of the tag template to create.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#tag_template_id DataCatalogTagTemplate#tag_template_id}
  */
  readonly tagTemplateId: string;
  /**
  * fields block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#fields DataCatalogTagTemplate#fields}
  */
  readonly fields: DataCatalogTagTemplateFields[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#timeouts DataCatalogTagTemplate#timeouts}
  */
  readonly timeouts?: DataCatalogTagTemplateTimeouts;
}
export interface DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues {
  /**
  * The display name of the enum value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}
  */
  readonly displayName: string;
}

export function dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesToTerraform(struct?: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
  }
}

export interface DataCatalogTagTemplateFieldsTypeEnumType {
  /**
  * allowed_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#allowed_values DataCatalogTagTemplate#allowed_values}
  */
  readonly allowedValues: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[] | cdktf.IResolvable;
}

export function dataCatalogTagTemplateFieldsTypeEnumTypeToTerraform(struct?: DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference | DataCatalogTagTemplateFieldsTypeEnumType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_values: cdktf.listMapper(dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesToTerraform)(struct!.allowedValues),
  }
}

export class DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCatalogTagTemplateFieldsTypeEnumType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogTagTemplateFieldsTypeEnumType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedValues = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedValues = value.allowedValues;
    }
  }

  // allowed_values - computed: false, optional: false, required: true
  private _allowedValues?: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[] | cdktf.IResolvable; 
  public get allowedValues() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('allowed_values')));
  }
  public set allowedValues(value: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[] | cdktf.IResolvable) {
    this._allowedValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues;
  }
}
export interface DataCatalogTagTemplateFieldsType {
  /**
  * Represents primitive types - string, bool etc.
 Exactly one of 'primitive_type' or 'enum_type' must be set Possible values: ["DOUBLE", "STRING", "BOOL", "TIMESTAMP"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#primitive_type DataCatalogTagTemplate#primitive_type}
  */
  readonly primitiveType?: string;
  /**
  * enum_type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#enum_type DataCatalogTagTemplate#enum_type}
  */
  readonly enumType?: DataCatalogTagTemplateFieldsTypeEnumType;
}

export function dataCatalogTagTemplateFieldsTypeToTerraform(struct?: DataCatalogTagTemplateFieldsTypeOutputReference | DataCatalogTagTemplateFieldsType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    primitive_type: cdktf.stringToTerraform(struct!.primitiveType),
    enum_type: dataCatalogTagTemplateFieldsTypeEnumTypeToTerraform(struct!.enumType),
  }
}

export class DataCatalogTagTemplateFieldsTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCatalogTagTemplateFieldsType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._primitiveType !== undefined) {
      hasAnyValues = true;
      internalValueResult.primitiveType = this._primitiveType;
    }
    if (this._enumType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumType = this._enumType?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogTagTemplateFieldsType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._primitiveType = undefined;
      this._enumType.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._primitiveType = value.primitiveType;
      this._enumType.internalValue = value.enumType;
    }
  }

  // primitive_type - computed: false, optional: true, required: false
  private _primitiveType?: string; 
  public get primitiveType() {
    return this.getStringAttribute('primitive_type');
  }
  public set primitiveType(value: string) {
    this._primitiveType = value;
  }
  public resetPrimitiveType() {
    this._primitiveType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primitiveTypeInput() {
    return this._primitiveType;
  }

  // enum_type - computed: false, optional: true, required: false
  private _enumType = new DataCatalogTagTemplateFieldsTypeEnumTypeOutputReference(this, "enum_type");
  public get enumType() {
    return this._enumType;
  }
  public putEnumType(value: DataCatalogTagTemplateFieldsTypeEnumType) {
    this._enumType.internalValue = value;
  }
  public resetEnumType() {
    this._enumType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumTypeInput() {
    return this._enumType.internalValue;
  }
}
export interface DataCatalogTagTemplateFields {
  /**
  * A description for this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#description DataCatalogTagTemplate#description}
  */
  readonly description?: string;
  /**
  * The display name for this field.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#display_name DataCatalogTagTemplate#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#field_id DataCatalogTagTemplate#field_id}
  */
  readonly fieldId: string;
  /**
  * Whether this is a required field. Defaults to false.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#is_required DataCatalogTagTemplate#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * The order of this field with respect to other fields in this tag template.
A higher value indicates a more important field. The value can be negative.
Multiple fields can have the same order, and field orders within a tag do not have to be sequential.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#order DataCatalogTagTemplate#order}
  */
  readonly order?: number;
  /**
  * type block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#type DataCatalogTagTemplate#type}
  */
  readonly type: DataCatalogTagTemplateFieldsType;
}

export function dataCatalogTagTemplateFieldsToTerraform(struct?: DataCatalogTagTemplateFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    display_name: cdktf.stringToTerraform(struct!.displayName),
    field_id: cdktf.stringToTerraform(struct!.fieldId),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    order: cdktf.numberToTerraform(struct!.order),
    type: dataCatalogTagTemplateFieldsTypeToTerraform(struct!.type),
  }
}

export interface DataCatalogTagTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#create DataCatalogTagTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#delete DataCatalogTagTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#update DataCatalogTagTemplate#update}
  */
  readonly update?: string;
}

export function dataCatalogTagTemplateTimeoutsToTerraform(struct?: DataCatalogTagTemplateTimeoutsOutputReference | DataCatalogTagTemplateTimeouts | cdktf.IResolvable): any {
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

export class DataCatalogTagTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCatalogTagTemplateTimeouts | undefined {
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

  public set internalValue(value: DataCatalogTagTemplateTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template google_data_catalog_tag_template}
*/
export class DataCatalogTagTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_data_catalog_tag_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template google_data_catalog_tag_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCatalogTagTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DataCatalogTagTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_data_catalog_tag_template',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.20.0',
        providerVersionConstraint: '~> 4.0'
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
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // force_delete - computed: false, optional: true, required: false
  private _forceDelete?: boolean | cdktf.IResolvable; 
  public get forceDelete() {
    return this.getBooleanAttribute('force_delete');
  }
  public set forceDelete(value: boolean | cdktf.IResolvable) {
    this._forceDelete = value;
  }
  public resetForceDelete() {
    this._forceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDeleteInput() {
    return this._forceDelete;
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
    return this._project;
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
    return this._region;
  }

  // tag_template_id - computed: false, optional: false, required: true
  private _tagTemplateId?: string; 
  public get tagTemplateId() {
    return this.getStringAttribute('tag_template_id');
  }
  public set tagTemplateId(value: string) {
    this._tagTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTemplateIdInput() {
    return this._tagTemplateId;
  }

  // fields - computed: false, optional: false, required: true
  private _fields?: DataCatalogTagTemplateFields[] | cdktf.IResolvable; 
  public get fields() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('fields')));
  }
  public set fields(value: DataCatalogTagTemplateFields[] | cdktf.IResolvable) {
    this._fields = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataCatalogTagTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataCatalogTagTemplateTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      force_delete: cdktf.booleanToTerraform(this._forceDelete),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      tag_template_id: cdktf.stringToTerraform(this._tagTemplateId),
      fields: cdktf.listMapper(dataCatalogTagTemplateFieldsToTerraform)(this._fields),
      timeouts: dataCatalogTagTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
