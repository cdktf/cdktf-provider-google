# `google_network_services_edge_cache_keyset`

Refer to the Terraform Registory for docs: [`google_network_services_edge_cache_keyset`](https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset).

# `networkServicesEdgeCacheKeyset` Submodule <a name="`networkServicesEdgeCacheKeyset` Submodule" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkServicesEdgeCacheKeyset <a name="NetworkServicesEdgeCacheKeyset" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset google_network_services_edge_cache_keyset}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeyset;

NetworkServicesEdgeCacheKeyset.Builder.create(Construct scope, java.lang.String id)
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .publicKey(IResolvable)
//  .publicKey(java.util.List<NetworkServicesEdgeCacheKeysetPublicKey>)
//  .timeouts(NetworkServicesEdgeCacheKeysetTimeouts)
//  .validationSharedKeys(IResolvable)
//  .validationSharedKeys(java.util.List<NetworkServicesEdgeCacheKeysetValidationSharedKeys>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#project NetworkServicesEdgeCacheKeyset#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.publicKey">publicKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>></code> | public_key block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.validationSharedKeys">validationSharedKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>></code> | validation_shared_keys block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#name NetworkServicesEdgeCacheKeyset#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#description NetworkServicesEdgeCacheKeyset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the EdgeCache resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#labels NetworkServicesEdgeCacheKeyset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#project NetworkServicesEdgeCacheKeyset#project}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.publicKey"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>>

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#public_key NetworkServicesEdgeCacheKeyset#public_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#timeouts NetworkServicesEdgeCacheKeyset#timeouts}

---

##### `validationSharedKeys`<sup>Optional</sup> <a name="validationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.Initializer.parameter.validationSharedKeys"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>>

validation_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#validation_shared_keys NetworkServicesEdgeCacheKeyset#validation_shared_keys}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putPublicKey">putPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putValidationSharedKeys">putValidationSharedKeys</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetPublicKey">resetPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetValidationSharedKeys">resetValidationSharedKeys</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putPublicKey` <a name="putPublicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putPublicKey"></a>

