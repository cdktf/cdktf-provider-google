// https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivatecaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user provided Resource ID for this Certificate Authority.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#certificate_authority_id PrivatecaCertificateAuthority#certificate_authority_id}
  */
  readonly certificateAuthorityId: string;
  /**
  * The name of a Cloud Storage bucket where this CertificateAuthority will publish content,
such as the CA certificate and CRLs. This must be a bucket name, without any prefixes
(such as 'gs://') or suffixes (such as '.googleapis.com'). For example, to use a bucket named
my-bucket, you would simply specify 'my-bucket'. If not specified, a managed bucket will be
created.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#gcs_bucket PrivatecaCertificateAuthority#gcs_bucket}
  */
  readonly gcsBucket?: string;
  /**
  * This field allows the CA to be deleted even if the CA has active certs. Active certs include both unrevoked and unexpired certs.
Use with care. Defaults to 'false'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#ignore_active_certificates_on_deletion PrivatecaCertificateAuthority#ignore_active_certificates_on_deletion}
  */
  readonly ignoreActiveCertificatesOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#labels PrivatecaCertificateAuthority#labels}
  */
  readonly labels?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The desired lifetime of the CA certificate. Used to create the "notBeforeTime" and
"notAfterTime" fields inside an X.509 certificate. A duration in seconds with up to nine
fractional digits, terminated by 's'. Example: "3.5s".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#lifetime PrivatecaCertificateAuthority#lifetime}
  */
  readonly lifetime?: string;
  /**
  * Location of the CertificateAuthority. A full list of valid locations can be found by
running 'gcloud privateca locations list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#location PrivatecaCertificateAuthority#location}
  */
  readonly location: string;
  /**
  * The name of the CaPool this Certificate Authority belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#pool PrivatecaCertificateAuthority#pool}
  */
  readonly pool: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#project PrivatecaCertificateAuthority#project}
  */
  readonly project?: string;
  /**
  * The Type of this CertificateAuthority.

~> **Note:** For 'SUBORDINATE' Certificate Authorities, they need to
be manually activated (via Cloud Console of 'gcloud') before they can
issue certificates. Default value: "SELF_SIGNED" Possible values: ["SELF_SIGNED", "SUBORDINATE"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#type PrivatecaCertificateAuthority#type}
  */
  readonly type?: string;
  /**
  * config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#config PrivatecaCertificateAuthority#config}
  */
  readonly config: PrivatecaCertificateAuthorityConfigA;
  /**
  * key_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#key_spec PrivatecaCertificateAuthority#key_spec}
  */
  readonly keySpec: PrivatecaCertificateAuthorityKeySpec;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#timeouts PrivatecaCertificateAuthority#timeouts}
  */
  readonly timeouts?: PrivatecaCertificateAuthorityTimeouts;
}
export class PrivatecaCertificateAuthorityAccessUrls extends cdktf.ComplexComputedList {

  // ca_certificate_access_url - computed: true, optional: false, required: false
  public get caCertificateAccessUrl() {
    return this.getStringAttribute('ca_certificate_access_url');
  }

  // crl_access_url - computed: true, optional: false, required: false
  public get crlAccessUrl() {
    return this.getStringAttribute('crl_access_url');
  }
}
export interface PrivatecaCertificateAuthorityConfigSubjectConfigSubject {
  /**
  * The common name of the distinguished name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#common_name PrivatecaCertificateAuthority#common_name}
  */
  readonly commonName: string;
  /**
  * The country code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#country_code PrivatecaCertificateAuthority#country_code}
  */
  readonly countryCode?: string;
  /**
  * The locality or city of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#locality PrivatecaCertificateAuthority#locality}
  */
  readonly locality?: string;
  /**
  * The organization of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#organization PrivatecaCertificateAuthority#organization}
  */
  readonly organization: string;
  /**
  * The organizational unit of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#organizational_unit PrivatecaCertificateAuthority#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * The postal code of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#postal_code PrivatecaCertificateAuthority#postal_code}
  */
  readonly postalCode?: string;
  /**
  * The province, territory, or regional state of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#province PrivatecaCertificateAuthority#province}
  */
  readonly province?: string;
  /**
  * The street address of the subject.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#street_address PrivatecaCertificateAuthority#street_address}
  */
  readonly streetAddress?: string;
}

