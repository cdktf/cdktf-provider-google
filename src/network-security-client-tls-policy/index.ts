/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkSecurityClientTlsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#description NetworkSecurityClientTlsPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#id NetworkSecurityClientTlsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Set of label tags associated with the ClientTlsPolicy resource.
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#labels NetworkSecurityClientTlsPolicy#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the client tls policy.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#location NetworkSecurityClientTlsPolicy#location}
  */
  readonly location?: string;
  /**
  * Name of the ClientTlsPolicy resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#name NetworkSecurityClientTlsPolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#project NetworkSecurityClientTlsPolicy#project}
  */
  readonly project?: string;
  /**
  * Server Name Indication string to present to the server during TLS handshake. E.g: "secure.example.com".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#sni NetworkSecurityClientTlsPolicy#sni}
  */
  readonly sni?: string;
  /**
  * client_certificate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#client_certificate NetworkSecurityClientTlsPolicy#client_certificate}
  */
  readonly clientCertificate?: NetworkSecurityClientTlsPolicyClientCertificate;
  /**
  * server_validation_ca block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#server_validation_ca NetworkSecurityClientTlsPolicy#server_validation_ca}
  */
  readonly serverValidationCa?: NetworkSecurityClientTlsPolicyServerValidationCa[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#timeouts NetworkSecurityClientTlsPolicy#timeouts}
  */
  readonly timeouts?: NetworkSecurityClientTlsPolicyTimeouts;
}
export interface NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance {
  /**
  * Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#plugin_instance NetworkSecurityClientTlsPolicy#plugin_instance}
  */
  readonly pluginInstance: string;
}

export function networkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceToTerraform(struct?: NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference | NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_instance: cdktf.stringToTerraform(struct!.pluginInstance),
  }
}


export function networkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceToHclTerraform(struct?: NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference | NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_instance: {
      value: cdktf.stringToHclTerraform(struct!.pluginInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginInstance = this._pluginInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pluginInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pluginInstance = value.pluginInstance;
    }
  }

  // plugin_instance - computed: false, optional: false, required: true
  private _pluginInstance?: string; 
  public get pluginInstance() {
    return this.getStringAttribute('plugin_instance');
  }
  public set pluginInstance(value: string) {
    this._pluginInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInstanceInput() {
    return this._pluginInstance;
  }
}
export interface NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint {
  /**
  * The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#target_uri NetworkSecurityClientTlsPolicy#target_uri}
  */
  readonly targetUri: string;
}

export function networkSecurityClientTlsPolicyClientCertificateGrpcEndpointToTerraform(struct?: NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference | NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function networkSecurityClientTlsPolicyClientCertificateGrpcEndpointToHclTerraform(struct?: NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference | NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetUri = value.targetUri;
    }
  }

  // target_uri - computed: false, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}
export interface NetworkSecurityClientTlsPolicyClientCertificate {
  /**
  * certificate_provider_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#certificate_provider_instance NetworkSecurityClientTlsPolicy#certificate_provider_instance}
  */
  readonly certificateProviderInstance?: NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance;
  /**
  * grpc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#grpc_endpoint NetworkSecurityClientTlsPolicy#grpc_endpoint}
  */
  readonly grpcEndpoint?: NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint;
}

export function networkSecurityClientTlsPolicyClientCertificateToTerraform(struct?: NetworkSecurityClientTlsPolicyClientCertificateOutputReference | NetworkSecurityClientTlsPolicyClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_provider_instance: networkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceToTerraform(struct!.certificateProviderInstance),
    grpc_endpoint: networkSecurityClientTlsPolicyClientCertificateGrpcEndpointToTerraform(struct!.grpcEndpoint),
  }
}


