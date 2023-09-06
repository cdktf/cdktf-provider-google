/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeKeystoresAliasesSelfSignedCertConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias for the key/certificate pair. Values must match the regular expression [\w\s-.]{1,255}.
This must be provided for all formats except selfsignedcert; self-signed certs may specify the alias in either
this parameter or the JSON body.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#alias ApigeeKeystoresAliasesSelfSignedCert#alias}
  */
  readonly alias: string;
  /**
  * Validity duration of certificate, in days. Accepts positive non-zero value. Defaults to 365.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#cert_validity_in_days ApigeeKeystoresAliasesSelfSignedCert#cert_validity_in_days}
  */
  readonly certValidityInDays?: number;
  /**
  * The Apigee environment name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#environment ApigeeKeystoresAliasesSelfSignedCert#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#id ApigeeKeystoresAliasesSelfSignedCert#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Key size. Default and maximum value is 2048 bits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#key_size ApigeeKeystoresAliasesSelfSignedCert#key_size}
  */
  readonly keySize?: string;
  /**
  * The Apigee keystore name associated in an Apigee environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#keystore ApigeeKeystoresAliasesSelfSignedCert#keystore}
  */
  readonly keystore: string;
  /**
  * The Apigee Organization name associated with the Apigee environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_id ApigeeKeystoresAliasesSelfSignedCert#org_id}
  */
  readonly orgId: string;
  /**
  * Signature algorithm to generate private key. Valid values are SHA512withRSA, SHA384withRSA, and SHA256withRSA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#sig_alg ApigeeKeystoresAliasesSelfSignedCert#sig_alg}
  */
  readonly sigAlg: string;
  /**
  * subject block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject ApigeeKeystoresAliasesSelfSignedCert#subject}
  */
  readonly subject: ApigeeKeystoresAliasesSelfSignedCertSubject;
  /**
  * subject_alternative_dns_names block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_dns_names ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_dns_names}
  */
  readonly subjectAlternativeDnsNames?: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#timeouts ApigeeKeystoresAliasesSelfSignedCert#timeouts}
  */
  readonly timeouts?: ApigeeKeystoresAliasesSelfSignedCertTimeouts;
}
export interface ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo {
}