function privatecaCertificateAuthorityConfigSubjectConfigSubjectToTerraform(struct?: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference | PrivatecaCertificateAuthorityConfigSubjectConfigSubject): any {
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

export class PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference extends cdktf.ComplexObject {
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
export interface PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName {
  /**
  * Contains only valid, fully-qualified host names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#dns_names PrivatecaCertificateAuthority#dns_names}
  */
  readonly dnsNames?: string[];
  /**
  * Contains only valid RFC 2822 E-mail addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#email_addresses PrivatecaCertificateAuthority#email_addresses}
  */
  readonly emailAddresses?: string[];
  /**
  * Contains only valid 32-bit IPv4 addresses or RFC 4291 IPv6 addresses.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#ip_addresses PrivatecaCertificateAuthority#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Contains only valid RFC 3986 URIs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#uris PrivatecaCertificateAuthority#uris}
  */
  readonly uris?: string[];
}

function privatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameToTerraform(struct?: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference | PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName): any {
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

export class PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference extends cdktf.ComplexObject {
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
export interface PrivatecaCertificateAuthorityConfigSubjectConfig {
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#subject PrivatecaCertificateAuthority#subject}
  */
  readonly subject: PrivatecaCertificateAuthorityConfigSubjectConfigSubject;
  /**
  * subject_alt_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#subject_alt_name PrivatecaCertificateAuthority#subject_alt_name}
  */
  readonly subjectAltName?: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName;
}

function privatecaCertificateAuthorityConfigSubjectConfigToTerraform(struct?: PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference | PrivatecaCertificateAuthorityConfigSubjectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject: privatecaCertificateAuthorityConfigSubjectConfigSubjectToTerraform(struct!.subject),
    subject_alt_name: privatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameToTerraform(struct!.subjectAltName),
  }
}

export class PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject - computed: false, optional: false, required: true
  private _subject?: PrivatecaCertificateAuthorityConfigSubjectConfigSubject; 
  private __subjectOutput = new PrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference(this as any, "subject", true);
  public get subject() {
    return this.__subjectOutput;
  }
  public putSubject(value: PrivatecaCertificateAuthorityConfigSubjectConfigSubject) {
    this._subject = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject
  }

  // subject_alt_name - computed: false, optional: true, required: false
  private _subjectAltName?: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName | undefined; 
  private __subjectAltNameOutput = new PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference(this as any, "subject_alt_name", true);
  public get subjectAltName() {
    return this.__subjectAltNameOutput;
  }
  public putSubjectAltName(value: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName | undefined) {
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
export interface PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#object_id_path PrivatecaCertificateAuthority#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference | PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export class PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
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
export interface PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions {
  /**
  * Indicates whether or not this extension is critical (i.e., if the client does not know how to
handle this extension, the client should consider this to be an error).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#critical PrivatecaCertificateAuthority#critical}
  */
  readonly critical: boolean | cdktf.IResolvable;
  /**
  * The value of this X.509 extension. A base64-encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#value PrivatecaCertificateAuthority#value}
  */
  readonly value: string;
  /**
  * object_id block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#object_id PrivatecaCertificateAuthority#object_id}
  */
  readonly objectId: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId;
}

function privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct!.objectId),
  }
}

export interface PrivatecaCertificateAuthorityConfigX509ConfigCaOptions {
  /**
  * Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing,
the extension will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#is_ca PrivatecaCertificateAuthority#is_ca}
  */
  readonly isCa: boolean | cdktf.IResolvable;
  /**
  * Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this
value is missing, the max path length will be omitted from the CA certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#max_issuer_path_length PrivatecaCertificateAuthority#max_issuer_path_length}
  */
  readonly maxIssuerPathLength?: number;
}

function privatecaCertificateAuthorityConfigX509ConfigCaOptionsToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference | PrivatecaCertificateAuthorityConfigX509ConfigCaOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
  }
}

