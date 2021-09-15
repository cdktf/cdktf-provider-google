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
  readonly config: PrivatecaCertificateAuthorityConfigA[];
  /**
  * key_spec block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#key_spec PrivatecaCertificateAuthority#key_spec}
  */
  readonly keySpec: PrivatecaCertificateAuthorityKeySpec[];
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

function privatecaCertificateAuthorityConfigSubjectConfigSubjectToTerraform(struct?: PrivatecaCertificateAuthorityConfigSubjectConfigSubject): any {
  if (!cdktf.canInspect(struct)) { return struct; }
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

function privatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameToTerraform(struct?: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    dns_names: cdktf.listMapper(cdktf.stringToTerraform)(struct!.dnsNames),
    email_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.emailAddresses),
    ip_addresses: cdktf.listMapper(cdktf.stringToTerraform)(struct!.ipAddresses),
    uris: cdktf.listMapper(cdktf.stringToTerraform)(struct!.uris),
  }
}

export interface PrivatecaCertificateAuthorityConfigSubjectConfig {
  /**
  * subject block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#subject PrivatecaCertificateAuthority#subject}
  */
  readonly subject: PrivatecaCertificateAuthorityConfigSubjectConfigSubject[];
  /**
  * subject_alt_name block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#subject_alt_name PrivatecaCertificateAuthority#subject_alt_name}
  */
  readonly subjectAltName?: PrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName[];
}

function privatecaCertificateAuthorityConfigSubjectConfigToTerraform(struct?: PrivatecaCertificateAuthorityConfigSubjectConfig): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subject: cdktf.listMapper(privatecaCertificateAuthorityConfigSubjectConfigSubjectToTerraform)(struct!.subject),
    subject_alt_name: cdktf.listMapper(privatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameToTerraform)(struct!.subjectAltName),
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

function privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    object_id_path: cdktf.listMapper(cdktf.numberToTerraform)(struct!.objectIdPath),
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
  readonly objectId: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId[];
}

function privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    critical: cdktf.booleanToTerraform(struct!.critical),
    value: cdktf.stringToTerraform(struct!.value),
    object_id: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdToTerraform)(struct!.objectId),
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

function privatecaCertificateAuthorityConfigX509ConfigCaOptionsToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    is_ca: cdktf.booleanToTerraform(struct!.isCa),
    max_issuer_path_length: cdktf.numberToTerraform(struct!.maxIssuerPathLength),
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

function privatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage): any {
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

function privatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage): any {
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
  readonly baseKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage[];
  /**
  * extended_key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#extended_key_usage PrivatecaCertificateAuthority#extended_key_usage}
  */
  readonly extendedKeyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage[];
  /**
  * unknown_extended_key_usages block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#unknown_extended_key_usages PrivatecaCertificateAuthority#unknown_extended_key_usages}
  */
  readonly unknownExtendedKeyUsages?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages[];
}

function privatecaCertificateAuthorityConfigX509ConfigKeyUsageToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    base_key_usage: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageToTerraform)(struct!.baseKeyUsage),
    extended_key_usage: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform)(struct!.extendedKeyUsage),
    unknown_extended_key_usages: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform)(struct!.unknownExtendedKeyUsages),
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
  readonly caOptions: PrivatecaCertificateAuthorityConfigX509ConfigCaOptions[];
  /**
  * key_usage block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#key_usage PrivatecaCertificateAuthority#key_usage}
  */
  readonly keyUsage: PrivatecaCertificateAuthorityConfigX509ConfigKeyUsage[];
  /**
  * policy_ids block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#policy_ids PrivatecaCertificateAuthority#policy_ids}
  */
  readonly policyIds?: PrivatecaCertificateAuthorityConfigX509ConfigPolicyIds[];
}

function privatecaCertificateAuthorityConfigX509ConfigToTerraform(struct?: PrivatecaCertificateAuthorityConfigX509Config): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    aia_ocsp_servers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.aiaOcspServers),
    additional_extensions: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsToTerraform)(struct!.additionalExtensions),
    ca_options: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigCaOptionsToTerraform)(struct!.caOptions),
    key_usage: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigKeyUsageToTerraform)(struct!.keyUsage),
    policy_ids: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigPolicyIdsToTerraform)(struct!.policyIds),
  }
}

export interface PrivatecaCertificateAuthorityConfigA {
  /**
  * subject_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#subject_config PrivatecaCertificateAuthority#subject_config}
  */
  readonly subjectConfig: PrivatecaCertificateAuthorityConfigSubjectConfig[];
  /**
  * x509_config block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_certificate_authority.html#x509_config PrivatecaCertificateAuthority#x509_config}
  */
  readonly x509Config: PrivatecaCertificateAuthorityConfigX509Config[];
}

function privatecaCertificateAuthorityConfigAToTerraform(struct?: PrivatecaCertificateAuthorityConfigA): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    subject_config: cdktf.listMapper(privatecaCertificateAuthorityConfigSubjectConfigToTerraform)(struct!.subjectConfig),
    x509_config: cdktf.listMapper(privatecaCertificateAuthorityConfigX509ConfigToTerraform)(struct!.x509Config),
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

function privatecaCertificateAuthorityKeySpecToTerraform(struct?: PrivatecaCertificateAuthorityKeySpec): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    cloud_kms_key_version: cdktf.stringToTerraform(struct!.cloudKmsKeyVersion),
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

function privatecaCertificateAuthorityTimeoutsToTerraform(struct?: PrivatecaCertificateAuthorityTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
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
  private _certificateAuthorityId: string;
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
  private _gcsBucket?: string;
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }
  public set gcsBucket(value: string ) {
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
  private _ignoreActiveCertificatesOnDeletion?: boolean | cdktf.IResolvable;
  public get ignoreActiveCertificatesOnDeletion() {
    return this.getBooleanAttribute('ignore_active_certificates_on_deletion');
  }
  public set ignoreActiveCertificatesOnDeletion(value: boolean | cdktf.IResolvable ) {
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

  // lifetime - computed: false, optional: true, required: false
  private _lifetime?: string;
  public get lifetime() {
    return this.getStringAttribute('lifetime');
  }
  public set lifetime(value: string ) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pem_ca_certificates - computed: true, optional: false, required: false
  public get pemCaCertificates() {
    return this.getListAttribute('pem_ca_certificates');
  }

  // pool - computed: false, optional: false, required: true
  private _pool: string;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // type - computed: false, optional: true, required: false
  private _type?: string;
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string ) {
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
  private _config: PrivatecaCertificateAuthorityConfigA[];
  public get config() {
    return this.interpolationForAttribute('config') as any;
  }
  public set config(value: PrivatecaCertificateAuthorityConfigA[]) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config
  }

  // key_spec - computed: false, optional: false, required: true
  private _keySpec: PrivatecaCertificateAuthorityKeySpec[];
  public get keySpec() {
    return this.interpolationForAttribute('key_spec') as any;
  }
  public set keySpec(value: PrivatecaCertificateAuthorityKeySpec[]) {
    this._keySpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keySpecInput() {
    return this._keySpec
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: PrivatecaCertificateAuthorityTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: PrivatecaCertificateAuthorityTimeouts ) {
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
      config: cdktf.listMapper(privatecaCertificateAuthorityConfigAToTerraform)(this._config),
      key_spec: cdktf.listMapper(privatecaCertificateAuthorityKeySpecToTerraform)(this._keySpec),
      timeouts: privatecaCertificateAuthorityTimeoutsToTerraform(this._timeouts),
    };
  }
}
