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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/data_catalog_tag_template#id DataCatalogTagTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
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

export class DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
    }
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
}

export class DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList extends cdktf.ComplexList {
  public internalValue? : DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[] | cdktf.IResolvable

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
  public get(index: number): DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference {
    return new DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
    allowed_values: cdktf.listMapper(dataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesToTerraform, true)(struct!.allowedValues),
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
    if (this._allowedValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedValues = this._allowedValues?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogTagTemplateFieldsTypeEnumType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedValues.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedValues.internalValue = value.allowedValues;
    }
  }

  // allowed_values - computed: false, optional: false, required: true
  private _allowedValues = new DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValuesList(this, "allowed_values", true);
  public get allowedValues() {
    return this._allowedValues;
  }
  public putAllowedValues(value: DataCatalogTagTemplateFieldsTypeEnumTypeAllowedValues[] | cdktf.IResolvable) {
    this._allowedValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedValuesInput() {
    return this._allowedValues.internalValue;
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

export class DataCatalogTagTemplateFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCatalogTagTemplateFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._fieldId !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldId = this._fieldId;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._order !== undefined) {
      hasAnyValues = true;
      internalValueResult.order = this._order;
    }
    if (this._type?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCatalogTagTemplateFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._displayName = undefined;
      this._fieldId = undefined;
      this._isRequired = undefined;
      this._order = undefined;
      this._type.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._displayName = value.displayName;
      this._fieldId = value.fieldId;
      this._isRequired = value.isRequired;
      this._order = value.order;
      this._type.internalValue = value.type;
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

  // field_id - computed: false, optional: false, required: true
  private _fieldId?: string; 
  public get fieldId() {
    return this.getStringAttribute('field_id');
  }
  public set fieldId(value: string) {
    this._fieldId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldIdInput() {
    return this._fieldId;
  }

  // is_required - computed: false, optional: true, required: false
  private _isRequired?: boolean | cdktf.IResolvable; 
  public get isRequired() {
    return this.getBooleanAttribute('is_required');
  }
  public set isRequired(value: boolean | cdktf.IResolvable) {
    this._isRequired = value;
  }
  public resetIsRequired() {
    this._isRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRequiredInput() {
    return this._isRequired;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // order - computed: false, optional: true, required: false
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  public resetOrder() {
    this._order = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // type - computed: false, optional: false, required: true
  private _type = new DataCatalogTagTemplateFieldsTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DataCatalogTagTemplateFieldsType) {
    this._type.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }
}

export class DataCatalogTagTemplateFieldsList extends cdktf.ComplexList {
  public internalValue? : DataCatalogTagTemplateFields[] | cdktf.IResolvable

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
  public get(index: number): DataCatalogTagTemplateFieldsOutputReference {
    return new DataCatalogTagTemplateFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
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
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataCatalogTagTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataCatalogTagTemplateTimeouts | cdktf.IResolvable | undefined) {
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
        providerVersion: '4.35.0',
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
    this._displayName = config.displayName;
    this._forceDelete = config.forceDelete;
    this._id = config.id;
    this._project = config.project;
    this._region = config.region;
    this._tagTemplateId = config.tagTemplateId;
    this._fields.internalValue = config.fields;
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
  private _fields = new DataCatalogTagTemplateFieldsList(this, "fields", true);
  public get fields() {
    return this._fields;
  }
  public putFields(value: DataCatalogTagTemplateFields[] | cdktf.IResolvable) {
    this._fields.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldsInput() {
    return this._fields.internalValue;
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
      id: cdktf.stringToTerraform(this._id),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      tag_template_id: cdktf.stringToTerraform(this._tagTemplateId),
      fields: cdktf.listMapper(dataCatalogTagTemplateFieldsToTerraform, true)(this._fields.internalValue),
      timeouts: dataCatalogTagTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
