// https://www.terraform.io/docs/providers/google/r/privateca_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Authority name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#certificate_authority PrivatecaCertificate#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * The resource name for a CertificateTemplate used to issue this certificate,
in the format 'projects/*\/locations/*\/certificateTemplates/*'. If this is specified,
the caller must have the necessary permission to use this template. If this is
omitted, no template will be used. This template must be in the same location
as the Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#certificate_template PrivatecaCertificate#certificate_template}
  */
  readonly certificateTemplate?: string;
  /**
  * Labels with user-defined metadata to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#labels PrivatecaCertificate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#lifetime PrivatecaCertificate#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Location of the Certificate. A full list of valid locations can be found by
running 'gcloud privateca locations list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#location PrivatecaCertificate#location}
  */
  readonly location: string;
  /**
  * The name for this Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#name PrivatecaCertificate#name}
  */
  readonly name: string;
  /**
  * Immutable. A pem-encoded X.509 certificate signing request (CSR).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#pem_csr PrivatecaCertificate#pem_csr}
  */
  readonly pemCsr?: string;
  /**
  * The name of the CaPool this Certificate belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#pool PrivatecaCertificate#pool}
  */
  readonly pool: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#project PrivatecaCertificate#project}
  */
  readonly project?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#config PrivatecaCertificate#config}
  */
  readonly config?: PrivatecaCertificateConfigA;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#timeouts PrivatecaCertificate#timeouts}
  */
  readonly timeouts?: PrivatecaCertificateTimeouts;
}
export class PrivatecaCertificateCertificateDescriptionAuthorityKeyId extends cdktf.ComplexComputedList {

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export class PrivatecaCertificateCertificateDescriptionCertFingerprint extends cdktf.ComplexComputedList {

  // sha256_hash - computed: true, optional: false, required: false
  public get sha256Hash() {
    return this.getStringAttribute('sha256_hash');
  }
}
export class PrivatecaCertificateCertificateDescriptionConfigValuesKeyUsageBaseKeyUsageKeyUsageOptions extends cdktf.ComplexComputedList {

  // cert_sign - computed: true, optional: false, required: false
  public get certSign() {
    return this.getBooleanAttribute('cert_sign') as any;
  }

  // content_commitment - computed: true, optional: false, required: false
  public get contentCommitment() {
    return this.getBooleanAttribute('content_commitment') as any;
  }

  // crl_sign - computed: true, optional: false, required: false
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign') as any;
  }

