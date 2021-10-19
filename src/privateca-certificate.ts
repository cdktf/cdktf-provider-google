// https://www.terraform.io/docs/providers/google/r/privateca_certificate.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Certificate Authority name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#certificate_authority PrivatecaCertificate#certificate_authority}
  */
  readonly certificateAuthority?: string;
  /**
  * The resource name for a CertificateTemplate used to issue this certificate,
in the format 'projects/*\/locations/*\/certificateTemplates/*'. If this is specified,
the caller must have the necessary permission to use this template. If this is
omitted, no template will be used. This template must be in the same location
as the Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#certificate_template PrivatecaCertificate#certificate_template}
  */
  readonly certificateTemplate?: string;
  /**
  * Labels with user-defined metadata to apply to this resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#labels PrivatecaCertificate#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#lifetime PrivatecaCertificate#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Location of the Certificate. A full list of valid locations can be found by
running 'gcloud privateca locations list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#location PrivatecaCertificate#location}
  */
  readonly location: string;
  /**
  * The name for this Certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#name PrivatecaCertificate#name}
  */
  readonly name: string;
  /**
  * Immutable. A pem-encoded X.509 certificate signing request (CSR).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#pem_csr PrivatecaCertificate#pem_csr}
  */
  readonly pemCsr?: string;
  /**
  * The name of the CaPool this Certificate belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#pool PrivatecaCertificate#pool}
  */
  readonly pool: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#project PrivatecaCertificate#project}
  */
  readonly project?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#config PrivatecaCertificate#config}
  */
  readonly config?: PrivatecaCertificateConfigA;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#timeouts PrivatecaCertificate#timeouts}
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#format PrivatecaCertificate#format}
  */
  readonly format: string;
  /**
  * Required. A public key. When this is specified in a request, the padding and encoding can be any of the options described by the respective 'KeyType' value. When this is generated by the service, it will always be an RFC 5280 SubjectPublicKeyInfo structure containing an algorithm identifier and a key. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#key PrivatecaCertificate#key}
  */
  readonly key?: string;
}

function privatecaCertificateConfigPublicKeyToTerraform(struct?: PrivatecaCertificateConfigPublicKeyOutputReference | PrivatecaCertificateConfigPublicKey): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._format
  }

  // key - computed: false, optional: true, required: false
  private _key?: string | undefined; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }
}
export interface PrivatecaCertificateConfigSubjectConfigSubject {
  /**
  * The common name of the distinguished name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#common_name PrivatecaCertificate#common_name}
  */
  readonly commonName: string;
  /**
  * The country code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#country_code PrivatecaCertificate#country_code}
  */
  readonly countryCode?: string;
  /**
  * The locality or city of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#locality PrivatecaCertificate#locality}
  */
  readonly locality?: string;
  /**
  * The organization of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#organization PrivatecaCertificate#organization}
  */
  readonly organization: string;
  /**
  * The organizational unit of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#organizational_unit PrivatecaCertificate#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * The postal code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#postal_code PrivatecaCertificate#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The province, territory, or regional state of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#province PrivatecaCertificate#province}
  */
  readonly province?: string;
  /**
  * The street address of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#street_address PrivatecaCertificate#street_address}
  */
  readonly streetAddress?: string;
}