export class PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // is_ca - computed: false, optional: false, required: true
  private _isCa?: boolean | cdktf.IResolvable; 
  public get isCa() {
    return this.getBooleanAttribute('is_ca') as any;
  }
  public set isCa(value: boolean | cdktf.IResolvable) {
    this._isCa = value;
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
export interface PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage {
  /**
  * The key may be used to sign certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#cert_sign PrivatecaCertificateAuthority#cert_sign}
  */
  readonly certSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#content_commitment PrivatecaCertificateAuthority#content_commitment}
  */
  readonly contentCommitment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used sign certificate revocation lists.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#crl_sign PrivatecaCertificateAuthority#crl_sign}
  */
  readonly crlSign?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher data.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#data_encipherment PrivatecaCertificateAuthority#data_encipherment}
  */
  readonly dataEncipherment?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to decipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#decipher_only PrivatecaCertificateAuthority#decipher_only}
  */
  readonly decipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used for digital signatures.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#digital_signature PrivatecaCertificateAuthority#digital_signature}
  */
  readonly digitalSignature?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher only.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#encipher_only PrivatecaCertificateAuthority#encipher_only}
  */
  readonly encipherOnly?: boolean | cdktf.IResolvable;
  /**
  * The key may be used in a key agreement protocol.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#key_agreement PrivatecaCertificateAuthority#key_agreement}
  */
  readonly keyAgreement?: boolean | cdktf.IResolvable;
  /**
  * The key may be used to encipher other keys.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#key_encipherment PrivatecaCertificateAuthority#key_encipherment}
  */
  readonly keyEncipherment?: boolean | cdktf.IResolvable;
}

function privatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage): any {
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

export class PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
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
export interface PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage {
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#client_auth PrivatecaCertificateAuthority#client_auth}
  */
  readonly clientAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#code_signing PrivatecaCertificateAuthority#code_signing}
  */
  readonly codeSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#email_protection PrivatecaCertificateAuthority#email_protection}
  */
  readonly emailProtection?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#ocsp_signing PrivatecaCertificateAuthority#ocsp_signing}
  */
  readonly ocspSigning?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#server_auth PrivatecaCertificateAuthority#server_auth}
  */
  readonly serverAuth?: boolean | cdktf.IResolvable;
  /**
  * Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#time_stamping PrivatecaCertificateAuthority#time_stamping}
  */
  readonly timeStamping?: boolean | cdktf.IResolvable;
}

function privatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage): any {
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

export class PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
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
export interface PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#object_id_path PrivatecaCertificateAuthority#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage {
  /**
  * base_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#base_key_usage PrivatecaCertificateAuthority#base_key_usage}
  */
  readonly baseKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage;
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#extended_key_usage PrivatecaCertificateAuthority#extended_key_usage}
  */
  readonly extendedKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage;
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#unknown_extended_key_usages PrivatecaCertificateAuthority#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
}

function privatecaCertificateAuthorityConfigX509ConfigKeyUsageToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference | PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base_key_usage: privatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct!.baseKeyUsage),
    extended_key_usage: privatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
  }
}

export class PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // base_key_usage - computed: false, optional: false, required: true
  private _baseKeyUsage?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage; 
  private __baseKeyUsageOutput = new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(this as any, "base_key_usage", true);
  public get baseKeyUsage() {
    return this.__baseKeyUsageOutput;
  }
  public putBaseKeyUsage(value: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage) {
    this._baseKeyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get baseKeyUsageInput() {
    return this._baseKeyUsage
  }

  // extended_key_usage - computed: false, optional: false, required: true
  private _extendedKeyUsage?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage; 
  private __extendedKeyUsageOutput = new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(this as any, "extended_key_usage", true);
  public get extendedKeyUsage() {
    return this.__extendedKeyUsageOutput;
  }
  public putExtendedKeyUsage(value: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage) {
    this._extendedKeyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedKeyUsageInput() {
    return this._extendedKeyUsage
  }

  // unknown_extended_key_usages - computed: false, optional: true, required: false
  private _unknownExtendedKeyUsages?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[] | undefined; 
  public get unknownExtendedKeyUsages() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('unknown_extended_key_usages') as any;
  }
  public set unknownExtendedKeyUsages(value: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[] | undefined) {
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
export interface PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds {
  /**
  * An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#object_id_path PrivatecaCertificateAuthority#object_id_path}
  */
  readonly objectIdPath: number[];
}

function privatecaCertificateAuthorityConfigX509ConfigPolicyIdsToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
  }
}

