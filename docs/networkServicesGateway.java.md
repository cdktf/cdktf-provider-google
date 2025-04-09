# `networkServicesGateway` Submodule <a name="`networkServicesGateway` Submodule" id="@cdktf/provider-google.networkServicesGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesGateway <a name="NetworkServicesGateway" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway google_network_services_gateway}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGateway;

NetworkServicesGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .ports(java.util.List<java.lang.Number>)
    .type(java.lang.String)
//  .addresses(java.util.List<java.lang.String>)
//  .certificateUrls(java.util.List<java.lang.String>)
//  .deleteSwgAutogenRouterOnDestroy(java.lang.Boolean)
//  .deleteSwgAutogenRouterOnDestroy(IResolvable)
//  .description(java.lang.String)
//  .envoyHeaders(java.lang.String)
//  .gatewaySecurityPolicy(java.lang.String)
//  .id(java.lang.String)
//  .ipVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .routingMode(java.lang.String)
//  .scope(java.lang.String)
//  .serverTlsPolicy(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(NetworkServicesGatewayTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.certificateUrls">certificateUrls</a></code> | <code>java.util.List<java.lang.String></code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.deleteSwgAutogenRouterOnDestroy">deleteSwgAutogenRouterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.envoyHeaders">envoyHeaders</a></code> | <code>java.lang.String</code> | Determines if envoy will insert internal debug headers into upstream requests. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>java.lang.String</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.routingMode">routingMode</a></code> | <code>java.lang.String</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#name NetworkServicesGateway#name}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ports"></a>

- *Type:* java.util.List<java.lang.Number>

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#ports NetworkServicesGateway#ports}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#type NetworkServicesGateway#type}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.addresses"></a>

- *Type:* java.util.List<java.lang.String>

Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic.

When no address is provided, an IP from the subnetwork is allocated.

This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#addresses NetworkServicesGateway#addresses}

---

##### `certificateUrls`<sup>Optional</sup> <a name="certificateUrls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.certificateUrls"></a>

- *Type:* java.util.List<java.lang.String>

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#certificate_urls NetworkServicesGateway#certificate_urls}

---

##### `deleteSwgAutogenRouterOnDestroy`<sup>Optional</sup> <a name="deleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.deleteSwgAutogenRouterOnDestroy"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#delete_swg_autogen_router_on_destroy NetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#description NetworkServicesGateway#description}

---

##### `envoyHeaders`<sup>Optional</sup> <a name="envoyHeaders" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.envoyHeaders"></a>

- *Type:* java.lang.String

Determines if envoy will insert internal debug headers into upstream requests.

