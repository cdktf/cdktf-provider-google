/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeKeystoresAliasesKeyCertFileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Alias Name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#alias ApigeeKeystoresAliasesKeyCertFile#alias}
  */
  readonly alias: string;
  /**
  * Cert content
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#cert ApigeeKeystoresAliasesKeyCertFile#cert}
  */
  readonly cert: string;
  /**
  * Environment associated with the alias
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#environment ApigeeKeystoresAliasesKeyCertFile#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#id ApigeeKeystoresAliasesKeyCertFile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Private Key content, omit if uploading to truststore
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#key ApigeeKeystoresAliasesKeyCertFile#key}
  */
  readonly key?: string;
  /**
  * Keystore Name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#keystore ApigeeKeystoresAliasesKeyCertFile#keystore}
  */
  readonly keystore: string;
  /**
  * Organization ID associated with the alias
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#org_id ApigeeKeystoresAliasesKeyCertFile#org_id}
  */
  readonly orgId: string;
  /**
  * Password for the Private Key if it's encrypted
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#password ApigeeKeystoresAliasesKeyCertFile#password}
  */
  readonly password?: string;
  /**
  * certs_info block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#certs_info ApigeeKeystoresAliasesKeyCertFile#certs_info}
  */
  readonly certsInfo?: ApigeeKeystoresAliasesKeyCertFileCertsInfo;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#timeouts ApigeeKeystoresAliasesKeyCertFile#timeouts}
  */
  readonly timeouts?: ApigeeKeystoresAliasesKeyCertFileTimeouts;
}
export interface ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo {
  /**
  * X.509 basic constraints extension.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#basic_constraints ApigeeKeystoresAliasesKeyCertFile#basic_constraints}
  */
  readonly basicConstraints?: string;
  /**
  * X.509 notAfter validity period in milliseconds since epoch.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#expiry_date ApigeeKeystoresAliasesKeyCertFile#expiry_date}
  */
  readonly expiryDate?: string;
  /**
  * Flag that specifies whether the certificate is valid. 
Flag is set to Yes if the certificate is valid, No if expired, or Not yet if not yet valid.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#is_valid ApigeeKeystoresAliasesKeyCertFile#is_valid}
  */
  readonly isValid?: string;
  /**
  * X.509 issuer.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#issuer ApigeeKeystoresAliasesKeyCertFile#issuer}
  */
  readonly issuer?: string;
  /**
  * Public key component of the X.509 subject public key info.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#public_key ApigeeKeystoresAliasesKeyCertFile#public_key}
  */
  readonly publicKey?: string;
  /**
  * X.509 serial number.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#serial_number ApigeeKeystoresAliasesKeyCertFile#serial_number}
  */
  readonly serialNumber?: string;
  /**
  * X.509 signatureAlgorithm.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#sig_alg_name ApigeeKeystoresAliasesKeyCertFile#sig_alg_name}
  */
  readonly sigAlgName?: string;
  /**
  * X.509 subject.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#subject ApigeeKeystoresAliasesKeyCertFile#subject}
  */
  readonly subject?: string;
  /**
  * X.509 subject alternative names (SANs) extension.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#subject_alternative_names ApigeeKeystoresAliasesKeyCertFile#subject_alternative_names}
  */
  readonly subjectAlternativeNames?: string[];
  /**
  * X.509 notBefore validity period in milliseconds since epoch.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#valid_from ApigeeKeystoresAliasesKeyCertFile#valid_from}
  */
  readonly validFrom?: string;
  /**
  * X.509 version.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#version ApigeeKeystoresAliasesKeyCertFile#version}
  */
  readonly version?: number;
}

export function apigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoToTerraform(struct?: ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_constraints: cdktf.stringToTerraform(struct!.basicConstraints),
    expiry_date: cdktf.stringToTerraform(struct!.expiryDate),
    is_valid: cdktf.stringToTerraform(struct!.isValid),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
    sig_alg_name: cdktf.stringToTerraform(struct!.sigAlgName),
    subject: cdktf.stringToTerraform(struct!.subject),
    subject_alternative_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAlternativeNames),
    valid_from: cdktf.stringToTerraform(struct!.validFrom),
    version: cdktf.numberToTerraform(struct!.version),
  }
}

