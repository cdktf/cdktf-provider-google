// https://www.terraform.io/docs/providers/google/r/privateca_ca_pool
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCaPoolConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#id PrivatecaCaPool#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#labels PrivatecaCaPool#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Location of the CaPool. A full list of valid locations can be found by
running 'gcloud privateca locations list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#location PrivatecaCaPool#location}
  */
  readonly location: string;
  /**
  * The name for this CaPool.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#name PrivatecaCaPool#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#project PrivatecaCaPool#project}
  */
  readonly project?: string;
  /**
  * The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#tier PrivatecaCaPool#tier}
  */
  readonly tier: string;
  /**
  * issuance_policy block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#issuance_policy PrivatecaCaPool#issuance_policy}
  */
  readonly issuancePolicy?: PrivatecaCaPoolIssuancePolicy;
  /**
  * publishing_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#publishing_options PrivatecaCaPool#publishing_options}
  */
  readonly publishingOptions?: PrivatecaCaPoolPublishingOptions;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#timeouts PrivatecaCaPool#timeouts}
  */
  readonly timeouts?: PrivatecaCaPoolTimeouts;
}
export interface PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes {
  /**
  * When true, allows callers to create Certificates by specifying a CertificateConfig.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_config_based_issuance PrivatecaCaPool#allow_config_based_issuance}
  */
  readonly allowConfigBasedIssuance: boolean | cdktf.IResolvable;
  /**
  * When true, allows callers to create Certificates by specifying a CSR.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_csr_based_issuance PrivatecaCaPool#allow_csr_based_issuance}
  */
  readonly allowCsrBasedIssuance: boolean | cdktf.IResolvable;
}

export function privatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference | PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_config_based_issuance: cdktf.booleanToTerraform(struct!.allowConfigBasedIssuance),
    allow_csr_based_issuance: cdktf.booleanToTerraform(struct!.allowCsrBasedIssuance),
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowConfigBasedIssuance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowConfigBasedIssuance = this._allowConfigBasedIssuance;
    }
    if (this._allowCsrBasedIssuance !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowCsrBasedIssuance = this._allowCsrBasedIssuance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowConfigBasedIssuance = undefined;
      this._allowCsrBasedIssuance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowConfigBasedIssuance = value.allowConfigBasedIssuance;
      this._allowCsrBasedIssuance = value.allowCsrBasedIssuance;
    }
  }

  // allow_config_based_issuance - computed: false, optional: false, required: true
  private _allowConfigBasedIssuance?: boolean | cdktf.IResolvable; 
  public get allowConfigBasedIssuance() {
    return this.getBooleanAttribute('allow_config_based_issuance');
  }
  public set allowConfigBasedIssuance(value: boolean | cdktf.IResolvable) {
    this._allowConfigBasedIssuance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowConfigBasedIssuanceInput() {
    return this._allowConfigBasedIssuance;
  }

  // allow_csr_based_issuance - computed: false, optional: false, required: true
  private _allowCsrBasedIssuance?: boolean | cdktf.IResolvable; 
  public get allowCsrBasedIssuance() {
    return this.getBooleanAttribute('allow_csr_based_issuance');
  }
  public set allowCsrBasedIssuance(value: boolean | cdktf.IResolvable) {
    this._allowCsrBasedIssuance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCsrBasedIssuanceInput() {
    return this._allowCsrBasedIssuance;
  }
}
export interface PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve {
  /**
  * The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#signature_algorithm PrivatecaCaPool#signature_algorithm}
  */
  readonly signatureAlgorithm: string;
}

export function privatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference | PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    signature_algorithm: cdktf.stringToTerraform(struct!.signatureAlgorithm),
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._signatureAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithm = this._signatureAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._signatureAlgorithm = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._signatureAlgorithm = value.signatureAlgorithm;
    }
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
    return this._signatureAlgorithm;
  }
}
export interface PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa {
  /**
  * The maximum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#max_modulus_size PrivatecaCaPool#max_modulus_size}
  */
  readonly maxModulusSize?: string;
  /**
  * The minimum allowed RSA modulus size, in bits. If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#min_modulus_size PrivatecaCaPool#min_modulus_size}
  */
  readonly minModulusSize?: string;
}

