/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ComputeRegionTargetHttpsProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * URLs to certificate manager certificate resources that are used to authenticate connections between users and the load balancer.
  * sslCertificates and certificateManagerCertificates can't be defined together.
  * Accepted format is '//certificatemanager.googleapis.com/projects/{project}/locations/{location}/certificates/{resourceName}' or just the self_link 'projects/{project}/locations/{location}/certificates/{resourceName}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#certificate_manager_certificates ComputeRegionTargetHttpsProxy#certificate_manager_certificates}
  */
  readonly certificateManagerCertificates?: string[];
  /**
  * An optional description of this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#description ComputeRegionTargetHttpsProxy#description}
  */
  readonly description?: string;
  /**
  * Specifies how long to keep a connection open, after completing a response,
  * while there is no matching traffic (in seconds). If an HTTP keepalive is
  * not specified, a default value (600 seconds) will be used. For Regioanl
  * HTTP(S) load balancer, the minimum allowed value is 5 seconds and the
  * maximum allowed value is 600 seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#http_keep_alive_timeout_sec ComputeRegionTargetHttpsProxy#http_keep_alive_timeout_sec}
  */
  readonly httpKeepAliveTimeoutSec?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#id ComputeRegionTargetHttpsProxy#id}
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
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#name ComputeRegionTargetHttpsProxy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#project ComputeRegionTargetHttpsProxy#project}
  */
  readonly project?: string;
  /**
  * The Region in which the created target https proxy should reside.
  * If it is not provided, the provider region is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#region ComputeRegionTargetHttpsProxy#region}
  */
  readonly region?: string;
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
  * If you remove this field from your configuration at the same time as
  * deleting or recreating a referenced ServerTlsPolicy resource, you will
  * receive a resourceInUseByAnotherResource error. Use lifecycle.create_before_destroy
  * within the ServerTlsPolicy resource to avoid this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#server_tls_policy ComputeRegionTargetHttpsProxy#server_tls_policy}
  */
  readonly serverTlsPolicy?: string;
  /**
  * URLs to SslCertificate resources that are used to authenticate connections between users and the load balancer.
  * At least one SSL certificate must be specified. Currently, you may specify up to 15 SSL certificates.
  * sslCertificates do not apply when the load balancing scheme is set to INTERNAL_SELF_MANAGED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#ssl_certificates ComputeRegionTargetHttpsProxy#ssl_certificates}
  */
  readonly sslCertificates?: string[];
  /**
  * A reference to the Region SslPolicy resource that will be associated with
  * the TargetHttpsProxy resource. If not set, the TargetHttpsProxy
  * resource will not have any SSL policy configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#ssl_policy ComputeRegionTargetHttpsProxy#ssl_policy}
  */
  readonly sslPolicy?: string;
  /**
  * A reference to the RegionUrlMap resource that defines the mapping from URL
  * to the RegionBackendService.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#url_map ComputeRegionTargetHttpsProxy#url_map}
  */
  readonly urlMap: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#timeouts ComputeRegionTargetHttpsProxy#timeouts}
  */
  readonly timeouts?: ComputeRegionTargetHttpsProxyTimeouts;
}
export interface ComputeRegionTargetHttpsProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#create ComputeRegionTargetHttpsProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#delete ComputeRegionTargetHttpsProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#update ComputeRegionTargetHttpsProxy#update}
  */
  readonly update?: string;
}

export function computeRegionTargetHttpsProxyTimeoutsToTerraform(struct?: ComputeRegionTargetHttpsProxyTimeouts | cdktf.IResolvable): any {
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


export function computeRegionTargetHttpsProxyTimeoutsToHclTerraform(struct?: ComputeRegionTargetHttpsProxyTimeouts | cdktf.IResolvable): any {
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

export class ComputeRegionTargetHttpsProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ComputeRegionTargetHttpsProxyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ComputeRegionTargetHttpsProxyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy google_compute_region_target_https_proxy}
*/
export class ComputeRegionTargetHttpsProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_compute_region_target_https_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ComputeRegionTargetHttpsProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ComputeRegionTargetHttpsProxy to import
  * @param importFromId The id of the existing ComputeRegionTargetHttpsProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ComputeRegionTargetHttpsProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_compute_region_target_https_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.47.0/docs/resources/compute_region_target_https_proxy google_compute_region_target_https_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ComputeRegionTargetHttpsProxyConfig
  */
  public constructor(scope: Construct, id: string, config: ComputeRegionTargetHttpsProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'google_compute_region_target_https_proxy',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.47.0',
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
    this._certificateManagerCertificates = config.certificateManagerCertificates;
    this._description = config.description;
    this._httpKeepAliveTimeoutSec = config.httpKeepAliveTimeoutSec;
    this._id = config.id;
    this._name = config.name;
    this._project = config.project;
    this._region = config.region;
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

  // proxy_id - computed: true, optional: false, required: false
  public get proxyId() {
    return this.getNumberAttribute('proxy_id');
  }

  // region - computed: true, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
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
  private _timeouts = new ComputeRegionTargetHttpsProxyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ComputeRegionTargetHttpsProxyTimeouts) {
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
      description: cdktf.stringToTerraform(this._description),
      http_keep_alive_timeout_sec: cdktf.numberToTerraform(this._httpKeepAliveTimeoutSec),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      server_tls_policy: cdktf.stringToTerraform(this._serverTlsPolicy),
      ssl_certificates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sslCertificates),
      ssl_policy: cdktf.stringToTerraform(this._sslPolicy),
      url_map: cdktf.stringToTerraform(this._urlMap),
      timeouts: computeRegionTargetHttpsProxyTimeoutsToTerraform(this._timeouts.internalValue),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
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
        value: computeRegionTargetHttpsProxyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ComputeRegionTargetHttpsProxyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
