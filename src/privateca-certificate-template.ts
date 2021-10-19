// https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCertificateTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. A human-readable description of scenarios this template is intended for.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#description PrivatecaCertificateTemplate#description}
  */
  readonly description?: string;
  /**
  * Optional. Labels with user-defined metadata.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#labels PrivatecaCertificateTemplate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The location for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#location PrivatecaCertificateTemplate#location}
  */
  readonly location: string;
  /**
  * The resource name for this CertificateTemplate in the format `projects/*\/locations/*\/certificateTemplates/*`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#name PrivatecaCertificateTemplate#name}
  */
  readonly name: string;
  /**
  * The project for the resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#project PrivatecaCertificateTemplate#project}
  */
  readonly project?: string;
  /**
  * identity_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#identity_constraints PrivatecaCertificateTemplate#identity_constraints}
  */
  readonly identityConstraints?: PrivatecaCertificateTemplateIdentityConstraints;
  /**
  * passthrough_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#passthrough_extensions PrivatecaCertificateTemplate#passthrough_extensions}
  */
  readonly passthroughExtensions?: PrivatecaCertificateTemplatePassthroughExtensions;
  /**
  * predefined_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#predefined_values PrivatecaCertificateTemplate#predefined_values}
  */
  readonly predefinedValues?: PrivatecaCertificateTemplatePredefinedValues;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#timeouts PrivatecaCertificateTemplate#timeouts}
  */
  readonly timeouts?: PrivatecaCertificateTemplateTimeouts;
}
export interface PrivatecaCertificateTemplateIdentityConstraintsCelExpression {
  /**
  * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#description PrivatecaCertificateTemplate#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#expression PrivatecaCertificateTemplate#expression}
  */
  readonly expression?: string;
  /**
  * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#location PrivatecaCertificateTemplate#location}
  */
  readonly location?: string;
  /**
  * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#title PrivatecaCertificateTemplate#title}
  */
  readonly title?: string;
}

function privatecaCertificateTemplateIdentityConstraintsCelExpressionToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference | PrivatecaCertificateTemplateIdentityConstraintsCelExpression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // expression - computed: false, optional: true, required: false
  private _expression?: string | undefined; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string | undefined) {
    this._expression = value;
  }
  public resetExpression() {
    this._expression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionInput() {
    return this._expression
  }

  // location - computed: false, optional: true, required: false
  private _location?: string | undefined; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string | undefined) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location
  }

  // title - computed: false, optional: true, required: false
  private _title?: string | undefined; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string | undefined) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title
  }
}
export interface PrivatecaCertificateTemplateIdentityConstraints {
  /**
  * Required. If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#allow_subject_alt_names_passthrough PrivatecaCertificateTemplate#allow_subject_alt_names_passthrough}
  */
  readonly allowSubjectAltNamesPassthrough: boolean | cdktf.IResolvable;
  /**
  * Required. If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#allow_subject_passthrough PrivatecaCertificateTemplate#allow_subject_passthrough}
  */
  readonly allowSubjectPassthrough: boolean | cdktf.IResolvable;
  /**
  * cel_expression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#cel_expression PrivatecaCertificateTemplate#cel_expression}
  */
  readonly celExpression?: PrivatecaCertificateTemplateIdentityConstraintsCelExpression;
}

function privatecaCertificateTemplateIdentityConstraintsToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsOutputReference | PrivatecaCertificateTemplateIdentityConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_subject_alt_names_passthrough - computed: false, optional: false, required: true
  private _allowSubjectAltNamesPassthrough?: boolean | cdktf.IResolvable; 
  public get allowSubjectAltNamesPassthrough() {
    return this.getBooleanAttribute('allow_subject_alt_names_passthrough') as any;
  }
  public set allowSubjectAltNamesPassthrough(value: boolean | cdktf.IResolvable) {
    this._allowSubjectAltNamesPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectAltNamesPassthroughInput() {
    return this._allowSubjectAltNamesPassthrough
  }

  // allow_subject_passthrough - computed: false, optional: false, required: true
  private _allowSubjectPassthrough?: boolean | cdktf.IResolvable; 
  public get allowSubjectPassthrough() {
    return this.getBooleanAttribute('allow_subject_passthrough') as any;
  }
  public set allowSubjectPassthrough(value: boolean | cdktf.IResolvable) {
    this._allowSubjectPassthrough = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSubjectPassthroughInput() {
    return this._allowSubjectPassthrough
  }

  // cel_expression - computed: false, optional: true, required: false
  private _celExpression?: PrivatecaCertificateTemplateIdentityConstraintsCelExpression | undefined; 
  private __celExpressionOutput = new PrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference(this as any, "cel_expression", true);
  public get celExpression() {
    return this.__celExpressionOutput;
  }
  public putCelExpression(value: PrivatecaCertificateTemplateIdentityConstraintsCelExpression | undefined) {
    this._celExpression = value;
  }
  public resetCelExpression() {
    this._celExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celExpressionInput() {
    return this._celExpression
  }
}
export interface PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCertificateTemplatePassthroughExtensions {
  /**
  * Optional. A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#known_extensions PrivatecaCertificateTemplate#known_extensions}
  */
  readonly knownExtensions?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#additional_extensions PrivatecaCertificateTemplate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[];
}

function privatecaCertificateTemplatePassthroughExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensionsOutputReference | PrivatecaCertificateTemplatePassthroughExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    known_extensions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.knownExtensions),
    additional_extensions: cdktf.listMapper(privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
  }
}