export function apigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoToTerraform(struct?: ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // basic_constraints - computed: true, optional: false, required: false
  public get basicConstraints() {
    return this.getStringAttribute('basic_constraints');
  }

  // expiry_date - computed: true, optional: false, required: false
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }

  // is_valid - computed: true, optional: false, required: false
  public get isValid() {
    return this.getStringAttribute('is_valid');
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sig_alg_name - computed: true, optional: false, required: false
  public get sigAlgName() {
    return this.getStringAttribute('sig_alg_name');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_alternative_names - computed: true, optional: false, required: false
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }

  // valid_from - computed: true, optional: false, required: false
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList extends cdktf.ComplexList {

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
  public get(index: number): ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference {
    return new ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeKeystoresAliasesSelfSignedCertCertsInfo {
}

export function apigeeKeystoresAliasesSelfSignedCertCertsInfoToTerraform(struct?: ApigeeKeystoresAliasesSelfSignedCertCertsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}

export class ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigeeKeystoresAliasesSelfSignedCertCertsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesSelfSignedCertCertsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cert_info - computed: true, optional: false, required: false
  private _certInfo = new ApigeeKeystoresAliasesSelfSignedCertCertsInfoCertInfoList(this, "cert_info", false);
  public get certInfo() {
    return this._certInfo;
  }
}

export class ApigeeKeystoresAliasesSelfSignedCertCertsInfoList extends cdktf.ComplexList {

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
  public get(index: number): ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference {
    return new ApigeeKeystoresAliasesSelfSignedCertCertsInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeKeystoresAliasesSelfSignedCertSubject {
  /**
  * Common name of the organization. Maximum length is 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#common_name ApigeeKeystoresAliasesSelfSignedCert#common_name}
  */
  readonly commonName?: string;
  /**
  * Two-letter country code. Example, IN for India, US for United States of America.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#country_code ApigeeKeystoresAliasesSelfSignedCert#country_code}
  */
  readonly countryCode?: string;
  /**
  * Email address. Max 255 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#email ApigeeKeystoresAliasesSelfSignedCert#email}
  */
  readonly email?: string;
  /**
  * City or town name. Maximum length is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#locality ApigeeKeystoresAliasesSelfSignedCert#locality}
  */
  readonly locality?: string;
  /**
  * Organization name. Maximum length is 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org ApigeeKeystoresAliasesSelfSignedCert#org}
  */
  readonly org?: string;
  /**
  * Organization team name. Maximum length is 64 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#org_unit ApigeeKeystoresAliasesSelfSignedCert#org_unit}
  */
  readonly orgUnit?: string;
  /**
  * State or district name. Maximum length is 128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#state ApigeeKeystoresAliasesSelfSignedCert#state}
  */
  readonly state?: string;
}

export function apigeeKeystoresAliasesSelfSignedCertSubjectToTerraform(struct?: ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference | ApigeeKeystoresAliasesSelfSignedCertSubject): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_name: cdktf.stringToTerraform(struct!.commonName),
    country_code: cdktf.stringToTerraform(struct!.countryCode),
    email: cdktf.stringToTerraform(struct!.email),
    locality: cdktf.stringToTerraform(struct!.locality),
    org: cdktf.stringToTerraform(struct!.org),
    org_unit: cdktf.stringToTerraform(struct!.orgUnit),
    state: cdktf.stringToTerraform(struct!.state),
  }
}

export class ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeKeystoresAliasesSelfSignedCertSubject | undefined {
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
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._locality !== undefined) {
      hasAnyValues = true;
      internalValueResult.locality = this._locality;
    }
    if (this._org !== undefined) {
      hasAnyValues = true;
      internalValueResult.org = this._org;
    }
    if (this._orgUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgUnit = this._orgUnit;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesSelfSignedCertSubject | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._commonName = undefined;
      this._countryCode = undefined;
      this._email = undefined;
      this._locality = undefined;
      this._org = undefined;
      this._orgUnit = undefined;
      this._state = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._commonName = value.commonName;
      this._countryCode = value.countryCode;
      this._email = value.email;
      this._locality = value.locality;
      this._org = value.org;
      this._orgUnit = value.orgUnit;
      this._state = value.state;
    }
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName?: string; 
  public get commonName() {
    return this.getStringAttribute('common_name');
  }
  public set commonName(value: string) {
    this._commonName = value;
  }
  public resetCommonName() {
    this._commonName = undefined;
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

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // org_unit - computed: false, optional: true, required: false
  private _orgUnit?: string; 
  public get orgUnit() {
    return this.getStringAttribute('org_unit');
  }
  public set orgUnit(value: string) {
    this._orgUnit = value;
  }
  public resetOrgUnit() {
    this._orgUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitInput() {
    return this._orgUnit;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }
}
export interface ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames {
  /**
  * Subject Alternative Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#subject_alternative_name ApigeeKeystoresAliasesSelfSignedCert#subject_alternative_name}
  */
  readonly subjectAlternativeName?: string;
}

export function apigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesToTerraform(struct?: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference | ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subject_alternative_name: cdktf.stringToTerraform(struct!.subjectAlternativeName),
  }
}

export class ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subjectAlternativeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeName = this._subjectAlternativeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subjectAlternativeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subjectAlternativeName = value.subjectAlternativeName;
    }
  }

  // subject_alternative_name - computed: false, optional: true, required: false
  private _subjectAlternativeName?: string; 
  public get subjectAlternativeName() {
    return this.getStringAttribute('subject_alternative_name');
  }
  public set subjectAlternativeName(value: string) {
    this._subjectAlternativeName = value;
  }
  public resetSubjectAlternativeName() {
    this._subjectAlternativeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNameInput() {
    return this._subjectAlternativeName;
  }
}
export interface ApigeeKeystoresAliasesSelfSignedCertTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#create ApigeeKeystoresAliasesSelfSignedCert#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert#delete ApigeeKeystoresAliasesSelfSignedCert#delete}
  */
  readonly delete?: string;
}

export function apigeeKeystoresAliasesSelfSignedCertTimeoutsToTerraform(struct?: ApigeeKeystoresAliasesSelfSignedCertTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}

