/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateManagerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#description CertificateManagerCertificate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#id CertificateManagerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the Certificate resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#labels CertificateManagerCertificate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The Certificate Manager location. If not specified, "global" is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#location CertificateManagerCertificate#location}
  */
  readonly location?: string;
  /**
  * A user-defined name of the certificate. Certificate names must be unique
  * The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
  * and all following characters must be a dash, underscore, letter or digit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#name CertificateManagerCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#project CertificateManagerCertificate#project}
  */
  readonly project?: string;
  /**
  * The scope of the certificate.
  * 
  * DEFAULT: Certificates with default scope are served from core Google data centers.
  * If unsure, choose this option.
  * 
  * EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates, served from Edge Points of Presence.
  * See https://cloud.google.com/vpc/docs/edge-locations.
  * 
  * ALL_REGIONS: Certificates with ALL_REGIONS scope are served from all GCP regions (You can only use ALL_REGIONS with global certs).
  * See https://cloud.google.com/compute/docs/regions-zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#scope CertificateManagerCertificate#scope}
  */
  readonly scope?: string;
  /**
  * managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#managed CertificateManagerCertificate#managed}
  */
  readonly managed?: CertificateManagerCertificateManaged;
  /**
  * self_managed block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#self_managed CertificateManagerCertificate#self_managed}
  */
  readonly selfManaged?: CertificateManagerCertificateSelfManaged;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#timeouts CertificateManagerCertificate#timeouts}
  */
  readonly timeouts?: CertificateManagerCertificateTimeouts;
}
export interface CertificateManagerCertificateManagedAuthorizationAttemptInfo {
}

