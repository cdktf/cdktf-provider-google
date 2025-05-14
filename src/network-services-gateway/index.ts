/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkServicesGatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic.
  * When no address is provided, an IP from the subnetwork is allocated.
  * 
  * This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
  * Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#addresses NetworkServicesGateway#addresses}
  */
  readonly addresses?: string[];
  /**
  * A fully-qualified Certificates URL reference. The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
  * This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#certificate_urls NetworkServicesGateway#certificate_urls}
  */
  readonly certificateUrls?: string[];
  /**
  * When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.
  * If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#delete_swg_autogen_router_on_destroy NetworkServicesGateway#delete_swg_autogen_router_on_destroy}
  */
  readonly deleteSwgAutogenRouterOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * A free-text description of the resource. Max length 1024 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#description NetworkServicesGateway#description}
  */
  readonly description?: string;
  /**
  * Determines if envoy will insert internal debug headers into upstream requests.
  * Other Envoy headers may still be injected.
  * By default, envoy will not insert any debug headers. Possible values: ["NONE", "DEBUG_HEADERS"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#envoy_headers NetworkServicesGateway#envoy_headers}
  */
  readonly envoyHeaders?: string;
  /**
  * A fully-qualified GatewaySecurityPolicy URL reference. Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
  * For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
  * This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#gateway_security_policy NetworkServicesGateway#gateway_security_policy}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly gatewaySecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#ip_version NetworkServicesGateway#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Set of label tags associated with the Gateway resource.
  * 
  * 
  * **Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
  * Please refer to the field 'effective_labels' for all of the labels present on the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#labels NetworkServicesGateway#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The location of the gateway.
  * The default value is 'global'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#location NetworkServicesGateway#location}
  */
  readonly location?: string;
  /**
  * Name of the Gateway resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#name NetworkServicesGateway#name}
  */
  readonly name: string;
  /**
  * The relative resource name identifying the VPC network that is using this configuration.
  * For example: 'projects/* /global/networks/network-1'.
  * 
  * Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#network NetworkServicesGateway#network}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly network?: string;
  /**
  * One or more port numbers (1-65535), on which the Gateway will receive traffic.
  * The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port.
  *  Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#ports NetworkServicesGateway#ports}
  */
  readonly ports: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}
  */
  readonly project?: string;
  /**
  * The routing mode of the Gateway. This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#routing_mode NetworkServicesGateway#routing_mode}
  */
  readonly routingMode?: string;
  /**
  * Immutable. Scope determines how configuration across multiple Gateway instances are merged.
  * The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer.
  * 
  * Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#scope NetworkServicesGateway#scope}
  */
  readonly scope?: string;
  /**
  * A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#server_tls_policy NetworkServicesGateway#server_tls_policy}
  */
  readonly serverTlsPolicy?: string;
  /**
  * The relative resource name identifying the subnetwork in which this SWG is allocated.
  * For example: projects/* /regions/us-central1/subnetworks/network-1.
  * 
  * Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#subnetwork NetworkServicesGateway#subnetwork}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly subnetwork?: string;
  /**
  * Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#type NetworkServicesGateway#type}
  */
  readonly type: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#timeouts NetworkServicesGateway#timeouts}
  */
  readonly timeouts?: NetworkServicesGatewayTimeouts;
}
export interface NetworkServicesGatewayTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#create NetworkServicesGateway#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#update NetworkServicesGateway#update}
  */
  readonly update?: string;
}

