# `networkConnectivityRegionalEndpoint` Submodule <a name="`networkConnectivityRegionalEndpoint` Submodule" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkConnectivityRegionalEndpoint <a name="NetworkConnectivityRegionalEndpoint" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint google_network_connectivity_regional_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpoint;

NetworkConnectivityRegionalEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .accessType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .targetGoogleApi(java.lang.String)
//  .address(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(NetworkConnectivityRegionalEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.accessType">accessType</a></code> | <code>java.lang.String</code> | The access type of this regional endpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.targetGoogleApi">targetGoogleApi</a></code> | <code>java.lang.String</code> | The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\". |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.address">address</a></code> | <code>java.lang.String</code> | The IP Address of the Regional Endpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.accessType"></a>

- *Type:* java.lang.String

The access type of this regional endpoint.

This field is reflected in the PSC Forwarding Rule configuration to enable global access. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#access_type NetworkConnectivityRegionalEndpoint#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#location NetworkConnectivityRegionalEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#name NetworkConnectivityRegionalEndpoint#name}

---

##### `targetGoogleApi`<sup>Required</sup> <a name="targetGoogleApi" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.targetGoogleApi"></a>

- *Type:* java.lang.String

The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#target_google_api NetworkConnectivityRegionalEndpoint#target_google_api}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.address"></a>

- *Type:* java.lang.String

The IP Address of the Regional Endpoint.

When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in '10.0.0.1' * Address resource URI as in 'projects/{project}/regions/{region}/addresses/{address_name}'

~> **Note:** This field accepts both a reference to a Compute Address resource, which is the resource name of which format is given in the description, and IP literal value. If the user chooses to input a reserved address value; they need to make sure that the reserved address is in IPv4 version, its purpose is GCE_ENDPOINT, its type is INTERNAL and its status is RESERVED. If the user chooses to input an IP literal, they need to make sure that it's a valid IPv4 address (x.x.x.x) within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#address NetworkConnectivityRegionalEndpoint#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#description NetworkConnectivityRegionalEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#labels NetworkConnectivityRegionalEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.network"></a>

- *Type:* java.lang.String

The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#network NetworkConnectivityRegionalEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.subnetwork"></a>

- *Type:* java.lang.String

The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#subnetwork NetworkConnectivityRegionalEndpoint#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#timeouts NetworkConnectivityRegionalEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts"></a>

```java
public void putTimeouts(NetworkConnectivityRegionalEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetProject"></a>

```java
public void resetProject()
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetSubnetwork"></a>

```java
public void resetSubnetwork()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NetworkConnectivityRegionalEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpoint;

NetworkConnectivityRegionalEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpoint;

NetworkConnectivityRegionalEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpoint;

NetworkConnectivityRegionalEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpoint;

NetworkConnectivityRegionalEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NetworkConnectivityRegionalEndpoint.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a NetworkConnectivityRegionalEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NetworkConnectivityRegionalEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NetworkConnectivityRegionalEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the NetworkConnectivityRegionalEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.effectiveLabels">effectiveLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.pscForwardingRule">pscForwardingRule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformLabels">terraformLabels</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference">NetworkConnectivityRegionalEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessTypeInput">accessTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.addressInput">addressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.networkInput">networkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetworkInput">subnetworkInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput">targetGoogleApiInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessType">accessType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.address">address</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.network">network</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApi">targetGoogleApi</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `pscForwardingRule`<sup>Required</sup> <a name="pscForwardingRule" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.pscForwardingRule"></a>

```java
public java.lang.String getPscForwardingRule();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeouts"></a>

```java
public NetworkConnectivityRegionalEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference">NetworkConnectivityRegionalEndpointTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `accessTypeInput`<sup>Optional</sup> <a name="accessTypeInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessTypeInput"></a>

```java
public java.lang.String getAccessTypeInput();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.addressInput"></a>

```java
public java.lang.String getAddressInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.networkInput"></a>

```java
public java.lang.String getNetworkInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetworkInput"></a>

```java
public java.lang.String getSubnetworkInput();
```

- *Type:* java.lang.String

---

##### `targetGoogleApiInput`<sup>Optional</sup> <a name="targetGoogleApiInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApiInput"></a>

```java
public java.lang.String getTargetGoogleApiInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

---

##### `targetGoogleApi`<sup>Required</sup> <a name="targetGoogleApi" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.targetGoogleApi"></a>

```java
public java.lang.String getTargetGoogleApi();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkConnectivityRegionalEndpointConfig <a name="NetworkConnectivityRegionalEndpointConfig" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpointConfig;

