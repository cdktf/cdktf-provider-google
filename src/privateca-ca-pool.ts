// https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCaPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#labels PrivatecaCaPool#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Location of the CaPool. A full list of valid locations can be found by
running 'gcloud privateca locations list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#location PrivatecaCaPool#location}
  */
  readonly location: string;
  /**
  * The name for this CaPool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#name PrivatecaCaPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#project PrivatecaCaPool#project}
  */
  readonly project?: string;
  /**
  * The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#tier PrivatecaCaPool#tier}
  */
  readonly tier: string;
  /**
  * issuance_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#issuance_policy PrivatecaCaPool#issuance_policy}
  */
  readonly issuancePolicy?: PrivatecaCaPoolIssuancePolicy[];
  /**
  * publishing_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#publishing_options PrivatecaCaPool#publishing_options}
  */
  readonly publishingOptions?: PrivatecaCaPoolPublishingOptions[];
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#timeouts PrivatecaCaPool#timeouts}
  */
  readonly timeouts?: PrivatecaCaPoolTimeouts;
}
export interface PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes {
  /**
  * When true, allows callers to create Certificates by specifying a CertificateConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#allow_config_based_issuance PrivatecaCaPool#allow_config_based_issuance}
  */
  readonly allowConfigBasedIssuance: boolean | cdktf.IResolvable;
  /**
  * When true, allows callers to create Certificates by specifying a CSR.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#allow_csr_based_issuance PrivatecaCaPool#allow_csr_based_issuance}
  */
  readonly allowCsrBasedIssuance: boolean | cdktf.IResolvable;
}

function privatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_config_based_issuance: cdktf.booleanToTerraform(struct!.allowConfigBasedIssuance),
    allow_csr_based_issuance: cdktf.booleanToTerraform(struct!.allowCsrBasedIssuance),
  }
}

export interface PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve {
  /**
  * The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#signature_algorithm PrivatecaCaPool#signature_algorithm}
  */
  readonly signatureAlgorithm: string;
}

function privatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}

export interface PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa {
  /**
  * The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#max_modulus_size PrivatecaCaPool#max_modulus_size}
  */
  readonly maxModulusSize?: string;
  /**
  * The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#min_modulus_size PrivatecaCaPool#min_modulus_size}
  */
  readonly minModulusSize?: string;
}

function privatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    max_modulus_size: cdktf.stringToTerraform(struct!.maxModulusSize),
    min_modulus_size: cdktf.stringToTerraform(struct!.minModulusSize),
  }
}

export interface PrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
  /**
  * elliptic_curve block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#elliptic_curve PrivatecaCaPool#elliptic_curve}
  */
  readonly ellipticCurve?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve[];
  /**
  * rsa block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#rsa PrivatecaCaPool#rsa}
  */
  readonly rsa?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa[];
}

function privatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    elliptic_curve: cdktf.listMapper(privatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform)(struct!.ellipticCurve),
    rsa: cdktf.listMapper(privatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform)(struct!.rsa),
  }
}

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#object_id_path PrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions {
  /**
  * Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#critical PrivatecaCaPool#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * The value of this X.509 extension. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#value PrivatecaCaPool#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#object_id PrivatecaCaPool#object_id}
  */
  readonly objectId: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform)(struct!.objectId),
  }
}

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions {
  /**
  * Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing,
the extension will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#is_ca PrivatecaCaPool#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this
value is missing, the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#max_issuer_path_length PrivatecaCaPool#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
}

function privatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
  }
}

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#cert_sign PrivatecaCaPool#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#content_commitment PrivatecaCaPool#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#crl_sign PrivatecaCaPool#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#data_encipherment PrivatecaCaPool#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#decipher_only PrivatecaCaPool#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#digital_signature PrivatecaCaPool#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#encipher_only PrivatecaCaPool#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#key_agreement PrivatecaCaPool#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#key_encipherment PrivatecaCaPool#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage): any {
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

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#client_auth PrivatecaCaPool#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#code_signing PrivatecaCaPool#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#email_protection PrivatecaCaPool#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#ocsp_signing PrivatecaCaPool#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#server_auth PrivatecaCaPool#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#time_stamping PrivatecaCaPool#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage): any {
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

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#object_id_path PrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage {
  /**
  * base_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#base_key_usage PrivatecaCaPool#base_key_usage}
  */
  readonly baseKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage[];
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#extended_key_usage PrivatecaCaPool#extended_key_usage}
  */
  readonly extendedKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage[];
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#unknown_extended_key_usages PrivatecaCaPool#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base_key_usage: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform)(struct!.baseKeyUsage),
    extended_key_usage: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform)(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
  }
}

export interface PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#object_id_path PrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCaPoolIssuancePolicyBaselineValues {
  /**
  * Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#aia_ocsp_servers PrivatecaCaPool#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#additional_extensions PrivatecaCaPool#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[];
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#ca_options PrivatecaCaPool#ca_options}
  */
  readonly caOptions: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions[];
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#key_usage PrivatecaCaPool#key_usage}
  */
  readonly keyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage[];
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#policy_ids PrivatecaCaPool#policy_ids}
  */
  readonly policyIds?: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform)(struct!.caOptions),
    key_usage: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform)(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToTerraform)(struct!.policyIds),
  }
}

export interface PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression {
  /**
  * Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#description PrivatecaCaPool#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#expression PrivatecaCaPool#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#location PrivatecaCaPool#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#title PrivatecaCaPool#title}
  */
  readonly title?: string;
}

function privatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToTerraform(struct?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    expression: cdktf.stringToTerraform(struct!.expression),
    location: cdktf.stringToTerraform(struct!.location),
    title: cdktf.stringToTerraform(struct!.title),
  }
}

export interface PrivatecaCaPoolIssuancePolicyIdentityConstraints {
  /**
  * If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.
Otherwise, the requested SubjectAltNames will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#allow_subject_alt_names_passthrough PrivatecaCaPool#allow_subject_alt_names_passthrough}
  */
  readonly allowSubjectAltNamesPassthrough: boolean | cdktf.IResolvable;
  /**
  * If this is set, the Subject field may be copied from a certificate request into the signed certificate.
Otherwise, the requested Subject will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#allow_subject_passthrough PrivatecaCaPool#allow_subject_passthrough}
  */
  readonly allowSubjectPassthrough: boolean | cdktf.IResolvable;
  /**
  * cel_expression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#cel_expression PrivatecaCaPool#cel_expression}
  */
  readonly celExpression?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression[];
}

function privatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyIdentityConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    allow_subject_alt_names_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectAltNamesPassthrough),
    allow_subject_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectPassthrough),
    cel_expression: cdktf.listMapper(privatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToTerraform)(struct!.celExpression),
  }
}

export interface PrivatecaCaPoolIssuancePolicy {
  /**
  * The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#maximum_lifetime PrivatecaCaPool#maximum_lifetime}
  */
  readonly maximumLifetime?: string;
  /**
  * allowed_issuance_modes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#allowed_issuance_modes PrivatecaCaPool#allowed_issuance_modes}
  */
  readonly allowedIssuanceModes?: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes[];
  /**
  * allowed_key_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#allowed_key_types PrivatecaCaPool#allowed_key_types}
  */
  readonly allowedKeyTypes?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[];
  /**
  * baseline_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#baseline_values PrivatecaCaPool#baseline_values}
  */
  readonly baselineValues?: PrivatecaCaPoolIssuancePolicyBaselineValues[];
  /**
  * identity_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#identity_constraints PrivatecaCaPool#identity_constraints}
  */
  readonly identityConstraints?: PrivatecaCaPoolIssuancePolicyIdentityConstraints[];
}

function privatecaCaPoolIssuancePolicyToTerraform(struct?: PrivatecaCaPoolIssuancePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    maximum_lifetime: cdktf.stringToTerraform(struct!.maximumLifetime),
    allowed_issuance_modes: cdktf.listMapper(privatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform)(struct!.allowedIssuanceModes),
    allowed_key_types: cdktf.listMapper(privatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform)(struct!.allowedKeyTypes),
    baseline_values: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesToTerraform)(struct!.baselineValues),
    identity_constraints: cdktf.listMapper(privatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform)(struct!.identityConstraints),
  }
}

export interface PrivatecaCaPoolPublishingOptions {
  /**
  * When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access"
X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding
X.509 extension will not be written in issued certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#publish_ca_cert PrivatecaCaPool#publish_ca_cert}
  */
  readonly publishCaCert: boolean | cdktf.IResolvable;
  /**
  * When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension
in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not
be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are
also rebuilt shortly after a certificate is revoked.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#publish_crl PrivatecaCaPool#publish_crl}
  */
  readonly publishCrl: boolean | cdktf.IResolvable;
}

function privatecaCaPoolPublishingOptionsToTerraform(struct?: PrivatecaCaPoolPublishingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    publish_ca_cert: cdktf.booleanToTerraform(struct!.publishCaCert),
    publish_crl: cdktf.booleanToTerraform(struct!.publishCrl),
  }
}

export interface PrivatecaCaPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#create PrivatecaCaPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#delete PrivatecaCaPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#update PrivatecaCaPool#update}
  */
  readonly update?: string;
}

function privatecaCaPoolTimeoutsToTerraform(struct?: PrivatecaCaPoolTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html google_privateca_ca_pool}
*/
export class PrivatecaCaPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_privateca_ca_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html google_privateca_ca_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCaPoolConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCaPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_ca_pool',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._issuancePolicy = config.issuancePolicy;
    this._publishingOptions = config.publishingOptions;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // tier - computed: false, optional: false, required: true
  private _tier: string;
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier
  }

  // issuance_policy - computed: false, optional: true, required: false
  private _issuancePolicy?: PrivatecaCaPoolIssuancePolicy[];
  public get issuancePolicy() {
    return this.interpolationForAttribute('issuance_policy') as any;
  }
  public set issuancePolicy(value: PrivatecaCaPoolIssuancePolicy[] ) {
    this._issuancePolicy = value;
  }
  public resetIssuancePolicy() {
    this._issuancePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuancePolicyInput() {
    return this._issuancePolicy
  }

  // publishing_options - computed: false, optional: true, required: false
  private _publishingOptions?: PrivatecaCaPoolPublishingOptions[];
  public get publishingOptions() {
    return this.interpolationForAttribute('publishing_options') as any;
  }
  public set publishingOptions(value: PrivatecaCaPoolPublishingOptions[] ) {
    this._publishingOptions = value;
  }
  public resetPublishingOptions() {
    this._publishingOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishingOptionsInput() {
    return this._publishingOptions
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivatecaCaPoolTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PrivatecaCaPoolTimeouts ) {
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
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tier: cdktf.stringToTerraform(this._tier),
      issuance_policy: cdktf.listMapper(privatecaCaPoolIssuancePolicyToTerraform)(this._issuancePolicy),
      publishing_options: cdktf.listMapper(privatecaCaPoolPublishingOptionsToTerraform)(this._publishingOptions),
      timeouts: privatecaCaPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