export function networkServicesGatewayTimeoutsToTerraform(struct?: NetworkServicesGatewayTimeouts | cdktf.IResolvable): any {
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


export function networkServicesGatewayTimeoutsToHclTerraform(struct?: NetworkServicesGatewayTimeouts | cdktf.IResolvable): any {
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

export class NetworkServicesGatewayTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkServicesGatewayTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: NetworkServicesGatewayTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway google_network_services_gateway}
*/
export class NetworkServicesGateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_network_services_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkServicesGateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkServicesGateway to import
  * @param importFromId The id of the existing NetworkServicesGateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkServicesGateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "google_network_services_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/network_services_gateway google_network_services_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkServicesGatewayConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkServicesGatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'google_network_services_gateway',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '6.35.0',
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
    this._addresses = config.addresses;
    this._certificateUrls = config.certificateUrls;
    this._deleteSwgAutogenRouterOnDestroy = config.deleteSwgAutogenRouterOnDestroy;
    this._description = config.description;
    this._envoyHeaders = config.envoyHeaders;
    this._gatewaySecurityPolicy = config.gatewaySecurityPolicy;
    this._id = config.id;
    this._ipVersion = config.ipVersion;
    this._labels = config.labels;
    this._location = config.location;
    this._name = config.name;
    this._network = config.network;
    this._ports = config.ports;
    this._project = config.project;
    this._routingMode = config.routingMode;
    this._scope = config.scope;
    this._serverTlsPolicy = config.serverTlsPolicy;
    this._subnetwork = config.subnetwork;
    this._type = config.type;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addresses - computed: true, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // certificate_urls - computed: false, optional: true, required: false
  private _certificateUrls?: string[]; 
  public get certificateUrls() {
    return this.getListAttribute('certificate_urls');
  }
  public set certificateUrls(value: string[]) {
    this._certificateUrls = value;
  }
  public resetCertificateUrls() {
    this._certificateUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateUrlsInput() {
    return this._certificateUrls;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // delete_swg_autogen_router_on_destroy - computed: false, optional: true, required: false
  private _deleteSwgAutogenRouterOnDestroy?: boolean | cdktf.IResolvable; 
  public get deleteSwgAutogenRouterOnDestroy() {
    return this.getBooleanAttribute('delete_swg_autogen_router_on_destroy');
  }
  public set deleteSwgAutogenRouterOnDestroy(value: boolean | cdktf.IResolvable) {
    this._deleteSwgAutogenRouterOnDestroy = value;
  }
  public resetDeleteSwgAutogenRouterOnDestroy() {
    this._deleteSwgAutogenRouterOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteSwgAutogenRouterOnDestroyInput() {
    return this._deleteSwgAutogenRouterOnDestroy;
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

  // envoy_headers - computed: false, optional: true, required: false
  private _envoyHeaders?: string; 
  public get envoyHeaders() {
    return this.getStringAttribute('envoy_headers');
  }
  public set envoyHeaders(value: string) {
    this._envoyHeaders = value;
  }
  public resetEnvoyHeaders() {
    this._envoyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envoyHeadersInput() {
    return this._envoyHeaders;
  }

  // gateway_security_policy - computed: false, optional: true, required: false
  private _gatewaySecurityPolicy?: string; 
  public get gatewaySecurityPolicy() {
    return this.getStringAttribute('gateway_security_policy');
  }
  public set gatewaySecurityPolicy(value: string) {
    this._gatewaySecurityPolicy = value;
  }
  public resetGatewaySecurityPolicy() {
    this._gatewaySecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewaySecurityPolicyInput() {
    return this._gatewaySecurityPolicy;
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

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: number[]; 
  public get ports() {
    return this.getNumberListAttribute('ports');
  }
  public set ports(value: number[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
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

  // routing_mode - computed: false, optional: true, required: false
  private _routingMode?: string; 
  public get routingMode() {
    return this.getStringAttribute('routing_mode');
  }
  public set routingMode(value: string) {
    this._routingMode = value;
  }
  public resetRoutingMode() {
    this._routingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingModeInput() {
    return this._routingMode;
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

  // subnetwork - computed: false, optional: true, required: false
  private _subnetwork?: string; 
  public get subnetwork() {
    return this.getStringAttribute('subnetwork');
  }
  public set subnetwork(value: string) {
    this._subnetwork = value;
  }
  public resetSubnetwork() {
    this._subnetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetworkInput() {
    return this._subnetwork;
  }

  // terraform_labels - computed: true, optional: false, required: false
  private _terraformLabels = new cdktf.StringMap(this, "terraform_labels");
  public get terraformLabels() {
    return this._terraformLabels;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NetworkServicesGatewayTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NetworkServicesGatewayTimeouts) {
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
      addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addresses),
      certificate_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._certificateUrls),
      delete_swg_autogen_router_on_destroy: cdktf.booleanToTerraform(this._deleteSwgAutogenRouterOnDestroy),
      description: cdktf.stringToTerraform(this._description),
      envoy_headers: cdktf.stringToTerraform(this._envoyHeaders),
      gateway_security_policy: cdktf.stringToTerraform(this._gatewaySecurityPolicy),
      id: cdktf.stringToTerraform(this._id),
      ip_version: cdktf.stringToTerraform(this._ipVersion),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      ports: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ports),
      project: cdktf.stringToTerraform(this._project),
      routing_mode: cdktf.stringToTerraform(this._routingMode),
      scope: cdktf.stringToTerraform(this._scope),
      server_tls_policy: cdktf.stringToTerraform(this._serverTlsPolicy),
      subnetwork: cdktf.stringToTerraform(this._subnetwork),
      type: cdktf.stringToTerraform(this._type),
      timeouts: networkServicesGatewayTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addresses),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      certificate_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._certificateUrls),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      delete_swg_autogen_router_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._deleteSwgAutogenRouterOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      envoy_headers: {
        value: cdktf.stringToHclTerraform(this._envoyHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_security_policy: {
        value: cdktf.stringToHclTerraform(this._gatewaySecurityPolicy),
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
      ip_version: {
        value: cdktf.stringToHclTerraform(this._ipVersion),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_mode: {
        value: cdktf.stringToHclTerraform(this._routingMode),
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
      server_tls_policy: {
        value: cdktf.stringToHclTerraform(this._serverTlsPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnetwork: {
        value: cdktf.stringToHclTerraform(this._subnetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: networkServicesGatewayTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkServicesGatewayTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