function privatecaCertificateConfigSubjectConfigSubjectToTerraform(struct?: PrivatecaCertificateConfigSubjectConfigSubjectOutputReference | PrivatecaCertificateConfigSubjectConfigSubject): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
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
    return this._commonName
  }

  // country_code - computed: false, optional: true, required: false
  private _countryCode?: string | undefined; 
  public get countryCode() {
    return this.getStringAttribute('country_code');
  }
  public set countryCode(value: string | undefined) {
    this._countryCode = value;
  }
  public resetCountryCode() {
    this._countryCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryCodeInput() {
    return this._countryCode
  }

  // locality - computed: false, optional: true, required: false
  private _locality?: string | undefined; 
  public get locality() {
    return this.getStringAttribute('locality');
  }
  public set locality(value: string | undefined) {
    this._locality = value;
  }
  public resetLocality() {
    this._locality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localityInput() {
    return this._locality
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
    return this._organization
  }

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string | undefined; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string | undefined) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit
  }

  // postal_code - computed: false, optional: true, required: false
  private _postalCode?: string | undefined; 
  public get postalCode() {
    return this.getStringAttribute('postal_code');
  }
  public set postalCode(value: string | undefined) {
    this._postalCode = value;
  }
  public resetPostalCode() {
    this._postalCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postalCodeInput() {
    return this._postalCode
  }

  // province - computed: false, optional: true, required: false
  private _province?: string | undefined; 
  public get province() {
    return this.getStringAttribute('province');
  }
  public set province(value: string | undefined) {
    this._province = value;
  }
  public resetProvince() {
    this._province = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provinceInput() {
    return this._province
  }

  // street_address - computed: false, optional: true, required: false
  private _streetAddress?: string | undefined; 
  public get streetAddress() {
    return this.getStringAttribute('street_address');
  }
  public set streetAddress(value: string | undefined) {
    this._streetAddress = value;
  }
  public resetStreetAddress() {
    this._streetAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streetAddressInput() {
    return this._streetAddress
  }
}
export interface PrivatecaCertificateConfigSubjectConfigSubjectAltName {
  /**
  * Contains only valid, fully-qualified host names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#dns_names PrivatecaCertificate#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Contains only valid RFC 2822 E-mail addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#email_addresses PrivatecaCertificate#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#ip_addresses PrivatecaCertificate#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Contains only valid RFC 3986 URIs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#uris PrivatecaCertificate#uris}
  */
  readonly uris?: string[];
}

function privatecaCertificateConfigSubjectConfigSubjectAltNameToTerraform(struct?: PrivatecaCertificateConfigSubjectConfigSubjectAltNameOutputReference | PrivatecaCertificateConfigSubjectConfigSubjectAltName): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // dns_names - computed: false, optional: true, required: false
  private _dnsNames?: string[] | undefined; 
  public get dnsNames() {
    return this.getListAttribute('dns_names');
  }
  public set dnsNames(value: string[] | undefined) {
    this._dnsNames = value;
  }
  public resetDnsNames() {
    this._dnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNamesInput() {
    return this._dnsNames
  }

  // email_addresses - computed: false, optional: true, required: false
  private _emailAddresses?: string[] | undefined; 
  public get emailAddresses() {
    return this.getListAttribute('email_addresses');
  }
  public set emailAddresses(value: string[] | undefined) {
    this._emailAddresses = value;
  }
  public resetEmailAddresses() {
    this._emailAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailAddressesInput() {
    return this._emailAddresses
  }

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[] | undefined; 
  public get ipAddresses() {
    return this.getListAttribute('ip_addresses');
  }
  public set ipAddresses(value: string[] | undefined) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses
  }

  // uris - computed: false, optional: true, required: false
  private _uris?: string[] | undefined; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[] | undefined) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris
  }
}
export interface PrivatecaCertificateConfigSubjectConfig {
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#subject PrivatecaCertificate#subject}
  */
  readonly subject: PrivatecaCertificateConfigSubjectConfigSubject;
  /**
  * subject_alt_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#subject_alt_name PrivatecaCertificate#subject_alt_name}
  */
  readonly subjectAltName?: PrivatecaCertificateConfigSubjectConfigSubjectAltName;
}

