// https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGooglePrivatecaCertificateAuthorityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The user provided Resource ID for this Certificate Authority.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#certificate_authority_id DataGooglePrivatecaCertificateAuthority#certificate_authority_id}
  */
  readonly certificateAuthorityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#id DataGooglePrivatecaCertificateAuthority#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Location of the CertificateAuthority. A full list of valid locations can be found by
running 'gcloud privateca locations list'.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#location DataGooglePrivatecaCertificateAuthority#location}
  */
  readonly location?: string;
  /**
  * The name of the CaPool this Certificate Authority belongs to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#pool DataGooglePrivatecaCertificateAuthority#pool}
  */
  readonly pool?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority#project DataGooglePrivatecaCertificateAuthority#project}
  */
  readonly project?: string;
}
export interface DataGooglePrivatecaCertificateAuthorityAccessUrls {
}

export function dataGooglePrivatecaCertificateAuthorityAccessUrlsToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityAccessUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityAccessUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityAccessUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ca_certificate_access_url - computed: true, optional: false, required: false
  public get caCertificateAccessUrl() {
    return this.getStringAttribute('ca_certificate_access_url');
  }

  // crl_access_urls - computed: true, optional: false, required: false
  public get crlAccessUrls() {
    return this.getListAttribute('crl_access_urls');
  }
}

export class DataGooglePrivatecaCertificateAuthorityAccessUrlsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityAccessUrlsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject {
}

export function dataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

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

export class DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName {
}

export function dataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
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

export class DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig {
}

