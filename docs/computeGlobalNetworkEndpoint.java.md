# `google_compute_global_network_endpoint`

Refer to the Terraform Registory for docs: [`google_compute_global_network_endpoint`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint).

# `computeGlobalNetworkEndpoint` Submodule <a name="`computeGlobalNetworkEndpoint` Submodule" id="@cdktf/provider-google.computeGlobalNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeGlobalNetworkEndpoint <a name="ComputeGlobalNetworkEndpoint" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint google_compute_global_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint.ComputeGlobalNetworkEndpoint;

ComputeGlobalNetworkEndpoint.Builder.create(Construct scope, java.lang.String id)
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
    .globalNetworkEndpointGroup(java.lang.String)
    .port(java.lang.Number)
//  .fqdn(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeGlobalNetworkEndpointTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.globalNetworkEndpointGroup">globalNetworkEndpointGroup</a></code> | <code>java.lang.String</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalNetworkEndpointGroup`<sup>Required</sup> <a name="globalNetworkEndpointGroup" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.globalNetworkEndpointGroup"></a>

- *Type:* java.lang.String

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#global_network_endpoint_group ComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#port ComputeGlobalNetworkEndpoint#port}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.fqdn"></a>

- *Type:* java.lang.String

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#fqdn ComputeGlobalNetworkEndpoint#fqdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.ipAddress"></a>

- *Type:* java.lang.String

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#ip_address ComputeGlobalNetworkEndpoint#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#timeouts ComputeGlobalNetworkEndpoint#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetFqdn">resetFqdn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetIpAddress">resetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts"></a>

```java
public void putTimeouts(ComputeGlobalNetworkEndpointTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

---

##### `resetFqdn` <a name="resetFqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetFqdn"></a>

```java
public void resetFqdn()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetId"></a>

```java
public void resetId()
```

##### `resetIpAddress` <a name="resetIpAddress" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetIpAddress"></a>

```java
public void resetIpAddress()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint.ComputeGlobalNetworkEndpoint;

ComputeGlobalNetworkEndpoint.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint.ComputeGlobalNetworkEndpoint;

ComputeGlobalNetworkEndpoint.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint.ComputeGlobalNetworkEndpoint;

ComputeGlobalNetworkEndpoint.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference">ComputeGlobalNetworkEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdnInput">fqdnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput">globalNetworkEndpointGroupInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddressInput">ipAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup">globalNetworkEndpointGroup</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeouts"></a>

```java
public ComputeGlobalNetworkEndpointTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference">ComputeGlobalNetworkEndpointTimeoutsOutputReference</a>

---

##### `fqdnInput`<sup>Optional</sup> <a name="fqdnInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdnInput"></a>

```java
public java.lang.String getFqdnInput();
```

- *Type:* java.lang.String

---

##### `globalNetworkEndpointGroupInput`<sup>Optional</sup> <a name="globalNetworkEndpointGroupInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroupInput"></a>

```java
public java.lang.String getGlobalNetworkEndpointGroupInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `ipAddressInput`<sup>Optional</sup> <a name="ipAddressInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddressInput"></a>

```java
public java.lang.String getIpAddressInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

---

##### `fqdn`<sup>Required</sup> <a name="fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

---

##### `globalNetworkEndpointGroup`<sup>Required</sup> <a name="globalNetworkEndpointGroup" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.globalNetworkEndpointGroup"></a>

```java
public java.lang.String getGlobalNetworkEndpointGroup();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `ipAddress`<sup>Required</sup> <a name="ipAddress" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpoint.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeGlobalNetworkEndpointConfig <a name="ComputeGlobalNetworkEndpointConfig" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint.ComputeGlobalNetworkEndpointConfig;

ComputeGlobalNetworkEndpointConfig.builder()
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
    .globalNetworkEndpointGroup(java.lang.String)
    .port(java.lang.Number)
//  .fqdn(java.lang.String)
//  .id(java.lang.String)
//  .ipAddress(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeGlobalNetworkEndpointTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup">globalNetworkEndpointGroup</a></code> | <code>java.lang.String</code> | The global network endpoint group this endpoint is part of. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Port number of the external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.fqdn">fqdn</a></code> | <code>java.lang.String</code> | Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.ipAddress">ipAddress</a></code> | <code>java.lang.String</code> | IPv4 address external endpoint. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `globalNetworkEndpointGroup`<sup>Required</sup> <a name="globalNetworkEndpointGroup" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.globalNetworkEndpointGroup"></a>

```java
public java.lang.String getGlobalNetworkEndpointGroup();
```

- *Type:* java.lang.String

The global network endpoint group this endpoint is part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#global_network_endpoint_group ComputeGlobalNetworkEndpoint#global_network_endpoint_group}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port number of the external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#port ComputeGlobalNetworkEndpoint#port}

---

##### `fqdn`<sup>Optional</sup> <a name="fqdn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.fqdn"></a>

```java
public java.lang.String getFqdn();
```

- *Type:* java.lang.String

Fully qualified domain name of network endpoint. This can only be specified when network_endpoint_type of the NEG is INTERNET_FQDN_PORT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#fqdn ComputeGlobalNetworkEndpoint#fqdn}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#id ComputeGlobalNetworkEndpoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ipAddress`<sup>Optional</sup> <a name="ipAddress" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.ipAddress"></a>

```java
public java.lang.String getIpAddress();
```

- *Type:* java.lang.String

IPv4 address external endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#ip_address ComputeGlobalNetworkEndpoint#ip_address}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#project ComputeGlobalNetworkEndpoint#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointConfig.property.timeouts"></a>

```java
public ComputeGlobalNetworkEndpointTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#timeouts ComputeGlobalNetworkEndpoint#timeouts}

---

### ComputeGlobalNetworkEndpointTimeouts <a name="ComputeGlobalNetworkEndpointTimeouts" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint.ComputeGlobalNetworkEndpointTimeouts;

ComputeGlobalNetworkEndpointTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#create ComputeGlobalNetworkEndpoint#create}. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#delete ComputeGlobalNetworkEndpoint#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#create ComputeGlobalNetworkEndpoint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/compute_global_network_endpoint#delete ComputeGlobalNetworkEndpoint#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeGlobalNetworkEndpointTimeoutsOutputReference <a name="ComputeGlobalNetworkEndpointTimeoutsOutputReference" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.compute_global_network_endpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference;

new ComputeGlobalNetworkEndpointTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-google.computeGlobalNetworkEndpoint.ComputeGlobalNetworkEndpointTimeouts">ComputeGlobalNetworkEndpointTimeouts</a>

---