Other Envoy headers may still be injected.
By default, envoy will not insert any debug headers. Possible values: ["NONE", "DEBUG_HEADERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#envoy_headers NetworkServicesGateway#envoy_headers}

---

##### `gatewaySecurityPolicy`<sup>Optional</sup> <a name="gatewaySecurityPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.gatewaySecurityPolicy"></a>

- *Type:* java.lang.String

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#gateway_security_policy NetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.ipVersion"></a>

- *Type:* java.lang.String

The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#ip_version NetworkServicesGateway#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#labels NetworkServicesGateway#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#location NetworkServicesGateway#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#network NetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.routingMode"></a>

- *Type:* java.lang.String

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#routing_mode NetworkServicesGateway#routing_mode}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer.

Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#scope NetworkServicesGateway#scope}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.serverTlsPolicy"></a>

- *Type:* java.lang.String

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#server_tls_policy NetworkServicesGateway#server_tls_policy}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#subnetwork NetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#timeouts NetworkServicesGateway#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetAddresses">resetAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetCertificateUrls">resetCertificateUrls</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy">resetDeleteSwgAutogenRouterOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetEnvoyHeaders">resetEnvoyHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetGatewaySecurityPolicy">resetGatewaySecurityPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetIpVersion">resetIpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetRoutingMode">resetRoutingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetScope">resetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetServerTlsPolicy">resetServerTlsPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesGatewayTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

---

##### `resetAddresses` <a name="resetAddresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetAddresses"></a>

```java
public void resetAddresses()
```

##### `resetCertificateUrls` <a name="resetCertificateUrls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetCertificateUrls"></a>

```java
public void resetCertificateUrls()
```

##### `resetDeleteSwgAutogenRouterOnDestroy` <a name="resetDeleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDeleteSwgAutogenRouterOnDestroy"></a>

```java
public void resetDeleteSwgAutogenRouterOnDestroy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnvoyHeaders` <a name="resetEnvoyHeaders" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetEnvoyHeaders"></a>

```java
public void resetEnvoyHeaders()
```

##### `resetGatewaySecurityPolicy` <a name="resetGatewaySecurityPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetGatewaySecurityPolicy"></a>

```java
public void resetGatewaySecurityPolicy()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetId"></a>

```java
public void resetId()
```

##### `resetIpVersion` <a name="resetIpVersion" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetIpVersion"></a>

```java
public void resetIpVersion()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetProject"></a>

```java
public void resetProject()
```

##### `resetRoutingMode` <a name="resetRoutingMode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetRoutingMode"></a>

```java
public void resetRoutingMode()
```

##### `resetScope` <a name="resetScope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetScope"></a>

```java
public void resetScope()
```

##### `resetServerTlsPolicy` <a name="resetServerTlsPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetServerTlsPolicy"></a>

```java
public void resetServerTlsPolicy()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesGateway resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGateway;

NetworkServicesGateway.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGateway;

NetworkServicesGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGateway;

NetworkServicesGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGateway;

NetworkServicesGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkServicesGateway resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference">NetworkServicesGatewayTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addressesInput">addressesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrlsInput">certificateUrlsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput">deleteSwgAutogenRouterOnDestroyInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeadersInput">envoyHeadersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicyInput">gatewaySecurityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersionInput">ipVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingModeInput">routingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicyInput">serverTlsPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrls">certificateUrls</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy">deleteSwgAutogenRouterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeaders">envoyHeaders</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingMode">routingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeouts"></a>

```java
public NetworkServicesGatewayTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference">NetworkServicesGatewayTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `addressesInput`<sup>Optional</sup> <a name="addressesInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addressesInput"></a>

```java
public java.util.List<java.lang.String> getAddressesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateUrlsInput`<sup>Optional</sup> <a name="certificateUrlsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrlsInput"></a>

```java
public java.util.List<java.lang.String> getCertificateUrlsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteSwgAutogenRouterOnDestroyInput`<sup>Optional</sup> <a name="deleteSwgAutogenRouterOnDestroyInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroyInput"></a>

```java
public java.lang.Object getDeleteSwgAutogenRouterOnDestroyInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `envoyHeadersInput`<sup>Optional</sup> <a name="envoyHeadersInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeadersInput"></a>

```java
public java.lang.String getEnvoyHeadersInput();
```

- *Type:* java.lang.String

---

##### `gatewaySecurityPolicyInput`<sup>Optional</sup> <a name="gatewaySecurityPolicyInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicyInput"></a>

```java
public java.lang.String getGatewaySecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipVersionInput`<sup>Optional</sup> <a name="ipVersionInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersionInput"></a>

```java
public java.lang.String getIpVersionInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `routingModeInput`<sup>Optional</sup> <a name="routingModeInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingModeInput"></a>

```java
public java.lang.String getRoutingModeInput();
```

- *Type:* java.lang.String

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `serverTlsPolicyInput`<sup>Optional</sup> <a name="serverTlsPolicyInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicyInput"></a>

```java
public java.lang.String getServerTlsPolicyInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `addresses`<sup>Required</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

---

##### `certificateUrls`<sup>Required</sup> <a name="certificateUrls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.certificateUrls"></a>

```java
public java.util.List<java.lang.String> getCertificateUrls();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deleteSwgAutogenRouterOnDestroy`<sup>Required</sup> <a name="deleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.deleteSwgAutogenRouterOnDestroy"></a>

```java
public java.lang.Object getDeleteSwgAutogenRouterOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `envoyHeaders`<sup>Required</sup> <a name="envoyHeaders" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.envoyHeaders"></a>

```java
public java.lang.String getEnvoyHeaders();
```

- *Type:* java.lang.String

---

##### `gatewaySecurityPolicy`<sup>Required</sup> <a name="gatewaySecurityPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.gatewaySecurityPolicy"></a>

```java
public java.lang.String getGatewaySecurityPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipVersion`<sup>Required</sup> <a name="ipVersion" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `routingMode`<sup>Required</sup> <a name="routingMode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.routingMode"></a>

```java
public java.lang.String getRoutingMode();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

##### `serverTlsPolicy`<sup>Required</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.serverTlsPolicy"></a>

```java
public java.lang.String getServerTlsPolicy();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesGatewayConfig <a name="NetworkServicesGatewayConfig" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGatewayConfig;

NetworkServicesGatewayConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
    .ports(java.util.List<java.lang.Number>)
    .type(java.lang.String)
//  .addresses(java.util.List<java.lang.String>)
//  .certificateUrls(java.util.List<java.lang.String>)
//  .deleteSwgAutogenRouterOnDestroy(java.lang.Boolean)
//  .deleteSwgAutogenRouterOnDestroy(IResolvable)
//  .description(java.lang.String)
//  .envoyHeaders(java.lang.String)
//  .gatewaySecurityPolicy(java.lang.String)
//  .id(java.lang.String)
//  .ipVersion(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .location(java.lang.String)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .routingMode(java.lang.String)
//  .scope(java.lang.String)
//  .serverTlsPolicy(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(NetworkServicesGatewayTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | One or more port numbers (1-65535), on which the Gateway will receive traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.type">type</a></code> | <code>java.lang.String</code> | Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.addresses">addresses</a></code> | <code>java.util.List<java.lang.String></code> | Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.certificateUrls">certificateUrls</a></code> | <code>java.util.List<java.lang.String></code> | A fully-qualified Certificates URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy">deleteSwgAutogenRouterOnDestroy</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.description">description</a></code> | <code>java.lang.String</code> | A free-text description of the resource. Max length 1024 characters. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.envoyHeaders">envoyHeaders</a></code> | <code>java.lang.String</code> | Determines if envoy will insert internal debug headers into upstream requests. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.gatewaySecurityPolicy">gatewaySecurityPolicy</a></code> | <code>java.lang.String</code> | A fully-qualified GatewaySecurityPolicy URL reference. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ipVersion">ipVersion</a></code> | <code>java.lang.String</code> | The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"]. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the Gateway resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the gateway. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.network">network</a></code> | <code>java.lang.String</code> | The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.routingMode">routingMode</a></code> | <code>java.lang.String</code> | The routing mode of the Gateway. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | Immutable. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.serverTlsPolicy">serverTlsPolicy</a></code> | <code>java.lang.String</code> | A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Gateway resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#name NetworkServicesGateway#name}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

One or more port numbers (1-65535), on which the Gateway will receive traffic.

The proxy binds to the specified ports. Gateways of type 'SECURE_WEB_GATEWAY' are limited to 1 port.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6 and support multiple ports.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#ports NetworkServicesGateway#ports}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Immutable. The type of the customer managed gateway. Possible values: ["OPEN_MESH", "SECURE_WEB_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#type NetworkServicesGateway#type}

---

##### `addresses`<sup>Optional</sup> <a name="addresses" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.addresses"></a>

```java
public java.util.List<java.lang.String> getAddresses();
```

- *Type:* java.util.List<java.lang.String>

Zero or one IPv4 or IPv6 address on which the Gateway will receive the traffic.

When no address is provided, an IP from the subnetwork is allocated.

This field only applies to gateways of type 'SECURE_WEB_GATEWAY'.
Gateways of type 'OPEN_MESH' listen on 0.0.0.0 for IPv4 and :: for IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#addresses NetworkServicesGateway#addresses}

---

##### `certificateUrls`<sup>Optional</sup> <a name="certificateUrls" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.certificateUrls"></a>

```java
public java.util.List<java.lang.String> getCertificateUrls();
```

- *Type:* java.util.List<java.lang.String>

A fully-qualified Certificates URL reference.

The proxy presents a Certificate (selected based on SNI) when establishing a TLS connection.
This feature only applies to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#certificate_urls NetworkServicesGateway#certificate_urls}

---

##### `deleteSwgAutogenRouterOnDestroy`<sup>Optional</sup> <a name="deleteSwgAutogenRouterOnDestroy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.deleteSwgAutogenRouterOnDestroy"></a>

```java
public java.lang.Object getDeleteSwgAutogenRouterOnDestroy();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

When deleting a gateway of type 'SECURE_WEB_GATEWAY', this boolean option will also delete auto generated router by the gateway creation.

If there is no other gateway of type 'SECURE_WEB_GATEWAY' remaining for that region and network it will be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#delete_swg_autogen_router_on_destroy NetworkServicesGateway#delete_swg_autogen_router_on_destroy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A free-text description of the resource. Max length 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#description NetworkServicesGateway#description}

---

##### `envoyHeaders`<sup>Optional</sup> <a name="envoyHeaders" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.envoyHeaders"></a>

```java
public java.lang.String getEnvoyHeaders();
```

- *Type:* java.lang.String

Determines if envoy will insert internal debug headers into upstream requests.

Other Envoy headers may still be injected.
By default, envoy will not insert any debug headers. Possible values: ["NONE", "DEBUG_HEADERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#envoy_headers NetworkServicesGateway#envoy_headers}

---

##### `gatewaySecurityPolicy`<sup>Optional</sup> <a name="gatewaySecurityPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.gatewaySecurityPolicy"></a>

```java
public java.lang.String getGatewaySecurityPolicy();
```

- *Type:* java.lang.String

A fully-qualified GatewaySecurityPolicy URL reference.

Defines how a server should apply security policy to inbound (VM to Proxy) initiated connections.
For example: 'projects/* /locations/* /gatewaySecurityPolicies/swg-policy'.
This policy is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#gateway_security_policy NetworkServicesGateway#gateway_security_policy}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#id NetworkServicesGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipVersion`<sup>Optional</sup> <a name="ipVersion" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.ipVersion"></a>

```java
public java.lang.String getIpVersion();
```

- *Type:* java.lang.String

The IP Version that will be used by this gateway. Possible values: ["IPV4", "IPV6"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#ip_version NetworkServicesGateway#ip_version}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the Gateway resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#labels NetworkServicesGateway#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the gateway. The default value is 'global'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#location NetworkServicesGateway#location}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The relative resource name identifying the VPC network that is using this configuration. For example: 'projects/* /global/networks/network-1'.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#network NetworkServicesGateway#network}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#project NetworkServicesGateway#project}.

---

##### `routingMode`<sup>Optional</sup> <a name="routingMode" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.routingMode"></a>

```java
public java.lang.String getRoutingMode();
```

- *Type:* java.lang.String

The routing mode of the Gateway.

This field is configurable only for gateways of type SECURE_WEB_GATEWAY. This field is required for gateways of type SECURE_WEB_GATEWAY. Possible values: ["NEXT_HOP_ROUTING_MODE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#routing_mode NetworkServicesGateway#routing_mode}

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

Immutable.

Scope determines how configuration across multiple Gateway instances are merged.
The configuration for multiple Gateway instances with the same scope will be merged as presented as a single coniguration to the proxy/load balancer.

Max length 64 characters. Scope should start with a letter and can only have letters, numbers, hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#scope NetworkServicesGateway#scope}

---

##### `serverTlsPolicy`<sup>Optional</sup> <a name="serverTlsPolicy" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.serverTlsPolicy"></a>

```java
public java.lang.String getServerTlsPolicy();
```

- *Type:* java.lang.String

A fully-qualified ServerTLSPolicy URL reference. Specifies how TLS traffic is terminated. If empty, TLS termination is disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#server_tls_policy NetworkServicesGateway#server_tls_policy}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The relative resource name identifying the subnetwork in which this SWG is allocated. For example: projects/* /regions/us-central1/subnetworks/network-1.

Currently, this field is specific to gateways of type 'SECURE_WEB_GATEWAY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#subnetwork NetworkServicesGateway#subnetwork}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayConfig.property.timeouts"></a>

```java
public NetworkServicesGatewayTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#timeouts NetworkServicesGateway#timeouts}

---

### NetworkServicesGatewayTimeouts <a name="NetworkServicesGatewayTimeouts" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGatewayTimeouts;

NetworkServicesGatewayTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#create NetworkServicesGateway#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#update NetworkServicesGateway#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#create NetworkServicesGateway#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#delete NetworkServicesGateway#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.29.0/docs/resources/network_services_gateway#update NetworkServicesGateway#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesGatewayTimeoutsOutputReference <a name="NetworkServicesGatewayTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_gateway.NetworkServicesGatewayTimeoutsOutputReference;

new NetworkServicesGatewayTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesGateway.NetworkServicesGatewayTimeouts">NetworkServicesGatewayTimeouts</a>

---



