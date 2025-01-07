# `networkServicesAuthzExtension` Submodule <a name="`networkServicesAuthzExtension` Submodule" id="@cdktf/provider-google.networkServicesAuthzExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesAuthzExtension <a name="NetworkServicesAuthzExtension" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension google_network_services_authz_extension}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtension;

NetworkServicesAuthzExtension.Builder.create(Construct scope, java.lang.String id)
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
    .authority(java.lang.String)
    .loadBalancingScheme(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .service(java.lang.String)
    .timeout(java.lang.String)
//  .description(java.lang.String)
//  .failOpen(java.lang.Boolean)
//  .failOpen(IResolvable)
//  .forwardHeaders(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesAuthzExtensionTimeouts)
//  .wireFormat(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.authority">authority</a></code> | <code>java.lang.String</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.service">service</a></code> | <code>java.lang.String</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.timeout">timeout</a></code> | <code>java.lang.String</code> | Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of the HTTP headers to forward to the extension (from the client). |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#id NetworkServicesAuthzExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#project NetworkServicesAuthzExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.wireFormat">wireFormat</a></code> | <code>java.lang.String</code> | The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"]. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.authority"></a>

- *Type:* java.lang.String

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#authority NetworkServicesAuthzExtension#authority}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.loadBalancingScheme"></a>

- *Type:* java.lang.String

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#load_balancing_scheme NetworkServicesAuthzExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#location NetworkServicesAuthzExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Identifier. Name of the AuthzExtension resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#name NetworkServicesAuthzExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.service"></a>

- *Type:* java.lang.String

The reference to the service that runs the extension.

To configure a callout extension, service must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format:
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService} or https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#service NetworkServicesAuthzExtension#service}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.timeout"></a>

- *Type:* java.lang.String

Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#timeout NetworkServicesAuthzExtension#timeout}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#description NetworkServicesAuthzExtension#description}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.failOpen"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to FALSE or the default setting of FALSE is used, one of the following happens:

* If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
* If response headers have been delivered, then the HTTP stream to the downstream client is reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#fail_open NetworkServicesAuthzExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.forwardHeaders"></a>

- *Type:* java.util.List<java.lang.String>

List of the HTTP headers to forward to the extension (from the client).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#forward_headers NetworkServicesAuthzExtension#forward_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#id NetworkServicesAuthzExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#labels NetworkServicesAuthzExtension#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.metadata"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:.

{forwarding_rule_id} - substituted with the forwarding rule's fully qualified resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#metadata NetworkServicesAuthzExtension#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#project NetworkServicesAuthzExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#timeouts NetworkServicesAuthzExtension#timeouts}

---

##### `wireFormat`<sup>Optional</sup> <a name="wireFormat" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.Initializer.parameter.wireFormat"></a>

- *Type:* java.lang.String

The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#wire_format NetworkServicesAuthzExtension#wire_format}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetForwardHeaders">resetForwardHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetWireFormat">resetWireFormat</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesAuthzExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetForwardHeaders` <a name="resetForwardHeaders" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetForwardHeaders"></a>

```java
public void resetForwardHeaders()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetWireFormat` <a name="resetWireFormat" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.resetWireFormat"></a>

```java
public void resetWireFormat()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkServicesAuthzExtension resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtension;

NetworkServicesAuthzExtension.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtension;

NetworkServicesAuthzExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtension;

NetworkServicesAuthzExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtension;

NetworkServicesAuthzExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkServicesAuthzExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkServicesAuthzExtension resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkServicesAuthzExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkServicesAuthzExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkServicesAuthzExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference">NetworkServicesAuthzExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authorityInput">authorityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeadersInput">forwardHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingSchemeInput">loadBalancingSchemeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadataInput">metadataInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutInput">timeoutInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormatInput">wireFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authority">authority</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeout">timeout</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormat">wireFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeouts"></a>

```java
public NetworkServicesAuthzExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference">NetworkServicesAuthzExtensionTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `authorityInput`<sup>Optional</sup> <a name="authorityInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authorityInput"></a>

```java
public java.lang.String getAuthorityInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpenInput"></a>

```java
public java.lang.Object getFailOpenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardHeadersInput`<sup>Optional</sup> <a name="forwardHeadersInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeadersInput"></a>

```java
public java.util.List<java.lang.String> getForwardHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingSchemeInput`<sup>Optional</sup> <a name="loadBalancingSchemeInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingSchemeInput"></a>

```java
public java.lang.String getLoadBalancingSchemeInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadataInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutInput"></a>

```java
public java.lang.String getTimeoutInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

---

##### `wireFormatInput`<sup>Optional</sup> <a name="wireFormatInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormatInput"></a>

```java
public java.lang.String getWireFormatInput();
```

- *Type:* java.lang.String

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `forwardHeaders`<sup>Required</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

---

##### `wireFormat`<sup>Required</sup> <a name="wireFormat" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.wireFormat"></a>

```java
public java.lang.String getWireFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesAuthzExtensionConfig <a name="NetworkServicesAuthzExtensionConfig" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtensionConfig;