export function privatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference | PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_modulus_size: cdktf.stringToTerraform(struct!.maxModulusSize),
    min_modulus_size: cdktf.stringToTerraform(struct!.minModulusSize),
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxModulusSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxModulusSize = this._maxModulusSize;
    }
    if (this._minModulusSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minModulusSize = this._minModulusSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxModulusSize = undefined;
      this._minModulusSize = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxModulusSize = value.maxModulusSize;
      this._minModulusSize = value.minModulusSize;
    }
  }

  // max_modulus_size - computed: false, optional: true, required: false
  private _maxModulusSize?: string; 
  public get maxModulusSize() {
    return this.getStringAttribute('max_modulus_size');
  }
  public set maxModulusSize(value: string) {
    this._maxModulusSize = value;
  }
  public resetMaxModulusSize() {
    this._maxModulusSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxModulusSizeInput() {
    return this._maxModulusSize;
  }

  // min_modulus_size - computed: false, optional: true, required: false
  private _minModulusSize?: string; 
  public get minModulusSize() {
    return this.getStringAttribute('min_modulus_size');
  }
  public set minModulusSize(value: string) {
    this._minModulusSize = value;
  }
  public resetMinModulusSize() {
    this._minModulusSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minModulusSizeInput() {
    return this._minModulusSize;
  }
}
export interface PrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
  /**
  * elliptic_curve block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#elliptic_curve PrivatecaCaPool#elliptic_curve}
  */
  readonly ellipticCurve?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve;
  /**
  * rsa block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#rsa PrivatecaCaPool#rsa}
  */
  readonly rsa?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa;
}

