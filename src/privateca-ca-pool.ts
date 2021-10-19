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
  readonly issuancePolicy?: PrivatecaCaPoolIssuancePolicy;
  /**
  * publishing_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#publishing_options PrivatecaCaPool#publishing_options}
  */
  readonly publishingOptions?: PrivatecaCaPoolPublishingOptions;
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

function privatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference | PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_config_based_issuance: cdktf.booleanToTerraform(struct!.allowConfigBasedIssuance),
    allow_csr_based_issuance: cdktf.booleanToTerraform(struct!.allowCsrBasedIssuance),
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_config_based_issuance - computed: false, optional: false, required: true
  private _allowConfigBasedIssuance?: boolean | cdktf.IResolvable; 
  public get allowConfigBasedIssuance() {
    return this.getBooleanAttribute('allow_config_based_issuance') as any;
  }
  public set allowConfigBasedIssuance(value: boolean | cdktf.IResolvable) {
    this._allowConfigBasedIssuance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConfigBasedIssuanceInput() {
    return this._allowConfigBasedIssuance
  }

  // allow_csr_based_issuance - computed: false, optional: false, required: true
  private _allowCsrBasedIssuance?: boolean | cdktf.IResolvable; 
  public get allowCsrBasedIssuance() {
    return this.getBooleanAttribute('allow_csr_based_issuance') as any;
  }
  public set allowCsrBasedIssuance(value: boolean | cdktf.IResolvable) {
    this._allowCsrBasedIssuance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCsrBasedIssuanceInput() {
    return this._allowCsrBasedIssuance
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

function privatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference | PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // signature_algorithm - computed: false, optional: false, required: true
  private _signatureAlgorithm?: string; 
  public get signatureAlgorithm() {
    return this.getStringAttribute('signature_algorithm');
  }
  public set signatureAlgorithm(value: string) {
    this._signatureAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmInput() {
    return this._signatureAlgorithm
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

function privatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference | PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_modulus_size: cdktf.stringToTerraform(struct!.maxModulusSize),
    min_modulus_size: cdktf.stringToTerraform(struct!.minModulusSize),
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // max_modulus_size - computed: false, optional: true, required: false
  private _maxModulusSize?: string | undefined; 
  public get maxModulusSize() {
    return this.getStringAttribute('max_modulus_size');
  }
  public set maxModulusSize(value: string | undefined) {
    this._maxModulusSize = value;
  }
  public resetMaxModulusSize() {
    this._maxModulusSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxModulusSizeInput() {
    return this._maxModulusSize
  }

  // min_modulus_size - computed: false, optional: true, required: false
  private _minModulusSize?: string | undefined; 
  public get minModulusSize() {
    return this.getStringAttribute('min_modulus_size');
  }
  public set minModulusSize(value: string | undefined) {
    this._minModulusSize = value;
  }
  public resetMinModulusSize() {
    this._minModulusSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minModulusSizeInput() {
    return this._minModulusSize
  }
}
export interface PrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
  /**
  * elliptic_curve block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#elliptic_curve PrivatecaCaPool#elliptic_curve}
  */
  readonly ellipticCurve?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve;
  /**
  * rsa block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#rsa PrivatecaCaPool#rsa}
  */
  readonly rsa?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa;
}

function privatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elliptic_curve: privatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform(struct!.ellipticCurve),
    rsa: privatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform(struct!.rsa),
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

function privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
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
  readonly objectId: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;
}

function privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
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

function privatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference extends cdktf.ComplexObject {
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

function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage): any {
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

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
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

function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage): any {
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

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly baseKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#extended_key_usage PrivatecaCaPool#extended_key_usage}
  */
  readonly extendedKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#unknown_extended_key_usages PrivatecaCaPool#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // base_key_usage - computed: false, optional: false, required: true
  private _baseKeyUsage?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage; 
  private __baseKeyUsageOutput = new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(this as any, "base_key_usage", true);
  public get baseKeyUsage() {
    return this.__baseKeyUsageOutput;
  }
  public putBaseKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage) {
    this._baseKeyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage
  }

  // extended_key_usage - computed: false, optional: false, required: true
  private _extendedKeyUsage?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage; 
  private __extendedKeyUsageOutput = new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(this as any, "extended_key_usage", true);
  public get extendedKeyUsage() {
    return this.__extendedKeyUsageOutput;
  }
  public putExtendedKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | undefined; 
  public get unknownExtendedKeyUsages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unknown_extended_key_usages') as any;
  }
  public set unknownExtendedKeyUsages(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | undefined) {
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
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
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
  readonly caOptions: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#key_usage PrivatecaCaPool#key_usage}
  */
  readonly keyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#policy_ids PrivatecaCaPool#policy_ids}
  */
  readonly policyIds?: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[];
}

function privatecaCaPoolIssuancePolicyBaselineValuesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValues): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: privatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform(struct!.caOptions),
    key_usage: privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToTerraform)(struct!.policyIds),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference extends cdktf.ComplexObject {
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
  private _additionalExtensions?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | undefined; 
  public get additionalExtensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_extensions') as any;
  }
  public set additionalExtensions(value: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | undefined) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions
  }

  // ca_options - computed: false, optional: false, required: true
  private _caOptions?: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions; 
  private __caOptionsOutput = new PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(this as any, "ca_options", true);
  public get caOptions() {
    return this.__caOptionsOutput;
  }
  public putCaOptions(value: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions) {
    this._caOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage; 
  private __keyUsageOutput = new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(this as any, "key_usage", true);
  public get keyUsage() {
    return this.__keyUsageOutput;
  }
  public putKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage) {
    this._keyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | undefined; 
  public get policyIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_ids') as any;
  }
  public set policyIds(value: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | undefined) {
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

function privatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToTerraform(struct?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference | PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression): any {
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

export class PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference extends cdktf.ComplexObject {
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

  // expression - computed: false, optional: false, required: true
  private _expression?: string; 
  public get expression() {
    return this.getStringAttribute('expression');
  }
  public set expression(value: string) {
    this._expression = value;
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
  readonly celExpression?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression;
}

function privatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference | PrivatecaCaPoolIssuancePolicyIdentityConstraints): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_subject_alt_names_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectAltNamesPassthrough),
    allow_subject_passthrough: cdktf.booleanToTerraform(struct!.allowSubjectPassthrough),
    cel_expression: privatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToTerraform(struct!.celExpression),
  }
}