NetworkServicesAuthzExtensionConfig.builder()
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
    .authority(java.lang.String)
    .loadBalancingScheme(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .service(java.lang.String)
    .timeout(java.lang.String)
//  .description(java.lang.String)
//  .failOpen(java.lang.Boolean)
//  .failOpen(IResolvable)
//  .forwardHeaders(java.util.List<java.lang.String>)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .metadata(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(NetworkServicesAuthzExtensionTimeouts)
//  .wireFormat(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.authority">authority</a></code> | <code>java.lang.String</code> | The :authority header in the gRPC request sent from Envoy to the extension service. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.loadBalancingScheme">loadBalancingScheme</a></code> | <code>java.lang.String</code> | All backend services and forwarding rules referenced by this extension must share the same load balancing scheme. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Identifier. Name of the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.service">service</a></code> | <code>java.lang.String</code> | The reference to the service that runs the extension. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeout">timeout</a></code> | <code>java.lang.String</code> | Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines how the proxy behaves if the call to the extension fails or times out. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forwardHeaders">forwardHeaders</a></code> | <code>java.util.List<java.lang.String></code> | List of the HTTP headers to forward to the extension (from the client). |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#id NetworkServicesAuthzExtension#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of labels associated with the AuthzExtension resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.metadata">metadata</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#project NetworkServicesAuthzExtension#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.wireFormat">wireFormat</a></code> | <code>java.lang.String</code> | The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"]. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `authority`<sup>Required</sup> <a name="authority" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.authority"></a>

```java
public java.lang.String getAuthority();
```

- *Type:* java.lang.String

The :authority header in the gRPC request sent from Envoy to the extension service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#authority NetworkServicesAuthzExtension#authority}

---

##### `loadBalancingScheme`<sup>Required</sup> <a name="loadBalancingScheme" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.loadBalancingScheme"></a>

```java
public java.lang.String getLoadBalancingScheme();
```

- *Type:* java.lang.String

All backend services and forwarding rules referenced by this extension must share the same load balancing scheme.

For more information, refer to [Backend services overview](https://cloud.google.com/load-balancing/docs/backend-service). Possible values: ["INTERNAL_MANAGED", "EXTERNAL_MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#load_balancing_scheme NetworkServicesAuthzExtension#load_balancing_scheme}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#location NetworkServicesAuthzExtension#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Identifier. Name of the AuthzExtension resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#name NetworkServicesAuthzExtension#name}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The reference to the service that runs the extension.

To configure a callout extension, service must be a fully-qualified reference to a [backend service](https://cloud.google.com/compute/docs/reference/rest/v1/backendServices) in the format:
https://www.googleapis.com/compute/v1/projects/{project}/regions/{region}/backendServices/{backendService} or https://www.googleapis.com/compute/v1/projects/{project}/global/backendServices/{backendService}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#service NetworkServicesAuthzExtension#service}

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeout"></a>

```java
public java.lang.String getTimeout();
```

- *Type:* java.lang.String

Specifies the timeout for each individual message on the stream. The timeout must be between 10-10000 milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#timeout NetworkServicesAuthzExtension#timeout}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#description NetworkServicesAuthzExtension#description}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.failOpen"></a>

```java
public java.lang.Object getFailOpen();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines how the proxy behaves if the call to the extension fails or times out.

When set to TRUE, request or response processing continues without error. Any subsequent extensions in the extension chain are also executed. When set to FALSE or the default setting of FALSE is used, one of the following happens:

* If response headers have not been delivered to the downstream client, a generic 500 error is returned to the client. The error response can be tailored by configuring a custom error response in the load balancer.
* If response headers have been delivered, then the HTTP stream to the downstream client is reset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#fail_open NetworkServicesAuthzExtension#fail_open}

---

##### `forwardHeaders`<sup>Optional</sup> <a name="forwardHeaders" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.forwardHeaders"></a>

```java
public java.util.List<java.lang.String> getForwardHeaders();
```

- *Type:* java.util.List<java.lang.String>

List of the HTTP headers to forward to the extension (from the client).

If omitted, all headers are sent. Each element is a string indicating the header name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#forward_headers NetworkServicesAuthzExtension#forward_headers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#id NetworkServicesAuthzExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of labels associated with the AuthzExtension resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#labels NetworkServicesAuthzExtension#labels}

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.metadata"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadata();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The metadata provided here is included as part of the metadata_context (of type google.protobuf.Struct) in the ProcessingRequest message sent to the extension server. The metadata is available under the namespace com.google.authz_extension.<resourceName>. The following variables are supported in the metadata Struct:.

{forwarding_rule_id} - substituted with the forwarding rule's fully qualified resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#metadata NetworkServicesAuthzExtension#metadata}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#project NetworkServicesAuthzExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.timeouts"></a>

```java
public NetworkServicesAuthzExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#timeouts NetworkServicesAuthzExtension#timeouts}

---

##### `wireFormat`<sup>Optional</sup> <a name="wireFormat" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionConfig.property.wireFormat"></a>

```java
public java.lang.String getWireFormat();
```

- *Type:* java.lang.String

The format of communication supported by the callout extension. Default value: "EXT_PROC_GRPC" Possible values: ["WIRE_FORMAT_UNSPECIFIED", "EXT_PROC_GRPC"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#wire_format NetworkServicesAuthzExtension#wire_format}

---

### NetworkServicesAuthzExtensionTimeouts <a name="NetworkServicesAuthzExtensionTimeouts" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtensionTimeouts;

NetworkServicesAuthzExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#create NetworkServicesAuthzExtension#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#delete NetworkServicesAuthzExtension#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#update NetworkServicesAuthzExtension#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#create NetworkServicesAuthzExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#delete NetworkServicesAuthzExtension#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.15.0/docs/resources/network_services_authz_extension#update NetworkServicesAuthzExtension#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesAuthzExtensionTimeoutsOutputReference <a name="NetworkServicesAuthzExtensionTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_authz_extension.NetworkServicesAuthzExtensionTimeoutsOutputReference;

new NetworkServicesAuthzExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkServicesAuthzExtension.NetworkServicesAuthzExtensionTimeouts">NetworkServicesAuthzExtensionTimeouts</a>

---