export function networkSecurityClientTlsPolicyClientCertificateToHclTerraform(struct?: NetworkSecurityClientTlsPolicyClientCertificateOutputReference | NetworkSecurityClientTlsPolicyClientCertificate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_provider_instance: {
      value: networkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceToHclTerraform(struct!.certificateProviderInstance),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceList",
    },
    grpc_endpoint: {
      value: networkSecurityClientTlsPolicyClientCertificateGrpcEndpointToHclTerraform(struct!.grpcEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityClientTlsPolicyClientCertificateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityClientTlsPolicyClientCertificate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProviderInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProviderInstance = this._certificateProviderInstance?.internalValue;
    }
    if (this._grpcEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcEndpoint = this._grpcEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityClientTlsPolicyClientCertificate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._certificateProviderInstance.internalValue = undefined;
      this._grpcEndpoint.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._certificateProviderInstance.internalValue = value.certificateProviderInstance;
      this._grpcEndpoint.internalValue = value.grpcEndpoint;
    }
  }

  // certificate_provider_instance - computed: false, optional: true, required: false
  private _certificateProviderInstance = new NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstanceOutputReference(this, "certificate_provider_instance");
  public get certificateProviderInstance() {
    return this._certificateProviderInstance;
  }
  public putCertificateProviderInstance(value: NetworkSecurityClientTlsPolicyClientCertificateCertificateProviderInstance) {
    this._certificateProviderInstance.internalValue = value;
  }
  public resetCertificateProviderInstance() {
    this._certificateProviderInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProviderInstanceInput() {
    return this._certificateProviderInstance.internalValue;
  }

  // grpc_endpoint - computed: false, optional: true, required: false
  private _grpcEndpoint = new NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpointOutputReference(this, "grpc_endpoint");
  public get grpcEndpoint() {
    return this._grpcEndpoint;
  }
  public putGrpcEndpoint(value: NetworkSecurityClientTlsPolicyClientCertificateGrpcEndpoint) {
    this._grpcEndpoint.internalValue = value;
  }
  public resetGrpcEndpoint() {
    this._grpcEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcEndpointInput() {
    return this._grpcEndpoint.internalValue;
  }
}
export interface NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance {
  /**
  * Plugin instance name, used to locate and load CertificateProvider instance configuration. Set to "google_cloud_private_spiffe" to use Certificate Authority Service certificate provider instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#plugin_instance NetworkSecurityClientTlsPolicy#plugin_instance}
  */
  readonly pluginInstance: string;
}

export function networkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceToTerraform(struct?: NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference | NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    plugin_instance: cdktf.stringToTerraform(struct!.pluginInstance),
  }
}


export function networkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceToHclTerraform(struct?: NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference | NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    plugin_instance: {
      value: cdktf.stringToHclTerraform(struct!.pluginInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pluginInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginInstance = this._pluginInstance;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pluginInstance = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pluginInstance = value.pluginInstance;
    }
  }

  // plugin_instance - computed: false, optional: false, required: true
  private _pluginInstance?: string; 
  public get pluginInstance() {
    return this.getStringAttribute('plugin_instance');
  }
  public set pluginInstance(value: string) {
    this._pluginInstance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInstanceInput() {
    return this._pluginInstance;
  }
}
export interface NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint {
  /**
  * The target URI of the gRPC endpoint. Only UDS path is supported, and should start with "unix:".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#target_uri NetworkSecurityClientTlsPolicy#target_uri}
  */
  readonly targetUri: string;
}

export function networkSecurityClientTlsPolicyServerValidationCaGrpcEndpointToTerraform(struct?: NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference | NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_uri: cdktf.stringToTerraform(struct!.targetUri),
  }
}


export function networkSecurityClientTlsPolicyServerValidationCaGrpcEndpointToHclTerraform(struct?: NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference | NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_uri: {
      value: cdktf.stringToHclTerraform(struct!.targetUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetUri = this._targetUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._targetUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._targetUri = value.targetUri;
    }
  }

  // target_uri - computed: false, optional: false, required: true
  private _targetUri?: string; 
  public get targetUri() {
    return this.getStringAttribute('target_uri');
  }
  public set targetUri(value: string) {
    this._targetUri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetUriInput() {
    return this._targetUri;
  }
}
export interface NetworkSecurityClientTlsPolicyServerValidationCa {
  /**
  * certificate_provider_instance block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#certificate_provider_instance NetworkSecurityClientTlsPolicy#certificate_provider_instance}
  */
  readonly certificateProviderInstance?: NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance;
  /**
  * grpc_endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#grpc_endpoint NetworkSecurityClientTlsPolicy#grpc_endpoint}
  */
  readonly grpcEndpoint?: NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint;
}

export function networkSecurityClientTlsPolicyServerValidationCaToTerraform(struct?: NetworkSecurityClientTlsPolicyServerValidationCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    certificate_provider_instance: networkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceToTerraform(struct!.certificateProviderInstance),
    grpc_endpoint: networkSecurityClientTlsPolicyServerValidationCaGrpcEndpointToTerraform(struct!.grpcEndpoint),
  }
}


export function networkSecurityClientTlsPolicyServerValidationCaToHclTerraform(struct?: NetworkSecurityClientTlsPolicyServerValidationCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    certificate_provider_instance: {
      value: networkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceToHclTerraform(struct!.certificateProviderInstance),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceList",
    },
    grpc_endpoint: {
      value: networkSecurityClientTlsPolicyServerValidationCaGrpcEndpointToHclTerraform(struct!.grpcEndpoint),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkSecurityClientTlsPolicyServerValidationCaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkSecurityClientTlsPolicyServerValidationCa | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._certificateProviderInstance?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateProviderInstance = this._certificateProviderInstance?.internalValue;
    }
    if (this._grpcEndpoint?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.grpcEndpoint = this._grpcEndpoint?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkSecurityClientTlsPolicyServerValidationCa | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._certificateProviderInstance.internalValue = undefined;
      this._grpcEndpoint.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._certificateProviderInstance.internalValue = value.certificateProviderInstance;
      this._grpcEndpoint.internalValue = value.grpcEndpoint;
    }
  }

  // certificate_provider_instance - computed: false, optional: true, required: false
  private _certificateProviderInstance = new NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstanceOutputReference(this, "certificate_provider_instance");
  public get certificateProviderInstance() {
    return this._certificateProviderInstance;
  }
  public putCertificateProviderInstance(value: NetworkSecurityClientTlsPolicyServerValidationCaCertificateProviderInstance) {
    this._certificateProviderInstance.internalValue = value;
  }
  public resetCertificateProviderInstance() {
    this._certificateProviderInstance.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateProviderInstanceInput() {
    return this._certificateProviderInstance.internalValue;
  }

  // grpc_endpoint - computed: false, optional: true, required: false
  private _grpcEndpoint = new NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpointOutputReference(this, "grpc_endpoint");
  public get grpcEndpoint() {
    return this._grpcEndpoint;
  }
  public putGrpcEndpoint(value: NetworkSecurityClientTlsPolicyServerValidationCaGrpcEndpoint) {
    this._grpcEndpoint.internalValue = value;
  }
  public resetGrpcEndpoint() {
    this._grpcEndpoint.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grpcEndpointInput() {
    return this._grpcEndpoint.internalValue;
  }
}

export class NetworkSecurityClientTlsPolicyServerValidationCaList extends cdktf.ComplexList {
  public internalValue? : NetworkSecurityClientTlsPolicyServerValidationCa[] | cdktf.IResolvable

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
  public get(index: number): NetworkSecurityClientTlsPolicyServerValidationCaOutputReference {
    return new NetworkSecurityClientTlsPolicyServerValidationCaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NetworkSecurityClientTlsPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#create NetworkSecurityClientTlsPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#delete NetworkSecurityClientTlsPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#update NetworkSecurityClientTlsPolicy#update}
  */
  readonly update?: string;
}

export function networkSecurityClientTlsPolicyTimeoutsToTerraform(struct?: NetworkSecurityClientTlsPolicyTimeouts | cdktf.IResolvable): any {
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


export function networkSecurityClientTlsPolicyTimeoutsToHclTerraform(struct?: NetworkSecurityClientTlsPolicyTimeouts | cdktf.IResolvable): any {
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

export class NetworkSecurityClientTlsPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkSecurityClientTlsPolicyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkSecurityClientTlsPolicyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy google_network_security_client_tls_policy}
*/
export class NetworkSecurityClientTlsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_security_client_tls_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkSecurityClientTlsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkSecurityClientTlsPolicy to import
  * @param importFromId The id of the existing NetworkSecurityClientTlsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkSecurityClientTlsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_security_client_tls_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.43.0/docs/resources/network_security_client_tls_policy google_network_security_client_tls_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkSecurityClientTlsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkSecurityClientTlsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_security_client_tls_policy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.43.0',
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
    this._sni = config.sni;
    this._clientCertificate.internalValue = config.clientCertificate;
    this._serverValidationCa.internalValue = config.serverValidationCa;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

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

  // sni - computed: false, optional: true, required: false
  private _sni?: string; 
  public get sni() {
    return this.getStringAttribute('sni');
  }
  public set sni(value: string) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // client_certificate - computed: false, optional: true, required: false
  private _clientCertificate = new NetworkSecurityClientTlsPolicyClientCertificateOutputReference(this, "client_certificate");
  public get clientCertificate() {
    return this._clientCertificate;
  }
  public putClientCertificate(value: NetworkSecurityClientTlsPolicyClientCertificate) {
    this._clientCertificate.internalValue = value;
  }
  public resetClientCertificate() {
    this._clientCertificate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateInput() {
    return this._clientCertificate.internalValue;
  }

  // server_validation_ca - computed: false, optional: true, required: false
  private _serverValidationCa = new NetworkSecurityClientTlsPolicyServerValidationCaList(this, "server_validation_ca", false);
  public get serverValidationCa() {
    return this._serverValidationCa;
  }
  public putServerValidationCa(value: NetworkSecurityClientTlsPolicyServerValidationCa[] | cdktf.IResolvable) {
    this._serverValidationCa.internalValue = value;
  }
  public resetServerValidationCa() {
    this._serverValidationCa.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverValidationCaInput() {
    return this._serverValidationCa.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkSecurityClientTlsPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkSecurityClientTlsPolicyTimeouts) {
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
      sni: cdktf.stringToTerraform(this._sni),
      client_certificate: networkSecurityClientTlsPolicyClientCertificateToTerraform(this._clientCertificate.internalValue),
      server_validation_ca: cdktf.listMapper(networkSecurityClientTlsPolicyServerValidationCaToTerraform, true)(this._serverValidationCa.internalValue),
      timeouts: networkSecurityClientTlsPolicyTimeoutsToTerraform(this._timeouts.internalValue),
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
      sni: {
        value: cdktf.stringToHclTerraform(this._sni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_certificate: {
        value: networkSecurityClientTlsPolicyClientCertificateToHclTerraform(this._clientCertificate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityClientTlsPolicyClientCertificateList",
      },
      server_validation_ca: {
        value: cdktf.listMapperHcl(networkSecurityClientTlsPolicyServerValidationCaToHclTerraform, true)(this._serverValidationCa.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkSecurityClientTlsPolicyServerValidationCaList",
      },
      timeouts: {
        value: networkSecurityClientTlsPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkSecurityClientTlsPolicyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
