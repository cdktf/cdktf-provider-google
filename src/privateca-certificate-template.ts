// https://www.terraform.io/docs/providers/google/r/privateca_certificate_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCertificateTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. A human-readable description of scenarios this template is intended for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#description PrivatecaCertificateTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#id PrivatecaCertificateTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Labels with user-defined metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#labels PrivatecaCertificateTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#location PrivatecaCertificateTemplate#location}
  */
  readonly location: string;
  /**
  * The resource name for this CertificateTemplate in the format `projects/*\/locations/*\/certificateTemplates/*`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#name PrivatecaCertificateTemplate#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#project PrivatecaCertificateTemplate#project}
  */
  readonly project?: string;
  /**
  * identity_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#identity_constraints PrivatecaCertificateTemplate#identity_constraints}
  */
  readonly identityConstraints?: PrivatecaCertificateTemplateIdentityConstraints;
  /**
  * passthrough_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#passthrough_extensions PrivatecaCertificateTemplate#passthrough_extensions}
  */
  readonly passthroughExtensions?: PrivatecaCertificateTemplatePassthroughExtensions;
  /**
  * predefined_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#predefined_values PrivatecaCertificateTemplate#predefined_values}
  */
  readonly predefinedValues?: PrivatecaCertificateTemplatePredefinedValues;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#timeouts PrivatecaCertificateTemplate#timeouts}
  */
  readonly timeouts?: PrivatecaCertificateTemplateTimeouts;
}
export interface PrivatecaCertificateTemplateIdentityConstraintsCelExpression {
  /**
  * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#description PrivatecaCertificateTemplate#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#expression PrivatecaCertificateTemplate#expression}
  */
  readonly expression?: string;
  /**
  * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#location PrivatecaCertificateTemplate#location}
  */
  readonly location?: string;
  /**
  * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#title PrivatecaCertificateTemplate#title}
  */
  readonly title?: string;
}

export function privatecaCertificateTemplateIdentityConstraintsCelExpressionToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference | PrivatecaCertificateTemplateIdentityConstraintsCelExpression): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export class PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplateIdentityConstraintsCelExpression | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expression !== undefined) {
      hasAnyValues = true;
      internalValueResult.expression = this._expression;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplateIdentityConstraintsCelExpression | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._expression = undefined;
      this._location = undefined;
      this._title = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._expression = value.expression;
      this._location = value.location;
      this._title = value.title;
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

  // expression - computed: false, optional: true, required: false
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface PrivatecaCertificateTemplateIdentityConstraints {
  /**
  * Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#allow_subject_alt_names_passthrough PrivatecaCertificateTemplate#allow_subject_alt_names_passthrough}
  */
  readonly allowSubjectAltNamesPassthrough: boolean | cdktf.IResolvable;
  /**
  * Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#allow_subject_passthrough PrivatecaCertificateTemplate#allow_subject_passthrough}
  */
  readonly allowSubjectPassthrough: boolean | cdktf.IResolvable;
  /**
  * cel_expression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#cel_expression PrivatecaCertificateTemplate#cel_expression}
  */
  readonly celExpression?: PrivatecaCertificateTemplateIdentityConstraintsCelExpression;
}

export function privatecaCertificateTemplateIdentityConstraintsToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsOutputReference | PrivatecaCertificateTemplateIdentityConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_subject_alt_names_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectAltNamesPassthrough),
    allow_subject_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectPassthrough),
    cel_expression: privatecaCertificateTemplateIdentityConstraintsCelExpressionToTerraform(struct!.celExpression),
  }
}

export class PrivatecaCertificateTemplateIdentityConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplateIdentityConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowSubjectAltNamesPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSubjectAltNamesPassthrough = this._allowSubjectAltNamesPassthrough;
    }
    if (this._allowSubjectPassthrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowSubjectPassthrough = this._allowSubjectPassthrough;
    }
    if (this._celExpression?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.celExpression = this._celExpression?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplateIdentityConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowSubjectAltNamesPassthrough = undefined;
      this._allowSubjectPassthrough = undefined;
      this._celExpression.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowSubjectAltNamesPassthrough = value.allowSubjectAltNamesPassthrough;
      this._allowSubjectPassthrough = value.allowSubjectPassthrough;
      this._celExpression.internalValue = value.celExpression;
    }
  }

  // allow_subject_alt_names_passthrough - computed: false, optional: false, required: true
  private _allowSubjectAltNamesPassthrough?: boolean | cdktf.IResolvable; 
  public get allowSubjectAltNamesPassthrough() {
    return this.getBooleanAttribute('allow_subject_alt_names_passthrough');
  }
  public set allowSubjectAltNamesPassthrough(value: boolean | cdktf.IResolvable) {
    this._allowSubjectAltNamesPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectAltNamesPassthroughInput() {
    return this._allowSubjectAltNamesPassthrough;
  }

  // allow_subject_passthrough - computed: false, optional: false, required: true
  private _allowSubjectPassthrough?: boolean | cdktf.IResolvable; 
  public get allowSubjectPassthrough() {
    return this.getBooleanAttribute('allow_subject_passthrough');
  }
  public set allowSubjectPassthrough(value: boolean | cdktf.IResolvable) {
    this._allowSubjectPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectPassthroughInput() {
    return this._allowSubjectPassthrough;
  }

  // cel_expression - computed: false, optional: true, required: false
  private _celExpression = new PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference(this, "cel_expression");
  public get celExpression() {
    return this._celExpression;
  }
  public putCelExpression(value: PrivatecaCertificateTemplateIdentityConstraintsCelExpression) {
    this._celExpression.internalValue = value;
  }
  public resetCelExpression() {
    this._celExpression.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celExpressionInput() {
    return this._celExpression.internalValue;
  }
}
export interface PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference {
    return new PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePassthroughExtensions {
  /**
  * Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#known_extensions PrivatecaCertificateTemplate#known_extensions}
  */
  readonly knownExtensions?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#additional_extensions PrivatecaCertificateTemplate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | cdktf.IResolvable;
}

export function privatecaCertificateTemplatePassthroughExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsOutputReference | PrivatecaCertificateTemplatePassthroughExtensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_extensions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.knownExtensions),
    additional_extensions: cdktf.listMapper(privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToTerraform, true)(struct!.additionalExtensions),
  }
}