function privatecaCertificateConfigSubjectConfigToTerraform(struct?: PrivatecaCertificateConfigSubjectConfigOutputReference | PrivatecaCertificateConfigSubjectConfig): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: PrivatecaCertificateConfigSubjectConfigSubject; 
  private __subjectOutput = new PrivatecaCertificateConfigSubjectConfigSubjectOutputReference(this as any, "subject", true);
  public get subject() {
    return this.__subjectOutput;
  }
  public putSubject(value: PrivatecaCertificateConfigSubjectConfigSubject) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // subject_alt_name - computed: false, optional: true, required: false
  private _subjectAltName?: PrivatecaCertificateConfigSubjectConfigSubjectAltName | undefined; 
  private __subjectAltNameOutput = new PrivatecaCertificateConfigSubjectConfigSubjectAltNameOutputReference(this as any, "subject_alt_name", true);
  public get subjectAltName() {
    return this.__subjectAltNameOutput;
  }
  public putSubjectAltName(value: PrivatecaCertificateConfigSubjectConfigSubjectAltName | undefined) {
    this._subjectAltName = value;
  }
  public resetSubjectAltName() {
    this._subjectAltName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAltNameInput() {
    return this._subjectAltName
  }
}
export interface PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#object_id_path PrivatecaCertificate#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectIdOutputReference | PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
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
export interface PrivatecaCertificateConfigX509ConfigAdditionalExtensions {
  /**
  * Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#critical PrivatecaCertificate#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * The value of this X.509 extension. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#value PrivatecaCertificate#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#object_id PrivatecaCertificate#object_id}
  */
  readonly objectId: PrivatecaCertificateConfigX509ConfigAdditionalExtensionsObjectId;
}

function privatecaCertificateConfigX509ConfigAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateConfigX509ConfigAdditionalExtensions): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#is_ca PrivatecaCertificate#is_ca}
  */
  readonly isCa?: boolean | cdktf.IResolvable;
  /**
  * Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this
value is missing, the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#max_issuer_path_length PrivatecaCertificate#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
}

function privatecaCertificateConfigX509ConfigCaOptionsToTerraform(struct?: PrivatecaCertificateConfigX509ConfigCaOptionsOutputReference | PrivatecaCertificateConfigX509ConfigCaOptions): any {
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
export interface PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#cert_sign PrivatecaCertificate#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#content_commitment PrivatecaCertificate#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#crl_sign PrivatecaCertificate#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#data_encipherment PrivatecaCertificate#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#decipher_only PrivatecaCertificate#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#digital_signature PrivatecaCertificate#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#encipher_only PrivatecaCertificate#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#key_agreement PrivatecaCertificate#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#key_encipherment PrivatecaCertificate#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

function privatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageOutputReference | PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage): any {
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
export interface PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#client_auth PrivatecaCertificate#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#code_signing PrivatecaCertificate#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#email_protection PrivatecaCertificate#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#ocsp_signing PrivatecaCertificate#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#server_auth PrivatecaCertificate#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#time_stamping PrivatecaCertificate#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

function privatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference | PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage): any {
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
export interface PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#object_id_path PrivatecaCertificate#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#base_key_usage PrivatecaCertificate#base_key_usage}
  */
  readonly baseKeyUsage: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#extended_key_usage PrivatecaCertificate#extended_key_usage}
  */
  readonly extendedKeyUsage: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#unknown_extended_key_usages PrivatecaCertificate#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
}