  // data_encipherment - computed: true, optional: false, required: false
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment') as any;
  }

  // decipher_only - computed: true, optional: false, required: false
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only') as any;
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature') as any;
  }

  // encipher_only - computed: true, optional: false, required: false
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only') as any;
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement') as any;
  }

  // key_encipherment - computed: true, optional: false, required: false
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionConfigValuesKeyUsageBaseKeyUsage extends cdktf.ComplexComputedList {

  // key_usage_options - computed: true, optional: false, required: false
  public get keyUsageOptions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('key_usage_options') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionConfigValuesKeyUsageExtendedKeyUsage extends cdktf.ComplexComputedList {

  // client_auth - computed: true, optional: false, required: false
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth') as any;
  }

  // code_signing - computed: true, optional: false, required: false
  public get codeSigning() {
    return this.getBooleanAttribute('code_signing') as any;
  }

  // email_protection - computed: true, optional: false, required: false
  public get emailProtection() {
    return this.getBooleanAttribute('email_protection') as any;
  }

  // ocsp_signing - computed: true, optional: false, required: false
  public get ocspSigning() {
    return this.getBooleanAttribute('ocsp_signing') as any;
  }

  // server_auth - computed: true, optional: false, required: false
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth') as any;
  }

  // time_stamping - computed: true, optional: false, required: false
  public get timeStamping() {
    return this.getBooleanAttribute('time_stamping') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionConfigValuesKeyUsageUnknownExtendedKeyUsagesObectId extends cdktf.ComplexComputedList {

  // object_id_path - computed: true, optional: false, required: false
  public get objectIdPath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('object_id_path') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionConfigValuesKeyUsageUnknownExtendedKeyUsages extends cdktf.ComplexComputedList {

  // obect_id - computed: true, optional: false, required: false
  public get obectId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('obect_id') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionConfigValuesKeyUsage extends cdktf.ComplexComputedList {

  // base_key_usage - computed: true, optional: false, required: false
  public get baseKeyUsage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('base_key_usage') as any;
  }

  // extended_key_usage - computed: true, optional: false, required: false
  public get extendedKeyUsage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('extended_key_usage') as any;
  }

  // unknown_extended_key_usages - computed: true, optional: false, required: false
  public get unknownExtendedKeyUsages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unknown_extended_key_usages') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionConfigValues extends cdktf.ComplexComputedList {

  // key_usage - computed: true, optional: false, required: false
  public get keyUsage() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('key_usage') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionPublicKey extends cdktf.ComplexComputedList {

  // format - computed: true, optional: false, required: false
  public get format() {
    return this.getStringAttribute('format');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }
}
export class PrivatecaCertificateCertificateDescriptionSubjectDescriptionSubject extends cdktf.ComplexComputedList {

  // common_name - computed: true, optional: false, required: false
  public get commonName() {
    return this.getStringAttribute('common_name');
  }

  // country_code - computed: true, optional: false, required: false
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }

  // locality - computed: true, optional: false, required: false
  public get locality() {
    return this.getStringAttribute('locality');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // organizational_unit - computed: true, optional: false, required: false
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }

  // postal_code - computed: true, optional: false, required: false
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }

  // province - computed: true, optional: false, required: false
  public get province() {
    return this.getStringAttribute('province');
  }

  // street_address - computed: true, optional: false, required: false
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
}
export class PrivatecaCertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSansObectId extends cdktf.ComplexComputedList {

  // object_id_path - computed: true, optional: false, required: false
  public get objectIdPath() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('object_id_path') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionSubjectDescriptionSubjectAltNameCustomSans extends cdktf.ComplexComputedList {

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical') as any;
  }

  // obect_id - computed: true, optional: false, required: false
  public get obectId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('obect_id') as any;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}
export class PrivatecaCertificateCertificateDescriptionSubjectDescriptionSubjectAltName extends cdktf.ComplexComputedList {

  // custom_sans - computed: true, optional: false, required: false
  public get customSans() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('custom_sans') as any;
  }

  // dns_names - computed: true, optional: false, required: false
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }

  // email_addresses - computed: true, optional: false, required: false
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }

  // ip_addresses - computed: true, optional: false, required: false
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }

  // uris - computed: true, optional: false, required: false
  public get uris() {
    return this.getListAttribute('uris');
  }
}
export class PrivatecaCertificateCertificateDescriptionSubjectDescription extends cdktf.ComplexComputedList {

  // hex_serial_number - computed: true, optional: false, required: false
  public get hexSerialNumber() {
    return this.getStringAttribute('hex_serial_number');
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }

  // not_after_time - computed: true, optional: false, required: false
  public get notAfterTime() {
    return this.getStringAttribute('not_after_time');
  }

  // not_before_time - computed: true, optional: false, required: false
  public get notBeforeTime() {
    return this.getStringAttribute('not_before_time');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject') as any;
  }

  // subject_alt_name - computed: true, optional: false, required: false
  public get subjectAltName() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject_alt_name') as any;
  }
}
export class PrivatecaCertificateCertificateDescriptionSubjectKeyId extends cdktf.ComplexComputedList {

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
}
export class PrivatecaCertificateCertificateDescription extends cdktf.ComplexComputedList {

  // aia_issuing_certificate_urls - computed: true, optional: false, required: false
  public get aiaIssuingCertificateUrls() {
    return this.getListAttribute('aia_issuing_certificate_urls');
  }