export class PrivatecaCertificateTemplatePassthroughExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePassthroughExtensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._knownExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.knownExtensions = this._knownExtensions;
    }
    if (this._additionalExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePassthroughExtensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._knownExtensions = undefined;
      this._additionalExtensions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._knownExtensions = value.knownExtensions;
      this._additionalExtensions.internalValue = value.additionalExtensions;
    }
  }

  // known_extensions - computed: false, optional: true, required: false
  private _knownExtensions?: string[]; 
  public get knownExtensions() {
    return this.getListAttribute('known_extensions');
  }
  public set knownExtensions(value: string[]) {
    this._knownExtensions = value;
  }
  public resetKnownExtensions() {
    this._knownExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownExtensionsInput() {
    return this._knownExtensions;
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions = new PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList(this, "additional_extensions", false);
  public get additionalExtensions() {
    return this._additionalExtensions;
  }
  public putAdditionalExtensions(value: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | cdktf.IResolvable) {
    this._additionalExtensions.internalValue = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions.internalValue;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference | PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._objectIdPath = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions {
  /**
  * Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#critical PrivatecaCertificateTemplate#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Required. The value of this X.509 extension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#value PrivatecaCertificateTemplate#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#object_id PrivatecaCertificateTemplate#object_id}
  */
  readonly objectId: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId;
}

export function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._critical !== undefined) {
      hasAnyValues = true;
      internalValueResult.critical = this._critical;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._objectId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectId = this._objectId?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._critical = undefined;
      this._value = undefined;
      this._objectId.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._critical = value.critical;
      this._value = value.value;
      this._objectId.internalValue = value.objectId;
    }
  }

  // critical - computed: false, optional: true, required: false
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
  }
  public resetCritical() {
    this._critical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criticalInput() {
    return this._critical;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId = new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference(this, "object_id");
  public get objectId() {
    return this._objectId;
  }
  public putObjectId(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId) {
    this._objectId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId.internalValue;
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference {
    return new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesCaOptions {
  /**
  * Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#is_ca PrivatecaCertificateTemplate#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#max_issuer_path_length PrivatecaCertificateTemplate#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
}

export function privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference | PrivatecaCertificateTemplatePredefinedValuesCaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesCaOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.isCa = this._isCa;
    }
    if (this._maxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxIssuerPathLength = this._maxIssuerPathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesCaOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isCa = undefined;
      this._maxIssuerPathLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isCa = value.isCa;
      this._maxIssuerPathLength = value.maxIssuerPathLength;
    }
  }

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: boolean | cdktf.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }
  public set isCa(value: boolean | cdktf.IResolvable) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa;
  }

  // max_issuer_path_length - computed: false, optional: true, required: false
  private _maxIssuerPathLength?: number; 
  public get maxIssuerPathLength() {
    return this.getNumberAttribute('max_issuer_path_length');
  }
  public set maxIssuerPathLength(value: number) {
    this._maxIssuerPathLength = value;
  }
  public resetMaxIssuerPathLength() {
    this._maxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIssuerPathLengthInput() {
    return this._maxIssuerPathLength;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#cert_sign PrivatecaCertificateTemplate#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#content_commitment PrivatecaCertificateTemplate#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#crl_sign PrivatecaCertificateTemplate#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#data_encipherment PrivatecaCertificateTemplate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#decipher_only PrivatecaCertificateTemplate#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#digital_signature PrivatecaCertificateTemplate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#encipher_only PrivatecaCertificateTemplate#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#key_agreement PrivatecaCertificateTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#key_encipherment PrivatecaCertificateTemplate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_sign: cdktf.booleanToTerraform(struct!.certSign),
    content_commitment: cdktf.booleanToTerraform(struct!.contentCommitment),
    crl_sign: cdktf.booleanToTerraform(struct!.crlSign),
    data_encipherment: cdktf.booleanToTerraform(struct!.dataEncipherment),
    decipher_only: cdktf.booleanToTerraform(struct!.decipherOnly),
    digital_signature: cdktf.booleanToTerraform(struct!.digitalSignature),
    encipher_only: cdktf.booleanToTerraform(struct!.encipherOnly),
    key_agreement: cdktf.booleanToTerraform(struct!.keyAgreement),
    key_encipherment: cdktf.booleanToTerraform(struct!.keyEncipherment),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.certSign = this._certSign;
    }
    if (this._contentCommitment !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentCommitment = this._contentCommitment;
    }
    if (this._crlSign !== undefined) {
      hasAnyValues = true;
      internalValueResult.crlSign = this._crlSign;
    }
    if (this._dataEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataEncipherment = this._dataEncipherment;
    }
    if (this._decipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.decipherOnly = this._decipherOnly;
    }
    if (this._digitalSignature !== undefined) {
      hasAnyValues = true;
      internalValueResult.digitalSignature = this._digitalSignature;
    }
    if (this._encipherOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.encipherOnly = this._encipherOnly;
    }
    if (this._keyAgreement !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAgreement = this._keyAgreement;
    }
    if (this._keyEncipherment !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyEncipherment = this._keyEncipherment;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certSign = undefined;
      this._contentCommitment = undefined;
      this._crlSign = undefined;
      this._dataEncipherment = undefined;
      this._decipherOnly = undefined;
      this._digitalSignature = undefined;
      this._encipherOnly = undefined;
      this._keyAgreement = undefined;
      this._keyEncipherment = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certSign = value.certSign;
      this._contentCommitment = value.contentCommitment;
      this._crlSign = value.crlSign;
      this._dataEncipherment = value.dataEncipherment;
      this._decipherOnly = value.decipherOnly;
      this._digitalSignature = value.digitalSignature;
      this._encipherOnly = value.encipherOnly;
      this._keyAgreement = value.keyAgreement;
      this._keyEncipherment = value.keyEncipherment;
    }
  }

  // cert_sign - computed: false, optional: true, required: false
  private _certSign?: boolean | cdktf.IResolvable; 
  public get certSign() {
    return this.getBooleanAttribute('cert_sign');
  }
  public set certSign(value: boolean | cdktf.IResolvable) {
    this._certSign = value;
  }
  public resetCertSign() {
    this._certSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSignInput() {
    return this._certSign;
  }

  // content_commitment - computed: false, optional: true, required: false
  private _contentCommitment?: boolean | cdktf.IResolvable; 
  public get contentCommitment() {
    return this.getBooleanAttribute('content_commitment');
  }
  public set contentCommitment(value: boolean | cdktf.IResolvable) {
    this._contentCommitment = value;
  }
  public resetContentCommitment() {
    this._contentCommitment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCommitmentInput() {
    return this._contentCommitment;
  }

  // crl_sign - computed: false, optional: true, required: false
  private _crlSign?: boolean | cdktf.IResolvable; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }
  public set crlSign(value: boolean | cdktf.IResolvable) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign;
  }

  // data_encipherment - computed: false, optional: true, required: false
  private _dataEncipherment?: boolean | cdktf.IResolvable; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }
  public set dataEncipherment(value: boolean | cdktf.IResolvable) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment;
  }

  // decipher_only - computed: false, optional: true, required: false
  private _decipherOnly?: boolean | cdktf.IResolvable; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }
  public set decipherOnly(value: boolean | cdktf.IResolvable) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly;
  }

  // digital_signature - computed: false, optional: true, required: false
  private _digitalSignature?: boolean | cdktf.IResolvable; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }
  public set digitalSignature(value: boolean | cdktf.IResolvable) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature;
  }

  // encipher_only - computed: false, optional: true, required: false
  private _encipherOnly?: boolean | cdktf.IResolvable; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }
  public set encipherOnly(value: boolean | cdktf.IResolvable) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly;
  }

  // key_agreement - computed: false, optional: true, required: false
  private _keyAgreement?: boolean | cdktf.IResolvable; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }
  public set keyAgreement(value: boolean | cdktf.IResolvable) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement;
  }

  // key_encipherment - computed: false, optional: true, required: false
  private _keyEncipherment?: boolean | cdktf.IResolvable; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
  public set keyEncipherment(value: boolean | cdktf.IResolvable) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#client_auth PrivatecaCertificateTemplate#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#code_signing PrivatecaCertificateTemplate#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#email_protection PrivatecaCertificateTemplate#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#ocsp_signing PrivatecaCertificateTemplate#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#server_auth PrivatecaCertificateTemplate#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#time_stamping PrivatecaCertificateTemplate#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_auth: cdktf.booleanToTerraform(struct!.clientAuth),
    code_signing: cdktf.booleanToTerraform(struct!.codeSigning),
    email_protection: cdktf.booleanToTerraform(struct!.emailProtection),
    ocsp_signing: cdktf.booleanToTerraform(struct!.ocspSigning),
    server_auth: cdktf.booleanToTerraform(struct!.serverAuth),
    time_stamping: cdktf.booleanToTerraform(struct!.timeStamping),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuth = this._clientAuth;
    }
    if (this._codeSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeSigning = this._codeSigning;
    }
    if (this._emailProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailProtection = this._emailProtection;
    }
    if (this._ocspSigning !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspSigning = this._ocspSigning;
    }
    if (this._serverAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuth = this._serverAuth;
    }
    if (this._timeStamping !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeStamping = this._timeStamping;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientAuth = undefined;
      this._codeSigning = undefined;
      this._emailProtection = undefined;
      this._ocspSigning = undefined;
      this._serverAuth = undefined;
      this._timeStamping = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientAuth = value.clientAuth;
      this._codeSigning = value.codeSigning;
      this._emailProtection = value.emailProtection;
      this._ocspSigning = value.ocspSigning;
      this._serverAuth = value.serverAuth;
      this._timeStamping = value.timeStamping;
    }
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: boolean | cdktf.IResolvable; 
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth');
  }
  public set clientAuth(value: boolean | cdktf.IResolvable) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth;
  }

  // code_signing - computed: false, optional: true, required: false
  private _codeSigning?: boolean | cdktf.IResolvable; 
  public get codeSigning() {
    return this.getBooleanAttribute('code_signing');
  }
  public set codeSigning(value: boolean | cdktf.IResolvable) {
    this._codeSigning = value;
  }
  public resetCodeSigning() {
    this._codeSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningInput() {
    return this._codeSigning;
  }

  // email_protection - computed: false, optional: true, required: false
  private _emailProtection?: boolean | cdktf.IResolvable; 
  public get emailProtection() {
    return this.getBooleanAttribute('email_protection');
  }
  public set emailProtection(value: boolean | cdktf.IResolvable) {
    this._emailProtection = value;
  }
  public resetEmailProtection() {
    this._emailProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProtectionInput() {
    return this._emailProtection;
  }

  // ocsp_signing - computed: false, optional: true, required: false
  private _ocspSigning?: boolean | cdktf.IResolvable; 
  public get ocspSigning() {
    return this.getBooleanAttribute('ocsp_signing');
  }
  public set ocspSigning(value: boolean | cdktf.IResolvable) {
    this._ocspSigning = value;
  }
  public resetOcspSigning() {
    this._ocspSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSigningInput() {
    return this._ocspSigning;
  }

  // server_auth - computed: false, optional: true, required: false
  private _serverAuth?: boolean | cdktf.IResolvable; 
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth');
  }
  public set serverAuth(value: boolean | cdktf.IResolvable) {
    this._serverAuth = value;
  }
  public resetServerAuth() {
    this._serverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthInput() {
    return this._serverAuth;
  }

  // time_stamping - computed: false, optional: true, required: false
  private _timeStamping?: boolean | cdktf.IResolvable; 
  public get timeStamping() {
    return this.getBooleanAttribute('time_stamping');
  }
  public set timeStamping(value: boolean | cdktf.IResolvable) {
    this._timeStamping = value;
  }
  public resetTimeStamping() {
    this._timeStamping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampingInput() {
    return this._timeStamping;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference {
    return new PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsage {
  /**
  * base_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#base_key_usage PrivatecaCertificateTemplate#base_key_usage}
  */
  readonly baseKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#extended_key_usage PrivatecaCertificateTemplate#extended_key_usage}
  */
  readonly extendedKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#unknown_extended_key_usages PrivatecaCertificateTemplate#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToTerraform, true)(struct!.unknownExtendedKeyUsages),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._baseKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseKeyUsage = this._baseKeyUsage?.internalValue;
    }
    if (this._extendedKeyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedKeyUsage = this._extendedKeyUsage?.internalValue;
    }
    if (this._unknownExtendedKeyUsages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownExtendedKeyUsages = this._unknownExtendedKeyUsages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseKeyUsage.internalValue = undefined;
      this._extendedKeyUsage.internalValue = undefined;
      this._unknownExtendedKeyUsages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseKeyUsage.internalValue = value.baseKeyUsage;
      this._extendedKeyUsage.internalValue = value.extendedKeyUsage;
      this._unknownExtendedKeyUsages.internalValue = value.unknownExtendedKeyUsages;
    }
  }

  // base_key_usage - computed: false, optional: true, required: false
  private _baseKeyUsage = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference(this, "base_key_usage");
  public get baseKeyUsage() {
    return this._baseKeyUsage;
  }
  public putBaseKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage) {
    this._baseKeyUsage.internalValue = value;
  }
  public resetBaseKeyUsage() {
    this._baseKeyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage.internalValue;
  }

  // extended_key_usage - computed: false, optional: true, required: false
  private _extendedKeyUsage = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference(this, "extended_key_usage");
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }
  public putExtendedKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage.internalValue = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage.internalValue;
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList(this, "unknown_extended_key_usages", false);
  public get unknownExtendedKeyUsages() {
    return this._unknownExtendedKeyUsages;
  }
  public putUnknownExtendedKeyUsages(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable) {
    this._unknownExtendedKeyUsages.internalValue = value;
  }
  public resetUnknownExtendedKeyUsages() {
    this._unknownExtendedKeyUsages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownExtendedKeyUsagesInput() {
    return this._unknownExtendedKeyUsages.internalValue;
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesPolicyIds {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateTemplatePredefinedValuesPolicyIdsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValuesPolicyIds | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValuesPolicyIds | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._objectIdPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._objectIdPath = value.objectIdPath;
    }
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference {
    return new PrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCertificateTemplatePredefinedValues {
  /**
  * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#aia_ocsp_servers PrivatecaCertificateTemplate#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#additional_extensions PrivatecaCertificateTemplate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | cdktf.IResolvable;
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#ca_options PrivatecaCertificateTemplate#ca_options}
  */
  readonly caOptions?: PrivatecaCertificateTemplatePredefinedValuesCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#key_usage PrivatecaCertificateTemplate#key_usage}
  */
  readonly keyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#policy_ids PrivatecaCertificateTemplate#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | cdktf.IResolvable;
}

export function privatecaCertificateTemplatePredefinedValuesToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesOutputReference | PrivatecaCertificateTemplatePredefinedValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform, true)(struct!.additionalExtensions),
    ca_options: privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform(struct!.caOptions),
    key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesPolicyIdsToTerraform, true)(struct!.policyIds),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplatePredefinedValues | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiaOcspServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiaOcspServers = this._aiaOcspServers;
    }
    if (this._additionalExtensions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions?.internalValue;
    }
    if (this._caOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caOptions = this._caOptions?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._policyIds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyIds = this._policyIds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateTemplatePredefinedValues | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aiaOcspServers = undefined;
      this._additionalExtensions.internalValue = undefined;
      this._caOptions.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._policyIds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aiaOcspServers = value.aiaOcspServers;
      this._additionalExtensions.internalValue = value.additionalExtensions;
      this._caOptions.internalValue = value.caOptions;
      this._keyUsage.internalValue = value.keyUsage;
      this._policyIds.internalValue = value.policyIds;
    }
  }

  // aia_ocsp_servers - computed: false, optional: true, required: false
  private _aiaOcspServers?: string[]; 
  public get aiaOcspServers() {
    return this.getListAttribute('aia_ocsp_servers');
  }
  public set aiaOcspServers(value: string[]) {
    this._aiaOcspServers = value;
  }
  public resetAiaOcspServers() {
    this._aiaOcspServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiaOcspServersInput() {
    return this._aiaOcspServers;
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions = new PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList(this, "additional_extensions", false);
  public get additionalExtensions() {
    return this._additionalExtensions;
  }
  public putAdditionalExtensions(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | cdktf.IResolvable) {
    this._additionalExtensions.internalValue = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions.internalValue;
  }

  // ca_options - computed: false, optional: true, required: false
  private _caOptions = new PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference(this, "ca_options");
  public get caOptions() {
    return this._caOptions;
  }
  public putCaOptions(value: PrivatecaCertificateTemplatePredefinedValuesCaOptions) {
    this._caOptions.internalValue = value;
  }
  public resetCaOptions() {
    this._caOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions.internalValue;
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  public resetKeyUsage() {
    this._keyUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds = new PrivatecaCertificateTemplatePredefinedValuesPolicyIdsList(this, "policy_ids", false);
  public get policyIds() {
    return this._policyIds;
  }
  public putPolicyIds(value: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | cdktf.IResolvable) {
    this._policyIds.internalValue = value;
  }
  public resetPolicyIds() {
    this._policyIds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds.internalValue;
  }
}
export interface PrivatecaCertificateTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#create PrivatecaCertificateTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#delete PrivatecaCertificateTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template#update PrivatecaCertificateTemplate#update}
  */
  readonly update?: string;
}

export function privatecaCertificateTemplateTimeoutsToTerraform(struct?: PrivatecaCertificateTemplateTimeoutsOutputReference | PrivatecaCertificateTemplateTimeouts | cdktf.IResolvable): any {
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

export class PrivatecaCertificateTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCertificateTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivatecaCertificateTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template google_privateca_certificate_template}
*/
export class PrivatecaCertificateTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privateca_certificate_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template google_privateca_certificate_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCertificateTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCertificateTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_certificate_template',
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._identityConstraints.internalValue = config.identityConstraints;
    this._passthroughExtensions.internalValue = config.passthroughExtensions;
    this._predefinedValues.internalValue = config.predefinedValues;
    this._timeouts.internalValue = config.timeouts;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // identity_constraints - computed: false, optional: true, required: false
  private _identityConstraints = new PrivatecaCertificateTemplateIdentityConstraintsOutputReference(this, "identity_constraints");
  public get identityConstraints() {
    return this._identityConstraints;
  }
  public putIdentityConstraints(value: PrivatecaCertificateTemplateIdentityConstraints) {
    this._identityConstraints.internalValue = value;
  }
  public resetIdentityConstraints() {
    this._identityConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConstraintsInput() {
    return this._identityConstraints.internalValue;
  }

  // passthrough_extensions - computed: false, optional: true, required: false
  private _passthroughExtensions = new PrivatecaCertificateTemplatePassthroughExtensionsOutputReference(this, "passthrough_extensions");
  public get passthroughExtensions() {
    return this._passthroughExtensions;
  }
  public putPassthroughExtensions(value: PrivatecaCertificateTemplatePassthroughExtensions) {
    this._passthroughExtensions.internalValue = value;
  }
  public resetPassthroughExtensions() {
    this._passthroughExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughExtensionsInput() {
    return this._passthroughExtensions.internalValue;
  }

  // predefined_values - computed: false, optional: true, required: false
  private _predefinedValues = new PrivatecaCertificateTemplatePredefinedValuesOutputReference(this, "predefined_values");
  public get predefinedValues() {
    return this._predefinedValues;
  }
  public putPredefinedValues(value: PrivatecaCertificateTemplatePredefinedValues) {
    this._predefinedValues.internalValue = value;
  }
  public resetPredefinedValues() {
    this._predefinedValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedValuesInput() {
    return this._predefinedValues.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatecaCertificateTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatecaCertificateTemplateTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      identity_constraints: privatecaCertificateTemplateIdentityConstraintsToTerraform(this._identityConstraints.internalValue),
      passthrough_extensions: privatecaCertificateTemplatePassthroughExtensionsToTerraform(this._passthroughExtensions.internalValue),
      predefined_values: privatecaCertificateTemplatePredefinedValuesToTerraform(this._predefinedValues.internalValue),
      timeouts: privatecaCertificateTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