export function dataGooglePrivatecaCertificateAuthorityConfigSubjectConfigToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigSubjectConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subject - computed: true, optional: false, required: false
  private _subject = new DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectList(this, "subject", false);
  public get subject() {
    return this._subject;
  }

  // subject_alt_name - computed: true, optional: false, required: false
  private _subjectAltName = new DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigSubjectAltNameList(this, "subject_alt_name", false);
  public get subjectAltName() {
    return this._subjectAltName;
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectId | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_id_path - computed: true, optional: false, required: false
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // critical - computed: true, optional: false, required: false
  public get critical() {
    return this.getBooleanAttribute('critical');
  }

  // object_id - computed: true, optional: false, required: false
  private _objectId = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsObjectIdList(this, "object_id", false);
  public get objectId() {
    return this._objectId;
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_ca - computed: true, optional: false, required: false
  public get isCa() {
    return this.getBooleanAttribute('is_ca');
  }

  // max_issuer_path_length - computed: true, optional: false, required: false
  public get maxIssuerPathLength() {
    return this.getNumberAttribute('max_issuer_path_length');
  }

  // non_ca - computed: true, optional: false, required: false
  public get nonCa() {
    return this.getBooleanAttribute('non_ca');
  }

  // zero_max_issuer_path_length - computed: true, optional: false, required: false
  public get zeroMaxIssuerPathLength() {
    return this.getBooleanAttribute('zero_max_issuer_path_length');
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_sign - computed: true, optional: false, required: false
  public get certSign() {
    return this.getBooleanAttribute('cert_sign');
  }

  // content_commitment - computed: true, optional: false, required: false
  public get contentCommitment() {
    return this.getBooleanAttribute('content_commitment');
  }

  // crl_sign - computed: true, optional: false, required: false
  public get crlSign() {
    return this.getBooleanAttribute('crl_sign');
  }

  // data_encipherment - computed: true, optional: false, required: false
  public get dataEncipherment() {
    return this.getBooleanAttribute('data_encipherment');
  }

  // decipher_only - computed: true, optional: false, required: false
  public get decipherOnly() {
    return this.getBooleanAttribute('decipher_only');
  }

  // digital_signature - computed: true, optional: false, required: false
  public get digitalSignature() {
    return this.getBooleanAttribute('digital_signature');
  }

  // encipher_only - computed: true, optional: false, required: false
  public get encipherOnly() {
    return this.getBooleanAttribute('encipher_only');
  }

  // key_agreement - computed: true, optional: false, required: false
  public get keyAgreement() {
    return this.getBooleanAttribute('key_agreement');
  }

  // key_encipherment - computed: true, optional: false, required: false
  public get keyEncipherment() {
    return this.getBooleanAttribute('key_encipherment');
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // client_auth - computed: true, optional: false, required: false
  public get clientAuth() {
    return this.getBooleanAttribute('client_auth');
  }

  // code_signing - computed: true, optional: false, required: false
  public get codeSigning() {
    return this.getBooleanAttribute('code_signing');
  }

  // email_protection - computed: true, optional: false, required: false
  public get emailProtection() {
    return this.getBooleanAttribute('email_protection');
  }

  // ocsp_signing - computed: true, optional: false, required: false
  public get ocspSigning() {
    return this.getBooleanAttribute('ocsp_signing');
  }

  // server_auth - computed: true, optional: false, required: false
  public get serverAuth() {
    return this.getBooleanAttribute('server_auth');
  }

  // time_stamping - computed: true, optional: false, required: false
  public get timeStamping() {
    return this.getBooleanAttribute('time_stamping');
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_id_path - computed: true, optional: false, required: false
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base_key_usage - computed: true, optional: false, required: false
  private _baseKeyUsage = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageBaseKeyUsageList(this, "base_key_usage", false);
  public get baseKeyUsage() {
    return this._baseKeyUsage;
  }

  // extended_key_usage - computed: true, optional: false, required: false
  private _extendedKeyUsage = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageExtendedKeyUsageList(this, "extended_key_usage", false);
  public get extendedKeyUsage() {
    return this._extendedKeyUsage;
  }

  // unknown_extended_key_usages - computed: true, optional: false, required: false
  private _unknownExtendedKeyUsages = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageUnknownExtendedKeyUsagesList(this, "unknown_extended_key_usages", false);
  public get unknownExtendedKeyUsages() {
    return this._unknownExtendedKeyUsages;
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // object_id_path - computed: true, optional: false, required: false
  public get objectIdPath() {
    return this.getNumberListAttribute('object_id_path');
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigX509Config {
}

export function dataGooglePrivatecaCertificateAuthorityConfigX509ConfigToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigX509Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigX509Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigX509Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_extensions - computed: true, optional: false, required: false
  private _additionalExtensions = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigAdditionalExtensionsList(this, "additional_extensions", false);
  public get additionalExtensions() {
    return this._additionalExtensions;
  }

  // aia_ocsp_servers - computed: true, optional: false, required: false
  public get aiaOcspServers() {
    return this.getListAttribute('aia_ocsp_servers');
  }

  // ca_options - computed: true, optional: false, required: false
  private _caOptions = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigCaOptionsList(this, "ca_options", false);
  public get caOptions() {
    return this._caOptions;
  }

  // key_usage - computed: true, optional: false, required: false
  private _keyUsage = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigKeyUsageList(this, "key_usage", false);
  public get keyUsage() {
    return this._keyUsage;
  }

  // policy_ids - computed: true, optional: false, required: false
  private _policyIds = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigPolicyIdsList(this, "policy_ids", false);
  public get policyIds() {
    return this._policyIds;
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityConfigA {
}

export function dataGooglePrivatecaCertificateAuthorityConfigAToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityConfigA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityConfigA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityConfigA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subject_config - computed: true, optional: false, required: false
  private _subjectConfig = new DataGooglePrivatecaCertificateAuthorityConfigSubjectConfigList(this, "subject_config", false);
  public get subjectConfig() {
    return this._subjectConfig;
  }

  // x509_config - computed: true, optional: false, required: false
  private _x509Config = new DataGooglePrivatecaCertificateAuthorityConfigX509ConfigList(this, "x509_config", false);
  public get x509Config() {
    return this._x509Config;
  }
}

export class DataGooglePrivatecaCertificateAuthorityConfigAList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityConfigAOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityConfigAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthorityKeySpec {
}

export function dataGooglePrivatecaCertificateAuthorityKeySpecToTerraform(struct?: DataGooglePrivatecaCertificateAuthorityKeySpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthorityKeySpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthorityKeySpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // algorithm - computed: true, optional: false, required: false
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }

  // cloud_kms_key_version - computed: true, optional: false, required: false
  public get cloudKmsKeyVersion() {
    return this.getStringAttribute('cloud_kms_key_version');
  }
}

export class DataGooglePrivatecaCertificateAuthorityKeySpecList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference {
    return new DataGooglePrivatecaCertificateAuthorityKeySpecOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain {
}

export function dataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainToTerraform(struct?: DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChain | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // pem_certificates - computed: true, optional: false, required: false
  public get pemCertificates() {
    return this.getListAttribute('pem_certificates');
  }
}

export class DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference {
    return new DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGooglePrivatecaCertificateAuthoritySubordinateConfig {
}

export function dataGooglePrivatecaCertificateAuthoritySubordinateConfigToTerraform(struct?: DataGooglePrivatecaCertificateAuthoritySubordinateConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataGooglePrivatecaCertificateAuthoritySubordinateConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGooglePrivatecaCertificateAuthoritySubordinateConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // certificate_authority - computed: true, optional: false, required: false
  public get certificateAuthority() {
    return this.getStringAttribute('certificate_authority');
  }

  // pem_issuer_chain - computed: true, optional: false, required: false
  private _pemIssuerChain = new DataGooglePrivatecaCertificateAuthoritySubordinateConfigPemIssuerChainList(this, "pem_issuer_chain", false);
  public get pemIssuerChain() {
    return this._pemIssuerChain;
  }
}

export class DataGooglePrivatecaCertificateAuthoritySubordinateConfigList extends cdktf.ComplexList {

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
  public get(index: number): DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference {
    return new DataGooglePrivatecaCertificateAuthoritySubordinateConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority google_privateca_certificate_authority}
*/
export class DataGooglePrivatecaCertificateAuthority extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_privateca_certificate_authority";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/d/privateca_certificate_authority google_privateca_certificate_authority} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGooglePrivatecaCertificateAuthorityConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataGooglePrivatecaCertificateAuthorityConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'google_privateca_certificate_authority',
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
    this._certificateAuthorityId = config.certificateAuthorityId;
    this._id = config.id;
    this._location = config.location;
    this._pool = config.pool;
    this._project = config.project;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_urls - computed: true, optional: false, required: false
  private _accessUrls = new DataGooglePrivatecaCertificateAuthorityAccessUrlsList(this, "access_urls", false);
  public get accessUrls() {
    return this._accessUrls;
  }

  // certificate_authority_id - computed: false, optional: true, required: false
  private _certificateAuthorityId?: string; 
  public get certificateAuthorityId() {
    return this.getStringAttribute('certificate_authority_id');
  }
  public set certificateAuthorityId(value: string) {
    this._certificateAuthorityId = value;
  }
  public resetCertificateAuthorityId() {
    this._certificateAuthorityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateAuthorityIdInput() {
    return this._certificateAuthorityId;
  }

  // config - computed: true, optional: false, required: false
  private _config = new DataGooglePrivatecaCertificateAuthorityConfigAList(this, "config", false);
  public get config() {
    return this._config;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }

  // desired_state - computed: true, optional: false, required: false
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
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

  // ignore_active_certificates_on_deletion - computed: true, optional: false, required: false
  public get ignoreActiveCertificatesOnDeletion() {
    return this.getBooleanAttribute('ignore_active_certificates_on_deletion');
  }

  // key_spec - computed: true, optional: false, required: false
  private _keySpec = new DataGooglePrivatecaCertificateAuthorityKeySpecList(this, "key_spec", false);
  public get keySpec() {
    return this._keySpec;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // lifetime - computed: true, optional: false, required: false
  public get lifetime() {
    return this.getStringAttribute('lifetime');
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pem_ca_certificate - computed: true, optional: false, required: false
  public get pemCaCertificate() {
    return this.getStringAttribute('pem_ca_certificate');
  }

  // pem_ca_certificates - computed: true, optional: false, required: false
  public get pemCaCertificates() {
    return this.getListAttribute('pem_ca_certificates');
  }

  // pem_csr - computed: true, optional: false, required: false
  public get pemCsr() {
    return this.getStringAttribute('pem_csr');
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // project - computed: false, optional: true, required: false
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subordinate_config - computed: true, optional: false, required: false
  private _subordinateConfig = new DataGooglePrivatecaCertificateAuthoritySubordinateConfigList(this, "subordinate_config", false);
  public get subordinateConfig() {
    return this._subordinateConfig;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certificate_authority_id: cdktf.stringToTerraform(this._certificateAuthorityId),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      pool: cdktf.stringToTerraform(this._pool),
      project: cdktf.stringToTerraform(this._project),
    };
  }
}