export class PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference extends cdktf.ComplexObject {
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
  private _celExpression?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression | undefined; 
  private __celExpressionOutput = new PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(this as any, "cel_expression", true);
  public get celExpression() {
    return this.__celExpressionOutput;
  }
  public putCelExpression(value: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression | undefined) {
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
  readonly allowedIssuanceModes?: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes;
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
  readonly baselineValues?: PrivatecaCaPoolIssuancePolicyBaselineValues;
  /**
  * identity_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool.html#identity_constraints PrivatecaCaPool#identity_constraints}
  */
  readonly identityConstraints?: PrivatecaCaPoolIssuancePolicyIdentityConstraints;
}

function privatecaCaPoolIssuancePolicyToTerraform(struct?: PrivatecaCaPoolIssuancePolicyOutputReference | PrivatecaCaPoolIssuancePolicy): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_lifetime: cdktf.stringToTerraform(struct!.maximumLifetime),
    allowed_issuance_modes: privatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform(struct!.allowedIssuanceModes),
    allowed_key_types: cdktf.listMapper(privatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform)(struct!.allowedKeyTypes),
    baseline_values: privatecaCaPoolIssuancePolicyBaselineValuesToTerraform(struct!.baselineValues),
    identity_constraints: privatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform(struct!.identityConstraints),
  }
}

export class PrivatecaCaPoolIssuancePolicyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // maximum_lifetime - computed: false, optional: true, required: false
  private _maximumLifetime?: string | undefined; 
  public get maximumLifetime() {
    return this.getStringAttribute('maximum_lifetime');
  }
  public set maximumLifetime(value: string | undefined) {
    this._maximumLifetime = value;
  }
  public resetMaximumLifetime() {
    this._maximumLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLifetimeInput() {
    return this._maximumLifetime
  }

  // allowed_issuance_modes - computed: false, optional: true, required: false
  private _allowedIssuanceModes?: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes | undefined; 
  private __allowedIssuanceModesOutput = new PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(this as any, "allowed_issuance_modes", true);
  public get allowedIssuanceModes() {
    return this.__allowedIssuanceModesOutput;
  }
  public putAllowedIssuanceModes(value: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes | undefined) {
    this._allowedIssuanceModes = value;
  }
  public resetAllowedIssuanceModes() {
    this._allowedIssuanceModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIssuanceModesInput() {
    return this._allowedIssuanceModes
  }

  // allowed_key_types - computed: false, optional: true, required: false
  private _allowedKeyTypes?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | undefined; 
  public get allowedKeyTypes() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('allowed_key_types') as any;
  }
  public set allowedKeyTypes(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | undefined) {
    this._allowedKeyTypes = value;
  }
  public resetAllowedKeyTypes() {
    this._allowedKeyTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKeyTypesInput() {
    return this._allowedKeyTypes
  }

  // baseline_values - computed: false, optional: true, required: false
  private _baselineValues?: PrivatecaCaPoolIssuancePolicyBaselineValues | undefined; 
  private __baselineValuesOutput = new PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(this as any, "baseline_values", true);
  public get baselineValues() {
    return this.__baselineValuesOutput;
  }
  public putBaselineValues(value: PrivatecaCaPoolIssuancePolicyBaselineValues | undefined) {
    this._baselineValues = value;
  }
  public resetBaselineValues() {
    this._baselineValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineValuesInput() {
    return this._baselineValues
  }

  // identity_constraints - computed: false, optional: true, required: false
  private _identityConstraints?: PrivatecaCaPoolIssuancePolicyIdentityConstraints | undefined; 
  private __identityConstraintsOutput = new PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(this as any, "identity_constraints", true);
  public get identityConstraints() {
    return this.__identityConstraintsOutput;
  }
  public putIdentityConstraints(value: PrivatecaCaPoolIssuancePolicyIdentityConstraints | undefined) {
    this._identityConstraints = value;
  }
  public resetIdentityConstraints() {
    this._identityConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConstraintsInput() {
    return this._identityConstraints
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

function privatecaCaPoolPublishingOptionsToTerraform(struct?: PrivatecaCaPoolPublishingOptionsOutputReference | PrivatecaCaPoolPublishingOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_ca_cert: cdktf.booleanToTerraform(struct!.publishCaCert),
    publish_crl: cdktf.booleanToTerraform(struct!.publishCrl),
  }
}

export class PrivatecaCaPoolPublishingOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // publish_ca_cert - computed: false, optional: false, required: true
  private _publishCaCert?: boolean | cdktf.IResolvable; 
  public get publishCaCert() {
    return this.getBooleanAttribute('publish_ca_cert') as any;
  }
  public set publishCaCert(value: boolean | cdktf.IResolvable) {
    this._publishCaCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCaCertInput() {
    return this._publishCaCert
  }

  // publish_crl - computed: false, optional: false, required: true
  private _publishCrl?: boolean | cdktf.IResolvable; 
  public get publishCrl() {
    return this.getBooleanAttribute('publish_crl') as any;
  }
  public set publishCrl(value: boolean | cdktf.IResolvable) {
    this._publishCrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCrlInput() {
    return this._publishCrl
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

function privatecaCaPoolTimeoutsToTerraform(struct?: PrivatecaCaPoolTimeoutsOutputReference | PrivatecaCaPoolTimeouts): any {
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

export class PrivatecaCaPoolTimeoutsOutputReference extends cdktf.ComplexObject {
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

  // tier - computed: false, optional: false, required: true
  private _tier?: string; 
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
  private _issuancePolicy?: PrivatecaCaPoolIssuancePolicy | undefined; 
  private __issuancePolicyOutput = new PrivatecaCaPoolIssuancePolicyOutputReference(this as any, "issuance_policy", true);
  public get issuancePolicy() {
    return this.__issuancePolicyOutput;
  }
  public putIssuancePolicy(value: PrivatecaCaPoolIssuancePolicy | undefined) {
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
  private _publishingOptions?: PrivatecaCaPoolPublishingOptions | undefined; 
  private __publishingOptionsOutput = new PrivatecaCaPoolPublishingOptionsOutputReference(this as any, "publishing_options", true);
  public get publishingOptions() {
    return this.__publishingOptionsOutput;
  }
  public putPublishingOptions(value: PrivatecaCaPoolPublishingOptions | undefined) {
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
  private _timeouts?: PrivatecaCaPoolTimeouts | undefined; 
  private __timeoutsOutput = new PrivatecaCaPoolTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PrivatecaCaPoolTimeouts | undefined) {
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
      issuance_policy: privatecaCaPoolIssuancePolicyToTerraform(this._issuancePolicy),
      publishing_options: privatecaCaPoolPublishingOptionsToTerraform(this._publishingOptions),
      timeouts: privatecaCaPoolTimeoutsToTerraform(this._timeouts),
    };
  }
}
