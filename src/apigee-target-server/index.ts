// https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApigeeTargetServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A human-readable description of this TargetServer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#description ApigeeTargetServer#description}
  */
  readonly description?: string;
  /**
  * The Apigee environment group associated with the Apigee environment,
  * in the format 'organizations/{{org_name}}/environments/{{env_name}}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#env_id ApigeeTargetServer#env_id}
  */
  readonly envId: string;
  /**
  * The host name this target connects to. Value must be a valid hostname as described by RFC-1123.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#host ApigeeTargetServer#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#id ApigeeTargetServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enabling/disabling a TargetServer is useful when TargetServers are used in load balancing configurations, and one or more TargetServers need to taken out of rotation periodically. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#is_enabled ApigeeTargetServer#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * The resource id of this reference. Values must match the regular expression [\w\s-.]+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#name ApigeeTargetServer#name}
  */
  readonly name: string;
  /**
  * The port number this target connects to on the given host. Value must be between 1 and 65535, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#port ApigeeTargetServer#port}
  */
  readonly port: number;
  /**
  * Immutable. The protocol used by this TargetServer. Possible values: ["HTTP", "HTTP2", "GRPC_TARGET", "GRPC", "EXTERNAL_CALLOUT"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#protocol ApigeeTargetServer#protocol}
  */
  readonly protocol?: string;
  /**
  * s_sl_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#s_sl_info ApigeeTargetServer#s_sl_info}
  */
  readonly sSlInfo?: ApigeeTargetServerSSlInfo;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#timeouts ApigeeTargetServer#timeouts}
  */
  readonly timeouts?: ApigeeTargetServerTimeouts;
}
export interface ApigeeTargetServerSSlInfoCommonName {
  /**
  * The TLS Common Name string of the certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#value ApigeeTargetServer#value}
  */
  readonly value?: string;
  /**
  * Indicates whether the cert should be matched against as a wildcard cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#wildcard_match ApigeeTargetServer#wildcard_match}
  */
  readonly wildcardMatch?: boolean | cdktf.IResolvable;
}

export function apigeeTargetServerSSlInfoCommonNameToTerraform(struct?: ApigeeTargetServerSSlInfoCommonNameOutputReference | ApigeeTargetServerSSlInfoCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    wildcard_match: cdktf.booleanToTerraform(struct!.wildcardMatch),
  }
}


export function apigeeTargetServerSSlInfoCommonNameToHclTerraform(struct?: ApigeeTargetServerSSlInfoCommonNameOutputReference | ApigeeTargetServerSSlInfoCommonName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wildcard_match: {
      value: cdktf.booleanToHclTerraform(struct!.wildcardMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeTargetServerSSlInfoCommonNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeTargetServerSSlInfoCommonName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._wildcardMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardMatch = this._wildcardMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeTargetServerSSlInfoCommonName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._value = undefined;
      this._wildcardMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._value = value.value;
      this._wildcardMatch = value.wildcardMatch;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // wildcard_match - computed: false, optional: true, required: false
  private _wildcardMatch?: boolean | cdktf.IResolvable; 
  public get wildcardMatch() {
    return this.getBooleanAttribute('wildcard_match');
  }
  public set wildcardMatch(value: boolean | cdktf.IResolvable) {
    this._wildcardMatch = value;
  }
  public resetWildcardMatch() {
    this._wildcardMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardMatchInput() {
    return this._wildcardMatch;
  }
}
export interface ApigeeTargetServerSSlInfo {
  /**
  * The SSL/TLS cipher suites to be used. For programmable proxies, it must be one of the cipher suite names listed in: http://docs.oracle.com/javase/8/docs/technotes/guides/security/StandardNames.html#ciphersuites. For configurable proxies, it must follow the configuration specified in: https://commondatastorage.googleapis.com/chromium-boringssl-docs/ssl.h.html#Cipher-suite-configuration. This setting has no effect for configurable proxies when negotiating TLS 1.3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#ciphers ApigeeTargetServer#ciphers}
  */
  readonly ciphers?: string[];
  /**
  * Enables two-way TLS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#client_auth_enabled ApigeeTargetServer#client_auth_enabled}
  */
  readonly clientAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enables TLS. If false, neither one-way nor two-way TLS will be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#enabled ApigeeTargetServer#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * If true, Edge ignores TLS certificate errors. Valid when configuring TLS for target servers and target endpoints, and when configuring virtual hosts that use 2-way TLS. When used with a target endpoint/target server, if the backend system uses SNI and returns a cert with a subject Distinguished Name (DN) that does not match the hostname, there is no way to ignore the error and the connection fails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#ignore_validation_errors ApigeeTargetServer#ignore_validation_errors}
  */
  readonly ignoreValidationErrors?: boolean | cdktf.IResolvable;
  /**
  * Required if clientAuthEnabled is true. The resource ID for the alias containing the private key and cert.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#key_alias ApigeeTargetServer#key_alias}
  */
  readonly keyAlias?: string;
  /**
  * Required if clientAuthEnabled is true. The resource ID of the keystore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#key_store ApigeeTargetServer#key_store}
  */
  readonly keyStore?: string;
  /**
  * The TLS versioins to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#protocols ApigeeTargetServer#protocols}
  */
  readonly protocols?: string[];
  /**
  * The resource ID of the truststore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#trust_store ApigeeTargetServer#trust_store}
  */
  readonly trustStore?: string;
  /**
  * common_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#common_name ApigeeTargetServer#common_name}
  */
  readonly commonName?: ApigeeTargetServerSSlInfoCommonName;
}

export function apigeeTargetServerSSlInfoToTerraform(struct?: ApigeeTargetServerSSlInfoOutputReference | ApigeeTargetServerSSlInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ciphers),
    client_auth_enabled: cdktf.booleanToTerraform(struct!.clientAuthEnabled),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    ignore_validation_errors: cdktf.booleanToTerraform(struct!.ignoreValidationErrors),
    key_alias: cdktf.stringToTerraform(struct!.keyAlias),
    key_store: cdktf.stringToTerraform(struct!.keyStore),
    protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.protocols),
    trust_store: cdktf.stringToTerraform(struct!.trustStore),
    common_name: apigeeTargetServerSSlInfoCommonNameToTerraform(struct!.commonName),
  }
}


