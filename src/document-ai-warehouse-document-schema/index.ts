/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DocumentAiWarehouseDocumentSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the schema given by the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}
  */
  readonly displayName: string;
  /**
  * Tells whether the document is a folder or a typical document.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#document_is_folder DocumentAiWarehouseDocumentSchema#document_is_folder}
  */
  readonly documentIsFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#id DocumentAiWarehouseDocumentSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The location of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#location DocumentAiWarehouseDocumentSchema#location}
  */
  readonly location: string;
  /**
  * The unique identifier of the project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#project_number DocumentAiWarehouseDocumentSchema#project_number}
  */
  readonly projectNumber: string;
  /**
  * property_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}
  */
  readonly propertyDefinitions: DocumentAiWarehouseDocumentSchemaPropertyDefinitions[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#timeouts DocumentAiWarehouseDocumentSchema#timeouts}
  */
  readonly timeouts?: DocumentAiWarehouseDocumentSchemaTimeouts;
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions {
  /**
  * List of possible enum values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}
  */
  readonly possibleValues: string[];
  /**
  * Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}
  */
  readonly validationCheckDisabled?: boolean | cdktf.IResolvable;
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    possible_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.possibleValues),
    validation_check_disabled: cdktf.booleanToTerraform(struct!.validationCheckDisabled),
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    possible_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.possibleValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validation_check_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationCheckDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._possibleValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.possibleValues = this._possibleValues;
    }
    if (this._validationCheckDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCheckDisabled = this._validationCheckDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._possibleValues = undefined;
      this._validationCheckDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._possibleValues = value.possibleValues;
      this._validationCheckDisabled = value.validationCheckDisabled;
    }
  }

  // possible_values - computed: false, optional: false, required: true
  private _possibleValues?: string[]; 
  public get possibleValues() {
    return this.getListAttribute('possible_values');
  }
  public set possibleValues(value: string[]) {
    this._possibleValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get possibleValuesInput() {
    return this._possibleValues;
  }

  // validation_check_disabled - computed: false, optional: true, required: false
  private _validationCheckDisabled?: boolean | cdktf.IResolvable; 
  public get validationCheckDisabled() {
    return this.getBooleanAttribute('validation_check_disabled');
  }
  public set validationCheckDisabled(value: boolean | cdktf.IResolvable) {
    this._validationCheckDisabled = value;
  }
  public resetValidationCheckDisabled() {
    this._validationCheckDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCheckDisabledInput() {
    return this._validationCheckDisabled;
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions {
  /**
  * List of possible enum values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#possible_values DocumentAiWarehouseDocumentSchema#possible_values}
  */
  readonly possibleValues: string[];
  /**
  * Make sure the enum property value provided in the document is in the possile value list during document creation. The validation check runs by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#validation_check_disabled DocumentAiWarehouseDocumentSchema#validation_check_disabled}
  */
  readonly validationCheckDisabled?: boolean | cdktf.IResolvable;
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    possible_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.possibleValues),
    validation_check_disabled: cdktf.booleanToTerraform(struct!.validationCheckDisabled),
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    possible_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.possibleValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    validation_check_disabled: {
      value: cdktf.booleanToHclTerraform(struct!.validationCheckDisabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._possibleValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.possibleValues = this._possibleValues;
    }
    if (this._validationCheckDisabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.validationCheckDisabled = this._validationCheckDisabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._possibleValues = undefined;
      this._validationCheckDisabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._possibleValues = value.possibleValues;
      this._validationCheckDisabled = value.validationCheckDisabled;
    }
  }

  // possible_values - computed: false, optional: false, required: true
  private _possibleValues?: string[]; 
  public get possibleValues() {
    return this.getListAttribute('possible_values');
  }
  public set possibleValues(value: string[]) {
    this._possibleValues = value;
  }
  // Temporarily expose input value. Use with caution.
  public get possibleValuesInput() {
    return this._possibleValues;
  }

  // validation_check_disabled - computed: false, optional: true, required: false
  private _validationCheckDisabled?: boolean | cdktf.IResolvable; 
  public get validationCheckDisabled() {
    return this.getBooleanAttribute('validation_check_disabled');
  }
  public set validationCheckDisabled(value: boolean | cdktf.IResolvable) {
    this._validationCheckDisabled = value;
  }
  public resetValidationCheckDisabled() {
    this._validationCheckDisabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validationCheckDisabledInput() {
    return this._validationCheckDisabled;
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources {
  /**
  * The schema name in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}
  */
  readonly name?: string;
  /**
  * The Doc AI processor type name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}
  */
  readonly processorType?: string;
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processor_type: cdktf.stringToTerraform(struct!.processorType),
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
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
    processor_type: {
      value: cdktf.stringToHclTerraform(struct!.processorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorType = this._processorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processorType = value.processorType;
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

  // processor_type - computed: false, optional: true, required: false
  private _processorType?: string; 
  public get processorType() {
    return this.getStringAttribute('processor_type');
  }
  public set processorType(value: string) {
    this._processorType = value;
  }
  public resetProcessorType() {
    this._processorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorTypeInput() {
    return this._processorType;
  }
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList extends cdktf.ComplexList {
  public internalValue? : DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[] | cdktf.IResolvable

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
  public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference {
    return new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions {
  /**
  * The display-name for the property, used for front-end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}
  */
  readonly isFilterable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is user supplied metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}
  */
  readonly isMetadata?: boolean | cdktf.IResolvable;
  /**
  * Whether the property can have multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}
  */
  readonly isRepeatable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the property should be included in a global search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}
  */
  readonly isSearchable?: boolean | cdktf.IResolvable;
  /**
  * The name of the metadata property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}
  */
  readonly name: string;
  /**
  * Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}
  */
  readonly retrievalImportance?: string;
  /**
  * date_time_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}
  */
  readonly dateTimeTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions;
  /**
  * enum_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}
  */
  readonly enumTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions;
  /**
  * float_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}
  */
  readonly floatTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions;
  /**
  * integer_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}
  */
  readonly integerTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions;
  /**
  * map_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}
  */
  readonly mapTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions;
  /**
  * schema_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}
  */
  readonly schemaSources?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[] | cdktf.IResolvable;
  /**
  * text_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}
  */
  readonly textTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions;
  /**
  * timestamp_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}
  */
  readonly timestampTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions;
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_filterable: cdktf.booleanToTerraform(struct!.isFilterable),
    is_metadata: cdktf.booleanToTerraform(struct!.isMetadata),
    is_repeatable: cdktf.booleanToTerraform(struct!.isRepeatable),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    is_searchable: cdktf.booleanToTerraform(struct!.isSearchable),
    name: cdktf.stringToTerraform(struct!.name),
    retrieval_importance: cdktf.stringToTerraform(struct!.retrievalImportance),
    date_time_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct!.dateTimeTypeOptions),
    enum_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToTerraform(struct!.enumTypeOptions),
    float_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToTerraform(struct!.floatTypeOptions),
    integer_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToTerraform(struct!.integerTypeOptions),
    map_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToTerraform(struct!.mapTypeOptions),
    schema_sources: cdktf.listMapper(documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToTerraform, true)(struct!.schemaSources),
    text_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToTerraform(struct!.textTypeOptions),
    timestamp_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToTerraform(struct!.timestampTypeOptions),
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_filterable: {
      value: cdktf.booleanToHclTerraform(struct!.isFilterable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.isMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_repeatable: {
      value: cdktf.booleanToHclTerraform(struct!.isRepeatable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_searchable: {
      value: cdktf.booleanToHclTerraform(struct!.isSearchable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrieval_importance: {
      value: cdktf.stringToHclTerraform(struct!.retrievalImportance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_time_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct!.dateTimeTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsList",
    },
    enum_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct!.enumTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsList",
    },
    float_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct!.floatTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsList",
    },
    integer_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct!.integerTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsList",
    },
    map_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsToHclTerraform(struct!.mapTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsList",
    },
    schema_sources: {
      value: cdktf.listMapperHcl(documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesToHclTerraform, true)(struct!.schemaSources),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList",
    },
    text_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsToHclTerraform(struct!.textTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsList",
    },
    timestamp_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct!.timestampTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isFilterable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFilterable = this._isFilterable;
    }
    if (this._isMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetadata = this._isMetadata;
    }
    if (this._isRepeatable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRepeatable = this._isRepeatable;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isSearchable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSearchable = this._isSearchable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retrievalImportance !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalImportance = this._retrievalImportance;
    }
    if (this._dateTimeTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeTypeOptions = this._dateTimeTypeOptions?.internalValue;
    }
    if (this._enumTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumTypeOptions = this._enumTypeOptions?.internalValue;
    }
    if (this._floatTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatTypeOptions = this._floatTypeOptions?.internalValue;
    }
    if (this._integerTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerTypeOptions = this._integerTypeOptions?.internalValue;
    }
    if (this._mapTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTypeOptions = this._mapTypeOptions?.internalValue;
    }
    if (this._schemaSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSources = this._schemaSources?.internalValue;
    }
    if (this._textTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTypeOptions = this._textTypeOptions?.internalValue;
    }
    if (this._timestampTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampTypeOptions = this._timestampTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isFilterable = undefined;
      this._isMetadata = undefined;
      this._isRepeatable = undefined;
      this._isRequired = undefined;
      this._isSearchable = undefined;
      this._name = undefined;
      this._retrievalImportance = undefined;
      this._dateTimeTypeOptions.internalValue = undefined;
      this._enumTypeOptions.internalValue = undefined;
      this._floatTypeOptions.internalValue = undefined;
      this._integerTypeOptions.internalValue = undefined;
      this._mapTypeOptions.internalValue = undefined;
      this._schemaSources.internalValue = undefined;
      this._textTypeOptions.internalValue = undefined;
      this._timestampTypeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isFilterable = value.isFilterable;
      this._isMetadata = value.isMetadata;
      this._isRepeatable = value.isRepeatable;
      this._isRequired = value.isRequired;
      this._isSearchable = value.isSearchable;
      this._name = value.name;
      this._retrievalImportance = value.retrievalImportance;
      this._dateTimeTypeOptions.internalValue = value.dateTimeTypeOptions;
      this._enumTypeOptions.internalValue = value.enumTypeOptions;
      this._floatTypeOptions.internalValue = value.floatTypeOptions;
      this._integerTypeOptions.internalValue = value.integerTypeOptions;
      this._mapTypeOptions.internalValue = value.mapTypeOptions;
      this._schemaSources.internalValue = value.schemaSources;
      this._textTypeOptions.internalValue = value.textTypeOptions;
      this._timestampTypeOptions.internalValue = value.timestampTypeOptions;
    }
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

  // is_filterable - computed: false, optional: true, required: false
  private _isFilterable?: boolean | cdktf.IResolvable; 
  public get isFilterable() {
    return this.getBooleanAttribute('is_filterable');
  }
  public set isFilterable(value: boolean | cdktf.IResolvable) {
    this._isFilterable = value;
  }
  public resetIsFilterable() {
    this._isFilterable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFilterableInput() {
    return this._isFilterable;
  }

  // is_metadata - computed: false, optional: true, required: false
  private _isMetadata?: boolean | cdktf.IResolvable; 
  public get isMetadata() {
    return this.getBooleanAttribute('is_metadata');
  }
  public set isMetadata(value: boolean | cdktf.IResolvable) {
    this._isMetadata = value;
  }
  public resetIsMetadata() {
    this._isMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetadataInput() {
    return this._isMetadata;
  }

  // is_repeatable - computed: false, optional: true, required: false
  private _isRepeatable?: boolean | cdktf.IResolvable; 
  public get isRepeatable() {
    return this.getBooleanAttribute('is_repeatable');
  }
  public set isRepeatable(value: boolean | cdktf.IResolvable) {
    this._isRepeatable = value;
  }
  public resetIsRepeatable() {
    this._isRepeatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRepeatableInput() {
    return this._isRepeatable;
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

  // is_searchable - computed: false, optional: true, required: false
  private _isSearchable?: boolean | cdktf.IResolvable; 
  public get isSearchable() {
    return this.getBooleanAttribute('is_searchable');
  }
  public set isSearchable(value: boolean | cdktf.IResolvable) {
    this._isSearchable = value;
  }
  public resetIsSearchable() {
    this._isSearchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSearchableInput() {
    return this._isSearchable;
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

  // retrieval_importance - computed: false, optional: true, required: false
  private _retrievalImportance?: string; 
  public get retrievalImportance() {
    return this.getStringAttribute('retrieval_importance');
  }
  public set retrievalImportance(value: string) {
    this._retrievalImportance = value;
  }
  public resetRetrievalImportance() {
    this._retrievalImportance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalImportanceInput() {
    return this._retrievalImportance;
  }

  // date_time_type_options - computed: false, optional: true, required: false
  private _dateTimeTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptionsOutputReference(this, "date_time_type_options");
  public get dateTimeTypeOptions() {
    return this._dateTimeTypeOptions;
  }
  public putDateTimeTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsDateTimeTypeOptions) {
    this._dateTimeTypeOptions.internalValue = value;
  }
  public resetDateTimeTypeOptions() {
    this._dateTimeTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeTypeOptionsInput() {
    return this._dateTimeTypeOptions.internalValue;
  }

  // enum_type_options - computed: false, optional: true, required: false
  private _enumTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptionsOutputReference(this, "enum_type_options");
  public get enumTypeOptions() {
    return this._enumTypeOptions;
  }
  public putEnumTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsEnumTypeOptions) {
    this._enumTypeOptions.internalValue = value;
  }
  public resetEnumTypeOptions() {
    this._enumTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumTypeOptionsInput() {
    return this._enumTypeOptions.internalValue;
  }

  // float_type_options - computed: false, optional: true, required: false
  private _floatTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptionsOutputReference(this, "float_type_options");
  public get floatTypeOptions() {
    return this._floatTypeOptions;
  }
  public putFloatTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsFloatTypeOptions) {
    this._floatTypeOptions.internalValue = value;
  }
  public resetFloatTypeOptions() {
    this._floatTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatTypeOptionsInput() {
    return this._floatTypeOptions.internalValue;
  }

  // integer_type_options - computed: false, optional: true, required: false
  private _integerTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptionsOutputReference(this, "integer_type_options");
  public get integerTypeOptions() {
    return this._integerTypeOptions;
  }
  public putIntegerTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsIntegerTypeOptions) {
    this._integerTypeOptions.internalValue = value;
  }
  public resetIntegerTypeOptions() {
    this._integerTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerTypeOptionsInput() {
    return this._integerTypeOptions.internalValue;
  }

  // map_type_options - computed: false, optional: true, required: false
  private _mapTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptionsOutputReference(this, "map_type_options");
  public get mapTypeOptions() {
    return this._mapTypeOptions;
  }
  public putMapTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsMapTypeOptions) {
    this._mapTypeOptions.internalValue = value;
  }
  public resetMapTypeOptions() {
    this._mapTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTypeOptionsInput() {
    return this._mapTypeOptions.internalValue;
  }

  // schema_sources - computed: false, optional: true, required: false
  private _schemaSources = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSourcesList(this, "schema_sources", false);
  public get schemaSources() {
    return this._schemaSources;
  }
  public putSchemaSources(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsSchemaSources[] | cdktf.IResolvable) {
    this._schemaSources.internalValue = value;
  }
  public resetSchemaSources() {
    this._schemaSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSourcesInput() {
    return this._schemaSources.internalValue;
  }

  // text_type_options - computed: false, optional: true, required: false
  private _textTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptionsOutputReference(this, "text_type_options");
  public get textTypeOptions() {
    return this._textTypeOptions;
  }
  public putTextTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTextTypeOptions) {
    this._textTypeOptions.internalValue = value;
  }
  public resetTextTypeOptions() {
    this._textTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTypeOptionsInput() {
    return this._textTypeOptions.internalValue;
  }

  // timestamp_type_options - computed: false, optional: true, required: false
  private _timestampTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptionsOutputReference(this, "timestamp_type_options");
  public get timestampTypeOptions() {
    return this._timestampTypeOptions;
  }
  public putTimestampTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsTimestampTypeOptions) {
    this._timestampTypeOptions.internalValue = value;
  }
  public resetTimestampTypeOptions() {
    this._timestampTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTypeOptionsInput() {
    return this._timestampTypeOptions.internalValue;
  }
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference {
    return new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions {
  /**
  * property_definitions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#property_definitions DocumentAiWarehouseDocumentSchema#property_definitions}
  */
  readonly propertyDefinitions: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[] | cdktf.IResolvable;
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    property_definitions: cdktf.listMapper(documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToTerraform, true)(struct!.propertyDefinitions),
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    property_definitions: {
      value: cdktf.listMapperHcl(documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsToHclTerraform, true)(struct!.propertyDefinitions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._propertyDefinitions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyDefinitions = this._propertyDefinitions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._propertyDefinitions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._propertyDefinitions.internalValue = value.propertyDefinitions;
    }
  }

  // property_definitions - computed: false, optional: false, required: true
  private _propertyDefinitions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitionsList(this, "property_definitions", false);
  public get propertyDefinitions() {
    return this._propertyDefinitions;
  }
  public putPropertyDefinitions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsPropertyDefinitions[] | cdktf.IResolvable) {
    this._propertyDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyDefinitionsInput() {
    return this._propertyDefinitions.internalValue;
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources {
  /**
  * The schema name in the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}
  */
  readonly name?: string;
  /**
  * The Doc AI processor type name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#processor_type DocumentAiWarehouseDocumentSchema#processor_type}
  */
  readonly processorType?: string;
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    processor_type: cdktf.stringToTerraform(struct!.processorType),
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable): any {
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
    processor_type: {
      value: cdktf.stringToHclTerraform(struct!.processorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._processorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.processorType = this._processorType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._processorType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._processorType = value.processorType;
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

  // processor_type - computed: false, optional: true, required: false
  private _processorType?: string; 
  public get processorType() {
    return this.getStringAttribute('processor_type');
  }
  public set processorType(value: string) {
    this._processorType = value;
  }
  public resetProcessorType() {
    this._processorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processorTypeInput() {
    return this._processorType;
  }
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList extends cdktf.ComplexList {
  public internalValue? : DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[] | cdktf.IResolvable

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
  public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference {
    return new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions {
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference | DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DocumentAiWarehouseDocumentSchemaPropertyDefinitions {
  /**
  * The display-name for the property, used for front-end.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#display_name DocumentAiWarehouseDocumentSchema#display_name}
  */
  readonly displayName?: string;
  /**
  * Whether the property can be filtered. If this is a sub-property, all the parent properties must be marked filterable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_filterable DocumentAiWarehouseDocumentSchema#is_filterable}
  */
  readonly isFilterable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is user supplied metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_metadata DocumentAiWarehouseDocumentSchema#is_metadata}
  */
  readonly isMetadata?: boolean | cdktf.IResolvable;
  /**
  * Whether the property can have multiple values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_repeatable DocumentAiWarehouseDocumentSchema#is_repeatable}
  */
  readonly isRepeatable?: boolean | cdktf.IResolvable;
  /**
  * Whether the property is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_required DocumentAiWarehouseDocumentSchema#is_required}
  */
  readonly isRequired?: boolean | cdktf.IResolvable;
  /**
  * Indicates that the property should be included in a global search.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#is_searchable DocumentAiWarehouseDocumentSchema#is_searchable}
  */
  readonly isSearchable?: boolean | cdktf.IResolvable;
  /**
  * The name of the metadata property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#name DocumentAiWarehouseDocumentSchema#name}
  */
  readonly name: string;
  /**
  * Stores the retrieval importance. Possible values: ["HIGHEST", "HIGHER", "HIGH", "MEDIUM", "LOW", "LOWEST"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#retrieval_importance DocumentAiWarehouseDocumentSchema#retrieval_importance}
  */
  readonly retrievalImportance?: string;
  /**
  * date_time_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#date_time_type_options DocumentAiWarehouseDocumentSchema#date_time_type_options}
  */
  readonly dateTimeTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions;
  /**
  * enum_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#enum_type_options DocumentAiWarehouseDocumentSchema#enum_type_options}
  */
  readonly enumTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions;
  /**
  * float_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#float_type_options DocumentAiWarehouseDocumentSchema#float_type_options}
  */
  readonly floatTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions;
  /**
  * integer_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#integer_type_options DocumentAiWarehouseDocumentSchema#integer_type_options}
  */
  readonly integerTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions;
  /**
  * map_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#map_type_options DocumentAiWarehouseDocumentSchema#map_type_options}
  */
  readonly mapTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions;
  /**
  * property_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#property_type_options DocumentAiWarehouseDocumentSchema#property_type_options}
  */
  readonly propertyTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions;
  /**
  * schema_sources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#schema_sources DocumentAiWarehouseDocumentSchema#schema_sources}
  */
  readonly schemaSources?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[] | cdktf.IResolvable;
  /**
  * text_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#text_type_options DocumentAiWarehouseDocumentSchema#text_type_options}
  */
  readonly textTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions;
  /**
  * timestamp_type_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#timestamp_type_options DocumentAiWarehouseDocumentSchema#timestamp_type_options}
  */
  readonly timestampTypeOptions?: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions;
}

export function documentAiWarehouseDocumentSchemaPropertyDefinitionsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_name: cdktf.stringToTerraform(struct!.displayName),
    is_filterable: cdktf.booleanToTerraform(struct!.isFilterable),
    is_metadata: cdktf.booleanToTerraform(struct!.isMetadata),
    is_repeatable: cdktf.booleanToTerraform(struct!.isRepeatable),
    is_required: cdktf.booleanToTerraform(struct!.isRequired),
    is_searchable: cdktf.booleanToTerraform(struct!.isSearchable),
    name: cdktf.stringToTerraform(struct!.name),
    retrieval_importance: cdktf.stringToTerraform(struct!.retrievalImportance),
    date_time_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToTerraform(struct!.dateTimeTypeOptions),
    enum_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToTerraform(struct!.enumTypeOptions),
    float_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToTerraform(struct!.floatTypeOptions),
    integer_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToTerraform(struct!.integerTypeOptions),
    map_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToTerraform(struct!.mapTypeOptions),
    property_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToTerraform(struct!.propertyTypeOptions),
    schema_sources: cdktf.listMapper(documentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToTerraform, true)(struct!.schemaSources),
    text_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToTerraform(struct!.textTypeOptions),
    timestamp_type_options: documentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToTerraform(struct!.timestampTypeOptions),
  }
}


export function documentAiWarehouseDocumentSchemaPropertyDefinitionsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_name: {
      value: cdktf.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_filterable: {
      value: cdktf.booleanToHclTerraform(struct!.isFilterable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_metadata: {
      value: cdktf.booleanToHclTerraform(struct!.isMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_repeatable: {
      value: cdktf.booleanToHclTerraform(struct!.isRepeatable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_required: {
      value: cdktf.booleanToHclTerraform(struct!.isRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    is_searchable: {
      value: cdktf.booleanToHclTerraform(struct!.isSearchable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retrieval_importance: {
      value: cdktf.stringToHclTerraform(struct!.retrievalImportance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    date_time_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsToHclTerraform(struct!.dateTimeTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsList",
    },
    enum_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsToHclTerraform(struct!.enumTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsList",
    },
    float_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsToHclTerraform(struct!.floatTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsList",
    },
    integer_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsToHclTerraform(struct!.integerTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsList",
    },
    map_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsToHclTerraform(struct!.mapTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsList",
    },
    property_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsToHclTerraform(struct!.propertyTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsList",
    },
    schema_sources: {
      value: cdktf.listMapperHcl(documentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesToHclTerraform, true)(struct!.schemaSources),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList",
    },
    text_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsToHclTerraform(struct!.textTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsList",
    },
    timestamp_type_options: {
      value: documentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsToHclTerraform(struct!.timestampTypeOptions),
      isBlock: true,
      type: "list",
      storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._isFilterable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isFilterable = this._isFilterable;
    }
    if (this._isMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.isMetadata = this._isMetadata;
    }
    if (this._isRepeatable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRepeatable = this._isRepeatable;
    }
    if (this._isRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.isRequired = this._isRequired;
    }
    if (this._isSearchable !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSearchable = this._isSearchable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._retrievalImportance !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrievalImportance = this._retrievalImportance;
    }
    if (this._dateTimeTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dateTimeTypeOptions = this._dateTimeTypeOptions?.internalValue;
    }
    if (this._enumTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.enumTypeOptions = this._enumTypeOptions?.internalValue;
    }
    if (this._floatTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatTypeOptions = this._floatTypeOptions?.internalValue;
    }
    if (this._integerTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerTypeOptions = this._integerTypeOptions?.internalValue;
    }
    if (this._mapTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapTypeOptions = this._mapTypeOptions?.internalValue;
    }
    if (this._propertyTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.propertyTypeOptions = this._propertyTypeOptions?.internalValue;
    }
    if (this._schemaSources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaSources = this._schemaSources?.internalValue;
    }
    if (this._textTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.textTypeOptions = this._textTypeOptions?.internalValue;
    }
    if (this._timestampTypeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestampTypeOptions = this._timestampTypeOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._displayName = undefined;
      this._isFilterable = undefined;
      this._isMetadata = undefined;
      this._isRepeatable = undefined;
      this._isRequired = undefined;
      this._isSearchable = undefined;
      this._name = undefined;
      this._retrievalImportance = undefined;
      this._dateTimeTypeOptions.internalValue = undefined;
      this._enumTypeOptions.internalValue = undefined;
      this._floatTypeOptions.internalValue = undefined;
      this._integerTypeOptions.internalValue = undefined;
      this._mapTypeOptions.internalValue = undefined;
      this._propertyTypeOptions.internalValue = undefined;
      this._schemaSources.internalValue = undefined;
      this._textTypeOptions.internalValue = undefined;
      this._timestampTypeOptions.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._displayName = value.displayName;
      this._isFilterable = value.isFilterable;
      this._isMetadata = value.isMetadata;
      this._isRepeatable = value.isRepeatable;
      this._isRequired = value.isRequired;
      this._isSearchable = value.isSearchable;
      this._name = value.name;
      this._retrievalImportance = value.retrievalImportance;
      this._dateTimeTypeOptions.internalValue = value.dateTimeTypeOptions;
      this._enumTypeOptions.internalValue = value.enumTypeOptions;
      this._floatTypeOptions.internalValue = value.floatTypeOptions;
      this._integerTypeOptions.internalValue = value.integerTypeOptions;
      this._mapTypeOptions.internalValue = value.mapTypeOptions;
      this._propertyTypeOptions.internalValue = value.propertyTypeOptions;
      this._schemaSources.internalValue = value.schemaSources;
      this._textTypeOptions.internalValue = value.textTypeOptions;
      this._timestampTypeOptions.internalValue = value.timestampTypeOptions;
    }
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

  // is_filterable - computed: false, optional: true, required: false
  private _isFilterable?: boolean | cdktf.IResolvable; 
  public get isFilterable() {
    return this.getBooleanAttribute('is_filterable');
  }
  public set isFilterable(value: boolean | cdktf.IResolvable) {
    this._isFilterable = value;
  }
  public resetIsFilterable() {
    this._isFilterable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isFilterableInput() {
    return this._isFilterable;
  }

  // is_metadata - computed: false, optional: true, required: false
  private _isMetadata?: boolean | cdktf.IResolvable; 
  public get isMetadata() {
    return this.getBooleanAttribute('is_metadata');
  }
  public set isMetadata(value: boolean | cdktf.IResolvable) {
    this._isMetadata = value;
  }
  public resetIsMetadata() {
    this._isMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMetadataInput() {
    return this._isMetadata;
  }

  // is_repeatable - computed: false, optional: true, required: false
  private _isRepeatable?: boolean | cdktf.IResolvable; 
  public get isRepeatable() {
    return this.getBooleanAttribute('is_repeatable');
  }
  public set isRepeatable(value: boolean | cdktf.IResolvable) {
    this._isRepeatable = value;
  }
  public resetIsRepeatable() {
    this._isRepeatable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isRepeatableInput() {
    return this._isRepeatable;
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

  // is_searchable - computed: false, optional: true, required: false
  private _isSearchable?: boolean | cdktf.IResolvable; 
  public get isSearchable() {
    return this.getBooleanAttribute('is_searchable');
  }
  public set isSearchable(value: boolean | cdktf.IResolvable) {
    this._isSearchable = value;
  }
  public resetIsSearchable() {
    this._isSearchable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSearchableInput() {
    return this._isSearchable;
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

  // retrieval_importance - computed: false, optional: true, required: false
  private _retrievalImportance?: string; 
  public get retrievalImportance() {
    return this.getStringAttribute('retrieval_importance');
  }
  public set retrievalImportance(value: string) {
    this._retrievalImportance = value;
  }
  public resetRetrievalImportance() {
    this._retrievalImportance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrievalImportanceInput() {
    return this._retrievalImportance;
  }

  // date_time_type_options - computed: false, optional: true, required: false
  private _dateTimeTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptionsOutputReference(this, "date_time_type_options");
  public get dateTimeTypeOptions() {
    return this._dateTimeTypeOptions;
  }
  public putDateTimeTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsDateTimeTypeOptions) {
    this._dateTimeTypeOptions.internalValue = value;
  }
  public resetDateTimeTypeOptions() {
    this._dateTimeTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateTimeTypeOptionsInput() {
    return this._dateTimeTypeOptions.internalValue;
  }

  // enum_type_options - computed: false, optional: true, required: false
  private _enumTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptionsOutputReference(this, "enum_type_options");
  public get enumTypeOptions() {
    return this._enumTypeOptions;
  }
  public putEnumTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsEnumTypeOptions) {
    this._enumTypeOptions.internalValue = value;
  }
  public resetEnumTypeOptions() {
    this._enumTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumTypeOptionsInput() {
    return this._enumTypeOptions.internalValue;
  }

  // float_type_options - computed: false, optional: true, required: false
  private _floatTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptionsOutputReference(this, "float_type_options");
  public get floatTypeOptions() {
    return this._floatTypeOptions;
  }
  public putFloatTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsFloatTypeOptions) {
    this._floatTypeOptions.internalValue = value;
  }
  public resetFloatTypeOptions() {
    this._floatTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatTypeOptionsInput() {
    return this._floatTypeOptions.internalValue;
  }

  // integer_type_options - computed: false, optional: true, required: false
  private _integerTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptionsOutputReference(this, "integer_type_options");
  public get integerTypeOptions() {
    return this._integerTypeOptions;
  }
  public putIntegerTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsIntegerTypeOptions) {
    this._integerTypeOptions.internalValue = value;
  }
  public resetIntegerTypeOptions() {
    this._integerTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerTypeOptionsInput() {
    return this._integerTypeOptions.internalValue;
  }

  // map_type_options - computed: false, optional: true, required: false
  private _mapTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptionsOutputReference(this, "map_type_options");
  public get mapTypeOptions() {
    return this._mapTypeOptions;
  }
  public putMapTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsMapTypeOptions) {
    this._mapTypeOptions.internalValue = value;
  }
  public resetMapTypeOptions() {
    this._mapTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapTypeOptionsInput() {
    return this._mapTypeOptions.internalValue;
  }

  // property_type_options - computed: false, optional: true, required: false
  private _propertyTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptionsOutputReference(this, "property_type_options");
  public get propertyTypeOptions() {
    return this._propertyTypeOptions;
  }
  public putPropertyTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsPropertyTypeOptions) {
    this._propertyTypeOptions.internalValue = value;
  }
  public resetPropertyTypeOptions() {
    this._propertyTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyTypeOptionsInput() {
    return this._propertyTypeOptions.internalValue;
  }

  // schema_sources - computed: false, optional: true, required: false
  private _schemaSources = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSourcesList(this, "schema_sources", false);
  public get schemaSources() {
    return this._schemaSources;
  }
  public putSchemaSources(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsSchemaSources[] | cdktf.IResolvable) {
    this._schemaSources.internalValue = value;
  }
  public resetSchemaSources() {
    this._schemaSources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaSourcesInput() {
    return this._schemaSources.internalValue;
  }

  // text_type_options - computed: false, optional: true, required: false
  private _textTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptionsOutputReference(this, "text_type_options");
  public get textTypeOptions() {
    return this._textTypeOptions;
  }
  public putTextTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTextTypeOptions) {
    this._textTypeOptions.internalValue = value;
  }
  public resetTextTypeOptions() {
    this._textTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textTypeOptionsInput() {
    return this._textTypeOptions.internalValue;
  }

  // timestamp_type_options - computed: false, optional: true, required: false
  private _timestampTypeOptions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptionsOutputReference(this, "timestamp_type_options");
  public get timestampTypeOptions() {
    return this._timestampTypeOptions;
  }
  public putTimestampTypeOptions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitionsTimestampTypeOptions) {
    this._timestampTypeOptions.internalValue = value;
  }
  public resetTimestampTypeOptions() {
    this._timestampTypeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTypeOptionsInput() {
    return this._timestampTypeOptions.internalValue;
  }
}

export class DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList extends cdktf.ComplexList {
  public internalValue? : DocumentAiWarehouseDocumentSchemaPropertyDefinitions[] | cdktf.IResolvable

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
  public get(index: number): DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference {
    return new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DocumentAiWarehouseDocumentSchemaTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#create DocumentAiWarehouseDocumentSchema#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#delete DocumentAiWarehouseDocumentSchema#delete}
  */
  readonly delete?: string;
}

export function documentAiWarehouseDocumentSchemaTimeoutsToTerraform(struct?: DocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function documentAiWarehouseDocumentSchemaTimeoutsToHclTerraform(struct?: DocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DocumentAiWarehouseDocumentSchemaTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema}
*/
export class DocumentAiWarehouseDocumentSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_document_ai_warehouse_document_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DocumentAiWarehouseDocumentSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DocumentAiWarehouseDocumentSchema to import
  * @param importFromId The id of the existing DocumentAiWarehouseDocumentSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DocumentAiWarehouseDocumentSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_document_ai_warehouse_document_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/document_ai_warehouse_document_schema google_document_ai_warehouse_document_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DocumentAiWarehouseDocumentSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: DocumentAiWarehouseDocumentSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'google_document_ai_warehouse_document_schema',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.25.0',
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
    this._displayName = config.displayName;
    this._documentIsFolder = config.documentIsFolder;
    this._id = config.id;
    this._location = config.location;
    this._projectNumber = config.projectNumber;
    this._propertyDefinitions.internalValue = config.propertyDefinitions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // document_is_folder - computed: false, optional: true, required: false
  private _documentIsFolder?: boolean | cdktf.IResolvable; 
  public get documentIsFolder() {
    return this.getBooleanAttribute('document_is_folder');
  }
  public set documentIsFolder(value: boolean | cdktf.IResolvable) {
    this._documentIsFolder = value;
  }
  public resetDocumentIsFolder() {
    this._documentIsFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get documentIsFolderInput() {
    return this._documentIsFolder;
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

  // project_number - computed: false, optional: false, required: true
  private _projectNumber?: string; 
  public get projectNumber() {
    return this.getStringAttribute('project_number');
  }
  public set projectNumber(value: string) {
    this._projectNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNumberInput() {
    return this._projectNumber;
  }

  // property_definitions - computed: false, optional: false, required: true
  private _propertyDefinitions = new DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList(this, "property_definitions", false);
  public get propertyDefinitions() {
    return this._propertyDefinitions;
  }
  public putPropertyDefinitions(value: DocumentAiWarehouseDocumentSchemaPropertyDefinitions[] | cdktf.IResolvable) {
    this._propertyDefinitions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyDefinitionsInput() {
    return this._propertyDefinitions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DocumentAiWarehouseDocumentSchemaTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DocumentAiWarehouseDocumentSchemaTimeouts) {
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
      document_is_folder: cdktf.booleanToTerraform(this._documentIsFolder),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      project_number: cdktf.stringToTerraform(this._projectNumber),
      property_definitions: cdktf.listMapper(documentAiWarehouseDocumentSchemaPropertyDefinitionsToTerraform, true)(this._propertyDefinitions.internalValue),
      timeouts: documentAiWarehouseDocumentSchemaTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      document_is_folder: {
        value: cdktf.booleanToHclTerraform(this._documentIsFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_number: {
        value: cdktf.stringToHclTerraform(this._projectNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_definitions: {
        value: cdktf.listMapperHcl(documentAiWarehouseDocumentSchemaPropertyDefinitionsToHclTerraform, true)(this._propertyDefinitions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DocumentAiWarehouseDocumentSchemaPropertyDefinitionsList",
      },
      timeouts: {
        value: documentAiWarehouseDocumentSchemaTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DocumentAiWarehouseDocumentSchemaTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
