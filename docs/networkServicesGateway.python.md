# `networkServicesGateway` Submodule <a name="`networkServicesGateway` Submodule" id="@cdktf/provider-google.networkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesGateway <a name="NetworkServicesGateway" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGateway(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ports: typing.List[typing.Union[int, float]],
  type: str,
  addresses: typing.List[str] = None,
  certificate_urls: typing.List[str] = None,
  delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  envoy_headers: str = None,
  gateway_security_policy: str = None,
  id: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  network: str = None,
  project: str = None,
  routing_mode: str = None,
  scope: str = None,
  server_tls_policy: str = None,
  subnetwork: str = None,
  timeouts: NetworkServicesGatewayTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.name">name</a></code> | <code>str</code> | Name of the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.type">type</a></code> | <code>str</code> | Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.addresses">addresses</a></code> | <code>typing.List[str]</code> | Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.certificateUrls">certificate_urls</a></code> | <code>typing.List[str]</code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.deleteSwgAutogenRouterOnDestroy">delete_swg_autogen_router_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.envoyHeaders">envoy_headers</a></code> | <code>str</code> | Determines if envoy will insert internal debug headers into upstream requests. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.network">network</a></code> | <code>str</code> | The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.routingMode">routing_mode</a></code> | <code>str</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>str</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.name"></a>

- *Type:* str

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#name NetworkServicesGateway#name}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ports"></a>

- *Type:* typing.List[typing.Union[int, float]]

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#ports NetworkServicesGateway#ports}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.type"></a>

- *Type:* str

Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#type NetworkServicesGateway#type}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.addresses"></a>

- *Type:* typing.List[str]

Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic.

When no address is provided, an IP from the subnetwork is allocated.

This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#addresses NetworkServicesGateway#addresses}

---

##### `certificate_urls`<sup>Optional</sup> <a name="certificate_urls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.certificateUrls"></a>

- *Type:* typing.List[str]

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#certificate_urls NetworkServicesGateway#certificate_urls}

---

##### `delete_swg_autogen_router_on_destroy`<sup>Optional</sup> <a name="delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.deleteSwgAutogenRouterOnDestroy"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#delete_swg_autogen_router_on_destroy NetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.description"></a>

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#description NetworkServicesGateway#description}

---

##### `envoy_headers`<sup>Optional</sup> <a name="envoy_headers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.envoyHeaders"></a>

- *Type:* str

Determines if envoy will insert internal debug headers into upstream requests.

