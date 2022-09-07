// https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CertificateManagerCertificateConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of the resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#description CertificateManagerCertificate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#id CertificateManagerCertificate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the Certificate resource.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#labels CertificateManagerCertificate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * A user-defined name of the certificate. Certificate names must be unique
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#name CertificateManagerCertificate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#project CertificateManagerCertificate#project}
  */
  readonly project?: string;
  /**
  * The scope of the certificate.

DEFAULT: Certificates with default scope are served from core Google data centers.
If unsure, choose this option.

EDGE_CACHE: Certificates with scope EDGE_CACHE are special-purposed certificates,
served from non-core Google data centers.
Currently allowed only for managed certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#scope CertificateManagerCertificate#scope}
  */
  readonly scope?: string;
  /**
  * managed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#managed CertificateManagerCertificate#managed}
  */
  readonly managed?: CertificateManagerCertificateManaged;
  /**
  * self_managed block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#self_managed CertificateManagerCertificate#self_managed}
  */
  readonly selfManaged?: CertificateManagerCertificateSelfManaged;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#timeouts CertificateManagerCertificate#timeouts}
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
  * Authorizations that will be used for performing domain authorization
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#dns_authorizations CertificateManagerCertificate#dns_authorizations}
  */
  readonly dnsAuthorizations?: string[];
  /**
  * The domains for which a managed SSL certificate will be generated.
Wildcard domains are only supported with DNS challenge resolution
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#domains CertificateManagerCertificate#domains}
  */
  readonly domains?: string[];
}

export function certificateManagerCertificateManagedToTerraform(struct?: CertificateManagerCertificateManagedOutputReference | CertificateManagerCertificateManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_authorizations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dnsAuthorizations),
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
  }
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CertificateManagerCertificateManaged | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsAuthorizations = undefined;
      this._domains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsAuthorizations = value.dnsAuthorizations;
      this._domains = value.domains;
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

Leaf certificate comes first, followed by intermediate ones if any.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#certificate_pem CertificateManagerCertificate#certificate_pem}
  */
  readonly certificatePem: string;
  /**
  * The private key of the leaf certificate in PEM-encoded form.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#private_key_pem CertificateManagerCertificate#private_key_pem}
  */
  readonly privateKeyPem: string;
}

export function certificateManagerCertificateSelfManagedToTerraform(struct?: CertificateManagerCertificateSelfManagedOutputReference | CertificateManagerCertificateSelfManaged): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_pem: cdktf.stringToTerraform(struct!.certificatePem),
    private_key_pem: cdktf.stringToTerraform(struct!.privateKeyPem),
  }
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
      this._privateKeyPem = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificatePem = value.certificatePem;
      this._privateKeyPem = value.privateKeyPem;
    }
  }

  // certificate_pem - computed: false, optional: false, required: true
  private _certificatePem?: string; 
  public get certificatePem() {
    return this.getStringAttribute('certificate_pem');
  }
  public set certificatePem(value: string) {
    this._certificatePem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatePemInput() {
    return this._certificatePem;
  }

  // private_key_pem - computed: false, optional: false, required: true
  private _privateKeyPem?: string; 
  public get privateKeyPem() {
    return this.getStringAttribute('private_key_pem');
  }
  public set privateKeyPem(value: string) {
    this._privateKeyPem = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPemInput() {
    return this._privateKeyPem;
  }
}
export interface CertificateManagerCertificateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#create CertificateManagerCertificate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#delete CertificateManagerCertificate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate#update CertificateManagerCertificate#update}
  */
  readonly update?: string;
}

export function certificateManagerCertificateTimeoutsToTerraform(struct?: CertificateManagerCertificateTimeoutsOutputReference | CertificateManagerCertificateTimeouts | cdktf.IResolvable): any {
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

export class CertificateManagerCertificateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
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
* Represents a {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate google_certificate_manager_certificate}
*/
export class CertificateManagerCertificate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_certificate_manager_certificate";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/google/r/certificate_manager_certificate google_certificate_manager_certificate} Resource
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
    this._description = config.description;
    this._id = config.id;
    this._labels = config.labels;
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
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      scope: cdktf.stringToTerraform(this._scope),
      managed: certificateManagerCertificateManagedToTerraform(this._managed.internalValue),
      self_managed: certificateManagerCertificateSelfManagedToTerraform(this._selfManaged.internalValue),
      timeouts: certificateManagerCertificateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
