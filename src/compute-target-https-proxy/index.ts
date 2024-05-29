/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeTargetHttpsProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.
  * Currently, you may specify up to 15 certificates. Certificate manager certificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
  * sslCertificates and certificateManagerCertificates fields can not be defined together.
  * Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#certificate_manager_certificates ComputeTargetHttpsProxy#certificate_manager_certificates}
  */
  readonly certificateManagerCertificates?: string[];
  /**
  * A reference to the CertificateMap resource uri that identifies a certificate map
  * associated with the given target proxy. This field can only be set for global target proxies.
  * Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificateMaps/{resourceName}'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#certificate_map ComputeTargetHttpsProxy#certificate_map}
  */
  readonly certificateMap?: string;
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#description ComputeTargetHttpsProxy#description}
  */
  readonly description?: string;
  /**
  * Specifies how long to keep a connection open, after completing a response,
  * while there is no matching traffic (in seconds). If an HTTP keepalive is
  * not specified, a default value (610 seconds) will be used. For Global
  * external HTTP(S) load balancer, the minimum allowed value is 5 seconds and
  * the maximum allowed value is 1200 seconds. For Global external HTTP(S)
  * load balancer (classic), this option is not available publicly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#http_keep_alive_timeout_sec ComputeTargetHttpsProxy#http_keep_alive_timeout_sec}
  */
  readonly httpKeepAliveTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#id ComputeTargetHttpsProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the resource. Provided by the client when the resource is
  * created. The name must be 1-63 characters long, and comply with
  * RFC1035. Specifically, the name must be 1-63 characters long and match
  * the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means the
  * first character must be a lowercase letter, and all following
  * characters must be a dash, lowercase letter, or digit, except the last
  * character, which cannot be a dash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#name ComputeTargetHttpsProxy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#project ComputeTargetHttpsProxy#project}
  */
  readonly project?: string;
  /**
  * This field only applies when the forwarding rule that references
  * this target proxy has a loadBalancingScheme set to INTERNAL_SELF_MANAGED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#proxy_bind ComputeTargetHttpsProxy#proxy_bind}
  */
  readonly proxyBind?: boolean | cdktf.IResolvable;
  /**
  * Specifies the QUIC override policy for this resource. This determines
  * whether the load balancer will attempt to negotiate QUIC with clients
  * or not. Can specify one of NONE, ENABLE, or DISABLE. If NONE is
  * specified, Google manages whether QUIC is used. Default value: "NONE" Possible values: ["NONE", "ENABLE", "DISABLE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#quic_override ComputeTargetHttpsProxy#quic_override}
  */
  readonly quicOverride?: string;
  /**
  * A URL referring to a networksecurity.ServerTlsPolicy
  * resource that describes how the proxy should authenticate inbound
  * traffic. serverTlsPolicy only applies to a global TargetHttpsProxy
  * attached to globalForwardingRules with the loadBalancingScheme
  * set to INTERNAL_SELF_MANAGED or EXTERNAL or EXTERNAL_MANAGED.
  * For details which ServerTlsPolicy resources are accepted with
  * INTERNAL_SELF_MANAGED and which with EXTERNAL, EXTERNAL_MANAGED
  * loadBalancingScheme consult ServerTlsPolicy documentation.
  * If left blank, communications are not encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#server_tls_policy ComputeTargetHttpsProxy#server_tls_policy}
  */
  readonly serverTlsPolicy?: string;
  /**
  * URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
  * Currently, you may specify up to 15 SSL certificates. sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
  * sslCertificates and certificateManagerCertificates can not be defined together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#ssl_certificates ComputeTargetHttpsProxy#ssl_certificates}
  */
  readonly sslCertificates?: string[];
  /**
  * A reference to the SslPolicy resource that will be associated with
  * the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
  * resource will not have any SSL policy configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#ssl_policy ComputeTargetHttpsProxy#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * A reference to the UrlMap resource that defines the mapping from URL
  * to the BackendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#url_map ComputeTargetHttpsProxy#url_map}
  */
  readonly urlMap: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#timeouts ComputeTargetHttpsProxy#timeouts}
  */
  readonly timeouts?: ComputeTargetHttpsProxyTimeouts;
}
export interface ComputeTargetHttpsProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#create ComputeTargetHttpsProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#delete ComputeTargetHttpsProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#update ComputeTargetHttpsProxy#update}
  */
  readonly update?: string;
}