export class PrivatecaCertificateTemplatePassthroughExtensionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // known_extensions - computed: false, optional: true, required: false
  private _knownExtensions?: string[] | undefined; 
  public get knownExtensions() {
    return this.getListAttribute('known_extensions');
  }
  public set knownExtensions(value: string[] | undefined) {
    this._knownExtensions = value;
  }
  public resetKnownExtensions() {
    this._knownExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get knownExtensionsInput() {
    return this._knownExtensions
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions?: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | undefined; 
  public get additionalExtensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_extensions') as any;
  }
  public set additionalExtensions(value: PrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions[] | undefined) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference | PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // object_id_path - computed: false, optional: false, required: true
  private _objectIdPath?: number[]; 
  public get objectIdPath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('object_id_path') as any;
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions {
  /**
  * Optional. Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#critical PrivatecaCertificateTemplate#critical}
  */
  readonly critical?: boolean | cdktf.IResolvable;
  /**
  * Required. The value of this X.509 extension.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#value PrivatecaCertificateTemplate#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#object_id PrivatecaCertificateTemplate#object_id}
  */
  readonly objectId: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId;
}

function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}

export interface PrivatecaCertificateTemplatePredefinedValuesCaOptions {
  /**
  * Optional. Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#is_ca PrivatecaCertificateTemplate#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Optional. Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#max_issuer_path_length PrivatecaCertificateTemplate#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
}

function privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference | PrivatecaCertificateTemplatePredefinedValuesCaOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_ca - computed: false, optional: true, required: false
  private _isCa?: boolean | cdktf.IResolvable | undefined; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca') as any;
  }
  public set isCa(value: boolean | cdktf.IResolvable | undefined) {
    this._isCa = value;
  }
  public resetIsCa() {
    this._isCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isCaInput() {
    return this._isCa
  }

  // max_issuer_path_length - computed: false, optional: true, required: false
  private _maxIssuerPathLength?: number | undefined; 
  public get maxIssuerPathLength() {
    return this.getNumberAttribute('max_issuer_path_length');
  }
  public set maxIssuerPathLength(value: number | undefined) {
    this._maxIssuerPathLength = value;
  }
  public resetMaxIssuerPathLength() {
    this._maxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxIssuerPathLengthInput() {
    return this._maxIssuerPathLength
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#cert_sign PrivatecaCertificateTemplate#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#content_commitment PrivatecaCertificateTemplate#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#crl_sign PrivatecaCertificateTemplate#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#data_encipherment PrivatecaCertificateTemplate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#decipher_only PrivatecaCertificateTemplate#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#digital_signature PrivatecaCertificateTemplate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#encipher_only PrivatecaCertificateTemplate#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#key_agreement PrivatecaCertificateTemplate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#key_encipherment PrivatecaCertificateTemplate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

function privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cert_sign - computed: false, optional: true, required: false
  private _certSign?: boolean | cdktf.IResolvable | undefined; 
  public get certSign() {
    return this.getBooleanAttribute('cert_sign') as any;
  }
  public set certSign(value: boolean | cdktf.IResolvable | undefined) {
    this._certSign = value;
  }
  public resetCertSign() {
    this._certSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certSignInput() {
    return this._certSign
  }

  // content_commitment - computed: false, optional: true, required: false
  private _contentCommitment?: boolean | cdktf.IResolvable | undefined; 
  public get contentCommitment() {
    return this.getBooleanAttribute('content_commitment') as any;
  }
  public set contentCommitment(value: boolean | cdktf.IResolvable | undefined) {
    this._contentCommitment = value;
  }
  public resetContentCommitment() {
    this._contentCommitment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCommitmentInput() {
    return this._contentCommitment
  }

  // crl_sign - computed: false, optional: true, required: false
  private _crlSign?: boolean | cdktf.IResolvable | undefined; 
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign') as any;
  }
  public set crlSign(value: boolean | cdktf.IResolvable | undefined) {
    this._crlSign = value;
  }
  public resetCrlSign() {
    this._crlSign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlSignInput() {
    return this._crlSign
  }

  // data_encipherment - computed: false, optional: true, required: false
  private _dataEncipherment?: boolean | cdktf.IResolvable | undefined; 
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment') as any;
  }
  public set dataEncipherment(value: boolean | cdktf.IResolvable | undefined) {
    this._dataEncipherment = value;
  }
  public resetDataEncipherment() {
    this._dataEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataEnciphermentInput() {
    return this._dataEncipherment
  }

  // decipher_only - computed: false, optional: true, required: false
  private _decipherOnly?: boolean | cdktf.IResolvable | undefined; 
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only') as any;
  }
  public set decipherOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._decipherOnly = value;
  }
  public resetDecipherOnly() {
    this._decipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decipherOnlyInput() {
    return this._decipherOnly
  }

  // digital_signature - computed: false, optional: true, required: false
  private _digitalSignature?: boolean | cdktf.IResolvable | undefined; 
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature') as any;
  }
  public set digitalSignature(value: boolean | cdktf.IResolvable | undefined) {
    this._digitalSignature = value;
  }
  public resetDigitalSignature() {
    this._digitalSignature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalSignatureInput() {
    return this._digitalSignature
  }

  // encipher_only - computed: false, optional: true, required: false
  private _encipherOnly?: boolean | cdktf.IResolvable | undefined; 
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only') as any;
  }
  public set encipherOnly(value: boolean | cdktf.IResolvable | undefined) {
    this._encipherOnly = value;
  }
  public resetEncipherOnly() {
    this._encipherOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encipherOnlyInput() {
    return this._encipherOnly
  }

  // key_agreement - computed: false, optional: true, required: false
  private _keyAgreement?: boolean | cdktf.IResolvable | undefined; 
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement') as any;
  }
  public set keyAgreement(value: boolean | cdktf.IResolvable | undefined) {
    this._keyAgreement = value;
  }
  public resetKeyAgreement() {
    this._keyAgreement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAgreementInput() {
    return this._keyAgreement
  }

  // key_encipherment - computed: false, optional: true, required: false
  private _keyEncipherment?: boolean | cdktf.IResolvable | undefined; 
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment') as any;
  }
  public set keyEncipherment(value: boolean | cdktf.IResolvable | undefined) {
    this._keyEncipherment = value;
  }
  public resetKeyEncipherment() {
    this._keyEncipherment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyEnciphermentInput() {
    return this._keyEncipherment
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#client_auth PrivatecaCertificateTemplate#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#code_signing PrivatecaCertificateTemplate#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#email_protection PrivatecaCertificateTemplate#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#ocsp_signing PrivatecaCertificateTemplate#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#server_auth PrivatecaCertificateTemplate#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#time_stamping PrivatecaCertificateTemplate#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

function privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // client_auth - computed: false, optional: true, required: false
  private _clientAuth?: boolean | cdktf.IResolvable | undefined; 
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth') as any;
  }
  public set clientAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._clientAuth = value;
  }
  public resetClientAuth() {
    this._clientAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth
  }

  // code_signing - computed: false, optional: true, required: false
  private _codeSigning?: boolean | cdktf.IResolvable | undefined; 
  public get codeSigning() {
    return this.getBooleanAttribute('code_signing') as any;
  }
  public set codeSigning(value: boolean | cdktf.IResolvable | undefined) {
    this._codeSigning = value;
  }
  public resetCodeSigning() {
    this._codeSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeSigningInput() {
    return this._codeSigning
  }

  // email_protection - computed: false, optional: true, required: false
  private _emailProtection?: boolean | cdktf.IResolvable | undefined; 
  public get emailProtection() {
    return this.getBooleanAttribute('email_protection') as any;
  }
  public set emailProtection(value: boolean | cdktf.IResolvable | undefined) {
    this._emailProtection = value;
  }
  public resetEmailProtection() {
    this._emailProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailProtectionInput() {
    return this._emailProtection
  }

  // ocsp_signing - computed: false, optional: true, required: false
  private _ocspSigning?: boolean | cdktf.IResolvable | undefined; 
  public get ocspSigning() {
    return this.getBooleanAttribute('ocsp_signing') as any;
  }
  public set ocspSigning(value: boolean | cdktf.IResolvable | undefined) {
    this._ocspSigning = value;
  }
  public resetOcspSigning() {
    this._ocspSigning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspSigningInput() {
    return this._ocspSigning
  }

  // server_auth - computed: false, optional: true, required: false
  private _serverAuth?: boolean | cdktf.IResolvable | undefined; 
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth') as any;
  }
  public set serverAuth(value: boolean | cdktf.IResolvable | undefined) {
    this._serverAuth = value;
  }
  public resetServerAuth() {
    this._serverAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuthInput() {
    return this._serverAuth
  }

  // time_stamping - computed: false, optional: true, required: false
  private _timeStamping?: boolean | cdktf.IResolvable | undefined; 
  public get timeStamping() {
    return this.getBooleanAttribute('time_stamping') as any;
  }
  public set timeStamping(value: boolean | cdktf.IResolvable | undefined) {
    this._timeStamping = value;
  }
  public resetTimeStamping() {
    this._timeStamping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStampingInput() {
    return this._timeStamping
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCertificateTemplatePredefinedValuesKeyUsage {
  /**
  * base_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#base_key_usage PrivatecaCertificateTemplate#base_key_usage}
  */
  readonly baseKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#extended_key_usage PrivatecaCertificateTemplate#extended_key_usage}
  */
  readonly extendedKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#unknown_extended_key_usages PrivatecaCertificateTemplate#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[];
}

function privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference | PrivatecaCertificateTemplatePredefinedValuesKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // base_key_usage - computed: false, optional: true, required: false
  private _baseKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage | undefined; 
  private __baseKeyUsageOutput = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference(this as any, "base_key_usage", true);
  public get baseKeyUsage() {
    return this.__baseKeyUsageOutput;
  }
  public putBaseKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage | undefined) {
    this._baseKeyUsage = value;
  }
  public resetBaseKeyUsage() {
    this._baseKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage
  }

  // extended_key_usage - computed: false, optional: true, required: false
  private _extendedKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage | undefined; 
  private __extendedKeyUsageOutput = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference(this as any, "extended_key_usage", true);
  public get extendedKeyUsage() {
    return this.__extendedKeyUsageOutput;
  }
  public putExtendedKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage | undefined) {
    this._extendedKeyUsage = value;
  }
  public resetExtendedKeyUsage() {
    this._extendedKeyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | undefined; 
  public get unknownExtendedKeyUsages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unknown_extended_key_usages') as any;
  }
  public set unknownExtendedKeyUsages(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[] | undefined) {
    this._unknownExtendedKeyUsages = value;
  }
  public resetUnknownExtendedKeyUsages() {
    this._unknownExtendedKeyUsages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownExtendedKeyUsagesInput() {
    return this._unknownExtendedKeyUsages
  }
}
export interface PrivatecaCertificateTemplatePredefinedValuesPolicyIds {
  /**
  * Required. The parts of an OID path. The most significant parts of the path come first.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#object_id_path PrivatecaCertificateTemplate#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateTemplatePredefinedValuesPolicyIdsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCertificateTemplatePredefinedValues {
  /**
  * Optional. Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#aia_ocsp_servers PrivatecaCertificateTemplate#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#additional_extensions PrivatecaCertificateTemplate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[];
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#ca_options PrivatecaCertificateTemplate#ca_options}
  */
  readonly caOptions?: PrivatecaCertificateTemplatePredefinedValuesCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#key_usage PrivatecaCertificateTemplate#key_usage}
  */
  readonly keyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#policy_ids PrivatecaCertificateTemplate#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[];
}