```java
public void putPublicKey(IResolvable OR java.util.List<NetworkServicesEdgeCacheKeysetPublicKey> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putPublicKey.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putTimeouts"></a>

```java
public void putTimeouts(NetworkServicesEdgeCacheKeysetTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a>

---

##### `putValidationSharedKeys` <a name="putValidationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putValidationSharedKeys"></a>

```java
public void putValidationSharedKeys(IResolvable OR java.util.List<NetworkServicesEdgeCacheKeysetValidationSharedKeys> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.putValidationSharedKeys.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublicKey` <a name="resetPublicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetPublicKey"></a>

```java
public void resetPublicKey()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidationSharedKeys` <a name="resetValidationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.resetValidationSharedKeys"></a>

```java
public void resetValidationSharedKeys()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeyset;

NetworkServicesEdgeCacheKeyset.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeyset;

NetworkServicesEdgeCacheKeyset.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeyset;

NetworkServicesEdgeCacheKeyset.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKey">publicKey</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList">NetworkServicesEdgeCacheKeysetPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference">NetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeys">validationSharedKeys</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList">NetworkServicesEdgeCacheKeysetValidationSharedKeysList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKeyInput">publicKeyInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput">validationSharedKeysInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKey"></a>

```java
public NetworkServicesEdgeCacheKeysetPublicKeyList getPublicKey();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList">NetworkServicesEdgeCacheKeysetPublicKeyList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeouts"></a>

```java
public NetworkServicesEdgeCacheKeysetTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference">NetworkServicesEdgeCacheKeysetTimeoutsOutputReference</a>

---

##### `validationSharedKeys`<sup>Required</sup> <a name="validationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeys"></a>

```java
public NetworkServicesEdgeCacheKeysetValidationSharedKeysList getValidationSharedKeys();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList">NetworkServicesEdgeCacheKeysetValidationSharedKeysList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publicKeyInput`<sup>Optional</sup> <a name="publicKeyInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.publicKeyInput"></a>

```java
public java.lang.Object getPublicKeyInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `validationSharedKeysInput`<sup>Optional</sup> <a name="validationSharedKeysInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.validationSharedKeysInput"></a>

```java
public java.lang.Object getValidationSharedKeysInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeyset.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkServicesEdgeCacheKeysetConfig <a name="NetworkServicesEdgeCacheKeysetConfig" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetConfig;

NetworkServicesEdgeCacheKeysetConfig.builder()
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
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .publicKey(IResolvable)
//  .publicKey(java.util.List<NetworkServicesEdgeCacheKeysetPublicKey>)
//  .timeouts(NetworkServicesEdgeCacheKeysetTimeouts)
//  .validationSharedKeys(IResolvable)
//  .validationSharedKeys(java.util.List<NetworkServicesEdgeCacheKeysetValidationSharedKeys>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.description">description</a></code> | <code>java.lang.String</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Set of label tags associated with the EdgeCache resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#project NetworkServicesEdgeCacheKeyset#project}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.publicKey">publicKey</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>></code> | public_key block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys">validationSharedKeys</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>></code> | validation_shared_keys block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#name NetworkServicesEdgeCacheKeyset#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#description NetworkServicesEdgeCacheKeyset#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Set of label tags associated with the EdgeCache resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#labels NetworkServicesEdgeCacheKeyset#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#project NetworkServicesEdgeCacheKeyset#project}.

---

##### `publicKey`<sup>Optional</sup> <a name="publicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.publicKey"></a>

```java
public java.lang.Object getPublicKey();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>>

public_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#public_key NetworkServicesEdgeCacheKeyset#public_key}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.timeouts"></a>

```java
public NetworkServicesEdgeCacheKeysetTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#timeouts NetworkServicesEdgeCacheKeyset#timeouts}

---

##### `validationSharedKeys`<sup>Optional</sup> <a name="validationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetConfig.property.validationSharedKeys"></a>

```java
public java.lang.Object getValidationSharedKeys();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>>

validation_shared_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#validation_shared_keys NetworkServicesEdgeCacheKeyset#validation_shared_keys}

---

### NetworkServicesEdgeCacheKeysetPublicKey <a name="NetworkServicesEdgeCacheKeysetPublicKey" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetPublicKey;

NetworkServicesEdgeCacheKeysetPublicKey.builder()
    .id(java.lang.String)
//  .managed(java.lang.Boolean)
//  .managed(IResolvable)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.id">id</a></code> | <code>java.lang.String</code> | The ID of the public key. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Set to true to have the CDN automatically manage this public key value. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.value">value</a></code> | <code>java.lang.String</code> | The base64-encoded value of the Ed25519 public key. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

The ID of the public key.

The ID must be 1-63 characters long, and comply with RFC1035.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]*
which means the first character must be a letter, and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#id NetworkServicesEdgeCacheKeyset#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Set to true to have the CDN automatically manage this public key value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#managed NetworkServicesEdgeCacheKeyset#managed}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The base64-encoded value of the Ed25519 public key.

The base64 encoding can be padded (44 bytes) or unpadded (43 bytes).
Representations or encodings of the public key other than this will be rejected with an error.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#value NetworkServicesEdgeCacheKeyset#value}

---

### NetworkServicesEdgeCacheKeysetTimeouts <a name="NetworkServicesEdgeCacheKeysetTimeouts" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetTimeouts;

NetworkServicesEdgeCacheKeysetTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#create NetworkServicesEdgeCacheKeyset#create}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#delete NetworkServicesEdgeCacheKeyset#delete}. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#update NetworkServicesEdgeCacheKeyset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#create NetworkServicesEdgeCacheKeyset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#delete NetworkServicesEdgeCacheKeyset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#update NetworkServicesEdgeCacheKeyset#update}.

---

### NetworkServicesEdgeCacheKeysetValidationSharedKeys <a name="NetworkServicesEdgeCacheKeysetValidationSharedKeys" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys;

NetworkServicesEdgeCacheKeysetValidationSharedKeys.builder()
    .secretVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | The name of the secret version in Secret Manager. |

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

The name of the secret version in Secret Manager.

The resource name of the secret version must be in the format 'projects/*/secrets/*/versions/*' where the '*' values are replaced by the secrets themselves.
The secrets must be at least 16 bytes large.  The recommended secret size depends on the signature algorithm you are using.
If you are using HMAC-SHA1, we suggest 20-byte secrets.
If you are using HMAC-SHA256, we suggest 32-byte secrets.
See RFC 2104, Section 3 for more details on these recommendations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.67.0/docs/resources/network_services_edge_cache_keyset#secret_version NetworkServicesEdgeCacheKeyset#secret_version}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkServicesEdgeCacheKeysetPublicKeyList <a name="NetworkServicesEdgeCacheKeysetPublicKeyList" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetPublicKeyList;

new NetworkServicesEdgeCacheKeysetPublicKeyList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.get"></a>

```java
public NetworkServicesEdgeCacheKeysetPublicKeyOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a>>

---


### NetworkServicesEdgeCacheKeysetPublicKeyOutputReference <a name="NetworkServicesEdgeCacheKeysetPublicKeyOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference;

new NetworkServicesEdgeCacheKeysetPublicKeyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetManaged"></a>

```java
public void resetManaged()
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput">managedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed">managed</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managedInput"></a>

```java
public java.lang.Object getManagedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.managed"></a>

```java
public java.lang.Object getManaged();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKeyOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetPublicKey">NetworkServicesEdgeCacheKeysetPublicKey</a> OR com.hashicorp.cdktf.IResolvable

---


### NetworkServicesEdgeCacheKeysetTimeoutsOutputReference <a name="NetworkServicesEdgeCacheKeysetTimeoutsOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference;

new NetworkServicesEdgeCacheKeysetTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetTimeouts">NetworkServicesEdgeCacheKeysetTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---


### NetworkServicesEdgeCacheKeysetValidationSharedKeysList <a name="NetworkServicesEdgeCacheKeysetValidationSharedKeysList" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList;

new NetworkServicesEdgeCacheKeysetValidationSharedKeysList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.get"></a>

```java
public NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a>>

---


### NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference <a name="NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.network_services_edge_cache_keyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference;

new NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput">secretVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion">secretVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionInput`<sup>Optional</sup> <a name="secretVersionInput" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersionInput"></a>

```java
public java.lang.String getSecretVersionInput();
```

- *Type:* java.lang.String

---

##### `secretVersion`<sup>Required</sup> <a name="secretVersion" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.secretVersion"></a>

```java
public java.lang.String getSecretVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeysOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.networkServicesEdgeCacheKeyset.NetworkServicesEdgeCacheKeysetValidationSharedKeys">NetworkServicesEdgeCacheKeysetValidationSharedKeys</a> OR com.hashicorp.cdktf.IResolvable

---