export function computeTargetHttpsProxyTimeoutsToTerraform(struct?: ComputeTargetHttpsProxyTimeouts | cdktf.IResolvable): any {
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


export function computeTargetHttpsProxyTimeoutsToHclTerraform(struct?: ComputeTargetHttpsProxyTimeouts | cdktf.IResolvable): any {
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

export class ComputeTargetHttpsProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeTargetHttpsProxyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeTargetHttpsProxyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy google_compute_target_https_proxy}
*/
export class ComputeTargetHttpsProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_target_https_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeTargetHttpsProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeTargetHttpsProxy to import
  * @param importFromId The id of the existing ComputeTargetHttpsProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeTargetHttpsProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_target_https_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/5.31.1/docs/resources/compute_target_https_proxy google_compute_target_https_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeTargetHttpsProxyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeTargetHttpsProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_target_https_proxy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '5.31.1',
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
    this._certificateManagerCertificates = config.certificateManagerCertificates;
    this._certificateMap = config.certificateMap;
    this._description = config.description;
    this._httpKeepAliveTimeoutSec = config.httpKeepAliveTimeoutSec;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._proxyBind = config.proxyBind;
    this._quicOverride = config.quicOverride;
    this._serverTlsPolicy = config.serverTlsPolicy;
    this._sslCertificates = config.sslCertificates;
    this._sslPolicy = config.sslPolicy;
    this._urlMap = config.urlMap;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // certificate_manager_certificates - computed: false, optional: true, required: false
  private _certificateManagerCertificates?: string[]; 
  public get certificateManagerCertificates() {
    return this.getListAttribute('certificate_manager_certificates');
  }
  public set certificateManagerCertificates(value: string[]) {
    this._certificateManagerCertificates = value;
  }
  public resetCertificateManagerCertificates() {
    this._certificateManagerCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateManagerCertificatesInput() {
    return this._certificateManagerCertificates;
  }

  // certificate_map - computed: false, optional: true, required: false
  private _certificateMap?: string; 
  public get certificateMap() {
    return this.getStringAttribute('certificate_map');
  }
  public set certificateMap(value: string) {
    this._certificateMap = value;
  }
  public resetCertificateMap() {
    this._certificateMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateMapInput() {
    return this._certificateMap;
  }

  // creation_timestamp - computed: true, optional: false, required: false
  public get creationTimestamp() {
    return this.getStringAttribute('creation_timestamp');
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

  // http_keep_alive_timeout_sec - computed: false, optional: true, required: false
  private _httpKeepAliveTimeoutSec?: number; 
  public get httpKeepAliveTimeoutSec() {
    return this.getNumberAttribute('http_keep_alive_timeout_sec');
  }
  public set httpKeepAliveTimeoutSec(value: number) {
    this._httpKeepAliveTimeoutSec = value;
  }
  public resetHttpKeepAliveTimeoutSec() {
    this._httpKeepAliveTimeoutSec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKeepAliveTimeoutSecInput() {
    return this._httpKeepAliveTimeoutSec;
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

  // proxy_bind - computed: true, optional: true, required: false
  private _proxyBind?: boolean | cdktf.IResolvable; 
  public get proxyBind() {
    return this.getBooleanAttribute('proxy_bind');
  }
  public set proxyBind(value: boolean | cdktf.IResolvable) {
    this._proxyBind = value;
  }
  public resetProxyBind() {
    this._proxyBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyBindInput() {
    return this._proxyBind;
  }

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getNumberAttribute('proxy_id');
  }

  // quic_override - computed: false, optional: true, required: false
  private _quicOverride?: string; 
  public get quicOverride() {
    return this.getStringAttribute('quic_override');
  }
  public set quicOverride(value: string) {
    this._quicOverride = value;
  }
  public resetQuicOverride() {
    this._quicOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicOverrideInput() {
    return this._quicOverride;
  }

  // self_link - computed: true, optional: false, required: false
  public get selfLink() {
    return this.getStringAttribute('self_link');
  }

  // server_tls_policy - computed: false, optional: true, required: false
  private _serverTlsPolicy?: string; 
  public get serverTlsPolicy() {
    return this.getStringAttribute('server_tls_policy');
  }
  public set serverTlsPolicy(value: string) {
    this._serverTlsPolicy = value;
  }
  public resetServerTlsPolicy() {
    this._serverTlsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTlsPolicyInput() {
    return this._serverTlsPolicy;
  }

  // ssl_certificates - computed: false, optional: true, required: false
  private _sslCertificates?: string[]; 
  public get sslCertificates() {
    return this.getListAttribute('ssl_certificates');
  }
  public set sslCertificates(value: string[]) {
    this._sslCertificates = value;
  }
  public resetSslCertificates() {
    this._sslCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificatesInput() {
    return this._sslCertificates;
  }

  // ssl_policy - computed: false, optional: true, required: false
  private _sslPolicy?: string; 
  public get sslPolicy() {
    return this.getStringAttribute('ssl_policy');
  }
  public set sslPolicy(value: string) {
    this._sslPolicy = value;
  }
  public resetSslPolicy() {
    this._sslPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslPolicyInput() {
    return this._sslPolicy;
  }

  // url_map - computed: false, optional: false, required: true
  private _urlMap?: string; 
  public get urlMap() {
    return this.getStringAttribute('url_map');
  }
  public set urlMap(value: string) {
    this._urlMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlMapInput() {
    return this._urlMap;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ComputeTargetHttpsProxyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeTargetHttpsProxyTimeouts) {
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
      certificate_manager_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateManagerCertificates),
      certificate_map: cdktf.stringToTerraform(this._certificateMap),
      description: cdktf.stringToTerraform(this._description),
      http_keep_alive_timeout_sec: cdktf.numberToTerraform(this._httpKeepAliveTimeoutSec),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      proxy_bind: cdktf.booleanToTerraform(this._proxyBind),
      quic_override: cdktf.stringToTerraform(this._quicOverride),
      server_tls_policy: cdktf.stringToTerraform(this._serverTlsPolicy),
      ssl_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCertificates),
      ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
      url_map: cdktf.stringToTerraform(this._urlMap),
      timeouts: computeTargetHttpsProxyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certificate_manager_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateManagerCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      certificate_map: {
        value: cdktf.stringToHclTerraform(this._certificateMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_keep_alive_timeout_sec: {
        value: cdktf.numberToHclTerraform(this._httpKeepAliveTimeoutSec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      proxy_bind: {
        value: cdktf.booleanToHclTerraform(this._proxyBind),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      quic_override: {
        value: cdktf.stringToHclTerraform(this._quicOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_tls_policy: {
        value: cdktf.stringToHclTerraform(this._serverTlsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_certificates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sslCertificates),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_policy: {
        value: cdktf.stringToHclTerraform(this._sslPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url_map: {
        value: cdktf.stringToHclTerraform(this._urlMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: computeTargetHttpsProxyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeTargetHttpsProxyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
