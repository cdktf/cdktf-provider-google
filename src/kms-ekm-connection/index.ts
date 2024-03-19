/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsEkmConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Optional. Identifies the EKM Crypto Space that this EkmConnection maps to. Note: This field is required if KeyManagementMode is CLOUD_KMS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#crypto_space_path KmsEkmConnection#crypto_space_path}
  */
  readonly cryptoSpacePath?: string;
  /**
  * Optional. Etag of the currently stored EkmConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#etag KmsEkmConnection#etag}
  */
  readonly etag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#id KmsEkmConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Optional. Describes who can perform control plane operations on the EKM. If unset, this defaults to MANUAL Default value: "MANUAL" Possible values: ["MANUAL", "CLOUD_KMS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#key_management_mode KmsEkmConnection#key_management_mode}
  */
  readonly keyManagementMode?: string;
  /**
  * The location for the EkmConnection.
  * A full list of valid locations can be found by running 'gcloud kms locations list'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#location KmsEkmConnection#location}
  */
  readonly location: string;
  /**
  * The resource name for the EkmConnection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#name KmsEkmConnection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#project KmsEkmConnection#project}
  */
  readonly project?: string;
  /**
  * service_resolvers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#service_resolvers KmsEkmConnection#service_resolvers}
  */
  readonly serviceResolvers: KmsEkmConnectionServiceResolvers[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#timeouts KmsEkmConnection#timeouts}
  */
  readonly timeouts?: KmsEkmConnectionTimeouts;
}
export interface KmsEkmConnectionServiceResolversServerCertificates {
  /**
  * Required. The raw certificate bytes in DER format. A base64-encoded string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#raw_der KmsEkmConnection#raw_der}
  */
  readonly rawDer: string;
  /**
  * Output only. The subject Alternative DNS names. Only present if parsed is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#subject_alternative_dns_names KmsEkmConnection#subject_alternative_dns_names}
  */
  readonly subjectAlternativeDnsNames?: string[];
}

export function kmsEkmConnectionServiceResolversServerCertificatesToTerraform(struct?: KmsEkmConnectionServiceResolversServerCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    raw_der: cdktf.stringToTerraform(struct!.rawDer),
    subject_alternative_dns_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.subjectAlternativeDnsNames),
  }
}