export class ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeKeystoresAliasesSelfSignedCertTimeouts | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesSelfSignedCertTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert google_apigee_keystores_aliases_self_signed_cert}
*/
export class ApigeeKeystoresAliasesSelfSignedCert extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_keystores_aliases_self_signed_cert";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.81.0/docs/resources/apigee_keystores_aliases_self_signed_cert google_apigee_keystores_aliases_self_signed_cert} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeKeystoresAliasesSelfSignedCertConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeKeystoresAliasesSelfSignedCertConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_keystores_aliases_self_signed_cert',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.81.0',
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
    this._alias = config.alias;
    this._certValidityInDays = config.certValidityInDays;
    this._environment = config.environment;
    this._id = config.id;
    this._keySize = config.keySize;
    this._keystore = config.keystore;
    this._orgId = config.orgId;
    this._sigAlg = config.sigAlg;
    this._subject.internalValue = config.subject;
    this._subjectAlternativeDnsNames.internalValue = config.subjectAlternativeDnsNames;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias - computed: false, optional: false, required: true
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // cert_validity_in_days - computed: false, optional: true, required: false
  private _certValidityInDays?: number; 
  public get certValidityInDays() {
    return this.getNumberAttribute('cert_validity_in_days');
  }
  public set certValidityInDays(value: number) {
    this._certValidityInDays = value;
  }
  public resetCertValidityInDays() {
    this._certValidityInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certValidityInDaysInput() {
    return this._certValidityInDays;
  }

  // certs_info - computed: true, optional: false, required: false
  private _certsInfo = new ApigeeKeystoresAliasesSelfSignedCertCertsInfoList(this, "certs_info", false);
  public get certsInfo() {
    return this._certsInfo;
  }

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
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

  // key_size - computed: false, optional: true, required: false
  private _keySize?: string; 
  public get keySize() {
    return this.getStringAttribute('key_size');
  }
  public set keySize(value: string) {
    this._keySize = value;
  }
  public resetKeySize() {
    this._keySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keySizeInput() {
    return this._keySize;
  }

  // keystore - computed: false, optional: false, required: true
  private _keystore?: string; 
  public get keystore() {
    return this.getStringAttribute('keystore');
  }
  public set keystore(value: string) {
    this._keystore = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoreInput() {
    return this._keystore;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // sig_alg - computed: false, optional: false, required: true
  private _sigAlg?: string; 
  public get sigAlg() {
    return this.getStringAttribute('sig_alg');
  }
  public set sigAlg(value: string) {
    this._sigAlg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sigAlgInput() {
    return this._sigAlg;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // subject - computed: false, optional: false, required: true
  private _subject = new ApigeeKeystoresAliasesSelfSignedCertSubjectOutputReference(this, "subject");
  public get subject() {
    return this._subject;
  }
  public putSubject(value: ApigeeKeystoresAliasesSelfSignedCertSubject) {
    this._subject.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject.internalValue;
  }

  // subject_alternative_dns_names - computed: false, optional: true, required: false
  private _subjectAlternativeDnsNames = new ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesOutputReference(this, "subject_alternative_dns_names");
  public get subjectAlternativeDnsNames() {
    return this._subjectAlternativeDnsNames;
  }
  public putSubjectAlternativeDnsNames(value: ApigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNames) {
    this._subjectAlternativeDnsNames.internalValue = value;
  }
  public resetSubjectAlternativeDnsNames() {
    this._subjectAlternativeDnsNames.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeDnsNamesInput() {
    return this._subjectAlternativeDnsNames.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeKeystoresAliasesSelfSignedCertTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeKeystoresAliasesSelfSignedCertTimeouts) {
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
      alias: cdktf.stringToTerraform(this._alias),
      cert_validity_in_days: cdktf.numberToTerraform(this._certValidityInDays),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      key_size: cdktf.stringToTerraform(this._keySize),
      keystore: cdktf.stringToTerraform(this._keystore),
      org_id: cdktf.stringToTerraform(this._orgId),
      sig_alg: cdktf.stringToTerraform(this._sigAlg),
      subject: apigeeKeystoresAliasesSelfSignedCertSubjectToTerraform(this._subject.internalValue),
      subject_alternative_dns_names: apigeeKeystoresAliasesSelfSignedCertSubjectAlternativeDnsNamesToTerraform(this._subjectAlternativeDnsNames.internalValue),
      timeouts: apigeeKeystoresAliasesSelfSignedCertTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