  // authority_key_id - computed: true, optional: false, required: false
  public get authorityKeyId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('authority_key_id') as any;
  }

  // cert_fingerprint - computed: true, optional: false, required: false
  public get certFingerprint() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('cert_fingerprint') as any;
  }

  // config_values - computed: true, optional: false, required: false
  public get configValues() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_values') as any;
  }

  // crl_distribution_points - computed: true, optional: false, required: false
  public get crlDistributionPoints() {
    return this.getListAttribute('crl_distribution_points');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('public_key') as any;
  }

  // subject_description - computed: true, optional: false, required: false
  public get subjectDescription() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject_description') as any;
  }

  // subject_key_id - computed: true, optional: false, required: false
  public get subjectKeyId() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('subject_key_id') as any;
  }
}
export class PrivatecaCertificateRevocationDetails extends cdktf.ComplexComputedList {

  // revocation_state - computed: true, optional: false, required: false
  public get revocationState() {
    return this.getStringAttribute('revocation_state');
  }

  // revocation_time - computed: true, optional: false, required: false
  public get revocationTime() {
    return this.getStringAttribute('revocation_time');
  }
}
export interface PrivatecaCertificateConfigPublicKey {
  /**
  * The format of the public key. Currently, only PEM format is supported. Possible values: ["KEY_TYPE_UNSPECIFIED", "PEM"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#format PrivatecaCertificate#format}
  */
  readonly format: string;
  /**
  * Required. A public key. When this is specified in a request, the padding and encoding can be any of the options described by the respective 'KeyType' value. When this is generated by the service, it will always be an RFC 5280 SubjectPublicKeyInfo structure containing an algorithm identifier and a key. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#key PrivatecaCertificate#key}
  */
  readonly key?: string;
}

export function privatecaCertificateConfigPublicKeyToTerraform(struct?: PrivatecaCertificateConfigPublicKeyOutputReference | PrivatecaCertificateConfigPublicKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    format: cdktf.stringToTerraform(struct!.format),
    key: cdktf.stringToTerraform(struct!.key),
  }
}

export class PrivatecaCertificateConfigPublicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigPublicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._format !== undefined) {
      hasAnyValues = true;
      internalValueResult.format = this._format;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigPublicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._format = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._format = value.format;
      this._key = value.key;
    }
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}
export interface PrivatecaCertificateConfigSubjectConfigSubject {
  /**
  * The common name of the distinguished name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#common_name PrivatecaCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * The country code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#country_code PrivatecaCertificate#country_code}
  */
  readonly countryCode?: string;
  /**
  * The locality or city of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#locality PrivatecaCertificate#locality}
  */
  readonly locality?: string;
  /**
  * The organization of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#organization PrivatecaCertificate#organization}
  */
  readonly organization: string;
  /**
  * The organizational unit of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#organizational_unit PrivatecaCertificate#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * The postal code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#postal_code PrivatecaCertificate#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The province, territory, or regional state of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#province PrivatecaCertificate#province}
  */
  readonly province?: string;
  /**
  * The street address of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#street_address PrivatecaCertificate#street_address}
  */
  readonly streetAddress?: string;
}

export function privatecaCertificateConfigSubjectConfigSubjectToTerraform(struct?: PrivatecaCertificateConfigSubjectConfigSubjectOutputReference | PrivatecaCertificateConfigSubjectConfigSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    locality: cdktf.stringToTerraform(struct!.locality),
    organization: cdktf.stringToTerraform(struct!.organization),
    organizational_unit: cdktf.stringToTerraform(struct!.organizationalUnit),
    postal_code: cdktf.stringToTerraform(struct!.postalCode),
    province: cdktf.stringToTerraform(struct!.province),
    street_address: cdktf.stringToTerraform(struct!.streetAddress),
  }
}