function privatecaCertificateConfigX509ConfigKeyUsageToTerraform(struct?: PrivatecaCertificateConfigX509ConfigKeyUsageOutputReference | PrivatecaCertificateConfigX509ConfigKeyUsage): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // base_key_usage - computed: false, optional: false, required: true
  private _baseKeyUsage?: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage; 
  private __baseKeyUsageOutput = new PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(this as any, "base_key_usage", true);
  public get baseKeyUsage() {
    return this.__baseKeyUsageOutput;
  }
  public putBaseKeyUsage(value: PrivatecaCertificateConfigX509ConfigKeyUsageBaseKeyUsage) {
    this._baseKeyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage
  }

  // extended_key_usage - computed: false, optional: false, required: true
  private _extendedKeyUsage?: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage; 
  private __extendedKeyUsageOutput = new PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(this as any, "extended_key_usage", true);
  public get extendedKeyUsage() {
    return this.__extendedKeyUsageOutput;
  }
  public putExtendedKeyUsage(value: PrivatecaCertificateConfigX509ConfigKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages?: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[] | undefined; 
  public get unknownExtendedKeyUsages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unknown_extended_key_usages') as any;
  }
  public set unknownExtendedKeyUsages(value: PrivatecaCertificateConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[] | undefined) {
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
export interface PrivatecaCertificateConfigX509ConfigPolicyIds {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#object_id_path PrivatecaCertificate#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateConfigX509ConfigPolicyIdsToTerraform(struct?: PrivatecaCertificateConfigX509ConfigPolicyIds): any {
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
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#aia_ocsp_servers PrivatecaCertificate#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#additional_extensions PrivatecaCertificate#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateConfigX509ConfigAdditionalExtensions[];
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#ca_options PrivatecaCertificate#ca_options}
  */
  readonly caOptions?: PrivatecaCertificateConfigX509ConfigCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#key_usage PrivatecaCertificate#key_usage}
  */
  readonly keyUsage: PrivatecaCertificateConfigX509ConfigKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#policy_ids PrivatecaCertificate#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateConfigX509ConfigPolicyIds[];
}

function privatecaCertificateConfigX509ConfigToTerraform(struct?: PrivatecaCertificateConfigX509ConfigOutputReference | PrivatecaCertificateConfigX509Config): any {
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
  private _additionalExtensions?: PrivatecaCertificateConfigX509ConfigAdditionalExtensions[] | undefined; 
  public get additionalExtensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_extensions') as any;
  }
  public set additionalExtensions(value: PrivatecaCertificateConfigX509ConfigAdditionalExtensions[] | undefined) {
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
  private _caOptions?: PrivatecaCertificateConfigX509ConfigCaOptions | undefined; 
  private __caOptionsOutput = new PrivatecaCertificateConfigX509ConfigCaOptionsOutputReference(this as any, "ca_options", true);
  public get caOptions() {
    return this.__caOptionsOutput;
  }
  public putCaOptions(value: PrivatecaCertificateConfigX509ConfigCaOptions | undefined) {
    this._caOptions = value;
  }
  public resetCaOptions() {
    this._caOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage?: PrivatecaCertificateConfigX509ConfigKeyUsage; 
  private __keyUsageOutput = new PrivatecaCertificateConfigX509ConfigKeyUsageOutputReference(this as any, "key_usage", true);
  public get keyUsage() {
    return this.__keyUsageOutput;
  }
  public putKeyUsage(value: PrivatecaCertificateConfigX509ConfigKeyUsage) {
    this._keyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: PrivatecaCertificateConfigX509ConfigPolicyIds[] | undefined; 
  public get policyIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_ids') as any;
  }
  public set policyIds(value: PrivatecaCertificateConfigX509ConfigPolicyIds[] | undefined) {
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
export interface PrivatecaCertificateConfigA {
  /**
  * public_key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#public_key PrivatecaCertificate#public_key}
  */
  readonly publicKey: PrivatecaCertificateConfigPublicKey;
  /**
  * subject_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#subject_config PrivatecaCertificate#subject_config}
  */
  readonly subjectConfig: PrivatecaCertificateConfigSubjectConfig;
  /**
  * x509_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#x509_config PrivatecaCertificate#x509_config}
  */
  readonly x509Config: PrivatecaCertificateConfigX509Config;
}

function privatecaCertificateConfigAToTerraform(struct?: PrivatecaCertificateConfigAOutputReference | PrivatecaCertificateConfigA): any {
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
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // public_key - computed: false, optional: false, required: true
  private _publicKey?: PrivatecaCertificateConfigPublicKey; 
  private __publicKeyOutput = new PrivatecaCertificateConfigPublicKeyOutputReference(this as any, "public_key", true);
  public get publicKey() {
    return this.__publicKeyOutput;
  }
  public putPublicKey(value: PrivatecaCertificateConfigPublicKey) {
    this._publicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey
  }

  // subject_config - computed: false, optional: false, required: true
  private _subjectConfig?: PrivatecaCertificateConfigSubjectConfig; 
  private __subjectConfigOutput = new PrivatecaCertificateConfigSubjectConfigOutputReference(this as any, "subject_config", true);
  public get subjectConfig() {
    return this.__subjectConfigOutput;
  }
  public putSubjectConfig(value: PrivatecaCertificateConfigSubjectConfig) {
    this._subjectConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectConfigInput() {
    return this._subjectConfig
  }

  // x509_config - computed: false, optional: false, required: true
  private _x509Config?: PrivatecaCertificateConfigX509Config; 
  private __x509ConfigOutput = new PrivatecaCertificateConfigX509ConfigOutputReference(this as any, "x509_config", true);
  public get x509Config() {
    return this.__x509ConfigOutput;
  }
  public putX509Config(value: PrivatecaCertificateConfigX509Config) {
    this._x509Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509ConfigInput() {
    return this._x509Config
  }
}
export interface PrivatecaCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#create PrivatecaCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html#delete PrivatecaCertificate#delete}
  */
  readonly delete?: string;
}

function privatecaCertificateTimeoutsToTerraform(struct?: PrivatecaCertificateTimeoutsOutputReference | PrivatecaCertificateTimeouts): any {
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
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html google_privateca_certificate}
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
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate.html google_privateca_certificate} Resource
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
    this._config = config.config;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_authority - computed: false, optional: true, required: false
  private _certificateAuthority?: string | undefined; 
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }
  public set certificateAuthority(value: string | undefined) {
    this._certificateAuthority = value;
  }
  public resetCertificateAuthority() {
    this._certificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityInput() {
    return this._certificateAuthority
  }

  // certificate_description - computed: true, optional: false, required: false
  public certificateDescription(index: string) {
    return new PrivatecaCertificateCertificateDescription(this, 'certificate_description', index);
  }

  // certificate_template - computed: false, optional: true, required: false
  private _certificateTemplate?: string | undefined; 
  public get certificateTemplate() {
    return this.getStringAttribute('certificate_template');
  }
  public set certificateTemplate(value: string | undefined) {
    this._certificateTemplate = value;
  }
  public resetCertificateTemplate() {
    this._certificateTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTemplateInput() {
    return this._certificateTemplate
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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string | undefined; 
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string | undefined) {
    this._lifetime = value;
  }
  public resetLifetime() {
    this._lifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifetimeInput() {
    return this._lifetime
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

  // pem_certificate - computed: true, optional: false, required: false
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }

  // pem_certificates - computed: true, optional: false, required: false
  public get pemCertificates() {
    return this.getListAttribute('pem_certificates');
  }

  // pem_csr - computed: false, optional: true, required: false
  private _pemCsr?: string | undefined; 
  public get pemCsr() {
    return this.getStringAttribute('pem_csr');
  }
  public set pemCsr(value: string | undefined) {
    this._pemCsr = value;
  }
  public resetPemCsr() {
    this._pemCsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCsrInput() {
    return this._pemCsr
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
    return this._pool
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

  // revocation_details - computed: true, optional: false, required: false
  public revocationDetails(index: string) {
    return new PrivatecaCertificateRevocationDetails(this, 'revocation_details', index);
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // config - computed: false, optional: true, required: false
  private _config?: PrivatecaCertificateConfigA | undefined; 
  private __configOutput = new PrivatecaCertificateConfigAOutputReference(this as any, "config", true);
  public get config() {
    return this.__configOutput;
  }
  public putConfig(value: PrivatecaCertificateConfigA | undefined) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivatecaCertificateTimeouts | undefined; 
  private __timeoutsOutput = new PrivatecaCertificateTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PrivatecaCertificateTimeouts | undefined) {
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
      certificate_authority: cdktf.stringToTerraform(this._certificateAuthority),
      certificate_template: cdktf.stringToTerraform(this._certificateTemplate),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      pem_csr: cdktf.stringToTerraform(this._pemCsr),
      pool: cdktf.stringToTerraform(this._pool),
      project: cdktf.stringToTerraform(this._project),
      config: privatecaCertificateConfigAToTerraform(this._config),
      timeouts: privatecaCertificateTimeoutsToTerraform(this._timeouts),
    };
  }
}