export function apigeeTargetServerSSlInfoToHclTerraform(struct?: ApigeeTargetServerSSlInfoOutputReference | ApigeeTargetServerSSlInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ciphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    client_auth_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.clientAuthEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_validation_errors: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreValidationErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    key_alias: {
      value: cdktf.stringToHclTerraform(struct!.keyAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store: {
      value: cdktf.stringToHclTerraform(struct!.keyStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.protocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    trust_store: {
      value: cdktf.stringToHclTerraform(struct!.trustStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    common_name: {
      value: apigeeTargetServerSSlInfoCommonNameToHclTerraform(struct!.commonName),
      isBlock: true,
      type: "list",
      storageClassType: "ApigeeTargetServerSSlInfoCommonNameList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApigeeTargetServerSSlInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApigeeTargetServerSSlInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ciphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.ciphers = this._ciphers;
    }
    if (this._clientAuthEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthEnabled = this._clientAuthEnabled;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._ignoreValidationErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreValidationErrors = this._ignoreValidationErrors;
    }
    if (this._keyAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyAlias = this._keyAlias;
    }
    if (this._keyStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStore = this._keyStore;
    }
    if (this._protocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocols = this._protocols;
    }
    if (this._trustStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStore = this._trustStore;
    }
    if (this._commonName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonName = this._commonName?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApigeeTargetServerSSlInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ciphers = undefined;
      this._clientAuthEnabled = undefined;
      this._enabled = undefined;
      this._ignoreValidationErrors = undefined;
      this._keyAlias = undefined;
      this._keyStore = undefined;
      this._protocols = undefined;
      this._trustStore = undefined;
      this._commonName.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ciphers = value.ciphers;
      this._clientAuthEnabled = value.clientAuthEnabled;
      this._enabled = value.enabled;
      this._ignoreValidationErrors = value.ignoreValidationErrors;
      this._keyAlias = value.keyAlias;
      this._keyStore = value.keyStore;
      this._protocols = value.protocols;
      this._trustStore = value.trustStore;
      this._commonName.internalValue = value.commonName;
    }
  }

  // ciphers - computed: false, optional: true, required: false
  private _ciphers?: string[]; 
  public get ciphers() {
    return this.getListAttribute('ciphers');
  }
  public set ciphers(value: string[]) {
    this._ciphers = value;
  }
  public resetCiphers() {
    this._ciphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphersInput() {
    return this._ciphers;
  }

  // client_auth_enabled - computed: false, optional: true, required: false
  private _clientAuthEnabled?: boolean | cdktf.IResolvable; 
  public get clientAuthEnabled() {
    return this.getBooleanAttribute('client_auth_enabled');
  }
  public set clientAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._clientAuthEnabled = value;
  }
  public resetClientAuthEnabled() {
    this._clientAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthEnabledInput() {
    return this._clientAuthEnabled;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // ignore_validation_errors - computed: false, optional: true, required: false
  private _ignoreValidationErrors?: boolean | cdktf.IResolvable; 
  public get ignoreValidationErrors() {
    return this.getBooleanAttribute('ignore_validation_errors');
  }
  public set ignoreValidationErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreValidationErrors = value;
  }
  public resetIgnoreValidationErrors() {
    this._ignoreValidationErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreValidationErrorsInput() {
    return this._ignoreValidationErrors;
  }

  // key_alias - computed: false, optional: true, required: false
  private _keyAlias?: string; 
  public get keyAlias() {
    return this.getStringAttribute('key_alias');
  }
  public set keyAlias(value: string) {
    this._keyAlias = value;
  }
  public resetKeyAlias() {
    this._keyAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAliasInput() {
    return this._keyAlias;
  }

  // key_store - computed: false, optional: true, required: false
  private _keyStore?: string; 
  public get keyStore() {
    return this.getStringAttribute('key_store');
  }
  public set keyStore(value: string) {
    this._keyStore = value;
  }
  public resetKeyStore() {
    this._keyStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreInput() {
    return this._keyStore;
  }

  // protocols - computed: false, optional: true, required: false
  private _protocols?: string[]; 
  public get protocols() {
    return this.getListAttribute('protocols');
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  public resetProtocols() {
    this._protocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // trust_store - computed: false, optional: true, required: false
  private _trustStore?: string; 
  public get trustStore() {
    return this.getStringAttribute('trust_store');
  }
  public set trustStore(value: string) {
    this._trustStore = value;
  }
  public resetTrustStore() {
    this._trustStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreInput() {
    return this._trustStore;
  }

  // common_name - computed: false, optional: true, required: false
  private _commonName = new ApigeeTargetServerSSlInfoCommonNameOutputReference(this, "common_name");
  public get commonName() {
    return this._commonName;
  }
  public putCommonName(value: ApigeeTargetServerSSlInfoCommonName) {
    this._commonName.internalValue = value;
  }
  public resetCommonName() {
    this._commonName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonNameInput() {
    return this._commonName.internalValue;
  }
}
export interface ApigeeTargetServerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#create ApigeeTargetServer#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#delete ApigeeTargetServer#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#update ApigeeTargetServer#update}
  */
  readonly update?: string;
}

export function apigeeTargetServerTimeoutsToTerraform(struct?: ApigeeTargetServerTimeouts | cdktf.IResolvable): any {
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


export function apigeeTargetServerTimeoutsToHclTerraform(struct?: ApigeeTargetServerTimeouts | cdktf.IResolvable): any {
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

export class ApigeeTargetServerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApigeeTargetServerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApigeeTargetServerTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server google_apigee_target_server}
*/
export class ApigeeTargetServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_apigee_target_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApigeeTargetServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApigeeTargetServer to import
  * @param importFromId The id of the existing ApigeeTargetServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApigeeTargetServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_apigee_target_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.25.0/docs/resources/apigee_target_server google_apigee_target_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApigeeTargetServerConfig
  */
  public constructor(scope: Construct, id: string, config: ApigeeTargetServerConfig) {
    super(scope, id, {
      terraformResourceType: 'google_apigee_target_server',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.25.0',
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
    this._description = config.description;
    this._envId = config.envId;
    this._host = config.host;
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._port = config.port;
    this._protocol = config.protocol;
    this._sSlInfo.internalValue = config.sSlInfo;
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

  // env_id - computed: false, optional: false, required: true
  private _envId?: string; 
  public get envId() {
    return this.getStringAttribute('env_id');
  }
  public set envId(value: string) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // s_sl_info - computed: false, optional: true, required: false
  private _sSlInfo = new ApigeeTargetServerSSlInfoOutputReference(this, "s_sl_info");
  public get sSlInfo() {
    return this._sSlInfo;
  }
  public putSSlInfo(value: ApigeeTargetServerSSlInfo) {
    this._sSlInfo.internalValue = value;
  }
  public resetSSlInfo() {
    this._sSlInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sSlInfoInput() {
    return this._sSlInfo.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApigeeTargetServerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApigeeTargetServerTimeouts) {
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
      env_id: cdktf.stringToTerraform(this._envId),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      s_sl_info: apigeeTargetServerSSlInfoToTerraform(this._sSlInfo.internalValue),
      timeouts: apigeeTargetServerTimeoutsToTerraform(this._timeouts.internalValue),
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
      env_id: {
        value: cdktf.stringToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s_sl_info: {
        value: apigeeTargetServerSSlInfoToHclTerraform(this._sSlInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApigeeTargetServerSSlInfoList",
      },
      timeouts: {
        value: apigeeTargetServerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApigeeTargetServerTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