export class PrivatecaCertificateConfigSubjectConfigSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigSubjectConfigSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonName !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName;
    }
    if (this._countryCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.countryCode = this._countryCode;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._organization !== undefined) {
      hasAnyValues = true;
      internalValueResult.organization = this._organization;
    }
    if (this._organizationalUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizationalUnit = this._organizationalUnit;
    }
    if (this._postalCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.postalCode = this._postalCode;
    }
    if (this._province !== undefined) {
      hasAnyValues = true;
      internalValueResult.province = this._province;
    }
    if (this._streetAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.streetAddress = this._streetAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigSubjectConfigSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonName = undefined;
      this._countryCode = undefined;
      this._locality = undefined;
      this._organization = undefined;
      this._organizationalUnit = undefined;
      this._postalCode = undefined;
      this._province = undefined;
      this._streetAddress = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonName = value.commonName;
      this._countryCode = value.countryCode;
      this._locality = value.locality;
      this._organization = value.organization;
      this._organizationalUnit = value.organizationalUnit;
      this._postalCode = value.postalCode;
      this._province = value.province;
      this._streetAddress = value.streetAddress;
    }
  }

  // common_name - computed: false, optional: false, required: true
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName;
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode;
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality;
  }

  // organization - computed: false, optional: false, required: true
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode;
  }

  // province - computed: false, optional: true, required: false
  private _province?: string; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province;
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress;
  }
}
export interface PrivatecaCertificateConfigSubjectConfigSubjectAltName {
  /**
  * Contains only valid, fully-qualified host names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#dns_names PrivatecaCertificate#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Contains only valid RFC 2822 E-mail addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#email_addresses PrivatecaCertificate#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#ip_addresses PrivatecaCertificate#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Contains only valid RFC 3986 URIs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#uris PrivatecaCertificate#uris}
  */
  readonly uris?: string[];
}

export function privatecaCertificateConfigSubjectConfigSubjectAltNameToTerraform(struct?: PrivatecaCertificateConfigSubjectConfigSubjectAltNameOutputReference | PrivatecaCertificateConfigSubjectConfigSubjectAltName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsNames),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.uris),
  }
}

export class PrivatecaCertificateConfigSubjectConfigSubjectAltNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigSubjectConfigSubjectAltName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNames = this._dnsNames;
    }
    if (this._emailAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailAddresses = this._emailAddresses;
    }
    if (this._ipAddresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddresses = this._ipAddresses;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigSubjectConfigSubjectAltName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsNames = undefined;
      this._emailAddresses = undefined;
      this._ipAddresses = undefined;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsNames = value.dnsNames;
      this._emailAddresses = value.emailAddresses;
      this._ipAddresses = value.ipAddresses;
      this._uris = value.uris;
    }
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[]; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[]) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames;
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[]; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[]) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses;
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }
}
export interface PrivatecaCertificateConfigSubjectConfig {
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#subject PrivatecaCertificate#subject}
  */
  readonly subject: PrivatecaCertificateConfigSubjectConfigSubject;
  /**
  * subject_alt_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#subject_alt_name PrivatecaCertificate#subject_alt_name}
  */
  readonly subjectAltName?: PrivatecaCertificateConfigSubjectConfigSubjectAltName;
}

export function privatecaCertificateConfigSubjectConfigToTerraform(struct?: PrivatecaCertificateConfigSubjectConfigOutputReference | PrivatecaCertificateConfigSubjectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject: privatecaCertificateConfigSubjectConfigSubjectToTerraform(struct!.subject),
    subject_alt_name: privatecaCertificateConfigSubjectConfigSubjectAltNameToTerraform(struct!.subjectAltName),
  }
}

export class PrivatecaCertificateConfigSubjectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigSubjectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject?.internalValue;
    }
    if (this._subjectAltName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAltName = this._subjectAltName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigSubjectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subject.internalValue = undefined;
      this._subjectAltName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subject.internalValue = value.subject;
      this._subjectAltName.internalValue = value.subjectAltName;
    }
  }

  // subject - computed: false, optional: false, required: true
  private _subject = new PrivatecaCertificateConfigSubjectConfigSubjectOutputReference(this as any, "subject", true);
  public get subject() {
    return this._subject;
  }
  public putSubject(value: PrivatecaCertificateConfigSubjectConfigSubject) {
    this._subject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // subject_alt_name - computed: false, optional: true, required: false
  private _subjectAltName = new PrivatecaCertificateConfigSubjectConfigSubjectAltNameOutputReference(this as any, "subject_alt_name", true);
  public get subjectAltName() {
    return this._subjectAltName;
  }
  public putSubjectAltName(value: PrivatecaCertificateConfigSubjectConfigSubjectAltName) {
    this._subjectAltName.internalValue = value;
  }
  public resetSubjectAltName() {
    this._subjectAltName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNameInput() {
    return this._subjectAltName.internalValue;
  }
}
export interface PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#object_id_path PrivatecaCertificate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectIdOutputReference | PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._objectIdPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectIdPath = this._objectIdPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId | undefined) {
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
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('object_id_path') as any;
  }
  public set objectIdPath(value: number[]) {
    this._objectIdPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdPathInput() {
    return this._objectIdPath;
  }
}
export interface PrivatecaCertificateConfigX509ConfigAdditionalExtensions {
  /**
  * Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#critical PrivatecaCertificate#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * The value of this X.509 extension. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#value PrivatecaCertificate#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#object_id PrivatecaCertificate#object_id}
  */
  readonly objectId: PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId;
}

export function privatecaCertificateConfigX509ConfigAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateConfigX509ConfigAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: privatecaCertificateConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}

export interface PrivatecaCertificateConfigX509ConfigCaOptions {
  /**
  * Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing,
the extension will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#is_ca PrivatecaCertificate#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this
value is missing, the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#max_issuer_path_length PrivatecaCertificate#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
}

export function privatecaCertificateConfigX509ConfigCaOptionsToTerraform(struct?: PrivatecaCertificateConfigX509ConfigCaOptionsOutputReference | PrivatecaCertificateConfigX509ConfigCaOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
  }
}

export class PrivatecaCertificateConfigX509ConfigCaOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigX509ConfigCaOptions | undefined {
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

  public set internalValue(value: PrivatecaCertificateConfigX509ConfigCaOptions | undefined) {
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
    return this.getBooleanAttribute('is_ca') as any;
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
export interface PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#cert_sign PrivatecaCertificate#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#content_commitment PrivatecaCertificate#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#crl_sign PrivatecaCertificate#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#data_encipherment PrivatecaCertificate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#decipher_only PrivatecaCertificate#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#digital_signature PrivatecaCertificate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#encipher_only PrivatecaCertificate#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#key_agreement PrivatecaCertificate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#key_encipherment PrivatecaCertificate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

export function privatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageOutputReference | PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage): any {
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

export class PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage | undefined {
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

  public set internalValue(value: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage | undefined) {
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
    return this.getBooleanAttribute('cert_sign') as any;
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
    return this.getBooleanAttribute('content_commitment') as any;
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
    return this.getBooleanAttribute('crl_sign') as any;
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
    return this.getBooleanAttribute('data_encipherment') as any;
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
    return this.getBooleanAttribute('decipher_only') as any;
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
    return this.getBooleanAttribute('digital_signature') as any;
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
    return this.getBooleanAttribute('encipher_only') as any;
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
    return this.getBooleanAttribute('key_agreement') as any;
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
    return this.getBooleanAttribute('key_encipherment') as any;
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
export interface PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#client_auth PrivatecaCertificate#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#code_signing PrivatecaCertificate#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#email_protection PrivatecaCertificate#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#ocsp_signing PrivatecaCertificate#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#server_auth PrivatecaCertificate#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#time_stamping PrivatecaCertificate#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

export function privatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference | PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage): any {
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

export class PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage | undefined {
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

  public set internalValue(value: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage | undefined) {
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
    return this.getBooleanAttribute('client_auth') as any;
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
    return this.getBooleanAttribute('code_signing') as any;
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
    return this.getBooleanAttribute('email_protection') as any;
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
    return this.getBooleanAttribute('ocsp_signing') as any;
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
    return this.getBooleanAttribute('server_auth') as any;
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
    return this.getBooleanAttribute('time_stamping') as any;
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
export interface PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#object_id_path PrivatecaCertificate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCertificateConfigX509ConfigKeyUsage {
  /**
  * base_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#base_key_usage PrivatecaCertificate#base_key_usage}
  */
  readonly baseKeyUsage: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#extended_key_usage PrivatecaCertificate#extended_key_usage}
  */
  readonly extendedKeyUsage: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#unknown_extended_key_usages PrivatecaCertificate#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
}