Other Envoy headers may still be injected.
By default, envoy will not insert any debug headers. Possible values: ["NONE", "DEBUG_HEADERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#envoy_headers NetworkServicesGateway#envoy_headers}

---

##### `gateway_security_policy`<sup>Optional</sup> <a name="gateway_security_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.gatewaySecurityPolicy"></a>

- *Type:* str

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#gateway_security_policy NetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ipVersion"></a>

- *Type:* str

The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#ip_version NetworkServicesGateway#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#labels NetworkServicesGateway#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.location"></a>

- *Type:* str

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#location NetworkServicesGateway#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.network"></a>

- *Type:* str

The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#network NetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}.

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.routingMode"></a>

- *Type:* str

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#routing_mode NetworkServicesGateway#routing_mode}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* str

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer.

Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#scope NetworkServicesGateway#scope}

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.serverTlsPolicy"></a>

- *Type:* str

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#server_tls_policy NetworkServicesGateway#server_tls_policy}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.subnetwork"></a>

- *Type:* str

The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#subnetwork NetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#timeouts NetworkServicesGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetAddresses">reset_addresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetCertificateUrls">reset_certificate_urls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy">reset_delete_swg_autogen_router_on_destroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetEnvoyHeaders">reset_envoy_headers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetGatewaySecurityPolicy">reset_gateway_security_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetIpVersion">reset_ip_version</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetNetwork">reset_network</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetRoutingMode">reset_routing_mode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetScope">reset_scope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetServerTlsPolicy">reset_server_tls_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetSubnetwork">reset_subnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#create NetworkServicesGateway#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#update NetworkServicesGateway#update}.

---

##### `reset_addresses` <a name="reset_addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetAddresses"></a>

```python
def reset_addresses() -> None
```

##### `reset_certificate_urls` <a name="reset_certificate_urls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetCertificateUrls"></a>

```python
def reset_certificate_urls() -> None
```

##### `reset_delete_swg_autogen_router_on_destroy` <a name="reset_delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy"></a>

```python
def reset_delete_swg_autogen_router_on_destroy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_envoy_headers` <a name="reset_envoy_headers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetEnvoyHeaders"></a>

```python
def reset_envoy_headers() -> None
```

##### `reset_gateway_security_policy` <a name="reset_gateway_security_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetGatewaySecurityPolicy"></a>

```python
def reset_gateway_security_policy() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ip_version` <a name="reset_ip_version" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetIpVersion"></a>

```python
def reset_ip_version() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_network` <a name="reset_network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetNetwork"></a>

```python
def reset_network() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_routing_mode` <a name="reset_routing_mode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetRoutingMode"></a>

```python
def reset_routing_mode() -> None
```

##### `reset_scope` <a name="reset_scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetScope"></a>

```python
def reset_scope() -> None
```

##### `reset_server_tls_policy` <a name="reset_server_tls_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetServerTlsPolicy"></a>

```python
def reset_server_tls_policy() -> None
```

##### `reset_subnetwork` <a name="reset_subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetSubnetwork"></a>

```python
def reset_subnetwork() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a NetworkServicesGateway resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGateway.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a NetworkServicesGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the NetworkServicesGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing NetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.selfLink">self_link</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference">NetworkServicesGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addressesInput">addresses_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrlsInput">certificate_urls_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput">delete_swg_autogen_router_on_destroy_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeadersInput">envoy_headers_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicyInput">gateway_security_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersionInput">ip_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.networkInput">network_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.portsInput">ports_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingModeInput">routing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scopeInput">scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicyInput">server_tls_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetworkInput">subnetwork_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrls">certificate_urls</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">delete_swg_autogen_router_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeaders">envoy_headers</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersion">ip_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.network">network</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingMode">routing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scope">scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetwork">subnetwork</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.type">type</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `self_link`<sup>Required</sup> <a name="self_link" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.selfLink"></a>

```python
self_link: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeouts"></a>

```python
timeouts: NetworkServicesGatewayTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference">NetworkServicesGatewayTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `addresses_input`<sup>Optional</sup> <a name="addresses_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addressesInput"></a>

```python
addresses_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_urls_input`<sup>Optional</sup> <a name="certificate_urls_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrlsInput"></a>

```python
certificate_urls_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delete_swg_autogen_router_on_destroy_input`<sup>Optional</sup> <a name="delete_swg_autogen_router_on_destroy_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput"></a>

```python
delete_swg_autogen_router_on_destroy_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `envoy_headers_input`<sup>Optional</sup> <a name="envoy_headers_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeadersInput"></a>

```python
envoy_headers_input: str
```

- *Type:* str

---

##### `gateway_security_policy_input`<sup>Optional</sup> <a name="gateway_security_policy_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicyInput"></a>

```python
gateway_security_policy_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ip_version_input`<sup>Optional</sup> <a name="ip_version_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersionInput"></a>

```python
ip_version_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `network_input`<sup>Optional</sup> <a name="network_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.networkInput"></a>

```python
network_input: str
```

- *Type:* str

---

##### `ports_input`<sup>Optional</sup> <a name="ports_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.portsInput"></a>

```python
ports_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `routing_mode_input`<sup>Optional</sup> <a name="routing_mode_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingModeInput"></a>

```python
routing_mode_input: str
```

- *Type:* str

---

##### `scope_input`<sup>Optional</sup> <a name="scope_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scopeInput"></a>

```python
scope_input: str
```

- *Type:* str

---

##### `server_tls_policy_input`<sup>Optional</sup> <a name="server_tls_policy_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicyInput"></a>

```python
server_tls_policy_input: str
```

- *Type:* str

---

##### `subnetwork_input`<sup>Optional</sup> <a name="subnetwork_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetworkInput"></a>

```python
subnetwork_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, NetworkServicesGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `certificate_urls`<sup>Required</sup> <a name="certificate_urls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrls"></a>

```python
certificate_urls: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `delete_swg_autogen_router_on_destroy`<sup>Required</sup> <a name="delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```python
delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `envoy_headers`<sup>Required</sup> <a name="envoy_headers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeaders"></a>

```python
envoy_headers: str
```

- *Type:* str

---

##### `gateway_security_policy`<sup>Required</sup> <a name="gateway_security_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```python
gateway_security_policy: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_version`<sup>Required</sup> <a name="ip_version" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.network"></a>

```python
network: str
```

- *Type:* str

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `routing_mode`<sup>Required</sup> <a name="routing_mode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scope"></a>

```python
scope: str
```

- *Type:* str

---

##### `server_tls_policy`<sup>Required</sup> <a name="server_tls_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.type"></a>

```python
type: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesGatewayConfig <a name="NetworkServicesGatewayConfig" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGatewayConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  name: str,
  ports: typing.List[typing.Union[int, float]],
  type: str,
  addresses: typing.List[str] = None,
  certificate_urls: typing.List[str] = None,
  delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable] = None,
  description: str = None,
  envoy_headers: str = None,
  gateway_security_policy: str = None,
  id: str = None,
  ip_version: str = None,
  labels: typing.Mapping[str] = None,
  location: str = None,
  network: str = None,
  project: str = None,
  routing_mode: str = None,
  scope: str = None,
  server_tls_policy: str = None,
  subnetwork: str = None,
  timeouts: NetworkServicesGatewayTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.name">name</a></code> | <code>str</code> | Name of the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ports">ports</a></code> | <code>typing.List[typing.Union[int, float]]</code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.type">type</a></code> | <code>str</code> | Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.addresses">addresses</a></code> | <code>typing.List[str]</code> | Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.certificateUrls">certificate_urls</a></code> | <code>typing.List[str]</code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy">delete_swg_autogen_router_on_destroy</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.description">description</a></code> | <code>str</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.envoyHeaders">envoy_headers</a></code> | <code>str</code> | Determines if envoy will insert internal debug headers into upstream requests. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.gatewaySecurityPolicy">gateway_security_policy</a></code> | <code>str</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ipVersion">ip_version</a></code> | <code>str</code> | The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.location">location</a></code> | <code>str</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.network">network</a></code> | <code>str</code> | The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.routingMode">routing_mode</a></code> | <code>str</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.scope">scope</a></code> | <code>str</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.serverTlsPolicy">server_tls_policy</a></code> | <code>str</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.subnetwork">subnetwork</a></code> | <code>str</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.name"></a>