export function kmsEkmConnectionServiceResolversServerCertificatesToHclTerraform(struct?: KmsEkmConnectionServiceResolversServerCertificates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    raw_der: {
      value: cdktf.stringToHclTerraform(struct!.rawDer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subject_alternative_dns_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.subjectAlternativeDnsNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsEkmConnectionServiceResolversServerCertificatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsEkmConnectionServiceResolversServerCertificates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rawDer !== undefined) {
      hasAnyValues = true;
      internalValueResult.rawDer = this._rawDer;
    }
    if (this._subjectAlternativeDnsNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.subjectAlternativeDnsNames = this._subjectAlternativeDnsNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsEkmConnectionServiceResolversServerCertificates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rawDer = undefined;
      this._subjectAlternativeDnsNames = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rawDer = value.rawDer;
      this._subjectAlternativeDnsNames = value.subjectAlternativeDnsNames;
    }
  }

  // issuer - computed: true, optional: false, required: false
  public get issuer() {
    return this.getStringAttribute('issuer');
  }

  // not_after_time - computed: true, optional: false, required: false
  public get notAfterTime() {
    return this.getStringAttribute('not_after_time');
  }

  // not_before_time - computed: true, optional: false, required: false
  public get notBeforeTime() {
    return this.getStringAttribute('not_before_time');
  }

  // parsed - computed: true, optional: false, required: false
  public get parsed() {
    return this.getBooleanAttribute('parsed');
  }

  // raw_der - computed: false, optional: false, required: true
  private _rawDer?: string; 
  public get rawDer() {
    return this.getStringAttribute('raw_der');
  }
  public set rawDer(value: string) {
    this._rawDer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rawDerInput() {
    return this._rawDer;
  }

  // serial_number - computed: true, optional: false, required: false
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }

  // sha256_fingerprint - computed: true, optional: false, required: false
  public get sha256Fingerprint() {
    return this.getStringAttribute('sha256_fingerprint');
  }

  // subject - computed: true, optional: false, required: false
  public get subject() {
    return this.getStringAttribute('subject');
  }

  // subject_alternative_dns_names - computed: true, optional: true, required: false
  private _subjectAlternativeDnsNames?: string[]; 
  public get subjectAlternativeDnsNames() {
    return this.getListAttribute('subject_alternative_dns_names');
  }
  public set subjectAlternativeDnsNames(value: string[]) {
    this._subjectAlternativeDnsNames = value;
  }
  public resetSubjectAlternativeDnsNames() {
    this._subjectAlternativeDnsNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subjectAlternativeDnsNamesInput() {
    return this._subjectAlternativeDnsNames;
  }
}

export class KmsEkmConnectionServiceResolversServerCertificatesList extends cdktf.ComplexList {
  public internalValue? : KmsEkmConnectionServiceResolversServerCertificates[] | cdktf.IResolvable

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
  public get(index: number): KmsEkmConnectionServiceResolversServerCertificatesOutputReference {
    return new KmsEkmConnectionServiceResolversServerCertificatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsEkmConnectionServiceResolvers {
  /**
  * Optional. The filter applied to the endpoints of the resolved service. If no filter is specified, all endpoints will be considered. An endpoint will be chosen arbitrarily from the filtered list for each request. For endpoint filter syntax and examples, see https://cloud.google.com/service-directory/docs/reference/rpc/google.cloud.servicedirectory.v1#resolveservicerequest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#endpoint_filter KmsEkmConnection#endpoint_filter}
  */
  readonly endpointFilter?: string;
  /**
  * Required. The hostname of the EKM replica used at TLS and HTTP layers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#hostname KmsEkmConnection#hostname}
  */
  readonly hostname: string;
  /**
  * Required. The resource name of the Service Directory service pointing to an EKM replica, in the format projects/* /locations/* /namespaces/* /services/*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#service_directory_service KmsEkmConnection#service_directory_service}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly serviceDirectoryService: string;
  /**
  * server_certificates block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#server_certificates KmsEkmConnection#server_certificates}
  */
  readonly serverCertificates: KmsEkmConnectionServiceResolversServerCertificates[] | cdktf.IResolvable;
}

export function kmsEkmConnectionServiceResolversToTerraform(struct?: KmsEkmConnectionServiceResolvers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_filter: cdktf.stringToTerraform(struct!.endpointFilter),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    service_directory_service: cdktf.stringToTerraform(struct!.serviceDirectoryService),
    server_certificates: cdktf.listMapper(kmsEkmConnectionServiceResolversServerCertificatesToTerraform, true)(struct!.serverCertificates),
  }
}


export function kmsEkmConnectionServiceResolversToHclTerraform(struct?: KmsEkmConnectionServiceResolvers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_filter: {
      value: cdktf.stringToHclTerraform(struct!.endpointFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_directory_service: {
      value: cdktf.stringToHclTerraform(struct!.serviceDirectoryService),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_certificates: {
      value: cdktf.listMapperHcl(kmsEkmConnectionServiceResolversServerCertificatesToHclTerraform, true)(struct!.serverCertificates),
      isBlock: true,
      type: "list",
      storageClassType: "KmsEkmConnectionServiceResolversServerCertificatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class KmsEkmConnectionServiceResolversOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): KmsEkmConnectionServiceResolvers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointFilter = this._endpointFilter;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._serviceDirectoryService !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceDirectoryService = this._serviceDirectoryService;
    }
    if (this._serverCertificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverCertificates = this._serverCertificates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: KmsEkmConnectionServiceResolvers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointFilter = undefined;
      this._hostname = undefined;
      this._serviceDirectoryService = undefined;
      this._serverCertificates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointFilter = value.endpointFilter;
      this._hostname = value.hostname;
      this._serviceDirectoryService = value.serviceDirectoryService;
      this._serverCertificates.internalValue = value.serverCertificates;
    }
  }

  // endpoint_filter - computed: true, optional: true, required: false
  private _endpointFilter?: string; 
  public get endpointFilter() {
    return this.getStringAttribute('endpoint_filter');
  }
  public set endpointFilter(value: string) {
    this._endpointFilter = value;
  }
  public resetEndpointFilter() {
    this._endpointFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointFilterInput() {
    return this._endpointFilter;
  }

  // hostname - computed: false, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // service_directory_service - computed: false, optional: false, required: true
  private _serviceDirectoryService?: string; 
  public get serviceDirectoryService() {
    return this.getStringAttribute('service_directory_service');
  }
  public set serviceDirectoryService(value: string) {
    this._serviceDirectoryService = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDirectoryServiceInput() {
    return this._serviceDirectoryService;
  }

  // server_certificates - computed: false, optional: false, required: true
  private _serverCertificates = new KmsEkmConnectionServiceResolversServerCertificatesList(this, "server_certificates", false);
  public get serverCertificates() {
    return this._serverCertificates;
  }
  public putServerCertificates(value: KmsEkmConnectionServiceResolversServerCertificates[] | cdktf.IResolvable) {
    this._serverCertificates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serverCertificatesInput() {
    return this._serverCertificates.internalValue;
  }
}

export class KmsEkmConnectionServiceResolversList extends cdktf.ComplexList {
  public internalValue? : KmsEkmConnectionServiceResolvers[] | cdktf.IResolvable

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
  public get(index: number): KmsEkmConnectionServiceResolversOutputReference {
    return new KmsEkmConnectionServiceResolversOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface KmsEkmConnectionTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#create KmsEkmConnection#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#delete KmsEkmConnection#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#update KmsEkmConnection#update}
  */
  readonly update?: string;
}

export function kmsEkmConnectionTimeoutsToTerraform(struct?: KmsEkmConnectionTimeouts | cdktf.IResolvable): any {
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


export function kmsEkmConnectionTimeoutsToHclTerraform(struct?: KmsEkmConnectionTimeouts | cdktf.IResolvable): any {
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

export class KmsEkmConnectionTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsEkmConnectionTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KmsEkmConnectionTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection google_kms_ekm_connection}
*/
export class KmsEkmConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_kms_ekm_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsEkmConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsEkmConnection to import
  * @param importFromId The id of the existing KmsEkmConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsEkmConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_kms_ekm_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.21.0/docs/resources/kms_ekm_connection google_kms_ekm_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsEkmConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: KmsEkmConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'google_kms_ekm_connection',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.21.0',
        providerVersionConstraint: '~> 5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cryptoSpacePath = config.cryptoSpacePath;
    this._etag = config.etag;
    this._id = config.id;
    this._keyManagementMode = config.keyManagementMode;
    this._location = config.location;
    this._name = config.name;
    this._project = config.project;
    this._serviceResolvers.internalValue = config.serviceResolvers;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // crypto_space_path - computed: true, optional: true, required: false
  private _cryptoSpacePath?: string; 
  public get cryptoSpacePath() {
    return this.getStringAttribute('crypto_space_path');
  }
  public set cryptoSpacePath(value: string) {
    this._cryptoSpacePath = value;
  }
  public resetCryptoSpacePath() {
    this._cryptoSpacePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cryptoSpacePathInput() {
    return this._cryptoSpacePath;
  }

  // etag - computed: true, optional: true, required: false
  private _etag?: string; 
  public get etag() {
    return this.getStringAttribute('etag');
  }
  public set etag(value: string) {
    this._etag = value;
  }
  public resetEtag() {
    this._etag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get etagInput() {
    return this._etag;
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

  // key_management_mode - computed: false, optional: true, required: false
  private _keyManagementMode?: string; 
  public get keyManagementMode() {
    return this.getStringAttribute('key_management_mode');
  }
  public set keyManagementMode(value: string) {
    this._keyManagementMode = value;
  }
  public resetKeyManagementMode() {
    this._keyManagementMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyManagementModeInput() {
    return this._keyManagementMode;
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

  // service_resolvers - computed: false, optional: false, required: true
  private _serviceResolvers = new KmsEkmConnectionServiceResolversList(this, "service_resolvers", false);
  public get serviceResolvers() {
    return this._serviceResolvers;
  }
  public putServiceResolvers(value: KmsEkmConnectionServiceResolvers[] | cdktf.IResolvable) {
    this._serviceResolvers.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceResolversInput() {
    return this._serviceResolvers.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsEkmConnectionTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsEkmConnectionTimeouts) {
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
      crypto_space_path: cdktf.stringToTerraform(this._cryptoSpacePath),
      etag: cdktf.stringToTerraform(this._etag),
      id: cdktf.stringToTerraform(this._id),
      key_management_mode: cdktf.stringToTerraform(this._keyManagementMode),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      service_resolvers: cdktf.listMapper(kmsEkmConnectionServiceResolversToTerraform, true)(this._serviceResolvers.internalValue),
      timeouts: kmsEkmConnectionTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      crypto_space_path: {
        value: cdktf.stringToHclTerraform(this._cryptoSpacePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      etag: {
        value: cdktf.stringToHclTerraform(this._etag),
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
      key_management_mode: {
        value: cdktf.stringToHclTerraform(this._keyManagementMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      service_resolvers: {
        value: cdktf.listMapperHcl(kmsEkmConnectionServiceResolversToHclTerraform, true)(this._serviceResolvers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "KmsEkmConnectionServiceResolversList",
      },
      timeouts: {
        value: kmsEkmConnectionTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsEkmConnectionTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