export function privatecaCertificateConfigX509ConfigKeyUsageToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageOutputReference | PrivatecaCertificateConfigX509ConfigKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: privatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: privatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
  }
}

export class PrivatecaCertificateConfigX509ConfigKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigX509ConfigKeyUsage | undefined {
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
    if (this._unknownExtendedKeyUsages !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownExtendedKeyUsages = this._unknownExtendedKeyUsages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigX509ConfigKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._baseKeyUsage.internalValue = undefined;
      this._extendedKeyUsage.internalValue = undefined;
      this._unknownExtendedKeyUsages = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._baseKeyUsage.internalValue = value.baseKeyUsage;
      this._extendedKeyUsage.internalValue = value.extendedKeyUsage;
      this._unknownExtendedKeyUsages = value.unknownExtendedKeyUsages;
    }
  }

  // base_key_usage - computed: false, optional: false, required: true
  private _baseKeyUsage = new PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(this as any, "base_key_usage", true);
  public get baseKeyUsage() {
    return this._baseKeyUsage;
  }
  public putBaseKeyUsage(value: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage) {
    this._baseKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage.internalValue;
  }

  // extended_key_usage - computed: false, optional: false, required: true
  private _extendedKeyUsage = new PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(this as any, "extended_key_usage", true);
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }
  public putExtendedKeyUsage(value: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage.internalValue;
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages?: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[]; 
  public get unknownExtendedKeyUsages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unknown_extended_key_usages') as any;
  }
  public set unknownExtendedKeyUsages(value: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[]) {
    this._unknownExtendedKeyUsages = value;
  }
  public resetUnknownExtendedKeyUsages() {
    this._unknownExtendedKeyUsages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownExtendedKeyUsagesInput() {
    return this._unknownExtendedKeyUsages;
  }
}
export interface PrivatecaCertificateConfigX509ConfigPolicyIds {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#object_id_path PrivatecaCertificate#object_id_path}
  */
  readonly objectIdPath: number[];
}

export function privatecaCertificateConfigX509ConfigPolicyIdsToTerraform(struct?: PrivatecaCertificateConfigX509ConfigPolicyIds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCertificateConfigX509Config {
  /**
  * Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#aia_ocsp_servers PrivatecaCertificate#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#additional_extensions PrivatecaCertificate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateConfigX509ConfigAdditionalExtensions[];
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#ca_options PrivatecaCertificate#ca_options}
  */
  readonly caOptions?: PrivatecaCertificateConfigX509ConfigCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#key_usage PrivatecaCertificate#key_usage}
  */
  readonly keyUsage: PrivatecaCertificateConfigX509ConfigKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#policy_ids PrivatecaCertificate#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateConfigX509ConfigPolicyIds[];
}

export function privatecaCertificateConfigX509ConfigToTerraform(struct?: PrivatecaCertificateConfigX509ConfigOutputReference | PrivatecaCertificateConfigX509Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCertificateConfigX509ConfigAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: privatecaCertificateConfigX509ConfigCaOptionsToTerraform(struct!.caOptions),
    key_usage: privatecaCertificateConfigX509ConfigKeyUsageToTerraform(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCertificateConfigX509ConfigPolicyIdsToTerraform)(struct!.policyIds),
  }
}