export function privatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    elliptic_curve: privatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveToTerraform(struct!.ellipticCurve),
    rsa: privatecaCaPoolIssuancePolicyAllowedKeyTypesRsaToTerraform(struct!.rsa),
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCaPoolIssuancePolicyAllowedKeyTypes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ellipticCurve?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ellipticCurve = this._ellipticCurve?.internalValue;
    }
    if (this._rsa?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsa = this._rsa?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ellipticCurve.internalValue = undefined;
      this._rsa.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ellipticCurve.internalValue = value.ellipticCurve;
      this._rsa.internalValue = value.rsa;
    }
  }

  // elliptic_curve - computed: false, optional: true, required: false
  private _ellipticCurve = new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(this, "elliptic_curve");
  public get ellipticCurve() {
    return this._ellipticCurve;
  }
  public putEllipticCurve(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve) {
    this._ellipticCurve.internalValue = value;
  }
  public resetEllipticCurve() {
    this._ellipticCurve.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ellipticCurveInput() {
    return this._ellipticCurve.internalValue;
  }

  // rsa - computed: false, optional: true, required: false
  private _rsa = new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(this, "rsa");
  public get rsa() {
    return this._rsa;
  }
  public putRsa(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa) {
    this._rsa.internalValue = value;
  }
  public resetRsa() {
    this._rsa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaInput() {
    return this._rsa.internalValue;
  }
}

export class PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference {
    return new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId | undefined) {
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
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions {
  /**
  * Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#critical PrivatecaCaPool#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * The value of this X.509 extension. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#value PrivatecaCaPool#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id PrivatecaCaPool#object_id}
  */
  readonly objectId: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId;
}

export function privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions | cdktf.IResolvable | undefined) {
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

  // critical - computed: false, optional: false, required: true
  private _critical?: boolean | cdktf.IResolvable; 
  public get critical() {
    return this.getBooleanAttribute('critical');
  }
  public set critical(value: boolean | cdktf.IResolvable) {
    this._critical = value;
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
  private _objectId = new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(this, "object_id");
  public get objectId() {
    return this._objectId;
  }
  public putObjectId(value: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId) {
    this._objectId.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId.internalValue;
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference {
    return new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions {
  /**
  * When true, the "CA" in Basic Constraints extension will be set to true.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#is_ca PrivatecaCaPool#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Refers to the "path length constraint" in Basic Constraints extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#max_issuer_path_length PrivatecaCaPool#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
  /**
  * When true, the "CA" in Basic Constraints extension will be set to false. 
If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#non_ca PrivatecaCaPool#non_ca}
  */
  readonly nonCa?: boolean | cdktf.IResolvable;
  /**
  * When true, the "path length constraint" in Basic Constraints extension will be set to 0.
if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#zero_max_issuer_path_length PrivatecaCaPool#zero_max_issuer_path_length}
  */
  readonly zeroMaxIssuerPathLength?: boolean | cdktf.IResolvable;
}

export function privatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
    non_ca: cdktf.booleanToTerraform(struct!.nonCa),
    zero_max_issuer_path_length: cdktf.booleanToTerraform(struct!.zeroMaxIssuerPathLength),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions | undefined {
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
    if (this._nonCa !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonCa = this._nonCa;
    }
    if (this._zeroMaxIssuerPathLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroMaxIssuerPathLength = this._zeroMaxIssuerPathLength;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._isCa = undefined;
      this._maxIssuerPathLength = undefined;
      this._nonCa = undefined;
      this._zeroMaxIssuerPathLength = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._isCa = value.isCa;
      this._maxIssuerPathLength = value.maxIssuerPathLength;
      this._nonCa = value.nonCa;
      this._zeroMaxIssuerPathLength = value.zeroMaxIssuerPathLength;
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

  // non_ca - computed: false, optional: true, required: false
  private _nonCa?: boolean | cdktf.IResolvable; 
  public get nonCa() {
    return this.getBooleanAttribute('non_ca');
  }
  public set nonCa(value: boolean | cdktf.IResolvable) {
    this._nonCa = value;
  }
  public resetNonCa() {
    this._nonCa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonCaInput() {
    return this._nonCa;
  }

  // zero_max_issuer_path_length - computed: false, optional: true, required: false
  private _zeroMaxIssuerPathLength?: boolean | cdktf.IResolvable; 
  public get zeroMaxIssuerPathLength() {
    return this.getBooleanAttribute('zero_max_issuer_path_length');
  }
  public set zeroMaxIssuerPathLength(value: boolean | cdktf.IResolvable) {
    this._zeroMaxIssuerPathLength = value;
  }
  public resetZeroMaxIssuerPathLength() {
    this._zeroMaxIssuerPathLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroMaxIssuerPathLengthInput() {
    return this._zeroMaxIssuerPathLength;
  }
}
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#cert_sign PrivatecaCaPool#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#content_commitment PrivatecaCaPool#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#crl_sign PrivatecaCaPool#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#data_encipherment PrivatecaCaPool#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#decipher_only PrivatecaCaPool#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#digital_signature PrivatecaCaPool#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#encipher_only PrivatecaCaPool#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#key_agreement PrivatecaCaPool#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#key_encipherment PrivatecaCaPool#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

export function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage): any {
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

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage | undefined) {
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
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#client_auth PrivatecaCaPool#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#code_signing PrivatecaCaPool#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#email_protection PrivatecaCaPool#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#ocsp_signing PrivatecaCaPool#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#server_auth PrivatecaCaPool#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#time_stamping PrivatecaCaPool#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

export function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage): any {
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

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage | undefined) {
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
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages | cdktf.IResolvable | undefined) {
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

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference {
    return new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage {
  /**
  * base_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#base_key_usage PrivatecaCaPool#base_key_usage}
  */
  readonly baseKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#extended_key_usage PrivatecaCaPool#extended_key_usage}
  */
  readonly extendedKeyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#unknown_extended_key_usages PrivatecaCaPool#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable;
}

export function privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesToTerraform, true)(struct!.unknownExtendedKeyUsages),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage | undefined) {
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

  // base_key_usage - computed: false, optional: false, required: true
  private _baseKeyUsage = new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(this, "base_key_usage");
  public get baseKeyUsage() {
    return this._baseKeyUsage;
  }
  public putBaseKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage) {
    this._baseKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage.internalValue;
  }

  // extended_key_usage - computed: false, optional: false, required: true
  private _extendedKeyUsage = new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(this, "extended_key_usage");
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }
  public putExtendedKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage.internalValue;
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages = new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(this, "unknown_extended_key_usages", false);
  public get unknownExtendedKeyUsages() {
    return this._unknownExtendedKeyUsages;
  }
  public putUnknownExtendedKeyUsages(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages[] | cdktf.IResolvable) {
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
export interface PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.objectIdPath),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds | cdktf.IResolvable | undefined) {
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

export class PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList extends cdktf.ComplexList {
  public internalValue? : PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | cdktf.IResolvable

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
  public get(index: number): PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference {
    return new PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PrivatecaCaPoolIssuancePolicyBaselineValues {
  /**
  * Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#aia_ocsp_servers PrivatecaCaPool#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#additional_extensions PrivatecaCaPool#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | cdktf.IResolvable;
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#ca_options PrivatecaCaPool#ca_options}
  */
  readonly caOptions: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#key_usage PrivatecaCaPool#key_usage}
  */
  readonly keyUsage: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#policy_ids PrivatecaCaPool#policy_ids}
  */
  readonly policyIds?: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | cdktf.IResolvable;
}

export function privatecaCaPoolIssuancePolicyBaselineValuesToTerraform(struct?: PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference | PrivatecaCaPoolIssuancePolicyBaselineValues): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsToTerraform, true)(struct!.additionalExtensions),
    ca_options: privatecaCaPoolIssuancePolicyBaselineValuesCaOptionsToTerraform(struct!.caOptions),
    key_usage: privatecaCaPoolIssuancePolicyBaselineValuesKeyUsageToTerraform(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsToTerraform, true)(struct!.policyIds),
  }
}

export class PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyBaselineValues | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyBaselineValues | undefined) {
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
  private _additionalExtensions = new PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(this, "additional_extensions", false);
  public get additionalExtensions() {
    return this._additionalExtensions;
  }
  public putAdditionalExtensions(value: PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions[] | cdktf.IResolvable) {
    this._additionalExtensions.internalValue = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions.internalValue;
  }

  // ca_options - computed: false, optional: false, required: true
  private _caOptions = new PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(this, "ca_options");
  public get caOptions() {
    return this._caOptions;
  }
  public putCaOptions(value: PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions) {
    this._caOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions.internalValue;
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage = new PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(this, "key_usage");
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds = new PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(this, "policy_ids", false);
  public get policyIds() {
    return this._policyIds;
  }
  public putPolicyIds(value: PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds[] | cdktf.IResolvable) {
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
export interface PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression {
  /**
  * Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#description PrivatecaCaPool#description}
  */
  readonly description?: string;
  /**
  * Textual representation of an expression in Common Expression Language syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#expression PrivatecaCaPool#expression}
  */
  readonly expression: string;
  /**
  * String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#location PrivatecaCaPool#location}
  */
  readonly location?: string;
  /**
  * Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#title PrivatecaCaPool#title}
  */
  readonly title?: string;
}

export function privatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionToTerraform(struct?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference | PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression): any {
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

export class PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression | undefined) {
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
export interface PrivatecaCaPoolIssuancePolicyIdentityConstraints {
  /**
  * If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.
Otherwise, the requested SubjectAltNames will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_subject_alt_names_passthrough PrivatecaCaPool#allow_subject_alt_names_passthrough}
  */
  readonly allowSubjectAltNamesPassthrough: boolean | cdktf.IResolvable;
  /**
  * If this is set, the Subject field may be copied from a certificate request into the signed certificate.
Otherwise, the requested Subject will be discarded.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_subject_passthrough PrivatecaCaPool#allow_subject_passthrough}
  */
  readonly allowSubjectPassthrough: boolean | cdktf.IResolvable;
  /**
  * cel_expression block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#cel_expression PrivatecaCaPool#cel_expression}
  */
  readonly celExpression?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression;
}

export function privatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform(struct?: PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference | PrivatecaCaPoolIssuancePolicyIdentityConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
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
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicyIdentityConstraints | undefined {
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

  public set internalValue(value: PrivatecaCaPoolIssuancePolicyIdentityConstraints | undefined) {
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
  private _celExpression = new PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(this, "cel_expression");
  public get celExpression() {
    return this._celExpression;
  }
  public putCelExpression(value: PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression) {
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
export interface PrivatecaCaPoolIssuancePolicy {
  /**
  * The maximum lifetime allowed for issued Certificates. Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#maximum_lifetime PrivatecaCaPool#maximum_lifetime}
  */
  readonly maximumLifetime?: string;
  /**
  * allowed_issuance_modes block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allowed_issuance_modes PrivatecaCaPool#allowed_issuance_modes}
  */
  readonly allowedIssuanceModes?: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes;
  /**
  * allowed_key_types block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allowed_key_types PrivatecaCaPool#allowed_key_types}
  */
  readonly allowedKeyTypes?: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | cdktf.IResolvable;
  /**
  * baseline_values block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#baseline_values PrivatecaCaPool#baseline_values}
  */
  readonly baselineValues?: PrivatecaCaPoolIssuancePolicyBaselineValues;
  /**
  * identity_constraints block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#identity_constraints PrivatecaCaPool#identity_constraints}
  */
  readonly identityConstraints?: PrivatecaCaPoolIssuancePolicyIdentityConstraints;
}

export function privatecaCaPoolIssuancePolicyToTerraform(struct?: PrivatecaCaPoolIssuancePolicyOutputReference | PrivatecaCaPoolIssuancePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maximum_lifetime: cdktf.stringToTerraform(struct!.maximumLifetime),
    allowed_issuance_modes: privatecaCaPoolIssuancePolicyAllowedIssuanceModesToTerraform(struct!.allowedIssuanceModes),
    allowed_key_types: cdktf.listMapper(privatecaCaPoolIssuancePolicyAllowedKeyTypesToTerraform, true)(struct!.allowedKeyTypes),
    baseline_values: privatecaCaPoolIssuancePolicyBaselineValuesToTerraform(struct!.baselineValues),
    identity_constraints: privatecaCaPoolIssuancePolicyIdentityConstraintsToTerraform(struct!.identityConstraints),
  }
}

export class PrivatecaCaPoolIssuancePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolIssuancePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maximumLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLifetime = this._maximumLifetime;
    }
    if (this._allowedIssuanceModes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIssuanceModes = this._allowedIssuanceModes?.internalValue;
    }
    if (this._allowedKeyTypes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedKeyTypes = this._allowedKeyTypes?.internalValue;
    }
    if (this._baselineValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baselineValues = this._baselineValues?.internalValue;
    }
    if (this._identityConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityConstraints = this._identityConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolIssuancePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maximumLifetime = undefined;
      this._allowedIssuanceModes.internalValue = undefined;
      this._allowedKeyTypes.internalValue = undefined;
      this._baselineValues.internalValue = undefined;
      this._identityConstraints.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maximumLifetime = value.maximumLifetime;
      this._allowedIssuanceModes.internalValue = value.allowedIssuanceModes;
      this._allowedKeyTypes.internalValue = value.allowedKeyTypes;
      this._baselineValues.internalValue = value.baselineValues;
      this._identityConstraints.internalValue = value.identityConstraints;
    }
  }

  // maximum_lifetime - computed: false, optional: true, required: false
  private _maximumLifetime?: string; 
  public get maximumLifetime() {
    return this.getStringAttribute('maximum_lifetime');
  }
  public set maximumLifetime(value: string) {
    this._maximumLifetime = value;
  }
  public resetMaximumLifetime() {
    this._maximumLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLifetimeInput() {
    return this._maximumLifetime;
  }

  // allowed_issuance_modes - computed: false, optional: true, required: false
  private _allowedIssuanceModes = new PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(this, "allowed_issuance_modes");
  public get allowedIssuanceModes() {
    return this._allowedIssuanceModes;
  }
  public putAllowedIssuanceModes(value: PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes) {
    this._allowedIssuanceModes.internalValue = value;
  }
  public resetAllowedIssuanceModes() {
    this._allowedIssuanceModes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIssuanceModesInput() {
    return this._allowedIssuanceModes.internalValue;
  }

  // allowed_key_types - computed: false, optional: true, required: false
  private _allowedKeyTypes = new PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(this, "allowed_key_types", false);
  public get allowedKeyTypes() {
    return this._allowedKeyTypes;
  }
  public putAllowedKeyTypes(value: PrivatecaCaPoolIssuancePolicyAllowedKeyTypes[] | cdktf.IResolvable) {
    this._allowedKeyTypes.internalValue = value;
  }
  public resetAllowedKeyTypes() {
    this._allowedKeyTypes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedKeyTypesInput() {
    return this._allowedKeyTypes.internalValue;
  }

  // baseline_values - computed: false, optional: true, required: false
  private _baselineValues = new PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(this, "baseline_values");
  public get baselineValues() {
    return this._baselineValues;
  }
  public putBaselineValues(value: PrivatecaCaPoolIssuancePolicyBaselineValues) {
    this._baselineValues.internalValue = value;
  }
  public resetBaselineValues() {
    this._baselineValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineValuesInput() {
    return this._baselineValues.internalValue;
  }

  // identity_constraints - computed: false, optional: true, required: false
  private _identityConstraints = new PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(this, "identity_constraints");
  public get identityConstraints() {
    return this._identityConstraints;
  }
  public putIdentityConstraints(value: PrivatecaCaPoolIssuancePolicyIdentityConstraints) {
    this._identityConstraints.internalValue = value;
  }
  public resetIdentityConstraints() {
    this._identityConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityConstraintsInput() {
    return this._identityConstraints.internalValue;
  }
}
export interface PrivatecaCaPoolPublishingOptions {
  /**
  * When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access"
X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding
X.509 extension will not be written in issued certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#publish_ca_cert PrivatecaCaPool#publish_ca_cert}
  */
  readonly publishCaCert: boolean | cdktf.IResolvable;
  /**
  * When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension
in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not
be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are
also rebuilt shortly after a certificate is revoked.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#publish_crl PrivatecaCaPool#publish_crl}
  */
  readonly publishCrl: boolean | cdktf.IResolvable;
}

export function privatecaCaPoolPublishingOptionsToTerraform(struct?: PrivatecaCaPoolPublishingOptionsOutputReference | PrivatecaCaPoolPublishingOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    publish_ca_cert: cdktf.booleanToTerraform(struct!.publishCaCert),
    publish_crl: cdktf.booleanToTerraform(struct!.publishCrl),
  }
}

export class PrivatecaCaPoolPublishingOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolPublishingOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publishCaCert !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCaCert = this._publishCaCert;
    }
    if (this._publishCrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.publishCrl = this._publishCrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCaPoolPublishingOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publishCaCert = undefined;
      this._publishCrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publishCaCert = value.publishCaCert;
      this._publishCrl = value.publishCrl;
    }
  }

  // publish_ca_cert - computed: false, optional: false, required: true
  private _publishCaCert?: boolean | cdktf.IResolvable; 
  public get publishCaCert() {
    return this.getBooleanAttribute('publish_ca_cert');
  }
  public set publishCaCert(value: boolean | cdktf.IResolvable) {
    this._publishCaCert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCaCertInput() {
    return this._publishCaCert;
  }

  // publish_crl - computed: false, optional: false, required: true
  private _publishCrl?: boolean | cdktf.IResolvable; 
  public get publishCrl() {
    return this.getBooleanAttribute('publish_crl');
  }
  public set publishCrl(value: boolean | cdktf.IResolvable) {
    this._publishCrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publishCrlInput() {
    return this._publishCrl;
  }
}
export interface PrivatecaCaPoolTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#create PrivatecaCaPool#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#delete PrivatecaCaPool#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#update PrivatecaCaPool#update}
  */
  readonly update?: string;
}

export function privatecaCaPoolTimeoutsToTerraform(struct?: PrivatecaCaPoolTimeoutsOutputReference | PrivatecaCaPoolTimeouts | cdktf.IResolvable): any {
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

export class PrivatecaCaPoolTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PrivatecaCaPoolTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PrivatecaCaPoolTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool google_privateca_ca_pool}
*/
export class PrivatecaCaPool extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privateca_ca_pool";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool google_privateca_ca_pool} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCaPoolConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCaPoolConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_ca_pool',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.36.0',
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
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._tier = config.tier;
    this._issuancePolicy.internalValue = config.issuancePolicy;
    this._publishingOptions.internalValue = config.publishingOptions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
    return this._tier;
  }

  // issuance_policy - computed: false, optional: true, required: false
  private _issuancePolicy = new PrivatecaCaPoolIssuancePolicyOutputReference(this, "issuance_policy");
  public get issuancePolicy() {
    return this._issuancePolicy;
  }
  public putIssuancePolicy(value: PrivatecaCaPoolIssuancePolicy) {
    this._issuancePolicy.internalValue = value;
  }
  public resetIssuancePolicy() {
    this._issuancePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuancePolicyInput() {
    return this._issuancePolicy.internalValue;
  }

  // publishing_options - computed: false, optional: true, required: false
  private _publishingOptions = new PrivatecaCaPoolPublishingOptionsOutputReference(this, "publishing_options");
  public get publishingOptions() {
    return this._publishingOptions;
  }
  public putPublishingOptions(value: PrivatecaCaPoolPublishingOptions) {
    this._publishingOptions.internalValue = value;
  }
  public resetPublishingOptions() {
    this._publishingOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishingOptionsInput() {
    return this._publishingOptions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatecaCaPoolTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatecaCaPoolTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      tier: cdktf.stringToTerraform(this._tier),
      issuance_policy: privatecaCaPoolIssuancePolicyToTerraform(this._issuancePolicy.internalValue),
      publishing_options: privatecaCaPoolPublishingOptionsToTerraform(this._publishingOptions.internalValue),
      timeouts: privatecaCaPoolTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