export interface PrivatecaCertificateAuthorityConfigX509Config {
  /**
  * Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the
"Authority Information Access" extension in the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#aia_ocsp_servers PrivatecaCertificateAuthority#aia_ocsp_servers}
  */
  readonly aiaOcspServers?: string[];
  /**
  * additional_extensions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#additional_extensions PrivatecaCertificateAuthority#additional_extensions}
  */
  readonly additionalExtensions?: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[];
  /**
  * ca_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#ca_options PrivatecaCertificateAuthority#ca_options}
  */
  readonly caOptions: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions;
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#key_usage PrivatecaCertificateAuthority#key_usage}
  */
  readonly keyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage;
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#policy_ids PrivatecaCertificateAuthority#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[];
}

function privatecaCertificateAuthorityConfigX509ConfigToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigOutputReference | PrivatecaCertificateAuthorityConfigX509Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: privatecaCertificateAuthorityConfigX509ConfigCaOptionsToTerraform(struct!.caOptions),
    key_usage: privatecaCertificateAuthorityConfigX509ConfigKeyUsageToTerraform(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigPolicyIdsToTerraform)(struct!.policyIds),
  }
}

export class PrivatecaCertificateAuthorityConfigX509ConfigOutputReference extends cdktf.ComplexObject {
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
  private _additionalExtensions?: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[] | undefined; 
  public get additionalExtensions() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('additional_extensions') as any;
  }
  public set additionalExtensions(value: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions[] | undefined) {
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
  private _caOptions?: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions; 
  private __caOptionsOutput = new PrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference(this as any, "ca_options", true);
  public get caOptions() {
    return this.__caOptionsOutput;
  }
  public putCaOptions(value: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions) {
    this._caOptions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caOptionsInput() {
    return this._caOptions
  }

  // key_usage - computed: false, optional: false, required: true
  private _keyUsage?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage; 
  private __keyUsageOutput = new PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference(this as any, "key_usage", true);
  public get keyUsage() {
    return this.__keyUsageOutput;
  }
  public putKeyUsage(value: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage) {
    this._keyUsage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyUsageInput() {
    return this._keyUsage
  }

  // policy_ids - computed: false, optional: true, required: false
  private _policyIds?: PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[] | undefined; 
  public get policyIds() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('policy_ids') as any;
  }
  public set policyIds(value: PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[] | undefined) {
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
export interface PrivatecaCertificateAuthorityConfigA {
  /**
  * subject_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#subject_config PrivatecaCertificateAuthority#subject_config}
  */
  readonly subjectConfig: PrivatecaCertificateAuthorityConfigSubjectConfig;
  /**
  * x509_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#x509_config PrivatecaCertificateAuthority#x509_config}
  */
  readonly x509Config: PrivatecaCertificateAuthorityConfigX509Config;
}

function privatecaCertificateAuthorityConfigAToTerraform(struct?: PrivatecaCertificateAuthorityConfigAOutputReference | PrivatecaCertificateAuthorityConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_config: privatecaCertificateAuthorityConfigSubjectConfigToTerraform(struct!.subjectConfig),
    x509_config: privatecaCertificateAuthorityConfigX509ConfigToTerraform(struct!.x509Config),
  }
}

export class PrivatecaCertificateAuthorityConfigAOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // subject_config - computed: false, optional: false, required: true
  private _subjectConfig?: PrivatecaCertificateAuthorityConfigSubjectConfig; 
  private __subjectConfigOutput = new PrivatecaCertificateAuthorityConfigSubjectConfigOutputReference(this as any, "subject_config", true);
  public get subjectConfig() {
    return this.__subjectConfigOutput;
  }
  public putSubjectConfig(value: PrivatecaCertificateAuthorityConfigSubjectConfig) {
    this._subjectConfig = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectConfigInput() {
    return this._subjectConfig
  }

  // x509_config - computed: false, optional: false, required: true
  private _x509Config?: PrivatecaCertificateAuthorityConfigX509Config; 
  private __x509ConfigOutput = new PrivatecaCertificateAuthorityConfigX509ConfigOutputReference(this as any, "x509_config", true);
  public get x509Config() {
    return this.__x509ConfigOutput;
  }
  public putX509Config(value: PrivatecaCertificateAuthorityConfigX509Config) {
    this._x509Config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get x509ConfigInput() {
    return this._x509Config
  }
}
export interface PrivatecaCertificateAuthorityKeySpec {
  /**
  * The algorithm to use for creating a managed Cloud KMS key for a for a simplified
experience. All managed keys will be have their ProtectionLevel as HSM. Possible values: ["SIGN_HASH_ALGORITHM_UNSPECIFIED", "RSA_PSS_2048_SHA256", "RSA_PSS_3072_SHA256", "RSA_PSS_4096_SHA256", "RSA_PKCS1_2048_SHA256", "RSA_PKCS1_3072_SHA256", "RSA_PKCS1_4096_SHA256", "EC_P256_SHA256", "EC_P384_SHA384"]
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#algorithm PrivatecaCertificateAuthority#algorithm}
  */
  readonly algorithm?: string;
  /**
  * The resource name for an existing Cloud KMS CryptoKeyVersion in the format
'projects/*\/locations/*\/keyRings/*\/cryptoKeys/*\/cryptoKeyVersions/*'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#cloud_kms_key_version PrivatecaCertificateAuthority#cloud_kms_key_version}
  */
  readonly cloudKmsKeyVersion?: string;
}

function privatecaCertificateAuthorityKeySpecToTerraform(struct?: PrivatecaCertificateAuthorityKeySpecOutputReference | PrivatecaCertificateAuthorityKeySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    cloud_kms_key_version: cdktf.stringToTerraform(struct!.cloudKmsKeyVersion),
  }
}

export class PrivatecaCertificateAuthorityKeySpecOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string | undefined; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string | undefined) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm
  }

  // cloud_kms_key_version - computed: false, optional: true, required: false
  private _cloudKmsKeyVersion?: string | undefined; 
  public get cloudKmsKeyVersion() {
    return this.getStringAttribute('cloud_kms_key_version');
  }
  public set cloudKmsKeyVersion(value: string | undefined) {
    this._cloudKmsKeyVersion = value;
  }
  public resetCloudKmsKeyVersion() {
    this._cloudKmsKeyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudKmsKeyVersionInput() {
    return this._cloudKmsKeyVersion
  }
}
export interface PrivatecaCertificateAuthorityTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#create PrivatecaCertificateAuthority#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#delete PrivatecaCertificateAuthority#delete}
  */
  readonly delete?: string;
}