export class PrivatecaCertificateConfigX509ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigX509Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aiaOcspServers !== undefined) {
      hasAnyValues = true;
      internalValueResult.aiaOcspServers = this._aiaOcspServers;
    }
    if (this._additionalExtensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalExtensions = this._additionalExtensions;
    }
    if (this._caOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caOptions = this._caOptions?.internalValue;
    }
    if (this._keyUsage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyUsage = this._keyUsage?.internalValue;
    }
    if (this._policyIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyIds = this._policyIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigX509Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aiaOcspServers = undefined;
      this._additionalExtensions = undefined;
      this._caOptions.internalValue = undefined;
      this._keyUsage.internalValue = undefined;
      this._policyIds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aiaOcspServers = value.aiaOcspServers;
      this._additionalExtensions = value.additionalExtensions;
      this._caOptions.internalValue = value.caOptions;
      this._keyUsage.internalValue = value.keyUsage;
      this._policyIds = value.policyIds;
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
  private _additionalExtensions?: PrivatecaCertificateConfigX509ConfigAdditionalExtensions[]; 
  public get additionalExtensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_extensions') as any;
  }
  public set additionalExtensions(value: PrivatecaCertificateConfigX509ConfigAdditionalExtensions[]) {
    this._additionalExtensions = value;
  }
  public resetAdditionalExtensions() {
    this._additionalExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalExtensionsInput() {
    return this._additionalExtensions;
  }

  // ca_options - computed: false, optional: true, required: false
  private _caOptions = new PrivatecaCertificateConfigX509ConfigCaOptionsOutputReference(this as any, "ca_options", true);
  public get caOptions() {
    return this._caOptions;
  }
  public putCaOptions(value: PrivatecaCertificateConfigX509ConfigCaOptions) {
    this._caOptions.internalValue = value;
  }
  public resetCaOptions() {
    this._caOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions.internalValue;
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage = new PrivatecaCertificateConfigX509ConfigKeyUsageOutputReference(this as any, "key_usage", true);
  public get keyUsage() {
    return this._keyUsage;
  }
  public putKeyUsage(value: PrivatecaCertificateConfigX509ConfigKeyUsage) {
    this._keyUsage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage.internalValue;
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: PrivatecaCertificateConfigX509ConfigPolicyIds[]; 
  public get policyIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_ids') as any;
  }
  public set policyIds(value: PrivatecaCertificateConfigX509ConfigPolicyIds[]) {
    this._policyIds = value;
  }
  public resetPolicyIds() {
    this._policyIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdsInput() {
    return this._policyIds;
  }
}
export interface PrivatecaCertificateConfigA {
  /**
  * public_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#public_key PrivatecaCertificate#public_key}
  */
  readonly publicKey: PrivatecaCertificateConfigPublicKey;
  /**
  * subject_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#subject_config PrivatecaCertificate#subject_config}
  */
  readonly subjectConfig: PrivatecaCertificateConfigSubjectConfig;
  /**
  * x509_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#x509_config PrivatecaCertificate#x509_config}
  */
  readonly x509Config: PrivatecaCertificateConfigX509Config;
}

export function privatecaCertificateConfigAToTerraform(struct?: PrivatecaCertificateConfigAOutputReference | PrivatecaCertificateConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    public_key: privatecaCertificateConfigPublicKeyToTerraform(struct!.publicKey),
    subject_config: privatecaCertificateConfigSubjectConfigToTerraform(struct!.subjectConfig),
    x509_config: privatecaCertificateConfigX509ConfigToTerraform(struct!.x509Config),
  }
}

export class PrivatecaCertificateConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._publicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey?.internalValue;
    }
    if (this._subjectConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectConfig = this._subjectConfig?.internalValue;
    }
    if (this._x509Config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.x509Config = this._x509Config?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrivatecaCertificateConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._publicKey.internalValue = undefined;
      this._subjectConfig.internalValue = undefined;
      this._x509Config.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._publicKey.internalValue = value.publicKey;
      this._subjectConfig.internalValue = value.subjectConfig;
      this._x509Config.internalValue = value.x509Config;
    }
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey = new PrivatecaCertificateConfigPublicKeyOutputReference(this as any, "public_key", true);
  public get publicKey() {
    return this._publicKey;
  }
  public putPublicKey(value: PrivatecaCertificateConfigPublicKey) {
    this._publicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey.internalValue;
  }

  // subject_config - computed: false, optional: false, required: true
  private _subjectConfig = new PrivatecaCertificateConfigSubjectConfigOutputReference(this as any, "subject_config", true);
  public get subjectConfig() {
    return this._subjectConfig;
  }
  public putSubjectConfig(value: PrivatecaCertificateConfigSubjectConfig) {
    this._subjectConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectConfigInput() {
    return this._subjectConfig.internalValue;
  }

  // x509_config - computed: false, optional: false, required: true
  private _x509Config = new PrivatecaCertificateConfigX509ConfigOutputReference(this as any, "x509_config", true);
  public get x509Config() {
    return this._x509Config;
  }
  public putX509Config(value: PrivatecaCertificateConfigX509Config) {
    this._x509Config.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509ConfigInput() {
    return this._x509Config.internalValue;
  }
}
export interface PrivatecaCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#create PrivatecaCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate#delete PrivatecaCertificate#delete}
  */
  readonly delete?: string;
}