export class ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicConstraints !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicConstraints = this._basicConstraints;
    }
    if (this._expiryDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryDate = this._expiryDate;
    }
    if (this._isValid !== undefined) {
      hasAnyValues = true;
      internalValueResult.isValid = this._isValid;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    if (this._sigAlgName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigAlgName = this._sigAlgName;
    }
    if (this._subject !== undefined) {
      hasAnyValues = true;
      internalValueResult.subject = this._subject;
    }
    if (this._subjectAlternativeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeNames = this._subjectAlternativeNames;
    }
    if (this._validFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.validFrom = this._validFrom;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicConstraints = undefined;
      this._expiryDate = undefined;
      this._isValid = undefined;
      this._issuer = undefined;
      this._publicKey = undefined;
      this._serialNumber = undefined;
      this._sigAlgName = undefined;
      this._subject = undefined;
      this._subjectAlternativeNames = undefined;
      this._validFrom = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicConstraints = value.basicConstraints;
      this._expiryDate = value.expiryDate;
      this._isValid = value.isValid;
      this._issuer = value.issuer;
      this._publicKey = value.publicKey;
      this._serialNumber = value.serialNumber;
      this._sigAlgName = value.sigAlgName;
      this._subject = value.subject;
      this._subjectAlternativeNames = value.subjectAlternativeNames;
      this._validFrom = value.validFrom;
      this._version = value.version;
    }
  }

  // basic_constraints - computed: true, optional: true, required: false
  private _basicConstraints?: string; 
  public get basicConstraints() {
    return this.getStringAttribute('basic_constraints');
  }
  public set basicConstraints(value: string) {
    this._basicConstraints = value;
  }
  public resetBasicConstraints() {
    this._basicConstraints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicConstraintsInput() {
    return this._basicConstraints;
  }

  // expiry_date - computed: true, optional: true, required: false
  private _expiryDate?: string; 
  public get expiryDate() {
    return this.getStringAttribute('expiry_date');
  }
  public set expiryDate(value: string) {
    this._expiryDate = value;
  }
  public resetExpiryDate() {
    this._expiryDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryDateInput() {
    return this._expiryDate;
  }

  // is_valid - computed: true, optional: true, required: false
  private _isValid?: string; 
  public get isValid() {
    return this.getStringAttribute('is_valid');
  }
  public set isValid(value: string) {
    this._isValid = value;
  }
  public resetIsValid() {
    this._isValid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isValidInput() {
    return this._isValid;
  }

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // public_key - computed: true, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // serial_number - computed: true, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }

  // sig_alg_name - computed: true, optional: true, required: false
  private _sigAlgName?: string; 
  public get sigAlgName() {
    return this.getStringAttribute('sig_alg_name');
  }
  public set sigAlgName(value: string) {
    this._sigAlgName = value;
  }
  public resetSigAlgName() {
    this._sigAlgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigAlgNameInput() {
    return this._sigAlgName;
  }

  // subject - computed: true, optional: true, required: false
  private _subject?: string; 
  public get subject() {
    return this.getStringAttribute('subject');
  }
  public set subject(value: string) {
    this._subject = value;
  }
  public resetSubject() {
    this._subject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectInput() {
    return this._subject;
  }

  // subject_alternative_names - computed: true, optional: true, required: false
  private _subjectAlternativeNames?: string[]; 
  public get subjectAlternativeNames() {
    return this.getListAttribute('subject_alternative_names');
  }
  public set subjectAlternativeNames(value: string[]) {
    this._subjectAlternativeNames = value;
  }
  public resetSubjectAlternativeNames() {
    this._subjectAlternativeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeNamesInput() {
    return this._subjectAlternativeNames;
  }

  // valid_from - computed: true, optional: true, required: false
  private _validFrom?: string; 
  public get validFrom() {
    return this.getStringAttribute('valid_from');
  }
  public set validFrom(value: string) {
    this._validFrom = value;
  }
  public resetValidFrom() {
    this._validFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validFromInput() {
    return this._validFrom;
  }

  // version - computed: true, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList extends cdktf.ComplexList {
  public internalValue? : ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo[] | cdktf.IResolvable

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
  public get(index: number): ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference {
    return new ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApigeeKeystoresAliasesKeyCertFileCertsInfo {
  /**
  * cert_info block
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#cert_info ApigeeKeystoresAliasesKeyCertFile#cert_info}
  */
  readonly certInfo?: ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo[] | cdktf.IResolvable;
}

export function apigeeKeystoresAliasesKeyCertFileCertsInfoToTerraform(struct?: ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference | ApigeeKeystoresAliasesKeyCertFileCertsInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert_info: cdktf.listMapper(apigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoToTerraform, true)(struct!.certInfo),
  }
}

export class ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeKeystoresAliasesKeyCertFileCertsInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certInfo = this._certInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesKeyCertFileCertsInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certInfo.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certInfo.internalValue = value.certInfo;
    }
  }

  // cert_info - computed: false, optional: true, required: false
  private _certInfo = new ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfoList(this, "cert_info", false);
  public get certInfo() {
    return this._certInfo;
  }
  public putCertInfo(value: ApigeeKeystoresAliasesKeyCertFileCertsInfoCertInfo[] | cdktf.IResolvable) {
    this._certInfo.internalValue = value;
  }
  public resetCertInfo() {
    this._certInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInfoInput() {
    return this._certInfo.internalValue;
  }
}
export interface ApigeeKeystoresAliasesKeyCertFileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#create ApigeeKeystoresAliasesKeyCertFile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#delete ApigeeKeystoresAliasesKeyCertFile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#read ApigeeKeystoresAliasesKeyCertFile#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file#update ApigeeKeystoresAliasesKeyCertFile#update}
  */
  readonly update?: string;
}

export function apigeeKeystoresAliasesKeyCertFileTimeoutsToTerraform(struct?: ApigeeKeystoresAliasesKeyCertFileTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeKeystoresAliasesKeyCertFileTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeKeystoresAliasesKeyCertFileTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file}
*/
export class ApigeeKeystoresAliasesKeyCertFile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_keystores_aliases_key_cert_file";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/4.72.0/docs/resources/apigee_keystores_aliases_key_cert_file google_apigee_keystores_aliases_key_cert_file} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeKeystoresAliasesKeyCertFileConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeKeystoresAliasesKeyCertFileConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_keystores_aliases_key_cert_file',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '4.72.0',
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
    this._cert = config.cert;
    this._environment = config.environment;
    this._id = config.id;
    this._key = config.key;
    this._keystore = config.keystore;
    this._orgId = config.orgId;
    this._password = config.password;
    this._certsInfo.internalValue = config.certsInfo;
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

  // cert - computed: false, optional: false, required: true
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // certs_info - computed: false, optional: true, required: false
  private _certsInfo = new ApigeeKeystoresAliasesKeyCertFileCertsInfoOutputReference(this, "certs_info");
  public get certsInfo() {
    return this._certsInfo;
  }
  public putCertsInfo(value: ApigeeKeystoresAliasesKeyCertFileCertsInfo) {
    this._certsInfo.internalValue = value;
  }
  public resetCertsInfo() {
    this._certsInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certsInfoInput() {
    return this._certsInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeKeystoresAliasesKeyCertFileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeKeystoresAliasesKeyCertFileTimeouts) {
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
      cert: cdktf.stringToTerraform(this._cert),
      environment: cdktf.stringToTerraform(this._environment),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      keystore: cdktf.stringToTerraform(this._keystore),
      org_id: cdktf.stringToTerraform(this._orgId),
      password: cdktf.stringToTerraform(this._password),
      certs_info: apigeeKeystoresAliasesKeyCertFileCertsInfoToTerraform(this._certsInfo.internalValue),
      timeouts: apigeeKeystoresAliasesKeyCertFileTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