function privatecaCertificateAuthorityTimeoutsToTerraform(struct?: PrivatecaCertificateAuthorityTimeoutsOutputReference | PrivatecaCertificateAuthorityTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class PrivatecaCertificateAuthorityTimeoutsOutputReference extends cdktf.ComplexObject {
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html google_privateca_certificate_authority}
*/
export class PrivatecaCertificateAuthority extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "google_privateca_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html google_privateca_certificate_authority} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivatecaCertificateAuthorityConfig
  */
  public constructor(scope: Construct, id: string, config: PrivatecaCertificateAuthorityConfig) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_certificate_authority',
      terraformGeneratorMetadata: {
        providerName: 'google'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._certificateAuthorityId = config.certificateAuthorityId;
    this._gcsBucket = config.gcsBucket;
    this._ignoreActiveCertificatesOnDeletion = config.ignoreActiveCertificatesOnDeletion;
    this._labels = config.labels;
    this._lifetime = config.lifetime;
    this._location = config.location;
    this._pool = config.pool;
    this._project = config.project;
    this._type = config.type;
    this._config = config.config;
    this._keySpec = config.keySpec;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_urls - computed: true, optional: false, required: false
  public accessUrls(index: string) {
    return new PrivatecaCertificateAuthorityAccessUrls(this, 'access_urls', index);
  }

  // certificate_authority_id - computed: false, optional: false, required: true
  private _certificateAuthorityId?: string; 
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }
  public set certificateAuthorityId(value: string) {
    this._certificateAuthorityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityIdInput() {
    return this._certificateAuthorityId
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // gcs_bucket - computed: false, optional: true, required: false
  private _gcsBucket?: string | undefined; 
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }
  public set gcsBucket(value: string | undefined) {
    this._gcsBucket = value;
  }
  public resetGcsBucket() {
    this._gcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketInput() {
    return this._gcsBucket
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_active_certificates_on_deletion - computed: false, optional: true, required: false
  private _ignoreActiveCertificatesOnDeletion?: boolean | cdktf.IResolvable | undefined; 
  public get ignoreActiveCertificatesOnDeletion() {
    return this.getBooleanAttribute('ignore_active_certificates_on_deletion') as any;
  }
  public set ignoreActiveCertificatesOnDeletion(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreActiveCertificatesOnDeletion = value;
  }
  public resetIgnoreActiveCertificatesOnDeletion() {
    this._ignoreActiveCertificatesOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreActiveCertificatesOnDeletionInput() {
    return this._ignoreActiveCertificatesOnDeletion
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pem_ca_certificates - computed: true, optional: false, required: false
  public get pemCaCertificates() {
    return this.getListAttribute('pem_ca_certificates');
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // config - computed: false, optional: false, required: true
  private _config?: PrivatecaCertificateAuthorityConfigA; 
  private __configOutput = new PrivatecaCertificateAuthorityConfigAOutputReference(this as any, "config", true);
  public get config() {
    return this.__configOutput;
  }
  public putConfig(value: PrivatecaCertificateAuthorityConfigA) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // key_spec - computed: false, optional: false, required: true
  private _keySpec?: PrivatecaCertificateAuthorityKeySpec; 
  private __keySpecOutput = new PrivatecaCertificateAuthorityKeySpecOutputReference(this as any, "key_spec", true);
  public get keySpec() {
    return this.__keySpecOutput;
  }
  public putKeySpec(value: PrivatecaCertificateAuthorityKeySpec) {
    this._keySpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivatecaCertificateAuthorityTimeouts | undefined; 
  private __timeoutsOutput = new PrivatecaCertificateAuthorityTimeoutsOutputReference(this as any, "timeouts", true);
  public get timeouts() {
    return this.__timeoutsOutput;
  }
  public putTimeouts(value: PrivatecaCertificateAuthorityTimeouts | undefined) {
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
      certificate_authority_id: cdktf.stringToTerraform(this._certificateAuthorityId),
      gcs_bucket: cdktf.stringToTerraform(this._gcsBucket),
      ignore_active_certificates_on_deletion: cdktf.booleanToTerraform(this._ignoreActiveCertificatesOnDeletion),
      labels: cdktf.hashMapper(cdktf.anyToTerraform)(this._labels),
      lifetime: cdktf.stringToTerraform(this._lifetime),
      location: cdktf.stringToTerraform(this._location),
      pool: cdktf.stringToTerraform(this._pool),
      project: cdktf.stringToTerraform(this._project),
      type: cdktf.stringToTerraform(this._type),
      config: privatecaCertificateAuthorityConfigAToTerraform(this._config),
      key_spec: privatecaCertificateAuthorityKeySpecToTerraform(this._keySpec),
      timeouts: privatecaCertificateAuthorityTimeoutsToTerraform(this._timeouts),
    };
  }
}