export function privatecaCertificateTimeoutsToTerraform(struct?: PrivatecaCertificateTimeoutsOutputReference | PrivatecaCertificateTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class PrivatecaCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): PrivatecaCertificateTimeouts | undefined {
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

  public set internalValue(value: PrivatecaCertificateTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate google_privateca_certificate}
*/
export class PrivatecaCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_privateca_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate google_privateca_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_certificate',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateAuthority = config.certificateAuthority;
    this._certificateTemplate = config.certificateTemplate;
    this._labels = config.labels;
    this._lifetime = config.lifetime;
    this._location = config.location;
    this._name = config.name;
    this._pemCsr = config.pemCsr;
    this._pool = config.pool;
    this._project = config.project;
    this._config.internalValue = config.config;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority?: string; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority;
  }

  // certificate_description - computed: true, optional: false, required: false
  public certificateDescription(index: string) {
    return new PrivatecaCertificateCertificateDescription(this, 'certificate_description', index);
  }

  // certificate_template - computed: false, optional: true, required: false
  private _certificateTemplate?: string; 
  public get certificateTemplate() {
    return this.getStringAttribute('certificate_template');
  }
  public set certificateTemplate(value: string) {
    this._certificateTemplate = value;
  }
  public resetCertificateTemplate() {
    this._certificateTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTemplateInput() {
    return this._certificateTemplate;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string } | cdktf.IResolvable; 
  public get labels() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('labels') as any;
  }
  public set labels(value: { [key: string]: string } | cdktf.IResolvable) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime;
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

  // pem_certificate - computed: true, optional: false, required: false
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }

  // pem_certificates - computed: true, optional: false, required: false
  public get pemCertificates() {
    return this.getListAttribute('pem_certificates');
  }

  // pem_csr - computed: false, optional: true, required: false
  private _pemCsr?: string; 
  public get pemCsr() {
    return this.getStringAttribute('pem_csr');
  }
  public set pemCsr(value: string) {
    this._pemCsr = value;
  }
  public resetPemCsr() {
    this._pemCsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCsrInput() {
    return this._pemCsr;
  }

  // pool - computed: false, optional: false, required: true
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
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

  // revocation_details - computed: true, optional: false, required: false
  public revocationDetails(index: string) {
    return new PrivatecaCertificateRevocationDetails(this, 'revocation_details', index);
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // config - computed: false, optional: true, required: false
  private _config = new PrivatecaCertificateConfigAOutputReference(this as any, "config", true);
  public get config() {
    return this._config;
  }
  public putConfig(value: PrivatecaCertificateConfigA) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PrivatecaCertificateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PrivatecaCertificateTimeouts) {
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
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      certificate_template: cdktf.stringToTerraform(this._certificateTemplate),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      pem_csr: cdktf.stringToTerraform(this._pemCsr),
      pool: cdktf.stringToTerraform(this._pool),
      project: cdktf.stringToTerraform(this._project),
      config: privatecaCertificateConfigAToTerraform(this._config.internalValue),
      timeouts: privatecaCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
