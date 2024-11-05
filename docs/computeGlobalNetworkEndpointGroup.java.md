# `computeGlobalNetworkEndpointGroup` Submodule <a name="`computeGlobalNetworkEndpointGroup` Submodule" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalNetworkEndpointGroup <a name="ComputeGlobalNetworkEndpointGroup" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group google_compute_global_network_endpoint_group}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroup;

ComputeGlobalNetworkEndpointGroup.Builder.create(Construct scope, java.lang.String id)
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
    .networkEndpointType(java.lang.String)
//  .defaultPort(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeGlobalNetworkEndpointGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.defaultPort">defaultPort</a></code> | <code>java.lang.Number</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#name ComputeGlobalNetworkEndpointGroup#name}

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.networkEndpointType"></a>

- *Type:* java.lang.String

Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#network_endpoint_type ComputeGlobalNetworkEndpointGroup#network_endpoint_type}

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.defaultPort"></a>

- *Type:* java.lang.Number

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#default_port ComputeGlobalNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#description ComputeGlobalNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#timeouts ComputeGlobalNetworkEndpointGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDefaultPort">resetDefaultPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.putTimeouts"></a>

```java
public void putTimeouts(ComputeGlobalNetworkEndpointGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>

---

##### `resetDefaultPort` <a name="resetDefaultPort" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDefaultPort"></a>

```java
public void resetDefaultPort()
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ComputeGlobalNetworkEndpointGroup resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroup;

ComputeGlobalNetworkEndpointGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroup;

ComputeGlobalNetworkEndpointGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroup;

ComputeGlobalNetworkEndpointGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroup;

ComputeGlobalNetworkEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeGlobalNetworkEndpointGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a ComputeGlobalNetworkEndpointGroup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeGlobalNetworkEndpointGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeGlobalNetworkEndpointGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the ComputeGlobalNetworkEndpointGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference">ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPortInput">defaultPortInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointTypeInput">networkEndpointTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPort">defaultPort</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeouts"></a>

```java
public ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference">ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference</a>

---

##### `defaultPortInput`<sup>Optional</sup> <a name="defaultPortInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPortInput"></a>

```java
public java.lang.Number getDefaultPortInput();
```

- *Type:* java.lang.Number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkEndpointTypeInput`<sup>Optional</sup> <a name="networkEndpointTypeInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointTypeInput"></a>

```java
public java.lang.String getNetworkEndpointTypeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>

---

##### `defaultPort`<sup>Required</sup> <a name="defaultPort" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.defaultPort"></a>

```java
public java.lang.Number getDefaultPort();
```

- *Type:* java.lang.Number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalNetworkEndpointGroupConfig <a name="ComputeGlobalNetworkEndpointGroupConfig" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroupConfig;

ComputeGlobalNetworkEndpointGroupConfig.builder()
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
    .networkEndpointType(java.lang.String)
//  .defaultPort(java.lang.Number)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeGlobalNetworkEndpointGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.networkEndpointType">networkEndpointType</a></code> | <code>java.lang.String</code> | Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"]. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.defaultPort">defaultPort</a></code> | <code>java.lang.Number</code> | The default port used if the port number is not specified in the network endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#name ComputeGlobalNetworkEndpointGroup#name}

---

##### `networkEndpointType`<sup>Required</sup> <a name="networkEndpointType" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.networkEndpointType"></a>

```java
public java.lang.String getNetworkEndpointType();
```

- *Type:* java.lang.String

Type of network endpoints in this network endpoint group. Possible values: ["INTERNET_IP_PORT", "INTERNET_FQDN_PORT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#network_endpoint_type ComputeGlobalNetworkEndpointGroup#network_endpoint_type}

---

##### `defaultPort`<sup>Optional</sup> <a name="defaultPort" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.defaultPort"></a>

```java
public java.lang.Number getDefaultPort();
```

- *Type:* java.lang.Number

The default port used if the port number is not specified in the network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#default_port ComputeGlobalNetworkEndpointGroup#default_port}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#description ComputeGlobalNetworkEndpointGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#id ComputeGlobalNetworkEndpointGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#project ComputeGlobalNetworkEndpointGroup#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupConfig.property.timeouts"></a>

```java
public ComputeGlobalNetworkEndpointGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#timeouts ComputeGlobalNetworkEndpointGroup#timeouts}

---

### ComputeGlobalNetworkEndpointGroupTimeouts <a name="ComputeGlobalNetworkEndpointGroupTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroupTimeouts;

ComputeGlobalNetworkEndpointGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#create ComputeGlobalNetworkEndpointGroup#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#delete ComputeGlobalNetworkEndpointGroup#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#create ComputeGlobalNetworkEndpointGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.10.0/docs/resources/compute_global_network_endpoint_group#delete ComputeGlobalNetworkEndpointGroup#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference <a name="ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint_group.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference;

new ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpointGroup.ComputeGlobalNetworkEndpointGroupTimeouts">ComputeGlobalNetworkEndpointGroupTimeouts</a>

---