function privatecaCertificateTemplatePredefinedValuesToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesOutputReference | PrivatecaCertificateTemplatePredefinedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform(struct!.caOptions),
    key_usage: privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesPolicyIdsToTerraform)(struct!.policyIds),
  }
}

export class PrivatecaCertificateTemplatePredefinedValuesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // aia_ocsp_servers - computed: false, optional: true, required: false
  private _aiaOcspServers?: string[] | undefined; 
  public get aiaOcspServers() {
    return this.getListAttribute('aia_ocsp_servers');
  }
  public set aiaOcspServers(value: string[] | undefined) {
    this._aiaOcspServers = value;
  }
  public resetAiaOcspServers() {
    this._aiaOcspServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aiaOcspServersInput() {
    return this._aiaOcspServers
  }

  // additional_extensions - computed: false, optional: true, required: false
  private _additionalExtensions?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | undefined; 
  public get additionalExtensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_extensions') as any;
  }
  public set additionalExtensions(value: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions[] | undefined) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions
  }

  // ca_options - computed: false, optional: true, required: false
  private _caOptions?: PrivatecaCertificateTemplatePredefinedValuesCaOptions | undefined; 
  private __caOptionsOutput = new PrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference(this as any, "ca_options", true);
  public get caOptions() {
    return this.__caOptionsOutput;
  }
  public putCaOptions(value: PrivatecaCertificateTemplatePredefinedValuesCaOptions | undefined) {
    this._caOptions = value;
  }
  public resetCaOptions() {
    this._caOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions
  }

  // key_usage - computed: false, optional: true, required: false
  private _keyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsage | undefined; 
  private __keyUsageOutput = new PrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference(this as any, "key_usage", true);
  public get keyUsage() {
    return this.__keyUsageOutput;
  }
  public putKeyUsage(value: PrivatecaCertificateTemplatePredefinedValuesKeyUsage | undefined) {
    this._keyUsage = value;
  }
  public resetKeyUsage() {
    this._keyUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | undefined; 
  public get policyIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_ids') as any;
  }
  public set policyIds(value: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[] | undefined) {
    this._policyIds = value;
  }
  public resetPolicyIds() {
    this._policyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds
  }
}
export interface PrivatecaCertificateTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#create PrivatecaCertificateTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#delete PrivatecaCertificateTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#update PrivatecaCertificateTemplate#update}
  */
  readonly update?: string;
}