NetworkConnectivityRegionalEndpointConfig.builder()
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
    .accessType(java.lang.String)
    .location(java.lang.String)
    .name(java.lang.String)
    .targetGoogleApi(java.lang.String)
//  .address(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .network(java.lang.String)
//  .project(java.lang.String)
//  .subnetwork(java.lang.String)
//  .timeouts(NetworkConnectivityRegionalEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.accessType">accessType</a></code> | <code>java.lang.String</code> | The access type of this regional endpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the RegionalEndpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi">targetGoogleApi</a></code> | <code>java.lang.String</code> | The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\". |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.address">address</a></code> | <code>java.lang.String</code> | The IP Address of the Regional Endpoint. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.description">description</a></code> | <code>java.lang.String</code> | A description of this resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | User-defined labels. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.network">network</a></code> | <code>java.lang.String</code> | The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.subnetwork">subnetwork</a></code> | <code>java.lang.String</code> | The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `accessType`<sup>Required</sup> <a name="accessType" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.accessType"></a>

```java
public java.lang.String getAccessType();
```

- *Type:* java.lang.String

The access type of this regional endpoint.

This field is reflected in the PSC Forwarding Rule configuration to enable global access. Possible values: ["GLOBAL", "REGIONAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#access_type NetworkConnectivityRegionalEndpoint#access_type}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#location NetworkConnectivityRegionalEndpoint#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the RegionalEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#name NetworkConnectivityRegionalEndpoint#name}

---

##### `targetGoogleApi`<sup>Required</sup> <a name="targetGoogleApi" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.targetGoogleApi"></a>

```java
public java.lang.String getTargetGoogleApi();
```

- *Type:* java.lang.String

The service endpoint this private regional endpoint connects to. Format: '{apiname}.{region}.p.rep.googleapis.com' Example: \"cloudkms.us-central1.p.rep.googleapis.com\".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#target_google_api NetworkConnectivityRegionalEndpoint#target_google_api}

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.address"></a>

```java
public java.lang.String getAddress();
```

- *Type:* java.lang.String

The IP Address of the Regional Endpoint.

When no address is provided, an IP from the subnetwork is allocated. Use one of the following formats: * IPv4 address as in '10.0.0.1' * Address resource URI as in 'projects/{project}/regions/{region}/addresses/{address_name}'

~> **Note:** This field accepts both a reference to a Compute Address resource, which is the resource name of which format is given in the description, and IP literal value. If the user chooses to input a reserved address value; they need to make sure that the reserved address is in IPv4 version, its purpose is GCE_ENDPOINT, its type is INTERNAL and its status is RESERVED. If the user chooses to input an IP literal, they need to make sure that it's a valid IPv4 address (x.x.x.x) within the subnetwork.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#address NetworkConnectivityRegionalEndpoint#address}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#description NetworkConnectivityRegionalEndpoint#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#id NetworkConnectivityRegionalEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

User-defined labels.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#labels NetworkConnectivityRegionalEndpoint#labels}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.network"></a>

```java
public java.lang.String getNetwork();
```

- *Type:* java.lang.String

The name of the VPC network for this private regional endpoint. Format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#network NetworkConnectivityRegionalEndpoint#network}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#project NetworkConnectivityRegionalEndpoint#project}.

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.subnetwork"></a>

```java
public java.lang.String getSubnetwork();
```

- *Type:* java.lang.String

The name of the subnetwork from which the IP address will be allocated. Format: 'projects/{project}/regions/{region}/subnetworks/{subnetwork}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#subnetwork NetworkConnectivityRegionalEndpoint#subnetwork}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointConfig.property.timeouts"></a>

```java
public NetworkConnectivityRegionalEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#timeouts NetworkConnectivityRegionalEndpoint#timeouts}

---

### NetworkConnectivityRegionalEndpointTimeouts <a name="NetworkConnectivityRegionalEndpointTimeouts" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpointTimeouts;

NetworkConnectivityRegionalEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#create NetworkConnectivityRegionalEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#delete NetworkConnectivityRegionalEndpoint#delete}. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#update NetworkConnectivityRegionalEndpoint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#create NetworkConnectivityRegionalEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#delete NetworkConnectivityRegionalEndpoint#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.34.1/docs/resources/network_connectivity_regional_endpoint#update NetworkConnectivityRegionalEndpoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkConnectivityRegionalEndpointTimeoutsOutputReference <a name="NetworkConnectivityRegionalEndpointTimeoutsOutputReference" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_connectivity_regional_endpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference;

new NetworkConnectivityRegionalEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.networkConnectivityRegionalEndpoint.NetworkConnectivityRegionalEndpointTimeouts">NetworkConnectivityRegionalEndpointTimeouts</a>

---