```python
name: str
```

- *Type:* str

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#name NetworkServicesGateway#name}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ports"></a>

```python
ports: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#ports NetworkServicesGateway#ports}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#type NetworkServicesGateway#type}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.addresses"></a>

```python
addresses: typing.List[str]
```

- *Type:* typing.List[str]

Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic.

When no address is provided, an IP from the subnetwork is allocated.

This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#addresses NetworkServicesGateway#addresses}

---

##### `certificate_urls`<sup>Optional</sup> <a name="certificate_urls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.certificateUrls"></a>

```python
certificate_urls: typing.List[str]
```

- *Type:* typing.List[str]

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#certificate_urls NetworkServicesGateway#certificate_urls}

---

##### `delete_swg_autogen_router_on_destroy`<sup>Optional</sup> <a name="delete_swg_autogen_router_on_destroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy"></a>

```python
delete_swg_autogen_router_on_destroy: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#delete_swg_autogen_router_on_destroy NetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.description"></a>

```python
description: str
```

- *Type:* str

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#description NetworkServicesGateway#description}

---

##### `envoy_headers`<sup>Optional</sup> <a name="envoy_headers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.envoyHeaders"></a>

```python
envoy_headers: str
```

- *Type:* str

Determines if envoy will insert internal debug headers into upstream requests.

Other Envoy headers may still be injected.
By default, envoy will not insert any debug headers. Possible values: ["NONE", "DEBUG_HEADERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#envoy_headers NetworkServicesGateway#envoy_headers}

---

##### `gateway_security_policy`<sup>Optional</sup> <a name="gateway_security_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.gatewaySecurityPolicy"></a>

```python
gateway_security_policy: str
```

- *Type:* str

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#gateway_security_policy NetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ip_version`<sup>Optional</sup> <a name="ip_version" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ipVersion"></a>

```python
ip_version: str
```

- *Type:* str

The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#ip_version NetworkServicesGateway#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#labels NetworkServicesGateway#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#location NetworkServicesGateway#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.network"></a>

```python
network: str
```

- *Type:* str

The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#network NetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}.

---

##### `routing_mode`<sup>Optional</sup> <a name="routing_mode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.routingMode"></a>

```python
routing_mode: str
```

- *Type:* str

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#routing_mode NetworkServicesGateway#routing_mode}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.scope"></a>

```python
scope: str
```

- *Type:* str

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer.

Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#scope NetworkServicesGateway#scope}

---

##### `server_tls_policy`<sup>Optional</sup> <a name="server_tls_policy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.serverTlsPolicy"></a>

```python
server_tls_policy: str
```

- *Type:* str

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#server_tls_policy NetworkServicesGateway#server_tls_policy}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.subnetwork"></a>

```python
subnetwork: str
```

- *Type:* str

The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#subnetwork NetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.timeouts"></a>

```python
timeouts: NetworkServicesGatewayTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#timeouts NetworkServicesGateway#timeouts}

---

### NetworkServicesGatewayTimeouts <a name="NetworkServicesGatewayTimeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGatewayTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#create NetworkServicesGateway#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#update NetworkServicesGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#create NetworkServicesGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.0/docs/resources/network_services_gateway#update NetworkServicesGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesGatewayTimeoutsOutputReference <a name="NetworkServicesGatewayTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google import network_services_gateway

networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, NetworkServicesGatewayTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>]

---