function privatecaCertificateTemplateTimeoutsToTerraform(struct?: PrivatecaCertificateTemplateTimeoutsOutputReference | PrivatecaCertificateTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // create - computed: false, optional: true, required: false
  private _create?: string | undefined; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string | undefined) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string | undefined; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string | undefined) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete
  }

  // update - computed: false, optional: true, required: false
  private _update?: string | undefined; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string | undefined) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html google_privateca_certificate_template}
*/
export class PrivatecaCertificateTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_privateca_certificate_template";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html google_privateca_certificate_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCertificateTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCertificateTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_certificate_template',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._identityConstraints = config.identityConstraints;
    this._passthroughExtensions = config.passthroughExtensions;
    this._predefinedValues = config.predefinedValues;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels
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
    return this._location
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
    return this._name
  }

  // project - computed: true, optional: true, required: false
  private _project?: string | undefined; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string | undefined) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // identity_constraints - computed: false, optional: true, required: false
  private _identityConstraints?: PrivatecaCertificateTemplateIdentityConstraints | undefined; 
  private __identityConstraintsOutput = new PrivatecaCertificateTemplateIdentityConstraintsOutputReference(this as any, "identity_constraints", true);
  public get identityConstraints() {
    return this.__identityConstraintsOutput;
  }
  public putIdentityConstraints(value: PrivatecaCertificateTemplateIdentityConstraints | undefined) {
    this._identityConstraints = value;
  }
  public resetIdentityConstraints() {
    this._identityConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConstraintsInput() {
    return this._identityConstraints
  }

  // passthrough_extensions - computed: false, optional: true, required: false
  private _passthroughExtensions?: PrivatecaCertificateTemplatePassthroughExtensions | undefined; 
  private __passthroughExtensionsOutput = new PrivatecaCertificateTemplatePassthroughExtensionsOutputReference(this as any, "passthrough_extensions", true);
  public get passthroughExtensions() {
    return this.__passthroughExtensionsOutput;
  }
  public putPassthroughExtensions(value: PrivatecaCertificateTemplatePassthroughExtensions | undefined) {
    this._passthroughExtensions = value;
  }
  public resetPassthroughExtensions() {
    this._passthroughExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passthroughExtensionsInput() {
    return this._passthroughExtensions
  }

  // predefined_values - computed: false, optional: true, required: false
  private _predefinedValues?: PrivatecaCertificateTemplatePredefinedValues | undefined; 
  private __predefinedValuesOutput = new PrivatecaCertificateTemplatePredefinedValuesOutputReference(this as any, "predefined_values", true);
  public get predefinedValues() {
    return this.__predefinedValuesOutput;
  }
  public putPredefinedValues(value: PrivatecaCertificateTemplatePredefinedValues | undefined) {
    this._predefinedValues = value;
  }
  public resetPredefinedValues() {
    this._predefinedValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get predefinedValuesInput() {
    return this._predefinedValues
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivatecaCertificateTemplateTimeouts | undefined; 
  private __timeoutsOutput = new PrivatecaCertificateTemplateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PrivatecaCertificateTemplateTimeouts | undefined) {
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
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      identity_constraints: privatecaCertificateTemplateIdentityConstraintsToTerraform(this._identityConstraints),
      passthrough_extensions: privatecaCertificateTemplatePassthroughExtensionsToTerraform(this._passthroughExtensions),
      predefined_values: privatecaCertificateTemplatePredefinedValuesToTerraform(this._predefinedValues),
      timeouts: privatecaCertificateTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