export function certificateManagerCertificateManagedAuthorizationAttemptInfoToTerraform(struct?: CertificateManagerCertificateManagedAuthorizationAttemptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificateManagerCertificateManagedAuthorizationAttemptInfoToHclTerraform(struct?: CertificateManagerCertificateManagedAuthorizationAttemptInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateManagerCertificateManagedAuthorizationAttemptInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerCertificateManagedAuthorizationAttemptInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // domain - computed: true, optional: false, required: false
  public get domain() {
    return this.getStringAttribute('domain');
  }

  // failure_reason - computed: true, optional: false, required: false
  public get failureReason() {
    return this.getStringAttribute('failure_reason');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class CertificateManagerCertificateManagedAuthorizationAttemptInfoList extends cdktf.ComplexList {

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
  public get(index: number): CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference {
    return new CertificateManagerCertificateManagedAuthorizationAttemptInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateManagerCertificateManagedProvisioningIssue {
}

export function certificateManagerCertificateManagedProvisioningIssueToTerraform(struct?: CertificateManagerCertificateManagedProvisioningIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function certificateManagerCertificateManagedProvisioningIssueToHclTerraform(struct?: CertificateManagerCertificateManagedProvisioningIssue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CertificateManagerCertificateManagedProvisioningIssueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CertificateManagerCertificateManagedProvisioningIssue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerCertificateManagedProvisioningIssue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // reason - computed: true, optional: false, required: false
  public get reason() {
    return this.getStringAttribute('reason');
  }
}

export class CertificateManagerCertificateManagedProvisioningIssueList extends cdktf.ComplexList {

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
  public get(index: number): CertificateManagerCertificateManagedProvisioningIssueOutputReference {
    return new CertificateManagerCertificateManagedProvisioningIssueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CertificateManagerCertificateManaged {
  /**
  * Authorizations that will be used for performing domain authorization. Either issuanceConfig or dnsAuthorizations should be specificed, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#dns_authorizations CertificateManagerCertificate#dns_authorizations}
  */
  readonly dnsAuthorizations?: string[];
  /**
  * The domains for which a managed SSL certificate will be generated.
  * Wildcard domains are only supported with DNS challenge resolution
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#domains CertificateManagerCertificate#domains}
  */
  readonly domains?: string[];
  /**
  * The resource name for a CertificateIssuanceConfig used to configure private PKI certificates in the format projects/* /locations/* /certificateIssuanceConfigs/*.
  * If this field is not set, the certificates will instead be publicly signed as documented at https://cloud.google.com/load-balancing/docs/ssl-certificates/google-managed-certs#caa.
  * Either issuanceConfig or dnsAuthorizations should be specificed, but not both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#issuance_config CertificateManagerCertificate#issuance_config}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly issuanceConfig?: string;
}

export function certificateManagerCertificateManagedToTerraform(struct?: CertificateManagerCertificateManagedOutputReference | CertificateManagerCertificateManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_authorizations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsAuthorizations),
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    issuance_config: cdktf.stringToTerraform(struct!.issuanceConfig),
  }
}


export function certificateManagerCertificateManagedToHclTerraform(struct?: CertificateManagerCertificateManagedOutputReference | CertificateManagerCertificateManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_authorizations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dnsAuthorizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuance_config: {
      value: cdktf.stringToHclTerraform(struct!.issuanceConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerCertificateManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateManagerCertificateManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsAuthorizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthorizations = this._dnsAuthorizations;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._issuanceConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuanceConfig = this._issuanceConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerCertificateManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsAuthorizations = undefined;
      this._domains = undefined;
      this._issuanceConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsAuthorizations = value.dnsAuthorizations;
      this._domains = value.domains;
      this._issuanceConfig = value.issuanceConfig;
    }
  }

  // authorization_attempt_info - computed: true, optional: false, required: false
  private _authorizationAttemptInfo = new CertificateManagerCertificateManagedAuthorizationAttemptInfoList(this, "authorization_attempt_info", false);
  public get authorizationAttemptInfo() {
    return this._authorizationAttemptInfo;
  }

  // dns_authorizations - computed: false, optional: true, required: false
  private _dnsAuthorizations?: string[]; 
  public get dnsAuthorizations() {
    return this.getListAttribute('dns_authorizations');
  }
  public set dnsAuthorizations(value: string[]) {
    this._dnsAuthorizations = value;
  }
  public resetDnsAuthorizations() {
    this._dnsAuthorizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthorizationsInput() {
    return this._dnsAuthorizations;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return this.getListAttribute('domains');
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // issuance_config - computed: false, optional: true, required: false
  private _issuanceConfig?: string; 
  public get issuanceConfig() {
    return this.getStringAttribute('issuance_config');
  }
  public set issuanceConfig(value: string) {
    this._issuanceConfig = value;
  }
  public resetIssuanceConfig() {
    this._issuanceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuanceConfigInput() {
    return this._issuanceConfig;
  }

  // provisioning_issue - computed: true, optional: false, required: false
  private _provisioningIssue = new CertificateManagerCertificateManagedProvisioningIssueList(this, "provisioning_issue", false);
  public get provisioningIssue() {
    return this._provisioningIssue;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}
export interface CertificateManagerCertificateSelfManaged {
  /**
  * The certificate chain in PEM-encoded form.
  * 
  * Leaf certificate comes first, followed by intermediate ones if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#certificate_pem CertificateManagerCertificate#certificate_pem}
  */
  readonly certificatePem?: string;
  /**
  * The certificate chain in PEM-encoded form.
  * 
  * Leaf certificate comes first, followed by intermediate ones if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#pem_certificate CertificateManagerCertificate#pem_certificate}
  */
  readonly pemCertificate?: string;
  /**
  * The private key of the leaf certificate in PEM-encoded form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#pem_private_key CertificateManagerCertificate#pem_private_key}
  */
  readonly pemPrivateKey?: string;
  /**
  * The private key of the leaf certificate in PEM-encoded form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#private_key_pem CertificateManagerCertificate#private_key_pem}
  */
  readonly privateKeyPem?: string;
}

export function certificateManagerCertificateSelfManagedToTerraform(struct?: CertificateManagerCertificateSelfManagedOutputReference | CertificateManagerCertificateSelfManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_pem: cdktf.stringToTerraform(struct!.certificatePem),
    pem_certificate: cdktf.stringToTerraform(struct!.pemCertificate),
    pem_private_key: cdktf.stringToTerraform(struct!.pemPrivateKey),
    private_key_pem: cdktf.stringToTerraform(struct!.privateKeyPem),
  }
}


export function certificateManagerCertificateSelfManagedToHclTerraform(struct?: CertificateManagerCertificateSelfManagedOutputReference | CertificateManagerCertificateSelfManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_pem: {
      value: cdktf.stringToHclTerraform(struct!.certificatePem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_certificate: {
      value: cdktf.stringToHclTerraform(struct!.pemCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pem_private_key: {
      value: cdktf.stringToHclTerraform(struct!.pemPrivateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_pem: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyPem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerCertificateSelfManagedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CertificateManagerCertificateSelfManaged | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificatePem !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificatePem = this._certificatePem;
    }
    if (this._pemCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemCertificate = this._pemCertificate;
    }
    if (this._pemPrivateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemPrivateKey = this._pemPrivateKey;
    }
    if (this._privateKeyPem !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyPem = this._privateKeyPem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerCertificateSelfManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificatePem = undefined;
      this._pemCertificate = undefined;
      this._pemPrivateKey = undefined;
      this._privateKeyPem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificatePem = value.certificatePem;
      this._pemCertificate = value.pemCertificate;
      this._pemPrivateKey = value.pemPrivateKey;
      this._privateKeyPem = value.privateKeyPem;
    }
  }

  // certificate_pem - computed: false, optional: true, required: false
  private _certificatePem?: string; 
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }
  public set certificatePem(value: string) {
    this._certificatePem = value;
  }
  public resetCertificatePem() {
    this._certificatePem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemInput() {
    return this._certificatePem;
  }

  // pem_certificate - computed: false, optional: true, required: false
  private _pemCertificate?: string; 
  public get pemCertificate() {
    return this.getStringAttribute('pem_certificate');
  }
  public set pemCertificate(value: string) {
    this._pemCertificate = value;
  }
  public resetPemCertificate() {
    this._pemCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemCertificateInput() {
    return this._pemCertificate;
  }

  // pem_private_key - computed: false, optional: true, required: false
  private _pemPrivateKey?: string; 
  public get pemPrivateKey() {
    return this.getStringAttribute('pem_private_key');
  }
  public set pemPrivateKey(value: string) {
    this._pemPrivateKey = value;
  }
  public resetPemPrivateKey() {
    this._pemPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pemPrivateKeyInput() {
    return this._pemPrivateKey;
  }

  // private_key_pem - computed: false, optional: true, required: false
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  public resetPrivateKeyPem() {
    this._privateKeyPem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }
}
export interface CertificateManagerCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#create CertificateManagerCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#delete CertificateManagerCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#update CertificateManagerCertificate#update}
  */
  readonly update?: string;
}

export function certificateManagerCertificateTimeoutsToTerraform(struct?: CertificateManagerCertificateTimeouts | cdktf.IResolvable): any {
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


export function certificateManagerCertificateTimeoutsToHclTerraform(struct?: CertificateManagerCertificateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CertificateManagerCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CertificateManagerCertificateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CertificateManagerCertificateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate google_certificate_manager_certificate}
*/
export class CertificateManagerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_certificate_manager_certificate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CertificateManagerCertificate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CertificateManagerCertificate to import
  * @param importFromId The id of the existing CertificateManagerCertificate that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CertificateManagerCertificate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_certificate_manager_certificate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.5.0/docs/resources/certificate_manager_certificate google_certificate_manager_certificate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CertificateManagerCertificateConfig
  */
  public constructor(scope: Construct, id: string, config: CertificateManagerCertificateConfig) {
    super(scope, id, {
      terraformResourceType: 'google_certificate_manager_certificate',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.5.0',
        providerVersionConstraint: '~> 6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._scope = config.scope;
    this._managed.internalValue = config.managed;
    this._selfManaged.internalValue = config.selfManaged;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // effective_labels - computed: true, optional: false, required: false
  private _effectiveLabels = new cdktf.StringMap(this, "effective_labels");
  public get effectiveLabels() {
    return this._effectiveLabels;
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

  // san_dnsnames - computed: true, optional: false, required: false
  public get sanDnsnames() {
    return this.getListAttribute('san_dnsnames');
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // managed - computed: false, optional: true, required: false
  private _managed = new CertificateManagerCertificateManagedOutputReference(this, "managed");
  public get managed() {
    return this._managed;
  }
  public putManaged(value: CertificateManagerCertificateManaged) {
    this._managed.internalValue = value;
  }
  public resetManaged() {
    this._managed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed.internalValue;
  }

  // self_managed - computed: false, optional: true, required: false
  private _selfManaged = new CertificateManagerCertificateSelfManagedOutputReference(this, "self_managed");
  public get selfManaged() {
    return this._selfManaged;
  }
  public putSelfManaged(value: CertificateManagerCertificateSelfManaged) {
    this._selfManaged.internalValue = value;
  }
  public resetSelfManaged() {
    this._selfManaged.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfManagedInput() {
    return this._selfManaged.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CertificateManagerCertificateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CertificateManagerCertificateTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      scope: cdktf.stringToTerraform(this._scope),
      managed: certificateManagerCertificateManagedToTerraform(this._managed.internalValue),
      self_managed: certificateManagerCertificateSelfManagedToTerraform(this._selfManaged.internalValue),
      timeouts: certificateManagerCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      managed: {
        value: certificateManagerCertificateManagedToHclTerraform(this._managed.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateManagerCertificateManagedList",
      },
      self_managed: {
        value: certificateManagerCertificateSelfManagedToHclTerraform(this._selfManaged.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CertificateManagerCertificateSelfManagedList",
      },
      timeouts: {
        value: certificateManagerCertificateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CertificateManagerCertificateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
