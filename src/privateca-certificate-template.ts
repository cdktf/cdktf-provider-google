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
  readonly identityConstraints?: PrivatecaCertificateTemplateIdentityConstraints[];
  /**
  * passthrough_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#passthrough_extensions PrivatecaCertificateTemplate#passthrough_extensions}
  */
  readonly passthroughExtensions?: PrivatecaCertificateTemplatePassthroughExtensions[];
  /**
  * predefined_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#predefined_values PrivatecaCertificateTemplate#predefined_values}
  */
  readonly predefinedValues?: PrivatecaCertificateTemplatePredefinedValues[];
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

function privatecaCertificateTemplateIdentityConstraintsCelExpressionToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraintsCelExpression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
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
  readonly celExpression?: PrivatecaCertificateTemplateIdentityConstraintsCelExpression[];
}

function privatecaCertificateTemplateIdentityConstraintsToTerraform(struct?: PrivatecaCertificateTemplateIdentityConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_subject_alt_names_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectAltNamesPassthrough),
    allow_subject_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectPassthrough),
    cel_expression: cdktf.listMapper(privatecaCertificateTemplateIdentityConstraintsCelExpressionToTerraform)(struct!.celExpression),
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

function privatecaCertificateTemplatePassthroughExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePassthroughExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    known_extensions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.knownExtensions),
    additional_extensions: cdktf.listMapper(privatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
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

function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
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
  readonly objectId: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId[];
}

function privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdToTerraform)(struct!.objectId),
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

function privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesCaOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
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

function privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    client_auth: cdktf.booleanToTerraform(struct!.clientAuth),
    code_signing: cdktf.booleanToTerraform(struct!.codeSigning),
    email_protection: cdktf.booleanToTerraform(struct!.emailProtection),
    ocsp_signing: cdktf.booleanToTerraform(struct!.ocspSigning),
    server_auth: cdktf.booleanToTerraform(struct!.serverAuth),
    time_stamping: cdktf.booleanToTerraform(struct!.timeStamping),
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
  readonly baseKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage[];
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#extended_key_usage PrivatecaCertificateTemplate#extended_key_usage}
  */
  readonly extendedKeyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage[];
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#unknown_extended_key_usages PrivatecaCertificateTemplate#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages[];
}

function privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValuesKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base_key_usage: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageToTerraform)(struct!.baseKeyUsage),
    extended_key_usage: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageToTerraform)(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
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
  readonly caOptions?: PrivatecaCertificateTemplatePredefinedValuesCaOptions[];
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#key_usage PrivatecaCertificateTemplate#key_usage}
  */
  readonly keyUsage?: PrivatecaCertificateTemplatePredefinedValuesKeyUsage[];
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_template.html#policy_ids PrivatecaCertificateTemplate#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateTemplatePredefinedValuesPolicyIds[];
}

function privatecaCertificateTemplatePredefinedValuesToTerraform(struct?: PrivatecaCertificateTemplatePredefinedValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesCaOptionsToTerraform)(struct!.caOptions),
    key_usage: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesKeyUsageToTerraform)(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesPolicyIdsToTerraform)(struct!.policyIds),
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

function privatecaCertificateTemplateTimeoutsToTerraform(struct?: PrivatecaCertificateTemplateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
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
  private _description?: string;
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string ) {
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
  private _labels?: { [key: string]: string } | cdktf.IResolvable;
  public get labels() {
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable ) {
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
  private _location: string;
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
  private _name: string;
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // identity_constraints - computed: false, optional: true, required: false
  private _identityConstraints?: PrivatecaCertificateTemplateIdentityConstraints[];
  public get identityConstraints() {
    return this.interpolationForAttribute('identity_constraints') as any;
  }
  public set identityConstraints(value: PrivatecaCertificateTemplateIdentityConstraints[] ) {
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
  private _passthroughExtensions?: PrivatecaCertificateTemplatePassthroughExtensions[];
  public get passthroughExtensions() {
    return this.interpolationForAttribute('passthrough_extensions') as any;
  }
  public set passthroughExtensions(value: PrivatecaCertificateTemplatePassthroughExtensions[] ) {
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
  private _predefinedValues?: PrivatecaCertificateTemplatePredefinedValues[];
  public get predefinedValues() {
    return this.interpolationForAttribute('predefined_values') as any;
  }
  public set predefinedValues(value: PrivatecaCertificateTemplatePredefinedValues[] ) {
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
  private _timeouts?: PrivatecaCertificateTemplateTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PrivatecaCertificateTemplateTimeouts ) {
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
      identity_constraints: cdktf.listMapper(privatecaCertificateTemplateIdentityConstraintsToTerraform)(this._identityConstraints),
      passthrough_extensions: cdktf.listMapper(privatecaCertificateTemplatePassthroughExtensionsToTerraform)(this._passthroughExtensions),
      predefined_values: cdktf.listMapper(privatecaCertificateTemplatePredefinedValuesToTerraform)(this._predefinedValues),
      timeouts: privatecaCertificateTemplateTimeoutsToTerraform(this._timeouts),
    };
  }
}
